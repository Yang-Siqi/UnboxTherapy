<script>
    import { onMount } from 'svelte';
    import { link } from "svelte-spa-router";
    let outdata;
    let sortdata;
    var kdata;
    const color = {"山鸢尾": 'red', "杂色鸢尾":'steelblue', "维吉尼亚鸢尾":'green'};
    const en2ch = {"Iris-setosa": "山鸢尾", "Iris-versicolor":"杂色鸢尾", "Iris-virginica":"维吉尼亚鸢尾"};
    const arrcolor = ['red', 'steelblue', 'green'];
    const labels = ["山鸢尾", "杂色鸢尾", "维吉尼亚鸢尾"];
    const margin = {top: 20, right: 10, bottom: 10, left: 40};
    const height = 280;
    const width = 500;
    const r = 3.5;
    let counts = {"山鸢尾": 0, "杂色鸢尾": 0, "维吉尼亚鸢尾": 0};
    let testlabel = "";
    let k = 15;
    let svg;
    let gtext, plusText;
    let xAxis;
    let yAxis;
    let y, ry;
    let x, rx;
    let point = {};
    let svglink;
    let strlegend;

    
    onMount(async () => {
        // window.location.hash = "#article";
        window.scrollTo(0,0);
        strlegend = swatches({
            color: d3.scaleOrdinal(labels, arrcolor)
        })
        const data = await d3.csv("PUBLIC_URL/assets/data/Iris.csv");
        // const data = d3.csvParse(await FileAttachment("PUBLIC_URL/assets/data/us-population-state-age.csv").text(), d3.autoType);
        // const ages = data.columns.slice(1);
        // for (const d of data) d.total = d3.sum(ages, age => d[age]);
        // outdata = ages.flatMap(age => data.map(d => ({name: d.name, age, value: d[age] / d.total})));

        const newlabels = data.columns.slice(1);
        outdata = data.map(d => ({x: d.SepalLengthCm * 10, y: d.PetalLengthCm * 10, label: en2ch[d.Species]}));

        y = d3.scaleLinear()
            .domain(d3.extent(outdata, d => d.y))
            .range([margin.top, height - margin.bottom]);

        ry = d3.scaleLinear()
            .domain([margin.top, height - margin.bottom])
            .range(d3.extent(outdata, d => d.y));

        x = d3.scaleLinear()
            .domain(d3.extent(outdata, d => d.x))
            .range([margin.left + 10, width - margin.right]);  
 
        rx = d3.scaleLinear()
            .domain([margin.left + 10, width - margin.right])
            .range(d3.extent(outdata, d => d.x));    

        yAxis = g => g.attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(y).ticks(10))
            .call(g => g.selectAll(".tick line").clone().attr("stroke-opacity", 0.1).attr("x2", width - margin.right - margin.left))
            .call(g => g.selectAll(".domain").remove());

        xAxis = g => g.attr("transform", `translate(0,${margin.top})`)
            .call(d3.axisTop(x).ticks(20))
            .call(g => g.selectAll(".tick line").clone().attr("stroke-opacity", 0.1).attr("y2", height - margin.bottom - margin.top))
            .call(g => g.selectAll(".domain").remove())

        svg = d3.select('#knn-svg')
        .attr("viewBox", [0, 0, width, height]);

        svg.append("g")
            .style("pointer-events", "none")
            .call(xAxis);

        svg.append("text")
            .attr("transform", `translate(${5},${height - 10})`)
            .style("font-size", "10px")
            .attr('class', 'annotation-text')
            .text("花瓣长度（mm)");   
        
        svg.append("g")
            .style("pointer-events", "none")
            .call(yAxis);

        svg.append("text")
            .attr("transform", `translate(${width - 80},${margin.top + 10})`)
            .attr('class', 'annotation-text')
            .style("font-size", "10px")
            .text("花萼长度（mm)");   

        svg.append("g")
            .attr("class", "tcircles")
            .attr("fill", "none")
            .attr("pointer-events", "all")
            .selectAll("circle")
            .data(outdata)   
            .join("circle")
            .attr("stroke", d => color[d.label])
            .attr("r", r)
            .attr("cx", d => x(d.x))
            .attr("cy", d => y(d.y))
            .append("title")
            .text(d => `品种: ${d.label}  位置:(${(d.x)},  ${d.y})`);

        const circles = d3.range(1).map(i => ({
            x: 56,
            y: 25,
        }));
        point.x = 56;
        point.y = 25;
        svg.append('g')
            .selectAll("circle")
            .data(circles)
            .join("circle")
            .attr("fill", "yellow")
            .attr("stroke", "#C4C400")
            .attr("r", r)
            .attr("cx", d => x(d.x))
            .attr("cy", d => y(d.y))
            .style("cursor", "move")
            .call(d3.drag()
                    .on("start", dragstarted)
                    .on("drag", dragged)
                    .on("end", dragended));
        sortdata = outdata;
        sortdata.sort((a, b) =>{
            let distance1 = (a.x - point.x)**2 + (a.y - point.y)**2;
            let distance2 = (b.x - point.x)**2 + (b.y - point.y)**2;
            return distance1 - distance2;
        })
        kdata = sortdata.slice(0, k);
        svglink = svg.insert("g", ".tcircles")
            .attr("id", "lines")
            .selectAll("line")
            .data(kdata)
            .join("line")
            .attr("stroke", d => color[d.label])
            .style('opacity', 0.5)
            .attr("x1", x(point.x))
            .attr("y1", y(point.y))
            .attr("x2", d => x(d.x))
            .attr("y2", d => y(d.y))
        
        d3.select('#num-k').text("k = " + k);
        d3.select("#add-layers").on("click", () => {
            k++;
            let diff = 1;
            if (k > 30) {
                k = 30;
                diff = 0;
            }
            d3.select("#num-k").text("k = " + k);
            drawklines(diff);
        });

        d3.select("#remove-layers").on("click", () => {
            k--;
            let diff = -1;
            if (k <= 0) {
                k = 1;
                diff = 0;
            }
            d3.select("#num-k").text("k = " + k);
            drawklines(diff);
        });
        countlabelnums();
    })

    function drawklines(diff){
        sortdata.sort((a, b) =>{
            let distance1 = (a.x - point.x)**2 + (a.y - point.y)**2;
            let distance2 = (b.x - point.x)**2 + (b.y - point.y)**2;
            return distance1 - distance2;
        });
        kdata = sortdata.slice(0, k);
        if(diff > 0){
            svglink = d3.select("#lines").selectAll("line");
            svglink.data(kdata)
            .enter()
            .append('line')
            .transition()
            .duration(1000)
            .attr("stroke", d => color[d.label]) 
            .style('opacity', 0.5)
            .attr("x1", x(point.x))
            .attr("y1", y(point.y))
            .attr("x2", d => x(d.x))
            .attr("y2", d => y(d.y));

        }else if(diff < 0){
            svglink = d3.select("#lines").selectAll("line");
            svglink.data(kdata)
            .exit()
            .transition()
            .duration(100)
            .remove()
            .attr("stroke", d => color[d.label])
            .style('opacity', 0.5)
            .attr("x1", x(point.x))
            .attr("y1", y(point.y))
            .attr("x2", d => x(d.x))
            .attr("y2", d => y(d.y));

        }else{
            svglink.data(kdata)
            .transition()
            .duration(1000)
            .attr("x1", x(point.x))
            .attr("y1", y(point.y))
            .attr("x2", d => x(d.x))
            .attr("y2", d => y(d.y))
            .attr("stroke", d => color[d.label]) 
            .style('opacity', 0.5);
        }
    }

    function dragstarted(d){
        svglink = d3.select("#lines").selectAll("line");
        d3.select(this).attr("stroke", "black");
    }

    function dragged(d){
        d3.select(this).raise().attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y);
        point.x = rx(d3.event.x)
        point.y = ry(d3.event.y)
        svglink.data(kdata)
            .attr("x1", x(point.x))
            .attr("y1", y(point.y))
            .attr("x2", d => x(d.x))
            .attr("y2", d => y(d.y))
    }
    function dragended(d){
        d3.select(this).attr("stroke", "#C4C400");
        if(d3.event.x > width - margin.right || d3.event.x < margin.left + 10){
            d3.select(this).attr("cx", d.x = x(50));
            point.x = 50;
        }else if(d3.event.y > height - margin.bottom || d3.event.y < margin.top){
            d3.select(this).attr("cy", d.y = y(50));
            point.y = 50;
        }else{
            point.x = rx(d3.event.x)
            point.y = ry(d3.event.y) 
        }
        drawklines(0);
        countlabelnums();
    }

    function countlabelnums(){
        counts = {"山鸢尾": 0, "杂色鸢尾": 0, "维吉尼亚鸢尾": 0};
        for(let i=0; i<k; ++i){
            counts[kdata[i].label] += 1;
        }
        let max_num = 0;
        let keys = Object.keys(counts);
        for(let i=0; i<keys.length; ++i){
            if(counts[keys[i]] > max_num){
                max_num = counts[keys[i]];
                testlabel = keys[i];
            }
        }
    }

    function swatches({
        color,
        format = x => x,
        swatchSize = 20,
        swatchWidth = swatchSize,
        swatchHeight = swatchSize,
        marginLeft = 0
    }) {
        const id = 'color-legend2';
    
        return `<div style="display: flex; align-items: center; min-height: 33px; margin-left: ${+marginLeft}px; font: 12px sans-serif; float: right">
        <style>

        .${id} {
        pointer-events: none;
        display: inline-flex;
        align-items: flex-end;
        margin-right: 2em;
        font-style: italic;
        fill: gray;
        }

        .${id}::before {
        content: "";
        width: ${+swatchWidth}px;
        height: ${+swatchHeight}px;
        margin-right: 0.5em;
        margin-top: 10px;
        background: var(--color);
        }

        </style>
        <div>${color.domain().map(
            value => `<span class="${id}" style="--color: ${color(value)}">${value}</span>`).join("")}</div>`;
    }
