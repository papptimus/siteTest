(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Snow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCFF").s().p("AhKBCQAhhBghg0QAvghBGAhQgRBFAxAzQhmgVgvASg");
	this.shape.setTransform(45.4,23.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,204,51,0.694)").s().p("AgtAuQgSgTgBgbQABgaASgSQAUgUAZABQAbgBASAUQAUASgBAaQABAbgUATQgSASgbAAQgZAAgUgSg");
	this.shape_1.setTransform(-1.5,43.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(204,0,204,0.694)").s().p("AgmAmQgPgPAAgXQAAgVAPgRQAQgPAWAAQAWAAAQAPQAQARAAAVQAAAXgQAPQgQAQgWAAQgWAAgQgQg");
	this.shape_2.setTransform(59.7,-11.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,153,0,0.694)").s().p("AgoApQgQgRAAgYQAAgXAQgRQARgQAXAAQAYAAARAQQAQARAAAXQAAAYgQARQgRAQgYAAQgXAAgRgQg");
	this.shape_3.setTransform(56.8,65.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,0,0.694)").s().p("AiWAVQBxg8gihtQBYBgBihKQg4BhBcBXQh8gYgoBzQgQhjh5gdg");
	this.shape_4.setTransform(4.2,18.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,255,0,0.694)").s().p("Ag+A+QgZgaAAgkQAAgjAZgaQAagaAkAAQAlAAAZAaQAaAaAAAjQAAAkgaAaQgZAaglAAQgkAAgagag");
	this.shape_5.setTransform(-19.4,-13.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00FF00").s().p("AgoBLQgohQAHhFQBPA4BGg4QgaBKAaBLQg/grg1Arg");
	this.shape_6.setTransform(17.9,62.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgmAoIgph3QBEAcBMgOQgPBIAeBJQg3gsg/AEg");
	this.shape_7.setTransform(-29.5,22.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00FFFF").s().p("AhSgkQBgg6BWAFQhDAxAOBOQhRgKgtA+Qglg7AihDg");
	this.shape_8.setTransform(22.5,-9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Snow, new cjs.Rectangle(-37.5,-22,102.6,93.5), null);


(lib.skiptomenu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAUAqQgLAGgNAAQgMAAgHgFQgJgGgBgLQgEgXAAgRQAAgMADgQQABgHAHAAQAEAAACACQADACAAAEIgCANIgBAOIABAYQACAKACAHIAFACIAGABQALAAANgEIAAgSIgBgQQAAgTACgOQABgIAIAAQADAAACADQADACAAAEIgBAhIAAASIAAATIAAAGIAAAGQAAADgDADQgCACgDAAQgIAAgBgIg");
	this.shape.setTransform(16.7,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAVArIgCgTIgBgUIAAgHIAAgIQAAgTgHAAQgKAAgIAMQgIAKgEAQIgBAIIgBAJIABAIIABAHQAAAEgDADQgCACgEAAQgEAAgCgCQgDgDAAgEIAAgHIgBgIIABgZIACgZIgBgIIAAgJQAAgDADgCQACgDAEAAQAIAAABAMIAAAKQAPgUAOAAQAOAAAGANQAEAHAAARIAAAJIAAAHIACATQACALAAAIQAAAEgDACQgCACgEAAQgIAAgBgIg");
	this.shape_1.setTransform(7.5,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgdAmQgOgLAAgTQAAgXALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAKgKAGQgFAEgOAFIggARQAFAHAHADQAHAEAJAAQAGAAAIgCQALgDADgEQADgGADABQADAAADACQACACAAAEQAAAJgQAHQgNAGgNAAQgTAAgMgKgAgRgXQgHAJgEAPIAbgLQAPgJAHgFQgIgHgNAAQgKAAgHAIg");
	this.shape_2.setTransform(-2.2,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgEA0QgDgDAAgEIgCgfIgCgfQAAgJgDgFQgGADgGAGIgKAMIgFAFIgBAPIgBAPIABAHIABAHQAAAEgDACQgDADgDAAQgKAAAAgXIABgQIABgOIgBgOIgBgOQAAgUAJAAQAEAAACADQADADAAADIAAAFIgBAGIABAJQAEgJAJgIQAJgIAGAAQAOAAAEAOQAFgGAHgEQAGgDAJAAQAPAAAFAQQABADADAWIAGAxQAAAEgCACQgDADgEAAQgHAAgBgIIgEgbIgDgbQAAgGgCgFQgDgIgEAAQgDAAgJAFQgJAFgCADIAAARIADAWQACAOAAAJQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_3.setTransform(-14.1,0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("Akah8II1AAIAAD5Io1AAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AkaB9IAAj5II1AAIAAD5g");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAWAuQgMAHgPAAQgNAAgIgGQgJgGgCgMQgEgaAAgTQAAgNADgRQACgIAHAAQAFAAACACQADADAAAEIgBAOIgCAPIABAbQABALADAHIAGADIAGABQAMAAAOgEIAAgUIAAgSQAAgUACgQQABgJAIAAQAEAAADADQADADAAAEIgCAkIAAAUIAAAVIABAHIAAAGQAAAEgDADQgDACgEAAQgHAAgCgJg");
	this.shape_6.setTransform(18.3,0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAXAvIgCgVIgCgVIABgIIAAgKQAAgVgIAAQgKAAgJANQgJAMgFARIgBAJIgBAKIABAIIAAAJQAAAEgCADQgDADgEAAQgEAAgDgDQgDgDAAgEIAAgJIgBgIIACgbIABgbIAAgKIgBgJQAAgEADgDQADgCAEAAQAJAAABAMIAAAMQAQgWAQAAQAQAAAGAOQAEAJAAARIAAAKIAAAIQAAAIACANQADANAAAIQAAAEgDADQgDACgEAAQgIAAgCgJg");
	this.shape_7.setTransform(8.2,0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AghAqQgOgMAAgWQAAgYAMgRQANgTAWAAQAPAAALAGQAMAGAAAOQAAAKgLAIQgEADgQAHIgkARQAFAIAIAEQAJAEAJAAQAHAAAJgCQALgEADgFQAEgFADAAQAEAAADADQACACAAAEQAAAKgRAIQgPAHgOAAQgVAAgOgLgAgTgZQgIAJgEARIAegNQAQgIAIgHQgJgHgOAAQgLAAgIAJg");
	this.shape_8.setTransform(-2.4,0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgFA5QgCgDAAgEQAAgMgDgXQgCgVAAgMQAAgKgDgGQgHADgHAHIgLANIgFAGIgBAQIgBARIABAIIABAHQAAAEgDADQgDADgEAAQgLAAAAgZIABgRIABgRIgBgPIgBgQQAAgWAKAAQAEAAADAEQADADAAAEIAAAGIgBAFIAAALQAFgLAKgIQAKgIAHAAQAPAAAFAPQAFgHAHgEQAIgDAJAAQAQAAAGARIAEAbIAHA2QAAAEgCADQgDADgFAAQgHAAgCgJQgCgKgBgUIgEgdIgDgNQgDgIgEAAQgEAAgJAGQgKAFgDAEIABASIADAZQACAPAAAKQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_9.setTransform(-15.6,0.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(2,1,1).p("AE3CJIptAAIAAkRIJtAAg");
	this.shape_10.setTransform(0,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00FFFF").s().p("Ak2CJIAAkRIJtAAIAAERg");
	this.shape_11.setTransform(0,0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAUAqQgLAGgNAAQgMAAgHgFQgJgGgBgLQgEgXAAgRQAAgMADgQQABgHAHAAQAEAAACACQADACAAAEIgCANIgBAOIABAYQACAKACAHIAFACIAGABQALAAANgEIAAgSIgBgQQAAgTACgOQABgIAIAAQADAAACADQADACAAAEIgBAhIAAASIAAATIAAAGIAAAGQAAADgDADQgCACgDAAQgIAAgBgIg");
	this.shape_12.setTransform(16.7,1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAVArIgCgUIgBgSIAAgIIAAgIQAAgTgHAAQgKAAgIALQgIALgEAPIgBAJIgBAIIABAIIABAJQAAADgDADQgCACgEAAQgEAAgCgCQgDgDAAgDIAAgJIgBgIIABgYIACgYIgBgJIAAgIQAAgEADgDQACgCAEAAQAIAAABALIAAAKQAPgTAOAAQAOAAAGAMQAEAIAAARIAAAIIAAAIIACATQACALAAAHQAAAEgDADQgCACgEAAQgIAAgBgIg");
	this.shape_13.setTransform(7.5,0.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgdAmQgOgLAAgUQAAgVALgQQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAIQgFADgOAGIggAPQAFAIAHAEQAHADAJAAQAGAAAIgCQALgDADgFQADgEADgBQADAAADADQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEARIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAJg");
	this.shape_14.setTransform(-2.2,0.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgEA0QgDgDAAgEIgCgfIgCgfQAAgJgDgFQgGADgGAGIgKAMIgFAFIgBAPIgBAPIABAHIABAHQAAAEgDACQgDADgDAAQgKAAAAgXIABgQIABgOIgBgOIgBgOQAAgUAJAAQAEAAACADQADADAAADIAAAFIgBAGIABAJQAEgJAJgIQAJgIAGAAQAOAAAEAOQAFgGAHgEQAGgDAJAAQAPAAAFAQQABADADAWIAGAxQAAAEgCACQgDADgEAAQgHAAgBgIIgEgbIgDgbQAAgGgCgFQgDgIgEAAQgDAAgJAFQgJAFgCADIAAARIADAWQACAOAAAJQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_15.setTransform(-14.1,1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(2,1,1).p("AEbh8IAAD5Io1AAIAAj5g");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0066CC").s().p("AkaB9IAAj5II1AAIAAD5g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.2,-16.9,58.6,30.5);


(lib.nextSEGMENT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFA5QgCgCAAgDIAAgEIABgDIgBgLIAAgNIgCgdIgCggIgHAAQgSAAgJgDQgHgBAAgGQAAgEACgCQADgCADgBIANACIANABIAOAAIANgBIASACIASABQADAAACACQADACAAAEQAAACgDADQgCACgDAAIgSgBIgSgBIgGAAIADAjIABAiIABAJIAAAJQAAAFgBAEQgCAEgFAAQgCAAgDgCg");
	this.shape.setTransform(-68.9,-51.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag0A9QgCgDAAgDIABgKIAAgKIAAgOIABgPIgBgOIAAgQIgBgPIgBgOQAAgDADgDQAEgDADgBQAFABAGAIQATAeAPATQASAVAWAWIAAgKIAAgKQAAgigDgUIgCgIIgBgIQAAgJAIAAQAOgBAAAzIgBAZIAAAaIgBAMQgBAJgHgBQgFABgGgGQgfgegpg4IAAASIAAARIAAATIAAATQAAAWgIAAQgEAAgDgDg");
	this.shape_1.setTransform(-81.3,-51.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AghA9QgIgIAAgZIAAgKIABgOIgBgDQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBIACghIgBgJIgBgIQAAgKAIABQAEAAACABIASgDIAOgCQATAAAMAFQAFADAAAFQAAADgDACQgCADgDAAIgDAAQgNgFgMAAIgNACIgQAEIAAAIIgBAdIAigDIASgCQAEAAACADQACACAAADQAAAHgHAAIgSACIgjAEIgBAKIAAAJQgBARADADQACADAKAAIAOgBIAPAAIAEAAIAFgBQAIAAAAAIQAAAHgGABQgIABgYAAQgXAAgHgFg");
	this.shape_2.setTransform(-92.5,-51.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAwA7QgDgEgBgJIgDgNIgKg2IgQAuIgEAPQgDAJgEAFQgDAGgEAAQgEAAgEgFIgDgIIgCgJQgHgbgHgfIgCAOIgKAoQgBAIgEAOQgCAGgFAAQgEAAgCgDQgCgCAAgEQAAgNAFgTIAIgeIAGgZQACgRAEgFQAEgFAEAAQAFAAADAGQADAHAEAVQAEAaAIAdQALgdAJghIACgLQABgHACgEQADgGAFAAQAIAAADANIADASQAEAjAIAZIADANIADANQAAAEgDACQgCACgDAAQgEAAgDgEg");
	this.shape_3.setTransform(-104.7,-51.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgnA1QgKgKAAgWQAAgUAKgVQAJgVAPgOQALgIAJAAQAIAAALAFQAOAFAAAHQAAADgCADQgCACgEAAIgEgCQgMgHgJAAQgFAAgGAGIgJALQgSAYAAAbQAAAPAEAFQAFAHANAAQANAAALgJQALgJAEgRQgVAAgPAIIgEABQgDgBgCgCQgCgCgBgEQAAgEAFgDQAQgJApAAQADAAACACQADABAAAEQAAAFgEACQgGAYgOAPQgRAOgUAAQgTAAgJgLg");
	this.shape_4.setTransform(-117.2,-51.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgiA9QgHgIAAgZIAAgKIABgOIgBgDQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBIABghIgBgJIAAgIQAAgKAHABQADAAADABIARgDIAPgCQATAAALAFQAGADAAAFQAAADgCACQgCADgEAAIgCAAQgOgFgMAAIgNACIgQAEIABAIIgBAdIAggDIATgCQADAAADADQACACAAADQAAAHgHAAIgTACIgjAEIAAAKIgBAJQAAARADADQACADAKAAIAOgBIAOAAIAFAAIAEgBQAJAAAAAIQAAAHgHABQgHABgXAAQgYAAgIgFg");
	this.shape_5.setTransform(-127.5,-51.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgfA2QgOgHAAgMQAAgDACgCQACgCAEAAQADAAADAFQAEAFADADQAHAEANAAQALAAAKgFQAOgHAAgMQAAgKgMgFQgJgFgNgBQgMAAgJgEQgLgGAAgMQAAgOAQgLQAPgLAPAAQAHAAAKACQANAEAAAFQAAAGgHABIgLgCIgMgCQgMABgIAFQgJAGAAAJQAAAHAMACIAPACQASABAKAKQAJAIAAANQAAATgRALQgPAKgSAAQgPgBgMgFg");
	this.shape_6.setTransform(-138.3,-51);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgFA5QgCgCAAgDIAAgEIABgDIgBgLIAAgNIgCgdIgCggIgHAAQgSAAgJgDQgHgBAAgGQAAgEACgCQADgCADgBIANACIANABIAOAAIANgBIASACIASABQADAAACACQADACAAAEQAAACgDADQgCACgDAAIgSgBIgSgBIgGAAIADAjIABAiIABAJIAAAJQAAAFgBAEQgCAEgFAAQgCAAgDgCg");
	this.shape_7.setTransform(-153.5,-51.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAlA8IgMgOIgKgRIgMgRIgaAfIgPAQQgCADgDAAQgEAAgCgDQgCgCAAgDQAAgDACgDIAOgPIAdghIgSgYIgJgMQgGgHgFgEQgDgDAAgDQAAgEACgCQADgDADAAQAHAAAKAPIAKANIAQAVIASgYQARgZAFAAQADAAADADQACACAAAEQAAACgCADIgQAVIgKAOIgLANIASAZQAKAPAIAJQACADAAADQAAADgCACQgDADgDAAQgDAAgDgDg");
	this.shape_8.setTransform(-165.5,-51.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AghA9QgIgIAAgZIAAgKIABgOIgBgDQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBIACghIgBgJIgBgIQABgKAHABQAEAAACABIARgDIAPgCQATAAAMAFQAFADAAAFQAAADgCACQgCADgEAAIgDAAQgMgFgNAAIgNACIgQAEIABAIIgBAdIAhgDIASgCQADAAADADQACACAAADQAAAHgHAAIgSACIgjAEIgBAKIAAAJQAAARACADQACADAKAAIAOgBIAOAAIAFAAIAEgBQAJAAAAAIQAAAHgGABQgIABgYAAQgYAAgGgFg");
	this.shape_9.setTransform(-175.9,-51.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag0A9QgCgDAAgDIABgKIAAgKIAAgOIABgPIgBgOIAAgQIgBgPIgBgOQAAgDADgDQAEgDADgBQAFABAGAIQATAeAPATQASAVAWAWIAAgKIAAgKQAAgigDgUIgCgIIgBgIQAAgJAIAAQAOgBAAAzIgBAZIAAAaIgBAMQgBAJgHgBQgFABgGgGQgfgegpg4IAAASIAAARIAAATIAAATQAAAWgIAAQgEAAgDgDg");
	this.shape_10.setTransform(-187.5,-51.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AghA9QgIgIAAgZIAAgKIABgOIgBgDQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBIABghIgBgJIAAgIQAAgKAHABQADAAADABIARgDIAPgCQATAAALAFQAGADAAAFQAAADgCACQgCADgEAAIgCAAQgOgFgMAAIgNACIgQAEIABAIIgBAdIAggDIATgCQADAAADADQACACAAADQAAAHgHAAIgSACIgjAEIgBAKIgBAJQAAARADADQACADAKAAIAOgBIAOAAIAFAAIAEgBQAJAAAAAIQAAAHgGABQgIABgYAAQgYAAgGgFg");
	this.shape_11.setTransform(-203.5,-51.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgwA+QgCgCAAgDIABgaIABgYIAAgMIAAgNIABgTIAAgSQAAgDACgCQADgDADAAQADAAACADQACACAAADIAAASIgBATIAAATIAhgFQAUgEANgBIABghQAAgGACgGQADgJAFAAQADAAACADQACACAAADIAAAEQgCADAAAGIAAAHIABAHIgCAXIgBAWIABASIABASQAAADgCACQgDADgDAAQgDAAgCgDQgCgCAAgDIgBgSIgBgSIAAgLQgNAAgTAEIghAGIgBAVIgBAUQAAADgCACQgDACgDAAQgDAAgCgCg");
	this.shape_12.setTransform(-214.8,-51.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgFA5QgCgCAAgDIAAgEIABgDIgBgLIAAgNIgCgdIgCggIgHAAQgSAAgJgDQgHgBAAgGQAAgEACgCQADgCADgBIANACIANABIAOAAIANgBIASACIASABQADAAACACQADACAAAEQAAACgDADQgCACgDAAIgSgBIgSgBIgGAAIADAjIABAiIABAJIAAAJQAAAFgBAEQgCAEgFAAQgCAAgDgCg");
	this.shape_13.setTransform(-225.8,-51.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgmAwQgRgOAAgWQAAgaAQgWQASgZAZAAQAaAAANAMQANAMAAAaQAAAagOAWQgSAZgZAAQgWAAgPgOgAgagaQgNASAAAUQAAAPALAKQALAJAQAAQARAAANgUQALgRAAgUQAAgTgJgHQgHgIgUAAQgRAAgNATg");
	this.shape_14.setTransform(-243,-51.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgFA5QgCgCAAgDIAAgEIABgDIgBgLIAAgNIgCgdIgCggIgHAAQgSAAgJgDQgHgBAAgGQAAgEACgCQADgCADgBIANACIANABIAOAAIANgBIASACIASABQADAAACACQADACAAAEQAAACgDADQgCACgDAAIgSgBIgSgBIgGAAIADAjIABAiIABAJIAAAJQAAAFgBAEQgCAEgFAAQgCAAgDgCg");
	this.shape_15.setTransform(-254.3,-51.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgnAwQgQgOAAgWQAAgaAQgWQASgZAZAAQAaAAANAMQANAMAAAaQAAAagPAWQgQAZgaAAQgWAAgQgOgAgagaQgNASAAAUQAAAPALAKQALAJAQAAQASAAAMgUQALgRAAgUQAAgTgJgHQgHgIgUAAQgRAAgNATg");
	this.shape_16.setTransform(-271.5,-51.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgnA1QgKgKAAgWQAAgUAKgVQAKgVAOgOQALgIAJAAQAIAAALAFQAOAFAAAHQAAADgCADQgCACgEAAIgEgCQgMgHgJAAQgFAAgGAGIgJALQgSAYAAAbQAAAPAEAFQAFAHANAAQANAAALgJQALgJAEgRQgVAAgPAIIgEABQgDgBgCgCQgCgCgBgEQAAgEAFgDQAQgJApAAQADAAACACQADABAAAEQAAAFgEACQgGAYgOAPQgRAOgUAAQgSAAgKgLg");
	this.shape_17.setTransform(-283.3,-51.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Background
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(2,1,1).p("A0ijpIa3AAIAAjOIOOG4IuOG3IAAjCI63AAg");
	this.shape_18.setTransform(-163.4,-52.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00FF66").s().p("AGVD2I63AAIAAnfIa3AAIAAjOIOOG4IuOG3g");
	this.shape_19.setTransform(-163.4,-52.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFC4").s().p("AGVD2I63AAIAAnfIa3AAIAAjOIOOG4IuOG3g");
	this.shape_20.setTransform(-163.4,-52.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18}]}).to({state:[{t:this.shape_20},{t:this.shape_18}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-295.9,-97.6,265,89.9);


(lib.frb_rightOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AgqAcIAIgHQAKALASAAQAPAAAMgLQALgMAAgPQAAgQgLgMIAHgIQAOAPAAAVQAAATgOAPQgPAOgTAAQgVAAgPgOg");
	this.shape.setTransform(4.3,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_rightOut, new cjs.Rectangle(0,0,8.5,8.5), null);


(lib.frb_rightIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4D0D8").s().p("AghAXIAHgIQAIAJANAAQAMAAAIgJQAJgJAAgLQAAgMgJgJIAIgHQALANAAAPQAAAQgLAMQgNALgPAAQgRAAgLgLg");
	this.shape.setTransform(3.4,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_rightIn, new cjs.Rectangle(0,0,6.8,6.8), null);


(lib.frb_leftOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Symbol_22:0});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AgqAHQAAgTAPgPQAPgPATAAQAVAAAPAPIgHAHQgNgMgQAAQgPAAgMAMQgMAMAAAPQAAASAMALIgHAHQgPgOAAgWg");
	this.shape.setTransform(4.3,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_leftOut, new cjs.Rectangle(0,0,8.6,8.6), null);


(lib.frb_leftIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Symbol_23:0});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4D0D8").s().p("AghAGQAAgQAMgLQALgMAQAAQAPAAANAMIgHAHQgJgJgMAAQgMAAgIAJQgJAIAAAMQAAAMAJAJIgHAHQgMgLAAgRg");
	this.shape.setTransform(3.4,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_leftIn, new cjs.Rectangle(0,0,6.9,6.9), null);


(lib.frb_hitArea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AhABBIAAiBICBAAIAACBg");
	this.shape.setTransform(6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_hitArea, new cjs.Rectangle(0,0,13,13), null);


(lib.frb_dot_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_dot_disabled, new cjs.Rectangle(0,0,4,4), null);


(lib.frb_dot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_dot, new cjs.Rectangle(0,0,4,4), null);


(lib.frb_background_pressed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAVQgJgIAAgNQAAgLAJgJQAJgJALAAQANAAAIAJQAJAJAAALQAAANgJAIQgJAJgMAAQgLAAgJgJg");
	this.shape.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_background_pressed, new cjs.Rectangle(0,0,6,6), null);


(lib.frb_background_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAVQgJgIAAgNQAAgLAJgJQAJgJALAAQANAAAIAJQAJAJAAALQAAANgJAIQgJAJgMAAQgLAAgJgJg");
	this.shape.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_background_disabled, new cjs.Rectangle(0,0,6,6), null);


(lib.frb_background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAVQgJgIAAgNQAAgLAJgJQAJgJALAAQANAAAIAJQAJAJAAALQAAANgJAIQgJAJgMAAQgLAAgJgJg");
	this.shape.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_background, new cjs.Rectangle(0,0,6,6), null);


(lib.fcb_rightOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AhABBIAAgKIB3AAIAAh3IAKAAIAACBg");
	this.shape.setTransform(6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_rightOut, new cjs.Rectangle(0,0,13,13), null);


(lib.fcb_rightIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4D0D8").s().p("Ag2A3IAAgKIBjAAIAAhjIAKAAIAABtg");
	this.shape.setTransform(6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_rightIn, new cjs.Rectangle(1,1,11,11), null);


(lib.fcb_leftOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("Ag7A8IAAh3IB3AAIAAAKIhtAAIAABtg");
	this.shape.setTransform(6,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_leftOut, new cjs.Rectangle(0,0,12,12), null);


(lib.fcb_leftIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4D0D8").s().p("AgxAyIAAhjIBjAAIAAAKIhZAAIAABZg");
	this.shape.setTransform(6,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_leftIn, new cjs.Rectangle(1,1,10,10), null);


(lib.fcb_hitArea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AhABBIAAiBICBAAIAACBg");
	this.shape.setTransform(6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_hitArea, new cjs.Rectangle(0,0,13,13), null);


(lib.fcb_check_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AgLAiIgBAAIgVgVIgCgEIABgSQAAgFAGAAIADACIARARIAhgkIAEgDQAHAAAAAGIAAASIgCAEIgoAnIgDACg");
	this.shape.setTransform(3.6,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_check_disabled, new cjs.Rectangle(0,0,7.1,7), null);


(lib.fcb_check = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLAiIgBAAIgVgVIgCgEIABgSQAAgFAGAAIADACIARARIAhgkIAEgDQAHAAAAAGIAAASIgCAEIgoAnIgDACg");
	this.shape.setTransform(3.6,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_check, new cjs.Rectangle(0,0,7.1,7), null);


(lib.fcb_background_pressed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgsAtIAAhZIBZAAIAABZg");
	this.shape.setTransform(4.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_background_pressed, new cjs.Rectangle(0,0,9,9), null);


(lib.fcb_background_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgsAtIAAhZIBZAAIAABZg");
	this.shape.setTransform(4.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_background_disabled, new cjs.Rectangle(0,0,9,9), null);


(lib.fcb_background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsAtIAAhZIBZAAIAABZg");
	this.shape.setTransform(4.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_background, new cjs.Rectangle(0,0,9,9), null);


(lib.blank_gr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("Aj+CqIAAlTIH9AAIAAFTg");
	this.shape.setTransform(32.5,17,1.275,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,34);


(lib.scene3redheadstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6FFFF").s().p("AAUAJIAIAIQAEAFgCAEQgGgIgEgJgAAFAUIgCgDQgDgFAAgEIAGANIgBgBgAgdgWIAAgDIAFADIgFAAg");
	this.shape.setTransform(-87.2,-88.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006600").s().p("Ak3AXQAAgEgCgEIgGgIIAAgDIAFAIIAHAIIABANIgFgKgAFLAEIgFAAIgBgKQAHAGAIADIABABIgKAAgAlLgMIgBgFIAIANIgHgIgAlUggIABAAIABACIgCgCg");
	this.shape_1.setTransform(17.5,66.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AiPEgQgbgNgSgWQgFgBgEgDIAAgCIgBgFQgEgNgIgKIAAgFQACgNgFgKQAHgKAMgDIABgEIACgEIAIgEIABgBIACgDIADgFIANgDIAIgHIAggZIAbALIAKgHQAPgIAUgCQARgCALAHIBFAAQAcgUAkgEQAMgBALgFIALgGQAHgOAKgNQAFgIAHgEQArAHgHAvQgCAQAEAQQALAugVAmQgEAHgIAEQhwgBhnAoIgLgCIAAABQgGAEgEAHIgBAEIgIAEIgGAFIgFADIAAgBIgIgCIAAACIgDADIgCAAIABACIgBACIAAABIgHAEIgEACQgBAGgDAFQgUgOgbgOgAgsCvIABgEIgBAAIAAAEgAg4icQgZAAgUgLQgRgFgHgOIgHgJIgBAgIgBAAQgNgPAAgSQAAgNgDgLQAAgBABAAQAAAAABAAQAAgBABAAQAAgBAAAAIAAgdQgBgOADgOIAEgFIAFgEIAJgDIgBAbQAJgNAQgKIBPABIAEAEIAEAEIAVgCQASgBASgDQABgZAjgEIACgBIA7ABQANADAJAHQADABACACQARAOAEAXQAFAhgZAWQgFAEgCAIQgFAVgRALIgdgDIgDAAQhWAPhXAGQAHgEAFgFg");
	this.shape_2.setTransform(0.3,5.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6600").s().p("Ak9CfQgGgMgGgPQAOACAKAAIACAAIALgDQASgGgOgXQgCgDAAgFIgFAAQAAAcgigJQABgFgCAAQgKgDgKgBIgHgBQgBgEgBgBIAAAAQgZgMAIgoQASgFAMgMQADgCAFAAIAAgKQAjAGAQgNIABgBIACgCIAAgBIABgBQACgCAAgEQgEAAgFgCQgJgDgIgBIgIAAIgIACQgLADgEAJIAAAKQgFAAgEACQgMAHgPgCQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAgBgBQgCgKgIgIIAAgJQAAgHACgHIAFgFIAFgFQANACAIgKIAEgBIACAAQAIAgAIgHIAEgEIAEgIQALgfAAgMIABAAIACgBIAKgLQAOgQASgNIAEAAIACACQAGAJAUAAIAZgBQgegHAIgaQAFgQgDgBIAOgNIAAAAQANAQAdAKIAKAEQAtANAcgLIAFgBIAEgDQgEAAgCgCQgIgLgPgIQgKgFgOgCIADgFIABgBQAGgBAFgFIABgBIASgDIAAABIAFgBIAZgBIADgCQAigQAkgBQADgCABgCIAAgBIAAgBIAAgBQADAHABAHIADATQAWgDAGgGIABABIABABIAHAAIACgCIABgCIAJgBIAfgDIAEADQAIALABAPIAAAAIAAABIACADIABACIAGAAIAEAAIABAAIAUgHQgEAFAAAIQADAaABAbQAAAVAUACIACgGQACgIgCgLQgEgLgCgNQAAgJADgIQAFgOgDgNQANgDALgGIA5ACIABAEIABACQACAGgBAGIAAACIADACIABACQAGAAAFgDIAEgCQACAGADAAQAEAAAGgSIABgBIAFgGQACgDAEgBQARgBAQAAIABACQAAAJAHAHIABABIAJABIABgBQADgCABgEIABgCQAEgCAEgBQAFgCAHABIAAAAIACABQACAMAHAIQAEAegFAdIAAADQgHgLgMgSIAAAJIAAAKIgKgBQgdgCgPAKIgEACQgEAjArgZIgCATQgBAKAFgEQAFgFAMgUQAEAAAEACIAKAFIAAADIgDAFIgBABQgKACgJAFQgLAFAAANIgNAHIAAAEIglADIgCgDIgBgCIgTgCIgBgDQgCgEgEAAIgDgEIgRgQIgFAAIAAAAIgEACIgBACIAAABIAAAEIAAACIAOAVQALAOAQgBIAAABIgCAEIABAKIAAAUIAAACIgDAEIgBACIgDABIgCAAIgfACIgDADIgBABIAAAGIAAAOIAAACIgDACIgFAFQAFgegIgVQgNgjgxgLIgEAAIgBgJIgCgGQgEgFgIABIgKABQgnAJABgdQAAgFgCgCQgXgSgUANIgcAAIgRAAIgOAFIgCABQgNAFgLAKIgBABQgGgBgEACQgDABgEADQgLAJgNAhIgJAAQgbgCgWgHQAEAQAOAGQACABAAAEIgBAKQgCAQgRADIAAAKIgJAAQgFAAgDACQgTAOgogHQAMARAjgCIAAAFQAAAEgBADQgDACgFAAIAABDIAAAKQAAAFgCACQgpAlggACIgEABQglAAgagxgAkiCTQCJAPiJgUIAAAFgAjfAzIAAgCIAAgDQAAgFgCgBQgMgGgMgEIgMgDQADAeAjgGgAi5h0IAAAPIAAAEIABASQAigdgRgGQgFgCgJAAIgEAAgAgIioIgIACQgDACAAADQAAAKAJAGQALAJAMAHIAHAAIABgBQAEgEAAgHQgCgRgLgNIgMgBQgDADgFABg");
	this.shape_3.setTransform(-4.8,-75.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC99").s().p("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gXgJIgBgBIgFgFIgKgHQgIgFgJgDQgEgDgFgBIgHgBIgLgKIgFgDIgkgZIAAgRIAAgDIAAgEIAAgHIAGADIAPAGQAFAIAJAFQANAHAKAJQAMAKAOACQAMgKgNgJQgNgIgLgKQgFgEgEgGIgKgOIgEgDIgKAAIgDgDQgGgJAAgLIABgNIACAAIAFADIAHAEQAEACACADQAIANAKALIALAAIADADQAIAHAJAFIADACQALAQAQAJQABAFAFADIAEACQAAAAABABQAAAAAAAAQAAABABAAQAAAAABAAIAPADQAMgLgOgKIgEgDQgRgIgMgQIgFgGIgBgBIgCgCIgJAAQgTgWgYgRIgGgTQgDgIAAgIIAFACQAfAOAWAcQACAIADAGIAKAQIAJAAIACADIAEAEQAJAHANACQAHgGgDgHIgCgDIgKAAQgIgIgGgKIABgBIgBAAIgBgDIgIgLIgBgCQgNgPgKgQIAAgCIAAgOIAAgCIAGAAQALAHAJALIABACIAEALQgBADADAFIADADIgBACIADACQAGAJAHAJIADAEQADAEAFgBIABgBIADABIAIAFIABADIABAEIAAABIAKAAIADADQASAWAQAYIALASQAHABAHgBQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAIACgEQABgJgEgHQgKgSgRgPQgDgDgBgFIgCgBIgIgDIgBAAIgJAAIgBgBIgBgEIgBgFIABgEIAEgFIAYgBIABABIADADIAFAEIAQAEIAIAHIAAABIAKAAIADADIAMAMIADAFQABAKAEAJQAEAOAKAKIACAEIAAAFIAAAEIAEAFIACAFIAAATIABAcIACAHIgBABIAGADIAHAEIAAAKIABACQABAEgBAEIALgBQASAPAWAEIAEAEIAGAEQAMAJANAHIAGACIAEACQAFAIAGAHQADACAEAAQAbAHAPAUQACACAEAAQApAVAmAZQADACAFAAQAagCAHATQAAACAFAAQAKAOATAEIAHABIAHAGQAOARAVALIAJAHQADAFAEADIAFADIAeAAQACAIAGAGIAEAFQALACAKAEQARAHANAMIAPADQAJAJAKAGQAUAMAJAVQAHABAEAEIAAABIAFADIADADIACAAQASAMASAKQAKAPAOAPIAAgJIgBgQIADgDIADgEIABgDQAAgDgCgDIgGgGQgCgegF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");
	this.shape_4.setTransform(0.3,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ak4QUIgJgCQgbgGAIgoIAAgGQgGgDgFgHQgKgOAGgRQABgFADgDIgBgCQgHgKgBgSIgCgBIAFglIADgCQADgDAEABIACgBIgCgGQgBgbAagIQAagGAVANIACACIAMAEIAnABIAJABIAHAEIAKAFQgEgGgCgIIgGgGIgFgEQgIgIgFgKIhRhJIAAgBIgXgVIgFgBIgDgGIgDgFQgGgJgKgEIgEgBIgCgEIgHgPIgKgEIgGgCIgBgDIgUgRQgOgngsgUIgGgIIgCgEQgEgIgHgFQgTgrgcgoQgDgFAAgHQgDgkATgeIALgFIAFgJIAHgKQAYgJAZgGIAVgEIAEgEIAEgDIApgFIABAAIAFgFQAJgIAJgFIAEgDIAYgEIAIgIIAJgFIABgEQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBIAYgFIAEgJIACgKIADgCIAOgEQANgVAWgQQADgCACgFQAhgUAegaIAGgFIADgDQATgCALgPIACgBIABAAIAAgBQACgEAAgFIgHgeIgCgLIgCgCIgEgEQgHglgCglIgBgEIgCgFIACg7IgFgBIgEgMIgEgPIgCgHQgBgJABgJQgKgMgBgQIgBgOIgCgEIgEgGIAAgJIAAgFIAAgDQgIgDgHgGIgJgKIgBgFIgBgDQgOgEgJgNIgCgFIgQgGQgGgPgLgMQgGgGgIgFIgDgFIAAgDQglgtgxgkIgBgBIgEgCIgVgRQgpgDgNgeQgfgTgcgZQgHgGgJgCQgMgDgMgFIg4gmQgMgNgQgKQgbgRgZgUQgHgFgGgHIAAgLQgIgGgLAAQgFgBgEgEIgcgNQgEgCgCgEIgTgDIhbgtIABAAQAEgEABgFIgrgQIgHgBIgBgBIABgBIgKgEIgDgCQgMgHgKgJIgWgHIgEgDQgUgSgXgLIgFgDQgNgMADgSQABgHgBgHQgBgJAEgGIgFAAIAEgEQAGgBAGABIAJAAQgGgMABgPIACgSQABgFAFgCIAQAAIACABIACAAQgFgJgBgLQAAgHACgGIADgHIACgDQAQABAMAIIABAAQAJADAIAFIAEADIAAgKIAAgEQgCgNALgGQAPAAAMAKIAOANIADADQAHAHACAJIACAGIACAEIARAUQADADACAEIAAAAIAIABIAEgDIAFgFIADgBQAUgBAUABIAEAEIADAEIACABIAQADIAKAJQAJAHAHAIIAJAAQAIAJAFALIAEAFQACAUAIATQAHAOACAPIAAAoIAFAKIABgCIADgBIAAAAIACAAQAGAGALADQAUAZAeAOQAbANAZARQAmAcAqAXQAYAQAcAJQAgAXAkAQIADABIAJAEQAUAJARAMIAWACIAFAFIAFAJIANAKIAPAOIAEACIAVAEIAEAEIATASIAPADIAFAFIARARIAQADQAHARARAJQAOAIABALQAKAEANgCIABgBIABABIABgBIAEgDQASgWgVgTIgBgFIAAgJQgEAAgBgCQgIgagNgWIgGgIIgBgCIgHgKIgBgBIgCgBIgBgCIgNgNQgFAAgBgBIgMgdQgMgUgJgUIAAgBIgJgPIgKAAIgJAAIgKAAQghgDg9ALIgMACQgEAAgFgCQhHgagPhUIgBgEIAIAAQAKABAKAEQABAAAAAFQAhAJABgcIAFAAQAAAFACADQANAXgRAGIgLACIgDAAQgJABgOgCQAGAPAGAMQAbAzAogDQAggCAoglQADgCAAgFIAAgKIAAhDQAFAAACgCQACgDAAgEIAAgFQgjACgNgRQApAHATgOQADgCAFAAIAJAAIAAgKQARgDACgQIAAgKQAAgEgBgBQgPgHgDgQQAVAHAbACIAKAAQANghALgKQAEgCADgBQAEgCAGABIABgBQAKgKAOgFIACgBIAOgFIARAAIAdAAQATgOAWATQADACAAAFQgBAdAngJIAKgBQAIgBADAFIADAFIAAAKIAFAAQAxALANAkQAIAVgFAeIAFgFIACgCIAAgCIAAgOIAAgGIABgBIADgDIAggCIACgBIADAAIABgCIADgEIAAgCIAAgUIgBgLIABgEIABgBQgQAAgLgNIgOgVIAAgCIAAgEIAAgBIABgCIADgCIAAAAIAGAAIAQAQIAEAEQAEAAACAEIABADIATACIABACIACACIAlgCIAAgEIANgHQgBgNAMgFQAJgFAKgCIABgBIADgFIAAgDIgKgFQgEgCgFAAQgLAUgFAEQgFAFABgKIABgTQgrAZAFgjIADgCQAQgKAdACIAJABIAAgKIAAgJQANASAGALIABgDQAFgegEgdQgHgIgCgMIgCgBIgBAAQgGgBgFABQgEACgEACIgBACQgBAEgDACIgBABIgJgBIgCgBQgGgHAAgJIgBgCQgRAAgQABQgEABgDADIgEAGIgBABQgGARgEABQgDAAgCgHIgFADQgEADgGAAIgCgCIgCgCIAAgCQABgHgCgFIgBgCIgCgEIg5gCQgKAFgNADQADAOgFAOQgDAIAAAJQACANADALQADAKgCAJIgCAGQgUgCAAgVQgBgbgDgaQAAgIADgFIgTAHIgBAAIgEAAIgGAAIgCgCIgCgDIAAgBIAAgBQAAgOgJgLIgDgDIggADIgIABIgBACIgCACIgGAAIgCgBIAAgBQgGAFgWAEIgDgTQgBgHgDgHIAAABIAAAAIAAABQgBADgDACQgmABghAQIgEACIgYAAIgFACIAAgBIgTADIgBABQgEAFgGABIgBABIgEAFQAOACALAFQAPAHAIAMQABACAFAAIgEACIgFACQgcALgtgOIgKgDQgegKgMgQIgBAAQAXgDATAAIAAgBQAIgIANABIAFgBIAGgDIABgBQADgGAHAAQAFgJALAAIAmAAQASgMAXgDIATgDIAVAAIABACIACACIgCgDIADABQAbAKAHAIIAAAAQAIgJAMgCIAmABQAIAFAFAIQAGAKABAKQAagLAdgFIADgBIAZgBIAVAAIASgBIAHAAIACACQAFAHADAIIAAADIABAAIADAAIAAgCIAAgBIABgBIAEgDIABgCQACgFAGgBIAAgBIAFgEQADgDABgBIABABIABgBIAsABIACACIAGAJIAAABIADgCQAPgGAQADQATALACAVQACAggDAgQAAADgCABIAAAQQgBAVgVAFIgLAKIgCAOQgBAGgGAAIgSABQgaALgQgGQgCAKACAKQADAagXAGIgTAEIgGABIAAAFQABAMgIAJQgHAHgKADQACARgQASIgMANQgIAlgLAlQgBAGgEAGIgCACQgUA8guArIgDAAIAAAKIAAAJIAAAOQgFALABAOQADAVATABIABABIABgBIAKAAQAGgBAEgDQASgOAIgWQAUgOAKgXQAJgUALgTQAKgQAMgNIABgCIADgEQAIgKAGgKQAOgYAWgTQAGgFAFgHIAYgfQAIgGAGgHIAGgHQAWgOARgVIAGgIIAOgKQAIgHAFgIIAMgIIBBgzQACgDAEgDQAIgGAGgHQAPgQARgNQAdgYAdgZQANgMAFgRIAAgBIACAAIAXgZIADgEIgFAAIAAgJIASgFIABgCQAKgLANgHQAEgKAMgCIAEgBIAAgDIABgCIAC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QAGgJAEgKIAFgHQAAgEACgDIAFgHQACgzAbgpQACgKgBgLIAAgCQAPgEgGgYIgBgKIgBgJQgEgTgOgKIgFAAQgDAxgIgNQgFgHgIgdQgFAAgDgCQgLgIgKgJIAAgFQgYgBgOAPQgFAAgBgCQgEgHAAgKIACgBQgNgZgUgKIgQABIAAAAIgTACQgOABgNAIQgGADgFAEIgDADIACAEQADALgCAQIAAABQgDASgkgHQAAAFACAEQAPAigTAFQgHABgKgBQgFAAgBACQgGAJgagLQALAbgGAnIgFABIgKAAIAAAKIAEANQAXAXAKAeIAJAcIAKAdQAGAFAEAGQADADAEADQAcAxAnApIACABIABAAQAYACAGADQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAABgBAAQAAAAAAABQAAAAgBAAQAAABgBAAQgJAFgjAHQgDABAAAOQAFAcADAeIAFAGQACADAAAEIgBACIgCAFIgDACIAAAQIABAKQgOgPgKgQQgTgKgSgLIgCAAIgDgEIgEgDIAAgBQgFgEgHgBQgJgVgTgLQgKgGgJgJIgQgDQgNgNgQgHQgKgEgLgBIgFgFQgFgGgDgIIgdAAIgFgDQgFgEgDgFIgIgGQgVgLgOgSIgHgFIgHgBQgUgEgJgOQgFAAgBgCQgHgUgaACQgFAAgDgCQglgZgpgVQgFAAgCgCQgOgUgbgGQgFAAgCgDQgHgGgEgJIgEgCIgGgCQgOgGgMgJIgFgEIgFgEQgWgFgSgPIgKABQABgEgCgDIgBgCIAAgKIgGgFIgGgDIAAgBIgBgHIgBgcIAAgTIgCgEIgFgFIAAgFIAAgFIgCgEQgJgKgFgNQgDgKgBgKIgEgEIgLgMIgDgEIgKAAIgBAAIgIgIIgPgDIgFgFIgDgDIgCgBIgXABIgEAFIgBAEIAAAFIACAFIAAAAIAKAAIABABIAIADIABAAQACAFADADQAQAPALATQAEAHgBAIIgCAEQAAABgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQgHAAgHgBIgMgRQgPgYgTgWIgDgEIgJAAIgBAAIgBgFIAAgDIgJgEIgCgCIgBABQgFACgDgEIgDgFQgIgIgFgKIgDgCIAAgCIABABIgGgMIgDgLIgCgCQgIgKgLgIIgGgEIAAAEIAAADIAAAOIAAACQAKAQAMAOIACACIAIAMIABACIAAABQAGAKAHAIIAKAAIADAEQADAGgIAGQgMgBgJgIIgEgDIgDgEIgJAAIgJgPQgEgHgCgHQgVgdgggOIgFgCQAAAIADAIIAHAUQAYAQASAWIAKAAIACADIABABIAEAFQAMAQARAJIAFACQAOAKgMALIgQgCQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBIgFgCQgEgCgBgGQgRgIgLgRIgCgCQgJgFgIgGIgEgEIgKAAQgKgKgIgNQgDgEgEgCIgGgEIgFgCIgCgBIgBAOQgBALAHAIIADADIAKAAIADAEIALANQAEAGAFAFQALAJAMAJQANAJgLAKQgPgDgLgKQgLgIgMgHQgJgFgFgIIgPgHIgHgDIAAAHIAAAFIAAACIAAARIAlAaIAEADIAMAJIAHABQAFABAEADQAJADAIAFIAJAIIAFAEIABABQAYAKAYAIQAKADAJAGQAHAFADAIQAOAMATABQAEAAADACIAKADQAJABAJAEQANAHAJAKQAWAQAYAFIAAABIAEABIAGAEIAAAJIAEADQAGAHAIAGQAGABAGAEIAGAEIADACQAKABAHAHIADAFQArAXAmAgIA0AhIALAHIAQALQAIADAHAGIAFAEIAeAVIAFACQAHADADAGIACABQAHAAAGADIgJAEIgGADIAEABQA4ARAjAwIAFAIIACABIAJAEIAEAJIAGAKIAPAGQAEALAKAHIAMAHIADAKIADAJQANAFAHALIAFAJIATAHIAEAJIAEAFIABAFIAAADIAJAFIAAAAgAtMtWQACgFgEgEIgIgIQAEAJAGAIgADXQnQAQghAIgeIABgCIAAgBIAEgQIAAAPQABBJgSAAQgFAAgHgGgACBQiIAAgFQAYgQANgQQAbghgNgiIAJAKQAHAIAAAOQgMAmgSARQgQARgUAAIgBAAgAgrDkIAAAAIAAADIAAgDgAlUpjIAAgFQBOALgLAAQgIAAg7gGgAmhqQQgcgJAJgvQAAgFgCgEIgIgUIAIADQgQgSAJgaQAEgOAOgJIAOgBIAJgGIADgCIACgBIACgBIgBgCQARgOAJgEIABgDIAIgKIAIgGQALgOAQgKIALgGIANAAQAWgbAFABQADACgFAQQgIAaAdAHIgZABQgTAAgHgJIgBgCIgEAAQgSANgPAQIgJALIgCABIgBAAQAAAMgMAfIgDAHIgEAFQgIAHgIghIgCABIgEABQgIAKgNgCIgFAFIgFAFQgCAHAAAHIAAAKQAIAIACAKQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAPACAMgHQAEgCAFAAIAAgKQAEgKALgEIAIgBIAIAAQAIABAJADQAEACAFAAQAAAFgCACIgBABIAAAAIgCACIgCACQgPANgjgGIAAAKQgFAAgDACQgMAMgTAFQgHAoAYALIABABQABABAAAEQgEAAgFgBgAgurKIgDgCQgGgFAAgHIgBgCIgEgFQgCgNAAgNQABgaAVgNIAGAAQAIgIADABQACABAAAGIAJAAIADADIAEAHIAAACQgBAGgFAEIgCABIgOACIgIAaQACANAFALIgBADQgBAFgFADIgBABIgHgBIAAAMIgBAAQAAAAgCgMgAk4rbIANADQAMAEAMAGQACABAAAFIAAACIgBADIgKABQgZAAgDgZgAtysrIABAAIABABIgCgBgAjrtYIAAgEIAAgPQAMgBAGACQARAHgiAdIAAAAIgBgSgANotmIgDgBIgBgEIAYADIAnAIQACAAgCAAIg7gGgAgkt4QgMgHgMgJQgJgGAAgKQAAgDADgCIAIgCQAFgBADgDIANABQALANACARQAAAHgEAEIgCABIgDAAIgDAAgAOBuPQgagDgWgJQA2gCAqAKIAKABIgBAFIgXABQgSAAgQgDg");
	this.shape_5.setTransform(0.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.scene3redheadstill, new cjs.Rectangle(-101.8,-107.3,204.1,214.7), null);


(lib.scene3blondestill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006600").s().p("AgUATQAFgEADgGQACgEAAgFIAAgIIABAAIABgBIAEgEIAFgGIAUgDIgCADQgBADAAADIAAACIgOAUIgHAFQgHAEgGAFIgEgEg");
	this.shape.setTransform(-0.7,-2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6FFFF").s().p("AgFAAIALAAIgGAAg");
	this.shape_1.setTransform(-67.9,-47.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIAaIgCgEQgBgGAGgEIgCgJIgBgKQgFgDgCgFIAAgCIAAgEQAAgFAEgCIACAAIADgBIAAAAQAIAAAFADQAHAFgBANIABAIQAHAWgTAHIgDABQgEAAgDgEg");
	this.shape_2.setTransform(-23.8,-74.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AATFAIBRgEIgMARQgigJgjgEgAhsDGQgdgrgqgcIAHgBIgBAEQAJAKAKgIIAKgIIASgBIgBgBQgCgHABgHQAKgKAJgMQAJgMgDgJIATACIAAABQAHAHAKABIAeAEIASADIAMAFQAFACAEAEQARAAASACQBAAQBDgCQAkAAAUgYIAAgBIAKAAIAAACIgBAAQgEACABAFQAMAzgFA1IgCAEQgPAOgLASIgFAIQgOAGgCAMQgPAPgVAIIgBAAIgMACQhOALhMAFIgFAAQgygugmg5gAivg5QgEgBgEgCQgEgDgCgEIAAAAQgGgCgDgFIgBAAQgbgZgJgmQgFgVAFgVQACgHAFgGIAXgXQACgDAEAAQAUgCAVAAIADAAQAUAFANgMQAKgKANgJIAegTIAUgMQAHgDAHgGQAKgHALgDQAjgKAlAAIALgBQALgHAIgKIAFgGIACAAIACgCIAAAAQAbgBgDAaQgCAPgFAOIgIAWQgOAfgSAdQgUAwgmAlQgIAHgNgBQgGAAgEADIgJAEQgQAJgRAEQgSAFgRAIIgdANIgGACIgGABIgIAAQgRAAgRgBg");
	this.shape_3.setTransform(13.5,-10);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF99").s().p("AkMD9QALABACgJQAGgBADgKIAIgVQAQgqgPgrQgEgLgGgHQgIgnAqApQADACAAAFIAAAhQACAsAMgmQAAgBAFAAQAHAKAOAAQALAAAOgFQACAAAAgFIATgPIADgCIACAFQACADAAACQgDAYgRASIgRALQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAAAQgFAAgTAUIgKAGQgTANgBAVQgKACgKAAQgUAAgTgJgACaB+QgUgMgdgFQAAgFgCgCQg2g4gZhSIgDgKIgCgHIgBgFIgBgEIgQgiIgTgrIAAgKQAGgZgaAGQgEAAgBgCQgFgLgFgJQgGgKgHgHIAAgJIAAgEQgEgMgjgNIAUgIIAJgCQAagLAGAJQACACAEAAQAmAGAdAMQAEACAFAAQACAKAHAFQAEACAGABIAKABQAHANAJANIAKAOQADADAAAFQAHAnAPAhQANAbASAXIAIAKQAbAdAmASQADACAFAAQAiAWgfAdQgDACAAAFQADAQASgOQADgCAFAAIAKAAQACANASgBIAAAAIgBACQgRAPgVALIgTAMIgUABIAAgFIAAgKIgJABIgnAJIAAAJQgFAAgEgCgAEWAqQAFAAACgCQACgCABgEIAcADIAAABQgEAIACAEIgBADIgBABIAAACIgGAHQgFADgEAAQgLAAgIgYgAkcApQgBgHgGgHQgFgFgEgGQgJgPgBgSIAAgIQgCgKgDgJIADgCQALgKgFgaIAAgJIAAgFIAAgFQAEgFADgGQACgDAAgFQAFAAACgDQADgCAAgFQATgTARgVQACgDAAgFQAjAEghATQgCABAAAFQAAAFgCACQgRARgTAOIAAAKIAAAFIAAAFIgKAAQgCBBAhggIAAABQAAAOARAFQgCAMACALQgFAMgBAMQgGAJgEAKQgFAJgHAIIgBABIgGgFg");
	this.shape_4.setTransform(-9.5,-71.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC99").s().p("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");
	this.shape_5.setTransform(-0.9,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("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");
	this.shape_6.setTransform(-0.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.scene3blondestill, new cjs.Rectangle(-72.4,-100.9,143.4,202), null);


(lib.RitaShin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhVEVQAzgxAUhDIAFgEQARhJAEg6QAFg6gHhJIgFgJQABgJgCgOQgBgNACgdQACgcAJgQIgCAAIgBgFIADAAIABgLIAEhKIAAgFQAMgDAOgBIgDAOQgLAWgFAXQgOA5gCA7QgBAPACAPIAJBSIAAAJIAAAkQAAAcgFAjIgHAaIgNA4IgXA+IAAABQgSAagPAdIgBAAIgFABQgSAHgJAQIgBADIgPAKIAQAAIADgEQAKALANgQIABAIIAfgiIgFAYIgNANIAUgCIATgdIAGACIgNAaIAcgGIAgh0IgBgCIAEgNIADgEIAYhpIgDgHIAIgLIgBgDIACgKQAUhEAMhEIAOhUQADgTABgUQABgZADgYQAEAngBARQgBAQgEAgIgEAeIAAAEIgyDuIgDAEIgCAFIgEARIgBAAIgBADIgHARIgCAGQgCAEAAAGIAAAHIgBAXQAAAQADAQIAAAAIAAADQgEAEgCAGQgEARgCAQIgXAnIgvAIIhoAGIAvgug");
	this.shape.setTransform(13.3,32.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#030303").s().p("AgIADQADACAIgDIACgFIAAAAIADABIABADIgPAEg");
	this.shape_1.setTransform(24.6,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AgyExIAFgXIgfAiIgBgIQgMAQgLgLIgDAEIgPAAIAPgLIAAgCQAJgRASgGIAFgCIACAAQAOgcASgaIABgCIAWg+IAOg3IAGgaQAFgkABgcIAAgjIAAgJIgKhSQgBgPAAgPQADg7ANg5QAGgXAKgWIADgPIARgCIAOAKIATAAIAWALIAAAAIgCAHQgJACgDgCIACACIAQgDIgBgFIACACQAFAKABAOQgCAYgBAaQgBAUgEATIgOBTQgLBFgVBEIgCAKIABACIgHAMIADAHIgZBpIgCAEIgFANIABACIgeB0IgeAGIAOgaIgGgCIgTAdIgVACg");
	this.shape_2.setTransform(14.3,31.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26.6,64.9);


(lib.RitaPurse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAFAFA").s().p("AADgBIAEAAIAAABIgNACg");
	this.shape.setTransform(15.6,45.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9F9F9").s().p("AAAABIAAgCIAAACIAAABIAAgBg");
	this.shape_1.setTransform(12.1,44.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AAAAAIABAAIAAABg");
	this.shape_2.setTransform(11.5,4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("Ag6BrIgEAAIgCgCIgCgCQgNgHgGgPIgBACQgdg7ASg3QABgJACgJQAEgNAKgHIACgBIABgDIABAAIADgCIASACIABgEIAJAFIAHABQAKABAGAHQARASACAZQADA3gKA2IgBADIAAACQgCAEgEADQgLAJgNAAQgIAAgJgDgAABBOQgDgKACgMQAEgZgCgaIgCgrIAAgIIgBgIIgKgXIAogRQADgDAFgCIAMgEQAMgDAJADIAGgGQAIAKAFALIABABIACAFQAPAhgEAkQAKA7gxAiIgFACIgBAAQgEAHgGAGQgKAFgIAAIgEgBQgFAAgFgDIgJAJIgRAFg");
	this.shape_3.setTransform(13.3,35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag/DoQgNgGgIgLQgVgZgJgcQACgEAAgEIgGgaQACgXABgEQAEgKAPgbQAJgQAAgSIAAgBIAJgJIAGABIACgHIAQgFIgBgJQAChcADhdIACgPQADgOALgLQAPgYAkANQAXAIARATQASATAAARQAAAIgDADIgICGIAEAJIgBAKIAPAEIAAAGIAYAjIADgFQAEAxADAxIAAAIIABgBIACAAIgBAEIgCAAQAAAIgCAIQgDANgJAKQgoAug6AOQgLACgMAAQgWAAgWgJgAhDDcIADACIACACIADAAQAXAJASgPQAEgDACgEIABgCIAAgDQALg2gEg4QgCgZgQgSQgHgHgJgBIgIgBIgJgFIAAAEIgTgCIgCACIgBAAIgCADIgCABQgKAHgDANQgDAJgBAJQgSA4AeA7IAAgCQAGAPANAHgAAwANIgLAEQgFACgEADIgnARIAJAXIACAIIAAAIIACAsQABAagEAZQgCAMADAKIgKAgIAQgFIAJgJQAFADAGAAIgKAEIANgDIAAAAQAJAAAKgFQAGgGAEgHIABAAIAEgCQAygigLg8QAFgkgPghIgDgFIAAgBQgGgLgIgKIgFAGIgKgCIgMACgAgiABQABAEAEABIADABIACAEIAAgCIgBgCQAYAFAXgIIAEABIAEgIIAJgOQAHgKAAgMIABgXQAEgIACgLQAHgaAAgWQAAgKgEgJIADgEIgFgJQgHgOgUgDQgGgGgMAAQgFgCgEACQgWACAAAaIACALIgCADIgQCVIAEgHIAAABgAgSi8IACABIAAgCg");
	this.shape_4.setTransform(13.3,23.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.5,-0.8,23.8,48.3);


(lib.RitaHair2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDFDFD").s().p("AAJANIABAAIAAAAIAAACgAgJAAIANgOIAAAFIgEAEIgBAFIgDACg");
	this.shape.setTransform(31.4,38.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4C4C4C").s().p("AgCAGIACgGIACgIIAAgBIABABIAAABIgDARIgCgEg");
	this.shape_1.setTransform(10.8,6.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("AhAErIgXgPQgJAAgIgFQgPgIgPgUQgUgcAAgLQAAgJAEgMQADgMAAgIQAAgLgOgVQgOgUAAgeQAAgYAOgaIAOgXIgPgrQgPgwAAgdIADhAQADgugBgLQgCgLACgSIACgeQAAgLABgEQADgHALgIIADgBIABgBQAJgFAcAGIAEABIAVgEQAYgFAOAFIAAAAIACABQAQAGABASIAGALIABADIgFAGIgBABIAAgBIAAgBIAAABIgDAJIgCAGIABAEIgJAXIgQAUQADAEABAHIABgBQAEgFAGgDQAdgRAbALIAHADIgCAHQAdADgGAgIgCAIQgGATgRAMIABACQAAAAAAABQAAAAABAAQAAAAAAAAQAAAAABAAQAHgEAHgFQAQgDAQgBQAOAGALAKQAIAIAFAJQAFAKAGAPIACAGQgHAUgTATQARgNATgEIACAAIAPADQAVAFAEAUIAJAbIADAMQAAADgFAKIgBACIgBABQgTAeggARIAggJIANAIQAAAIAFAOQAFAUAAAJIgBALQgGAegqAIIgMABIgrADQgTABAAAHIABAEQADADAGAAQA8AAAfgPIgEALIgOAnQgOAigcASIgkABIgHgHIgDgCIgDgCIgCAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBABAAAAIAAADQgBAJADADQADAEALACIAXABIACAAQgIAHgPAHQgOAHgQAEIgCAAQgRAEgRAAQgSAAgjgXgACaCyIAIgEIgGAHIgCgDgABViJIgEgEIAGACIABACIAEAFIAAAAIgHgFg");
	this.shape_2.setTransform(14.3,32.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhVE5QgbgPgMgLIABgJQAIAEAJABIAXAOQAjAXASAAQASAAAQgDIACgBQAQgEAOgHQAPgHAIgHIgCAAIgXgBQgLgCgDgDQgDgEABgJIAAgCQAAgBABAAQAAAAABAAQAAgBABAAQABAAABAAIACABIADABIADADIAHAHIAkgBQAcgSAOgjIAOgmIAEgLQgfAOg8AAQgGAAgDgCIgBgEQAAgHATgCIArgCIAMgCQAqgHAGgeIABgLQAAgKgFgTQgFgPAAgHIgNgJIggAJQAggRATgdIABgBIABgCQAFgLAAgDIgDgKIgJgcQgEgUgVgGIgPgCIgCgBQgTAFgRAMQATgSAHgVIgCgFQgGgPgFgKQgFgKgIgHQgLgKgOgHQgQABgQADQgHAGgGADQgBAAAAABQAAAAAAAAQgBgBAAAAQAAAAAAAAIgBgDQAQgLAGgTIACgJQAGgfgcgEIACgGIgHgEQgcgKgdAQQgGAEgEAEIgBACQgBgIgDgDIAQgUIAJgYIAEgSIABAAIAFgHIgBgCIgGgLQgBgTgQgGIgCAAIAAgBQgOgEgYAEIgVAFIgEgBQgcgHgJAFQAHgLAzgDQAjgCAOAHQAIgFAJAMQALAQAAAPIAAAQIgBABIgBAEIAAAFQgCAQgIANIAkACQAEAFAFACIAgAgIABALIAEALIAAABIABAHIgBADIACgBIABADQAIAEAQAMIAEADIAHAGQAhAdAAAdIAAAJQAjgGARAfQANAWAAAdQAAAGgGALIgGAKIgCAHIAAAAIgPANIAFAEIADgCQAFAGAEAIIADgBIABABIgBAJQAGASAAAYQAAAbgSAPIgHAGIgIAEIACAEQADAFAAAIQAAAUgTAhQgUAkgcAHIAAACQAAALgpAQQgmAPgWAAQgVAAgkgUg");
	this.shape_3.setTransform(16.2,32.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-0.5,36.8,66.6);


(lib.RitaHair1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4F4F4").s().p("AAAAAIABgDIgBAHIAAgEg");
	this.shape.setTransform(6,36.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBFBFB").s().p("AgIAEIAJgGIAIgBIgIADIgIAEg");
	this.shape_1.setTransform(36.6,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("AAQFLQgKgFgFgHQgJgFgygDIgJgIIAFgKIAHgHIAAgCIgCAEIgMACIgFAGIgLgKQgDAAgBABIgCADIACAEIgNgBIgDgQIAWgNIgYAGIgHgKQgdAKgYgKQAEAAACgCIABgEQgagSgGgIQgIgKAAgRQAAgfAbgbIATgVQAFAEAFAAQAEAAABgBIABgBIABgDIAIAEQgKgVgIgYIgCgGQABgaATgdIAUggIgBgEIBIgeIABACQALgFALAAQAKABAGACIAAgEIgdgaQgHgnAegZQAKgcAiACIAMgCIAPgGIAGAJIAGADIgCgLIAIAEIAHgEIgBAAIgGgBQgjgCgFggQgEgHgBgHQgBgKAFgOQARguAzACIABgFQAFgNARgJQANgHAMAAIAJgCIAEgDQAUA7AJA8QgNAUgDAWQgMBkAABmIgHAFIgYAqQAJBiAPBjIgCgBQgKAAgJAJQgLANgJAHQghAahHAAIgFAAg");
	this.shape_2.setTransform(21.3,34.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAWFQIgJgHQgKgDgOABQgMAAgSgHQgNgEgIgKIgDgDIgrgWIgCgDQghgJgfgMIgDgBIgCgLQgFgGgDgJQgFgOABgRQAAgMACgKIgCgFQAGgUAOgRIAFgGQAIgDAIgJQAGgHADgIIAAgBIABgBQgBgMABgMQAAghAGgQIACgDIAAgBIACgHIAGgGQAGgKAJgIIABgCIACgPIABgFIBXgmIgJgKIALgoIgJAQQADgNAHgHQAjgkAogfQgJgRAAgSQgBgOAGgOQAJgXARgPQASgRAbgHQAMgDALgGIAQgIIAJgFIAIgDIAFgDIAEALIgDADIgKACQgMAAgNAHQgRAJgFANIgBAFQgygCgSAuQgFAOACAKQAAAHAEAHQAFAgAkACIAFABIABAAIgHAEIgIgEIACALIgGgDIgGgJIgOAGIgNACQghgCgMAcQgdAZAIAnIAcAaIAAAEQgHgCgKgBQgKAAgKAFIgBgCIhJAeIABAEIgUAgQgSAdgBAaIABAGQAIAYALAVIgJgEIAAADIgCABQgBABgEAAQgFAAgEgEIgUAVQgaAbAAAfQAAARAHAKQAHAIAZASIgBAEQgBACgEAAQAXAKAdgKIAHAKIAYgGIgWANIADAQIANABIgBgEIABgDQABgBAEAAIAKAKIAFgGIAMgCIACgEIAAACIgHAHIgEAKIAJAIQAwADAKAFQAFAHAKAFQBLABAigbQAJgHALgNQAJgJAKAAIACABIABACIgFALQgPAHgYAYQghAXg/AAQgQAAgJgHgAizCCIACABIgEADIACgEg");
	this.shape_3.setTransform(19.2,34.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41.3,68.6);


(lib.Glass = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F700AD").s().p("Ag9AvQgLgUAAgeIAFg2IABAAQAFAAAAgGQgCgDgDgIIABABQARAFAcACQAGAGAHAAIAMABIA2AAIAMgGIAAAwQgFAJACAPIAEAbQABAZgcAPIgBAAQgTAAgCACQgPAEgLAAQgoAAgSghgAAFhFIgNgFQgNgDgXAAIgCgCQBTABAWAIIgBABg");
	this.shape.setTransform(8.6,14.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAB3QgDgCAAgDQgtgDgQgSQgPgRAAg0IgCgrQAAgPADgJIgDgMIgCgaQAAgJAEgKQAHgOALgEIBKAAQAHADAgAEQAcAFAAAIIgBAEQADAMABAPIABAkIAAAfQgBAfgCAQQAAAMABAbQgEAYgfAJgAhFAYQAAAfALAUQAXAqA8gNQADgCATAAIABAAQAcgPgBgZIgEgbQgCgQAFgJIAAgvIgMAGIg3AAIgLgBQgHAAgHgGQgcgCgQgFIgCgBQADAIADADQAAAGgFAAIgCAAgAgpgxQAXAAANADIANAFIA1AAIABgBQgXgIhSgBgAACg8QA3AEARAGIAAgVQgCgJAAgGQgJAGgOAAIhDgCQgLgEgRgDQgPgEgIAAQgDAAgCAGIAAAGQAAAFAGAQQAJgCAUAAIApACgAhDhnIAyALIA2ABIALABQAFAAAPgFQgOgKgOABQgSACgLgGIhEAAg");
	this.shape_1.setTransform(8.4,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Glass, new cjs.Rectangle(0,0,16.7,23.8), null);


(lib.BuffyHair = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjXFHIgKgCIgBgBQgHgHgJgEIAAgCIgHgNIAAgCIAAgTQgDgKgIgDQgFgCgGgBIgCAAQgQgBABgSQADgIACgKIABAAIAAgBQACgLgCgJIgBgBQgMgGgMgHQgVgOAPgbQALgUADgUIAAgBQgIgFgKgDIAAgBIgOgNIAAgBIgDgUQADgDAAgHIAAAAIAAgCIAAgJQAOgdAPgaIAAgBIAAgCIABgDQABgMgHgKIgBgBQgHgFgEgIIAAgBQgFgGgBgLQAOgTARgRQARgQALgXQgHgIgLgFIAAgBQAEgSAQgHIABAAIAAgCIAWgQIABAAQAEgHACgIQADgJAAgKIAAgBQAJgFAEgKIAAgCQAEgEAFgCIAAgBIAAgCQAMgLARgFIACAAIAAgBIAAgBIABAAIACAAIABAAIAAgBQAXgHAYAGIABABQAFAIAHgCIACAAQABgQAQAFIABAAQAEAWACgRIAAgCQADgHAJgCIACAAQAKgPAPgLIAAgBQAIgFAMABIAAABQABACADABIACAAQAGADAHABIACABQASgMARgMIACgBIAAgBQAOgIARAEIAAABQAOAKALANIABABQAagFAZABQAKAAAEAHQAIAHgBAQIAAABQASAJAVAGIACAAQAKAHAFALIAAACIAAAcIAAACQAVAEASAJIAAAAQAPADAEAPIABABQgBANADAJIABACQAQAHAOAJIABAAIAGARIAAABQgGAKgCAQIgBAAIAAABQgBADgCACIAAABIAAACQAEASAOAIIAAABIABAAQAFAOgDASIAAAAQgEAPgGANIAAAAQACAGAEADIABAAQAHAGAFAGIAAABQgDAPgFAOIgBABQAGAIAHAHIgBAEQAAAZgKATQgCARgPAPQgJAJgoAdIgYAAQgpgegLgJQgSgRAAgPIAAgQIgPAQIgBAAQgNAHgMAJIgBABQgeAMgkgEIgCABQgFACADAIQgDAEgBAEIgBAAIgLAAQgNAMggAOQg1AYgBALQgBANAAAgQgHAcgrAKQgEAFgNAfQgQAdgeAAQgUAAgSgWgAhOjeIgbAQIgGADIAAABIgHANQgBAHACAFIAAABQAHAFADAKQgCAGAAAJQAAAMgEAJIgCACIABACIgEAGQgHAJgBAQIgBAAIAAAFIAAAEIAFAcQAIAQAQAHIAAAMIgBAGIAAACIAAABQAFAGABAHIAAAAIAAABIACACIAtAuIAAABIAlAaIABABQAiAWA0ACQAPABANgFQANgEAKgHIAAgCQAlgcANgzQAEgMACgPIABgMIABAAIAAgBQAGgKgIgFQgFABgCgDQgJgQAAgaIABAAIAAgBIgBgBQgIgJgPgDIAAgBQgEgWAGgUIgCAAQgHgCgGgEIAAgFQAAgQgGgIQgMgPgfgBIgBgDQAAgBAAgBQAAAAAAgBQAAAAgBAAQAAAAgBAAQgPAEgTACIgBgCQgHgGgBgMIgBgBQgLgBgOAFIAAABIgLAHIgBAAQgKAAgHgEIAAgBIgIgSIgBAAQgBgIgHAFIAAABQgNAHgJgFIgBAAQgFAJgPgCIgBABgABQDvIABgCIAGAJIgDACIgEgJgAAPieQAHgJALgGIgRAPIgBAAg");
	this.shape.setTransform(33.5,34.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ai5FSQgJgEgIgIIgKgBIgBgBQgHgGgJgDIAAgCIgIgLIAAAAIAAgBIgBgOIgBgFQgDgJgIgDIgLgDIgCgBIgCAAIgDgBQgFgBgDgEQgDgEgBgHIADgJIABgIIABAAIAAgBQACgKgDgIIgBgBQgNgEgMgHQgHgEgDgGIgCgFQgEgLAIgPIAAgCIACgGIAAAAQAEgIACgIIAAgBIACgLIAAgBIABgEIAAgBIgIgFIgIgEIAAgBIgCgCIgBgBIgDgCIAAgBIgIgHIAAgCIgBgLIgBgIQACgDAAgHIABAAIAAgCIAAgBIAAgIIAFgIIABgBIAHgTQAGgPAIgNIABgBIAAgCIAAgBIABgCQACgMgGgKIAAAAIgFgFIgBgBIgFgIIAAgBIgEgFIAAgBQgCgFAAgGIABgDIABAAIAIgMIAFgEIABgBIADgFQAFgGAHgGQAMgLAJgNIAAAAIABgBIABgDIAHgMIgDgDIgKgIIgEgDIAAgBIACgIQAFgJAIgFIAFgDIACAAIAAgBIACgBIADgCIACgDIAOgLIABAAIACgFIABgBIADgJQADgIABgJIAAgBIAAgBIAIgHIAFgJIAAgCIABgBIAAAAIAIgGIAAgBIAAgBIADgCIAGgFQAKgHALgEIABAAIAAAAIAAgBIACAAIAAAAIABAAIABAAIABgBIAAgBIABAAIABAAIACAAQARgGATAEIACABIAFABIACABIABABIABABQAEAEAFgCIACAAIABgEQAEgHAJABIACAAIABAAIABABIACAHIABABQADAHABgMIAAgCQADgGAIgDIABAAIABAAIACAAIAHgJIAEgDIABgBIAHgFIABgBIAGgFIABgCQAHgEAMAAIAAAAIAEADIABAAIAAAAIABAAIANAEIABAAIAJgEIAYgNIAFgEIABAAIAAgBQANgHAQACIADABIABABIAIAGIAKAMIABABIAGAFIABABIATgDIACAAIATABIACAAIAIABQAEABADACIACABQADABACADQAIAGABAOIAAABIAAABIAAABIASAJIABABIARAHIABAAIABAAIABAAQAJAGAFAHIABABIABAFIAAABIAAAHIAAACIAAAUIAAABIAAABIAFABIABAAIACABIAXAJIABAAIABAAIAEAEIABAAQAHACAFAGIABABQACAEABAHIABAAIAAAJIAAAAIABAJIAAABIADAEIAAABIAHAEIARAMIAEACIABABIAFAMIACAEIAAACQgHALgBAPIgBAAIAAACIgBACIgDACIAAACIAAACQACAKAEAHQAEAGAFAEIAAABIABAAQADAMgDARIgBACIAAAAIgGAOIgFALIgBAAQABAEAEADIABAAQAGAEAEAHIAAAAIgCAFIgIAUIgBABIABABQAGAGAGAFIAAADIAAACQgBAMgDALIgDAIIgCAEIgDALIgDAFIgBABIAAABIgIAIIgBAAIgEADIgBABQgIAEgRAMIgRALIgKAAIgOgCIgJgHIAAgBIgJgHIgDgCIgPgMIgPgMIgLgLIgBgBIgCgDQgFgIgBgHIgBgKIAAgBIABgEIgIAHIAAAAIgIAHIgCAAIgGAEIgGAEIgNAIIAAgBIgBABIgKACIgGACIgCAAQgIACgJABIgBAAQgIABgJAAIgBAAIgNAAIgBAAQgGADACAIIgCAFIgBACIgBAAIgGABIgGABIgCACIgIAHIgJAHIgEADIgLAGIgDABIAAABIgBAAIgCACIgCABIgRAKIgQALQgOAKAAAGIAAAXIACAXQgDAMgJAJQgMAMgYAIQgDADgDAIIgLAaIgHAKIgCAEQgHAGgJAEQgIAEgJABIgFABIgCAAQgJAAgJgFgAg9jVIgZAPIgGAEIgGALQgCAHADAGQAFAEAEAJQgCAFAAAJQAAALgEAJIgBAEQgCACgJAaIgBABIAAAAIABAEIAAAEIAEAaQAHAPAPAGIAAALIAAAGIAAABIAAACQAFAFAAAHIAAABIAAABIABABIAqAqIABABQARAMARAMIAAABQAhAUAxACQANABAMgFQAMgEAKgGIAAgCQAigaAMgvQAEgMABgOIABgKIABAAIABgBQAFgKgHgFQgFABgCgCIgDgJQgFgNAAgRIAAgBIABAAIgBgBQgIgIgNgDIAAgBQgEgUAFgTIgBAAQgHgCgGgDIABgGQgBgOgFgIQgLgNgdgBIgCgDQABgBAAgBQAAAAAAgBQgBAAAAAAQAAAAgBAAQgOAEgSABIAAgBQgIgFAAgMIgBgBQgLgBgNAFIAAABIgJAGIgCAAQgKABgFgEIAAgBIgIgRIgBAAQgBgHgGAEIgBABQgLAHgJgFIgBABQgEAIgOgCIgBABgABVDYIAAgBIABgCIAHAIQgFgBgDgEg");
	this.shape_1.setTransform(32.5,34.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AiwFOQgIgCgIgHIgLAAIAAgBQgHgFgJgCIAAgCIgIgJIAAgBIgDgNIgBgEQgEgJgIgDQgFgDgGgBIgCgBIgCAAIgDAAQgFgCgDgDQgEgEAAgHIABgIIAAgHIABAAIAAgBQABgJgEgGIAAAAIgBgBQgNgDgMgGQgIgFgEgGIgBgFQgEgLAGgPIABgCIABgGIAAAAIAEgQIAAgBIADgLIAAgBIABgEIAAgBIgHgGIgIgEIAAgBIgCgDIgBgBIgDgDIgIgHIAAgCIgBgLIgBgIQADgDAAgHIABAAIAAgCIAAgBIABgHIAEgJIABgBIAGgUQAEgPAKgOIAAgBIABgBIAAgCIABgBQACgLgEgKIgBgBIgDgFIgBgBIgFgHIAAgBIgEgGIAAgBQgCgFAAgGIABgDIAJgMIAEgFIABgBIAEgFIAMgMQAMgLAKgNIABgBIACgDIAGgMIgDgEIgJgIIgEgDIAAgBIADgJQAFgIAIgGIAGgCIABAAIABgBIACgBIACgCIACgDIANgMIABAAIADgFIABAAIAAgBIADgIQAEgIABgJIAAgBIAAgBQAEgDADgFQAEgEACgFIAAgCIABgBIAIgGIAAgBIAAgCIADgCIAAAAIAGgFIAAAAQAKgHALgEIABAAIAAAAIAAgBIACAAIABgBIABAAIABAAIAAAAIAAAAIABgBIAAAAIABAAIACgBQASgFATAEIACAAIAGACIABABIABAAIABACQAEADAGgCIACAAIACgEQADgEAJgBIABAAIACAAIABAAIADAGIAAABQADAGACgMIAAgBQADgHAIgCIABAAIABgBIABAAIAJgIIADgCIABgBIAHgFIACgBIAGgFIABgBQAIgFAMAAIAAAAIADACIABAAIABAAIAAAAIAOADIABAAIAJgEIAAAAIAYgJIAGgEIABAAIABgCQANgGAQACIADABIABABIAHAGQAGAFAFAHIABACIAGAFIABABIATgCIACAAQAKAAAJACIACAAIAHADQAEAAADADIABABQAEABACADQAIAGACANIAAABIABABIAAACQAJAEAJAFIABAAQAHAFAJAEIABAAIABAAIABABQAJAFAFAIIABABIACAEIAAACIAAAHIAAACIgBAUIAAABIAAABIAEABIACAAIABABIAXALIABAAIABAAIAEAEIABABQAHACAEAGIAAABQADAFABAGIAAABIgBAJIAAAAIADAJIAAABIACAEIAAABIAHAEIAPANIAEACIABABIAGANIABAEIAAACQgGALgCAPIgBABIAAABIgBADIgCACIAAACIAAABQABALADAHQADAGAEAEIAAABIAAAAQACAMgEARIgBABIAAAAIgHANIgGAJIgBAAQABAEADADIABAAQAEADADAFIAAABIgBAEIgJAQIgBABIABABIALAIIgBACIAAACQAAAJgCAJIgDAHIgCACQAAAFgCAEIgDAEIAAABIgBABQgCADgGADIgEADIgBAAQgIACgPAKQgIACgKAGIgKAAIgMgDIgIgIIgBgBIgJgGIgDgDIgOgMIgPgMIgNgLIgBgCIgCgDQgFgGgBgHIgCgJIAAgBIAAgDIgIAEIAAABIgIAGIgCAAIgGAEIgHAEIgBAAIgMAHIgBAAIgBAAIgJABIAAAAQgDgBgDACIgCAAQgJADgIAAIgBAAQgIACgKAAIgBAAQgGABgHgBIgCABQgFADACAHIgDAFIAAAAIgBACIgBABIgGABIgFABIgBACIAAABIgHAHIgJAIIgEADIgKAHIgDABIAAABIgBAAIgCACIgCABQgIAFgHAHQgJAHgFAFQgNAKABAIIACAWIACAXQgCANgIAJQgLAMgYALIgGALIgMAaIgGALIgCAEQgHAGgJAEQgJAEgJABIgFACIgFAAQgIAAgHgDgAhZhWIAAADIAEAXQAHAOANAGIAAAKIAAAGIAAABIAAABQAEAFABAHIAAAAIAAABIABACIAnAmIABABIAfAWIAAAAQAfATAsACQANABALgEQALgEAJgGIAAgCQAggYAMgrIAFgYIAAgKIABAAIABgBQAFgJgHgEQgFAAgBgCIgEgIQgEgMAAgPIABgBIAAgBIgBAAQgHgIgNgCIAAgCQgDgSAEgRIgBAAQgGgCgFgDIAAgFQAAgNgGgHQgKgNgagBIgCgDQABAAAAgBQAAgBAAAAQAAAAgBAAQAAAAgBAAQgNAEgRABIAAgBQgHgFgBgLIAAAAQgKgBgMAEIAAABIgJAGIgBAAQgKAAgGgDIAAgBIgGgQIAAAAQgBgGgGAEIgBABQgKAGgJgFIgBABQgDAIgOgCIAAABIgYAOIgFADIgGALQgBAGACAFQAGAFACAIQgBAFAAAIQAAAKgDAIQAAABgBAAQAAAAAAABQAAAAAAAAQgBABAAAAIgKAbIgBABIAAgBIAAABIAAAAIABAEgABYDAIgBgBIABgCIAHAGQgGAAgBgDg");
	this.shape_2.setTransform(31.8,34);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AipFKQgJgCgIgFIgKABIgBgBQgHgDgIgCIAAgBIgJgIIAAABIAAgBIgFgMIgCgEQgDgIgJgEIgKgEIgDgBIgBAAIgDgBQgFgBgDgDQgEgEgCgGIAAgIIAAgGIAAAAIAAgBQABgHgFgFIAAAAIAAgBQgOgCgMgGQgJgEgEgGIgCgFQgFgKAFgQIABgCIABgGIAAgBQACgIABgIIAAgBIACgLIAAgCIACgEIAAgBIgGgGIgHgEIAAgBIgCgDIgCgCIgDgCIAAgBIgIgHIAAgCIAAgLIgCgHQADgEABgHIABAAIABgBIAAgBIABgIIAEgJIABgBIAEgTQADgQAKgOIABgBIABgCIAAgBIACgCQADgKgDgKIgBgBIgDgFIAAgBIgFgIIAAgBIgFgFIAAgBIgCgLIABgEIAAAAIAJgNIAEgFIAAAAIACgBIAEgFIAMgMQANgLAKgNIAAAAIABgBIACgDIAGgMIgCgEIgJgJIAAgBIgEgDIAAgBIADgIQAGgJAIgFIAGgCIABAAIABgBIACgBIACgCIABgDIAAAAQAGgHAHgFIABgBIAEgEIAAAAIABgBIADgIQAEgIACgJIAAgBIAAgBIAHgIQADgEACgGIAAgBIABgCIAAAAIAIgGIAAgBIAAgBIADgDIAHgFIAAgBQAJgHALgEIACAAIAAAAIABgBIABAAIABAAIABAAIAAgBIABAAIAAAAIAAgBIABAAIABAAIACgBQATgFATAEIABABIAHACIACAAIAAABIABABQADACAHgCIABAAIADgEIAAABQADgDAJgCIABAAIABAAIABAAIAEAFIABABQACAFACgLIABgCQAEgGAHgDIABAAIABgBIACAAIAIgHIAEgCIABgBIAIgEIACgBIAGgFIAAgBQAJgFALgBIAAAAIAEACIAAAAIABAAIABgBIAOADIACAAIAIgDIAZgHIAFgEIADAAIAAgBQAOgGAQACIADABIABAAIAHAGQAHAGAEAIIAAABIAHAFIABABIAVgBIABAAQAKABAJADIABAAIAHAEQADABADADIACABIAFAEQAKAFACANIABABIAAABIAAABIASAKIABABQAHAFAIAEIABAAIABABIACAAQAIAGAGAHIACABIABAFIAAACIABAHIAAACIgCAUIAAABIAAABIADACIABAAIACABQALAHAMAFIABAAIAAAAIAEAEIABABQAGADAEAHIABABQABAFABAGIABABIgBAJIAAAAIACAJIAAABIACAEIABABIAHAFIANAOIADACIABABIAHANIABAEIAAACQgGAMgDAPIgBAAIAAACIAAACIgCADIAAACIgBACIADASIAFAKIAAABIABAAQABAMgHAPIAAACIgBAAIgIAMIgHAIQAAADACACIABAAQADACACAFIAAAAIgCADIgJAMIgBABIABABQAFADAFACIAAACIAAABQAAAHgCAHIgDAFIgBABQAAAEgCADIgCADIAAAAIAAABIgIAEIAAAAIgFADIgBAAQgHgBgOAIQgIABgKAFIgKAAIgLgEIgHgJIgBgBIgKgGIgDgDIgNgNIgQgNIgMgKIgBgBIgDgDQgFgGgCgGIgDgIIgBgBIAAgEIgHADIAAABIgJAFIgCABIgHADIgGAFIgBAAIgNAGIAAgBIgBAAIgDABQgKAEgMgBIgIAAQAHAAAJgDIABAAQADgCADABIABAAIAJAAIAAAAQAIgDAIgFIAAgBQAcgWALgoQADgLACgLIABgJIABAAIAAgBQAFgIgGgEQgFAAgBgCIgDgHQgFgLAAgOIABgBIAAAAIgBgBQgGgHgMgCIAAgBQgDgRAEgQIgBAAQgGgBgFgDIABgFQAAgMgGgGQgIgMgZAAIgBgDQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAgBgBAAQgMAEgPABIgBgBQgFgEgBgKIAAgBQgJgBgMAEIAAABIgJAGIgBAAQgIAAgGgDIAAgBIgGgOIAAAAQgCgGgEAEIgBAAQgKAGgHgEIgBABQgDAHgNgCIAAABIgVANIgFADIgGAKQgBAGACAEQAFAEADAIQgCAEAAAIQAAAJgDAIIgBADIgKAYIABAEIAAADIADAWQAHANANAFIAAAJIgBAFIAAABIAAABQAEAFAAAGIAAABIACABIAjAjIABABIAcAUIABABQAZAPAkADIgDAAIAAAAQgIADgKgBIgBAAIgOABIgBABQgFADABAHIgEAFIgBACIgBAAIgGACIgDACIgCADIgGAIIgIAIIgDAEIgJAHIgEABIAAACIgBAAIgCACIgBABQgIAGgGAHIgMAOQgLAKACAIIADAXIADAYQgBAMgIAKQgKAMgYAOQgCADgEAIIgMAaIgHALIgBAEQgHAGgKAEQgIAEgJACIgEACIgMABIgIgBgABWCnIAAAAIABgDIAIAFIgEABQgDAAgCgDg");
	this.shape_3.setTransform(31.5,33.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AikFGQgIgBgIgDIgKABIgBAAIgQgEIAAAAIgJgGIAAABIAAgBIgGgLIgCgEQgFgHgHgEIgLgFIgDgBIgBAAIgCgBQgGgBgDgDQgEgDgDgGIAAgHQAAgDgCgCIABgBQAAgGgGgEIAAAAIgBgBQgOgBgNgFQgHgEgFgGIgDgEQgFgLAEgQIABgCIAAgHIAAgBQACgIAAgHIAAgBIACgNIAAgBIABgEIAAgBIgEgGIgHgFIAAgBIgCgEIgBgBIgEgDIAAAAQgEgEgEgEIAAgCQAAgFAAgGIgBgGQADgEACgHIABgCIAAgBIABAAIABgHIAEgJIABgBIADgUQACgRAKgNIABgCIAAgBIACgCIABgCQADgKgBgJIgBgBIgBgFIgBgBIgGgIIAAgBIgDgGIAAgBQgCgFgBgGIABgDIAAgBIAIgNIAFgFIABgCIAEgFIAOgMQANgLALgMIAAgBIABgBIACgDIAGgNIgDgDIAAgBIgIgJIAAgBIgEgDIAAgBIADgJQAHgIAJgFIAGgCIACAAIAAAAIACgBIABgCIABgDIAAgBQAFgHAIgGIABAAIAEgFIABgBIAEgIQADgHADgIIAAgBIAAgBIAHgJQADgEACgGIAAgCIABgBIAAgBIAIgGIAAgBIABgBIACgDIAAgBIAHgFIAAAAQAKgHALgFIACAAIAAAAIAAgBIACAAIABAAIAAAAIABgBIABAAIAAAAIAAgBIABAAIABAAIACgBQATgGATAFIACABQADACAEAAIABAAIABABIABACQADAAAGgCIACAAQABAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBIABAAQADAAAIgDIABAAIABgBIABAAIAEAEIABABQADAEADgLIAAgBQADgHAIgDIABAAIABgBIACAAIAJgHIAAAAIAEgCIABAAIAJgEIABAAIAGgFIABgCQAJgFAKgBIAAAAIAEABIACAAIAAAAIABAAIAAgBIAOADIACAAIAJgDIAYgEIAAAAIAHgDIABgBIABgBQAOgFARABIADABIAAABQAFACADAEQAHAGADAIIABABIAIAGIAAABIAVAAIACAAQAKABAHADIACABIAGAEIAGAFIABABIAHAEQAKAGADAMIAAABIAAABIABABQAKAEAIAHIABAAQAGAGAHAFIABAAIABABIACAAQAJAGAHAHIABABIACAFIAAACIABAHIAAACIgDAVIAAABIAAABIADABIACABIABABQAJAIANAFIAAAAIACAAIAEAFIAAABQAGAEADAHIAAAAQACAGAAAGIABABIgCAJIAAABQABAFACAEIABAAIACAEIABACIAHAEIALAQIACACIACABQACAHAEAFIABAEIAAABIAAACQgFAMgDAQIgBAAIAAACIgBACIgCADIAAACIAAACIABATIADAJIAAABIAAAAQAAALgIARIgBABIgJALIgIAGIAAABQAAAAAAABQAAABAAAAQABAAAAABQAAAAABAAIAAAAIADAFIAAABIgCACQgIAEgDAEIAAAAIgBAAIACABIAJADIAAABIAAAAQABAGgDAEIgBADIgBAAIgCAEIgBACIAAABIgBAAIgHADIAAAAIgFACIgBAAQgGgEgOAGQgHgBgKAEIgKABIgLgFIgGgKIgBgBIgKgGIgCgDQgHgJgGgGIgQgMIgOgJIgBgCIgCgDQgFgFgDgFIgFgHIAAgCIAAgDIgIABIAAABIgJAFIgCAAIgDACIgHAGIAAABQgIAGgKADQgJADgKAAQgRgBgOgDQAHAAAFgCIABAAQAJAAAKgDIAAAAQAFgCADABIAJACIABAAIAAABIANgFIAIgFIAAgBIAEgBQAVgUAIgeIAEgVIABgIIABAAIAAAAQAEgIgGgEQgEABAAgCIgDgGQgFgKAAgNIABAAIAAgBIAAAAQgGgHgLgCIAAgBQgDgPAEgPIgBAAQgGgBgEgCIAAgEQAAgLgEgHQgJgKgXAAIgBgDQABAAAAgBQAAAAAAAAQAAgBgBAAQAAAAgBAAQgLADgOACIAAgBQgFgFgBgIIgBgBQgIgBgKAEIAAABIgHAFIgCAAQgIAAgFgDIAAAAIgGgNIgBAAQAAgGgFAEIAAAAQgJAGgGgEIgBAAQgDAHgMgBIAAAAIgTAMIgFADIgFAJQgBAFACAFQAFADACAHIgBALQgBAJgDAHIgBACIgJAWIgBABIABgBIABAEIAAADIAEATQAGAMALAEIAAAJIgBAEIAAABIAAACQAEADABAGIAAABIABABIAhAgIAAAAIAaASIAAABQAPAJASAEIgGAAIAAABIgOACIgCAAQgEADAAAGIgEAFIgBADIgBAAIgGADIgEACIgBADIAAAAIgEAJIgIAIIgCAFIgJAIIgDABIAAABIgCAAIgBADIgBABQgHAGgFAIIgKAQQgKAKADAJIADAXQADALABANQAAAMgHAKQgJAOgXAPIgGALIgNAbIgHALIgBAEQgHAGgJAFIgSAGIgFACQgJADgIAAIgDAAgABVCPIAAgBIABgCIAIADIgGACQAAAAgBgBQgBAAAAAAQAAAAgBAAQAAgBAAAAg");
	this.shape_4.setTransform(31.2,33.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ai5FBIgPgBIgBgBIgJgEIgBABIAAAAIgHgKIgCgEQgFgHgIgEIgLgFIgCgBIgCAAIgCgBQgGgBgDgDQgFgDgDgGIgBgGQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBgGgGgCIAAAAIgBAAQgOAAgNgFQgJgEgFgGIgDgEQgGgLAEgRIABgCIgBgGIAAgBIAAgQIABgBIABgNIABgBIABgEIAAgBIgDgHQgCgDgEgCIAAgBIgCgEIgBgCIgFgDIAAAAQgFgEgDgEIAAgBQgBgGABgGIgBgGQAEgEACgGIABgCIAAgBIABAAIABgIIAFgJIABgBIAAgUQABgRAMgOIABgBIABgBIABgCIABgCQAFgKgCgKIAAgBIAAgEIgBgBIgFgJIgBgBIgEgFIABgBQgDgGAAgFIABgEIAAgBIAIgNIAFgGIABgBIAFgFQAFgHAIgFQAOgLALgNIAAAAIABgBIACgDQAEgHACgHIgCgEIAAAAIgIgKIABgBIgDgEIAAgBIACgIQAIgIAJgFIAGgCIABAAIABAAIACgBIABgCIAAgDIAAAAQAFgIAIgGIABgBIAEgEIAAAAIABgBIAEgIQAEgHADgIIABgBIAAgBIAGgJQAEgFABgGIAAgBIABgCIAAAAIAJgHIAAgBIAAgBIACgDIAAgBIAIgFIAAgBQAJgHALgEIACgBIABAAIABgBIABAAIABAAIABgBIAAAAIABAAIAAgBIABAAIABAAIACgBQATgGAUAFIABABQADACAEABIACAAIABABIABABIAJgDIACAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABAAIABAAQADACAHgFIABAAIABgBIABAAIAGADIAAABQAEADACgKIABgCQAEgGAHgEIABAAIABgBIACAAQAFgEAFgDIAAABIAEgCIABAAIAJgDIABAAIAGgFIABgCQAJgFALgCQABAAAAABQABAAAAAAQABAAAAAAQABAAABAAIAAAAIABAAIABgBIAOABIACABIAJgDIAAAAIAZgBIAAAAIAGgDIADAAIAAgBQAPgGAQACIAEABIABAAQAEADADADQAHAGADAKIABABIAIAFIABABIAVABIABAAQAKACAIAEIABAAIAGAGQADACACAEIABABIAHAEQAKAFAFAMIAAABIAAAAIABABQAKAFAIAHIABAAQAFAHAHAFIABABIACAAIABABQAKAFAHAIIABABIABAFIABACIABAHIAAACIgDAVIAAABIgBABIADACIABABIACAAQAJAKAMAFIABABIAAAAIAFAFIAAABQAGAEACAHIAAABIACAMIAAABIgBAKIgBAAIAEAJIAAABIACAEIABABIAHAFIAJARIACACIACABIAGAMIABAEIAAABIAAACQgEANgEAQIgBAAIAAACIgBACIgCAEIAAACIAAACIAAARIABAKIAAABIAAABQgBALgJAQIgBABIAAAAIgLAKIgIAFIAAAAQgBABAAAAQAAAAAAABQAAAAAAAAQAAAAABABIAAgBIABAEIAAAAIgDABQgJACgDADIABAAQAEABAFgBIAAABQABADgCACIgBABIAAgBQAAAAAAABQAAAAAAAAQAAAAgBAAQAAABAAAAIgCAAIAAABIgHABIAAAAIgFACIgBAAQgFgHgNAFQgHgDgKADQgGAAgFABIgKgHIgEgKIgCgBIgKgGIgCgDQgFgJgHgHQgJgHgHgFIgPgJIgCgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAAAIgJgJIgGgHIAAgBIgBgCQgEAAgDgBIAAABIgFABQgHAIgJAHIAAABQgGAFgJADQgIADgKgBQgZgBgTgHIABAAQAKAAAIgDIABgBQAIACALgEIABgBQAEgCADACIAIADIABAAIABABIAAABIANgFIABAAIAIgFIAAAAIAHgDIACgBIAFgCQAMgPAGgVIADgTIABgHIAAAAIABgBQAEgGgGgEQAAAAgBAAQgBABAAgBQgBAAAAAAQgBAAAAgBIgDgGQgDgIAAgMIAAAAIAAgBIAAAAQgFgGgKgCIgBAAQgCgOADgNIgBAAQgFgBgDgDIAAgDQAAgKgEgGQgIgJgUAAIgBgCQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQgLADgMABIAAgBQgFgEgBgIIgBAAQgHgBgJAEIAAAAIgHAFIgBAAQgHAAgFgCIAAgBIgFgLIgBAAQgBgFgEADIAAAAQgJAFgFgDIgBAAQgCAGgKgBIgBABIgRAKIgFADIgEAIQgBAFABAEQAFADACAGIgBAKQgBAIgCAGIgBACIgJAUIABAAIAAADIAAADIAEARQAFALAKAEIAAAHIAAAFIAAABIAAABQADADABAFIAAABIABABIAcAdIABABIAZAPIAAABIANAGIAAAAIgNADIgCAAQgFADgBAGIgDAFIAAAAIgCACIgBABIgFADIgEADIgBADIAAAAIgDAKIgGAJIgDAEIgIAJIgDABIAAACIgBAAIgBADIgBABQgGAGgFAKQgGAJgCAHQgIALAEAKIAEAXIAFAYQgBANgFAKQgIAOgXARIgGAMIgNAbIgHALIAAAFIgSAKIgRAHIgGADQgJAEgKAAQgIABgJgCIgKADgAgyheIAAAAIAAgBgABTB1IAAAAIABgDIAJACIgIACIgCgBg");
	this.shape_5.setTransform(30.9,32.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AizE+IgPABIAAgBIgKgCIAAACIAAgBIgJgJIgDgDQgGgHgIgEIgLgFIgCgCIgBAAIgDgBQgFgBgEgCQgFgDgDgFIgCgGQgBgBAAAAQAAgBAAAAQgBAAAAgBQgBAAgBAAQgCgEgGgCIgBABIAAgBQgPABgOgEQgIgDgGgGIgDgFQgGgLACgRIABgCIgCgGIAAgBQABgJgBgHIABgBIABgNIAAgBIACgEIAAgBIgCgIIgGgGIAAgBIgCgEIgBgCIgFgDIAAAAQgEgEgDgEIAAgCQgCgGACgGIgBgFQAEgEACgGIABgCIAAgBIABAAIADgHIADgKIABgBIgBgVQAAgRANgOIABgBIABgBIABgCIABgCQAGgKAAgKIAAAAIAAgGIAAgBIgGgHIAAgBIgFgGIABgBQgCgGgBgFIAAgEIAAgBIAIgOIAGgGIABgBIAEgGIAOgMQAOgLANgMIAAgBIABgBIABgDQAEgGADgHIgCgEIAAgBIgHgLIAAAAIgDgEIAAgBIADgJQAIgIAKgFIAFgBIACAAIABAAIACgBIAAgCIAAgDIAAAAQAFgJAHgGIABgBIAFgEIABAAIAAgBIAEgHQAFgHADgIIAAgBIAAgBQAFgEACgGQADgFACgGIAAgBIABgCIAAgBIAJgGIAAgBIABgCIACgDIAAgBIAHgFIAAgBQAJgHAMgFIABAAIAAAAIABgBIACAAIABgBIABAAIABAAIAAAAIAAgBIABAAIABAAIABAAIACgBQATgGAUAFIACAAQADADAEABIACAAIAAAAIACACIAIgEIADAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIABAAQADAEAHgGIABAAIABgCIACAAIAEADIABAAQAEACADgKIAAgBQAEgHAIgDIABgBIACAAIABgBQAFgEAGgCIAAABIADgBIABgBIAKgCIACAAIAGgEIAAgCQAJgGAMgCIAAAAIAEAAIABAAIAAAAIABgBIABAAIAOABIACAAIAJgCIABAAIAYABIAAABIAHgDIACgBIABgBQAPgFARACIADABIABAAQAFADADADQAHAGADAKIAAACIAIAFIACABIAVACIACAAQAKACAHAFIACABIAFAHIAEAGIABABQAEABAEADQAKAFAGALIAAABIABABIAAABQAKAEAIAIIAAAAQAFAIAHAFIAAABIADABIACAAQAJAGAIAHIABABIACAFIAAACIABAHIAAACQgDAJAAANIAAABIgBABIACACIABABIABABQAIAKAOAGIAAAAIABAAIADAGIABABQAFAFACAIIAAAAIABANIAAABIgCAJIAAABQABAFACAEIABAAIADAEIABACIAGAFIAHASIACACIADABQACAHAEAGIABAEIAAABIAAACIgIAdIgBABIAAABIgBACIgCADIAAACIgBACIgBATIAAALIgBABIAAAAQgDALgKAQIgBABIgMAJIgIADIgBAAIgBABIAAAAIgBABIAAABIgEAAIgLABIAAgBIAIgCIAAgBIAAgBIgBgBIgBgBIAAABIAAAAQAAgBgGAAIgBAAIgFABIgBAAQgFgKgLADQgHgEgKACIgLACIgJgJIgEgKIgBgBQgGgDgEgDIgDgEQgFgKgGgGQgIgIgJgEIgPgJIgCgCQAAAAAAAAQAAAAAAgBQAAAAgBAAQAAgBgBAAIgKgHIgHgFIAAgCIgBgDQgEAAgDgCIAAAAIgBAAQgHAMgLAJIAAAAQgGAEgHADQgIADgJgBQgeAAgVgMIAAAAIAAAAIABgBQAMABAGgEIACAAQAIABALgEIABAAQAEgDADADIAAAAIAIAEIABABIABAAIAAABQAGgBAIgCIAAAAIAJgGIAAAAIAHgDIACgBIAJgEQAIgLAEgOIAEgRIAAgHIAAAAIABAAQADgGgEgDQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgDgFQgDgIAAgKIAAAAIABgBIgBAAQgFgFgJgCIAAgBQgCgMADgLIgBAAIgHgDIAAgDQgBgJgEgFQgGgIgTgBIgBgCQABAAAAgBQAAAAAAAAQAAAAAAAAQgBAAAAAAIgUAEIAAgBQgFgEgBgGIAAgBQgHAAgIADIAAAAIgGAEIgBAAQgHABgEgDIAAAAIgFgKIgBAAQAAgFgEADIgBABQgHAEgGgDIAAAAQgDAGgHgBIgBAAIgQAKIgEACIgEAHQAAAFABADQAEADACAGIgBAIQgBAIgCAFIgBACIgIASIAAABIABgBIABADIAAACIAEAPQAEAJAJAEIAAAHIAAADIAAABIAAABQADADABAFIAAABIAAABIAaAZIAAABIAWAOIAAAAIgNADIgCAAQgFADAAAFIgFAFIAAAAIgCADIgBABIgFADIgCAEIgBACIAAABQABAEgCAGIgGAKIgDAFIgIAJIgDABIAAACIgBAAIAAADIgBACQgGAGgDALQgGAKgBAIQgGAKAEALIAGAXQADAMACAMQABAOgGAKQgHAOgWAUIgGAMIgNAcQgEAGgEAFIABAFQgIAFgKAFIgSAHIgFAEQgKAEgJACQgJADgHgBIgKAEgABSBaIgBAAIACgDIAJABQgGADgDAAIgBgBg");
	this.shape_6.setTransform(30.6,32.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AjHE8IgKgHIgDgDQgGgHgIgEIgLgGIgCgBIgBAAIgCgCQgGAAgFgDQgFgCgEgFIgDgFQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAIgBAAQgDgDgHAAIAAABIgBgBQgPACgOgEQgJgDgGgGIgDgEQgIgLACgSIABgCIgDgGIAAgBQABgJgCgHIAAgCIACgNIAAgBIACgEIAAgBIgBgIIgEgGIAAgBIgDgFIgBgBIgFgEIgBgBQgEgDgDgFIAAgBQgBgGACgGIgBgFQAEgEACgGIABAAIABgCIAAgBIABAAIAAAAIACgHQADgFACgFIAAgBIgCgVQgCgRAOgOIABgCIABgBIABgBIACgCQAGgKABgKIAAgBIACgGIgBgBIgFgHIgBgBIgEgGIAAgBIgDgLIAAgEIABgBIAIgPIAFgGIABgBIAFgGIAOgMQAOgLAOgMIAAgBIABgBIACgDQAEgGACgIIgCgEIgGgMIAAgBIgDgEIAAgBIADgJQAIgIALgEIAFgBIACAAIACAAIACgBIAAgCIgCgDIAAAAQAFgKAIgGIABAAIAEgFIABAAIABgBIAEgHIAJgOIAAgBIAAgBQAFgEACgGQADgFACgHIAAgBIAAgCIAAgBIAJgHIAAgBIABgBIACgDIAAgBIAIgGIAAgBQAJgHAMgFIABAAIABgBIACAAIABgBIABAAIAAAAIABgBIABAAIABAAIAAAAIABAAIABgBQAVgHAUAFIACABQADAEAEAAIACAAIABAAIABABQACgCAHgCIACAAIAEgCIAAAAQAEAHAGgIIABAAIABgCIABAAIAGABIABABQAEABADgKIABgBQAEgHAIgDIAAgBIACgBIACAAQAFgEAGgCIAAABIAEgBIABAAIAKgBIABAAIAGgFIABgCQAJgFAMgDIAEgBIABAAIABAAIAAgBIABAAIAOAAIADAAIAJgBIABAAIAYAEIAAAAIAIgDIACAAIABgBQAPgEARABIAEABIABABQAEACADAEQAHAGADAKIAAACIAJAFIABABIAWACIACABQAKACAHAGIABABIAEAIIAEAHIABABIAIAEQALAFAHAKIAAABIABABIABABQAKAEAHAJIABAAQADAIAHAGIABABIACABIACABQAKAFAIAIIABAAIACAFIAAADIACAHIAAACQgDAJgBANIgBAAIAAABIAAABIABACIABABIABABQAIALANAHIAAAAIABAAIAEAGIAAABQAFAGABAIIAAAAQABAHAAAHIAAABIgDAJIAAABQABAFADAEIABAAIADAEIABACIAGAFIAAAAIAFAUIACACIACABIAHAMIABAEIAAABIAAADIgIAdIgBAAIAAACIgBACIgCAEIAAACIgBACIgDATQAAAFgCAGIgBABIAAABQgEAKgLAQIgBABIgBAAIgMAIIgKABIAAAAIgDAAIAAAAIgDgBIAAAAIgEAAQgKgCgDgBIAAgBIABAAIAIgFIAAgBIABgEIAAgDIAAgCIAAgDIgBgDIAAAAQAAgCgGAAIgBAAIgEABIgBAAQgFgNgKABQgHgGgKACQgFgBgGACIgIgKIgDgLIgBAAIgLgGIgCgEQgEgLgGgGQgJgIgJgEQgIgEgIgDIgBgDQAAAAAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAIgMgGIgHgEIgBgBIgBgEQgDAAgDgCQgHAOgMAJIAAABQgFAEgHACQgGADgIgBQgbAAgSgLIAAAAIgMgIIAAAAQAMABAGgFIABAAQAJACALgEIABgBQAFgDACAEIAAAAIAIAFIABABIABABIAAAAQAGAAAJgCIAAAAIAJgGIAAAAIAIgDIABgBIALgDIABABQAFgIADgKIADgPIABgFIAAAAIAAgBQADgFgEgDQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAAAAAAAIgCgFQgDgHAAgIIAAgBIAAAAIAAAAQgFgFgHgBIAAgBQgCgKACgKIgBAAQgDgBgDgCIAAgDQAAgHgEgFQgGgHgQAAIgBgCQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAQgIACgJABIgBAAQgEgDAAgGIgBAAQgGgBgHADIAAAAIgGAEIAAAAQgGAAgEgCIAAAAIgEgJIgBAAQAAgEgEADIAAAAQgGAEgFgCIgBAAQgCAFgIgBIgBAAIgNAJIgDACIgDAGQgBAEABADQADADACAFIgBAHQAAAGgCAFIgBACIgHAQIACgBIAAADIAAACIADANQAEAIAIADIAAAGIAAADIAAABIAAABQACADABAEIAAAAIABABIAWAWIAAABIAIAEIgBABIgNAEIgCABQgFACgCAGIgEAEIAAABIgBACIgBABIgFAEIgDADIAAADIAAABQABAEgBAGIgGALIgCAFIgIAKIgDABIABACIgBAAIgBADIAAACQgEAHgEAMQgEALAAAIQgFAKAFAMIAHAYQAEAMACAMQABAOgEALQgHAOgVAWIgGAMIgOAdIgIALIACAFIgTAKIgSAIIgFAEQgJAFgKAEQgIADgIABIgKAFIgBAAIgOACIgBAAIgKAAIgBABIAAgBgAgXhnIAAAAIAAAAgABQA+IAAgBIABgCIALgBQgIAEgDAAIgBAAg");
	this.shape_7.setTransform(30.3,32.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AjBE8IgMgGIgDgDQgHgHgIgEIgLgGIgCgBIgBAAIgCgDQgGAAgFgCQgFgCgFgFIgEgEQAAgBAAAAQgBAAAAAAQgBgBAAAAQgBAAgBABIAAAAIgBAAQgDgCgIACIgBABIAAgBQgQADgOgDQgJgEgHgFIgDgFQgIgKABgTIAAgBIgDgIIAAAAQAAgIgDgJIABgBIABgNIABgCIABgDIABgBIgBgJQAAgEgDgDIAAgBIgDgFIgBgBIgFgEIgBgBQgFgDgCgFIAAgBQgBgGACgHIAAgDQADgEADgHIABAAIABgBIAAgCIABAAIAAAAIADgHIAFgKIAAgBIgEgVQgDgSAOgOIACgCIABgBIABgBIACgCQAHgKACgJIABgBIACgGIgBgBIgFgJIgBgBIgEgFIAAgBIgDgLIAAgFIAAgBIAIgPQADgBADgFIAAAAIABgBIAEgGIAPgMIAdgXIAAgBIABgBIACgCQAFgIABgHIgBgFIAAAAIgGgNIAAAAIgCgFIAAgBIADgKQAJgGAKgFIAGAAIACAAIACAAIACAAIgBgDIgCgDIAAgBQAEgKAJgGIABAAIAEgEIABAAIABgBIAEgHIAKgPIABAAIAAgBIAHgLIAEgMIAAgBIAAgCIAAgBIAJgHIAAgBIABgBIACgEIAAAAIAIgHIAAgBQAJgIANgEIABAAIABgBIABgBIACAAIABAAIAAgBIABAAIABAAIAAgBIABAAIABAAIABgBQAVgGAVAFIABABQADAEAEAAIADAAIABABIABAAQACgDAGgDIACAAQABAAAAAAQABAAABgBQAAAAABAAQAAAAABAAIAAABQAEAIAFgJIABAAIACgCIABgBIAGABIABABQAEgBADgIIACgDQAEgFAIgFIAAgBIACgBIACAAQAFgDAGgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIACAAIAJAAIACgBIAGgEIACgCQAJgGALgDIAFgBIABAAIABAAIAAgBIABgBQAGgBAIAAIADABQAEgCAGAAIAAABQANADALADIABABIAHgDIADAAIABAAQAQgFAQABIAEABIACABQAEACADAEQAHAGACALIABABIAJAGIABABIAXADIABAAQAKAEAHAHIABAAIAEAKIADAIIABABIAIADQAMAFAHAKIABABIABAAIABABQAKAFAGAIIABABQADAJAGAGIABABIACABIADABQAKAFAIAIIACAAIABAGIABACIACAIIAAABQgEAKgBANIgBAAIAAABIAAACIABACIABAAIABABQAHANANAGIAAABIABAAIAEAGIAAABQAEAHABAIIAAABIAAANIAAABIgDAKIAAABQABAEADAFIABAAIADAEIABABIAGAGIAAABIAEAUIABACIACACIAIAMIAAAEIAAABIAAADIgIAdIAAAAIgBACIgBADIgBAEIgBACIgBADQgBAKgDAJQgBAEgDAGIgBABIAAABQgFAKgNAQIgBABIgBAAIgNAHIgLAAIgEgBIAAgBIgFgDIgBAAIgEgBQgLgEgCgDIAAgBIAAAAIAIgIIAAgCQACgFgBgEIABgEIAAgEIABgFIgBgDIABgBQABgDgGgBIgCAAIgEABIgBgBQgEgQgKAAQgGgIgKABQgGgBgGADIgGgMIgCgMIgCAAIgLgFIgBgDQgEgMgGgHQgJgIgJgFQgIgEgJgCIgCgDQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBgBAAAAIgNgEIgJgEIAAgBIgCgDIgEgDQgGAQgNAJIAAABIgLAGQgFABgHAAQgXAAgQgJIAAAAIgRgKIAAgBIgDgDQAJAAAFgFIABAAQAJADALgGIABAAQAFgEACAFIAAAAIAIAGIABABIAAACIAAAAQAHAAAJgCIABAAIAIgFIAAgBIAIgDIACgBIALgDIABAAIACADIAEgLIADgMIABgFIAAAAIAAgBQADgEgEgCQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBgBIgCgEQgCgFAAgHIAAgBIAAgBQgEgDgGgBIgBAAQgBgKACgIIgBAAQgDgBgDgBIAAgDQAAgHgDgDQgFgGgOAAIgBgCQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAQgHACgIABIAAAAQgEgDAAgFIgBAAQgFgBgGADIAAAAIgFADIgBAAIgIgBIAAAAIgEgIIAAAAQAAAAgBgBQAAAAAAAAQgBgBAAABQgBAAgBAAIAAAAQgGAEgEgCIAAAAQgDAFgHgBIAAABIgMAHIgBACIgEAFQAAADABACQACADABAFIAAAGQAAAFgCAFIgBABIgGAOIACgBIAAACIAAACIADALQADAHAHACIAAAGIgBADIAAAAQADADAAAEIAAAAIABABIARAPIgFgBIgBABIgNAEIgCABQgEADgCAFIgFAEIAAABIgBADIgBABIgFAEIgDAFIAAADIAAAAQACAFAAAHQgDAEgDAGIgCAFIgHALIgDABIABACIgBAAIAAAEIAAACQgEAHgDANQgDAMABAIQgDALAGANIAIAXIAGAZQACAOgEALQgFAOgVAZIgGANIgOAdIgIALIACAFIgUAKIgSAIIgEAEQgJAHgKAFQgIAEgJADIgJAGIgBAAIgOAEIgBAAIgKACIgBACgAgKhsIAAAAIAAAAgABPAhIgBgBIACgCIALgCQgJAFgCAAIgBAAg");
	this.shape_8.setTransform(30,32.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ai7E8IgNgFIgEgCQgIgGgIgFIgKgHIgCgBIgBAAIgCgCQgGAAgFgCQgGgCgFgEIgFgFIgFABIAAAAIgBAAQgEAAgJADIAAAAIgBAAQgQAEgOgDQgKgDgHgGIgDgEQgJgKAAgTIAAgCIgEgHIAAgBQAAgJgDgIIAAgBIABgNIABgCIACgEIAAgBIABgJIgDgHIAAgBIgDgFIgBgCIgFgEIgBgBQgFgDgDgFIAAgBQgBgGADgHIAAgDQAEgEADgHIAAAAIABgBIABgBIABAAIAAgBIADgGQADgFACgGIAAgBIgGgVQgEgTAQgOIABgBIABgBIABgCIADgCQAIgJADgJIAAgBIADgHIAAgBIgGgIIAAgBIgEgGIAAgBIgEgLIAAgEIABgBIAHgQQADgCADgFIABAAIABgBIAEgGIAPgMIAegXIAAgBIABgBIACgDQAFgGACgIIgCgFIAAgBQgEgGgBgHIAAgBIgCgEIAAgBIADgKQAJgHAMgEIAFAAIACAAIACAAIADAAIgCgDIgDgDIAAAAQAFgLAIgGIABgBIAFgEIABAAIAAgBIAFgGIALgOIAAgBIAAAAQAFgGACgGIAEgNIAAgBIAAgCIAAgBIAJgHIABgBIABgBIACgEIAAgBQADgEAFgCIAAgBIAAgBQAJgIANgEIABAAIAAgBIABAAIACgBIABAAIABAAIAAgBIABAAIABAAIABgBIAAAAIABAAIABgBQAVgGAWAFIABABQADAEAFAAIACAAIABAAIABABQACgEAGgCIADgBIAFgBIAAABQAEAKAFgKIAAgBIACgCIABAAIAHAAIABAAQAEgBAEgJIABgBQAFgHAHgEIABgBIABgBIACAAQAGgDAHgBIAEABIAAgBIALABIABAAIAHgFIACgBQAJgGALgFIAAABIAFgCIABAAIABAAIAAgBIABgBQAHgBAIAAIACAAQAFgBAFABIABAAQANAEALAFIABABIAIgDIACAAIACgBQAQgEARACIAEAAIABABQAFACADAEQAHAGACAMIAAACIAKAFIABABIAXAEIABAAQAKAEAHAIIABABIADALIADAIIAAABIAJADQAMAFAIAJIABABIABABIABABQALAEAFAJIABABQADAKAGAGIAAABIADACIACAAQALAGAIAHIACABIACAFIAAADIACAHIAAACQgEAKgBANIgBAAIAAABIAAACIAAACIABABIABABQAGANAOAHIAAABIABAAIADAGIAAACQAEAGABAKIAAAAIgCAOIAAACIgDAJIAAAAQACAGADADIAAABIAEAEIABABIAGAGIAAABIACAWIABACIACABQADAHAFAFIAAAEIAAABIAAACQgDAQgFAQIAAAAIgBACIgBACIgBAFIgBACIgBACQgBALgFAJQgBAEgFAHIAAABIgBABQgGAKgOAPIgCABIgPAGIgLgCIgFgDIgBAAIgHgFIAAAAIgFgBQgMgGgCgGIAAAAIAAgBIAAAAIAIgLIAAgCIAAgBIACgNIABgGIABgFIABgHIgBgFIABAAQACgFgHgCIgBAAIgFABIgBgBQgDgTgIgCQgGgKgLABQgFgBgHACIgFgLQgBgGAAgHIgCAAQgGgCgFgEIgBgEQgDgMgHgHQgIgJgKgEIgSgGIgBgDQAAAAAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAIgOgDIgKgCIAAgCIgCgDIgDgCQgGARgNAKIAAAAIgJAFQgEACgGAAQgUAAgNgIIAAAAIgOgIIAAgBIgQgNQAHAAAEgFIABAAQAJADALgFIABgBQAGgDABAEIABAAIAHAJIABABIABABIAAAAQAGABAKgBIABAAIAJgGIAAgBIAIgDIACAAIALgDIABAAIADAFIABgEIADgKIAAgEIABAAIAAgBQACgDgDgCIgCgBIgCgDQgCgFAAgGIAAAAIAAAAQgEgDgFgBIAAgBQgCgHACgHIgBAAIgFgCIABgCQgBgFgCgDQgFgFgMAAIAAgCIgBgBIgNADIAAAAQgDgCgBgEIAAgBQgEAAgGACIAAABIgEACIgBAAIgHgBIAAAAIgDgGQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBAAAAABIAAAAQgFADgEgBIAAAAQgCADgGAAIAAAAIgLAHIgCABIgCAFQAAAAgBABQAAABAAAAQABABAAAAQAAABAAAAQACACABAEIgBAGQAAAEgCAEIAAABIgFAMIgBAAIADgBIAAACIAAABIADAJQADAGAGACIAAAEIAAACIAAABIACAFIAAABIAAAAIACACIgIAAIgBABIgMAFIgCABQgFADgDAFIgFAEIAAAAIgBADIgBABIgFAFIgCAGIAAADIAAABQADAEAAAHQgDAFgCAHIgCAGQgCAGgEAFIgDAAIABACIgBABIAAADIAAACQgDAIgCAOQgCANACAJQgCAKAHAOIAJAYQAFAMACANQADAOgEAMQgEAOgUAcIgGAMIgPAdIgIALIADAGIgUAKIgTAJIgEAFIgSANQgJAGgIAEIgKAHIgBAAIgOAGIAAAAIgLAEIgBACIAAgBgABOAFIgBAAIACgDIALgDQgKAHgCAAIAAgBg");
	this.shape_9.setTransform(29.6,32.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ai1E+IgPgEIgEgDIgQgKIgLgHIgCgCIAAAAIgCgCIgMgCQgGgBgGgEIgGgEQgBAAgEABIgBABIgBAAQgFABgJAEIgBABIAAAAQgQAFgPgDQgKgCgIgGIgDgEQgKgLgBgTIAAgCIgEgHIAAgBQgBgJgEgIIABgBIABgOIAAgBIACgEIABgBIACgKQAAgEgCgEIAAgBIgDgFIgCgCIgFgEIgBgBQgFgEgDgEIAAgBQgBgHAEgHIgBgCQAEgEAEgHIAAAAIACgBIAAgBIABAAIAAgBIAEgGIAFgLIAAgBIgIgWQgFgSAQgPIACgBIABgBIABgBIADgCQAJgKAEgJIABgBIAEgHIgBgBIgFgIIgBgBIgEgGIAAgBIgEgLIAAgFIAAgBIAIgQQADgCADgFIABAAIABgBIAEgGIAPgMIAggXIAAgBIABgBIACgDQAFgHABgIIgBgFIAAAAQgEgHgBgIIAAAAIgBgFIAAgBIADgKQAKgHALgEIAGAAIACAAIACAAIADABIgCgDIgEgDIAAAAQAEgMAJgGIABgBIAFgEIABAAIAAgBIAFgGIAMgOIABAAIAAAAQAEgGADgHQACgGABgHIAAgBIAAgCIAAgBQAFgDAEgFIABgBIABgBIACgEIAAgBIAIgGIAAgBIAAgBQAKgIAMgEIABgBIABAAIACgBIACgBIABAAIAAgBIABAAIABAAIABAAIABAAIABgBQAVgHAWAGIACAAQADAFAEAAIADAAIABAAIABABQABgGAHgCIACAAQADgBADAAIAAABQAEANAEgMIABgBIACgCIABgBIAHgBIABABQAEgDAEgIIACgCQAFgGAHgEIABgBIABgBIACgBQAGgDAGAAQABAAAAAAQABABAAAAQABAAAAAAQABAAAAAAIACAAIALABIACAAIAHgEIABgCQAKgGALgFIAFgCIABAAIABAAIAAgBIABgBQAHgCAIAAIACABQAFgBAGAAIAAABQANAFAMAHIAAAAIAJgCIACAAIACgBQAQgEARACIAEAAIACABQAFACADAEQAHAGABANIAAACIALAFIABABIAXAFIACAAQAKAFAGAIIABABIACAMIADAJIAAABIAJADQANAFAJAJIABAAIABABIABABQALAEAFAKIABABQACAKAFAHIABABIADACIACABQALAFAJAIIACAAIABAGIABACIACAIIAAABQgEAKgBAOIgBAAIAAABIAAACIgBACIABABIAAABQAGAPAOAHIAAABIABAAIADAGIAAACQAEAHAAAKIAAAAIgCAPIgBABIgDAKIAAAAQACAFADAEIABABIAEAEIABABIAGAGIAAABQAAAMgBAKIABACIACACIAJAMIAAAEIAAABIAAADQgDAQgFAQIgBABIgBACIgBACIgBAFIgBACIAAACQgCALgGAJQgCAEgGAHIAAABIgBABIgWAZIgCABIgBAAIgQAEIgLgDIgHgEIgBgBIgJgGIgBAAIgEgCQgNgIgCgIIAAgBIAAgBIAHgNIAAgDIAAgBIADgSIACgIIAAgFIACgKIAAgGIAAAAIABgBQADgFgHgDIgCAAIgFAAIgBgBQgDgVgHgEQgFgLgLAAQgGgBgGADIgEgOQgBgHAAgGIgBAAQgHgCgFgEIgBgFQgCgMgHgIQgIgIgKgEQgJgEgKgCIgCgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAAAIgPgBIgLgCIgBgBIgCgEIgCgCIgBAEQgFAQgMAJIAAAAIgHAEQgEACgFAAQgQAAgKgGIgBAAIgLgGIAAgBIgPgLIAAgBIAAAAIgCgEIAAgBIAAgCIAAgDIgFgDIACgCIABgBQAJAEALgGIABgBQAGgDABAFIABAAIAHAKIABABIABABIAAABQAGABAKgBIABAAIAJgGIAAgBIAJgDIACAAIAMgDIAAABQACAEACACIABgFIAAgDIABAAIAAgBQAAgBAAAAQABgBgBAAQAAgBAAAAQAAgBgBAAIgCAAIgBgDIgCgIIAAAAIAAgBQgDgCgEAAIgBgBQgBgFABgGIAAAAIgEgCIAAgBQAAgFgCgCQgEgEgKAAIAAgBIgBgBQgFACgFABIgBgBQgCgBgBgDIgIABIAAABIgEACIgGgBIAAAAIgDgFQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBAAAAAAIAAABQgEACgDgBIgBAAQgBADgFAAIAAAAIgJAFIgBACIgDADIABAEIACAFIgBAEQAAAEgBADIgBABIgEAJIADgBIAAACIAAABIACAHIACADQgGAEgLgBIgBABIgNAGIgCABQgFADgDAEIgFAEIAAABIgCACIgBACIgFAFIgBAGIAAADIAAABQAEAFAAAIQgCAEgCAIIgBAGIgGAMIgDABIABACIgBABIAAAEIABACIgDAWQgCAOADAJQAAALAHAOIALAYQAFANADAMQADAPgDAMQgDAPgUAeIgGAMIgPAeIgIALIADAGIgVAKIgSAJIgFAGIgRAPQgJAIgIAFIgKAIIgBAAIgNAIIgBAAIgLAGIgBACgAAQhzIAAAAIAAgBgABMgVIgBAAIACgDIAMgFQgLAIgBAAIgBAAg");
	this.shape_10.setTransform(29.3,32.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AjAE7IgEgCIgRgJIgLgIIgCgCIAAAAIgCgCIgMgBIgMgFIgHgDQgCgBgFADIAAAAIgBABQgGACgKAFIgBABIAAAAQgRAGgPgCQgKgCgIgGIgEgEQgLgLgBgTIAAgCIgGgIIAAgBQgBgJgEgHIABgCIAAgOIABgBIACgEIAAgBIAEgLQAAgEgCgEIAAgBQgBgDgCgCIgBgCIgGgFIgBgBQgFgDgCgFIAAgBQgCgHAEgHIAAgBIAIgLIACgCIAAgBIABAAIABAAIAEgHQADgFABgFIABgCIgJgWQgHgTARgOIACgBIABgBIACgCIACgCQAKgJAFgJIABgBIAFgHIgBgBIgFgJIgBgBIgEgGIAAgBIgEgLIAAgEIAAgBIAIgRQADgCADgFIABgCIAFgGIAQgMIAggXIABgBIABgBIABgDQAFgHACgIIgBgFIAAgBQgEgHgBgIIABAAIgCgGIAAgBIAEgKQAKgGAMgEIAGAAIACAAIACABIADAAIgDgCIgEgDIAAgBQAEgMAJgHIABAAIAFgEIABAAIAAgCIAGgFIAMgNIABAAIAAgBQAFgGACgHQACgGABgHIAAgBIAAgDIAAgBIAKgHIAAgBIABgCIACgEIAAgBQAEgEAFgCIAAgBIAAgBQAJgIANgFIABgBIABAAIACgBIABgBIACAAIAAgBIABAAIACAAIABAAIABgBQAVgHAXAGIABAAQAEAGAEAAIADgBIAAABIACAAQABgHAGgCIADAAIAGAAIABAAQAEAQADgNIABgBIABgDIABgBQADgCAFAAIABAAQAFgDAEgHIACgCQAFgGAHgFIABgBIACgBIABgBQAGgDAHAAIAAAAQABABAAAAQABAAAAABQABAAAAAAQABAAAAAAIACAAIAMACIABAAIAHgEIACgCQAKgHALgFIAFgCIABgBIABAAIAAgBIABgBQAHgCAIAAIACAAIALAAIABABQANAHALAIIABABIAJgDIACAAIACAAQARgEARABIAEABIACABQAFABACAFQAIAGABAOIAAABIALAGIACABIAXAFIACABQAJAEAGAJIABACIACANIABAJIABACIAKADQANAFAKAHIAAABIACABIACAAQALAEAEAMIABAAQABALAFAIIAAABIAEACIACABQALAFAKAIIABAAIACAGIABACIACAIIAAABQgFAKgBAPIgBAAIAAABIAAABIgBADIABABIAAABQAFAQAOAHIAAABIABAAIADAHIAAACQADAIAAAKIgBAAIgCAPIgBABIgDAKIAAABQABAFAEAEIABAAIAEAEIACACIAFAFIAAABQAAAMgCAMIAAACIACABQAEAHAFAGIAAAEIAAACIAAACQgCARgGAQIAAABIgBABIgBADIgBAFIgBACIgBADQgCAKgHAKIgJALIgBABIgBABIgZAZIgCAAIgSAEIgMgGIAAABIgIgGIgBAAIgLgIIgBgBIgFgDQgOgKgCgJIAAgBIAAgBIAAgBIAHgPIAAgEIAAgCQADgLABgLIACgKIABgGIACgNIAAgHIABAAIAAAAQAEgHgHgDIgCAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBIgBgBQgDgXgGgGQgGgOgKAAQgGgBgGADIgEgPIABgOIgCAAQgHgCgFgEIgBgFQgBgNgHgIQgIgIgLgEQgJgEgLgBIgBgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAgBAAIgPgBIgNAAIAAgCIgCgDIgCgCIgCgCIAAAAIgCgGIgBgBIgBAAIAAgBIAAAAIAAAAIgGgCIAAgJIgDgBIAAgBIgCgFQgEgDgHAAIAAAAQAAgBgBAAIgIACIAAAAIgDgDIgGABIgDACIAAAAIgFgBIgCgDIgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBAAAAAAIAAABQgDACgDgBIAAAAQgBACgEAAIgHAFIgBAAIgCADIABADIABAEIAAADIgBADQgIACgIgDIgBABQgFAHgNgCIgBABIgNAHIgCABQgGADgDAEIgGADIAAABIgCADIgBACIgEAGIgCAGIABADIAAACQAEAEACAIQgDAFgBAIIgBAHIgFAMIgDACIABABIgBABIABAFIAAACIgBAYQAAAOADAKQABALAJAPIALAYQAGANADAMQAEAPgCAMQgDAQgSAgIgHANQgHAQgIAOIgJALIAEAGIgVAKIgSAKIgFAGIgSASIgQAQIgKAIIgBABIgNAJIgBABIgLAIIgCACIgQgEgABKgwIAAgBIACgCIAMgHQgMAKgBAAIgBAAg");
	this.shape_11.setTransform(29,32.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ai8E9IgEgCQgKgEgHgFQgGgDgFgFIgCgCIAAAAIgCgDQgGABgGgBIgOgEIgHgDQgCAAgGADIgBABIAAABQgHACgLAHIAAABIgBAAQgRAIgPgDQgKgBgJgGIgFgEQgLgKgCgVIAAgCIgHgHIAAgBQgBgJgFgIIABgCIAAgOIABgCIACgEIABgBIAEgKQABgFgCgEIAAgBIgDgGIgCgCIgFgFIgCgBQgFgDgCgFIAAgBQgBgGAEgIIAAgBIAJgKIABgCIABgBIABAAIABgBIAEgGQADgFACgGIAAgBIgLgWQgIgUASgOIACgCIABgBIACgBIADgCQAKgJAHgJIABgBIAFgHIAAgBIgGgJIAAgBIgFgGIABgBIgEgMIgBgFIAAgBIAIgRQADgBADgGIABAAIABgBIAEgHIARgMIAhgWIABgCIABgBIACgCQAFgIABgIIAAgGIgBAAQgDgIgBgIIABgBIgCgFIAAgBIAEgKQALgGAMgEIAGAAIACAAIADABIADABIgDgDIgGgDIAAgBQAEgMAJgHIABgBIAGgEIABAAIAAgBIAGgFIANgNIABAAQAEgHADgHIADgOIAAgBIAAgCIAAgCQAFgDAEgEIABgBIABgBIACgFIAAgBQADgEAGgDIAAAAIAAgCQAJgIANgFIABgBIABAAIACgBIACAAIABAAIAAgBIAAgBIABAAIABAAIABAAIACAAIAAgBQAWgHAXAGIABABQAEAFAEAAIAEAAIAAAAIABAAQABgIAHgCIACAAIAGABIABAAQAFARACgOIABgBIABgDIABgBQAEgCAFgBIABAAIAJgLIACgCQAGgGAHgFIAAgBIACgBIACgBQAFgDAIAAIAAABQABAAAAABQABAAAAAAQABABAAAAQABAAABAAIABAAIANADIABAAIAHgEIACgCIAVgNIAGgDIABAAIAAAAIAAgBIABgBQAHgDAIAAIADAAIALABIAAAAQAOAIALAKIABABIAJgDIADAAIABAAQASgDARABIAFAAIABABQAFACADAEQAIAHAAAOIAAABIAMAGIABABIAYAGIACABQAKAFAFAKIAAABQACAHAAAIIABAKIAAABIALADQAOAFAKAHIABABIABAAIACABQALAEAEAMIABAAQABAMAEAIIABACIADABIADABQALAGAKAHIACABIACAGIAAACIADAIIAAABQgFAKgCAPIgBAAIAAABIAAACIgCACIABACIAAABQAFARAOAHIAAABIABAAIADAIIAAABQACAJgBAKIAAAAIgDAQIgBABIgDAKIgBABQACAFAEAEIABAAIAEAEIACACIAFAFIAAABQgBAOgDAMIAAACIACABQAEAHAFAGIAAAEIAAACIAAACQgCASgGAQIAAAAIgBACIgBACIgBAGIgBADIgBACQgDALgIAJQgCAEgJAIIgBABIAAABIgcAYIgDABIgSACIgNgHIgJgGIgBgBIgOgKIgBgBIgFgDQgPgNgCgKIAAgBIAAgBIABgCIAFgSIABgFIAAgBIAEgbIADgMIACgHIACgPIABgJIAAABIABgBQAEgIgHgEIgCAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBIgBgBQgCgagFgHQgFgQgLgBQgGgBgGADIgDgRIACgOIgCAAQgHgCgGgEIAAgFQgBgOgGgIQgIgIgMgFQgJgDgLgBIgCgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAAAIgRABIgNAAIgBgBIgCgDQgFgEgBgIIgBgBQgGAAgHACIgCAAIgBABIgIACIAAABIgGAEIAAAAIgJAHIAFgFIADgDIAGgFIACgBIABAAIgEADIAEgDIABgBIgCABIgCAAIgCgCIAAAAIgFACIgCABIAAAAIgEAAIgBgCIgBAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBAAAAAAIgEACIgEACIgEADIgBgBIgGgNIgBAAQgBgGgHAEIAAABQgMAHgKgFIgBABQgFAHgNgBIgBABIgOAHIgBABQgGADgEAEIgGADIAAABIgCADIgBABIgEAHIgBAHIABAEIAAABQAFAFACAIQgCAFgBAJIgBAHQgBAHgDAGIgDABIABACIgBABIABAFIABACIAAAZQABAQAEAJQADAMAJAQIAMAYQAHANADANQAFAPgCAMQgCAQgRAiIgHANQgIASgIANIgJALIAFAGIgWALIgSAKIgFAGIgRAVIgRASIgJAJIgBABIgOAMIAAABIgMAJIgCADIgSgDgABJhMIAAAAIACgDIANgIQgNALgCAAIAAAAg");
	this.shape_12.setTransform(28.7,32.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ai3FAIgFgCQgKgEgIgFIgLgJIgCgCIgBgCIgNgBIgOgDIgJgCIgIAEIgBABIgBABIgTAMIgBABIAAAAQgRAIgQgBQgLgCgJgGIgEgDQgMgLgEgVIAAgCIgHgHIAAgBQgCgKgFgHIABgCIAAgPIABgBIACgEIAAgBIAGgMQABgEgBgEIAAgBQgBgEgDgCIgBgDIgGgFIgCgBQgFgDgCgFIAAgBQgBgHAEgHIAAgBIAKgKIACgCIAAgBIABAAIABgBIAFgGQADgFABgGIABgCQgHgKgGgMQgJgUATgOIACgBIABgBIACgCIADgCQALgIAIgJIABgBIAHgIIgBgBIgFgJIgBgBIgFgGIABgBIgEgMIgBgFIAAgBIAIgRQADgCADgGIABAAIABgBIAEgHIARgMIAjgXIAAgBIABgBIACgDQAFgHACgJIgBgFIAAgBQgEgIAAgIIABgBIgBgGIAAgBIAEgKIAYgKIAGABIACAAIADABIADABIgEgDIgGgDIAAgBQAEgNAJgHIABgBIAGgDIABAAIAAgCIAGgFIAOgMIABAAQAFgHACgIQACgGABgIIAAgBIAAgDIAAgBQAFgDAEgFIABgBIABgBIACgFIAAgBQAEgEAFgCIAAgBIAAgCQAJgIANgFIABgBIACAAIACgBIABgBIACAAIAAAAIAAgBIABAAIACAAIABAAIABgCQAWgHAXAHIACAAQADAGAFAAIADAAIACAAQABgJAGgCIADAAQADgBAEACIABAAQAEAUACgQIAAgBIACgEIABgBQADgDAGAAIABAAIAKgMIACgCIANgLIAAgCIABgBIACgBQAGgCAJAAIAAABQABAAAAABQAAAAABAAQAAABABAAQABAAAAAAIACAAQAGADAHABIABAAIAHgEIACgCIAWgNIAFgDIABgBIABAAIAAgBIABgBQAHgDAIgBIADAAIALABIABABQANAJAMALIAAABIAKgCIADAAIACAAQASgDARABIAEAAIACABQAFACADAEQAIAHAAAPIAAABIAMAGIACABIAYAHIABABQAKAFAFALIABACIAAAPIABALIAAACIALACQAOAFAMAGIAAABIACABIACAAQAMAEADANIABAAQAAANAEAIIAAACIAEACIADABQALAFALAIIABAAIACAGIABADIADAHIAAACQgGAKgBAPIgBAAIAAABIgBACIgCADIABABIAAABQAEASAOAIIAAABIABAAIADAIIAAACQACAJgCALIAAAAIgEAPIgBACIgEAKIAAABQACAEAEAEIABAAIAFAEIABACIAGAGIAAABQgDAOgEANIAAACIACACQAEAHAGAFIAAAEIAAACIAAADQgCASgGAQIgBABIgBACIgBACIgBAGIgBACIgBADQgDAKgJAKIgNAMIgBABIgBABIgeAYIgCAAIgUACIgOgJIgKgIIgBAAIgQgMIgBgBIgGgEQgQgPgBgMIAAgBIAAgCIAAgBIAGgVIAAgFIAAgCIAFggIAEgNIABgJIADgRIABgKIABAAIAAAAQAGgIgIgFIgCAAQgEAAgBgBIgBgCQgBgegEgJQgFgRgLgCQgGgBgHADQgBgJAAgJIACgPIgBAAQgIgBgFgEIAAgGQgBgOgGgJQgIgIgMgEQgJgDgNgBIgBgDQAAgBAAgBQAAAAAAgBQAAAAgBAAQAAAAgBAAQgIACgJAAIgPACIAAgCIgDgDQgFgFgBgJIAAAAQgHgBgHACIgCAAIgJADIAAABIgKAHIgCAAQgKAAgHgDIAAgBIgBgCIgBgBIgGgOIgBAAQgBgHgHAEIAAABQgMAHgKgFIgBABQgEAIgPgCIAAABIgOAJIgCABIgKAGIgGADIAAABIgCADIgBACIgFAHIAAAIIABADIAAACQAGAEACAJQgCAGAAAJIAAAHIgEANIgDACIABACIgBABIACAFIAAACQACAJAAASQACARAFALQAEALALAQIANAYQAHAOAEAMQAFAQgBAMQgBARgRAkIgHAOQgIARgIANQgEAHgFAFIAFAGIgWAKIgTALIgEAHIgRAXIgRAVIgJAKIgBABIgNAOIgBABIgMALIgCADIgTgBgABHhnIACgDIAOgKIgPANIgBAAg");
	this.shape_13.setTransform(28.4,32.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AlVE8IgFgEQgNgLgEgXIgIgHIAAgBQgCgKgGgIIABgBIAAgPIABgCIAJgRQADgJgGgHIgBgDIgHgFIgBgBQgNgJAJgPQAHgFAGgIIABAAIABgBQAIgIACgJIAAgCQgIgKgGgMQgMgXAbgQQATgMANgQIAAgBQgEgIgHgIIAAgBQgDgIgCgJIAAgCIAIgRQADgCAEgGIAAAAIABgBIAFgIQAagSAbgQIAAgBIABgBIACgDQAHgKAAgMIgBgBQgDgIAAgJIABgBQgCgHAFgKQAMgGANgEIAAAAIAGACIAIACIgEgDIgGgDIAAgBQAEgSAPgHIACAAIAAgCIAVgQIABAAQAFgHACgIQACgJAAgKIAAgBQAJgFAFgKIAAgCQADgEAGgCIAAgBIAAgCQAMgLARgFIABAAIAAgBIAAgBIACAAIABAAIACAAIAAgBQAXgHAXAGIACABQAEAIAIgCIABAAQABgQAQAFIABAAQAFAWABgRIAAgCQADgHAKgCIABAAQALgPANgLIABgBQAHgFAMABIAAABQACACADABIABAAQAGADAIABIABABQATgMASgMIABgBIAAgBQAOgIARAEIABABQANAKAMANIAAABQAbgFAYABQAKAAAEAHQAIAHAAAQIAAABQASAJAVAGIABAAQAKAHAFALIAAACIAAAcIAAACQAWAEARAJIABAAQAPADADAPIABABQgBANAEAJIAAACQAQAHAOAJIACAAIAGARIAAABQgHAKgBAQIgBAAIAAABQgBADgCACIAAABIAAACQADASAPAIIAAABIABAAQAFAOgDASIgBAAQgDAPgGAMIgBAAQACAGAFADIABAAQAHAGAFAHIAAABQgEAPgFAOIAAABQAFAIAHAHIAAAEQAAAZgLATQgBARgPAPQgJAJgpAdIgYAAQgpgegLgJQgSgRAAgPIAAgEIAGgfIAFgkIAFgQQADgNACgPIABgLIABAAIABgBQAFgKgHgFQgGABgBgDIgCgCQAAgggDgLQgIgegVALQgCgSAFgRIgBAAQgIgCgGgEIABgFQAAgQgHgIQgLgPgggBIgBgDQAAgBAAgBQAAAAAAgBQAAAAAAAAQgBAAAAAAQgQAEgTACIAAgCQgIgGgBgMIAAgBQgMgBgOAFIAAABIgKAHIgCAAQgLAAgHgEIAAgBIgHgSIgBAAQgBgIgHAFIgBABQgMAHgJgFIgBAAQgEAJgQgCIAAABIgbAQIgGADIAAABIgIANQgBAHADAFIAAABQAGAFADAKQgBAGAAAJIgBAHQgBAIgCAGIgDACIABACIAAABIADAIQACAJABATQADASAGALQAJASAWAjQAQAgAAAXQAAATgWAyQgNAcgNAPIAGAGIgXAKQgLAGgIAFQgIAPgNASQgcAogbAdIgVAAQgYgGgMgPIgCgDIgNAAQgLgBgNgEQgGADgaAUIgBAAQgPAJgOAAQgNAAgMgHgABGiEQAHgJALgGIgRAPIgBAAg");
	this.shape_14.setTransform(28,32.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AjWEtIgBgBIgBgDIgOAAIgEgBIgJgCIgKgDQgEABgRAMIgJAGIgBAAQgOAIgMABQgJAAgJgDIgGgCIgEgCIgDgDIgBgBQgIgIgEgMIgDgOIgGgHIgBAAIAAgBIgDgIIgGgKIABgBIAAgEIgBgLIABgBIAHgQQADgJgHgGIgBgDIgGgFIgCgBQgLgHAEgLIACgEIAAAAQAGgGAGgIIABAAIABgBQAIgIACgKIAAgBIgGgMIgFgKQgJgYAZgPQAPgKANgNIAEgEIAAgBQgDgIgGgIIAAgBIAAgBQgDgIgBgJIAAgBIACgFIAFgNQAEgCADgGIABAAIABAAIAAgBIADgHIApgcIAFgDIAAgBIABgBIABgCQAGgKgBgMIgBAAIgBgCQgDgHABgIIAAgBQgCgHAEgKIAEgCIAVgIIAEABIACABIAIABIgEgCIgGgDIAAgBIABgDQAFgQAOgHIABAAIAAgBQAKgKAKgIIABAAQAFgGACgIQADgJABgJIAAgCQAJgEAFgKIAAgBQAEgEAFgCIAAgBIAAgCQALgJAOgFIAEgCIACAAIAAAAIAAgBIABAAIACAAIABgBIAAgBQARgGAQABIAAAAIADABIAJABIACAAIADAEIAAAAQAEADAEgCIACAAIACgIIABgBQADgEAGABIABAAIACgBIACABIABABQAFATACgQIAAgBIACgEIABAAIAAAAIABgBIACgBIACgBIABAAIABgBIACgBIACAAQALgOAPgKIAAgCIADgCIACgBIAOAAIAAABIABABIADABIABAAIAOAEIABABIADgCIABgBQAIgDAJgGIABgBIAOgKIAAAAIACgBIAAgBQAMgHAOABIACABIACAAIABAAIALAJIABABIAFAFIACACIAGAFIABABQAVgEAVgBIACAAIAAAAIAHgBQAJABAFAGIADAEIABABQAEAHAAAKIAAACIARAHIABABIAVAGIABAAQALAGAFALIAAABIAAABIABARIAAAKIAAACIAJADIABAAQAQAEANAGIAAABIAIADIADABQAGAFACAJIABAAIAAAFIAAADQAAAIADAHIAAABIAJAFIACABIATAKIABABIAGAOIABABIAAABIAAABQgFAJgBAOIAAABIAAABIgBAAIAAACIgDAFIAAABIAAACIABAGIAAABQAGANAMAGIAAABIABAAIABAEIAAACQACAIAAAIIAAACIgBAHIgBAAIgFARIAAABIgBACIgDAGIAAABIAAAAIAAACQACAEAEAEIABAAQAHAFAFAHIAAABIgBACIAAABIAAABQgCANgFAMIAAACIAAAAIALAPIgBAEIAAAFIAAABIgBALIAAABQgBAIgCAIIgBABIgDAJQgBAIgEAIIgBACQgDAHgGAHIgBABIgEADQgJAKgbAUIgGAFIgYACIgBgBQgdgVgQgIIgGgFIgLgKQgIgLAAgJIAAgEIADgeIABgGIADgeIAAgEIABgEIADgIIAFgYIAAgEIABgMIABAAIABgBQAFgJgHgFIgCAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAIgBgCIAAgGIgBgbIgCgKIAAgBIAAgBQgCgJgEgFIgEgEIgBgBQgIgEgJAEQgBgOADgMIABgJIgCAAQgHgCgGgEIAAgFIAAgFQgBgMgGgHQgEgGgHgEIgBgBIgPgEIgGgBIgHgBIgBgDQAAgBAAgBQAAAAgBgBQAAAAAAAAQAAAAgBAAIgIABQgLACgPABIgBgBQgFgFgDgHIAAgDIgBgDIAAgBIgBAAQgLgBgOAFIAAABIgFAEIgCAAIgDACIgCAAQgJAAgGgDIgBAAIgBgBIAAgBIgJgRIgBAAQAAgBAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAIAAAAQgCgBgDACIgBABIgEADIgBAAQgKAEgHgFIAAABIAAgBQgFAHgLgBIgBAAIgCAAIgBAAIgDACIgCABIgSAKIgBABIgDACIgGADIAAABIgGAJIgBABIgBACQgBAHACAEIAAACQAFAFADAJIgCADIAAAGIAAABIgBAEIAAAIIAAABIAAACIgCALIgDABIABACIAAABIACAIQACAKACATIAAACQADAQAFALIANAaIAQAbQALAVAFARQACAJAAAIQABAPgLAeQgCAJgFAKIgCAFQgNAcgOAPIAFAGIgDABIgUAKQgLAFgIAGIgUAeIgBACQgQAWgRAWIgWAaIgVABQgXgGgNgNg");
	this.shape_15.setTransform(28,32.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AjWEuIgBgBIgCgDQgGABgHgBIgFgCIgIgCIgJgEQgEgBgQALIgIAGIgBAAQgPAHgMABQgJABgIgDIgHgDIgDgCIgEgDIAAgBQgIgIgCgLIgCgOIgGgHIgBgBIAAgBQgBgEgCgEIgGgKIABgBIgBgDIgBgLIAAgBIAGgPQABgIgGgGIgBgCIgHgFIgBgBQgLgGACgLIACgEIgBgBQAGgFAHgJIABAAIABgBQAHgIADgJIAAgCIgFgMIgEgKQgGgZAXgNQAPgKANgNIAFgFIAAgBQgCgIgGgHIABgBIAAgBQgDgIgBgJIAAgBIACgFIAGgNQADgCADgGIAAAAIABAAIAAgBIAAgBIADgGIAjgYIADgDIAAgBIABgBIABgDQAFgJgDgLIAAgBIgBgBQgDgHgBgHIABgBQgDgHAEgKIADgCQAJgFALgDIAEABIACAAIAIABIgCgCIgGgEIABgBIAAgCQAFgRANgGIACAAIAAgCQAIgKALgIIABAAQAFgGACgIQAEgIABgJIAAgBQAJgFAGgJIAAgBQAEgEAFgCIAAgBIABgBQAKgJAOgEIAFgDIABAAIAAAAIAAgBIACgBIABAAIABAAIAAgBQAQgHAQABIABAAIACAAIAJAAIABAAIADADIABABQADABAFgBIABgBIACgHIABgCQADgEAHABIABAAIABAAIACAAIABAAQAFASADgPIAAgBIACgEIABAAIAAAAIABgBIACgBIACgBIABAAIABgBIADgBIABAAQAMgOAPgJIAAgBIAEgBIACgBIAMAAIABABIABAAIADABIABAAIANADIACABIADgCIABgBQAIgBAHgHIACgBIANgKIABAAIABgBIAAgBQANgHAOAAIABABIACAAIABAAIAMAIIABABIAFAFIACACIAGAFIABAAIAAABQAVgFAUgCIACAAIABAAIAGAAQAKAAAFAGIAEADIABABQAEAHAAAKIAAACIARAHIABABIAUAFIACABQAKAFAGAKIAAABIAAABQACAHAAAJIABAKIAAACIAJAEIAAAAQAQAEANAHIABAAIAIADIACABQAGAFADAJIABAAIAAAFIAAACQAAAJACAHIAAABIAJAFIABACIATAJIACABIAGAOIABABIAAAAIABACQgEAIgBAOIAAABIAAABIgBAAIAAACIgCAFIAAACIAAABIABAGIAAACQAGAMAMAGIAAABIABAAIACAEIAAACQACAHAAAJIAAACIgBAHIgBAAIgFARIAAABIgBACIgDAGIAAABIgBABIABACQACADADADIABAAIAMANIABABIgBACIAAABIAAABQgCANgEAMIgBACIAAAAIAKAPIAAAEIgBAFIAAABIAAAMIAAAAQAAAIgCAHIgBABIgEAKQAAAIgEAIIgBACQgDAHgFAHIgBABIgDADQgJAMgZATIgHAGIgWACIgBAAQgcgSgRgGIgHgEIgLgKQgIgKgBgKIgBgDIACgeIAAgGIABgeIABgEIABgEIACgHIAFgZIABgDIABgMIABAAIAAgBQAGgJgHgGIgCAAQgBAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAIgBgCIABgGIgBgbIgCgLIAAgBIABgBQgCgIgEgFIgFgEIgBgBQgHgFgIAEQgBgPACgMIABgJIgCAAQgHgCgFgEIgBgFIgBgEQgBgMgFgHQgEgGgGgEIgBgBIgPgEIgGgCIgGgBIgCgDQAAgBABgBQAAgBgBAAQAAgBAAAAQgBAAAAAAIgIABIgaACIgBgCQgFgEgDgGIAAgDIgBgEIgBAAIgBAAQgLgBgOAEIAAABIgFAEIgCABIgDABIgBAAQgJAAgGgEIgBAAIgBgBIAAgBIgJgQIgBAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgBAAIgFACIgBABIgEADIgBAAQgJADgIgEIgBAAQgDAGgMgCIgBAAIgCgBIAAABIgDACIgCABQgKAFgJAEIgBABIgDACIgGADIAAABIgGAIIgBABIgBACQgBAHABAEIAAABQAFAFABAJIgBADIgBAGIAAABIAAAEIgBAIIAAABIAAACQAAAFgCAFIgCACIACACIgBACIADAIQACAJABATIAAACQADAQAFALIAMAaQAGANAJAQQALAUAFARQACAJABAIQACAPgJAeQgCAJgFAKIgCAFQgMAbgQAQIAEAGIgDABIgTAKQgLAFgIAGIgVAeIgBABQgPAWgSAXQgLAOgLAMIgVABQgXgEgNgMg");
	this.shape_16.setTransform(28.1,32.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AjWEtIgBAAIgCgDIgNgBIgEgBIgIgEIgIgEQgEgCgOAJIgJAGIgBAAQgPAHgMABQgJAAgIgCIgHgDIgDgCIgDgEIgBgBQgHgIgBgLIgBgOIgGgHIAAAAIAAgBIgDgJIgHgJIABgCIgBgDIgCgKIAAgBIAEgOQABgHgHgGIgBgCIgGgEIgCgBQgLgGABgKIACgDIgBgCIAMgPIABAAIABAAQAHgJAEgJIAAgCIgEgMIgDgKQgDgZAVgNQAOgJAOgNIAFgFIAAgBQgBgIgEgHIAAgBIAAgBQgCgIgBgJIAAgBIACgGIAFgMQADgCADgGIABAAIABgBIAAgBIAAAAIACgFIAbgWIADgCIAAgCIABAAIAAgDQAEgIgDgLIgBgBIgBgBQgEgHAAgHIAAAAQgDgIADgJIACgDQAKgFALgDIAEABIACAAIAIABIgCgCIgFgEIAAgBIABgCQAFgRANgGIABgBIAAgBQAIgLAKgIIABAAQAFgGADgIIAFgQIABgBQAJgFAGgIIAAgBQAEgEAGgCIAAgBIAAgBQALgIAOgEIAEgDIACAAIAAAAIAAgBIABgBIACAAIABAAIAAgCQAQgHAPAAIAAAAIADAAIAIgBIABAAIADACIAAABQAEABAEgCIACAAIACgIIABgBQADgEAGAAIABAAIABAAIADAAIABAAQAFAQADgOIAAgBIADgEIABAAIAAAAIABgBIACgBIACgBIABAAIABgBIACgBIACAAQAMgNAPgIIABgBIADgBIACgBIANABIAAAAIABABIADABIABgBIAOADIABAAIADgBIABgBQAHAAAIgHIABgBQAGgGAHgEIABAAIAAgBIACAAIAAgCQAMgHAOAAIABAAIACAAIABAAIAMAHIABABIAFAFIACACIAHAFIABABQAVgGAUgCIACAAIAAgBIAHAAQAJAAAGAFIADAEIABABQAEAGABAKIABABIAQAJIABAAIAUAFIACAAQALAFAGAJIAAACIAAAAQADAHAAAJIABAKIAAABIAIAFIABAAQAPAEAOAHIAAAAIAIADIADABQAGAFADAJIABAAIAAAFIAAACIACAQIAAABIAIAGIACABIATAKIABAAIAHANIABABIAAABIABABQgCAIgBAOIAAABIAAABIgBAAIAAACIgCAFIAAACIAAACIABAGIAAABQAHAMAMAGIAAABIABAAIACAEIAAABQACAIAAAJIAAABIgBAHIgBAAIgFASIAAABIgBABQgBAEgCADIAAABIAAAAIAAACIAFAHIABAAIAMANIABABIgBACIAAABIAAAAQgBAOgEAMIgBACIAAAAIAJAPIgBAFIAAAEIAAABIAAAMIAAAAIgBAPIgBABIgDAKQgBAJgEAIIgBABQgCAHgEAHIgBABIgDAEQgIAMgYATIgGAGIgWAEIgBAAQgbgQgTgDIgHgEIgLgJQgIgKgCgJIAAgEIgBgdIAAgGQgBgPABgOIAAgEIABgEIACgIIAFgYIABgEIABgLIABAAIAAgBQAFgKgGgFIgCAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAIgBgCIABgHIAAgaIgCgLIAAgBIAAgBQAAgIgFgFIgFgEIgBgCQgGgEgIADQgBgQACgLIAAgJIgBAAIgNgHIgBgFIgBgDQgBgMgFgHQgDgGgGgFIgBgBIgPgEIgFgBIgGgCIgBgEQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAgBAAIgHAAIgaAAIgBgBQgGgEgDgGIAAgDIgBgDIgBgBIgBAAQgLAAgOAEIAAABIgFADIgCABIgDABIgBAAQgJgBgFgEIgBgBIgBAAIgBgBIgKgOIgBAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIAAAAIgFACIgBABIgEADIgBAAQgKADgHgEIgBAAIAAAAQgEAEgKgCIgBAAIgCgBIgBABIgDACIgCABQgKAFgJADIgBABIgDACIgGADIAAABIgGAIIgBABIgBABQgCAHABAEIAAABQAEAFABAJIgCADIgBAFIAAABIgBAEIgBAIIAAABIAAACIAAAKIgCACIABADIAAABIACAIQACAJACAUIAAACQACAPAFAMIALAaQAFANAJAQQALAUAGARQADAJABAIQADAQgJAcQgBAJgEAKIgCAGQgMAagRARIADAGIgDABIgTAKQgLAFgIAGIgWAdIgBACIggAtQgLAOgMAMIgUACQgXgDgOgMg");
	this.shape_17.setTransform(28.1,32.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AjVEuIgBgBIgCgCIgOgBIgEgCQgDgEgEAAIgHgFQgEgDgNAHIgJAFQgQAGgLABQgKABgJgCIgGgEIgDgBIgDgDIgBgBQgGgKAAgKIAAgOIgFgHIgBAAIAAgBIgDgJIgHgKIABgBIAAgDIgEgJIAAgBIACgNQAAgGgGgFIgCgCIgGgFIgCgBQgLgFAAgJIABgDIgBgCIANgQIABAAIAAgBQAIgIADgJIABgBIgDgNIgCgKQgBgaAUgMQAOgJAOgNIAFgFIABgBQAAgHgEgIIAAgBIAAgBQgCgHAAgKIAAgBIACgFIAFgNQADgCADgGIAAAAIABgBIAAgBIABgFQAHgHAOgLIACgCIAAgBIAAgBIABgCQACgIgEgKIgBgBIgBgCQgEgGgBgGIAAgBQgEgHADgJIACgDQAJgFALgDIAEAAIACAAIAIABIgCgCIgDgFIAAAAIABgDQAGgQALgHIABAAIAAgCQAHgLALgJIABAAQAEgFAEgIIAGgPIAAgBQAJgEAHgJIAAgBQAEgDAGgCIABAAIAAgCQALgIAOgEIAEgCIABAAIABgBIABgBIABAAIABAAIABgDQAPgHAOgCIABAAIACAAIAIgBIABAAIACABIABAAQAEACAEgCIABgBIADgIIABgBQADgDAGAAIABgBIABAAIACAAIABAAQAGAOADgNIABgCIADgDIABAAIAAgBIABgBIACAAIABgBIACAAIABgBIACgBIABAAQANgMAQgHIABgCIADgBIACAAIAMABIAAAAIABACIADAAIACgBIANACIABABIADgCIABAAQAHABAHgHIABgCQAGgFAIgEIAAgBIACgCIAAgBQAMgHANgCIACABIACAAIABAAIANAGIAAABIAFAFIACABIAIAFIAAACQAVgHAUgDIACAAIABgBIAGgBQAJAAAGAGIAEADIABABQAEAGACAJIAAACIAQAIIAAABIAWAEIABABQALAEAHAIIAAABIAAABQADAGABAJIACAKIAAABIAHAFIABABIAdAKIAAABIAIADIACABQAHAEADAJIAAABIABAFIAAACQAAAIACAIIAAABIAHAGIACABIATAKIACAAIAHAMIABABIABABIAAABQgBAIgBAOIABABIAAABIgBAAIAAACIgCAGIAAABIAAABIABAHIABABQAHALALAGIABABIABABIABAEIABABQACAHABAJIAAACIgCAGIAAABIgFARIgBABIAAACIgDAGIgBACIAAAAIABACQABAEAEAEIABAAIAMALIAAABIgBACIAAABIABABQgBANgEANIgBACQADAJAFAGIgBAFIgBAEIAAACIABALIAAABIAAAOIAAABIgEAKQgBAJgEAIIgBABQgBAHgEAHIAAABIgDAEQgIAMgXAUIgFAGIgVAGIgBAAQgagOgUgBIgHgDIgMgIQgIgLgCgIIgBgEQgCgNAAgPIgBgFQgCgQAAgOIABgEIAAgEIADgHIAEgYIABgFIABgLIABAAIAAgBQAFgKgGgGIgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAIgBgCIABgHIAAgaIgBgLIAAgBIAAgBQAAgJgFgFIgFgEIgBgBQgGgFgHACQgBgPACgMIAAgJIgBAAIgNgHIgBgEIgDgEQgBgLgDgIQgDgFgFgGIgCgBIgPgEIgEgCIgGgCIgBgDQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAIgHgBIgbgBIAAgBQgGgDgEgGIgBgDIAAgDIgBgBIgBAAQgLAAgOAFIAAAAIgGADIgBAAIgDABIgBAAQgJgBgFgFIgBAAIgBAAIAAgCIgLgNIgBAAIgCgCIgBAAIgEACIgBAAIgEADIgCAAQgJAEgIgFIgBAAQgEAEgJgEIgBAAIgCgBIgBABIgDACIgCABQgKAFgJADIgBAAIgDADIgGADIAAABIgHAHIgBABIgBABQgCAHABADIAAACQADAEAAAJIgBACIgCAGIAAABIgBAEIgBAIIAAABIAAACIAAAKIgBACIABACIAAABIACAIQACALABASIAAADQADAPAEAMIAJAbQAGANAJAQIARAlQAEAIAAAIQAFARgIAcQgBAJgDAKIgCAGQgMAZgSARIACAGIgDABIgTAKIgTAMQgNAPgJAOIgBABIggAuQgLAOgMAMIgVACQgWgCgOgKg");
	this.shape_18.setTransform(28.1,32.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AjVEuIgBgBIgCgCQgHAAgGgBIgFgDQgDgDgDgBIgHgGQgDgEgMAFIgJAFIAAAAQgRAGgKABQgKABgJgCIgGgEIgDgBIgCgEIgBgBQgGgKABgKIABgNIgFgHIAAAAIAAgBIgDgJIgHgKIAAgBIAAgEIgFgIIAAgBIAAgLQgBgGgGgFIgCgCIgGgDIgBgBQgMgFgBgIIABgEIgBgCIAMgQIABAAIAAgBQAIgIAEgKIAAgBIgBgMIgCgKQADgbASgLIAcgWIAFgEIABgBQABgIgDgIIAAgBIAAgBIgCgQIABgCIACgFIAEgMIAGgJIABgBIAAgBIABgEQACgFAMgKIABgCIAAgBIAAgBIAAgCQABgHgFgLIgBAAIgBgCQgEgFgCgHIAAAAQgEgHACgJIABgDQAJgGALgDIAEABIACAAIAJABIgCgDIgDgEIAAgBIABgCQAHgRAKgHIABAAIABgBQAGgNAKgIIABgBIAIgMIAIgPIAAgBQAJgEAHgHIABgBQAEgDAGgCIAAgBIAAgBQAMgHAOgEIAEgDIABAAIAAgBIACgBIABAAIABgBIAAgBQAPgJAOgCIABAAIACAAIAHgCIABgBIACABIABAAQADABAEgCIACgBIADgIIABgBQACgEAHAAIABAAIABgBIACAAIABAAQAGAMAEgMIABgCIADgDIAAAAIABAAIAAgBIACgBIACAAIABAAIABgCIADgBIABAAQANgLAQgGIABgBIADgBIACgBQAGACAIAAIABABIACAAIABgBQAFAAAIACIABAAIADgBIABgBQAHAEAGgJIABgBQAGgGAIgEIAAAAIABgBIABgBIAAgBQAMgIANgCIACAAIACAAIABAAIANAGIAAABIAFAEIACABIAIAGIABAAIAAAAQAVgGATgEIACAAIABgBIAGgBQAKgBAGAGIAEADIABAAQAEAHACAJIAAABIAQAJIAAAAIAWAEIABAAQALAEAIAIIAAABIAAAAQAEAGABAJIACAJIAAACIAHAFIAAABIAdALIABAAIAIADIACABQAHAFADAJIAAAAIABAFIAAACQAAAIACAIIAAABIAGAHIACABIATAJIACAAIAIAMIABABIABABIAAABIAAAVIAAABIAAABIAAAAIAAACIgCAGIAAACIAAABIACAHIAAABQAHAKAMAHIAAABIABAAIACADIABACQACAIABAIIAAACIgCAGIAAABIgFARIAAABIgBACQgBAEgCACIAAABIgBABIABABQACAFADAEIABAAIAMAMIAAABIAAABIAAABIAAABQgBANgDANIgBACIAGAQIgBAFIAAAEIAAABIABALIAAABQACAHgBAHIAAABIgEAKQgBAJgEAIIAAABIgEAOIAAABIgDAEQgHAOgWAUIgFAGIgUAHIgBAAQgYgMgXACIgHgDIgMgHQgIgKgDgJIgBgDQgDgNgBgOIgCgGQgDgPAAgOIABgEIAAgEIADgHIAEgZIABgEIABgLIABAAIAAgBQAFgKgFgGIgCgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIgBgBIABgHIABgbIgBgKIAAgBIAAAAIAAgBQABgJgFgFIgGgEIgBgBQgFgFgHABQgBgQABgLIABgJIgCAAIgMgIIgCgEIgDgDQgBgLgDgHQgDgHgEgFIgCgBIgOgEIgEgCIgGgDIgBgDQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAIgHgCIgagBIgBgBQgGgEgEgFIgBgDIAAgDIgBgBIgBAAQgLAAgOAEIgBABIgFADIgBAAIgDABIgBgBQgJgBgEgGIgBAAIgBAAIAAgBIgMgMIgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAAAAAAAIgBAAIgEACIgBABIgFADIgBAAQgKADgHgEIgBAAIAAgBQgEADgJgEIgBAAIgCgBIAAAAIgEACIgCABQgKAGgJABIgBABIgDACIgGAEIAAAAIgHAHIgBABIgBABIgCAKIAAABQACAFgBAIIgBACIgCAFIAAACIgBAEIgCAHIAAABIAAACIABAKIgBADIACACIAAABIACAIQACAKABATIAAACQACAQAEALIAIAcQAFAOAJAPIASAlQAEAJABAIQAGAQgIAcQABAJgDAKIgCAGQgMAYgUASIACAGIgDABIgTALIgTALQgOAPgIANIgCACIgfAuQgMAPgMALIgUAEQgWgCgPgJg");
	this.shape_19.setTransform(28.1,32.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AjVEuIgBAAIgCgCQgHAAgGgCIgFgCQgCgFgDgBIgGgFQgDgGgKADIgKAFIAAAAQgRAGgKABQgKAAgJgCIgGgDIgDgCIgCgEIgBgBQgFgKACgJIACgNIgEgHIgBgBIAAgBQAAgFgDgEIgHgJIAAgCIAAgDIgFgIIgBAAIgCgLQgBgGgHgEIgCgBIgGgEIgBAAQgMgFgCgHIAAgDIgBgDIAMgRIABAAIABgBQAHgIAEgJIABgCIgBgMIAAgKQAGgbAQgKIAcgWIAFgEIABgBQACgJgCgHIABgBIAAgBQgCgHAAgJIABgCIACgFIAEgMIAFgJIABAAIABgBIAAgBIAAAAIgBgEQgCgDAKgJIAAgCIAAgBIgBgCQAAgHgGgKIgBAAIgBgCQgEgFgCgGIAAgBQgFgHABgIIABgDQAJgHALgCIADAAIADABIAIAAIgBgDIgCgEIAAgBIABgCQAHgRAKgHIAAAAIABgCQAFgNAKgJIABAAIAJgMIAIgNIABgBQAJgFAHgHIABAAQAEgDAGgCIABgBIAAgBQALgGAPgEIADgDIACAAIAAgBIABgBIACgBIAAAAIABgCQAOgJAOgDIACAAIAHgDIABgBIACAAIAAAAQAEABAEgCIACgBIADgIIAAgBQADgEAHgBIAAAAIABgBIADAAIABAAQAFAKAFgLIABgCIADgDIABAAIABAAIAAgBIACgBIACAAIABAAIABgBIACgBIACAAQANgLARgFIABgBIADgBIACAAQAFACAIAAIAAAAIABABIADgBIABgBQAEgBAIACIACAAIACgBIABAAQAHAFAFgJIABgCQAGgGAIgDIAAAAIABgBIABgBIABgCQALgIANgCIACAAIACgBIABAAQAGACAHADIABABIAEAEIACABIAJAFIAAABIABAAQAUgHAUgFIABAAIABgBIAGgBQAKgBAGAFIAEADIABABQAFAGACAJIABABIAPAJIAAABIAWACIABABQAMADAIAHIAAABQAEAFACAJIACAKIAAABIAGAGIABABIAdALIABAAIAIADIACABQAHAFADAJIAAAAIABAFIAAACQAAAIACAIIAAABIAGAHIABABIAUAJIABABIAJALIABABIABAAIAAABQACAHAAAOIAAABIAAABIAAAAIAAACIgCAGIAAACIAAACIACAGIAAABQAIAKAMAHIAAABIABAAIACADIABACIADAQIAAACIgCAGIAAAAIgFASIAAABIgBACIgDAGIAAABIAAAAIAAACQACAFADADIABABIAMANIAAABIAAABIAAAAIAAABQAAANgDANIgBACIAFARIgBAEIgBAEIAAABIACALIAAABQACAHAAAHIAAABIgDAKQgCAJgDAIIgBABQAAAIgCAGIAAABIgDAEQgGAPgVAUIgFAHIgTAIIgBAAQgXgKgYAFIgHgDIgMgHQgJgJgDgIIgBgDQgFgOgCgNIgCgGQgEgOAAgOIAAgFIABgEIACgHIAEgYIABgEIABgLIABgBIAAgBQAEgJgEgHIgBgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIgBgCIABgGIABgbIAAgLIAAgBIAAgBQABgIgFgGIgGgDIgBgBQgFgGgFABIgBgcIAAgIIgBgBIgMgHIgCgFIgEgCQgBgLgDgIQgCgGgEgFIgCgBIgOgFIgEgCIgEgDIgBgEQAAgBAAAAQAAgBAAgBQgBAAAAAAQAAgBgBAAIgGgCQgLgCgPgBIgBgBQgGgDgFgFIgBgDIAAgDIgBAAIgBAAQgLAAgOAEIgBAAIgFADIgCAAIgDAAIAAAAQgIgCgFgGIAAAAIgBAAIgBgBIgMgKIgBAAQAAgBgBAAQAAgBAAAAQgBAAAAAAQAAAAgBAAIAAAAIgEACIgBABIgFADIgBAAQgKACgHgEIgBAAIAAAAQgFABgHgEIgBAAIgCgCIgBABIgEABIgBABQgLAGgJABIgBABIgDACIgGAEIAAAAQgDAEgFACIAAABIgBACIgDAJIgBABQACAFgBAHIgCADIgDAEIAAACIAAAEIgDAIIAAAAIAAACQACAEABAGIgBADIABACIAAABIADAIQACAKABAUIAAACQACAPADAMIAHAbQAFAPAIAPIATAlQAEAJACAIQAGARgGAaQAAAJgCALIgCAGQgLAXgVATIABAGIgDABIgTALIgTALQgPAQgIAMIgBABIggAvQgLAPgMALIgUAEQgWAAgQgJg");
	this.shape_20.setTransform(28.1,32.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AjVEvIgBgBIgDgBQgHAAgGgCIgEgDQgCgGgDAAIgFgHQgDgHgIACIgKAEQgSAFgKACQgJAAgJgCIgGgDIgDgCIgCgEIgBgBQgEgLADgJQACgFAAgHIgDgHIgBgBIAAgBQAAgFgDgEIgHgKIAAgBIgBgEIgGgGIAAgBIgEgJQgCgFgHgEIgCgBIgGgDIgBgBQgMgEgDgHIgBgCIgBgEIAMgRIABAAIAAgBQAHgIAFgKIABgBIABgNIABgJQAIgcAOgJIAdgWIAFgEIABgBQADgIgCgHIABgBIAAgBQgBgHABgKIAAgBIACgFIAEgNIAFgJIABAAIABgBIgBgBIAAAAIgBgDQgHgBAIgIIgBgCIAAAAIAAgBIgBgCQgCgGgHgJIAAgBIgCgBQgEgFgCgGIgBgBQgFgGAAgIIABgEQAJgHAKgCIAEAAIADABIAIgBIAAgDIgCgEIAAgBIABgCQAHgRAJgHIABAAIABgBQAEgOAKgJIABgBIAJgLIAJgNIABgBQAJgEAIgGIABgBQAEgDAGgBIABgBIAAgBQAMgGAOgDIAEgDIABgBIAAgBIABgBIACAAIAAgBIABgCQAOgJANgEIABAAIABgBIAGgEIABAAIACgBIABAAQADAAAEgCIACgBIADgIIABgBQADgEAGgBIAAAAIABgBIADAAIABgBQAGAJAFgLIABgBIAEgDIABAAIAAgBIAAgBIACAAIACgBIABAAIABgBIACgBIACAAQAOgKARgEIABgBIADAAIACgBQAFAEAIgBIAAAAIABABIACgCIACAAQAEgCAHACIACAAIACgBIABAAQAHAHAFgKIABgCQAFgGAIgDIABAAIABgBIABgCIABgBQALgJANgDIABAAIACAAIABAAQAHABAHADIAAABIAFAEIACABIAJAFIAAAAIABABIAngOIACAAIABgBIAGgBQAJgBAHAEIAFADIAAABQAGAGACAIIABACIAOAIIABABIAVACIACABQALACAJAHIAAAAIAAABQAFAEACAJIADAKIAAABIAFAHIABAAIAdAMIABAAIAIADIACABQAHAEADAJIABABIABAEIAAACQAAAJABAHIAAACIAFAHIABABIAUAIIACABIAKALIABABIAAAAIABABQADAHAAAOIABABIAAABIgBAAIAAACIgBAGIAAACIAAACIABAGIABABQAIAKAMAGIABABIABABIACADIAAABIAEAQIAAACIgCAGIAAABIgFASIgBAAIAAACIgDAGIAAABIgBAAIABACQABAFADAEIABAAIAMANIABABIAAABIAAABIAAABQABAMgEAOIAAACIADARIgBAEIgBAEIAAABIACALIABAAIADAOIAAABIgEALQgBAIgEAIIAAACQAAAHgBAHIAAABIgCADQgGARgTATIgFAIIgTAJIgBAAQgVgHgaAHIgHgCIgNgGQgJgJgDgIIgBgDQgGgOgDgMIgDgGQgFgOgBgOIABgFIAAgEIACgHIAFgYIAAgEIACgLIAAgBIABgBQADgJgDgHIgBgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgCIABgGIABgbIAAgKIAAgBIAAAAIABgBQABgJgGgGQgDgBgCgCIgBgBQgFgGgFAAIAAgcIgBgIIgBgBIgLgIIgDgEIgFgBQgBgLgCgIIgFgMIgCgBIgOgFIgDgDIgFgDIAAgEQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgGgCQgKgDgQgCIgBAAQgGgDgGgFIAAgDIgBgDIAAAAIgBAAQgMAAgOAEIgBAAIgFADIgBAAIgDAAIgBgBQgIgCgEgGIAAAAIgBgBIgBgBQgGgFgHgDIgBAAIgCgCIgBAAIgEACIgBABIgFADIgBAAQgKADgHgEIgBAAIAAgBQgEAAgJgFIgBAAIAAgBIgBAAIgEABIgCABQgKAHgJAAIgBAAIgDADQgDACgDABIgBABQgDADgFACIAAABIgBACIgEAIIAAABQAAAFgCAHIgBACIgDAFIAAABIgBAEIgDAIIAAABIAAACQADAEABAFIgBADIABACIABACIACAIQACAKABATIAAACIAEAcIAHAcQAEAPAIAPQAJAUAKARQAFAIADAIQAHASgHAZQACAKgCAKIgBAGQgLAWgXAUIAAAGIgDABIgTALIgSAMQgQAQgIALIgBABIgfAwQgMAOgMALIgUAGIgDAAQgUAAgPgHg");
	this.shape_21.setTransform(28.1,32.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AjVEwIgBAAIgDgCQgIAAgEgCQgDgBgCgCQgCgGgCgBIgFgHQgCgIgIAAIgJAEIgBAAIgbAGIgSgBIgHgEIgCgCIgCgEIAAgBQgEgLAEgIQACgFAAgHIgBgIIgBAAIAAgBQgBgFgDgEIgHgKIAAgCIgBgDIgGgGIgBgBIgGgIQgEgEgGgEIgCgBIgGgCIgBgBQgMgEgEgFQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIgCgEIALgRIABgBIABgBQAHgIAGgJIABgCIACgMIABgKQALgdANgHQALgKASgMIAFgEIABgBQAEgJgBgGIABgBIAAgBIAAgRIAAgBIACgGIAFgMIAEgJIABgBIAAgBIAAgBIgBgCQgMACAGgHIgCgCIgBgBIAAAAIgBgCQgDgGgIgJIAAAAIgCgBIgHgKIAAgBQgHgHAAgIIAAgDQAJgIAKgCIAEABIACAAQAFAAAEgBIAAgDIgBgEIABgBIAAgCQAIgRAJgHIAAAAIABgCQADgOAKgJIABgBIAKgLIAKgMIAAAAQAKgEAIgGIABgBIAKgEIABgBIAAAAQAMgGAPgDIADgDIABgBIAAAAIABgBIABgBIABgBIABAAIAAgCQAOgKANgFIACgBIAGgEIAAgBIACgCIAAAAQAEAAAEgCIABgBIADgIIABgBQADgEAHgBIAAgBIABgBIACgBIABAAQAGAHAGgKIACgBIADgDIABAAIAAAAIABgBIABgBIADAAIABAAIABgCIACgBIABAAQAPgJARgDIABgBIADAAIACAAQAFADAIAAIABAAIACgBIABgCQAFgCAJACIABABIACgBIAAAAQAGAJAFgMIABgBQAEgGAJgDIABAAIABgCIABgBIAAgCQALgIANgEIABgBIADAAIABgBQAGABAHADIABABIAFAEIACABIAJAFIABAAIAAAAIAngOIACgBIABAAIAGgCQAKgBAHAEIAEACIABABQAFAGAEAIIAAABIANAKIABAAIAWACIACAAQALACAJAGIABABIAAAAQAFAEACAIIAEAKIAAACIAFAHIAAABIAdALIACAAIAHADIADABQAHAFADAIIABABIAAAEIAAACIABARIABABIAFAHIABABIATAJIACAAIALALIAAAAIABAAIABACQAEAGAAAOIABAAIAAABIgBABIAAACIgBAHIAAABIABACIABAGIAAABQAKAKAMAGIAAABIABABIACACIABACIAEAQIAAACIgCAGIgBAAIgEASIAAABIgBACIgDAFIgBACIABACQACAFACADIABABQAGAHAGAGIAAABIAAABIAAABIABABQABAMgEAOIAAACIAAAAIADARIgCAEIAAAFIgBAAIADALIABAAQADAHABAHIAAABIgEALQgBAJgDAIIgBABIABAOIAAABIgCAEQgFARgTAUIgEAHQgHAFgKAGIgDABQgTgGgcAKIgHgCIgNgFQgIgJgEgIIgDgCQgHgOgEgMIgCgFQgHgPgBgOIAAgEIABgEIACgHIAFgZIAAgDIABgLIABgBIAAgBQAEgJgDgHIgCgCIAAgEIAAgCIAAgHIADgaIgBgLIAAAAIABgBIAAgBQACgJgFgFQgEgBgDgCIgBgBQgDgGgFgBIgBgcIgBgIIAAgBQgGgFgGgEIgEgDIgEgBIgEgTIgDgNIgCAAIgOgFIgDgDIgEgFIgBgDQABgBAAgBQAAAAgBgBQAAAAAAgBQAAAAgBAAIgGgEQgKgEgPgBIgCgBIgMgGIgBgEIAAgDIgBAAIAAAAIgbAEIAAABIgGACIgBAAIgCAAIgBgBQgIgDgDgGIgBgBIgBAAIgBAAQgHgFgGgDIgBAAQgBAAAAgBQAAAAgBAAQAAAAAAAAQgBAAAAAAIgBAAIgDACIgBABIgGADIgBAAQgJACgIgDIgBgBIAAAAQgEgBgHgGIgBAAIgDgCIAAABIgDABIgBABQgLAGgKAAIgBABIgCACIgHAEIgBAAQgDADgEABIgBABIgBACIgEAIIAAABIgEALIgBADIgDAEIAAABIgBAEIgEAIIAAABIAAACQADADACAGIAAADIABADIAAABIACAIQACALACATIAAACQABAPACAMIAGAcQADAQAIAPQAJAUALARIAIAQQAIASgGAZQAEAJgDALIgCAGQgJAVgZAVIgBAGIgCABIgTALIgSAMQgRAQgIAKIgBACIgfAwQgMAPgMALIgTAFIgIAAQgRAAgOgFg");
	this.shape_22.setTransform(28.2,32);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AjWEyIAAgBIgDgBQgIAAgFgCIgEgEQgCgHgCAAIgEgIQgCgJgGgCIgJADIgcAGIgTgBIgHgEIgBgCIgCgEIAAgBQgEgMAFgIQADgEABgHIgCgIIAAAAIAAgBQgBgFgDgEIgHgLIAAgBIgBgEIgIgEIAAgBIgJgHQgEgEgGgDIgDgBIgFgCIgBAAQgMgEgFgFIgCgCIgCgFQACgGAKgLIABgBIAAgBQAHgIAFgKIABgBIAEgNIADgJQAOgeALgGQAJgKATgMIAFgEIACgBQAGgIgBgHIAAgBIAAgBIABgRIAAgBIADgFIADgNIAGgJIABgBIgBgBIAAgBIgCgBQgQAEADgGIgCgCIgBAAIgBgBIgCgBIgMgOIgBAAIgBgCQgGgEgCgFIgBgBQgGgGgBgIIgBgEQAJgIAKgCIAEABIADAAIAIgBIABgEIgBgEIABAAIAAgCQAIgSAIgHIABAAIABgBQACgQAJgJIABgBIAKgKIALgLIABgBQAJgDAKgGIABgBIALgDIAAgBIABAAQALgGAPgDIADgDIABAAIAAgBIABgBIABgBIABAAIABgBIABgCQANgKAMgGIABAAIABgBIAFgGIABgBIABgCIABAAQADAAAEgDIACgBIADgIIAAgBQADgEAGgBIABgBIAAgBIADgBIABAAQAHAFAGgKIABgBIAFgCIABgBIAAgBIACAAIABgBIACAAIABgBIACgBIABAAQAQgJARgCIABAAIADgBIACAAQAFAFAIgBIABAAIACgCIABgBQAEgDAJACIACABIABgBIABAAQAGALAEgNIAAgBQAFgGAJgDIABAAIAAgCIACgCIAAgBQALgJANgFIABAAIACgBIABAAQAGAAAJADIAAABQABACADABIACABIALAFIAAAAIABABIAmgQIACgBIAAAAIAHgCQAJgCAIAEIAFACIAAABQAGAGAEAIIAAABIANAJIABABIAWABIACAAQALACAJAFIABAAIAAABQAHADABAIQADAEACAGIAAACIAEAHIAAABIAeALIABABIAHACIADABQAGAFAEAIIABABIABAFIAAACIABAQIAAABIAEAIIABABIAUAIIACABIALAKIABAAIABAAIABACQAFAGABANIAAABIAAABIAAABIAAABIgBAIIAAABIABACIABAGIABABQAJAJAMAHIAAABIABAAIADADIABABIAEAQIAAACIgCAGIAAABQgEAIgCAKIAAAAIgBACQAAADgCACIAAACIgBAAIABACIADAJIABAAQAGAIAHAGIAAABIABAAIAAABIAAABQABANgDAOIAAABIgBABIACARIgCAEIAAAFIgBAAQABAGADAEIABABQADAGACAIIgBABIgDALQgCAIgDAIIgBACIADANIAAABIgCAEQgEATgRATIgEAIQgGAGgLAGIgCABQgSgEgeANIgHgCIgNgEQgJgJgFgHIgCgCQgIgOgEgLIgEgFQgIgPgBgOIAAgEIAAgEIADgHIAEgZIAAgDIACgLIAAgBIAAgBQAEgJgCgHIgCgCIAAgEIAAgCIABgHIADgbIAAgKIAAgBIABAAIAAgBQACgKgGgFQgEAAgCgDIgBgBQgDgGgEgCIgBgcIgBgIIgBgBQgFgGgHgDIgDgDQgDgBgDAAIgCgTIgDgNIgCAAIgOgFIgCgEIgEgFIgBgDQAAAAAAgBQAAgBAAAAQAAgBAAAAQgBgBAAAAIgGgEQgKgFgPgCIgCAAIgMgGIgBgEIAAgDIgBAAIgBAAIgaAEIgBABIgGACIAAgBIgDAAIgBgBQgHgDgDgHIgBAAIgBgBIgBAAQgGgEgIgCIgCAAIgCgBIAAABIgDABIgCABIgFAEIgBAAQgKACgIgEIAAAAIAAgBIgMgIIgBAAIgCgCIgBAAIgDABIgBABQgLAHgKgCIgBABIgCADQgCACgFABIAAABQgEACgEABIgBABIgBACIgEAIIgBAAIgFALIgBACIgEAFIAAABIgCAEIgCAIIAAAAIAAADQACADACAGIABADIABACIABACIACAIQABALABASIAAACQABAPADANIAEAdQADAQAHAPQAKAUAMAQIAJAQQAIATgFAYQAEAKgCAKIgCAGQgIAVgaAVIgCAGIgCABIgTALIgTAMQgSARgGAJIgBACIggAxQgLAOgNALIgUAHIgMABQgOAAgNgEg");
	this.shape_23.setTransform(28.2,31.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AjVEzIgBAAIgDgBQgIAAgFgDIgEgEQgCgHgBgBIgEgIQgBgLgEgDIgLACIgcAHIgSgBIgHgEIgCgCIgBgFIAAgBQgDgMAGgHQAEgFABgHIgBgIIAAAAIAAgBQgBgFgEgEQgEgEgDgGIAAgBIgCgEIgIgEIgBgBIgKgGQgEgDgHgCIgCgBIgGgCIgBAAQgMgDgGgFIgCgCIgDgFQACgGAKgMIABgBIABgBIAMgRIABgCIAFgNIADgJQARgeAJgGQAJgJAUgNIAGgDIABgBQAGgJABgGIABgBIAAgBIABgRIAAgBIACgFIAFgNIADgJIABAAIABgBIgBgBIAAgBIgCgBQgVAGABgFIgEgBIAAgBIgBAAIgCgCIgPgMIgBgBIgCgBIgIgJIgBAAQgGgHgCgHIgCgEQAJgIAKgCIAEAAIADAAIAIgBIACgEIAAgEIAAgBIAAgBQAJgSAIgHIAAAAIABgCQABgQAKgJIABgBIAKgKIAMgKIABAAIATgJIAAgBIAMgDIAAAAIABgBQAMgFAPgCIADgEIABAAIAAgBIABgBIAAgBIACgBIAAAAIABgCQANgLAMgHIABgBIAFgHIABgBIABgCIAAgBQAEgBAEgCIABgCIAEgHIAAgCQADgEAGgBIAAgBIABgBIADgBIABgBQAGAEAIgJIABgBIAEgCIABgBIABgBIABAAIACgBIACAAIAAgBIACgBIACAAQAQgIARgBIABAAIAEAAIACAAQAEAFAIgCIAAABIABAAIACgDIACgBQADgDAJABIACABIABgBIABAAQAHANADgNIABgBQADgHAJgDIAAAAIACgCIABgBIABgBQALgKAMgFIABgBIACgBIABAAQAHAAAHACIABABQABACAEABIABABIALAFIAAAAIABABIAmgSIACAAIABgBIAGgCQAJgCAIADIAFACIABABQAFAGAEAIIABABIANAJIABABIAWAAIABAAQAMACALAEIAAAAIAAABQAHADADAHQACAEABAGIABACIAEAIIAAABIAeAMIAAAAIAIACIACABQAIAFADAIIABABIABAFIAAABIABARIAAABIADAIIABACIAUAHIADABIAMAJIAAABIAAAAIACABQAGAGABANIABABIAAABIAAABIAAABIgBAIIAAACIABACIABAFIAAACQALAIAMAHIABABIAAAAIADADIABABIAFAQIAAACIgDAGIAAAAQgEAJgBAKIgBAAIAAACIgDAFIAAABIAAACQABAFACAEIABABQAFAIAHAGIACABIAAAAIAAABIABABQABAMgDAPIAAABIgBABIABARIgCAFIgBAEIAAABQABAFADAFIABAAQAEAGACAHIAAABIgDAMIgGAQIgBACIAFANIAAABIgBAEQgEAUgQATIgEAIQgGAHgKAHIgCABQgQgBgfAPIgIgBIgOgEQgJgIgFgHIgCgDQgLgNgEgLIgEgFQgKgPgBgNIAAgFIABgDIACgIIAEgYIAAgDIACgMIAAAAIAAgBQAEgJgCgIIgBgCIAAgEIAAgCIACgHIADgbIAAgLIAAAAIAAgBIABgBQADgJgHgFQgEgBgCgCIgBgBQgDgHgDgCIgBgcIgCgJIgBAAQgFgHgFgDIgFgDIgHAAIgCgTIgBgOIgCAAIgOgFIgCgEIgCgFIgBgDQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBIgFgEQgJgGgRgCIgBgBIgNgFIgBgDIgBgDIgBgBIAAAAIgbAFIAAAAIgGACIgBAAIgCgBIgBgBQgGgDgDgIIgBAAIgBgBIgBAAQgIgEgHAAIgBAAIgDgBIgBAAIgDACIgBABIgGAEIgBAAQgKABgHgDIgBgBIAAAAIgKgKIgBAAIgCgDIgBAAIgFACIAAABQgLAGgJgCIgBABIgDADQgDACgDABIgBABQgDACgFABIgBABIgBABIgFAIIgBAAIgHALIgBACIgFAEIAAABIgBAEIgDAIIAAADQAEACACAGIABAEIABACIAAACIACAIQADALAAATIAAACIADAcIADAcQACARAIAPQAIAUANAQIAKAQQAKATgEAYQAFAJgCALQAAADgCADQgIAUgcAWIgCAGIgDABIgSALIgTAMQgTARgGAIIgBADIgfAxQgLAOgNALIgUAHIgSACQgLAAgKgDg");
	this.shape_24.setTransform(28.2,31.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AjVE0IgBAAIgEgBQgHAAgFgDQgCgBgCgDIgCgJIgDgIQgBgMgDgGIgKADIgBAAIgcAGIgSgBIgHgEIgBgCIgCgFIAAgBQgCgNAHgHQAEgEACgHIgBgIIAAAAIAAgBQgBgFgDgEQgEgEgEgGIAAgCIgCgEIgJgDIgBAAIgMgFIgNgFIgBAAIgGgCIgBAAQgMgCgIgEIgCgCIgDgGQACgFAJgNIABgBIABgBIANgSIABgCIAGgMIAFgJQAUgfAHgFQAIgJAVgMIAFgEIACgBQAIgIABgGIABgBIAAgBIACgRIAAgBIACgGIAEgMIAEgKIABgBIAAgBIAAgBIgEAAQgZAIgCgEIgEgBIgBgBIgBAAIgCgBIgRgMIgBAAIgCgBIgJgJIgBAAQgHgHgCgHIgCgEQAIgJALgBIADAAIADAAQAEAAAEgCIADgDIAAgFIABAAIAAgCQAJgSAHgHIAAAAIABgBQAAgRAKgKIABAAQAEgFAGgFIANgJIABgBIAUgIIABAAIALgDIABgBIABAAQAMgEAOgDIADgDIABgBIAAAAIABgBIABgCIABAAIABgBIAAgCQANgMAMgHIgBAAIACgCIAEgHIAAgBIABgEIAAAAQAEgBAEgDIACgCIADgHIABgCQADgEAGgBIAAgBIAAgBIADgCIABAAQAHABAIgHIABgBIAFgDIABAAIAAAAIAAgBIACgBIACAAIABAAIAAgBIADgBIABAAQARgIARAAIACAAIADAAIACAAQAFAGAHgBIABAAIABAAIABgDIABgCQAEgEAJACIACABIABgBIABAAQAGAPADgOIABgBQAEgHAHgDIACAAIABgCIABgBIABgCQAKgJANgGIAAgBIADgBIABgBQAGAAAIACIABAAQABADADABIACABIALAEIABABIABAAIAmgTIABAAIAAgBIAHgCQAJgCAJACIAEACIABABQAGAGAFAHIABABIAMAKIABABIAVgBIACAAQANABAKADIABABIAAAAQAHADADAHQADAEABAGIABACIADAJIAAABIAeALIABAAIAIADIACABQAHAFAEAIIABABIABAEIAAACIABARIAAABIACAIIABACIAVAHIABABIANAIIABABIAAAAIACABQAIAFABAOIABAAIAAABIAAABIAAACIgBAIIAAACIABACIABAFIAAACQALAIAMAGIABABIABABIADACIABABIAEAQIAAACIgCAGIgBAAQgDAJgBAKIgBAAIAAACQgBADgCACIAAABIAAACIADAKIABAAQAFAIAHAGIABABIABABIAAABIAAAAQADANgDAOIAAACIgBAAIgBASIgBAFIgBAEIgBAAQACAGADAEIAAAAQAFAHADAHIAAABIgDALQgCAJgEAIIAAABIAFAOIABABIgCAEQgCAVgPATIgEAIQgFAIgKAHIgCACQgPAAghATIgIgCIgOgDIgPgOIgCgDQgMgNgGgKIgEgFQgKgPgBgNIgBgFIABgDIABgIIAFgYIAAgDIACgLIAAgBIAAgBQADgJgBgIIgBgCIABgFIAAgCIABgHIAEgbIAAgKIAAgBIABAAIAAgBQAEgKgHgFQgEAAgCgCIgBgCQgCgHgDgDIgCgcIgCgJIgBAAQgEgHgGgDQgCgDgDAAQgDgBgEACIgCgUIgBgOIgBAAIgOgFIgBgEIgDgGIAAgDQAAgDgCgCIgFgFQgJgHgQgCIgCAAIgNgFIgBgDIgBgDIgBgBIAAAAIgbAFIgBAAIgFACIgBgBIgDgBIAAAAQgHgEgCgIIgBgBIgBAAIgBAAQgIgEgIABIgBAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAAAgBAAIAAABIgDACIgCABIgFADIgBAAQgKACgHgEIgBAAIAAgBIgKgMIgBAAIgCgCIgBAAQgBgBgEACIgBABQgKAHgKgDIgBABIgCACIgHAEIAAAAQgEACgFABIgBABIgBABIgGAHIgBAAIgHALIgCACIgFADIAAABIgBAEIgEAJIAAACQAEADADAGIABADIABADIABACIACAIQACALABATIAAACIACAcIACAdQABARAIAPQAIAUAOAQIALAQQALATgDAXQAFAJgBALIgCAHQgIASgdAXIgEAGIgCABIgTAMIgSAMQgUARgGAHIgBADIgeAxQgMAPgNALIgTAIQgLACgLAAQgJAAgJgCg");
	this.shape_25.setTransform(28.2,31.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AjVE2IgBgBIgEAAQgIAAgEgDIgEgFQgBgJgBAAIgCgKIgCgUIgLACIgcAFQgJABgKgBIgGgFIgCgBIgBgFIAAgBQgBgNAIgHQAFgEABgHIAAgIIAAAAIAAgBQgBgFgDgEQgFgFgDgGIAAgBIgCgEIgKgCIgBgBIgOgDIgOgEIgCAAIgFgBIgBgBQgMgBgJgDIgDgCIgDgHQABgFAKgNIABgBIABgBIANgSIABgCIAIgMIAFgJQAXggAFgEQAIgJAVgMIAGgEIACgBQAJgIABgGIABgBIAAgBIADgRIAAgBIACgFIAEgNIAEgJIABgCIgBgBIAAgBIgEABQgeAKgEgDIgFgBIAAAAIgCgBIgCgBIgUgLIAAAAIgCgBIgKgIIgBAAQgIgGgDgHIgCgFQAIgJAKgBIAEAAIADAAIAIgCIADgEIABgFIABAAIAAgBIAPgaIABAAIAAgBQAAgSAKgJIABgBQAEgFAGgEIAPgJIAAAAIAVgHIAAgBIAMgDIABAAIABAAQAMgEAPgCIADgEIAAgBIABgBIABgBIABgBIABgBIAAgCQANgMALgJIABgBIADgIIAAgCIABgEIABgBQAEgBADgDIACgCIAEgHIAAgCQADgEAGgBIAAgBIABgBIACgCIABgBQAIAAAIgHIACgBIAEgCIABAAIAAgBIABgBIABAAIACAAIABAAIAAgCIADgBIABAAQARgHASACIACgBIADABIACAAQAFAHAHgCIABAAIABAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBIABgBQADgFAJACIACABIACgBIABAAQAFARADgPIAAgBQAEgHAJgDIABAAIACgCIAAgCIABgBQAKgKAMgHIABgBIACAAIABgBQAHgBAIACIAAAAQACADADABIACAAQAFADAGACIABAAIABAAIAlgUIACAAIAAgBIAHgDQAJgCAJADIAFABIAAABQAHAFAFAHIAAACIAMAJIABABIAWgBIACAAQAMAAALADIABAAIAAABQAIACADAHQAEAEABAGIABACIACAJIAAABQAPAHAPAFIABAAIAIADIACAAQAHAFAEAIIABABIACAEIAAACIAAARIAAABIACAJIAAACIAVAGIACABIAOAIIAAABIABAAIACABQAIAFACANIABABIAAABIAAABIAAACIAAAIIAAACIABABIABAGIAAACIAXAOIABABIABABIADABIABABIAFAQIAAACIgDAGIAAABQgDAIgBAKIgBAAIAAACIgDAFIgBABIAAABIABABQABAGACAEIABABQAFAIAHAFIABABIAAABIAAABIABAAQADANgDAPIAAACIAAAAIgCASIgCAFIgBAEIgBAAQACAGADAEIABAAQAFAGAEAHIAAABIgEAMIgFAQIgBACIAHAOIABABIgBADQgCAWgOAUIgDAIQgFAIgKAIIgCACQgNADgjAVIgIgBIgPgCIgPgPIgCgCQgNgNgHgJIgEgFQgMgPgCgNIAAgFIAAgDIACgHIAFgZIAAgDIACgLIAAgBIAAgBQACgJAAgIIgBgCIABgFIAAgCIACgHQADgOABgOIAAgKIAAgBIABAAIABgBQAEgKgHgFQgFAAgCgCIgBgCQgBgHgDgEIgCgcIgBgJIgCAAQgEgHgFgEIgGgCQgEgBgEACIgBgTIAAgPIgBAAQgIgCgGgDIgBgFIgCgGIAAgDQAAgDgCgCIgFgGQgJgHgQgDIgCAAIgOgEIgBgDIAAgDIgBgBIgBAAIgbAFIAAAAIgGACIgBgBIgCgBIgBgBQgGgEgCgJIgBAAIgBgBIAAAAQgJgCgJAAIgBAAIgCAAIgBABIgDACIgBABIgGAEIgBAAQgKABgHgDIgBgBIAAgBIgKgNIgBAAIgBgDIgBAAQgCgBgDACIgBABQgLAHgJgDIgBAAIgCADQgDADgEABIgBAAQgEACgFAAIgBABIgBABIgHAGIAAABIgKAKIgBABIgFAEIAAABIgCAEIgEAIIAAABIAAACQAFACADAGIABAEIABACIABACIACAIQACAMABASIAAACIABAcIABAeQABARAIAQQAIATAOARIAMAPQAMAUgCAWQAGAKgBAKQAAADgCAEQgIASgeAXIgFAGIgCABIgSAMIgSANQgWARgEAGIgCADIgeAyQgMAPgNAKIgTAJQgOAEgOAAIgMgBg");
	this.shape_26.setTransform(28.3,31.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AjWE3IAAAAIgEgBQgIAAgFgDQgCgCgBgDQgBgKAAAAIgBgKIgBgYIgLACIgcAFIgUAAIgGgFIgBgBIgBgGIAAgBQgBgNAJgGQAGgEACgHQABgDAAgFIAAgBQgCgFgDgEQgEgFgEgGIgBgBIgBgEIgLgCIgBAAIgRgDIgOgCIgCAAIgFgBIgBAAIgXgEIgCgBIgEgHQABgGAKgNIABgBIABgBIANgSIACgCIAIgNIAHgIQAZghAEgDQAHgJAWgMIAGgDIABgBQALgJADgGIAAgBIAAgBIAEgRIAAgBIACgFIADgNIAEgJIABgCIgBgBIAAgBIgFACQghAMgIgCIgFgBIAAAAIgDAAIgDgBIgUgKIgBAAIgDgCIgKgHIgBAAQgIgGgEgHIgDgFQAIgJALgBIADAAIADAAQAEAAAEgCIAEgEIACgFIAAAAIABgCIAPgZIAAgBIABgBQgBgSAJgKIABgBQAEgEAHgEIAPgIIABAAIAUgHIABAAIAMgDIACAAIAAAAQANgEAPgCIACgDIABgBIAAgBIABgCIABgBIABgBIABgCIAXgWIgBAAIABgCIADgJIAAgBIABgFIAAgBQAEgBADgEIACgBIAFgIIAAgBQADgEAFgCIAAgBIABgCIACgCIABAAQAIgDAJgGIACgBIAEgCIACAAIAAAAIAAgBIABAAIACgBIACAAIAAgBIACgBIABAAQASgGASACIACAAIAEAAIABABQAFAHAHgCIABAAIACgEIABgCQADgFAKACIABABIABgBIABABQAGASACgQIAAgBQAEgHAJgCIABAAIACgDIABgCIABgBQAIgKANgIIABgBIACgBIAAgBQAIgBAIABIAAABQACACADABIACAAIAMAFIABAAIAAABIAlgWIACAAIAAgBIAHgDQAIgDAKADIAFABIABABIAMAMIAAABIAMAKIABABIAWgCIACAAQANAAALACIABAAQAIACAEAHQADAEACAGIABACIABAJIABACQAOAGAQAFIABABIAIACIABABQAIAFAEAIIAAABIACAEIAAACIAAARIABABIABAJIABABIAVAHIABABIAPAHIAAABIABAAIABABQALAEACAOIABAAIAAABIgBABIAAACIAAAJIAAABIACACIABAGIAAABIAYAOIABABIABABIADACIABAAIAGARIAAABIgEAGIAAABQgDAIgBALIgBAAIAAABIgEAFIAAACIAAABQABAGADAEIABABQAFAJAHAFIAAABIABAAIAAABIABAAQAEANgDAQIAAACIgBAAIgDASIgCAFIgBAEIAAAAQABAGAEADIABABQAFAFAEAIIAAABIgDAMIgFAQIgBACIAJANIAAABIAAAEQgBAXgNATIgDAJQgEAJgKAJIgCACQgMAEglAYIgIgBIgPgBIgPgOIgDgCQgPgNgHgIIgFgFQgNgPgCgNIAAgFIAAgDIACgHIAFgZIAAgDIABgLIAAgBIAAgBIADgRIgBgCIABgGIABgCIACgHIAEgcIABgKIAAgBIABAAIAAgBQAFgKgHgFQgFABgCgDIgBgCQgBgHgCgEIgCgdIgCgIIgBgBQgEgIgGgDQgDgCgDAAIgIABIgBgTIABgPIgCAAQgHgBgGgEIAAgFIgCgHIAAgDIgBgFQgDgEgCgCQgJgJgRgDIgBAAIgPgDIgCgEIAAgCIgBgBIAAAAIgbAFIgBAAIgGACIgBgCIgCgBIAAgBQgGgFgCgJIAAAAIgBAAIgBAAQgJgCgJABIgBAAIgDABIAAABIgDABIgBABIgHAEIgBAAQgKABgHgDIgBgBIAAgBIgJgPIgBAAIgBgDIgBAAQgCgBgEACIAAABQgLAHgJgEIgBABIgDADQgCACgEABIgCABQgDABgGAAIgBABIgBABIgHAGIgBAAIgLAKIgBABIgGAEIAAABIgCAEIgEAIIAAAAIAAADQAFABAEAHIACAEIABACIAAACIACAIQACAMABASIAAACIABAcIAAAeQABASAGAPQAIAUAQAQQAHAIAFAHQANAVgBAVQAHAKAAAKQgBAEgCADQgHARgfAZIgGAFIgCABIgTANIgSAMQgXASgDAFIgBADIgeAzQgMAOgOALQgJAFgKAEQgPAFgQAAIgKAAg");
	this.shape_27.setTransform(28.3,31.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AjWE4IgBAAIgEAAQgIgBgEgDIgEgGIAAgKIgBgKIABgbIgKABQgXADgGACIgUAAQgEgDgBgCIgBgBIgCgGIAAgBQAAgOALgFQAGgEACgHIABgIIAAgBQgBgGgEgEQgEgEgEgGIAAgBIgCgEIgLgBIgDAAIgSgCIgOgBIgCAAIgGgBIgBAAIgYgCIgDgCIgEgHQABgGALgOIABgBIABgBIANgRIACgCIAJgNIAHgJIAfgjQAHgIAWgNIAGgDIACgBQALgJAEgFIABgBIAAgBIADgRIAAgBIACgGIAEgMIADgKIABgCIgBgBIAAgBIgGACQglAPgKgBIgGgBIgBAAIgCAAIgDgBQgKgDgOgGIgBAAIgBgBIgMgHIAAAAQgKgGgEgGIgDgFQAHgKALgBIADAAIADAAQAEgBAEgCIAFgEIACgFIABAAIAAgBIAPgaIAAAAIABgCQgCgTAJgKIABgBQAEgEAHgEIARgGIABAAIAVgHIAAAAIANgCIABAAIABAAQAMgDAPgCIADgEIAAgBIACgBIABgCIABgBIAAAAIABgCQALgOAKgKIAAgCIADgKIAAgCIABgFIAAgBIAHgFIACgCIAEgIIAAgBQAEgEAFgDIAAgBIAAgBIAEgCIABgBIARgJIACgBIAEgCIABAAIAAgBIABgBIACAAIABAAIABAAIAAgBIADgBIABAAQATgGASADIACAAIADABIABABQAFAHAIgCIAAAAIABAAQAAgBAAAAQAAgBAAAAQABgBAAgBQAAAAABAAIAAgCQADgGAJACIADAAIABAAIABABQAEATACgQIABgBQADgIAJgBIABAAIACgDIABgCIABgBQAKgLALgIIAAgBIACgBIABgBQAHgCAJABIAAABQACACADABIACAAQAFADAHABIABABIABAAIAkgXIACAAIABgCIAGgCQAJgDAKACIAFABIAAAAIANAMIABABIALALIABABIAWgDIACAAQAMgBAMACIABAAQAKABAEAHQADADADAGIAAACIACALIAAABQAOAHAPAFIABAAIAIADIACAAQAHAFAFAIIABABIACAEIAAACIAAARIAAABIAAAKIAAABIAVAHIADABQAIACAGAEIABABIABAAIACABQALAEACANIABABIAAABIAAABIAAACIABAIIAAACIABACIABAGIABABIAXAOIABABIABABIAEABIABABIAGAQIAAACIgEAFIAAABQgDAIgBALIgBAAIAAACIgDAEIgBACIABABQABAGACAEIABABQAEAJAIAFIABABIAAAAIAAABIABABQAFAMgDARIAAACIgBAAIgEASIgCAFIgBADIgBABQACAFAEAEIABAAQAGAGAFAHIAAABIgEAMIgEARIgCABIALAOIABABIgBAEQgBAYgMATIgCAJQgDAKgKAJIgCACIgxAhIgIAAIgQgBIgQgNIgDgCIgYgVIgFgFQgOgOgCgNIAAgFIAAgDIABgHIAFgZIAAgDIACgLIAAgBIAAgBIACgRIAAgDIABgFIABgCIACgIIAFgcIAAgLIAAAAIABgBIABAAQAFgJgHgGQgGABgBgDIgBgBIgCgNQgBgVgBgIIgCgIIgCgBQgEgIgFgDQgDgCgDgBIgJADQgBgKABgKIACgPIgCAAQgHgBgHgEIAAgFIgBgHIAAgDQAAgDgBgDQgCgEgDgDQgJgJgQgDIgCgBIgPgCIgBgEIAAgCIgCgBIAAAAIgcAFIAAAAIgGABIgBgBIgCgCIAAgBQgGgFgBgJIgBgBIgBAAIgBAAQgIgBgLACIgBAAIgCABIAAABIgDACIgCABIgFAEIgCAAQgKAAgHgDIgBgBIAAAAIgJgRIgBAAIgBgEIgBAAQgCgBgDACIgBABQgMAHgJgEIAAAAIgCADQgDADgEABIgBAAQgFABgFAAIAAABIgBABIgJAFIgBAAIgNAKIgBABIgGADIAAABIgCAEIgFAJIAAACQAGABAEAHIADAEIAAADIABACIACAIQACALABATIAAACIAAAcIgCAeQABATAHAPQAHAUARAQIANAPQAOAUAAAWQAHAJAAALQAAADgCAEQgHAQghAZIgHAGIgCABIgSAMIgSANQgYARgDAFIgBADIgeAzQgMAPgNAKQgKAGgJAEQgTAHgTAAIgDAAg");
	this.shape_28.setTransform(28.4,31.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AjsEvIAAgLQAAgYADgRQggADgHADIgUAAQgFgDgBgCQgBgCAAgGQAAgPALgFQALgGAAgMQAAgHgEgEQgHgGgEgKIhUgCIgFgCQgCgCAAgFQAAgLAngsIAogrQAFgJAYgMQAWgMADgIQAEgIADgQQADgPAEgJIAAgCQgxATgMAAQgTAAgYgKQgYgLgHgNQAJgLAMAAQAMABAIgOQAOgXACgGQgDgTAJgKQAPgRBRgJQAQgXALgOIAAAAIABgCQACgJAAgKIAAgBQAJgFAFgKIAAgCQADgEAGgCIAAgBIAAgCQAMgLARgFIABAAIAAgBIAAgBIACAAIABAAIACAAIAAgBQAXgHAXAGIACABQAEAIAIgCIABAAQABgQAQAFIABAAQAFAWABgRIAAgCQADgHAKgCIABAAQALgPAOgLIAAgBQAHgFAMABIAAABQACACADABIABAAQAGADAIABIABABQATgMASgMIABgBIAAgBQAOgIARAEIABABQANAKAMANIAAABQAbgFAYABQAKAAAEAHQAIAHAAAQIAAABQASAJAVAGIABAAQAKAHAFALIAAACIAAAcIAAACQAWAEARAJIABAAQAPADADAPIABABQgBANAEAJIAAACQAQAHAOAJIACAAIAGARIAAABQgHAKgBAQIgBAAIAAABQgBADgCACIAAABIAAACQADASAPAIIAAABIABAAQAFAOgDASIgBAAQgDAOgGANIgBAAQACAGAFADIABAAQAHAGAFAHIAAABQgEAPgFAOIAAABQAFAIAHAHIAAAEQAAAZgLATQgBARgPAPQgJAJgpAdIgYAAQgpgegLgJQgSgRAAgPIAAgEIAGgfIAFgkIAFgQQADgNACgPIABgMIABAAIABgBQAGgJgIgFQgGABgBgDIgCgCQAAgggDgLQgIgdgVAKQgBgSAEgRIgBAAQgIgCgGgEIABgFQAAgQgHgIQgLgPgfgBIgCgDQABgBAAgBQAAAAgBgBQAAAAAAAAQgBAAAAAAQgQAEgTACIAAgCQgIgGgBgMIAAgBQgMgBgOAFIAAABIgKAHIgCAAQgLAAgHgEIAAgBIgHgSIgBAAQgBgIgHAFIgBABQgMAHgJgFIgBAAQgEAJgQgCIAAABIgbAQIgGADIAAABIgIANIAAACQATADABA2QABAdgEAeQAAAoAfAeQAdAcABAcQAJAKAAAKQAAASg1AlQg7AqgEAGIgfA2QgkAtgyAAQgRAAgEgKgABBh6QAHgJALgGIgRAPIgBAAg");
	this.shape_29.setTransform(28.5,31.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AjWE4IgBAAIgEAAQgIgBgEgDQgDgCgBgEIgBgKIAAgLIABgbIgLACQgWACgGADIgTAAQgFgDgBgCIgCgCIAAgGIAAgBQAAgOAKgFQAGgEACgGQACgEgBgEIAAgBQAAgGgEgEQgFgEgDgHIgBgBIgCgEIgLgBIgCAAIgSgBIgQgBIgCAAIgFgBIgBAAIgYgCIgDgCIgEgHQABgGAKgOIABgBIABgBIAOgSIABgCIAKgMIAIgJIAegjQAGgIAXgNIAGgDIACgBQAMgJADgFIABgBIAAgBIAEgRIAAgBIACgGIADgMIAEgKIABgCIgBgBIAAgBIgGACQgnAPgJgBIgGAAIgBgBIgCAAIgEgBQgKgDgNgGIgBAAIgCgBIgMgGIgBAAQgIgGgFgHIgEgFQAIgKALgBIADAAIADAAQAEAAAEgCIAEgEIADgGIABAAIAAgBIAPgaIABgCQgDgSAKgKIABgBQAEgEAHgEIAQgHIABAAQAKgDAMgDIABAAIAMgCIABAAIABAAIAbgFIADgEIAAgBIABgBIABgCIABgBIABgBIABgCQALgOAKgKIAAAAIAAgCQACgEABgFIAAgCIABgGIAAgBQAEgCADgDIACgCIAEgIIAAgBQAEgEAFgCIAAgBIAAgCIADgCIABgBIASgJIABgBIAFgCIACAAIAAgBIAAgBIABAAIACAAIABAAIAAgBIADgBIABAAQASgGATAEIACAAIADAAIACABQAEAIAIgDIAAAAIABABIABgFIABgCQADgGAJACIACABIACgBIABABQAEAUACgQIAAgCQAEgHAJgCIABAAIACgDIABgCIABgBQAKgKAKgJIABgBIADgBIABgBQAGgCAJABIAAABQACACADABIABAAQAGADAHABIABABIABAAIAlgXIABAAIAAgCIAHgDQAJgCAKABIAFACIAAAAIANAMIABABIALAKIABABIAWgCIACAAQANgBAMABIABAAQAJABAEAHQAEAEACAGIAAACIACAKIAAACQAOAHAQAFIABAAIAIACIABABQAIAFAEAIIABABIACAEIAAABIAAASIAAABIAAAJIABACIAVAGIACABQAIADAHAEIAAAAIABAAIACABQAMAEACAOIABAAIAAABIAAABIAAACIAAAJIAAACIABACIABAFIABACIAYANIABABIABABIADABIACABIAFAQIAAACIgDAFIAAABQgDAIgCALIgBAAIAAACQgBADgCABIAAACIAAACQABAFADAFIABABQAEAJAIAFIABABIAAAAIAAABIABAAQAEAMgCARIAAACIgBAAIgFASIgCAFIgBAEIAAAAQABAGAFADIABABQAGAFAFAHIAAABIgEANIgFAQIAAACIAKANIABABIgBAEQgBAYgLAUIgDAJQgDAJgKAKIgCACIgxAiIgIgBIgPAAIgRgNIgDgCIgYgVIgFgFQgOgOgDgNIAAgFIAAgEIACgHIAEgYIAAgDIACgLIAAgBIAAgBIADgRIAAgDIABgGIABgCIACgHIAFgcIABgLIAAgBIAAAAIABgBQAFgJgHgFQgGAAgBgCIgBgCIgCgNQgBgVgBgIIgDgIIgBgBQgDgIgGgDQgDgCgDAAIgJACIgBgTIACgPIgBAAQgIgCgGgEIAAgFIgBgHIAAgDIgBgGQgCgEgDgDQgIgJgRgDIgCAAIgPgDIgBgEIAAgCIgBgBIgBAAQgMAEgPABIgBAAIgGACIgBgCIgCgCIAAgBQgGgFgBgJIAAgBIgBAAIgBAAQgKgBgKACIgBAAIgCABIAAABIgDACIgCABIgGAEIgBAAQgKABgHgDIgBgBIAAgBIgIgRIgBAAIgCgEIgBAAQgBgBgEACIgBABQgMAHgIgEIgBAAIgCADQgDADgEABIgBAAQgEABgGAAIgBABIgBABIgIAFIgBAAIgNAJIgBACIgGADIAAABIgCAEIgFAIIAAADQAGABAEAGIACAFIABACIABACIACAIQACAMABATIAAACIAAAcIgCAeQABASAGAQQAIATAQAQIAOAQQAOAUAAAVQAIAKgBAKQAAAEgCAEQgHAPghAaIgGAFIgDABIgSANIgSAMQgYASgDAFIgBACIgeA0QgMAPgOAKQgJAGgJAEQgTAHgUAAIgCAAg");
	this.shape_30.setTransform(28.4,31.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AjWE3IgBAAIgDgBQgIAAgFgDQgCgCgBgDIgBgKIgCgKIAAgZIgKACQgWADgHACIgTAAQgFgDgBgCIgBgBIgBgGIAAgBQgBgOAJgFQAGgEACgHQABgDAAgFIAAgBQgBgGgEgEQgEgEgEgGIAAgBIgCgEIgLgCIgCAAIgQgCIgPgCIgCgBIgFAAIgBAAIgXgEIgDgBIgDgIQABgFAKgOIABgBIABgBIANgSIACgBIAIgNIAHgJQAaggAEgDQAHgJAWgMIAGgEIABgBQALgIACgGIABgBIAAgBIAEgRIAAgBIACgFIAEgNIADgJIABgCIAAgBIAAgBIgGACQgjAMgHgBIgGgBIAAAAIgCgBIgDgBIgWgJIgBAAIgCgCIgLgHIgBAAQgIgGgEgGIgDgFQAIgKAKgBIAEAAIADAAQAEAAAEgCIAEgEIACgFIAAAAIABgCIAPgZIAAgBIABgCQgCgRAJgKIABgBIAMgIQAGgEAJgEIABAAIAVgHIABAAIAMgCIABgBIABAAQAMgDAPgCIADgEIAAgBIABgBIABgBIABgBIAAgBIABgCQAMgOALgJIgBAAIABgCIADgJIAAgBIABgFIAAgBQAEgCADgDIACgCIAEgIIABgBQADgEAGgCIAAgBIAAgBIADgCIABgBQAHgDAJgFIACgCIAFgCIABAAIAAAAIAAgBIACAAIABAAIACAAIAAgCIADgBIABAAQASgGASADIACgBIADABIABAAQAFAIAHgCIABAAIABAAIABgEIABgCQADgFAKABIACABIABAAIABAAQAFASACgPIAAgCQAEgHAJgCIABAAIACgCIABgCIABgBQAJgLAMgHIAAgCIADgBIABAAQAHgCAIABIAAABQACADADAAIABAAIANAFIABABIAAAAIAmgWIABAAIAAgCIAHgCQAJgDAKACIAEACIABAAQAHAGAFAGIABABIALAKIABABIAWgBIACAAQANgBALACIABAAQAJACAEAHQADADACAGIAAACIACAKIABACQAOAGAPAFIABABIAIACIACABQAIAFAEAIIAAABIACAEIAAABIAAASIABABIABAJIAAABIAVAHIACABIAOAHIABABIABAAIABABQALAEACANIABABIAAABIAAABIAAACIAAAIIAAACIABACIABAGIAAABIAYAOIABABIABABIADABIABABIAGAQIAAACIgDAGIAAAAQgEAJgBAKIgBAAIAAACQgBADgCACIAAABIAAAAIAAACQABAGACAEIABABQAFAIAHAGIABABIABAAIAAABIABAAQAEANgDAQIAAACIgBAAIgEASIgBAFIgCADIAAABQACAFADAEIABAAQAGAGAEAHIAAABIgDAMIgFARIgBABIAJAOIABABIgBAEQgBAXgNATIgCAJQgEAJgKAJIgCACQgMAFglAZIgIgBIgPgBIgQgOIgDgCQgOgNgIgIIgFgFQgNgPgCgNIAAgFIAAgDIABgHIAFgZIAAgDIACgLIAAgBIAAgBQACgIAAgJIAAgCIABgGIABgCIACgHQADgOABgOIABgKIAAgBIABAAIAAgBQAFgKgHgFQgFABgCgDIgBgCQgBgHgCgFIgCgdIgCgIIgBgBQgEgHgGgDQgDgDgDAAQgEAAgEACIgBgTIABgPIgBAAQgIgCgGgDIAAgFIgBgHIgBgDQAAgDgBgCQgCgEgDgDQgJgJgQgDIgCAAIgPgDIgBgDIAAgDIgBAAIgBAAIgbAEIgBAAIgFACIgBgBIgCgCIAAgBQgGgFgCgJIgBAAIgBAAIgBAAQgIgCgKACIgBAAIgDAAIAAABIgCACIgCABIgGAEIgBAAQgKABgHgEIgBAAIAAgBIgJgQIgBAAIgCgDIgBAAQgBgBgEACIAAABQgMAHgJgEIgBAAIgCADQgDADgEABIgBAAQgEACgFgBIgBABIgBABIgIAGIgBAAIgLAKIgCABIgFAEIAAABIgCAEIgFAIIAAADQAGABAEAHIACAEIABACIAAACIACAIQACAMABASIAAACIABAdIgBAeQABARAHAQQAIATAPARQAIAHAFAIQANAUgBAWQAHAJAAALQAAADgCAEQgIAQgfAZIgGAGIgCABIgTAMIgSANQgXARgDAGIgCACIgeAzQgLAPgOAKQgJAGgKAEQgPAFgQAAIgKAAg");
	this.shape_31.setTransform(28.3,31.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AjVE2IgBAAIgEAAQgIgBgEgDQgDgCgBgDQgBgJgBAAIgBgKQgBgNgBgIIgLACIgcAFIgTAAIgGgFIgCgBIgBgGIAAgBQgBgNAIgGQAGgEABgHQABgEgBgEIAAgBQAAgGgEgEQgEgEgEgGIAAgBIgCgEIgKgCIgCgBIgOgDIgOgDIgCAAIgFgBIgBgBQgNgBgJgDIgDgCIgDgGQABgGAKgNIABgBIABgBIANgSIACgCIAHgMIAGgJQAYggAFgEQAHgIAWgNIAFgDIACgBQAKgJACgGIABgBIAAgBIADgRIAAgBIACgFIADgNIAEgJIABgCIAAgBIAAgBIgFABQgfALgFgDIgFAAIgBgBIgBAAIgDgBQgJgEgLgHIgBAAIgCgBIgKgIIgBAAQgIgGgDgHQgCgCgBgDQAIgJALgBIADAAIADAAQAEAAAEgCIADgEIACgFIABAAIAAgBIAPgaIAAAAIABgCQgBgRAKgKIABAAQAEgFAHgEIAOgJIABAAIAVgHIAAAAIAMgDIABAAIABAAQAMgEAPgCIADgEIAAgBIABgBIABgCIABAAIABgBIABgCQAMgNALgJIgBAAIABgBIAEgIIAAgCIABgEIAAgBIAHgFIACgBIAEgIIAAgBQAEgEAFgCIABgBIAAgBIADgCIABgBQAHgBAJgGIABgBIAFgDIABAAIAAAAIAAgBIACAAIACgBIABAAIAAgBIADgBIABAAQARgHASACIACAAIADAAIACABQAEAGAIgCIABAAIABABQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAIABgCQADgFAJACIACABIACgBIABABQAFARADgPIAAgCQAEgHAJgCIABAAIABgCIACgCIAAgBQAJgKAMgIIABgBIADAAIABgBQAGgBAJABIAAABQACACADABIABABQAGADAGABIABABIABAAIAlgVIACAAIAAgBIAHgDQAIgCAKACIAEACIABAAIAMANIAAABIAMAKIABABIAWgBIACAAQAMAAAMACIAAAAIAAABQAJABADAIQADAEACAFIAAACIADAKIAAABQAOAHAQAFIABAAIAIACIABABQAIAFAEAIIABABIABAEIAAACIABARIAAABIABAJIABACIAVAGIACABIANAIIABAAIABABIABABQAKAEACAOIAAAAIAAABIAAABIAAACIAAAIIAAACIABACIABAGIABABIAXAOIABABIABABIADACIABABIAFAQIAAACIgDAFIAAABQgDAIgCALIgBAAIAAACQgBADgCABIAAACIAAACQABAFADAEIABABQAEAJAIAFIABABIAAAAIAAABIABABQADAMgDAQIAAABIAAAAIgDATIgCAFIgBADIAAABQABAGAEADIABABQAFAGAEAHIAAABIgEAMIgFAQIAAACIAHANIABABIgBAEQgCAWgOAUIgDAIQgEAJgKAIIgCACQgNADgkAWIgHgBIgPgCIgQgOIgCgCIgUgWIgFgFQgMgOgCgOIAAgEIAAgEIACgHIAEgZIAAgDIACgLIAAgBIAAgBQADgJAAgHIgBgDIABgFIAAgCIACgHIAEgcIABgKIAAgBIAAAAIABgBQAEgKgHgFQgFAAgBgCIgBgCIgEgLIgCgdIgCgIIgBgBQgEgHgGgDIgFgDIgIACIgBgUIAAgOIgCAAQgHgCgGgEIgBgEIgCgGIAAgDQAAgEgCgCIgFgGQgIgHgRgDIgCAAIgOgEIgBgEIAAgCIgBgBIgBAAIgbAFIAAAAIgGACIgBgBIgCgCIgBgBQgGgEgCgJIAAAAIgBAAIgBgBQgJgCgJABIgBAAIgCAAIgBABIgDACIgBABIgGAEIgBAAQgKABgHgDIgBgBIAAgBIgJgOIgBAAIgCgDIgBAAQgBgBgEACIgBABQgLAHgJgDIgBAAIgCADQgDADgEABIgBAAQgEACgFAAIgBABIgBABIgHAGIgBAAIgKAKIgBACIgFADIAAABIgCAEIgFAJIAAACQAGACADAGIABAEIABADIABACIACAIQACALABATIAAACIABAcIABAdQABASAHAPQAIAUAPAQIAMAQQAMATgCAXQAHAJgBALQAAADgCAEQgIARgeAYIgFAGIgDABIgSAMIgSAMQgWARgEAHIgCACIgeAzQgMAOgNALQgJAFgKAEQgOAEgOAAIgMgBg");
	this.shape_32.setTransform(28.3,31.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AjVE1IgCAAIgDgBQgHAAgFgDIgEgFQgBgIgBAAIgCgJQgBgNgDgGIgKACIgBAAIgcAGIgTgBIgGgEIgBgCIgCgFIAAgBQgBgNAHgHQAFgEABgHIAAgHIgBgBIAAgBQAAgFgDgEQgFgEgDgGIAAgCIgCgEIgJgCIgCgBIgNgEIgNgEIgCgBIgFgBIgBAAQgNgCgIgEIgCgCIgDgGQABgFAKgNIABgBIABgBIANgSIACgCIAGgMIAFgJQAVgfAGgFQAJgJAUgMIAGgEIABgBQAJgIABgGIABgBIAAgBIADgRIAAgBIACgGIADgMIAFgKIABgBIAAgBIAAgBIgFABQgbAIgDgDIgEgBIgBgBIgBAAIgDgBIgSgMIgBAAIgBgBIgKgIIAAAAQgIgHgDgHIgCgEQAIgJAKgBIAFAAIACAAQAFAAADgCIADgEIAAgEIABgBIAAgBQAKgSAGgHIAAgBIABgCQAAgQAKgKIABAAIALgKIANgJIABAAIAUgIIABAAIAMgDIAAAAIABgBQAMgEAOgCIADgEIABAAIAAgBIABgBIACgBIABgBIAAgBIABgCQAMgMAMgIIgBAAIACgBIADgIIAAgBIABgEIABgBQADgBAEgDIACgBIAEgIIAAgBQADgEAGgCIABgBIAAgBIACgBIABgBQAIAAAIgHIABgBIAFgCIABAAIAAgBIAAgBIACAAIABAAIABAAIABgBIADgBIABAAQAQgIATABIABAAIADAAIACAAQAFAGAHgBIABAAIABAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIABgCQAEgEAJACIACAAIABAAIABAAQAGAPADgOIAAgBQAEgHAIgDIABAAIACgCIABgCIABgBQAKgKAMgGIABgBIACgBIABAAQAHgBAIACIAAAAQACADADABIABAAQAGADAGACIABAAIABABIAlgUIACAAIAAgBIAHgDQAIgCAKADIAEACIABAAIALANIABABIAMAKIAAABIAXgBIACAAQAMABAKADIABAAIAAABQAIACADAHQADAEABAGIABACIADAJIAAABIAeAMIABAAIAIACIABABQAIAFADAIIABABIACAEIAAACIABARIAAABIACAJIABABIAUAHIACABIANAIIABABIAAAAIACABQAIAFACAOIAAAAIAAABIAAABIAAACIAAAIIAAACIABACIABAFIABACIAWAOIABABIABABIADACIABABIAFAQIAAACIgDAFIAAABQgEAIgBALIgBAAIAAACIgDAFIAAABIAAACIAEAJIABABQAEAIAIAGIABABIAAAAIAAABIABABQACAMgDAPIAAACIAAAAIgBASIgCAFIgCAEIAAAAQACAGADAEIAAAAQAFAHAEAHIAAABIgDALQgDAJgDAIIAAABIAGAOIABABIgCAEQgCAVgPAUIgDAIQgFAIgKAHIgCACQgOACgjATIgHgBIgOgDIgPgOIgDgCQgMgOgGgJIgFgFQgLgPgBgNIAAgFIAAgEIACgHIAEgYIAAgDIADgLIAAgBIAAgBQACgJAAgIIgBgCIABgFIAAgCIABgHIAEgbIAAgLIAAgBIABAAIABgBQAEgJgIgGQgFAAgBgCIgBgCQgCgGgDgEIgBgcIgCgJIgBAAQgFgHgFgEIgFgCQgEgBgDACIgCgUIgBgOIgBAAQgIgCgGgDIgBgEIgCgGIgBgDQAAgEgCgBQgCgEgCgCQgKgHgQgCIgBgBIgOgEIgCgDIAAgDIgBgBIAAAAIgbAFIgBAAIgGACIgBgBIgCgBIAAgBQgGgEgCgIIgBgBIgBAAIgBAAQgIgDgJAAIgBAAIgDAAIAAABIgDACIgBABIgGADIgCAAQgJACgIgEIgBAAIAAgBIgJgMIgBAAIgCgDIAAAAQgCgBgEACIgBABQgKAHgJgDIgBAAIgDADQgDADgDABIgBAAQgEACgFAAIgBABIgBACIgGAGIgBABIgIAKIgDACIgEADIAAABIgBAEIgFAJIAAACQAFACADAHIABADIABADIABACIACAIQACALABATIAAACIABAcIACAdQACARAGAPQAJAUAOAQIALAQQAMATgDAXQAGAKgBAKQgBADgCAEQgIASgdAXIgEAGIgCABIgTAMIgSAMQgVARgFAHIgBADIgeAyQgMAOgOALQgJAFgJADQgNADgNAAIgOgBg");
	this.shape_33.setTransform(28.3,31.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AjVE0IgBAAIgEgBQgHgBgFgCQgCgCgCgDQgBgHgCgBIgDgIQgBgMgDgFIgLADIgcAGIgTgBIgGgEIgCgCIgBgFIAAgBQgDgMAHgHQAEgEABgHIgBgIIAAgBQgBgGgDgEQgEgEgEgGIAAgBIgBgEIgJgEIgBAAIgLgFQgFgDgHgCIgCgBIgGgCIgBAAQgMgCgHgEIgCgDIgDgFQACgGAJgMIABgBIABgBIANgSIABgCIAGgMIAEgJQASgfAIgFQAJgJAUgNIAGgDIABgBQAIgJAAgGIABgBIAAgBIACgRIAAgBIACgFIAEgNIAEgJIABgBIAAgBIAAgBIgEAAQgXAHgBgFIgDgBIgBAAIgBgBIgCgBIgQgMIgBgBIgCgBQgFgEgEgEIAAgBQgHgGgDgHIgBgFQAIgIALgCIADAAIADABIAIgCIACgDIABgFIAAgBIABgBQAJgSAGgHIABAAIAAgCQABgQAKgKIABAAIAKgKIANgKIABAAIATgIIABgBIAMgDIAAAAIABgBQAMgEAPgDIADgDIAAgBIABgBIABgCIABAAIABgBIABgCQANgMALgHIABgBIAEgHIABgBIABgDIAAgBQAEgBAEgDIACgBIADgIIABgBQADgEAGgBIAAgBIABgBIACgCIABAAQAHACAIgIIABgBIAEgDIABAAIABAAIAAgBIACAAIABgBIACAAIAAgBIADgBIABAAQAQgIASAAIABAAIADAAIACAAQAFAFAHgBIABAAIABAAIACgDIABgBQADgEAJACIACABIACgBIABAAQAFAOAEgOIAAgBQAFgHAHgCIABAAIACgDIABgBIABgBQAKgKAMgGIABAAIADgBIABgBQAGAAAIACIABABQABACADABIACABIALAFIABAAIAAAAIAmgSIACAAIAAgBIAHgCQAJgCAIADIAFACIABAAQAGAGAEAIIABABIAMAJIABABIAWAAIACAAQAMABAKAEIABAAQAHADADAIQADAEABAGIAAABQADAEABAFIAAABIAeAMIABAAIAIACIABABQAIAFAEAIIAAABIACAEIAAACIAAARIAAABIADAIIABACIAUAHIACABQAHAEAGAFIAAAAIABAAIACACQAHAFABAOIABAAIAAABIAAABIAAACIgBAHIAAACIABACIABAGIAAABQALAIAMAHIAAABIABABIADACIABABIAFAQIAAACIgDAGIAAAAQgDAJgCAKIgBAAIAAACIgDAFIAAABIAAACQABAFADAFIABAAQAFAIAHAGIABABIAAAAIAAABIABABQACAMgDAPIAAACIgBAAIAAASIgCAEIgBAEIAAABQABAGADAEIABAAQAEAGADAIIAAABIgEALQgBAJgEAIIAAABIAEAOIABABIgCAEQgDAUgPATQgBAFgDAEQgFAHgKAHIgCABQgQAAggARIgIgBIgOgEQgJgIgFgHIgCgCQgLgNgGgKIgEgGQgKgOgBgOIAAgEIAAgEIACgHIAFgZIAAgDIABgLIABgBIAAgBQADgJgCgHIAAgCIAAgFIAAgCIABgHIAEgbIAAgLIAAAAIAAgBIABgBQADgJgGgFQgFgBgCgCIgBgBQgCgHgDgDIgCgcIgBgIIgBgBQgFgHgGgDQgCgCgCgBQgEAAgDABIgCgUIgBgNIgCgBQgHgBgHgEIgBgEIgDgFIAAgDIgCgFIgFgFQgKgGgQgCIgBgBIgOgFIgBgDIAAgDIgBgBIAAAAIgbAFIgBAAIgGACIAAgBIgDAAIAAgBQgHgEgDgIIAAAAIgBAAIgBgBQgIgDgIAAIgBAAQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAAAgBAAIAAABIgDACIgCABIgFADIgCAAQgJACgIgEIgBAAIAAgBIgKgLIgBAAIgBgDIgBAAIgFACIgBABQgKAGgKgCIgBABIgCACQgDADgEABIgBAAQgDADgFAAIgBABIgBACIgGAHIAAAAIgIALIgBABIgFAEIAAABIgBAEIgEAJIAAACQAEADADAGIABADIABADIAAABIADAIQACAMAAASIAAACIADAcIACAdQACARAIAPQAIAUANAQIALAQQAKATgDAYQAFAJgBAKIgCAHQgIATgdAXIgDAGIgDABIgSALIgSAMQgUARgGAIIgBACIgfAyQgLAPgNAKQgKAFgKADQgKACgKAAQgKAAgJgCg");
	this.shape_34.setTransform(28.2,31.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AjVEzIgBgBIgDgBQgIAAgFgCIgEgEQgCgHgCgBIgDgIQgBgKgFgEIgLADIgbAHIgTgBIgGgEIgDgCIgBgFIAAgBQgDgMAFgHQAEgFACgHIgCgIIgBAAIAAgBQAAgFgDgEQgFgEgDgGIAAgBIgBgEIgIgFIgBAAIgKgGQgEgEgHgCIgCgBIgFgCIgBAAQgMgDgHgFIgBgCIgDgGQACgFAKgMIABgBIABgBIAMgSIABgBIAEgNIADgJQARgeAJgGQAJgJAUgNIAGgEIABgBQAGgIAAgGIABgBIAAgBIACgRIAAgBIABgGIAFgMIAEgJIABgCIgBgBIAAAAIgCgBQgUAFACgFIgDgCIgBAAIgBgBIgCgBIgNgNIgCAAIgBgCIgJgJIAAAAQgHgHgBgHIgCgEQAJgIALgCIAEAAIACAAIAIgBIACgDIgBgFIABAAIAAgCQAJgSAHgHIABAAIAAgCQACgPAKgKIABAAIAKgKIAMgLIAAAAIATgJIABgBIALgDIACgBIAAAAQALgFAQgDIADgDIAAgBIABgBIABgBIABgBIABgBIAAgBQAOgMAMgGIABgBIAFgGIAAgBIACgDIAAAAQAEgBADgDIACgBIAEgIIABgBQACgEAHgBIAAgBIABgBIACgBIABAAQAHADAHgIIABgCIAEgCIABAAIAAgBIAAgBIADAAIABAAIACAAIAAgCIACgBIABAAQARgIARgBIABgBIAEAAIABAAQAFAFAHgBIABAAIABABIACgDIABgBQAEgDAIABIACABIADgBIABAAQAFAMAEgMIAAgCQAEgGAIgDIABAAIACgCIABgCIABgBQALgJAMgFIABgBIADgBIAAAAQAHAAAHACIABABQACADADABIABAAIALAFIAAABIABAAIAngRIABAAIABgBIAGgCQAJgCAJADIAEADIAAAAQAHAGADAIIABABIANAJIABABIAVABIACAAQAMABAKAFIABAAQAGAEADAHQACAEABAGIABACIAEAIIABABIAdALIAAABIAIACIACABQAHAFAFAIIAAABIACAEIAAACIAAARIABABIACAIIABABIAVAIIACABIALAJIABABIABAAIABABQAGAGABANIABABIAAABIgBABIAAACIAAAHIAAACIAAACIABAFIABACQAKAIAMAHIABABIAAABIADACIABABIAFAQIAAACIgDAGIAAAAIgFATIgBAAIAAACQgBADgCACIAAABIAAABIAAABQABAGADAEIABAAQAFAIAHAGIABABIAAAAIAAABIABABQABANgDAOIAAACIgBAAIABARIgCAFIAAAEIgBABQABAFADAFIABAAQAEAGACAIIAAABIgDALIgGAQIgBACIAEAOIABABIgCADQgEAUgRATIgDAIQgGAHgLAGIgBABQgRgCgfAPIgHgCIgPgEQgIgIgFgHIgCgDQgKgNgFgLIgEgFQgIgPgCgNIAAgFIABgDIACgIIAEgYIABgDIABgMIABAAIAAgBQADgJgCgIIgBgBQgBgCABgDIAAgCIACgHIADgbIAAgKIAAgBIAAAAIAAgBQADgKgGgFQgEAAgCgDIgBgBQgDgGgEgDIgBgcIgBgIIgBgBQgGgGgFgDQgCgDgDAAQgCgBgEABIgCgUIgCgNIgBAAIgPgFIgBgEIgDgFIgBgDQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBIgFgEQgKgGgQgCIgBAAIgNgGIgBgDIgBgDIAAAAIgBAAIgbAEIAAAAIgGADIgBgBIgCgBIAAAAQgIgEgCgHIgBgBIgBAAIgBAAQgIgEgHgBIgBAAIgDgBIAAABIgEABIgBABIgGAEIgBAAQgKACgHgEIgBAAIAAgBIgKgKIgBAAIgCgCIgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAQgBAAAAABIgBABQgLAGgJgCIgBABIgDADQgCACgEABIgBABQgDACgGABIAAABIgBABIgFAIIgBAAIgGALIgBACIgFAEIAAABIgBAEIgDAJIAAACQAEADABAGIACADIABADIAAABIACAIQACALABATIAAACIADAcIADAdQADAQAHAPQAJAUAMARQAGAIAFAIQAJASgEAYQAEAKgBAKIgDAHQgIATgbAWIgCAGIgDABIgTAMIgSAMQgTAQgGAJIgBACIgfAxQgLAPgNAKQgKAFgKACIgRACQgLAAgLgDg");
	this.shape_35.setTransform(28.2,31.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AjVEyIgBgBIgDgBQgIAAgFgCIgEgEQgCgHgCAAIgEgIQgCgJgGgCIgKAEIAAAAIgcAGIgSgBIgHgEIgCgCIgCgEIAAgBQgDgMAEgIQAEgEAAgIIgCgHIAAAAIAAgBQgBgGgDgEQgEgEgDgGIAAgBIgBgEIgIgFIAAAAIgIgIQgEgDgHgDIgCgBIgFgDIgBAAQgMgDgGgGIgBgCIgCgFIAMgRIABgBIAAgBIANgRIABgCIADgNIACgJQAOgdALgHQAKgJATgNIAFgEIABgBQAGgIgBgHIABgBIAAgBIABgRIAAgBIACgFIAEgNIAEgJIABAAIABgBIgBgBIAAAAIgCgCQgPADADgGIgCgBIAAgBIgBAAIgCgCIgMgOIgBAAIgBgCQgFgEgDgFIgBgBQgGgGgBgIIAAgEQAIgIALgCIAEABIACAAQAEAAAEgBIABgDIgBgFIABAAIAAgCQAJgSAIgHIAAAAIABgCQACgOAKgKIABAAIAKgLIALgLIABAAIASgKIABgBIALgDIAAgBIABAAQAMgGAOgDIADgDIABAAIAAgBIABgBIABgBIABAAIABgBIABgCQANgKANgGIABgBIAFgFIABgBIABgCIABgBQAEAAADgDIACgBIAEgHIAAgCQADgEAGgBIABAAIAAgBIADgBIABgBQAGAGAHgKIABgBIAEgDIABAAIAAAAIAAgBIACAAIACgBIABAAIABgBIACgBIACAAQAPgJARgCIABgBIAEAAIABAAQAFAEAHgBIABAAIABABIACgCIACgBQAEgDAIACIACAAIACgBIABAAQAFALAEgMIABgBQAFgHAIgDIABAAIABgCIABgBIABgBQALgJAMgFIACAAIACgBIABAAQAGAAAIADIAAAAIAFAEIACABIAKAFIAAAAIABABIAngQIABAAIABgBIAGgCQAJgCAIAEIAFACIAAABQAGAGAEAIIAAABIAOAKIAAAAIAWABIACAAQALACAKAFIAAABIAAAAQAHAEACAIQACAEABAGIABABIAEAIIAAABIAeALIABAAIAIADIACABQAHAFADAIIABABIABAEIAAACIABARIAAABIAEAIIABABIAUAIIACABIALAJIABABIABAAIABACQAFAGABANIAAABIAAABIAAABIAAABIgBAHIAAACIAAACIACAGIAAABQAKAJALAHIABABIABAAIACADIABABIAEAQIAAACIgCAGIAAABQgDAIgCAKIgBAAIAAACQgBADgCACIAAACIAAACQABAFADAEIABAAQAFAIAHAGIABABIAAAAIAAABIAAABQACAMgEAPIAAABIAAABIACARIgCAEIgBAEIAAABQABAGACAEIABABQADAGACAIIAAABIgEALQgBAIgEAIIAAACIACANIAAABIgCAEQgEATgSATIgEAIQgGAGgLAFIgBABQgSgDgeAMIgHgCIgOgFQgJgIgEgIIgCgCQgIgOgFgLIgDgFQgIgPAAgOIAAgEIAAgEIACgHIAFgZIAAgDIACgLIAAgBIAAgBQADgJgCgHIgBgCIgBgEIAAgCIABgHIADgaIAAgLIAAgBIAAAAIABgBQACgJgGgGQgEAAgCgCIgBgCQgDgGgEgBIgCgcIAAgJIgCAAQgFgGgFgEIgEgDIgGAAIgDgUIgDgNIgBAAIgOgFIgDgDIgDgFIgBgDQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIgGgDQgKgFgQgCIgBAAIgMgHIgBgDIgBgDIgBAAIAAAAIgbAEIAAABIgGACIgBgBIgCAAIgBgBQgHgDgDgHIgBAAIgBAAIgBgBQgHgEgIgCIgBAAIgCgBIAAAAIgEACIgBABIgFADIgCAAQgKACgHgDIgBgBIAAAAIgLgIIgBAAIgCgCIgBAAIgDABIgBABQgLAHgKgBIgBAAIgCADQgDACgEABIAAABQgEADgEABIgBABIgBABIgFAIIAAABIgFALIgBACIgEAEIAAABIgBAEIgDAJIAAACQADADACAGIAAADIABADIABABIACAIQACALABATIAAACQABAPACANIAEAcQADAQAIAPQAJAUAMARIAJAQQAJASgFAZQADAJgCAKIgCAHQgJAUgZAWIgCAGIgDABIgSALIgTAMQgSAQgGAJIgCADIgeAwQgMAPgNAKQgJAEgKADIgNABQgOAAgMgEg");
	this.shape_36.setTransform(28.2,31.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AjVEwIgBAAIgDgCQgIAAgEgCQgDgBgCgCQgCgGgCgBIgFgHQgCgIgIAAIgKAEIgbAHQgJAAgJgCIgHgDIgCgCIgCgFIAAgBQgFgLAEgIQADgFAAgHIgCgIIAAAAIAAgBQgBgFgDgEQgEgEgEgGIAAgBIgBgEIgGgGIAAAAIgGgJQgEgEgGgDIgCgCIgGgCIgBgBQgMgDgFgGIAAgDIgCgEIALgRIABgBIABgBQAHgIAGgJIABgCIACgMIABgKQALgdANgHQAKgKATgMIAEgEIACgBQAEgJgBgGIAAgBIAAgBIABgRIAAgBIACgGIAEgMIAFgJIAAAAIABgBIAAgBIAAgBIgCgCQgLACAGgHIgCgCIAAgBIgBAAIgBgCQgDgGgIgJIAAAAIgBgCQgFgEgDgGIAAAAQgGgHgBgIIAAgEQAJgHALgCIAEAAIACABIAIgBIABgDIgBgFIAAAAIAAgCQAJgRAIgHIABgBIAAgBQAEgOAJgKIACAAIAJgLIAKgMIABgBQAIgEAKgGIAAAAIALgEIAAgBIABgBQALgFAPgEIADgDIACAAIAAgBIABgBIACgBIAAgBIAAgBQAOgKANgFIACgBIAGgFIABAAIABgCIAAAAQAEAAAEgDIACgBIADgHIABgCQADgEAGAAIABgBIAAgBIACgBIABAAQAHAHAGgKIABgBIADgDIABAAIABgBIAAgBIACAAIACAAIABAAIABgCIACgBIABAAQAPgJARgDIACgBIACAAIACgBQAFAEAIgBIABABIABAAIABgCIACgBQAEgCAJACIABABIACgBIAAgBQAHAJAFgLIAAgBQAFgGAIgEIABAAIABgBIABgCIABgBQALgJANgDIABgBIADAAIAAgBQAHABAHADIAAABIAFAEIACABIAJAFIABAAIAAAAIAogOIACAAIAAgBIAGgCQAJgBAIAEIAFACIAAABQAGAGADAIIABACIANAJIABAAIAWACIABAAQALACAJAGIABABIAAAAQAGAEABAIQADAFABAFIAAACIAFAHIAAABIAeALIABAAIAHADIADABQAGAFAEAIIABABIABAEIAAACIABARIAAABIAFAHIABACIATAIIACABIALAKIAAABIACAAIABABQADAGABAOIAAABIAAABIAAAAIAAACIgCAHIAAACIABACIABAFIAAACQAKAJAMAHIAAABIABAAIACADIABABIAEAQIAAACIgCAGIgBABIgEASIAAAAIgBACIgDAGIgBABIAAAAIABACIAEAJIABAAQAGAIAGAGIAAABIAAAAIAAABIABABQABAMgEAOIAAACIAAAAIADARIgCAFIAAAEIgBABIADAKIABABQADAGABAIIAAABIgEAKQgBAJgDAIIgBABIABAOIAAABIgCAEQgGARgSAUIgEAHQgHAGgLAFIgCABQgTgGgcAKIgHgCIgNgGQgJgIgEgIIgCgDQgHgNgEgMIgCgGQgHgOgBgOIAAgFIABgDIACgIIAFgYIAAgDIABgMIABAAIAAgBQAEgJgDgIIgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAIAAgCIAAgHIADgaIgBgLIAAAAIABgBIAAgBQACgJgFgFQgEgBgDgCIgBgCQgDgFgFgBIgBgcIgBgJIgBAAQgFgFgGgEIgEgDQgCgCgCABIgEgUIgDgMIgCgBIgOgEIgDgEIgEgEIgBgDQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAIgGgEQgKgEgQgBIgBgBIgMgGIgBgEIAAgDIgBAAIAAAAIgbAEIAAABIgGACIgBAAIgCAAIgBgBQgIgDgDgGIgBgBIgBAAIgBAAQgGgFgIgDIgBAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgBAAAAAAIgBAAIgDACIgBABIgGADIgBAAQgKACgHgDIgBgBIAAAAQgEgBgIgGIgBAAIgCgCIgBABIgCABIgCABQgLAGgJAAIgBABIgDACIgGAEIgBAAQgDADgFACIAAABIgBABIgEAIIAAABIgEAMIgBACIgDAEIAAABIgBAEIgEAJIAAACQADAEACAFIAAADIABADIAAABIACAIQACALACATIAAACQABAPACAMIAGAdQADAPAIAPQAJAUALARIAIAQQAIASgGAZQAEAKgDAKIgCAGQgJAVgZAVIgBAGIgCABIgTALIgSAMQgRAQgIAKIgBACIgfAwQgMAPgMALQgJADgKACIgIAAQgRAAgOgFg");
	this.shape_37.setTransform(28.2,32);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AjVEvIgBgBIgDgBQgHAAgGgCIgEgDQgCgGgDAAIgFgHQgDgHgIACIgKAEIAAAAQgSAFgKABQgJABgJgCIgGgEIgDgBIgCgEIgBgBQgEgLADgJIACgMIgDgIIAAAAIAAgBQgBgFgDgEIgHgKIABgBIgBgEIgGgGIgBgBIgEgJQgCgFgHgEIgCgBIgGgDIgBgBQgMgEgDgHIgBgCIgBgEIAMgRIABAAIAAgBQAHgIAFgKIABgBIABgNIABgJQAIgcAPgJIAcgWIAFgEIABgBQAEgIgCgHIABgBIAAgBIgBgRIAAgBIACgFIAFgNIAFgJIABgBIAAgBIAAAAIgBgDQgHgBAHgIIgBgBIAAgBIAAgBIgBgBQgCgHgHgJIgBAAIgBgCIgHgLIAAAAQgFgHAAgIIAAgEQAJgHALgCIAEABIACAAQAEAAAEgBIAAgDIgCgEIABAAIAAgCQAIgSAJgHIABAAIAAgCQAEgNAKgJIABAAIAKgMIAJgNIAAAAQAKgEAIgHIAAgBIALgEIAAgBIABAAQALgHAPgDIADgDIABAAIAAgBIABgBIABgBIABAAIABAAIABgCQAOgKANgEIAAAAIACAAIAGgEIABgBIACgBIAAAAQAEAAAEgCIABgBIAEgIIAAgBQADgEAGgBIABAAIABgBIACAAIABgBQAGAJAGgLIABgBIADgDIABAAIABgBIACgBIACgBIABAAIABgBIACgBIABAAQAPgKAQgEIABgBIAEAAIABAAQAFADAHgBIACAAIABABIACgBIABgBQAFgCAHACIACAAIACgBIABAAQAHAIAFgLIABgBQAFgHAIgDIABAAIAAgBIACgBIAAgCQALgIANgEIACAAIACAAIABAAQAGABAHADIABABIAFAEIABABIAKAFIAAAAIABABIAngOIACAAIAAgBIAHgBQAJgBAHAEIAEADIABAAQAFAGADAJIAAABIAPAJIAAABIAWACIACAAQALADAJAGIAAABIAAABQAFAEACAJIACAJIABACIAFAHIABAAIAdALIABABIAIACIACABQAHAFADAJIABAAIAAAFIAAACIACAQIAAABIAFAIIABABIAUAIIACABIAKALIABAAIAAABIABABQADAHAAANIAAABIAAABIAAABIAAABIgBAHIAAACIAAABIABAHIABABQAIAJAMAHIABABIABAAIACADIAAACIAEAQIAAACIgCAGIAAAAIgFASIgBABIAAACQgBADgCACIAAACIgBAAIABACQABAFADADIABABIAMANIABABIAAABIAAABIAAABQABAMgEAOIAAABIAAABIADAQIgBAFIgBAEIAAABIACAKIABABIADAOIAAABIgEALQgBAIgEAIIAAACQAAAHgBAGIAAABIgCAEQgFARgUATIgFAHIgSAKIgCAAQgUgHgbAHIgHgCIgNgGQgIgJgEgIIgBgDQgGgNgDgNIgDgFQgFgPgBgOIABgEIAAgEIACgHIAFgZIAAgEIACgLIAAAAIAAgBQAEgKgDgGIgCgCIgBgDIAAgCIABgHIABgaIAAgLIAAgBIAAAAIABgBQABgJgGgFQgDgBgCgCIgBgCQgEgGgGAAIAAgbIgBgJIgBAAIgLgJIgDgEIgFgBQgBgLgCgIIgFgMIgCgBIgOgFIgDgCIgEgEIgBgDQAAgBAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAIgGgCQgKgDgQgCIgBAAQgGgDgFgFIgBgDIgBgDIAAAAIgBAAQgMAAgOAEIAAAAIgGADIgBAAIgDAAIgBgBQgHgCgEgGIgBAAIgBgBIgBgBIgNgIIgBAAIgCgCIgBAAIgEACIgBABIgFADIgBAAQgKADgHgEIgBAAIAAgBQgEAAgIgFIgBAAIgBgBIgBAAIgEABIgBABQgLAHgJAAIgBAAIgDADQgDACgDABIgBABQgDADgEACIgBABIgBABIgEAJIAAABQAAAFgCAHIgBACIgDAFIAAABIgBAEIgDAIIAAABIAAACQADADABAGIgBADIABACIABACIACAIQACAKABATIAAACIAEAcIAHAbQADAQAJAPQAJAUAKARQAFAIADAIQAHARgHAaQACAJgCALIgBAGQgLAWgXAUIAAAGIgDABIgTALIgSAMQgQAPgIALIgBACIgfAwQgMAOgMALIgUAGIgDAAQgUAAgPgHg");
	this.shape_38.setTransform(28.1,32.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AjVEuIgBAAIgCgCQgHAAgHgCIgEgDQgDgEgDgBIgGgGQgCgGgKAEIgJAEQgSAFgKACQgKAAgIgCIgHgEIgCgBIgCgEIgCgBQgEgKACgKIABgMIgDgIIAAAAIAAgBQgCgFgCgEIgHgJIABgCIgBgEIgGgGIAAgCIgCgKQgCgFgHgFIgBgBIgHgDIgBAAQgMgGgCgHIAAgDIgBgDIALgQIACAAIABgBQAGgIAFgKIAAgBIAAgNIAAgKQAGgbAQgKIAdgVIAFgFIAAgBQADgIgDgHIABgBIAAgBIgBgRIAAgBIACgFIAFgNIAGgIIABgBIAAgBIAAgBIgBgDQgDgCAJgKIAAgBIAAgBIAAgBIgBgBQAAgIgHgJIAAAAIgCgCQgDgFgCgHIAAAAQgGgHABgIIABgEQAJgGALgDIAEABIACAAIAJAAIgBgDIgCgEIAAgBIABgCQAGgQAKgIIABAAIABgCQAFgNAJgIIACAAIAJgNIAIgNIAAgBQAJgEAIgHIAAAAQAFgEAGgCIABAAIAAgBQALgHAPgDIADgDIABgBIABgBIABgBIABAAIABAAIABgCQAOgJAOgDIAAAAIACgBIAHgDIABAAIABAAIABAAQAEAAAEgCIABgBIADgIIABgBQADgEAGgBIABAAIABgBIACAAIABAAQAGAKAFgLIABgCIADgDIABAAIABgBIABgBIACgBIABAAIACgBIACAAIABAAQAOgMAQgEIABgBIAEgBIABAAQAFADAHgBIACAAIABABIADgBIAAgBQAFAAAHABIADAAIACgBIAAAAQAHAGAGgKIABgCQAFgGAIgDIABAAIAAgBIACgBIAAgBQAMgJANgCIABAAIACgBIABAAQAGACAIADIAAABIAFAEIACABIAJAGIAAAAIABAAIAngMIACgBIABAAIAGgBQAJgBAHAEIAEAEIABAAQAFAGACAJIAAACIAPAIIABABIAWACIABABQALADAJAHIAAABIAAAAQAEAGACAIIACAKIAAABIAGAHIABAAIAdALIABAAIAIADIABABQAIAFACAIIABABIABAFIAAACIABAQIABABIAFAHIABABIAUAJIACABIAKALIABAAIAAABIABABQABAHAAAOIAAABIAAABIAAAAIAAACIgBAHIAAABIAAABIABAHIAAABQAJAKALAHIABABIABAAIACADIABABIADAQIAAACIgCAHIAAAAIgFASIgBAAIAAACIgDAHIAAAAIgBABIABABQACAGACADIABAAIAMAOIABABIAAABIAAABIAAAAQAAANgDANIgBACIAFAQIgBAFIgBAEIAAABIACALIAAABQACAHAAAGIAAABIgDALQgCAJgEAHIgBACQABAHgCAHIAAABIgCADQgHAQgUATIgFAHIgUAJIgBAAQgWgJgYAFIgHgDIgNgGQgIgKgEgHIgBgEQgFgNgCgOIgCgFQgFgPAAgNIABgFIAAgEIACgHIAFgZIABgDIABgMIABAAIAAgBQAEgKgEgGIgCgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgBIABgGIABgbIAAgLIAAAAIAAgBIAAgBQABgJgGgFIgFgDIgBgCQgEgFgHAAQgBgQABgLIAAgJIgBAAIgMgIIgDgEIgDgDQgCgKgCgIIgGgMIgBgBIgPgFIgDgCIgFgDIgBgEQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAAAgBAAIgGgDQgLgCgPgBIgBgBQgGgDgFgFIgBgDIAAgDIAAAAIgBAAQgMAAgOADIAAABIgGADIgCAAIgCAAIgBAAQgIgCgFgGIAAAAIgBgBIgBgBQgFgFgHgEIgBAAIgDgDIAAABIgEABIgBABIgFAEIgBAAQgKACgHgDIgBAAIAAgBQgFABgHgFIgBAAIgCgBIgBAAIgDACIgCABQgLAGgJABIgBAAIgDADIgGAEIAAAAIgIAFIAAACIgBABIgDAJIAAABQABAFgBAHIgCACIgDAFIAAACIgBAEIgCAHIAAACIAAACQACAEAAAFIAAADIABACIAAACIADAHQACAKAAAUIAAACQACAPAEAMIAHAbQAEAQAJAPQAJAUAKARQAEAIACAIQAGARgGAaQABAKgDAKIgCAGQgKAXgWATIABAGIgDABIgUALIgSALQgPAQgIAMIgBABIggAvQgLAPgNALIgUAFQgVgBgQgIg");
	this.shape_39.setTransform(28.1,32.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AjVEuIgBgBIgCgCQgHAAgGgBIgFgDQgDgEgDAAIgGgGQgEgFgLAFIgJAFIAAAAQgRAGgLABQgJAAgJgCIgGgDIgDgCIgCgEIgBgBQgFgJABgKIAAgNIgEgHIAAgBIAAgBQgBgEgDgEIgGgKIAAgCIgBgDQgBgEgDgEIAAgBIgBgLQgBgGgHgFIgBgBIgGgEIgCgBQgLgFgBgIIAAgDIgBgCIAMgQIABgBIAAAAQAIgIAEgKIAAgCIgBgMIgBgKQAEgaARgLIAcgWIAFgEIABgBQACgJgDgHIAAgBIAAgBIgCgQIABgCIACgFIAEgMQADgDADgGIAAAAIABgBIAAgBIAAAAIABgEQAAgFAMgJIAAgCIAAgBIAAgBIAAgCQABgHgGgKIAAgBIgCgBQgEgGgBgGIAAgBQgFgHACgIIABgEQAJgGALgCIAEAAIACABIAIAAIgBgDIgDgEIABgBIAAgCQAHgRAKgHIABAAIABgCQAFgMALgIIABgBIAIgMIAIgOIAAgBQAJgEAIgIIAAgBQAEgDAGgCIAAAAIABgBQALgHAOgEIAEgDIABAAIAAgBIABgBIABAAIABgBIABAAIABgCQAOgIAOgDIABAAIACAAIAHgCIABgBIACABIABAAQADABAEgCIACgBIADgIIAAgBQADgEAHAAIAAgBIABAAIADAAIABgBQAFAMAFgMIABgBIADgDIABgBIABgBIABgBIACAAIABAAIABgBIADgBIABAAQANgMAQgFIABgBIAEgBIACgBQAFACAHAAIABAAIABABIADAAIABgBQAEgBAIACIACABIACgCIABAAQAHAEAGgJIABgBQAGgGAIgEIAAAAIABgBIABgBIAAgBQAMgIANgCIACAAIACAAIABAAIANAFIAAABIAFAEIACACIAIAFIABAAIAAABQAVgHATgFIACAAIABAAIAGgBQAKgBAGAFIAEADIABABQAEAGACAJIABABIAPAJIABABIAVADIACAAQALAEAHAHIABABIAAABQADAFACAJIACAKIAAACIAGAFIABABIAdALIABAAIAIADIACABQAHAFACAIIABABIABAFIAAACIACAQIAAABIAGAGIABACIAUAIIACABIAIAMIABABIAAAAIABABIAAAWIABAAIAAABIgBABIAAABIgCAHIAAABIABACIABAGIAAABQAIALAMAGIAAABIABAAIACAEIABABIADAQIAAACIgCAHIAAAAIgFASIgBAAIAAACIgDAGIgBACIABACQABAEADAEIABAAIAMAMIABABIgBACIAAABIABAAQgBANgDAOIgBABIAAABIAGAQIgBAEIgBAFIAAAAIACALIAAABIABAOIAAABIgEALQgBAIgEAIIAAACQgBAHgCAGIgBABIgCAEQgHAPgVATIgGAHIgUAHIgBAAQgXgLgXADIgHgDIgMgHQgJgKgDgIIgBgDQgDgOgCgOIgBgFQgEgPAAgOIABgFIAAgEIACgHIAFgYIAAgEIACgLIAAgBIABgBQAEgJgEgHIgCgBIgCgDIgBgCIABgFIABgbIgBgLIAAgBIAAAAIABgBQAAgJgFgFIgFgDIgBgCQgGgFgGABIAAgbIAAgJIgBAAIgMgIIgCgEIgEgDQgBgLgDgHQgCgHgFgFIgBgBIgPgEIgEgCIgFgDIgBgEQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBIgHgBIgagCIgBgBQgGgEgEgFIgBgDIAAgDIgBgBIgBAAQgLABgOADIgBABIgFADIgCAAIgDABIgBgBQgIgBgEgGIgBAAIgBgBIAAAAIgMgLIgBAAQAAgBgBAAQAAAAAAgBQAAAAgBAAQAAAAAAgBIgBAAIgEACIgBABIgFADIgBAAQgKADgHgEIgBAAQgEACgJgEIgBAAIgCgCIAAABIgEABIgCABQgKAGgJACIgBAAIgDADIgGADIAAABIgHAGIgBABIgBACQgDAFAAAEIAAABQACAFgBAIIgBACIgCAFIAAACIgBAEIgCAHIAAABIAAACIACAKIgCADIACACIAAABIACAIQACAKABATIAAACQACAQAEAMIAIAbQAFAOAIAQIATAkIAFARQAGARgHAbQABAJgEAKIgCAGQgLAYgUASIABAGIgDABIgTALIgTALQgOAQgIAMIgBACIggAvQgMAOgMALIgUAEQgWgBgPgJg");
	this.shape_40.setTransform(28.1,32.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AjVEuIgBgBIgCgCQgHAAgHgBIgEgCQgDgEgEgBIgHgFQgDgDgNAGIgJAFIAAAAQgQAGgLABQgJABgJgCIgHgEIgDgBIgCgEIgBgBQgGgJAAgKIAAgOIgEgHIgBAAIAAgBQgBgFgCgEIgHgKIABgBIgBgDIgEgJIAAgBIABgMQAAgHgHgFIgBgCIgGgDIgCgBQgLgGAAgIIAAgDIgBgDIANgPIABgBIAAAAQAIgIADgKIABgBIgDgNIgBgKQABgaATgLIAcgWIAFgFIAAgBQABgIgEgHIABgBIAAgBIgDgRIABgBIACgFIAFgNIAFgIIABAAIABgBIAAgBIABgFQAEgGAOgLIABgCIAAgBIAAgBIABgCQABgIgEgKIgBAAIgBgCQgEgGgBgHIAAAAQgEgHACgJIACgDQAJgGALgDIAEABIACAAIAIABIgBgDIgEgEIAAAAIABgDQAGgRALgGIABgBIABgBQAGgMAKgIIABgBIAJgMIAGgPIABgBQAJgFAHgIIAAgBIAKgFIAAgBIABgBQALgHAOgEIAEgDIABAAIAAAAIAAgBIACgBIABAAIABAAIAAgCQAPgIAPgCIAAAAIADAAIAHgCIABAAIACABIABABQAEABAEgCIABgBQABgFACgDIABgBQADgEAGAAIABAAIABgBIACAAIABAAQAGAOAEgNIAAgCIADgDIABAAIABgBIACgBIACgBIABAAIABgBIACgBIACAAQANgMAPgGIABgCIAEgBIABAAQAGABAGAAIACABIAAAAIADAAIABAAIANABIACABIACgBIABgBQAIADAGgJIABgBQAGgGAIgEIAAAAIABAAIABgBIAAgCQAMgIAOgBIABAAIACAAIABAAIANAGIAAABIAFAFIACABIAIAFIAAABIABAAQAVgGATgEIACAAIABAAIAGgBQAKgBAGAGIADADIABABQAFAGABAJIABACIAPAIIABABIAVAEIACAAQALAEAHAIIAAABIAAABQADAGABAJIACAJIAAACIAHAFIABABQAPAEAOAGIAAABIAIADIADABQAGAFADAIIABABIAAAFIAAACIACAQIABABIAGAGIACABIATAJIACABIAIAMIABABIAAABIAAABIgBAVIABABIAAABIgBABIAAABIgCAGIAAACIAAABIACAHIAAABQAHALAMAGIAAABIABAAIACAEIAAABQADAIAAAIIAAACIgBAHIgBAAIgFASIAAAAIgBACQgBAEgCADIAAABIAAAAIAAACQACAFADADIABAAIAMAMIAAABIAAACIAAABIAAAAQAAAOgEANIgBABIAAABQADAIAEAHIgBAFIAAAEIAAABIAAALIABABIAAAOIAAABIgEAKQgBAJgEAIIgBABQgBAIgDAGIAAABIgDAEQgHAOgXATIgFAGIgVAGIgBAAQgZgNgVABIgHgEIgMgHQgIgKgDgJIgBgDQgCgOgBgOIgBgGQgDgPABgOIAAgEIABgEIACgHIAFgZIAAgEIACgLIAAAAIABgBQAEgKgFgGIgCgBQAAAAAAAAQgBgBAAAAQgBAAAAAAQAAAAAAgBIgBgCIABgGIAAgbIgBgLIAAAAIABgBIAAgBQAAgJgFgFIgFgDIgBgCQgGgFgHACQgBgQABgLIABgJIgCAAIgMgHIgCgFIgCgDQgBgLgEgHQgDgHgFgFIgBAAIgPgFIgEgCIgFgCIgCgEQABgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBAAIgHgBIgagCIgBgBQgGgDgEgGIAAgDIgBgDIgBAAIgBAAQgLgBgOAEIAAABIgFADIgCABIgDAAIgBAAQgIgBgFgFIgBAAIgBgBIgBgBIgLgMIgBAAIgCgDIgBAAIgEACIgBABIgEADIgBAAQgKADgHgEIgBAAQgFADgJgEIgBAAIgCgBIAAABIgEABIgBABQgLAGgJACIgBABIgCACIgHADIAAABIgHAHIgBABIgBABQgCAHABADIgBABQADAFAAAIIgBADIgCAFIAAACIgBAEIgCAHIAAABIAAACIABAKIgBADIABACIAAABIACAIQACAKACATIAAACQACAQAEALIAJAbQAFAOAJAQIASAlQAEAIAAAIQAFARgIAbQAAAJgDALIgCAFQgMAZgTASIACAGIgCABIgUAKIgTAMQgNAPgJANIgBACIggAuQgLAOgMALIgUAEQgXgCgOgKg");
	this.shape_41.setTransform(28.1,32.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AjVEtIgBAAIgDgDQgGABgHgCIgEgBQgEgDgEgBIgHgFQgEgCgNAIIgKAFQgQAHgLABQgJAAgJgCIgGgDIgEgCIgCgDIgBgBQgHgJAAgLIgBgNIgFgIIgBAAIAAgBIgDgIIgHgKIABgBIAAgEIgDgJIAAgBIADgNQAAgIgGgFIgCgCIgGgEIgCgBQgLgGABgJIABgDIgBgCIAMgPIABAAIABgBQAHgIAEgKIAAgBIgDgMIgDgKQgBgaAUgMQAOgKAOgNIAFgEIABgBQgBgIgEgIIAAgBIAAgBIgDgQIABgCIACgFIAFgMQADgDADgFIAAAAIABgBIAAgBIAAgBIACgFQAIgIAQgLIACgDIAAgBIAAgBIABgCQADgIgEgLIgBAAIgBgCQgDgGgBgHIAAgBQgEgHADgJIACgDQAKgFALgDIADABIADAAIAIABIgCgDIgEgEIAAAAIABgDQAFgQAMgHIABAAIAAgCQAIgLAKgIIABgBIAIgNIAGgPIAAgCQAJgEAHgIIAAgBQAEgEAGgCIAAgBIAAgBQALgIAPgEIAEgCIABgBIAAgBIABAAIACgBIABAAIAAgBQAQgIAOgBIABAAIACAAIAIgBIABAAIADACIAAAAQAEACAEgCIACgBIACgIIABgBQADgEAHAAIAAAAIACAAIACAAIABAAQAFAPAEgOIAAgBIADgDIAAgBIABAAIABgBIACgBIABAAIACAAIABgCIACgBIABAAQANgMAPgIIABgBIADgBIACgBIALABIACABIABABIADAAIABgBIANADIACAAIADgBIABgBQAHABAHgHIABgCQAGgFAIgEIAAAAIABgBIABgBIAAgBQAMgIAOAAIABAAIADAAIAAAAIANAHIABABIAEAEIACACIAIAFIAAABQAVgGAUgDIACAAIABAAIAGgBQAKAAAFAFIAEAEIABABQAEAGABAKIABABIAPAIIABABIAVAEIACABQALAEAGAJIABABIAAABQACAGABAJIABAKIAAACIAIAEIABAAIAdALIAAABIAIADIACABQAHAEADAJIAAABIABAFIAAACQAAAIACAHIAAACIAHAGIACABIATAJIACABIAHANIABABIABABIgDAWIABABIAAABIgBAAIAAACIgCAGIAAABIAAACIABAGIAAABQAHAMAMAGIAAABIABAAIACAEIAAABQACAIABAJIAAABIgCAHIAAAAIgFASIAAABIgBABIgDAHIAAABIgBAAIABACQACAFADADIABAAIAMAMIAAABIAAACIAAABIAAAAQgBAOgEAMIgBACQAEAJAEAHIgBAEIAAAFIAAABIAAALIABABQAAAHgBAHIAAABIgEAKQgBAJgEAIIgBABQgCAHgEAHIAAABIgDAEQgIAMgXAUIgGAGIgVAFIgCAAQgagQgTgBIgHgEIgMgIQgIgKgCgJIAAgEIgCgcIgBgGQgBgPAAgOIABgFIABgDIACgIIAFgYIAAgEIABgMIABAAIABgBQAFgJgGgGIgCAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBIgBgCIABgGIAAgbIgBgLIAAgBIAAgBQgBgIgEgFIgFgEIgBgBQgGgFgIACQgBgPACgMIAAgIIgBgBIgNgGIgBgFIgCgEQgBgLgEgHQgDgGgFgFIgCgBIgPgEIgEgCIgGgCIgBgEQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAAAgBAAIgHgBIgaAAIgBgBQgGgEgEgFIAAgEIgBgDIAAAAIgBAAQgMgBgNAFIgBAAIgFAEIgBAAIgEABIgBAAQgIgBgGgFIAAAAIgBgBIgBAAIgKgOIgBAAQAAAAgBgBQAAgBAAAAQAAgBgBAAQAAAAAAAAIgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABIgBABIgFADIgBAAQgJADgIgEIgBAAIAAgBQgEAEgKgDIgBAAIgBAAIgBAAIgEACIgBABQgKAGgJACIgBABIgDACIgGAEIgBAAIgGAIIgBABIgBABQgCAHABAEIAAABQADAFABAIIgBADIgCAFIAAACIgBAEIgBAHIAAABIAAACIAAAKIgCADIACACIgBABIADAIQACAKABATIAAACQACAPAFAMIAKAbQAFANAKAQIARAlQADAJABAIQADAQgIAcQgBAJgDAKIgCAGQgMAZgSARIADAGIgDABIgUAKIgSAMIgWAdIgBABIghAuQgLAOgLAMIgVACQgWgDgOgLg");
	this.shape_42.setTransform(28.1,32.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AjWEtIgBgBIgCgCQgGAAgHgBIgFgBIgHgDIgJgEQgEgCgOAKIgJAFIgBAAQgPAHgMABQgJABgIgDIgHgDIgDgCIgDgDIgBgBQgHgIgCgLIgBgOIgGgHIgBAAIAAgBIgDgJIgGgKIABgBIgBgDIgCgKIABgBIAEgOQABgIgGgGIgCgCIgGgFIgCAAQgLgHACgKIABgDIAAgCIAMgOIABAAIABgBQAHgIAEgKIAAgBIgFgMIgDgKQgEgZAWgNQAOgKAOgNIAFgFIAAgBQgCgIgFgHIABgBIAAgBIgEgRIABgBIACgFIAFgNQADgCADgGIABAAIABgBIgBgBIADgFQAMgLASgMIADgDIAAgBIAAgBIABgCQAEgJgDgLIAAAAIgBgCQgEgGAAgHIAAgBQgDgHADgKIADgCQAJgFALgEIAEABIACABIAJABIgDgDIgFgDIAAgBIABgDQAGgQAMgHIABAAIAAgCQAJgKAKgIIABgBQAFgGADgHIAFgQIAAgCQAJgEAGgJIAAgBQAEgEAGgCIAAgBIAAgBQALgIAOgFIAEgCIACAAIAAgBIAAgBIABAAIACAAIABAAIAAgCQAQgHAPAAIABAAIACAAIAIAAIACAAIACACIABABQAEACAEgCIABgBIADgIIABgBQACgEAHABIABAAIABgBIACABIABAAQAFARADgPIABgCIACgDIABAAIAAAAIABgBIACgBIACgBIABAAIABgBIACgBIACAAQAMgNAPgJIABgBIADgBIACgBIALABIACAAIABABIADABIABgBIAOADIABABIADgCIABgBQAIAAAHgHIABgBQAGgGAIgEIAAAAIABgBIABAAIAAgCQAMgHAOAAIACABIACgBIAAABQAHADAGAEIABABIAEAFIACABIAHAGIABABQAVgGAUgCIACAAIABAAIAGgBQAKAAAFAGIAEAEIAAABQAFAGAAAKIABABIAQAIIABABIAVAFIABAAQALAFAGAKIAAABIAAABQACAHABAJIABAKIAAABIAIAEIABAAQAPAFANAGIABABIAIADIACABQAHAEACAJIABABIAAAFIAAACQAAAIACAHIABACIAIAFIABABIATAKIACABIAHANIABABIAAACQgDAIgBAOIABABIAAABIgBAAIAAACIgDAFIAAACIAAABIACAHIAAABQAGAMAMAGIAAABIABAAIACAEIAAABQACAIAAAJIAAABIgBAHIAAAAIgFASIAAABIgBABIgDAHIgBABIAAABIABABIAFAHIABAAIAMANIAAABIgBACIAAABIAAAAQgBAOgEAMIgBACIAAAAIAJAPIAAAEIgBAFIAAABIAAAMIAAAAIgBAPIgBABIgDAKQgBAIgEAIIgBACQgCAHgFAHIgBABIgDADQgIAMgZAUIgGAGIgWADIgBAAQgbgRgSgEIgHgEIgLgJQgJgLgBgJIAAgDIAAgeIAAgFIAAgeIABgEIAAgEIADgHIAFgZIAAgEIABgLIABAAIABgBQAFgJgHgGIgCAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBIgBgCIABgGIgBgbIgBgKIAAgBIAAAAIAAgBQgBgJgEgFIgFgEIgBgBQgHgFgIADQgBgPACgLIABgJIgCAAQgGgDgGgEIgBgFIgCgEQgBgLgEgHQgEgGgFgFIgCgBIgPgEIgFgBIgGgCIgBgEQAAAAAAgBQAAgBAAAAQAAAAgBgBQAAAAgBAAIgHAAIgbABIAAgBQgGgEgDgGIAAgDIgBgEIgBAAIgBAAQgLgBgOAFIAAAAIgFAEIgCAAIgDACIgBAAQgJgBgGgEIgBAAIgBgBIAAgBIgKgPIgBAAQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAAAgBAAIAAAAIgFABIgBABIgEADIgBAAQgKAEgHgFIgBABIAAgBQgEAFgLgCIgBAAIgBgBIgBABIgDACIgCABQgKAFgJADIgBABIgDADIgGADIAAABIgGAHIgBABIgBACQgCAHABAEIAAABQAEAFACAJIgCADIgBAFIAAACIAAAEIgBAHIAAABIAAACIgBALIgCACIABACIAAABIACAIQACAJACAUIAAACQACAPAFAMIALAaQAGANAJAQQAKAUAHARQACAJABAIQADAQgJAcQgCAJgEAKIgCAGQgMAagRARIAEAGIgDABIgUAKIgSALIgWAdIgBACQgOAVgSAYQgLAOgMAMIgUACQgXgEgOgMg");
	this.shape_43.setTransform(28.1,32.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AjWEuIgBgBIgCgDIgNAAIgFgCIgIgCIgJgEQgEAAgQALIgJAGIgBAAQgOAIgMAAQgJABgJgDIgHgDIgDgCIgDgDIgBgBQgIgHgCgMIgDgOIgGgHIgBgBIAAgBIgCgIIgHgJIABgCIAAgDIgCgLIABgBIAGgPQACgIgGgHIgCgCIgGgFIgCgBQgLgGADgLIACgEIgBAAQAGgGAHgJIABAAIABAAQAHgJADgJIAAgCIgFgMIgFgKQgGgYAXgOQAPgKANgNIAFgEIAAgBQgCgJgGgHIABgBIAAgBQgDgIgCgJIABgBIACgFIAFgNQADgCADgGIABAAIABAAIAAgBIADgHIAkgZIAEgDIAAgBIABgBIABgCQAFgJgCgMIgBgBIgBgBQgDgHAAgHIAAgBQgDgIAEgJIAEgDQAJgEALgDIAEAAIACABIAIABIgDgCIgFgEIAAgBIABgCQAFgRANgGIABAAIAAgCQAJgKALgIIABAAQAEgGADgIQADgIABgJIABgBQAJgFAFgJIAAgCQAEgDAGgDIAAAAIAAgCQALgIAOgFIAEgCIABAAIAAgBIAAgBIACAAIABAAIACAAIAAgCQAQgGAPAAIABAAIADABIAIAAIACAAIACADIABABQAEACAEgCIACAAIACgIIABgBQADgEAGABIABgBIACAAIACABIABAAQAFASACgPIAAgBIADgEIAAAAIABAAIABgBIACgBIACgBIABAAIABgBIACgBIACAAQALgOAPgJIABgBIADgCIABgBIAMAAIACABIABABIADABIACAAIANADIABABIADgCIABgBQAIgCAIgGIABgBIAOgKIAAgBIACAAIAAgCQAMgHAOABIACABIACAAIABAAIAMAIIABABIAFAFIACACIAGAFIAAAAIABABQAVgFAUgCIACAAIABAAIAGAAQAKAAAEAGIAEAEIABABQAEAGAAALIAAABIARAIIABABIAVAFIABAAQALAGAGAKIAAABIAAABQABAHAAAKIABAKIAAABIAJAEIAAAAQAQAEANAHIABAAIAIADIACABQAGAFADAJIABAAIAAAFIAAADQAAAIACAHIAAABIAJAFIACACIASAJIACABIAGAOIABABIAAAAIABACQgEAJgCAOIAAAAIAAABIAAABIAAABIgDAFIAAACIAAABIACAHIAAABQAGAMALAGIAAABIABAAIACAEIAAACQACAIAAAIIAAACIgBAHIgBAAIgFARIAAABIgBACIgDAHIAAABIAAAAIAAABQACAEAEAEIABAAIAMAMIAAABIgBACIAAABIAAABQgCANgEANIgBABIAAABQAFAHAGAHIgBAEIAAAFIAAABIgBAMIAAABIgCAPIgBABIgEAJQAAAJgEAIIgBABQgDAHgGAHIAAABIgEAEQgJALgZATIgHAGIgWACIgBgBQgdgSgRgHIgGgEIgLgKQgIgKgBgKIAAgDIACgeIAAgGQAAgPACgPIAAgEIABgEIADgHIAFgZIAAgEIABgLIABAAIAAgBQAGgJgHgGIgCAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAIgBgCIAAgGIAAgbIgCgLIAAgBIAAgBQgBgIgEgFIgFgEIgBgBQgHgFgIAEQgBgOABgMIACgJIgCAAQgHgDgGgEIAAgFIgBgEQgBgMgFgHQgEgGgGgEIgCgBIgPgEIgFgBIgHgBIgBgEQAAgBAAgBQAAAAgBgBQAAAAAAAAQAAAAgBAAIgHABIgbACIAAgCQgGgEgDgHIAAgDIgBgDIgBgBIAAAAQgMAAgNAEIAAABIgGAEIgBAAIgEACIgBAAQgJAAgGgEIgBAAIgBgBIAAgBIgJgQIgBAAQAAgBAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAIgBAAQgBAAgEACIAAABIgEACIgCAAQgJAEgIgEIgBAAQgDAGgLgCIgBAAIgCgBIgBABIgDACIgCABIgTAJIgBABIgCACIgHADIAAABIgGAJIgBABIgBACQgBAGACAFIAAABQAEAFACAJIgBADIgBAGIAAABIAAAEIgBAIIAAABIAAACIgCAKIgCACIABACIAAABIADAIQACAKABATIAAACQADAQAFALIAMAaIAQAcQAKAVAGAQIACASQACAPgKAdQgCAJgEAKIgCAGQgNAbgPAPIAEAHIgDABIgTAJQgLAGgIAFIgVAeIgBACIghAtIgWAZIgVACQgXgFgNgMg");
	this.shape_44.setTransform(28.1,32.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AjWEtIgBgBIgCgCIgNgBIgFAAIgJgCIgJgDQgFAAgRANIgJAGIAAAAQgOAIgNABQgJAAgJgDIgGgCIgEgCIgDgDIgBgBQgIgHgEgMIgDgPIgGgHIgBAAIAAgBIgDgIIgGgKIABgBIAAgDIgBgMIABgBIAHgQQADgJgGgHIgCgCIgGgFIgCgBQgLgHAEgMIACgDIAAgBQAGgFAHgJIABAAIAAAAQAIgJADgJIAAgBIgHgMIgFgLQgJgXAZgPQAQgKAMgNIAEgFIAAgBQgDgIgGgIIAAgBIAAgBIgFgQIABgCIACgFIAFgMQADgCAEgGIAAAAIABgBIAAgBIAEgGQAUgPAWgOIAEgDIABgBIABgBIABgCQAGgKgBgMIgBAAIgBgCQgCgHAAgIIAAgBQgCgHAFgKIADgCIAVgIIAEABIACABIAIABIgDgCIgGgDIAAgBIABgDQAEgQAOgHIABAAIAAgCIAVgRIABAAQAEgGADgIQACgJABgJIAAgCQAJgEAFgKIAAgBQAEgEAFgDIAAgBIABgBQAKgJAOgFIAFgCIABAAIAAgBIAAgBIACAAIABAAIABAAIAAgBQARgGAQABIABAAIADABIAJABIABAAIADAEIABABQADACAFgCIABAAIACgIIABgBQADgEAHABIABAAIABAAIACABIABAAQAFAUACgQIAAgCIACgDIABgBIAAAAIABgBIACgBIACgBIABAAIACgBIACgBIABAAQALgOAPgKIAAgCIADgBIACgBQAFgBAHABIACAAIABABIADACIACgBQAFADAIABIACABIACgCIABgBQAJgDAIgGIABgBIAOgKIACgBIAAgBQAMgHAPABIABABIACAAIABABIAMAIIABABIAFAFIACACIAGAGIAAABQAWgFAUgBIACAAIABAAIAGAAQAKAAAEAHIAEAEIABABQADAGAAALIAAABIARAIIABABIAVAGIACAAQAKAGAFALIAAABIAAABIABARIAAAKIAAACIAJADIABAAQAQAEANAGIAAABIAIADIADABQAGAFACAJIABAAIAAAFIAAADQAAAIADAHIAAABIAJAFIACABIATAKIABABIAGAOIABABIAAABIAAABQgFAJgCAOIAAABIAAABIgBAAIAAACIgCAFIAAABIAAACIABAGIAAABQAGANALAGIAAABIABAAIACAEIAAACQACAIAAAIIAAACIgBAHIgBAAIgFARIAAABIgBACIgDAGIAAABIgBABIABABQACAFADADIABAAQAHAFAFAHIAAABIAAACIAAABIAAABQgDAOgEALIgBACIAAAAQAFAIAHAHIgBAEIAAAFIAAABIgBAMIAAAAQgBAIgDAIIAAABIgEAJQgBAIgEAIIgBACQgDAHgGAHIgBABIgDADQgKAKgbAUIgGAFIgYABIgBAAQgegVgPgJIgGgEIgLgLQgIgLAAgJIAAgEIAEgfIAAgFIADgeIABgEIABgEIACgIIAFgYIABgEIABgMIABAAIAAgBQAGgJgHgFIgDAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQAAgBgBAAIgBgCIAAgGIgBgbIgCgKIAAgBIABAAIAAgBQgCgJgEgFIgFgEIgBgBQgHgEgJAEQgBgOACgMIABgJIgBAAQgIgCgGgEIAAgFIAAgFQgBgMgFgHQgEgFgHgFIgCgBQgGgCgJgCIgGAAIgHgBIgBgEQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAgBAAIgIABQgLADgPAAIgBgBQgFgEgDgHIAAgDIgBgEIAAAAIgBAAQgLgCgOAFIAAABIgFAEIgCABIgDACIgCAAQgJAAgGgEIgBAAIgBgBIAAgBIgIgRIgBAAQAAgBgBAAQAAgBAAgBQAAAAgBgBQAAAAAAAAIgBAAIgFABIgBABIgEADIgBAAQgJAEgHgFIgBABQgEAHgMgCIgBAAIgCAAIgBABIgDACIgCABIgSAJIgBABIgDADIgGADIAAABIgGAIIgBABIgBACQgBAIACAEIAAABQAGAFACAKIgBADIgBAGIAAABIAAAEIAAAIIAAABIAAACIgDALIgDABIACACIgBABIADAIQACAJABAUIAAACQADAQAGALIANAZQAGAMAKAQQALAVAFARQABAJAAAIQABAPgKAeIgIATIgCAFQgNAcgOAPIAFAGIgCABIgUAKQgLAFgIAGIgVAeIgBACIghAsIgWAaIgVAAQgXgFgMgOg");
	this.shape_45.setTransform(28.1,32.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AiuFAIgJAAIgKgEQgQgHgJgMIgCgDIgFAAIgIAAQgLAAgOgEQgGACgXARIgBABIgBAAQgUAJgTgFQgGgCgGgEIgEgEQgLgLgEgWIAAgCIgHgFIAAgBIgBgCQgDgHgFgHIgBAAIABgCIgBgOIABgCIAIgQQACgJgGgHIgBgCIgGgGIgCgBQgFgDgBgEQgDgHAFgJIAAgBIAGgHIAHgHIABAAIAAgBQAJgIACgIIAAgCIgIgOIgEgHQgDgJABgIQACgIAIgIIAHgFQANgJAJgLIAHgIIAAgBQgFgJgHgHIAAgBIgDgJIgCgJIABgBIAIgRQADgCAEgGIAAAAIABgBIAFgIQAbgSAagQIABgBIABgBIACgCIADgFQAEgIAAgJIAAgBQgDgIAAgJIABgBQgCgHAGgKIAMgGIAMgEIAGABIAIACIgDgDIgGgDIAAgBQACgHADgFIAIgJIABAAIAFgEIACAAIAAgBIAIgHIABgBIAJgHIABAAIABAAIABgCIABAAQAFgHACgIIADgNIAAgBIAAgBIAAgDIAAgBIABgBIABAAIACgBQAGgFAEgIIAAgBQAEgEAFgCIAAgBIAAgCIAOgJIACgBIANgFIABAAIABAAIAAgBIABAAIACAAIABAAIAAgCQAJgDALAAIABAAIATABIACABIAEAAIABABQAEAGAFAAIABAAIACgBIACAAQABgQAQAFIABAAIABADIAAACQADANACgOIAAgBIABgCQACgEAEgBIACgBIAEgBIABAAIAFgEIABgBQAJgLAKgJIAAgBQAHgEAJAAIADAAIABAAIAAAAQABADADAAIACAAQAGADAHABIACABIAHgEIABgBIAcgRIABAAIAAAAIABgCQAOgHARAEIAAAAIAOALIALAMIABABIAUgCIABAAQAPgBAOABQAEAAADABIACABIAFAFQAGAFABAKIAAADIABAFIAAABIAVAKIACABIAPAEIABABQAJAFAFAJIABABIABACIAAACQABAKgBANIABABIAAAEIAAABIAPAGIABAAQAMADAKAFIAAABQAFABAEACIACACQAFAEADAJIABAAIAAABQgCANADAJIABABIACACIABAAIACACIAGADIACABIACABIANAIIACABIAGAPIAAABIAAAAIAAABQgGAKgBAQIgBAAIAAABQgBAEgCABIAAACIAAABQABAKAFAHIABABQADAFAGAEIABAAIAAABIABAAQADAGAAAIIAAABQABAHgCAJIAAAAIgEAPIgBABIgEALIgBAAIADAGIAEADIABAAQAGAGAFAHIAAABQgDAOgFALIgBAEIAAACQAFAIAGAGIgBAEIAAAGQgBAUgLASQgBAJgFAIQgEAHgHAHIgFAEIgsAeIgMAAIgMgBIgSgOIgDgCIgXgUIgFgFQgNgNgDgLIgBgIIAAgEIABgDQADgMACgOIAAgCIACgJIAAgBIAAgBIACgQIAAgIIAAgBIAAgBIAFgOIAFgdIAAgBIAAgJIABAAIABgBQAFgKgIgGQgFABgCgCIgBgCIAAgDIgCgiIAAgBIgBgEIgFgMIgEgFQgHgJgNAGIAAgDQgBgRACgPIgBAAIgKgDIgDgBIgBgBIABgDIAAgCQgBgPgHgIIgEgEIgCgBQgHgFgMgEIgBAAQgHgBgJAAIgBgEQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAAAgBAAIgDABIgBAAIgKACIgBAAIgTADIAAgBIgBgBQgGgFgCgJIAAgBIAAgEIgBAAIgEgBIgCABQgJAAgLADIAAABIgCABIgIAGIgBAAQgHABgGgCIgCAAIgDgCIAAgBIgIgRIgBAAQgBgGgFADIgCABIgBABIgDACIgBAAQgHAEgFgCIgCAAIgCgBIgBAAQgEAJgOgBIgBABIgZARIgGADIAAABIgHANQgBAHADAFIAAABQAGAFADAKIgCAKIAAAFIAAAHIgDAOIgDACIACACIgBABIADAIQACAJACATIABAHQADAMAGAJIAVAmIAJAPIACAEQANAegCAVIgCAQQgHAUgPAgIgBADIgMAXQgHAKgGAHIAGAGIgXALIgSALIgSAaIgEAGIgFAGIgDAFIgjApIgMAMIgCABg");
	this.shape_46.setTransform(28,32.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AiyE/IgJgBIgJgEQgPgHgKgMIgCgEIgFAAIgIAAQgLAAgOgEQgGABgWAPIgBAAQgUAIgRgGQgFgCgFgEIgEgEQgKgMgDgWIgBgBIgHgFIAAgBIgBgBQgCgHgGgGIgBgBIABgBIgCgNIABgCIAGgPQACgJgGgHIgBgCIgGgGIgCgBQgFgDgBgEQgEgHAGgKIgBgBIAGgHIAHgHIABAAIABgBQAIgHADgJIAAgBIgGgOIgDgHQgDgJACgHQABgIAIgIIAGgGQALgIAIgLIAGgJIAAgBQgFgIgHgIIAAgBIgDgIIgBgJIAAgBIAJgRQADgBAEgGIABgCIAFgHQAbgSAagQIAAgBIACgBIACgDIAEgEQADgIABgJIgBgBQgCgHABgJIAAgBQgBgIAGgJIAMgGIAMgFIAGABIAIABIgDgCIgGgDIABgBQACgHADgFQAEgFAEgEIABgBIAFgDIABAAIABgCIAHgGIABgBIAKgHIABgBIAAAAIACgCIABAAQAEgGADgIIADgNIABgBIAAgBIAAgCIAAgCIABAAIABAAIACgCQAGgEAEgHIAAgCQAEgDAFgDIAAAAIABgCQAGgFAHgDIADgBIANgEIABAAIAAgBIAAgBIABAAIACAAIABAAIAAgCQAJgDAKAAIABAAIATABIACABIADAAIACABQADAFAFAAIACAAIACgBIABAAQACgPAPADIABABIACACIAAABQADANADgNIAAgCIABgBQACgDAEgCIACAAIAEgBIABAAIAEgEIACgBQAIgLALgIIABgCQAGgEAJAAIACAAIABAAIAAAAQACACADABIACAAQAGACAHABIACABIAHgEIABAAIAcgPIABAAIAAAAIAAgBQAPgHAQADIABAAIAOALIAMALIAAABIATgBIABABQAPgBAPABQAEAAADACIACABIAFAFQAGAFABAJIAAADIAAAFIAAABIAUALIACABIAPAEIABABQAJAFAGAJIAAABIABACIABABQABAKAAANIAAABIAAAEIAAACIAPAFIABAAQAMAEAKAFIAAABQAFABAEACIACACQAFAFACAIIABABIAAABQgBAMADAJIAAACIACABIABABIABABIAGADIACABIACABIANAJIABAAIAHAPIAAABIAAAAIAAABIAAABQgFAKgCAPIgBABIAAABQgBADgCACIAAACIAAABQACAKAEAHIABABQADAFAFAEIABAAIABABIABAAQACAGABAHIAAABIgBARIgBAAIgEANIgBACIgDALIAAABIADAFIADAEIABAAQAGAGAEAHIAAABQgDANgEAMIgBAEIgBACQAFAIAFAGIAAAEIgBAGQgBAUgMARQgCAJgEAIQgFAHgHAGIgFAEQgOAHgfATIgLgBIgMgBIgRgOIgDgCIgVgVIgFgFQgMgNgDgMIgBgHIAAgEIABgEQADgLACgPIAAgCIACgJIAAgBIAAgBQACgIAAgIIAAgHIAAgBIAAgBIAEgOIAFgdIAAAAIAAgKIABAAIAAgBQAFgKgIgFQgFAAgCgCIgBgBIAAgDIgCgiIAAgBIgCgEQgCgHgDgFIgDgFQgHgJgMAFIAAgDQgCgQABgOIgBAAIgLgDIgCgCIgBgBIAAgDIAAgCQgBgNgHgIIgFgEIgCgBQgHgFgLgEIgBAAIgQgCIgBgDQAAgBAAAAQAAgBAAAAQgBAAAAAAQAAgBgBABIgDABIgBAAIgLADIgBAAIgSACIAAgBIgBgBQgGgFgCgJIAAgBIAAgDIgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBABIgCAAIgUAEIAAAAIgCABIgIAGIgCAAQgGABgGgBIgCgBIgDgBIAAgBIgJgQIgBABQgBgGgFACIgCABIAAABIgDACIgBAAQgHAFgGgBIgBgBIgCgBQgBAAABABQgEAIgNAAIAAABIgYASIgFAEIAAABIgHAMQgBAHACAFIAAACQAGAFADAJIgCALIAAAEIAAAIIgDAOIgCACIABACIAAABIADAIQACAJADATIABAGQADAMAGAJIAVAmIAJAPIACAEQAMAdgEAWIgDAQQgIAUgPAeIgCADQgGANgGAKQgGALgGAGIAFAHIgWALQgKAGgIAGIgSAZIgFAFIgFAGIgDAEIgkAnIgMALIgCACg");
	this.shape_47.setTransform(28,32.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("Ai2E+IgJgCIgIgFQgPgHgKgMIgCgDIgFgBIgIAAQgLAAgOgEQgGABgVALIgBABIAAAAQgSAFgQgGIgJgGIgDgEQgJgNgCgVIgBgBIgHgFIAAAAIgBgCIgJgLIgBgBIABgBIgDgNIABgBIAFgPQABgJgGgGIgCgDIgGgFIgBAAQgFgEgCgEQgDgHAFgKIAAgCIAFgHIAHgIIAAAAIABAAIABAAQAIgHAEgIIAAgCIgFgMIgCgIQgCgIACgHQABgJAHgHIAFgGQAKgIAHgMIAFgIIAAgBIgMgQIAAgBIgDgIIgBgJIAAAAIAJgRQAEgCADgGIABAAIABgBIAFgHQAagSAbgQIAAgCIABgBIADgCIAEgFQAEgHABgJIgBAAQgCgIACgIIAAgBQgBgIAGgKIAMgGIAMgFIAFABIAIABIgDgDIgEgDIAAgBQADgGAEgFIAGgJIABgBIAGgDIABAAIAAgCIAIgGIABgBIAJgIIABAAIABAAIABgCIABgBQAFgGACgHIAFgMIAAgBIAAgBIAAgDIAAgBIABgBIACAAIABgBQAHgFAEgGIAAgCQAEgDAFgCIABgBIAAgBQAGgFAIgDIACgBIANgDIABAAIAAAAIAAgBIACgBIABAAIABAAIAAgCQAJgEAKAAIABABQAJACAJAAIABAAIAEAAIACAAQADAFAFAAIACAAIACgBIABAAQACgPAPACIABABIACACIAAABQAEALACgMIABgBIABgCQACgCAEgCIACAAIADgBIACAAIAEgDIABgBQAJgLALgIIABgCQAGgEAJAAIACAAIABAAIAAAAQACACADAAIACAAIANAEIACAAIAHgDIABgBIAbgMIABAAIABAAIAAgBQAPgHAQADIABABIAOAJQAGAFAGAGIAAABQAKAAAIABIABAAQAPAAAPACQAEAAADABIACABIAFAFQAGAFACAKIAAACIAAAFIAAACIASALIACABIAPAEIACABQAJAFAGAJIAAABIABABIABACQACAJAAANIAAABIAAAEIAAACIAOAGIABAAQAMAEAKAFIAAABIAJADIACACQAFAFACAIIABABIAAABQgCAMADAKIAAABIACABIABABIABABIAGAEIABABIACABIAMAJIACAAIAHAPIAAABIAAAAIAAABQgFALgBAPIgBAAIAAACQgBADgCACIAAABIAAACQABAKADAHIABABQADAFAGADIABAAIAAABIAAABIABAAQADAGABAHIAAABIgBAQIgBABIgEANIgBACIgCALIAAAAIADAGIACADIABABQAGAGAEAHIAAABQgDANgFAMIgBAEIAAABQAEAJAFAGIgBAFIgBAFQgCATgMASQgCAIgFAIQgFAGgIAGIgEADQgPAGgeARIgLgBIgMgBIgRgPIgCgDQgNgMgHgJIgFgFQgKgNgDgMIgBgIIABgDIABgEQADgMACgOIAAgCIABgKIAAAAIAAgBQADgJgBgHIAAgHIAAgBIAAgBIADgOIAFgbIgBgCIABgKIABAAIAAgBQAEgKgHgFQgGAAgCgBIgBgCIgBgCIgBgiIgBgCIgBgDIgFgLIgDgFQgHgKgLAEIgBgDQgCgQAAgNIgCAAIgKgDIgCgCIgBgBIAAgCIAAgCQgCgNgIgHIgFgDIgBgBQgIgGgKgEIgBAAQgHgCgJAAIgBgCQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAIgDABIgBAAIgLAEIgBAAIgTABIAAAAIAAgBQgGgGgCgJIAAgBIgBgDIAAgBQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAIgBAAIgUAEIAAABIgCAAIgIAGIgCAAQgGABgGgBIgCgBIgDgBIgBAAIgIgOIgBAAQgCgFgEACIgCABIgBABIgDACIgBAAQgGAEgGAAIgBAAIgCgBIAAAAQgDAIgMABIAAACIgWASIgFAEIAAABIgGANQgBAHACAFIAAABQAFAFACAKIgBAKIAAAFIAAAHIgCAOIgCACIABACIAAACIACAHQADAKADASIABAGQAEAMAGAJIAVAmIAIAQIACAEQAMAbgHAXIgDAPQgKAUgPAdIgBADIgNAYQgGAKgGAHIAFAGIgVAMQgLAGgHAGQgIAMgLAMIgEAFIgGAGIgDADIglAlIgMALIgCACg");
	this.shape_48.setTransform(27.9,32.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("Ai7E8IgIgCIgIgFQgOgHgLgNIgCgDIgFgBIgHAAQgMAAgNgDQgHAAgTAIIgBABIAAAAQgRACgOgGIgJgHIgCgDQgHgOgCgUIAAAAIgBgBIgHgEIAAgBIgBgBQgDgFgGgFIgBgBIAAgBIgDgMIAAgBIADgPQABgIgGgGIgBgDIgGgFIgBAAQgFgEgCgEQgEgHAFgKIgBgDIAFgHIAHgIIABAAIABAAIAAAAQAJgHAEgIIAAgBIgDgMIgCgHQgBgIADgHQABgJAGgIIAFgFQAIgIAFgMIAEgIIAAgBIgMgQIAAgBIgDgIIAAgIIAAgBIAJgRQAEgCADgFIABAAIABgCIAFgGQAbgTAagPIABgCIABgBIACgCIAEgFQAFgHABgIIAAgBQgCgHACgJIAAgBQAAgIAFgJIAMgHIAMgFIAFABIAIAAIgCgCIgEgDIAAgBQADgGAEgFIAHgJIAAgBIAGgDIABgBIABgBIAHgHIABgBIAJgHIABAAIABgBIABgCIABAAQAFgGADgHIAFgMIAAgBIAAgBIAAgCIAAgBIABgBIACAAIABgBQAHgFAEgGIAAgBQAEgEAGgBIAAgBIAAgBQAHgFAHgCIADgBIAMgDIABAAIABAAIAAgBIABgBIABAAIABAAIABgCQAIgEAKAAIABABQAJAEAIgCIACAAIADAAIACAAQADAEAFAAIACAAIACgBIABgBQADgOAPACIABAAIABACIAAABQAEAKADgLIABgBIABgCIAGgDIACgBIAEAAIABAAIAFgDIABgBQAIgKALgJIABgBQAHgEAIgBIADAAIAAAAIAAAAIAFACIACAAIANADIACAAIAHgCIABgBIAcgKIABAAIAAAAIAAgBQAPgHARADIAAABIAOAJQAHAEAFAGIABABQAKAAAHADIABAAIAeACQAEAAADACIACABIAFAFQAGAFACAJIAAACIAAAFIAAACIARAMIACABIAPAEIABABQAKAFAGAIIAAABIACACIAAABQADAJAAANIAAABIAAAEIAAACIAOAHIABAAQALAEAKAFIABABIAIADIACACQAFAFACAJIABAAIAAABQgCAMACAKIABABIABABIABABIABABIAFAEIACABIABABIAMAJIACABQADAIAEAGIAAABIAAABIABABQgFAKgBAQIgBAAIAAACIgDAFIAAABIgBACQACAKADAHIAAABQADAFAGADIABAAIAAABIAAABIABAAQADAGACAHIAAABIgCAQIgBAAIgEAOIgBACIgBAKIAAABIADAFIACAEIABAAQAGAGADAHIAAABQgDAOgFALIgBAFIAAABIAIAPIgCAFIAAAFQgDASgNASQgCAIgGAIQgFAGgHAFIgFADQgQAEgdAQIgLgCIgLgCQgKgIgHgIIgCgCQgMgNgGgJIgEgFQgKgNgDgMIAAgIIAAgEIABgDQAEgMACgPIAAgCIABgJIAAgBIAAgBQADgIgBgIQgBgDAAgDIAAgBIAAgBIADgOIAEgbIAAgCIAAgKIABAAIAAgBQAEgKgIgFQgFABgCgCIgBgCIgBgBIgCgjIAAgBIgBgDIgGgLIgDgFQgGgKgLADIgBgDQgDgPgBgNIgCAAIgKgDIgCgBIgBgBIAAgDIAAgCQgDgLgIgHIgFgDIgBgBQgIgGgKgEIgBAAQgHgCgIAAIgCgCQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAIgDABIgBAAIgKADIgBAAQgKACgJgBIAAAAIgBgBQgFgGgCgJIgBgBIAAgDIgBgBQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgCAAIgUAEIAAABIgCABIgIAGIgBAAQgHAAgGgBIgBgBIgEAAIAAgBIgJgMIgBAAQgCgFgEADIgCAAIgBABIgDACIgBABQgFAEgGAAIgCAAIgBgBIAAABQgCAIgLACIgBABIgUATIgEAFIAAABIgGAMQgBAHACAFIAAABQAFAGACAJIgCALIAAAEIABAIIgDAOIgBACIABACIAAABIADAIIAGAcIABAFQAEAMAGAJIAVAmIAIAQIACAEQALAagIAXIgFAPIgaAwIgCADIgMAYQgGAKgGAHIAEAHIgUAMIgSAMQgIANgLALIgFAFIgFAFIgDACQgXAUgQAQIgMAKIgCABg");
	this.shape_49.setTransform(27.9,32.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AjBE7IgHgDIgIgFQgNgIgLgNIgCgDIgEgBIgIAAQgMAAgNgDQgHgBgSAGIAAABIgBAAQgPgBgNgGIgIgHIgCgEQgFgOgBgTIgBgBIgHgEIAAAAIgBgBIgKgKIgBAAIAAgBIgEgMIAAgBIACgNQAAgIgGgHIgCgCIgFgEIgBgBQgFgEgCgEQgEgHAEgKIAAgFIAEgGIAHgIIACAAQAJgHAFgHIAAgBIgCgMIAAgHQAAgIACgGQABgJAGgIIADgFQAIgIADgMIADgIIAAgBIgMgQIAAgBIgDgIIAAgIIABgBIAJgRQADgBAEgFIAAAAIACgCIAFgHQAbgSAagQIABgBIABgBIACgCIAFgFQAEgGACgJIAAgBQgCgHACgIIABgBQAAgIAFgJIAMgHIALgGIAGAAIAHABIgBgDIgDgDIAAAAQADgGAEgFIAGgJIABgBIAFgDIACgBIAAgBIAIgHIAAgBQAEgEAGgDIAAgBIABAAIACgCIABgBQAEgFADgHIAGgMIAAgBIAAgBIABgCIAAgBIABgBIABAAIACgBQAGgEAFgGIAAgBQAEgDAGgCIAAgBIAAgBIAPgGIACgBQAGAAAHgCIABAAIAAAAIAAgBIABgBIABAAIABAAIABgCQAIgEAKAAIABAAQAJAGAHgDIACAAIADAAIACgBQADAEAFAAIACAAIACgBIABgBQADgOAOABIABABIACABIAAABQAEAJAEgKIABgBIABgCIAFgDIACAAIAEAAIACAAIAEgDIABgBQAJgKAMgIIAAgCQAHgEAIgBIACAAIABAAIAAAAQACACADAAIACgBIANADIACABIAHgDIABAAIAbgIIABABIABgBIAAgBQAPgGARACIAAABIAOAIQAHAEAFAGIABAAIAAABQAKABAHADIAAABIAfACIAHACIABABIAGAFQAGAFABAJIAAADIABAFIAAABIAQANIABABIAPAEIACABQAJAFAGAIIABABIACACIAAABQADAIABANIAAABIAAAEIAAACIANAIIABAAQALAEAKAFIABABIAIAEIACABQAFAFACAJIABAAIAAABQgCAMACAKIAAABIABACIABAAIABABIAEAEIACABIABACIAMAJIACABIAHAOIAAABIAAAAIAAAAIAAACQgDAKgCAPIgBABIAAABIgDAGIAAABIAAACQABAKACAHIABABQADAFAFADIABAAIABABIAAABIABAAQADAGABAGIAAABIgBARIgBAAIgEANIgBACIgBALIAAABIADAEIADAEIAAABQAFAGAEAHIAAABQgDAOgFALIgBAFIgBABIAHAPIgBAFIgBAEQgDASgOASQgDAIgGAIQgFAFgHAFIgFADQgRACgcAOIgLgCIgLgCIgQgRIgCgCQgLgNgFgKIgEgFQgJgNgCgNIgBgHIABgEIABgEQADgMACgPIAAgBIABgKIABAAIAAgBQACgJgBgHIgBgGIAAgBIgBgBIAEgPIADgaIAAgCIAAgKIAAAAIABgBQADgKgIgFQgFABgCgCIgBgBIgCgCIgBgiIAAgBIgBgDIgHgLIgCgFQgGgKgLADIAAgDIgGgbIgCAAIgKgDIgCgCIgBgBIAAgDIgBgBQgDgLgJgFIgFgDIgBgCIgRgKIgBgBIgPgBIgCgCQAAgBAAAAQAAgBAAAAQgBAAAAAAQgBAAAAAAIgDABIgBAAIgKAEIgCAAQgJABgJAAIAAgBIgBgBQgFgGgDgJIAAgBIAAgDIgBgBIgFAAIgBABIgUADIAAABIgCABIgIAGIgCAAQgGABgGgCIgCAAIgDgBIAAAAIgKgLIgBAAQgBgEgFACIgCABIAAABIgDACIAAAAQgHAFgGAAIgBAAIgBgBIAAABQgBAIgKADIAAABIgTAUIgEAFIAAABIgGANQgBAHACAEIAAACQAFAFACAJIgCALIAAAEIAAAIQAAAIgBAGIgCADIACACIgBABIADAIIAIAbIABAGQAEALAGAJQAJAPALAXIAJAQIACAEQAJAZgKAYIgFAPIgcAvIgBACIgMAYIgMASIAEAGIgUANIgSANQgJAMgLALIgEAEIgGAEIgDADQgYASgQAPIgMAKIgDABg");
	this.shape_50.setTransform(28,32.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AjGE5IgGgDIgHgGQgNgHgLgOIgCgDIgFgBIgIAAQgLAAgOgDQgGgBgRADIgBAAQgOgDgMgGIgGgHIgCgEQgDgOgBgTIAAgBIgBgBIgGgCIgBgBIgBAAQgEgEgGgFIgCgBIAAgBIgFgKIAAgBIAAgNQAAgHgGgHIgBgCIgGgEIgBgBQgFgEgCgEQgDgHADgKIAAgGIAEgHQACgEAFgDIAAAAIABAAIABgBQAJgGAFgGIABgCIgBgLIAAgHIADgNQABgJAGgIIACgFQAHgIABgMIADgIIgBgBIgMgQIAAgBIgDgIIABgIIAAgBIAKgQQAEgCADgFIACgBIAFgHQAbgTAagPIABgBIABgBIADgDIAEgEQAFgGACgJIAAAAQgBgHACgJIABgBQABgIAFgIIALgIIALgGIAGAAIAHAAIgBgCIgCgDIAAgBQADgGAFgDIAFgKIABgBIAGgEIABAAIAAgBIAIgHIAAgCQAEgEAGgDIAAAAIABgBIACgCIABAAIAIgMIAGgLIAAgBIAAgBIABgCIAAgBIABgBIABAAIACgBQAGgEAFgGIABgBQAEgDAFgBIABgBIAAgBIAOgGIADAAQAFAAAHgCIABAAIABAAIAAgBIABAAIABgBIABAAIAAgCQAIgFAKABIABAAQAJAHAHgEIABAAIADgBIACAAQADADAGAAIABAAIACgBIABgBQAEgOAOABIABAAIABABIABABQAEAIAEgKIABgBIABgBIAGgCIABgBIAEAAIACAAIAEgCIABgBQAKgKALgIIABgBQAGgEAJgBIACgBIAAAAIAAAAIAGABIACAAIANADIABAAIAHgCIABgBIAcgFIAAABIABgBIAAgBQAPgGARADIABAAIAOAIQAHADAFAHIABABQAJABAHAEIAAAAIAfAEIAHACIABAAIAGAGQAGAFABAJIAAACIABAFIAAABIAOAOIACABIAPAEIACABQAJAFAHAIIAAAAIACACIABABQADAJABAMIAAABIAAAFIAAABIAMAIIABABQALAEAKAFIABABIAIAEIACABQAFAGADAIIAAABIAAAAQgCAMABAKIABACIABABIAAABIACABIADAEIACABIABABIALAKIACABQADAHAEAGIAAABIABAAIAAABIAAABQgDALgCAPIgBAAIAAACQgBADgCACIAAACIAAACQAAAJADAIIAAAAQADAGAFADIABAAIABABIAAABIABAAQADAGACAGIAAABQAAAIgCAHIAAABIgFAOIAAACIgBAKIAAABIADAFIADAEIAAAAQAFAHADAHIAAABQgDAOgFALIgBAEIgBACIAGAPIgCAFIgBAEQgDARgPASQgDAIgGAIIgNAJIgFADQgSAAgaAMIgMgCIgKgDQgKgJgGgIIgCgDQgJgNgFgKIgEgFQgIgOgCgMIAAgIIABgDIABgEQADgMACgPIAAgCIABgJIAAgBIABgBQADgJgCgHIgCgGIAAAAIAAgCIACgOIADgaIAAgCIAAgKIABAAIAAgBQACgKgHgEQgFAAgDgCIgBgBIgCgBIAAgiIgBgBIgBgDIgHgKIgCgFQgFgLgLACIAAgDQgEgPgEgLIgCAAIgKgDIgCgCIgBgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAIgBgCQgEgJgJgFIgFgDIgBgBIgQgMIgBAAQgHgBgIAAIgCgCQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAIgDABIgBABIgKAEIgBAAIgTAAIAAgBIAAgBQgGgGgCgJIAAAAIgBgEIAAAAQgBAAAAgBQgBAAgBAAQAAAAgBAAQgBABAAAAIgCAAQgKADgKABIAAAAIgCABIgIAGIgBAAQgGABgHgCIgBAAIgDAAIgBgBIgKgJIgBAAQgCgEgDADIgCAAIAAABIgEACIAAABQgHAFgFAAIgCABQAAAHgJAEIgBABIgRAVIgEAFIAAABIgFANQAAAHABAFIAAABQAEAGACAJIgBAKIAAAFIAAAIIgBAOIgCADIACACIAAABIACAIIAJAbIABAFQAFALAGAJQAJAPAKAXIAJAQIABAEQAKAZgNAYIgGAOQgOAUgPAaIgBADIgMAYIgMASIADAGIgTAOIgRAMQgKANgLAKIgEADIgGAEIgEACQgZARgPAOIgNAJIgDACg");
	this.shape_51.setTransform(28,32.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AjKE5IgHgEIgGgHQgMgHgMgOIgCgDIgEgCIgIAAQgMAAgNgCQgHgCgPAAIgBABIAAAAIgXgMIgFgIIgBgEQgDgPAAgSIAAAAIAAgBIgHgDIgBAAIgBAAIgLgIIgBAAIAAgBIgGgKIAAgBIgCgMQgBgHgGgGIgBgCIgGgFIAAAAQgFgEgDgFQgDgHADgKIgBgGIAEgHQADgFAEgDIABAAIACAAQAJgGAFgGIABgCIABgKIABgHIAEgMQABgJAFgJIACgFQAEgIABgMIABgIIAAgBIgMgQIAAgBIgEgHIABgIIABgCIAKgPQAEgCADgFIABAAIABgBIAFgHQAcgSAagQIAAgBIACgBIACgCIAFgEQAFgHACgIIAAgBQAAgGACgIIABgBQABgJAFgIIALgIIALgGIAGAAIAHgBIgBgCIgBgDIAAgBQAEgFAEgEIAGgKIAAgBIAGgDIABgBIABgBIAHgHIAAgBIAKgIIAAAAIABgBIACgCIABAAIAIgMIAHgLIAAAAIAAgBIABgCIAAgBIABgBIABAAIACgBQAGgEAGgFIAAgBIAKgEIAAgBIABgBIAOgFIACAAQAGABAHgCIABAAIAAAAIAAgBIABgBIABAAIABgBIABgBQAHgFALABIABAAQAIAIAGgFIABgBIAEAAIABgBQAEADAFAAIABAAIACgCIACgBQAEgNANAAIABAAIACABIAAAAQAFAHAEgIIABgBIABgCIAAABIAGgDIACAAIADAAIABAAIAFgCIABAAQAKgKAMgIIABgBQAGgEAIgCIACAAIABgBIAAABIAFABIACgBIANADIACAAIAHgCIABgBIAbgCIABAAIAAAAIABgBQAPgGAQACIABABIAOAHQAIADAFAGIABABQAJACAFAFIABABIAfAEIAHACIABAAIAGAGQAGAFACAJIAAACIAAAFIAAABIANAPIABABIAQAEIABAAQAKAFAHAIIAAABIACABIABABQAEAIABANIABABIAAAEIAAACIALAJIABAAQALAEAKAGIABAAIAIAEIACABQAEAGADAJIAAAAIAAABQgCAMABAKIAAABIABACIABAAIABABIADAEIABACIABABIALAKIACABQADAHAFAGIAAABIAAABIAAABIgEAaIgBAAIAAACIgDAGIAAABIAAACIACARIAAABQADAFAFADIABAAIABABIAAABIABAAQAEAGABAGIAAABIgCAQIAAAAIgEAOIgBACIAAAKIAAABIAEAFIABAEIABAAQAEAHADAHIAAABQgDAOgFALIgBAFIgBABIAFAQIgCAEIgBAFQgEAQgQASQgDAIgGAHIgOAJIgFACQgSgBgaAKIgLgDIgKgDQgLgKgFgIIgCgCQgIgNgEgLIgEgGQgHgNgBgNIAAgIIAAgDIABgEQAEgMACgPIAAgCIABgJIAAgBIAAgBQAEgJgDgHQgCgCAAgDIAAgBIAAgBIACgOIADgaIgBgDIAAgJIABgBIAAgBQACgJgHgFIgIgBIgBgBIgCgBQgCgVABgNIAAgBIgCgDIgHgJIgCgGQgFgKgJABIgBgDQgEgPgGgKIgCAAIgKgDIgCgCIgBgBIAAgDIgBgBQgFgIgJgFIgFgCIgBgBIgQgMIgBgBIgPgBIgCgBQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgDABIAAAAIgLAFIgBAAQgKABgJgBIAAgBIAAgBQgFgGgDgJIAAgBIgBgDIAAgBQgCgBgDABIgCABQgKADgKAAIAAABIgCAAIgIAGIgBAAQgGABgGgBIgCAAIgDAAIAAAAIgLgJIgBABQgBgDgEACIgCAAIAAABIgEACIAAABQgGAFgGABIgBABQAAAHgIAFIAAABIgPAWIgEAFIAAABIgFANQAAAHABAFIAAABQAEAGABAJIgBAKIAAAFIAAAIIgBAOIgBADIACACIAAABIADAIIAJAbIABAFQAFALAGAIQAKAQAKAXQAFAHACAIIACAEQAJAYgPAZIgHAOQgPAUgPAZIgCACIgLAZIgMASIADAGIgTAOIgRANQgJANgMAJIgFADIgGAEIgDABQgbAQgPANIgNAJIgCABg");
	this.shape_52.setTransform(28,32.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AjPE3IgGgEIgGgHQgLgIgMgOIgCgEIgFgBIgIAAQgLAAgOgCIgUgFIgBAAIgVgOIgEgIIAAgFQgBgPABgRIAAgBIgBgBIgHgCIAAAAIgCAAIgLgGIgCgBIAAgBIgHgJIAAAAIgDgMQgCgGgGgHIgBgCIgFgEIgBAAQgFgEgCgFQgEgIADgJIgBgIQACgEACgDQACgFAFgCIABAAIABAAIAAgBQAKgFAGgGIABgCIACgJIACgHIAFgLQABgKAEgJIABgEQADgIgBgNIABgIIgBgBIgMgPIAAgBIgEgIIACgHIABgCIAKgPQAEgCADgFIABAAIABgBIAGgHQAbgSAagPIABgCIABgBIADgCIAFgEQAFgFACgJIABAAQAAgHACgIIABgBQACgIAFgJIALgIIAKgGIAGgBIAHgBIAAgCIgBgDIAAAAIAJgJIAFgKIAAgBIAGgEIABAAIABgCIAHgHIAAgBQAEgEAGgDIAAgBIABgBIACgBIABgBIAIgLIAIgLIAAAAIAAgBIAAgBIABgBIAAgBIABAAIABAAIACgBIAMgJIAAgBIAKgEIABgBIAAAAQAHgDAIgBIACgBQAGACAHgCIABAAIAAAAIAAgBIABgBIABgBIABAAIAAgCQAHgFALACIABAAQAIAIAGgGIABAAIADgBIABAAQAEACAFgBIACAAIACgBIABgBQAEgNANgBIABAAIACAAIABABQAEAGAFgIIABgBIACgBIAAABIAFgCIABAAIAEAAIABAAIAGgCIABgBQAKgJALgIIABgBQAHgEAHgCIACAAIABgBIAAABIAGAAIACAAIANACIABAAIAHgCIABAAIAbAAIABAAIABAAIAAgBQAPgGARACIAAAAQAIADAHAEQAIADAEAHIABAAIAAAAQAJADAFAFIABABIAfAFIAHACIABABIAGAFQAGAFACAIIAAACIAAAGIAAABIAMAQIABABIAPADIACABQAKAFAHAHIABABIACACIABABQAEAHACANIAAAAIAAAFIAAACIAKAJIABABQALAEAKAFIABABIAIAEIACABQAFAHACAHIABACIAAAAQgDAMABAKIAAABIABABIAAABIABACIADADIABABIABACIAKAKIACACQADAHAFAFIAAABIAAAAIAAABIABABIgEAaIgBABIAAABIgDAGIAAACIAAACQAAAKABAGIAAABQADAGAFADIABAAIABABIABABIABAAIAFAMIAAABIgDAPIAAABIgEANIgBACIABALIAAABIAEAEIABAEIABABQAEAGACAIIAAABQgDANgFAMIgBAFIgBABIAEAQIgCAEIgCAFQgDAPgSASQgDAIgHAHIgOAIIgFACQgTgDgZAIIgLgEIgKgDQgKgKgFgIIgBgDQgIgNgDgLIgDgHQgHgNgBgNIABgHIAAgEIABgEQADgMACgPIAAgBIACgKIAAgBIAAgBQAEgIgDgHQgCgDgBgCIAAgBIAAgBIACgPIACgaIAAgCIgBgJIABgBIAAgBQABgJgHgFIgIgBIgBAAIgCgBQgBgVABgOIgBgBIgBgCIgIgJIgCgGQgEgLgJABIgBgDQgFgOgHgKIgBAAIgLgDIgCgCIAAgBQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAAAAAAAIgBgBQgFgIgKgEIgFgCIgBgCIgPgMIgBAAQgHgCgIABIgCgBQgBgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgCABIgBABIgKAEIgCAAQgJABgJgBIAAgBIAAgBQgGgGgCgKIgBAAIAAgDIgBgBQgCgBgDACIgBAAQgKADgKAAIgBAAIgBABQgEAEgEACIgCAAQgFABgHgBIgBAAIgDAAIgBAAIgKgHIgBAAQgCgCgEACIgCAAIAAABIgEACIAAABQgGAFgGACIgBAAIABABQABAHgHAGIAAABIgOAXIgDAFIAAABIgFAOQAAAGABAFIAAABQADAGACAJIgBALIAAAEIAAAIIgBAOIgBADIACACIAAACIADAHIAKAbIABAFIAMASQAKARAJAWQAFAIACAIIACAEQAIAYgRAZIgHANQgRAVgPAXIgCADIgLAXIgMATIACAGIgSAPIgQANQgKANgMAJIgFADIgGACIgEAAQgbAQgPAMIgOAIIgCABg");
	this.shape_53.setTransform(28,32.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AjVE2IgFgFIgFgHQgKgIgNgPIgCgDIgFgCIgHAAQgMAAgOgCIgTgIIgBAAQgKgLgIgGIgCgIIgBgEIACghIAAgBIAAgBIgHgBIAAAAIgCAAIgMgFIgCgBIAAAAIgIgIIAAgBIgFgLQgCgHgGgGIgBgBIgFgFIgBAAQgFgEgCgFQgEgHACgKIAAgIIADgIQACgFAFgDIABAAIABAAIABAAQAJgFAHgFIABgBIAEgKIACgGIAGgLQABgJAEgJIAAgFQACgHgDgNIAAgIIgBgBIgMgPIAAgBQgDgFgBgEIACgHIABgCIALgOQAEgCADgEIACgCIAGgGQAbgTAagPIABgBIABgBIADgDIAFgDQAFgGADgIIABgBQAAgGADgIIABgBQACgIAFgJIALgIIAKgHIAFgBIAIgBIAAgCIAAgDIAAAAQAEgFAFgDIAFgLIAAgBIAGgDIABgBIABgBIAGgIIABgBQAEgEAFgDIABgBIADgDIABAAIAIgLIAIgKIABAAIAAgBIAAgBIABgBIAAgBIABAAIABAAIABgCQAHgDAGgFIAAgBIALgDIAAAAIABgBQAHgDAHgBIACAAQAGACAHgCIABAAIAAAAIABgBIABgBIABgBIAAgBQAHgGALACIABAAQAHAKAGgHIABgBIADgBIABAAQAEABAFAAIACAAIACgCIABgBQAFgNAMgBIABAAIACAAIABAAQAEAFAGgHIABgBIABgBIAAABIAFgCIABAAIAFABIABAAIAGgCIABAAIAVgRIACgBQAGgEAHgCIACgBIABAAIAGAAIACAAIANABIABABIAHgCIABAAIAbACIABAAIAAAAIABgBQAPgFARACIAAAAIAPAGQAIADAFAGIABABQAIADAFAGIAAABIAfAGIAHACIACAAIAGAGQAFAFACAIIAAACIABAGIAAABIALAQIABABIAPAEIACABQAKAEAHAHIABABIACABIABACQAFAHABAMIABABIAAAFIAAACIAJAJIABABQALAEAKAGIABABIAIADIACABQAEAHADAIIABABIAAABQgEALABALIAAABIABABIAAABIABABIACAEIABABIABACIAKALIABABQAEAHAFAGIAAABIAAAAIABABIgEAaIAAABIAAACIgDAGIAAABIgBACIABARIAAABQADAFAFADIABAAIABABIAAABIABABQAEAFACAGIAAABIgDAPIAAABIgEANIgBACIACALIAAAAIADAFIACAEIAAAAIAAABQAEAHACAHIAAABQgDAOgGALIAAAFIgBABIACAQIgCAFIgCAEQgEAOgSATQgEAHgGAHIgPAHIgFACQgUgFgYAGIgLgDIgJgEQgLgKgEgJIgBgDQgHgNgDgMIgCgGQgGgOgBgNIABgHIABgEIABgEIAFgbIAAgCIABgJIABgBIAAgBQAEgJgEgHQgCgBgBgDIAAgBIAAgBIACgOIABgaIAAgDIgBgJIABgBIAAgBQAAgJgHgEIgHgBIgCgBIgCAAQgCgVACgOIgBgBIgBgCIgIgJIgCgFQgEgLgJgBIgBgDQgFgNgIgKIgCAAIgKgCIgCgCIgBgBQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIgCgBQgFgGgKgEIgGgBIgBgCQgHgFgHgIIgBAAQgHgBgIAAIgCgBQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBABIgCABIgBAAIgKAFIgCAAQgKABgIgBIAAgBIAAgBQgFgHgDgJIgBAAIAAgEIgBAAQgCgCgDACIgBAAQgLAEgKAAIAAAAIgCABQgDADgEADIgCAAQgFABgHgBIgBAAIgDAAIgBAAIgKgFIgBAAQgCgCgFACIgBABIgBABIgDACIgBAAQgFAFgGACIAAABIAAABQACAGgGAHIAAACIgMAXIgDAGIAAABIgEANQAAAHABAFIAAABQADAGABAJIgBAKIAAAFIAAAIIAAAOIgBADIABACIABACIADAHIAKAbIACAEIAMATQALARAHAWQAFAHADAJIABAEQAIAWgTAaIgIANQgSAUgPAXIgCACIgMAYIgLATIABAGIgRAQIgQANQgLANgLAHIgFADIgHACIgDAAQgdAOgPAMIgOAHIgDABg");
	this.shape_54.setTransform(28,32.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AjaE0IgEgFIgFgIQgKgHgMgQIgDgDIgEgCIgIAAIgZgCIgSgLIgBAAQgJgOgGgGIgCgIIAAgFIAEggIAAgBIAAgBIgHAAIAAAAIgCAAIgNgFIgBAAIgBgBIgIgHIgBgBIgGgKQgDgGgGgGIgBgCIgFgEIgBAAQgEgEgDgFQgEgHACgKIgBgJIADgIQACgFAFgDIABAAIABAAIABAAQAKgFAHgFIABgBIAFgJIADgGIAIgLQAAgJAEgIIgBgFQABgHgFgOIgBgIIAAgBIgNgOIAAgBQgDgGgBgDIADgIIABgBIALgOQAEgCADgEIACgCIAGgGQAbgTAagPIABgBIABgBIAEgCIAEgEQAGgFAEgIIAAgBIAEgOIABgBQACgIAGgIIAKgJIAKgHIAFgBIAHgCIABgCIABgCIAAgBQAEgFAGgCIAEgLIAAgBIAGgEIABAAIABgCIAGgHIABgCIAJgHIAAAAIABgBIADgDIABAAIAIgKIAJgKIABAAIAAgBIABgCIAAAAIABgBIABAAIABgBIANgIIABgBQAEgCAGAAIABgBIAAgBQAHgCAIAAIACAAQAFACAHgCIACAAIAAAAIABgBIAAgBIABgBIAAgCQAHgFALABIABABQAHALAFgIIABgBIADgBIACgBQADABAFAAIACAAIACgCIABgBQAFgNANgCIABAAIACAAQAFAEAGgGIABgBIABgBIAFAAIABgBIAFABIABAAIAGgBIABAAIAWgRIABgBQAGgEAIgCIACgBIAAAAIAGAAIACgBIANACIACAAIAHgBIAAgBIAbAFIABAAIAAAAIABgBQAPgFARACIABAAIAOAFQAIADAFAGIABABQAIAEAFAHIAAABIAfAGIAHACIACABIAGAFQAFAFACAJIAAACIABAFIAAABIAJAQIABACIAQAEIABABQAKAEAIAHIABAAIACACIABABQAGAHABAMIABABIAAAFIAAACIAJAKIAAABQAMAEAKAGIAAABIAJADIABABQAEAHADAIIABABIAAABQgEAKAAAMIABABIABACIgBAAIABABIACAEIABACIABABQAEAGAFAFIABACQAEAGAFAGIAAABIABAAIAAACIgDAaIAAAAIAAACIgBAAIgCAGIgBACIAAACIAAARIAAAAQADAGAFADIABAAIABABIAAABIABABQAEAFACAFIAAABIgCAQIgBAAIgEAOIgBACIADAKIAAABIADAEIACAEIAAABIAAAAQADAHACAIIAAABQgDANgGAMIAAAEIgBACQABAIAAAIIgDAFIgBAEQgFANgTATIgLAOIgPAGIgFACQgVgHgXAEIgKgEIgKgEQgKgKgEgJIgBgDQgFgOgDgMIgCgGQgEgOgBgNIAAgIIABgDIABgEQAEgNACgPIAAgBIABgKIAAgBIABgBQAEgJgEgGQgDgBgBgEIAAAAIAAgCIABgMIACgbIgBgDIgBgJIABgBIAAgBQAAgJgHgEIgIgBIgCgBIgCAAQgCgUACgOIgBgBIgBgCIgJgIIgBgGQgDgLgJgBIgBgDQgFgOgKgJIgCAAIgKgCIgCgCIgBgBQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIgCAAQgGgFgKgEIgGgBIgBgBQgIgGgGgIIAAgBQgHgBgJABIgCgBQAAgBgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAIgDABIgBABIgKAFIgBAAQgLABgIgCIAAgBIAAgBQgFgHgDgJIAAAAIgBgEIAAAAQgCgCgEACIgBABQgLAEgKgBIAAAAIgCABQgDADgEADIgBAAQgGABgHgBIgBAAIgDAAIgBAAIgKgDIgBAAQgDgCgEADIgBAAIgBABIgEACIAAABQgFAFgFACIgBACIAAgBIABABQACAGgEAIIgBACIgKAYIgCAHIAAABIgEAMIAAAMIAAABQADAHABAIIgBALIAAAEIAAAIIAAAPIAAADIABACIABACIADAHIALAbIACAEIAMASQALARAHAWQAFAHADAJIABAEQAHAVgWAbIgIAMQgTAVgQAVIgCACIgLAZIgLASIABAHIgRAQIgQANQgLAOgLAGIgGACIgGACIgEAAQgeAMgPALIgOAHIgDABg");
	this.shape_55.setTransform(28,32.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AjfE0IgDgFIgFgIQgJgJgNgPIgDgEIgEgBIgHAAIgagDQgHgDgJgKIgBgBIgNgXIAAgJIAAgEIAHghIAAAAIgBgBIgGABIgBAAIgCAAIgNgDIgCgBIgBAAIgJgHIgBAAIgHgKQgEgGgGgGIgBgCIgEgDIgBgBQgFgEgCgFQgEgHABgKIgBgKIADgIQACgFAFgDIABAAIABAAIABAAQAKgEAHgFIABgBIAHgJIAEgFIAIgLQABgJADgJIgCgEQAAgHgHgOIgBgIIgBgBIgNgOIAAgCQgDgEgBgFIAEgGIAAgBIAMgOQAEgCADgEIACgCIAGgGQAcgTAZgOIABgCIACgBIADgCIAFgDQAGgFAEgJIAAAAQACgHADgHIABgBQADgIAFgIIAKgJIAKgIIAFgBIAHgCIACgCIABgDIAAAAQAFgFAFgCIAEgLIAAgBIAGgDIABgBIABgCIAGgHIABgCQAEgEAFgCIAAgBIABgBIADgDIABgBIAIgJIAKgJIABAAIAAgBIAAgBIABgBIAAAAIABgBIABAAIABgCIANgGIABgBQAFgCAGgBIAAAAIABgBQAHgCAIAAIACAAQAFAEAHgCIABAAIABgBIAAgBIABgBIAAAAIABgCQAGgHALACIABABQAHANAFgKIABgBIACgCIACAAIAJAAIABAAIACgCIABgBQAGgMAMgEIABABIACgBQAFADAHgFIAAgBIACAAIAFAAIABgBIAFABIABAAIAGAAIACAAQAKgJALgIIACgBQAGgEAHgDIACAAIAAgBIAGAAIACgBIANABIACABIAHgBIABAAQAOACAMAEIABABIABAAIAAgBQAQgFAQABIABAAIAPAFQAIACAFAHIAAAAIABABQAIADAEAIIAAABIAfAIIAHABIACABIAGAGQAFAFACAIIAAACIABAFIAAABIAIARIABACIAPAEIACABQAKAEAJAGIAAABIACABIABACQAHAGACAMIAAACIAAAEIAAACIAIALIABABQALAEAKAGIABABIAIADIACABIAHAPIAAABIAAABQgEAKAAANIAAABIABABIAAAAIABACIABAEIAAABIABACQAEAGAFAFIABABQAEAIAFAFIAAABIABAAIABABIgDAbIAAAAIAAACIgBAAIgCAHIgBABIAAACIgBARIAAAAQADAGAFADIABAAIABABIABABIABABIAGAKIAAABIgDAQIAAABIgFAMIAAACIADALIAAABIADAEIACADIAAACIAAAAQADAIABAHIAAABQgDAOgGALIAAAFIgBACQABAHgBAJIgDAEIgCAEQgEANgVASQgEAHgHAHIgQAFIgFACQgWgIgVACIgLgFIgJgEQgKgLgEgKIgBgDQgEgNgCgNIgBgGQgEgPgBgNIABgGIABgFIABgDIAFgcIAAgBIACgLIAAAAIABgBQAEgJgFgGQgDgCgBgDIAAAAIAAgBIABgNIABgbIAAgDIgCgJIABgBIAAAAQgBgKgHgEIgHgBIgCAAIgDAAQgBgUACgPIgBAAIgCgCIgJgIIgBgFQgDgMgIgCIgBgDQgGgNgLgJIgBAAIgLgBIgCgDIAAgBQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAIgCAAQgHgFgKgCIgGgBIgBgCQgIgFgFgJIgBAAQgHgCgIABIgDgBQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAABIgDABIAAABIgLAEIgBAAQgKACgIgDIAAgBIgBgBQgEgGgDgKIgBAAIAAgDIgBgBQgCgBgEACIgBAAQgKAFgKgCIgBAAIgBABQgDAEgFACIgBAAQgGACgGgCIgBAAIgDABIAAAAIgMgCIgBABQgDgCgEACIgBABIgBABIgEACIAAABQgFAFgFADIgBABIABAAIABABQADAGgEAJIAAACIgIAYIgDAHIAAABIgDANIAAAMIAAABQADAGABAJIgCALIAAAEIABAHIAAAQIAAADIABACIABACIADAHIAMAaIACAEIAMASQAMASAGAVQAFAIADAIIABAEQAGAVgYAbIgJAMQgUAUgQAVIgCACIgLAYQgGALgFAIIAAAGIgQARIgPAOQgMANgLAGIgGACIgHABIgDgBQggAMgPAKIgOAGIgDABg");
	this.shape_56.setTransform(28,32);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AjjE1IgDgHIgFgIIgVgZIgDgDIgEgCIgIAAIgZgBQgHgFgIgNIgBAAIgKgaIABgJIABgFIAIggIAAAAIAAgCIgHABIgBABIgCAAQgFAAgJgDIgBAAIgBAAIgKgGIgBAAQgFgEgEgFIgKgMIgCgBIgEgEIAAAAIgIgJQgEgIABgJIgBgLQABgHACgCQABgGAGgCIABAAIABAAQALgDAHgFIACgBIAIgIIAFgFIAKgKQAAgJACgJIgCgEQgCgIgIgOIgDgIIAAAAIgNgPIAAgBQgDgFgBgEIAEgHIABgBIALgNIAHgGIABAAIABgCIAHgFQAbgUAagOIABgBIABgBIAEgDIAFgDQAGgFAEgHIABgBIAGgOIAAgBQADgIAGgIIAJgKIAKgHIAFgCIAHgCIACgCIACgDIABAAQAEgEAGgCIADgMIAAgBIAGgDIABgBIABgBIAGgIIABgBIAJgHIAAgBIABgBIADgDIABgBIAJgJIAKgJIABAAIAAAAIAAgBIABgBIAAAAIABgBIABAAIABgBIAOgHIABAAIAKgCIABgBIAAAAQAIgCAIAAIABAAQAGAFAHgCIACAAIAAgBIAAgCIABgBIAAAAIABgCQAFgGAMACIABABQAGANAEgKIABgBIADgCIACgBIAIAAIACAAIABgDIACgBQAGgLALgFIABAAIADgBQAFACAGgEIACgBIABAAIAAAAIAFAAIACAAIAEABIACAAIAGAAIABAAIAWgRIABgBIANgHIADAAIAAgBIAGAAIACgBIANABIACAAIAHgBIAAAAQAOAEAMAFIABABIABAAIABgBQAQgEAQABIABAAIAPADQAIADAEAGIABAAIABABQAHAFADAJIABABIAfAIIAHACIACABIAGAFQAFAFADAIIAAACIAAAFIAAABIAHASIABABIAPAFIACABQAKADAJAHIAAABIADAAIABACQAIAFABANIABABIAAAFIAAACQADAGAEAFIABABQALAFAKAGIAAABIAJADIABABIAHAQIABAAIAAABQgFAKAAAMIAAABIABACIAAAAIAAACIABADIAAACIABACIAIALIACACQADAGAGAGIAAABIABAAIAAACQAAALgBAPIgBABIAAABIAAAAIgCAHIgCABIAAACIgCARIAAABQADAFAFADIABAAIABABIABABIABAAQAEAGACAFIAAABIgCAQIgBABIgEANIgBABIAEALIABAAIADAFIAAADIAAABIABABQACAIABAHIAAABQgDAOgFALIgBAFIAAACQAAAIgCAIIgDAEIgCAFQgFALgVATIgMANIgQAFIgGABQgWgKgVABIgKgGIgJgEQgLgLgCgKIgBgDQgEgOgBgOIgBgGQgDgOAAgNIABgHIABgFIABgDQAEgOACgOIAAgBIABgLIABAAIAAgBQAEgJgFgGQgDgBgBgDIAAgBIgBgBIABgNIABgaIgBgEIgBgJIAAAAIAAgBQgBgJgHgEIgHgBIgDAAIgDAAQgBgTACgPIgBgBIgBgCIgJgHIgBgFQgDgMgHgDIgCgDQgGgNgMgHIgCAAIgLgDIgBgCIgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAAAIgDAAIgSgGIgGgBIgBgBQgHgGgGgJIAAgBQgHgBgJABIgCAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAIgEABIAAABIgKAGIgCAAQgKAAgIgCIAAAAIAAgBQgFgIgDgJIgBAAIAAgEIgBgBQgBgBgFACIgBABQgKAEgKgBIAAAAIgCABQgDADgEACIgBAAQgGACgGgBIgBAAIgDABIAAABIgNgBIgBAAQgCAAgEACIgCAAIgBABIgEACIAAAAQgFAGgEADIgBACIABAAIABAAQAEAGgDAKIAAACIgHAaIgCAHIAAABIgCANIAAAMIAAAAQACAIAAAIIgBALIAAAEIAAAHIABAQIAAADIABACIABACIAEAHQAFAMAHANIACAEIANATQANARAEAWQAGAHACAIIABAEQAFAVgaAbIgKALQgVAWgQASIgCADIgLAYIgLATIAAAGIgPARIgQAPQgLAOgMAEIgGACIgHAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQgiAKgOAJQgIAFgGACIgDAAg");
	this.shape_57.setTransform(28,31.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AjoE0IgDgHIgEgJIgUgYIgEgEIgDgCIgIAAIgagBQgGgFgHgQIgBgBIgHgcIABgJIACgFQAHgSADgOIAAgBIAAgBIgGACIgBAAIgDABQgFABgJgCIgCgBIgBAAIgLgFIgBAAQgFgEgFgFIgLgKIgBgCIgFgEIAAAAIgIgJQgDgIAAgKIgBgLIACgJQABgGAGgCIACAAIABAAIAAAAQALgDAIgEIABgBIAKgIIAGgFIAKgJQABgJACgJIgEgFIgMgVIgEgGIgBgBIgMgQIgBgBQgEgFAAgEIAFgHIAAgBIANgMIAHgGIABgCIAHgGQAcgTAagOIAAgCIACgBIADgCIAGgDQAFgFAFgHIABgBIAGgNIABgBQAEgIAFgIIAKgKIAJgHIAFgCIAIgDIACgCIACgDIABAAQAFgEAFgCIAEgLIAAgCIAFgDIABgBIACgBIAFgIIABgCIAJgHIAAAAIAAgBIAEgDIABgBIAJgJIAKgIIACAAIAAgBIABgBIAAgBIABAAIACAAIAAgBIAOgGIABgBIALgCIABAAIABAAQAHgCAHABIADAAQAEAFAIgCIABAAIAAgCIABgBIAAgBIABgCQAFgGAMACIABABQAGAPAEgMIAAgBIADgCIACgBIAJgBIABAAIACgCIABgCQAGgLAMgFIABAAIADgBIAAgBQAFACAGgEIABgBIADAAIAAAAIAEABIACAAIAFABIABAAIAGAAIACAAIAVgQIACgBIANgHIACAAIAAgBIAHgBIABgBIANABIADAAIAGgBIABAAQAOAFAMAHIAAAAIACAAIAAAAQAQgFAQABIABAAIAPADQAJACAEAHIACABQAHAFADAKIAAABIAfAJIAHABIACABIAGAFQAGAGACAIIAAABIAAAGIAAABIAGASIABACIAPAEIACABQALADAJAHIAAAAIACABIABACQAJAFABANIABAAIAAAFIAAACQADAHAEAFIAAABIAVALIABABIAIADIACABIAGAQIABABIAAAAQgFAKAAANIAAABIABABIgBABIABABIAAAEIAAACIABABQADAHAEAGIACABQAEAHAGAFIAAABIAAAAIABABQABAMgCAPIgBAAIAAACIAAAAIgCAHIgBACIgBACIgCAQIAAABQACAFAFADIABAAIABABIABABIABABIAHAKIAAABIgDAQIAAABIgFANIgBABIAFALIABAAIADAFIAAADIAAABIABABQACAIAAAHIAAABQgDAOgFALIgBAFIAAACQgBAIgDAIIgCAFIgCAEQgGALgWATIgNANIgQAEIgFABQgZgMgSgCIgKgFIgJgGQgLgLgCgKIgBgDQgCgOgBgOIgBgHQgBgOAAgNIABgIIABgDIABgFQAEgNACgOIAAgCIABgKIAAAAIABgBQAEgKgFgGQgEAAgBgDIgBgCIABgMIAAgbIgBgDIgBgJIAAgBIAAgBQgCgJgGgDIgIgBIgCAAIgDAAQgCgTADgPIgBgBIgCgBIgJgHIgBgGQgCgMgHgEIgCgDQgGgMgOgHIgCAAIgKgCIgDgDIAAgBQABAAAAgBQAAAAgBAAQAAAAAAgBQAAAAgBAAIgCAAIgTgEIgHAAIgBgBQgHgGgEgKIAAAAQgIgCgIABIgCAAIgFAAIgCABIAAABIgLAGIgBAAQgLAAgHgCIAAgBIAAgBQgFgIgDgJIgBAAIAAgDIgBgBQgCgCgEADIgBAAQgLAGgJgCIgCgBIgBABQgDAEgEACIgBAAQgGABgGgBIAAABIgDABIgBAAIgNABIgBABQgDgBgEACIgBABIgBABIgDACIgBAAQgFAGgEAEIgBACIACAAIABAAQAEAGgBALIAAACIgGAbIgBAHIAAABIgDANIAAALIAAABIACAPIgBALIAAAFIABAHIABAPIAAAEIABACIACACIADAHQAFANAIAMIACADIANATQANASAEAVQAGAHACAJIABAEQAEATgcAcIgKALQgXAVgPASIgDACIgLAZIgLATIgBAGIgPASIgOAPQgMANgMAEIgGABIgHABIgEgDQgiAKgOAIQgIAEgIABIgCABg");
	this.shape_58.setTransform(28,31.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AjtE0IgCgHIgDgJQgHgJgOgQIgDgEIgDgDIgIAAIgagBQgHgFgGgTIAAAAQgFgYAAgHIADgKIACgFQAIgSAFgOIAAAAIAAgCIgHADIgBAAIgDABQgFABgJgBIgCAAIgBgBIgMgEIgCAAQgGgDgFgFIgMgKIgBgBIgEgEIgBAAIgHgKQgEgHAAgKIgBgNIACgJQABgGAGgCIABAAIABAAIABAAIATgGIACgBIAMgHIAFgFIALgIIADgTIgGgEIgPgVIgEgHIAAgBIgOgQIAAgBQgEgFAAgEIAFgGIABgBIANgNIAHgFIACgCIAHgGQAcgTAZgOIABgBIABgBIAEgCIAGgDQAFgFAGgHIAAgBIAHgNIABgBIAKgQIAJgKIAJgIIAFgCIAIgDIACgCIADgDIABAAQAFgEAGgBIADgMIAAgBIAGgEIABAAIABgCIAGgIIAAgCQAEgEAFgCIABgBIAAgBIADgDIABgBIAJgIIALgIIABAAIAAgBIAAgBIACAAIABgBIABAAIABAAIAAgBIAPgGIABAAIALgCIAAAAIABAAIAQAAIABAAQAFAGAHgCIABAAIABgBIAAgBIABgBIAAgBIABgCQAFgHAMADIABAAQAFAQAEgMIAAgBIADgDIABgBIAJgBIABAAIADgDIABgBQAGgLALgGIABAAIACgBIABgBQAEAAAJgDIABAAIACgBIAAABIAEABIACAAIAEABIACAAIAGABIACAAIAXgQIABgBIAMgHIACgBIAAgBIAHgBIACgBIANAAIABABIAIgBIABABQANAGAMAHIABABIABAAIABAAQAPgFARABIABAAIAOACQAKACAEAHIABAAIAAABQAIAFABALIAAABQAQAFAQAEIAHACIABABIAHAFQAFAGADAHIAAACIAAAGIAAABIAFATIABABIAPAEIACABQAKAEAKAGIAAAAIACACIACABQAIAFACAMIACABIAAAFIAAACQABAHAEAGIAAABQAMAEAKAGIABABIAIAEIACABIAGAPIAAABIAAABQgFAKAAAMIAAABIAAACIAAAAIAAACIgBAEIABABIAAACQADAHAFAGIABABQAEAHAGAFIAAABIAAAAIABACQACALgDAPIAAABIAAABIAAAAIgCAHIgBACIgBACIgDARIAAAAQACAFAFADIABAAIABABIABABIACABIAGAKIAAABIgDAQIAAABIgFANIAAABQACAGADAFIABABIADADIAAAEIAAABIAAABQACAIAAAIIAAABQgDANgFAMIgBAEIAAACQgCAJgDAIIgCAEIgDAEQgFAKgYAUIgNAMIgQADIgGABQgZgOgSgDIgLgGIgIgGQgKgMgCgKIgBgDIgBgdIAAgGIAAgcIAAgHIACgEIABgFIAFgcIAAgBIACgKIAAAAIAAgBQAFgKgFgGQgEAAgCgDIgBgBIABgNIgBgaIAAgEIgCgIIAAgBIAAgBQgCgJgHgEIgIAAIgCAAIgDAAQgCgTAEgPIgBgBIgDgBIgKgHIAAgFQgCgMgGgFIgCgDQgGgMgQgGIgBAAIgMgCIgBgDIgBgBQABgBAAAAQAAAAgBgBQAAAAAAAAQAAAAAAAAIgDAAIgVgCIgFAAIgBgCQgIgFgEgLIAAAAQgHgBgIABIgDAAIgEAAIgCABIgBABIgLAGIgBAAQgLAAgHgCIAAgBIAAgBIgIgRIgBAAIAAgDIgBgBQgCgCgEACIgBABQgKAGgLgDIAAAAIgBAAQgDAFgFABIgBAAQgEACgHgBIgBABIgDABIgBAAIgNACIgBABQgDAAgEACIgBABIgBABIgEACIAAAAIgJALIgBABIACAAIACABQAFAGAAAMIAAACIgEAbIgCAIIAAABIgCANIAAALIAAABIACAPIgBALIAAAEIAAAIIACAPIAAAEIACACIABACIADAHQAFANAKAMIACADIANASQANATADAVQAGAHACAIIABAEQAEATgfAcIgLALQgYAVgPARIgDACIgLAYIgKAUIgBAGIgPATIgOAPQgNANgMADIgGABQgFABgDgBIgDgDQgkAJgOAHQgIADgHACIgDAAg");
	this.shape_59.setTransform(28,31.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AjyE0IgBgHQgBgHgCgDQgFgJgPgRIgDgEIgEgCIgHAAIgagBQgHgGgFgVIAAgBQgDgbABgHIAEgKIACgEQAKgUAFgMIAAgBIAAgBIgHADIgBAAIgDACQgFABgJgBIgCAAIgCAAIgMgEIgCAAIgOgHIgLgKIgBgBIgEgDIgBgBIgHgJQgFgIAAgKIgBgOIABgIQACgGAFgCIACAAIABAAIABAAIAUgGIABgBIANgHIAHgEIANgIIABgTQgCAAgEgEIgSgVIgFgHIgBgBIgNgPIAAgBQgEgGAAgDIAFgHIABgBIANgMIAHgFIACgCIAHgFQAcgUAZgOIABgBIACgBIAEgCIAFgDQAHgEAFgHIABgBIAIgNIABgBIAKgPIAJgLIAJgIIAEgDIAHgDIAEgCIADgDIABAAQAGgDAGgCIACgLIAAgCIAGgDIABgBIABgCIAGgIIAAgCQAEgEAFgCIAAgBIABgBIADgDIABgBIAKgIIAMgHIABAAIAAgBIAAgBIABAAIABAAIABgBIABAAIAAgBIAPgFIABAAIALgBIABgBIABAAIAPABIACAAQAFAGAHgCIABAAIABAAIAAAAIAAgCIAAgBIAAgBIABgCQAFgHAMADIABAAQAFASADgOIABgBIACgCIABgCIAJgCIACAAIACgCIABgCQAHgLALgGIABAAIACgCIABgBIANgDIABAAIACAAIAAAAQABABAAAAQAAAAABAAQABAAAAABQABAAABAAIABAAIAFABIABAAIAHABIACABIAWgQIACgBIAMgIIACAAIAAgBIAGgCIADgBIAMAAIACAAIAHABIABAAQAOAHAMAJIAAABIABgBIABAAQAQgEAQAAIABAAIAPACQAKACAEAGIAAAAIABABQAHAGACAMIAAABQAPAGAQAEIAHACIACABIAHAFQAFAGACAHIAAACIAAAFIAAABIAEAUIAAACIAQAEIACABQALADAJAGIAAAAIADACIACABQAJAEACANIABAAIAAAFIAAADQABAHAEAGIAAABQALAFAKAGIABABIAIAEIACAAIAGAQIAAABIAAABQgFAJgBANIAAABIABACIgBAAIAAABQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABIAAABIABACQACAHAFAGIABACQAEAGAGAFIAAABIABAAIABACQACALgDAPIAAABIAAACIAAAAIgCAHIgBACIgBABIgDAQIgBABQADAFAEAEIABAAIACABIABABIABABIAHAJIAAABIgEAQIAAABIgEANIgBABQADAGADAFIABABIADADIABAEIAAABIAAABQABAIgBAIIAAABQgDANgFAMIgBAFIAAACQgBAIgEAIIgEAFIgCADQgGAKgYATIgOAMIgRADIgGABQgZgQgSgFIgKgHIgIgGQgKgMgCgLIAAgDIABgdIAAgHQgBgOABgOIACgHIABgEIABgEQADgOACgPIAAgBIABgKIABAAIABgBQAFgKgHgGQgEAAgBgBIgBgCIAAgOIgBgaIAAgDIgCgJIAAgBIAAgBQgDgJgHgDIgIgBIgCABIgEABQgBgTADgQIgBAAIgCgBQgFgDgFgEIAAgFQgCgMgGgGIgBgDQgIgMgQgFIgCAAIgLgCIgCgDIAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBAAAAAAIgDAAIgVAAIgHAAIAAgCQgIgGgDgKIAAgBQgHgBgIABIgDAAIgFABIgCABIAAABIgLAGIgBAAQgLABgHgEIAAgBIAAgBQgFgHgDgJIgBgBIAAgDIgBgBQgCgBgEACIgBABQgLAGgKgDIgBgBIgBABQgCAEgFACIgBAAQgEACgHgBIgBAAIgDACIgBAAIgOAEIgBABIgHACIgBABIgBABIgDACIgBAAQgEAHgEAEIgBACIADAAIABABQAGAGAAANIAAABQABANgCAQIgBAIIAAABIgCANIAAALIAAABIABAPIgCALIAAAEIABAIIACAPIABAFIABACIABABIADAIQAGAMAKAMIACADIAOASQAMATADAUQAHAIACAIIAAAEQADARggAdIgMALQgaAVgPAPIgDACIgLAZIgKAUIgCAGIgOATQgHAJgHAGQgNAOgMADIgGAAIgIgBIgDgDQglAIgOAGQgIADgIABIgDAAg");
	this.shape_60.setTransform(28,31.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AjsE1IgLAAIgBgJQgBgGgCgEQgEgJgPgRIgEgEIgDgDIgHAAIgaAAQgIgHgCgYIAAgBIgBAAQgCgdADgHIAFgKIADgFIARggIAAgBIAAgBIgHADIgBABIgDACQgGACgJgBIgCAAIgCAAIgNgDIgCAAQgIgCgHgEIgNgJIgBgCIgEgDIgIgKQgEgIgBgJIgBgPQAAgIABgBQACgGAFgCIACAAIACAAIAVgFIABgBIAPgGIAHgEIAOgHIABgTIgHgEIgVgVIgGgHIgBgBIgNgQIgBgBQgDgGgBgDIAGgGIABgBIAOgMIAHgFIAAAAIACgCIAHgFQAcgTAZgPIABgBIACgBIAEgCIAFgDQAHgEAGgGIABgBIAJgMIABgBIAKgQIAJgLIAJgIIAEgDIAHgEIADgCIAFgDIABAAQAGgDAGgBIACgMIAAgBIAFgEIACgBIABgBIAGgJIAAgBQADgEAGgDIAAgBIAAgBIAEgDIABgBIAJgIIANgGIABAAIAAgBIAAgBIACAAIAAAAIABgBIACAAIAAgBIAPgFIABAAQAFgBAGABIABgBIABAAIAQACIABAAQAFAHAHgCIACAAIAAgCIAAgBIAAgBIABgCQAFgIAMADIABABQAFATACgPIAAgBIADgDIABgCIAJgCIACAAIACgDIABgCQAHgKALgHIABAAIACgCIAAgBIAOgEIACAAIACAAIAAAAQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAIACAAIAFACIABAAIAHACIABAAIAXgPIACgBIAMgIIACAAIAAgCIAGgCIADgBQAGgBAGABIACAAIAHABIABAAQAOAIALAKIABABIABAAIABAAQAQgEAQAAIABAAIAPABQAKABAEAHIAAAAIABABQAHAHABAMIAAABQAPAHARAEIAHACIABABIAHAFQAFAGADAHIAAACIAAAFIAAABIADAVIAAABIAPAEIACABQALADAKAGIAAABIADABIACABQAJAEADANIABAAIAAAFIAAACQABAIADAGIAAACQALAEAKAGIABABIAIAEIACABIAGAQIAAABIAAAAQgFAKgCANIAAABIABACIgBAAIAAABQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABIAAABIABACQACAHAEAGIACACQAEAGAGAFIAAABIABAAIABACQACALgCAPIAAABIAAACIgBAAIgCAHIgBACIgBACQgBAIgDAHIAAABQACAFAFAEIABAAIACABIAAABIABABIAIAKIAAABIgEAPIAAABIgEANIgBACIAHAKIABABIADADIAAAEIAAABIAAABIAAAQIAAABQgDAOgGALIAAAFIgBACQgBAIgFAJIgEAFIgCADQgHAIgZAUIgOAMIgRACIgGAAQgbgSgQgHIgKgGIgIgHQgKgMgBgLIAAgEIACgeIAAgHIACgcIACgHIABgEIABgEQAEgOACgPIAAgBIABgKIABAAIAAgBQAFgKgHgFQgEABgCgDIAAAAIgBgCIABgNIgCgaIgBgEIgCgIIAAgBIABgBQgEgJgGgDIgJgBIgCAAIgEACQgCgTAEgQIgBAAIgCgBIgLgGIAAgFQgBgNgFgGIgCgDQgIgMgSgFIgCAAIgKgBIgCgDIAAgBQAAgBAAAAQAAgBAAAAQAAAAAAAAQgBAAAAAAIgDAAIgXABIgGABIgBgCQgHgGgDgLIAAgBQgHgBgIACIgDAAIgFABIgCABIAAAAIgLAHIgBAAQgLABgIgEIAAgBIAAgBIgHgRIgBAAIgBgDIAAgBQgCgCgFADIAAABQgMAGgJgDIgBgBIgBABQgCAEgEACIgBAAQgFABgHgBIgBABIgDACIgBABIgOAFIgBAAIgHAEIgBAAIgBABIgEACIAAABIgIALIgBACIADAAIABABQAHAFABAOIAAACQACANgBARIgBAIIAAABIgBANIgBALIAAABIAAAPIgBALIAAAEIABAIIACAPIACAFIABACIAAACIAEAHQAGAMAKAMIACADIAPARQANAUACAUQAHAHABAJIABAEQABAQgiAeIgMAKQgcAVgPAOIgDACIgLAZIgKAUIgCAGQgGALgHAJQgHAJgHAGQgNAOgNACIgGAAIgIgBQgBgDgCgBQgmAGgOAGQgIADgIAAIgDAAg");
	this.shape_61.setTransform(28,31.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("Aj8E1IAAgJQgBgHgBgEQgEgJgQgRIgDgEIgDgDIgIAAIgaAAQgHgIgCgbIAAgBQgBgfAEgIIAHgKIADgFIATggIAAgBIAAgBIgHAEIgBABIgDACQgGADgKAAIgCgBIgCAAIgOgBIgCAAQgJgCgIgEQgGgEgGgFIgBgBIgEgDIgIgLQgFgHgBgKIgBgQIABgJQABgGAGgCIACAAIABAAIABAAIAVgEIACgBIAQgFIAIgEIAPgHIAAgTQgDgBgFgDQgIgGgQgOIgGgIIgBgBQgJgJgFgHIAAgBQgEgFAAgEIAGgGIABgBIAOgLIAHgFIACgCIAHgFQAcgTAZgOIABgBIACgBIAEgDIAGgCQAHgEAGgHIABgBIAKgLIABgBIAKgQIAJgLIAJgJIAEgDIAHgEIAEgCIAFgDIABAAQAGgDAHAAIABgNIAAgBIAGgEIABgBIABgBIAGgJIAAgBQADgEAGgDIAAgBIAAgBIAEgDIABgBIAKgHIANgHIABAAIAAAAIAAgBIACAAIAAAAIABAAIACAAIAAgCIAPgEIABAAQAGgBAGABIABAAIABAAQAHAAAIACIACAAQAFAIAHgCIABAAIABAAIAAgBIAAgBIAAgCIAAgBIABgCQAEgHAMADIABAAQAFAVACgQIAAgCIACgDIABgBQAEgDAFgBIACAAIACgDIABgCQAIgJAKgIIABAAIACgDIAAgBQAGgDAJAAIACgBIACAAIAAABQACACADAAIABAAIAFACIABAAIAHACIACABIAXgPIACgBIALgIIACgBIAAgBIAHgCIACgBQAGgCAHABIACAAIAHABIAAAAQAOAJAMAMIAAABIABAAIABAAQAQgEAQAAIABAAQAIgBAIABQAKABAEAHIAAAAIABABQAHAHAAANIAAACQAPAHARAEIAHACIABABIAHAFQAFAGADAHIAAABIAAAGIAAABIABAVIAAACIAQAEIACABQALADAKAFIAAABIADABIACABQAKAEADAMIABABIAAAFIAAACQAAAIADAGIABACIAVALIABABIAIAEIABAAIAGARIAAABIAAAAQgFAJgCANIAAACIAAABIgBABIAAABQAAADgCABIAAACIAAABQACAJAEAFIACACQAEAHAGAEIAAABIABAAIABACQADALgCAPIAAABIAAACIgBAAIgCAHIgBACIgBACQgBAIgDAIIgBAAQACAGAFADIABAAIACACIABABIABABIAHAJIAAABIgEAQIAAAAIgEANIgBACIAIAKIABABIADADIAAAEIAAABIAAABQAAAIgBAIIAAABQgDAOgGALIAAAFIgBACQgCAJgFAIIgEAFIgDADQgGAIgaAUIgPALIgSABIgGAAQgbgTgQgJIgJgHIgIgIQgKgMgBgLIAAgDIAEgfIABgHIADgdIACgHIABgEIABgEQADgOACgPIAAgBIABgKIABAAIABgBQAGgKgIgFQgFABgBgDIgBgCIgBgNIgBgZIgBgFIgCgIIAAgBIAAgBQgFgJgGgCQgEgCgEABIgCAAIgFACQgBgSAEgRIgCAAIgCAAQgFgCgGgEIABgGQgBgMgFgIIgCgDQgIgLgTgEIgCAAIgLgBIgCgDIAAgBQAAgBAAgBQAAAAAAAAQAAgBAAAAQgBAAAAAAIgDABQgLACgNABIgHAAIAAgBQgIgGgBgMIgBAAQgHgBgIABIgDABIgFAAIgCABIAAABIgLAHIgBAAQgLABgHgEIAAgBIAAgBIgIgRIgBAAIAAgDIgBgBQgCgCgEADIgBAAQgLAHgKgDIgBgBIgBAAQgBAFgFABIgBAAQgFACgHgBIgBABIgDACIgBABIgOAGIgBABIgHAEIgBAAIgBABIgEACIAAABIgIAMIAAACIADAAIABABQAHAFADAPIAAACQACANAAARIAAAJIAAABIgBANIgBALIAAABIAAAPIgBALIAAAEIAAAIIADAPIACAFIABACIABACIADAGQAHAOAKALIACACIAPASQAOATABAUQAHAIABAIIABAEQABAQglAeIgNAKQgdAVgPANIgDACIgLAZIgKAUIgCAGIgNAVIgNAPQgOAOgNABIgGAAQgFAAgDgCIgEgFQgnAGgOAEQgIADgIAAIgDABg");
	this.shape_62.setTransform(28,31.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AkBE1QAAgOgCgHQgDgLgWgXIgiAAQgHgHAAgeQAAgkAFgHQAZghAIgPIAAgCIgLAIQgGAEgLAAQgxAAgQgdQgIgNAAgVIABgKQABgGAGgCQAZgCAUgHIAZgJIAAgUQgJgBgbgXQgbgZAAgKQA6gtAvgYQANgGAMgQIAVgcQATgYAZgBIABgMIAAgCQAJgFAEgKIAAgBQAEgEAFgDIAAgBIAAgBQAMgLARgGIACAAIAAAAIAAgBIABAAIACAAIABAAIAAgCQAXgHAYAHIABAAQAFAJAHgDIACAAQABgQAQAFIABABQAEAVACgRIAAgBQADgIAJgBIACAAQAKgPAOgLIAAgCQAIgEAMABIAAAAQABADADAAIACAAQAGADAHACIACAAQATgLARgNIACAAIAAgCQAOgHARAEIAAAAQAOALALAMIABABQAagFAZABQAKABAEAHQAIAGgBAQIAAACQASAJAVAFIACABQAKAGAFAMIAAABIAAAdIAAABQAVAFASAIIAAABQAPADAEAPIABAAQgBAOADAJIABABQAQAIAOAIIABABIAGAQIAAACQgGAKgCAPIgBAAIAAACQgBADgCABIAAACIAAABQAEATAOAIIAAABIABAAQAFANgDASIAAAAQgEAPgGAMIAAABQACAFAEAEIABAAQAHAFAFAHIAAABQgDAQgFANIgBACQAGAIAHAGIgBAEQAAAZgKATQgCASgPAPQgJAJgoAdIgYAAQgpgegLgKQgSgRAAgPIAAgEIAGgfIAEgkIAFgPQAEgOACgPIABgLIABAAIAAgBQAGgJgIgGQgFABgCgCIgBgDQgBgggCgKQgIgegVAKQgCgSAFgRIgCAAQgHgCgGgDIAAgGQAAgPgGgJQgMgPgfAAIgBgEQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAgBAAQgPAFgTABIgBgBQgHgGgBgNIgBAAQgLgCgOAFIAAABIgLAHIgBAAQgLABgHgEIAAgBIgIgTIgBAAQgBgHgHAEIAAABQgNAIgIgGIgBABQgFAJgPgCIgBABIgbAQIgGADIAAABIgHAMIAAACQATADABA3QAAAdgDAeQAAAoAfAdQAdAdABAbQAIAKAAALQAAARg0AmIgxAjIgKAZQgiBNgfAAQgLAAgEgDIgEgFQgoAFgOADQgIADgIAAgABFh2QAHgJALgHIgRAQIgBAAg");
	this.shape_63.setTransform(28.1,31);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("Aj7EzQAAgNgDgGQgEgKgWgWIgCAAIgYAAIgHgBIgBgBQgGgJAAgbIAAgCQgCggAFgHIAIgMIAEgGIAFgHIAMgSIACgEIAAgCIgLAIIgIACIgHAAIgDAAQgJAAgHgCQghgFgOgWQgGgJgCgPIgBgGIAAgCIABgKQABgGAGgCQAWgDAUgGIADgBIAYgKIAAgUQgDAAgGgFQgJgGgOgNIgDgDQgOgPgEgJQgDgEAAgDIANgLIASgOIACgBQAYgTAYgOIAQgIQAHgEAIgJIAHgJIANgVIAFgHQAGgHAHgFQALgIAMgDIAIgCIABgMIAAgCQAFgCADgEQADgEACgFIAAgBQAEgEAFgDIAAgBIAAgBIAGgFQAJgHAOgFIABAAIABAAIAAgBIABAAIACgBIABAAIAAgBQAXgHAYAGIABABQAEAHAHgCIABAAIACAAQABgQAQAEIABABQAEARABgKIABgCIAAgBIAAgCQADgHAIgCIABAAIAAAAIABAAIAMgPIAAgBIAJgHIABAAIABgBIACgDIABgBQAGgFAMABIAAABIAEACIABAAIABAAIABAAIABABIABABIACAAIACABIAHABIABABIAegSIACgBIAFgEIACAAIAAgBIAEgCIACgBQAKgFANAEIABAAIABAAIANALIACACIAKAJIAAABQARgEAQgBIACgBIAQAAIACAAIABAAQAEABADACIABABIADAEIADADIACACQADAGAAAKIAAABIAaAKIACABIABAAIAKACIABAAQAIAFAFAIIABABIACAEIAAABIABAcIAAABIAAABQAVAEASAIIAAAAQAGABAEADQAHAEACAKIABAAIAAAAQAAAMACAJIABABIAAABIAAABQAQAIAPAIIABABIABACIABACIAEAMIABABIgFAJIAAACIgDAPIgBAAIAAABIgDAFIAAABIAAABIAAABIAAABQAFARAOAIIAAABIABAAIACAEIAAABQADALgCAPIAAAAIAAABIAAABIgIAWIAAABIgBACIAAAAQACAFAEAEIABAAQAGAEAFAGIACACIAAABIgDAOIgBACIgFANIAAACIAEAGIABABIACACIAFAFIAAABIAAACIgBABQAAAQgDANIAAABIAAABQgCAHgEAHQAAAHgDAHQgFAJgIAJIgFAFIgIAIIgBABIgNAKIgBABIgSAOIgHAAIgCAAIgOABIgCgCIgEgDIgigWIgKgIQgJgHgEgHQgFgIAAgHIAAgDIAEgdIABgGIABgVIABgHIAEgPIAEgcIAAgLIABAAIABgBIABgDQADgIgHgEQgFAAgCgBIgBgCIAAgLIAAgEQgBgUgCgIIgBgDQgGgYgQAFIgEABIAAgMQAAgMADgLIgBAAIgJgEIgBAAIgBAAIgCgCIABgGIgBgGIgCgHIAAgCIgEgJQgIgLgTgEIgOgCIgBgDQAAgBAAgBQAAAAAAAAQgBgBAAAAQgBAAAAAAIgSAEIgQABIAAgCQgGgFgCgIIAAgCIAAgDIgBgBIgKAAIgHABIgIACIAAABIgKAGIgBAAIgBAAQgLAAgGgEIAAgBIgIgSIgBAAQgBgGgFACIgCABIgBABIgEACQgKAEgIgEIgBAAQgCAGgJABIgCAAIgGAAIAAABIgLAGIgBAAIgPAIIgGADIAAABIgBABIgBABIgGAKIAAABIAAACQAHABAEAJIABABQADAGABAKIAAABIABAIIAAACIAAAPIgBAGIAAACQAAALgBALIAAABIgEAaIAAAFIAAAHIAAABIADAMIABACQAHAWATAUIAFAGQAVAZACAYIAAADQAIAJAAALQABAOgeAaIgSAPIggAZIgNALIgBACIgKAXQgKAXgLARQgYAlgVAAQgLAAgDgCIgBgCIgDgDQgjAFgPAFIgDABQgJACgIABIgNgBg");
	this.shape_64.setTransform(28,31.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("Aj1EyQAAgMgEgFQgEgJgXgVIgCAAIgYgBIgGgBIAAgBQgHgKAAgbIAAgCQgCgeADgGIAIgMIACgFIAFgHIALgTIACgEIAAgBIgJAGIgIACIgGAAIgEAAIgPgDQghgFgPgUQgGgKgDgNIgBgGIAAgCIAAgBIABgJQACgHAFgBQAWgEAUgHIACgBIAYgLIACgTIgJgFQgIgGgNgNIgCgDQgMgQgFgIQgCgEAAgDIANgMIARgOIACgBQAVgRAVgNIAOgIQAGgEAHgJIAGgJIAMgVIAFgGQAGgIAHgEQALgIAMgDIAIgCIACgMIAAgCIAHgHQADgDACgFIAAgCQADgEAFgDIAAgBIAAgBIAGgFQAJgHAOgFIACAAIAAAAIAAgBIABAAIACAAIABAAIAAgCQAXgGAYAFIABAAQAFAHAHgBIABAAIABgBQACgPAPADIABABQAEAQACgKIABgCIAAgCIAAgBQACgHAIgDIABAAIABAAIALgOIABgBIAJgIIABAAIABgBIADgCIAAgCQAIgEAKAAIAAABIAEACIABAAIABAAIABAAIABAAIABABIABABIADAAIAGABIACABIAfgRIACgBIAFgDIABAAIABgCIADgCIACAAQAKgGANAEIABAAIABABQAGAHAHADIACACIAKAIIAAABQAQgFARgCIACAAIAPAAIACAAIABAAIAHADIABABIADADIADADIACACQAEAGAAAJIAAABQAMAFAOADIACABIABAAIAJACIADAAQAIAFAEAHIABABIACAEIAAACIACAbIAAABIAAABIABAAQAVADASAIIAAAAQAGABAEADQAGAEADAJIAAABIABAAQAAAMACAJIABABIAAAAIABACIAeAPIABABIABADIABACIAFALIAAABIgEAJIgBACIgCAPIAAAAIAAABIgDAFIAAACIAAAAIAAABIAAABQAEAQAPAIIABABIAAAAIACAEIAAABQAFALgDAOIAAAAIAAABIAAABQgDANgEAJIAAABIgBACIAAABQACAFAFADIABABQAGAEAEAGIACACIAAABIgDANIgBACIgDAOIgBABIAEAHIAAABIADACIADAFIAAABIAAACIAAABQAAAQgBANIAAABIgBAAIgFAOQAAAHgDAHQgFAKgIAJIgEAEIgIAJIgBAAIgLALIgBABIgSAOIgHABIgBAAIgNABIgCgBIgEgDIgggTIgKgGQgIgHgGgGQgEgHgBgGIAAgDQACgMAAgOIAAgGIABgUIAAgGIAEgPIACgbIAAgLIABAAIAAgBIABgDQADgIgGgFQgGABgBgDIgBgCIgBgKIAAgDQgBgUgCgJIgBgDQgFgXgQADIgDABIAAgLIADgYIAAAAIgJgEIgBgBIAAAAIgCgCIAAgFIAAgGIgDgHIAAgCQgBgFgDgEQgHgMgTgEIgNgCIgCgEQABgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBAAIgTAEIgOAAIgBgCQgFgFgBgJIAAgBIgBgDIgBgBIgLAAIgFABIgIABIAAAAIgKAFIgBAAIgBAAQgKAAgHgEIAAgBIgIgRIgBAAQgCgFgEABIgCABQAAABgBAAIgEABQgKAFgIgEIgBAAQgEAGgHABIgDAAIgFgBIAAABIgKAFIgBABIgQAHIgGADIAAABIgBABIgBABIgGAKIAAABIAAABQAGABADAJIABABQADAFABAJIAAABIAAAIIAAABIgBAOIgBAGIAAACQgBALgCAKIAAACIgEAZIAAAEIAAAHIAAABIABAMIABACQAJAWARAVIAFAGQAUAZACAZIAAACQAHAKABAKQAAAPgaAaIgRAPIgdAZIgNAMIAAACQgEAMgGALQgLAXgLAQQgYAkgVACQgMAAgDgCIgBgBIgDgDQgiAFgPAGIgDABQgIADgIABIgNAAg");
	this.shape_65.setTransform(28,31.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AjzEgQgGgIgWgTIgDAAQgMAAgLgCIgGgBIgBgBQgFgLAAgaIAAgCQgFgcAEgGIAAAAIAFgLIADgGIADgHQAHgMAGgHIACgDIAAgCIgJAGQgDABgFAAIgGAAIgDgBQgIgBgHgCQghgEgPgUQgHgJgDgNIgBgGIAAgCIAAAAQAAgIABgCQABgGAFgCQAVgEATgIIADgBIAYgMIACgSIgIgGQgHgGgLgNIgCgDQgKgPgEgJIgCgGIANgMIARgPIABgBQAQgPAVgMIALgIQAGgEAFgJIAGgIIAJgVIAGgHQAGgHAGgEQAMgHAMgFIAHgCIACgMIAAgBQAEgDADgEQAEgEABgFIAAgBQADgEAFgDIAAgBIAAgCIAFgEQAJgIAPgFIABAAIAAAAIAAgBIACAAIACAAIABAAIABgBQAWgHAYAFIABAAQAFAGAHgBIABAAIACAAQACgQAOADIABAAQAEAPACgJIAAAAIAAgDIAAgBIAAgCQAEgHAGgDIACAAIAAAAIACAAIAKgOIABgBIAJgIIAAAAIABgBIADgCIABgCQAHgEALAAIAAAAQAAABAAAAQABAAAAABQABAAABAAQAAAAABAAIABAAIABAAIAAAAIACABIACAAIABABIABAAIAIACIABAAIAegQIADgBIAEgCIACgBIAAgBIAFgCIABgBQAKgFAOADIABAAIAAABQAGAIAGACIACACIAJAHIABAAIABAAQAQgEAPgDIACAAQAIgBAIAAIACAAIABAAIAGADIACABIAEAEIADADIABACQAFAFAAAIIAAABQAMAEAOADIACABIABAAIAJABIACABQAIAEAGAHIAAABIACAEIAAABQADAMAAAPIAAABQAWAEASAHIAAAAQAFABAFADQAHAEADAJIAAAAIABAAQAAAMACAJIAAABIAAABIABABIAfAQIABAAIABADIABACIAFALIABABIgEAJIgBACIgCAPIgBAAIAAABIgCAGIAAABIAAACIAAAAQAGAQAOAIIAAABIABAAIACAEIAAABQAFAKgBAOIgBAAIAAABIAAABIgGAXIAAABIgBACIAAABQADAEAEADIABAAQAGAFAFAFIABACIAAABIgBAOIgBACIgFANIgBACIAFAHIAAABIACACIADAFIAAABIAAACIAAABQAAAPgBANIAAABIAAABIgEAOQgBAHgDAHIAAAAQgEAKgIAJIgFAEIgGAJIgBAAIgLALIgBABQgGAHgLAIIgFABIgCAAIgMACIgCgCIgDgCIgggPIgJgFQgIgGgFgGQgEgGgCgFIgBgDQACgKgBgOIAAgFIgBgSIAAgHIACgOIACgbIgBgLIABAAIAAgBIACgDQABgHgGgFQgFAAgCgCIgBgCIgBgKIAAgEIgBgdIgBgDQgFgXgOADIgEABIAAgMQABgMADgMIgBAAIgIgFIgBAAIAAAAIgCgCIAAgGIgBgGIgCgHIAAgBIgEgJQgHgNgRgFQgHgCgHAAIgBgEQABAAAAgBQgBAAAAgBQAAAAAAAAQgBgBgBAAIgSADIgOAAIAAgCQgFgFgBgJIgBgCIAAgCIgBgBIgLAAIgFAAIgHAAIAAABIgKAEIgBAAIgBAAQgKgBgHgDIAAgBIgJgRIgBAAQgCgFgEABIgCABIgBABIgEABQgJAEgJgDIgBAAQgEAGgIAAIgCAAIgFAAIAAAAIgKAEIgBABIgPAHIgHADIAAABIgBABIAAABIgHAKIAAAAIAAACQAFABADAIIABAAQACAFABAIIAAABIAAAHIgBACIgBANIgBAGIgBABQAAALgDAJIAAACIgGAYIAAAFIgBAGIAAABIACANIABACQAJAVAQAWIAFAGQATAZABAZIAAACQAHAKABALQABAPgZAZIgOAQIgaAaIgLAMIgCACQgEAMgGALQgKAWgMARQgaAjgUACQgLABgEgCIgBgBIgCgCQghAFgPAIIgDABQgIADgIABIgNABQgBgLgDgFg");
	this.shape_66.setTransform(27.9,31.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AjuEgIgdgZIgDAAQgNAAgKgCIgFgCIgBgBQgFgMAAgZIAAgCQgGgbADgFIgBAAIAEgKIACgGIAEgHQAGgMAGgHIACgDIAAgCIgHAFIgHABIgHgBIgDgBQgIgBgHgDQgggEgQgSQgIgJgDgMIgCgGIAAgBIAAgCQAAgHABgCQABgGAGgCQAUgFAUgJIADgBIAXgMIADgSIgHgGQgHgGgJgOIgCgCQgIgOgDgJQgCgEAAgDIAMgMIAQgQIACgBQAMgNASgLIAKgIQAFgDAEgJIAFgIIAIgVIAFgHQAGgHAHgEQALgGAMgFIAHgDIACgMIAAgBQAFgDADgEQACgEACgFIAAgBQADgFAFgDIAAgBIAAgBIAFgFQAJgHAOgFIACAAIAAAAIAAgBIACAAIABAAIACAAIAAgCQAWgGAZAEIABABQAFAFAHgBIABAAIABgBQADgPAOACIABAAQAEAOACgJIABgDIAAgBIAAgBQADgHAGgEIABAAIACAAIALgOIABgBIAIgIIABAAIABgBIADgDIAAgBQAIgFALAAIAAABIAEABIABAAIABAAIABABIACAAIABABIACAAIAHABIABABQAQgJAQgGIABgBIAGgCIABAAIAAgCIAEgBIACgBQAJgHAOAEIABAAIAAABQAHAIAFACIACABIAKAGIAAAAIABABQAPgGAQgDIACAAQAIgBAIAAIACAAIABAAIAGADIACABIAEAEIADADIABABQAFAFABAHIAAABIAZAGIACABIABAAIAKABIABAAQAIAEAGAHIAAABIADADIAAACIAEAaIAAABIAAABQAWADARAGIABABQAFABAFACQAHAEADAJIAAAAIAAAAIADAVIABACIAAAAIABABIAeAQIACAAIABADIABABIAFALIABACIgDAIIgBACIgCAPIgBAAIAAACIgCAFIAAACIAAAAIAAABIAAABQAGAPAPAHIAAABIABABIACADIAAABQAFAKgBAPIAAAAIAAABIAAAAIgGAXIAAABIAAACIAAABQACAFAFADIABAAQAGAFAFAEIABACIABAAIAAABIgCAOIgBACIgEANIgBACIADAHIABABIACACIADAFIAAABIAAACIAAABIAAAcIAAABIAAABIgEAOQgBAHgCAHQgFAKgHAJIgFAFIgGAIIgBABIgJALIAAABIgRAPIgGABIgCAAIgJADIgCgCIgDgBQgSgIgMgEIgJgEQgJgFgFgFQgEgFgCgFIgBgCQABgKgBgLIgBgFIgCgSIAAgGIABgOIAAgaIgBgLIABAAIAAgBIAAgDQACgHgGgFQgFAAgCgCIgBgCIgBgLIAAgEIgBgcIgBgDQgFgXgNACIgDAAIAAgLQABgNADgMIgBAAIgHgFIgBAAIgBAAIgBgCIABgGIgCgGIgCgGIgBgCIgDgJQgHgOgRgEQgFgDgHgBIgBgDQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAgBAAQgIAAgKADIgOgCIAAgBQgFgGgBgJIAAgBIgBgDIgBAAIgKgBIgGAAQgDgBgDABIAAAAIgJAEIgCgBIgBAAQgJgBgHgEIAAAAIgKgQIgBAAQgBgFgFABIgCABIgBAAIgDABQgKAFgIgEIgBABQgEAFgJABIgCgBIgFAAIgBAAIgIADIgBABIgQAGIgGADIAAABIgBABIgBABIgGAKIAAAAIgBACQAFABACAHIABAAQABAEABAHIAAABIgBAGIAAACIgCANIgCAFIAAACQgBALgDAIIgBACIgGAXIgBAFIgBAGIAAABIABAMIABADQAJAUAQAXIAFAGQARAaABAZIAAACQAHAKABALQABAQgVAYIgNAQIgYAbIgKAMIgBACQgEAMgHALQgKAWgNARQgaAjgVACQgKABgDgCIgCAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQgfAFgQAKIgDACIgPAEIgOABQgBgKgDgEg");
	this.shape_67.setTransform(27.9,31.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AjpEfIgegXIgDAAQgMAAgKgCIgGgCIgBgCQgEgMABgZIAAgCQgJgYACgFIAAAAIADgKQAAgDABgCIAEgHQAGgMAFgHIACgEIABgBIgHAEIgGAAIgGgBIgDgBQgJgBgGgEQgggEgRgRQgIgIgEgLQgCgDAAgDIAAgCIAAgBIABgJQABgGAGgDQAUgFATgKIADgBIAXgMIADgSQgBgCgFgEQgGgGgHgOIgCgCQgGgOgDgJQgBgEAAgDIAMgMIAPgRIABgBQAJgLAQgKIAIgIQAEgDAEgJIACgIIAHgUIAFgHQAGgHAHgEIAYgLIAGgDIADgMIAAgBIAHgHIAEgJIAAgCQADgEAEgDIABgBIAAgCIAEgEQAKgIAOgEIABAAIAAgBIAAgBIACAAIACAAIACAAIAAgBQAWgHAZAEIACAAQAEAGAHgCIABAAIABAAQADgPAOABIABAAQAEAMACgIIAAAAIAAgDIAAgBIAAgCQADgHAGgDIABgBIABAAIACAAIALgOIAAgBIAJgHIABgBIAAgBIADgCIAAgCQAIgFALAAIAAABIAFABIABAAIAAAAIABAAIAAAAIABAAIADABIABAAIABABIAGAAIACABIAfgOIADgBIAEgBIACgBIAAgBIAEgBIACgBQAIgHAOAEIACAAIAAAAQAGAKAGAAIABABIAKAFIAAAAIABABQAPgGAQgEIACAAQAIgCAIABIACAAIABAAIAGADIACABIADADIAEADIACACQAEAEABAGIABABQALADANACIADABIABgBIAJABIACAAQAIAEAFAGIABABIADAEIAAABQADAMACAOIAAABIAAABIAAAAQAVACATAHIAAAAIAKADQAHADADAJIAAABIAAAAIAEAVIABABIAAABIAAABIAfAPIABABIACACIABACIAFAKIAAACIgBAIIgBACIgCAPIgBAAIAAACIgDAGIAAABIAAACIAAAAQAIAOAPAIIAAABIABAAIACAEIAAABQAGAJgBAOIAAABIAAAAIAAABIgFAXIAAABIAAACIAAABQACAFAFADIABAAQAGAEAEAGIACABIAAABIABABIgCAMIgBACIgEAOIAAACIADAHIAAABIABABIADAFIAAABIAAACIAAACIACAbIAAABIAAABIgEAOQAAAHgDAIQgEAKgHAJIgFAFIgGAIIAAABIgHALIgCABIgPAPIgGACIgBAAIgJADIgBgBIgEgBQgRgGgMgCIgIgEQgIgDgFgEIgHgJIgBgCQAAgJgCgKIgBgEIgEgQIgBgGIABgOIgBgaIgBgKIAAAAIAAgBIABgDQABgHgHgFQgEAAgCgDIgBgBIgBgMIAAgEIgBgbIgBgDQgEgXgNAAIgCABIAAgMQABgMAEgMIgCgBIgGgFIgBAAIgBgBIgBgCIABgGIgCgGIgDgGIAAgBIgDgJQgHgPgQgFQgFgCgGgBIgBgEQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQgJAAgKADIgNgDIAAgBQgEgGgBgJIgBgBIgBgDIAAAAIgLgBIgEAAIgGgBIAAAAIgKACIgBAAIgBAAQgJgBgHgEIAAgBIgKgPIgBAAQgDgFgEACIgCAAIAAABIgEAAQgJAEgJgDIgBABQgFAFgIAAIgCAAIgFgBIAAAAIgIACIgBABIgQAGIgHADIAAABIgBABIAAABIgHAJIAAABIgBABQAEABACAHIABAAIABAJIgBABIAAAGIAAABIgDANIgDAEIAAACQgBALgEAHIAAACIgIAXIgBAEIgBAGIAAABIABANIAAACIAZAsIAEAGQARAaAAAZIAAADQAHAKABAKQABARgSAYIgLAQIgWAcIgJAMIgBACQgDAMgHALQgLAVgOARQgbAjgUADQgKABgDgCIgCAAQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBgBAAAAQgeAGgQAMIgCABQgJAEgHACIgNABQgCgJgDgEg");
	this.shape_68.setTransform(27.9,31.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AjlEfIgegVIgCAAQgOAAgJgDIgFgCIgBgCQgFgNABgYIAAgCQgJgWABgFIAAAAIABgJIABgFIADgHQAFgNAHgGIACgEIAAgBIgFADIgGAAIgGgCIgDgBQgIgCgGgDQgggEgSgQQgIgIgFgKQgCgDAAgDIAAgBIgBgCQAAgHACgDQABgFAGgDQATgGATgKIADgCIAXgMIADgSQAAgDgFgDQgFgGgFgOIgBgDIgHgWQgCgDABgEIALgMIAPgRIABgCQAFgIAOgKIAHgHQACgEACgIIADgIIAEgUIAFgHQAHgHAHgDIAXgMIAHgDIACgMIAAgBIAHgHIAEgJIAAgCQACgEAFgDIAAgBIAAgCIAFgFQAJgHAOgFIACAAIAAAAIAAgBIACAAIABAAIACAAIAAgCQAWgGAZADIACABQAFAFAHgCIABAAIABgBQADgPAOABIABAAQAEALACgIIABgDIAAgBIAAgBQACgIAGgEIABAAIACAAIALgOIABgCQADgEAFgDIABAAIABgBIACgDIABgBQAHgFALAAIABAAIAFABIABAAIAAAAIAAAAIABAAIABAAIACABIABAAIACAAIAGABIABAAQARgIAPgFIACAAIAFgBIACgBIAAgBIAEgBIACgBQAIgHAOAEIABAAIAAAAQAGAKAFgBIACABIAKAEIABABQAPgHAQgEIABAAQAIgCAJABIACAAIAAAAIAGADIACABIAEADIAEADIABACQAFADACAGIAAAAQAMADANABIACABIABgBIAJABIACAAQAIADAGAGIABABIACAEIABABQADAMADAOIAAAAIAAABIAAAAQAVACASAGIABAAIAJADQAIADADAJIAAABIABAAIADAVIABABIAAABIABABIAeAPIACAAIABADIACABIAFALIABABIgCAJIgBACIgCAOIAAABIAAABIgDAGIAAACIAAAAIAAABIAAABQAIANAPAIIAAABIABAAIADAEIAAAAQAGAJAAAPIgBAAIAAABIABABIgFAWIAAACIAAACQADAFAFADIABAAQAGAEAFAGIACABIAAABIAAABIgBAMIgBACIgEAOIgBACIADAHIAAABIACABIACAFIAAABIAAACIAAACIACAbIAAABIAAABQAAAHgDAHQAAAHgDAIQgEAKgHAJIgEAFIgFAIIAAABIgHALIAAABIgQAQIgFACIgCAAIgHAEIgBgBIgDgBQgQgEgMAAIgIgDIgOgFIgGgIIgBgCQgBgHgDgJIgCgDIgFgQIgBgFIAAgOIgDgZIgBgKIAAgBIAAgDQABgHgGgFQgEAAgCgDIgBgBIgCgMIAAgEQABgRgBgKIgBgDQgEgXgLgBIgCABIAAgNIAEgYIgBgBIgGgFIgBgBIgBgCIABgGIgCgGIgDgGIAAgBIgEgJQgGgPgPgGIgLgEIgBgDQAAAAAAgBQAAAAAAgBQgBAAAAgBQgBAAAAAAQgIgBgLADIgLgDIgBgCQgEgGAAgIIgBgCIgBgCIgBgBIgKgBIgFgBIgFgBIgJACIgBAAIgBgBQgJgBgHgEIgBgBIgLgOIgBAAQgBgFgFABIgCABIAAAAIgEABQgJADgIgCIgCAAQgEAFgJABIgCgBIgFgBIAAAAIgJABIgBABIgPAGIgGACIAAABIgBABIgBABIgHAJIAAABIAAABQACABABAGIABAAIABAHIAAABIgCAFIAAACIgEAMIgCAEIAAACQgCAKgFAHIAAACIgJAWIgBAEIgBAGIAAABIAAANIAAACIAZAsIAEAHQAQAZABAaIAAACQAFALABAKQACARgRAYQgDAIgGAIQgJAQgKANIgIAMIAAADQgDALgIAMQgLAUgPARQgbAigUADQgKACgDgBIgBAAIgDgCQgcAHgRANIgCACQgIAEgHABIgNACQgDgIgEgDg");
	this.shape_69.setTransform(27.8,31.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AjgEfQgJgEgWgPIgDAAQgNAAgJgDIgFgDIgBgCQgEgNABgYIAAgCQgLgVABgDIgBAAIAAgJQAAgDABgCIADgHQAEgNAHgHIACgDIABgBIgFADIgFgBIgGgCIgDgCQgIgCgGgEQgggEgSgPQgJgGgFgKQgCgDAAgDIgBgBIAAgCQAAgHABgDQACgFAFgDQATgHATgLIADgBIAWgNIAFgSQgBgDgEgDQgEgGgEgOIAAgDIgFgVQgBgEAAgDIALgNQAHgKAHgIIABgBQABgHANgJIAEgHQACgDABgIIACgIQAAgMACgIIAFgHQAHgGAHgEQAMgFALgGIAHgEIACgMIAAgBIAHgHIADgJIAAgCQADgEAEgEIAAgBIAAgBIAFgFQAJgHAOgFIACAAIAAAAIABgBIABAAIACgBIABAAIABgBQAVgGAaADIACAAQAEAFAHgCIABAAIACgBQADgPANAAIABAAQAFAKACgIIAAgDIAAAAIAAgCQADgHAFgFIABAAIABAAIABAAIALgPIABgBIAIgHIABAAIABgCIADgCIAAgCQAIgEAKgBIABAAIAFABIABAAIAAAAIABAAIABAAIACABIABAAIACAAIAGAAIACABQAQgIAQgEIACgBIAFAAIACAAIAAgBIAEgCIABAAQAIgJAOAEIABABIAAAAQAGALAFgCIABABIALADIABAAQAPgHAPgEIACgBQAIgCAIABIACAAIABAAIAGADIABABIAFADIAEADIABABQAFADACAFIAAABIAZACIACABIABgBIAJAAIACABQAIACAHAGIAAABIADAEIABABIAGAZIAAABIAAABIABAAQAVABASAGIABAAIAJADQAIADADAIIAAABIABAAIADAVIABABIAAABIABABIAfAPIACAAIABACIABACIAGAKIABACIgCAIIgBACIgBAPIgBAAIAAACIgCAGIAAABIAAABIAAABIAAABQAJAMAOAIIABABIABAAIACADIAAABQAHAJAAAOIAAAAIAAABIAAABIgEAXIAAABIAAACIAAAAIAIAIIABAAIAMAKIABABIABABIAAABIgBANIAAACIgFANIgBACIADAHIAAABIABACIADAEIAAABIAAABIAAABIgBACIAEAbIAAABIAAABQgBAHgCAHQAAAHgDAIQgEAKgHAJIgEAFIgEAJIAAAAIgFAMIgBABQgGAIgIAIIgGACIgBABIgGAEIgBgBIgDAAQgOgCgMABQgFgCgDABIgOgEIgHgHIgBgBQgBgHgEgHIgCgDIgHgOIgBgFIgBgNIgEgZIgCgKIAAgBIAAgDQAAgHgFgEQgFgBgCgDIgBgBIgBgMIAAgEQAAgSgBgJIAAgEQgDgWgLgCIgCAAIABgMQABgMADgMIgBgBIgGgGIAAgBIgBgCIABgGIgCgGQgDgCgBgDIAAgCIgDgJQgGgQgOgFIgKgFIgCgDQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAgBAAQgIgCgLAEIgKgFIgBgCQgDgGgBgIIAAgBIgCgDIAAAAIgLgCIgEgBIgFgCIAAABIgJAAIgBAAIgBAAQgJgCgHgEIAAgBIgMgOIgBAAQgBgEgFABIgCABIAAAAIgEAAQgJAEgIgDIgCABQgEAEgJABIgCgBIgFgBIAAAAIgJAAIAAAAIgPAGIgHADIAAABIgBAAIAAABIgIAJIAAABIAAABQABABABAFIAAAAIABAGIgBAAIgCAFIAAACIgFALIgCAEIAAABQgCAKgGAHIAAABIgKAWIgBAEIgCAGIAAABIAAAMIAAADQALAQANAcIAEAHQAPAZABAaIAAADQAEALABAKQADASgOAXQgCAIgFAJQgIAPgJAOQgDAHgEAGIAAACQgDALgIAMQgMAUgPARQgcAhgTAEQgKACgDgBIgCAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgaAGgSAQIgCABQgIAEgHACIgNADQgDgHgEgDg");
	this.shape_70.setTransform(27.8,31.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AjbEfQgKgCgXgOIgCAAQgOAAgIgEIgFgDIAAgCQgEgOABgXIAAgCQgNgTABgEIgBAAIgCgHIAAgGIADgHQAEgNAIgGIACgDIAAgBIgEABIgFgBIgFgDIgDgBQgIgCgGgFQgfgDgTgOQgJgHgGgJIgDgFIAAgBIgBgDQAAgGACgDQACgGAFgDQARgHAUgMIADgBIAWgOQADgJACgIQAAgDgEgDQgEgHgBgNIAAgDIgDgWQgBgDABgDIAKgNQAHgLAHgIIABgBQgDgFAKgIIADgHIABgLIAAgIIABgTIAFgHQAHgHAIgDQALgEALgIIAGgDIADgMIABgBIAGgIIADgJIAAgBQACgFAEgDIABgBIAAgCIAEgFQAJgHAPgFIABAAIAAAAIABgBIACAAIABAAIACAAIAAgCQAWgGAZADIACAAQAFAEAHgBIABgBIABgBQAEgOANgBIABAAQAEAIADgIIAAgCIAAgBIAAgBQADgIAFgEIABgBIABAAIALgOIABgCQAEgEAFgDIAAAAIABgBIADgDIABgBQAHgFAKgBIABAAIAFABIABAAIAAgBIABAAIABAAIAAAAIACABIABAAIACAAIAHABIABAAQAQgHAQgEIACgBQABABABAAQAAAAABAAQABAAAAAAQABAAAAgBIACAAIABgBIADgBIACgBQAHgIAOAEIABAAIABABQAGALAEgDIABABQAEgBAHADIAAAAIABAAQAOgIAQgFIABAAQAIgCAJAAIACAAIAAABIAGADIACAAIAFAEIADACIACACQAFACACAEIABABIAYABIACAAIABAAIAKAAIABAAQAJACAGAGIABABIACADIABABQAFAMADANIAAABQAWACASAFIAAAAIAKACQAIADADAJIAAAAIABAAIAEAWIAAABIAAAAIABABIAfAPIACABIABACIACABIAGAKIAAACIgBAIIAAACIgCAPIAAAAIAAACIgCAGIAAACIAAAAIAAABIAAABQAJAMAPAHIAAABIABABIADADIAAAAQAHAJABAOIgBAAIAAABIABABIgEAWIAAACIABACQADAEAFAEIABAAQAHAEAEAFIACACIAAAAIABABIgBAOIAAACIgFANIAAABIACAIIAAAAIABACIACAFIAAABIAAACIAAABQABARADALIAAABIAAAAQAAAHgCAIIgCAOIgBAAQgDALgHAJIgEAFIgEAJIAAAAIgDAMIgBABIgOARIgFACIgBABIgFAFIgBgBIgCAAQgOAAgMACQgEgBgDABIgOgCIgHgFIgCgBQgCgFgFgGIgCgCIgIgOIgBgFIgCgNIgGgYIgCgJIAAgBIgBgDQABgHgGgFQgEAAgCgDIgBgCIgCgMIAAgEIAAgcIAAgCQgDgWgJgDIgCAAIABgNIAEgYIgBgBIgFgHIgBAAIAAgDQABgDgBgDIgCgGQgCgCgBgDIgBgBIgDgJQgFgRgNgGQgFgDgFgCIgCgDQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAAAgBAAQgIgCgLADIgKgFIAAgCQgDgGAAgIIgBgCIgCgCIAAAAIgKgCIgEgBIgFgDIgJAAIgBAAIgBgBIgPgGIgBAAIgMgOIgBAAQgCgDgEABIgCAAIgBAAQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBABgBAAQgJADgIgCIgCABQgFAEgIABIgCgBIgFgCIAAAAIgIgBIgBABIgQAFIgFADIgBABIgBABIgIAJIAAABIgBABQABAAAAAFIABAAIgBADIAAABIgDAEIAAACIgFALIgDADIAAABQgCAKgHAGIAAACIgLAVIgBAEIgCAFIAAABIgBANIAAACQALAQANAdIADAHQAPAZgBAbIAAADQAGAKABALQACASgLAXQgCAIgEAIQgGARgIANIgFAOIgBACQgDALgJAMQgLAUgQARQgcAggUAFQgJACgDgBIgCABQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQgZAHgSARIgCACQgIAEgHADIgNADQgDgGgEgDg");
	this.shape_71.setTransform(27.8,31.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AjXEhQgLgCgWgMIgCAAQgOAAgIgFIgEgDIgBgCQgDgPABgXIAAgCQgPgRAAgDIgBAAIgCgHQgCgDABgCIACgHQAEgOAIgGIACgDIAAgBIgDABIgEgCIgFgDIgDgCQgIgCgGgFQgfgDgUgNQgJgGgHgIIgCgFIgBgCIAAgCQAAgGACgEQABgFAFgDQARgIAUgNIACgBIAWgPQAEgJACgIQABgDgEgDQgDgGAAgOIABgCQABgNgCgJIAAgGIAKgOQAGgLAHgIIABgBQgHgDAJgIIABgGIgBgLIgBgHQgBgLAAgJIAFgGQAHgHAIgDQALgEALgIIAGgEIAEgLIAAgCIAGgHIADgJIAAgCQACgEAEgEIAAgBIAAgBIAFgFQAIgIAPgFIABAAIABAAIAAAAIACgBIACAAIABAAIABgBQAVgGAaABIACABQAFADAHgBIABAAIABgBQAEgPAMgBIABAAQAFAHADgIIgBAAIABgCIAAgBIAAgCQADgHAEgFIABgBIAAAAIACAAIALgOIAAgBIAJgIIABAAIAAgBIADgDIABgBQAHgFAKgBIABAAIAFAAIACAAIAAAAIABAAIABAAIACAAIABABIABgBIAHABIABAAQARgHAQgDIACAAIAFAAIACAAIAAgBIAEgBIACgBQAGgJAPAEIABAAIAAABQAGAMAEgEIABAAQAEgBAHADIAAAAIABAAQAOgIAPgGIACAAQAHgDAKABIABAAIABAAIAGADIABABIAGADIADADIACABQAFACADADIAAABIAYgBIACABIABgBIAKAAIACAAQAIACAHAFIAAABIADAEIABABQAFALADANIABABIAAAAQAVABASAFIABAAIAKACQAIADADAIIAAABIABAAIAEAVIAAABIABABIAAABIAfAOIACABIACACIABABIAGAKIABACIAAAIIgBACIgBAPIgBAAIAAACIgCAHIAAABIAAACIAAAAQAKALAPAIIABABIABAAIACADIAAABQAJAHAAAPIAAAAIAAABIAAAAIgDAXIAAABIABACIAAABQAEAEAFADIABABQAGAEAFAFIACABIAAABIAAABIABANIgBACIgFAOIAAACIACAHIAAAAIABACIABAFIAAABIAAACIAAABQACAQAEALIAAABIAAABIgCAOIgCAPIgBAAQgDALgHAJIgEAFIAAAAIgCAJIAAAAIgDAMIAAABQgGAIgIAJIgEADIgCAAIgDAGIgBAAIgCAAIgYAGIgHABIgOgBIgIgEIgBAAQgDgEgGgFIgDgBIgJgMIgBgFIgDgNIgHgXIgDgKIAAgBIgBgDQAAgGgGgFQgEgBgCgDIgBgBIgCgNIAAgDIABgdIAAgDQgDgUgIgFIgCAAIABgMIAFgZIgBgBIgFgHIAAgBIgBgCIABgGIgCgGQgDgCgBgDIgBgCIgCgIQgFgSgMgGQgFgEgFgCIgBgDQAAAAAAgBQAAgBgBAAQAAAAAAgBQgBAAAAAAQgJgCgLADIgJgGIAAgCQgDgGAAgJIgBgBIgBgCIgBAAIgKgCIgEgCIgEgDIgIgBIgBgBIgBAAIgQgGIAAgBQgGgHgHgFIgBAAQgCgEgEABIgCAAIgBAAQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBAAgBAAQgJAEgIgCIgCABQgFAEgIAAIgCAAIgFgCIAAgBQgFAAgDgBIgBAAIgQAFIgGADIgBABIAAABIgIAJIAAAAIgBABIAAAFIgBABIAAABQAAAAAAAAQgBAAAAAAQAAABgBAAQAAABgBABIgBACIgGAKIgDADIAAABQgCAKgIAFIAAACIgMAVIgBADIgDAFIAAABIgBANIAAACQAMAPAMAfIADAHQANAZgBAbIAAADQAFALACAKQADATgJAXQgBAIgDAIQgFARgHAOIgEAOIgBACQgCALgKAMQgLATgRARQgdAggTAFQgJADgEgBIgBABIgDAAQgXAHgSATIgCACQgIAEgHADIgMADQgEgFgFgBg");
	this.shape_72.setTransform(27.8,31.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AjSEiQgMgBgWgLIgCAAQgPAAgHgFIgEgEIAAgCQgEgQACgWIAAgCIgRgRIgBAAIgEgHQgCgDABgCIACgHQADgOAIgGIACgCIABgCIgCAAIgEgCIgFgDIgDgCQgHgDgGgGQgfgDgVgLQgJgGgIgHIgDgFIAAgBIgBgDQAAgGACgEQACgFAFgDQAQgJAUgNIACgCQAPgJAHgGQAEgJACgHQACgEgDgDQgDgGACgNIABgDQADgNgBgIIAAgHIAJgOQAGgLAHgIIAAgCQgKAAAHgHIgBgGIgDgLIgCgHQgDgLABgJIAFgGQAGgHAIgCQAMgEAKgIIAGgFIAEgLIAAgBIAGgIIACgJIAAgBQACgFAEgEIAAgBIABgBIAEgFQAIgIAPgFIACAAIAAAAIABAAIABgBIACAAIABAAIABgBQAVgGAbABIABAAQAGADAGgBIABAAIACgBQAEgPAMgCIABAAQAFAGACgIIABgCIAAgBIAAgBQACgIAEgFIABgBIABAAIABAAIALgOIABgCQADgEAFgDIABAAIAAgBIADgDIABgBQAHgFAKgCIABABIAGgBIABAAIABAAIAAAAIABAAIACAAIABABIABgBIAHAAIACABQARgHAQgCIABgBQADACADgBIACAAIAAAAIAEgCIABAAQAGgKAPAEIABAAIAAABQAGANAEgFIABAAQAEgCAHACIAAAAIABABQAOgJAPgGIABgBQAIgCAJAAIACAAIAAAAIAGADIACABIAFADIAEADIACABQAFABADADIABAAIAYgBIABAAIABgBIAKAAIACAAQAIABAHAFIABABIADAEIABABIAJAYIAAABIABAAQAVAAASAEIABABIAJACQAJACADAIIAAABIABAAQADAJABAMIAAACIABAAIABABIAfAOIACABIABACIACABIAGAKIABACIAAAIIgBACIgBAOIAAABIAAACIgCAHIAAABIAAAAIAAABIAAABQALAKAPAIIAAABIABAAIADADIAAABQAJAHABAOIgBABIAAAAIABABIgDAXIAAABIACACIAAAAIAJAIIABAAIALAJIACABIAAABIAAABIABAOIAAABIgFAOIgBACIACAIIAAAAIABACIABAEIAAAAIAAABIAAACIAAABQACARAEAKIAAABIABABIgCAPQAAAHgCAHQgEALgGAJIgEAFIAAABIgCAIIAAABQABAFgCAGIAAABQgGAJgHAJIgFADIgBABIgCAGIgDABIgWAJQgEAAgDACIgOABIgIgCIgCgBQgDgDgHgCIgDgBIgLgLIgCgFIgDgMIgIgXIgEgJIAAgBIgBgDQgBgHgFgEQgEgCgCgCIgBgCIgCgNIAAgDIABgdIAAgDQgCgUgIgGIgBAAIABgNIAFgZIgBgBIgEgHIAAgBIgBgCIABgGIgCgGQgDgCgCgDIAAgBIgCgJQgFgSgLgHQgFgEgFgCIgBgDQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBAAAAAAQgIgDgLAEIgJgHIAAgCQgDgHABgIIgBgBIgCgCIgBAAIgKgDIgDgCIgEgDQgEgCgEgBIgBAAIgBgBIgPgGIAAgBQgGgGgIgGIgBAAQgCgDgEABIgCAAIgBgBQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgKADgIgBIgCAAQgFAEgIABIgCgBIgEgCIgBgBQgEAAgDgCIgBAAIgQAEIgHADIAAABIgBAAIAAABIgHAJIgBAAIgBABIgBADIAAABIgBAAIABgBIgCABIAAAAQAAAAgBAAQAAAAAAAAQgBABAAAAQgBABgBABIAAACIgHAJIgEADIAAABQgCAKgIAEIgBACIgMAUIgCADIgDAFIAAABIgCANIAAACQAMAOALAgIADAHQAMAbgBAaIAAADQAFALABAKQAEATgHAXQABAIgDAJQgCAQgHAPQgBAHgCAHIgBACQgCALgKANQgLASgSARQgdAfgTAGQgJADgEAAIgBABIgDAAQgVAIgTAVIgCABIgOAIIgNAEQgEgEgFgBg");
	this.shape_73.setTransform(27.8,31.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AjOEjQgMAAgWgKIgCAAQgPAAgIgFIgDgEIAAgDQgDgQACgWIAAgCIgUgPIgBAAIgFgGIgCgFIACgHQADgNAJgHIACgCIAAgBIgBgBIgDgDIgFgEIgDgCQgHgDgGgGQgegDgWgKQgKgFgIgHQgDgCAAgCIgBgCIAAgDQAAgFACgEQACgFAFgEQAPgJAUgPIACgBIAVgPIAHgRQACgEgCgCQgCgHAEgNIAAgCQAFgOAAgHIAAgHQAFgGAEgIQAGgMAGgIIABgCQgOABAEgGIgCgFQgDgDgDgIIgCgHQgEgKAAgJIAFgGQAGgHAIgCQAMgEAKgIIAGgFIAEgMIAAgBIAGgIIACgJIAAgBQACgFADgEIABgBIAAgBIAEgFQAIgHAPgFIACAAIAAgBIABAAIACgBIABAAIACAAIABgBQAUgGAbABIACAAQAFADAHgCIABAAIABgBQAFgOAMgDIABgBQAEAFADgHIAAgCIAAgBIAAgCQADgHAEgGIAAgBIABAAIABAAQAGgGAFgIIABgCQADgEAFgCIABgBIAAgBIADgDIABgBQAHgFAKgCIABAAIAGAAIABAAIABgBIABAAIAAAAIACABIABAAIABAAIAHgBIACABQARgHARgBIACgBQACACACAAIACAAIABgBIADgBIACAAQAFgLAPAEIABABIAAAAQAGAOAEgGIAAAAQAEgCAIABIAAAAIABAAQANgJAQgHIABgBQAHgCAKABIABAAIABAAIAFADIACAAIAGAEIAEACIABABQAGAAADADIABAAIAYgDIABAAIABgBIAKAAIACAAQAIABAHAFIABAAIADAEIABABIALAXIAAABIAAABIAAAAQAVgBATAEIAAABQAGAAAEABQAJADADAIIAAAAQAEAJABANIAAABIABAAIABACIAfAOIACAAIACACIABABIAHAJIABADIAAAHIAAACIgCAPIAAABIAAACIgBAHIAAABIAAAAIAAABIAAABQALAKAPAHIAAABIABAAIADADIABABQAJAHABAOIAAABIAAABQgCANAAAJIAAACIACACIAAAAIAJAHIABABIAMAIIACABIAAACIAAABIABANIAAACIgFAOIgBACIABAHIAAABIABACIABAEIAAABIAAABIAAABIAAACQACAPAGAKIAAABIAAABQABAHgCAIQAAAHgCAIQgEAKgGAKIgEAFIAAAAIgBAJIAAAAQACAFgBAHIgBABQgFAJgHAJIgEAEIgBABIgBAGIAAABIgCABIgWAMQgDABgDADIgOADQgEgCgEAAIgCAAQgFgCgHgBIgEAAIgMgKIgCgFIgEgMIgKgWIgEgJIgBgBIgBgDQgBgGgFgFQgEgBgBgDIgBgBQgDgHAAgGIAAgEIABgcIABgEQgCgVgGgGIgCAAIACgNIAFgZIgBgBIgEgHIAAgBIAAgDIABgGQgBgDgCgDQgDgBgBgDIgBgCIgCgJQgFgTgKgGIgIgHIgCgDQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAQgIgDgLAEIgIgJIAAgBQgCgHAAgIIgBgBIgCgCIAAAAIgKgDIgDgCIgEgFIgIgDIAAAAIgBgBIgPgHIgBgBIgOgLIgBAAQgCgDgFABIgBAAIgBgBQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBAAAAABQgKADgIgBIgCAAQgFAEgJAAIgBgBIgEgCIgBAAIgHgEIgBAAIgQAEIgHADIgBABIAAABIgIAIIgBABIgBAAIgDADIABAAIgBAAIAAAAIgBgCIgBABQAAgBAAAAQgBAAAAAAQgBAAAAABQgBABgBABIAAACIgIAJIgEACIAAABQgDAKgIAEIgBABIgNATIgDAEIgDAFIAAABIgDAMIABACQANANAKAhIACAIQALAbgBAaIAAADQAEALACAKQAEAUgEAXQABAIgBAIQgBARgGAPQAAAIgCAHIgBACQgCAKgKANQgMASgSASQgeAegTAHIgMADIgBABQgBgBAAAAQAAAAAAABQgBAAAAAAQAAAAgBABQgUAIgTAWIgCACIgOAIIgMAFQgFgDgGgBg");
	this.shape_74.setTransform(27.8,31.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AjJElQgNABgWgJIgDAAQgPAAgHgGIgCgFIgBgCQgCgRABgVIAAgCIgVgNIgBAAIgHgFQgCgDAAgCIABgIQADgNAJgGIACgCIAAgCQAAAAABAAQAAAAAAgBQgBAAAAAAQAAAAAAAAIgDgEIgEgEIgDgCQgHgEgGgGQgegDgWgJQgLgEgIgHQgDgCgBgCIAAgBIgBgEQAAgFACgEQACgFAFgEQAPgJAUgQIACgBIAVgQIAIgQQACgFgCgCQgBgHAFgMIABgDQAHgNAAgHIAAgHIAJgPQAFgMAGgIIABgCQgSADADgFIgFgFIgHgKIgDgHQgGgLAAgJIAFgGQAGgGAIgCQAMgDAKgJIAGgGIAEgLIAAgBIAGgIIACgJIAAgBQABgGAEgEIAAgBIAAgBIAFgFQAHgHAQgFIABAAIABAAIAAgBIACAAIACgBIABAAIABgBQAVgFAbgBIABABQAGACAHgBIABgBIABgBQAFgOALgEIABAAQAFAEADgHIgBAAIABgDIAAAAIAAgCIAGgOIAAAAIABAAIABgBIAMgOIAAgBIAJgHIAAgBIABgBIADgDIAAgBQAIgFAJgCIABAAIAGgBIACAAIAAgBIABAAIABABIABAAIACAAIABAAIAGgBIACABQARgHASAAIABAAIAGACIACAAIAAgBIADgBIABAAQAFgMAPAFIABAAIAAABQAGAOADgHIABgBQAEgCAIABIAAAAIABAAQANgKAPgHIABgBQAIgCAJAAIACAAIAAAAIAGADIABABIAHADIAEACIABABQAGAAAEACIAAAAIAYgEIABAAIABgBIAKgBIACAAQAIABAIAEIAAABIAEADIABACQAGAKAFAMIAAABIAAABIABAAQAVgBASADIABABQAFAAAFABQAIACAEAIIAAAAQAEAKABAMIABACIAAAAIABABIAfAOIADABIABABIABABIAHAJIACADIAAAHIAAACIgBAPIgBABIAAACIgBAHIAAABIAAACIAAAAQAMAJAPAHIABABIABABIADACIAAABQAKAGABAPIAAABIABAAQgCANAAAKIAAABIACACIABABIAJAHIABAAIAMAJIABABIABABIAAABIACAOIgBABQgDAHgCAHIgBACIABAIIAAABIABABIAAAFIAAABIAAAAIAAACIAAACQADAPAGAKIAAABIABAAIgBAQQAAAHgCAHQgEALgGAKIgDAFIgBAAIABAJIAAAAQACAFgBAHIAAABQgFAKgHAJIgEAEIgBAAIABAIIAAAAIgCACIgUAQIgGAEIgOAFQgEgBgFABIgCAAQgFgBgJABIgEAAIgNgJIgCgFIgFgLIgLgVIgFgJIgBgBIgBgDQgCgGgEgFQgEgCgCgCIgBgCQgCgHgBgGIAAgEIACgcIAAgDQgBgVgFgIIgBgBIACgLIAEgaIAAgBIgDgIIAAgBIAAgCIABgGQgBgEgCgCQgEgBgBgDIgBgCIgBgJQgFgUgJgGIgIgIIgBgDQAAgBgBAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQgIgEgLAFIgHgKIAAgBQgCgHAAgJIAAAAIgCgCIgBAAIgKgDIgDgDIgDgFQgDgDgEgBIgBgBIgBAAIgPgIIAAAAQgHgGgIgEIgBAAQgCgDgFAAIgBAAIgBgBQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQgKAEgIgBIgCAAQgFADgJABIgBgBIgEgCIgBgBQgEgCgDgDIAAAAQgIABgJADIgHADIgBABIAAABIgIAIIgBAAIgBABIgFACIAAAAIAAAAIAAAAIgCgEIgBABQAAgBAAAAQAAgBAAAAQgBABgBAAQAAABgBABIgBACQgEAGgEACQgBAAAAABQgBAAAAAAQgBAAgBAAQAAABgBAAIAAABQgDAKgJADIgBABIgOATIgDADIgDAFIAAABIgEAMIABADQANALAJAjIADAHQAJAcgBAaIAAADIAGAWQAEAUgBAWQACAJgBAIQABARgFAQQABAIgCAHIAAACQgCAKgLANQgMASgTARQgfAegSAHIgMAEIgCABIgCABQgTAJgTAYIgCACIgOAIIgMAFQgFgCgGABg");
	this.shape_75.setTransform(27.8,31.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AjpEgIgCAAQgQAAgGgGIgDgFIAAgDQgCgSACgUIAAgCIgYgLIgBAAIgIgEQgCgDgBgCIABgIQADgOAJgFIACgCIABgCQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIgDgEIgDgFIgDgCQgHgEgGgHQgegCgXgIQgKgEgKgGIgDgDIgBgCIAAgEQAAgEACgFQACgFAFgEQANgKAUgQIADgCQAOgKAGgGIAJgQQACgFgCgCQAAgHAIgMIABgCQAIgOABgIIAAgFIAJgPQAFgNAFgJIABgBQgWAFABgFIgGgFQgFgDgFgHIgEgGQgGgKgBgJIAEgGQAHgHAIgBQAMgDAJgKIAGgGIAFgLIABgBIAEgIIACgJIAAgBQACgGADgEIAAgBIABgBIADgFQAIgHAQgGIABAAIAAAAIABAAIACgBIACAAIABAAIACgBQAUgGAbAAIABAAQAHACAGgBIABgBIABgBQAGgOALgEIABgBQAEACAEgGIgBAAIABgCIAAgBIAAgCIAFgOIAAgBIABAAIACAAQAGgGAFgIIAAgCQAEgEAFgDIAAAAIAAgBIADgDIABgBQAIgGAJgCIAAABIAHgCIABAAIABgBIABAAIAAABIADAAIABAAIABgBIAGAAIACAAQARgGASAAIACAAQACACADABIACAAIABgBIADgBIACAAQAEgMAPAFIABAAIAAABQAFAPADgJIABAAQADgEAIABIABAAIAAABQANgLAPgIIABgBQAIgCAKAAIABAAIAAAAIAGADIABABIAHADIAEACIACABIAKAAIABAAIAWgFIADAAIAAgBIAKgBIACgBQAJABAHAEIABABIADADIABABQAHALAGAMIAAABIABAAQAUgBATADIAAAAIAKABQAJACAEAIIAAAAQAFAJAAANIAAACIABAAIABABIAgAOIABABIACABIACABIAHAJIABACIACAIIgBACIgBAPIgBAAIAAACIgBAIIAAABIAAACQANAIAPAHIABABIABABIADACIABABQAKAGABAOIAAABIABABQgBANAAAJIAAACIADACIAAAAQAEAEAGADIABABQAGADAFAFIACABIAAABIAAABIADAOIgBABIgFAOIAAACIAAAIIAAABIAAABIAAAFIAAABIAAACIAAACQADAPAHAKIAAABIABAAQABAHgBAJQAAAHgCAHIAAAAQgEALgFAKIgEAFIgBABIACAIIAAABQACAFABAGIAAABQgFAKgGAKIgEAEIgBABQAAAEABAEIABABIgCABQgIALgLAJIgGAFIgNAHQgEgBgFACIgDABIgPACIgFABIgOgIIgDgFIgGgLIgMgVIgFgIIgBgBIgBgDQgCgGgFgFQgEgCgCgCIgBgCQgCgHAAgGIAAgEIACgcIAAgDQgBgVgEgJIgBgBIACgMIAFgZIgBgBIgCgJIAAgBIAAgCIABgHQgBgDgCgDQgDAAgCgDIgBgCIgBgJQgEgUgIgHQgEgFgEgDIgBgDQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQgIgEgMAEIgGgKIAAgCQgCgHABgIIgBgBIgCgCIAAAAIgKgDIgCgDIgEgFIAAgBQgCgDgFgCIAAAAIgBgBIgOgIIgBAAQgHgGgIgEIgBAAQgDgCgFAAIAAAAIgBgBQAAgBgBAAQAAAAAAgBQAAAAgBAAQAAAAAAABQgKADgIgBIgCAAQgGAEgIAAIgBgBIgFgCIgBgBQgDgCgDgEIgBAAQgHABgJACIgGADIgBAAIAAABIgBABIgIAIIgBAAIgCABIgGACIABgBIgEgGIgBABQAAgDgDAEIgBABQgFAGgEADIgFAAIgBABQgDAKgJADIgBABIgPASIgDADIgEAFIAAABIgEAMIABACQANALAJAkIABAIQAJAbgCAbIAAADIAGAWQAFAVABAWQADAIABAIQACASgEAQQABAIgBAHIAAACQgCALgMANQgMARgTARQgfAdgTAIIgLAFIgCABIgDABQgRAKgTAZIgDACIgNAJIgMAGQgFgBgHAAIgHABQgMAAgRgGg");
	this.shape_76.setTransform(27.9,31.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AjlEjIgDAAQgPAAgGgHIgCgGIgBgCQgBgTACgUIAAgCQgXgIgDAAIgCAAIgJgEQgDgDAAgCIAAgHQADgOAJgGIACgCIABgBQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIgCgFQgBgDgCgCIgDgDQgIgDgFgIQgdgCgYgHQgLgDgKgFIgEgEIgBgBIAAgEQAAgFACgEQACgFAFgFIAhgbIACgCIAUgRIAKgPQADgFgCgCQABgHAJgNIACgCQAKgNABgIIABgFIAHgQQAFgNAGgJIAAgBQgZAHgBgEIgJgFQgFgDgGgGIgFgHQgIgKgCgJIAFgGQAHgGAIgBQAMgDAJgKIAGgGIAFgLIAAgBIAFgJIABgJIAAgBQACgFADgFIAAgBIABgBIAEgFQAHgHAQgFIABAAIABAAIAAgBIACAAIACgBIABAAIACgBQAUgFAbgBIACAAQAGABAGgBIABgBIACgBQAGgNAKgGIABAAQAFABADgHIgBAAIABgCIAAAAIAAgCIAFgOIAAgBIABAAIABgBQAHgGAFgIIAAgBIAJgHIAAgBIAAgBIAEgDIAAgBQAIgGAJgCIAAAAIAHgBIACAAIAAgBIABAAIABAAIABAAIACAAIAAAAIAHgBIACAAQARgFASAAIACAAQACADADAAIADABIAAgBIAEgBIABAAQAEgNAOAFIABAAIAAABQAGAQADgKIAAAAQAEgEAIAAIABAAIAAAAQANgLAPgIIABgBQAHgDAKABIABAAIABAAIAFADIACAAIAHAEIAEACIABAAIALgBIABAAIAXgGIABgBIAAgBIALgBIACAAQAIAAAIAEIABAAIADAEIACABQAHAKAGAMIAAABIABAAQAVgCASADIABAAIAKABQAJACADAIIABAAQAFAJAAANIAAABIABAAIABACIAgANIACABIACABIABABIAHAJIACACIABAIIAAACIgBAPIAAAAIAAACIgBAIIAAABIAAACIAAAAIAdAPIAAABIABAAIADACIABABQALAGACAOIAAABIAAAAQgBAOABAJIAAABIADACIAAABIAKAHIABAAIAMAIIABABIABACIAAABIADANIgBACQgDAGgCAIIgBACIABAIIgBAAIABACIgBAFIAAAAIAAABIAAACIABABQACARAJAIIAAABIAAABQABAHAAAIQAAAHgCAIIgBAAQgDALgGAKIgDAFIAAABIACAIIAAABQADAFABAGIAAABQgEALgGAJIgEAFIgBABIADAIIABABIgCACQgHANgLAKIgFAHIgNAIQgEAAgGADIgDABIgRAEIgEACIgQgHIgDgEIgHgLIgOgUIgGgJIAAgBIgCgDQgDgFgEgFIgFgFIgBgBQgDgHAAgHIAAgEIACgcIABgDQAAgUgEgLIgBgBIADgMIAFgZIgBgBIgCgJIAAgBIABgDQABgDAAgDQgBgEgDgCQgEgBgBgCIgBgCIgBgJQgEgVgHgHQgDgGgEgDIgBgDQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAAAgBgBQgIgFgMAFIgFgLIAAgCQgBgHABgJIgBAAIgCgCIgBAAIgKgDIgCgDIgDgHQgCgEgEgCIgBgBIgBAAQgGgFgIgDIgBgBQgHgFgIgEIgBAAQgDgCgFABIgBgBIgBgBQAAgBAAAAQAAAAAAAAQAAgBgBAAQAAAAgBAAQgJAEgJgBIgBAAQgGADgJABIAAgBIgFgDIgBgBQgEgDgCgEIAAAAQgIABgJACIgHADIAAAAIgBABIAAABIgJAIIgBAAIgBAAIgIABIAAAAIgDgIIgBABQgBgEgEAEIgBACQgEAFgFACIgFABIgBAAQgDAKgLACIAAABIgRASIgDADIgEAEIAAABIgEAMIAAADQAPAJAHAmIACAHQAHAcgCAcIAAADIAFAVIAKArQADAJACAIQAEASgEAQQADAIgBAIIgBACQgBAKgMAOQgMAQgVASQggAcgRAJIgMAFIgCABIgCACQgQAKgTAbIgDACIgNAKIgMAGIgMABIgLABQgMAAgOgEg");
	this.shape_77.setTransform(27.9,31.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AjiEnIgCAAQgPAAgGgIIgCgFIAAgDQgCgTADgUIAAgCQgZgGgEABIgBAAIgLgEQgDgDAAgCIAAgHQACgOAJgGIACgCIABgBQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBIgBgFIgDgFIgDgDQgHgEgFgJQgegBgYgGQgMgDgKgEQgEgCAAgCIgBgBIgBgEQAAgFADgEQACgFAEgFIAhgdIACgBIAUgSIAKgPQADgFgBgCQABgHALgMIADgDQAMgMACgJIAAgGIAIgPQAEgNAFgJIABgCQgeAJgDgDIgKgEQgGgDgHgHIgGgGQgJgKgDgJIAFgGQAHgGAJgBQALgCAKgLIAFgGIAFgLIAAgBIAFgIIABgKIAAgBQABgFADgFIABgBIAAgBIAEgFQAHgHAQgFIABAAIABgBIABAAIACgBIABAAIACAAIABgBQAUgFAcgCIACAAQAFABAHgBIABgBIABgBQAHgNAJgGIABgBQAFAAAEgGIgBAAIABgDIAAgCIAEgOIABgCIAAAAIACAAQAGgGAFgIIAAgCQAEgEAFgCIAAgBIABgCIADgCIABgCQAHgFAJgCIABAAIAHgCIABAAIAAAAIAAgBIABAAIABAAIACAAIABAAIABAAIAGgBIACAAQASgFASABIACAAIAFAEIACAAIABgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAIACgBQADgNAQAFIAAAAIAAABQAFARADgLIAAgBQAEgEAIAAIABAAIAAAAQAMgMAPgJIABgBQAHgDALABIABAAIAAAAIAFADIACAAIAHAEIAEABIACABIALgCIABgBIAXgHIABAAIABgCIAKgCIACAAQAIAAAJAEIAAAAIAEAEIABABQAIAKAGALIABABIABAAQAUgCATADIABAAIAJABQAKABADAIIABAAQAFAIAAAOIABABIAAABIABABIAgANIACABIACABIABABIAIAIIACADIACAHIgBACIAAAPIgBABIAAACIAAAIIAAABIAAACIAdAOIABABIABAAIADACIAAABQAMAFACAOIAAABIABABQgCANACAJIAAACIADACIABAAIAJAHIABAAIANAIIABABIABACIAAABIADANIAAACQgEAGgCAIIAAACIAAAIIgBABIABABIgBAFIAAABIAAAAIAAACIAAACQADAQAJAJIAAABIABAAQABAHAAAIQAAAHgCAIIgBAAQgDALgFAKIgDAGIgBAAQABAFACAEIAAAAQAEAFACAHIAAABQgEAKgGAKIgDAFIgBABIAEAJIABABIgBADQgGAOgLANIgFAHQgGAGgHAEQgEABgHADIgCABIgTAHIgFACIgRgFIgEgEIgHgKIgPgUIgGgIIgBAAIgBgBIgBgDQgDgGgFgFIgFgFIgBgBQgDgHAAgHIAAgEIADgcIABgDQAAgUgDgMIAAgBIADgNIAFgYIgBgCIgBgJIAAAAIAAgBIABgDQABgDAAgDQgBgEgDgCQgEAAgBgDIgBgCIgBgJQgEgWgGgHQgDgGgEgDIgBgDQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQgIgGgMAFIgEgMIAAgBQgBgIABgIIgBgBIgCgBIgBAAIgKgEIgBgDIgCgHIAAgBQgDgEgEgDIAAAAIgBgBQgHgFgIgDIAAgBQgHgEgJgEIgBAAQgDgCgFABIgBgBIgBgBQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAAAgBAAQgJADgIAAIgCAAQgGADgJAAIAAgBIgFgDIgBgBQgDgDgCgFIgBAAQgIAAgJADIgGACIgBABIgBABIgJAIIgBAAIgBAAIgJABIAAgBIgFgJIAAAAQgBgFgFAFIAAABQgFAGgFABIgGAAIAAABQgEAKgMABIAAABIgSARIgDADIgEAEIAAABIgFAMIAAADQAPAIAHAnIABAIQAGAcgCAcIAAAEIAFAUQAFAWAHAVQAFAJACAJQAGASgDARQADAIAAAHIAAADQgCAKgMANQgMAQgWASQggAcgRAJIgMAFIgCACIgCACQgOAKgUAdIgDACIgNALIgLAGIgOADQgHACgIAAQgKAAgNgDg");
	this.shape_78.setTransform(27.9,31.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AjeEqIgCAAQgQAAgFgIIgCgGIAAgDQgBgTACgTIAAgCQgagEgEAAIgCAAIgMgCQgDgDgBgCQgBgDABgFQABgOALgGIACgBIAAgBQADgCAAgDIAAgGQgBgDgCgDIgDgDQgHgEgFgJQgdgBgZgFQgMgCgLgEQgEgBgBgCIgBgBIgBgFQAAgEADgFIAHgJIAggfIACgBIAUgSIAKgPQAEgGgBgBQACgIANgMIADgCQAOgNACgIIABgGIAHgPQAEgOAFgJIAAgCQghALgFgCQgGgBgGgDQgHgDgIgGIgIgHQgKgJgDgJIAFgGQAHgGAJgBQAMgBAJgMIAFgGIAFgLIABgBIAEgJIABgJIAAgBQABgGACgEIABgBIAAgCIAEgFQAHgHAQgFIABAAIABAAIABgBIACAAIACgBIABAAIABgBQAUgFAcgCIACAAQAGABAHgBIABgBIABgCQAHgNAJgHIABAAQAFgCADgGIAAAAIAAgCIAAAAIAAgCIAFgPIAAgBIABAAIABgBQAGgGAFgIIAAgCQAEgEAFgCIAAgBIABgBIADgDIABgBQAHgGAJgCIABAAIAHgCIABAAIAAgBIABgBIABAAIAAAAIACABIABAAIABgBIAGgBIACAAQASgFASACIACAAQADADACABIADAAIABAAIADgBIABAAQADgNAQAEIABABIAAABQAFARACgMIAAgBQADgFAJAAIABAAQAMgNAPgJIAAgBQAIgDAKAAIACAAIAAABIAFADIABAAIAIADIAEACIACABIALgEIABgBIAXgJIABAAIABgBIAKgCIACgBQAJAAAIADIABABIADADIACABQAIAKAHALIAAABIABAAQAVgCATACIAAAAIAKAAQAJACAEAHIABAAQAFAIABAPIAAABIAAAAIABABIAgANIADABIABABIACABIAIAIIABADIADAHIAAACIgBAPIAAABIAAACIgBAIIAAABIAAACIAeANIABABIABABIAEACIAAAAQAMAFADAOIAAABIABABQgCANACAJIAAACIADACIABAAIAKAGIABABIAMAIIACABIAAABIABABIADAOIAAABQgEAHgCAIIAAABIAAAJIgBAAIAAACQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAAAIAAABIAAABIAAABIAAACQADARAKAJIAAABIABAAQACAHAAAIQAAAHgCAHIgBAAQgCAMgGAKIgDAFIAAABQABAFACAEIABAAQAEAFADAHIgBABQgDALgGAKIgDAFIAAABIAFAKIABABIgBADQgFAQgLAOIgEAJQgFAGgJAGIgKAFIgDABIgUAKIgGADIgSgFIgEgEIgIgKIgRgTIgGgIIgBAAIgBgBIgCgDIgHgKIgFgFIgBgCQgEgHAAgHIAAgDIAEgcIAAgEQABgTgBgNIAAgBIACgOIAFgYIAAgCIgBgKIABAAIAAgBIABgDQABgDgBgDQAAgDgDgDQgFAAgBgDIgBgBIgBgJQgDgXgFgIIgHgJIgBgDIgDgDQgIgGgMAFIgDgNIAAgCQgBgHACgIIgBgBIgDgBIgBAAQgFgBgEgDIgBgEIgCgHIAAgBQgDgFgEgDIgBgBQgGgFgIgEIgBAAQgHgFgKgDIgBAAQgDgBgEAAIgBgBIgBgBQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAAAgBAAQgJACgIABIgCAAQgHACgIABIgBgBIgEgEIgBgBQgDgDgCgGIAAAAQgIAAgJADIgHACIgBAAIAAABIAAABIgKAHIgBABIgBAAQgHAAgEgBIAAAAIgFgMIgBABQAAgFgGAEIAAABQgHAGgEABIgGgBIAAABQgEAJgNABIAAABIgTARIgDACIgFAEIAAABIgFANIAAACQAPAHAGAoIABAIQAGAcgDAdIAAAEIAFAVQAFAWAKAVQAGAJADAIQAGATgCARQAEAIAAAIIAAADQgBAJgMAOQgNAQgWARQghAbgRAKIgLAGIgCACIgCADQgNAKgVAfIgCACQgGAGgHAFIgLAHIgOAEQgJAEgLAAQgJAAgKgDg");
	this.shape_79.setTransform(27.9,31.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AjbEuIgBAAQgQAAgFgIIgCgGIAAgEQgBgUADgSIAAgCQgbgDgGACIgBAAIgOgCQgEgDAAgCQgBgCAAgGQABgOAKgGIACgBIABgBQAEgCABgEIAAgGIgDgGIgDgEQgHgEgFgJQgdgCgagDQgNgCgLgDQgEgBAAgCIgCgBIgBgFQAAgEAEgFIAGgJIAgggIABgCIAUgSIALgPQAEgGAAgBQADgIAOgMIADgCQARgMACgIIABgHQADgGADgJQAEgPAFgJIAAgCQglAOgHgCIgNgEQgJgCgJgHIgIgGQgMgJgDgJIAFgGQAHgGAJAAQALgBAKgMIAFgHIAFgLIAAgBIAFgJIAAgJIAAgBQABgGADgFIAAgBIAAgBIAEgFQAHgHAQgFIABAAIABgBIABAAIACgBIACAAIABAAIABgBQAUgFAcgDIADAAQAGABAGgCIABAAIABgCQAHgNAJgHIABgBQAFgDADgGIABgCIAAgCQACgHABgIIABgCIABAAIABAAQAGgGAFgIIAAgCQAEgEAFgCIAAgBIAAgCIAEgDIABgBQAHgFAIgDIABAAIAIgCIABAAIAAgBIAAgBIABAAIABAAIACABIABAAIABgBIAGgCIACABQASgFATADIABAAQADADADABIACABIABgBIADAAIACAAQACgPAQAFIABABIAAAAQAFASACgNIAAgBQADgFAJgBIAAAAIABAAQALgNAPgKIAAgBQAIgDAKAAIACAAIAAABIAFADIACAAIAIADIADACIACAAIANgFIABAAIAVgLIACAAIABgBIAKgDIACAAQAJgBAIADIABABIADADIACABIAQAUIAAABIAAABIABAAQAVgDATABIABAAIAJABQAKABADAHIABAAQAGAIAAAPIAAABIABAAIABABQAQAHARAGIACABIABABIACAAIAJAJIABACIADAIIAAABIgBAPIAAABIAAACIAAAJIAAABIAAAAIAAABIAAABIAeAMIABABIABABIAEABIAAABQANAEADAOIAAABIABABQgCANADAJIAAACIADACIABAAIALAGIABABIAMAIIABAAIABACIAAABIAEAOIAAABQgEAHgCAIIAAACIgBAIIAAAAIAAACQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAIAAABIAAABIAAABIABACQADARAKAIIAAABIABABQADAHAAAJQAAAGgDAIQgDALgEAKIgEAGIAAAAQABAFADAEIABAAQAFAFADAHIAAABQgDALgFALIgEAFIAAABQADAGAEAFIABABIgBADQgEATgKAPIgEAKQgFAHgJAHIgLAGIgCACIgWAMIgGADIgUgDIgFgEIgJgJIgSgTIgHgIIgBAAIAAgBIgCgDIgIgKIgFgFIgBgBQgDgIgBgHIAAgDIAEgcIABgEQABgTAAgOIAAgCIADgNIAFgZIAAgCIgBgKIABAAIAAgBIABgDQABgDAAgDQgBgDgDgDQgEAAgCgCIgBgCIAAgJQgDgXgFgIIgGgLIgBgCIgCgDQgJgHgMAGIgCgOIgBgCIACgQIgBAAIgDgCIAAAAQgGgBgEgDIgBgEIgCgIIAAgBQgCgFgDgEIAAAAIgBgBQgHgFgIgEIAAAAQgIgEgKgDIgBAAQgDgCgFABIgBgBIAAgCQAAAAAAgBQAAgBAAAAQgBAAAAAAQAAAAgBAAQgJADgIAAIgCAAQgHADgIAAIgBgBIgEgEIgBgBQgDgEgBgGIgBAAQgIAAgJACIgHADIgBAAIAAABIgKAHIgBABIgBAAQgIAAgFgCIAAAAIgFgNIgBAAQgBgGgGAFIAAABQgHAFgFABQgDAAgDgBIAAABQgFAJgMAAIgBABIgUAQIgEACIgFAEIAAABIgFAMIAAADQAQAGAEApIABAJQAFAcgDAdIAAAEIAEAVQAGAXANAUQAGAJAEAJQAIASgBASQAFAIgBAJIAAACQAAAJgMAOQgNAPgXASQghAbgSAKIgLAHIgBACIgCADQgMALgVAgIgCACIgNAMIgLAHIgPAGQgLAEgOAAIgPgBg");
	this.shape_80.setTransform(27.9,31.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AjYEyIgCAAQgQAAgFgJIAAgHIgBgDQAAgVADgSIAAgCQgeAAgFACIgCAAIgPgCIgFgFQgBgCAAgFQABgPALgGIACgBIABgBQADgCABgEQABgDAAgEIgCgGIgDgEQgIgFgEgKQgcAAgbgDIgZgDQgEgCgBgBIgBgBIgBgGQAAgDADgGIAHgJIAeghIACgCIATgTIAMgPIAFgHQADgHAQgMIAEgCQASgMADgJIABgGIAGgPQAEgQAEgJIAAgCQgpAQgIgCQgIAAgIgDQgJgCgKgGIgJgGQgNgJgEgJIAFgGQAHgGAJAAQAMgBAIgNIAFgHIAGgLIAAgBIAFgIIgBgKIAAgBQABgGADgEIAAgBIABgBIADgGQAHgHAQgFIABAAIABAAIABAAIACgBIACgBIABAAIACgBQATgFAdgDIACAAIAMgBIABgBIACgCQAHgNAJgIIABgBQAFgEADgFIAAAAIAAgCIAAgCQADgIABgIIAAgBIABAAIABgBQAHgFAEgJIAAgCQAEgEAFgCIAAgBIAAgCIAEgDIABgBQAHgFAIgDIABAAIAIgDIACAAIAAAAIAAgBIABAAIAAAAIACAAIABAAIAAgBIAHgBIACAAQASgFATAEIACAAQACAEADABIADAAIAAAAIAEAAIABgBQACgOAQAEIABABIAAABQAFASACgOIAAgBQADgGAJgBIABAAIAAAAQALgOAOgKIABgBQAHgEALABIABAAIAAAAIAFADIACAAIAIAEIAEABIACABIANgHIABAAIAWgMIABAAIAAgCIALgDIACAAQAIgBAJADIABAAIAEADIACABIARAUIAAABIABAAQAVgDASABIABAAIAKABQAKABADAHIABAAQAHAHgBAPIAAACIABAAIABABQAPAHASAGIACABIACAAIABAAIAJAJIACACIADAIIAAABIgBAPIAAABIAAACIAAAJIAAABIAAACQARAFAPAGIAAABIABABIAEACIABAAQANAEADAOIAAABIABABQgBANADAJIAAACIAEACIAAAAIALAGIABABIANAHIABABIABACIAAABIAEANIAAACQgEAGgCAIIAAACIgBAJIgBAAIAAACIgCAEIAAABIAAABIAAABIABACQADARAMAIIAAABIABAAQACAHAAAJIgBAOIgBAAQgDAMgFAKIgCAGIgBAAQACAFADAEIABAAQAGAFADAHIAAABQgDAMgEAKIgDAGIgBABIAIALIACACIgBADQgCAVgLARIgEALQgFAIgIAHIgLAHIgEADIgXAPIgGADIgWgCIgEgDIgKgJIgTgTIgIgHIgBAAIAAgBIgDgDIgIgKIgFgGIgBgBQgDgIAAgGIAAgEIAEgcIABgEQACgTAAgPIAAgBIADgOIAGgaIgBgCIAAgJIABAAIAAgBIACgDQABgEAAgDQgBgDgEgDQgFABgBgDIgBgCIAAgIQgDgYgDgJIgGgLIgBgCIgDgDQgIgHgMAFIgCgOIAAgCQAAgIACgIIgBgBIgDgBIgBAAQgFgBgEgDIgBgFIgBgIIAAgBQgCgGgDgEIgBAAIgBgBQgFgGgIgEIgBAAQgIgEgKgCIgBAAQgDgBgFAAIgBgBIgBgCQABgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAABQgJACgJABIgCAAQgGACgJABIAAgCIgEgDIgBgCQgEgEgBgGIAAgBQgIAAgJACIgHADIgBAAIAAABIgKAHIgCAAIgBAAQgIABgGgDIAAgBIgGgOIgBAAQgBgHgGAFIAAABQgHAFgGABIgGgCIgBABQgEAJgOgBIAAABIgVAPIgEADIgFADIAAABIgHANIAAACQARAFAEArIABAIQACAdgDAdIAAAEIAEAVQAHAYAPAUQAHAJAFAJQAKATgBASQAGAIABAJIgBACQAAAJgNAOQgNAPgYASQgiAagQAKIgLAIIgCACIgCAEQgKALgVAiIgCACIgNAMIgLAIIgPAHQgPAGgSAAIgIAAg");
	this.shape_81.setTransform(28,31.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AjXE2IgCAAQgQAAgEgKIAAgHIAAgDQgBgWADgRIAAgCQgfABgGACIgCAAIgQAAQgFgDgBgCQgBgCAAgGQABgPALgFIACgBIABgBQADgDADgFQABgDgBgEQAAgEgCgDIgDgDQgGgGgFgKIg4gCIgagCIgFgCIgBgBIgBgGQAAgDADgGIAHgKQAKgNATgVIADgCIATgUIAMgOIAGgHQAEgIARgLIAFgCQATgNADgIIACgGIAGgRQADgOAFgKIgBgCQgsASgLgBQgIAAgJgDQgKgCgMgGIgKgGQgOgIgFgKIAGgFQAHgHAJABQAMAAAIgOIAFgHIAGgLIAAgBIAEgJIAAgJIAAgBQABgGACgFIAAgBIABgBIADgGQAHgHARgFIABAAIAAAAIABAAIACgBIACgBIABAAIACgBQAUgEAcgEIACAAIANgCIABgBIABgCQAIgMAIgJIABgBIAJgKIAAAAIAAgCIAAgBIAAgBQADgIgBgJIABgBIAAAAIACgBQAGgFAFgJIABgBQADgEAGgDIAAgBIAAgBIADgDIABgBQAHgGAIgDIABAAIAIgDIABAAIAAgBIAAgBIABAAIABAAIACAAIABAAIABgBIAFgBIADAAQASgFAUAFIABAAQADAEADACIACAAIABAAIADgBIABAAQACgPAQAFIABAAIAAABQAFAUABgQIAAgBQADgHAKgBIABAAIAAAAQALgPAOgKIAAgBQAHgEAMAAIABAAIAAABQABACADABIABAAIAJADIAFABIABABIAOgIIABgBIAVgMIACgBIAAgBQAFgDAFAAIADgBQAJgBAJACIAAABIAEADIACABIASATIAAABIACAAQAUgDATAAIABAAIAJAAQAKABAEAHIABAAQAGAIAAAPIAAABIACAAIABABQAPAHAQAGIADABIACAAIACABIAJAIIABACIAEAIIgBABIAAAPIAAABIAAACIAAAJIAAACIAAABQASAEAPAHIAAABIABABIAFABIAAAAQAOAEAEAOIAAABIABAAQgBAOADAJIAAABIADACIACAAIALAHIABABIAMAHIABAAIABACIABABIAEAOIAAABQgDAHgDAIIAAACIgCAJIgBAAIABABQgBADgCACIAAABIAAAAIAAACIABACQADARANAHIAAABIABAAQADAIAAAJIgCAPIAAAAQgDALgFAKIgCAFIAAABQABAFAEAEIABAAQAGAFAFAHIAAABQgDAMgEALIgCAFIgBACQADAGAGAGIACACIgBADQgBAXgLASIgDAMQgFAJgIAIIgMAJIgDADIgaARIgHAFIgWgCIgFgDIgLgJIgUgRIgIgHIgBAAIgBgBIgDgDIgIgKIgFgGIAAgBQgEgIgBgHIAAgEIAFgcIABgDIADgjIACgCIADgNIAFgbIAAgCIABgKIABAAIAAgBIABgDQABgDAAgDQgBgEgDgCQgFABgCgDIgBgCIAAgIQgCgZgDgJQgCgHgDgEIgBgCIgDgEQgHgHgNAFIgBgPIAAgCQAAgJADgIIgCAAIgDgBIgBAAQgFgBgFgDIABgFIgBgJIAAgBQgCgHgDgEIAAgBIgBgBQgGgGgIgDIgBAAQgIgEgKgCIgBAAIgIgBIgBAAIgBgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAAAQgJADgJABIgCAAQgHACgIABIAAgCIgFgEIgBgCQgCgEgBgHIgBAAQgIgBgJACIgHACIgBAAIAAABIgKAIIgCAAIgBAAQgKAAgFgDIAAgBIgHgRIgBABQgBgHgHAEIAAABQgIAFgGAAIgGgCIgBABQgEAJgPgCIgBACIgVAOIgFACIgFADIAAABIgHANIAAACQARAEADAtIAAAIQACAdgDAeIAAADQABAMADALQAHAXARAUQAJAIAGAJQAMAUgBASQAGAJABAIIAAADQAAAJgOAOQgMAOgZASIgyAlIgMAIIgCACIgCAEQgIAMgVAkIgDACIgMAMIgKAJIgRAJQgSAIgVAAIgDAAg");
	this.shape_82.setTransform(28.3,31.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AjdE4QgOgBgDgJIAAgKIAAgFIABgXIAAgBIAAgBIACgLIgPABIgBAAQgRACgFABIgMAAIgHAAQgFgDgBgCQgBgCAAgFQgBgPALgGQAIgEACgHIABgHQAAgGgEgEQgGgGgEgKIgVgCIgBAAIgYAAIgCAAIgYgCIgBAAIgHgBIgFgCQgCgCAAgFIAAgBQAAgEAHgKIAAAAIACgDIAHgKIAVgaIAjgmIADgDIAAgBIABgBIACgDQAGgIARgKIABAAIAAgBQAKgFAFgFIABgBQAFgFACgEIAEgMIADgLQADgOAEgJIAAgCIgYAIQgXAIgIgBQgNAAgRgIIgJgDIgSgKIgBgBQgHgGgEgGQAJgMAMAAIADAAIACAAIADgBQAGgDAGgJIALgSIABgBIADgIIAAgJQAAgNAGgHIABgBQAIgHASgGIACAAIAPgEIACAAIACAAQASgGAbgDIAAgBIACgCIACgCIABgBIACgCQALgRAKgLIABgCQACgHABgKIAAgBQADgBACgDIADgCQADgDACgEIAAgCIAHgFIACgBIAAgBIAAgBQALgLARgFIABAAIABgBIAAgBIAAAAIABAAIACAAIABABIAAgCIAWgDIADAAQAJAAAKACIACABIAAAAIABACQAEAFAGgCIACAAQABgQAPAEIABABIADAIIABADQACABABgJIAAgBQADgHAJgBIABAAIABAAIAGgIIACgBIALgKIACgCIADgDIAAgCQAIgEALABIAAAAQACACADABIABAAIANAEIACAAIAMgIIACgBIABgBIAVgNIABgBIAAgBQAIgEAIAAIACAAIAMABIABABQANAKALAMIABABIABAAQAZgFAYABQAKABAEAGIACADQAGAGAAAMIAAACIAGADIAdAMIABAAIACABQAKAGAFALIAAABIACAZIAAACIAAABIAAABQARADAOAHIADACIADABIAAABQAOADAEAPIABAAIgBAIIAAADQABAGADAFIAAABIAdAQIACAAIADAHIABACIACAHIABABQgGAKgBAPIgBAAIAAACIAAABIgDADIAAACIAAABQADAMAGAIIACABIAHAFIAAABIABAAQAFANgCARIgBAAIAAAEIgBADQgCALgFAIIAAABIAAABIACADIAEAFIABAAQAGAFAEAHIAAABIgBAJIgBACIgBADIgDAKIgBACIgBACIAAACQAFAIAHAGIAAAEIgBASIAAACIAAACQgDALgFALQgBAIgEAIIgBABQgDAHgHAHIgRAPIgNALIgBABIgOALIgGAAIgBAAIgQABIgTgNIgCgCIgTgNIgGgFIgBgBQgRgPAAgNIAAgDIADgTIACgJIADgfIABgDIADgLQADgMABgOIAAgKIABAAIABgBQAFgJgIgFQgFABgCgCIgBgCIAAgFQgCgTgCgKIgBgFQgIgcgVAJQgCgRAEgRIgCAAQgGgBgEgCIgDgCIAAgGQAAgOgGgJQgFgFgHgFQgIgEgMgCIgIAAIgCgDQAAgBABgBQAAAAgBAAQAAgBAAAAQgBAAAAAAIgSAEIgDABIgNACIAAgCQgIgFgBgLIAAgBIgJAAIgBAAQgHABgIADIAAABIgLAHIgBAAQgLAAgHgDIAAgBIgHgSIgBAAQgCgGgGAEIgBABQgJAFgHgCIgDAAIgBgBIgBAAQgDAFgFACQgEABgFAAIgBAAIgBAAIgBABIgMAGIgOAJIgGADIAAABIgIAMIAAACQALACADAYQACAMAAARQgCAbgDAdIAAAKQADAcAUAYIAFAGQAaAcgBAbQAGAHABAHIAAAFQAAANgfAaIgTAPIguAgIgRANQgEAEgRAdIgJAOIAAABIgBABIgOANIgBABQgGAFgIAEIgBABQgLAHgMADQgJACgKABIgLAAIgDAAgABDhdIACgDIAOgKIgPANIgBAAg");
	this.shape_83.setTransform(28.8,31.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AjgE3QgOAAgDgJIAAgKIAAgFIACgXIAAgBIAAgBIABgKIgNAAIgBAAIgWACIgMgBIgGAAQgFgDgBgCQgCgCAAgFQAAgPAKgFQAHgEACgIIACgGQAAgHgEgDQgFgGgEgKIgSgDIgCAAIgXgBIgCAAIgXgDIgBAAIgGgBIgFgCQgCgDAAgEIAAgBQAAgEAGgKIACgDIAHgKQAIgLAMgOIAignIACgCIABgBIAAgCIACgCQAGgIAPgKIAAAAIABgBQAIgGAFgFIABgBQAEgFACgDIADgMIADgKQAEgOAEgJIAAgCIgVAGQgVAHgGgCQgMgBgPgHIgJgEIgSgKIAAgBQgHgGgDgGQAIgLAMAAIADgBIACAAIADgBQAGgDAFgIIALgSIABgBIAEgIIAAgJQAAgMAGgIIABgBQAHgHARgGIACAAIAPgEIACAAIABgBQASgFAagEIABAAIACgDIACgBIABgBIABgCQAMgRAKgJIAAAAIABgCQADgHABgJIAAgBIAFgDIACgCQAEgDACgEIAAgBIAHgFIACgBIAAAAIAAgCQAKgLAQgFIACAAIAAgBIABAAIABAAIABABIABAAIAAgBIAVgDIADAAQAJgBAJACIACAAIAAABIABACQAEAEAGgDIACAAQABgOAPADIABABIACAGIACADQACABABgIIAAgBQADgHAJgBIABAAIABAAIAFgHIACgBIAMgJIACgCIACgCIABgCQAHgEALAAIAAABQABAAAAABQAAAAABAAQABABAAAAQABAAABAAIABAAIANADIABAAIANgIIACAAIAAgCIAUgMIACgBIAAgBQAIgDAIgBIACAAQAFAAAGACIABABQANAKALAMIAAABIABAAQAZgFAXABQAKAAAEAGIACACQAGAGAAAMIAAACIAHACIAaANIACABIACAAQAKAGAFALIAAABQACAKABAOIAAABIAAABIAAABQARAEAOAHIACACIADABIAAAAQANAEADAPIABAAIgBAHIAAADIAEALIABABQAPAHAOAIIABAAIADAHIABACIADAGIAAACQgEAJgBAOIgBABIAAABIAAABIgCAEIAAABIAAACQACALAGAIIACABIAGAFIABABIAAAAQAGAMgBAQIgBAAIAAAEIgBADQgBALgEAIIgBABIAAAAIACADIAEAFIAAAAQAGAGAEAHIAAABIgCAIIAAACIgBADIgDAKIgBACIgBACIAAAAIAAACQAFAIAGAGIAAAEIAAARIAAACIAAACQgCAKgFALQgBAIgDAIIgBABQgDAHgHAHQgEAFgMAKIAAAAIgMALIgBABIgMAKIgEABIgBAAIgPACIgTgLIgBgBIgRgMIgGgEIgBgBQgPgMgBgLIAAgDIADgRIABgHQACgOAAgOIABgCIACgKQACgLABgLIAAgKIABAAIAAgBQAEgIgHgEQgFABgCgCIgBgBIgBgFQgCgRgDgJIgBgFQgJgbgTAIQgDgQACgQIgBAAQgGgBgEgDIgDgCIAAgFQgBgOgGgIQgEgGgHgFQgHgEgLgCIgIAAIgCgDQAAgBAAAAQAAgBAAAAQAAAAAAAAQgBAAAAAAIgRAEIgDABIgMACIgBgCQgHgEgCgKIgBgBIgHAAIgHAAIAAgBIgBAAIgCABIABgBIgCABIABAAIgFAEIgCABIgKAJIAEgFIABAAIALgJIgCAAIgCgCIgBAAIgEACIgCABIgBAAIgDAAIgCgCIAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIgEACIgEACIgFADIgBAAIgBACIAAACIAAABIgBgBIAAgBIgJgQIAAAAQgCgGgGAEIgBABQgIAEgIgBIgCgBIgDgBIgBABQgCAFgEACQgEABgFAAIgBAAIgBAAIAAABIgMAGIgPAJIgFADIAAABIgIALIAAACQAJACACAXQABALgBAQIgHA0IAAAKQADAcASAZIAFAGQAYAbgDAaQAEAGAAAHIABAFQgBANgdAaIgTAOQgcAVgRAKIgRAMQgEADgRAaIgJANIAAAAIgBABIgOALIgBABIgNAIIgBAAQgKAGgLACQgJABgKAAIgLABIgDgBgABGhAIgBAAIACgDIAOgIQgOALgBAAIAAAAg");
	this.shape_84.setTransform(29,31.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AjhE3IgDAAQgNgBgDgIIgBgKIAAgGIADgVIAAgBIAAgBIABgLIgMgBIgBAAIgVABIgMAAIgGgBIgGgFQgBgCgBgFQgBgOAKgGQAHgEACgHIABgGQABgHgDgEQgFgFgDgKIgRgEIgCAAIgXgCIgBAAIgWgDIgBgBIgGgBIgEgCQgCgDAAgEIgBgBQABgEAFgKIABAAIABgDIAHgKIATgZIAhgmIACgCIAAgBIAAgCIACgCQAGgJANgKIAAAAIABgBQAHgFAEgFIABgBIAFgJIADgLIADgKQAEgOAEgJIAAgBIgSAEQgSAGgGgDQgKgBgNgIIgIgEIgSgJIAAgBQgHgHgCgGQAIgLAMAAIACAAIACAAIADgCQAFgDAGgIIALgRIABgBIAEgIIAAgIQAAgMAFgIIABgBQAIgHAQgGIABgBIAPgEIABAAIACgBQASgGAZgEIAAAAIAAAAIACgCIACgCIACgBIABgCQAMgPAKgJIABgBQADgHACgIIAAgBIAEgDIADgBIAFgGIAAgBIAHgEIACgBIAAgBIAAgBQAKgMAQgEIABAAIAAAAIAAgBIABAAIABAAIACABIABAAIAAgBQAJABALgEIABAAQAJgBAJACIACAAIAAABIABABQAFAEAFgDIACAAQACgOANADIABAAIADAGIABACQACABABgHIABgCQAEgGAIgBIABAAIABAAIAGgFIABgCIALgIIACgBIADgDIABgBQAHgEALAAIAAAAQAAABAAAAQABAAAAAAQABABABAAQAAAAABAAIABAAIANACIABAAIAMgHIACgBIAAgBIAVgMIABgBIABgBQAGgDAJAAIACAAQAFAAAFACIABABQAMAJAMAMIAAABIABAAQAYgEAXAAQAJABAFAFIACACQAGAGABALIAAABIAFADIAaANIABABIACABQAKAGAFAKIABABIAEAWIAAABIAAABIAAABQAQAEANAHIACACIACABIABABQAMAEACAOIABABIAAAHIAAADIAFAKIAAABQAPAGANAIIACABIADAGIAAABIAEAHIABABQgEAJgBAOIgBAAIAAABIAAABIgBAEIAAACIAAABQABAMAHAHIABABIAHAFIAAABIABAAQAFALAAAQIgBAAIABADIgBADQgBALgDAJIAAAAIAAABIABADIADAEIAAAAQAGAFADAHIAAABIgCAJIAAABIgBADIgDAJIgBADIAAABIAAABIgBABQAFAIAGAGIABAEIAAARIAAACIABABIgHAVQgBAIgDAIIgBABQgDAHgGAHQgEAFgLAKIgKAKIgBABIgKALIgFABIgBAAIgOACIgRgIIgCgBIgOgKIgGgDIgBAAQgOgLgBgJIAAgCIADgOIABgGQABgMAAgMIAAgCQABgEABgEQABgKgBgKIAAgIIABAAIAAgBQAEgHgHgEQgFABgCgBIgBgBIgBgFQgDgQgEgIIgBgEQgJgZgTAGQgEgQACgOIgCAAIgJgEIgDgCIAAgFQgCgOgGgIQgDgGgHgEQgGgFgLgDIgHAAIgCgCQABgBAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAIgRAFIgCAAIgMACIAAgBIgCgBIABgEIAAgCIABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBIgCAAIgBgCIgCgFIABAAIAAgBIgGgCIgBgIIgCgBIAAgBIgCgGQgEgCgHAAIAAgBQAAgBgBABIgIACIAAgBIgDgDIgGACIgDABIgBAAIgEAAIgDgDIAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBABIAAAAQgDACgCgBIAAAAQgCADgEAAIgGAEIgCABIgBADIAAADIABADIAAADIgCABIAAAAQgJAFgHgCIgDAAIgDgBIgBABQgCAEgDADQgEACgEAAIgBAAIgBAAIgBAAIgMAGIgNAJIgGADIAAABIgIAKIAAADQAHACACAUIgCAaIgJAyIAAAJQACAbARAaIAEAFQAWAbgGAYQAEAGAAAHIABAEQgCANgcAaIgSAOQgbAUgSAKIgQAKQgFADgRAWIgJAMIAAABIgBAAIgNAJIgCABIgNAGIAAAAQgJAFgLABIgSAAIgLAAgABHgjIgBAAIAAAAIADgDIAMgHQgMAKgCAAIAAAAg");
	this.shape_85.setTransform(29.4,31.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AjaE2IgLAAIgCAAQgNgBgDgIIgBgKIAAgFIACgWIABgBIAAgBIABgJIgLgDIgBAAIgVABIgLgCIgGgBQgFgCgBgCQgBgCgBgFQgBgNAJgHQAGgEADgHIABgGQABgGgDgEQgEgGgCgJIgQgFIgBAAIgWgDIgCAAIgWgEIAAgBIgFgBIgFgDQgBgCAAgFIAAgBQAAgEAFgKIACgCIAGgKQAHgLALgOIAfglIACgDIABgBIAAgBIACgDQAFgIALgKIAAgBIABgBQAFgFAEgGIAAgBQAEgEABgEIACgLIAEgJQAEgOAEgIIAAgCIgPADQgQAEgEgDQgJgDgMgIIgHgDIgRgKIgBgBQgFgGgCgGQAHgLAMgBIACAAIACAAIACgBQAHgEAFgHIALgQIABgBIAEgIIAAgIQAAgMAFgIIAAAAIABgBQAIgHAPgHIABAAIAOgFIACAAIABAAQARgHAZgEIAAAAIAAgBIACgBIACgCIABgBIABgBQAMgPALgIIABgBQADgGACgHIABgBQACgBACgCIADgBQADgBACgEIABgBIAGgEIACAAIAAgBIAAgBQAJgMAPgDIACAAIAAgBIAAAAIABAAIABAAIABABIABAAIAAgBQAJACAJgEIADgBQAIgBAJABIACAAIAAABIABABQAEADAFgCIABgBQADgNANACIABAAQABAEACABIABACQACABACgHIAAgBQAEgGAIgBIABAAIABAAIAFgFIACgBIAMgHIACgBIACgDIABgBQAHgEAKAAQAAAAABAAQAAAAABABQAAAAABAAQABAAAAAAIACAAQAFACAGAAIACAAIALgHIACgBIABgBQAKgHAKgFIABAAIABgBQAHgDAHAAIACAAIALADQANAKAKALIABABIAAAAIAAAAQAYgEAXAAQAJAAAEAGIADABQAGAGAAAKIABABIAFADIAYAOIABABIACABQAJAGAHAJIAAABIAFAUIAAACIABABQAPAFAMAHIACACIADACIAAAAQALAFACANIABABIAAAHIAAADIAEAJIABABQAPAGANAIIABAAIADAGIABABIAEAGIAAACQgCAIgBAOIAAAAIAAABIAAABIgCAEIAAACIAAABQACALAGAHIABACIAHAEIAAABIABAAQAGALAAAOIAAAEIAAACQgBALgCAJIgBAAIAAABIACADIACAFIABAAIAHALIAAABIgCAJIAAABIgBADIgDAIIgBADIAAACIgBABQAFAIAGAHIAAADIACAQIAAACIAAABQgBAKgEALQgBAIgDAIIgBAAQgDAHgGAHQgEAGgKAJIgJALIgBAAIgIALIgEABIAAAAIgNADIgQgFIgCgBIgMgIIgFgCIgBAAQgNgIgBgIIAAgBIACgNIAAgEQACgKgCgJIAAgCIABgHIAAgRIgBgHIAAAAIABgBQADgGgHgDQgFABgCgBIgBgBIgCgEQgEgPgEgHIgBgEQgKgXgSAFQgEgPABgOIgBAAIgKgEIgDgCIAAgFQgCgNgGgIQgEgGgFgFQgHgFgJgDIgHAAIgBgCQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAgBABIgQAFIgCABIgLACIgBgBIgBAAIACgHIADgIIAAgEIAAAAIAAAAQABgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAIgCgBIgCgDIgCgHIABgBIgBAAQgCgCgFgBIAAAAQgBgGABgFIgBAAIgDgCIAAgCQgBgEgCgCQgEgEgJAAIgBgBIAAgBQgFACgGAAIAAAAQgDgBAAgEIgIACIAAAAIgEACIgGAAIAAgBIgDgEQAAgBgBAAQAAgBAAAAQAAAAgBAAQAAAAgBABIAAAAQgEADgDgCIAAABQgCADgFgBIAAABIgIAFIgCABIgCAEIAAADIACAFIAAAFQAAADgCADIAAABIgEAKIgBAAIABAAIAAAAIACgBIAAABIAAABIACAHIACACIgCAAIgCAAIgDgBIgBABIgFAHQgEACgEABIgBAAIAAAAIgBAAIgMAFIgNAJIgGADIAAABIgIAKIAAACQAGADAAATIgDAYQgHAXgFAYIAAAJQACAZAPAbIAEAGQATAagIAWQAEAGgBAGIAAAEQgBANgbAZIgRAPQgaAUgSAIIgRAJQgFACgQATIgJALIAAAAIgBABIgOAHIgBAAQgGADgHACIAAAAQgJADgJAAIgSgBgABJgGIgBAAIAAgBIACgCIAMgGQgMAJgBAAIAAAAg");
	this.shape_86.setTransform(29.7,31.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AjME3IgRgCIgLgBIgCAAQgNgBgDgIIgBgJIAAgFIACgWIABAAIAAgBIABgKIgKgDIgBgBIgVAAIgKgCIgGgBIgFgEQgCgCAAgFQgCgMAJgHQAFgFADgHIABgGQABgFgCgEQgEgGgCgJIgNgGIgBAAIgWgDIgBgBIgVgFIgBAAIgFgCIgEgDQgBgCAAgFIAAgBQABgFAEgJIABgCIAGgKIARgYIAegmIACgCIABgBIAAgBIACgDQAEgJAJgKIABAAIAAgBQAEgFADgGIABgBIADgIIACgKIAEgKQAEgNAEgIIAAgCIgMABQgNADgDgEQgHgDgKgIIgIgEIgQgKIgBgBQgFgGgBgGQAHgKALgBIADgBIACAAIACgBQAGgEAFgHIALgPIABgBIAEgIIAAgIQABgLAEgIIAAgBIABgBQAIgGAOgHIABgBQAGgDAIgCIABAAIABgBQARgHAYgEIAAAAIAAgBIACgBIACgBIABgBIABgCQAMgNALgHIABgCQAEgFACgGIABgBIAEgCIADgBQADgBACgDIABgBIAGgDIACgBIAAgBIAAgBQAIgMAPgCIACAAIAAgBIAAAAIABAAIABAAIABABIABAAIAAAAQAJADAIgFIACgBQAHgCAKABIABAAIAAABIABABQAEACAFgDIABAAQADgMANABIAAAAIAEAEIABABQACABACgHIABgBQADgFAIgBIACAAIAFgEIACgBIAMgFIACgCIACgCIABgBQAHgEAJgBIAFABIABAAQAFABAGAAIACAAIALgHIACgBIABgBQAJgGAKgFIACAAIAAgBQAHgDAHABIACAAIALADQAMAKAKALIABAAIAAABIAAAAQAYgFAWABQAIAAAFAFIACABQAHAFABAKIAAABIAFADQAMAGAKAJIABABIACAAQAJAGAHAJIABABIAGATIAAABIABABQAPAFALAIIACACIACABIAAABQAKAFACANIABABIgBAHIAAACIAFAIIABABIAbAOIACAAIADAFIABACIAEAFIABACQgCAIAAANIgBAAIABACIAAAAIgCAEIAAACIAAACQACAKAFAHIABACIAHAEIAAABIABAAQAGAKACAOIAAADIAAACQAAALgCAIIgBABIAAABIACACIABAFIABABIAGAMIAAABIgBAHIgBABIgBADIgDAIIAAACIgBACIAAACQAEAIAGAGIABAEIACAPIAAABIAAACQgBAKgDAKQgBAIgDAIIAAAAIgJAOQgEAGgKAJIAAAAIgHAKIAAABIgHALIgDAAIAAABIgMAEIgQgDIgBgBIgJgFIgFgCIgBAAQgMgGgBgFIAAgBIABgKIAAgEQABgHgCgIIAAgBIAAgGQAAgHgCgHIgCgGIABAAIAAAAQADgGgHgCQgFACgCgBIgBgBIgCgDQgFgOgFgGIgBgEQgKgXgRAFQgFgPAAgMIgBgBIgKgEIgCgCIgBgEQgDgNgFgIIgJgLQgGgFgIgEIgGABIgBgCQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAIgPAGIgDAAIgLADIAAgBIgCAAQgFAJgIAGIAAABIgJAEQgFACgGAAQgTAAgNgHIgBAAIgOgJIAAAAIgRgPIgBgBIABgBIABgBIADABIACAAQAHABAIgDIABgBQAGgDABAFIABAAIAJAMIAAAAQAHADAKgBIABAAIAJgFIAAgBIAOgEIACAAIAGgBQADAGAGADQAEgHADgIIACgLIABgEIAAAAIAAAAQACgEgCgCIgDAAIgCgEQgCgEAAgGIABgBIgBAAQgDgDgGAAIAAgBQgBgHABgHIAAAAIgFgCIAAgCQAAgGgDgDQgFgFgLAAIgBgBIAAgBIgNADIgBgBQgDgCAAgEIAAAAQgFAAgFACIAAAAIgFADIAAAAIgHgBIAAgBIgEgGQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAAAgBAAIAAABQgFADgDgCIgBAAQgCAEgGgBIAAABIgKAGIgCACIgDAEQAAABAAABQAAAAAAABQAAAAAAABQAAAAABABQACACAAAEIAAAFQAAAFgCADIgBACIgEALIAAABIACgCIAAACIAAABIACAKQADAFAGACIAAAFIAAACIAAABIACAFIAAAAIgEAGIgIADIgBAAIAAAAIgBABIgLAEIgNAJIgFADIgBABIgHAJIgBACQAFADgBASIgFAVQgJAYgFAWIAAAIQABAYAOAbIAEAGQAQAagKAVQACAFgBAGIAAAEQgCAMgZAZQgHAIgJAHQgZATgSAIQgNAHgEABQgGABgPAQIgKAJIgBABIgOAFIgBAAIgMADIAAAAIgKABIgGAAgABKAVIgBAAIAAgBIACgCIAMgEQgKAHgCAAIgBAAg");
	this.shape_87.setTransform(30,31.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AjCE4IgOgBQgHgDgKgBIgLAAIgCgBQgMAAgDgIIgBgJIgBgFIADgVIABgBIAAgBIABgJIgJgFIgBAAIgUgBIgKgCIgGgCQgEgCgBgCQgCgCAAgEQgCgNAIgHQAFgEADgHIACgGQAAgGgBgDQgDgGgCgJIgLgHIgCAAIgVgEIgBAAIgUgGIgBgBIgEgCIgEgDIgBgHIAAgCIAFgNIABgCIAFgKQAGgLAKgMIAdgmIACgCIAAgBIABgCIABgCQAEgJAIgKIAAgBIAAgBIAFgLIABgBIACgIIACgKIAEgJQAEgMAFgIIAAgCIgJgBQgLACgCgFQgGgEgIgIIgHgEIgRgJIAAgBQgEgGgBgGQAHgLALgBIACgBIACAAIACgBQAGgEAFgGIALgPIABAAIAEgJIABgIQAAgKAEgJIAAAAIABgBQAIgHANgHIABgBQAGgDAHgCIABAAIABgBQAQgHAXgFIABAAIAAAAIACgCIACgBIABgBIABgBQAMgNAMgGIABgBIAHgKIAAgBIAEgCIADAAQADgBACgCIABgBIAGgDIACgBIAAgBQAHgMAPgDIABAAIABAAIAAAAIABAAIABAAIAAABIABAAQAJAFAHgHIACAAQAHgDAJAAIACABIAAAAIABABQAEACAEgDIACAAQADgMALABIABAAIAEACIABABQACABACgGIABgBQAEgFAHgBIACAAIAAABIAFgEIACgBIAMgEIACgBIACgCIABgBQAHgFAJAAQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAAAIACAAIAKABIACAAIALgIIACAAIAAgCQAKgGAJgEIACAAIABgBQAGgCAHAAIACAAIAKAEQAMAJAKALIABABIAAAAIAAAAQAXgEAWAAQAIAAAFAFIACABQAHAEABAJIAAACIAFACQALAHAJAJIACABIABABQAKAFAHAIIAAACIAIARIAAABIABABQAOAFALAIIABACIACACIAAAAQAJAGACANIAAAAIAAAHIAAADIAGAHIAAABQAPAGAMAHIACAAIADAFIABACIAEAFIABABIgBAUIAAABIAAABIAAABIgBAEIAAACIAAABQABAKAGAHIABACIAGAEIABABIAAAAQAHAJACANIABAEIAAABQAAAKgBAJIgBABIAAAAIACADIABAFIAAAAIAGAMIAAABIgCAIIgBACIAAACIgDAHIgBACIAAACIAAAAIgBACQAEAIAGAGIABADIADAOIAAACIAAABQAAAKgDAKQgBAIgDAIIAAAAQgDAHgFAHQgEAGgJAJIAAAAIgGAKIAAABIgFAKIgCABIgBABIgLAFIgOgBIgBgBIgHgDIgEgBIgBAAQgKgDgCgEIAAAAIAAgIIAAgCQABgGgEgFIAAgBIAAgEIgEgLIgCgFIABAAIAAgBQABgEgGgCQgFACgCgBIgBAAIgCgDQgGgMgGgGIgBgDQgKgVgQADQgGgOgBgNIgBAAIgKgEIgCgCIgBgEQgDgMgFgHIgIgMQgFgGgHgDIgHABIgBgCQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAAAgBABIgOAGIgDAAIgKADIgBgBIgCgBQgFAIgHAFIAAABIgLAFQgFACgHAAQgXAAgQgJIAAAAIgRgLIAAAAIgFgFIABgCIABgBIACAAIACAAQAIACAIgDIAAgBQAGgDACAFIAAAAIAKAKIAAAAQAHADAJgBIABAAIAJgFIAAgBIAOgEIABAAIAGgBIABAAQADAEAFACQAHgKAEgNIADgMIABgFIAAAAIAAgBQADgEgEgCQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAgBAAIgCgEQgCgFAAgIIAAAAIAAgBQgEgDgGgBIgBgBQgBgJACgIIgBAAQgDgBgDgCIAAgCQAAgHgDgDQgFgGgOAAIgBgCQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAgBAAQgHACgIABIAAgBQgEgCAAgFIgBAAQgFgBgGADIAAAAIgFADIgBAAIgIgBIAAAAIgEgIIAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBAAgBABIAAAAQgGAEgEgCIAAAAQgDAEgHAAIAAAAIgLAHIgCACIgEAGQAAADABACQACADABAEIAAAHQAAAFgCAEIgBACIgGANIACAAIAAACIAAACIADALQADAHAHACIAAAFIgBADIAAABQADADAAADIAAABIABAAIAPAOIgDAFIgIAEIgBAAIAAAAIgBAAIgLAEIgNAJIgFADIAAAAIgIAKIAAABQADADgDAQIgGAVQgLAWgFAUIgBAIQACAXAMAcIADAGQANAZgMAUQACAFgCAFIAAAEQgCALgYAaIgPAOQgYATgTAHQgMAGgEAAQgHABgOAMIgKAIIgBABIgOAEIgBgBIgMABgAgNhcIAAAAIAAgBgABMAxIgBAAIAAgBIACgCIALgDQgJAGgDAAIAAAAg");
	this.shape_88.setTransform(30.3,31.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("Ai9E6IgLgBIAAAAIgMgEQgHgDgJgBIgLgBIgCgBQgMAAgDgIIgBgJIgBgFIADgUIABgBIAAgBIABgJIgIgGIgBAAQgNgBgHgBIgJgCIgGgCIgEgEQgCgCgBgEQgBgMAGgIQAFgEADgHIABgGQABgFgBgEIgDgOIgJgIIgCgBIgVgEIgBAAIgTgHIgBgBIgDgCIgEgEQgBgCAAgEIgBgCIAGgNIABgCIADgKQAHgLAKgMIAbglIABgCIABgCIAAgBIABgDIAKgTIAAgBIAEgMIAAgBIABgHIACgKIAEgJQAEgMAFgIIAAgBIgGgDQgJAAAAgFIgLgNIgHgEIgQgJIgBgBQgDgHAAgFQAHgKAKgCIADgBIABAAIACgBQAGgEAFgGIALgOIABgBIAEgIIABgIQABgKAEgJIAAAAIAAgBIAUgOIABgBIANgFIABgBIABAAQAPgIAWgFIABAAIAAgBIABgBIADgBIABAAIABgCQAMgLALgGIABAAIABgBIAHgIIABgBIAEgBIACgBQADAAADgCIABAAIAGgDIACgBIAAgBQAGgMAOgCIACAAIABAAIACAAIAAABIABAAIAAABQAIAFAGgHIACgBQAHgDAIAAIACAAIAAABIACABQADAAAEgCIACgBQADgLALAAIAAAAIAFABIABABQADAAABgFIABgBQAEgEAIgBIABAAIAAABIAFgDIACgBIAMgDIACgBIACgCIABgBQAHgEAIgBIAFAAIABgBIAKABIACgBIAKgHIACAAIABgCIATgJIABAAIABgBQAGgCAIAAIABABIAKADIAAAAIAVAUIAAABIAAAAIABAAQAWgEAVAAQAJAAAFAEIACABQAHAEABAJIABABIAEACQALAHAHAKIABABIADABQAIAFAIAIIABABIAJAQIAAABIAAAAIABABQAOAFAJAJIABABIACACIABAAQAHAGACANIAAABIAAAGIAAADIAGAHIAAAAQAOAGAMAGIADABIADAFIABABIAEAFIABABIABATIAAABIAAABIAAABIgBAEIAAACIAAABQABAKAFAHIABACIAGAEIABAAIAAAAQAIAJACAMIACADIABACIgCASIAAABIAAABIACACIAAAFIABAAIADANIAAAAIgBAIIAAABIgBADIgDAHIgBACIAAACIAAAAIgBABQAEAIAGAGIABAEIAEANIAAABIABABQgBAKgCAKQgBAIgDAHIAAABQgDAHgFAGQgDAGgJAJIgDAKIgBABIgDAKIgCACIAAAAIgKAGIgNABIgCAAIgEgBIgEgBIAAABQgKgBgBgCIgBAAIAAgFIAAgBQAAgDgEgDIAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQgBgEgEgEIgCgEIAAAAIABAAQAAgEgGgBIgHACIgBgBIgCgBQgHgLgHgFIgBgDQgLgUgPACQgHgOgBgLIgCgBIgJgEIgCgCIgBgEQgEgMgEgGIgIgMQgFgGgGgEIgFABIgCgBQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAAAABIgOAGIgDAAIgKADIAAAAIgEgBQALgNAFgSIAEgPIABgGIAAAAIAAAAQADgFgEgDQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIgCgFQgCgGAAgJIAAAAIAAgBIAAAAQgFgEgHgBIAAgBQgDgLADgKIgBAAQgDAAgDgCIAAgDQgBgIgDgEQgHgHgPAAIgBgCQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAQgIADgJABIgBgBQgEgDgBgGIAAAAQgGAAgHACIAAABIgGADIgBAAQgFABgEgCIAAgBIgFgIIAAAAQAAgEgEACIAAABQgGAEgFgDIgBAAQgCAFgIgBIAAABIgOAIIgDACIgEAHQAAADABADQADADACAFIgBAIQgBAGgCAFIgBACIgGAPIgBABIABAAIAAgBIACAAIAAACIAAACIADAOQADAIAJADIAAAGIgBADIAAABIAAAAQADADABAEIAAABIABABIAWAWIAAAAIAHAFIACgDIABgBIACABIACAAQAHABAIgDIABAAQAFgDACAEIABAAIAKAJIAAAAQAGACAJgBIABAAIAJgEIAAgBIAOgEIABAAIAGgBIAAAAQADADAEABIgKAKIAAAAQgFAEgHACQgHACgHAAQgbgBgSgJIAAgBIgNgHIgCAFIgHAEIgBAAIAAAAIgBAAIgLAEIgNAHIgEADIgBABIgHAIIgBACQABADgDAPIgIAUQgMAVgGATIgBAHQABAWALAcIACAGQALAYgOATQAAAEgCAFIgBAEQgCALgVAZQgHAIgJAGQgWATgTAGQgMAFgEAAQgIAAgOAKIgKAGIAAAAIgBAAIgOACgABNBLIgBAAIAAAAIACgDIAKgBQgHAFgDAAIgBgBg");
	this.shape_89.setTransform(30.6,31.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AizE8IgBAAIgPAAIgKgDIgBAAQgFgCgGgEQgFgEgJgCIgLgBIgDAAQgLgBgEgHIgBgJIAAgFIADgUIABgBIAAgBIABgJIgHgGIgBgBQgMgBgHgCIgKgCIgFgCIgFgEIgBgGQgCgLAFgIQAFgFADgHIABgFQACgFgCgEIgCgOIgHgJIgBgBIgVgFIAAAAIgTgIIAAgBIgEgCIgDgEQgBgCAAgEIAAgDIAEgMIAAAAIABgCIAEgKIAOgXIAaglIACgCIABgBIAAgBIABgDIAIgUIgBgBIACgLIAAgBIABgIIABgKIAEgIQAEgLAFgIIAAgCQgCgCgBgCQgGgBABgGIgIgOIgGgEIgQgJIgBgBQgCgHAAgFQAHgKAKgCIACgBIABAAIACgBQAGgEAFgGIALgNIABgBIAEgHIABgIQACgLADgIIAAgBIAAgBIATgOIAAgBIAMgFIACgBIABgBQAPgIAVgFIABAAIAAgBIABgBIACgBIABAAIABgCQAMgKAMgFIABAAIABAAIAIgHIABgBIAFgBIABgBQADACADgCIABgBIAFgCIACAAIAAgBQAGgNAPgBIABAAIAAgBIABABIAAAAIABAAIABABIAAABIAAAAQAIAHAGgJIABgBQAGgDAJAAIACAAIAAAAIABABQADAAAFgDIABAAQADgLAKgBIABABIAFAAIABAAQADAAABgEIACgBQADgEAIAAIABAAIAGgCIABgBIAMgCIACAAIACgCIABgCQAGgDAJgCIAAAAIAEAAIABgBIAKAAIACgBIAKgGIACgBIAAgBQAJgGAKgDIABAAIABgBQAGgCAIABIABAAIAJAEIABAAIAUAUIAAAAIAAABIABAAQAWgEAUAAQAJAAAFADIACABQAGADADAIIAAABIADADQALAGAHALIAAABIACABQAJAGAIAHIABAAIAKAPIABABIAAAAIABABQAMAFAKAJIABACIABABIAAABQAHAGABAMIABABIgBAHIAAACIAHAGIABABIAZALIACABIAEAEIABABIAEAFIABABIACASIAAABIAAABIABABIgCAEIAAACIAAACQACAJAEAHIABACIAHADIAAABIABAAQAHAIADALIABAAIACADIAAACIAAASIAAABIAAAAIABACIABAFIAAABIADAMIAAABIgBAIIgBAAIgBADIgDAHIgBACIAAABIAAABIAAACQADAHAGAFIABAEIAFAMIAAACIABAAQgBAKgCALQAAAHgDAHIAAAAIgGAOQgEAGgIAJIAAAAIgCAKIAAAAIgBALIgCABIAAABIgJAHIgNADIgBAAQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAABAAIgEAAIAAACIgLABIAAAAIgBgCIgBAAQAAgBgEgCIgBAAIgDgCQgBgDgFgCIgDgCIAAAAIABgBQAAgCgGgBIgGACIgBAAIgEgBQgIgJgHgEIgBgDQgLgSgOAAQgIgNgCgLIgBAAIgJgFIgDgCIgBgEQgEgKgFgIIgGgMQgFgFgEgFIgGABIgBgBIgCABQgHAEgGABIgCABIgKADIAAAAIgHgBIgHAGIAAABQgGAFgHACQgIADgJAAQgegBgVgMIAAgBIgBAAIAAgCIABgBIADAAIACAAQAGABAIgCIACgBQAEgBACADIAAAAIALAHIAAABQAHABAIgBIABAAIAJgEIAAgBIAOgEIABAAIAFgBIAAAAIAFACQAQgOAHgZIAEgRIAAgGIAAAAIABgBQADgGgEgDQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBIgDgFQgDgIAAgKIAAAAIABgBIgBAAQgFgFgJgBIAAgBQgCgMADgMIgBAAIgHgDIAAgDQgBgJgEgFQgGgIgTAAIgBgCQABgBAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAIgUAEIAAgBQgFgDgBgHIAAAAQgHgBgIADIAAABIgGAEIgBAAQgHAAgEgCIAAgBIgFgKIgBAAQAAgEgEADIgBAAQgHAFgGgDIAAAAQgCAFgIgBIgBABIgQAKIgEACIgEAHQAAAEABAEQAEADACAFIgBAJQgBAHgCAGIgBACIgIASIAAAAIABgBIABADIAAACIAEAQQAEAJAJADIAAAHIAAAEIAAABIAAABQADADABAEIAAABIAAABIAaAaIAAAAIAVANIgDAFQgDADgEACIgBAAIAAAAIAAAAIgLAEIgMAIIgFADIAAABIgIAHIgBACQAAADgFAOIgJASQgOAUgGARQgCAEABAEQAAAUAKAdIABAFQAIAYgRARQABAEgDAFIAAADQgDALgVAZQgGAIgHAGQgWASgUAFQgLAFgFgBQgIgBgNAHIgKAFgABPBlIgBAAIAAgBIACgCIAJAAQgGAEgDAAIgBgBg");
	this.shape_90.setTransform(30.9,31.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("Ai6FAIgBgBIgPgBIAAAAIgKgFIAAgBIgJgIQgFgFgJgCIgLgBIgDgBQgLAAgDgHIgBgIIgBgGIAEgTIABgBIAAgBIABgJIgGgHIgBgBQgMgBgGgDIgKgCIgFgCIgEgEQgCgCgBgEQgCgLAGgIQAEgFADgHIACgFIAAgJIgBgNIgGgLIgBgBIgUgFIgBAAIgRgJIgBgBIgCgDIgDgDIgBgHIgBgDIAEgMIABAAIABgCIACgJIAOgWIAZglIACgCIAAgCIAAgBIABgCIAGgVIgBAAIAAgBIAAgKIAAgBIAAgJIAAgKIAFgIQAEgKAFgIIABgBQgCgDABgDQgDgDACgHIgFgPIgGgEQgIgFgIgDIAAgBQgCgHABgFQAGgKAKgDIACAAIACAAIABgCQAFgDAGgGIALgMIABgBIAEgIIABgIIAEgSIAAgBIAAgBQAJgGAKgIIAAgBIAMgGIAAAAIABgBQAPgJAUgFIABAAIAAgBIACgBIACgBIABAAIABgCQAMgJANgEIAAAAIACAAIAJgGIAAAAIAEgBIACAAQADABADgBIAAAAIAGgCIACgBIAAAAQAFgNAOgBIABAAIABAAIAAAAIABAAIABAAIAAACIABAAIAAABQAHAIAFgKIABAAQAGgFAIAAIACAAIABABQADAAAEgDIACgBQADgKAKgBIABAAIAFgBIABAAQACAAACgEIABgBQAEgDAHgBIACAAIAAABIAFgBIACgBIAMgBIACAAIACgCIABgBQAGgEAIgCIAAAAIAEgBIABAAIAKgBIACgBIAJgHIACAAIAAgCQAJgFAKgDIACAAIAAAAQAGgCAHABIABAAIAJAEIABABQAKAIAKALIAAAAIAAABIABAAQAVgEAUAAQAIAAAGACIABABQAHADACAHIABACIADACQALAGAFAMIABABIACABQAJAFAHAHIACABIALAMIABABIAAABIAAABQANAFAIAJIABACIABABIAAABQAGAHABAMIAAAAIAAAHIAAACIAHAGIABAAQANAFAMAGIACABIAEAEIAAABIAFAEIABABQADAGABALIgBABIABABIAAABIgBAEIAAACIAAACQABAJAEAHIABABIAHAEIAAAAIABAAQAHAIAFAKIAAAAIADADIAAACIABARIAAABIABACIAAAFIAAABIACAMIAAABIgCAHIAAABIgBACIgDAHIAAACIgBABIAAABIAAACQAEAIAFAFIABAEIAGAKIAAACIAAAAQABAKgCAKQAAAHgDAHIAAABQgCAHgEAGQgDAHgHAIIgBAAIgBAKIAAABIABAKIgBACIAAAAIgIAIIgLAFIgBABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgCABIgBABQgGADgDADIAAAAQAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAIgBABQAAABgGABIgBAAIgDgBIgIgCIgDgBIAAAAIAAgBQgBgBgFAAIgHACIgBAAIgEAAQgIgHgIgEIgBgDQgLgQgOgCQgIgMgDgKIgCAAIgIgFIgDgCIgBgEQgEgKgFgHIgGgMQgDgHgEgFIgFACIgCgBIgCABIgMAHIgCAAIgJADIgBAAIgJAAQAVgSAIgeIAEgTIABgHIAAAAIABgBQAEgGgGgEQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBIgDgGQgDgIgBgMIABAAIAAgBIAAAAQgGgGgJgCIgBAAQgCgOADgNIgBAAQgFgBgDgDIAAgDQAAgKgFgGQgHgJgVAAIgBgCQABgBAAgBQAAAAAAAAQAAAAgBgBQAAAAgBABQgKADgMABIAAgBQgFgEgBgIIgBAAQgHgBgJAEIAAAAIgHAFIgBAAQgIAAgEgCIAAgBIgFgLIgBAAQgBgFgEADIgBAAQgHAFgGgDIgBAAQgDAGgKgBIAAABIgSAKIgEADIgFAIQAAAFABAEQAEADACAGIgBAKQAAAIgCAGIgBACIgJAUIAAABIAAAAIAAgBIABAAIAAADIAAADIAEARQAFALAKAEIAAAHIAAAFIAAABIAAABQADADABAFIAAABIABABIAcAcIABABIAYAQIAAABIAKAFIAAgBIABgBIACAAIACAAQAHABAIgCIABAAQAEgCACADIABAAIALAGIAAAAQAGABAIgBIABAAIAJgEIANgEIABgBIAFgBIAAABIADAAIgEADIAAABQgHAFgIADQgJADgJgBQgbgBgVgIIgDAHIgGAFIgBAAIAAAAIgBAAIgLADIgMAIIgEADIAAABIgIAHIgBACIgHAPQgGAIgFAJQgRASgFAQQgCAEAAADQAAATAIAeIABAFQAGAXgTARQgBADgDAEIgBAEQgDAKgSAZIgOAOQgUARgUAFQgLAEgFgCQgJgBgNADIgKAEgABQB+IAAAAIABgDIAJACIgIACIgCgBg");
	this.shape_91.setTransform(31.2,32);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AihFCQgIgCgNAAIgKADIgBgBIgBAAIgOgDIAAgBIgKgGIAAgBIgHgLQgFgFgJgDIgLgBIgCgBQgLAAgDgHIgCgIIAAgFIAEgUIABAAIAAgBIABgJIgFgIIgBgBQgLgCgHgDIgJgDIgFgCIgEgDQgCgDAAgEQgDgKAFgIIAHgMIACgFQABgFAAgDIAAgNIgEgMIgBgBIgUgGIAAgBIgRgJIAAgBIgDgDIgCgEIgBgGIgBgDIAEgMIABAAIAAgCIACgJIAOgWIAXglIABgCIABgBIAAgCIABgCQADgLAAgJIAAAAIgBgBIgCgLIAAgBIgBgJIAAgJIAFgIIAJgRIABgCQAAgEACgDQAAgEADgIIgCgQIgGgEQgHgFgIgEIAAgBQgBgGABgGQAGgJAJgDIADgBIABAAIABgBIALgJIALgMIABAAQADgEABgEIABgIIAEgSIAAgBIAAgBQAJgGAJgIIAAgBQAFgEAGgCIABgBIAAgBQAOgJAUgFIABAAIAAgBIACgBIACgBIABAAIABgCQAMgIANgDIAAAAIACAAIAKgEIAAAAIAEgBIACAAQADACADAAIAAgBIAGgBIACgBIAAAAQAEgOAOAAIABAAIAAAAIABABIABAAIABAAIAAABIABABIAAABQAGAKAFgLIAAgBQAFgFAJgBIABAAIAAABIACAAQADgBAEgDIABgBQAEgJAJgCIAAAAIAGgCIABAAQACgBACgDIACgBQAEgDAHAAIABAAQABABAAAAQABAAABAAQAAAAABAAQABAAAAgBIACAAIANAAIABAAIACgCIABgBIAOgGIAAAAIAEgBIABgBIAJgCIACAAIAJgHIACAAIAAgCQAJgFAJgCIACAAIABgBQAGgBAGABIABAAIAJAFIAAAAIAUATIAAAAIAAABIABAAQAVgEATAAQAIAAAGACIABABQAHACADAHIAAABIADACQAKAGAEANIABABIACABIARALIABABIAMALIACABIAAAAIAAABQAMAFAIAKIABACIAAABIABABQAEAHABAMIAAABIAAAGIAAACIAHAFIABAAIAYAKIACABIAFAEIAAABIAFADIACABQADAGABALIAAABIABABIAAAAIgBAFIAAACIAAACQABAIAEAHIABACIAGADIABAAQAIAIAFAJIABAAIADADIAAABIACARIAAABIABACIgBAFIAAABIABAMIAAABIgBAHIgBABIgBACQgBAEgCACIAAACIAAABIAAABIAAACQADAIAFAFIACAEIAGALIAAABIAAAAQABAJgBAKQAAAHgCAHIgBAAQgCAHgDAHQgDAGgHAIIAAABQgBAFABAEIABABIACAKIAAACIAAAAIgHAJIgKAIIgBAAQAAADADADIgDABIAAACQgFAFgDAFIgBABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAIgBACQgBADgHADIgBABIgDAAIgKABIgDAAIAAgBIgHABIgGACIgBAAIgFABQgJgGgJgDIgBgCQgLgPgNgDQgJgLgEgJIgCgBIgIgFIgCgCIgCgDIgJgRQgEgHgCgGIgFgMIgFACIgBgBIgDACIgLAHIgCAAIgJAEIAAAAIgNABIAAAAIgBABQgHAEgJADQgJADgLAAQgUgBgRgFIANAAIABgBQAEgBADACIALAFIAAAAIAPAAIAAAAIAJgEIAAAAIANgEIABgBIADAAIABgCIAAgBQAbgUAKgkIAEgVIABgIIAAAAIABAAQAEgIgGgEQgEABgBgCIgDgGQgEgKAAgNIABAAIAAgBIAAAAQgHgHgKgCIAAgBQgDgPAEgPIgBAAQgGgBgEgCIAAgEQAAgLgFgHQgIgKgXAAIgBgDQABAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQgLADgOACIAAgBQgFgFgBgIIgBgBQgIgBgKAEIAAABIgIAFIgBAAQgIAAgFgDIAAAAIgGgNIgBAAQAAgGgFAEIgBAAQgIAGgHgEIAAAAQgEAHgLgBIAAAAIgUAMIgEADIgFAJQgBAFACAFQAEADACAHIgBALQAAAJgDAHIgBACIgJAWIgBABIABgBIABAEIAAADIAEATQAFAMAMAEIAAAJIgBAEIAAABIAAACQAEADABAGIAAABIABABIAgAgIABAAIAaASIAAABQAMAHAOAEIgBAAIgCAAIgCABIgBAAIgCAIIgGAGIgBAAIAAAAIgBAAIgLADIgMAIIgFADIAAAAIgHAHIgBABIgKAPIgMAOQgSASgGAOQgCAEAAADQAAASAGAeIABAFQACAXgVAPIgFAGIgBAEQgEAJgQAaQgGAHgHAGQgTARgUAEQgHACgFAAIgFgBgABRCXIAAgBIABgCIAJADIgGACQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_92.setTransform(31.5,32.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AioFIIgVgGIgKACIAAgBIgBgBQgHgDgIgBIAAgBIgJgIIgBgBIgFgNQgEgHgJgDQgFgBgGAAIgCgBQgKAAgEgHIgBgIIgBgFIAFgTIAAgBIAAgBIACgHQgCgGgDgEIAAgBQgKgCgIgDIgJgEIgEgCIgEgEIgDgGQgCgJAEgJIAGgMIACgFIACgIIABgNIgCgNIgBgBQgIgDgLgDIAAgBIgQgKIAAgBIgCgEIgCgEIgCgGIAAgDIAEgMIAAgCIACgJQAFgKAHgLIAXglIABgBIAAgCIAAgBIABgDQACgKgBgJIgBgBIAAgBQgDgFgCgHIABgBIgCgIIAAgJIAEgIIAKgQIABgBQACgFADgFIAGgNQACgIAAgJIgGgFQgGgFgIgDIgBgBQAAgGABgGQAGgJAJgDIACgBIACAAIABgBIAKgJIAMgLIABAAIADgIIACgIIAEgSIAAgBIAAgBQAJgGAHgJIABgBQAEgDAGgDIABgBIAAgBQANgJAUgGIABAAIAAgBIABAAIACgBIABAAIABgBQANgIANgCIAAAAIACAAIAKgCIABgBIAEAAIABAAQADADADAAIABAAIAFgCIACAAIAAAAQAEgOANABIABAAIABAAIABAAIAAAAIABABIAAABIABABIAAABQAGALADgMIABgBQAFgGAIgBIACAAIAAABIABAAIAGgFIABgBQAFgIAIgDIABAAIAGgDIAAgBQADAAACgDIACAAQAEgDAGAAIACAAIAAAAQABABAAAAQAAAAABAAQABAAAAAAQABAAABAAIACgBQAFACAIAAIABAAIACgCIAAgBQAHgEAHgCIAEgCIABgBIAIgCIACAAIAJgHIACAAIAAgCQAJgFAJgCIACAAIABAAQAGgBAGABIAAAAIAJAFIATATIABABQAUgEAUAAQAHgBAGACIABABQAHACADAGIABABIADACQAJAHADANIABABIABABIASAKIABABIAOAKIABABIABABQALAFAHAKIAAACIABACIAAAAQAEAIAAALIAAABIAAAGIAAACIAIAEIABAAIAYAKIABABIAFADIABABIAFADIABABQAEAFACALIAAABIABABIAAAAIAAAFIAAACIAAACQAAAIAEAHIABABIAGAEIABAAQAIAGAGAIIABAAIADAEIABABIADAQIAAABIAAACIgBAFIAAABIAAAMIAAABIgCAHIgBABIAAABIgDAGIAAACIAAACIAAAAIAAACQACAIAFAGIACADIAHAKIAAABIABAAQACAJgCALQAAAGgBAGIgBABIgFANQgDAHgGAIIAAAAIACAKIAAAAQADAEACAGIAAACIAAABIgGAJIgJAKIgBABQACAEAEAEIgCACIAAACIgHAOIgBABQgBADgDACIAAAEQgCAFgIAFIgBABIgEACIgLAEIgEABIAAgBIgIACIgGADIgBABIgEABQgKgEgKgDIgBgBQgMgOgMgEQgKgLgFgIIgBgBIgIgFIgCgCIgDgDIgIgQQgEgHgCgGIgEgNIgEACIgBAAIgDACIgKAHIgCABIgIADIgBABIgNADIgEABIgBAAIgMAFIAAAAIgJADIAAAAIgOABIgMgDQgDgCgEABIgBAAIgOAAIgCAAIgBABIgBABQgDADABAFIgFAGIgBAAIgBAAIgBAAIgKACIgMAIIgFADIAAAAIgIAHIAAABIgNANIgOANQgUARgGAMIgCAHQAAAQAFAfIAAAGQgBAVgXAOIgGAGIgCADQgDAJgQAZQgFAIgGAGQgSARgVACIgJABIgIgBgAgpi+IgVANIgFADIgGAKQgBAGACAEQAFAEADAIQgCAEAAAIQAAAJgDAIIgBADIgKAYIABAEIAAADIAEAWQAGANANAFIAAAJIgBAFIAAABIAAABQAEAFABAGIAAABIABABIAkAjIAAABIAdAUIAAABQAcARApABQAMABAKgEQAKgDAJgGIAAgBQAdgWALgoQADgLABgLIABgJIABAAIAAgBQAFgIgGgEQgFAAgBgCIgDgHQgEgLAAgOIAAgBIABAAIgBgBQgHgHgLgCIgBgBQgDgRAFgQIgCAAQgFgBgFgDIAAgFQAAgMgFgGQgJgMgZAAIgBgDQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAQgNAEgPABIAAgBQgGgEgBgKIAAgBQgJgBgMAEIAAABIgIAGIgBAAQgJAAgGgDIAAgBIgGgOIAAAAQAAgGgGAEIAAAAQgKAGgIgEIAAABQgEAHgMgCIgBABgABTCtIgBAAIAAAAIABgDIAIAFIgEABQgDAAgBgDg");
	this.shape_93.setTransform(31.9,33);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AiuFOIgWgKIgKAAIAAAAIgBgBQgHgEgIgDIAAgBIgJgKIAAgBIgEgPQgDgIgJgCQgEgCgHgBIgCAAQgKgBgDgGIgCgHIAAgGIAEgSIABgBIAAgBIABgHIgDgLIgBgBIgRgGIgIgEIgEgDIgEgDIgDgGQgDgJAEgJIAGgMIACgFIACgIIADgMIgBgOIAAgBQgJgEgKgDIAAgBIgQgLIAAgBIgBgEIgCgEIgBgGIAAgEQACgEABgHIAAAAIAAgCIACgJIALgVIAVgkIABgCIAAgBIAAgCIABgCQACgKgDgKIgBgBIgBgBQgEgEgCgIIAAgBIgCgIIgBgJIAFgHIAKgQIABgBQADgGAFgFIAKgQQADgIABgKIgFgEQgGgFgIgDIAAgBQAAgHACgFQAFgJAJgEIACAAIACAAIAAgCIALgIIALgLIABAAIAEgHIACgIIADgSIAAgBIAAgBQAJgFAHgKIAAgBQAEgEAGgCIAAgBIABgBQANgLASgFIABAAIAAAAIAAgBIACAAIABgBIACAAIAAgBQANgGANgCIABAAIACAAIALgBIABAAIADAAIACAAQACAEAEAAIABAAIAFgBIABAAIAAAAQADgOANABIABAAIABAAIABABIAAAAIABAAIABACIAAABIAAABQAFANADgOIABgBQAEgGAIgBIACAAIABAAIAGgFIABgBQAFgIAHgEIABAAIAGgEIABgBIAFgDIACAAQAEgDAGABIACAAIAAAAQACACADAAIABgBIANADIACAAIACgCIAAgBIANgGIAEgCIABgBIAIgDIACgBIAIgGIACgBIAAgBQAIgFAKgBIACAAIABgBQAFAAAGABIABABIAIAFIATASIAAABQAUgEATAAQAHgBAGACIACAAQAHACADAFIABABIACACQAJAHACAOIAAABIACABIASAKIACAAIAOAIIABABIABABQALAGAGAKIAAACIABACIAAAAQACAIABALIAAABIAAAGIAAACIAIADIABAAIAXAKIACABIAEACIABABQADABACACIACABQAFAFACAKIAAAAIABACIABAAIgBAFIAAACIAAACQABAIADAGIAAACIAHADIAAAAIABAAQAIAGAHAHIABAAIADADIACABIAEAQIAAABIAAABIAAABIgCAFIAAABIgCAMIAAABIgBAHIgBAAIAAACIgDAFIAAACIAAACIAAAAIAAACQACAIAFAGIACADQADAFAFAEIAAABIABAAQACAJgBALQAAAGgCAHIAAAAIgFANQgDAHgFAHIAAABQABAFADAEIAAAAIAHAKIAAACIAAABIgFAKIgHANIgBABQADAFAFAFIgCADIAAACIgGASIgBACIgEAHIgBAFQgCAIgIAHIgCABIgFADIgMAGIgFADIAAAAIgIADIgGAEIgBAAIgFACIgVgEIgBgCQgMgMgMgFQgLgLgFgHIgBgBIgIgFIgCgCIgDgDQgGgIgDgIQgEgGgBgGIgCgPIgEADIgBAAIgDACIgKAIIgBABIgIADIgBABIgNAFIgEACIgBAAIgMAFIgIACIgOACIgMgCIgBAAQgCgBgEAAIgBAAIgOAAIgCABIgBAAIgBABQgCADABAFIgFAHIgBAAIgBAAIgLABIgLAJIgFADIAAAAIgIAFIgBACIgOALIgQAMQgWAPgHAMIgCAGQgBAPAEAfIAAAGQgDAVgaAMIgIAFIgBADIgSAiQgEAHgHAGQgRARgVABIgHABQgFAAgEgCgAhdhSIAAADIAEAXQAHAOANAGIAAAKIAAAGIAAABIAAABQAEAFABAHIAAAAIAAABIABACIAnAmIABABIAfAWIAAAAQAfATAsACQANABALgEQALgEAJgGIAAgCQAggYAMgrIAFgYIAAgKIABAAIABgBQAFgJgHgEQgFAAgBgCIgEgIQgEgMAAgPIABgBIAAgBIgBAAQgHgIgNgCIAAgCQgDgSAEgRIgBAAQgGgCgFgDIAAgFQAAgNgGgHQgKgNgagBIgCgDQABAAAAgBQAAgBAAAAQgBAAAAAAQAAAAgBAAQgNAEgRABIAAgBQgHgFgBgLIAAAAQgKgBgMAEIAAABIgJAGIgBAAQgKAAgGgDIAAgBIgGgQIAAAAQgBgGgGAEIgBABQgKAGgJgFIgBABQgDAIgOgCIAAABIgYAOIgFADIgGALQgBAGACAFQAGAFACAIQgBAFAAAIQAAAKgDAIQgBABAAAAQAAAAAAABQAAAAgBAAQAAABAAAAIgKAbIgBABIAAgBIAAABIAAAAIABAEgABUDEIgBAAIAAgBIABgCIAHAGQgGAAgBgDg");
	this.shape_94.setTransform(32.2,33.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("Ai2FUQgKgFgLgJIgLgBIAAgBIgBgBQgHgFgIgDIAAgCIgIgLIAAgCIgCgRQgDgJgJgDQgEgCgHAAIgCgBQgJAAgEgGIgCgHIAAgGQADgIACgKIABgBIAAgBIABgHQAAgGgCgGIgBgBQgJgDgHgEIgJgEIgDgDIgEgDIgDgGQgDgIADgKIAFgLIADgFIADgIIADgMIACgPIgBgBIgSgIIgBgBIgOgLIAAgCIgBgEIgBgEIgBgGIgBgEQADgEAAgHIABgCIAAgJQAFgKAGgKIAUgkIAAgBIABgCIAAgBIAAgCQACgMgFgKIgBAAIgBgBQgFgFgDgHIAAgBQgCgDgCgFIgBgJIAFgHIALgPIABgBIALgNQAHgIAGgKQAFgIADgKIgFgFQgGgFgIgDIAAgBQABgGADgGQAEgIAJgEIACgBIACAAIAAgCIAKgIIAMgJIABAAIAEgIIACgIQACgIABgJIAAgBIAAgCQAJgFAFgKIAAgBQAEgEAGgCIAAgBIAAgCQANgKARgGIACAAIAAgBIABAAIACAAIABAAIAAgCQAOgFANAAIABAAIACAAIAMAAIABAAIADABIABAAQADAEADABIABAAQACABADgCIACAAQACgOAMACIACAAIAAAAIABABIABAAIABAAIAAACIAAABIAAACQAFANACgOIABgBQADgHAIgCIACAAIAAABIABAAIAGgHIABgBQAFgGAHgFIAAAAIAHgFIAAgCIAGgCIABAAQAFgCAGAAIACAAIAAAAQABACADABIACgBQAGADAHABIACAAIACgBIABgBIALgHIAEgCIABgBIAHgEIACAAIAJgHIABAAIAAgCQAIgEAKgBIACAAIABAAQAFgBAGACIAAAAIAIAGIASARIABABQATgDATgBQAGAAAHABIABAAQAHABAEAFIAAABIADACQAIAGABAPIAAACIACABIASAIIACABIAPAHIACAAIABABQAKAGAFALIAAABIABACIAAABQABAIAAALIAAABIAAAGIAAABIAIADIABAAQAMAEALAFIACABIAFACIAAABIAGACIACABQAGAEACAKIAAABIABABIABAAIAAAFIAAACIAAACQAAAIADAGIAAACIAHADIAAAAIARALIABAAIAEAEIABAAIAFAQIAAABIAAACIgCAFIAAABIgDAMIAAAAIgBAHIgBABIAAABIgDAFIAAACIAAABIAAABIAAACQACAIAEAFIADAEQADAEAFAEIAAABIABAAQADAIgBALIgBANIAAAAIgFANQgCAIgEAHIgBAAQACAFADAEIABAAQAFAEADAGIACACIAAABIgEALIgHAPIgBABQAEAHAGAFIgBAEIAAACQgBAMgEAKIgBADQgBAFgDAFIgCAGQgCAJgJAJIgCACIgFAFIgOAJIgGADIgIAFIgGAEIgBABIgGADIgWgDIgBgBQgNgLgLgGIgSgQIgBgBIgIgGIgCgBIgCgDQgGgIgEgHQgDgHgBgGIAAgPIgEADIgBAAIgDADIgJAIIgCABIgHADIgBABIgNAHIgDACIgCAAIgLAFIAAAAIgIACIgBAAQgGACgHAAIgNAAQgCgBgEAAIgBAAIgOAAIgBAAIgCABIgBABQgCADACAFIgFAHIgBAAIgBAAIgKABIgLAIIgFADIAAAAIgIAGIgBABIgRAKIgSAKQgXAPgHAJIgDAGQgBAOACAgIgBAFQgFAVgcALIgJAEIgCADIgQAhQgEAIgGAFQgQAQgWABIgCAAQgHAAgHgCgAg/jTIgZAPIgFAEIgHALQgBAHACAGQAGAEADAJQgCAFAAAJQAAALgDAJIgBAEQgCACgKAaIgBABIAAAAIABAEIAAAEIAEAaQAHAPAPAGIAAALIAAAGIAAABIAAACQAFAFAAAHIAAABIAAAAIACABIAqArIAAABQARAMARAMIAAABQAhAUAxACQAOABALgFQAMgEAKgGIAAgCQAigaANgvQADgMACgOIABgKIABAAIAAgBQAGgKgIgFQgFABgBgCIgEgJQgFgNAAgRIABgBIAAAAIgBgBQgHgIgOgDIAAgBQgEgUAFgTIgBAAQgHgCgGgDIABgGQAAgOgGgIQgLgNgdgBIgBgDQAAgBAAgBQAAAAAAgBQAAAAgBAAQAAAAgBAAQgOAEgSABIAAgBQgHgFgBgMIgBgBQgKgBgNAFIAAABIgKAGIgCAAQgJABgGgEIAAgBIgHgRIgBAAQgBgHgHAEIAAABQgMAHgJgFIgBABQgEAIgOgCIgBABgABUDaIAAgBIAAgCIAHAIQgFgBgCgEg");
	this.shape_95.setTransform(32.7,34.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67,69.8);


(lib.BuffyArm2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC9966").s().p("ADpFSIgEgEIgWgaQgLgNgXgDIADgQQgDgJgOAAIgWgCIgDgBIgCAAIgCAFQgUgGgigEIgcgFQgjgFgTAAQgNgBgFABIgvgOIAAABIgBAAIgCAAIgMgEIgPgGQg0gRg0gXIAAgBIgYgNIgRgKIAAgBIgCABIgUgRIAAgBQgEgFABgJIgBAAIgZgbIAAgBIgJgLIAAgBIgDgJIAAgCIgEgKQgEgNgBgNIAAgBIgBgBQgNgfgHgjIAAgCIgBggQACgHgBgMIAAgCQAJgYgBgZIAAAAQAAgEgDgBIgBgBIgTgpIAAgEIAAgBIgBgNQgCgSgDgMQAFgOgCgJIAAgBQAFgOABgSIAAgCQAKgHgDgGIABAAQADgHgBgKIABAAIAFgHQAGgEAGgLQALgLAiAAQANAAALACQAsALAPAzQAGATADAYIACAPQgGAEgDAHQAFAMABAQIABAEIAAALIgBACQgBAXAIAPIAFAJQAIAJAEAQQAFAVAEAaIAAALIAAAAIACAJQABASAAAUQgBANADAFIACABQgCAWAEAWIABAAIAGABIALAPIAGAFIgDACIAJAEQAHAFAEAAIAEAAIABAAQAIACAEgDQAPAKAWAEQAQAEANAHIAZAPIAIAGIAMAIIAAADIAEADIArAPQAPACAPgBIAJABQARACAgAIIAGACIAFAAIAEgEIAPgBIABgEIAigPIAJgCQAagFAlAGQAHAIACAOQACAGAAAJQABATgFANQgEAMgDAEQgDACgHgCQgIgDgBgPQAAgQgHgCQgEgBgCABIgCABQgDAKABAOIAEANIgCADIgGAMIgCAhQACAOAGAKQAFAIAJAFIgEACIgOAEgAkkiMIAAACIACAJIAAAAIAFAQIACABQADADAJgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAIADALgEQAEgBgBgGIgBgJIAAAAQgBgNgHgBIgBgBQgNAAACAPIABADIAAAAIgEABQAAAAgBgBQAAAAgBgBQAAAAAAgBQgBAAAAgBIgBgFIAAgDIAAAAQgEgIgGAAQgEAAgFAFgAlBi0IAAABIAAABQABAaAHAUIAAABIAAACIAAAAQADAOANgEIABAAQADgFAAgFQgBgGgEgHIAAgBIAAgBQAEgFAAgHIgBABIgCAAQgCgWgPgDIgHgBgAEfFIQgFgBgDgEQgGgHgCgOQgDgSACgIQACgDADgDIAEgDQAUAGAHgIQADgDAHgUQAIgWgCgSIgBgMIgBgDIAQgFIAYAIQADALgEAKQgBACgUAWQgCAGAJAKQAIAJgDALQgFANgTAHQgUAGAAACQgCAGACAMIABAFIAAAKQgLAAgJgEgAivieQAAgMACgKIgBAcIgBgGgAitjWIAAgEIACADIAAANIgCgMg");
	this.shape.setTransform(38.3,40.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ADtFnQgQgGgNgMIgJgLQgRgUgSgFQgDgDgBgCQgIgDgBgGIgBgBIgEgBIgBABIgGAAIhJgKIgZgEQhCgMgFABIgEgEIglgGQgVgOgWgFIgIgCQhBgUg1ggIgEAFIgIgCQgLgWgoguIgQgRIAAgBIgBgCQgnhGABhsQACgEAAgHIABAAIAAgBQAKgTgFgPIgCgGIAAgBIgBAAQgHgJgEgKIgBgBQgBgGgDgDIABgHQgFgfgBgTIABgCIAThxIAHgGIAJgDIAJgFQASgKAZgBQBAgEATAyQADAFALAoQANArAAAIIAAABIAAAEIACAMQAAAKgCAMIAAAAQgCAKAAANIABAGIAAALIAGADQAEAWAQAmQAJAVAHAMIgFAJIACAVIAAABQAGAdAAAcQgCACAAAEQAAADACACIAAABQABACADABIgDADQAHAEAHAIIAMANIAEgBIADACIAGgBQAAABAAgBIBaAkIgBABIAGAFIAGABQAEACAbAPIgEAGQAmAJAUADIAUACQAOABAIADQABgCAXAIIARgBIAAAAQAEgLAqgLIAIgCQA0gNATAQQAGAIADAJQAHgLANAEQAPADAOAQIADACQAMAPAAAPQABARgTAGQAKAJgBANIgFAQQgGARgDADQgFAFgbAKIABAMIgDAMQgEAKgFADQgGACgOgDQgDAGgRAEQgKACgHAAQgIAAgHgCgACDEKIADAAIAWADQAOAAADAJIgDAQQAXACALANIAWAaIAEAEIAZAJIAOgFIAEgBQgJgGgFgIQgGgKgCgNIACghIAGgNIACgDIgEgMQgBgOADgLIACgBQACgBAEACQAHACAAAQQABAPAIACQAHADADgDQADgDAEgNQAFgNgBgTQAAgIgCgHQgCgNgHgJQglgGgaAFIgJACIgiAQIgBAEIgPABIgEAEIgFAAIgGgCQgggIgRgCIgJgBQgPABgPgCIgrgPIgEgEIAAgDIgMgHIgIgGIgZgQQgNgHgQgDQgWgFgPgJQgEADgIgCIgBgBIgEABQgEAAgHgGIgJgDIADgCIgGgGIgLgOIgGgBIgBgBQgEgWACgVIgCgCQgDgFABgNQAAgTgBgSIgCgKIAAAAIAAgLQgEgagFgVQgEgPgIgKIgFgIQgIgQABgWIABgDIAAgLIgBgDQgBgQgFgNQADgHAGgDIgCgQQgDgYgGgSQgPg0gsgKQgLgDgNAAQgiAAgLALQgGALgGAEIgFAIIgBAAQABAJgDAHIgBAAQADAHgKAHIAAABQgBASgFAOIAAACQACAIgFAOQADANACARIABAOIAAAAIAAAEIATApIABACQADABAAADIAAABQABAYgJAZIAAABQABAMgCAIIABAgIAAABQAHAjANAfIABACIAAAAQABAOAEANIAEAKIAAABIADAJIAAACIAJALIAAABIAZAaIABABQgBAJAEAFIAAABIAUAQIACAAIAAABIARAKIAYANIAAABQA0AXA0AQIAPAHIAMADIACABIABgBIAAgBIAvAPQAFgBANAAQATABAjAFIAcAEQAiAFAUAFIACgEIACAAgAEQEQQgDACgCAEQgCAHADATQACAOAGAGQADAEAFACQAJADALAAIAAgKIgBgFQgCgMACgGQAAgCAUgGQATgHAFgMQADgLgIgKQgJgKACgGQAUgVABgDQAEgKgDgKIgYgIIgQAFIABACIABAMQACASgIAWQgHAUgDAEQgHAIgUgHIgEAEgABsEwIAEgHIAAAHIgEAAgAkehvIgCAAIgFgQIAAgBIgCgJIAAgBQALgMAIAOIAAABIAAADIABAFQAAAAABABQAAAAAAABQABAAAAABQABAAAAAAIAEAAIAAgBIgBgCQgCgQANABIABABQAHAAABANIAAABIABAIQABAHgEABQgLAEgIgDQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAABIgEAAQgGAAgCgDgAk8h/IAAgBIAAgBIAAgCQgHgUgBgZIAAgCIAAgBIAAAAIAHAAQAPADACAWIACAAIABgBQAAAHgEAFIAAACIAAAAQAEAHABAHQAAAFgDAEIgBABIgFAAQgIAAgDgKg");
	this.shape_1.setTransform(38.6,40.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.1,4,75.1,72.3);


(lib.BuffyArm1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC9966").s().p("AhhEVQg3ACg5gFIAAgBQgXgDgXgFIgBgCQgRgQgTgOIAAgBQgDgFAAgJIgBgBIgYgaIgBgBIgIgLIAAgCIgDgJIgBgBIgDgKQgFgNAAgOIgBAAIgBgCQgMgfgHgkIAAgBIgCggQADgIgBgMIAAgBQAIgYAAgYIAAgBQgBgDgDgBIAAgCIgTgpIAAgEIAAAAIgBgOQgCgRgDgNQAFgOgCgIIAAgCQAFgOABgSIAAgBQAKgHgEgHIABAAQADgHgBgJIABAAQAJgLAGgMIAAgBIAJgGIAAAAQAIgIALgEIAGgCIgCgCIAAgBQAPgIASACIAEABIAMgBQAOgCANAEQAKAEAIAFIAHAEQAEABAEADIADAAQAFABAEADQAGAEAEAEQgBArgEArIgEAtQgBgNgFgJIgCAAQgJADgEAJQAFANABAQIAAADIAAALIAAADQgBAWAHAQIAGAIQAIAKAEAPQAFAUADAaIAAALIABAAIACAKQABASgBAUQAAANADAFIABACQgCAVAEAWIABABQANADAUgCQAIgBADgDQARADAWgDQARgCAPADIAdAGIAKADQATAFAqAFQA+AHAlAAQBPgeAcgMIABAGQAAAFgCAEIABgBIAAgBQACgGAAgJQAMgFAAgCQAAgFgBAAIgCgBQABAAAAAAQAAgBgBAAQAAAAgBAAQgCAAgBAAIAPgnIABgBQAggLAlgHIAAAAIAAgCQAXgCAPADIABABQACAOgMAHIgBABIAAAAQgDARALAKIAAACIAAAPIgBAAIgXAXQgBAKAEAEIABABQAMAMgHAPIAAABIgBABIgKAKIgBAAIgPAGIgMAEIgBABQgFAFABALIAAABQgIAHgKAGIgBgBQgSAAgMgGIgCAAQgFgDgBgJIAAgBQgHgIgNAFQgLABgLAEIgCAAIgVAHIgpAMIgaAIQggALgqAAQg9AAhAACIAAACIAAAAIgCABIgBAAIgMAAIgQgBgAEXDFIAAABIAAABIgBAGQgBAGgGACQAAALAEAIIABABQAJACADgFIABAAQAIgJABgLIAAgBIAAAAQABgGAJgFIABgBQAPgFAHgMIAAgBQADgHgBgKIAAgBQgFgJgFgHIgBgBQAFgHAHgEIAAgBIACAAQAIgDgHgFIAAAAQgXgEgIASQgBAIADAFIABABIAAABQAGAEABAIIAAABQgGAKgJAHIgBAAIgSAIIAAABQgBAAgBABQgBAAAAAAQAAAAAAAAQgBABABAAIAAABIAAAAIAAACgAk8g0IAAABIACAJIABABIAFAQIABAAQAEAEAIgBQABgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAJADAKgEQAEgBgBgHIgBgIIAAgBQAAgNgIAAIAAgBQgNgBACAQIAAACIAAABIgDAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIgBgFIAAgDIgBgBQgEgHgFAAQgFAAgFAFgAlYhdIAAABIAAACQABAZAGAUIAAACIAAABIABABQADANANgDIABgBQACgEAAgFQAAgHgFgHIAAAAIABgCQADgFABgHIgCABIgCAAQgCgWgOgDIgHAAgAEiA8QARgBAMgGIAEAAIAFABQgBAFgJABIAAABIgCAAQgWADgTAGQAHgGAIgEgAjGhGQAAgNACgKIgBAdIgBgGg");
	this.shape.setTransform(40.6,31.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhsEjIgIABQhXADhJgUQgMgWgoguIgPgSIgBgBIAAgCQgnhGAAhtQADgDgBgHIABAAIAAgBQAKgTgEgPIgDgFIAAgBIgBgBQgHgJgEgKIgBgBQgBgFgDgEIABgGQgFgggBgTIACgCIAThxIAHgHIAVgPIADgDIAOgHQAfgQAeAAQAUAAAgAMIADABQAIAGAGADIABADIAHAMIAFAGIAAAJQgEgFgGgDQgEgEgFgBIgDAAQgEgDgEAAIgHgFQgIgFgKgEQgNgEgOACIgMABIgEgBQgSgCgPAJIAAABIACABIgGACQgLAEgIAIIAAABIgJAFIAAABQgGANgJAKIgBAAQABAJgDAIIgBAAQAEAGgKAHIAAABQgBATgFAOIAAABQACAIgFAPQADAMACARIABAOIAAABIAAAEIATApIAAABQADABABADIAAABQAAAYgIAYIAAACQABAMgDAHIACAgIAAACQAHAjAMAfIABACIABAAQAAAOAFANIADAKIABACIADAJIAAABIAIALIABABIAYAaIABABQAAAJADAFIAAABQATAOARAQIABACQAXAFAXADIAAABQA5AFA3gBIAQABIAMgBIABAAIACAAIAAgBIAAgBQBAgDA9AAQAqAAAggLIAagIIApgMIAVgHIACAAQALgEALgBQANgFAHAJIAAAAQABAJAFADIACAAQAMAGASABIABAAQAKgGAIgGIAAgCQgBgLAFgEIABgBIAMgFIAPgFIABgBIAKgKIABgBIAAgBQAHgPgMgMIgBgBQgEgEABgKIAXgWIABgBIAAgPIAAgCQgLgKADgRIAAAAIABAAQAMgIgCgOIgBAAQgPgEgXACIAAACIAAABQglAGggALIgBACIgPAmQACAAABAAQABAAABAAQAAAAAAABQAAAAgBAAIACABQABABAAAEQAAACgMAGQAAAIgCAGIAAABIgBABQACgEAAgEIgBgHQgcAMhPAeQglAAg+gHQgqgFgTgFIgKgDIgdgGQgPgDgRADQgWACgRgDQgDADgIACQgUABgNgDIgBAAQgEgXACgVIgBgBQgDgGAAgMQABgVgBgSIgCgKIgBAAIAAgLQgDgZgFgUQgEgQgIgKIgGgIQgHgQABgWIAAgCIAAgLIAAgEQgBgQgFgNQAEgJAJgCIACAAQAFAIABANQABAKgCAMIAAABQgCAJAAANIABAGIgBALIAGADQAEAWARAlQAIAVAIANIgFAIIABAVIAAABQAHAeAAAcQgCACAAAEQAAAEABACIAAAAQADAFAJgCIACAAIAHgEIAAgBIBhAFIAAABIAHADIAHgBQAGAAA4ALQA5AKASAAQAZAAA+gWIArgPIgBgBIgCgCIAGgPIACgDIABgEIAAAAQAJgYAOgOQATgGAWgCIACAAIAAgCQAJgBABgFIACAAQAHAAAGgCIAAABQAlgGAVAWIABAAQACAEAAAHIAAABIgFAJIAAABQgHAEgCAKIAAACIAAABQAHAFACAIIAAACQABANgEAIIgBAAQgIAMgLAIIABABQADANAHAJIAAABIAAANIgBABQgDAIgFAGIgBABIgJAIIgCACIgBAAQgMAFgKAFIAAACQgDAGgEAGIgBACQgJAKgRAEIAAAAQgdACgRgLIgBAAQgKAAgEgFIgBAAQgRgCgVAHIAAAAQgFADgCAEIgCAAQgQABgJAGIgCAAQhKAMhMAFQgLgFgSAAIgzAIQgYgGgXACgAEQDsIgBgBQgEgIAAgKQAGgDABgGIABgGIAAgBIAAgBIAAgBIAAAAIAAgCQAAAAAAgBQAAAAAAAAQABAAAAAAQABgBABAAIAAgBIASgIIABAAQAJgGAGgLIAAgBQgBgIgGgEIAAgBIgBAAQgDgGABgIQAIgSAXAEIAAABQAHAEgIADIgCAAIAAABQgHAFgFAGIABABQAFAIAFAIIAAACQABAKgDAGIAAABQgHAMgPAFIgBABQgJAFgBAGIAAAAIAAABQgBALgIAJIgBABQgCADgFAAIgFgBgAk3gWIgBAAIgFgQIgBgBIgCgJIAAgBQAMgMAHAOIABABIAAADIABAFQAAABAAAAQABABAAAAQAAABABAAQAAAAABABIADgBIAAAAIAAgDQgCgPANAAIAAABQAIAAAAANIAAABIABAIQABAHgEABQgKAEgJgDQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABIgDAAQgGAAgDgDgAlUgmIgBgBIAAgBIAAgBQgGgVgBgZIAAgBIAAgBIAAgBIAHABQAOADACAVIACAAIACgBQgBAHgDAGIgBABIAAABQAFAGAAAHQAAAFgCAEIgBABIgFABQgJAAgCgLg");
	this.shape_1.setTransform(41,31.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.1,1.7,80,59);


(lib.BubThighTrace = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FECE89").s().p("AgsClQhIgegCgOIgGgdQgJgigFgjQAEgMAGgXIACgGQAGgbAAgKQAFgUAFgQQAGgPALgTIARgfQA9g+B5ClIAVAbIAJgDQAGAQgGAeQgGAfgRAkQgMAbgEgDIACAGQg1A8gzAAQgUAAgTgJg");
	this.shape.setTransform(15.2,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiJCaIgLhYIgDAAQgDABAAgIIACgWIAAgHIABgBQAEgWADgHQANgfAAgXQAAgKAWgpQAXgqAMgHIAEADQACADAAAEQAAAEgJATIgRAfQgLASgGAQQgKAVAAAOIAAABQAAAKgHAaIgBAFQgGAZgEALQAFAjAJAiIAGAdIgSgBgABiCVIgCgGQAEADAMgbQARglAGgeQAGgggGgPIgJADIALgIIASAAIAAAAQAABMgvA7IACAOIgMAAg");
	this.shape_1.setTransform(15.3,3.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,-12,31.1,36.4);


(lib.BubHeadDream = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AgIACIgBgDIASgBQgFAEgFABIgDAAIgEgBg");
	this.shape.setTransform(15,7.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#86592D").s().p("AhDAPQgPgJgHAJQgHAIgKgIQACgIAagUQAJgIADgGIACgBIAAgBIACgHQALAAADgDQANADAIgHQAMgLAEgBQALAEARgCIAggGQAogIASAUIgogBQgWABgBAQQAPADgBABIgNACQgRADgDAIQgXgBgHADIgDABIgCAIQgCgDgEAAQgGAAgGAMIgGAPIgQAPQgOAMAAACQAAAEAGAAQgEAGgFADg");
	this.shape_1.setTransform(14.2,8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FECE89").s().p("AAvBZIgzgUIgFgHIiUAAIgHgBQAGgPAIgGIAfgOQAVgKgMgIQgQASgogCQAAgbACgGQAEgQASADQAQgEAFAPQAGAOANgCQgEgLAQgSIADgDIAIgJQAOgQAGgQIAFAFQACADAEAAQAEAAABgDIAAgFIgBgFQADABAEgBQAHAAAFgFIAGgBIACAAIAAAAIACAFQAHABAFgDIADgDIAIgLQAMgDAJAGQAJAHAJgCIABAAIACgBIAJgLQAGgJAOAGQAZAcAnADIAHAPIAIANQAIAQABAMQADAkgcAhQgOARgpAgIgRAAgAAPAeQANAFATgDQATgCAKgHQAMgHgJgIQgNAQgagBQgZgBgPgOQAAAQAPAGgABPgmQgCAFgPACQgOABAAAIQALAKAQgKQARgKgFgWQgJgQgXANQgJAEgDAGQgCAGAHADQgFgKAVAAQAUAAgFAKgAgVguQgRAOAPAKQABgNAQgGQATgIADgFQgHgCgGAAQgMAAgMAKgAA7hTQgLAEgFAJQgCADgBAFQAHgEAIgCIALgDQAOgDAHgEQgIgHgJAAQgGAAgFACg");
	this.shape_2.setTransform(18.6,15.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABcCDQAoggAOgRQAcghgDglQgBgMgIgPIgHgNIgIgPQgmgDgZgcQgPgGgGAJIgIALIgDABIAAAAQgJACgJgHQgKgGgLADIgJALIgDADQgEADgHgBIgDgFIAAAAIgBAAIgHABIgTABIABAEIABAFIgBAFQgBADgEAAQgDAAgDgDIgFgFQgGAQgNAQIgJAJIgCADQgQARADAMQgNACgFgPQgGgPgPAEQgTgDgEAQQgBAGAAAcQAoACAPgSQAMAIgUAKIgfAOQgIAGgHAPIgRgCIgDgCIATgJQgSgbAIgbQAIgWAagSQgHgRgFAGQgKAMgKgBQAHgRAYgTQAOgMAJgKIAAgDIAAgCIABgIQADgFAUgBQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAIAFgIQAFgKADgCQALgHANAHQAIgDAQgLQAOgGAKAMQACACAjgBQAmgCALAJQAJAGgFAIQgFAIAJACQATACgDAdQAtgHASAnIADAHQAMAggJAlIAAAAIgIAMIgDAXQgPAFgSAUQgRATgTADIgFAAgAhqgjIAAAvQAFgDAEgGQgGAAAAgDQAAgCAOgMIAQgPIAGgPQAGgNAGAAQAEAAACADIACgIIADgBQAIgDAXABQADgIAQgDIANgCQABgBgPgDQABgQAWgBIAoABQgSgUgoAIIgfAGQgRACgMgEQgEABgMALQgIAHgNgDQgDADgLAAIgCAHIAAABIgCABQgDAGgJAIQgaAVgCAIQAKAIAHgIQADgFAGAAQAFAAAIAFgAATA5QgPgGABgQQAPAOAZABQAaABANgQQAIAIgLAHQgLAHgSACIgMABQgMAAgJgDgAA0AEQABgHANgBQAQgCACgFQAEgKgUAAQgUAAAEAKQgHgDADgGQADgGAJgEQAXgNAJAQQAEAWgRAJQgHAFgHAAQgHAAgGgFgAgQgTQAQgOAUAGQgDAFgSAIQgQAGgBAMQgQgJASgOgAAwgrQAFgJAKgEQARgHAMAMQgIAEgNADIgLADQgIACgIAEQABgFADgDg");
	this.shape_3.setTransform(18.1,13.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnAdQgJgDgCgFQgCgEAAgHQABgGADgEQACgEADgCIgBAFIABADQACADAFAAQAKAAgBgIIAAgGIAGADQALAGgBAKIgBAFQgBAMgMACgAAXgFIAAgIQgBgJAEgEIgBACIAAAEQABADAGAAQAFAAAEgEQACgEAAgDIACABQAGAEABADIAAASQgDADgQAAQgJAAgBgGg");
	this.shape_4.setTransform(21,10);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FECE89").s().p("AAvBZIgzgUIgFgHIgSAAIgBgBQgKgGgNgEIgCgBIgJADIgEAEIgFgGQgNACgHAJIhJgBQAGgPAIgGIAfgOQAVgKgMgIQgQASgogCQAAgbACgGQAEgQASADQAQgEAFAPQAGAOANgCQgEgLAQgSIADgDIAIgJQAOgQAGgQIAFAFQACADAEAAQAEAAABgDIAAgFIgBgFQADABAEgBQAHAAAFgFIAGgBIACAAIAAAAIACAFQAHABAFgDIADgDIAIgLQAMgDAJAGQAJAHAJgCIABAAIAAAAQgFAFgBAGIgCANIAJAJQgEADgCADQgCAGAHADQgFgKAVAAQAUAAgFAKQgCAFgPACQgOABAAAIQALAKAQgKQARgKgFgWQgDgFgFgCQAFgGgEgHQgHgNgGgEQgCgEgHACQgEACgCADIgCABIAJgLQAGgJAOAGQAZAcAnADIAHAPIAIANQAIAQABAMQADAkgcAhQgOARgpAgIgRAAgAAPAeQANAFATgDQATgCAKgHQAMgHgJgIQgNAQgagBQgZgBgPgOQAAAQAPAGgAgbg/QgPAUATAVQAQAHAOgKQAPgLgGgSQgRgRgMAAQgIAAgGAIgAhbA+QAHgJANgCIAFAGIAEgEIAJgDIACABQANAEAKAGIABABg");
	this.shape_5.setTransform(18.6,15.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("ABcCDQAoggAOgRQAcghgDglQgBgMgIgPIgHgNIgIgPQgmgDgZgcQgPgGgGAJIgIALIABgBQADgDAEgCQAHgCABAEQAHAEAHANQADAHgEAGQAFACADAFQAEAWgRAJQgPAKgMgKQABgHANgBQAQgCACgFQAEgKgUAAQgUAAAEAKQgHgDADgGQACgDADgDIgJgJIADgNQAAgGAGgFIgBAAIAAAAQgJACgJgHQgKgGgLADIgJALIgDADQgEADgHgBIgDgFIAAAAIgBAAIgHABIgTABIABAEIABAFIgBAFQgBADgEAAQgDAAgDgDIgFgFQgGAQgNAQIgJAJIgCADQgQARADAMQgNACgFgPQgGgPgPAEQgTgDgEAQQgBAGAAAcQAoACAPgSQAMAIgUAKIgfAOQgIAGgHAPIgRgCIgDgCIATgJQgSgbAIgbQAIgWAagSQgHgRgFAGQgKAMgKgBQAHgRAYgTQAOgMAJgKIAAgDIAAgCIABgIQADgFAUgBQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAIAFgIQAFgKADgCQALgHANAHQAIgDAQgLQAOgGAKAMQACACAjgBQAmgCALAJQAJAGgFAIQgFAIAJACQATACgDAdQAtgHASAnIADAHQAMAggJAlIAAAAIgIAMIgDAXQgPAFgSAUQgRATgTADIgFAAgAhqgjIAAAvQAFgDAEgGQgGAAAAgDQAAgCAOgMIAQgPIAGgPQAGgNAGAAQAEAAACADIACgIIADgBQAIgDAXABQADgIAQgDIANgCQABgBgPgDQABgQAWgBIAoABQgSgUgoAIIgfAGQgRACgMgEQgEABgMALQgIAHgNgDQgDADgLAAIgCAHIAAABIgCABQgDAGgJAIQgaAVgCAIQAKAIAHgIQADgFAGAAQAFAAAIAFgAAzgsIAAAIQABAHAJAAQARAAADgEIgBgSQgBgDgFgEIgCgBQAAADgDAEQgEAEgFAAQgFAAgBgDIAAgEIAAgCQgDAEAAAJgAATA5QgPgGABgQQAPAOAZABQAaABANgQQAIAIgLAHQgLAHgSACIgMABQgMAAgJgDgAgSAEQgTgUAPgUQAPgUAbAdQAHASgPAKQgJAGgIAAQgGAAgHgDgAgUgfQgDAFAAAGQAAAHABAEQADAFAIADIAOAAQALgDABgLIACgFQAAgKgLgHIgGgDIABAGQAAAJgIAAQgGAAgCgDIAAgEIAAgFQgDACgCAEg");
	this.shape_6.setTransform(18.1,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_1},{t:this.shape},{t:this.shape_4}]},14).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},11).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36.3,26.2);


(lib.BubCalfTrace = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgPEGIgEgDQgDgFgBgIIgFgdQgdgHgQgZQgIgNgKgKQgogrgBg0IAcgOQgLgKgMgqQgJgggPhvIAIAOQAIAMAFADQAGATgBAJIAAAMQgGA8AiAzQAFAJACAKIggAXQAJAmAYAdQAeAmAkAgQAIAIABANIACAIIADADIABAAIAjABIASgVIgFgKIAAgBIgWgKIgDgBQADgCAFgBQADgBAEAAIAHAAIAGADIADABIACACQAEAFAEAHIABAEIACgCIAOgPIgDgNIAAgBIgWABIgCAAIgDgKIACgDIALgCIASAAIAEACIABABIACADIACAEIABAEIABAGIABACIABgBIAGgGIAEgGIADgHIABgGIAAgCIgGAAIgFAAIgCgBIgCgBIgBgEIAFgEIAEgCIAGgBIAFAAIAMACIAGAFIAGgFIAEgDIADgFIABgDIABgBIgugBIAAAAIgsgsQAihKAMhQQAIgzgJgvIgDAAIgDgUQgDgUgKgVQgQgfgYgMIABgLQASAHAPANQAmAigCA3IgBAEIAAABQANCEgzB3QANAHAJANIAJAMQAdgFAbAQIgDAUIgbAPIgXAdIgOgCIgDAQIgPALIgJABIgYAZg");
	this.shape.setTransform(12.7,16.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FECE89").s().p("AgBD5IgBgBIgCgIQgBgNgJgHQgjgigeglQgZgdgIglIAggYQgDgLgFgIQghgyAFg+QABgFgCgHQAAgKgFgTQgGgCgIgNIgHgNIAPAIQAfAOAFgUQAJgiAZgQIAngWIAOgMQAEABAEABQANAAALgIQALgHADgNQAZAMAPAeQAKAVAEAVIACATIADAAQAKAwgIAyQgMBQgjBKIAsAsIABAAIABABIArABIgBAEIgCAEIgFAEIgFAEIgGgEIgMgCIgGAAIgFABIgFACIgEADIABAFIACABIAAAAIAEACIAFAAIADAAIgBAHIgCAHIgEAFIgGAHIgBgHIgBgDIgDgFIgCgDIgCAAIAAgBIgEgDIgTABIgLACIgBACIADAKIABAAIABABIAWgBIACAOIgOAPIAAgCQgEgGgFgFIgDgDIgDgCIgHgDIgGAAQgEAAgDABQgFABgDADIACABIAAABIAXAJIAFAKIgTAVIgjgBg");
	this.shape_1.setTransform(11.9,16.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-9.9,30.4,52.4);


(lib.BubArmGlass = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FECE89").s().p("AiSCTQg0gRgRgOQgzgggLgIQgMgKAAgeQAAgpAEgPQAIgcAhggIAegdQAPgNAVgLQADgCA3gOQAdgHALgHIgCgEIAAgDIABgBIAIABQANAEAJAZQAIAYAAAUQAAAKgFAXQgFAXgGAIIgBACIgDgCIgTABQgGABAAAFQAAABAAAAQAAABAAABQAAAAAAABQABAAAAAAIADACQAxgFASAFQAQAEAnAcQAGAEAYAZQAVAVAFAAQABAAABAAQABAAAAgBQABAAAAAAQAAgBAAAAIABgFIgCgCIAUgMQAPgKADgJQACgDgBgRQAAgMAGgFIANAAQAHABAEAMQAEAIAAAIIgDALIgCAJIgBACIAAABIABAFIAFABIACgCIAMAAIAGgDQABgBARgBIABgBIADAAQAlAAAPgKQAOgLAFAAQAHAAAAAHQAAADgGAKIgIALQgCACgVAEQgRAEgEAHIAAADQADADADAAQAVAAAOgHIAEAGQAAAHgRALQgRALgMgCIgBAFIABAFIAFABQAOAAANgIIACADQADAEAAACIAAAEQgKACgBAJIAAAHQgHAFgKAEQgdAKAAADQAAABAAABQAAABABAAQAAABAAAAQAAABABAAIADABQAOgDALgEQgXASgQADIgFgBIgBgBIgGgDIgHADIgNAAQgCAAgWgKQgWgKgVAAIgGABIgDgDQgLAGgUAQIg/AEQhIAAhKgZg");
	this.shape.setTransform(30,17.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ai/CKQhsguAAg6QAAheBQg+QBEg1BNgCIAAgBIABADIAAACIgIgBIgBABIAAADIACAEQgLAHgdAHQg3AOgDACQgVALgPANIgeAdQghAggIAcQgEAPAAApQAAAeAMAKQALAIAzAgQARAOA0ARQBKAZBIAAIA/gEQAUgQALgGIADADIAGgBQAVAAAWAKQAWAKACAAIANAAIAHgDIAGADIABABIAFABQAQgDAXgSQgLAEgOADIgDgBQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAgBAAgBQAAgDAdgKQAKgEAHgFIAAgHQABgJAKgCIAAgEQAAgCgDgEIgCgDQgNAIgOAAIgFgBIgBgFIABgFQAMACARgLQARgLAAgHIgEgGQgOAHgVAAQgDAAgDgDIAAgDQAEgHARgEQAVgEACgCIAIgLQAGgKAAgDQAAgHgHAAQgFAAgOALQgPAKglAAIgDAAIgBABQgRABgBABIgGADIgMAAIgCACIgFgBIgBgFIAAgBIABgCIACgJIADgLQAAgIgEgIQgEgMgHgBIgNAAQgGAFAAANQABAQgCADQgDAJgPAKIgUAMIACACIgBAFQAAAAAAABQAAAAgBAAQAAABgBAAQgBAAgBAAQgFAAgVgVQgYgZgGgEQgngcgQgEQgSgFgxAFIgDgCQAAAAgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgFAGgBIATgBIADACIABgCIAbABQAbAAAIALQAGAHAfAPQALAGAlAmQACgHAJgDQATgJAEgDQAFgFAAgKIAAgQQAAgOAHgHQAMgLAXAXQAIAKACAHIAAAPQAAAFgDALQAHgBAGgDQADgCAPAAQAFgEAOgDQAlgJAHgDQAPgFAIAEQAHAEAAALQAAAQgMANIgFAGIABABQACAFAAAGQAAAKgOANIgBABQAGAFAAAIQAAAIgCAHQgDAOgOAQQgXAZglAAIgEAAQgIAEgLAAQgOAAgXgJIgYgLIgRAAQgFAGgPAGQgeAMgxAAQhcAAhhgpg");
	this.shape_1.setTransform(30,17.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BubArmGlass, new cjs.Rectangle(0,0,60,35.8), null);


(lib._100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPAPQgGgGAAgJQAAgIAGgGQAHgHAIAAQAJAAAHAHQAGAGAAAIQAAAJgGAGQgHAHgJAAQgIAAgHgHg");
	this.shape.setTransform(504.3,93.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AArBWIgFgnQgCgUAAgSIABgQIAAgRQAAgmgOAAQgUAAgRAXQgQAWgKAgIgBARIgBARIABAQIABAQQAAAIgFAFQgFAFgIAAQgHAAgFgFQgFgFAAgIIgBgQIgBgQQAAgSACgfQADghAAgSIgBgRIAAgRQAAgHAFgFQAFgFAHAAQARAAABAXIAAAVQAfgoAeAAQAcAAALAZQAIARAAAgIAAASIAAAQQABAOAEAYQADAXAAAOQAAAIgFAFQgFAFgIAAQgPAAgCgRg");
	this.shape_1.setTransform(490.6,84.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag0BLQgYgYgBgpQgBgnAVgfQAZgkArAAQAjAAATAgQAOAbAAAkQgBAmgUAdQgWAfglAAQgeAAgVgWgAgfgjQgLATAAAaQAAAZAOAOQALAMAQAAQASAAANgNQAPgPABgaQAChDgnAAQgZAAgPAZg");
	this.shape_2.setTransform(470.8,85.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQCAQgFgFAAgIIgBggIgBgfQAAgRACgZIACgoQAAgJAFgEQAFgFAHAAQAHAAAFAFQAFAEAAAJQAAAQgCAYIgCAqIABAfIAAAgQAAAIgEAFQgFAFgHAAQgIAAgEgFgAgLhhQgGgGAAgIQAAgJAGgGQAHgGAHAAQAJAAAGAGQAGAGAAAJQAAAIgGAGQgGAGgJAAQgHAAgHgGg");
	this.shape_3.setTransform(457,80.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLB8QgFgEAAgHIABgUIAAgUIgDhnIgogDQgPgCgBgPQABgIAEgFQAFgFAHAAIAlADIAAgYIgBgWQAAgIAFgEQAGgFAGAAQAPAAADAaIABAPIgBALIAAALIAZgDQATAAAGACQALADgBANQABAIgGAFQgFAFgHAAIgJAAIgJgBIgYADIAEBoIAAAHIAAAJQABAngTAAQgHAAgFgFg");
	this.shape_4.setTransform(443,82);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgyBNQgagWABgmQgBgjAZgmQAagrAgAAQASABAVAHQAbALAAAPQAAAHgFAFQgEAFgGAAQgGAAgDgDIgIgGQgKgIgYgBQgRABgSAgQgPAdAAAVQAAAYAPANQAPANAXAAQAKAAAMgHIAUgKQAGgDACAAQAHAAAEAFQAGAGgBAGQAAANgbAMQgXALgQgBQgkABgYgXg");
	this.shape_5.setTransform(425.3,85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag8BNQgbgXAAgnQAAgtAWggQAYghApAAQAdAAASAKQAXAMgBAZQAAASgTAOQgJAGgdANIhDAgQALAPAOAHQAPAIATAAQAMAAARgFQAVgGAFgJQAGgKAHAAQAGAAAGAFQAEAFAAAGQAAAUgfAOQgbAMgagBQgnAAgZgTgAgkgvQgPARgGAhIA2gZQAfgQANgLQgOgOgbgBQgWABgOAQg");
	this.shape_6.setTransform(406.3,85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgxBjQgbgKAAgSQAAgHAFgFQAGgGAHAAQAFAAAJAJQAFAEAOADQAMACAIAAQAOAAALgEQARgFAAgLQAAgYghgJIgSgEQgXgFgKgHQgPgJAAgUQAAglAjgPQALgFAWgHQAYgHAKgEQAGgDAJAAQAHAAAGAFQAEAFAAAIIACAPQADAKAAAFQAAAIgFAFQgFAFgHAAQgKAAgEgHQgDgFgBgOIgqAMQgbAMAAAQIAKADQAoAHAUANQAcASAAAjQAAAdgZAOQgUAMgfAAQgXAAgVgHg");
	this.shape_7.setTransform(386.7,84.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgxBjQgbgKAAgSQAAgHAFgFQAGgGAHAAQAFAAAJAJQAFAEAOADQAMACAIAAQAOAAALgEQARgFAAgLQAAgYgigJIgRgEQgYgFgJgHQgPgJAAgUQAAglAjgPQAKgFAXgHQAYgHAJgEQAIgDAIAAQAHAAAGAFQAEAFAAAIIACAPQADAKAAAFQAAAIgFAFQgFAFgHAAQgKAAgEgHQgDgFgBgOIgqAMQgbAMAAAQIAKADQAoAHAUANQAcASAAAjQAAAdgZAOQgUAMgfAAQgXAAgVgHg");
	this.shape_8.setTransform(358.3,84.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgQCAQgFgFAAgIIgBggIgBgfQAAgRACgZIACgoQAAgJAFgEQAFgFAHAAQAHAAAFAFQAFAEAAAJQAAAQgCAYIgCAqIABAfIAAAgQAAAIgEAFQgFAFgHAAQgIAAgEgFgAgLhhQgGgGAAgIQAAgJAGgGQAHgGAHAAQAJAAAGAGQAGAGAAAJQAAAIgGAGQgGAGgJAAQgHAAgHgGg");
	this.shape_9.setTransform(345.2,80.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAwCGQgEgPgDgaQgEgaAAgRIABgOIAAgOQAAgggQAAQgWAAgSAUQgJAKgPAdQAABEgFAMQgGALgKAAQgHAAgGgFQgFgFgBgHIACgIQACgEAAgVIAAgbIACiBIABgdQAAgJgCgIQgCgIAAgJQAAgHAGgFQAEgFAIAAQAOAAADAPQACASAAANIgBAnIgBAnIAAAPQAPgTARgKQAPgJATAAQAdAAALATQAIANABAfIABAiIAEAlQADAUADAQIAAAFQAAAHgEAFQgGAFgIAAQgMAAgEgNg");
	this.shape_10.setTransform(329.6,80.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgLB8QgFgEAAgHIABgUIAAgUIgDhnIgogDQgPgCgBgPQABgIAEgFQAFgFAHAAIAlADIAAgYIgBgWQAAgIAFgEQAGgFAGAAQAPAAADAaIABAPIgBALIAAALIAZgDQATAAAGACQALADgBANQABAIgGAFQgFAFgHAAIgJAAIgJgBIgYADIAEBoIAAAHIAAAJQABAngTAAQgGAAgGgFg");
	this.shape_11.setTransform(310.3,82);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag+B5QgZgZAAgnQAAgwAZgbQAZgcAngBQAVABALAGIAQAMQADhLADgaQACgPAOAAQAQAAAAARQAAAZgHBUQgCAZAAAaQAAA6AGAfIAAAEQAAAHgFAFQgFAEgGAAQgLAAgGgQQgMAKgOAEQgOAFgOAAQgkAAgYgYgAgpADQgPASAAAjQAAAXARAQQAQARAVAAQAOgBALgFQAGgDANgLIAFgGIAAgeIAAgVIAAgVQgGgOgMgGQgLgIgPABQgdAAgPAQg");
	this.shape_12.setTransform(280.2,80.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag8BNQgbgXAAgnQAAgtAWggQAYghApAAQAdAAASAKQAXAMgBAZQAAASgUAOQgIAGgdANIhDAgQALAPAOAHQAPAIATAAQAMAAAQgFQAWgGAFgJQAHgKAGAAQAGAAAGAFQAEAFAAAGQAAAUgfAOQgbAMgagBQgnAAgZgTgAgkgvQgOARgIAhIA3gZQAfgQANgLQgOgOgbgBQgWABgOAQg");
	this.shape_13.setTransform(260.1,85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgLB8QgFgEAAgHIABgUIAAgUIgEhnIgngDQgQgCAAgPQABgIAFgFQAEgFAHAAIAlADIAAgYIgBgWQAAgIAFgEQAGgFAGAAQAPAAADAaIABAPIgBALIAAALIAZgDQATAAAGACQAKADABANQAAAIgGAFQgEAFgIAAIgJAAIgJgBIgYADIAEBoIAAAHIAAAJQABAngTAAQgGAAgGgFg");
	this.shape_14.setTransform(241.3,82);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag8BNQgbgXAAgnQAAgtAWggQAYghApAAQAdAAASAKQAXAMgBAZQAAASgUAOQgIAGgdANIhDAgQALAPAOAHQAPAIATAAQAMAAAQgFQAWgGAFgJQAHgKAGAAQAGAAAGAFQAEAFAAAGQAAAUgfAOQgbAMgagBQgnAAgZgTgAgkgvQgOARgIAhIA3gZQAfgQANgLQgOgOgbgBQgWABgOAQg");
	this.shape_15.setTransform(223.2,85);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgTCAIABhAIAChAIABg/IABhAQAAgSARAAQARAAAAASIgBBAIgBA/IgCBYIgCAoQgCASgOAAQgRAAAAgSg");
	this.shape_16.setTransform(208.1,80);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhECQQgFgFAAgIIABhHIAAhGQgBgmgCggIgDgkQAAgNAFgIQAFgLAKAAQAHAAAFAFQAFAFAAAHIgBAGIgBAKQAPgKAOgGQAOgFAMAAQAlAAAQAgQAOAaAAAqQAAAlgVAZQgWAagkAAQgRAAgVgGIAABVQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgQhdQgJAFgPAOQACAoAAArQAUAHASAAQAWAAAMgQQAKgNAAgXQAAgggIgQQgIgQgQAAQgPAAgNAHg");
	this.shape_17.setTransform(193.5,89.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgJBoQgFgFAAgIQAAgVgFgqQgEgpAAgVQAAgTgFgKQgNAFgMANIgVAXIgJAMIgCAeIgCAeIACAPIABAOQAAAHgFAFQgGAFgHAAQgUAAAAgtIACggIACgfIgCgcIgBgcQAAgoASAAQAHAAAFAGQAGAGAAAHIgBAKIgBALIABATQAJgTASgPQASgQAMAAQAcAAAJAcQAKgNAOgGQANgHARAAQAeAAALAgQACAGAFAsQAFAdAIBHQAAAHgFAFQgFAFgIAAQgOAAgDgPQgDgUgDgjIgGg2QgCgMgEgMQgGgQgHAAQgHAAgSALQgRAKgFAHIABAhIAFAuQADAcAAASQAAAIgEAFQgFAFgIAAQgHAAgEgFg");
	this.shape_18.setTransform(169.8,85.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag0BLQgYgYgBgpQgBgnAVgfQAZgkArAAQAjAAATAgQAOAbAAAkQgBAmgUAdQgWAfglAAQgeAAgVgWgAgfgjQgLATAAAaQAAAZAOAOQALAMAQAAQASAAANgNQAPgPABgaQAChDgnAAQgZAAgPAZg");
	this.shape_19.setTransform(145.6,85.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgyBNQgagWABgmQAAgjAYgmQAagrAgAAQARABAWAHQAbALAAAPQAAAHgFAFQgEAFgGAAQgFAAgEgDIgIgGQgKgIgYgBQgRABgSAgQgQAdAAAVQAAAYAQANQAPANAWAAQALAAAMgHIAUgKQAGgDACAAQAHAAAEAFQAGAGAAAGQgBANgbAMQgXALgRgBQgiABgZgXg");
	this.shape_20.setTransform(127.3,85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAoBVQgWALgcAAQgXAAgQgKQgQgLgEgWQgGgvAAgkQAAgYAFgfQACgPAPAAQAHAAAFAFQAGAEAAAIQAAAIgDASQgDASAAAJQAAAeACAUQACAVAEANIAMAFIALABQAXAAAagHIAAgkIgBgiQAAgmAEgcQACgQAPAAQAHAAAGAFQAFAFgBAHIgDBDIAAAlIABAmIAAAMIABAMQAAAIgFAFQgFAEgIAAQgOAAgDgQg");
	this.shape_21.setTransform(461.8,32.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag0BLQgYgYgBgpQgBgnAVgfQAZgkArAAQAjAAATAgQAOAbAAAkQgBAmgUAdQgWAfglAAQgeAAgVgWgAgfgjQgLATAAAaQAAAZAOAOQALAMAQAAQASAAANgNQAPgPABgaQAChDgnAAQgZAAgPAZg");
	this.shape_22.setTransform(442.5,33);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AglCIQgGgGAAgHQAAgGARggIAWgoQgggpgKgWQgHgUgTgcQgagmgEgIQgDgFAAgFQAAgHAGgGQAGgFAHAAQAIAAAGAIIAOAWIAZAmQANAWAIATQAGAOASAZIAohiIATgmQAFgMAMAAQAHAAAGAFQAFAFAAAIQAAAIgJARIgMAVIgeBLQgSApgPAgIgWAnIgJATQgGALgKAAQgHAAgFgFg");
	this.shape_23.setTransform(421.3,28.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgLCLQgHgJAAgHQAAgHAGgEQAFgFAGAAQAGAAAHAJQAHAJAAAHQAAAHgFAEQgFAFgGAAQgHAAgHgJgAgMBBIAAgWIgBgVIABhMIAAhNQAAgQAPAAQAQAAAAAQIAADEQAAAQgQAAQgPAAAAgQg");
	this.shape_24.setTransform(383.9,28);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgxBjQgbgKAAgSQAAgHAFgFQAGgGAHAAQAGAAAIAJQAEAEAPADQAMACAIAAQAOAAAMgEQAQgFAAgLQAAgYghgJIgSgEQgYgFgJgHQgPgJAAgUQAAglAjgPQALgFAWgHQAXgHALgEQAGgDAJAAQAIAAAFAFQAEAFAAAIIADAPQACAKAAAFQAAAIgFAFQgFAFgIAAQgJAAgEgHQgDgFgBgOIgqAMQgbAMAAAQIAKADQAoAHATANQAdASAAAjQAAAdgYAOQgVAMgfAAQgXAAgVgHg");
	this.shape_25.setTransform(370.7,32);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AArBWIgFgnQgCgUAAgSIAAgQIABgRQAAgmgOAAQgUAAgRAXQgRAWgIAgIgCARIgBARIABAQIABAQQAAAIgFAFQgFAFgHAAQgIAAgFgFQgFgFAAgIIgBgQIgBgQQAAgSADgfQACghAAgSIAAgRIgBgRQAAgHAFgFQAFgFAIAAQAPAAACAXIABAVQAegoAeAAQAcAAALAZQAIARABAgIAAASIAAAQQAAAOADAYQAEAXAAAOQAAAIgFAFQgFAFgHAAQgQAAgCgRg");
	this.shape_26.setTransform(353.3,32.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag0BLQgYgYgBgpQgBgnAVgfQAZgkArAAQAjAAATAgQAOAbAAAkQgBAmgUAdQgWAfglAAQgeAAgVgWgAgfgjQgLATAAAaQAAAZAOAOQALAMAQAAQASAAANgNQAPgPABgaQAChDgnAAQgZAAgPAZg");
	this.shape_27.setTransform(333.5,33);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgQCAQgFgFAAgIIgBggIgBgfQAAgRACgZIACgoQAAgJAFgEQAFgFAHAAQAHAAAFAFQAFAEAAAJQAAAQgCAYIgCAqIABAfIAAAgQAAAIgEAFQgFAFgHAAQgIAAgEgFgAgLhhQgGgGAAgIQAAgJAGgGQAHgGAHAAQAJAAAGAGQAGAGAAAJQAAAIgGAGQgGAGgJAAQgHAAgHgGg");
	this.shape_28.setTransform(319.7,28.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgKB8QgGgEAAgHIAAgUIABgUIgDhnIgogDQgPgCAAgPQAAgIAEgFQAFgFAIAAIAlADIgBgYIgBgWQAAgIAFgEQAFgFAIAAQAPAAADAaIAAAPIAAALIAAALIAZgDQASAAAFACQALADAAANQAAAIgEAFQgGAFgHAAIgIAAIgJgBIgYADIACBoIABAHIAAAJQABAngUAAQgFAAgFgFg");
	this.shape_29.setTransform(305.7,29.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AA4BbQgHgIgEgGQgRAJgNAGQgNAEgIAAQgpAAgTgXQgSgWAAguQAAgpAegfQAdgeAoAAQAPAAATAIQAYAJAAAOQAAAFgDAEQgCAHgBAPIgBAmQAAAXADANQACAHAJAXIAEAKIABADQAAAHgEAEQgGAFgGAAQgDAAgKgHgAgdgrQgUAWAAAcQAAAdAKAOQALAPAUAAQAQAAAMgGQAGgEALgJQgFgvAAgXIABgQIADgTIgLgGIgIgBQgaAAgUAXg");
	this.shape_30.setTransform(288,33);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgTCAIABhAIAChAIABg/IABhAQAAgSARAAQARAAAAASIgBBAIgBA/IgCBYIgCAoQgCASgOAAQgRAAAAgSg");
	this.shape_31.setTransform(273.8,27.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAoBVQgWALgcAAQgXAAgQgKQgQgLgEgWQgGgvAAgkQAAgYAFgfQACgPAPAAQAHAAAFAFQAGAEAAAIQAAAIgDASQgDASAAAJQAAAeACAUQACAVAEANIAMAFIALABQAXAAAagHIAAgkIgBgiQAAgmAEgcQACgQAPAAQAHAAAGAFQAFAFgBAHIgDBDIAAAlIABAmIAAAMIABAMQAAAIgFAFQgFAEgIAAQgOAAgDgQg");
	this.shape_32.setTransform(259.4,32.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgKB8QgGgEAAgHIAAgUIABgUIgEhnIgngDQgPgCAAgPQAAgIAEgFQAFgFAIAAIAlADIgBgYIgBgWQAAgIAFgEQAFgFAIAAQAPAAADAaIAAAPIAAALIAAALIAZgDQASAAAFACQALADAAANQAAAIgEAFQgFAFgIAAIgIAAIgJgBIgYADIACBoIABAHIAAAJQABAngUAAQgFAAgFgFg");
	this.shape_33.setTransform(241.4,29.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AA4BbQgHgIgEgGQgRAJgNAGQgNAEgIAAQgpAAgTgXQgSgWAAguQAAgpAegfQAdgeAoAAQAPAAATAIQAYAJAAAOQAAAFgDAEQgCAHgBAPIgBAmQAAAXADANQACAHAJAXIAEAKIABADQAAAHgEAEQgFAFgHAAQgDAAgKgHgAgdgrQgUAWAAAcQAAAdAKAOQALAPAUAAQAQAAAMgGQAGgEALgJQgFgvAAgXIABgQIADgTIgLgGIgIgBQgaAAgUAXg");
	this.shape_34.setTransform(223.6,33);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AhEBRIAAh7IAAgRIABgSQAAgSAPAAQASAAAAAdQAiggApAAQAOAAAHALQAHAKAAAWIAAAMQgCAXgQAAQgPAAAAgSIgBgMIAAgPQgcADgQANQgQALgKAXIAABgQAAASgSAAQgPAAAAgSg");
	this.shape_35.setTransform(206.2,32.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("Ag9CJQgWgEAAgOQAAgQAPAAQAGAAAQADQAOADASAAQAigBAMggQAJgWAAgsQgKARgMAJQgNAJgQAAQghAAgTgWQgVgWAAghQAAgwAcgeQAcgeAvAAQARAAALAFQAMAEAFAIQATABAAAUQAAANgDAVIgGAhIgDA6QgCAkgGAXQgIAcgRAOQgWAQgnAAQgXABgQgEgAgghYQgRAVAAAgQAAAZAKAMQAKANAUAAQAQAAARgTQAPgTACgSQAEgTAEgpQgHgFgHgCQgIgEgIAAQggABgTAXg");
	this.shape_36.setTransform(187.1,37.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AArBWIgFgnQgDgUABgSIABgQIAAgRQAAgmgOAAQgUAAgRAXQgRAWgJAgIgBARIgBARIABAQIABAQQAAAIgFAFQgFAFgIAAQgHAAgFgFQgFgFAAgIIgBgQIgBgQQAAgSACgfQADghAAgSIAAgRIgBgRQAAgHAFgFQAFgFAIAAQAQAAABAXIABAVQAegoAeAAQAcAAALAZQAIARABAgIAAASIAAAQQAAAOADAYQAEAXAAAOQAAAIgFAFQgFAFgHAAQgQAAgCgRg");
	this.shape_37.setTransform(168.6,32.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("Ag0BLQgYgYgBgpQgBgnAVgfQAZgkArAAQAjAAATAgQAOAbAAAkQgBAmgUAdQgWAfglAAQgeAAgVgWgAgfgjQgLATAAAaQAAAZAOAOQALAMAQAAQASAAANgNQAPgPABgaQAChDgnAAQgZAAgPAZg");
	this.shape_38.setTransform(148.9,33);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AhJBtQgYgbgBgmQAAg7Azg/QApg0AqAAIAQABIAMACQAGgJAKAAQAMAAAEAQQACAPABAVQgBAHgDAFQgGAHgIAAQgMAAgFgNQgFgLgFgDQgDgCgPAAQgZAAgeAnQgrA1AAAuQAAAXAPARQAPARAVAAQARAAATgKQAKgFAVgQQAKgHAFAAQAHAAAGAGQAFAGAAAHQAAAIgHAGQgvApguAAQglAAgZgcg");
	this.shape_39.setTransform(129.2,28.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(153,255,204,0.694)").s().p("Am3MaQgbgXAAgjQAAgPAGgRQAwiEBqjVQB/j7AmhaIEGpJQA1iCAsgvQAegiAgABQAiAAAaAZQAZAYAAAiQAAAVgSAbQgkA7goBgIhGCfIjCGeIjZHNQgfBLhECSQgbA1guAAQgggBgZgWgACYLXQhbhTgBiFQAAiRBShfQBXhlCOAAQCFAABkBKQBuBTAACCQAACWhgBjQhfBjiWABQiFAAhYhPgAEEGDQgjAxgBBLQAABBArAiQAqAgBVAAQBOABAngvQAnguAAhdQAAg4g9glQg1gehBAAQhHAAgoA1gAqAlEQhJhYAAiKQAAhgBjhWQBghUBhAAQCNAABVBeQBQBbAACPQgBB3hjBJQhZBEh4AAQiIAAhQhggAn8puQgqAgAAAoQAABOAhAoQAeAnA/AAQA1AAArgXQAwgcAAgsQAAhSgkgpQgjgohJAAQgtAAgnAdg");
	this.shape_40.setTransform(475.2,223.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(153,255,204,0.694)").s().p("Am6H7QhnjRAAlOQAAkbCHjTQCfj3ERAAQEAAACQDaQB8C+AAEQQAAG1iLDcQiLDakUAAQkpAAiJkPgAkKmUQhaCaABDGQAAFBBWChQBYChCtAAQDOAABajsQA+ilAAj7QAAkIhSiEQhTiEikAAQi1AAhqC5g");
	this.shape_41.setTransform(328,228.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(153,255,204,0.694)").s().p("Am6H7QhnjRAAlOQAAkbCHjTQCfj3ERAAQEBAACPDaQB8C+AAEQQAAG1iLDcQiLDakUAAQkpAAiJkPgAkKmUQhZCaAADGQAAFBBWChQBYChCtAAQDOAABajsQA+ilAAj7QAAkIhSiEQhSiEilAAQi1AAhqC5g");
	this.shape_42.setTransform(205.9,228.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(153,255,204,0.694)").s().p("AAZL6IjAgBQhFAAgbgJQgygSAAg4QAAhjCZAAIAvABIAoACQAAgvgIhcQgIhbAAguQAAh8AWj8QAWj5gBiBQiDBlgkAAQgnAAgdgdQgdgdAAgmQAAguBUhCQA1glBghSQBVhXBOAAQBCAAAABLQAAAXgGAtQgGAsAAAWQAAAhAEBBQADBBAAAhQAABvgXDdQgYDbAABvQAAA4AIBRQAIBRABA0IBmgCQApAAAcAcQAaAaAAAoQAAApgaAaQgcAbgpAAg");
	this.shape_43.setTransform(102.1,226.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._100, new cjs.Rectangle(53.3,0,502.4,362.7), null);


(lib.frb_background_pressed_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var component = _parent._parent;
		////::: don't delete the above
		//
		////::: SKIN ELEMENT REGISTRATION
		///*      To add styleFormat properties to your skins :
		//   1) Break up your skin into individual movie clips (skinElements)
		//   2) add a registerSkinElement line of code for each skinElement
		//
		//component.registerSkinElement(skinElement, propertyName)
		//// makes the skinElement Listen to the propertyName specified (eg: "background")
		//
		//																	  n*/
		//component.registerSkinElement(background_mc, "backgroundDisabled");
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.background_mc = new lib.frb_background_pressed();
	this.background_mc.parent = this;
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_background_pressed_1, new cjs.Rectangle(2,2,6,6), null);


(lib.frb_background_disabled_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var component = _parent._parent;
		////::: don't delete the above
		//
		////::: SKIN ELEMENT REGISTRATION
		///*      To add styleFormat properties to your skins :
		//   1) Break up your skin into individual movie clips (skinElements)
		//   2) add a registerSkinElement line of code for each skinElement
		//
		//component.registerSkinElement(skinElement, propertyName)
		//// makes the skinElement Listen to the propertyName specified (eg: "background")
		//
		//																	  n*/
		//component.registerSkinElement(background_mc, "backgroundDisabled");
		//
		//
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.background_mc = new lib.frb_background_disabled();
	this.background_mc.parent = this;
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_background_disabled_1, new cjs.Rectangle(2,2,6,6), null);


(lib.frb_background_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var component = _parent._parent;
		////::: don't delete the above
		//
		////::: SKIN ELEMENT REGISTRATION
		///*      To add styleFormat properties to your skins :
		//   1) Break up your skin into individual movie clips (skinElements)
		//   2) add a registerSkinElement line of code for each skinElement
		//
		//component.registerSkinElement(skinElement, propertyName)
		//// makes the skinElement Listen to the propertyName specified (eg: "background")
		//
		//																	  n*/
		//component.registerSkinElement(background_mc, "background");
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.background_mc = new lib.frb_background();
	this.background_mc.parent = this;
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_background_1, new cjs.Rectangle(2,2,6,6), null);


(lib.frb_frame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var component = _parent._parent;
		////::: don't delete the above
		//
		////::: SKIN ELEMENT REGISTRATION
		///*      To add styleFormat properties to your skins :
		//   1) Break up your skin into individual movie clips (skinElements)
		//   2) add a registerSkinElement line of code for each skinElement
		//
		//component.registerSkinElement(skinElement, propertyName)
		//// makes the skinElement Listen to the propertyName specified (eg: "background")
		//
		//																	  n*/
		//component.registerSkinElement(shadow_mc, "shadow");
		//component.registerSkinElement(darkshadow_mc, "darkshadow");
		//component.registerSkinElement(highlight_mc, "highlight");
		//component.registerSkinElement(highlight3D_mc, "highlight3D");
		//
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin elements
	this.highlight3D_mc = new lib.frb_rightOut();
	this.highlight3D_mc.parent = this;
	this.highlight3D_mc.setTransform(1.5,1.5);

	this.highlight_mc = new lib.frb_rightIn();
	this.highlight_mc.parent = this;
	this.highlight_mc.setTransform(2.2,2.2);

	this.shadow_mc = new lib.frb_leftIn();
	this.shadow_mc.parent = this;
	this.shadow_mc.setTransform(1,1);

	this.darkshadow_mc = new lib.frb_leftOut();
	this.darkshadow_mc.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.darkshadow_mc},{t:this.shadow_mc},{t:this.highlight_mc},{t:this.highlight3D_mc}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_frame, new cjs.Rectangle(0,0,10,10), null);


(lib.frb_dot_disabled_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var component = _parent._parent;
		////::: don't delete the above
		//
		////::: SKIN ELEMENT REGISTRATION
		///*      To add styleFormat properties to your skins :
		//   1) Break up your skin into individual movie clips (skinElements)
		//   2) add a registerSkinElement line of code for each skinElement
		//
		//component.registerSkinElement(skinElement, propertyName)
		//// makes the skinElement Listen to the propertyName specified (eg: "background")
		//
		//																	  n*/
		//component.registerSkinElement(disabled_mc, "foregroundDisabled");
		//
		//
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.disabled_mc = new lib.frb_dot_disabled();
	this.disabled_mc.parent = this;
	this.disabled_mc.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.disabled_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_dot_disabled_1, new cjs.Rectangle(3,3,4,4), null);


(lib.frb_dot_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var component = _parent._parent;
		////::: don't delete the above
		//
		////::: SKIN ELEMENT REGISTRATION
		///*      To add styleFormat properties to your skins :
		//   1) Break up your skin into individual movie clips (skinElements)
		//   2) add a registerSkinElement line of code for each skinElement
		//
		//component.registerSkinElement(skinElement, propertyName)
		//// makes the skinElement Listen to the propertyName specified (eg: "background")
		//
		//																	  n*/
		//component.registerSkinElement(dot_mc, "radioDot");
		//
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin elements
	this.dot_mc = new lib.frb_dot();
	this.dot_mc.parent = this;
	this.dot_mc.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.dot_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_dot_1, new cjs.Rectangle(3,3,4,4), null);


(lib.fcb_background_pressed_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var component = _parent._parent;
		////::: don't delete the above
		//
		////::: SKIN ELEMENT REGISTRATION
		///*      To add styleFormat properties to your skins :
		//   1) Break up your skin into individual movie clips (skinElements)
		//   2) add a registerSkinElement line of code for each skinElement
		//
		//component.registerSkinElement(skinElement, propertyName)
		//// makes the skinElement Listen to the propertyName specified (eg: "background")
		//
		//																		  n*/
		//component.registerSkinElement(background_mc, "backgroundDisabled");
		//
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.background_mc = new lib.fcb_background_pressed();
	this.background_mc.parent = this;
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_background_pressed_1, new cjs.Rectangle(2,2,9,9), null);


(lib.fcb_background_disabled_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var component = _parent._parent;
		////::: don't delete the above
		//
		////::: SKIN ELEMENT REGISTRATION
		///*      To add styleFormat properties to your skins :
		//   1) Break up your skin into individual movie clips (skinElements)
		//   2) add a registerSkinElement line of code for each skinElement
		//
		//component.registerSkinElement(skinElement, propertyName)
		//// makes the skinElement Listen to the propertyName specified (eg: "background")
		//
		//																		  n*/
		//
		//component.registerSkinElement(background_mc, "backgroundDisabled");
		//
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.background_mc = new lib.fcb_background_disabled();
	this.background_mc.parent = this;
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_background_disabled_1, new cjs.Rectangle(2,2,9,9), null);


(lib.fcb_background_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var component = _parent._parent;
		////::: don't delete the above
		//
		////::: SKIN ELEMENT REGISTRATION
		///*      To add styleFormat properties to your skins :
		//   1) Break up your skin into individual movie clips (skinElements)
		//   2) add a registerSkinElement line of code for each skinElement
		//
		//component.registerSkinElement(skinElement, propertyName)
		//// makes the skinElement Listen to the propertyName specified (eg: "background")
		//
		//																		  n*/
		//component.registerSkinElement(background_mc, "background");
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.background_mc = new lib.fcb_background();
	this.background_mc.parent = this;
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_background_1, new cjs.Rectangle(2,2,9,9), null);


(lib.fcb_frame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var component = _parent._parent;
		////::: don't delete the above
		//
		////::: SKIN ELEMENT REGISTRATION
		///*      To add styleFormat properties to your skins :
		//   1) Break up your skin into individual movie clips (skinElements)
		//   2) add a registerSkinElement line of code for each skinElement
		//
		//component.registerSkinElement(skinElement, propertyName)
		//// makes the skinElement Listen to the propertyName specified (eg: "background")
		//
		//																		  n*/
		//component.registerSkinElement(shadow_mc, "shadow");
		//component.registerSkinElement(darkshadow_mc, "darkshadow");
		//component.registerSkinElement(highlight_mc, "highlight");
		//component.registerSkinElement(highlight3D_mc, "highlight3D");
		//
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin elements
	this.darkshadow_mc = new lib.fcb_leftOut();
	this.darkshadow_mc.parent = this;

	this.shadow_mc = new lib.fcb_leftIn();
	this.shadow_mc.parent = this;

	this.highlight_mc = new lib.fcb_rightIn();
	this.highlight_mc.parent = this;

	this.highlight3D_mc = new lib.fcb_rightOut();
	this.highlight3D_mc.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.highlight3D_mc},{t:this.highlight_mc},{t:this.shadow_mc},{t:this.darkshadow_mc}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_frame, new cjs.Rectangle(0,0,13,13), null);


(lib.fcb_check_disabled_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var component = _parent._parent;
		////::: don't delete the above
		//
		////::: SKIN ELEMENT REGISTRATION
		///*      To add styleFormat properties to your skins :
		//   1) Break up your skin into individual movie clips (skinElements)
		//   2) add a registerSkinElement line of code for each skinElement
		//
		//component.registerSkinElement(skinElement, propertyName)
		//// makes the skinElement Listen to the propertyName specified (eg: "background")
		//
		//																		  n*/
		//component.registerSkinElement(check_mc, "foregroundDisabled");
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.check_mc = new lib.fcb_check_disabled();
	this.check_mc.parent = this;
	this.check_mc.setTransform(2.9,3.2);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_check_disabled_1, new cjs.Rectangle(2.9,3.2,7.1,7), null);


(lib.fcb_check_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var component = _parent._parent;
		////::: don't delete the above
		//
		////::: SKIN ELEMENT REGISTRATION
		///*      To add styleFormat properties to your skins :
		//   1) Break up your skin into individual movie clips (skinElements)
		//   2) add a registerSkinElement line of code for each skinElement
		//
		//component.registerSkinElement(skinElement, propertyName)
		//// makes the skinElement Listen to the propertyName specified (eg: "background")
		//
		//																		  n*/
		//
		//component.registerSkinElement(check_mc, "check");
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.check_mc = new lib.fcb_check();
	this.check_mc.parent = this;
	this.check_mc.setTransform(2.9,3.2);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_check_1, new cjs.Rectangle(2.9,3.2,7.1,7), null);


(lib.blank = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blank_gr("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(32.6,17,1,1,0,0,0,32.5,17);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.blank, new cjs.Rectangle(0.1,0,65,34), null);


(lib.scene3redhead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.scene3redheadstill();
	this.instance.parent = this;
	this.instance.setTransform(0,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:53.9},8).to({x:-0.9,y:0.2},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.8,-109.2,204.1,214.7);


(lib.RitaHair = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.RitaHair1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(39.9,2.8,1,1,0,0,0,39.9,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.04,rotation:4.3},13).to({regY:1.7,scaleX:1,rotation:1.5},13).to({regY:1.8,scaleX:1.05,rotation:4.3},16).to({scaleX:1,rotation:0},12).wait(1));

	// Layer 1
	this.instance_1 = new lib.RitaHair2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(50.9,2.6,1,1,0,0,0,1.3,1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:1.4,scaleX:0.92,rotation:2.5},11).to({regX:1.3,scaleX:0.97,scaleY:1.02,rotation:2.8},14).to({regX:1.4,scaleX:0.92,scaleY:1,rotation:2.5},15).to({regX:1.3,scaleX:1,rotation:0},14).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414141").s().p("AgEAAIgHgDQALABALAEIABABIAAAAIgBABQgJgDgGgBg");
	this.shape.setTransform(44.5,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("AgJE6IgBgBIgIgEQgGgHgEgBIAAABIgLgJQgTgPgPAAQgEAAgbAJQgaAIgZgBQgZgDgNgmQgKgbAAgdQAAgMAOgTQANgSAAgUQAAgTgDgmQgDgnAAgTQAAgXAgguQAog7AOgmQANghAPgzQAKgbADgOQABgFAVgOIALgIIAGgGQAIgFAKAAQAOgBAJADIAIADQAHABAJADIAAABIAAgBIABgBIAAAAQAJAGAPANIAcAqIAHALQAgA1AAATQAABKAdAsIAUAgQAJARAAAZQAAANgIAIQgIAJAAAQQAAAMALAfQAKAfAAAmQAAAngEAMQgQAqg4AAIgFAAIgFAAIgEAAIAAACIgDABIgQAOQgeAVg3AAQgLAAgIgDg");
	this.shape_1.setTransform(40.7,32.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUFCIgBgBQgJAAgTgQIgVgQQgLAAgYAJQgZAIgKAAQgvAAgSg0QgJgaAAghQgBgSAOgRQAOgQAAgRQAAgSgDgoQgDgogBgTQAAgZAohCIAxhQQANgeAJg7QANgsAtgYIAAAAIACgBIAIgEQABAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAQAngMAmARIAAAAQAJAFAMAKQAaAXAAALIAAAEQAMAPAKARQAbAygKAnQADA8AeAlQAcAjAAApQAAALgIAOQgHAOgBAFIALAuQAJAxABAPQAAAugIASQgTAsg/AAIgBADIgCgCQgVAQgNAHQgZAOg2AAQgTAAgLgHgAgSE0IAJAEIAAABQAIADALAAQA4AAAdgVIAQgOIADgBIAAgCIAEAAIAGAAIAEAAQA5AAAPgqQAEgMAAgnQAAgmgKgfQgLgfAAgMQAAgQAIgJQAJgIAAgNQAAgZgJgRIgUggQgdgsgBhKQABgTghg1IgHgLIgcgqQgPgNgIgGIgBAAIgBAAQgMgFgLgBQgKgDgOABQgKAAgIAFIgFAGIgMAIQgUAOgBAFQgEAOgKAbQgPAzgNAhQgOAmgoA7QggAuAAAXQAAATAEAnQACAmAAATQAAAUgNASQgOATAAAMQAAAdAKAbQANAmAZADQAZABAagIQAbgJAEAAQAPAAATAPIAMAJIAAgBQADABAGAHg");
	this.shape_2.setTransform(40.7,32.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,82.8,69.5);


(lib.BuffyBuffBod = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.BuffyArm1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-39.4,-62.5,1,1,0,0,0,10.9,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:75},18).to({rotation:77.6},10).to({scaleX:1,scaleY:1,rotation:52.7},12).to({regX:11,regY:14.6,scaleX:1,scaleY:1,rotation:84,x:-39.5,y:-62.4},23).to({regX:10.9,regY:14.5,scaleX:1,scaleY:1,rotation:0,x:-39.4,y:-62.5},57).wait(20));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#996666").s().p("Ag+ATQgEgDgBgIQAJgFAPABIACAAQAKACADAKIAAABQgIAGgJAAQgIAAgJgEgAAlAAQgDgCABgHQAEgLAVgCIACAAQAHABgBADIAAACIgFAHIAAACQgIAIgJAAQgFAAgEgBg");
	this.shape.setTransform(-30.4,-101.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAsBRIABgCIgJgDIgCAAQgNgFgIgKIAAgBQAHgEAFACIACAAQAbgKAegIIABAAQgCAMgFAIIAAABQgLAGAEAGIABAAQgEAFgFADIAAABQgGACgEAAQgGAAgDgDgAg7gKIgCgCIgRgSIgEgEQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgGACgEIACgEIAEgFQAEgCAFgBIAEAAIAAAAQgEAIAHAKQAJALANgGQAHgEABgIIAAgDIABABIACAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAABIAAADQAJAHgBAGQgBAFgIAFQgNAIgPACIgBAAIgDAAgAAigsIgBgBIgDgDQgEgGgCgGQgDgFAAgEIABgDIAAgCIAAgCIAAAAQABgEAFABIADAAIACAAIAAgBIAAAAIAIgDQgDAIAGAJQAJALANgGQAGgDACgHIAAABQADAFgDAFIgJAOQgCAEgDACQgDACgEAAIgBABIgDAAQgKAAgFgHg");
	this.shape_1.setTransform(-29.3,-91.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("AjsGgQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQgIgHgEgNQgEgQgQgEIgBgBQgFgcgBgjIAAgcQAFgoAPgfQACgDAFAAQgEgEAFgDIAAgBQATgVARgXIAAgBQAJgBAFgIIASAAIAFAEQABAGAHAGIABABQBLAtBaAaIAAABIAmAHIACABQATAHAZACIAPABQgCALgFAHIgBABIAAAEIAAAHIAAACIgBAAIAAABQgCARgLALQgCAIgFAIIgBAAIgMgUIgLgYIABgBIAGADQgFgKABgNIgBAAQgYgLgYgIIgBgBQgRgJgbAAIAAABQgUAIgSAKIAAABQgHAEgDAKIgBAAIgsAlIgBACIAAABQgKAQgPALIAAACQgYAYgSAdIgBAAQgHAHgEALIgBAAQgJAIgHACQgBAAAAAAQAAAAAAAAQgBgBABAAQAAgBAAAAgAA3hPIgGAAIgVAAQgPAAgNgHIgEgCIglgMIAAgBIAEAIIAAACIgLgFQgfgMgsgFIAAgzQAiAAAVgFIAFgCQARgFAAgHQAAgCAAgBQAAgBAAAAQgBgBAAAAQAAABAAABIgHgCIATgWQAMgNAJgPQAGgJAIgIQgKgDgFgKQgOgagMgbIgQgoIgEgHQgIgJAAgMIAAgDIAIgCIAFgCIACgEQAMADAGAMIACAEQAIAPAFAQIAFALQAKAbANAZIAGAIQACAEABAEIAHgBIAAAAIACABIAFgBQAQACAPAGIAQAFQAdAHAXATIAFAHIABABIAFAJIABADIAFAKQAEAFACAIIABABIAAADIAEANIACAGQACAOgFAOQgGAPgIAPQgCAEgDADQgWASgdADIgPABIgQACIAAgBgACXhuIAAgBIABAAIAFgIQgBgIAHgGQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAAAAIACgNIACgHIgCgfIgBgJQgIgLAAgMIgCgDIgEgIIgEgMIgBgBQANgMAQgJIgCgEIgZg4IgDgKIgCgEIAAAAIAAgBIAAgCQgHgbgMgZIgDgFQgEgNAMgGIAEgBIAEABQAJACAFAHIADAHQALAbAHAdQACAJAEAJIAYA2IAAAAIACAAQAfADAUAYQAGAGAEAHIAHAOQAFAOgEAPIgCAHIgBAFIAAABIgBACIgEAMQgDAMgIAJQgKALgNAGIgZAMQgVAIgWgEIgCgBQgIAGgIADIgGABQAHgDADgIg");
	this.shape_2.setTransform(-21.3,-33.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC9966").s().p("ADaS8QgnADgkgJIhHgTQgPgEgRgCQgygDg2AHQhJAKgigjIAAgCIAAgNQA6g9AvhHIABgBQA8hLAjhlIAQgsIAXhIQALgiATgbQASggAXgbIAKgMIABgBQA0gpA3gmIABgBQAGgNACgMIAAgCQARgMgTgNIgCgCQgjgogcgvIgBgBIgMgPIgBgBQgPgdgXgVIgBgBQgEgGgBgIIgCAAQgjgkgYgwIgBgBQgZghgTgoIgBgBQgBgDgDAAIgBgCQgCgDgBgFIgBAAQgCgDgDgBIAAgBIgGgLIgfg4IgNgXIAAgBIAAgIQAUgZAQgeIAAgBQAhggAdgkIAAAAIAFgGQAegeAlgWQARgKAUAIQAFACAIAAIALAKIABAAIAaAqQAlBBAdBJIAJAYIAVA4IABADQAOAqAMAsIANA/IABAAQAKA3AMA1IABAAQABAgAGAaQADAMgGAGIAFAPIABAAQgBAIAEAJIAAABQgFAcgIAcIAAABIgBABQgYAngeAhIAAABIgCAEQgSAbgUAXIgBAEQgJAIgEAMIgBABQgZAagTAgQgGAFgFAHQg6BOg+BJIAAABIAAACIgBAAQgcAfgVAmIgBABQgDAEgFABIAAACQgaAogQA0QgBAIAGACIABAAQBGAvBpALIAAABQATAHAMgPIAAgBQAXgFAPAKIAAABQgBAEgLABQgJABgGAFIgBAAQgCADgDABQAFARATgLQAHgEAEAGQgKABABALIABAAQAFAGALACQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQgCAJAEAFQAMAAAFAGIAAAAQgJAGgOACIAAABIgBAAQgRAEgSACQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBAAgBAAgAhFQqQgVANgMAXIAAACQABALAKACIABAAQAGgEABgLIAAAAQAJgNAKgLIAAgBQAGgGgHgFQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAgBAAIgCABgADfKKIAAADIgBACQgcAsgkAkQAEAQANgNQAdgbAWgiIABAAQAKgMAFgSIABAAQABgIgGgCIgCAAQgLACgCALgAkWQXIgBAAQAAgIgFgCQgUgGgcAEIgBgBQgEgEgGgBIAAgCIgQgMIgBgBQgEgMAAgQIAAgBQAJgWACgcIAAgBIAAgCIAAgGIAAgBQACgvgRgaIgBgBIgEgLIgBAAQgBgEgFAAIAAAAIAAgBIAAgBQgCgIgGgCIAAgCQgIgPgFgSIAAgBQABgDgBgHIAHgPIAAgBIAWgQIABgBQAOgDAQAAIADgCQAmgOAogEIAOgEIABgDQAGgBAGAAIAqgQQAKgGAHgJQAIAAAEgEIACAAQAEgJAJABIAAgBQADgJAMgGIACAAQAAgFACgCIABgBQAHgDAFgFIABgBQALgQAMgJIAAABQAAgEADgEIAAgBIAFgFIAKgIIAFgMQABgFAEgDIAAAAQAFgFAHgFIABgBQADgMAMgDIAAAAQAFgGAJgFQAJgJAJgHQAogaAwgKQAIgFAJgDIAAgBIAbgBIAAgBQAKgGACgNIABgCQgCgBgDgIIAAgBQgKgEgEgJQgNgcgMgeQAAgJgHgHIgBgBQgHgUgCgTIAAgBQgSgngBgxIAAgBQgFgIgBgMIAAgBQAKAJAIAMIABAAQAAAFABADIABABQAFAEACAHIAAABQAOAQAMASIABABQADAKALAJIABAAQAAAEADAFQANAJALAPQAKAPAMANQAWAaAVAbQARAWAIAaQADALgBAMQgCATgUAJIgGADQgCAFgIADIgLAGIgPALIgDACIgGAGIAAABIgBABQgLAMgPAHIgKAJQgHAHgFAKIgBAAIgEAFIgfAmIAAADIAAACQgKAJgOAFQgEABgCACIgPANIAAABIAAABQgNAIgOAFIAAABIgTAOIgBAAIgjAMIAAABQgEACgCADIgBAAQgLAFgNADIgBABQgKAHgPACIAAABQgqAUgsARIgBAAQgQACgNAEIAAABIgBABIgDACQgHAEgKABIgBABIgKAIIAAABIgBABQgNAJgIAPIAAABQAAAGgDACIgBAAIgFAxIAAAAIAAAEIgDAzIAAAeIAAABQgDAVAJAJIABAAQABANAGAIIABAAIAWABIAAABQAIAGgEALIgBABQgGAHgMADIAAABQgNAAgIgGgAkwLzQgKABgJAEIgIADIgBACIAAABIgDAIIAAABQgBAOAKADIABAAQAOgKAFgTIABAAQAJAAACgHIgCgBIgCgBIgGABgAD/jKIADAAQARADgEgMIAAgBQgPgKgNAJIgBABQAGAKgGAAIgBAAQgfgGgcgIIgBgBIgBAAQg/gUg4gbIAAAAIACgGIgCgCIANABIgCgCIgPgDQgFgFgKgGIgZgOIgOABQAMgbAehKQAqhmAAgTIAAgBIAnAMIAVAHQAbAIAEAAQAIAAADgBIACgBIAPABIACAAIAIABIABAAIABABIAGgBQAeABAlgDIABAAQAGgFAIgEIAAAAIACgBIABABQARAGAQgGQAOgFAMgHIAKgHIAFgDIAAABIABAHIgBACIgBAFIgDAJQgIAQgGASIgBAFIAAAAQgQAcgHAeIgBADIAGgDIADAAIAAAAIgVBGQgPA+gFAbIgBAAQgCAbgIAYIAAABQgJACgHAAQgOAAgMgHgAAdp6QgZghgFgGQgbgXAAgqIAAgGQABgVAGAOQAVgZAZgNQAcgPA7gQIADAFIAFAGIAAAJQAKALACAQIAAACIAHALQADAEAEAHIACAGIAAABQAGAIACAJIACAHIAAABQAJAIADAPIAAABQgFAPgHAOIAAABIAAABIgPAPIgXAVIAAABIAAABIgBACQgIAIgCgFIAAAEIguADIgCAEQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgDAAQgFAAgVgcgAEqqyIgWgJIgCAAQgRgFgOgIIgEgBIgFgBIgEgBIgLgBQgIAAgGgEQgEgDgDgEIgCgCQgKgOgGgSIgBgDQgHgNgEgPIAAgCIgFgJIgBgBIgCgKIgBgCIgCgHIgCgEIABAAQgBgLAFgHQgCgHAFgDIABgBQAlAEAegMIABgBQALgJANgHIACAAIARgSIABAAQABARAGAQIAAABQALAGADANIAAAAQADgDAFAJIADAJIADAFIAEAIQAGAKADAMIADADIABABIAJAVIAAACIABABIAAAAIABAFIAAABIAAAEIABADQAFAIACAJIAEAGIACAEIABAEQAEAKgEAIIgBAAQgLAIgMAHIgKgIQgFgFgCgGQgIgRgRAJQgBAEACABIACABQAFAHAGAFIABABQAIALgGAAIgHgCgAC7toQg0gCgkgWIAAgBIglgaIgBgBIgtguIgBgCIAAgBIAAAAQgBgIgFgGIAAgBIAAgCIAAgGIABgfIAAgBQgIgFgEAAIAAgBQgJgFAAgMIgBgBQgGgFgBgLQALgHAOAFIABABQAFAIgBAKIgBABQAGAEACAHIAAABQAPAKAUAEIAAAAIgBgBIAEAAQAPgCANgIQAIgFABgFIAAAAQAMgEgEgLIAAgCQgOgRAUgLIABgBQAIgDAEAIIAAAAQAEASAMAKIABABQAHABABgFIACACQAEAHANgBIABAAIAAAAIABAAQAGACAFgBQAGgBAGgHQAJgJAHgLQACgUgBgSIAAgBQAEgEABgFIAAgCQAFgDAEgGIAAgBIAAgCQAIgIADAJIABABQAHALAQAEIABAAQgFAUADAWIABABQAOADAJAJIABABIgBABIgBAAQAAAaAKAQQABADAGgBQAIAFgGAKIgBABIgBAAIgBAMQgCAPgEANQgNAzgkAcIAAACQgLAHgNAEQgKAEgMAAIgFAAgABFvUIgKAHQAYAXAZAXIAAABQAUAPAjAAQAdABAOgYIAAgBQABAAABAAQABAAAAAAQABAAAAgBQABAAAAgBIAAgBQAQgZAIghIACgKIABgFIAAgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAgBIgBgCQgHgEgIAFIgFAFIgCABIgqAOIgyARIgBAAIgXABIAAACIgBAAIgIAAIgEAAQgLgBgJgEIAAABgABfv9QAAAVAYABQAXAAAHgJIAAAAIAAAAIACgDQgFgEgFABQgQAFgLgJIAAAAQAFgMAKgIIAAgBQgDgGgGgDIgBAAQgQAJgIASgAAbwsIAAgBIAHgCIgEAEIgCAEIgBgFgABQwqIAAgBIABAAIAAABIgBAAgACGxDIAAAAIAAACIAAgCgAgHxNIAJgGIABAAQAAgHAEgDIAAgBIACAAQAVgOAYgKIgBAAQgeACgUAKIgBAAQgBgQgJgIIAAgBQgDgFABgHIAIgNIAAgBIAFgDIAbgQIAAgBQAQACAEgJIABAAQAKAFAMgHIABgBQAHgFABAIIABAAIAHASIAAABQAHAEALAAIACAAIAKgHIAAgBQAOgFAMABIAAABQABAMAIAGIgCAHQgUgGgUAHIAAABIgBAAIgKAGQAJAKAPgKIAAgBIACAAQARAAAKgGIAAgBIgBAAIABgFQATgCAQgEQAAAAABAAQAAAAAAAAQABABAAAAQAAABgBABQAFAJgIAFIgBABQgBAJgDAGIgBABQgPgGgWACIgCAAQgaAPgFAcIgBACIgCAEQgBAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIgBgBQgDgFgJABIgCAAQgUgWgiALQgKAEgHAHIgBAAQgGAFgCAKIgBAAIgCAAQgIAAgGgJg");
	this.shape_3.setTransform(-40.5,9.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("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QgIALgJAJQgFAGgGACQgGABgGgCIgBAAIABAAQAEgBADgCQADgCACgDIAJgOQADgFgDgFIAAgBQgCAGgGADQgNAGgJgLQgGgIACgIIgHADIgBAAIAAAAIgBABIgDgBQgFAAgBAEIAAAAIAAAAIAAACIAAACIgBACQAAAEADAFQABAHAFAFIACADQAAAFgHgBIgCgBQgLgKgEgSIgBAAQgEgIgHADIgBABQgUALANARIABACQAEALgMAEIgBAAQACgGgJgHIgBgEQABAAAAgBQgBAAAAgBQAAAAAAgBQgBAAgBAAIgBgBIAAgBIgBAAIAAABIAAACQgBAJgHADQgNAHgJgMQgHgJAEgJIgBAAIgDABQgEABgEACIgHACIAAABIAAAFQgBAFABAFQAAABAAAAQAAABABAAQAAABAAAAQABAAAAABIAEAEIAQASIACACIABABIAAAAQgTgEgQgKIAAgBQgCgHgFgEIAAgBQACgKgFgIIgBgBQgGgCgGAAQgIAAgGAEgAAPxRQgXAKgWAOIgBAAIAAABQgEADgBAHIgBAAIgJAGQAGAKAKgBIACAAQABgKAHgFIABAAQAGgHAKgEQAigLAUAWIABAAQAKgBADAFIABABQAAAAABAAQAAAAABAAQAAAAABgBQAAAAAAAAIADgEIAAgCQAFgcAbgPIABAAQAXgCAPAGIAAgBQAEgGABgJIABgBQAHgFgEgJQAAgBAAgBQAAAAAAgBQAAAAAAAAQgBAAgBAAQgPAEgTACIgBgCQgHgGgBgMIgBgBQgLgBgOAFIAAABIgLAHIgBAAQgLAAgHgEIAAgBIgIgSIgBAAQAAgIgIAFIAAABQgMAHgKgFIgBAAQgEAJgPgCIgBABIgbAQIgFADIAAABIgIANQgBAHACAFIAAABQALAIABAQIAAAAQAVgKAdgCIABAAgAgFwwQAAAIAFADQASAKAPgMIAAgBQgEgKgJgCIgCAAIgDAAQgNAAgHAEgABgxCQAAAHADACQAOAGAMgNIAAgCIAFgHIAAgCQABgDgIgBIgBAAQgVACgFALgAiCSCQgKgCgBgLIAAgCQAMgXAUgNQABgBABAAQABAAAAAAQABAAAAAAQAAABABAAQAHAFgGAGIAAABQgKALgJANIAAAAQgBALgGAEIgBAAgAjuQRQgHgBABgIQAYAAgQAJIgCAAgAltM9QgKgDABgOIAAgBIACgIIAAgBIACgCIAIgDQAJgEAKgBIAGgBIACABIABABQgCAHgIAAIgBAAQgFATgOAKIgBAAgAB3MEQAkgkAcgsIABAAIAAgCIAAgDQACgLALgCIABAAQAHACgBAIIgBAAQgFASgLAMIgBAAQgVAigdAbQgGAGgEAAQgFAAgCgJgAHHnSIAFAAIgBAHIgEgHgAB7tqQgiAAgUgPIAAgBQgagXgXgXIAKgHIAAgBQAJAEALABIAEAAIAHAAIACAAIAAgCIAXgBIABAAIAygRIAqgOIABgBIAGgFQAHgFAIAEIABACQgBABAAAAQAAABAAAAQgBAAAAABQgBAAgBAAIAAABIAAAFIgDAKQgHAhgRAZIAAABQAAABAAAAQAAABgBAAQAAAAgBAAQgBAAgBAAIAAABQgOAXgcAAIgCAAgABWuWIAAABQAIAKANAGIABAAIAJADIAAACQAGAFAMgEIABgBQAFgEADgEIgBgBQgEgGALgFIABgCQAFgIACgMIgBABQgeAHgcALIgBgBIgEAAQgEAAgEACgABPvCQgYgBABgVQAIgSAQgJIABAAQAFADAEAGIAAABQgKAIgFAMIAAAAQALAJAQgFQAFgBAFAEIgCADIAAAAIAAAAQgHAJgVAAIgDAAgAA/xmIAJgGIACAAIAAgBQATgHAVAGIABAAIAAAAIABABQgKAGgSAAIgBAAIAAABQgIAFgGAAQgGAAgEgFg");
	this.shape_4.setTransform(-36.5,6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(140));

	// Layer 7
	this.instance_1 = new lib.BuffyHair("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-27.6,-76.7,1,1,0,0,0,35.5,46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(140));

	// Layer 6
	this.instance_2 = new lib.BuffyArm2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-4.2,-63.7,1,1,0,0,0,10.9,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,rotation:-35.9},18).to({rotation:-38.6,x:-4.1,y:-63.8},10).to({regX:10.8,regY:14.4,scaleX:1,scaleY:1,rotation:-16,x:-4.2},12).to({regX:10.9,regY:14.5,scaleX:1,scaleY:1,rotation:-60.6,x:1.4,y:-61.7},23).to({scaleX:1,scaleY:1,rotation:0,x:-4.2,y:-63.7},57).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.5,-122.8,143.5,255.8);


(lib.BubLegTrace = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.BubThighTrace("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(13.5,-2.1,1,1,0,0,0,13.7,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-14.8,x:12.2,y:-3.1},8).to({scaleX:1,scaleY:1,rotation:-30,x:10.7,y:-4.1},8).wait(32).to({startPosition:0},0).to({rotation:0,x:13.5,y:-2.1},11).wait(1));

	// Layer 1
	this.instance_1 = new lib.BubCalfTrace("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(15.1,13,1,1,0,0,0,11.8,-2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:18.8,y:12},8).to({x:22.4,y:11},8).to({regY:-2,rotation:30,x:24.9,y:13.6},18).to({regY:-2.1,rotation:0,x:22.4,y:11},14).to({x:15.1,y:13},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,-15.4,31.7,72.9);


(lib.BubIdea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.BubHeadDream();
	this.instance.parent = this;
	this.instance.setTransform(41.6,84.9,1,1,0,0,0,18.1,13.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

	// Layer 7
	this.instance_1 = new lib.BubArmGlass();
	this.instance_1.parent = this;
	this.instance_1.setTransform(26.3,113.4,1,1,0,0,0,29.9,17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

	// Layer 8
	this.instance_2 = new lib.Glass();
	this.instance_2.parent = this;
	this.instance_2.setTransform(47.5,114.2,1,1,0,0,0,8.3,11.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AgVCtQhMgGhGgWIgJgDIhUgZQgxgOgmgHQgKhNgBg+QAAhaATgoQAPARAWAQQCABOCTAbQCMAcCGgmQAogKAfgYIAAAAIABADIAUBuIAUBhQiZAximgMIgIgSIgPgHIgBAZIgEACIgCAEIgfgBg");
	this.shape.setTransform(39.6,155);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD699").s().p("AgBAKQgEgJACgIQACgLADAKQADAIgBAIQgBAGgCAAQgBAAgBgEg");
	this.shape_1.setTransform(75.8,126.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FECE89").s().p("Aj9J9QgDgNALgHQAKgIgDgMQgagHggAEQgfAFgGgCQABgIAPgEQAPgEABgIQgNgFgUAOQgQALgGgMQACgOAYgCQAfgEAGgEQADgKATgPQARgNABgRQgYgrgBhQQgBhLASg4QgfgmgOgVQgXgkgEgoQA2AVBGARICuAkIgRB2QAEAFACAFQAUBFgdBFQgVAzgKA2IgJAJIgJAGQgNAKgQADIgBgNIgGAJIgGAHQgOAFAAAGIAAACIgBABQgSAMgbgCQAHAegVAGIgJABQgNAAgLgNgAgrgzQiqgahxhFIgOgIQgegVgNgZQABgBAAgEQAAgGgDgWIABgBIgBgCIgBgDIAAgCIAAAAIAAAAIgCgLIgEAAQgMgdgFgXIgHglIgEghIABgDIABgEIgCgJQAAgIACgFIgBgCQAPhHBLg/QBHg8BMgRIABgCIAIAAQCgg8CeA4IAFgBQB5AnASAIQBXAkAcAsQAiA0giA3QgeAzhBAYQgEgygZg0Qgeg5gNgfQgGAAgTgQQgPgNgHANIAXAMQANAIADAMQAkA6AUA9QAVBDgDA+QgCAIgBAJIAAAIIgEgCIAEAEQgCAUgDARQgHAqgWAcQgJALgHAIIgBgBQhYAshuAAQguAAgwgHgAAvhcIAaAIIAKgQgAkljfIAAgBIgOgBIAOACg");
	this.shape_2.setTransform(43.7,155.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLAIQAGgPARAAQgGAPgPAAIgCAAg");
	this.shape_3.setTransform(16.3,216.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AkCJ+QgagXgIgDQgBgHAEgFQAFgHAAgEQgKgFgKAKQgKAKAOAAQgRAKgcgOQgegPAEgcIA8gTQAggNALgYQgTg2gEhDQgEhLATgyQgGgSgfgwQgZgngCglQgEgOgYgGQgdgHgGgFQgNhPAFhhQAEhDALg6IgBgJIgCgSQgJgPgKgxIgLhHIABgRIABgHIAAgDQAQhJAzgzQAvguBwg0IAEACIARACIgBADQhMAQhHA8QhLBAgQBHIACABQgCAFAAAIIABAKIgBADIAAADIAEAhIAHAlQAFAXAMAeIAEgBIACALIAAAAIAAAAIAAADIAAACIACADIgBAAQADAWAAAHQAAADgBACQANAYAeAVIAOAJQBxBECpAaQCpAaB8g+IAAAAQAIgIAJgKQAWgcAHgrQADgRABgUIABgCIAAgHQABgKACgIQADg+gVhCQgUg9gkg7QgDgMgNgIIgXgMQAHgMAPAMQATARAGgBQANAfAeA5QAZA1AEAxQBBgYAegyQAig3gig1QgcgrhXgkQgSgIh5goIgFABIADgUIADABIgBACQAbAOA0ATQA7AVAVAJQBbAoAcBAQAGBAgdAoQgWAegyAYQAIASgCANQgCANgMAMQABAFAOAHQAMAFgEAPQgJgCgJAHQgHAFgKgBIgGA6QgIAngNAVIACgBQAYBFAFB4QATBJgQgWIABAGIgSgCIgLAJIgcAIIjyANIAAAEIgGgEIgDABIAAAAIgRAAIgFgGIgNAIIgQB+QAhA4gaBKQgRAwgLAvQgOA6g5ATIgJACIgBABIgSAHIAAADIgYALQgGADgIAPQgHANgLABIgHAAQgVAAgRgOgAjtJNQADAMgKAHQgLAIADAMQAOARATgFQAVgFgHgfQAbACASgMIABgBIAAgCQAAgGAOgEIAFgHIAHgJIABAMQAQgDANgKIAJgGIAJgJQAKg2AVgzQAdhEgUhFQgCgGgEgEIARh3IiugkQhGgQg2gVQAEAoAXAkQAOAVAfAmQgSA3ABBLQABBRAYAqQgBARgRAOQgTAPgDAKQgGAEgfADQgYADgCAOQAGAMAQgLQAUgOANAFQgBAIgPAEQgPADgBAJQAGABAfgEQAMgCALAAQATAAAQAFgAkcJkQASABAGgRQgSAAgGAQgAmOg5QABA+AKBMQAmAHAxAOIBUAaIAJACQBGAXBMAGIAgABIACgEIAEgCIABgZIAPAGIAHATQCmALCZgwIgUhiIgUhuQACAFAFgUIgIAKIAAADQgfAYgoAKQiGAmiMgcQiTgciBhNQgVgQgPgSQgTAoAABbgAE+kzQgCAJAEAJQADAJADgLQABgIgDgJQgCgFgCAAQgBAAgBAGgAAwhkIAkgIIgKAQgAkzjqIAPABIAAABIgPgCg");
	this.shape_4.setTransform(43.6,156.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(10));

	// Layer 5
	this.instance_3 = new lib.BubLegTrace();
	this.instance_3.parent = this;
	this.instance_3.setTransform(59.5,194.5,1,1,0,0,0,15.7,28.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,71.8,90.2,151.4);


(lib.barb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.RitaShin("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-13,51.7,1,1,0,0,0,22.4,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({startPosition:0},0).to({regX:22.6,scaleX:1,scaleY:1,rotation:10.5,x:-12.9},18).to({regX:22.4,scaleX:1,scaleY:1,rotation:0,x:-13},19).wait(20));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0033").s().p("AgfANQgJgIgBgJIAAgBIgBgCQgDAAgCgCIAIgDIAAABIgBACIAAABIAEAEIAMAKQANAMAPAAIAIAAIAFgDIABgBIALgNIAEgFIACgEQABgEAAgEIgCgEIgDgBIgjAEIgBABQgPADgOAAQANgEAPgBIA2gHIgKAWQgHANgMALIgYAEQgOgCgMgKg");
	this.shape.setTransform(-2.8,-55.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD0A0").s().p("AAdHWIgBgLIgBgZIgCgOQgEgPgHgPIAAgCQAAgNANgBQAOADAEAPIACAGIABACQAHAOgCAPQgBAFABAFQACAJAAAJQAAAJgCAIQgCAJgKAAQgNgBABgMgAA+HBIgCgEQgBgFAAgGIAAgOIAAgFIgBgMIgBgDIAAgBQgCgHABgGQABgFAEgFIAEgCIAEgBQAOADABAPIABAIQACAOgBAOIAAAOQAAANgNAAQgIAAgDgFgAjWG2QgFgCgBgEIAAgCQgEgKAAgKIgCgcIABgHQACgHAKAAQAKAAACAKIACAHQAEgYgDgaQgEgdAEgdIADgPIADgSIgBgHQgEgOgBgPQgBgJAEgJIACgEQADgIAJAAQAOACgBAOIAAADQgCAJABAJQAFAFAAAIIAAASQAAAbgDAbIgBAaQgBAHgCAFQACAbgDAaIAAABIAAAAQgDAUgHASQgDAGgGACQgGADgGAAQgFAAgGgDgACZFnQgFgCgBgGQgCgPADgPQADgOgCgPQgEgZgMgXIgHgMQgGgNAAgMIAAgBQAAgDACgDIABgBIAFgCIAEgBQAOACADAPIADAHQANAbAIAcQACAHAAAIIAAAGQACAQgCASIgCAMIgCAIQgCAKgJAAIgHgBgAjqEaQgDgCgCgEIgBgHIAAgLIgFg3QgBgPABgPIAAgCQACgSAHgQQADgHAGgFQAFgFAJgCQARgDACAPQAAAGgDAEQgEAEgGAAQgLAQgBAUQgCAdAGAdIABAIQABAPAAAOQAAAEgCACQgFAFgFAAQgEAAgFgEgAhJEFIgCgKQgBgHgFgFIgHgHQgJgIgHgKQgKgPAPgIIAEgBQAFABAFADQAFAEAEAGIADAEQAMAJAHAOIACACQAIARgIAQIgDADIgHACQgIAAgDgKgACMgzQgOgCACgOQABgGAFgDQAGgRAQgKQAUgMAXgBQALgCAKAEQAAgJgCgIQgDgNgIgLQgngDgiAVQgOAJgKgNQgCgCABgEIAAgBQgGgDgDgGQgJgUACgVQABgFAFgCIAGgCQAGACAEAEQAFAEAAAJQABAMAFALIALgFQAbgLAcgCQAKgBAKACIADABIAEACQAJAEAFAIQAIANAEAPQADAOgBAPIgBAFQAAAGgGAEQgGAFgHgDQgDADgFABIgFACQgSAEgSAFIgFADIgSARIgIAGIgCABIgDAAIgCAAgAAZigQgGgDABgHIAAgEQACgIAFgHQAEgFgBgHQgCgHACgEQADgGAJgBIAKAEQAFAFAAAJQAAAJgDAIQgDAKgGAJQgEAHgHAAQgEAAgFgCgAAnjtQgNgFgLgKQgUgTgGgbIgBAAIgBgKIgHgmQgDgPACgRIABgEIAEgJQAEgGAIgDIAEgCQAQACgEAPQgBAGgFAFIgBADIgBALQAFAYAEAYQAEAaATAQQAKAIAMABQAFgDAFAAIABAAIABAAQAFACAEAGQAEAHgFAHQgEAIgJAAIgFAAQgLAAgKgDgACulJQgJgFACgMQAEgOgDgPQgHgXABgYIAAgEIgCgaQgQgEAFgPIADgFIADgDQAEgDAFAAQAPACAEAPQAFARAAASQABAVADAVIABACIABAFQADALgBAMIgBAPQgCALgJAEIAAAAIgEABQgDAAgDgCg");
	this.shape_1.setTransform(-12.7,-24.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgkE4IgHgCIAAgBQgJgDAAgJQgDgaAXgFQAYAFgHAaQgEAPgMAAIgFAAgAg5DoQgDgEABgGQABgXAYgCQAfAHgEAeQgCAJgJACQgHACgGAAQgRAAgJgPgAhuDZQgNgCgKgHQgFgEAAgHQgCgYAYgEQAkgDgHAjQgEAQgQAAIgDAAgAgSCtQgegHANgbQAHgOAOgCQAaACAAAZQAAAZgTAAIgLgCgAhgCFQgIgKAEgNQAEgQAQgBQAbABACAYQACAOgOAHQgHAEgGAAQgLAAgJgKgAAVBsQgVgGgJgSQgDgDABgFQABgSARgBQAbgCAJAYQAFALgGAKQgFAJgKAAIgGgBgAh7BFQgIgGACgLIAAgDIACgEQAFgLAOgDQAjAEgNAeQgDAIgJACIgGAAQgLAAgIgGgAARAXQACgUAUAAQAXAGgFAYQgCAMgMABIgGAAQgWAAACgXgABNAhQgEgGAAgIQABgTARgCQAhACgGAfIAAABQgCAKgJACIgCABIgGAAQgOAAgIgMgAhbAZQgOgKAGgQQAFgPAQgCQAJgBAGAGIAAABQAVALgKAXQgDAIgJABIgFAAQgMAAgKgGgAghgCQgHgJAFgLQAFgNAOgBQAXgEAFAUQACAHgEAFQgHAKgLADIgIACQgLAAgGgJgABjghQACgRAQgCQAdADgIAdQgDAMgMAAIgDAAQgaAAAFgZgAAXkYIAGgBQADAAADgDIgFAEIgEAAIgDAAgAAPkjQgGgCgGgEIgCgBIgBgCIgBgBIgCgCIgCgCIAFAAQAIgCAIgBIABAAIAJgBIAPgCIAAAAIADAAIgBACIAAABIgBABIAAAAIgBACIgBABIAAAAIgDAFQgGAKgIAAIgIgCg");
	this.shape_2.setTransform(-4.7,-25.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#33CCFF").s().p("AgdC7QAQADAEgRQAHgagYgFQgXAFADAaQABAJAIADIABAAIABAGIgJgHQgGgKgJgJQgOgMgNgNQgRgYgXgTIgLgKIgIgKIgKgUIgBgCIAAgDIgBgBIgFgBIgCAAIgBAAIgBgCIANgfIgDgDIAAgFQgBgIADgGIADgEIABgCIAChLIAaAMIgBADQgCALAJAGQAKAIAOgCQAJgCAEgIQAMgegjgEQgNACgFAMIgRgKIACgLIgHgJQBBhJBfAIIAKAJIgCgGQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQALAPgLAYQgLAZgYANIAHAGIArg4IAAgXIAnAXIACgDIAAgEIgEgJIAOgKIASgYIAEAAIAJgBIAAABIADgBQAIgCAHABQAQADAGATQAKAkgbAdQgHAHgIAGIAEAAIgIADIgEADQAFgfghgDQgRADAAATQgBAIAEAGQAKAOASgCIADgBQgEAGgBAIIgHAHIgEAFQgRAZgPAbIgGALIgIALIAAABIAAAAIgDAPIAAAHQgDAEAAAEIAAAFIgBACIgBABIgBAIQgBADgCACIgEAKIgFATIACgNIgEAEQgRA4gjAwIgCACgAg1BiQAAAGACAEQANAVAbgIQAJgCABgJQADgegegHQgYACgBAXgAhuAtQgXAEABAYQABAHAFAEQAJAHANACQAUACAEgSQAGgggeAAIgGAAgAgdAPQgNAbAfAHQAdAIAAgfQAAgZgagBQgOABgHAOgAhegNQgEANAJAJQAOAQATgKQANgHgBgNQgDgYgbgBQgPABgFAQgAANhCQgRABgBASQAAAFACADQAJASAVAGQAPAEAHgMQAFgKgEgLQgJgWgYAAIgEAAgAAYhkQgCAaAbgDQAMgBADgMQAFgYgYgGQgUAAgBAUgAhIiOQgPACgGAPQgGARAPAKQALAHAPgBQAJgBAEgIQAJgYgUgLIgBgBQgFgFgGAAIgEAAgAgKigQgOABgFANQgEALAGAJQAKANAQgFQAKgDAIgLQADgFgBgHQgFgRgQAAIgIABgABpidQgEAbAcgCQAMAAADgMQAJgdgegDQgPACgDARg");
	this.shape_3.setTransform(-5.3,-12.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC99").s().p("AjCOVQgLgFgIgMQgHgNgDgPIgFgLQgDgFgCgGIgBgEIAAAAIgCADIgIgZQgMgjAAgdQAAgFALgVQAKgVAAgFIgBgIIAAAAIAKggQAMgjAAgQQABgUAEggIAFg1QACgVAIgfQAJgiAEgSQAGggAPgoIANgcIADAAIAIhGQgGgYAIgXIAAgFIAHgiQABhIgGhIQAEAGAHAAQANgBAAgNIAAgMQABgOgCgOIgBgJQgBgPgOgCIgEAAIgEACQgEAFgBAFIgGgsIANgRIAehBIABABIAag2QAAANAGAMIAHAMQAMAXAEAZQACAPgDAOQgDAPACAPQABAGAFACQAPAFADgOIACgIIACgMIAAAAQAOAngNAoQgKAfgDAhQgCAUgJASIgEAHIgCAOIgDAGIACAGQgIA0gMA2IgBAGIgBAFQgBAQgEAOIgJAcQgJAcgQAZIgHAJIABAAIAFABIADgEIAAAFIABABIABABQAHAEACAJQADALgDALIAAABIAAAEQAAAPgIANIgCAGIgUA3IgHARIAAABIgBAEIgBAEIgBAHIgIAdIgFASQgEAPgBAOQgDAegIAdQgCAHgEAHQgDAHgBAIQgBAWgFAWQgBAIgEAIQAHASAAAVQgBANADAOIADANIAAACIALAYQASAHAQANQAHAGAEAIQAEAKgCAHQAAAFgDAEIgDACQgEgYgVgOIAAAAIgDABIgBAAIAAABIgBACIAAACQAAACACACQAMAPAJASIABAAIgGADIgIADIAAgBIgBgCIgBgBIAAgBIAAgCIgBgCIgJgOIgBgBQgDgIgIgFIgCABIgCABIAAAEIACAJIABABIAHAJIAAADIABADIADACIADAIIgOAEIgFABQACgUgLgQIgEgBIgCAAIgCABIAAAEQgBAEABAFIABABIADADIABAEQABADAAADIABACIABABIgBADIABAEIAAAAQgHAAgFgCgAinE8IgCgIIgBAHIgWgLIgTAAIgOgKIgRACQADgTAAgUIgTguIAAADQgJgNgJgRQgYgtgQgyQgNgbgMgcQgZg7AFhDQABgOAGgNIAHgTIgCgEIAGgQQADgVAEgUQAFgTAMgJQAHgPALgNIAJgJIAMASQgEgCgGgCIgEACQgPAHAKAPQAHAKAJAIIAHAHQAFAFABAHIACAKQAEAOAOgGIADgDQAIgQgIgRIgBgCQARAQAQATIAYAaQARAYAMAcIAGACIAKA0IgDgGQgEgPgOgDQgNABAAANIAAADQAHAOAEAPIACAOIABAYIABAMQgBAMANAAQAKAAACgJQACgIAAgJIAAACIgWEjIABAAIgFAJgAnAA8IAAgBIAIgGIAWg+IADgBIAAACQABAEAFACQAMAFALgFQAGgCADgGQAIgSACgUQABAegDAcQgCAYgJAYIgUgyIgJAFIAJAjIgBgnIASA6IgGAWgAiHgZIgBgPIAAADIABAMgAmMg+QgCgKgKAAQgJAAgDAHQgBgbgGgaQgEgXgCgXQABAEADADQAKAIAJgJQACgDAAgEQAAgOgBgOIgBgIQgGgdACgeQABgUALgQQAGABAEgFQADgEAAgGQgCgPgRADQgIACgGAFIAihYIAFgEQAchFAig7IAOgaIAAgBIACgBQAOgSALgQQADgBADgCIAAAAIBegLIAGgEIAAAEQgBAHAGADQANAGAHgLQAGgJADgJQADgJAAgJQAAgJgFgFQAgAMAjgLIgEAMIAAABQgEgEgGgCIgGACQgFACgBAFQgCAVAJAUQADAGAGADIAAABQgBAEACADQAKAMAOgJQAigVAmADQAIALADANQACAIAAAJQgKgDgLABQgWACgUALQgQAKgGARQgFADgBAHQgCAOAOACIAFgBIgFAFIgZgJQgJgYgYgHIgBACIANAIIAKAUQhAgKg9AdQgnAUgVAkIAIgpIgEAHIAAAAIgEAJQgbA9gXA+QgPAogWAmIgBAAQABgNgOgDQgJAAgDAIIgCAEQgEAJABAKQABAOAEAOIABAHIgDATIgDAOQgEAdAEAeQADAZgEAYIgCgHgAhEj3IACAEIgEACgAA7j4QgmgogKgzIgFghIANAKIgQgYIAYgVIAEgJIACgIQACgEAEgCIAGgEIABAAQAbAAAHAaQAIAbAMAZIAEAGICTieIABgQIALgOIABgFQgGgGADgMIAGgbQACgMAFgLIAEgOQABgEAEgCIACgCIAJABIACAAQAGADABAFIgBALIAAAAQgJAbgGAbIAFgCIAAAAIAAgBIgBgBIABgBIAAABIAAABQAKgBAJgFIADgBIABAAIAAAAIACAAIADgBIABAAIABAAIAAAAIAHgBIABAAIABAAIAAgBQAGgBAFgCIAGgBQANgBAKgIQALgJAGgNIAHgOIAAgBQAGgKAIgKIABAAIACgBIgBABQgCAGAAAGIgBABIAAABIAAACIgBABIAAABIgBAAIAAABIgBACIAAABIAAADIgBAAIAAABIgBABIgDAEIAAABIAAACIgBABQgBAEgCACIAAABIAAABIgBABIgCADIAAACIgBAAIgBABQgCAFgFAFQgGAEgHADIABABIAAACQAGgBAFgDIABgBIABAAIAAgBIABgBQAOgOAFgSIABgBQACgDAAgDIACgCQADgIABgKIAAgBIACgDIAAAAIAAAAIAAgBIgBAAIAKgBIAAABIgBAEIAAABIgBAAIAAABQABABgBAAQAAABAAAAQAAABAAAAQgBABAAAAIAAAAIgBADIgBABIAAADIAAAAIgBABIAAABIAAABIgBABIgBABIAAABIgBADIAAABIgBACIAAAAIgBABIAAABIAAADIAAAAIgBACIAAAAIgCAEQAAAEgDADIAAABIAAAAQgKAQgOAMIgGACIAAABIAAACIADAAIAEgBQALgFAGgMIADgFQAJgJADgMIAAAAIAHgUIAAgBIABgBIAAgCIAAAAIABgBQADgGgBgHIADAAQAIABAIADIAAAAIABABIABAAIAAABIAAACIgCADIgBABQACAEAAAEIAAABIgDAHQgBAEgCAEIgBABIAAAAIgBADIgBABQAAAEgCACIAAABIgEAGIAAAAIAAABIgDAEIAAABIgBACIgBABIgBACIAAAAIgCADIAAABIgOAPIAAABQgDAFgEACIgGADQgSARgbAKIgEABIgUAJIgPAGIgFADQgWAPgUASIgFAHQgmA1gnAzIgHADQgsA5g6AvQgEADgGABIgHAAgAGCoxIAAABIAAACQADABACgBQAEgCAFAAIAAAAIABgBIABAAIAGgHIAAAAIAEgFIACgEIABgCIADgHIAAgCIABgIIABAAIABgCIABgCIADgIIABgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIABgBIAAgCIABAAIABgCIAAgBIAAgCIABgCIACgFIAGgGIABgBIAAAAIAAAAIADgEIAAgBIAAgBIgBAAIgBgBIgBAAIgKALIgBABQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAABIgBABIAAAAIgBABIAAADIgBAAIAAABIAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAIAAABIAAABIAAAAIgBABIAAACIAAABIgBAAIgBABIAAABIgBACIAAABIAAAAIgBABIgBABIAAABIgBACIAAABIAAADIgBAAIgBABIAAACIAAADIAAABIgBABIAAACIgEAJIgBAAIAAABQgEAGgFAFIgBABIgBAAIgIABIAAAAIAAAAIgDABgAGjpAIgBABIAAAAIAAAAIAAABIgBABIAAAAIgBABIAEgFIgBABgAm4kNIAAADIgCADgAAqoNIgDAAIgCgBIAAAAIgCAAIgNgBIgDgBIAFgCQAGgBACgDQAHADAGgEQAGgFAAgGIABgFQADARAAASQAAADACAEIgBAJQgBgPgNgKgAEpo3IABAAIgBAAgAGDpnIAAABIAAABIAAgCgAARpvIACAAIABABIgDgBgAGRp+IABgCIgBAEIgBAAIgBABgAiiqUIACgEIAIAEQgJABgDAGgAibqmQAMAEAOgBQAJAAAEgIQAFgHgEgGQgEgHgFgCIgBAAIgBAAQgFAAgFADQgMgBgKgIQgTgQgEgZQgEgZgFgYIABgLIABgCQAFgGABgFQAEgQgQgBIgFABQgHADgFAHIAbg5QBJABBCgfIADABIgDAFQgFAQAQADIACAaIAAAEQgBAZAHAXQADAOgEAPQgCALAJAGQAFACAFgBIAAAAIgTAiQgPAcgVAZQgQATgZABIgEAAQgaAAgTgRgAhWsCIgiACIgaAJIgDACIAHAKIABABIALAOQAEAFACAGIABABIACAAQAFADAGABIACABQAOAAAOgCQADAAACgDQALgJAIgLIACgGIACgEIAFgHIAFgFIAAgEIgBgCIAAgCIgBgDIgCgCQgSAEgTAAIgDABgAhfseIAAgBQARABAHgKQAFgGgJgDIgMAJIgSAFIgCAAIgBgBIAAAAIgEgBQgDgCgDAAIAAABIgBAAIAAABIACABIAHADIgBAAQAAABABAAQAAAAABAAQAAABABAAQABAAAAAAIAHABIABgBIAEABgAiVtLQgFAEAAAGQAAAGAFAFQAEAEAGAAQAGAAAFgEQAEgFAAgGQAAgGgEgEQgFgFgGAAQgGAAgEAFgAhItaQgHADgBAIQAAAKAHADQADACADAAQADAAACgBQAFgCABgFQAEgMgJgFQgDgCgDAAIgFABgAiotqIgRAaIAfgZIAcAHIgPgPgAhbtlIAagRIAbAJIgWgSgAgBs7IABACIAAADIgBgFg");
	this.shape_4.setTransform(6.8,19.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#030303").s().p("AAAADIAAgGIABAHg");
	this.shape_5.setTransform(-10.1,50.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#040404").s().p("AgQAJQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAIABgBIALADIgBAAIgHAAgAgEAJQgDgDgHgBIARgFIAMgIQAJACgFAGQgGAJgPAAIgCAAg");
	this.shape_6.setTransform(-2.3,-61.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#070707").s().p("AgJALQgFgFAAgGQAAgFAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAFQgEAEgGAAQgFAAgEgEg");
	this.shape_7.setTransform(-7.1,-64.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#020202").s().p("AgMgIIAagHIAPAOIgbgGIgfAXg");
	this.shape_8.setTransform(-8.8,-67.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#414141").s().p("AACABIgEgBIACAAIADABIAAAAIgBAAg");
	this.shape_9.setTransform(-3.6,-80.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FCFCFC").s().p("AgCADQACgDAAgEIADAJg");
	this.shape_10.setTransform(-5,108.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FDFDFD").s().p("AAGAMIAAgBIACACgAgHABIAEgIIADgFIAAAEIAFAAIABAAIAAAAIgCAHIABAFQgBADABADIABAAIgBABg");
	this.shape_11.setTransform(31.9,-43);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0B0B0B").s().p("AAMASQgGAAgFgDIgBAAIgBgCQgCgFgEgFIgLgNIgCgHQABACAEAAIABACIAAABQABAKAIAHQAMAKAOADIgHAAIgCAAg");
	this.shape_12.setTransform(-5.5,-54.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AjGPEIgFgDQgJgGgDgJIgRgGIgIgZIgGALIAEgZQgIgJgJgqIgKg3QAAgJANgZIAGgLIAAgDQAAgQANgjQAMgjAAgUQAEgSACgiQACgkAEgRIAWhpQALgtAQghIAEgJIAAAAIAWkiIgBgCQAAgJgBgJQgBgFAAgFQACgPgGgNIgBgCIgJg0IgGgDQgNgcgRgYIgYgZQgQgTgRgRQgHgNgMgJIgDgEQgEgGgGgEIgLgSIgJAJQgMANgHAPQgMAJgEATQgFAUgDAUIgFARIABADIgHAUQgGANgBAOQgEBCAZA8QALAcANAbQAQAxAYAuQAJARAJANIAAgDIATAtQAAAUgDAUIgZAEQABgrgRgnQgnhbgXhgIgEATIgIAFIgBAMIgBgCIgCAAIgKAHIAAAVQgEAIgFAHQgDgFgGgCIAAgBIg1gOIgCADIgDgDIgBgaIA7AdIAHgWIgSg6IABAmIgJgiIAJgFIATAyQAJgYADgYQACgegBgcIAAgBIAAAAQADgagBgbQACgFAAgHIACgaQADgbgBgcIABgRQgBgIgFgFQgBgJACgJIABgDIAAgBQAWglAPgoQAXg+Acg9IADgKIABAAIADgHIgHAqQAUglAogTQA9gdBAAKIgLgVIgNgHIABgCQAZAHAIAYIAaAJIAFgFIACgBIAHgGIATgRIAFgDQARgGASgEIACACIANABIACgBIABABIACAAIADABQAMAKABAOIABgJQgCgDAAgDQABgSgEgRQABgPgDgOQgDgPgJgNQgFgIgIgEIgFgCIgBgBIgCAAQgJgDgKACQgcACgaALIgLAFQgGgLAAgMQgBgJgFgFIAAgBIAEgLQgjALgggMIgKgEIgHgEIgGgEIADAIIgBAHQgCAEABAHQACAHgFAFQgFAHgBAHIgGAFIheAKIgBABQgCACgDAAQgMARgOARIgBACIgBABIgOAZQghA8gcBFIgGAEIgiBYQgFAFgDAHQgIAQgCASIgCAGIACgEQgBAPACAPIAEA3IABALIABAHQACAXAFAXQAFAaABAaIgBAIIACAbQABAKADAKIgCABIgWA/IgJAFQgCgVgDgUIAGADIAcgkIgYigQgCgUABgVIADhNIAAgIIAXg1IgEgCQAGgKAEgIIAHgHIgBgCIAZg6IgCAAIAAAAIAAgBIABgDQAbgsAZguQAMgWAQgTIAIgLQAKgOAOgJQAGgDAGgBIACABIABABIAAAAQAYgKAfAFIAggtIgRgUIgBAEIgBAAIgBAAIgJgJIADgHIgNgVIACgRIgCgHIABABIAAAAQAHAbAVATQAKAKANAEQAVATAcgBQAagBAPgUQAVgYAPgcIATgjQAKgEAAgLIACgPQAAgMgCgMIAAgCIgBgCIAAgCQgEgVAAgVQAAgSgFgRQgEgPgPgCQgGAAgEADIgDADIgDgBQhCAfhIgBIgbA4IgEAJIgBAEQgDARADAPIAHAmIACAJIgKgKIADgUIgGgHIgGghIAFgMIgWAKIAbgjIAOguIgFgLIAAgCQAJABAKgEIAGgCIABAIIANAEIA7gMIALgBIAHgBQAhACAMgUIAQgMQAHgBAFACQAEACADAFQADADABAGQAFASABATIAAABQAAAOgCAOIANAHIgJAAIABACIABACIgBACIgDABIAAACQACAGAGAFIAAAlIgFAHIADAPIgGAAIhBBuIACAJQgEAHACAKQACAIAEAFIAAACIABgBQAJAJATgHIADgDQAQADAPgKQAKAFAKACIABABQAEAFAGACIACAAIAVAmQgEAhAKAgIgBAEQgKATAAAYQAAASANAKQAIAQAPAEIAJA2IAwgsIgggFIAigBIAsgzIgGgEQAjgOATggIABgMIgGAFQgsAhg1gOIAAAAQBFAKAsg4IAAgaQAFgQABgSIACACIABAAQADACAFgCQAEgEABgGIADgLIABAAIAIgEIABAAQAEgCAFAAIgBABIAAABIgIAAIgCACQgEACgBAEIgFANQgFAMgCALIgGAbQgCAMAFAGIAAAGIgMAOIgBAPIiTCfIgDgHQgNgYgHgbQgIgbgaABIABgDIgDADIgGAEQgEACgCAEIgCAHIgEAKIgXAVIAPAYIgNgKIAFAgQAKA0AmAnIAHABQAGgBAFgDQA5gvAtg5IAGgDQAog0Amg1IAFgHQAUgRAWgPIAEgDIAQgGIATgJIAEgBQAbgKASgRIAGgDQAFgDADgEIAAgBIANgPIABgBIABgDIABAAIABgDIAAAAIABgCIABgBIACgEIAAgBIAAgBIAEgFIABgBQACgDAAgDIAAgBIABgDIABgBIAAgBQACgDABgFIADgGIAAgBQABgEgCgEIAAgBIADgEIAAgBIgBgBIAAAAIgBgBIgBAAQgIgEgIgBIgCAAQAAAHgDAHIAAABIAAAAIAAACIgBABIgBAAIgGAUIgBABQgDAMgIAJIgDAFQgGALgMAGIgDABIgDAAIgBgCIAAgBIAHgCQANgMAKgQIAAAAIABgBQACgDABgEIABgEIAAgBIABgBIABgBIAAgCIAAgBIAAgBIABAAIAAgCIAAgBIACgDIAAgBIABgBIAAgBIAAgBIAAgBIABgBIABgBIAAgCIAAgBIABgDIAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAAgBIAAAAIABgBIAAgFIAAgBIgJABIAAABIABAAIAAABIgBAAIgBADIgBABQAAAJgEAJIgBACQAAADgCADIgBABQgGASgOAOIAAABIAAABIgCAAIAAABQgGADgFAAIgBgBIAAgBQAGgDAGgFQAFgEADgFIAAgBIABAAIAAgCIADgEIAAAAIAAgBIAAgBQADgDABgDIABgBIAAgCIAAgBIADgFIAAgBIABAAIAAgBIAAgCIABgBIABgCIAAgBIAAgBIABAAIAAgCIAAgBIABgBIAAgBQAAgGADgGIAAgBIgBAAIgBABQgIAKgHAKIAAABIgHAOQgGANgLAJQgJAIgOABIgGABQgFACgGABIAAAAIAAAAIgBABIgIAAIAAABIAAAAIgBAAIgEAAIgCABIAAAAIAAAAIgDABQgJAFgLAAIAAAAIAAgBIAAAAIAAACIAAABIAAAAIgFACQAGgcAJgaIgFAuIABAAIAAgBIACAAIABAAIAAgBIABAAQAJgDAJgCIAAAAIAAgBIABAAIAIAAIAAgBIAAAAIAUgEIAQgFIAAAAIAEgDIADgCIAAgBIABgBIAAgBIABAAIAAgBIANgVIAAAAIABgCIABgCIAAgBIAAAAIAGgJIADgGIABAAIABgBIABAAIAAgBIACgDIgCABIADgEIAFgCQAIgDAIAAIABgBQAIABAIACIABAAIAEABIACABIAAABIABAAIABAAIAAAAIABABIAAAAIACABIAAABIAAAAIAAADIAAAEIAAABIAAABQAAAUgKAUQgcA4g8AUQgzASgeAoIgCACIgZAbQgPAQgLARIgUAeIgFAFIgCAFIgDAFQgWAOgPAVQgkAzg4AYQgJgCgFgIQgMgUgOgTIgBgDIgBgCIgCgDIgBgBIgGgUQgCgLgFgGIAAgBQgBgJgEgHIAAgDQAAgEgBgDIgBgBIgFgCIgFADIAAABIgBAAIAAAAIgDABIgBABIgBADQgIAHgEAJQgIAEgDAIQgHAOgBAOQgGAVAMAVIACAJIAAAFIADAJIAAABIAAAAQACAGAEAEIABAQIAGAIQAKAXACAXQAFBCgFBCQgCAigGAiQgJAugMAvQgKASgBAXIgCAiIgRBIQgHAbgEAbQgGAPgBARIAAABQgBAMgEALQgIAUgDAWQgIARgFASIgWBeQgVBBgEBEIgGAEIgDAUQgJBEAtAzIAAgBIACADIAZAWQAKAQgCAQIgEADIgFgBIgIABQgBABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAABAAQAAABABAAQgXAKgaAFIgBgBIgDACIgJADIgEACIgDAAIgIgBgAjpN1QACAHAEAFIAEALQADAPAIANQAHAMALAEIABACQADAEAEAAQADAAACgCIgBgBIAAgEIAAgDIgBgCIgBgBQABgEgCgDIgBgDIgDgDIgBgBQgBgFABgFIABgDIABgBIADAAIADABQALAQgBAUIAFgBIANgFIgDgHIgDgDIAAgCIgBgDIgHgJIgBgCIgCgJIABgDIABgBIADgBQAHAEAEAIIAAACIAKAOIABACIAAABIAAACIABABIABACIAAAAIAHgCIAGgDIgBAAQgIgSgNgPQgCgCAAgDIAAgBIABgCIABgBIABAAIACgBIAAAAQAVAOAFAYIACgDIAGACIgCgKQABgHgEgKQgDgIgIgGQgQgOgSgGIgLgYIAAgCIgCgNQgDgOAAgOQABgUgIgSQAEgIACgJQAEgVACgWQAAgIAEgHQAEgHACgIQAIgcACgeQACgPAEgOIAFgSIAHgdIACgIIAAgDIABgEIABgBIAHgRIATg4IADgFQAHgNAAgPIAAgEIABgCQADgKgDgLQgDgJgHgFIAAgDIAAADIgCgBIAAgGIgDAFIgEgBIgBAAIAGgJQARgZAJgcIAIgcQAFgPABgPIAAgGIACgGQALg1AJg0IgCgGIADgGIABgOIAFgHQAIgSACgUQADghALggQAMgngNgnIgBgBQACgRgBgQIAAgGQAAgIgDgHQgIgcgMgbIgDgHQgEgPgOgCIgEAAIgBgDIgDAGIgBABQgDADAAADIAAAAIgZA3IATgtIgVAsIgdBBIgNARIAFAsQgBAGADAHIAAABIABAOIABAFIAAAOQgBAGACAFIABADQAGBJgBBIIgGAiIgBAEQgIAYAGAYIgIBGIgDgBIgMAdQgPAogHAgQgDARgKAjQgIAfgBAVIgGA1QgEAgAAATQgBARgLAiIgLAhIABAAIABAIQAAAFgLAVQgLAVAAAFQAAAdAMAjIAIAYIACgCIAAAAIABADgAiWhgIAEAMIACgCQAkgwARg4IAEgEIgCANIAFgTIAEgKQACgCABgDIABgIIABgBIABgCIAAgFQAAgEADgEIAAgHIADgPIAAAAIAAgBIAIgLIAGgMQAPgbARgZIAEgFIAHgHQABgIAEgGQAHgCADgKIAAgBIAEgDIAIgDIgEAAQAIgGAHgHQAbgdgKgkQgGgTgQgDQgHgBgIACIgDABIAAgBIgIABIgEAAIgSAYIgOAKIAEAJIAAAEIgCADIgngXIAAAXIgrA4IgIgGQAZgNALgZQALgYgLgPQAAABgBAAQAAAAAAABQgBAAAAAAQAAABAAAAIACAGIgKgJQhggIhBBJIAHAJIgCALIARAKIgCAEIgagMIgCBLIgBACIgDAEQgDAHABAIIAAAFIADADIgNAfIABACIABAAIACAAIAFABIABABIAAADIABACIAKAUIAIAKIALAKQAXATARAYQANANAOAMQAJAJAGAKIAJAHIgBgGIAHACgAlii1IA2hBQAPgSgGgYIAFAOIgBg6gAGDpCIAAAAIAAgBIAAABgAGDoKIgBgCIAAgBIADgBIABAAIAAgBIAIgBIAAAAIABAAQAGgFADgGIABgBIABAAIADgJIAAgCIABgCIABAAIAAgDIAAgCIABgBIAAAAIAAgDIABgBIABgCIAAgBIABgBIAAgBIAAAAIABgBIABgDIAAAAIABgBIAAgBIAAAAIAAgCIABgBIABAAIAAgBIAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAIABgBIAAgBIABAAIAAgDIAAgBIABgBIAAgBQAAAAAAgBQAAgBABAAQAAgBAAAAQAAgBABAAIAAgBIALgLIABAAIABABIAAAAIABABIgBABIgCADIAAABIgBAAIgBAAIgGAHIgCAFIAAACIgBACIAAABIgBABIAAABIgBACIAAABQAAABAAAAQgBABAAAAQAAABAAAAQAAAAgBABIAAAAIgDAIIgCACIgBADIAAAAIgBAIIgBACIgDAHIgBACIgCAEIgDAFIgBAAIgGAHIgBAAIAAABIAAAAQgFAAgEACIgDAAIgCAAgAGhoaIABAAIAAAAIAAgBIABgBIABgBIgDAEIAAgBgAD6o+QgGgDgBgIIANAKIgFABIgBAAgAEopUIAAgCIAAgBIAGADIACAEIgBAEQgBgGgGgCgAhsqoIgCgBIAJAAIAZgFQAMgLAHgOIAKgVIg3AGQgPABgNAEQAOAAAPgDIABAAIAkgFIADABIACAEQAAAEgBAEIgCAEIgFAGIgKANIgBABQgDACgEABIgGABQgQAAgNgMIgMgMIgEgEIAAgBIABgCIAAgBIgIADIACAHIgBgBIgHgKIAEgCIAZgJIAjgDIACAAQATAAASgEIACACIABACIABADIAAACIAAAEIgFAFIgFAHIgCAEIgBAGQgJALgKAJQgDADgDAAQgNABgOAAIgBAAgAhXrNIgJABIgBAAQgJABgIACIgGAAIACACIADACIABABIACACIABABQAGAEAHACQAOAGAIgOIADgFIAAAAIAAgBIABgCIAAAAIABgBIABgBIABgCIgDAAIgBAAIgOACgAh7qsIgBgCIADACIAAAAIgCAAgAhjr7IgLgDIgGgCIgDgCIABAAIAAgBIAAAAQAEAAACABIAEABIABABIAAABIADAAQAGABADADIABAAIgFAAgAhJseQgHgDABgKQAAgJAHgCIAFgBQAEAAACACQAKAEgEAMQgCAGgFABQgCACgDAAQgDAAgDgCgAkCsnIAAgBIAKgCIALAEgAg8tcIAWATIgbgKIgaARgAAHtUIACgDIAAABIADAJIgCABQgDAAAAgIgAhnvEIAGAAIgCACIgEgCg");
	this.shape_13.setTransform(6.8,15.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#494949").s().p("AgeANIAHABIADAAIgHABIgLABgAAbgLIANgEIgQAMIADgIg");
	this.shape_14.setTransform(-0.2,-73.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FEFEFE").s().p("AgHABQAAgBAAAAQABAAAAAAQAAAAABAAQAAgBABAAIAHgBIAFAAIgMAFQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape_15.setTransform(-4.9,109.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(81));

	// Layer 3
	this.instance_1 = new lib.RitaHair("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-7.2,-48,1,1,0,0,0,42.3,34.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(81));

	// Layer 4
	this.instance_2 = new lib.RitaPurse("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-35.2,24.1,1,1,15,0,0,14.5,3.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-15},40).to({rotation:-7.3,y:24},10).to({rotation:15,y:24.1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.7,-82.7,109,196.3);


(lib.frb_states = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{unselectedEnabled:0,press:1,unselectedDisabled:2,selectedDisabled:3,selectedEnabled:4});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();
		*/
	}
	this.frame_1 = function() {
		/* stop();
		*/
	}
	this.frame_2 = function() {
		/* stop();
		*/
	}
	this.frame_3 = function() {
		/* stop();
		*/
	}
	this.frame_4 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// dot_enabled
	this.instance = new lib.frb_dot_1();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1));

	// dot_disabled
	this.instance_1 = new lib.frb_dot_disabled_1();
	this.instance_1.parent = this;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

	// background pressed/disabled
	this.instance_2 = new lib.frb_background_pressed_1();
	this.instance_2.parent = this;

	this.instance_3 = new lib.frb_background_disabled_1();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

	// background up/static
	this.instance_4 = new lib.frb_background_1();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5));

	// radio button frame
	this.frb_frame_mc = new lib.frb_frame();
	this.frb_frame_mc.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.frb_frame_mc).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.fcb_states = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{up:0,"press":1,uncheckedDisabled:2,checkedDisabled:3,checkedPress:4,checkedEnabled:5});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();
		*/
	}
	this.frame_1 = function() {
		/* stop();
		*/
	}
	this.frame_2 = function() {
		/* stop();*/
	}
	this.frame_3 = function() {
		/* stop();
		*/
	}
	this.frame_4 = function() {
		/* stop();
		*/
	}
	this.frame_5 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1));

	// check_enabled
	this.instance = new lib.fcb_check_1();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(2));

	// check_disabled
	this.instance_1 = new lib.fcb_check_disabled_1();
	this.instance_1.parent = this;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},1).wait(2));

	// background pressed/disabled
	this.instance_2 = new lib.fcb_background_pressed_1();
	this.instance_2.parent = this;

	this.instance_3 = new lib.fcb_background_disabled_1();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},2).to({state:[]},1).wait(1));

	// background static
	this.frb_frame_mc = new lib.fcb_background_1();
	this.frb_frame_mc.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.frb_frame_mc).wait(6));

	// check box frame
	this.fcb_frame_mc = new lib.fcb_frame();
	this.fcb_frame_mc.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.fcb_frame_mc).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13,13);


// stage content:
(lib._finish = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{summary:0});

	// timeline functions:
	this.frame_0 = function() {
		var W = 550; var H = 400;
		var vx = 0.1-Math.random();
		
		for(var i = 0; i < 50; i++)
		{
			new create_particles();
		}
		 
		function create_particles() {
			snow = new lib.Snow;
			snow.x = Math.random() * W;
			snow.y = Math.random() * H;
			snow.scaleX = snow.scaleY = Math.random() * .8 - .2;
			snow.vy = Math.random() * 4 + 2;
			//snow.fade = Math.random() * .015 -.016 ;//set gentle fade of particle
		//snow.vx = Math.random() * -1 + .3;
		//snow.gravity = 1;
			stage.addChild(snow);
			createjs.Ticker;
			createjs.Ticker.setInterval(30);
			createjs.Ticker.setFPS(24);
			snow.addEventListener("tick", animate)
		}
		 
		function animate(event)
		{
			event.target.y +=event.target.vy
			event.target.x +=vx
			//event.target.alpha += event.target.fade; //animates the fade
			if (event.target.y > 400 || event.target.x > 550 || event.target.x < -10)
			{
				event.target.y = -20;
				event.target.x = Math.random() * W;
				//event.target.alpha = 1; //returns particles alpha back to 100%
			}
		}
		this.btn_goNext.addEventListener("click", openNext.bind(this));
		this.btn_menu.addEventListener("click", openMenu.bind(this));
		
		function openMenu(){
		
		 window.open ("../menu/menu.html","_self");
		}
		
		function openNext(){
		
		 window.open ("../ger/ger_Scene1.html","_self");
		}
		playSound("applause_cheering");
	}
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(44).call(this.frame_44).wait(1));

	// Layer 10
	this.btn_goNext = new lib.nextSEGMENT();
	this.btn_goNext.parent = this;
	this.btn_goNext.setTransform(570,398.2);
	new cjs.ButtonHelper(this.btn_goNext, 0, 1, 2, false, new lib.nextSEGMENT(), 3);

	this.instance = new lib.scene3redhead();
	this.instance.parent = this;
	this.instance.setTransform(240.7,186.1,0.605,0.605,0,0,0,-5.5,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.btn_goNext}]}).wait(45));

	// Layer 3
	this.instance_1 = new lib.BuffyBuffBod();
	this.instance_1.parent = this;
	this.instance_1.setTransform(174.1,199.3,0.634,0.634,0,0,0,-10.7,5.2);

	this.instance_2 = new lib.scene3blondestill();
	this.instance_2.parent = this;
	this.instance_2.setTransform(112,213.4,0.621,0.62,0,0,0,-0.8,-0.5);

	this.instance_3 = new lib.barb();
	this.instance_3.parent = this;
	this.instance_3.setTransform(324.8,207.5,0.745,0.745,0,0,0,-3.2,15.7);

	this.instance_4 = new lib.BubIdea();
	this.instance_4.parent = this;
	this.instance_4.setTransform(379,198.1,1,1,0,0,0,41.5,147.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(45));

	// Script
	this.btn_menu = new lib.skiptomenu();
	this.btn_menu.parent = this;
	this.btn_menu.setTransform(514.1,20.3);
	new cjs.ButtonHelper(this.btn_menu, 0, 1, 2, false, new lib.skiptomenu(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_menu).wait(45));

	// Layer 8
	this.instance_5 = new lib._100();
	this.instance_5.parent = this;
	this.instance_5.setTransform(276.4,183.7,1,1,0,0,0,304.4,181.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(45));

	// Layer 12
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#009999","#0099FF"],[0,1],-276.5,0,276.5,0).s().p("EgrMAfVMAAAg+pMBWZAAAMAAAA+pg");
	this.shape.setTransform(276,200.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(274.5,200,553,401);
// library properties:
lib.properties = {
	id: '2370D0F074D4E84E9075AB521ECDAD9A',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/SE1stThought.mp3", id:"SE1stThought"},
		{src:"sounds/SE2ndThought.mp3", id:"SE2ndThought"},
		{src:"sounds/SE3rdThought.mp3", id:"SE3rdThought"},
		{src:"sounds/arealways.mp3", id:"arealways"},
		{src:"sounds/arearticles.mp3", id:"arearticles"},
		{src:"sounds/SEAdjetiveAnswers.mp3", id:"SEAdjetiveAnswers"},
		{src:"sounds/modifies.mp3", id:"modifies"},
		{src:"sounds/applause_cheering.mp3", id:"applause_cheering"},
		{src:"sounds/nounmarkers.mp3", id:"nounmarkers"},
		{src:"sounds/SEBlackHair.mp3", id:"SEBlackHair"},
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"},
		{src:"sounds/SEBrownHair.mp3", id:"SEBrownHair"},
		{src:"sounds/bushrattle.mp3", id:"bushrattle"},
		{src:"sounds/SERitaChopsMick.mp3", id:"SERitaChopsMick"},
		{src:"sounds/_6a.mp3", id:"_6a"},
		{src:"sounds/_7a.mp3", id:"_7a"},
		{src:"sounds/highclick.mp3", id:"highclick"},
		{src:"sounds/JingleAdjetives.mp3", id:"JingleAdjetives"},
		{src:"sounds/lowclick.mp3", id:"lowclick"},
		{src:"sounds/signalthecomingofanoun.mp3", id:"signalthecomingofanoun"},
		{src:"sounds/eyepopsout.mp3", id:"eyepopsout"},
		{src:"sounds/eagleleaves.mp3", id:"eagleleaves"},
		{src:"sounds/eaglemove.mp3", id:"eaglemove"},
		{src:"sounds/_1b.mp3", id:"_1b"},
		{src:"sounds/parrotleaves.mp3", id:"parrotleaves"},
		{src:"sounds/parrotmove1.mp3", id:"parrotmove1"},
		{src:"sounds/parrotmove2.mp3", id:"parrotmove2"},
		{src:"sounds/percussionloop.mp3", id:"percussionloop"},
		{src:"sounds/pianoe.mp3", id:"pianoe"},
		{src:"sounds/pianof.mp3", id:"pianof"},
		{src:"sounds/pianof_1.mp3", id:"pianof_1"},
		{src:"sounds/SERedHair.mp3", id:"SERedHair"},
		{src:"sounds/scaryloop.mp3", id:"scaryloop"},
		{src:"sounds/ack.mp3", id:"ack"},
		{src:"sounds/articlesareadjectivescallednounmarkers.mp3", id:"articlesareadjectivescallednounmarkers"},
		{src:"sounds/SE3questions.mp3", id:"SE3questions"},
		{src:"sounds/_6b.mp3", id:"_6b"},
		{src:"sounds/SEWaterHits.mp3", id:"SEWaterHits"},
		{src:"sounds/SEWaterSpill.mp3", id:"SEWaterSpill"},
		{src:"sounds/SEWhichOne.mp3", id:"SEWhichOne"},
		{src:"sounds/whistles_crowd.mp3", id:"whistles_crowd"},
		{src:"sounds/_1d.mp3", id:"_1d"},
		{src:"sounds/yeah.mp3", id:"yeah"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['2370D0F074D4E84E9075AB521ECDAD9A'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;