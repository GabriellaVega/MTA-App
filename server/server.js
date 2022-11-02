// require("dotenv").config()
const express = require("express");
const https = require("https");
// const GtfsRealtimeBindings = require("gtfs-realtime-bindings");
// const bodyParser = require("body-parser");
const Redis = require("redis")

const client = Redis.createClient()
client.on('error', (err) => console.log('Redis Client Error', err));

const server = express();
// server.use(bodyParser.urlencoded({extended:true}));

const url = "https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-ace";


server.get("/", function(req, res) {
  console.log("here");
})
// server.get("getTrains/:stopID", function(req, res) {
//   // console.log(req.params.stopID)
//   console.log("here")
//   client.hgetall(req.params.stop, function(err, object) {
//     if (err) {
//       console.log(err);
//     }
//     console.log(object);
//   })
// }); 

server.listen(3000, function() {
  console.log("Server is running on port 3000.");
});
