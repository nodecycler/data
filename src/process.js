/*
Networks in Belgium
======================

116285	Fietsnetwerk Zeeuws-Vlaanderen Oost
116286	Fietsroutenetwerk Meetjesland
116287	Fietsroutenetwerk Waasland
146923	Fietsnetwerk Zeeuws-Vlaanderen West
155047	Fietsroutenetwerk B Limburg
207888	Fietsroutenetwerk B Kempen Zuid
377995	Fietsroutenetwerk B Limburg: Voerstreek
1086605	Brabantse Delta
1106360	Fietsnetwerk Kempen
1110274	Fietsnetwerk Sittard
1120802	Fietsnetwerk De Baronie
1656411	VeloTour Hohes Venn - Eifel
1686979	Fietsroutenetwerk B Hageland
1729060	Fietsroutenetwerk B Groene Gordel Dijleland
1729250	Fietsroutenetwerk B Brabantse Kouters
1734279	Fietsroutenetwerk Brugse Ommeland
1734281	Fietsroutenetwerk B Kempen Noord
1734282	Fietsroutenetwerk B Kempen Oost
1734283	Fietsroutenetwerk B Kempen West
1734284	Fietsroutenetwerk Kust
1734285	Fietsroutenetwerk Leiestreek Oost-Vlaanderen
1734288	Fietsroutenetwerk Leiestreek West-Vlaanderen
1734292	Fietsroutenetwerk B Pajottenland
1734294	Fietsroutenetwerk B Scheldeland Denderstreek
1734295	Fietsroutenetwerk B Scheldeland West
1734297	Fietsroutenetwerk Vlaamse Ardennen
1736598	Fietsroutenetwerk B Hageland Droog Haspengouw
1738333	Fietsroutenetwerk Westhoek
1740981	Fietsroutenetwerk B Antwerpen Scheldeland
1741517	Fietsroutenetwerk B Kalmthoutse Heide
1741536	Fietsroutenetwerk B Voorkempen
1747782	Knotenpunktnetzwerk Städteregion Aachen
2407988	Fietsnetwerk Zuid-Limburg
2567359	Pays de Famenne à vélo
4128428	La Wallonie Picarde à Vélo
6475168	1000 Bornes à Vélo Région Hainaut-Est
7161180	Le Brabant wallon à vélo
7303723	Points-noeuds en Province de Liège
9529754	"Réseau Point-Noeud, Vallée de la Lys & Monts des Flandres"
9894645	Vhello
const networksToProcess = [116285, 116286, 116287, 146923, 155047, 207888, 377995, 1086605, 1106360, 1110274, 1120802,
    1656411, 1686979, 1729060, 1729250, 1734279, 1734281, 1734282, 1734283, 1734284, 1734285, 1734288, 1734292,
    1734294, 1734295, 1734297, 1736598, 1738333, 1740981, 1741517, 1741536, 1747782, 2407988, 2567359, 4128428,
    6475168, 7161180, 7303723, 9529754, 9894645,
];

*/
/*
Networks in Netherlands
=========================

8410	Fietsnetwerk Amstelland - Meerlanden
8670	Fietsnetwerk Land van Peel en Maas
32118	Fietsnetwerk Regio Eindhoven 'De Peel'
51947	Fietsnetwerk Altena Biesbosch
116285	Fietsnetwerk Zeeuws-Vlaanderen Oost
116287	Fietsroutenetwerk Waasland
146923	Fietsnetwerk Zeeuws-Vlaanderen West
155047	Fietsroutenetwerk B Limburg
157868	Fietsnetwerk Gooi en Vechtstreek
172106	Fietsnetwerk Veluwe
191372	Fietsnetwerk WaterReijk
228602	Fietsnetwerk West-Friesland
271299	Fietsnetwerk Laag-Holland
277377	Fietsnetwerk Zuidoost-Fryslân
277674	Fietsnetwerk Zuidwest-Fryslân
278295	Fietsnetwerk Noordwest-Fryslân
281457	Fietsnetwerk Noordoost-Fryslân
305534	Fietsnetwerk Noord-Kennemerland
377995	Fietsroutenetwerk B Limburg: Voerstreek
918387	Fietsnetwerk Kop van Noord-Holland
934714	Stadsregio Arnhem Nijmegen
1022939	Fietsnetwerk Reeuwijkse Plassen
1025391	Fietsnetwerk Walcheren / Noord-Beveland
1027095	Fietsnetwerk Zuid-Beveland en Tholen
1027349	Fietsnetwerk De Maasduinen
1050335	Fietsnetwerk Schouwen-Duiveland
1057518	Fietsnetwerk Goeree-Overflakkee
1059986	Fietsnetwerk Drenthe
1060385	Fietsnetwerk Noordoost-Brabant
1061479	Fietsnetwerk Midden-Brabant
1061480	Fietsnetwerk Het Groene Woud
1066154	Fietsnetwerk Achterhoek
1074495	Fietsnetwerk Alblasserwaard-Vijfheerenlanden
1074658	Fietsnetwerk Salland
1086605	Brabantse Delta
1100324	Fietsnetwerk De Wijde Biesbosch
1106360	Fietsnetwerk Kempen
1110274	Fietsnetwerk Sittard
1110275	Fietsnetwerk Brunssum
1112273	Fietsnetwerk Rivierenland
1112471	Fietsnetwerk Zuid-Kennemerland
1115318	Fietsnetwerk Provincie Utrecht
1120802	Fietsnetwerk De Baronie
1174059	Fietsnetwerk Duin- en Bollenstreek
1184197	Fietsnetwerk Groene Hart
1203658	Fietsnetwerk Twente
1341164	Fietsnetwerk Vechtdal Overijssel
1595466	Fietsnetwerk IJmond
1595511	Fietsnetwerk Flevoland
1608798	IJsseldelta
1609454	Fietsnetwerk Krimpenerwaard
1649286	Fietsnetwerk Groningen
1686272	Fietsnetwerk Texel
1686330	Fietsnetwerk Hoeksche Waard
1734279	Fietsroutenetwerk Brugse Ommeland
1734281	Fietsroutenetwerk B Kempen Noord
1734284	Fietsroutenetwerk Kust
1741517	Fietsroutenetwerk B Kalmthoutse Heide
1747782	Knotenpunktnetzwerk Städteregion Aachen
1829871	Fietsnetwerk Roermond
1851919	Fietsnetwerk Regio Rotterdam
1852352	Fietsnetwerk Midden-Delfland
1900584	Fietsnetwerk Drechtsteden
2048535	Fietsnetwerk Haaglanden
2052939	Fietsnetwerk Voorne-Putten en Rozenburg
2073165	Knotenpunktnetzwerk Kreis Heinsberg
2184046	Fietsnetwerk Noordoostpolder-Urk
2407988	Fietsnetwerk Zuid-Limburg
4257206	Knotenpunktnetzwerk Kreis Viersen
6305492	Fietsnetwerk Midden-Fryslân
 */
