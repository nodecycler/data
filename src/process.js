// ensures fetch is available as a global
require("cross-fetch/polyfill");
require("isomorphic-form-data");
const fs = require("fs");
const { queryFeatures} = require("@esri/arcgis-rest-feature-layer");

const fetchRoutes = queryFeatures({
  url: "http://trip.toerismevlaanderen.be/arcgis/rest/services/routes/fietsnetwerk/MapServer/3",
//  where: "mobility = 'Fiets'",
  f: "geojson",
});
const fetchNodes = queryFeatures({
  url: "http://trip.toerismevlaanderen.be/arcgis/rest/services/routes/fietsnetwerk/MapServer/0",
//  where: "mobility = 'Fiets'",
  f: "geojson",
});

Promise.all([fetchRoutes, fetchNodes])
  .then(([routes, nodes]) => {
    const processedNodes = {};

    nodes.features.forEach(({properties, geometry}) => {
      processedNodes[properties.geoid.toString()] = {
        id: properties.geoid.toString(),
        number: properties.knoopnr,
        connections: [],
        location: geometry.coordinates,
      }
    });

    routes.features.forEach(({properties, geometry}) => {
      fs.writeFileSync(`./dist/routes/${properties.pid}.json`, JSON.stringify(
        Object.assign(
          {},
          routes,
          {
            features: [{properties, geometry}]
          }
        )
      ));

      const nodeBegin = processedNodes[properties.begin_geoid];
      const nodeEnd = processedNodes[properties.end_geoid];

      if (nodeBegin && nodeEnd) {
        nodeBegin.connections.push({
          route: properties.pid,
          distance: properties.Shape_Length,
          id: nodeEnd.id,
          number: nodeEnd.number,
          location: nodeEnd.location,
        });
        nodeEnd.connections.push({
          route: properties.pid,
          distance: properties.Shape_Length,
          id: nodeBegin.id,
          number: nodeBegin.number,
          location: nodeEnd.location,
        });
      } else {
        console.warn("node not found for route ", properties.pid);
      }
    });
    fs.writeFileSync("./dist/nodes.json", JSON.stringify(Object.values(processedNodes)));
  })
  .catch(error => {
    console.error(error);
  });
