/* indexnn.html generated by Svelte v2.16.1 */
var indexnn = (function() { "use strict";

	function create_main_fragment(component, ctx) {
		var _doctype, text0, html, head, text22, body, header, text29, div13, div12, div0, text37, div1, text40, div3, label0, text42, div2, select0, option0, option1, option2, option3, option4, option5, option6, option7, option8, option9, option10, text54, div5, label1, text56, div4, select1, option11, option12, option13, option14, text61, div7, label2, text63, div6, select2, option15, option16, option17, text67, div9, label3, text69, div8, select3, option18, option19, option20, option21, option22, option23, option24, option25, option26, option27, text80, div11, label4, text82, div10, select4, option28, option29, text85, div51, text159, div52, text161, article, text216, footer, text219, script1, text220, script2;

		return {
			c() {
				_doctype = createElement("!doctype");
				text0 = createText("\n\n");
				html = createElement("html");
				head = createElement("head");
				head.innerHTML = `<link rel="icon" type="image/png" href="favicon.png">
				  <meta charset="utf-8">
				  <meta name="viewport" content="width=1024">
				  <meta name="keywords" content="neural networks,machine learning,javascript">

				  <meta property="og:type" content="article">
				  <meta property="og:title" content="Tensorflow — Neural Network Playground">
				  <meta property="og:description" content="Tinker with a real neural network right here in your browser.">
				  <meta property="og:url" content="http://playground.tensorflow.org">
				  <meta property="og:image" content="http://playground.tensorflow.org/preview.png">

				  <meta name="twitter:card" value="summary_large_image">
				  <meta name="twitter:title" content="Tensorflow — Neural Network Playground">
				  <meta name="twitter:description" content="Tinker with a real neural network right here in your browser.">
				  <meta name="twitter:url" content="http://playground.tensorflow.org">
				  <meta name="twitter:image" content="http://playground.tensorflow.org/preview.png">
				  <meta name="twitter:image:width" content="560">
				  <meta name="twitter:image:height" content="295">

				  <meta name="author" content="Daniel Smilkov and Shan Carter">
				  <title>A Neural Network Playground</title>
				  <link rel="stylesheet" href="bundle.css" type="text/css">
				  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500|Material+Icons" rel="stylesheet" type="text/css">
				  <script src="lib.js"></script>`;
				text22 = createText("\n");
				body = createElement("body");
				header = createElement("header");
				header.innerHTML = `<h1 class="l--page">Tinker With ddda <b>Neural Network</b> <span class="optional">Right Here </span>in Your Browser.<br>Don’t Worry, You Can’t Break It. We Promise.</h1>`;
				text29 = createText("\n\n  \n  ");
				div13 = createElement("div");
				div12 = createElement("div");
				div0 = createElement("div");
				div0.innerHTML = `<button class="mdl-button mdl-js-button mdl-button--icon ui-resetButton" id="reset-button" title="Reset the network"><i class="material-icons">replay</i></button>
				        <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored ui-playButton" id="play-pause-button" title="Run/Pause"><i class="material-icons">play_arrow</i>
				          <i class="material-icons">pause</i></button>
				        <button class="mdl-button mdl-js-button mdl-button--icon ui-stepButton" id="next-step-button" title="Step"><i class="material-icons">skip_next</i></button>`;
				text37 = createText("\n      ");
				div1 = createElement("div");
				div1.innerHTML = `<span class="label">Epoch</span>
				        <span class="value" id="iter-number"></span>`;
				text40 = createText("\n      ");
				div3 = createElement("div");
				label0 = createElement("label");
				label0.textContent = "Learning rate";
				text42 = createText("\n        ");
				div2 = createElement("div");
				select0 = createElement("select");
				option0 = createElement("option");
				option0.textContent = "0.00001";
				option1 = createElement("option");
				option1.textContent = "0.0001";
				option2 = createElement("option");
				option2.textContent = "0.001";
				option3 = createElement("option");
				option3.textContent = "0.003";
				option4 = createElement("option");
				option4.textContent = "0.01";
				option5 = createElement("option");
				option5.textContent = "0.03";
				option6 = createElement("option");
				option6.textContent = "0.1";
				option7 = createElement("option");
				option7.textContent = "0.3";
				option8 = createElement("option");
				option8.textContent = "1";
				option9 = createElement("option");
				option9.textContent = "3";
				option10 = createElement("option");
				option10.textContent = "10";
				text54 = createText("\n      ");
				div5 = createElement("div");
				label1 = createElement("label");
				label1.textContent = "Activation";
				text56 = createText("\n        ");
				div4 = createElement("div");
				select1 = createElement("select");
				option11 = createElement("option");
				option11.textContent = "ReLU";
				option12 = createElement("option");
				option12.textContent = "Tanh";
				option13 = createElement("option");
				option13.textContent = "Sigmoid";
				option14 = createElement("option");
				option14.textContent = "Linear";
				text61 = createText("\n      ");
				div7 = createElement("div");
				label2 = createElement("label");
				label2.textContent = "Regularization";
				text63 = createText("\n        ");
				div6 = createElement("div");
				select2 = createElement("select");
				option15 = createElement("option");
				option15.textContent = "None";
				option16 = createElement("option");
				option16.textContent = "L1";
				option17 = createElement("option");
				option17.textContent = "L2";
				text67 = createText("\n      ");
				div9 = createElement("div");
				label3 = createElement("label");
				label3.textContent = "Regularization rate";
				text69 = createText("\n        ");
				div8 = createElement("div");
				select3 = createElement("select");
				option18 = createElement("option");
				option18.textContent = "0";
				option19 = createElement("option");
				option19.textContent = "0.001";
				option20 = createElement("option");
				option20.textContent = "0.003";
				option21 = createElement("option");
				option21.textContent = "0.01";
				option22 = createElement("option");
				option22.textContent = "0.03";
				option23 = createElement("option");
				option23.textContent = "0.1";
				option24 = createElement("option");
				option24.textContent = "0.3";
				option25 = createElement("option");
				option25.textContent = "1";
				option26 = createElement("option");
				option26.textContent = "3";
				option27 = createElement("option");
				option27.textContent = "10";
				text80 = createText("\n      ");
				div11 = createElement("div");
				label4 = createElement("label");
				label4.textContent = "Problem type";
				text82 = createText("\n        ");
				div10 = createElement("div");
				select4 = createElement("select");
				option28 = createElement("option");
				option28.textContent = "Classification";
				option29 = createElement("option");
				option29.textContent = "Regression";
				text85 = createText("\n\n  \n  ");
				div51 = createElement("div");
				div51.innerHTML = `<div class="column data"><h4><span>Data</span></h4>
				      <div class="ui-dataset"><p>Which dataset do you want to use?</p>
				        <div class="dataset-list"><div class="dataset" title="Circle"><canvas class="data-thumbnail" data-dataset="circle"></canvas></div>
				          <div class="dataset" title="Exclusive or"><canvas class="data-thumbnail" data-dataset="xor"></canvas></div>
				          <div class="dataset" title="Gaussian"><canvas class="data-thumbnail" data-dataset="gauss"></canvas></div>
				          <div class="dataset" title="Spiral"><canvas class="data-thumbnail" data-dataset="spiral"></canvas></div>
				          <div class="dataset" title="Plane"><canvas class="data-thumbnail" data-regdataset="reg-plane"></canvas></div>
				          <div class="dataset" title="Multi gaussian"><canvas class="data-thumbnail" data-regdataset="reg-gauss"></canvas></div></div></div>
				      <div><div class="ui-percTrainData"><label for="percTrainData">Ratio of training to test data:  <span class="value">XX</span>%</label>
				          <p class="slider"><input class="mdl-slider mdl-js-slider" type="range" id="percTrainData" min="10" max="90" step="10"></p></div>
				        <div class="ui-noise"><label for="noise">Noise:  <span class="value">XX</span></label>
				          <p class="slider"><input class="mdl-slider mdl-js-slider" type="range" id="noise" min="0" max="50" step="5"></p></div>
				        <div class="ui-batchSize"><label for="batchSize">Batch size:  <span class="value">XX</span></label>
				          <p class="slider"><input class="mdl-slider mdl-js-slider" type="range" id="batchSize" min="1" max="30" step="1"></p></div>
				          <button class="basic-button" id="data-regen-button" title="Regenerate data">
				            Regenerate
				          </button></div></div>
				    <div class="column features"><h4>Features</h4>
				      <p>Which properties do you want to feed in?</p>
				      <div id="network"><svg id="svg" width="510" height="450"><defs><marker id="markerArrow" markerWidth="7" markerHeight="13" refX="1" refY="6" orient="auto" markerUnits="userSpaceOnUse"><path d="M2,11 L7,6 L2,2"></path></marker></defs></svg>
				        <div id="hovercard"><div style="font-size:10px">Click anywhere to edit.</div>
				          <div><span class="type">Weight/Bias</span> is <span class="value">0.2</span><span><input type="number"></span>.</div></div>
				        <div class="callout thumbnail"><svg viewBox="0 0 30 30"><defs><marker id="arrow" markerWidth="5" markerHeight="5" refX="5" refY="2.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L5,2.5 L0,5 z"></path></marker></defs><path d="M12,30C5,20 2,15 12,0" marker-end="url(#arrow)"></path></svg>
				          <div class="label">
				            This is the output from one <b>neuron</b>. Hover to see it larger.
				          </div></div>
				        <div class="callout weights"><svg viewBox="0 0 30 30"><defs><marker id="arrow" markerWidth="5" markerHeight="5" refX="5" refY="2.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L5,2.5 L0,5 z"></path></marker></defs><path d="M12,30C5,20 2,15 12,0" marker-end="url(#arrow)"></path></svg>
				          <div class="label">
				            The outputs are mixed with varying <b>weights</b>, shown by the thickness of the lines.
				          </div></div></div></div>
				    <div class="column hidden-layers"><h4><div class="ui-numHiddenLayers"><button id="add-layers" class="mdl-button mdl-js-button mdl-button--icon"><i class="material-icons">add</i></button>
				          <button id="remove-layers" class="mdl-button mdl-js-button mdl-button--icon"><i class="material-icons">remove</i></button></div>
				        <span id="num-layers"></span>
				        <span id="layers-label"></span></h4>
				      <div class="bracket"></div></div>
				    <div class="column output"><h4>Output</h4>
				      <div class="metrics"><div class="output-stats ui-percTrainData"><span>Test loss</span>
				          <div class="value" id="loss-test"></div></div>
				        <div class="output-stats train"><span>Training loss</span>
				          <div class="value" id="loss-train"></div></div>
				        <div id="linechart"></div></div>
				      <div id="heatmap"></div>
				      <div style="float:left;margin-top:20px"><div style="display:flex; align-items:center;"><div class="label" style="width:105px; margin-right: 10px">
				            Colors shows data, neuron and weight values.
				          </div>
				          <svg width="150" height="30" id="colormap"><defs><linearGradient id="gradient" x1="0%" y1="100%" x2="100%" y2="100%"><stop offset="0%" stop-color="#f59322" stop-opacity="1"></stop><stop offset="50%" stop-color="#e8eaeb" stop-opacity="1"></stop><stop offset="100%" stop-color="#0877bd" stop-opacity="1"></stop></linearGradient></defs><g class="core" transform="translate(3, 0)"><rect width="144" height="10" style="fill: url('#gradient');"></rect></g></svg></div>
				        <br>
				        <div style="display:flex;"><label class="ui-showTestData mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="show-test-data"><input type="checkbox" id="show-test-data" class="mdl-checkbox__input" checked="">
				            <span class="mdl-checkbox__label label">Show test data</span></label>
				          <label class="ui-discretize mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="discretize"><input type="checkbox" id="discretize" class="mdl-checkbox__input" checked="">
				            <span class="mdl-checkbox__label label">Discretize output</span></label></div></div></div>`;
				text159 = createText("\n\n  \n  ");
				div52 = createElement("div");
				div52.innerHTML = `<button class="mdl-button mdl-js-button mdl-button--fab"><i class="material-icons">keyboard_arrow_down</i></button>`;
				text161 = createText("\n  \n\n  ");
				article = createElement("article");
				article.innerHTML = `<div class="l--body"><h2>Um, What Is a Neural Network?</h2>
				      <p>It’s a technique for building a computer program that learns from data. It is based very loosely on how we think the human brain works. First, a collection of software “neurons” are created and connected together, allowing them to send messages to each other. Next, the network is asked to solve a problem, which it attempts to do over and over, each time strengthening the connections that lead to success and diminishing those that lead to failure. For a more detailed introduction to neural networks, Michael Nielsen’s <a href="http://neuralnetworksanddeeplearning.com/index.html">Neural Networks and Deep Learning</a> is a good place to start. For a more technical overview, try <a href="http://www.deeplearningbook.org/">Deep Learning</a> by Ian Goodfellow, Yoshua Bengio, and Aaron Courville.</p></div>

				    <div class="l--body"><h2>This Is Cool, Can I Repurpose It?</h2>
				      <p>Please do! We’ve open sourced it on <a href="https://github.com/tensorflow/playground">GitHub</a> with the hope that it can make neural networks a little more accessible and easier to learn. You’re free to use it in any way that follows our <a href="https://github.com/tensorflow/playground/blob/master/LICENSE">Apache License</a>. And if you have any suggestions for additions or changes, please <a href="https://github.com/tensorflow/playground/issues">let us know</a>.</p>
				      <p>We’ve also provided some controls below to enable you tailor the playground to a specific topic or lesson. Just choose which features you’d like to be visible below then save <a class="hide-controls-link" href="#">this link</a>, or <a href="javascript:location.reload();">refresh</a> the page.</p>
				      <div class="hide-controls"></div></div>

				    <div class="l--body"><h2>What Do All the Colors Mean?</h2>
				      <p>Orange and blue are used throughout the visualization in slightly different ways, but in general orange shows negative values while blue shows positive values.</p>
				      <p>The data points (represented by small circles) are initially colored orange or blue, which correspond to positive one and negative one.</p>
				      <p>In the hidden layers, the lines are colored by the weights of the connections between neurons. Blue shows a positive weight, which means the network is using that output of the neuron as given. An orange line shows that the network is assiging a negative weight.</p>
				      <p>In the output layer, the dots are colored orange or blue depending on their original values. The background color shows what the network is predicting for a particular area. The intensity of the color shows how confident that prediction is.</p></div>

				    <div class="l--body"><h2>What Library Are You Using?</h2>
				      <p>We wrote a tiny neural network <a href="https://github.com/tensorflow/playground/blob/master/src/nn.ts">library</a>
				      that meets the demands of this educational visualization. For real-world applications, consider the
				      <a href="https://www.tensorflow.org/">TensorFlow</a> library.
				      </p></div>

				    <div class="l--body"><h2>Credits</h2>
				      <p>
				        This was created by Daniel Smilkov and Shan Carter.
				        This is a continuation of many people’s previous work — most notably Andrej Karpathy’s <a href="http://cs.stanford.edu/people/karpathy/convnetjs/demo/classify2d.html">convnet.js demo</a>
				        and Chris Olah’s <a href="http://colah.github.io/posts/2014-03-NN-Manifolds-Topology/">articles</a> about neural networks.
				        Many thanks also to D. Sculley for help with the original idea and to Fernanda Viégas and Martin Wattenberg and the rest of the
				        <a href="https://research.google.com/bigpicture/">Big Picture</a> and <a href="https://research.google.com/teams/brain/">Google Brain</a> teams for feedback and guidance.
				      </p></div>`;
				text216 = createText("\n\n  \n  ");
				footer = createElement("footer");
				footer.innerHTML = `<div class="l--body"><a href="https://www.tensorflow.org/" class="logo"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 528 87" xml:space="preserve"><path d="M37.4,15.5v70.3H25V15.5H1V3.4h60.4v12.1H37.4z"></path><path d="M149,85.8v-35c0-12.5-4.7-16.9-12.7-16.9c-8.1,0-12.7,5.8-12.7,15.8v36.1h-12.1V24h12.1v5.9c3.1-4.5,9.2-7.2,15.5-7.2
				        		c14.4,0,22,9.4,22,27.7v35.4H149z"></path><path d="M188.7,87.1c-8.4,0-17.4-3.3-23.7-7.9l5.5-9.2c5.8,4,12.2,6.1,18,6.1c7.7,0,11.3-2.5,11.3-6.8c0-4.7-5.4-6.9-14.4-10.4
				        		c-13.3-5.2-18.1-9.7-18.1-19.4c0-11.1,8.7-16.8,21.1-16.8c7.8,0,15.4,2.8,21,6.8l-5.3,9.3c-5.1-3.5-10.1-5.3-16-5.3
				        		c-5.9,0-8.5,2.4-8.5,5.7c0,3.1,2.1,5.3,11.4,8.9c13.8,5.3,20.8,9.1,20.8,20.7C211.9,82.5,200.8,87.1,188.7,87.1z"></path><path d="M242,87.1c-15.5,0-27.2-12.8-27.2-32.1c0-20.2,12-32.3,27.5-32.3c15.8,0,27.5,12.6,27.5,31.9
				        		C269.9,75.1,257.9,87.1,242,87.1z M241.9,34.3c-9.2,0-14.8,8.1-14.8,20.4c0,13.5,6.2,21,15.4,21c9.2,0,15.2-9.3,15.2-20.6
				        		C257.7,42.4,251.7,34.3,241.9,34.3z"></path><path d="M310,36.8c-2.6-1.4-5.3-2.2-9.3-2.2c-7.7,0-12.1,5.4-12.1,15.9v35.3h-12.1V24h12.1v5.9c2.8-4.1,8-7.2,14.1-7.2
				        		c4.9,0,8,0.9,10.5,2.6L310,36.8z"></path><path d="M330.3,15.5v21.5H354v12.1h-23.7v36.6H318V3.4h50.3v12.1H330.3z"></path><path d="M374.5,85.8V6.4L386.6,0v85.8H374.5z"></path><path d="M421.9,87.1c-15.5,0-27.2-12.8-27.2-32.1c0-20.2,12-32.3,27.5-32.3c15.8,0,27.5,12.6,27.5,31.9
				        		C449.8,75.1,437.7,87.1,421.9,87.1z M421.7,34.3c-9.2,0-14.8,8.1-14.8,20.4c0,13.5,6.2,21,15.4,21c9.2,0,15.2-9.3,15.2-20.6
				        		C437.5,42.4,431.5,34.3,421.7,34.3z"></path><path d="M510.9,85.8h-10.4l-8.4-31.2c-1.3-4.7-2.6-10.2-3.2-13.2c-0.6,2.9-1.9,8.6-3.2,13.3l-8.2,31.1h-10.4L450.3,24h12l7.3,30
				        		c1.2,4.7,2.5,10.6,3.1,13.5c0.7-3.1,2.1-8.7,3.4-13.5l8.2-30h9.8l8.4,30.1c1.3,4.8,2.6,10.4,3.3,13.4c0.7-3.1,1.9-8.8,3.1-13.5
				        		l7.3-30h12L510.9,85.8z"></path><path d="M79.1,76.2c-6.7,0-12.7-4-14.9-13.2l40.5-12.2c-0.2-2.8-0.6-5.4-1.3-8c-3-11.6-11.1-20.1-24.7-20.1
				        		c-16,0-27.1,11.3-27.1,32.3c0,20.5,12.2,32.1,26.7,32.1c9.4,0,15.9-2.9,21.3-8.1l-7.2-7.8C88.4,74.3,84.3,76.2,79.1,76.2z
				        	 M78,33.7c7.9,0,12.1,4.5,13.8,10.5l-27.9,8.5l0-3.5C64.9,39.3,69.8,33.7,78,33.7z"></path></svg></a>
				      <div class="links"><a href="https://github.com/tensorflow/playground">Source on GitHub</a></div></div>`;
				text219 = createText("\n  ");
				script1 = createElement("script");
				text220 = createText("\n  \n  ");
				script2 = createElement("script");
				setAttribute(_doctype, "html", true);
				head.lang = "en";
				div0.className = "timeline-controls";
				div1.className = "control";
				label0.htmlFor = "learningRate";
				option0.__value = "0.00001";
				option0.value = option0.__value;
				option1.__value = "0.0001";
				option1.value = option1.__value;
				option2.__value = "0.001";
				option2.value = option2.__value;
				option3.__value = "0.003";
				option3.value = option3.__value;
				option4.__value = "0.01";
				option4.value = option4.__value;
				option5.__value = "0.03";
				option5.value = option5.__value;
				option6.__value = "0.1";
				option6.value = option6.__value;
				option7.__value = "0.3";
				option7.value = option7.__value;
				option8.__value = "1";
				option8.value = option8.__value;
				option9.__value = "3";
				option9.value = option9.__value;
				option10.__value = "10";
				option10.value = option10.__value;
				select0.id = "learningRate";
				div2.className = "select";
				div3.className = "control ui-learningRate";
				label1.htmlFor = "activations";
				option11.__value = "relu";
				option11.value = option11.__value;
				option12.__value = "tanh";
				option12.value = option12.__value;
				option13.__value = "sigmoid";
				option13.value = option13.__value;
				option14.__value = "linear";
				option14.value = option14.__value;
				select1.id = "activations";
				div4.className = "select";
				div5.className = "control ui-activation";
				label2.htmlFor = "regularizations";
				option15.__value = "none";
				option15.value = option15.__value;
				option16.__value = "L1";
				option16.value = option16.__value;
				option17.__value = "L2";
				option17.value = option17.__value;
				select2.id = "regularizations";
				div6.className = "select";
				div7.className = "control ui-regularization";
				label3.htmlFor = "regularRate";
				option18.__value = "0";
				option18.value = option18.__value;
				option19.__value = "0.001";
				option19.value = option19.__value;
				option20.__value = "0.003";
				option20.value = option20.__value;
				option21.__value = "0.01";
				option21.value = option21.__value;
				option22.__value = "0.03";
				option22.value = option22.__value;
				option23.__value = "0.1";
				option23.value = option23.__value;
				option24.__value = "0.3";
				option24.value = option24.__value;
				option25.__value = "1";
				option25.value = option25.__value;
				option26.__value = "3";
				option26.value = option26.__value;
				option27.__value = "10";
				option27.value = option27.__value;
				select3.id = "regularRate";
				div8.className = "select";
				div9.className = "control ui-regularizationRate";
				label4.htmlFor = "problem";
				option28.__value = "classification";
				option28.value = option28.__value;
				option29.__value = "regression";
				option29.value = option29.__value;
				select4.id = "problem";
				div10.className = "select";
				div11.className = "control ui-problem";
				div12.className = "container l--page";
				div13.id = "top-controls";
				div51.id = "main-part";
				div51.className = "l--page";
				div52.className = "more";
				article.id = "article-text";
				script1.src = "bundle.js";
				script2.src = "analytics.js";
			},

			m(target, anchor) {
				insert(target, _doctype, anchor);
				insert(target, text0, anchor);
				insert(target, html, anchor);
				append(html, head);
				append(html, text22);
				append(html, body);
				append(body, header);
				append(body, text29);
				append(body, div13);
				append(div13, div12);
				append(div12, div0);
				append(div12, text37);
				append(div12, div1);
				append(div12, text40);
				append(div12, div3);
				append(div3, label0);
				append(div3, text42);
				append(div3, div2);
				append(div2, select0);
				append(select0, option0);
				append(select0, option1);
				append(select0, option2);
				append(select0, option3);
				append(select0, option4);
				append(select0, option5);
				append(select0, option6);
				append(select0, option7);
				append(select0, option8);
				append(select0, option9);
				append(select0, option10);
				append(div12, text54);
				append(div12, div5);
				append(div5, label1);
				append(div5, text56);
				append(div5, div4);
				append(div4, select1);
				append(select1, option11);
				append(select1, option12);
				append(select1, option13);
				append(select1, option14);
				append(div12, text61);
				append(div12, div7);
				append(div7, label2);
				append(div7, text63);
				append(div7, div6);
				append(div6, select2);
				append(select2, option15);
				append(select2, option16);
				append(select2, option17);
				append(div12, text67);
				append(div12, div9);
				append(div9, label3);
				append(div9, text69);
				append(div9, div8);
				append(div8, select3);
				append(select3, option18);
				append(select3, option19);
				append(select3, option20);
				append(select3, option21);
				append(select3, option22);
				append(select3, option23);
				append(select3, option24);
				append(select3, option25);
				append(select3, option26);
				append(select3, option27);
				append(div12, text80);
				append(div12, div11);
				append(div11, label4);
				append(div11, text82);
				append(div11, div10);
				append(div10, select4);
				append(select4, option28);
				append(select4, option29);
				append(body, text85);
				append(body, div51);
				append(body, text159);
				append(body, div52);
				append(body, text161);
				append(body, article);
				append(body, text216);
				append(body, footer);
				append(body, text219);
				append(body, script1);
				append(body, text220);
				append(body, script2);
			},

			p: noop,

			d(detach) {
				if (detach) {
					detachNode(_doctype);
					detachNode(text0);
					detachNode(html);
				}
			}
		};
	}

	function indexnn(options) {
		init(this, options);
		this._state = assign({}, options.data);
		this._intro = true;

		this._fragment = create_main_fragment(this, this._state);

		if (options.target) {
			this._fragment.c();
			this._mount(options.target, options.anchor);
		}
	}

	assign(indexnn.prototype, {
	 	destroy: destroy,
	 	get: get,
	 	fire: fire,
	 	on: on,
	 	set: set,
	 	_set: _set,
	 	_stage: _stage,
	 	_mount: _mount,
	 	_differs: _differs
	 });

	indexnn.prototype._recompute = noop;

	function createElement(name) {
		return document.createElement(name);
	}

	function createText(data) {
		return document.createTextNode(data);
	}

	function setAttribute(node, attribute, value) {
		if (value == null) node.removeAttribute(attribute);
		else node.setAttribute(attribute, value);
	}

	function insert(target, node, anchor) {
		target.insertBefore(node, anchor);
	}

	function append(target, node) {
		target.appendChild(node);
	}

	function noop() {}

	function detachNode(node) {
		node.parentNode.removeChild(node);
	}

	function init(component, options) {
		component._handlers = blankObject();
		component._slots = blankObject();
		component._bind = options._bind;
		component._staged = {};

		component.options = options;
		component.root = options.root || component;
		component.store = options.store || component.root.store;

		if (!options.root) {
			component._beforecreate = [];
			component._oncreate = [];
			component._aftercreate = [];
		}
	}

	function assign(tar, src) {
		for (var k in src) tar[k] = src[k];
		return tar;
	}

	function destroy(detach) {
		this.destroy = noop;
		this.fire('destroy');
		this.set = noop;

		this._fragment.d(detach !== false);
		this._fragment = null;
		this._state = {};
	}

	function get() {
		return this._state;
	}

	function fire(eventName, data) {
		var handlers =
			eventName in this._handlers && this._handlers[eventName].slice();
		if (!handlers) return;

		for (var i = 0; i < handlers.length; i += 1) {
			var handler = handlers[i];

			if (!handler.__calling) {
				try {
					handler.__calling = true;
					handler.call(this, data);
				} finally {
					handler.__calling = false;
				}
			}
		}
	}

	function on(eventName, handler) {
		var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
		handlers.push(handler);

		return {
			cancel: function() {
				var index = handlers.indexOf(handler);
				if (~index) handlers.splice(index, 1);
			}
		};
	}

	function set(newState) {
		this._set(assign({}, newState));
		if (this.root._lock) return;
		flush(this.root);
	}

	function _set(newState) {
		var oldState = this._state,
			changed = {},
			dirty = false;

		newState = assign(this._staged, newState);
		this._staged = {};

		for (var key in newState) {
			if (this._differs(newState[key], oldState[key])) changed[key] = dirty = true;
		}
		if (!dirty) return;

		this._state = assign(assign({}, oldState), newState);
		this._recompute(changed, this._state);
		if (this._bind) this._bind(changed, this._state);

		if (this._fragment) {
			this.fire("state", { changed: changed, current: this._state, previous: oldState });
			this._fragment.p(changed, this._state);
			this.fire("update", { changed: changed, current: this._state, previous: oldState });
		}
	}

	function _stage(newState) {
		assign(this._staged, newState);
	}

	function _mount(target, anchor) {
		this._fragment[this._fragment.i ? 'i' : 'm'](target, anchor || null);
	}

	function _differs(a, b) {
		return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
	}

	function blankObject() {
		return Object.create(null);
	}

	function flush(component) {
		component._lock = true;
		callAll(component._beforecreate);
		callAll(component._oncreate);
		callAll(component._aftercreate);
		component._lock = false;
	}

	function callAll(fns) {
		while (fns && fns.length) fns.shift()();
	}
	return indexnn;
}());