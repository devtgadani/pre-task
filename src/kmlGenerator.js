import React, { useState } from "react";
import * as turf from "@turf/turf";

const KmlGenerator = () => {
  const [kmlContent, setKmlContent] = useState("");

  const generateKML = () => {
    const polygon = {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[
          [79.69372225315544, 10.61529144695558],
          [80.18438464713913, 15.79699209369276],
          [82.81168943275419, 17.72547641701436],
          [87.21945719699693, 22.45317857563886],
          [93.24961285892643, 22.58264075980479],
          [96.06439312081869, 28.31995348283899],
          [90.45275703607807, 26.52985740950432],
          [81.00813752947819, 28.49646017960345],
          [72.93472465821176, 33.30891081494329],
          [67.72017289771011, 24.05435885176378],
          [70.16799733069335, 23.06713559785836],
          [70.28572583890242, 22.51522988228531],
          [68.91904474196495, 22.229038959872],
          [70.08244320461894, 21.04947535893072],
          [71.79220207520243, 21.55105578700019],
          [72.4813838528932, 22.22615989286937],
          [76.8880154961665, 8.767851816840263],
          [79.69372225315544, 10.61529144695558],
        ]]
      }
    };
  
    // Generate a larger number of random points
    const totalPointsToGenerate = 100000; // Increase this to ensure enough points within the polygon
    const points = turf.randomPoint(totalPointsToGenerate, { bbox: turf.bbox(polygon) });
  
    // Filter points within the polygon and limit to 30,000
    const pointsWithin = points.features
      .filter(point => turf.booleanPointInPolygon(point, polygon))
      .slice(0, 500);
  
    let kml = `<?xml version="1.0" encoding="UTF-8"?>
  <kml xmlns="http://www.opengis.net/kml/2.2">
    <Document>
      <name>Random Points</name>
      <description>500 random points within the area of the india using turf  libary </description>
      <Style id="glow">
        <IconStyle>
        <Icon>
          <href>https://github.com/devtgadani/kml-dataimg/blob/e8a6c760ebd04315c7613ab891eb06ed688c9041/sparkle_night.png?raw=true</href>
        </Icon>
          <color>ff00ffff</color>
        </IconStyle>
      </Style>
      <Folder>
  `;
  
    pointsWithin.forEach((point, index) => {
      const [lon, lat] = point.geometry.coordinates;
      kml += `
        <Placemark>
         <styleUrl>#glow</styleUrl>
          <Point>
            <coordinates>${lon},${lat},0</coordinates>
          </Point>
        </Placemark>
      `;
    });
  
    kml += `
      </Folder>
    </Document>
  </kml>`;
  
    setKmlContent(kml);
  };
  

  return (
    <div className="kml-container">
      <h1>KML Generator with 500  radom points within area of india </h1>
      <button className="kml-button" onClick={generateKML}>Generate KML</button>
      <textarea
        value={kmlContent}
        readOnly
        rows={20}
        cols={80}
        style={{ marginTop: "20px", width: "80%" , backgroundColor:"transparent",color:"white" }}
      />
    </div>
   
  );
};

export default KmlGenerator;
