import * as d3 from 'd3'
export class Tendance {
      constructor(svg,width,height){
          this.SVGwidth=width
          this.SVGheight=height
          this.margin = {top: 40, right: 30, bottom: 30, left: 60}
          this.width = this.SVGwidth  - this.margin.left - this.margin.right
          this.height = this.SVGheight - this.margin.top - this.margin.bottom
          this.svg = svg
          this.svg.attr("width", this.SVGwidth )
            .attr("height", this.SVGheight)
          this.x= d3.scaleTime()
            .range([0, this.width])
          this.y= d3.scaleLinear()
          .range([this.height, 0])
          this.data={}
      }
      addTitle (title){
        this.svg.append("text")
          .attr("x", (this.width / 2))             
          .attr("y", this.margin.top/2)
          .attr("text-anchor", "middle")
          .style("fill", "#5a5a5a")
          .style("font-family", "Raleway")
          .style("font-weight", "300")
          .style("font-size", "24px")
          .text(title)
      }
      parseTime =()=>d3.timeParse("%d/%m/%Y")
      dateFormat =()=> d3.timeFormat("%d/%m/%Y")
      
      // x =()=> d3.scaleTime()
      // .range([0, this.width])
      
      // y =()=> d3.scaleLinear()
      // .range([this.height, 0])
      
      line =()=> {
          d3.line()
            .x(d => this.x(d.date))
            .y(d => this.y(d.A))
      }

      prepareData(CSV){
          const parseTime =d3.timeParse("%d-%B-%Y")
          var data=d3.csvParse(CSV,function(d){
              return {
                  date:parseTime(d.date),
                  A:d.A,
                  B:d.B,
                  C:d.C
              }
          })
          this.x.domain(d3.extent(data, d => d.date));
          this.y.domain(d3.extent(data, d => d.B));
          this.data=data
      }
      drawXaxis(){
        this.svg.append("g")
        .attr("transform", "translate(0," + this.height + ")")
        .call(d3.axisBottom(this.x));
      }
      drawYaxis(){
        this.svg.append("g")
        .call(d3.axisLeft(this.y))
        .append("text")
            .attr("fill", "#000")
            .attr("transform", "rotate(-90)")
            .attr("y", this.margin.left+6)
            .attr("dy", "0.71em")
            .style("text-anchor", "end")
            .text("Pts");
        
        this.svg.selectAll("y axis").data(this.y.ticks(10)).enter()
            .append("line")
            .attr("class", "horizontalGrid")
            .attr("x1", this.margin.left+0)
            .attr("x2", this.width)
            .attr("y1", d => this.y(d))
            .attr("y2", d => this.y(d));

        this.svg.append("path")
        .datum(this.data)
        .attr("class", "line")
        .attr("d", this.line);

        console.log(this.date)
      }
    }
    
    
    
    // area : d3.area()
    // .x(d => x(d.date))
    // .y0(height)
    // .y1(d => y(d.close)),