const fs = require("fs");

const networksToProcess = [116285, 116286, 116287, 146923, 155047, 207888, 377995, 1086605, 1106360, 1110274, 1120802,
    1656411, 1686979, 1729060, 1729250, 1734279, 1734281, 1734282, 1734283, 1734284, 1734285, 1734288, 1734292,
    1734294, 1734295, 1734297, 1736598, 1738333, 1740981, 1741517, 1741536, 1747782, 2407988, 2567359, 4128428,
    6475168, 7161180, 7303723, 9529754, 9894645,
];
const processedNodes = {};
const processedRoutes = {};
networksToProcess.forEach(networkId => {
    const networkNodes = require(`./data/nodes-${networkId}.json`);
    networkNodes.features.forEach(({geometry, properties}) => {
        if (processedNodes[properties.id]) {
            return;
        }
        processedNodes[properties.id] = {
            id: properties.id,
            number: properties.name,
            location: geometry.coordinates.reverse(),
            connections: []
        }
    });
});
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
            console.warn(`Begin node ${feature.properties.begin_geoid} missing for route ${id} (network ${networkId})`);
            return;
        }
        if (!endNode) {
            console.warn(`End node ${feature.properties.end_geoid} missing for route ${id} (network ${networkId})`);
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

        fs.writeFileSync(`./dist/routes/${id}.json`, JSON.stringify(feature));

    })
});

fs.writeFileSync("./dist/nodes.json", JSON.stringify(Object.values(processedNodes)));
fs.writeFileSync("./dist/routes.json", JSON.stringify({
    type: "FeatureCollection",
    features: Object.values(processedRoutes),
}));
