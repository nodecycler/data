const fs = require("fs");
const nodes = require("../dist/nodes.json");
const routes = require("../dist/routes.json");

// Reset all connections
const processedNodes = {};
nodes.forEach(node => {
    node.connections = [];
    processedNodes[node.id] = node;
})

routes.features.forEach(({properties}) => {

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
})
// Save changes to disk
fs.writeFileSync("./dist/nodes.json", JSON.stringify(Object.values(processedNodes)));
