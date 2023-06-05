
# World History Events React app

Allows users to search for world history events. 

## Data:
Data will be sourced from [Historical Events API](https://api-ninjas.com/api/historicalevents). It returns 
up to 10 events that match search parameters. 

### example of the JSON data:
```
[
  {
    "year": "1974",  
    "month": "01",  
    "day": "02",  
    "event": "United States President Richard Nixon signs a bill lowering the maximum U.S. speed limit to 55 MPH in order to conserve gasoline during an OPEC embargo."  
  }
]
```

## Wireframe:

<img src="./world-history.png" width="500" height="600">

## Components:

There are three components on the app:  
1. **EventsApp**: contains the entire app.
-  **SearchBar**: received user input. -**no longer a separate component, during development it was designed as part of the root App component**
2. **EventsTable**: contains all historical events results.
3. **EventBox**: displays one historical event.

<img src="./world-history-components.png" width="500" height="600">


Components hierarchy: 

1. **EventsApp**: contains the entire app
    1. **SearchBar**: received user input -**no longer a separate component, during development it was designed as part of the root App component**
    2. **EventsTable**: contains all historical events results
        1. **EventBox**: displays one historical event
