(ns cwo.server
  (:use [compojure.core :only (defroutes GET)])
  (:require [compojure.route :as route]
            [ring.middleware.file :as ring-file]
            [ring.middleware.reload :as reload]
            [aleph.core]
            [aleph.http :as aleph]
            [lamina.core :as lamina]
            [noir.server :as noir])
  (:gen-class))

(def broadcast-channel (lamina/permanent-channel))

(defn socket-handler [ch handshake]
  (lamina/siphon ch broadcast-channel)
  (lamina/siphon broadcast-channel ch))

; Need user.dir for Java policy file
(noir/add-middleware ring-file/wrap-file (System/getProperty "user.dir"))

; Load noir views and get handler
(noir/load-views-ns 'cwo.views.noir)
(def noir-handler (noir/gen-handler {:mode :dev :ns 'cwo}))

; Define routes for Websocket, noir, and static resources routes
(defroutes handler
  (GET "/socket/:handle" [handle] ((println "websocket for handle" handle)
                                   aleph/wrap-aleph-handler socket-handler))
  noir-handler
  (route/resources "/"))

; Add aleph handler and start server
(defn -main []
  (let [port 8080]
    (aleph/start-http-server 
      (aleph/wrap-ring-handler handler) {:port port :websocket true})
    (println "server started on port" port)))
