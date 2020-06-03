const fs = require("fs");
const turf = require("@turf/turf");
const debug = require("debug");

const networksToProcess = [
    8410,
    8670,
    32118,
    51947,
    116285,
    116286,
    116287,
    146923,
    155047,
    157868,
    172106,
    191372,
    207888,
    228602,
    271299,
    277377,
    277674,
    278295,
    281457,
    305534,
    377995,
    918387,
    934714,
    1022939,
    1025391,
    1027095,
    1027349,
    1050335,
    1057518,
    1059986,
    1060385,
    1061479,
    1061480,
    1066154,
    1074495,
    1074658,
    1086605,
    1100324,
    1106360,
    1110274,
    1110275,
    1112273,
    1112471,
    1115318,
    1120802,
    1174059,
    1184197,
    1203658,
    1341164,
    1504091,
    1595466,
    1595511,
    1608798,
    1609454,
    1649286,
    1656411,
    1686272,
    1686330,
    1686979,
    1729060,
    1729250,
    1734279,
    1734281,
    1734282,
    1734283,
    1734284,
    1734285,
    1734288,
    1734292,
    1734294,
    1734295,
    1734297,
    1736598,
    1738333,
    1740981,
    1741517,
    1741536,
    1747782,
    1829871,
    1851919,
    1852352,
    1900584,
    2048535,
    2052939,
    2073165,
    2184046,
    2272098,
    2407988,
    2567359,
    3278906,
    3734957,
    3921610,
    4128428,
    4257206,
    5818951,
    5822625,
    5916006,
    6305492,
    6475168,
    6573287,
    6580215,
    6863562,
    7161180,
    7260675,
    7303723,
    7574739,
    7592211,
    7593643,
    7599486,
    7605817,
    7623205,
    7649596,
    7651826,
    7708926,
    7787125,
    7801259,
    7832319,
    8441146,
    8496753,
    8801845,
    9447784,
    9462680,
    9529754,
    9574712,
    9678695,
    9681847,
    9684148,
    9760697,
    9760698,
    9760699,
    9830852,
    9831020,
    9837019,
    9844786,
    9894645,
    9953110,
    10010606,
    10514412,
    10572031,
    10953719,
    10982229,
    10996719,
];
const processedNodes = {};
const processedRoutes = {};
const networks = {
    type: "FeatureCollection",
    features: [],
}

networksToProcess.forEach(networkId => {
    const networkNodes = require(`./data/nodes-${networkId}.json`);

    networkNodes.features.forEach(({geometry, properties}) => {
        geometry.coordinates = geometry.coordinates.reverse();

        if (processedNodes[properties.id]) {
            return;
        }
        processedNodes[properties.id] = {
            id: properties.id,
            number: properties.name,
            location: geometry.coordinates,
            connections: []
        }
    });

    // generate networks.json
    const networkPolygon = turf.concave(networkNodes);
    networkPolygon.properties.id = networkId;
    networks.features.push(networkPolygon);

});
console.info(`Saving ${networks.features.length} networks to dist/networks.json`);
fs.writeFileSync("./dist/networks.json", JSON.stringify(networks));

networksToProcess.forEach(networkId => {
    const networkRoutes = require(`./data/routes-${networkId}.json`);
    networkRoutes.features.forEach(feature => {
        const id = `${feature.properties.begin_geoid}-${feature.properties.end_geoid}`;
        const reversedId = `${feature.properties.end_geoid}-${feature.properties.begin_geoid}`;

        feature.properties.distance = parseInt(feature.properties.distance);
        feature.properties.pid = id;
        feature.geometry.coordinates = feature.geometry.coordinates.map(coords => coords.reverse());

        // add route to begin point
        const beginNode = processedNodes[feature.properties.begin_geoid]
        const endNode = processedNodes[feature.properties.end_geoid]

        if (!beginNode) {
            debug(`Begin node ${feature.properties.begin_geoid} missing for route ${id} (network ${networkId})`);
            return;
        }
        if (!endNode) {
            debug(`End node ${feature.properties.end_geoid} missing for route ${id} (network ${networkId})`);
            return;
        }
        if (processedRoutes[reversedId]) {
            // duplicate route
            return;
        }

        processedRoutes[id] = feature;
        // begin route to end point
        if (!beginNode.connections.find(connection => connection.route === id)) {
            beginNode.connections.push({
                id: endNode.id,
                number: endNode.number,
                location: endNode.location,
                distance: feature.properties.distance,
                route: id,
            })
        }

        // add route to end point
        if (!endNode.connections.find(connection => connection.route === id)) {
            endNode.connections.push({
                id: beginNode.id,
                number: beginNode.number,
                location: beginNode.location,
                distance: feature.properties.distance,
                route: id,
            })
        }
    })
    console.info(`Saving ${networkRoutes.features.length} routes to ./dist/routes_${networkId}.json`);
    fs.writeFileSync(`./dist/routes_${networkId}.json`, JSON.stringify(networkRoutes));
});
networksToProcess.forEach(networkId => {
    const networkNodes = require(`./data/nodes-${networkId}.json`);

    const nodes = networkNodes.features.map(({geometry, properties}) => processedNodes[properties.id]);
    console.info(`Saving ${nodes.length} nodes to ./dist/nodes_${networkId}.json`);
    fs.writeFileSync(`./dist/nodes_${networkId}.json`, JSON.stringify(nodes));
});
