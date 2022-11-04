import express from "express";
import { createClient } from "redis";
import cors from "cors";

const client = createClient({
  database: 1
}); 
  

client.on('error', (err) => console.log('Redis Client Error', err));
await client.connect();

const app = express();

app.use(cors());

app.get("/", function(req, res) {
  console.log("ur in");
  res.send("You are connected!");
})

app.get("/getTrains/:stopID", async function(req, res) {
  const stopID = req.params.stopID;
  const data = await client.zScan(stopID, 0);
  res.send(data);
});

app.listen(3000, function() {
  console.log("Server is running on port 3000.");
});
