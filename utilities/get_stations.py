from google.transit import gtfs_realtime_pb2
import requests
import os
from dotenv import load_dotenv
import redis
import code
import time

def update_vehicles(stop, arrivalTime, route):
    station_info = r.hgetall(stop)

    vehicle1 = (station_info.get(b"vehicle1", None), station_info.get(b"route_id1", None))
    vehicle2 = (station_info.get(b"vehicle2", None), station_info.get(b"route_id2", None))
    vehicle3 = (station_info.get(b"vehicle3", None), station_info.get(b"route_id3", None))
    
    # code.interact(local=locals())
    
    # add them to database
    if vehicle1[0] == None:
        r.hset(stop, mapping=
        {
            "vehicle1" : arrivalTime,
            "route_id1": route
        })
    elif vehicle2[0] == None:
        r.hset(stop, mapping=
        {
            "vehicle2" : arrivalTime,
            "route_id2": route
        })
    elif vehicle3[0] == None:
        r.hset(stop, mapping=
        {
            "vehicle3" : arrivalTime,
            "route_id3": route
        })
    else:
        vehicles = [vehicle1, vehicle2, vehicle3]
        vehicles.sort(key=lambda x:x[0])

        # print(vehicles)
        if arrivalTime < int(vehicles[2][0]):
            vehicles[2] = (arrivalTime, route)
        if int(vehicles[2][0]) < int(vehicles[1][0]):
            vehicles[1], vehicles[2] = vehicles[2], vehicles[1]
        if int(vehicles[1][0]) < int(vehicles[0][0]):
            vehicles[0], vehicles[1] = vehicles[1], vehicles[0]

        r.hset(stop, mapping=
        {
            "vehicle1" : vehicles[0][0],
            "route_id1": vehicles[0][1],
            "vehicle2" : vehicles[1][0],
            "route_id2": vehicles[1][1],
            "vehicle3" : vehicles[2][0],
            "route_id3": vehicles[2][1],
        })
    return

    

url = "https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-ace"
r = redis.Redis(host='localhost', port=6379, db=0)

load_dotenv()
apiKey = os.getenv("apiKey")
feed = gtfs_realtime_pb2.FeedMessage()
response = requests.get(url, headers={"x-api-key": apiKey})
feed.ParseFromString(response.content)

# code.interact(local=locals())
for entity in feed.entity:
    if entity.HasField('vehicle'):
        update_vehicles(entity.vehicle.stop_id, 0, entity.vehicle.trip.route_id)
    else:
        for stop_time_update in entity.trip_update.stop_time_update:
            # print(stop_time_update.stop_id, stop_time_update.arrival.time, entity.trip_update.trip.route_id)
            arrivalTime = stop_time_update.arrival.time
            currentTime = time.time()
            arrivalTimeString = time.strftime("%b %d %Y %H:%M:%S", time.localtime(arrivalTime))
            currentTimeString = time.strftime("%b %d %Y %H:%M:%S", time.localtime(currentTime))
            epochSecondsAway = arrivalTime - currentTime
            epochSecondsAwayString = time.strftime("%b %d %Y %H:%M:%S", time.localtime(epochSecondsAway))
            minutesAway = time.localtime(epochSecondsAway).tm_min

            print("Arrival Time:", arrivalTime, arrivalTimeString)
            print("Current Time:", currentTime, currentTimeString)
            print("Subtracted:", epochSecondsAway, epochSecondsAwayString)

            update_vehicles(stop_time_update.stop_id, stop_time_update.arrival.time, entity.trip_update.trip.route_id)
    
# code.interact(local=locals())




