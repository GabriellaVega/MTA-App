import express from "express";
import { createClient } from "redis";

const client = createClient({
  socket: {
    host:"localhost", 
    port: 6379, 
    db: 1
  }
});

client.on('error', (err) => console.log('Redis Client Error', err));
await client.connect();

const app = express();

app.get("/", function(req, res) {
  console.log("here");
})

app.get("/getTrains/:stopID", async function(req, res) {
  const stopID = req.params.stopID;
  console.log(stopID);
  // client.zRangeByScore(stopID, 0, (err, res) => {
  //   if (err) {
  //     console.log("in error");
  //     console.log(err);
  //   } else {
  //     console.log("it worked!", res);
  //   }
  // });

  await client.zScan(stopID, 0);
});

app.listen(3000, function() {
  console.log("Server is running on port 3000.");
});
