import express from "express";
import { createClient } from "redis";

const client = createClient({
  database: 1
}); 
  

client.on('error', (err) => console.log('Redis Client Error', err));
await client.connect();

const app = express();

app.get("/", function(req, res) {
  res.send("App");
})

app.get("/getTrains/:stopID", async function(req, res) {
  const stopID = req.params.stopID;
  const data = await client.zScan(stopID, 0);
  res.send(data);
});

app.listen(3000, function() {
  console.log("Server is running on port 3000.");
});
