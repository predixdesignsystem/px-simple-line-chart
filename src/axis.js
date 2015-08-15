function addAxisBar(svg, colSize, height) {
    svg.append("rect")
        .attr("class", "axisBar")
        .attr("x", 1)
        .attr("y", 0)
        .attr("width", colSize - 2)
        .attr("height", height);
};

function addAxisLabel(svg, colSize, height) {
    svg.append("text")
        .attr("class", "axisLabel")
        .attr("x", 7)
        .attr("y", 42)
        .text("100");
}
