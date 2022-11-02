from google.transit import gtfs_realtime_pb2
import requests
import os
from dotenv import load_dotenv
import redis
import time

def update_vehicles(stop_id, arrivalTime, trip_id):
    r.zadd(stop_id, {trip_id: arrivalTime})
    return

def getMinutes(arrivalTime, currentTime):
    epochSecondsAway = arrivalTime - currentTime
    h, m = time.strftime("%H:%M", time.gmtime(epochSecondsAway)).split(":")
    return (int(h) * 60) + int(m)

r = redis.Redis(host='localhost', port=6379, db=1)
r.flushdb()
load_dotenv()
apiKey = os.getenv("apiKey")
prefix = "https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs"
suffixes = ["-ace", "-g", "-nqrw", "", "-bdfm", "-jz", "-l", "-si"]

for suffix in suffixes:
    url = prefix + suffix
    feed = gtfs_realtime_pb2.FeedMessage()
    response = requests.get(url, headers={"x-api-key": apiKey})
    feed.ParseFromString(response.content)

    for entity in feed.entity:
        if entity.HasField('vehicle'):
            update_vehicles(entity.vehicle.stop_id, 0, entity.vehicle.trip.trip_id)
        else:
            for stop_time_update in entity.trip_update.stop_time_update:
                minutesAway = getMinutes(stop_time_update.arrival.time, time.time())
                update_vehicles(stop_time_update.stop_id, minutesAway, entity.trip_update.trip.trip_id)
        
# code.interact(local=locals())




