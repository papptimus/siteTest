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


(lib.vol_pos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.5,1,1).p("ABagwIAABgQAAAWgZAAIiBAAQgZAAAAgWIAAhgQAAgVAZAAICBAAQAZAAAAAVg");
	this.shape.setTransform(9,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgKA0QgDgDAAgGIAAgfIgFABIgTAAQgVAAAAgNQAAgHAHgDQADAAALAAIAYgBIAAgQIABgRQABgFADgDQADgCAEAAQAFAAADADQAEAEgBAFIAAAHIgBAIIABAPIAAAAIAKABIAIAAIAHgBIABAAIAJABQAKABADAGIABAEIgBAFIgDADIgDADIgFABIgEgBIgCAAIgEAAIgNAAIgOAAIAAAgQAAAMgLAAQgGAAgDgDg");
	this.shape_1.setTransform(9.6,6.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CCFF").s().p("AhABGQgZAAAAgWIAAhfQAAgWAZAAICBAAQAYAAABAWIAABfQgBAWgYAAgAgHAqQAAAGADADQAEADAEAAQAMAAABgMIAAggIANAAIAOAAIADAAIACAAIAFABIAFgBIADgDIACgDIABgFIgBgEQgCgGgKgBIgJgBIgBAAIgHABIgIAAIgKgBIAAAAIgBgPIABgIIAAgHQAAgFgEgEQgDgDgGAAQgEAAgBACQgEADgBAFIgBARIAAAQIgYABQgKAAgDAAQgHADgBAIQABAMAUAAIATAAIAFgBg");
	this.shape_2.setTransform(9,7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0099FF").s().p("AhABGQgZAAAAgWIAAhfQAAgWAZAAICBAAQAYAAABAWIAABfQgBAWgYAAgAgHAqQAAAGADADQAEADAEAAQAMAAABgMIAAggIANAAIAOAAIADAAIACAAIAFABIAFgBIADgDIACgDIABgFIgBgEQgCgGgKgBIgJgBIgBAAIgHABIgIAAIgKgBIAAAAIgBgPIABgIIAAgHQAAgFgEgEQgDgDgGAAQgEAAgBACQgEADgBAFIgBARIAAAQIgYABQgKAAgDAAQgHADgBAIQABAMAUAAIATAAIAFgBg");
	this.shape_3.setTransform(9,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape_3},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,19.9,16);


(lib.vol_neg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.5,1,1).p("AhAhFICBAAQAZAAAAAVIAABgQAAAWgZAAIiBAAQgZAAAAgWIAAhgQAAgVAZAAg");
	this.shape.setTransform(9,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMALIgCAAIgPAAQgLAAAAgKQAAgJALAAIAdgBIAdgBIAEABQAIAAAAAJQAAAIgKABIgVABIgJABIgNAAg");
	this.shape_1.setTransform(9.1,6.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhABGQgZAAAAgWIAAhfQAAgWAZAAICAAAQAaAAAAAWIAABfQAAAWgaAAgAABgLIgdAAQgLAAAAAKQAAAJALAAIAPAAIACAAIANAAIAJAAIAVgBQAKgBAAgIQAAgJgIAAIgEgBIgdABg");
	this.shape_2.setTransform(9,7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CCFF").s().p("AhABGQgZAAAAgWIAAhfQAAgWAZAAICAAAQAaAAAAAWIAABfQAAAWgaAAgAABgLIgdAAQgLAAAAAKQAAAJALAAIAPAAIACAAIANAAIAJAAIAVgBQAKgBAAgIQAAgJgIAAIgEgBIgdABg");
	this.shape_3.setTransform(9,7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0099FF").s().p("AhABGQgZAAAAgWIAAhfQAAgWAZAAICAAAQAaAAAAAWIAABfQAAAWgaAAgAABgLIgdAAQgLAAAAAKQAAAJALAAIAPAAIACAAIANAAIAJAAIAVgBQAKgBAAgIQAAgJgIAAIgEgBIgdABg");
	this.shape_4.setTransform(9,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_3},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape_4},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,19.9,16);


(lib.vol_mute = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AASBRQAAgIgQgQQgMgNgHAAIAAhZQAHAAANgOQAPgOAAgHg");
	this.shape.setTransform(15.6,13.9,1.2,1.201);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AgGglIANAAQABAAAAABIAABJQAAABgBAAIgNAAQgBAAAAgBIAAhJQAAgBABAAg");
	this.shape_1.setTransform(10.5,13.8,1.2,1.201);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#990000").ss(1,1,1).p("AhHBRQgCgDgDgCQgDgDgBgCQgbgeAAgpQAAgsAfgfQAgggAsAAQAjAAAcAUQAGAEAHAIQACACADACQAbAeAAApQAAAtggAfQgfAggtAAQgpAAgegbICYiY");
	this.shape_2.setTransform(15.1,14.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AAJAAQAAANgJAJQgCAFgGACIAAg5QAGADACAFQAJAIAAAMg");
	this.shape_3.setTransform(20.6,13.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1.5,1,1).p("ACWAAQAAA7gsAoQgtAqg9AAQg+AAgsgqQgrgoAAg7QAAg6ArgqQAKgIAKgHQAFgDAGgDQAJgFAKgEQAEgBAFgCQAWgHAZAAQAaAAAXAHQAEACAEABQAKAEAJAFQAFADAFADQAKAHAKAIQAsAqAAA6g");
	this.shape_4.setTransform(15,14.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhqBjQgrgoAAg7QAAg6ArgqQAKgIALgGIAKgHIAUgJIAIgCQAXgIAYAAQAaAAAXAIIAIACIAUAJIAKAHQAKAGAJAIQAsAqAAA6QAAA7gsAoQgtApg9AAQg9AAgtgpgAAABtQAuAAAfggQAfggAAgsQAAgpgbgeIgEgFQgHgHgHgEQgbgUgkAAQgrAAggAfQgfAgAAAsQAAApAaAeIAFAFIAFAFQAeAbAoAAgAhGBSICXiYQAbAeAAApQAAAsgfAgQgfAgguAAQgoAAgegbgAAuAaQAHgCACgGQAJgJAAgMQAAgMgJgJQgCgFgHgDIAAA6IAAAAgAhGBSIAAAAgAhLBNIgFgFQgageAAgpQAAgsAfggQAggfArAAQAkAAAbAUQAHAEAHAHIAEAFIiXCYIgFgFgAAuAagAAuggQAHADACAFQAJAJAAAMQAAAMgJAJQgCAGgHACgABAgDIAAAAgABRhGIAAAAg");
	this.shape_5.setTransform(15,14.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00CCFF").s().p("AhqBjQgrgoAAg7QAAg6ArgqQAKgIALgGIAKgHIAUgJIAIgCQAXgIAYAAQAaAAAXAIIAIACIAUAJIAKAHQAKAGAJAIQAsAqAAA6QAAA7gsAoQgtApg9AAQg9AAgtgpgAhLhLQgfAgAAAsQAAApAaAeIAFAFIAFAFQAeAbAoAAQAuAAAfggQAfggAAgsQAAgpgbgeIgEgFQgHgHgHgEQgbgUgkAAQgrAAggAfg");
	this.shape_6.setTransform(15,14.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhHBRICYiYQAbAeAAApQAAAtggAfQgfAggtAAQgpAAgegbgAAuAZQAGgCADgGQAJgIAAgMQAAgNgJgJQgDgFgGgDIAAA6IAAAAgAhMBMIgEgFQgbgeAAgpQAAgsAfgfQAgggAsAAQAjAAAcAUQAGAEAHAIIAFAEIiYCYIgFgFgAAuAZgAAughQAGADADAFQAJAJAAANQAAAMgJAIQgDAGgGACgABAgDIAAAAg");
	this.shape_7.setTransform(15.1,14.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0099FF").s().p("AhqBjQgrgoAAg7QAAg6ArgqQAKgIALgGIAKgHIAUgJIAIgCQAXgIAYAAQAaAAAXAIIAIACIAUAJIAKAHQAKAGAJAIQAsAqAAA6QAAA7gsAoQgtApg9AAQg9AAgtgpgAhLhLQgfAgAAAsQAAApAaAeIAFAFIAFAFQAeAbAoAAQAuAAAfggQAfggAAgsQAAgpgbgeIgEgFQgHgHgHgEQgbgUgkAAQgrAAggAfg");
	this.shape_8.setTransform(15,14.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhqBjQgrgoAAg7QAAg6ArgqQAKgIALgGIAKgHIAUgJIAIgCQAXgIAYAAQAaAAAXAIIAIACIAUAJIAKAHQAKAGAJAIQAsAqAAA6QAAA7gsAoQgtApg9AAQg9AAgtgpgAhGBSQAeAbAoAAQAuAAAfggQAfggAAgsQAAgpgbgeQAbAeAAApQAAAsgfAgQgfAgguAAQgoAAgegbICXiYIiXCYgAhqABQAAApAaAeIAFAFIAFAFIgFgFIgFgFQgageAAgpQAAgsAfggQAggfArAAQAkAAAbAUQAHAEAHAHIAEAFIgEgFQgHgHgHgEQgbgUgkAAQgrAAggAfQgfAgAAAsIAAAAgAAuAaQAHgCACgGQAJgJAAgMQAAgMgJgJQgCgFgHgDIAAA6IAAAAgAAuAagAAuggQAHADACAFQAJAJAAAMQAAAMgJAJQgCAGgHACgABAgDIAAAAg");
	this.shape_9.setTransform(15,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_2},{t:this.shape_4},{t:this.shape_3},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_7},{t:this.shape_8},{t:this.shape_2},{t:this.shape_4},{t:this.shape_3},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_9},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,32,30.1);


(lib.menu_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgWAoQgQgMAAgdIAAgIIAAgIIABgHIAAgGQAAgFABgEQADgFAEgBQADAAADACQADADgBADIAAAKIAAAKIAAAIIAAAIQAAAJABAHQADAJAFAEQADABAIABQAPAAAGgaQADgNAAgaIABgFQADgFAFAAQADAAADAEQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAXgCANQgDATgKAOQgEAFgGAEQgHAFgIgBQgPABgGgGg");
	this.shape.setTransform(37.7,11.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgoAtQgDgCAAgDIABgIIAAgHIAAgKIAAgKIAAgKIAAgMIgBgKIAAgLQAAgDADgDQADgDAEAAQAEAAAFAIQAaAmAaAXIAAgJIgBgmIgBgGIAAgHQAAgIAJAAQAJAAAAAeIAAAJIgBAkIAAAJQgBAIgIAAQgEAAgFgFQgWgUgcgkIgBASIABAOIAAAOQAAARgJAAQgDAAgDgDg");
	this.shape_1.setTransform(28.5,10.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgaAsQgHgFAAgTIABgXIACgXIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAIANgCIALgBQAPAAAIADQAGACAAAGQAAADgCACQgDADgDAAIgDAAQgJgDgJAAIgJABIgKACIgBAXIAWgDIAOgBQAEABACACQADACAAADQAAAHgIAAIgOABIgYADIAAAMQAAAMABABQABABAGAAIAKgBIALAAIAEAAIADAAQAEAAACABQADADAAAEQAAAGgHACQgGABgRAAQgUAAgFgGg");
	this.shape_2.setTransform(20,10.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAfAmIgCgOQgDgKgEgTIgJAXIgDALIgFALQgDAFgEAAQgFAAgEgHIgDgLIgIgeIgIAcIgBANQgDAJgHgBQgDAAgDgCQgCgDAAgDQAAgKAFgNIAGgWIADgSQADgMADgFQADgEAEAAQAGABACAFQADAFADAQQACAPAFARQAGgRAGgVIADgNQADgIAHAAQAGgBADAKIADAPQADAYAGASIAFAUQAAADgDACQgDACgDAAQgGABgEgKg");
	this.shape_3.setTransform(10.9,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1.5,1,1).p("Ai4hoIFxAAQAxAAAAAwIAABxQAAAwgxAAIlxAAQgxAAAAgwIAAhxQAAgwAxAAg");
	this.shape_4.setTransform(23.4,10.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ai4BpQgxAAAAgwIAAhxQAAgwAxAAIFxAAQAxAAAAAwIAABxQAAAwgxAAg");
	this.shape_5.setTransform(23.4,10.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1.5,1,1).p("Ai4hoIFxAAQAxAAAAAwIAABwQAAAxgxAAIlxAAQgxAAAAgxIAAhwQAAgwAxAAg");
	this.shape_6.setTransform(23.4,10.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00CCFF").s().p("Ai4BpQgxAAAAgxIAAhvQAAgxAxAAIFxAAQAxAAAAAxIAABvQAAAxgxAAg");
	this.shape_7.setTransform(23.4,10.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0099FF").s().p("Ai4BpQgxAAAAgxIAAhvQAAgxAxAAIFxAAQAxAAAAAxIAABvQAAAxgxAAg");
	this.shape_8.setTransform(23.4,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_8},{t:this.shape_6},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,48.8,23);


(lib.general_buttoncolor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{resetRed:1});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_8 = function() {
		this.gotoAndPlay("resetRed");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(2));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#D5FFD7","#61EF01","#1DA400","#004A00"],[0,0.345,0.635,0.937],0.4,7,0,0.4,7,18.8).s().p("AAAB2QgwAAgigjQgjgigBgxQABgwAjgiQAigjAwAAQAxAAAjAjQAjAigBAwQABAxgjAiQgjAjgxAAIAAAAg");
	this.shape.setTransform(11.9,11.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#EC0000","#9D0000","#480000"],[0,0.345,0.635,0.937],0.4,7,0,0.4,7,18.8).s().p("AAAB2QgwAAgigjQgjgigBgxQABgwAjgiQAigjAwAAQAxAAAjAjQAjAigBAwQABAxgjAiQgjAjgxAAIAAAAg");
	this.shape_1.setTransform(11.9,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},8).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23.7,23.6);


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


(lib.Copyright = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAcAIIgEgLIgDAKQgEAJgEAAQAAAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBIgCgJIgCgHQgGATgDAAIgCgBIgBgDIABgCQACgEACgHIADgMQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAFAAACAIIACALIADgGIADgJQACgFACAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABIADAKIACAHIADAIIABABIgBADIgDABQgDAAgCgJgAgUANIgBgIIAAgGIgBgHIgFAAIgFgBQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAABAAIAEAAIAFAAIAPAAIADAAIADAAQABAAABAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAABQAAAAgBABQAAAAAAAAQgBAAgBAAIgNABIAAAHIABAHIAAAEIABADIgBADIgCAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAgBg");
	this.shape.setTransform(57.3,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMAYQgGgCAAgEIABgDQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAIAEACIAFACIAEABIAGgBQAEgCAAgCQAAgGgIgCIgEgCIgIgCQgDgCAAgFQAAgJAIgEIAIgDIAIgDIADAAIAEABIABADIABAEIAAADIgBAEIgDABQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAAAgBIgCgEIgKADQgGACAAAFIACAAQAJACAGADQAHAEAAAJQAAAHgGADQgFADgIAAQgFAAgGgCg");
	this.shape_1.setTransform(51,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgLATQgHgGAAgJQAAgIAGgJQAGgLAIAAQAEAAAGACQAGADAAADIgBADQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgDgBIgCgCQgCgCgGAAQgEAAgEAIQgEAIAAAEQAAAGAEADQADADAGAAIAFgBIAFgDIACgBIADACIABADQAAADgGADQgHADgDAAQgJAAgFgGg");
	this.shape_2.setTransform(46.6,2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgDAgQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAgIIAAgIIABgKIAAgKQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAIADgBIACABQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAIgBAKIAAAKIAAAIIAAAIQAAABAAAAQAAAAAAABQAAAAgBAAQAAABAAAAIgCABIgDgBgAgCgXQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_3.setTransform(43.1,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AALAVIgBgJIgBgKIAAgDIAAgEQAAgKgDAAQgFABgEAFQgEAGgCAGIAAAFIgBAEIABAEIAAAEIgBADIgDACIgEgCIgBgDIAAgEIAAgEIAAgMIABgMIAAgEIAAgEIABgEIADgBQAEABAAAFIABAFQAHgKAHAAQAHAAADAHQABAEABAIIAAAFIAAACIABAKIAAAJIgBAEIgDABQgEAAAAgFg");
	this.shape_4.setTransform(39.5,2.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAOAWIgDgDIgHADIgFACQgKAAgFgGQgEgFAAgMQAAgKAHgHQAIgIAJAAQAEAAAEACQAGADAAADIgBACIAAAGIgBAJIABAIIADAJIABABIAAABIgBAEIgDABIgDgDgAgGgKQgFAGAAAGQAAAHACADQADAEAFAAQADAAADgBIAEgEIgBgQIAAgEIABgFIgDgBIgCgBQgFABgFAFg");
	this.shape_5.setTransform(34.8,2.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAMAiIgCgLIgBgLIAAgDIAAgDQAAgIgDABQgGAAgDADIgHAKQAAARgBADQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIgBgEIABgBIAAgGIAAgHIAAggIABgHIgBgEIAAgEQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABgBQADAAAAAEIABAIIAAAKIAAAJIAAAFQAEgFAEgDQADgDAFABQAGAAAEAEQABAEAAAHIABAIIAAAJIACAJIABACQAAAAgBAAQAAABAAAAQAAABAAAAQgBAAAAAAIgDABQgDAAgBgCg");
	this.shape_6.setTransform(30,1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgLATQgHgGAAgJQAAgIAGgJQAGgLAIAAQAEAAAGACQAGADAAADIgBADQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgDgBIgCgCQgCgCgGAAQgEAAgEAIQgEAIAAAEQAAAGAEADQADADAGAAIAFgBIAFgDIACgBIADACIABADQAAADgGADQgHADgDAAQgJAAgFgGg");
	this.shape_7.setTransform(25,2.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgOATQgHgFAAgKQAAgLAGgHQAGgJAJAAQAHAAAFACQAFADAAAHQAAAEgFAEIgJAEIgQAHQADAFADABQAEACAEAAIAHgBQAFgCACgCQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAABAAIADABIABADQAAAEgIAEQgHADgGAAQgJAAgGgFgAgIgLQgEAFgCAGIAOgFQAHgEADgCQgDgEgHAAQgFAAgDAEg");
	this.shape_8.setTransform(20.3,2.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAbAhIgCgHIgCgIQgCgGgDgXIgJAZIgDAJIgEAIQgBADgCAAQgDAAgCgDIgBgFIgBgEIgIghIgCAIIgGAWIgBANQgCADgDAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBIAAgDQAAgHACgLIAGgQIACgPQACgJACgDQACgDACAAQADAAABAEQADAEABAMQADAOAFAPQAFgPAFgTIABgGIACgGQACgEADAAQAEAAABAIIADAKQACATADAOIADAIIACAHQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAIgDABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_9.setTransform(13.8,1.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgQAUIAAgeIAAgEIAAgEQAAgFAEAAQAEAAAAAIQAIgJAKAAQAEAAABADQACADAAAFIAAADQAAAGgEAAQgEAAAAgFIAAgDIAAgDQgHAAgEAEQgDACgDAGIAAAXQAAAFgEAAQgEAAAAgFg");
	this.shape_10.setTransform(5.1,2.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAOAWIgDgDIgHADIgFACQgKAAgFgGQgEgFAAgMQAAgKAHgHQAIgIAJAAQAEAAAEACQAGADAAADIgBACIAAAGIgBAJIABAIIADAJIABABIAAABIgBAEIgDABIgDgDgAgGgKQgFAGAAAGQAAAHACADQADAEAFAAQADAAADgBIAEgEIgBgQIAAgEIABgFIgDgBIgCgBQgFABgFAFg");
	this.shape_11.setTransform(0.5,2.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgBAaQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIgBgQIgBgPQAAgEgCgDQgDABgCAEIgGAFIgCADIAAAHIgBAIIABADIAAAEQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAAAABIgEABQgEAAAAgLIAAgIIABgHIgBgHIAAgHQgBgKAFAAIADABQAAABABAAQAAAAAAABQAAAAAAABQABAAAAABIAAACIgBADIAAAFQACgFAFgEQAEgEADAAQAHAAACAHQADgDACgCQAEgBAFAAQAGAAADAIIACAMIAEAYIgCADIgDABQgEAAAAgDIgCgOIgCgNIgBgGQgCgEgBAAIgGADIgGAEIAAAIIACALIABAMIgBADIgEABQAAAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape_12.setTransform(-5.2,2.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgCAaQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIgBgQIgBgPQAAgEgBgDQgEABgCAEIgGAFIgCADIgBAHIAAAIIAAADIABAEQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAAAABIgDABQgGAAAAgLIABgIIAAgHIAAgHIgBgHQABgKAEAAIADABQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABIAAACIAAADIAAAFQADgFAEgEQAFgEADAAQAGAAACAHQACgDADgCQAEgBAEAAQAIAAACAIIACAMIAEAYIgCADIgDABQgDAAgBgDIgCgOIgCgNIgBgGQgBgEgCAAIgGADIgFAEIAAAIIABALIABAMIgBADIgEABQAAAAAAAAQAAAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_13.setTransform(-12.2,2.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAOAWIgDgDIgHADIgFACQgKAAgFgGQgEgFAAgMQAAgKAHgHQAIgIAJAAQAEAAAEACQAGADAAADIgBACIAAAGIgBAJIABAIIADAJIABABIAAABIgBAEIgDABIgDgDgAgGgKQgFAGAAAGQAAAHACADQADAEAFAAQADAAADgBIAEgEIgBgQIAAgEIABgFIgDgBIgCgBQgFABgFAFg");
	this.shape_14.setTransform(-18.1,2.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgQAUIAAgeIAAgEIAAgEQAAgFAEAAQAEAAAAAIQAIgJAKAAQAEAAABADQACADAAAFIAAADQAAAGgEAAQgEAAAAgFIAAgDIAAgDQgHAAgEAEQgDACgDAGIAAAXQAAAFgEAAQgEAAAAgFg");
	this.shape_15.setTransform(-22.4,2.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgWAeQgFgGAAgMQAAgLAFgLQAGgMAIgIQAGgFAFAAQAEAAAGACQAJAEgBADIgBAEIgDABIgDgBQgGgEgFAAQgDAAgDAEIgFAFQgKAOAAAPQAAAIADAEQACADAHAAQAIAAAGgFQAGgFACgKQgNAAgHAEIgCABQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBIgCgCQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAJgFAWAAIAEABIABACQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgDANgJAIQgJAIgLAAQgKAAgGgGg");
	this.shape_16.setTransform(-27.7,1.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgOAhIgBgDIADgIIAKgXQAFgPAHgHIABgBIgVgBIgKAAQgEAAAAgEQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIARABIAPAAIAIAAQAFAAAAADQAAACgDADIgEAFQgFAHgFAJIgIARIgDAKIgEAKQAAAAgBABQAAAAAAAAQgBABgBAAQAAAAgBAAIgDgCg");
	this.shape_17.setTransform(-36.2,1.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AABAiIgIAAIgEAAQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgFAHAAIACAAIACAAIAAgGIgBgGIABgQIABgRQgGAEgBAAIgDgBIgCgDQAAgCAEgDIAHgFQADgEADAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABIAAADIAAADIAAAFIAAAEIgBAPIgCAOIABAGIABAGIAEAAQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAIABADIgBADIgDABg");
	this.shape_18.setTransform(-41,1.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgTAXQgFgJAAgPQAAgMAGgKQAIgLALAAQAMAAAGAKQAGAJAAAMQAAATgHAJQgGAKgMAAQgNAAgGgMgAgLgRQgEAHAAAJQAAANAEAIQAEAHAHAAQAJAAAEgLQADgHAAgLQAAgLgEgHQgEgFgHAAQgHgBgFAJg");
	this.shape_19.setTransform(-45.9,1.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AANAhIgDgBIgGABIgGAAIgFAAIgFABIgCAAIgBAAQgDAAgBgDIgBgGQAAgKAGgGQADgDALgHIAHgGQAEgFAAgFQAAgDgEgCQgDgCgDAAQgDAAgEACIgGAFIgDABQgEAAAAgDQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAFgFAEgCQAFgDAFAAQAHAAAGAEQAGAEAAAHIgBAJIgEAGQgDADgIAFQgIAFgCADQgFAFAAAHIAJAAIAMgBIAHABQAEACAAACQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgCABIgEgBg");
	this.shape_20.setTransform(-51.3,1.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgeABQgBgLALgKQALgJANAAQANAAAHAIQAIAIAAAMQAAAKgJAKQgKALgNAAIAAAAQgfAAABgdgAgOgPQgJAHABAJQAAALAFAFQAHAFAKAAQAKAAAHgJQAGgIAAgHQAAgJgDgFQgFgFgJAAIgCAAQgLAAgHAGgAgLAJQgFgEAAgFQAAgHAHgFQAGgEAHAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAABQAAAAgBABQAAAAgBAAQgBAAgBAAIgBAAIgBAAQgEAAgEACQgFADAAADQAAACAEABIAEACQADAAADgDIAEgCIAEABIABADQgBADgEADQgGADgEAAQgFAAgFgEg");
	this.shape_21.setTransform(-57.7,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.3,-7.1,126.6,16.6);


(lib.Bk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0099FF").ss(2,1,1).p("EgpKgYDMBSVAAAMAAAAwHMhSVAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#887CFA","#DFE6FD"],[0,1],-263.4,0,263.5,0).s().p("EgpKAYEMAAAgwHMBSVAAAMAAAAwHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-264.4,-155,529,310);


(lib.definition = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgWBYQgDgDAAgDQABgDAFgFIAIgGQATgVAAgtQAAgQgEgSQgGgVgJgLIgIgIQgGgFAAgEQAAgDADgCQACgCADgBQACABAEACQARAMAKAbQAJAYAAAXQABBCgkAWQgEABgDAAQgDAAgCgBg");
	this.shape.setTransform(412.9,236.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgHAIQgDgDAAgFQAAgDADgEQAEgDADAAQAFAAADADQADAEAAADQAAAFgDADQgDADgFAAQgDAAgEgDg");
	this.shape_1.setTransform(407.2,241.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AgsBDQgDgDAAgEIAAgUIgBgVIACgXIACgYIgBgNIgBgOQAAgFADgEQADgEAGAAIAVACQAMABAHAFQAkATAAAbQAAANgMAKQgKAIgOAEQAbAPANAQQADADAAADQAAAEgDACQgDADgDAAQgEAAgDgDQgdgcgigKIAAARIABARQAAAEgDADQgCACgEAAQgEAAgCgCgAgbgmIAAAKIgBASIgCAQIAEAAIAEAAQAWAAALgGQAEgBAFgFQAEgFAAgDQAAgMgOgLQgLgJgOgCIgNgBg");
	this.shape_2.setTransform(399.5,235.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AgrA2QgTgQAAgZQAAgdASgZQAUgbAdAAQAdAAAPANQAOANAAAdQAAAegQAYQgUAcgdAAQgZAAgQgPgAgegdQgOAUAAAWQAAARANALQAMAKARAAQAVAAANgVQANgUAAgXQAAgVgKgIQgIgIgWAAQgUAAgPAVg");
	this.shape_3.setTransform(386.6,235.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("AgpBIQgDgEgBgDIACg0IAAgzIAAgMIAAgLQAAgFACgCQADgDAEABQADgBABACIAUgDIAPgBQAKAAANADQASAEAAAGQAAAEgDADQgCADgEAAIgEgBQgLgDgRAAIgNAAIgRADIAAAlQAQgEAJAAQANAAAOACQAIAAAAAJQAAADgDAEQgCABgEAAIgNgBIgNAAQgGAAgUAEIgBA9QAAADgDAEQgBACgFAAQgEAAgBgCg");
	this.shape_4.setTransform(374.4,235.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AghAoIAAg8IAAgJIAAgJQAAgJAIAAQAJAAAAAPQAQgQAUAAQAHAAAEAFQADAFAAALIAAAGQAAALgIAAQgIAAAAgIIAAgHIgBgHQgNACgIAGQgIAGgFALIAAAvQAAAJgIAAQgIAAAAgJg");
	this.shape_5.setTransform(358.9,237.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgZAmQgMgNgBgVQAAgSAKgQQAMgRAVAAQASAAAJAQQAHANAAASQAAASgKAOQgMAQgRAAQgPAAgKgKgAgPgRQgGAKAAALQAAAOAHAGQAGAHAIAAQAIgBAHgGQAHgIABgMQABghgUgBQgMAAgHANg");
	this.shape_6.setTransform(349.5,237.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF00").s().p("AgsA2QgSgQAAgZQAAgdASgZQAUgbAeAAQAdAAAOANQAOANAAAdQAAAegQAYQgUAcgdAAQgYAAgSgPgAgegdQgOAUAAAWQAAARANALQAMAKARAAQAVAAANgVQANgUAAgXQAAgVgKgIQgIgIgVAAQgVAAgPAVg");
	this.shape_7.setTransform(332.5,235.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF00").s().p("AgFBAQgDgCAAgEIAAgEIABgEIgBgNIAAgNIgCgiIgDgjIgIAAQgTAAgLgDQgHgCAAgHQAAgDACgDQADgDAEAAIAOACIAOABIAQAAIAPgBIAUABIAUABQAEAAADADQACACAAAEQAAAEgCADQgDACgEAAIgUgBIgUgBIgGAAQAAAMADAcIABAmIABAJIABAKQAAAGgCAEQgDAGgFAAQgCAAgDgDg");
	this.shape_8.setTransform(319.8,235.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF00").s().p("Ag6BFQgDgDAAgEIABgLIAAgLIABgQIAAgRIAAgQIAAgSIgBgQIgCgRQAAgEAEgDQADgEAFAAQAFAAAGALQAWAgARAWQAVAZAYAXIAAgLIAAgLQAAglgDgXIgCgKIgCgJQAAgKAJAAQAPAAAAA5IAAAcIAAAdIgCAOQgBAJgIAAQgFAAgGgGQgkgigtg/IgBAUIAAATIAAAWIABAWQgBAYgIAAQgGAAgCgDg");
	this.shape_9.setTransform(300.5,235.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF00").s().p("AgsA2QgSgQAAgZQAAgdASgZQAUgbAdAAQAeAAAOANQAOANAAAdQAAAegQAYQgUAcgdAAQgYAAgSgPgAgegdQgOAUAAAWQAAARANALQAMAKARAAQAVAAAOgVQAMgUAAgXQAAgVgKgIQgIgIgWAAQgUAAgPAVg");
	this.shape_10.setTransform(286.1,235.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFF00").s().p("AgmBBQgCgDAAgEQAAgDACgDQADgDADAAIATgBIABgRIAAgOIgBgPQAAgUADgeIgMAAIgLABQgEAAgDgDQgCgCAAgEQAAgJAIAAIAbgBQAQAAAbAEQAHABAAAIQAAAEgDADQgCACgEAAIgOgBIgOgCQgCAZAAAXIAAAPIABAPIgBAPIAcAAQAEAAACACQADADAAAEQAAAEgDACQgCADgEAAIgPAAIgPAAIgQACIgSABQgDAAgDgCg");
	this.shape_11.setTransform(274,235.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFF00").s().p("AgFBAQgDgCAAgEIAAgEIABgEIgBgNIAAgNIgCgiIgDgjIgIAAQgTAAgLgDQgHgCAAgHQAAgDACgDQADgDAEAAIAOACIAOABIAQAAIAPgBIAUABIAUABQAEAAADADQACACAAAEQAAAEgCADQgDACgEAAIgUgBIgUgBIgGAAQAAAMADAcIABAmIABAJIABAKQAAAGgCAEQgDAGgFAAQgCAAgDgDg");
	this.shape_12.setTransform(263.7,235.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFF00").s().p("AgmBBQgCgDAAgEQAAgDACgDQADgDADAAIATgBIABgRIAAgOIgBgPQAAgUADgeIgMAAIgLABQgEAAgDgDQgCgCAAgEQAAgJAIAAIAbgBQAQAAAbAEQAHABAAAIQAAAEgDADQgCACgEAAIgOgBIgOgCQgCAZAAAXIAAAPIABAPIgBAPIAcAAQAEAAACACQADADAAAEQAAAEgDACQgCADgEAAIgPAAIgPAAIgQACIgSABQgDAAgDgCg");
	this.shape_13.setTransform(251.9,235.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFF00").s().p("AgiA9QgRgIAAgNQAAgEADgCQACgCAEAAQAEAAADAFQAFAGADADQAIAEAOAAQANAAALgFQAPgIAAgNQAAgLgMgHQgLgFgOAAQgOgBgKgFQgNgHAAgNQAAgQASgNQARgMARAAQAJAAALADQAOADAAAGQAAAIgIAAIgMgCIgOgBQgNAAgJAHQgKAGAAAKQAAAHANADQAFABANACQAUABALALQAKAJAAAPQAAAUgTANQgRALgVAAQgQAAgNgGg");
	this.shape_14.setTransform(240.9,235.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFF00").s().p("AgrA2QgTgQAAgZQAAgdASgZQAVgbAcAAQAdAAAOANQAPANAAAdQAAAegQAYQgUAcgdAAQgYAAgRgPgAgegdQgOAUAAAWQAAARAMALQANAKARAAQAVAAANgVQANgUAAgXQAAgVgJgIQgJgIgWAAQgUAAgPAVg");
	this.shape_15.setTransform(227.5,235.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFF00").s().p("AglBDQgCgCAAgDIAAgaIACgkIACgkIAAgMIABgMQACgJAGABIAIgBIANAAQAPAAAOALQAQAMAAARQAAAWgRAMQgPAMgTAAIgLgBIgBAuQAAADgCACQgCADgEAAQgDAAgDgDgAgOg0IgFAAIAAARIgCAjIAKAAQANAAAKgHQALgIAAgOQAAgKgKgHQgKgGgKAAIgHAAg");
	this.shape_16.setTransform(215.7,235.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFF00").s().p("AgmBEQgIgIAAgcIAAgNIABgOIgBgEQAAgCACgDIABglIAAgKIgBgJQgBgLAKAAQADAAACADQALgDAKgBIAQgCQAWAAAMAFQAGADAAAGQAAADgCADQgDADgEAAIgCAAQgPgFgOAAIgOACQgJABgKADIABAJIgBAhIAlgDIAUgCQAEAAADACQADADAAAEQAAAHgJABIgUACIgoADIAAAMIAAALQAAATACAEQADACALAAIAPAAIARgBIAFAAIAFgBQAJAAAAAJQAAAIgHABQgJACgaAAQgbAAgIgHg");
	this.shape_17.setTransform(205.5,235.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFF00").s().p("AgsBDQgDgDAAgEIAAgUIgBgVIACgXIACgYIgBgNIgBgOQAAgFADgEQADgEAGAAIAVACQAMABAHAFQAkATAAAbQAAANgMAKQgKAIgOAEQAbAPANAQQADADAAADQAAAEgDACQgDADgDAAQgEAAgDgDQgdgcgigKIAAARIABARQAAAEgDADQgCACgEAAQgEAAgCgCgAgbgmIAAAKIgBASIgCAQIAEAAIAEAAQAWAAALgGQAEgBAFgFQAEgFAAgDQAAgMgOgLQgLgJgOgCIgNgBg");
	this.shape_18.setTransform(194.2,235.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFF00").s().p("AglBDQgCgCAAgDIAAgaIACgkIACgkIAAgMIABgMQACgJAGABIAIgBIANAAQAPAAAOALQAQAMAAARQAAAWgRAMQgPAMgTAAIgLgBIgBAuQAAADgCACQgCADgEAAQgDAAgDgDgAgOg0IgFAAIAAARIgCAjIAKAAQANAAAKgHQALgIAAgOQAAgKgKgHQgKgGgKAAIgHAAg");
	this.shape_19.setTransform(183.8,235.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AAVArIgCgUIgBgSIAAgIIAAgIQAAgTgHAAQgKAAgIALQgIALgEAPIgBAJIgBAIIABAJIABAIQAAADgDADQgCACgEAAQgEAAgCgCQgDgDAAgDIAAgIIgBgJIABgYIACgYIgBgJIAAgIQAAgEADgDQACgCAEAAQAIAAABAMIAAAJQAPgTAOAAQAOAAAGAMQAEAIAAARIAAAIIAAAIIACATQACALAAAHQAAAEgDADQgCACgEAAQgIAAgBgIg");
	this.shape_20.setTransform(169.1,237.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AgdAmQgOgLAAgUQAAgVALgQQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAIQgFADgOAGIggAPQAFAIAHAEQAHADAJAAQAGAAAIgCQALgDADgFQADgEADgBQADAAADADQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEARIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAJg");
	this.shape_21.setTransform(159.5,237.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AgEA+QgDgCAAgEIAAgKIAAgKIgCgyIgTgBQgIgCAAgHQAAgEACgDQADgCADAAIATABIAAgMIgBgLQABgDACgDQACgCAEAAQAHAAABANIAAAIIAAAFIAAAFIANgBIAMABQAFABAAAHQAAAEgCACQgDADgEAAIgEAAIgEAAIgMABIABAzIAAAEIAAAEQABATgKAAQgCAAgCgCg");
	this.shape_22.setTransform(150.1,236.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AgFA+QgCgCAAgEIAAgKIAAgKIgBgyIgUgBQgIgCAAgHQAAgEACgDQADgCAEAAIASABIAAgMIAAgLQAAgDACgDQADgCADAAQAHAAACANIAAAIIAAAFIAAAFIAMgBIAMABQAFABAAAHQAAAEgCACQgDADgEAAIgEAAIgEAAIgMABIACAzIAAAEIAAAEQAAATgJAAQgDAAgDgCg");
	this.shape_23.setTransform(141.6,236.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AgIBAQgCgDAAgEIAAgQIgBgQIABgUIABgTQAAgEACgDQADgDAEABQACgBADADQACADAAAEIAAATIgBAUIAAAQIAAAQQAAAEgDADQgCACgCAAQgFAAgCgCgAgFgwQgDgDAAgEQAAgEADgDQADgDADAAQAFAAADADQADADAAAEQAAAEgDADQgDADgFAAQgDAAgDgDg");
	this.shape_24.setTransform(135.1,235.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AghAoIAAg8IAAgJIAAgJQAAgJAIAAQAJAAAAAPQAQgQAUAAQAHAAAEAFQADAFAAALIAAAGQAAALgIAAQgIAAAAgIIAAgHIgBgHQgNACgIAGQgIAGgFALIAAAvQAAAJgIAAQgIAAAAgJg");
	this.shape_25.setTransform(128.3,237.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("AAGAaIgEgVIgCgTIgHAQIgNAkQgBAEgDACQgCAFgHAAQgGAAgGgaQgDgOgEgWIgCgNIgBgOQAAgDADgDQACgCAEAAQAHAAACAHIABANIABANIAGAmQAKgaAKgjQADgKAGAAQAHAAACALIAGAgIAHAhIAGgYIALgvQACgFAFAAQAEAAADADQADACAAAEIgBAEQgHAcgLAjQgDAIgFAJQgDAEgGAAQgJAAgFgXg");
	this.shape_26.setTransform(117.6,237.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("AgdAmQgOgLAAgUQAAgVALgQQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAIQgFADgOAGIggAPQAFAIAHAEQAHADAJAAQAGAAAIgCQALgDADgFQADgEADgBQADAAADADQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEARIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAJg");
	this.shape_27.setTransform(101.3,237.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("AAYBDIgDgVIgCgVIAAgHIABgHQAAgPgJAAQgLAAgIAJQgFAFgHAPQAAAhgDAGQgDAGgFAAQgEAAgCgDQgDgCAAgEIABgEIABgMIAAgNIAAhAIABgPIgBgIIgBgJQAAgDADgDQACgCAEAAQAIAAAAAIIACAPIgBATIAAAUIAAAHQAHgJAIgFQAIgFAJAAQAPAAAFAKQAEAGABAPIAAARIACASIADASIAAADQAAADgDADQgCACgEAAQgGAAgCgGg");
	this.shape_28.setTransform(91.1,235.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AgFA+QgCgCAAgEIAAgKIAAgKIgCgyIgTgBQgIgCAAgHQAAgEACgDQADgCAEAAIASABIAAgMIAAgLQgBgDADgDQADgCADAAQAHAAACANIAAAIIAAAFIAAAFIAMgBIAMABQAFABAAAHQAAAEgCACQgCADgFAAIgEAAIgEAAIgMABIABAzIAAAEIAAAEQABATgKAAQgCAAgDgCg");
	this.shape_29.setTransform(81.5,236.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF0000").s().p("AgXBFQgCgDAAgDQAAgJATgqIggg8IgEgGQgCgEAAgDQAAgEADgCQACgDAEAAQAEAAACADQAPAVAQAmIANgeIAOgbQADgFAEAAQAEAAADACQACADAAADIgBAFIgeBBQgMAYgFAQIgFARQgDAGgFAAQgEAAgDgCg");
	this.shape_30.setTransform(67,240);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("AgaBCQgDAEgEAAQgDAAgCgCQgDgDAAgDIAAgHIABgGIgBgcIAAgbIAAgYIAAgZQAAgGACgEQADgFAFAAQAHAAgBAHIAAAFIgBADIAAATIAAAXQAHgFAIgDQAGgDAFAAQAUAAAMAOQALANgBAUQABAUgNAOQgOAOgSAAQgNAAgLgFgAgNgDIgNAIIAAAPIAAANIAAAPIAMAFQAGABAGAAQAMAAAIgJQAIgIAAgOQAAgNgGgIQgIgJgMAAQgFAAgIAEg");
	this.shape_31.setTransform(57.4,235.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF0000").s().p("AgeA8QgNgMAAgUQAAgXANgNQAMgOATgBQAKAAAGADIAIAGQABglACgMQABgIAHAAQAIAAAAAJQAAAMgEAqIgBAYQAAAdADAPIAAADQAAADgCACQgDACgDABQgFgBgDgHQgGAEgHACQgHADgGAAQgSAAgMgMgAgUACQgHAIAAASQAAALAIAIQAIAJALAAQAGAAAFgDIAKgHIADgEIgBgOIAAgKIABgLQgEgHgFgDQgGgDgIAAQgNgBgIAJg");
	this.shape_32.setTransform(452.3,208.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("AgdAmQgOgLAAgUQAAgVALgQQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAHQgFAEgOAGIggAPQAFAIAHAEQAHADAJAAQAGAAAIgCQALgDADgEQADgFADgBQADAAADADQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEARIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAJg");
	this.shape_33.setTransform(442.3,210.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF0000").s().p("AgeA8QgNgMAAgUQAAgXANgNQAMgOATgBQAKAAAGADIAIAGQABglACgMQABgIAHAAQAIAAAAAJQAAAMgEAqIgBAYQAAAdADAPIAAADQAAADgCACQgDACgDABQgFgBgDgHQgGAEgHACQgHADgGAAQgSAAgMgMgAgUACQgHAIAAASQAAALAIAIQAIAJALAAQAGAAAFgDIAKgHIADgEIgBgOIAAgKIABgLQgEgHgFgDQgGgDgIAAQgNgBgIAJg");
	this.shape_34.setTransform(431.9,208.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF0000").s().p("AgdAmQgOgLAAgUQAAgVALgQQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAHQgFAEgOAGIggAPQAFAIAHAEQAHADAJAAQAGAAAIgCQALgDADgEQADgFADgBQADAAADADQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEARIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAJg");
	this.shape_35.setTransform(422,210.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF0000").s().p("AgYAnQgNgMAAgTQAAgQAMgUQANgUAQAAQAIAAALADQAOAGAAAIQAAADgDACQgCADgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAIgDgEQgGgEgLAAQgIAAgJAQQgIAPAAAJQAAAMAIAHQAHAGALAAQAFAAAGgDIALgFIADgCQAEABACACQACACAAAEQAAAHgOAFQgLAGgIAAQgRgBgMgKg");
	this.shape_36.setTransform(412.3,210.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF0000").s().p("AgdAmQgOgLAAgUQAAgVALgQQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAHQgFAEgOAGIggAPQAFAIAHAEQAHADAJAAQAGAAAIgCQALgDADgEQADgFADgBQADAAADADQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEARIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAJg");
	this.shape_37.setTransform(402.9,210.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF0000").s().p("AghAoIAAg8IAAgJIAAgJQAAgJAIAAQAJAAAAAPQAQgQAUAAQAHAAAEAFQADAFAAALIAAAGQAAALgIAAQgIAAAAgIIAAgHIgBgHQgNACgIAGQgIAGgFALIAAAvQAAAJgIAAQgIAAAAgJg");
	this.shape_38.setTransform(393.8,210.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF0000").s().p("AghBHQgCgCAAgEIAAgjIAAgiIgBgjIgCgSQAAgGACgFQADgFAFAAQADAAACADQADACAAAEIgBACIAAAFQAHgFAIgCQAGgDAGAAQASAAAIAQQAHANAAAVQAAASgKAMQgLANgSAAQgIAAgKgDIAAAqQAAAEgDACQgDADgDAAQgEAAgCgDgAgHguQgFADgHAHIABAoQAKAEAIAAQALAAAGgIQAFgGAAgLQAAgQgEgIQgEgIgIAAQgHAAgGADg");
	this.shape_39.setTransform(384.5,212.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF0000").s().p("AghAoIAAg8IAAgJIAAgJQAAgJAIAAQAJAAAAAPQAQgQAUAAQAHAAAEAFQADAFAAALIAAAGQAAALgIAAQgIAAAAgIIAAgHIgBgHQgNACgIAGQgIAGgFALIAAAvQAAAJgIAAQgIAAAAgJg");
	this.shape_40.setTransform(370.1,210.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF0000").s().p("AgdAmQgOgLAAgUQAAgVALgQQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAHQgFAEgOAGIggAPQAFAIAHAEQAHADAJAAQAGAAAIgCQALgDADgEQADgFADgBQADAAADADQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEARIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAJg");
	this.shape_41.setTransform(360.8,210.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF0000").s().p("AgJApIgOgkIgPgnIgBgEQAAgEADgDQADgCADAAQAGAAABAFIAXA9QAGgOAKgaIAHgUQACgGAFAAQAEAAADADQADADAAADQAAADgOAjIgTAoQAAAIgHAAQgGAAgDgHg");
	this.shape_42.setTransform(351.5,210.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF0000").s().p("AgdAmQgOgLAAgUQAAgVALgQQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAHQgFAEgOAGIggAPQAFAIAHAEQAHADAJAAQAGAAAIgCQALgDADgEQADgFADgBQADAAADADQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEARIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAJg");
	this.shape_43.setTransform(342.3,210.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF0000").s().p("AAVArIgCgTIgBgTIAAgIIAAgIQAAgTgHAAQgKAAgIALQgIALgEAPIgBAJIgBAIIABAJIABAIQAAAEgDACQgCACgEAAQgEAAgCgCQgDgCAAgEIAAgIIgBgJIABgYIACgZIgBgIIAAgIQAAgEADgCQACgDAEAAQAIAAABAMIAAAJQAPgTAOAAQAOAAAGAMQAEAJAAAQIAAAJIAAAHIACATQACALAAAHQAAAEgDADQgCACgEAAQgIAAgBgIg");
	this.shape_44.setTransform(332.7,210.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF0000").s().p("AgYAxQgNgFAAgJQAAgEADgCQACgDAEAAQADABAEAEQACACAHABIAKABQAHAAAFgCQAJgDAAgFQAAgMgRgEIgIgCQgMgCgFgEQgHgEAAgKQAAgSARgIIAQgGIARgFQADgCAFAAQADAAADADQACACAAAEIABAHIABAIQAAAEgCACQgCADgEAAQgFAAgCgDQgBgCgBgIIgVAGQgNAGAAAIIAFABQAUAEAJAGQAPAIAAASQAAAPgNAHQgKAGgPAAQgLAAgLgEg");
	this.shape_45.setTransform(317.8,210.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF0000").s().p("AgIBAQgCgDAAgEIgBgQIAAgQIABgUIABgTQAAgFADgCQACgDADABQADgBADADQACACAAAFIgBATIAAAUIAAAQIAAAQQAAAEgCADQgDACgDAAQgDAAgDgCgAgFgwQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDg");
	this.shape_46.setTransform(311.3,208.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF0000").s().p("AgKATQgCgCAAgDQAAgDAFgLIAHgQQACgEADAAQAEAAACACQACADAAADQAAACgMAbQgBAEgFAAQgDAAgCgCg");
	this.shape_47.setTransform(301.2,215.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF0000").s().p("AghAoIAAg8IAAgJIAAgJQAAgJAIAAQAJAAAAAPQAQgQAUAAQAHAAAEAFQADAFAAALIAAAGQAAALgIAAQgIAAAAgIIAAgHIgBgHQgNACgIAGQgIAGgFALIAAAvQAAAJgIAAQgIAAAAgJg");
	this.shape_48.setTransform(294.1,210.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF0000").s().p("AgdAmQgOgLAAgUQAAgVALgQQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAHQgFAEgOAGIggAPQAFAIAHAEQAHADAJAAQAGAAAIgCQALgDADgEQADgFADgBQADAAADADQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEARIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAJg");
	this.shape_49.setTransform(284.8,210.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF0000").s().p("AgJApIgOgkIgPgnIgBgEQAAgEACgDQADgCAEAAQAFAAACAFIAXA9QAGgOAJgaIAIgUQADgGAEAAQAEAAADADQADADAAADQAAADgPAjIgSAoQAAAIgHAAQgGAAgDgHg");
	this.shape_50.setTransform(275.5,210.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF0000").s().p("AgdAmQgOgLAAgUQAAgVALgQQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAHQgFAEgOAGIggAPQAFAIAHAEQAHADAJAAQAGAAAIgCQALgDADgEQADgFADgBQADAAADADQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEARIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAJg");
	this.shape_51.setTransform(266.3,210.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF0000").s().p("AAGAaIgEgVIgCgTIgHAQIgNAkQgCAEgCACQgDAFgGAAQgGAAgGgaQgEgOgDgWIgBgNIgCgOQAAgDADgDQADgCADAAQAHAAACAHIABANIACANIAFAmQAKgaAKgjQADgKAGAAQAHAAACALIAGAgIAGAhIAHgYIALgvQACgFAFAAQAEAAADADQADACAAAEIgBAEQgHAcgLAjQgDAIgFAJQgEAEgFAAQgJAAgFgXg");
	this.shape_52.setTransform(255.1,210.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF0000").s().p("AgZAmQgMgNgBgUQAAgTAKgQQAMgRAVAAQASAAAJAQQAHANAAASQAAASgKAOQgMAQgRAAQgPAAgKgKgAgPgRQgGAKAAAMQAAANAHAGQAGAHAIAAQAIgBAHgGQAHgIABgMQABghgUgBQgMAAgHANg");
	this.shape_53.setTransform(244.1,210.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF0000").s().p("AAYBDIgEgVIgBgVIAAgHIAAgHQAAgPgIAAQgLAAgIAJQgEAFgIAPQAAAhgDAGQgCAGgGAAQgEAAgCgDQgDgCAAgEIABgEIABgMIABgNIAAhAIAAgPIAAgIIgBgJQAAgDACgDQADgCAEAAQAGAAABAIIACAPIAAATIgBAUIAAAHQAIgJAHgFQAIgFAJAAQAOAAAGAKQAEAGABAPIAAARIACASIADASIAAADQAAADgDADQgCACgDAAQgHAAgCgGg");
	this.shape_54.setTransform(234.4,208.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF0000").s().p("AgKATQgCgCAAgDQAAgDAFgLIAHgQQACgEADAAQAEAAACACQACADAAADQAAACgMAbQgBAEgFAAQgDAAgCgCg");
	this.shape_55.setTransform(221.7,215.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFF00").s().p("AgIBAQgEgEAAgFIABgDIAAgEIgBgNIAAgMIgCgfIgCggIgFAAQgUAAgLgCQgKgDAAgJQAAgEADgEQAEgEAGAAIAOACIAOABIAQgBIAPAAIAUABIAUABQAFAAAEADQAEAEAAAFQAAAFgEADQgEAEgFAAIgVgBIgWgBIADAkIACAjIAAAIIABAJQAAAHgDAFQgEAHgGAAQgEAAgEgDg");
	this.shape_56.setTransform(212.6,208.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFF00").s().p("AgmA2QgNgOAAgTQAAgcAZgfQAWgaAWAAIAHAAIAGABQADgEAGAAQAJAAACALIABAQQAAAFgCADQgDAGgHAAQgIAAgDgJQgCgEgCgBQgBgBgGAAQgLAAgNASQgVAXAAAVQAAAJAHAHQAGAIAJAAQAIAAAJgGIANgIQAHgEADAAQAGAAADADQAEAEAAAEQAAAGgFADQgYAVgYAAQgUAAgNgOg");
	this.shape_57.setTransform(200.7,208.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFF00").s().p("AgoBDQgJgIAAgdIABgiIABgjIAAgJIgBgKQAAgNAMAAQAEAAAEACIATgDIAQgCQAWAAANAFQAJADAAAIQAAAFgDAEQgEAEgFAAIgEgBQgOgEgOAAIgNABIgQADIgBAjIAhgDIAWgCQAFAAAEAEQADADAAAFQAAAKgLABIgVACIglADIAAASQAAASACACQABABAKAAIAQAAIAQAAIAFgBIAFgBQAFAAAEADQAEAEAAAGQAAAJgKACQgJACgbAAQgcAAgJgIg");
	this.shape_58.setTransform(189.7,208.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFF00").s().p("AglA9QgSgNgBgRQAAgOANAAQAMAAAAAOQABAFAIAGQAKAGAHAAQAEAAABgMIABgbQABgTAAgeIAAgGIgCAAIgJAAIgLAAQgFAAgEgDQgDgEgBgFQAAgMAQAAIAJAAIAIAAIARAAIAQgBQAYAAgBANQAAAFgCADQgEAEgGAAIgFAAIgGAAIgGAAIAAAGQAAA+gJAdQgGAVgRAAQgQAAgQgLg");
	this.shape_59.setTransform(178,208.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFF00").s().p("AgrBDQgEgFAAgFIAAhbIAAgMQgBgIABgEQABgJAOgBQAHgCAQAAQAPAAAPAKQASANAAATQAAAKgDAHQgDAFgIAGQAJAEAHAIQAHAKAAAJQAAALgNALQgIAHgKAEQgTAHgfAAQgGAAgEgEgAgXAvQAPAAARgGQAPgEAAgFQAAgHgKgFQgHgFgHAAIgXgBgAgXguIAAATIAAASIAMABQAagDAAgRQAAgGgIgGQgHgHgJABIgOAAg");
	this.shape_60.setTransform(166.5,208.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFF00").s().p("AguA2QgTgQAAgZQAAgdASgZQAVgbAfAAQAfAAAPAOQAPAOAAAcQAAAdgRAYQgUAcgfAAQgaAAgSgPgAgbgaQgOASAAAVQAAAOAMAKQALAIAQAAQATAAANgTQALgRAAgVQAAgTgIgHQgIgHgUAAQgSAAgOATg");
	this.shape_61.setTransform(153.3,208.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFF00").s().p("AgIBAQgEgEAAgFIABgDIAAgEIgBgNIAAgMIgCgfIgCggIgFAAQgUAAgLgCQgKgDAAgJQAAgEADgEQAEgEAGAAIAOACIAOABIAQgBIAPAAIAUABIAUABQAFAAAEADQAEAEAAAFQAAAFgEADQgEAEgFAAIgVgBIgWgBIADAkIACAjIAAAIIABAJQAAAHgDAFQgEAHgGAAQgEAAgEgDg");
	this.shape_62.setTransform(132.3,208.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFF00").s().p("AgmA2QgNgOAAgTQAAgcAZgfQAWgaAWAAIAHAAIAGABQADgEAGAAQAJAAACALIABAQQAAAFgCADQgDAGgHAAQgIAAgDgJQgCgEgCgBQgBgBgGAAQgLAAgNASQgVAXAAAVQAAAJAHAHQAGAIAJAAQAIAAAJgGIANgIQAHgEADAAQAGAAADADQAEAEAAAEQAAAGgFADQgYAVgYAAQgUAAgNgOg");
	this.shape_63.setTransform(120.4,208.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFF00").s().p("AgoBDQgKgIAAgdIACgiIACgjIgBgJIgBgKQAAgNAMAAQAEAAAEACIATgDIAQgCQAWAAAOAFQAHADABAIQAAAFgEAEQgDAEgGAAIgDgBQgPgEgNAAIgNABIgQADIgBAjIAhgDIAWgCQAFAAAEAEQADADAAAFQAAAKgLABIgVACIglADIAAASQAAASACACQABABAKAAIAPAAIARAAIAFgBIAFgBQAFAAAEADQAEAEAAAGQAAAJgKACQgJACgbAAQgcAAgJgIg");
	this.shape_64.setTransform(109.4,208.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFF00").s().p("AgvBCQgEgEAAgFIABgTIAAgUIAAhGQAAgGADgEQAFgGAIAAIAWACQAMABAHAFQAmATAAAcQAAALgIAIQgIAJgPAGQAXANAMANQADAEAAAEQAAAFgEAEQgEADgFAAQgFAAgDgDQgbgZgfgKIABAcQAAAFgEAEQgDADgFAAQgGAAgDgDgAgaADIADAAQAWAAAJgFQAFgCAEgEQADgDAAgCQAAgKgMgJQgLgJgNgBIgKgBg");
	this.shape_65.setTransform(98,208.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFF00").s().p("AgpBAQgEgEABgEQAAgFADgEQAEgDAFAAIASgCIAAgnQAAgXABgWIgTAAQgGAAgDgDQgEgDABgFQgBgGAEgDQADgDAFAAIAagBQAQAAAaAEQALABAAALQgBAFgEAEQgDACgFAAIgWgCIgBAqIgBAnIAYAAQAFAAAEAEQADADABAFQgBAFgDADQgEAEgFAAIgPAAIgQAAIgQACIgSABQgGAAgDgDg");
	this.shape_66.setTransform(87.1,208.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFF00").s().p("AgbBHQgKgCgFgEQgGAAgDgDQgEgEAAgFIABgaIAAgbIAAgcIAAgdQAAgFAFgFQAFgFAEAAQADAAAMAGIAQAHQAZAJASARQAWAVAAAYQAAAPgHAOQgIAOgNAIQgOAKgaAAIgPgCgAgeAtQAEACAEABIAKABQASAAAIgFQAIgFAEgJQAFgIAAgKQAAgUgagQQgHgGgcgLg");
	this.shape_67.setTransform(76.1,208.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFF00").s().p("Ag9BEQgDgEgBgFIABgKIAAgLIABgQIAAgPIAAgQIAAgRIgBgPIgBgQQAAgFAEgEQAFgFAGAAQAGAAAIAMQAnA5AnAjIAAgOIgBg5IgBgKIgBgJQAAgNANAAQAOAAAAAtIAAAOIAAA2IgCAOQgCALgLAAQgGAAgIgHQghgegqg2IAAAbIAAAVIAAAVQAAAagMAAQgHAAgEgEg");
	this.shape_68.setTransform(61.9,208.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFF00").s().p("AgpBAQgDgEAAgEQAAgFAEgEQADgDAFAAIASgCIAAgnQgBgXACgWIgTAAQgFAAgEgDQgDgDAAgFQAAgGADgDQADgDAFAAIAagBQAPAAAbAEQALABAAALQAAAFgFAEQgDACgFAAIgWgCIgBAqIgBAnIAYAAQAGAAADAEQAEADAAAFQAAAFgEADQgEAEgFAAIgPAAIgPAAIgRACIgSABQgFAAgEgDg");
	this.shape_69.setTransform(49.6,208.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF0000").s().p("AAVArIgCgTIgBgTIAAgIIAAgIQAAgTgHAAQgKAAgIALQgIALgEAPIgBAJIgBAIIABAJIABAIQAAAEgDACQgCACgEAAQgEAAgCgCQgDgCAAgEIAAgIIgBgJIABgYIACgZIgBgIIAAgIQAAgEADgCQACgDAEAAQAIAAABAMIAAAJQAPgTAOAAQAOAAAGAMQAEAJAAAQIAAAJIAAAHIACATQACALAAAHQAAAEgDADQgCACgEAAQgIAAgBgIg");
	this.shape_70.setTransform(34.9,210.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF0000").s().p("AAfAuQgDgIgDgUIgYAEIgWAFQgEAMgLAWQgDAFgFAAQgDAAgDgDQgDgCAAgEQAAgEAOgcQgCgCAAgDQAAgIAJgCIAZgqQAUghAFAAQAHAAACAKIAGAdIANA8IAFAOIADAKQAAADgDADQgDACgDAAQgIAAgGgUgAgLAGIAggGIgHghg");
	this.shape_71.setTransform(23.3,208.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF0000").s().p("AAMBYQglgWAAhCQAAgXAKgYQALgbAQgMQAEgCACgBQADABADACQABADAAACQAAAEgFAFIgIAJQgKAKgEAVQgFASAAAQQAAAtAUAVIAIAGQAEAFAAADQAAADgBADQgDABgDAAIgGgBg");
	this.shape_72.setTransform(13.8,209.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FF0000").s().p("AgLANQgGgGAAgHQAAgGAGgFQAFgGAGAAQAHAAAGAGQAFAFAAAGQAAAHgFAGQgGAEgHAAQgGAAgFgEg");
	this.shape_73.setTransform(447.8,140.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FF0000").s().p("AgyBgQgUgTAAggQAAgmAUgWQAUgWAfAAQARAAAJAFIANAJQACg7ADgVQACgMALAAQANAAAAANQAAAUgGBDIgCApQAAAwAFAYIAAADQAAAFgEAEQgEAEgFgBQgJAAgEgMQgKAHgLAEQgLAEgLAAQgeAAgTgUgAghADQgMAOAAAcQAAASANANQANAOASAAQALAAAIgFQAFgDALgJIAEgFIgBgYIAAgQIABgRQgGgLgJgFQgJgGgMAAQgXAAgMAOg");
	this.shape_74.setTransform(435.5,130.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FF0000").s().p("AgwA9QgVgRAAggQAAgkARgZQATgbAhAAQAXAAAPAIQASAJAAAVQAAAOgQALQgIAGgWAJIg1AaQAHAMANAGQALAGAPAAQAKAAANgEQAQgFAGgHQAEgIAGAAQAFAAAEAEQADAEAAAFQAAAPgZAMQgWAJgUAAQgfAAgUgQgAgdglQgLANgGAaIArgUQAZgMALgJQgMgMgVAAQgSAAgLAOg");
	this.shape_75.setTransform(419.4,134.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FF0000").s().p("AgHBTQgEgEAAgGQAAgRgDgiQgEggAAgRQAAgPgEgJQgKAFgKAKIgRATIgHAJIgCAYIgBAYIABAMIABALQAAAGgEAEQgEAEgGAAQgQAAAAgkIABgaIACgYIgBgXIgCgWQAAggAPAAQAFAAAFAEQAEAFAAAGIAAAIIgBAJIAAAPQAIgPAOgNQAOgMAKAAQAXAAAHAWQAIgKALgFQAKgGAOAAQAYAAAIAaQACAFAEAjQAEAXAGA5QABAGgEAEQgFAEgGAAQgLAAgCgNIgFgsIgFgrQgCgJgDgKQgFgMgGAAQgFAAgOAIQgOAJgEAFIABAaIAEAlQADAWAAAPQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_76.setTransform(400.1,134.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FF0000").s().p("Ag2BBIAAhiIAAgOIABgPQAAgOAMAAQAOAAAAAYQAbgaAgAAQAMAAAGAIQAFAJAAARIAAAKQgBASgNAAQgMAAAAgOIgBgKIAAgMQgWADgNAKQgNAJgIASIAABNQAAAOgOAAQgMAAAAgOg");
	this.shape_77.setTransform(382.1,134.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FF0000").s().p("AgpA8QgUgTAAghQgBgfARgZQATgdAjAAQAcAAAPAaQALAVAAAeQAAAegQAWQgTAagcAAQgYAAgRgSgAgYgcQgKAQAAAUQAAAUAMAMQAJAJANAAQANAAALgLQAMgMABgUQACg2ggAAQgUAAgLAUg");
	this.shape_78.setTransform(366.8,134.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FF0000").s().p("AgWB5QgEgEAAgGIAAgDQADgSAAgVIAAgnIAAgoIgXACQgOgBAAgOQAAgOAZAAIANAAIACgWQAEgfAMgQQAOgRAfgBQAUABAAAOQAAANgSAAQgiAAgEAwIgBAJIAfgDQAXAAAAAPQAAAKgLACIgLABQgHgBgaADIgBAfIAAAaIABAaQAAAcgDAPQgCAKgKABQgGgBgEgDg");
	this.shape_79.setTransform(351.8,131);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FF0000").s().p("Ag2BBIAAhiIAAgOIABgPQAAgOAMAAQAOAAAAAYQAbgaAgAAQAMAAAGAIQAFAJAAARIAAAKQgBASgNAAQgMAAAAgOIgBgKIAAgMQgWADgNAKQgNAJgIASIAABNQAAAOgOAAQgMAAAAgOg");
	this.shape_80.setTransform(338.1,134.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FF0000").s().p("AgwA9QgWgRAAggQAAgkASgZQAUgbAgAAQAXAAAOAIQASAJAAAVQABAOgRALQgGAGgYAJIg0AaQAIAMALAGQAMAGAPAAQAJAAAOgEQARgFAEgHQAFgIAFAAQAGAAADAEQAFAEAAAFQgBAPgZAMQgWAJgUAAQgfAAgUgQgAgdglQgLANgGAaIAsgUQAYgMALgJQgMgMgVAAQgRAAgMAOg");
	this.shape_81.setTransform(323.1,134.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FF0000").s().p("Ag2BzQgEgEAAgHIAAg4IAAg3IgCg5IgCgdQAAgKAEgHQAEgIAIAAQAGAAADAEQAEAEAAAFIAAAFIgBAIQAMgJALgEQALgDAKAAQAdAAANAZQALAVAAAhQAAAegQATQgSAWgdgBQgNABgRgFIAABDQAAAHgEAEQgEAEgGAAQgGAAgEgEgAgNhLQgHAFgMAKQACAgAAAjQAQAGAOAAQASAAAJgNQAIgLAAgSQAAgagGgNQgGgNgNABQgMAAgLAFg");
	this.shape_82.setTransform(307.2,137.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FF0000").s().p("AgnBPQgWgIABgOQAAgGAEgEQAEgEAGgBQAEAAAHAIQAEACALACQAKADAGAAQALAAAKgEQANgDgBgJQAAgUgagHIgOgDQgTgEgIgFQgLgIAAgPQAAgeAbgNQAJgDASgGIAagJQAHgCAGAAQAGAAAFAEQADAEAAAGIACAMIACAMQAAAGgEAEQgEAFgGAAQgIgBgDgFQgDgEgBgLIggAKQgXAJAAANIAJACQAfAGARAKQAWAOAAAdQAAAXgTAMQgRAJgZAAQgSAAgRgGg");
	this.shape_83.setTransform(283.3,133.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FF0000").s().p("AgNBmQgEgDAAgHIAAgZIgBgaIACghIABggQAAgGADgEQAEgEAGAAQAGAAADAEQAFAEAAAGIgCAgIgBAhIAAAaIABAZQAAAHgEADQgEAEgGAAQgFAAgEgEgAgIhNQgGgFABgHQgBgHAGgFQAFgEAFAAQAHAAAFAEQAFAFAAAHQAAAHgFAFQgFAEgHAAQgFAAgFgEg");
	this.shape_84.setTransform(272.8,130.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FF0000").s().p("AAjBFIgFgfQgCgRAAgOIABgMIAAgOQAAgfgLAAQgQAAgNATQgNARgIAaIgBAOIgBANIABANIABANQAAAGgEAEQgEAEgFAAQgHAAgEgEQgEgEAAgGIgBgNIgBgNIACgnIADgpIgBgNIgBgOQAAgGAFgDQAEgEAFAAQAOAAABASIABARQAXggAYAAQAXAAAJAUQAGANAAAaIAAAPIAAAMQAAALAEATQACATABALQgBAHgDADQgFAEgGAAQgMAAgBgNg");
	this.shape_85.setTransform(252.5,134);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FF0000").s().p("AgpA8QgUgTAAghQgBgfARgZQATgdAjAAQAcAAAPAaQALAVAAAeQAAAegQAWQgTAagcAAQgYAAgRgSgAgYgcQgKAQAAAUQAAAUAMAMQAJAJANAAQANAAALgLQAMgMABgUQACg2ggAAQgUAAgLAUg");
	this.shape_86.setTransform(236.7,134.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FF0000").s().p("AgNBmQgEgDAAgHIAAgZIgBgaIACghIABggQAAgGADgEQAFgEAFAAQAGAAADAEQAFAEAAAGIgCAgIgBAhIAAAaIABAZQAAAHgEADQgEAEgGAAQgFAAgEgEgAgIhNQgGgFAAgHQAAgHAGgFQAFgEAFAAQAHAAAFAEQAFAFAAAHQAAAHgFAFQgFAEgHAAQgFAAgFgEg");
	this.shape_87.setTransform(225.6,130.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FF0000").s().p("AgIBkQgFgEAAgGIABgPIAAgQIgDhSIgfgDQgNgBAAgMQAAgHAEgEQAEgEAGAAIAeACIgBgTIAAgSQAAgFAEgFQAEgDAGAAQALAAADAUIAAANIAAAJIAAAIIAUgCQAOAAAFABQAJADAAALQAAAGgEAEQgEAEgGAAIgHgBIgHAAIgUADIADBSIAAAHIAAAGQABAggQAAQgEgBgEgDg");
	this.shape_88.setTransform(214.3,131.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FF0000").s().p("AgnA+QgVgSAAgeQAAgcATgfQAVgiAaAAQAOAAARAHQAWAIAAAMQgBAGgDAEQgEAEgFAAQgEAAgDgDIgGgEQgIgHgTAAQgOAAgOAaQgNAXAAARQAAASANALQAMAKARAAQAJAAAKgEIAQgJIAHgDQAEAAAFAFQADAEAAAFQAAALgVAJQgUAJgNAAQgcAAgSgSg");
	this.shape_89.setTransform(200.2,134.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FF0000").s().p("AAtBIQgGgFgDgFIgYALQgLAEgFAAQgiAAgPgTQgOgRAAglQAAghAYgYQAXgZAgAAQAMAAAPAHQAUAIAAALQAAAEgDADQgCAFAAAMIgBAfQAAASACAKIAJAZIADAHIABADQAAAFgEAEQgEAEgFAAQgDAAgHgHgAgXgjQgQASAAAXQAAAXAIAMQAIALARAAQAMAAAKgFIAOgLQgEgkAAgTIAAgNIADgPIgJgEIgGgCQgVAAgQASg");
	this.shape_90.setTransform(185.2,134.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FF0000").s().p("AgnBPQgVgIgBgOQAAgGAFgEQAEgEAGgBQAFAAAGAIQADACANACQAJADAHAAQALAAAIgEQANgDAAgJQAAgUgbgHIgNgDQgTgEgIgFQgLgIAAgPQAAgeAcgNQAIgDASgGIAbgJQAFgCAHAAQAGAAAEAEQAEAEAAAGIACAMIABAMQAAAGgDAEQgEAFgGAAQgIgBgDgFQgCgEgCgLIghAKQgVAJAAANIAIACQAgAGAPAKQAYAOAAAdQAAAXgVAMQgQAJgYAAQgTAAgRgGg");
	this.shape_91.setTransform(161.7,133.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FF0000").s().p("AgKAfIgBgOIgBgMIgBgLQABgOABgFQACgLAKAAQAEAAAFAEQADADAAAGIAAAJIgBAIIABAMIAAANQABASgNAAQgIAAgDgGg");
	this.shape_92.setTransform(149.1,121.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FF0000").s().p("AhCBtQgFgGAAgGIAAgpQAAgUACglQADgoAAgTIADgmQAAgHAEgDQATgGAYAAQAZAAAWARQAbAUAAAdQAAAkgdAUQAWAJALALQAKALAAANQAAARgSAQQgNAMgOAFQggANgxAAQgGAAgGgGgAgrA4IAAAeQAlgCAXgJQAJgEAKgIQAIgHAAgEQAAgHgSgIQgNgGgNgDIgPgDIgFAAIgGABIgQgCIgBAggAglhUIAAAZIgDA3IAWABQAUgBAOgMQAOgNAAgTQAAgOgPgLQgPgMgQAAIgVABg");
	this.shape_93.setTransform(135.3,130.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FF0000").s().p("AhHBrQgFgEAAgGIgBgiIgBghQAAgNADgZQADgaAAgNIgBgVIgCgVQAAgIAFgGQAFgIAKABIAiACQATADANAHQA5AeAAAsQAAAWgUAPQgPAOgYAHQAsAXAWAaQAEAFAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFQgvgug4gQIABAcIABAcQAAAGgEAEQgEAEgGAAQgGAAgEgEgAgtg/IABARIgBAcIgDAcIAGAAIAGAAQAkAAARgKQAIgDAHgHQAHgIAAgGQAAgTgWgRQgTgQgXgCIgVgCg");
	this.shape_94.setTransform(116.7,130.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FF0000").s().p("Ag+BtQgNgMAAguIAAgUIACgXIgCgHQAAgEACgEQADgoAAgUIgBgPIgCgQQABgRAOAAQAGAAAEAFQARgFAPgCQAPgDAMAAQAjAAAVAJQAJAEAAAJQAAAGgEAEQgEAFgGAAIgEgBQgYgGgXAAQgLAAgNACQgNACgRAEIABAPIgCA2IA9gGIAigDQAGAAAEAEQAEAEAAAHQAAAMgNABIghADIhBAGIAAATIgBARQAAAfAEAGQAEAEATAAIAagBIAaAAIAIgBIAJgBQAPAAgBAPQABAMgMACQgOADgrAAQgsAAgNgMg");
	this.shape_95.setTransform(98.7,130.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FF0000").s().p("AgZBnQgRgrgVhPIgLgoQgJgdAAgJQAAgHAFgDQAEgEAGgBQAKAAAEAMIAFAZIANAwQAOA0ANAmIABgCIAlhnIAMgiQAIgVAJgKQAFgHAGAAQAGABAEAEQAFAFAAAGQAAADgDAFQgJANgGAPIgKAeIgmBnQgHARgJASQgEAJgIAAQgLAAgEgMg");
	this.shape_96.setTransform(80.7,130.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FF0000").s().p("AgwA9QgVgRAAggQAAgkARgZQATgbAhAAQAXAAAPAIQASAJAAAVQAAAOgQALQgIAGgWAJIg1AaQAHAMANAGQALAGAPAAQAKAAANgEQAQgFAGgHQAEgIAGAAQAFAAAEAEQADAEAAAFQAAAPgZAMQgWAJgUAAQgfAAgUgQgAgdglQgLANgGAaIArgUQAZgMALgJQgMgMgVAAQgRAAgMAOg");
	this.shape_97.setTransform(54,134.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FF0000").s().p("AAnBrQgEgLgCgWQgDgVAAgMIABgMIAAgLQAAgagOAAQgRAAgNAPQgIAJgNAYQABA2gFAKQgEAIgIAAQgGAAgFgEQgEgEAAgGIABgFQACgEAAgSIAAgUIAAhoIABgXIgBgOQgBgGAAgHQAAgGAEgEQAEgEAGAAQAMAAACANQACAOAAAKIgBAgQgBAPAAAPIAAANQAMgPANgJQAMgHAPAAQAYAAAJAPQAGALABAZIABAbIADAdQABAQAEANIAAAEQAAAGgEAEQgFAEgGAAQgKAAgCgLg");
	this.shape_98.setTransform(37.6,130.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FF0000").s().p("AgIBkQgFgEAAgGIABgPIAAgQIgDhSIgfgDQgNgBAAgMQAAgHAEgEQAEgEAGAAIAeACIgBgTIAAgSQAAgFAEgFQAEgDAGAAQALAAADAUIAAANIAAAJIAAAIIAUgCQAOAAAFABQAJADAAALQAAAGgEAEQgEAEgGAAIgHgBIgHAAIgUADIADBSIAAAHIAAAGQABAggQAAQgEgBgEgDg");
	this.shape_99.setTransform(22.2,131.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFF00").s().p("ABXBqQgEgGgEgQIgFgZQgFgXgNhMIgdBUIgIAbQgFARgGAKQgFALgKAAQgIgBgEgIIgHgPIgDgRQgOgygMg4IgFAaIgSBJQgBAOgGAaQgFAKgJABQgHAAgEgGQgEgDAAgHQAAgYAKgiIAPg4IAJgtQAGgfAHgJQAGgJAIAAQAJABAFAKQAGANAFAnQAIAuAQA1QAUg1AQg8IADgUQADgMAFgIQAFgKAKAAQALgBAHAYIAFAhQAJA/ANAtIAGAZQAFAUABAEQgBAGgEAEQgEAFgHgBQgHABgFgJg");
	this.shape_100.setTransform(426.3,72);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFF00").s().p("AhHBYQgdgaAAgoQAAgwAdgoQAggsAwAAQAugBAXAWQAXAVAAAvQAAAwgaAnQgfAugvgBQgoAAgcgXgAgxgvQgWAgAAAlQAAAcAUAQQATARAdgBQAhAAAXgiQAUgfAAgmQAAghgQgPQgOgNgiABQgiAAgYAig");
	this.shape_101.setTransform(401.9,72);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFF00").s().p("AhYBwQgEgFAAgFQAAgPADgeQACgeAAgPIgBgWIAAgYIABgiIABghQAAgGAFgEQADgEAHAAQAFAAAEAEQAEAEAAAGIgCAiIgBAiIAAAjIA9gLQAkgHAZAAQABgUABgpQgBgLAEgLQAFgPAIAAQAFAAAFAEQAEADAAAHIgCAFQgBAHAAALIAAANIAAAMQAAAPgCAcQgDAaAAAOIACAhIACAgQAAAGgFAEQgDAEgHAAQgFAAgEgEQgEgEAAgGIgBggIgCghIAAgUQgXAAgjAHIg8ALQABANgDAXQgDAYAAANQAAAFgEAFQgDAEgHAAQgFAAgEgEg");
	this.shape_102.setTransform(379.3,71.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFF00").s().p("AAgBvQgGgEAAgGQgGgRgCgLIgLg9QgHglgCgXQgNAugOAgQgRAlgFAWQACADAAADQAAAGgGAEQgFAEgGAAQgTAAAAgRIgFgSIgPhFQgJgigXhCIgBgGQAAgNAPAAQAKAAAEAKQADAFAIAZQAIAZAJAkIANA+QAPgjAPgyIAOgqQANggALAAQAKAAAEAKQAFANAGAuQACAXAHAfIAMA4QATguAdhMIAHgbQAEgRAGgJQAFgIAIAAQAPAAAAAOQAAADgFAMIgGAPIgHAZIgqBlQgGARgOAgQgGAKgKAAQgGAAgFgEg");
	this.shape_103.setTransform(353.5,72.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FF0000").s().p("AgkCNQgEgEAAgEQAAgHAIgGIANgKQAggiAAhIQAAgbgIgdQgIghgPgSIgNgNQgJgJAAgFQAAgFAEgEQADgEAFAAQAEAAAGAEQAbATARAsQAPAoAAAlQAABrg7AhQgGADgEAAQgFAAgDgDg");
	this.shape_104.setTransform(324.2,73.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFF00").s().p("AhNBqQgFgGAAgIIAAggIAAggIABhxQAAgJAFgIQAHgJANABIAjACQAUADANAHQA9AeAAAtQAAATgNANQgNAOgZAKQAlAVATAWQAFAGAAAHQAAAHgGAGQgGAGgIAAQgHAAgHgGQgrgogygQIABAuQAAAIgFAGQgGAFgIAAQgJAAgGgFgAgrAEIAGAAQAjAAAPgIQAIgDAGgGQAGgGAAgEQAAgPgUgPQgSgOgWgCIgQgBg");
	this.shape_105.setTransform(309.5,71.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFF00").s().p("AhLBYQgfgaAAgpQAAgwAegnQAigsAzAAQAxAAAYAWQAZAXAAAtQAAAvgbAnQghAugygBQgqAAgegXgAgsgqQgWAdAAAiQAAAYASAOQASAOAbAAQAeAAAVgeQATgcAAgjQAAgegNgLQgNgLggAAQgfAAgWAeg");
	this.shape_106.setTransform(288.3,72);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFF00").s().p("AhIBxQgFgFAAgIIAAiiIAAgQIAAgRQABgJAFgFQAGgGAJAAQAEAAAFADIAegFIAYgBQAQAAAYAHQAfAIAAALQAAAIgGAGQgFAGgIAAIgHgCQgTgFgaAAIgTABIgZADIAAAvQAWgFAOAAQAZAAAUACQARACABARQgBAIgFAFQgGAFgIAAIgXgBIgUgBQgLAAgZAHIAABZQAAAIgHAFQgGAGgJAAQgIAAgFgGg");
	this.shape_107.setTransform(268.3,71.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FF0000").s().p("AATCNQg7ghAAhrQAAglAPgoQASgsAbgTQAFgEAEAAQAFAAADAEQAEAEAAAFQAAAFgIAJIgNANQgQASgIAhQgIAdAAAbQAABIAgAiIANAKQAIAGAAAHQAAAEgEAEQgDADgFAAQgEAAgGgDg");
	this.shape_108.setTransform(254.3,73.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FF0000").s().p("Ag2BBIAAhiIAAgOIABgPQAAgOAMAAQAOAAAAAYQAbgaAgAAQAMAAAGAIQAFAJAAARIAAAKQgBASgNAAQgMAAAAgOIgBgKIAAgMQgWADgNAKQgNAJgIASIAABNQAAAOgOAAQgMAAAAgOg");
	this.shape_109.setTransform(233.4,75.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FF0000").s().p("AgpA8QgUgTAAghQgBgfARgZQATgdAjAAQAcAAAPAaQALAVAAAeQAAAegQAWQgTAagcAAQgYAAgRgSgAgYgcQgKAQAAAUQAAAUAMAMQAJAJANAAQANAAALgLQAMgMABgUQACg2ggAAQgUAAgLAUg");
	this.shape_110.setTransform(218.1,75.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFF00").s().p("ABXBqQgEgGgDgQIgGgZQgFgXgNhMIgdBUIgIAbQgFARgGAKQgFALgKAAQgIgBgEgIIgHgPIgDgRQgOgygLg4IgGAaIgSBJQgBAOgGAaQgEAKgKABQgHAAgEgGQgEgDAAgHQAAgYAKgiIAPg4IAJgtQAGgfAHgJQAGgJAIAAQAJABAFAKQAGANAGAnQAHAuAQA1QAUg1AQg8IAEgUQACgMAFgIQAFgKAJAAQANgBAGAYIAFAhQAJA/AMAtIAHAZQAFAUABAEQgBAGgEAEQgFAFgGgBQgHABgFgJg");
	this.shape_111.setTransform(189.5,72);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFF00").s().p("AhHBYQgdgaAAgoQAAgwAdgoQAggsAwAAQAugBAXAWQAXAVAAAvQAAAwgaAnQgfAugvgBQgoAAgcgXgAgxgvQgWAgAAAlQAAAcAUAQQATARAdgBQAhAAAXgiQAUgfAAgmQAAghgQgPQgOgNgiABQgiAAgYAig");
	this.shape_112.setTransform(165.1,72);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFF00").s().p("AhYBwQgEgFAAgFQAAgPADgeQACgeAAgPIgBgWIAAgYIABgiIABghQAAgGAFgEQADgEAHAAQAFAAAEAEQAEAEAAAGIgCAiIgBAiIAAAjIA9gLQAkgHAZAAQABgUABgpQgBgLAEgLQAEgPAJAAQAGAAAEAEQAEADAAAHIgCAFQgBAHAAALIAAANIAAAMQAAAPgCAcQgDAaAAAOIABAhIADAgQAAAGgFAEQgDAEgHAAQgFAAgEgEQgEgEAAgGIgCggIgBghIAAgUQgXAAgjAHIg8ALQABANgDAXQgDAYAAANQAAAFgEAFQgEAEgFAAQgGAAgEgEg");
	this.shape_113.setTransform(142.5,71.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFF00").s().p("AAgBvQgGgEAAgGQgGgRgCgLIgLg9QgHglgCgXQgNAugOAgQgRAlgFAWQACADAAADQAAAGgGAEQgFAEgGAAQgTAAAAgRIgFgSIgPhFQgJgigXhCIgBgGQAAgNAPAAQAKAAAEAKQADAFAIAZQAIAZAJAkIANA+QAPgjAPgyIAOgqQANggALAAQAKAAAEAKQAFANAGAuQACAXAHAfIAMA4QATguAdhMIAHgbQAEgRAGgJQAFgIAIAAQAPAAAAAOIgFAPIgGAPIgHAZIgqBlQgGARgOAgQgGAKgKAAQgGAAgFgEg");
	this.shape_114.setTransform(116.7,72.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FF0000").s().p("AgkCNQgEgEAAgEQAAgHAIgGIANgKQAggiAAhIQAAgbgIgdQgIghgPgSIgNgNQgJgJAAgFQAAgFAEgEQADgEAFAAQAEAAAGAEQAbATARAsQAPAoAAAlQAABrg7AhQgGADgEAAQgFAAgDgDg");
	this.shape_115.setTransform(87.4,73.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFF00").s().p("AhLBYQgfgaAAgpQAAgwAegnQAigsAzAAQAxAAAYAWQAZAXAAAtQAAAvgbAnQghAugygBQgqAAgegXgAgsgqQgWAdAAAiQAAAYASAOQASAOAbAAQAeAAAVgeQATgcAAgjQAAgegNgLQgNgLggAAQgfAAgWAeg");
	this.shape_116.setTransform(70.1,72);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFF00").s().p("AgNBnQgHgGABgIIAAgGIABgGIgBgUIgBgUQAAgTgDgfIgEgzIgHAAQggAAgTgFQgPgEAAgPQAAgHAFgGQAGgGAKAAIAWADIAXABIAaAAIAZAAIAfABIAhACQAIAAAHAFQAFAGAAAIQAAAIgFAFQgHAGgIAAIgjgCIgigBIAEA5QADAkAAAVIABAPIABAOQAAAKgEAJQgHALgKAAQgHAAgGgFg");
	this.shape_117.setTransform(48.6,71.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FF0000").s().p("AATCNQg7ghAAhrQAAglAPgoQASgsAbgTQAFgEAEAAQAFAAADAEQAEAEAAAFQAAAFgIAJIgNANQgQASgIAhQgIAdAAAbQAABIAgAiIANAKQAIAGAAAHQAAAEgEAEQgDADgFAAQgEAAgGgDg");
	this.shape_118.setTransform(33.4,73.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FF0000").s().p("Ag1AnQAAgMANgBIAagBIAbAAIAcABQAMAAAAAMQAAANgMAAIgcgBIgbAAIgNABIgNAAQgNAAAAgMgAgzgcQgDgEAAgFQAAgKAMgDIAUAAIBBAAQAMAAAAANQAAAMgMAAIhCAAIgJAAIgKABQgFAAgEgEg");
	this.shape_119.setTransform(400,30.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFF00").s().p("AgNBnQgGgGAAgIIAAgGIABgGIgBgUIgBgUQAAgTgDgfIgEgzIgHAAQggAAgSgFQgQgEAAgPQAAgHAFgGQAGgGAJAAIAXADIAXABIAZAAIAaAAIAfABIAhACQAIAAAHAFQAFAGAAAIQAAAIgFAFQgHAGgIAAIgjgCIgigBIAEA5QADAkAAAVIABAPIABAOQAAAKgEAJQgHALgKAAQgHAAgGgFg");
	this.shape_120.setTransform(374.5,29.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFF00").s().p("Ag/BWQgUgWgBgfQAAguAqgyQAjgqAkABIAMAAIAJABQAFgFAKgBQAOAAADARQACAMABAPQAAAHgFAHQgFAHgKAAQgNAAgGgOQgDgFgCgCQgDgBgJAAQgSAAgWAcQghAmAAAhQAAAQALALQAKALAOAAQANAAAPgHIAWgOQALgIAFAAQAJAAAFAHQAGAFAAAIQAAAJgIAFQgnAhgnABQgfgBgXgXg");
	this.shape_121.setTransform(355.4,29.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFF00").s().p("AhBBsQgPgNgBguQABgTACglQADgmAAgTIgBgPIgCgOQAAgWAUAAQAGAAAGAEQAPgEAPgCQAPgDAMAAQAkAAAWAJQANAFgBANQAAAHgEAGQgGAGgJAAIgGgBQgXgGgWAAIgVACIgaAFIgBA4IA2gFIAigDQAJAAAFAFQAHAGgBAIQAAAQgSACIgiADIg7AGIgBAdQAAAcADADQACACAQAAIAaAAIAagBIAJAAIAIgBQAIAAAFAEQAIAGAAAJQgBAQgRADQgOADgrAAQguAAgOgNg");
	this.shape_122.setTransform(337.7,29.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFF00").s().p("Ag8BiQgegVAAgbQAAgWAUAAQAUAAAAAWQAAAIAPAKQAOAJANAAQAFAAACgTIACgsQACgfAAgwIAAgJIgDAAIgQAAIgRgBQgIAAgGgFQgGgFAAgJQAAgUAZAAIAOABIAOAAIAagBIAbgBQAmAAAAAVQAAAIgFAFQgGAHgJAAIgIgBIgJAAIgLAAIAAAKQAABkgOAvQgLAigaAAQgbAAgZgSg");
	this.shape_123.setTransform(318.7,30);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFF00").s().p("AhFBrQgHgHAAgIIAAiVIgBgTQAAgLABgHQACgOAXgDQALgDAZAAQAZAAAZASQAdAUAAAeQAAAQgGALQgFAJgMAKQAOAGALAOQAMAPAAAPQAAATgVAQQgOAMgPAFQggANgyAAQgIAAgHgIgAglBMQAYgCAbgIQAZgHAAgIQAAgLgQgIQgMgHgLgBIglgBgAglgtIAAAeQAMABAHAAQAqgEAAgcQAAgKgMgKQgNgJgOAAIgWAAg");
	this.shape_124.setTransform(300.2,29.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFF00").s().p("AhKBYQgggaAAgpQAAgwAegnQAigsAzgBQAxABAYAWQAZAXAAAtQAAAwgbAmQghAugygBQgqAAgdgXgAgsgqQgWAdAAAiQAAAXATAPQARAOAbAAQAeAAAVgeQATgcAAgjQAAgdgNgMQgNgLggAAQgfAAgWAeg");
	this.shape_125.setTransform(279,29.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFF00").s().p("AgNBnQgHgGAAgIIABgGIABgGIgBgUIgBgUQAAgTgDgfIgEgzIgHAAQggAAgTgFQgPgEAAgPQAAgHAFgGQAGgGAKAAIAWADIAXABIAaAAIAYAAIAgABIAhACQAJAAAFAFQAGAGAAAIQAAAIgGAFQgFAGgJAAIgigCIgjgBIAEA5QADAkAAAVIABAPIABAOQAAAKgFAJQgFALgLAAQgHAAgGgFg");
	this.shape_126.setTransform(244.9,29.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFF00").s().p("Ag+BWQgWgWABgfQAAguApgyQAjgqAkABIALAAIAJABQAGgFAJgBQAOAAAEARQACAMAAAPQAAAHgDAHQgGAHgKAAQgNAAgGgOQgDgFgDgCQgCgBgJAAQgSAAgWAcQghAmAAAhQAAAQAKALQALALAPAAQAMAAAPgHIAVgOQALgIAGAAQAIAAAHAHQAFAFAAAIQAAAJgHAFQgnAhgnABQgggBgWgXg");
	this.shape_127.setTransform(225.9,29.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFF00").s().p("AhCBsQgOgNAAguQAAgTACglQADgmAAgTIgCgPIgBgOQAAgWAUAAQAGAAAFAEQARgEAPgCQAOgDANAAQAjAAAVAJQANAFABANQAAAHgGAGQgFAGgJAAIgGgBQgXgGgVAAIgXACIgZAFIgCA4IA3gFIAigDQAJAAAFAFQAGAGABAIQAAAQgSACIgiADIg8AGIgBAdQAAAcADADQACACAQAAIAZAAIAbgBIAIAAIAIgBQAJAAAGAEQAGAGAAAJQAAAQgQADQgOADgsAAQguAAgPgNg");
	this.shape_128.setTransform(208.1,29.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFF00").s().p("AhNBqQgFgGAAgIIAAggIAAggIABhxQAAgJAFgIQAHgJANABIAjACQAUADANAHQA9AeAAAtQAAATgNANQgNAOgZAKQAlAVATAWQAFAGAAAHQAAAHgGAGQgGAGgIAAQgHAAgHgGQgrgogygQIABAuQAAAIgFAGQgGAFgIAAQgJAAgGgFgAgrAEIAGAAQAjAAAPgIQAIgDAGgGQAGgGAAgEQAAgPgUgPQgSgOgWgCIgQgBg");
	this.shape_129.setTransform(189.7,29.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFF00").s().p("AhDBnQgFgGAAgIQAAgIAGgFQAGgGAJAAQAKAAARgCIAAhAQAAgmACgjIgeABQgIAAgGgFQgGgGAAgIQAAgIAFgGQAFgEAIgBIAqgBQAaAAAqAGQARACAAARQAAAJgHAFQgFAFgGAAIgmgEQgCAaAAAqIAABAIAngBQAIAAAFAGQAGAGAAAIQAAAHgGAGQgFAGgJAAIgYAAIgZAAQgIAAgTADQgUACgJAAQgIAAgHgFg");
	this.shape_130.setTransform(172,29.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFF00").s().p("AgsByQgQgDgJgGQgJAAgFgGQgGgGAAgIIABgqIACgrIgBguIgBgvQAAgIAIgHQAHgIAJAAQAFAAASAJIAaALQApAOAdAcQAjAiAAAnQAAAZgMAWQgMAWgVAOQgXAPgqAAQgKAAgOgDgAgxBIQAGAEAHABQAHACAJAAQAeAAANgIQAMgIAIgOQAHgOAAgPQAAgigpgaQgMgJgugSg");
	this.shape_131.setTransform(154.3,29.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFF00").s().p("AhjBtQgFgGAAgIIAAgRIABgRIABgZIAAgZIAAgaIgBgbIgBgZIgBgaQgBgIAIgHQAHgGAJAAQALAAANASQA+BcA/A4IAAgVQABhFgCgYIgCgQIgBgPQAAgUAVAAQAXAAgBBIIAAAWIgBBYQAAAHgCAQQgDASgRAAQgKAAgNgLQg2gxhEhYIgBAsIABAiIAAAiQAAApgVAAQgJAAgHgGg");
	this.shape_132.setTransform(131.5,29.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFF00").s().p("AhDBnQgFgGAAgIQAAgIAGgFQAGgGAJAAQALAAAQgCIAAhAQAAgmACgjIgeABQgJAAgFgFQgGgGAAgIQAAgIAFgGQAFgEAIgBIAqgBQAaAAAqAGQARACAAARQAAAJgGAFQgGAFgGAAIgmgEQgCAaAAAqIAABAIAmgBQAJAAAFAGQAGAGAAAIQAAAHgGAGQgFAGgJAAIgYAAIgZAAQgIAAgTADQgUACgJAAQgJAAgGgFg");
	this.shape_133.setTransform(111.6,29.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FF0000").s().p("AAjBFIgFgfQgBgRAAgOIAAgMIABgOQAAgfgLAAQgQAAgOATQgNARgIAaIgBAOIAAANIAAANIABANQAAAGgDAEQgFAEgFAAQgHAAgEgEQgDgEAAgGIgBgNIgBgNIACgnIABgpIAAgNIgBgOQABgGAEgDQADgEAHAAQANAAABASIAAARQAYggAZAAQAWAAAJAUQAGANAAAaIAAAPIAAAMQAAALADATQAEATAAALQAAAHgFADQgDAEgHAAQgMAAgBgNg");
	this.shape_134.setTransform(88,32.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FF0000").s().p("AAxBKQgEgNgFggQgOACgYAFIglAIQgGASgSAkQgEAIgIAAQgFAAgFgEQgFgEAAgGQABgHAVgtQgDgEAAgEQAAgMAPgDQAPgeAZgnQAgg2AJAAQALAAAEAQIAJAwIAVBhIAIAWQAEAMABAEQAAAGgFAEQgFAEgFAAQgNAAgKghgAgRAKIAzgKIgMg2g");
	this.shape_135.setTransform(69.3,29.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.definition, new cjs.Rectangle(6.7,5.9,453.3,243.4), null);


(lib.goNext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.961)","rgba(255,255,255,0)","#2B2B2B"],[0,1,1],0,0.1,0,0,0.1,11.3).s().p("AhLAqQghgRABgYQgBgZAhgRQAfgSAsAAQAsAAAgASQAgARAAAZQAAAYggARQggASgsAAQgsAAgfgSg");
	this.shape.setTransform(22.8,8.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.502)").s().p("AhUhcICpBdIipBcg");
	this.shape_1.setTransform(25.1,20.4);

	this.blinker = new lib.general_buttoncolor();
	this.blinker.parent = this;
	this.blinker.setTransform(23.4,20.1,1.5,1.5,0,0,0,11.9,11.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(255,255,255,0.961)","rgba(255,255,255,0)","#2B2B2B"],[0,1,1],0,0.1,0,0,0.1,14.8).s().p("AhjA3QgqgXABgfQgBggAqgXQAqgYA5AAQA6AAAqAYQApAXAAAgQAAAfgpAXQgqAYg6AAQg5AAgqgYg");
	this.shape_2.setTransform(23.4,8.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(0,0,0,0.502)").ss(1,1,1,3,true).p("AAACxQhIAAg0g0Qg1g0AAhJQAAhIA1g0QA0g0BIAAQBKAAA0A0QA0A0AABIQAABJg0A0Qg0A0hKAAg");
	this.shape_3.setTransform(23.3,20.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(103,103,103,0.839)","rgba(134,134,134,0)"],[0.678,0.918],-0.8,0,0,-0.8,0,24.9).s().p("AitClQhEhFAAhgQAAhgBEhEQBEhEBiAAQBfAABCAwQBBAvAWCrQAVCskNAbQhiAAhEhEgAgICRQBGAAAygwIABgBIAEgDQA0g0AAhIQAAhJg0g0IgGgGIAAAAQgyguhEAAIgBgBIAAAAIgBAAIAAABQhEAAgyAuIgBABIgCACIgCABIAAAAIgBACQg1A0AABJQAABIA1A0IABABIACACQAzAxBGAAIAAAAIABAAIgBAAIAAAAQhGAAgzgxIgCgCIgBgBQg1g0AAhIQAAhJA1g0IABgCIAAAAIACgBIACgCIABgBQAyguBEAAIAAgBIABAAIAAAAIABABQBEAAAyAuIAAAAIAGAGQA0A0AABJQAABIg0A0IgEADIgBABQgyAwhGAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_4.setTransform(24.2,23.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.blinker},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.blinker},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.blinker},{t:this.shape_1},{t:this.shape}]},2).wait(1));

	// Layer 2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#33FFFF").s().p("AipCqQhGhHAAhjQAAhiBGhGQBGhHBjAAQBjAABHBHQBGBGAABiQAABjhGBHQhHBGhjAAQhjAAhGhGg");
	this.shape_5.setTransform(24.4,21.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0099FF").s().p("AipCqQhGhHAAhjQAAhiBGhGQBGhHBjAAQBjAABHBHQBGBGAABiQAABjhGBHQhHBGhjAAQhjAAhGhGg");
	this.shape_6.setTransform(24.4,21.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.5,46.7);


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


(lib.UI = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//Menu button -----------------------------------------
		this.btn_menu.addEventListener("click", openMenu.bind(this));
		
		//volume buttons -----------------------------------------
		this.vol_dwn.addEventListener("click", volDwn.bind(this));
		this.vol_up.addEventListener("click", volUp.bind(this));
		this.vol_mute.addEventListener("click", volMute.bind(this));
		
		//Nav buttons -----------------------------------------
		this.btn_goNext.addEventListener("click", openNext.bind(this));
		//this.btn_goBack.addEventListener("click", openPrev.bind(this));
		
		//background music ---------------------------------------
		var bgm = createjs.Sound.play('bgmInd',{loop:-1});
		
		//volume vars -----------------------------------------
		var mute= false;
		bgm.volume = 0.05;
		var prev_vol = bgm.volume;
		
		//Menu function -----------------------------------------
		function openMenu(){
		
		 window.open ("../miniMenu/miniMenu.html","_self");
		}
		
		//volume functions -----------------------------------------
		function volDwn()
		{
			createjs.Sound.volume = createjs.Sound.volume -0.1;
			if(!mute){
				bgm.volume -= 0.1;
				prev_vol = bgm.volume;
			}
			console.log(bgm.volume);
			console.log(prev_vol);
		}
		function volUp()
		{
			createjs.Sound.volume = createjs.Sound.volume +0.1;
			if(!mute){
				bgm.volume += 0.1;
				prev_vol = bgm.volume;
			}
			console.log(bgm.volume);
			console.log(prev_vol);
		}
		
		function volMute()
		{
			if(!mute){
				mute = true
				bgm.volume = 0;
			}
			else{
				mute = false;
				bgm.volume = prev_vol;
			}
			console.log(mute);
		}
		
		
		//Nav functions -----------------------------------------
		
		function openNext(){
		
		 window.open ("indirect_scene1.html","_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// mute
	this.vol_mute = new lib.vol_mute();
	this.vol_mute.parent = this;
	this.vol_mute.setTransform(31.8,2.1,1,1,0,0,0,15,14.1);
	new cjs.ButtonHelper(this.vol_mute, 0, 1, 2, false, new lib.vol_mute(), 3);

	this.timeline.addTween(cjs.Tween.get(this.vol_mute).wait(1));

	// main
	this.instance = new lib.Copyright("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-220.6,376.5);

	this.btn_goNext = new lib.goNext();
	this.btn_goNext.parent = this;
	this.btn_goNext.setTransform(-1.7,335.3);
	new cjs.ButtonHelper(this.btn_goNext, 0, 1, 2, false, new lib.goNext(), 3);

	this.vol_up = new lib.vol_pos();
	this.vol_up.parent = this;
	this.vol_up.setTransform(-6.7,2.6,1,1,0,0,0,9,7);
	new cjs.ButtonHelper(this.vol_up, 0, 1, 2, false, new lib.vol_pos(), 3);

	this.vol_dwn = new lib.vol_neg();
	this.vol_dwn.parent = this;
	this.vol_dwn.setTransform(-28.7,2.6,1,1,0,0,0,9,7);
	new cjs.ButtonHelper(this.vol_dwn, 0, 1, 2, false, new lib.vol_neg(), 3);

	this.btn_menu = new lib.menu_main();
	this.btn_menu.parent = this;
	this.btn_menu.setTransform(-89.6,2.6,1,1.143,0,0,0,23.4,10.5);
	new cjs.ButtonHelper(this.btn_menu, 0, 1, 2, false, new lib.menu_main(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.5,1,1).p("AAYBrQgBgLgUgUQgQgRgKAAIAAh1QAKAAASgTQATgTAAgKg");
	this.shape.setTransform(-47.7,2.3,0.687,0.681);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AADBMQgQgRgKAAIAAh1QAKgBASgSQATgTAAgJIAADTQgBgKgUgUg");
	this.shape_1.setTransform(-47.7,2.3,0.687,0.681);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s("#000000").ss(1.5,1,1).rr(-0.75,-3.45,1.5,6.9,0.2);
	this.shape_2.setTransform(-52.2,2.3,1,1.003);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1.5,1,1).p("AAHAAQAAAJgHAHQgCAEgEACIAAgrQAEACACAEQACACACACQADAFAAAGg");
	this.shape_3.setTransform(-43.2,2.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgGgUQAEABACAEIABAAIADAFQADAEAAAGQAAAJgGAHIgBAAQgCAEgEABg");
	this.shape_4.setTransform(-46.5,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.btn_menu},{t:this.vol_dwn},{t:this.vol_up},{t:this.btn_goNext},{t:this.instance}]}).wait(1));

	// vol_frame
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s("#000000").ss(1.5,1,1).rr(-33,-12,66,24,4.9);
	this.shape_5.setTransform(-24.7,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.UI, new cjs.Rectangle(-283.9,-13,331.7,399), null);


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


// stage content:
(lib.indirect_scene0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene0:0,scene0_repeat:200});

	// timeline functions:
	this.frame_6 = function() {
		playSound("indirectobjecttowhomforwhom");
	}
	this.frame_93 = function() {
		playSound("indirectobjectshowever");
	}
	this.frame_199 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_214 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(6).call(this.frame_6).wait(87).call(this.frame_93).wait(106).call(this.frame_199).wait(15).call(this.frame_214).wait(1));

	// Content
	this.instance = new lib.definition();
	this.instance.parent = this;
	this.instance.setTransform(275.5,200.1,1,1,0,0,0,233.3,140.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(215));

	// Bk
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.instance_1 = new lib.Bk("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275,191);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.UI}]}).wait(215));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(285.6,201.6,530.9,398.7);
// library properties:
lib.properties = {
	id: '49D07A701B134048AA0A0E71E11A041E',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/bgmInd.mp3", id:"bgmInd"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/indirectobjectshowever.mp3", id:"indirectobjectshowever"},
		{src:"sounds/indirectobjecttowhomforwhom.mp3", id:"indirectobjecttowhomforwhom"}
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
an.compositions['49D07A701B134048AA0A0E71E11A041E'] = {
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