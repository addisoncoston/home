import pandas as pd
import json
import time

# Loop through the years 2023 to 2020
for year in range(2023, 2019, -1):
    url = f"https://www.nflpenalties.com/index.php?view=total&year={year}"
    tables = pd.read_html(url, attrs = {'class': 'footable'})
    
    # Convert the table to JSON format
    json_data = tables[0].to_json(orient='records')
    
    # Write JSON data to a file
    file_name = f"nfl_penalties_{year}.json"
    with open(file_name, 'w') as file:
        file.write(json_data)
    
    time.sleep(1)





# import pandas as pd

# tables = pd.read_html("https://www.nflpenalties.com/index.php?view=total&year=2013", attrs = {'class': 'footable'})
# print(tables[0])


# League stats by year
# https://www.nflpenalties.com/index.php?view=total&year=YYYY

# All Pentalies
# https://www.nflpenalties.com/all-penalties.php?year=YYYY

# Players
# https://www.nflpenalties.com/all-players.php?year=YYYY