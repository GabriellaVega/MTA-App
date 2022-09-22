require("dotenv").config()
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
var GtfsRealtimeBindings = require('gtfs-realtime-bindings');
const request = require("request");

const server = express();
server.use(bodyParser.urlencoded({extended:true}));
const apiKey = process.env.apiKey;
const url = "https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-ace";

server.get("/", function(req, res) {

    https.get(url, { headers: { "x-api-key": apiKey}}, (resp) => {
        console.log(resp.statusCode);
        var data = [];
        resp.on('data', (chunk) => {
          console.log("Receiving Data");
          data.push(chunk)
        });
        resp.on('end', () => {
            console.log("Finished receiving data");
            data = Buffer.concat(data);
            var feed = GtfsRealtimeBindings.transit_realtime.FeedMessage.decode(data);
            feed.entity.forEach(function(entity) {
                console.log(entity);
                if (entity.trip_update) {
                    console.log(entity.trip_update);
                }
            });
        });
      }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}); 

server.listen(3000, function() {
  console.log("Server is running on port 3000.");
});
