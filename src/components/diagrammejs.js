import * as d3 from 'd3'

export function chart(data,width,height,margin, svg){

let yAxis = g => g
.attr("transform", `translate(${margin.left},0)`)
.call(d3.axisLeft(y))
.call(g => g.select(".domain").remove())
.call(g => g.select(".tick:last-of-type text").clone()
    .attr("x", 3)
    .attr("text-anchor", "start")
    .attr("font-weight", "bold")
    .text(data.y))

let xAxis = g => g
.attr("transform", `translate(0,${height - margin.bottom})`)
.call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0))

let x = d3.scaleUtc()
.domain(d3.extent(data, d => d.date))
.range([margin.left, width - margin.right])

let y = d3.scaleLinear()
.domain([0, d3.max(data, d => d.value)]).nice()
.range([height - margin.bottom, margin.top])

let line = d3.line()
.defined(d => !isNaN(d.value))
.x(d => x(d.date))
.y(d => y(d.value))

svg
   .attr("viewBox", [0, 0, width, height]);

svg.append("g")
    .call(xAxis);
svg.append("crazyTag");

svg.append("g")
    .call(yAxis);

svg.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr("stroke-linejoin", "round")
    .attr("stroke-linecap", "round")
    .attr("d", line);

return svg.node();
}