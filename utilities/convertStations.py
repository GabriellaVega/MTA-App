import csv
import json
import sys

data = []

with open(sys.argv[1], 'r') as csvf:
    csvReader = csv.DictReader(csvf)

    jsonFilePath = sys.argv[1].rsplit(".")[0] + ".json"

    for row in csvReader:
        add = {}
        add["GTFS Stop ID"] = row["GTFS Stop ID"]
        add["Stop Name"] = row["Stop Name"]
        add["Daytime Routes"] = row["Daytime Routes"]
        data.append(add)

# Open a json writer, and use the json.dumps()
# function to dump data
with open(jsonFilePath, 'w', encoding='utf-8') as jsonf:
    jsonf.write(json.dumps(data, indent=4))
