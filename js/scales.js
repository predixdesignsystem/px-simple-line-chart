var xScale = d3.scale.linear()
    .domain([xMin, xMax])
    .range([colSize, width]); // start after first column

var yScale = d3.scale.linear()
    .domain([yMin, yMax])
    .range([height, 0]);
