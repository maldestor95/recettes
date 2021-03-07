<template>
  <div>
    <a href="" @click="draw()">Draw </a>
    <h1>Circle Pack in D3</h1>
    <h2>{{ msg }}</h2>
    <p>W {{width}} H {{height}}</p>
    <svg id="diagrammeTendance">
    </svg>
    {{data}}
  </div>
</template>

<script>
  import * as d3 from "d3";
  import {chart} from "./diagrammejs"
  export default {
   
  props: {
    svgWidth: {
      type: Number,
      default: 600
    },
    svgHeight: {
      type: Number,
      default: 400
    },
    data:{
      type:Array,
      default:()=>{return ["date,A,B,C","20-July-2019,10,20,16","21-July-2019,11,22,18"]}
    }
  },
    data() {
      return {
        msg: "👋 from the Chart Component",
        datain: [{
          x: 0,
          y: 20
        }, {
          x: 150,
          y: 150
        }, {
          x: 300,
          y: 100
        }, {
          x: 450,
          y: 20
        }, {
          x: 600,
          y: 130
        }],
        margin: {
          top: 40,
          right: 30,
          bottom: 30,
          left: 60
        },
        width: null,
        height: null,
        diag:null
      };
    },
    mounted() {
      // var data = [210, 36, 322, 59, 123, 350, 290];

      // var width = 400, height = 300;

      // var svg = d3.select("body")
      //     .append("svg")
      //     .attr("width", width)
      //     .attr("height", height);

      // var bars = svg.selectAll(".myBars")
      //     .data(data)
      //     .enter()
      //     .append("rect");

      // bars.attr("x", 10)
      //     .attr("y", function(d,i){ return 10 + i*40})
      //     .attr("width", function(d){ return d})
      //     .attr("height", 30);

      // var texts = svg.selectAll(".myTexts")
      //     .data(data)
      //     .enter()
      //     .append("text");

      // texts.attr("x", function(d){ return d + 16})
      //     .attr("y", function(d,i){ return 30 + i*40})
      //     .text(function(d){ return d});
      
      chart(this.datain,this.svgWidth,this.svgHeight,this.margin,d3.select("#diagrammeTendance"))
    },
    methods: {
     
    }
    
  }
</script>

<style>
  svg {
    border: solid 2px black;
  }


</style>