</script>

<style>
    #knnarticle{
        margin-top:60px;
        margin-bottom: 60px;
        margin-left: auto;
        margin-right: auto;
        max-width: 78ch;
    }
    #knn{
        position:relative;
        width: 100%;
        height: 680px;
        margin-bottom: 10px;
        font-family: "Helvetica", "Arial", sans-serif;
        background-color: #f7f7f7;
    }
    #foot{
        margin-left: auto;
        margin-right: auto;
        max-width: 78ch;
        position:relative;
        border-top: solid 1px #eee;
        padding: 20px 20px;
    }
    .footbody p{
        margin: 16px 0;
        color: #555;
        font-size: 17px;
        line-height: 1.6;
    }
    #foot .lasttext{
        font-style: italic;
        font-size: 20px;
        color: peru;
    }

	.box {
        pointer-events: none;
		width: 150px;
		border: 1px solid #aaa;
		border-radius: 2px;
		box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
		padding: 1em;
		margin: 0 0 0.5em 0;
        position:absolute;
        left: 1235px;
        top:-568px;
        border-radius: 5px;
	}
    .box1 {
        position:relative;
        left:20%;
        top:30px;
		width: 880px;
		border: 1px solid #aaa;
		border-radius: 2px;
		box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
		padding: 1em;
		margin: 0 0 0.5em 0;
        border-radius: 5px;
        background: white;
	}
    .clearfix{
        position:relative;
        left:20%;
        top:30px;
        width: 880px;
		border: 1px solid #aaa;
		border-radius: 2px;
		box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
		padding: 1em;
		margin: 0 0 0.5em 0;
        border-radius: 5px;
        background: white;
    }
    .clearfix:after {
        content: '.';
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }
    #num-k{
        font-style: italic;
        fill: gray;
        pointer-events: none;
    }
    .return {
        position: absolute;
        right: -30%;
        top: 80%;
        font-size: 20px;
        font-style: italic;
        color: steelblue;
    }
    .title{
        font-style: italic;
        color: steelblue;
        font-size: 24px;
        font-weight: 450;
        margin-bottom: 8px;
        margin-top: 44px;
    }

    #knnarticle p{
        margin: 16px 0;
        color: #555;
        font-size: 17px;
        line-height: 1.6;
    }
    #explain{
        position: relative;
        left: 1235px;
        top: -554px;
    }
    #explain p{
        max-width: 20ch;
        pointer-events: none;
        font-size: 10px;
        font-style: italic;
        fill: gray;
    }
