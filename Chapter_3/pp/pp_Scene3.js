(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	manifest: [
		{src:"sounds/afterifusehadandnotwouldhave.mp3?1498239563006", id:"afterifusehadandnotwouldhave"},
		{src:"sounds/beforeyoufinishthisprogram.mp3?1498239563006", id:"beforeyoufinishthisprogram"},
		{src:"sounds/boo.mp3?1498239563006", id:"boo"},
		{src:"sounds/futureperfecttense.mp3?1498239563006", id:"futureperfecttense"},
		{src:"sounds/indescribingtwopastactions.mp3?1498239563006", id:"indescribingtwopastactions"},
		{src:"sounds/mo_funky.mp3?1498239563006", id:"mo_funky"},
		{src:"sounds/mostcommonverberrorsoccur.mp3?1498239563006", id:"mostcommonverberrorsoccur"},
		{src:"sounds/ohbaby.mp3?1498239563006", id:"ohbaby"},
		{src:"sounds/pastperfecttense.mp3?1498239563006", id:"pastperfecttense"},
		{src:"sounds/perc_techno.mp3?1498239563006", id:"perc_techno"},
		{src:"sounds/perfectformoftheverb.mp3?1498239563006", id:"perfectformoftheverb"},
		{src:"sounds/presentperfecttense.mp3?1498239563006", id:"presentperfecttense"},
		{src:"sounds/real_disco.mp3?1498239563006", id:"real_disco"},
		{src:"sounds/relax.mp3?1498239563006", id:"relax"},
		{src:"sounds/theformulausetheappropriate.mp3?1498239563006", id:"theformulausetheappropriate"},
		{src:"sounds/thesatrequiresaknowledge.mp3?1498239563006", id:"thesatrequiresaknowledge"},
		{src:"sounds/theverbformindicatingbefore.mp3?1498239563006", id:"theverbformindicatingbefore"},
		{src:"sounds/theverbformindicatingpreceded.mp3?1498239563006", id:"theverbformindicatingpreceded"},
		{src:"sounds/theverbindicatingthatanaction.mp3?1498239563006", id:"theverbindicatingthatanaction"},
		{src:"sounds/thewordperfectmeanscomplete.mp3?1498239563006", id:"thewordperfectmeanscomplete"},
		{src:"sounds/thissoundsmoredifficultthanitis.mp3?1498239563006", id:"thissoundsmoredifficultthanitis"},
		{src:"sounds/UnderstandingthePerfectFormoftheVerb.mp3?1498239563006", id:"UnderstandingthePerfectFormoftheVerb"},
		{src:"sounds/whistles_crowd.mp3?1498239563006", id:"whistles_crowd"},
		{src:"sounds/yeah_calm.mp3?1498239563006", id:"yeah_calm"},
		{src:"sounds/youhadlearnedtheperfecttense.mp3?1498239563006", id:"youhadlearnedtheperfecttense"},
		{src:"sounds/youhavelearnedtheperfectform.mp3?1498239563006", id:"youhavelearnedtheperfectform"}
	]
};



// symbols:



