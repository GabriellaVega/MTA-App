import csv
import sys
import redis

r = redis.Redis(host='localhost', port=6379, db=0)

with open(sys.argv[1], 'r') as csv_file:
    reader = csv.DictReader(csv_file)

    for row in reader:
        r.hset(row["GTFS Stop ID"] + "N", mapping=
        {
            "Train Line" : row["Daytime Routes"],
            "Stop Name" : row["Stop Name"],
            "Line" : row["Line"],
            "North Direction Label" : row["North Direction Label"]
        })

        r.hset(row["GTFS Stop ID"] + "S", mapping=
        {
            "Train Line" : row["Daytime Routes"],
            "Stop Name" : row["Stop Name"],
            "Line" : row["Line"],
            "South Direction Label" : row["South Direction Label"]
        })