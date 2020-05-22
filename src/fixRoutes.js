const routes = require("../dist/routes.json");
const fs = require("fs");
// remove duplicate routes
const routePids = routes.features.map(route => route.properties.pid);
routes.features = routes.features.filter(route => {
    const pid = route.properties.pid;
    if (!pid.includes("_")) {
        return true;
    }
    const [prefix, version] = pid.split("_");
    // check if newer version exists
    const newPid = `${prefix}_${parseInt(version) + 1}`;
    return !routePids.includes(newPid);
});

// number 67 problem
// - replace 3408079 > 3618218
const routeTo67 = routes.features.find(route => route.properties.pid === "3408016-3408079_2");
routeTo67.properties.end_geoid = "3618218";

// Missing route 67 > 04
const lineString = [[4.6079717, 50.9999694], [4.6099805, 50.9993713], [4.6119353, 50.9993169], [4.6134041, 51.0000918], [4.6137173, 50.9999694], [4.6172057, 51.0014783], [4.6165361, 51.0031366], [4.6165361, 51.0033336], [4.6172597, 51.0035239], [4.6167305, 51.0048696], [4.6179509, 51.0067588], [4.6182425, 51.0068947], [4.6188905, 51.0066976], [4.6193873, 51.0072889], [4.6240205, 51.0063782], [4.6249385, 51.0078393], [4.6267313, 51.007418], [4.6270337, 51.0082402], [4.6300469, 51.0082062], [4.6296041, 51.0104623], [4.6305977, 51.0112845], [4.6314077, 51.0123717], [4.6319369, 51.0135743], [4.6319693, 51.0156671], [4.6332761, 51.0160951], [4.6341833, 51.0169104], [4.6353065, 51.01742], [4.6364729, 51.0176985], [4.6394105, 51.0179499], [4.6386005, 51.0191932], [4.6459229, 51.0210275], [4.6452857, 51.0216865], [4.6504697, 51.023378], [4.6498865, 51.0243834], [4.6518413, 51.0258982], [4.6523489, 51.0268696], [4.6532561, 51.0268221]];
routes.features.push({
        properties: {
            "eigenaar": "Node cycler",
            "mobility": "Fiets",
            "pid": "3618218-3638253",
            "begin_geoid": "3618218",
            "end_geoid": "3638253",
            "routetype": "route",
            "naam": "Fietsnetwerk ontbrekend knooppunt 67 > 04",
            "updatedate": "2020-05-22",
            "Shape_Length": 5685.648367184197
        },
    geometry: {
            "type": "LineString",
            "coordinates": lineString
        }
});
// Save changes to disk
fs.writeFileSync("./dist/routes.json", JSON.stringify(routes));

routes.features.forEach(({properties, geometry}) => {
    // Generate route files
    fs.writeFileSync(`./dist/routes/${properties.pid}.json`, JSON.stringify(
        Object.assign(
            {},
            routes,
            {
                features: [{properties, geometry}]
            }
        )
    ));
});