</style>

<article id="knnarticle">
    <div id="One"><h1>Section: KNN</h1></div>
    <p>
        <strong>
            你在网上查找有关鸢尾花的资料的时候，看见了一个表格里面记录了这三类花各50条的关于它们花萼的长、花萼的宽、花瓣的长和花瓣的宽的数据（我们称之为“数据集”）。
            但你并不能从这些数据发现一些规律。<br/>于是你想到了如果将花瓣的长度表示为x1，花萼的长度为x2，那就可以在坐标轴上用（x1,
			x2）表示出来。你发现了通过这样取他们的一些属性或者称之为“特征”表示出来的这个二维的坐标平面上有一些规律，似乎大致可以看出分成了三块，左上角集中的那一块它们拥有差不多
            的花瓣长度和花萼长度，它们属于同一类鸢尾花。<br/>现在你想通过这个特征坐标系来判断你面前的这朵鸢尾花属于哪一类，你同样测量了它的花瓣和花萼的长度，要怎么判断呢？

        </strong>
    </p>
    <div class="l--body">
      <h2 class="title">什么是KNN?</h2>
      <p>KNN的基本思想有点类似“物以类聚，人以群分”，打个通俗的比方就是“如果你要了解一个人，可以从他最亲近的几个朋友去推测他是什么样的人”。
      在分类领域，对于一个未知点，选取K个距离（可以是欧氏距离，也可以是其他相似度度量指标）最近的点，然后统计这K个点，在这K个点中频数最多的那一类就作为分类结果。</p>
    </div>

    <div class="l--body">
      <h2 class="title">KNN算法的可视化</h2>
      <p>将鸢尾花数据根据花萼长度及花瓣长度绘制在坐标轴中，其中每一点都代表一个已知的样本，且图像中两点之间的距离便代表了它们之间的相似度。</p>
      <p>当有一个未知品种的鸢尾花时，根据它的两个特征将之绘制在图中，便可以找到它的K个最近邻。</p>
    </div>

    <div class="l--body">
      <h2 class="title">尝试一下</h2>
      <p><strong>你将这朵未知品种的鸢尾花以黄点标注在了图中。</strong></p>
      <p><strong>拖动黄点试试吧，右上角会显示此时样本的预测类别，以及距离最近的K个样本的种类数目。</strong></p>
    </div>
