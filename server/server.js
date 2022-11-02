const express = require("express");
const https = require("https");
const Redis = require("redis")

const client = Redis.createClient()
client.on('error', (err) => console.log('Redis Client Error', err));

const server = express();

const url = "https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-ace";


server.get("/", function(req, res) {
  console.log("here");
})
// server.get("getTrains/:stopID", function(req, res) {
//   // console.log(req.params.stopID)

server.listen(3000, function() {
  console.log("Server is running on port 3000.");
});
