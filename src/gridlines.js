var linearLineFunction = d3.svg.line()
    .x(function(d) { return d.x; })
    .y(function(d) { return d.y; })
    .interpolate("linear");

var addChartBorders = function(svg, width, height) {
    // Append Top line and Bottom line
    svg.append("path")
        .attr("class", "chartBorder")
        .attr("d", linearLineFunction([
            { "x": 0, "y": height },
            { "x": width, "y": height }
        ])
    );
    svg.append("path")
        .attr("class", "chartBorder")
        .attr("d", linearLineFunction([
            { "x": 0, "y": 0 },
            { "x": width, "y": 0 }
        ])
    );
};

var addGridLines = function(svg, numCols, colSize, numRows, rowSize, width, height) {
    // Prepare gridlines matrix
    gridLines = [];

    // Vertical column lines
    for( i = 0; i <= numCols; i++) {
        gridLines.push([
            { "x": i*colSize, "y": 0 },
            { "x": i*colSize, "y": height }
        ]);
    };

    // Horizontal row lines
    for( i = 0; i <= numRows; i++) {
        gridLines.push([
            { "x": 0, "y": i*rowSize },
            { "x": width, "y": i*rowSize }
        ]);
    };

    // Append grid lines to svg
    for(i=0;i<gridLines.length;i++) {
        svg.append("path")
            .attr("class", "chartGrid")
            .attr("d", linearLineFunction(gridLines[i]));
    };
};

var addThresholdLine = function(svg, y, width) {
    svg.append("path")
        .attr("class", "thresholdLine")
        .attr("d", linearLineFunction([
            { "x": 0, "y": y },
            { "x": width, "y": y }
        ])
    );
}
