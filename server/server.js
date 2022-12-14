import express from "express";
import { createClient } from "redis";
import cors from "cors";
import { exec } from "child_process";

const client = createClient({
  database: 1
}); 
  

client.on('error', (err) => console.log('Redis Client Error', err));
await client.connect();


setInterval( () => {
  exec("python3 utilities/reload_data.py")
  console.log("reloaded data");
}, 60000);

const app = express();

app.use(cors());

app.get("/", function(req, res) {
  console.log("ur in");
  res.send("You are connected!");
})

app.get("/getTrains/:stopID", async function(req, res) {
  const stopID = req.params.stopID;
  const data = await client.zScan(stopID, 0);
  
  const returnValue = data.members.map((train) => ({
    line : train.value[train.value.length - 4],
    time : train.score
  }));
  res.send(returnValue);
});

app.listen(3000, function() {
  console.log("Server is running on port 3000.");
});