(lib.staticbuffyfArm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6B4E32").ss(0.1,1,1).p("AhnB8QADgCACgDQAWgaAQgnQABgGABgFQADgPAEgPQAKgcAQgXQAJgJAJgJQAbgeAogXQAMgGANgGQBKgiAUhKQABgEABgDQACgJADgHAlOAnQAoALAlANQAUADAUAEQAsAIAhASQADABACACQASAKAOAPQALALAIANQABAAAAACQAPAWAEAWAlugUQABABAAABQAAgBgBAAAlOAnQgGgBgGgCAltgSQANAeASAbAFvg+QgFAPgEAQQgKAdgLAbQgRArgVAoQgTAkglAcQgjAbgoATQgpAUgsAP");
	this.shape.setTransform(63.5,38.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6B4E32").ss(0.1,1,1).p("AEBj7QABgBAQguQARgtBBgaQADgBADAAQAHgCAIgCQAugLAwAPQAxAPAYAuQAWApgCAvQgCAygPAtQgPAvgsANQgjALgZAZAnGiNQAAgRAEgOQABgEABgDQASguAxACQArACgFA3QAQgEASACQA1AFgdA3QgSAhAIA4QAAAAAAABAokhQQAAgDAAgCQgCgmAVgcQAWgcAcAAQAMABANAFAokhQQABAIABAJQADALAJAGAoiANQgEgGgEgHQgUgpAagnACaD+QgbAXgeATQgaARgcAXQgIAHgJAHQgbAYgmAEQgvAGghgaQglgdgcghQgegjgpgXQgqgYgdgiQgcgggigWQgFgDgFgDQgSgKgSgBQgYgCgVgHQgWgHgTgNQgogaAOgpQABgDABgDAoWAZQgHgFgFgH");
	this.shape_1.setTransform(56.4,38);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BE9670").s().p("Ah3FmQglgdgcghQgegjgpgXQgqgYgdgiQgcgggigWIgKgGQgSgKgSgBQgYgCgVgHQgWgHgTgNQgogaAOgpIACgGIgCAGIgIgNQgUgpAagnIACARQADALAJAGQgJgGgDgLIgCgRIAAgFQgCgmAVgcQAWgcAcAAQAMABANAFIAEABQgEANAAAPIAAADIAAgDQAAgPAEgNIACgHQASguAxACQArACgFA3QAQgEASACQA1AFgdA3QgSAhAIA4IAAABIABABQANAeARAbIgLgDIALADQApALAlANIAoAHQAsAJAhARIAFADQASAKAOAPQAKALAJANIABACQANAWAEAWQgEgWgNgWIgBgCQgJgNgKgLIAFgFQAWgaAOgnIACgLQADgPAEgPQAJgcARgWIARgTQAegeAogWIAZgNQBKgiAUhJIACgIIAFgQIARgvQARgtBBgaIAGgBIAPgEQAugLAwAPQAxAPAYAuQAWApgCAvQgCAygPAtQgPAvgsANQgjALgZAZIAKgfIgKAfQgJAegLAaQgRArgVAoQgTAkglAcQgjAbgoATQgqAVgrAOQgbAXgeATQgaARgcAXIgRAOQgbAYgmAEIgQABQglAAgbgVgAoWAZQgHgFgFgHQAFAHAHAFg");
	this.shape_2.setTransform(56.4,38);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,114.9,78);


(lib.staticbuffybArm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6B4E32").ss(0.1,1,1).p("ACyhQQAPA8gZAsQgqBQhpAHQhjAHhEgvQg7gqAlhYQANgaAPga");
	this.shape.setTransform(19.2,42.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6B4E32").ss(0.1,1,1).p("AHmgyQABgBABgBQAUgMAUANQAkAVARAgQACAEABAEQAJAUgOAHQACACABADQAJATgBAXQgBASgNAMQgQAPgWAFQAMAegKAhQgFARgYgDQgRgDgNgHQgDAQgPAOQgmAjgsgYQgegRAAgnQgUASgOgLQgTgRgbgPQgtgaAggrQARgYAEgaQACgSgEgTQAOALAMANQAGAGAEAHQAFAHADAIApNA9QAHgNAHgNQAYgoAigkQAhgiAkggQAjghAogbQAogcAmgeQAjgdA1AEQAeACAeACQARABASABQAxACAwAIQAIABAHACQAjAHAiAKQApAMArAPQAQAFARAGQAcAJAdAHQAQAEAPAFQAfAJAcAKQArAQArASQApASAaAeQgdATAdAhQABAAAAAAAEVAFQgBgBgCAAQgBgBgCgBQgVgNgbgIQgSgGgTgEQgcgHgdgFQgvgHgxABQgRAAgQAAQgcAAgdAAQgdAAgcgCQgRAMgQAOQgMAKgMALQgYAVgZAXQgJAJgKAJQgQAPgOARQgOASgLAUAFfC6QADgCADgDQAfggALgkQABgHACgFQAGgfgcALQgmAOgGAnAJDAlQgFgKgHgIQgJgLgKgGQgbgQghAQQgBAAAAAAQAAAAAAAAQgBABgCABQgWANgGAZQgDAOACASQArgCAcApQAIAKAEALAHIBSQgBgEAAgEQgFAAgFABQgiAEgJAWQgBAFgCAGQAAABAAAAQgBAJACAKQABAAAAAAQAqABAUAYQAVAXgDAVAhygxQgRgBgQgB");
	this.shape_1.setTransform(64.1,25.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BE9670").s().p("Ao9DkQg8gqAlhaIAcg1IAPgZQAYgpAigjQAhgjAjggQAkghAogbQAogbAlgfQAkgdA1AFIA7ADIAjACQAxADAuAIIAQADQAkAGAjALQApAMAqAOIAhALIA5ARIAfAIQAfAJAcAKQArAQArATQApARAaAeQgOAKAAANQAAAOAPARQgPgRAAgOQAAgNAOgKIADgBQAUgMAUAMQAjAWARAhIAEAIQAIASgNAHIACAFQAJAUgBAXQAAASgOAMQgQAOgWAFQgEgLgHgKIgBgBQgbgmgoAAIAAAAIAAAAIgDAAIgBAAIABAAIADAAIAAAAIAAAAQAoAAAbAmIABABQAHAKAEALQAMAegKAiQgFAQgYgDQgRgCgNgHIAAgGQAAgSgRgUQgVgZgqAAIAAAAIgBAAIgBgOIAAgFIABgBIACgMQAKgVAigFIAJgBIABAIIgBgIIgJABQgiAFgKAVQgCAGgBAHIAAAFIABAOIABAAIAAAAQAqAAAVAZQARAUAAASIAAAGQgCAPgQAPQglAigtgYQgegQABgnQgVASgNgMQgUgRgagPQgtgZAfgsQARgYAEgaQACgSgEgQQAOAKANAMIAJAMQAFAHADAIQgDgIgFgHIgJgMQgNgMgOgKIgCgCIgDgCQgWgPgagHIgmgLQgcgHgdgEQgvgHgwAAIgjABIg4AAIg5gCIghgDIAhADIghAZIgXAVIgyAsIgTASQgQAQgOARQgOARgKAUQAKgUAOgRQAPA8gYAuQgrBQhoAHIgaABQhVAAg6gpgAF7CjIgGAGIAGgGQAeggALgjQgLAjgeAggAGRA/QgmAPgGAnQAGgnAmgPIABAAQAGgDAFAAIAAAAIAAAAQAOAAgDAVIgBACIABgCQADgVgOAAIAAAAIAAAAQgFAAgGADIgBAAgAHcA4IgBgMQAAgLACgJQAGgYAXgMIACgBIAAAAIABgBQAhgSAcASQAJAGAJAJQAHAJAGAJQgGgJgHgJQgJgJgJgGQgcgSghASIgBAAIAAABIgCABQgXAMgGAYQgCAJAAALIABAMgAhdhCIAAAAg");
	this.shape_2.setTransform(61.9,26.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,-1,124.3,55.9);


(lib.static_rippedfinishline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AxDGHQAngBAfAYQAeAXAUAeQARAaAWAWQAXAXAigIQAlgIAigRQAmgRAmALQAcAJATAZQAJANARgIQAggQAZgXQAZgZAkAAQAmgBAkgBQAkgCAkgDQAkgEAigLQAjgMAkgKQAjgLAZgZQAfAnAjgcQAcgVAGArQgVAEgWAIQgUAHgDAaQgCAOgKAKQgLgHgJgLQgKgNgSAGQg5AVg5AYQgzAWg1gSQhDgXg/AXQgVAIgBAXQgCA3g1ADQg8AEgrgpQgRgRgaAGQgmAIgfAXQgcAXgiACQgrACgjgTQgQgJgOgOQgYgZgRgfQgUgmgmgQQgRgHgSgCQgngDgdgYQgHgGgFgJQgNgXgZAEQgpAGglAVQgjAUgmAIQghAIgjgKQgYgIgaAFQggAFhIAMQAkgIAcgWQARgNABgSQADgcAkAJQAmAJAigIQAigJAegTQAfgUAigOQAmgPAkAGQAnAGAPAiQAKAVANAMQAGAEAHAAQAmACAkgCgATzoIQhFA7hfgHQhAgEguA6QglAwgmArQgmArg1ApQhEA1hCA3QgtAkgwAgQghAWggASQgGADgGADQgMAFgLADQgfAHgfgEQAfAGAiAbQAHAdAEAHQANgSASgHQAbgJASAYQAlhCA6g8QBvh0CLhNQASgKAYABQAXACAOgXQAig2AvgXQAZgLAegEQBggKBOhFQArgnAQArQAvgqBCgGQAtgDAmAuQAwgCAZgXQgogHgVghQgPgXAPgQQgOgHgPgEQgagIgKgZQgnAigyAHQhBAIg4ATQgbAJgWATg");
	this.shape.setTransform(165.2,61.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF2B2B").s().p("AvkJYQgQgJgOgOQgYgZgRgfQgUgmgmgQQgRgHgSgCQgngDgdgYQgHgGgFgJQgNgXgZAEQgpAGglAVQgjAUgmAIQghAIgjgKQgYgIgaAFIhoARQAkgIAcgWQARgNABgSQADgcAkAJQAmAJAigIQAigJAegTQAfgUAigOQAmgPAkAGQAnAGAPAiQAKAVANAMQAGAEAHAAQAmACAkgCQAngBAfAYQAeAXAUAeQARAaAWAWQAXAXAigIQAlgIAigRQAmgRAmALQAcAJATAZQAJANARgIQAggQAZgXQAZgZAkAAIBKgCQAkgCAkgDQAkgEAigLQAjgMAkgKQAjgLAZgZQAfAnAjgcQAcgVAGArQgVAEgWAIQgUAHgDAaQgCAOgKAKQgLgHgJgLQgKgNgSAGQg5AVg5AYQgzAWg1gSQhDgXg/AXQgVAIgBAXQgCA3g1ADQg8AEgrgpQgRgRgaAGQgmAIgfAXQgcAXgiACIgJAAQgmAAgfgRgAH3AbQgigbgfgGQAfAEAfgHQALgDAMgFIAMgGQAggSAhgWQAwggAtgkQBCg3BEg1QA1gpAmgrQAmgrAlgwQAug6BAAEQBfAHBFg7QAWgTAbgJQA4gTBBgIQAygHAngiQAKAZAaAIQAPAEAOAHQgPAQAPAXQAVAhAoAHQgZAXgwACQgmgugtADQhCAGgvAqQgQgrgrAnQhOBFhgAKQgeAEgZALQgvAXgiA2QgOAXgXgCQgYgBgSAKQiLBNhvB0Qg6A8glBCQgSgYgbAJQgSAHgNASQgEgHgHgdg");
	this.shape_1.setTransform(165.2,61.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,332.5,125.5);


(lib.letters = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAVAhIgEgUIgRADIgPADIgKAYQgCAEgEAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgEAJgUIgBgDQAAgFAGgCIATgeQANgXADAAQAFgBACAIIAEAVIAKAqIADAKIACAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgGAAgFgOgAgHAEIAVgEIgFgXg");
	this.shape.setTransform(4.5,8.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcAwQgDgCAAgDIAAgTIACgYIABgaIABgRQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAIgDALAAQAJAAALAIQAMAIAAANQAAARgNAHQAJAEAFAFQAFAFAAAGQAAAHgIAIQgGAFgHACQgMAGgWAAQgDAAgCgDgAgSAZIAAANQARgBAIgEIAJgFQADgEAAgBQAAgDgIgEIgLgEIgFgBIgDAAIgCAAIgIgBIAAAPgAgPglIgBAMIgBAYIAKABQAHgBAHgFQAGgGAAgJQAAgGgHgFQgGgFgGAAIgJAAg");
	this.shape_1.setTransform(4.2,8.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZAmQgJgKAAgMQAAgUASgXQAPgSANAAIAGAAIAEABQADgEAEAAQADAAACAGIABAMQAAAEgBACQgCACgDAAQgFAAgCgFIgDgFIgHAAQgIAAgKAOQgPASAAAQQAAAIAFAFQAGAHAHAAQAEgBAIgDIAKgHQAEgDACAAQABAAAAAAQABAAABABQAAAAABAAQAAABAAAAQABAAAAABQABABAAAAQAAABAAAAQAAABAAAAQAAADgCADQgRAPgPgBQgNABgJgLg");
	this.shape_2.setTransform(3.9,8.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSAzQgIgCgDgDIgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAAAIABgUIABgUIgBgUIAAgXQABgCACgDQACgDADAAQACAAAIAEIALAGQARAGANAMQAOAPAAAQQAAALgEAKQgGAKgJAGQgJAHgRAAIgKgBgAgWgQIAAAQIgCAjIACABQAGADAIAAQANAAAGgEQAGgEAEgHQADgIAAgHQABgQgUgNQgFgEgXgKg");
	this.shape_3.setTransform(4.7,8.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaAwQgHgFAAgVIAAgJIABgKIgBgDIABgCIACgbIgBgHIgBgHQAAgHAHAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABAAIAOgDIALgBQAPAAAJAEQAEACABAEQAAABgBAAQAAABAAABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIgBgBQgMgDgJAAIgKABIgNADIABAHIgBAYIAagCIAPgCQAAAAABAAQAAAAABABQAAAAABAAQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAEgGAAIgPACIgbACIAAAJIgBAHQAAAOACADQABACAJAAIAKgBIAMAAIADAAIAEgBQAHAAAAAHQAAAFgFABQgHACgRAAQgUAAgFgGg");
	this.shape_4.setTransform(4.1,8.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdAzQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIAAgmIABgkIAAgIIgBgIQAAgDACgCQABgBAAAAQABgBAAAAQABAAAAAAQABAAABAAIAEABIAOgCIAJgBQAHAAAJACQANADAAAFQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgCACgDAAIgCgBQgIgDgNAAIgIABIgNACIAAAbQAMgDAGAAIATABQAGABAAAGQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAIgKAAIgIAAQgEAAgOADIgBAsQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBg");
	this.shape_5.setTransform(4.1,8.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfArQgIgJAAgRQAAgRAIgPQAHgSANgKQAIgIAHAAQAGABAJADQALAFAAAFQABADgCACQAAABgBAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgFgCQgKgFgGgBQgEABgEAFIgIAIQgOATAAAWQAAAMADAEQAEAFALAAQAKAAAIgHQAJgIADgNQgSABgKAFIgCABQgEAAgCgCQgBgCAAgDQAAgEADgCQAMgGAiAAQAAAAABAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAAAQAAAAABAAQAAABAAAAQAAABAAAAQAAAFgDACQgFATgMAMQgMAMgQAAQgQgBgHgIg");
	this.shape_6.setTransform(4.3,8.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgmAxQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgUIABgUIAAgJIAAgLIAAgPIABgOQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABgBQAAAAAAAAQABAAABAAQAAgBABAAQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQABABAAAAQAAABAAAAQAAABAAABIgBAPIAAAPIAAAOIAagDQAQgDALgBIABgaIABgKQACgHAEAAIAEABQABABAAABQAAAAABABQAAAAAAABQAAAAAAABIAAACIgBAJIAAAFIAAAFIgBATIgBARIAAAPIABAPQAAAAAAABQAAAAAAABQgBAAAAABQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAgBgBAAQAAgBAAAAQAAgBAAAAIgBgPIAAgPIAAgJQgLABgPADIgaAEIgBARIgBAQQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBABAAAAQgBAAAAgBQgBAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_7.setTransform(4.9,8.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbAuQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQAAgDACgCQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAIANgBIABgMIAAgLIgBgKIACgjIgIAAIgJAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgCgCAAgDQAAgGAGgBIATAAQALAAATADQAGAAAAAGQAAADgDACQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgKgBIgKgBIgCAhIAAALIABALIgBALIAUgBQABAAAAAAQABABABAAQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAADgBACQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgLABIgKAAIgLABIgMABQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_8.setTransform(3.4,8.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZArQgMgJAAgLQAAgIAHAAQAGAAAAAIQAAAFAIAFQAHAFAGAAQADAAACggIABgkIAAgGIgDAAIgGgBIgIAAQgDAAgCgBQgBgCAAgDQAAgHAIAAIAHAAIAFABIALgBIAMAAQAPAAAAAHQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgCADgDAAIgEgBIgEAAIgHAAIAAAHQAAAugGAVQgEAOgJAAQgLAAgLgIg");
	this.shape_9.setTransform(4.2,9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

	// circle
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AAxg9QAUAaAAAjQAAAkgUAaQgVAbgcgBQgcABgUgbQgUgaAAgkQAAgjAUgaQAUgaAcgBQAcABAVAag");
	this.shape_10.setTransform(4,9);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.9,-3.5,15.9,22.5);


(lib.skiptomenu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AATApQgLAGgMAAQgMAAgHgFQgJgGgBgKQgEgYABgQQgBgMADgPQABgIAHAAQAEAAADADQACACAAAEIgBANIgBANIABAXQABALACAGIAGADIAFAAQAKAAANgDIAAgSIgBgPQAAgTACgOQABgIAIAAQADAAADACQADADgBADIgBAhIAAARIAAATIAAAGIAAAGQABAEgDACQgDADgDAAQgHAAgCgJg");
	this.shape.setTransform(16.7,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAVAqIgDgTIgBgTIABgGIAAgJQAAgSgHgBQgKAAgHAMQgIALgFAOIgBAIIAAAJIAAAIIABAIQAAAEgCADQgDACgEAAQgDAAgDgCQgCgDAAgEIgBgIIAAgIIABgYIABgYIAAgIIAAgJQAAgDACgDQADgDADABQAIAAABALIAAAKQAPgUAOAAQAOAAAFANQAEAIAAAQIAAAJIAAAGIACATQACAMAAAHQAAAEgCADQgDABgEAAQgHABgBgJg");
	this.shape_1.setTransform(7.5,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgdAmQgNgMAAgTQAAgVALgQQAMgQATgBQAOAAAJAGQALAFAAANQAAAJgKAHQgEADgOAFIggAQQAFAIAHADQAIADAIAAQAGAAAIgBQAKgDADgFQADgFAEAAQADAAACADQACACAAADQAAAKgPAGQgOAHgMAAQgSAAgNgKgAgRgWQgHAIgDAPIAbgLQAOgIAGgFQgHgIgNAAQgKABgHAIg");
	this.shape_2.setTransform(-2.2,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgEAzQgCgCAAgEIgCggIgCgdQAAgJgDgGQgGADgHAHIgKALIgEAGIgBANIgBAPIAAAIIABAHQAAADgCADQgDACgEAAQgKAAAAgWIABgQIABgOIAAgOIgBgOQAAgUAJAAQADAAADADQADADAAAEIgBAFIAAAFIAAAJQAFgJAIgIQAJgHAHAAQANAAAEAOQAEgHAHgDQAHgDAIAAQAPAAAFAQQACADACAVIAGAxQABADgDADQgDACgDAAQgIAAgBgIIgDgbIgDgZQgBgGgCgGQgDgIgDAAQgEAAgJAGQgIAFgDADIABAQIACAWQACAOAAAJQAAAEgCACQgDADgEAAQgBAAgDgDg");
	this.shape_3.setTransform(-14.1,0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AkZh7IIzAAIAAD3IozAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AkZB8IAAj3IIzAAIAAD3g");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAVAuQgMAGgOAAQgMAAgJgGQgJgGgBgMQgEgZAAgSQAAgNADgRQABgJAIAAQAEAAADADQADADAAAEIgCAOIgBAPIABAZQABAMACAHIAGADIAGAAQALAAAPgEIAAgTIAAgRQAAgVABgPQABgJAJAAQAEAAADACQADADgBAEIgBAlIAAATIAAAVIAAAGIAAAHQAAAEgCACQgDADgEAAQgIAAgCgJg");
	this.shape_6.setTransform(18.3,0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAXAvIgDgWIgBgVIAAgHIABgJQAAgVgIAAQgLAAgIANQgJALgFAQIgBAKIAAAJIAAAJIABAJQAAAEgDADQgCACgFAAQgEAAgCgCQgDgDAAgEIgBgJIAAgJIABgaIACgbIgBgJIAAgJQAAgFADgCQACgDAEAAQAJAAABANIAAALQARgWAPAAQAPAAAGAOQAFAJAAASIAAAKIAAAHQAAAIACAMQACANAAAIQAAAEgDADQgDADgEAAQgIAAgBgJg");
	this.shape_7.setTransform(8.2,0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AggApQgPgMAAgWQAAgXAMgRQAOgSAVAAQAPAAAKAFQANAHAAAOQAAAJgMAIQgEAEgQAFIgjASQAFAIAJAEQAIAEAJAAQAHAAAIgDQALgDAEgFQADgFAEAAQADAAADACQADADAAADQAAALgRAIQgPAGgOAAQgVAAgNgLgAgTgZQgHAJgEARIAdgMQAQgJAIgGQgJgIgOAAQgLAAgIAJg");
	this.shape_8.setTransform(-2.4,0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgEA5QgDgDAAgFQAAgLgCgXQgDgVAAgMQAAgKgCgGQgHADgHAHIgMANIgEAGIgCAPIgBARIABAIIABAIQAAAEgDACQgDADgEAAQgLAAAAgZIACgRIABgPIgBgQIgBgPQAAgWAKAAQADAAAEADQADAEAAADIgBAGIAAAGIAAAKQAFgKAKgJQAJgIAHAAQAPAAAEAPQAGgHAHgDQAHgEAKAAQAQAAAGARIAEAcIAHA1QAAAEgDADQgDACgEAAQgIAAgBgIQgCgLgCgTIgDgcIgDgNQgEgJgEAAQgDAAgKAGQgJAGgDADIAAASIADAYQACAQAAAJQAAAFgCADQgDACgEAAQgCAAgDgCg");
	this.shape_9.setTransform(-15.6,0.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(2,1,1).p("AE3CJIptAAIAAkRIJtAAg");
	this.shape_10.setTransform(0,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00FFFF").s().p("Ak2CJIAAkRIJsAAIAAERg");
	this.shape_11.setTransform(0,0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AATApQgLAGgMAAQgMAAgHgFQgJgGgBgKQgEgYABgQQgBgMADgPQABgIAHAAQAEAAADADQACACAAAEIgBANIgBANIABAXQABALACAGIAGADIAFAAQAKAAANgDIAAgSIgBgPQAAgTACgOQABgIAIAAQADAAADACQADADgBADIgBAhIAAARIAAATIAAAGIAAAGQABAEgDACQgDADgDAAQgHAAgCgJg");
	this.shape_12.setTransform(16.7,1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAVArIgDgUIgBgTIABgHIAAgHQAAgUgHAAQgKAAgHAMQgIALgFAOIgBAJIAAAIIAAAIIABAIQAAAEgCACQgDACgEAAQgDAAgDgCQgCgCAAgEIgBgIIAAgIIABgYIABgYIAAgJIAAgIQAAgEACgCQADgCADgBQAIAAABAMIAAAKQAPgTAOgBQAOAAAFANQAEAIAAARIAAAIIAAAGIACAUQACALAAAHQAAAEgCACQgDACgEABQgHgBgBgHg");
	this.shape_13.setTransform(7.5,0.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgdAlQgNgLAAgTQAAgVALgPQAMgSATABQAOAAAJAEQALAHAAAMQAAAJgKAHQgEADgOAFIggAQQAFAHAHAEQAIAEAIAAQAGgBAIgCQAKgDADgEQADgFAEAAQADAAACACQACACAAAEQAAAJgPAIQgOAFgMAAQgSAAgNgKgAgRgWQgHAIgDAPIAbgLQAOgIAGgGQgHgGgNgBQgKAAgHAJg");
	this.shape_14.setTransform(-2.2,0.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgEAzQgCgCAAgEIgCggIgCgdQAAgJgDgGQgGADgHAHIgKALIgEAGIgBANIgBAPIAAAIIABAHQAAADgCADQgDACgEAAQgKAAAAgWIABgQIABgOIAAgOIgBgOQAAgUAJAAQADAAADADQADADAAAEIgBAFIAAAFIAAAJQAFgJAIgIQAJgHAHAAQANAAAEAOQAEgHAHgDQAHgDAIAAQAPAAAFAQQACADACAVIAGAxQABADgDADQgDACgDAAQgIAAgBgIIgDgbIgDgZQgBgGgCgGQgDgIgDAAQgEAAgJAGQgIAFgDADIABAQIACAWQACAOAAAJQAAAEgCACQgDADgEAAQgBAAgDgDg");
	this.shape_15.setTransform(-14.1,1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(2,1,1).p("AEah7IAAD3IozAAIAAj3g");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0066CC").s().p("AkZB8IAAj3IIzAAIAAD3g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.2,-16.9,58.6,30.5);


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
	this.shape.graphics.rf(["#D5FFD7","#61EF01","#1DA400","#004A00"],[0,0.345,0.635,0.937],0.4,7,0,0.4,7,18.8).s().p("AAAB2QgvAAgjgjQgjgjAAgwQAAgvAjgjQAjgjAvAAQAwAAAjAjQAjAjAAAvQAAAwgjAjQgjAjgwAAIAAAAg");
	this.shape.setTransform(11.9,11.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#EC0000","#9D0000","#480000"],[0,0.345,0.635,0.937],0.4,7,0,0.4,7,18.8).s().p("AAAB2QgvAAgjgjQgjgjAAgwQAAgvAjgjQAjgjAvAAQAwAAAjAjQAjAjAAAvQAAAwgjAjQgjAjgwAAIAAAAg");
	this.shape_1.setTransform(11.9,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},8).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23.7,23.6);


(lib.blank_gr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("Aj9CqIAAlSIH7AAIAAFSg");
	this.shape.setTransform(32.5,17,1.275,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,34);


(lib.fcb_rightOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AhABAIAAgKIB2AAIAAh2IAKAAIAACAg");
	this.shape.setTransform(6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13,13);


(lib.fcb_rightIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4D0D8").s().p("Ag2A2IAAgKIBiAAIAAhiIAKAAIAABsg");
	this.shape.setTransform(6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,11,11);


(lib.fcb_leftOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("Ag7A7IAAh2IB2AAIAAAKIhsAAIAABsg");
	this.shape.setTransform(6,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12,12);


(lib.fcb_leftIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4D0D8").s().p("AgxAxIAAhiIBiAAIAAAKIhYAAIAABYg");
	this.shape.setTransform(6,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,10,10);


(lib.fcb_hitArea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AhABAIAAiAICAAAIAACAg");
	this.shape.setTransform(6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13,13);


(lib.fcb_check_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AgLAiIAAAAIgVgWIgCgDIABgRQgBgGAGAAIAEACIAQAQIAggjIAFgCQAGAAAAAGIAAARIgCAEIgmAmIgEACg");
	this.shape.setTransform(3.6,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7.1,7);


(lib.fcb_check = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLAiIAAAAIgVgWIgCgDIABgRQgBgGAGAAIAEACIAQAQIAggjIAFgCQAGAAAAAGIAAARIgCAEIgmAmIgEACg");
	this.shape.setTransform(3.6,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7.1,7);


(lib.fcb_background_pressed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgsAtIAAhZIBZAAIAABZg");
	this.shape.setTransform(4.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9,9);


(lib.fcb_background_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgsAtIAAhZIBZAAIAABZg");
	this.shape.setTransform(4.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9,9);


(lib.fcb_background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsAtIAAhZIBZAAIAABZg");
	this.shape.setTransform(4.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9,9);


(lib.Copyright = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAbAHIgDgKIgEAKQgEAIgDAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBgBAAgBIgCgIIgBgHQgGASgCAAIgDgBIgBgCIABgCQADgFABgFIACgNQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAEAAACAJIADAKIACgGIADgJQADgEACAAQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAIAEAKIACAGIACAIIABACIgBACIgCABQgDAAgDgJgAgTANIgBgIIAAgGIgBgHIgFAAIgGAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAABgBQAAAAABAAIAFABIAEAAIAPAAIADgBIAEAAQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAABAAAAQAAAAAAABQAAAAgBAAIgOAAIAAAIIABAFIABAEIABAEIgCACIgCABQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAgBAAAAg");
	this.shape.setTransform(57.3,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgLAYQgGgDgBgEIABgDQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAEACIAEABIAFABIAFgBQADgBAAgDQABgGgJgCIgCgBIgIgDQgEAAAAgFQAAgKAIgEIAHgCIAIgDIAEgBIADABIABAEIABADIAAAEIgBADIgCABQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAIgCgFIgJADQgFADgBAEIADABQAIACAFACQAHADAAAJQAAAHgGAEQgFADgGAAQgFAAgGgCg");
	this.shape_1.setTransform(51,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgLATQgHgGABgKQAAgGAFgKQAHgKAGAAQAEAAAGACQAGACABAEIgBADQgBAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgDgBIgBgBQgDgCgGAAQgCAAgFAIQgDAHAAADQAAAGADAEQAEADAEAAIAGgCIAEgCIACgBIAEABIABADQgBADgGADQgGADgEAAQgHAAgGgFg");
	this.shape_2.setTransform(46.6,2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgDAfQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAIAAgJIAAgIIAAgKIAAgIQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBIACgBIACABQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABIAAAIIgBAKIAAAIIABAJQAAAAAAAAQAAABgBAAQAAABAAAAQAAAAgBAAIgBABIgDgBgAgBgXQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAAAgBQABABAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQgBAAAAgBg");
	this.shape_3.setTransform(43.1,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAKAVIgBgJIgBgKIABgDIAAgDQAAgKgEAAQgFAAgCAFQgEAGgCAGIgBAEIAAAFIAAADIAAAFIgBADIgDABIgDgBIgBgDIAAgFIgBgDIABgMIAAgLIAAgFIAAgEIABgDIAEgBQAEAAAAAFIAAAGQAHgKAGAAQAHAAADAGQACAEAAAJIAAAEIAAACIABAKIABAJIgBADIgDABQgEAAgBgEg");
	this.shape_4.setTransform(39.5,2.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAOAWIgDgDIgIADIgDABQgKABgFgHQgFgFAAgLQAAgJAIgHQAHgIAIAAQAEAAAFACQAGADAAADIgBACIgBAFIAAAJIABAIIACAIIACACIAAABIgBADIgDABIgDgCgAgGgKQgFAGAAAGQAAAGADAEQACAEAFgBQADABADgCIAEgDIgBgPIAAgFIABgEIgDgBIgCgBQgFAAgFAFg");
	this.shape_5.setTransform(34.8,2.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AALAhIgBgLIgBgKIAAgDIAAgEQAAgGgEAAQgFAAgDADIgGAKQAAARgCACQAAABgBABQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIgBgDIABgBIAAgHIAAgHIAAgeIABgHIgBgFIAAgEQAAAAAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAEAAAAAEIABAIIAAAKIAAAJIAAAEQADgFAEgCQACgDAFAAQAHAAADAFQABADABAGIABAJIAAAIIACAKIAAABQAAABAAAAQAAAAAAABQgBAAAAAAQAAABAAAAIgDABQgEAAgBgDg");
	this.shape_6.setTransform(30,1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgLATQgHgGABgKQAAgGAFgKQAHgKAGAAQAEAAAGACQAGACABAEIgBADQgBAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgDgBIgBgBQgDgCgGAAQgCAAgFAIQgDAHAAADQAAAGADAEQAEADAEAAIAGgCIAEgCIACgBIAEABIABADQgBADgGADQgGADgEAAQgHAAgGgFg");
	this.shape_7.setTransform(25,2.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgOATQgGgGAAgKQAAgKAFgHQAGgJAJAAQAGABAFACQAGADAAAHQAAAEgFADIgKAEIgOAHQACAEAEABQAEADACAAIAIgBQAFgCABgDQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAIADAAIABADQAAAFgIADQgGADgHABQgIgBgGgEgAgIgKQgDAEgCAGIANgFQAGgDAEgDQgEgDgGgBQgEAAgEAFg");
	this.shape_8.setTransform(20.3,2.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAaAgIgCgGIgBgIQgCgHgEgWIgJAYIgDAJIgDAIQgBAEgCAAQgDgBgBgDIgCgEIgBgFIgIgfIgCAHIgFAWIgCAMQgBAEgDAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAIgBgEQAAgHADgLIAFgPIADgOQACgKABgDQACgCADAAQACAAACADQACAEABAMQADAOAFAPQAFgPAEgSIACgGIACgHQABgDADAAQAEAAACAIIACAKQADASADAOIACAHIACAHQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgCABQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBgBg");
	this.shape_9.setTransform(13.8,1.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgQAUIAAgdIAAgEIABgFQAAgEADAAQAFAAAAAHQAHgIAKAAQADAAACADQACACAAAGIAAADQgBAFgEAAQgEAAAAgEIAAgDIAAgEQgHABgCADQgEADgDAGIABAWQAAAEgFAAQgEAAAAgEg");
	this.shape_10.setTransform(5.1,2.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAOAWIgDgDIgIADIgDABQgKABgFgHQgFgFAAgLQAAgJAIgHQAHgIAIAAQAEAAAFACQAGADAAADIgBACIgBAFIAAAJIABAIIACAIIACACIAAABIgBADIgDABIgDgCgAgGgKQgFAGAAAGQAAAGADAEQACAEAFgBQADABADgCIAEgDIgBgPIAAgFIABgEIgDgBIgCgBQgFAAgFAFg");
	this.shape_11.setTransform(0.5,2.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgBAZQAAAAgBAAQAAgBAAAAQAAAAAAgBQgBAAAAgBIgBgPIgBgOQAAgFgBgCQgDABgDADIgFAGIgDADIAAAGIgBAHIABAEIAAADQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgDABQgFAAAAgLIAAgIIABgGIgBgHIAAgHQAAgKAFAAIACACQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAIAAADIgBACIAAAFQADgFAEgDQAFgEADAAQAGAAACAHQACgEADgBQAEgCAEAAQAHAAADAIIACAMIADAYIgBADIgDABQgEAAgBgEIgBgOIgCgLIgBgGQgCgEgCAAIgFADIgGAEIAAAHIABALIABALIgBADIgDACQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAgBg");
	this.shape_12.setTransform(-5.2,2.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgBAZQAAAAgBAAQAAgBAAAAQAAAAAAgBQgBAAAAgBIgBgPIgBgOQABgFgCgCQgDABgDADIgFAGIgCADIgBAGIgBAHIABAEIABADQAAABgBAAQAAABAAAAQAAAAAAABQgBAAAAAAIgDABQgFAAAAgLIABgIIAAgGIAAgHIgBgHQAAgKAEAAIADACQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAIAAADIgBACIAAAFQADgFAEgDQAFgEADAAQAGAAABAHQADgEADgBQADgCAFAAQAHAAADAIIACAMIADAYIgCADIgCABQgEAAgBgEIgCgOIgBgLIgBgGQgCgEgCAAIgFADIgGAEIAAAHIABALIABALIgBADIgDACQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAgBg");
	this.shape_13.setTransform(-12.2,2.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAOAWIgDgDIgIADIgDABQgKABgFgHQgFgFAAgLQAAgJAIgHQAHgIAIAAQAEAAAFACQAGADAAADIgBACIgBAFIAAAJIABAIIACAIIACACIAAABIgBADIgDABIgDgCgAgGgKQgFAGAAAGQAAAGADAEQACAEAFgBQADABADgCIAEgDIgBgPIAAgFIABgEIgDgBIgCgBQgFAAgFAFg");
	this.shape_14.setTransform(-18.1,2.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgQAUIAAgdIAAgEIABgFQAAgEADAAQAFAAAAAHQAHgIAKAAQADAAACADQACACAAAGIAAADQgBAFgEAAQgEAAAAgEIAAgDIAAgEQgHABgCADQgEADgDAGIABAWQAAAEgFAAQgEAAAAgEg");
	this.shape_15.setTransform(-22.4,2.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgVAeQgFgGgBgMQABgMAFgKQAFgMAIgIQAHgEAEAAQAEAAAGACQAIAEAAADIgBADIgEABIgCgBQgHgDgEAAQgDgBgCAEIgGAGQgKAOAAAOQABAIACADQACAEAIAAQAGgBAGgFQAGgEACgLQgMABgGAEIgDABQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIgBgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAIgEAXAAIADABIABACQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQgDANgIAJQgJAHgKABQgKgBgGgFg");
	this.shape_16.setTransform(-27.7,1.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgNAhIgBgDIACgJIAKgWQAFgOAHgIIABgBIgVAAIgJgBQgFAAAAgEQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAIAQAAIAPABIAIAAQAFAAAAACQAAADgDADIgEAFQgGAGgFAKIgHAPIgCAKIgEAKQgBABAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgDgBg");
	this.shape_17.setTransform(-36.2,1.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AABAiIgHAAIgFgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQgBgEAIAAIACAAIABAAIAAgHIgBgGIABgPIABgRQgFAFgCAAIgDgBIgBgDQAAgDADgCIAHgGQACgEAEAAQAAAAABAAQAAABABAAQAAABAAAAQAAABAAABIAAADIAAADIAAAEIAAAEIgBAPIgBANIAAAGIABAGIAFAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAABABIAAADIAAADIgDABg");
	this.shape_18.setTransform(-41,1.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgSAXQgFgKAAgNQAAgMAGgKQAHgMAKAAQAMABAGAJQAGAJAAANQAAARgGAKQgGAJgMAAQgMABgGgMgAgLgRQgEAIAAAJQAAAMAEAHQAEAHAHAAQAIABAEgLQADgIAAgJQAAgMgDgGQgEgGgIAAQgGAAgFAIg");
	this.shape_19.setTransform(-45.9,1.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AANAhIgDgBIgHAAIgFABIgFAAIgFAAIgBAAIgCAAQgDAAgBgDIAAgFQAAgKAGgHQACgDALgFIAHgHQADgEAAgGQAAgDgDgCQgDgCgDAAQgDAAgDADIgGAEIgDACQgFAAAAgEQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAFgFAEgCQAFgDAEAAQAHAAAFAEQAGAEAAAHIgBAIIgEAHQgDACgIAFQgGAFgDADQgFAFABAHIAJgBIALAAIAGABQAEABAAADQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgDABIgDAAg");
	this.shape_20.setTransform(-51.3,1.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgeAAQAAgKALgJQALgKALAAQAOAAAHAIQAHAIAAAMQAAAJgJAKQgKALgMAAIAAABQgeAAAAgegAgOgOQgIAGAAAIQAAAMAGAFQAGAEAKAAQAJAAAIgIQAGgIAAgGQAAgJgEgFQgFgGgIAAIgCAAQgKAAgIAHgAgKAJQgGgEAAgFQAAgGAIgFQAGgFAFAAQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAABAAAAQgBABAAAAQgBAAgBAAIgCgBIgBAAQgDAAgEADQgEACAAADQAAABADACIAFABQABAAAEgCIAEgCIADAAIABADQAAADgEADQgGADgDAAQgFAAgFgDg");
	this.shape_21.setTransform(-57.7,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.3,-7.1,126.6,16.6);


(lib.BkScene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AeqArQgEAAgDABQgFAAgEABQgPABgPABQgRACgRABQgJAIgSABQgJABgHgNQgVgFgXACQgiAEgLgaQAAAFgJALQgQANgUgBQgngBgVgYQgjACgjAAQgNgBgBgJQAAgBAAgBQgLAIgPACQgMACgNABQgQACgTgNQgEAHgQACQgRABgSACQgaADgUgVQgTgEgUACQgiACgegKQgFgBgQABQghAFgbgGQgYAFgagCQgKgBgJgCQgMgBABgZQADADAMgCQAPgGAPgBQBHgDBFAEQAFAAAMgLQAHgXAaAGQAcAHANAVQAEAFANADQALgNAZgIQAeAOAQAYQADgCAJgKQAdgPAdAXQAFAEAUgBQAIgEAIgCQAMgDAMgBQAtgFApAPQAJAEAIgDQAagKAfAGQAVAEAPAHQAVANAYgOQAVgEAIALQADAFAJAMQADAGAPgBAYZAPQAMgIAHgOQgWAFADARgAPEgcQAVAIAVAQQANgSAVgKQAIgEAIgCQAggHAWATQgJAagUAEQgWAGgcgFQgaAFgegDQgNgBABgXQABgFAAgGgAsIgBQARgLARgMQAOgJAPgGQAPgGAUANQAhAKArgGQANgSAaACQAMABANACQAaADAZAKQALAFALAFQANAHATgDQAdgHAfAAQBIAABWAIQAHAHAKABQAMACAHgIQAZgcAuAbQASAEAIgGQAGgEAIgDQAMgFANgCQAigGAcAKQAIADAGAHQAEAGALAIQAagOAtABQAIACAIAEQAKAEAIAEQAIAGAOgFQAggdArABQAKAAAJAEQAXALAcgDQBCgHBJARQAUgJAVgOQAigVApAIQAKACAHAGQAOAMAPgRQA5gHAwAbQAHAEAHAAQATAAARgMQAOgKAUACQAqAEApAVQAZgVAuABAPDgRQgDARgJAEQgLAGgLACQgaAFgegCQgaAXgwgIQgGgNgIgFQACANgMAFQgZALgmgGQgEgDgSgIQgZgCgngDQgJgEgYACQgBAegbgFQgMgCgNAAQgSAAgKgOQgLgPgHAFQgXARgfACQgYABAEgYQgLAEgKAFQgGAEgGAEQgOALgXgGQgYgGgLATQgFAFgGAJQgRgDgRAAQgDAAgCAAQgEAAgNgCQgCAAgCgBQgJgHgHAGIAAAAIAAAAQgKgTgNABQgRABgSAMQgUgGgBgVQgWgFgWAAQgcAAgbgCQhHgGhbABQgOgGgEAHQgHANgWAEQhIgGhJABQgBAAgBAAQgDAAgDAAQgRgBgPgPQgWgFgWAAQhiAAhmAAQgBgPgWAFQgXAQgigCQgCgHgQABQgLAMgWAOQgWgOgWgCQgDAAgKgLA7sAUQAEgHAPAGQAAAAABAAQAEADAPABQAcADARgHQAygTBDAAQAJgJAOgDQAHgBAIAAQBLAABTAFQAlgZA3ACQAMAAAMADQANACANADQARAFAQAGQAtASAvACQAhACAggIQBKgSBMgTQAMgDALgFQAMgGAOAFQAIADAFAHQAFAIAEAKQAEAIAAAHQAAAEACADQgaABgagCQgYgBgaALQgmACguACQgNAGgNABQgXABgbgCQgegDgeAAQgPAAgPgCQgegDgeACQgjACgfgHQgJgCgEgGQgGgIgPAJQgVAQgjgJQgygJg2ACQgFAAgLALQgCAPgRACQgPACgPACQgKABgKAAQhEAChDAAQgKAAgKACQgaAFgngEQgqADgvgDQgkAKgrAFQAEgagEgCAsVAFQAFgCAEgDQACAAACgBQAAAAAAAAIAAAAIAAAAQgCAIgLgCgAswAGQAOAAANgBIAAAAQgGAFgIADQgKABgDgIg");
	this.shape.setTransform(-48.6,12.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("EgmPgB3IAAERIAAAdIAAAdIAAU7MBMfAAAIAA1JIAAheIAAjfIAA2XMhMfAAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.3,1,1).p("AZOobQABAAABAAQAPAAAOAAQAlABAkgBQArAEAtABQAUAAAVAAIAAAAQA/gBA/gBQBCAAA/ADQBAAEBBACQAsACCtgQAZOobIgKAAQgkACgjAFAZOobIg7AAQgKAAgJAAUg61AASgAWgACQgIAAi8gSAbXocQAMABAKABIACAAQAQACAPACQANACALADAa2obQARAAAQgBQALAAALgBIACAAQAlgBAjgCQAbgCAagCAdjmnQAZAFARAPQgHgcgKgFQgQgFgJASgEAjlgD+QABAJgCAFQgDgCgDgCEAjkgDwQgCAFgDACQgyAdgtgeQgFANgNAFQhJAegSg1QgsAggTgpQgDgGgCgHEAmQgE8QiFAGgaAIQgDABgBABQgCAAgBgBQgNgHgWgQQgYAagcgHEAgmgFSIAAgBQABAAAAgBQAGgqAfAvQAIANAAAIQAAAUAZgGQAUgFAMADQADAAADgDQgDAAgCgBQgFgCgEgCEAgmgFSQgBAJAAAMAfLkfQAKgzA1ASQAYAIAEgaEAgvgGWQgVAFgFASQAKgQAQgHgEAgVgF/QAoAGgOgdAWGipQAEACADABQAuAWA/AKQA7ALA/gDQBBgDA9gEQAcgBAcgBQAXAAAXAAQAnAEAnAHQA1AKA4APQA6APAngCQAmgBA+gWQA+gVB6hbQikgMgIgHAcikzQAdgjArAMQAMAEADASQAIApAXgOQAFgCAFgGQABAAABgBQAQgHAXAKQACABACABAc+mMQgcgKgcAHQAPAUAYAIQAHgMAKgNgAdskCQADAMgEAIQgBAAgBAAQgFgBgFgCAdrjuQgBADgCACQgfAngwgiQAAAAgBAAQgLAGgQAKQgtgHAOg3QgGADgGADQg0AagwggQAAAAgBAAQgrAYg2gUQgeASgpAHQAAABAAAAQgEAggxgFQAAABgBABAfJkIQAAgNACgKAeNkIQAFgKAGgHAfOj2QgtAWg2gOAaCmMQBLAKgXgOQgggigUAmgAY4kpQASgqA9AeQABABABAAQABADABACQAEAFAGADQgJADgIAFAbfkfQgCACgDABAaVknQAegLAtARQABAAABABQABgBABgBQAPgMACgZQAaAGATAOQgHAHgFAJAbfkfQAAAIgBAFQADgCADgBAbikgQgBABgCAAAcZjkQAEgCADgBAcgIsQAtgEAhgRAa5JaQA3gIAsgCAXQkeQAAAAABgBQAhgcAzAMQAKADAJADAXFkSQAFgGAGgGAXFj+QAAAFAAAEAWPjaQABABAAAAQADgFgCgGAWfkdQAXgFAaAEAYTkTQgDACgEADQgEgCgFgCAY1kfQABgFACgFQAEACADABAQ+IsQASgBAPAEAN7IiQAFAAAFAAQgFAUACAbIgBAAQgfAEgZAKQgEgCgDgCAO3JEQASgLAXgFIABAAIAAAAQgKARgHATQgEgCgFgCATuJyQANgEAQgDAVOJrQAMgFARgCASEJhQAZAHAPgNAPQJYQgBADgBADAPQJYQARAJAUAIQgbASgigGQgBAAAAAAQgVAhguANAOqJyQAGABAHACAOwJKQAEgDADgDAM8JkQAGgDAHgCQAWAPAgALQgHAUgEAWQgBAAAAABQgBAEgBAFAOFJ8QgDgCgDgBQABgEABgEAsXkSQDgAGD+AUQAcADAdACIABAAQAKABAKABQAKABALABQEQAZEzApQFPiQLKCVAOFIiQAoAAAKAiA4/qnQgCgDgCgCQgBADgBADAsekSQoigNl4BLQoOgCgDAAQgIACgIABQgBAAi1ADEgmPgEJQB2gKBHgDQALAAAJAA");
	this.shape_2.setTransform(0,42.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9933").s().p("AgfAXQgfgMgXgMQAagKAfgFIABAAQgCgbAEgUQAnAAAKAjIgHAFIAHgFQASgLAXgGIAAABQgJARgIATIgIgFIAIAFQARAIAVAGQgbASgjgGIgBAAIgNgDIANADQgVAhgsANQAFgVAGgUgAgfAXIAHACIgHgCIADgIIgDAIIAAAAgAAugDIACgFIgCAFgAAXASIAAAAg");
	this.shape_3.setTransform(92.7,103.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC33").s().p("AAAAAIAAAAIAAAAg");
	this.shape_4.setTransform(99.3,98.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FEE1A3","#FFCC33"],[0,1],0,-57.3,0,53).s().p("EgmPAK/IAA05IC2gDIAQgDIIRACQF4hMIiAOIAHAAQDgAFD+AVIA5AFIABAAIgBAAIAAAAIAAAAIABAAIAUACIAVACIgFAAIgQgCIAQACIAFAAQEQAZEzApQFPiQLKCVIAAgBIAHADQAuAWA/AKQA7ALA/gDIB+gHIA4gCIAuAAQAnAEAnAHQA1AKA4APQA6APAngCQAmgBA+gWQA+gVB6hbIAAVGgANzD5IgCAKIACgKIABgBIgBABgANJC1QAWAPAgALQgHAUgEAVQAugNAVghIABABQAiAFAbgSQgUgHgRgJQAHgTAKgRIAAAAIgBAAQgXAFgSALQgKgigogBQgFAUACAbIgBAAQgfAFgZAKgATuDHIAdgGIgdAGgAVODBQAMgFARgCQgRACgMAFgAM8C6IANgFIgNAFgASVC5QANAAAKgIIAAAAIAAAAQgKAIgNAAIAAAAIgBAAQgGAAgHgBIgDgBIADABQAHABAGAAIABAAIAAAAgANJC1IgHgEIAHAEgAa5CwQA3gIAsgCQgsACg3AIgARfCFQgLgDgMgBIgBAAIAAAAIgEABIgCAAIgCAAIgBAAIABAAIACAAIACAAIAEgBIAAAAIABAAQAMABALADIAAAAgAcgCCQAtgEAhgRQghARgtAEgAN7B4IAKgBIgKABg");
	this.shape_5.setTransform(0,84.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("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");
	this.shape_6.setTransform(0,13.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#013FA3").s().p("AgqgBIAgAAIAVABIABAAIAfADQgrgBgqgDg");
	this.shape_7.setTransform(176.2,-11.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#0066FF","#000099"],[0,1],183.3,20.4,183.3,-20.4).s().p("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");
	this.shape_8.setTransform(0,10.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#DA9836","#784D22"],[0,1],160.7,-0.8,160.7,59.7).s().p("AAAgBIACADIgDAAIABgDg");
	this.shape_9.setTransform(-160.4,-26.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#00CCFF","#D5FFFF"],[0,1],0,-65.6,0,67).s().p("EgjLALUIjEgTIAA2UMBMfAAAIAAWVQitAPgsgBQhBgChAgEQg/gEhCABIh+ABIAAAAIgpAAIgfgEIgCAAIgWgCIAWAAIACAAIBIgEIA1gDIg1ADIhIAEIgCAAIgWAAIghABIhJAAIgdABIgCAAIg7AAIgTAAUg2oAAQgENAAAIgWAAgA5FI4IAGgBIgEgFIgCAGgAX/LFIBFgBQgkACgjAEIACgFg");
	this.shape_10.setTransform(0,-82.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-246.3,-156.6,492.7,313.3);


(lib.animbuffyhead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6B4E32").ss(0.1,1,1).p("AD1hYQAAADgBADQAEANAHAJQAAABABABQAZADA0AMQABABAAAAQAPAsgOAzQgWBVhZAdAEAg6QARAZAjAJAkDiiQAJgEAJAAQAKAAAHAHQAGAGAEAJQAEAIAFAIQABABAAACQABABAAADQgCgBgCgBQgHgFgIgFQgHgFgKgEQgIgDgKACQgJABgJAEQgIAEgIAGQgIAGgIAFQAEgFADgHQADgJAHgGQAHgGAIgEQAIgFAIgDgAkDguQACAAACgBQAGAAAGgBQASgCALAKQgCgUgKgUAk8gOQAAAAAAgBQgFgNABgEQAAgDAAgJQgBgIAHgSQAGgQANgKQAQgMAQAGQAGADACAEAkDguQgJACgKADQgCABgCAAQgCABgCABQgKAFgIAIQgBAAAAAAQgFAHgGAEAjWgoQABARgEARQgKADgKADQgCAAgBAAQgMAFgMAFQgEACgEACQgOAGgKAHQgBABgCABQgCgGgCgEQgCgDAAgCQADAAADAAQASABAPgIQAPgHACgPQACgUgMgLAlJgHQAHgCAGgFQABAIADAGQACADAFALAj6CKQgHADgHADQgFACgGABQgBAAgCABQgNAFgTACQgXACgFgRQgCgGAAgGQgBgKAGgNQAFgOgBgQQABgBAAgC");
	this.shape.setTransform(56.1,63.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6B4E32").ss(0.1,1,1).p("AkrCMQgQAYgcgOQguAxgOhIQgKANgTgbQgfgqAJg5QACgNgNgOQg2hEA/gvQAQADABAEQgIhcBSgZQAogMAVAZQAPg7AngSQAYgLAiAFQALABAHAFQAHAEADAGQADgFACgFQAnhJBMgUQAYgGAUAPQAKAJAJABQAPAAALgKQBQhGA2BPQBigjA8BRQAHAKgFAGQA7gJANAnQALAhgQAiQgHAOAhAAQBGABgNAyQgJAhgXAXQA5AWg3AyQgHAGgIgBQA5AVg7ArQgSANgPAGQAXA8hLAJQgYADgPgLQgBgBgBgBQgBgBgBAAQABABAAACAkpBwIAAAAQAUADACgvQA1AZADhNQBFAqAthIQAEgHAMAIQA6ArAtgRQAPgEANgJQgDAkArgKQgQAYATAMQAIghAwAKQAYAFAAAdQgBAXgMAOQACAGAEADQAvAmAJgeQgBgJAEgMAkEEeQABgDAAgEQAAgCAAgBQgEgrgTghQgQgcgBggQAAgCAAgCQAAgMACgMQgIgBgLgKAEmF9QgDgcgRgMQgCgCgCgBQAAAAgBgBQgBAAgCgBQgVAeghAcQgqAjg/gNQgugJgbgTQAOgKAIgMQAWgigkgTQgrgYgnAfQgcAWgHAeQgOA7gzgeQghgTgVgYAE6CCQgEAbgwgDQgsgBgEgaACYBuQgOAQgdAEABVA+QgCAKABAO");
	this.shape_1.setTransform(49.2,42.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BE9670").s().p("AAzDYQgtgKgZgSQAOgLAFgLQAWgigigUQgsgXgnAeQgcAXgIAeQgOA6gzgeQghgTgVgYIAOgGIgOAGIgLADIgDABQgNAFgTACQgXACgFgRQgCgFAAgHQgBgKAGgMQAFgPgBgPIABgEQABgDAAgEIAAgDQgEgrgSggQgRgbAAgfIAAgFQgBgMACgMIABAAQATADACguQA1AZAEhOQBEArAthKQAFgIALAJQA6AsAwgQQAOgFANgKQgCAmAogLQgPAYATAMQAHghAwAKQAZAFgBAeQAAAXgMAOQABAFAEADQAvAmAKgeQADAaAsACQAwACAEgaQAEAMAHAKIABABQAaADAzAMIABACQAPArgOA0QgWBUhZAdQgDgcgRgMIgEgDIAAAAIgEgCQgVAfggAbQgfAagqAAQgQAAgRgDgAkuAAIAEANIAHAOIACAFIAEAKIADgCQAKgHAOgGIAIgDIAYgLIADgBIAUgHQAEgPgBgRQgCgUgKgTQAKATACAUQgLgKgSACIgMACIgEAAIgTAFIgEACIgEABQgKAFgIAIIgBABQgFAGgGAFIAAgCQgFgMAAgEIABAAIAAgFIAAgHIAAgCQAAgJAGgPQAGgRANgKIACgBQAJgGAJgBIABAAIAAAAIAJACIABAAIABABQAGADACAEQgCgEgGgDIgBgBIgBAAIgJgCIAAAAIgBAAQgJABgJAGIgCABQgNAKgGARQgGAPAAAJIAAACIAAAHIAAAFIgBAAQAAAEAFAMIAAACQgGACgHACQAHgCAGgCIAAAAgAFCgKQgjgKgRgZQARAZAjAKgAA2hEQAdgEAOgQQgOAQgdAEgAj1iVIgQAIQgIAFgHAGQgHAGgDAIQgDAHgEAFIAQgLQAIgFAIgEQAJgEAJgCQAKgBAIADQAKADAHAFIAPAKIAEADIgBgFIgBgCIgJgRQgEgIgGgHQgHgGgKgBQgJAAgJAEgAAdhxIgBgKQAAgIACgGQgCAGAAAIIABAKg");
	this.shape_2.setTransform(54.7,62.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AjyE1IgEgPQAGgFAFgGIAAAAQAJgJAKgEIADgCIAFgBIATgFQAMALgDAUQgBAQgPAIQgPAHgSAAIgHAAIgGgPgAmTDfQgKANgTgbQgfgqAJg5QACgNgNgQQg2hEA/gtQAQACABAFQgIhcBSgZQAogMAVAZQAPg7AngSQAYgLAiAFQALABAHAFQAHAEADAGIAFgKQAnhKBMgTQAYgGAUAPQAKAJAJABQAPAAALgKQBQhGA2BPQBigjA8BRQAHAKgFAGQA7gJANAnQALAhgQAiQgHAOAhAAQBGABgNAyQgJAhgXAXQA5AUg3AyQgHAGgIgBQA5AXg7ArQgSANgPAGQAXA8hLAJQgYACgPgKIgCgCIgCgBIABADIgBAGQgEAagwgCQgsgCgEgZIAAgFQAAgHADgJQgDAJAAAHIAAAFQgJAegvgmQgEgEgCgFQAMgOABgXQAAgdgYgFQgwgKgIAhQgTgMAQgYQgrAKADgmQgNALgPAEQgtAQg6gsQgMgIgEAHQgtBKhFgqQgDBNg1gZQgCAugUgCIAAAAQgIgBgLgKQALAKAIABQgCAMAAAMIAAAEQgQAYgcgOQgTAUgNAAQgUAAgIgrgAkpDQIAAAAgAjnCzQADgJAIgGQAGgGAIgEIAQgIQAJgEAKAAQAKAAAHAHQAGAGAEAJIAIAQIACADIAAAEIgDgCIgPgKQgIgFgJgEQgJgDgKACQgJABgIAEQgJAEgIAGIgPALQAEgGACgGg");
	this.shape_3.setTransform(49.2,32.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,100.3,86.1);


(lib.animbuffyfLeg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6B4E32").ss(0.1,1,1).p("AAIgEQgCAEgDABQgCACgBABQAAAAAAABQgFAAgCgC");
	this.shape.setTransform(53.3,31.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6B4E32").ss(0.1,1,1).p("Ag6AFQAfgRAZgdQAdgjAkgfQAkgfAgghQAggiAngbQAogbAugTQArgRAogRQArgRApgXIAAAAAHLhxQgTAQgSARQghAggfAfQggAegiAeQgiAfghAgQggAgggAiQggAhgjAeQgkAggpAcQgmAbgtAPQgqANgvADQgZACgWgFQgYgGgWgNQgogYghgfQgkgigbgqQgYgkgKgqQgKgtgMgsQgHgfgGgcQAAAAgBgBQABAAABAAQgBABAAAAAgrjAQACAAACAAAgrjAQABACAAABQAAADAAADQABADAAACQAKAgABAjQABAygTAqQgFANgFALQgJAegDAgQgDAmALAiAgti/QAAABABACQABACABADAnGgcQADgDACgCQAlgfAugQQAugPAsgTQAjgQAngOQADgBAEgBQAtgQArgOQAagIAfgGQACgBADAAAgrjAQgBABgBAAAnGgcQAAABAAAAQgBABgDABQACgCACgBg");
	this.shape_1.setTransform(57.6,51);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#474441").s().p("AgngPIAaAAIANAAIAcAAIAMgBQAAAJgDADQgNAVgRAAQgSAAgcggg");
	this.shape_2.setTransform(125.2,84.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CEC8C2").s().p("AgJArQgVgagDgsIgBgLQAGgJAJgEQAGgCAIAAQgFA0AbASQADACAAAJQAJAGADAJQADAFAAAGIgOAAIgYAAQAAgFgGgGg");
	this.shape_3.setTransform(121.7,77.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#ADA59F").s().p("AgiAsQgEgJgIgGQBJAWgHhbIAAgNQA1AkgxA8QgDAFAAAGIgOAAIgKAAIgdAAQAAgFgCgFg");
	this.shape_4.setTransform(128.5,77.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BEB6AF").s().p("AAHAIQAAgVgbAJIgOAAIgMAAIAAgOQAugBAvAGIAAAIQgFAAgGADIgdAWIAAgMg");
	this.shape_5.setTransform(125.8,72.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BAB6B5").s().p("AgEAVQgDgngBgrQAIAPAEAVQAFAVAAAZIgDAdIAAAMIgHAAIgDgpg");
	this.shape_6.setTransform(111.9,55.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3E3935").s().p("AgSANIgCgmQAIgjAhAAIAAAGIgOAAIABBRIAAAQIAAABIAAANQgIAAgBADIgDABQgJAAgFgwg");
	this.shape_7.setTransform(118.5,39.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A19D97").s().p("AgaBEQAXgGgJgmIAAgLIAAgNIAAAAIgBgPIgBhTIAOAAIAAAOQAgBCgFBjIAAAMQgFAAgJADQgLADgGAAQgaAAAEgfg");
	this.shape_8.setTransform(120.7,44);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#221F19").s().p("AAHBvIAAgPIAAgLQAEhkgehCQAFgFADgJQADgGAAgJQAiBMgHBwIgDAhg");
	this.shape_9.setTransform(122.7,43.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#181512").s().p("Ag0C0IAAgcIgBgMIADgdQAAgbgEgVIA2gWQgEApAsgMQAJgDAGgBIAAAPIgOAAIhPABIAAAPIAAAOIABBFIAAAPIgPABIAAgQgAgphuIAAgOIAAgaIAAgBIABABQAnAEgGgxIAFAAQgKA4AygGIAAAFQAAAJgDAGQgDAJgFAFIgBgOIAAgGQggAAgJAjIADApIgRAAQAAgUgMgjg");
	this.shape_10.setTransform(117.9,46.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#44413D").s().p("AAHA4QAAgJgCgFQgUgpgGg4IALAOQARAYALAdQAEAJAAAGIAAAHIAAAHIAAAPIgIAAIgHAAg");
	this.shape_11.setTransform(111.4,25.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#847B7A").s().p("AgHAPIAAgBQAHgGAEgKIAFgMQgBAJgCAFQgCAMgLADg");
	this.shape_12.setTransform(104.1,13.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#201C1A").s().p("AAHA3QAAgGgCgDQgLgRgdAAIAAgHIAAgGQANgDACgNQADgEAAgJIABgKQABgKgCgHQAFgIAIgDQAEgDAGAAQABAaARAMQAGACAGAAQAAAJgDADQgDACgJAAIgOAAQAHAVABAUIABAOg");
	this.shape_13.setTransform(106.9,13.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#423938").s().p("AADAkQgQgdgGgmQAGgJAIgDQAFgDAEAAQgCAuAPAYQADADAAAIQAAAGgDADQgDADgIAAQAAgFgDgGg");
	this.shape_14.setTransform(114.1,20.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#302C2A").s().p("AgwAUIAAgOQAdgTAbgSQAFgDAGAAIASAMQAGACAFABIABAOQAAAFgDABQgDADgJAAIgLABQghgPglAsIgBgOg");
	this.shape_15.setTransform(112.4,4.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#ACA8A3").s().p("AgUAAQAOgFAKgLQADgDAAgGQAGAAACADQAGADAAAFQAAAJgCAFQgNAagIAAQgKAAgIgag");
	this.shape_16.setTransform(132.9,82.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#261F1A").s().p("AA6BBQAwg+g1giIAAgJQgxgGgsABIAAAPQgJgBgFADQgJADgGAJIAAAMQgGAAgGACIgRAKIAAgLIAAgMQAlg9BjACIAPgBQAJAJAGACQAFADAJAAIAOAAIABAOIAAAPQAJAygXARIAAAPQAAAFgDAEQgLALgOAGQAAgGADgFg");
	this.shape_17.setTransform(125.2,74.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1F1C19").s().p("AgFA3IgBheIgBgdIANAAIAAAdIABBeIABAOIgNAAIAAgOg");
	this.shape_18.setTransform(134.1,61.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000099").s().p("AhJEgQAIgrgXgMIAAgOIgBhGQAqAbAhgcQAJgHAGgKQADgDAAgJIAIAAIAEghQAHhwgihMIAAgFQg0AGAKg3QAAgGgDgFQgDgJgIgGQAAgJgDgDQgPgaACguQAOgjAsAAIAAAGQBGCiAmDGIAFAbIAAAMIAAAOQACAPAAAOQADA8gSAkIgPAAQhjgCglA9QAAgIADgGg");
	this.shape_19.setTransform(123,42.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2A2929").s().p("AB1F1QAChUgbg3IAAgLIAAgPIgBg4IAdABIABA3IABCLIABAOIAAAMgAholaIgSgLIAAgPQATACARAEIgHAXQgFAAgGgDg");
	this.shape_20.setTransform(126.7,36.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#ABA9A6").s().p("AAABSIAAgOIAAheIAAgdQAAgGgGgDQgDgFgGAAIAAgMIAAgOIAOAAIAKAAIAAANIABA4IAAAOIAAAMQAAAHAEAFQAJA9gXAXIAAgOg");
	this.shape_21.setTransform(134.9,60.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AhAE7IARgMQAGgDAGAAQAEAuAUAaQAGAGAAAFQAwA9AcgyQADgDAAgJIAOAAQAQA3AZg4QADgFgBgJQABgFgGgDQgDgDgGAAIAAgOQAXgSgKg0IAAgPQAYgXgKg9QgDgFAAgJQAbA3gCBUIAGAAQAAAIgDAGQgLAjgPAjQABAIgDADQg2AygrAAQhDAAgpiAgAhJEeQgPgdgDglIAPAAQAXALgIArQgDAGAAAJQgGAAgDgDgACrEQIgCiMIAAg3QAHAaADAdQAJBDgLBTQAAAEgGAAIAAgOgABlDwQgFgCgJgJQASgjgEg9QABgOgCgPIAAgOIAOAAQAGAAACAFQAGADAAAGIgOAAIAAAdIACBgIAAAOIgBAAQgIAAgGgDgAhNCHIgBgOIAAgPIBPgBIAPAAQAAAJgDADQgIAKgHAHQgRAPgTAAQgTAAgUgOgAhrAzQgBgFgDgJQgNg+g6gUIAAgBIAAg0QAbABAbAGIAEABIAAAFQAOgOALgOIABgBQADgGAAgGIAPAAIAAABIAAAZIAAAPQAMAiAAAVIAQgBQAGA2ALgJQADgDAIgBIAAAMQAJAmgXAFIg3AWQgFgUgJgQgACMBNIgBgOQAAhXgHhDQgajtiWhbIAHgXQCJAgAhCXQAQBMAJBaQAIBQADBagAgOk1IABgGQgsAAgOAjQgGAAgFADQgJAEgGAIQAHApARAcQADAGAAAGQAJAAADgDQADgDAAgGQAIAGADAJQADAFAAAGIgFAAQAGAwgngEIgBAAIgBgPIAAgGIAAgIQAAgGgDgJQgMgfgSgYIgMgNQgGAAgDgDQgFgDAAgIIAIAAIAAgOQgCgUgHgVIAOgBQAJAAADgDQADgDAAgJQgGABgGgDQgRgLgBgbQAmguAiAQIAMAAQAJAAACgDQADgDAAgGQAbAdAPApIAAALQBXCeAZDXIgPACQgmjGhHiig");
	this.shape_22.setTransform(121.8,44.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#444342").s().p("AgDAIIgFgZIAOgCQADAGAAAJIAAAMIAAAMIgMAAIAAgMg");
	this.shape_23.setTransform(132.3,51.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0000FF").s().p("AjWBxQgDgYgEghIgBgRIACgSIAGgkIAFgTQAGgTAHgSQAIgRALgQIASgdQAKgPALgOQALgOAOgNQAOgNASgHQASgGARgDQATgDATAAQASAAASACQASABATAHQATAHARAIQARAIANAOQAOAOALAPQALAOAKAQIATAfQAMARAFASIAHAhQAEATgBAQQgCAPACAOIgFAGIgEABIgCABIgFABQgfAGgaAIQgrAOgtAQIgHACQgnAOghAQQgsATguAPQguAQglAfIgFAFIgEADQgBgZgOhUg");
	this.shape_24.setTransform(31.7,26.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#BE9670").s().p("Aj3FeQgYgGgWgNQgogYghgfQgkgigbgqQgYgkgKgqIgWhZQgHgfgGgcIABgBIgCAAIAAgBIAFgFQAlgfAugQQAugPAsgTQAjgQAngOIAHgCQAtgQArgOQAagIAfgGIAFgBIABADIACAFIABAFQAKAgABAjQABAygTAqIgKAYQgJAegDAgIgBASQAAAcAJAaQgJgaAAgcIABgSQADggAJgeQAfgRAZgdQAfgjAigfQAkgfAgghQAggiAngbQAogbAugTIBTgiQArgRApgXIAAAAIAAAHQAdAAANARQADADAAAGQAAAIAFADQADADAGAAQAHA6AVAoQADAFAAAJQAAAGgDAGIgBABQgLAOgOAOIAAgFIgEgBQgbgGgbgBIAAA0IgkAhIhAA/QggAegiAeIhDA/IhABCQggAhgjAeQgkAggnAcQgoAbgtAPQgqANgvADIgMAAQgSAAgRgDgAhZi8IgBAAIAAAAIgFgBIAAgBIAAABIAFABIAAAAIABAAg");
	this.shape_25.setTransform(62.1,51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.4,-0.6,130.8,89.3);


(lib.animbuffybLeg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AjnjvQAFAIAGAIQAaAtAkAnQAEAEAEAEQA8A/BCA6QAxArAoA6QAGAJAGAIADgDwQAAgDAAgDQAAgJAAgKQACgzAFg4QABgEAAgF");
	this.shape.setTransform(33.7,75.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6B4E32").ss(0.1,1,1).p("AHdlXQkrhHg0AGQg1AGgbgDQgbgDgQAEQAMAdAQAfQAgA9ANBBQABACAAADQAHAjgGAjQgEAWgFAUQgCAFgBAFQgNAAgLgCQgQgDgPgGQgmgSgtgWQgsgVgagmQAHAsARAmQASAoATArQATAqAQAuQAQAvgIAwQgIAxARAsQARAuAXAnQAZAnAXApQAHAMAHAMAADmUQgfAAgggEQgugGgugJQgsgIgtAFQgEAAgEABQgwAHgpAUQgsAVgeAiQggAmgPAvQgCAGgCAHQgFAQgCAQQgFAZgBAbQgBAwAHAvQABAHAIAGQAJAGADAKQAQAtAYApQAJAQAKAPAl7BgQAMARANAQQAUAZASAa");
	this.shape_1.setTransform(49.5,43.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ACA8A3").s().p("AAAAWQgEgFgDgFQgagyAwAVQgEAOACAOQAAAEAEADQgDAFgEAAIgFABQgCAAgDgCg");
	this.shape_2.setTransform(-9.9,81.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ADA59F").s().p("AghgDQgCgFgFgDIAJgLIAHgJIARgWQAEAEADABQAJADAJgDQg7AqBHAwIALAJQgMADgJAAQgnAAgOg5g");
	this.shape_3.setTransform(-4.3,80.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#474441").s().p("AgYAVQgUgxBJgBIgPAUIgJAJIgPAVIgGAJQgHgFgBgEg");
	this.shape_4.setTransform(-5.8,75.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#423938").s().p("AgYgEQgEABgHgFQgEgEgBgEQAAgEAFgGQAEADAGABQAeAEAiASQADAJgDAIQgBAGgDAEQghgbgagEg");
	this.shape_5.setTransform(47,104);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#302C2A").s().p("AgUAsQgFgDAAgEQgBgEAFgGIAHgJQAfgQgNg2IAMAJIAKAJQgBAhgEAeQgCAGgDAEIgRAGQgFADgEAFIgKgJg");
	this.shape_6.setTransform(60.4,111.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#44413D").s().p("AgTALQgJgDgEgDIgLgGIgLgJIAJgLQAGAFAGACQApAIAvAbIgOABQgfAAgdgLg");
	this.shape_7.setTransform(45.2,98.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#201C1A").s().p("AACAfQgEADgDAFQgHgGAAgEQgBgEAFgGIAIgLQgagIgUgQIAFgGQAFADAEAAIADAAQAMgBAMgJIAAAHIAAgHQAFgEADgGIAJAHQgFALAJAJQADAGAGAFIAGAFQAHAHAHADIABAEQABAGgCAGQgBAGgEAEQgTgPgTAGgAgFgdIAAAAg");
	this.shape_8.setTransform(56.8,102.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#847B7A").s().p("AgBAFQgIgIAFgLIAAAAIABAAQgBALAEAIIAHAKQgHgFgBgFg");
	this.shape_9.setTransform(58.7,100.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CC9966").s().p("ABPAVIALAIQgGAGgFAFIAAgTgAhYgnIADADIgDABIAAgEg");
	this.shape_10.setTransform(48.2,95.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3E3935").s().p("AAeArIAJgKIhIg4IgLgIQAFgHAAgEQgBgNArAdIAfAWQAVAZgUAag");
	this.shape_11.setTransform(30.6,96.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#444342").s().p("AAAAJIgKgIIgIgFIAIgLIAJAHIAUALIgHANQgGgCgGgFg");
	this.shape_12.setTransform(13.8,99.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A19D97").s().p("ABBA5QhDgPhIg+IgJgHQADgEADgIQATgqAbAcQgKAVAiAQIAHAHIAKAIIBKA3IgIALIgLgIg");
	this.shape_13.setTransform(26,94);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#221F19").s().p("AhCgeIgXgWIAFgGIALAIIAJAHQBGA9BFAPQABAIAFAHQACAGAHAFQhOgShOhHg");
	this.shape_14.setTransform(25,96.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2A2929").s().p("AE4B8QADgEAGgDIASgGIAMAJQgNANgNAKgAjigqIhohRIgLgIIgJgHIAEgEQA9AzA5AMIAIAHIALAJIAqAgIgRAWIgqghg");
	this.shape_15.setTransform(28.1,104.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#ABA9A6").s().p("AAzA1IgqghIgJgJIgIgGQgHgFgGAAQgzgdgDgeIAKAIIALAIIBGA2IAWARQAEAEAGgDQAGABADgEIAJAGIAKAJIgIAKIgHAJIgKgHg");
	this.shape_16.setTransform(6.1,96);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1F1C19").s().p("AAaAcIhGg2IgLgIIAIgLIALAJIBGA2IAWARIgIAKIgWgRg");
	this.shape_17.setTransform(5.1,94.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#BEB6AF").s().p("AggAhQADgEACgGIgBgiIAJAHQARAMAJgZIAIgLIAHgJIALAJQgbAgggAig");
	this.shape_18.setTransform(3.2,82.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CEC8C2").s().p("AgRAHQgEAAgHgFQgJADgJgDQgFgBgEgBIAIgLIAPgUQAEAEAIgBQAdAAAlAYIAJAFQADAKgDAJQgBAFgGAGQgjgggeAIg");
	this.shape_19.setTransform(0.5,75.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000099").s().p("ADdDDQikgqiphbIgXgNIgJgHIgKgIQgNgIgKgIQgvgfgQgjIAJgLQA9hKgXhAQAGAFADAFQAbAhAWgLIALAIIA1ApQgtAPABApQAAALADANQAAAEAHAFIgFAGIAWAVQBRBIBLASIAFADQAagqAjApQAEADAGABQAIADAJgDQAHAFAEAAQAcAEAhAdQASAggaAgg");
	this.shape_20.setTransform(27.2,93.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#181512").s().p("ABECEQgHgFgDgGQgEgHgBgIIALAJIAEADQAUgagVgbIgfgWIAJgNQAPAMAhAMIALAIIAUAQQgcAbAoAYIgDAFQgjgpgaAqgAhqANIAIgLIAwg7IgLgJIgLgIIg0gpIgLgIIAIgLIAMAIIAVARIAJAHIAUATQAUAQASAKIgQA2QgcgcgSAnQgDAJgDAEIgLgIg");
	this.shape_21.setTransform(27.3,89.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#BAB6B5").s().p("AAQAXQgRgJgUgOIgUgUIgIgHIAEgGIAhAWQAeAUAgAZQgQgCgSgJg");
	this.shape_22.setTransform(22.8,80.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AB7DxQhCghhGgvQhBgqhGg0IASgWIAKAIQBDA1A1AiQC/B6Cdg8IANATQg7AwhFAAQg0AAg6gcgAEFC4IgIgHQiqgbivhuIAHgNQCqBbCjAqIAFAEQAaghgSgfQADgFABgGQADgIgDgKQgigTgggDQgFgCgFgDQgFAGAAAEQABAEAEAEQgJADgIgEQgGgBgFgDIAEgEQgpgYAcgbIALAIIALAIQAEAEAJADQAnAMAlgDQADgEAEAAQAFgDAHAFIgFAGQATAQAbAKIgIALQgFAHAAADQABAEAGAGQAEgFAFgDQATgGATAPQANA4ghAQIgHAJQgFAGABAEQAAAEAFADIgNABQgfAAghgLgAjDAqQg3gig3g3QgDgCAEgEIAKAIIBpBPIApAhQgXgKgYgPgAiPAVIAIgLIgWgPIhIg4IgLgIQAFgHAGgCQAGgDALgCQAQAjAvAhQAKAJAMAGIALAIIgIAKQgEAFgGgBIgEABQgDAAgCgCgACEgMIgKgIQghgMgPgMIgKANQgsgdAAANQABAEgFAHIgJgHQgfgQAJgVIAPg2QASAJAQACQAFADAIADQAMAGAMADQArAMAmgYIAGAFIALARIgLgRIAiAaQgRAUgUAQIgEADIgEgDIABAEQACARAEAQQADAFAEADIgJAKIgUgOgAk2hAIgDAEQgGgFgDgGQgTgdgSgfQgHgFAAgEQgNi1DCBKIgBAUQgCAGgDAEQglgYggAAQgHABgEgEQhLACAUAyQABAEAHAFIgJALQgygVAaAzQADAGAHAFQAEADAFgCQAEgBAEgEIAKAIQAAAcAsAXIALAJQAEAfAyAdQAHABAGAFQg4gMg+gzgAhVhHQgDgMABgLQgCgqAtgPIALAJIALAIIgvA9IgJALQgGgFgBgEgAidjdQgCgGgHgFQAEgEAEgBQAeAGAeAUIgJALQgFADgGAAQgSAAgVgYg");
	this.shape_23.setTransform(24.4,96.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#261F1A").s().p("AgNBVIgLgIQgsgYAAgcIgLgIQgEgDAAgEQgCgOAEgOQAEADADAGQARBGA5gRIAGAFQAhghAbghIgLgJQAFgGABgGQADgIgDgKIgJgHQAEgEABgGIACgUIAKAJIAJAGQAYBAg+BJIgIAKQgMACgFADQgGADgFAGIgGALIgLgJg");
	this.shape_24.setTransform(-0.2,81.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#BE9670").s().p("ADlHuQgHgFgFADQgEAAgDAEQgwgdgqgIQgGgBgGgGQgFgDgCgFQgEgQgCgRIADgBIAEgDQAUgQARgUIgigaQgpg7gygsQhAg7g9g/IgHgIQgSgagUgZIgZghIgLgQIgTgcQgYgpgQgvQgDgLgJgGQgIgFgBgHQgHgvABgwQABgbAFgaQACgQAFgQIAEgNQAPgvAgglQAegjAsgVQApgUAwgHIAIgBQArgFAsAJQAuAIAuAGQAgAEAhABQAMAcAQAgQAgA9ANBBIABAEQAHAjgGAjQgEAWgFAVIgDAKQgNgBgLgCQgQgDgPgGIhVgnQgsgVgagmQAHArARAmIAlBTQATAtAQAtQAQAugIAwQgIAwARAtQARAtAZAnQAZAoAXAoIAOAZQgGA4gBAzIAAASQgMAJgMABIgDAAIgBAAQgEAAgDgDg");
	this.shape_25.setTransform(29.7,50.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0000FF").s().p("Ah1DFIgJgBIgJABQg0ABgygFQgfgEgagwQAMACAMABIADgKQAGgVAEgWQAFgjgGgjIgBgEQgNg/ggg9QgRgggMgcQAQgFAbAEQAcADA0gGQA0gGEpBGQBDAYAFAnQAEAnALAgQALAigcAnQgdAmgqAPQgsAPgmAMQgoANgvADQgYACgZAAIglgBgAE8hHIAAAAIASAGIgSgGgAhyjFIABAAIAEACIgFgCg");
	this.shape_26.setTransform(83.3,20.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.4,-0.2,129.2,123.9);


(lib.anim_buffyruntofinish = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AC+vGQADgSAFgSQAFgSAGgTQAIgagCgbQgCgmATggQASgfAWgdQAagkgWglQgeAPgPAkQgPAggUAXQABgkAQgkQAQgmgJgnQgIgigYAOQgRAKgGAVQgKAogJAoQgLAvgcgMQgHgsAEgnQAEghgHggQgFgXgUgJQgTgIgOAUQgfAuAUA4QAKAdgCAgQgEArgdgjQgPgTgLgVQgQgfgbgbQglglgBA6QAAAbAOAYQAYAoAkAYQAPAKAGARQAEAQgKAFQAeACAaAPQACABABAAQAhATAWAdQALAQgCAKAAzxeQAmgNAmANQASAGAEACAgLxjQgEACgFAAQgRACgLgHQgKgGgGgMQgJgRgHgPQgZg3grAUQABA4AjAkQAUAWATAUQAGAIADAFQAFAJgFADQAFAgAZAVQAdAYAqAFQAFAYAHAWQAKAigEAjQgGAmgOAlQgNAigJAlQgKAmgCAmQgBAmANAjQAQApAUAYQgigEgXAYQgbAagSAjQgTAkAPAnQAHATAFATQgWAHgNAEQgYAJgSAQQgfAcAKAoQANAhAhAVQAhAXApAJQAcAHAfgDQAngDAggZQAWgRADgbQgDgLABgMQAjAUAWAeQALAPAEARQAEATAJAPQgiA0gbAyQgoBPhFAtQhDAthnATAhAwoQgBAHABAFAAlvKIAAAAQAZAFAcAKAAlvKQgCgJgBgJAkDjhQBkgDgChCQAagPAWgVQAOgNgCgTQAjgegdg8QAzgSgcguQAPgbgRgYQgFgHgDgGQgFgMAKgWQAIgRgOgHQglgWgtAeQAPgLAGgVQAPgyhAAGQABgKgEgIQgcg7g/AhQAAgKgCgJQgBgJgHgEQhAgfg8AjQACgRgQgEQhHgUg8AvQAFgJgNgQQhSAHgeBLQgCgMgSgKQhFAeAEA/QgdgVgQAzQgIAdAMAJQgPgKgIAQQglBLA/AnQAEADAEACQgFABgLAIQgDAsAsAKQACAlA1gRQgBgGADgIQgJgJASgKQgIgKgGgKQAcgVAlgbQAfgFAWgVQAJgJAJADQAkANArAAQAhgeAiAnQAXAKAXAfQgQAqAsAXQALgSACgTQAAgIgBgJAlYs/QgaghAgghQApgrgLA5QgEATgSAJQgVAKAHAOgApSlmQAkgRAnAMQAQAFAHALAp1ipQgKACgIAFQgIgWAMgTQAkAJASgqQADgIAPAGQAXAJAVALQAKACAKAGQAWANgFAaQgDAOgIAJQgLAOgXACQgRACgMADQgEgnghgEQgPgCgNADQAZgTAYgQQAcgTAZAFApQmRQAYgjApABQASAAALAMAljmaQALAQAJgBQgJgxAmAkQAfAcgNAoQgHAUgKAGQAHAqAYAdQAHAJAIAJAkxk6QgIAGgLgEACZkIQgGAKgFAKQgBABAAABQgCADgBACQgJAQgGAQQgGARgDASACOj0QgBgMAMgIQALgSAKgUQASgjAPglQANgiAYgeQAPgTALgWQANgbgJgcQACgMAAgMQACgogEgnQgEglgKglQgKgkgJgkQgKglgJgmQgJgmAAgoQAAgfAAggArasfQADgSAMgNQATgWgoAEQgJALgDALQAAABAAABQgEAVATAWQABgCACgQgAyzizQgPAFgQADQgCAMgGAKQgRAhgeAXQgpAggQgsQgNgnAXgbQAWgbAhgYQASgNAPgQQAegeguABQgpAZgjAPQgUAjgOAjQgKAbgOggQgHANgHANQgWAngKgvQgIgkARgMQgOAJgRAFQgJACgGgEQgUgPAggVQAggUAdgYQAegaAkgMQAlgMAogEQAlgDAlAHQAkAIAdAdQAZAaAUAfQAZAiAjAUQAiATAiASQAiATAgASQAhAUAfAYQAeAYAeAaQAdAXAeAYQAHAGAHAHQAEgNAUgPQAegWAigMQAkgPAlAFQAaADAaAJQAKgRAPgNQAYgVAbACQgJAhAbAgQAXAdAOAiQADAIgBAKQgCAnATAjQAAACABABQgBgBgBgBQgHgGgJAAQgMAHgQAIQgjASglAMQggAJggAJQgkALglAFQgmAFgnABQgmACgmgFQgjgFghgMQglgOgggXQgcgUgagWQgbgYgWgdQgXgfgPgjQgPgigVghQgTgfgYgbQgZgdghgUQgagQgcgPQAXgIATgNQAMgIADgPA2bjNQASgLAOgUQAYghAngFQAmgGAmAAAuEq3QgIg0gkAuQgFAGABAIQACAnAkASQAWAKARgIQgYgdgFgmgAvdm6QgpAVAjAZQAPAKAIgRQAUgnAhAKQghgdglATgAqJmcQghgHgQAaQgCACgBADArGmRQgCADgBADQgEAHgCAGArCkNQgHgCgGgEQgagNANgaQALgXAUgCQABAAABgBQANgBAPAHAq9lTQgUgMAAgRArC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");
	this.shape.setTransform(149,139.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E0CEBC").s().p("Aq+FhQgpgKgIgqQgGgkgOghQgPglgbgcQgcgcgmgKQglgKgjgOQgmgPgUgfQgOgXgIgZIgGgWQgGglAKgkQALgqAuAWQAiAQAgAUQAhAVAdAZQAeAXAfAXQAfAXAWAfQAXAfAdAaQAeAaAjAYQAVAaAQAhQAIATABATIAAAAQABARgGARQgNAnglADIgVABQgcAAgbgGgAq1EsQAUAAATgHIAAgBIABAAQAZgKAQgUQgQAUgZAKIgBAAIAAABQgTAHgUAAIAAAAIgBAAQgRAAgRgGQARAGARAAIABAAIAAAAgAroD7QAogBAlgPQglAPgoABgAr1DFQAeAAAdgLQgdALgeAAIgBAAIAAAAIgMAAIgCgBIACABIAMAAIAAAAIABAAgAsGCiQAbAAAagLIACgCIgCACQgaALgbAAIAAAAIAAAAIgKAAIgDgBIADABIAKAAIAAAAIAAAAgAr/BjQgcAWgiAIQAigIAcgWIANgKIgNAKgAtsBeQAbgDAVgQQgVAQgbADgAuKAyQgbAOgfABQAfgBAbgOIAxgaIgxAagAuuABQgdAPggAEQAggEAdgPIAngTIgnATgAvzgTQAmAAATgcIABgCIgBACQgTAcgmAAIgBAAIAAAAIgGgBIAGABIAAAAIABAAgAPmDUQAKglgMghIALAEQAAgHAHgLIgBgNQgCglgJglQgIglgKgjQgKgmgHgmQgHgkgKgkIgWhKIgZhLQgHgYgMgDQAngOAXAlQATAfAJAkIASBJQAJAlANAmQANAmAGAmQAHAmgCAmIAAAlQAEAhgEAlQgDAngRArIgIAHQgPALgWAEQARgGAIgcgANkAVIgCgRQADgSAAgUQAAgSgDgSQgFglgIgjQgJgkgQggQgLgYgOgXIgHgLQAGgcALgBQAHAAAKAMQAXAdAPAiQAQAiAGAlQAGAnABAoQACAmgCAkQgBAdgLAAQgHAAgKgKg");
	this.shape_1.setTransform(194,243.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBF8F7").s().p("AouEZQgPghgWgaQgjgYgdgaQgegagXgfQgWgfgfgXQgfgXgegZQgdgXghgVQgggUgigQQgtgWgMAqQgKAkAGAjIgEACQgJgZgHgZQADglARggQAVgnApgBQAogBAlATQAIAFADAHQARAPAcAcQATASARAUIAOARIAuA6QAXAgAlAGQAlAGAUAeQAVAfAQAgQARAjAGAkQAFAhgHAZQAAgTgJgTgAPHEdQgngGgSgoQgIgQgFgRQAcgXAlgHIACgBQALgBAKAAIAAAAIAAAAQAQAAAOAEIADABIgDgBQgOgEgQAAIAAAAIAAAAQgKAAgLABIgCABQglAHgcAXQgFgUgCgVQgDgmADgmQACgQgCgPQAbAaADgtQABgmgBgkQgCgogGgnQgGglgQgiQgPgigXgdQgKgMgHAAQAXgaAegaQAKgIAIACQAMADAHAYIAZBLIAWBKQAKAkAHAkQAHAmAKAkQALAlAHAlQAJAlACAlQgGANAHAAQgGALAAAHIgMgEQAMAhgKAlQgIAcgRAGIgFABIgEABIgKABIgJgBg");
	this.shape_2.setTransform(191.8,239.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000FF").s().p("AEqHLIg9gwQgdgWgbgaQgegagUgnIACAAIABAAIAEAAIAAAAIAAAAIAOAAIAFAAQAkgDAhgQQAfgPAdgSQAigUAdgbQAbgaAZgdQAYgdASgiIACgFIgCAFQgSAigYAdQgZAdgbAaQgdAbgiAUQgdASgfAPQghAQgkADIgFAAIgOAAIAAAAIAAAAIgEAAIgBAAIgCAAQgagBgagGIgBAAQgHgCACgJQAEgmgLgkQgKgkgTghQgTgigZgcQgdgegoAJQgIACgFgCQgGgCABgKQABgRAIACIAXAGIAQAEQAZAEAXABQAlAAAjgOQAhgNAdgTQAhgXAZggQAXgdAVgeQAUgcASgdQAYgogagfIACgCQAbARAeAOQAiAPAgAQQAkATATAjQAQAfADAkQADAlgHAjQgHAkgRAhIAAAAIACABQAbAaASAcQAUAhAbAcQAXAZAHAjIgNgHQgfAPgWAcQgYAegbAaQgaAXgUAcQgVAcgXAbQgKAMgLAFQgHAEgIAAQgOAAgOgMgACDEqIAAAAgAm2g3QgegLgSgZIgFgIIgBgCQgSgjACgoQABgKgEgIQgNgigYgdQgaghAJgiQALABAMAFQgBgLAJgEQAWASAPAXQgEAFAAAEIAAAEIAIAGQAcATAhgNQAhgOAXgfQAXgggBgpQgCgkgYggIAQALIgQgLIgJgHQAfgKARAUQAGAGAFAKQANAeAAAhIAAAOQgEAlgbAcQgaAcgkANIgBAAIgCABIgBABQgQAFgQAAIAAAAIgBAAQgSAAgSgHIAAAAIgBAAQglgPgPgiQgFgLgBgHQABAHAFALQAPAiAlAPIABAAIAAAAQASAHASAAIABAAIAAAAQAQAAAQgFIABgBIACgBIABAAQAkgNAagcQAbgcAEglIAAgOQAAghgNgeQgFgKgGgGQAUgKANgFQAOAhAgAWQAiAWAoAJQAfAIAegDQAogEAfgYQAXgSACgbQgCgLAAgMQAhAUAWAfQALAPAEARQAEASAJAPQgiA0gYA1QgoBPhFAsQhFAthnATQAagOAMgYQgMAYgaAOIgDABQgiASgmABIgGAAQgjAAghgNgAjIiEQAcgBAXgPIABAAIACgCIABAAIABgBQAegVAOgiQAKgYAAgaQAAgMgCgNQACANAAAMQAAAagKAYQgOAigeAVIgBABIgBAAIgCACIgBAAQgXAPgcABIAAAAIAAAAIgOgBQghgEgcgRQAcARAhAEIAOABIAAAAIAAAAgAkhg+IAAAAgAl8nFIAAAAg");
	this.shape_3.setTransform(165.4,166.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgoACQgQgCgNADIAyghQAagSAZAEQAKACAJAGQAWANgEAYQgDAOgIAKQgMANgXADQgQABgKAEQgFgogggEg");
	this.shape_4.setTransform(92.9,122.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#805E3C").s().p("AgCBAQACgJAHgIQAMgEAQgBQAYgDALgNIAIAVQgKABgIAFQgYANgXAAQgJAAgGgCgAhGgcQAjAJASgqQAEgHANAGQAWAJAWAKQgZgEgaASIgxAhQgKADgIAFQgIgVAMgTg");
	this.shape_5.setTransform(91.7,122);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AjiFrQggAAANghQAQgnAsAbIAIAGQgUgFgDAVQgEAYgVAAIgBgBgAlPCbQgjgZApgVQAlgTAhAdQghgKgUAnQgFALgIAAQgFAAgFgEgAj6hNQgkgSgCgnQgBgIAFgGQAkguAIA0QAFAmAYAdQgIAEgIAAQgLAAgMgGgAhYkPIAAgCQADgLAJgLQAogEgTAWQgMANgDASIgDASQgTgVAEgWgAFAlYQApgrgLA5QgEATgSAJQgVAKAHAOQgaghAgghg");
	this.shape_6.setTransform(83,84.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3D2C1D").s().p("AC1EQQgYgegHgqQAKgGAGgTQAOgogfgdQgmgjAIAxQgJABgLgQIABgHIgBgLIABALIgBAHQgBASgLATQgtgXARgqQgYgfgXgLQggglggAdQgrgBgkgMQgJgDgJAIQgWAVgfAGIhBAwQAFAJAJAKQgSAKAJAJQgDAIAAAHQg1AQgBglQgtgKADgsQAMgIAEgBIgHgEQg/goAlhJQAHgPAPAKQgMgKAJgdQAPgzAdAVQgDg/BFgdQASAKACALQAehKBRgIQANAQgFAKQA9gvBFATQAPAEgBARQA7gjBBAgQAGADACAJQACAKAAAKQA+ghAdA7QAEAHgCAKQBAgGgPAyQgGAVgOALQAtgeAlAWQANAIgHAQQgLAXAGAMIAIAMQAQAYgOAbQAbAtgyARQAcA8gjAfQADATgOANQgWAVgaAOQACBChkADIgPgRg");
	this.shape_7.setTransform(103.3,87.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BE9670").s().p("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");
	this.shape_8.setTransform(140.5,126.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,300,281.1);


(lib.goNext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.961)","rgba(255,255,255,0)","#2B2B2B"],[0,1,1],0,0.1,0,0,0.1,11.3).s().p("AhLAqQghgSACgYQgCgXAhgRQAggTArAAQAsAAAgATQAfARAAAXQAAAYgfASQggASgsAAQgrAAgggSg");
	this.shape.setTransform(22.8,8.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.502)").s().p("AhThcICoBdIioBcg");
	this.shape_1.setTransform(25.1,20.4);

	this.blinker = new lib.general_buttoncolor();
	this.blinker.setTransform(23.4,20.1,1.5,1.5,0,0,0,11.9,11.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(255,255,255,0.961)","rgba(255,255,255,0)","#2B2B2B"],[0,1,1],0,0.1,0,0,0.1,14.8).s().p("AhiA3QgrgXACggQgCgfArgWQApgYA5AAQA5AAAqAYQAqAWAAAfQAAAggqAXQgqAXg5AAQg5AAgpgXg");
	this.shape_2.setTransform(23.4,8.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(0,0,0,0.502)").ss(1,1,1,3,true).p("AAACxQhIAAg0g0Qg0g1AAhIQAAhHA0g1QA0g0BIAAQBJAAA0A0QA0A1AABHQAABIg0A1Qg0A0hJAAg");
	this.shape_3.setTransform(23.3,20.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(103,103,103,0.839)","rgba(134,134,134,0)"],[0.678,0.918],-0.8,0,0,-0.8,0,24.9).s().p("AisCkQhFhEAAhgQAAhgBFhDQBEhFBhAAQBfAABBAwQBCAwAVCqQAVCskMAbQhhAAhEhFgAgHCQQBEAAAzgwIABAAIADgEQA0g0AAhHQAAhJg0g0IgFgFIgBgBQgyguhDAAIAAAAIgBAAIAAAAIgBAAQhEAAgyAuIgBABIgCACIgBABIAAAAIgCACQg0A0AABJQAABHA0A0IACACIABABQAzAxBHAAIAAAAIAAAAIAAAAIAAAAQhHAAgzgxIgBgBIgCgCQg0g0AAhHQAAhJA0g0IACgCIAAAAIABgBIACgCIABgBQAyguBEAAIABAAIAAAAIABAAIAAAAQBDAAAyAuIABABIAFAFQA0A0AABJQAABHg0A0IgDAEIgBAAQgzAwhEAAIAAAAIgBAAIABAAIAAAAg");
	this.shape_4.setTransform(24.2,23.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.blinker},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.blinker},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.blinker},{t:this.shape_1},{t:this.shape}]},2).wait(1));

	// Layer 2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#33FFFF").s().p("AioCqQhGhHAAhjQAAhiBGhGQBGhHBiAAQBjAABGBHQBHBGgBBiQABBjhHBHQhGBGhjAAQhiAAhGhGg");
	this.shape_5.setTransform(24.4,21.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0099FF").s().p("AioCqQhGhHAAhjQAAhiBGhGQBGhHBiAAQBjAABGBHQBHBGgBBiQABBjhHBHQhGBGhjAAQhiAAhGhGg");
	this.shape_6.setTransform(24.4,21.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.5,46.7);


(lib.blank = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blank_gr("synched",0);
	this.instance.setTransform(32.6,17,1,1,0,0,0,32.5,17);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,65,34);


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
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,2,9,9);


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
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,2,9,9);


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
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,2,9,9);


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

	this.shadow_mc = new lib.fcb_leftIn();

	this.highlight_mc = new lib.fcb_rightIn();

	this.highlight3D_mc = new lib.fcb_rightOut();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.highlight3D_mc},{t:this.highlight_mc},{t:this.shadow_mc},{t:this.darkshadow_mc}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13,13);


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
	this.check_mc.setTransform(2.9,3.2);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.9,3.2,7.1,7);


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
	this.check_mc.setTransform(2.9,3.2);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.9,3.2,7.1,7);


(lib.animbuffyrun = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frontArm
	this.instance = new lib.staticbuffyfArm();
	this.instance.setTransform(157.3,83.1,1,1,0,0,0,98.9,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:97.4,regY:16.5,scaleX:1,scaleY:1,rotation:13,x:155.8,y:84.1},4).to({regY:16.4,scaleX:1,scaleY:1,rotation:-85,x:155.7,y:84},8).to({regX:98.9,regY:15.6,scaleX:1,scaleY:1,rotation:-12,x:157.3,y:83.2},4).wait(1));

	// head
	this.instance_1 = new lib.animbuffyhead();
	this.instance_1.setTransform(140.8,66,1,1,0,0,0,82.7,66);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:82.6,scaleX:1,scaleY:1,rotation:-18,x:140.7},5).to({regX:82.7,scaleX:1,scaleY:1,rotation:23.8,x:140.8,y:66.1},6).to({scaleX:1,scaleY:1,rotation:3.8,y:66},5).wait(1));

	// frontLeg
	this.instance_2 = new lib.animbuffyfLeg();
	this.instance_2.setTransform(193.5,145.3,0.995,0.995,113.5,0,0,29.7,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:29.8,rotation:26.8,y:145.4},4).to({regX:29.7,rotation:119.1,y:145.3},8).to({regX:29.8,scaleX:0.99,scaleY:0.99,rotation:111.3,y:145.4},4).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AJOAhQgigTgtgEQg2gFg3gFQh9gLh+gOQivgTiwAdQjEAfjBAR");
	this.shape.setTransform(184.6,262.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("Andg4QAHAAAIAAQgMAAgFAAQABAAABAAgAlng4QgeAAgeAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgSAAAxBgaQC4gaC6gCQB5gBB5gBQCoATC+gDQCBgCCCgCQBQAABGASQgqAPg4ALQhRANhvAHQiyALi1ABQiCAAiCAAQHJAeIogGQF9gEE/AA");
	this.shape_1.setTransform(205.6,262.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(17));

	// body
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#6B4E32").ss(0.1,1,1).p("AAeoCQAHAqgFAmQgJBRgwBDQgxBBgiBaAnyjkQBFgzBEgwQBGgyA1gtQA9gzAJhFAhwh5QgBABAAABAg2BMQAqAKAtAIQAsAIAwAFQAuAFAwAMQAwAMAwABQAIABAIAAQApABApACQAwACA9AEQADAEACADQgGAagDAZQgCAVgDAWQgFAtgXAoQgYAoghAeQgHAHgHAGQgcAXgeARQglAVgfASQghATgqAQQgsARgvgGQgvgGgpgUQghgQgPguQgPgqgIguQgHgmgHgmQgBgJgBgJQgHgvAAgxQAAgvAHguQgBgCAAgCQAAgBAAgBQgDgOgDgQAIQCeQgBgCAAgCAgzEhQgBgYAAgZQgBgwACgxQACgggEgdAmQn6QgEgUADgCAoPlVQgEgHA0gI");
	this.shape_2.setTransform(187.4,110.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#6B4E32").ss(0.1,1,1).p("Ak5lVQASgBARgBQAvgCAugDQAFgBAFAAQAsgCApAHQAvAHAtALQADAAAEABQAHACAHACQAhAKAZASQADACADACQADACAEACQAjAWAmAWQAoAXAoAVQArAXAlAeQAnAeAeAnQAcAkAZAnQAJAOAGASQABADABADQAEAGAEAGQATAeAPAfQAVAtAEAxQAEAxgGAxQgEAYgFAXAhzA7QgCAFgCAFAiNBkQgEAEgDAEQgeAlgrAVQgrAVgxAEQgvAFgugQQgXgIgSgMQgSgMgNgRQgUgaACgrQADgvgKgsQgBgDgBgDQgHgggMgoQgMgtADAFQAEAFgFgGAhEDvQgBgNgEgNQgMgsgZglQgOgTgRgNAh4BIQgKAOgLAOAmYlPQATAAATgBQAcgDAdgCQgBADgBAD");
	this.shape_3.setTransform(188.1,91.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000FF").s().p("ABsIdQgvgGgpgTQgfgQgRguQgPgqgIguIgOhNIgBgwQgBgxACgxQACgfgEgeIgBgEIAAgCQAqAKAtAJQAsAIAwAFQAuAFAwALQAwAMAwACIAQAAIBSADQAwACA9AFIAFAHQgGAZgDAaIgFAqQgFAugXAnQgYAoghAfIgOAMQgbAYgfARIhEAmQghATgqAQQggANgiAAQgMAAgNgCgAmdgKQgXgIgSgNQgSgMgNgRQgUgZACgrQADgwgKgtIgCgGQBFg0BEgwQBGgxA1guQA9gzAJhEQAsgDApAHQAvAIAvAKIAFACIAOAEQAHAqgFAlQgJBSgwBDQgxBAgiBaIgEAKIgBACIgVAdIgHAIQgeAkgrAVQgrAVgxAEIgVAAQgkAAgkgKg");
	this.shape_4.setTransform(188.8,110.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BE9670").s().p("AIJFeIgBgDIgFgHQg9gFgwgCIhSgDIgQAAQgwgCgwgMQgwgLgugFQgwgFgsgIQgtgJgqgJIgGgfIgBAAQgBgMgEgOQgMgrgZglQgNgTgSgNIAVgdIABgCIAEgKQAihXAxhBQAwhDAJhSQAFglgGgqQAgAKAZARIAGAFIAHAEIBJArQAoAYAoAVQArAWAlAeQAnAeAeAnQAcAlAZAnQAJAOAGASIACAFIAIANQATAeAPAfQAVAsAEAxQAEAxgGAyQgDAYgFAXIgCAAgAoMhsQgMgsADAFQABABABABQAAAAAAAAQAAAAgBgBQAAgBgBgCQgFgGA1gIQA0gIAPg9QAPg+gEgTQgEgUADgCQATAAATgCIA6gEIAigCIBdgGIAKAAQgJBEg9AzQg1AuhGAxQhEAwhFA0QgHgggMgpgAk7lQIADgFIgDAFg");
	this.shape_5.setTransform(188.1,91.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(17));

	// backLeg
	this.instance_3 = new lib.animbuffybLeg();
	this.instance_3.setTransform(199,141.8,0.998,0.998,-33.1,0,0,89.4,26.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({rotation:-106.1,y:141.7},8).to({regX:89.5,regY:26.3,scaleX:1,scaleY:1,rotation:-63.2,x:198.9},4).wait(1));

	// backArm
	this.instance_4 = new lib.staticbuffybArm();
	this.instance_4.setTransform(156.1,66.1,0.999,0.999,24,0,0,9.1,40);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:39.9,scaleX:1,scaleY:1,rotation:-0.8,y:66},4).to({regX:9,regY:40,scaleX:1,scaleY:1,rotation:159.4,x:156},8).to({regX:9.1,regY:39.9,scaleX:1,scaleY:1,rotation:36.3,x:156.1,y:66.1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(58,0,257.6,278.8);


(lib.anim_buffyfinishline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhVtAy7MAAAhl1MCrbAAAMAAABl1g");
	mask.setTransform(-39.7,543.3);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AxDGHQAngBAfAYQAeAXAUAeQARAaAWAWQAXAXAigIQAlgIAigRQAmgRAmALQAcAJATAZQAJANARgIQAggQAZgXQAZgZAkAAQAmgBAkgBQAkgCAkgDQAkgEAigLQAjgMAkgKQAjgLAZgZQAfAnAjgcQAcgVIWmGQAfAEAfgHQALgDAMgFQAGgDAGgDQAggSAhgWQAwggAtgkQBCg3BEg1QA1gpAmgrQAmgrAlgwQAug6BAAEQBfAHBFg7QAWgTAbgJQA4gTBBgIQAygHAngiQAKAZAaAIQAPAEAOAHQgPAQAPAXQAVAhAoAHQgZAXgwACQgmgugtADQhCAGgvAqQgQgrgrAnQhOBFhgAKQgeAEgZALQgvAXgiA2QgOAXgXgCQgYgBgSAKQiLBNhvB0Qg6A8glBCQoOFSiCAlQiEAlgSAGQg5AVg5AYQgzAWg1gSQhDgXg/AXQgVAIgBAXQgCA3g1ADQg8AEgrgpQgRgRgaAGQgmAIgfAXQgcAXgiACQgrACgjgTQgQgJgOgOQgYgZgRgfQgUgmgmgQQgRgHgSgCQgngDgdgYQgHgGgFgJQgNgXgZAEQgpAGglAVQgjAUgmAIQghAIgjgKQgYgIgaAFQggAFhIAMQAkgIAcgWQARgNABgSQADgcAkAJQAmAJAigIQAigJAegTQAfgUAigOQAmgPAkAGQAnAGAPAiQAKAVANAMQAGAEAHAAQAmACAkgCg");
	this.shape.setTransform(-356.7,505.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF2B2B").s().p("AvkJYQgQgJgOgOQgYgZgRgfQgUgmgmgQQgRgHgSgCQgngDgdgYQgHgGgFgJQgNgXgZAEQgpAGglAVQgjAUgmAIQghAIgjgKQgYgIgaAFIhoARQAkgIAcgWQARgNABgSQADgcAkAJQAmAJAigIQAigJAegTQAfgUAigOQAmgPAkAGQAnAGAPAiQAKAVANAMQAGAEAHAAQAmACAkgCQAngBAfAYQAeAXAUAeQARAaAWAWQAXAXAigIQAlgIAigRQAmgRAmALQAcAJATAZQAJANARgIQAggQAZgXQAZgZAkAAIBKgCQAkgCAkgDQAkgEAigLQAjgMAkgKQAjgLAZgZQAfAnAjgcQAcgVIWmGQAfAEAfgHQALgDAMgFIAMgGQAggSAhgWQAwggAtgkQBCg3BEg1QA1gpAmgrQAmgrAlgwQAug6BAAEQBfAHBFg7QAWgTAbgJQA4gTBBgIQAygHAngiQAKAZAaAIQAPAEAOAHQgPAQAPAXQAVAhAoAHQgZAXgwACQgmgugtADQhCAGgvAqQgQgrgrAnQhOBFhgAKQgeAEgZALQgvAXgiA2QgOAXgXgCQgYgBgSAKQiLBNhvB0Qg6A8glBCQoOFSiCAlQiEAlgSAGQg5AVg5AYQgzAWg1gSQhDgXg/AXQgVAIgBAXQgCA3g1ADQg8AEgrgpQgRgRgaAGQgmAIgfAXQgcAXgiACIgJAAQgmAAgfgRg");
	this.shape_1.setTransform(-356.7,505.1);

	this.instance = new lib.static_rippedfinishline();
	this.instance.setTransform(-356.7,505.1,1,1,0,0,0,165.2,61.7);
	this.instance._off = true;

	this.shape.mask = this.shape_1.mask = this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance}]},29).to({state:[{t:this.instance}]},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({y:750.4,alpha:0},10).wait(1));

	// Layer 2
	this.instance_1 = new lib.anim_buffyruntofinish();
	this.instance_1.setTransform(628.6,528.6,1,1,0,0,0,149,139.6);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-344.8,y:518.4},29).to({x:-771.4},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-522.9,388.5,1031.9,280.1);


(lib.fcb_states = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{up:0,press:1,uncheckedDisabled:2,checkedDisabled:3,checkedPress:4,checkedEnabled:5});

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
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(2));

	// check_disabled
	this.instance_1 = new lib.fcb_check_disabled_1();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},1).wait(2));

	// background pressed/disabled
	this.instance_2 = new lib.fcb_background_pressed_1();

	this.instance_3 = new lib.fcb_background_disabled_1();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},2).to({state:[]},1).wait(1));

	// background static
	this.frb_frame_mc = new lib.fcb_background_1();

	this.timeline.addTween(cjs.Tween.get(this.frb_frame_mc).wait(6));

	// check box frame
	this.fcb_frame_mc = new lib.fcb_frame();

	this.timeline.addTween(cjs.Tween.get(this.fcb_frame_mc).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13,13);


(lib.contentpastperfect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* _root.v1a.start();*/
	}
	this.frame_63 = function() {
		/* _root.v1a.start();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(63).call(this.frame_63).wait(73));

	// Layer 10
	this.text = new cjs.Text("", "12px 'ComicSansMS-Bold'", "#FF0000");
	this.text.lineHeight = 19;
	this.text.setTransform(-222,-42.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKAJQgFgEAAgFQAAgEAFgEQAFgEAFAAQAHAAAEAEQAFAEAAAEQAAAFgFAEQgFAEgGAAQgFAAgFgEg");
	this.shape.setTransform(264.3,126.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAbBMQgHAEgHABIgNABQgXAAgPgOQgPgPAAgWQAAgcAPgOQAQgRAWAAQAIAAAGABQAGACAEAEQABgjACgNQACgMALAAQAGAAAEAEQAEAEAAAGQAAAOgDAeQgCAaAAAPQAAAkACANIABACQAAAGgEADQgEAEgGAAQgHAAgEgGgAgUAEQgHAJAAARQAAALAIAIQAIAHALABQAGAAAEgDIAJgGIADgDIAAglQgDgGgGgCQgFgCgHAAQgNAAgIAGg");
	this.shape_1.setTransform(253.6,119.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AghArQgRgNAAgXQAAgXANgSQAQgTAXAAQARAAAMAFQAPAIAAAPQAAALgNAJIgWAJIggAPQAFAGAHACQAHADAGAAQAOAAAKgGQAHgFAFAAQALAAAAALQAAALgQAHQgPAGgQAAQgWAAgPgLgAgNgXQgGAGgEANIAWgKQAMgGAJgFQgIgEgKAAQgHAAgIAGg");
	this.shape_2.setTransform(241.8,121.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgpBQQgEgEAAgGIABglIAAgmIgCglIgBgUQAAgIADgHQAFgGAHAAQAGAAAEAEQADADAAAGIAAABQAHgEAHgBQAFgCAGgBQAYABAKATQAIAPAAAYQAAAUgMAOQgOAQgWAAQgHAAgKgDIAAApQAAAGgEAEQgEAEgGAAQgGAAgEgEgAgEguQgHACgHAGIACAnQAJAEAHAAQAKAAAFgGQAFgGAAgLIgBgTQgDgNgKAAQgGABgEADg");
	this.shape_3.setTransform(230.9,124.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgIA5QgDgDAAgGQAAgMgDgVQgCgVAAgLIgBgKQgMAGgMAQIgCACIAAAeIAAAIIAAAHQAAAFgFADQgEADgGAAQgIAAgDgIQgCgEAAgMIAAgjIgBgOIAAgPQAAgJADgIQAEgJAHAAQAGABAEAEQAEAEAAAGIAAAIQAPgRANAAQAQAAAFALQAGgFAIgDQAHgDAJABQATAAAHATQACAEADAXIAHA0QAAAGgEAEQgEADgGAAQgMABgCgMIgDgdIgEgbQgCgTgFABQgCgBgIAFIgMAIQAAALACAUQADAWAAALQAAAGgEADQgEAFgGAAQgEAAgEgFg");
	this.shape_4.setTransform(217.5,122);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAYAuIgRAHQgGACgDAAQgYAAgMgNQgNgNAAgaQAAgWASgRQASgSAXAAQAJAAANAGQAPAGAAAJQAAADgCADIgBAKIgBAOQAAARACAIIAFALIAEAKQAAAFgEADQgEAEgFAAQgFAAgKgJgAgMgTQgLALAAAMQAAANAFAHQAEAHALAAQADAAAGgCQAGgCAEgEQgCgXAAgLIAAgHIABgKIgDgBIgDgBQgMAAgJALg");
	this.shape_5.setTransform(203.6,121.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgnA0QgCgEAAgFIAAhAIAAgJIAAgKQAAgFADgEQAEgEAFAAQAMAAACAMQAQgOAVAAQAVAAgBAbIAAAHQAAAPgNAAQgNAAAAgNIgBgKQgUAEgKATIAAAxQAAAFgEAEQgDAEgHAAQgGAAgEgEg");
	this.shape_6.setTransform(193.1,121.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeAsQgQgOAAgVQAAgTAOgVQARgYASAAQALAAAOAFQARAHAAAJQAAAFgEAEQgDAEgGAAQgEAAgGgEQgGgFgNAAQgFAAgJAPQgJAPAAAJQAAAKAIAGQAHAGAKAAQAHAAAJgFQALgFACAAQAGAAAEAEQADADAAAFQAAAIgRAIQgPAHgKAAQgUAAgPgMg");
	this.shape_7.setTransform(182.5,121.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgyBAQAAgGADgDQAEgDAFAAIANABQAJACAGAAQANAAAHgJQAHgJABgUQgFAGgGACQgHADgFAAQgUAAgNgNQgMgNAAgSQAAgcAQgRQASgRAbAAQAKAAAHACQAGACAFAFQAMACAAANIgCATQgEAXgBAZQgBAggKAPQgNATgfAAQgnAAAAgPgAgOgsQgJAKAAAQQAAAMAFAGQAEAEAJAAQAHAAAIgHQAIgJABgJIAEgeIgGgDIgHgBQgPAAgJALg");
	this.shape_8.setTransform(163,124.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AghArQgRgNAAgXQAAgXAOgSQAOgTAXAAQASAAAMAFQAPAIAAAPQAAALgMAJIgXAJIggAPQAFAGAHACQAHADAHAAQANAAAJgGQAIgFAGAAQAKAAAAALQAAALgQAHQgPAGgPAAQgXAAgPgLgAgMgXQgHAGgEANIAXgKQAMgGAHgFQgGgEgMAAQgGAAgHAGg");
	this.shape_9.setTransform(151.8,121.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgIBPQgEgFAAgGIAAiJQAAgFAEgEQAEgDAEAAQAGAAAEADQADAEAAAFIAACEQAAAUgNgBQgEAAgEgDg");
	this.shape_10.setTransform(143.2,119.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgnA0QgCgEAAgFIAAhAIAAgJIAAgKQAAgFADgEQAEgEAFAAQAMAAACAMQAQgOAVAAQAUAAAAAbIAAAHQAAAPgNAAQgNAAAAgNIgBgKQgUAEgKATIAAAxQAAAFgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_11.setTransform(126.9,121.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AghArQgRgNAAgXQAAgXANgSQAQgTAXAAQARAAAMAFQAPAIAAAPQAAALgNAJIgWAJIggAPQAFAGAHACQAHADAGAAQAOAAAKgGQAHgFAFAAQALAAAAALQAAALgQAHQgPAGgQAAQgWAAgPgLgAgNgXQgGAGgEANIAWgKQAMgGAJgFQgIgEgKAAQgHAAgIAGg");
	this.shape_12.setTransform(115.8,121.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAXBJQgDgIgCgPIgBgXIAAgIIAAgIIAAgIQgBgEgEABQgLAAgIAIQgEAFgIAOQAAAlgEAHQgDAJgJAAQgFAAgFgFQgFgDAAgGIABgFQACgCAAgZIAAhCIABgDIAAgQIgBgJIgBgJQAAgGAEgDQAEgEAGAAQAKAAAEALQACAFAAANIgBAUIgBAUQAIgIAIgDQAHgEAJABQARAAAHAJQAGAIACAMIABAZIABAUIAEATIABAFQAAAFgFAEQgEADgGAAQgKAAgDgKg");
	this.shape_13.setTransform(104.4,119.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AghArQgRgNAAgXQAAgXANgSQAQgTAXAAQARAAAMAFQAPAIAAAPQAAALgNAJIgWAJIggAPQAFAGAHACQAHADAGAAQAOAAAKgGQAHgFAFAAQALAAAAALQAAALgQAHQgPAGgQAAQgWAAgPgLgAgNgXQgGAGgEANIAWgKQAMgGAJgFQgIgEgKAAQgHAAgIAGg");
	this.shape_14.setTransform(83.4,121.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgmA0QgDgEgBgFIAAhAIAAgJIABgKQAAgFADgEQAEgEAGAAQALAAACAMQAQgOAWAAQATAAABAbIAAAHQgCAPgNAAQgMAAAAgNIgBgKQgUAEgKATIAAAxQAAAFgEAEQgDAEgHAAQgGAAgDgEg");
	this.shape_15.setTransform(73.1,121.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AggAqQgOgOgBgXQgBgVANgRQAQgVAZAAQAUAAAMARQAKAOAAAVQAAAWgMAQQgOATgWAAQgSAAgOgNgAgNgQQgGAKAAALQAAAMAHAGQAFAFAHAAQAHAAAHgGQAHgHAAgMQACgegTAAQgKAAgHALg");
	this.shape_16.setTransform(62.5,122);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgRBVQgFgEAAgFIABgDQACgOAAgNIAAgxIgHABIgGABQgGAAgEgEQgEgEAAgFQAAgKAKgDQAFgBANgBIABgLQACgWAKgLQAKgOAYAAQASAAAAANQAAAOgRAAQgMgBgFAJQgFAGgBAOIAAACIATAAQASgBAAANQAAANgTAAIgTABIgBAZIABAbQAAATgCAKQgDALgJAAQgGAAgDgDg");
	this.shape_17.setTransform(51.9,119.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AghArQgRgNAAgXQAAgXAOgSQAOgTAXAAQASAAAMAFQAPAIAAAPQAAALgMAJIgXAJIggAPQAFAGAHACQAHADAGAAQAOAAAJgGQAJgFAEAAQALAAAAALQAAALgQAHQgPAGgQAAQgVAAgQgLgAgNgXQgGAGgEANIAXgKQAMgGAHgFQgGgEgMAAQgHAAgHAGg");
	this.shape_18.setTransform(40.9,121.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgcBMQgEAEgGAAQgFAAgEgEQgEgDAAgGIABgHIAAgIIAAhwQAAgHADgGQAEgHAIAAQAKAAAAAMIAAAEIAAAEIAAAnIAOgGQAHgCAEAAQAYAAAOARQAOAOAAAXQAAAXgQAQQgQARgWAAQgOAAgMgFgAgKgBQgHABgIAGIAAArQANAGAKAAQALAAAIgIQAJgJAAgNQAAgNgHgJQgHgHgMAAQgDAAgHADg");
	this.shape_19.setTransform(29.2,119.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgIBPQgEgFAAgGIAAiJQAAgFAEgEQAEgDAEAAQAGAAAEADQADAEAAAFIAACEQAAAUgNgBQgEAAgEgDg");
	this.shape_20.setTransform(11.2,119.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgIBPQgEgFAAgGIAAiJQAAgFAEgEQAEgDAEAAQAGAAAEADQADAEAAAFIAACEQAAAUgNgBQgEAAgEgDg");
	this.shape_21.setTransform(5.5,119.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AghArQgRgNAAgXQAAgXANgSQAPgTAYAAQARAAAMAFQAPAIAAAPQAAALgNAJIgWAJIggAPQAFAGAHACQAGADAHAAQAOAAAKgGQAHgFAFAAQALAAAAALQAAALgRAHQgOAGgQAAQgWAAgPgLgAgNgXQgGAGgEANIAWgKQAMgGAJgFQgIgEgKAAQgHAAgIAGg");
	this.shape_22.setTransform(-3.1,121.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AADAfQgDgJgCgXIgCAEIgQAnQgBAEgDACQgEAHgJAAQgEABgGgJQgFgJgEgOQgDgMgGgoIgCgOQABgGAEgDQAEgEAGAAQAKAAADALIACAOIACAOIAEAXIARgwQAEgOAKAAQAKAAAEAPIAGAbIAEAaIAQg7QACgJALAAQAGAAAEAEQAFAEgBAFIAAADQgKAngLAfQgDAJgHAJQgFAHgIAAQgNAAgHgZg");
	this.shape_23.setTransform(-15.6,122.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AAUAuIgDgVIgBgVIAAgHIAAgJIABgDIAAgFQAAgIgEAAQgJAAgGALQgIALgFAPIgBAJIgBAJIAAAJIgBAJQAAAGgEAEQgEADgGAAQgGAAgEgDQgEgEAAgGIAAgJIgBgIIABgcIACgZIAAgJIgBgJQAAgHAEgDQAEgEAGAAQANAAABAQIAAABQAPgOAOAAQATAAAIAPQAFALAAAVIAAAHIgBAEQAAAJADAMIACAUQAAAGgEAEQgEADgGAAQgNAAgBgMg");
	this.shape_24.setTransform(-36.9,121.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AAUAxQgNAFgMAAQgPAAgJgGQgLgHgCgNQgEgZAAgSQAAgNADgRQACgLALAAQAGAAAEAEQAEADABAGIgCAOIgCAOIABAXQACAKACAHIAEACIAFAAQAJAAANgDIAAgRIAAgPQAAgVACgPQABgMAMAAQAGAAAFAEQAEAEAAAFIgCAkIAAASIAAAUIABAHIAAAGQAAAFgEAEQgFAEgGAAQgIAAgDgIg");
	this.shape_25.setTransform(-47.7,122);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("AgnA0QgDgEAAgFIAAhAIAAgJIABgKQAAgFADgEQADgEAGAAQAMAAACAMQAQgOAVAAQAVAAAAAbIAAAHQgCAPgNAAQgMAAAAgNIAAgKQgVAEgKATIAAAxQAAAFgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_26.setTransform(-57.8,121.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("AAbBMQgHAEgHABIgNABQgXAAgPgOQgPgPAAgWQAAgcAPgOQAQgRAWAAQAIAAAGABQAGACAEAEQABgjACgNQACgMALAAQAGAAAEAEQAEAEAAAGQAAAOgDAeQgCAaAAAPQAAAkACANIABACQAAAGgEADQgEAEgGAAQgHAAgEgGgAgUAEQgHAJAAARQAAALAIAIQAIAHALABQAGAAAEgDIAJgGIADgDIAAglQgDgGgGgCQgFgCgHAAQgNAAgIAGg");
	this.shape_27.setTransform(-78,119.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("AAYAuIgRAHQgHACgDAAQgYAAgMgNQgMgNAAgaQAAgWASgRQASgSAXAAQAKAAAMAGQAPAGAAAJQAAADgCADIgCAKIAAAOQAAARACAIIAFALIAEAKQAAAFgEADQgEAEgFAAQgFAAgKgJgAgMgTQgLALAAAMQAAANAFAHQAEAHALAAQADAAAGgCQAFgCAFgEQgDgXAAgLIABgHIABgKIgDgBIgDgBQgLAAgKALg");
	this.shape_28.setTransform(-89.6,121.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AAXBJQgDgIgCgPIgBgXIAAgIIAAgIIAAgIQgBgEgEABQgLAAgIAIQgEAFgIAOQAAAlgEAHQgEAJgIAAQgFAAgFgFQgFgDAAgGIACgFQABgCAAgZIAAhCIABgDIAAgQIgBgJIgBgJQAAgGAEgDQAEgEAGAAQAKAAAEALQACAFAAANIgBAUIgBAUQAHgIAJgDQAHgEAJABQARAAAHAJQAGAIABAMIABAZIACAUIAEATIABAFQgBAFgEAEQgEADgGAAQgKAAgDgKg");
	this.shape_29.setTransform(-101.1,119.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgcBNQgFgDAAgGQAAgJAWgvQgLgTgZgrIgEgIQgDgEAAgEQAAgFAEgFQAFgEAFAAQAHAAADAFQAPATARAnIANgdIAOgbQAEgHAIAAQAFAAAFAEQAEAEAAAFQAAADgCAEIgiBFQgNAbgGARIgFATQgEAJgJAAQgGAAgEgEg");
	this.shape_30.setTransform(-122,124.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgRBVQgFgEAAgFIAAgDQACgOAAgNIAAgxIgGABIgGABQgGAAgEgEQgEgEAAgFQAAgKAKgDQAEgBANgBIACgLQADgWAJgLQAKgOAYAAQASAAAAANQAAAOgRAAQgMgBgGAJQgEAGgBAOIgBACIAUAAQASgBABANQAAANgVAAIgTABIAAAZIAAAbQAAATgCAKQgCALgJAAQgFAAgEgDg");
	this.shape_31.setTransform(-133,119.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgSBVQgEgEAAgFIAAgDQACgOAAgNIAAgxIgGABIgGABQgGAAgEgEQgEgEAAgFQAAgKAKgDQAEgBANgBIACgLQADgWAJgLQAKgOAYAAQASAAAAANQAAAOgRAAQgMgBgGAJQgEAGgBAOIgBACIAUAAQASgBABANQAAANgVAAIgTABIAAAZIAAAbQAAATgCAKQgCALgJAAQgFAAgFgDg");
	this.shape_32.setTransform(-143.5,119.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAUAxQgNAFgMAAQgPAAgJgGQgLgHgCgNQgEgZAAgSQAAgNADgRQACgLALAAQAGAAAEAEQAEADABAGIgCAOIgCAOIABAXQACAKACAHIAEACIAFAAQAJAAANgDIAAgRIAAgPQAAgVACgPQABgMAMAAQAGAAAFAEQAEAEAAAFIgCAkIAAASIAAAUIABAHIAAAGQAAAFgEAEQgFAEgGAAQgIAAgDgIg");
	this.shape_33.setTransform(-153.9,122);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgwBMQgFgFAAgGIAAhpIgBgNIABgOQABgJAQgCQAIgCASAAQARAAARAMQAVAOAAAWQAAAMgFAHQgDAHgIAGQAKAEAHAKQAJAKAAALQAAANgPAMQgKAIgKAEQgWAJgkAAQgGAAgEgFgAgaA2QARgBATgHQARgEAAgGQAAgIgLgGQgJgFgHAAIgagBgAgag1IAAAWIAAAVIAOABQAdgDAAgUQAAgHgJgHQgIgHgKAAIgQAAg");
	this.shape_34.setTransform(-165.3,119.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgJAIQgEgEAAgEQAAgDAEgEQAFgDAEAAQAGgBAEAEQAEAEAAADQAAAEgEAEQgEAEgGgBQgEABgFgEg");
	this.shape_35.setTransform(106.3,138.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgkBHQgDgEAAgFIAAghIAAghIgBghIgBgRQgBgIAEgFQADgGAHAAQAFAAADAEQAEACAAAGIgBAAIANgFIAJgCQAVAAAJASQAIANgBAVQABARgMANQgLAOgUAAIgOgCIAAAkQAAAFgEAEQgDADgGAAQgFAAgEgDgAgDgpQgHADgFAFQABASAAAQQAIADAGAAQAJAAAFgEQAEgGAAgKIgBgRQgCgKgKAAQgFgBgDADg");
	this.shape_36.setTransform(97.6,136.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgHAzQgDgDAAgGIgCgdIgCgcIgBgJQgLAGgKAOIgCABIAAAbIAAAGIAAAHQAAAEgEADQgEADgFAAQgIAAgCgHQgCgEAAgKIAAgfIAAgNIgBgNQAAgIADgGQAEgIAGAAQAFAAAEAEQAEADAAAFIgBAIQANgQAMAAQAOAAAEAKQAGgEAGgDQAHgCAIAAQARAAAGARIAEAYIAGAuQABAFgEAEQgEADgFAAQgKAAgCgKIgDgaIgDgYQgDgQgDAAQgCAAgIAEQgHAEgDADIACAbQACAUAAAJQAAAGgDADQgDADgGAAQgDAAgEgDg");
	this.shape_37.setTransform(85.7,134.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAVAoIgOAGIgJACQgVAAgLgLQgLgMAAgXQAAgTAQgPQAQgPAUAAQAIAAALAEQAOAGAAAIQAAADgCACIgCAJIAAAMQAAAPACAIIAEAJIAEAIQAAAFgEADQgDADgFAAQgEAAgJgIgAgLgRQgJAKAAAKQAAAMAEAGQAEAGAJAAQADAAAFgCQAFgCAFgDQgDgUAAgKIAAgGIACgJIgEgBIgCAAQgKAAgJAJg");
	this.shape_38.setTransform(73.5,134.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgiAuQgCgEAAgFIAAg4IAAgIIAAgIQAAgFADgDQADgEAFAAQAKAAACAKQANgLAUAAQARAAAAAXIAAAGQAAAOgMAAQgLAAAAgMIgBgJQgSADgIASIAAAqQAAAGgDADQgEADgFAAQgGAAgDgDg");
	this.shape_39.setTransform(64.2,134.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgbAmQgNgLAAgTQAAgQAMgTQAOgVASgBQAIABANAFQAPAFAAAIQAAAFgDADQgDAEgFAAQgEAAgFgEQgGgEgKAAQgGAAgIANQgHANAAAIQAAAJAGAFQAHAFAJABQAFgBAJgEQAJgFACAAQAFAAADADQADAEABAEQgBAHgPAIQgNAFgIAAQgSAAgOgLg");
	this.shape_40.setTransform(54.8,134);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgtA5QAAgFADgDQAEgDAFAAIAMABIANACQALAAAGgJQAGgHABgSQgEAFgGACQgFACgGAAQgRAAgLgLQgLgMAAgPQAAgYAPgQQAPgPAYAAQAIAAAGACQAHACADAFQALAAAAAMIgCARQgDAVgBAVQgBAdgJANQgLARgcAAQgiAAgBgNgAgMgnQgIAJAAAPQAAAKAEAFQAEAEAIAAQAGgBAHgGQAGgIABgIIAEgaIgFgDIgGgBQgNAAgIAKg");
	this.shape_41.setTransform(37.5,136.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgVAMgQQANgRAVAAQAPAAAKAFQANAGAAAOQABAKgLAIQgFADgPAFIgdAOQAFAEAGACQAGACAGABQALAAAJgGQAHgDAFAAQAJAAAAAIQAAALgPAGQgMAFgOAAQgTAAgOgKgAgLgUQgFAGgEAKIAUgIIARgKQgGgDgJAAQgHAAgGAFg");
	this.shape_42.setTransform(27.5,134);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgHBFQgEgDAAgGIAAh4QAAgGAEgDQADgDAEAAQAFAAADADQAEADAAAGIAAB0QAAARgMAAQgEAAgDgEg");
	this.shape_43.setTransform(20,131.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgiAuQgDgEABgFIAAg4IAAgIIAAgIQAAgFACgDQADgEAGAAQAKAAACAKQANgLAUAAQARAAAAAXIAAAGQgBAOgLAAQgLAAAAgMIAAgJQgSADgJASIAAAqQAAAGgEADQgDADgGAAQgFAAgDgDg");
	this.shape_44.setTransform(5.5,134.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgVAMgQQANgRAUAAQAQAAAKAFQANAGAAAOQAAAKgLAIQgEADgPAFIgcAOQAEAEAGACQAGACAGABQALAAAJgGQAIgDAEAAQAJAAAAAIQAAALgPAGQgMAFgOAAQgUAAgNgKgAgLgUQgGAGgDAKIAUgIIARgKQgGgDgKAAQgGAAgGAFg");
	this.shape_45.setTransform(-4.2,134);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAUBAIgEgUIgCgUIABgHIAAgHIAAgHQgBgDgEAAQgKAAgFAHQgEAFgIAMQAAAggDAHQgDAHgIAAQgFAAgEgDQgEgEABgEIABgFIABgYIAAg6IAAgCIAAgPIAAgIIgBgIQgBgFAEgDQAEgDAFgBQAJAAADAKQACAFAAAMIgBASIAAARQAGgHAHgDQAGgDAIAAQAPAAAHAIQAFAHABALIABAWIACASIADARIABADQAAAFgFADQgDADgGAAQgIAAgDgJg");
	this.shape_46.setTransform(-14.2,131.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgZBEQgEgDAAgFQAAgJATgoIgfg3IgEgHQgDgDAAgEQAAgFAEgEQAEgDAFAAQAGAAADAEQANARAOAiIAMgaIAMgXQAEgGAHAAQAFgBAEAEQAEAEAAAEIgCAGIgfA+IgQAmIgFAQQgDAJgIAAQgFgBgEgDg");
	this.shape_47.setTransform(266.1,107.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgZBDQgDADgFAAQgFAAgDgDQgEgDAAgFIABgGIAAgHIAAhiQAAgHADgFQADgGAHAAQAJAAAAAKIAAAEIAAAEIAAAiQAGgEAGgCQAGgCAEAAQAVAAANAPQAMANAAAUQAAAVgOAOQgPAOgSAAQgNAAgLgEgAgJAAQgGAAgHAGIAAAlQAMAGAJAAQAJAAAHgIQAHgIAAgLQAAgMgGgHQgGgGgKAAQgDAAgGADg");
	this.shape_48.setTransform(255.7,103);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAYBCQgGAEgHABIgLABQgUAAgNgMQgNgNAAgUQAAgYANgNQAOgPATAAQAHAAAFACQAGABADADQABgeACgMQACgKAKAAQAFAAADADQADADAAAFIgCAnIgCAlQAAAgACAKIABADQAAAFgEADQgEADgEAAQgHAAgDgGgAgRADQgHAIAAAPQAAAKAIAHQAHAHAJAAQAFAAADgCIAJgGIADgDIAAggQgDgGgFgBQgFgCgGAAQgLAAgHAFg");
	this.shape_49.setTransform(237,103);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgVAMgPQANgSAUAAQAQAAAKAFQAOAHAAAOQgBAJgKAIQgGAEgPAEIgbANQAEAFAGACQAGADAGgBQAMAAAIgEQAHgFAFAAQAJAAAAAJQAAAKgPAHQgMAFgOAAQgTAAgOgKgAgKgUQgGAGgEALIAUgJIARgKQgGgDgKgBQgGABgFAFg");
	this.shape_50.setTransform(226.6,105.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgiAuQgDgEAAgFIAAg4IAAgIIAAgIQAAgFAEgDQADgEAFAAQAKAAACAKQAOgLATAAQASAAAAAXIAAAGQgBAOgMAAQgLAAAAgMIgBgJQgRADgJASIAAAqQAAAGgDADQgEADgFAAQgGAAgDgDg");
	this.shape_51.setTransform(217.4,105.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AARArQgLAEgKABQgNgBgJgFQgJgGgCgLQgEgXAAgPQAAgMADgOQACgKAKAAQAFAAAEADQAEADAAAFIgCAMIgBANIABAUIACAPIAFACIAEAAQAIAAALgCIAAgQIAAgNQAAgTACgMQABgLALAAQAFAAAEADQAEAEgBAFIgBAeIAAAQIAAASIAAAGIAAAGQAAAFgDADQgEADgFAAQgHAAgEgHg");
	this.shape_52.setTransform(208.1,105.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgfA+IgBgGQAAgEAEgEQADgDAGAAQAFAAAFAGIAGALQADAHACAAQAFAAABgNIgDgxIgDgtQAAgGAEgEQADgFAGAAQAEAAAEADQAEADAAAEIADAvIADA1QAAANgIAKQgJAMgOAAQgTAAgOgegAAChFQgCgEAAgFQAAgFACgFQAFgDAFAAQAGAAAFADQADAFAAAFQAAAFgDAEQgFAEgGAAQgFAAgFgEg");
	this.shape_53.setTransform(198.9,105.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AASAoIgDgSIgBgSIAAgGIAAgIIABgDIAAgFQAAgHgEAAQgHAAgGAKQgHAKgEANIgBAIIAAAIIgBAHIgBAIQAAAFgDAEQgEADgFAAQgFAAgEgDQgDgEAAgFIgBgHIAAgIIABgYIABgWIAAgJIAAgIQAAgFADgDQAEgDAFAAQAMAAABAOIAAABQANgNAMAAQARAAAGAOQAEAJAAATIAAAGIAAAEQAAAHACALQACALAAAHQAAAEgDAEQgEADgFAAQgLAAgBgLg");
	this.shape_54.setTransform(191.5,105.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgKBAQgDgDgBgFIAAgRIAAgQIAAgUIABgSQABgFADgDQAEgDAFAAQADAAAEADQADADAAAFIAAASIgBAUIAAAQIAAARQAAAFgEADQgDADgEAAQgFAAgDgDgAgHgsQgEgEAAgFQAAgGAEgDQAEgEAEAAQAGAAADAEQAFADAAAGQAAAFgFAEQgDAEgGAAQgEAAgEgEg");
	this.shape_55.setTransform(184.3,103.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgYAuQgNgFAAgKQAAgJAKAAQAFAAAHADQAIADAEAAQAQAAAAgIQAAgEgMgGQgRgIgFgCQgMgIAAgNQAAgSATgGQALgEAUAAQAJAAAFADQAFADAAAIQAAAQgIAAQgJAAgCgHIgHgBQgTAAAAAGQAAAEAKAFQASAJAGADQANAIAAAMQAAAPgOAIQgMAHgOAAQgMAAgKgEg");
	this.shape_56.setTransform(169.1,105.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAVAoIgOAGIgJACQgVAAgLgLQgLgMAAgXQAAgTAQgPQAQgPAUAAQAIAAALAEQAOAGAAAIQAAADgCACIgCAJIAAAMQAAAPACAIIAEAJIAEAIQAAAFgEADQgDADgFAAQgEAAgJgIgAgLgRQgJAKAAAKQAAAMAEAGQAEAGAJAAQADAAAFgCQAFgCAFgDQgDgUAAgKIAAgGIACgJIgEgBIgCAAQgKAAgJAJg");
	this.shape_57.setTransform(159.8,105.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAUAxQgLAAgGgVQgCgIgCgVIgCAEIgOAiQgBAEgCACQgFAGgHAAQgEAAgFgHQgEgIgDgMQgDgLgGgjIgCgNQABgFAEgDQADgDAFAAQAKAAACAJIACANIACAMIADAVIAPgrQADgMAJAAQAJAAAEANIAEAYIAFAXIANg0QACgIAKAAQAFAAAEADQADAEABAEIgBADQgJAigJAbQgDAIgGAJQgEAFgGAAIgCAAg");
	this.shape_58.setTransform(148.6,105.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgVAMgPQANgSAVAAQAPAAAKAFQANAHAAAOQABAJgLAIQgFAEgPAEIgdANQAFAFAGACQAGADAGgBQALAAAJgEQAHgFAFAAQAJAAAAAJQAAAKgPAHQgMAFgOAAQgTAAgOgKgAgLgUQgFAGgEALIAUgJIARgKQgGgDgJgBQgHABgGAFg");
	this.shape_59.setTransform(129.2,105.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAUBBIgEgVIgCgUIABgHIAAgGIAAgIQgBgDgEAAQgKAAgFAHQgFAEgHANQAAAhgDAGQgEAHgHAAQgFAAgEgDQgEgEAAgEIACgFIABgYIAAg6IAAgCIABgPIgBgIIgBgIQAAgFADgDQAEgDAFgBQAJAAADAKQABAFAAALIAAASIgBARQAHgFAIgEQAFgDAIAAQAPAAAHAJQAFAGABALIABAWIACARIADASIAAADQAAAFgEADQgDAEgFAAQgKgBgCgIg");
	this.shape_60.setTransform(119.2,103);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgYAuQgNgFAAgKQAAgJAKAAQAFAAAHADQAIADAEAAQAQAAAAgIQAAgEgMgGQgRgIgFgCQgMgIAAgNQAAgSATgGQALgEAUAAQAJAAAFADQAFADAAAIQAAAQgIAAQgJAAgCgHIgHgBQgTAAAAAGQAAAEAKAFQASAJAGADQANAIAAAMQAAAPgOAIQgMAHgOAAQgMAAgKgEg");
	this.shape_61.setTransform(109.2,105.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF0000").s().p("AgdAmQgPgLAAgUQAAgVAMgPQANgSAVAAQAPAAAKAFQANAHAAAOQABAJgLAIQgFAEgPAEIgdANQAFAFAGACQAGADAGgBQALAAAJgEQAHgFAFAAQAJAAAAAJQAAAKgPAHQgMAFgOAAQgTAAgOgKgAgLgUQgFAGgEALIAUgJIARgKQgGgDgJgBQgHABgGAFg");
	this.shape_62.setTransform(91.9,105.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF0000").s().p("AgiAuQgCgEgBgFIAAg4IAAgIIAAgIQAAgFADgDQADgEAGAAQAKAAACAKQAOgLATAAQARAAABAXIAAAGQgCAOgLAAQgLAAAAgMIAAgJQgTADgIASIAAAqQAAAGgEADQgDADgGAAQgFAAgDgDg");
	this.shape_63.setTransform(82.7,105.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF0000").s().p("AgcAlQgNgMAAgVQgBgSALgPQAOgSAWAAQASAAAKAOQAKANAAATQAAATgLAOQgNAQgTAAQgQAAgMgLgAgLgNQgGAHAAAKQAAAKAGAHQAFAEAGAAQAGAAAGgGQAGgFABgLQABgbgQAAIgBAAQgJAAgFALg");
	this.shape_64.setTransform(73.3,105.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF0000").s().p("AgPBLQgEgDAAgFIAAgDQACgMAAgMIAAgqIgFAAIgGABQgGAAgDgDQgEgEABgEQgBgJAKgCIAPgCIABgKQADgUAIgKQAIgMAVABQARAAgBALQABALgQAAQgKAAgFAIQgDAGgCALIAAADIARgBQARAAAAAMQgBALgRAAIgRABIgBAWIABAXQAAAQgCAKQgCAJgIAAQgFAAgDgCg");
	this.shape_65.setTransform(63.9,103.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF0000").s().p("AgdAmQgPgLAAgUQAAgVAMgPQANgSAVAAQAPAAAKAFQANAHAAAOQABAJgMAIQgEAEgPAEIgdANQAFAFAGACQAGADAGgBQAMAAAIgEQAHgFAFAAQAJAAAAAJQAAAKgPAHQgMAFgOAAQgUAAgNgKgAgLgUQgFAGgEALIAUgJIARgKQgGgDgJgBQgHABgGAFg");
	this.shape_66.setTransform(54.2,105.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF0000").s().p("AgZBDQgDADgFAAQgFAAgDgDQgEgDAAgFIABgGIAAgHIAAhiQAAgHADgFQADgGAHAAQAJAAAAAKIAAAEIAAAEIAAAiQAGgEAGgCQAGgCAEAAQAVAAANAPQAMANAAAUQAAAVgOAOQgPAOgSAAQgNAAgLgEgAgJAAQgGAAgHAGIAAAlQAMAGAJAAQAJAAAHgIQAHgIAAgLQAAgMgGgHQgGgGgKAAQgDAAgGADg");
	this.shape_67.setTransform(43.8,103);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgVAMgPQANgSAVAAQAPAAAKAFQANAHAAAOQABAJgLAIQgFAEgPAEIgdANQAFAFAGACQAGADAGgBQALAAAJgEQAHgFAFAAQAJAAAAAJQAAAKgPAHQgMAFgOAAQgTAAgOgKgAgLgUQgFAGgEALIAUgJIARgKQgGgDgJgBQgHABgGAFg");
	this.shape_68.setTransform(25.3,105.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgaAmQgOgLAAgUQgBgPANgTQAPgVAQAAQAKAAAMAEQAPAHAAAIQAAAEgDAEQgEADgEAAQgEAAgFgEQgGgEgLAAQgEAAgJANQgHANAAAHQAAAKAGAFQAHAGAIgBQAHABAIgFQAIgFADAAQAEAAAEAEQAEADgBAEQAAAHgOAHQgOAGgJABQgRAAgNgMg");
	this.shape_69.setTransform(15.5,105.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AAVAoIgOAGIgJACQgVAAgLgLQgLgMAAgXQAAgTAQgPQAQgPAUAAQAIAAALAEQAOAGAAAIQAAADgCACIgCAJIAAAMQAAAPACAIIAEAJIAEAIQAAAFgEADQgDADgFAAQgEAAgJgIgAgLgRQgJAKAAAKQAAAMAEAGQAEAGAJAAQADAAAFgCQAFgCAFgDQgDgUAAgKIAAgGIACgJIgEgBIgCAAQgKAAgJAJg");
	this.shape_70.setTransform(6,105.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgiAuQgCgEAAgFIAAg4IAAgIIAAgIQAAgFADgDQADgEAFAAQAKAAACAKQANgLAUAAQASAAgBAXIAAAGQAAAOgMAAQgLAAAAgMIgBgJQgSADgIASIAAAqQAAAGgDADQgEADgFAAQgGAAgDgDg");
	this.shape_71.setTransform(-3.3,105.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgVAMgPQANgSAUAAQAQAAAKAFQAOAHAAAOQgBAJgKAIQgGAEgPAEIgcANQAFAFAGACQAGADAGgBQAMAAAIgEQAHgFAFAAQAJAAAAAJQAAAKgPAHQgMAFgOAAQgTAAgOgKgAgKgUQgGAGgEALIAUgJIARgKQgGgDgKgBQgGABgFAFg");
	this.shape_72.setTransform(-20.9,105.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAUBBIgEgVIgBgUIAAgHIAAgGIAAgIQgBgDgEAAQgJAAgHAHQgEAEgHANQAAAhgDAGQgDAHgIAAQgFAAgEgDQgDgEgBgEIABgFIABgYIAAg6IAAgCIABgPIgBgIIgBgIQABgFADgDQAEgDAFgBQAJAAADAKQACAFgBALIAAASIgBARQAHgFAIgEQAFgDAIAAQAQAAAGAJQAFAGABALIABAWIACARIADASIAAADQAAAFgDADQgEAEgFAAQgKgBgCgIg");
	this.shape_73.setTransform(-30.9,103);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgGA9QgEgDgBgFIABgJIAAgKIgCgsIgQgBQgMgBAAgLQABgFADgDQADgEAGAAIAPABIgBgJIAAgJQAAgFAEgDQADgDAGAAQALAAgBAWIAAAHIAJgBQAKAAAFACQAGACAAAIQABAFgEAEQgEADgFAAIgEAAIgFAAIgIABIABAtIAAAEIABAFQAAAUgNAAQgDAAgDgDg");
	this.shape_74.setTransform(-40.7,103.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FF0000").s().p("AASAoIgDgSIgBgSIAAgGIAAgIIABgDIAAgFQAAgHgEAAQgHAAgGAKQgHAKgEANIgBAIIAAAIIgBAHIgBAIQAAAFgDAEQgEADgFAAQgFAAgEgDQgDgEAAgFIgBgHIAAgIIABgYIABgWIAAgJIAAgIQAAgFADgDQAEgDAFAAQAMAAABAOIAAABQANgNAMAAQARAAAGAOQAEAJAAATIAAAGIAAAEQAAAHACALQACALAAAHQAAAEgDAEQgEADgFAAQgLAAgBgLg");
	this.shape_75.setTransform(-57.4,105.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FF0000").s().p("AgcAlQgNgMAAgVQgBgSALgPQAOgSAWAAQASAAAKAOQAKANAAATQAAATgLAOQgNAQgTAAQgQAAgMgLgAgLgNQgGAHAAAKQAAAKAGAHQAFAEAGAAQAGAAAGgGQAGgFABgLQABgbgQAAIgBAAQgJAAgFALg");
	this.shape_76.setTransform(-67.1,105.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FF0000").s().p("AAVAxQgMAAgGgVQgDgIgBgVIgCAEIgOAiQgBAEgDACQgDAGgIAAQgEAAgEgHQgGgIgCgMQgDgLgGgjIgBgNQAAgFADgDQAEgDAFAAQAKAAACAJIACANIACAMIADAVIAPgrQAEgMAIAAQAKAAADANIAEAYIAFAXIANg0QADgIAJAAQAFAAAEADQADAEAAAEIAAADQgJAigKAbQgCAIgHAJQgDAFgGAAIgBAAg");
	this.shape_77.setTransform(-77.9,105.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FF0000").s().p("AAYBCQgGAEgHABIgLABQgUAAgNgMQgNgNAAgUQAAgYANgNQAOgPATAAQAHAAAFACQAGABADADQABgeACgMQACgKAKAAQAFAAADADQADADAAAFIgCAnIgCAlQAAAgACAKIABADQAAAFgEADQgEADgEAAQgHAAgDgGgAgRADQgHAIAAAPQAAAKAIAHQAHAHAJAAQAFAAADgCIAJgGIADgDIAAggQgDgGgFgBQgFgCgGAAQgLAAgHAFg");
	this.shape_78.setTransform(-97.5,103);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FF0000").s().p("AAVAoIgOAGIgJACQgVAAgLgLQgLgMAAgXQAAgTAQgPQAQgPAUAAQAIAAALAEQAOAGAAAIQAAADgCACIgCAJIAAAMQAAAPACAIIAEAJIAEAIQAAAFgEADQgDADgFAAQgEAAgJgIgAgLgRQgJAKAAAKQAAAMAEAGQAEAGAJAAQADAAAFgCQAFgCAFgDQgDgUAAgKIAAgGIACgJIgEgBIgCAAQgKAAgJAJg");
	this.shape_79.setTransform(-107.7,105.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FF0000").s().p("AAUBBIgEgVIgCgUIABgHIAAgGIAAgIQgBgDgEAAQgJAAgGAHQgFAEgHANQAAAhgDAGQgEAHgHAAQgFAAgEgDQgDgEAAgEIABgFIABgYIAAg6IAAgCIABgPIgBgIIgBgIQgBgFAEgDQAEgDAFgBQAJAAADAKQACAFAAALIgBASIgBARQAHgFAHgEQAGgDAIAAQAPAAAHAJQAFAGABALIABAWIACARIADASIABADQgBAFgEADQgDAEgGAAQgIgBgDgIg");
	this.shape_80.setTransform(-117.8,103);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgZBEQgEgDAAgFQAAgJATgoIgfg3IgEgHQgDgDAAgEQAAgFAEgEQAEgDAFAAQAGAAADAEQANARAOAiIAMgaIAMgXQAEgGAHAAQAFgBAEAEQAEAEAAAEIgCAGIgfA+IgQAmIgFAQQgDAJgIAAQgFgBgEgDg");
	this.shape_81.setTransform(-136.3,107.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgQBLQgDgDAAgFIAAgDQACgMAAgMIAAgqIgFAAIgGABQgFAAgEgDQgDgEAAgEQAAgJAJgCIAPgCIABgKQACgUAJgKQAIgMAVABQAQAAABALQgBALgPAAQgKAAgFAIQgDAGgCALIAAADIARgBQARAAAAAMQAAALgSAAIgRABIAAAWIAAAXQAAAQgCAKQgCAJgIAAQgFAAgEgCg");
	this.shape_82.setTransform(-146,103.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgPBLQgEgDAAgFIAAgDQACgMAAgMIAAgqIgFAAIgGABQgGAAgDgDQgEgEABgEQgBgJAKgCIAPgCIABgKQADgUAIgKQAIgMAVABQARAAgBALQABALgQAAQgKAAgFAIQgDAGgCALIAAADIARgBQARAAAAAMQgBALgRAAIgRABIgBAWIABAXQAAAQgCAKQgCAJgIAAQgFAAgDgCg");
	this.shape_83.setTransform(-155.3,103.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AARArQgLAEgKABQgNgBgJgFQgJgGgCgLQgEgXAAgPQAAgMADgOQACgKAKAAQAFAAAEADQAEADAAAFIgCAMIgBANIABAUIACAPIAFACIAEAAQAIAAALgCIAAgQIAAgNQAAgTACgMQABgLALAAQAFAAAEADQAEAEgBAFIgBAeIAAAQIAAASIAAAGIAAAGQAAAFgDADQgEADgFAAQgHAAgEgHg");
	this.shape_84.setTransform(-164.5,105.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgrBDQgEgFAAgEIAAhdIAAgMQgBgHABgEQABgJAPgBQAGgCAQAAQAPAAAPALQASAMAAATQAAAKgDAHQgDAGgIAFQAJAEAHAIQAHAJAAAJQAAAMgNALQgIAHgKAEQgSAHggABQgFAAgFgFgAgXAvQAQgBAPgFQAQgFAAgFQAAgGgKgFQgIgFgGgBIgXgBgAgXgcIAAATIANABQAZgCAAgSQAAgHgIgFQgHgHgJAAIgOAAg");
	this.shape_85.setTransform(-174.6,103.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]},63).wait(73));

	// Layer 15
	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(0.1,1,1).p("AK8oWIAAQtIgeAAIAAwtgAqdIIIgeAAIAAplIAeAAg");
	this.shape_86.setTransform(-94.3,35.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#996600").s().p("AKdIXIAAwtIAeAAIAAQtgAq6IIIAAplIAdAAIAAJlg");
	this.shape_87.setTransform(-94.3,35.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_87},{t:this.shape_86}]},63).wait(73));

	// Layer 9
	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgFAGQgDgDAAgDQAAgCADgDQADgDACAAQADAAADADQADADAAACQAAADgDADQgDADgDAAQgCAAgDgDg");
	this.shape_88.setTransform(131.7,-54.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AASAkIgCgRIgCgQIABgFIAAgHQAAgQgGAAQgIAAgGAKQgHAJgDAMIgBAHIgBAHIABAHIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgHIABgUIABgUIAAgHIAAgHQAAgDACgCQACgDADAAQAHAAAAAKIABAJQAMgRALAAQAMAAAFALQADAHAAANIAAAIIAAAFQAAAGACAJIABAQQAAADgCADQgCACgDAAQgHAAAAgHg");
	this.shape_89.setTransform(126,-58.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgVAeQgKgKAAgRQgBgPAJgMQALgPAQAAQAPAAAIAOQAGALgBAOQAAAPgIAMQgKANgOAAQgMAAgJgKgAgMgOQgFAIAAAJQAAALAGAGQAFAFAGAAQAGAAAGgGQAGgGABgLQABgagRAAIgBAAQgIAAgGAKg");
	this.shape_90.setTransform(117.8,-58.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgGA1QgCgCABgDIgBgOIAAgNIABgRIAAgQQAAgDACgCQACgCADAAQABAAACACQADACAAADIgBAQIgBARIABANIAAAOQAAADgCACQgCACgBAAQgDAAgDgCgAgDgnQgDgDAAgDQAAgEADgDQACgCACAAQADAAADACQADADgBAEQABADgDADQgDACgDAAQgCAAgCgCg");
	this.shape_91.setTransform(112.1,-60.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgJIABgIIgCgpIgQgCQgHAAABgHQAAgDACgCQABgCADAAIAQABIgBgKIAAgJQAAgDACgDQADgBADAAQAEgBACALIAAAHIAAAEIAAAFIAKgBIAKABQAFABgBAFQAAAEgCACQgBACgDAAIgFAAIgDgBIgKACIACApIAAAEIAAADQAAAQgIABQgBgBgDgBg");
	this.shape_92.setTransform(106.2,-59.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgUAgQgKgJAAgRQAAgNAKgQQALgRALAAQAIAAAJADQALAFAAAGQAAACgCADQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAIgEgBIgDgDQgFgDgKAAQgFAAgHANQgHAMAAAHQAAAKAGAGQAHAFAHABQAFgBAFgCIAJgFIADgBQACAAACACQACACAAAEQAAAEgLAGQgKAEgHAAQgNAAgKgJg");
	this.shape_93.setTransform(98.8,-58.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AAXAlIgFgGIgMAGQgGACgBAAQgSABgIgLQgHgJAAgTQAAgPAMgNQANgNAPAAQAGAAAIAEQAKAEAAAGQAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgBAJIAAAPIABAPIAFAMIACAEIAAACQAAADgCABQgCACgDAAQgCABgDgEgAgLgRQgJAJABAKQAAANADAFQAFAHAJAAQAFgBAEgCIAIgFQgCgTAAgJIAAgHIACgIIgGgCIgCAAQgKAAgIAJg");
	this.shape_94.setTransform(91,-58.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgbAhIAAgyIAAgHIAAgHQAAgHAGAAQAIgBAAAMQANgNAQAAQAGAAADAEQADAFAAAJIAAAFQAAAKgHgBQgHABAAgIIAAgFIAAgGQgMACgFAFQgGAEgFAKIAAAmQAAAIgHAAQgGAAAAgIg");
	this.shape_95.setTransform(79.2,-58.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgYAfQgLgIAAgSQAAgQAJgNQAKgPAQAAQALAAAIAFQAKAEAAALQAAAHgJAHIgPAGIgbANQAFAGAGADQAGAEAGAAQAFAAAHgDQAJgCACgEQADgEADAAQAAAAABAAQABAAAAABQABAAAAAAQABABAAAAQABAAAAABQAAABABAAQAAABAAAAQAAABAAAAQAAAJgNAGQgLAFgLAAQgPAAgKgJgAgOgTQgGAIgDAMIAXgJQALgHAGgFQgGgFgLAAQgIAAgGAGg");
	this.shape_96.setTransform(71.3,-58.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AAUA4QgCgHgCgLIgBgRIAAgGIAAgGQAAgMgGAAQgJAAgGAHQgEAEgHAMQAAAcgCAFQgCAFgEAAQgDAAgCgCQgDgCAAgDIABgDIABgLIAAgLIAAg1IABgMIgBgHIAAgHQAAgDACgCQABgCADAAQAHAAABAGIABAOIgBAQIAAAQIAAAGQAGgIAHgEQAFgEAIAAQAMAAAEAIQAEAGABALIAAAOIACAQIACAPIAAACQAAADgCACQgCACgEAAQgEAAgCgFg");
	this.shape_97.setTransform(62.8,-60.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgEA0QgBgCgBgDIAAgJIABgIIgBgpIgRgCQgHAAAAgHQAAgDADgCQACgCACAAIAQABIAAgKIAAgJQAAgDABgDQACgBAEAAQAEgBABALIAAAHIAAAEIAAAFIALgBIAKABQAFABgBAFQAAAEgCACQgBACgEAAIgDAAIgEgBIgKACIACApIAAAEIAAADQgBAQgHABQgBgBgDgBg");
	this.shape_98.setTransform(54.7,-59.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgVAeQgKgKAAgRQgBgPAJgMQALgPAQAAQAPAAAIAOQAGALgBAOQAAAPgIAMQgKANgOAAQgMAAgJgKgAgMgOQgFAIAAAJQAAALAGAGQAFAFAGAAQAGAAAGgGQAGgGABgLQABgagRAAIgBAAQgIAAgGAKg");
	this.shape_99.setTransform(47.1,-58.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgYAfQgLgIAAgSQAAgQAJgNQAKgPAQAAQALAAAIAFQAKAEAAALQAAAHgJAHIgPAGIgbANQAFAGAGADQAGAEAGAAQAFAAAHgDQAJgCACgEQADgEADAAQAAAAABAAQABAAAAABQABAAAAAAQABABAAAAQABAAAAABQABABAAAAQAAABAAAAQAAABAAAAQAAAJgNAGQgLAFgLAAQgPAAgKgJgAgOgTQgGAIgDAMIAXgJQALgHAGgFQgGgFgLAAQgIAAgGAGg");
	this.shape_100.setTransform(34.7,-58.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgDArQgCgCAAgEIgCgZIgBgZQAAgIgDgFQgFADgFAFIgJAKIgEAFIAAALIgBANIAAAGIABAGQAAACgCACQgCADgDAAQgJAAAAgTIABgOIABgKIgBgNIgBgMQAAgQAIAAQADAAACACQADADAAADIgBAFIAAAEIAAAIQAEgJAHgGQAIgGAFAAQALAAADAMQAEgGAGgDQAFgCAIAAQAMAAAEANIAEAUIAFApQAAADgCACQgCACgEAAQgGAAgBgHIgCgWIgDgVIgCgKQgDgHgDAAQgDAAgHAFQgHAEgCADIAAANIACASIACATQAAAEgCACQgCACgEAAQgBAAgCgCg");
	this.shape_101.setTransform(24.7,-58.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgVAeQgKgKAAgRQgBgPAJgMQALgPAQAAQAPAAAIAOQAGALgBAOQAAAPgIAMQgKANgOAAQgMAAgJgKgAgMgOQgFAIAAAJQAAALAGAGQAFAFAGAAQAGAAAGgGQAGgGABgLQABgagRAAIgBAAQgIAAgGAKg");
	this.shape_102.setTransform(14.6,-58.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgTApQgMgEAAgIQAAgDADgCQACgDADABQACAAAEADQACACAGABIAIABQAEAAAFgCQAHgCAAgEQAAgLgOgDIgGgCQgKgBgEgEQgGgCAAgIQAAgQAPgGIAMgFIAOgEQADgCAEAAQADAAACACQACACAAADIABAHIABAGQAAADgCACQgCACgEAAQgEAAgBgCIgCgIIgRAFQgKAFAAAGIAEACQAPADAIAFQAMAGAAAPQAAAMgKAGQgJAFgLAAQgKAAgIgDg");
	this.shape_103.setTransform(6.9,-58.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgZAyQgKgKAAgRQAAgUAKgJQALgMAPAAQAIAAAEACIAHAFQACgfABgLQABgGAFAAQAIAAAAAHIgDAtIgCAUQAAAZADAMIAAACQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgCACgDAAQgFAAgCgHQgFAEgGACQgFACgFAAQgPAAgKgKgAgQABQgGAHgBAPQAAAJAIAHQAGAHAJAAQAEAAAFgCIAIgGIACgDIAAgMIAAgJIAAgJQgDgFgFgCQgEgDgGAAQgLAAgGAGg");
	this.shape_104.setTransform(-5.6,-60.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgYAfQgLgIAAgSQAAgQAJgNQAKgPAQAAQALAAAIAFQAKAEAAALQAAAHgJAHIgPAGIgbANQAFAGAGADQAGAEAGAAQAFAAAHgDQAJgCACgEQADgEADAAQAAAAABAAQABAAAAABQABAAAAAAQABABAAAAQABAAAAABQABABAAAAQAAABAAAAQAAABAAAAQAAAJgNAGQgLAFgLAAQgPAAgKgJgAgOgTQgGAIgDAMIAXgJQALgHAGgFQgGgFgLAAQgIAAgGAGg");
	this.shape_105.setTransform(-14,-58.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgZAyQgLgKABgRQgBgUALgJQALgMAPAAQAIAAAEACIAHAFQACgfABgLQABgGAFAAQAIAAAAAHIgEAtIgBAUQAAAZADAMIAAACQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQgCACgDAAQgFAAgCgHQgFAEgFACQgHACgEAAQgPAAgKgKgAgQABQgGAHgBAPQAAAJAIAHQAGAHAJAAQAFAAAEgCIAIgGIACgDIAAgMIAAgJIAAgJQgDgFgFgCQgEgDgGAAQgLAAgGAGg");
	this.shape_106.setTransform(-22.8,-60.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgYAfQgLgIAAgSQAAgQAJgNQAKgPAQAAQALAAAIAFQAKAEAAALQAAAHgJAHIgPAGIgbANQAFAGAGADQAGAEAGAAQAFAAAHgDQAJgCACgEQADgEADAAQAAAAABAAQABAAAAABQABAAAAAAQABABAAAAQABAAAAABQAAABABAAQAAABAAAAQAAABAAAAQAAAJgNAGQgLAFgLAAQgPAAgKgJgAgOgTQgGAIgDAMIAXgJQALgHAGgFQgGgFgLAAQgIAAgGAGg");
	this.shape_107.setTransform(-31.2,-58.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgUAgQgKgJAAgRQAAgNAKgQQALgRALAAQAIAAAJADQALAFAAAGQAAACgCADQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAIgEgBIgDgDQgFgDgKAAQgFAAgHANQgHAMAAAHQAAAKAGAGQAHAFAHABQAFgBAFgCIAJgFIADgBQACAAACACQACACAAAEQAAAEgLAGQgKAEgHAAQgNAAgKgJg");
	this.shape_108.setTransform(-39.3,-58.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgYAfQgLgIAAgSQAAgQAJgNQAKgPAQAAQALAAAIAFQAKAEAAALQAAAHgJAHIgPAGIgbANQAFAGAGADQAGAEAGAAQAFAAAHgDQAJgCACgEQADgEADAAQAAAAABAAQABAAAAABQABAAAAAAQABABAAAAQABAAAAABQAAABABAAQAAABAAAAQAAABAAAAQAAAJgNAGQgLAFgLAAQgPAAgKgJgAgOgTQgGAIgDAMIAXgJQALgHAGgFQgGgFgLAAQgIAAgGAGg");
	this.shape_109.setTransform(-47.2,-58.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgbAhIAAgyIAAgHIAAgHQAAgHAGAAQAIgBAAAMQANgNAQAAQAGAAADAEQADAFAAAJIAAAFQAAAKgHgBQgHABAAgIIAAgFIAAgGQgMACgFAFQgGAEgFAKIAAAmQAAAIgHAAQgGAAAAgIg");
	this.shape_110.setTransform(-54.9,-58.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgbA8QgCgCAAgEIAAgdIAAgcIgBgdIgBgPQAAgGABgDQADgFAEAAQADAAACADQAAAAABABQAAAAAAABQABAAAAABQAAABAAAAIgBADIAAAEQAGgEAGgCQAFgDAFAAQAPAAAHAOQAFALAAARQAAAOgIAKQgJALgPAAQgGAAgJgCIAAAjQAAAEgCACQgCACgDAAQgDAAgCgCgAgGgmQgEACgGAGIABAhQAIADAHAAQAJAAAFgGQAEgEAAgKQAAgNgDgHQgEgHgGAAQgFAAgGADg");
	this.shape_111.setTransform(-62.7,-56.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AASAkIgCgRIgCgQIABgFIAAgHQAAgQgGAAQgIAAgGAKQgHAJgDAMIgBAHIgBAHIABAHIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgHIABgUIABgUIAAgHIAAgHQAAgDACgCQACgDADAAQAHAAAAAKIABAJQAMgRALAAQAMAAAFALQADAHAAANIAAAIIAAAFQAAAGACAJIABAQQAAADgCADQgCACgDAAQgHAAAAgHg");
	this.shape_112.setTransform(-75.1,-58.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgVAeQgKgKAAgRQgBgPAJgMQALgPAQAAQAPAAAIAOQAGALgBAOQAAAPgIAMQgKANgOAAQgMAAgJgKgAgMgOQgFAIAAAJQAAALAGAGQAFAFAGAAQAGAAAGgGQAGgGABgLQABgagRAAIgBAAQgIAAgGAKg");
	this.shape_113.setTransform(-83.3,-58.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgGA1QgCgCAAgDIAAgOIAAgNIAAgRIABgQQAAgDACgCQACgCADAAQABAAACACQADACAAADIgBAQIgBARIABANIAAAOQAAADgCACQgCACgBAAQgDAAgDgCgAgDgnQgDgDAAgDQAAgEADgDQACgCACAAQADAAADACQADADgBAEQABADgDADQgDACgDAAQgCAAgCgCg");
	this.shape_114.setTransform(-89.1,-60.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgJIABgIIgCgpIgQgCQgHAAABgHQAAgDACgCQABgCADAAIAQABIgBgKIAAgJQAAgDACgDQADgBADAAQAEgBACALIAAAHIAAAEIAAAFIAKgBIAKABQAFABgBAFQAAAEgCACQgCACgCAAIgFAAIgDgBIgKACIACApIAAAEIAAADQAAAQgIABQgBgBgDgBg");
	this.shape_115.setTransform(-94.9,-59.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgUAgQgKgJAAgRQAAgNAKgQQALgRALAAQAIAAAJADQALAFAAAGQAAACgCADQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAIgEgBIgDgDQgFgDgKAAQgFAAgHANQgHAMAAAHQAAAKAGAGQAHAFAHABQAFgBAFgCIAJgFIADgBQACAAACACQACACAAAEQAAAEgLAGQgKAEgHAAQgNAAgKgJg");
	this.shape_116.setTransform(-102.3,-58.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AAXAlIgFgGIgNAGQgFACgCAAQgRABgIgLQgHgJAAgTQAAgPAMgNQAMgNAPAAQAHAAAIAEQAKAEAAAGQAAAAAAAAQAAABAAAAQgBABAAAAQAAABAAAAIgBAJIgBAPIABAPIAFAMIACAEIAAACQAAADgCABQgCACgDAAQgCABgDgEgAgMgRQgHAJgBAKQAAANAFAFQAEAHAIAAQAFgBAGgCIAHgFQgCgTgBgJIABgHIABgIIgEgCIgEAAQgJAAgJAJg");
	this.shape_117.setTransform(-110.1,-58.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgbAiIAAgzIAAgHIAAgHQAAgIAGABQAIAAAAAMQANgOAQAAQAGAAADAFQADAEAAAJIAAAFQAAAKgHgBQgHABAAgIIAAgFIAAgGQgMACgFAFQgGAEgFAKIAAAnQAAAHgHAAQgGAAAAgHg");
	this.shape_118.setTransform(266.1,-81.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgGA1QgCgCAAgDIAAgOIgBgNIABgRIABgQQAAgDACgCQADgCACAAQABAAADACQACACAAADIgBAQIgBARIABANIAAAOQAAADgCACQgCACgBAAQgEAAgCgCgAgDgnQgDgDAAgDQAAgEADgDQADgCABAAQADAAADACQADADgBAEQABADgDADQgDACgDAAQgBAAgDgCg");
	this.shape_119.setTransform(260.2,-83.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgYAfQgLgJAAgRQAAgQAJgNQAKgPAQAAQALAAAIAEQAKAGAAAKQAAAHgJAHIgPAGIgbANQAFAGAGADQAGADAGAAQAFAAAHgCQAJgCACgEQADgEADAAQAAAAABAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAIgNAGQgLAFgLAAQgPAAgKgJgAgOgTQgGAIgDAMIAXgJQALgHAGgFQgGgFgLgBQgIABgGAGg");
	this.shape_120.setTransform(254,-81.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AAUA3QgCgFgBgMIgCgRIAAgGIAAgGQABgMgHAAQgJAAgGAHQgEAEgGAMQAAAdgDAEQgCAFgEAAQgDAAgDgCQgCgCAAgDIABgDIAAgLIABgLIAAg1IAAgLIAAgIIgBgHQAAgDACgCQADgCADAAQAFAAACAGIABAOIAAAPIgBARIAAAHQAGgJAHgEQAFgEAIAAQAMAAAFAIQADAGAAALIABAOIABAPIADAQIAAACQAAADgCACQgCACgDAAQgFAAgCgGg");
	this.shape_121.setTransform(245.4,-83.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgDA0QgCgCgBgDIAAgIIABgJIgCgpIgQgCQgGAAAAgHQAAgDABgCQACgCAEAAIAPABIgBgKIAAgJQAAgDACgCQADgCACAAQAGAAABALIAAAGIAAAEIAAAFIAKgBIAKAAQAFACAAAFQAAAEgDACQgCACgCAAIgFAAIgDgBIgKACIABApIAAAEIAAAEQABAQgIAAQgBAAgCgCg");
	this.shape_122.setTransform(237.4,-83.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgEA0QgBgCAAgDIAAgIIAAgJIgBgpIgRgCQgHAAAAgHQAAgDADgCQACgCACAAIAQABIAAgKIAAgJQAAgDACgCQABgCAEAAQAEAAABALIAAAGIAAAEIAAAFIALgBIAKAAQAFACgBAFQAAAEgCACQgBACgEAAIgEAAIgDgBIgKACIACApIAAAEIAAAEQgBAQgHAAQgBAAgDgCg");
	this.shape_123.setTransform(225.7,-83.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AAXAlIgFgGIgMAHQgGABgBAAQgSABgIgKQgHgKAAgSQAAgRAMgMQAMgNAQAAQAGAAAIADQAKAFAAAFQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgBAKIAAAOIABAOIAFAOIACADIAAABQAAAEgCACQgCABgDAAQgCAAgDgDgAgLgRQgIAJAAALQAAALADAHQAFAFAJABQAFAAAFgDIAHgFQgDgTAAgJIABgHIACgIIgGgCIgCgBQgKAAgIAKg");
	this.shape_124.setTransform(218.3,-81.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AAUA3QgCgFgBgMIgBgRIAAgGIAAgGQAAgMgHAAQgJAAgGAHQgEAEgGAMQAAAdgCAEQgDAFgEAAQgDAAgDgCQgCgCAAgDIABgDIAAgLIABgLIAAg1IAAgLIAAgIIgBgHQAAgDACgCQADgCACAAQAGAAACAGIABAOIAAAPIgBARIAAAHQAGgJAHgEQAFgEAIAAQAMAAAFAIQADAGAAALIABAOIABAPIADAQIAAACQAAADgCACQgCACgDAAQgFAAgCgGg");
	this.shape_125.setTransform(210.1,-83.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgDA0QgCgCAAgDIAAgIIAAgJIgBgpIgRgCQgGAAgBgHQAAgDACgCQADgCADAAIAPABIgBgKIAAgJQABgDACgCQACgCACAAQAGAAAAALIAAAGIAAAEIAAAFIALgBIAKAAQAEACABAFQAAAEgCACQgCACgEAAIgDAAIgEgBIgKACIABApIAAAEIAAAEQAAAQgHAAQgCAAgBgCg");
	this.shape_126.setTransform(202,-83.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgYA5QgJgCAAgGQAAgHAFAAIAJACIAPABQAMAAAFgOQAEgIgBgUQgDAIgGADQgGAFgEAAQgOgBgIgIQgJgKABgNQgBgUAMgLQALgNATAAQAHAAAFABQAFACACAEQAIAAgBAJIgBANIgCAOIgBAYQgBAPgDAIQgDAMgHAGQgJAHgPAAIgQgBgAgMgjQgHAIAAANQAAALAEAEQAEAFAIAAQAFAAAIgHQAGgHABgIIADgZIgGgDIgHgCQgMAAgHALg");
	this.shape_127.setTransform(189.9,-79.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AASAkIgCgRIgCgQIABgFIAAgHQAAgQgGAAQgIAAgGAKQgHAJgDAMIgBAHIgBAHIABAHIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgHIABgUIABgUIAAgHIAAgHQAAgDACgCQACgDADAAQAHAAAAAKIABAJQAMgRALAAQAMAAAFALQADAHAAANIAAAIIAAAFQAAAGACAJIABAQQAAADgCADQgCACgDAAQgHAAAAgHg");
	this.shape_128.setTransform(182.2,-82);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgFA1QgCgCAAgDIgBgOIAAgNIABgRIAAgQQAAgDADgCQABgCADAAQACAAABACQACACAAADIAAAQIgBARIAAANIABAOQAAADgCACQgCACgCAAQgDAAgBgCgAgDgnQgDgDAAgDQAAgEADgDQADgCABAAQAEAAACACQACADABAEQgBADgCADQgCACgEAAQgBAAgDgCg");
	this.shape_129.setTransform(176.1,-83.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgEA0QgBgCAAgDIAAgIIAAgJIgBgpIgRgCQgGAAgBgHQAAgDACgCQADgCACAAIAQABIAAgKIAAgJQAAgDACgCQABgCADAAQAGAAAAALIAAAGIAAAEIAAAFIALgBIAKAAQAEACAAAFQAAAEgBACQgCACgEAAIgDAAIgEgBIgKACIACApIAAAEIAAAEQgBAQgHAAQgCAAgCgCg");
	this.shape_130.setTransform(170.3,-83.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AAXAlIgFgGIgNAHQgFABgCAAQgRABgIgKQgHgKAAgSQAAgRAMgMQANgNAOAAQAHAAAIADQAKAFAAAFQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAIgBAKIgBAOIABAOIAFAOIABADIABABQAAAEgCACQgCABgDAAQgBAAgEgDgAgLgRQgJAJAAALQAAALAFAHQAEAFAIABQAGAAAEgDIAIgFQgDgTABgJIAAgHIABgIIgEgCIgEgBQgJAAgIAKg");
	this.shape_131.setTransform(162.9,-81.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgUAgQgKgKAAgQQAAgNAKgPQALgSALAAQAIAAAJADQALAFAAAGQAAACgCADQAAAAgBABQAAAAgBABQAAAAgBAAQgBAAAAAAIgEgBIgDgCQgFgEgKAAQgFAAgHANQgHANAAAGQAAALAGAFQAHAGAHAAQAFAAAFgDIAJgEIADgCQACAAACADQACABAAADQAAAFgLAGQgKAEgHAAQgNAAgKgJg");
	this.shape_132.setTransform(155.1,-81.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgFA1QgCgCAAgDIgBgOIAAgNIABgRIAAgQQAAgDACgCQACgCADAAQABAAACACQACACAAADIAAAQIgBARIAAANIABAOQAAADgCACQgCACgBAAQgEAAgBgCgAgDgnQgDgDAAgDQAAgEADgDQACgCACAAQAEAAACACQACADABAEQgBADgCADQgCACgEAAQgCAAgCgCg");
	this.shape_133.setTransform(149.2,-83.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgZAyQgKgKAAgRQAAgUAKgJQALgMAPAAQAIAAAEACIAHAFQACgfABgLQABgGAFAAQAIAAAAAHIgDAtIgCAUQAAAZADAMIAAACQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgCACgDAAQgFAAgCgHQgFAEgFACQgGACgFAAQgPAAgKgKgAgQABQgGAHgBAPQAAAJAIAHQAGAHAJAAQAEAAAFgCIAIgGIACgDIAAgMIAAgJIAAgJQgDgFgFgCQgEgDgGAAQgLAAgGAGg");
	this.shape_134.setTransform(142.5,-84);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AASAkIgCgRIgCgQIABgFIAAgHQAAgQgGAAQgIAAgGAKQgHAJgDAMIgBAHIgBAHIABAHIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgHIABgUIABgUIAAgHIAAgHQAAgDACgCQACgDADAAQAHAAAAAKIABAJQAMgRALAAQAMAAAFALQADAHAAANIAAAIIAAAFQAAAGACAJIABAQQAAADgCADQgCACgDAAQgHAAAAgHg");
	this.shape_135.setTransform(134.3,-82);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgFA1QgCgCgBgDIAAgOIgBgNIABgRIABgQQAAgDADgCQACgCACAAQACAAACACQABACAAADIAAAQIgBARIAAANIABAOQAAADgCACQgCACgCAAQgCAAgCgCgAgDgnQgDgDAAgDQAAgEADgDQADgCABAAQADAAADACQADADAAAEQAAADgDADQgDACgDAAQgBAAgDgCg");
	this.shape_136.setTransform(128.2,-83.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgTApQgMgFAAgHQAAgDADgCQACgCADAAQACAAAEADQACACAGABIAIABQAEAAAFgCQAHgBAAgGQAAgJgOgEIgGgBQgKgDgEgDQgGgCAAgIQAAgQAPgGIAMgFIAOgFQADgBAEAAQADAAACACQACACAAADIABAHIABAGQAAADgCACQgCACgEAAQgEABgBgDIgCgIIgRAFQgKAEAAAIIAEABQAPADAIAFQAMAGAAAOQAAANgKAGQgJAFgLAAQgKAAgIgDg");
	this.shape_137.setTransform(117.5,-82.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgDArQgCgCAAgEIgCgaIgBgYQAAgIgDgFQgFADgFAGIgJAJIgEAEIAAAMIgBAMIAAAHIABAGQAAACgCACQgCADgDAAQgJAAAAgTIABgNIABgMIgBgMIgBgLQAAgRAIAAQADAAACACQADADAAADIgBAEIAAAFIAAAIQAEgIAHgHQAIgGAFAAQALAAADAMQAEgGAGgCQAFgDAIgBQAMAAAEAOIAEAUIAFApQAAADgCACQgCACgEAAQgGAAgBgHIgCgWIgDgVIgCgKQgDgHgDAAQgDAAgHAFQgHAEgCACIAAAOIACASIACATQAAAEgCACQgCACgEAAQgBAAgCgCg");
	this.shape_138.setTransform(108.2,-81.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgbAiIAAgzIAAgHIAAgHQAAgIAGABQAIAAAAAMQANgOAQAAQAGAAADAFQADAEAAAJIAAAFQAAAKgHgBQgHABAAgIIAAgFIAAgGQgMACgFAFQgGAEgFAKIAAAnQAAAHgHAAQgGAAAAgHg");
	this.shape_139.setTransform(98.9,-81.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgVAeQgKgKAAgRQgBgOAJgNQALgPAQAAQAPAAAIAOQAGAKgBAPQAAAPgIAMQgKANgOAAQgMAAgJgKgAgMgOQgFAIAAAJQAAALAGAGQAFAFAGAAQAGAAAGgFQAGgHABgKQABgbgRAAIgBAAQgIAAgGAKg");
	this.shape_140.setTransform(90.9,-81.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgKA/QgDgCAAgDIABgCQABgJAAgMIAAgUIAAgTIgMAAQgHAAAAgHQgBgHANAAIAIgBIAAgLQACgQAHgIQAFgKARAAQALAAAAAIQAAAHgKAAQgSAAgCAZIAAAEIAQgBQAMAAAAAIQAAAFgGABIgGABIgRAAIgBAPIABAOIAAAOQAAAOgBAIQAAAGgFAAQgEAAgBgCg");
	this.shape_141.setTransform(83.1,-83.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FF0000").s().p("AghA4QgDgDAAgDIAAgVIABgdIACgeIABgUQAAgEACgBQAKgDANAAQALAAAMAIQAOALAAAPQAAATgPAJQALAEAGAGQAFAGAAAHQAAAJgKAIQgGAGgIADQgOAGgaAAQgDAAgDgDgAgVAdIAAAPQATgBAKgEQAFgCAFgFQAFgDAAgCQAAgEgKgEIgNgFIgHgBIgCAAIgEAAIgIgBIAAARgAgSgrIgBANIgBAdIALABQAJgBAIgGQAHgHAAgKQAAgHgIgGQgHgGgHAAIgLAAg");
	this.shape_142.setTransform(70.5,-83.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FF0000").s().p("AgkA4QgCgDAAgDIgBgRIgBgSIACgSIABgUIAAgLIgBgLQAAgFACgDQADgEAFABIASABQAKABAFAEQAeAQAAAXQAAALgKAHQgIAHgNADQAXANAMANQACADAAACQAAADgDADQgCACgDAAQgDAAgCgCQgZgYgcgJIABAPIAAAOQAAADgCADQgCACgDAAQgDAAgCgCgAgWggIAAAJIgBAPIgBANIADAAIADAAQASAAAIgFQAFAAADgEQAEgEAAgDQAAgKgMgJQgIgIgMgCIgLgBg");
	this.shape_143.setTransform(60.7,-83.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FF0000").s().p("AgfA4QgHgGAAgYIAAgKIABgNIgBgDQAAAAAAAAQAAAAAAAAQABgBAAAAQAAgBABgBIABgfIgBgJIAAgIQgBgIAIAAQADAAACACIARgEIANAAQARAAAMADQAEACAAAFQAAADgCADQgCACgDAAIgDAAQgMgDgLAAIgMABIgPADIABAIIgCAcIAfgDIARgBQADAAADACQACACAAADQAAAEgHABIgSACIggADIAAAKIgBAJQABARACACQACACAKAAIALAAIAPgBIADAAIAFAAQAIAAAAAIQAAAFgGACQgIABgUABQgYAAgGgHg");
	this.shape_144.setTransform(51.3,-83.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FF0000").s().p("AgMA1QgJgWgLgoIgGgVQgEgPAAgFQAAgDACgCQACgCAEAAQAFAAACAGIADANIAHAZQAHAZAGAUIABgBIASg0IAGgSQAEgLAFgFQACgDAEAAQADAAACACQACACAAADQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgFAHgDAHIgFAQIgUA0IgIATQgBAEgEAAQgGAAgCgGg");
	this.shape_145.setTransform(41.9,-83.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgYAfQgLgJAAgRQAAgQAJgNQAKgPAQAAQALAAAIAEQAKAGAAAKQAAAHgJAHIgPAGIgbANQAFAGAGADQAGADAGAAQAFAAAHgCQAJgCACgEQADgEADAAQAAAAABAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAIgNAGQgLAFgLAAQgPAAgKgJgAgOgTQgGAIgDAMIAXgJQALgHAGgFQgGgFgLgBQgIABgGAGg");
	this.shape_146.setTransform(28,-81.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AAUA3QgCgFgBgMIgBgRIAAgGIAAgGQgBgMgGAAQgJAAgGAHQgEAEgHAMQABAdgCAEQgDAFgEAAQgDAAgDgCQgCgCAAgDIABgDIAAgLIABgLIAAg1IAAgLIAAgIIgBgHQAAgDADgCQACgCACAAQAHAAABAGIABAOIgBAPIAAARIAAAHQAGgJAHgEQAFgEAIAAQAMAAAFAIQADAGAAALIABAOIACAPIACAQIAAACQAAADgCACQgCACgEAAQgEAAgCgGg");
	this.shape_147.setTransform(19.4,-83.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgDA0QgDgCAAgDIAAgIIABgJIgCgpIgQgCQgHAAABgHQAAgDACgCQABgCADAAIAQABIgBgKIAAgJQAAgDACgCQACgCAEAAQAEAAACALIAAAGIAAAEIAAAFIAKgBIAKAAQAFACAAAFQgBAEgCACQgCACgCAAIgFAAIgDgBIgKACIABApIAAAEIAAAEQABAQgIAAQgBAAgCgCg");
	this.shape_148.setTransform(11.4,-83.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgXAAQAAgEAHAAIAQAAIARgBQAGAAABAFQAAAEgHABIghABQgHAAAAgGg");
	this.shape_149.setTransform(0.1,-82.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgfA4QgHgGAAgYIAAgKIABgNIgBgDQAAAAAAAAQAAAAAAAAQABgBAAAAQAAgBABgBIABgfIgBgJIAAgIQgBgIAIAAQADAAACACIARgEIANAAQARAAAMADQAEACAAAFQAAADgCADQgCACgDAAIgDAAQgMgDgLAAIgMABIgPADIABAIIgCAcIAegDIASgBQADAAADACQACACAAADQAAAEgHABIgSACIggADIAAAKIgBAJQABARACACQACACAKAAIALAAIAPgBIADAAIAFAAQAIAAAAAIQAAAFgHACQgHABgUABQgYAAgGgHg");
	this.shape_150.setTransform(-12.1,-83.8);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgcAzQgOgHAAgLQAAgDACgCQACgCADAAQAEAAACAEQAEAGADACQAHAEALAAQAKAAAKgFQAMgGAAgLQAAgKgKgFQgJgFgLAAQgMAAgIgDQgLgGAAgLQAAgOAPgKQAOgLAOAAQAHAAAJADQAMADAAAFQAAAGgHAAIgKgBIgMgCQgJAAgIAGQgIAGAAAIQAAAGAKACIAOACQARABAKAKQAIAGAAANQAAARgQALQgOAJgRAAQgNAAgLgFg");
	this.shape_151.setTransform(-22.2,-83.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgwA5QgCgCAAgDIAAgKIAAgJIABgOIAAgOIAAgMIAAgPIgBgOIgBgOQAAgDADgDQADgDADAAQAEAAAGAJQASAbAOASQARAUAVAUIAAgKIgBgJQAAgegCgUIgCgHIgCgIQAAgJAIAAQANAAAAAwIAAAXIAAAYIgBAMQgCAIgGAAQgEAAgGgGQgegcglg0IgBARIAAAPIABASIAAATQAAAUgIAAQgEAAgCgDg");
	this.shape_152.setTransform(-33.5,-83.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgfA4QgHgGAAgYIAAgKIAAgNIAAgDQAAAAAAAAQAAAAAAAAQABgBAAAAQAAgBAAgBIABgfIAAgJIgBgIQAAgIAHAAQAEAAACACIARgEIAMAAQATAAAKADQAFACAAAFQAAADgBADQgDACgDAAIgCAAQgNgDgMAAIgKABIgQADIAAAIIAAAcIAdgDIASgBQADAAACACQADACAAADQAAAEgHABIgRACIggADIgBAKIAAAJQAAARACACQACACAJAAIANAAIANgBIAFAAIAEAAQAIAAAAAIQAAAFgHACQgGABgWABQgXAAgGgHg");
	this.shape_153.setTransform(-44.1,-83.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgEA2QgCgCAAgEIAAgDIABgDIgBgLIAAgLIgCgcIgCgdIgHAAQgQAAgJgDQgGgBAAgGQAAgDACgCQACgDADAAIAMACIAMAAIAOAAIALAAIARABIARABQADAAACACQACACAAADQAAADgCADQgCACgDAAIgRgBIgRgBIgFAAIACAhIACAgIAAAHIABAIQAAAFgCAEQgCAFgEAAQgBAAgDgCg");
	this.shape_154.setTransform(-53.6,-83.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgEA2QgCgCAAgEIAAgDIABgDIgBgLIAAgLIgCgcIgCgdIgHAAQgQAAgJgDQgGgBAAgGQAAgDACgCQACgDADAAIAMACIAMAAIAOAAIALAAIARABIARABQADAAACACQACACAAADQAAADgCADQgCACgDAAIgRgBIgRgBIgFAAIACAhIACAgIAAAHIABAIQAAAFgCAEQgCAFgEAAQgBAAgDgCg");
	this.shape_155.setTransform(-68.4,-83.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgdAtQgLgMAAgPQAAgXAVgbQASgWAQAAIAGABIAFABQADgEAEAAQAFAAACAHIABAPQAAADgCACQgCADgEAAQgEAAgDgGQgCgFgCgBIgHAAQgLAAgLAQQgSAWAAASQAAAJAGAHQAHAHAIAAQAGAAAIgEQAEgCAJgGQAEgDACAAQAEAAACACQACACAAADQAAAEgDACQgUASgSAAQgPAAgKgMg");
	this.shape_156.setTransform(-78.6,-83.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgfA4QgHgGAAgYIAAgKIABgNIgBgDQAAAAAAAAQAAAAAAAAQABgBAAAAQAAgBABgBIABgfIgBgJIAAgIQAAgIAGAAQAEAAACACIARgEIANAAQARAAAMADQAEACAAAFQAAADgCADQgCACgDAAIgDAAQgMgDgLAAIgMABIgPADIAAAIIgBAcIAfgDIARgBQAEAAABACQADACAAADQAAAEgHABIgSACIggADIAAAKIgBAJQABARACACQACACAKAAIALAAIAPgBIADAAIAFAAQAIAAAAAIQAAAFgGACQgIABgUABQgYAAgGgHg");
	this.shape_157.setTransform(-87.8,-83.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgjA7QgCgCAAgDIABgsIAAgpIAAgKIAAgKQAAgDACgDQACgCAEAAQAAAAABAAQAAAAABABQAAAAABAAQABAAAAABIAQgDIALgBQAJAAALADQAOADAAAGQAAADgCACQgCADgCAAIgEgBQgIgDgQAAIgJAAIgPACIAAAgQAOgDAHAAIAWABQAHABAAAHQAAADgCACQgCAAgDAAIgMAAIgKAAQgEAAgRADIgBAzQAAADgCACQgCADgDAAQgDAAgDgDg");
	this.shape_158.setTransform(-97,-83.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgkA4QgCgDAAgDIgBgRIgBgSIACgSIABgUIAAgLIgBgLQAAgFACgDQADgEAFABIASABQAKABAFAEQAeAQAAAXQAAALgKAHQgIAHgNADQAXANAMANQACADAAACQAAADgDADQgCACgDAAQgDAAgCgCQgZgYgcgJIABAPIAAAOQAAADgCADQgCACgDAAQgDAAgCgCgAgWggIAAAJIgBAPIgBANIADAAIADAAQASAAAIgFQAFAAADgEQAEgEAAgDQAAgKgMgJQgIgIgMgCIgLgBg");
	this.shape_159.setTransform(-106.6,-83.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgfA4QgHgGAAgYIAAgKIABgNIgBgDQAAAAAAAAQAAAAAAAAQABgBAAAAQAAgBABgBIABgfIgBgJIAAgIQgBgIAIAAQADAAACACIARgEIANAAQARAAAMADQAEACAAAFQAAADgCADQgCACgDAAIgDAAQgMgDgLAAIgMABIgPADIABAIIgCAcIAegDIASgBQADAAADACQACACAAADQAAAEgHABIgSACIggADIAAAKIgBAJQABARACACQACACAKAAIALAAIAPgBIADAAIAFAAQAIAAAAAIQAAAFgHACQgHABgUABQgYAAgGgHg");
	this.shape_160.setTransform(-116.1,-83.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgeA5QgCgDAAgDIAAgVIABgeIACgdIAAgLIAAgLQADgGAFABIAHgBIALAAQALAAAMAJQANAKAAAOQAAASgOAKQgNAJgPAAIgJgBIgBAnQAAADgBADQgCACgEAAQAAAAgBgBQgBAAAAAAQgBAAAAgBQgBAAAAAAgAgQgrIAAAOIgBAdIAIAAQAKAAAJgGQAKgGAAgMQgBgIgIgGQgJgFgHgBIgGAAIgFABg");
	this.shape_161.setTransform(-124.8,-83.9);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgEA2QgCgCAAgEIAAgDIABgDIgBgLIAAgLIgCgcIgCgdIgHAAQgQAAgJgDQgGgBAAgGQAAgDACgCQACgDADAAIAMACIAMAAIAOAAIALAAIARABIARABQADAAACACQACACAAADQAAADgCADQgCACgDAAIgRgBIgRgBIgFAAIACAhIACAgIAAAHIABAIQAAAFgCAEQgCAFgEAAQgBAAgDgCg");
	this.shape_162.setTransform(-137.9,-83.8);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgcAzQgOgHAAgLQAAgDACgCQACgCADAAQAEAAACAEQAEAGADACQAHAEALAAQAKAAAKgFQAMgGAAgLQAAgKgKgFQgJgFgLAAQgMAAgIgDQgLgGAAgLQAAgOAPgKQAOgLAOAAQAHAAAJADQAMADAAAFQAAAGgHAAIgKgBIgMgCQgJAAgIAGQgIAGAAAIQAAAGAKACIAOACQARABAKAKQAIAGAAANQAAARgQALQgOAJgRAAQgNAAgLgFg");
	this.shape_163.setTransform(-148.8,-83.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AAZAmIgEgXIgUADIgSAEIgNAdQgCAEgEAAQgDAAgCgCQgDgCAAgEQAAgDAMgYQgBAAAAgBQAAAAAAAAQgBgBAAgBQAAAAAAgBQAAgGAIgCIAVgiQAPgcAFAAQAGAAACAIIAEAZIALAxIAFAMIACAIQAAADgDACQgCACgDAAQgHAAgFgRgAgIAFIAZgFIgGgbg");
	this.shape_164.setTransform(-159.8,-83.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgeA5QgCgDAAgDIAAgVIABgeIACgdIAAgLIAAgLQACgGAGABIAHgBIAKAAQAMAAAMAJQANAKAAAOQAAASgOAKQgNAJgPAAIgJgBIgBAnQAAADgCADQgCACgCAAQgBAAgBgBQgBAAAAAAQgBAAAAgBQgBAAAAAAgAgPgrIAAAOIgCAdIAIAAQALAAAIgGQAKgGAAgMQAAgIgJgGQgJgFgHgBIgGAAIgEABg");
	this.shape_165.setTransform(-169,-83.9);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("rgba(255,255,255,0.6)").s().p("EgksAUAIAAp4MBJZAAAIAAJ4gEgkcgKGIAAp6MBJJAAAIAAJ6g");
	this.shape_166.setTransform(45.7,21.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88}]}).wait(136));

	// Layer 2
	this.instance = new lib.animbuffyrun();
	this.instance.setTransform(219.4,33,0.512,0.512,0,0,0,186.5,139.3);

	this.instance_1 = new lib.anim_buffyfinishline();
	this.instance_1.setTransform(208.9,-32.7,0.462,0.462,0,0,0,306.2,421.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},29).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},32).to({state:[{t:this.instance_1}]},1).wait(73));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-127.6},29).to({skewY:180,x:-154.6},1).to({x:218.4},32).to({_off:true},1).wait(73));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-222,-106.3,507.2,256.2);


// stage content:



(lib.pp_Scene3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene3:0,scene3_repeat:100});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
		this.btn_menu.addEventListener("click", openMenu.bind(this));
		this.btn_goNext.addEventListener("click", openNext.bind(this));
		this.btn_goBack.addEventListener("click", openPrev.bind(this));
		
		
		function openMenu(){
		
		 window.open ("../menu/menu.html","_self");
		}
		
		
		function openNext(){
		
		 window.open ("pp_Scene4.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("pp_Scene2.html","_self");
		}
	}
	this.frame_1 = function() {
		playSound("pastperfecttense");
	}
	this.frame_25 = function() {
		playSound("theverbformindicatingpreceded");
	}
	this.frame_99 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_105 = function() {
		this.gotoAndPlay("scene3_repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(24).call(this.frame_25).wait(74).call(this.frame_99).wait(6).call(this.frame_105).wait(1));

	// Layer 5
	this.instance = new lib.contentpastperfect();
	this.instance.setTransform(271.4,196.3,1,1,0,0,0,45.5,22.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag6BhQgOgNAAgpQAAgRADggQACgiAAgRIgBgNIgBgNQAAgTARAAQAGAAAFADIAcgGQANgCAKAAQAgAAATAIQAMAEAAAMQAAAHgFAFQgFAFgIAAIgFAAQgVgGgTAAIgTACIgXAEIgBAyIAwgEIAegDQAIAAAFAFQAFAFAAAIQAAANgQACIgeACIg0AFIgBAaQAAAZADAEQABABAPAAIAVAAIAYAAIAIgBIAHgBQAHAAAGAEQAGAFAAAIQAAAPgPACQgNADgmAAQgpAAgNgLg");
	this.shape.setTransform(319.2,31.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhDBSQgQgMAAgPQAAgIAFgGQAFgFAIAAQAMAAAFAMQAHAPAaAAQATAAAVgJQAVgKAAgMQAAgQgNgFQgJgDgagBQgXgBgRgGQgYgKABgTQAAgZAbgVQAagUAcAAQANAAATAFQAWAHAAAKQAAAGgEAFQgFAGgJAAQgFAAgNgDQgLgCgHAAQgPAAgNAIQgPAIgBAJQABAFAEADQAEADAKABIAeACQAcACARAOQASANAAAbQAAAhgmARQgcAMgjAAQggAAgSgOg");
	this.shape_1.setTransform(301.7,32.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhYBiQgFgGAAgHIABgQIABgOIAAgXIABgWIgBgXIAAgYIgCgWIgBgYQAAgHAHgGQAGgGAIAAQAKAAAMAQQA3BSA4AzIAAgUIgBhSIgBgOIgCgOQAAgSATAAQAUABAAA/IAAAVIgBBOIgCAUQgCAQgQAAQgKAAgLgKQgxgsg7hNIgBAmIABAfIAAAeQAAAlgSAAQgKAAgFgFg");
	this.shape_2.setTransform(282.1,32.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag6BhQgOgNAAgpQAAgRADggQACgiAAgRIgBgNIgBgNQAAgTARAAQAGAAAFADIAcgGQANgCAKAAQAgAAATAIQAMAEAAAMQAAAHgFAFQgFAFgIAAIgFAAQgVgGgTAAIgTACIgXAEIgBAyIAwgEIAegDQAIAAAFAFQAFAFAAAIQAAANgQACIgeACIg0AFIgBAaQAAAZADAEQABABAPAAIAVAAIAYAAIAIgBIAHgBQAHAAAGAEQAGAFAAAIQAAAPgPACQgNADgmAAQgpAAgNgLg");
	this.shape_3.setTransform(263.8,31.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgLBcQgGgFAAgIIAAgFIABgGIgBgRIgBgSQABgRgDgbIgEguIgGAAQgdAAgQgEQgOgEAAgNQAAgGAFgFQAFgHAIABIAUACIAVABIAXAAIAVAAIAdABIAdACQAHAAAGAFQAFAFAAAHQAAAHgFAFQgGAFgHAAIgfgBIgfgCIAEA0QADAfgBATIABANIABAMQAAAKgEAHQgFAKgJAAQgFAAgGgEg");
	this.shape_4.setTransform(246.4,31.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgLBcQgGgFAAgIIAAgFIABgGIgBgRIgBgSQAAgRgCgbIgEguIgGAAQgdAAgQgEQgOgEAAgNQAAgGAFgFQAEgHAJABIAUACIAVABIAXAAIAVAAIAdABIAdACQAHAAAGAFQAFAFAAAHQAAAHgFAFQgGAFgHAAIgfgBIgfgCIAEA0QACAfAAATIABANIABAMQAAAKgEAHQgFAKgJAAQgFAAgGgEg");
	this.shape_5.setTransform(217,31.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag4BNQgSgUAAgbQAAgpAlgsQAfgmAfAAIALABIAHABQAGgGAIAAQANAAADAPQACALAAAOQAAAGgEAGQgEAHgKAAQgLAAgFgNQgDgFgDgBQgBgBgJAAQgQAAgTAZQgdAhAAAeQAAAOAJAJQAKAKANAAQAKAAANgGIATgNQAKgGAFAAQAIAAAFAFQAFAGAAAGQAAAIgGAFQgjAegiAAQgdAAgUgVg");
	this.shape_6.setTransform(199.9,31.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag6BhQgOgNAAgpQAAgRADggQACgiAAgRIgBgNIgBgNQAAgTARAAQAGAAAFADIAcgGQANgCAKAAQAgAAATAIQAMAEAAAMQAAAHgFAFQgFAFgIAAIgFAAQgVgGgTAAIgTACIgXAEIgBAyIAwgEIAegDQAIAAAFAFQAFAFAAAIQAAANgQACIgeACIg0AFIgBAaQAAAZADAEQABABAPAAIAVAAIAYAAIAIgBIAHgBQAHAAAGAEQAGAFAAAIQAAAPgPACQgNADgmAAQgpAAgNgLg");
	this.shape_7.setTransform(184,31.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhABlQgEgFAAgIIAAiPIAAgPIAAgPQAAgHAFgFQAFgFAIAAQAEAAAEACQAPgDAMgBIAUgBQAPAAAWAGQAbAIAAAJQAAAIgFAEQgFAGgHAAIgHgBQgQgGgYAAIgPABIgXAEIAAApQATgEANAAQAWgBARADQARACAAAPQAAAIgGACQgFAGgHAAIgUgBIgSgBQgJgBgXAGIAABPQAAAIgGAFQgFAFgIAAQgHAAgFgFg");
	this.shape_8.setTransform(167.8,32.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhEBeQgFgFAAgHIAAgdIAAgcIABhlQAAgIAFgHQAGgIAMABIAfACQASACAKAHQA3AbAAAoQAAARgMALQgLAMgXAJQAiATARAUQAEAFAAAGQAAAHgFAFQgFAFgIAAQgHAAgFgFQgngkgsgOIABApQAAAHgFAFQgFAFgHAAQgIAAgFgFgAgmADIAGAAQAfAAANgGQAGgDAGgFQAFgGAAgDQAAgOgSgNQgPgNgTgBIgPgBg");
	this.shape_9.setTransform(151.6,31.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag6BhQgOgNAAgpQAAgRADggQACgiAAgRIgBgNIgBgNQAAgTARAAQAGAAAFADIAcgGQANgCAKAAQAgAAATAIQAMAEAAAMQAAAHgFAFQgFAFgIAAIgFAAQgVgGgTAAIgTACIgXAEIgBAyIAwgEIAegDQAIAAAFAFQAFAFAAAIQAAANgQACIgeACIg0AFIgBAaQAAAZADAEQABABAPAAIAVAAIAYAAIAIgBIAHgBQAHAAAGAEQAGAFAAAIQAAAPgPACQgNADgmAAQgpAAgNgLg");
	this.shape_10.setTransform(135.3,31.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag4BgQgFgFAAgHIAAgjQAAgUADgkQACgnAAgUQABghASACIALgCIATgBQAXAAAWAQQAYASAAAaQAAAhgaARQgWARgeAAIgLgBIgBA6QAAAHgEAFQgFAFgHAAQgHAAgFgFgAgWgxIgDAsIAJABQARAAAOgJQAOgKAAgRQAAgKgOgJQgMgIgNAAIgHAAIgFAAIAAASg");
	this.shape_11.setTransform(119.9,31.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgLBcQgGgFAAgIIABgFIABgGIgBgRIgCgSQAAgRgCgbIgDguIgHAAQgdAAgQgEQgOgEAAgNQAAgGAFgFQAEgHAKABIAUACIAUABIAXAAIAVAAIAdABIAdACQAIAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgIAAIgfgBIgegCIADA0QACAfAAATIACANIAAAMQAAAKgEAHQgFAKgJAAQgGAAgFgEg");
	this.shape_12.setTransform(92.8,31.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhDBSQgQgMAAgPQAAgIAFgGQAEgFAJAAQAMAAAFAMQAHAPAaAAQAUAAAUgJQAVgKAAgMQAAgQgNgFQgJgDgagBQgXgBgRgGQgYgKABgTQAAgZAbgVQAagUAcAAQANAAATAFQAWAHAAAKQAAAGgEAFQgGAGgIAAQgFAAgNgDQgLgCgHAAQgPAAgNAIQgPAIgBAJQABAFAEADQAEADAKABIAeACQAcACARAOQASANAAAbQAAAhglARQgdAMgjAAQggAAgSgOg");
	this.shape_13.setTransform(74.6,32.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAsBHQgHgPgEgTIggADQgRABgLACIgUAqQgGAJgKAAQgHAAgFgFQgGgEAAgIQAAgGASgmIgBgHQAAgGAMgEQATgdAWghQAdgwAHAAQAPAAAEAQIAJApIASBSIAHARQAEALAAAFQAAAHgFAFQgGAFgHAAQgKAAgKgYgAgJALQAGgBALgBIARgBIgIgpIgaAsg");
	this.shape_14.setTransform(55.9,32.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag4BgQgFgFAAgHIAAgjQAAgUADgkQACgnAAgUQABghARACIANgCIASgBQAXAAAWAQQAYASAAAaQAAAhgZARQgYARgdAAIgLgBIgBA6QABAHgFAFQgFAFgHAAQgIAAgEgFgAgWgxIgCAsIAIABQASAAANgJQAOgKAAgRQAAgKgOgJQgMgIgNAAIgHAAIgFAAIAAASg");
	this.shape_15.setTransform(39.7,31.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(106));

	// Layer 7
	this.btn_menu = new lib.skiptomenu();
	this.btn_menu.setTransform(514.1,20.3);
	new cjs.ButtonHelper(this.btn_menu, 0, 1, 2, false, new lib.skiptomenu(), 3);

	this.instance_1 = new lib.Copyright("synched",0);
	this.instance_1.setTransform(275,393.5);

	this.btn_goBack = new lib.goNext();
	this.btn_goBack.setTransform(57.6,352.3,1,1,0,0,180);
	new cjs.ButtonHelper(this.btn_goBack, 0, 1, 2, false, new lib.goNext(), 3);

	this.btn_goNext = new lib.goNext();
	this.btn_goNext.setTransform(494,352.3);
	new cjs.ButtonHelper(this.btn_goNext, 0, 1, 2, false, new lib.goNext(), 3);

	this.instance_2 = new lib.BkScene("synched",0);
	this.instance_2.setTransform(275.1,198.7,1.041,0.981);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.btn_goNext},{t:this.btn_goBack},{t:this.instance_1},{t:this.btn_menu}]}).wait(106));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(278.9,201.8,542.4,401.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;