</article>


<div id="knn">
    <div id="top-legends" class="clearfix">
        <div style="float: left; margin-right: 5px;">
            <div class="ui-numHiddenLayers" style="float: left; margin-right: 15px;">
                <button id="add-layers" class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab">
                    <i class="material-icons">add</i>
                </button>
                <button id="remove-layers" class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab">
                    <i class="material-icons">remove</i>
                </button>
            </div>
            <span id="num-k" style="float: left; margin-right: 5px; font-size: 25px"></span>
        </div>

        {@html strlegend}
    </div>
    <div id="knn-graph">
        <div class="box1"> 
            <svg id="knn-svg"></svg>
        </div>
        <div class="box" style="position: relative;">
            <slot>
                <p style="font-size: 25px; font-style: italic; color: steelblue;">{testlabel} </p>
                {#each labels as label, i}
                    <p style="font-style: italic;fill: gray;">{label} : {counts[label]}</p>
                {/each}
            </slot>
        </div>
    </div>
    <div id="explain">
        <p>黄点为未知的鸢尾花样本它的预测类别以及它邻近样本的类别会在上方显示</p>
        <p>接着再拖动它试试吧 !</p>
    </div>
</div>

<footer id="foot">
    <div class="footbody">
      <h3 class='title'>扩展与补充</h3>
      <p>KNN方法思路简单，易于理解，易于实现，无需估计参数，无需训练, 是一个理论上比较成熟的方法，也是最简单的机器学习算法之一，比较适用于比较大的类域的自动分类。但KNN也有自己的不足之处，它的计算量比较大，同时在不同类别的样本数量差距较大时，结果容易受到大样本的影响。</p>
      <p>目前针对KNN也有着许多的改进方法，值得你的进一步的探索了解。</p>
    </div>
    <div class="lasttext">
      <p><br/>尝试过KNN的你发现虽然这个方法简单直观，但效果并没有想象中那么好，同时k值的设定也是一个难题，因此你开始寻找有没有更好的方法来识别鸢尾花的品种。</p>
    </div>
    
    <a href="/home" use:link rel="prefetch">
        <ion-icon class="return" name="arrow-back-circle-outline" size="large"></ion-icon>
    </a>
    

</footer>
