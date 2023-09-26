# leaflet-challenge

## Background
The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this challenge, you have been tasked with developing a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet. 

## Project Steps
### Part 1
> Create the Earthquake Visualization
Visualize an earthquake dataset.
1. Obtain your dataset.
   * The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the [USGS GeoJSON Feed](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page and choose a dataset to visualize.
   * When you click a dataset (such as "All Earthquakes from the Past 7 Days"), you will be given a JSON representation of that data. Use the URL of this JSON to pull in the data for the visualization.
2. Import and visualize the data.
   * Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.
     * Your data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.
     * **Hint:** The depth of the earth can be found as the third coordinate for each earthquake.
   * Include popups that provide additional information about the earthquake when its associated marker is clicked.
   * Create a legend that will provide context for your map data.
   * Your visualization should look something like the preceding map.
  
### Map Features
- [x] TileLayer loads 
- [x] Connects to geojson API using D3
- [x] Markers with size corresponding to earthquake magnitude
- [x] A legend showing the depth and their corresponding color

### Data Points
- [x] Data points scale with magnitude level
- [x] Data points colors change with depth level
- [x] Each point has a tooltip with the Magnitude, location and depth
- [x] All data points load in the correct locations
