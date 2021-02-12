<template>
  <div>
      <a href="" @click="draw()">Draw </a>
    <h1>Circle Pack in D3</h1>
    <h2>{{ msg }}</h2>
    <div id="diagrammeTendance">
        W {{width}} H {{height}}
    </div>
        <!-- <svg         > -->


    <!-- <path
       style="fill:none;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="m 118.80144,24.84736 c 0,0 0,52.024159 0,52.024159 0,0 31.83568,15.529603 31.83568,15.529603 0,0 -0.77648,34.941598 -0.77648,34.941598 0,0 23.2944,11.6472 23.2944,11.6472 0,0 1.55296,28.72976 1.55296,28.72976"
       id="line"
       sodipodi:nodetypes="cccccc" />
    </svg> -->
  </div>
</template>

<script>
import * as d3 from "d3";
export default {
  name: "PackChart",
  props: ["tweetData"],
  data() {
    return {
      msg: "👋 from the Chart Component",
      margin : {top: 20, right: 30, bottom: 30, left: 60},
      width:1000,
      height:600
    };
  },
  created() {
      this.colourScale = d3
      .scaleOrdinal()
      .range(["#5EAFC6", "#FE9922", "#93c464", "#75739F"]);
      this.width = 1000 * 0.95 - this.margin.left - this.margin.right,
      this.height = 1000 * 0.95 - this.margin.top - this.margin.bottom

  },
  mounted () {
       this.drawAxis();
  },
  methods: {
      draw(){
        // this.drawAxis()
      },
    drawAxis(){
        let svg=d3.select("#diagrammeTendance").append("svg")
        // Triangle
        svg.append("path")
        .attr("d",`M${this.xMin} ${this.yMin} V ${this.yMax} H ${this.xMax} `)
        .attr("style","fill:#b3b3b3;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1")
        //Axis
       svg.append("path")
       .attr("style","fill:none;stroke:#FF0000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1")
       .attr("d",`M${this.xMin} ${this.yMax} V${this.yMin} H ${this.xMax}`)

}
  },
  computed: {
    output() {
      return this.packChart();
    },
    dTriangle(){
        return `M${this.xMin} ${this.yMin} V ${this.yMax} H ${this.xMax} `
    },
    dAxes(){
        return `M${this.xMin} ${this.yMax} V${this.yMin} H ${this.xMax}`
    },

    xMin(){return this.margin.left},
    xMax(){return this.width-this.margin.right},
    yMin(){return this.margin.top},
    yMax(){return this.height-this.margin.bottom}
  }
};
</script>

<style>
svg  {
 border:solid 2px black;
}

#diagrammeTendance>svg {
    width: 600px;
    height: 600px;
}
</style>