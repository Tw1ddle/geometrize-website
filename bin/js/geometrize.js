// Generated by Haxe 3.4.2 (git build master @ 890f8c7)
(function () { "use strict";
var $estr = function() { return js_Boot.__string_rec(this,''); };
var HxOverrides = function() { };
HxOverrides.__name__ = true;
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) {
		return undefined;
	}
	return x;
};
var ImageItem = function(imagePath,caption,typeId,link) {
	if(link == null) {
		link = "";
	}
	this.imagePath = imagePath;
	this.caption = caption;
	this.typeId = typeId;
	this.link = link;
};
ImageItem.__name__ = true;
var GalleryItem = function(beforeImagePath,afterImagePath,shapeName,shapeCount) {
	this.beforeImagePath = beforeImagePath;
	this.afterImagePath = afterImagePath;
	this.shapeName = shapeName;
	this.shapeCount = shapeCount;
};
GalleryItem.__name__ = true;
GalleryItem.prototype = {
	get_caption: function() {
		return "<i>" + Std.string(this.shapeCount) + " " + this.shapeName + "</i>";
	}
	,get_link: function() {
		return "http://www.geometrize.co.uk/" + this.afterImagePath;
	}
};
var PlatformDetector = function() { };
PlatformDetector.__name__ = true;
PlatformDetector.getOperatingSystem = function() {
	if(window.navigator.userAgent.indexOf("Win") != -1) {
		return OperatingSystem.WINDOWS;
	}
	if(window.navigator.userAgent.indexOf("Mac") != -1 || window.navigator.userAgent.indexOf("OSX") != -1) {
		return OperatingSystem.OSX;
	}
	if(window.navigator.userAgent.indexOf("Android") != -1) {
		return OperatingSystem.ANDROID;
	}
	if(window.navigator.userAgent.indexOf("Linux") != -1) {
		return OperatingSystem.LINUX;
	}
	if(window.navigator.userAgent.indexOf("iOS") != -1) {
		return OperatingSystem.IOS;
	}
	return OperatingSystem.OTHER;
};
var OperatingSystem = { __ename__ : true, __constructs__ : ["WINDOWS","OSX","LINUX","ANDROID","IOS","OTHER"] };
OperatingSystem.WINDOWS = ["WINDOWS",0];
OperatingSystem.WINDOWS.toString = $estr;
OperatingSystem.WINDOWS.__enum__ = OperatingSystem;
OperatingSystem.OSX = ["OSX",1];
OperatingSystem.OSX.toString = $estr;
OperatingSystem.OSX.__enum__ = OperatingSystem;
OperatingSystem.LINUX = ["LINUX",2];
OperatingSystem.LINUX.toString = $estr;
OperatingSystem.LINUX.__enum__ = OperatingSystem;
OperatingSystem.ANDROID = ["ANDROID",3];
OperatingSystem.ANDROID.toString = $estr;
OperatingSystem.ANDROID.__enum__ = OperatingSystem;
OperatingSystem.IOS = ["IOS",4];
OperatingSystem.IOS.toString = $estr;
OperatingSystem.IOS.__enum__ = OperatingSystem;
OperatingSystem.OTHER = ["OTHER",5];
OperatingSystem.OTHER.toString = $estr;
OperatingSystem.OTHER.__enum__ = OperatingSystem;
var Main = function() {
	this.moreProjectsItems = [new ImageItem("assets/images/haxe_demo_geometrized.png","<i>The web demo, turning images into shapes in your browser</i>",2,"http://www.samcodes.co.uk/project/geometrize-haxe-web/"),new ImageItem("assets/images/geometrize_tutorial_videos.png","<i>Quickstart videos and tutorials, for getting the most out of Geometrize</i>",2,"https://www.youtube.com/playlist?list=PLe9ogi_J4cFgcqLdpmPC7GdFV5ohJPEzN"),new ImageItem("assets/images/geometrize_twitter_bot.png","<i>The Twitter bot, which regularly tweets geometrized artwork</i>",2,"https://twitter.com/Geometrizer"),new ImageItem("assets/images/webgl_tweens_geometrize_demo.png","<i>The WebGL demo, showcasing animations made from shape data</i>",2,"http://tweens.geometrize.co.uk/"),new ImageItem("assets/images/resources_page_image.png","<i>Additional resources. Places to find inspiration, related projects and free images</i>",2,"http://resources.geometrize.co.uk/")];
	this.middleGalleryItems = [new GalleryItem(Main.resolveAssetPath("assets/images/examples/resting_shoes_geometrized.png"),Main.resolveAssetPath("assets/images/examples/resting_shoes.png"),"Rotated Ellipses",350),new GalleryItem(Main.resolveAssetPath("assets/images/examples/ridge_geometrized.png"),Main.resolveAssetPath("assets/images/examples/ridge.png"),"Circles",430),new GalleryItem(Main.resolveAssetPath("assets/images/examples/tree_under_clouds_geometrized.png"),Main.resolveAssetPath("assets/images/examples/tree_under_clouds.png"),"Ellipses",200),new GalleryItem(Main.resolveAssetPath("assets/images/examples/wolf_geometrized.png"),Main.resolveAssetPath("assets/images/examples/wolf.png"),"Triangles",210),new GalleryItem(Main.resolveAssetPath("assets/images/examples/building_geometrized.png"),Main.resolveAssetPath("assets/images/examples/building.png"),"Circles",460),new GalleryItem(Main.resolveAssetPath("assets/images/examples/sunset_geometrized.png"),Main.resolveAssetPath("assets/images/examples/sunset.png"),"Triangles",350),new GalleryItem(Main.resolveAssetPath("assets/images/examples/boat_geometrized.png"),Main.resolveAssetPath("assets/images/examples/boat.png"),"Rotated Ellipses",370),new GalleryItem(Main.resolveAssetPath("assets/images/examples/flower_another_geometrized.png"),Main.resolveAssetPath("assets/images/examples/flower_another.png"),"Rotated Ellipses",330),new GalleryItem(Main.resolveAssetPath("assets/images/examples/flowers_geometrized.png"),Main.resolveAssetPath("assets/images/examples/flowers.png"),"Rotated Ellipses",200),new GalleryItem(Main.resolveAssetPath("assets/images/examples/tree_under_clouds_geometrized.png"),Main.resolveAssetPath("assets/images/examples/tree_under_clouds.png"),"Ellipses",290),new GalleryItem(Main.resolveAssetPath("assets/images/examples/tree_geometrized.png"),Main.resolveAssetPath("assets/images/examples/tree.png"),"Rotated Ellipses",400)];
	this.keyFeaturesItems = [new ImageItem(Main.resolveAssetPath("assets/images/$screenshotFolder/geometrize_image_task.png"),"<i>Interactive image geometrization with dozens of settings. Zoomable raster and vector-based views for watching images transform into geometric primitives in realtime</i>",1,Main.platformDownloadLink),new ImageItem(Main.resolveAssetPath("assets/images/$screenshotFolder/geometrize_landing_page.png"),"<i>Get started with hundreds of preset images, with preconfigured settings. Or import your own photos - simply drag-drop an image, or copy-paste a link</i>",1,Main.platformDownloadLink),new ImageItem(Main.resolveAssetPath("assets/images/$screenshotFolder/geometrize_export_options.png"),"<i>Export the geometrized images as PNG, JPG, SVG, JSON, animated GIF, sequences of images, and more...</i>",1,Main.platformDownloadLink),new ImageItem(Main.resolveAssetPath("assets/images/$screenshotFolder/geometrize_scripting_panel.png"),"<i>Customize and reimplement the geometrization algorithm using the embedded ChaiScript scripting engine</i>",1,Main.platformDownloadLink)];
	this.startGalleryItems = [new GalleryItem(Main.resolveAssetPath("assets/images/examples/train_geometrized.png"),Main.resolveAssetPath("assets/images/examples/train.png"),"Rotated Ellipses",260),new GalleryItem(Main.resolveAssetPath("assets/images/examples/man_geometrized.png"),Main.resolveAssetPath("assets/images/examples/man.png"),"Rotated Rectangles",440),new GalleryItem(Main.resolveAssetPath("assets/images/examples/rose_geometrized.png"),Main.resolveAssetPath("assets/images/examples/rose.png"),"Triangles",240)];
	window.onload = $bind(this,this.onWindowLoaded);
};
Main.__name__ = true;
Main.resolveAssetPath = function(path) {
	var tmp;
	switch(Main.operatingSystem[1]) {
	case 0:
		tmp = "windows";
		break;
	case 1:case 4:
		tmp = "mac";
		break;
	case 2:
		tmp = "linux";
		break;
	default:
		tmp = "windows";
	}
	return StringTools.replace(path,"$screenshotFolder",tmp);
};
Main.main = function() {
	var main = new Main();
};
Main.prototype = {
	onWindowLoaded: function() {
		var anchors = window.document.getElementsByTagName("a");
		var _g = 0;
		while(_g < anchors.length) {
			var anchor = anchors[_g];
			++_g;
			var a = anchor;
			if(anchor.classList.contains("geometrizedownloadlink")) {
				var os = Main.operatingSystem;
				a.href = "https://github.com/Tw1ddle/geometrize/releases";
			} else if(anchor.classList.contains("geometrizewindowsdownloadlink")) {
				a.href = "https://github.com/Tw1ddle/geometrize/releases";
			} else if(anchor.classList.contains("geometrizemacdownloadlink")) {
				a.href = "https://github.com/Tw1ddle/geometrize/releases";
			} else if(anchor.classList.contains("geometrizelinuxdownloadlink")) {
				a.href = "https://github.com/Tw1ddle/geometrize/releases";
			}
		}
		var items = this.startGalleryItems;
		var addItem = $bind(this,this.addGalleryItem);
		var element = Main.startGalleryItemContainer;
		var i = 0;
		while(i + 3 <= items.length) {
			var row = window.document.createElement("div");
			row.className = "rowborder";
			var _g1 = 0;
			var _g2 = 3;
			while(_g1 < _g2) {
				var j = _g1++;
				addItem(items[i + j],row);
			}
			element.appendChild(row);
			i += 3;
		}
		var items1 = this.keyFeaturesItems;
		var addItem1 = $bind(this,this.addImageItem);
		var element1 = Main.keyFeaturesItemContainer;
		var i1 = 0;
		while(i1 + 4 <= items1.length) {
			var row1 = window.document.createElement("div");
			row1.className = "rowborder";
			var _g11 = 0;
			var _g3 = 4;
			while(_g11 < _g3) {
				var j1 = _g11++;
				addItem1(items1[i1 + j1],row1);
			}
			element1.appendChild(row1);
			i1 += 4;
		}
		var items2 = this.middleGalleryItems;
		var addItem2 = $bind(this,this.addGalleryItem);
		var element2 = Main.middleGalleryItemContainer;
		var i2 = 0;
		while(i2 + 3 <= items2.length) {
			var row2 = window.document.createElement("div");
			row2.className = "rowborder";
			var _g12 = 0;
			var _g4 = 3;
			while(_g12 < _g4) {
				var j2 = _g12++;
				addItem2(items2[i2 + j2],row2);
			}
			element2.appendChild(row2);
			i2 += 3;
		}
		var items3 = this.moreProjectsItems;
		var addItem3 = $bind(this,this.addImageItem);
		var element3 = Main.moreProjectsItemContainer;
		var i3 = 0;
		while(i3 + 5 <= items3.length) {
			var row3 = window.document.createElement("div");
			row3.className = "rowborder";
			var _g13 = 0;
			var _g5 = 5;
			while(_g13 < _g5) {
				var j3 = _g13++;
				addItem3(items3[i3 + j3],row3);
			}
			element3.appendChild(row3);
			i3 += 5;
		}
		var container = Main.startDownloadContainer;
		var download = window.document.createElement("a");
		download.className = "button stitched";
		var tmp;
		switch(PlatformDetector.getOperatingSystem()[1]) {
		case 0:
			tmp = "Windows";
			break;
		case 1:case 4:
			tmp = "Mac OS X";
			break;
		case 2:
			tmp = "Linux";
			break;
		default:
			tmp = "Windows";
		}
		download.innerText = "Download For " + tmp;
		var os1 = PlatformDetector.getOperatingSystem();
		download.href = "https://github.com/Tw1ddle/geometrize/releases";
		download.target = "_blank";
		var getCode = window.document.createElement("a");
		getCode.className = "button stitched";
		getCode.innerText = "Download Source Code";
		getCode.href = "https://github.com/Tw1ddle/geometrize";
		getCode.target = "_blank";
		var webDemo = window.document.createElement("a");
		webDemo.className = "button stitched";
		webDemo.innerText = "Run Web Demo";
		webDemo.href = "http://www.samcodes.co.uk/project/geometrize-haxe-web/";
		webDemo.target = "_blank";
		var span = window.document.createElement("span");
		span.className = "downloadsectionspan";
		span.appendChild(download);
		span.appendChild(getCode);
		span.appendChild(webDemo);
		container.appendChild(span);
		var container1 = Main.endDownloadContainer;
		var download1 = window.document.createElement("a");
		download1.className = "button stitched";
		var tmp1;
		switch(PlatformDetector.getOperatingSystem()[1]) {
		case 0:
			tmp1 = "Windows";
			break;
		case 1:case 4:
			tmp1 = "Mac OS X";
			break;
		case 2:
			tmp1 = "Linux";
			break;
		default:
			tmp1 = "Windows";
		}
		download1.innerText = "Download For " + tmp1;
		var os2 = PlatformDetector.getOperatingSystem();
		download1.href = "https://github.com/Tw1ddle/geometrize/releases";
		download1.target = "_blank";
		var getCode1 = window.document.createElement("a");
		getCode1.className = "button stitched";
		getCode1.innerText = "Download Source Code";
		getCode1.href = "https://github.com/Tw1ddle/geometrize";
		getCode1.target = "_blank";
		var webDemo1 = window.document.createElement("a");
		webDemo1.className = "button stitched";
		webDemo1.innerText = "Run Web Demo";
		webDemo1.href = "http://www.samcodes.co.uk/project/geometrize-haxe-web/";
		webDemo1.target = "_blank";
		var span1 = window.document.createElement("span");
		span1.className = "downloadsectionspan";
		span1.appendChild(download1);
		span1.appendChild(getCode1);
		span1.appendChild(webDemo1);
		container1.appendChild(span1);
		var nodes = window.document.querySelectorAll(".twentytwenty");
		var _g6 = 0;
		while(_g6 < nodes.length) {
			var node = nodes[_g6];
			++_g6;
			new TwentyTwenty(node);
		}
	}
	,addImageItem: function(item,row) {
		var container = window.document.createElement("div");
		container.className = "container imageitemcontainer";
		var image = window.document.createElement("img");
		image.className = "imageitem";
		if(item.typeId == 1) {
			image.className += " imagefeatureitem";
			container.className += " imagefeatureitemcontainer";
		} else if(item.typeId == 2) {
			image.className += " imageresourceitem";
			container.className += " imageresourceitemcontainer";
		}
		image.src = item.imagePath;
		var captionText = window.document.createElement("p");
		captionText.innerHTML = item.caption;
		if(item.link != "") {
			var anchor = window.document.createElement("a");
			anchor.href = item.link;
			anchor.target = "_blank";
			anchor.appendChild(image);
			anchor.appendChild(captionText);
			container.appendChild(anchor);
		} else {
			container.appendChild(image);
			container.appendChild(captionText);
		}
		row.appendChild(container);
	}
	,addGalleryItem: function(item,row) {
		var container = window.document.createElement("div");
		container.className = "container galleryitemcontainer";
		var twentyTwenty = window.document.createElement("div");
		twentyTwenty.className = "twentytwenty galleryitem";
		var captionText = window.document.createElement("p");
		captionText.innerHTML = item.get_caption();
		var beforeImage = window.document.createElement("img");
		beforeImage.src = item.beforeImagePath;
		var afterImage = window.document.createElement("img");
		afterImage.src = item.afterImagePath;
		twentyTwenty.appendChild(beforeImage);
		twentyTwenty.appendChild(afterImage);
		if(item.get_link() != "http://www.geometrize.co.uk/") {
			var anchor = window.document.createElement("a");
			anchor.href = item.get_link();
			anchor.target = "_blank";
			anchor.appendChild(twentyTwenty);
			anchor.appendChild(captionText);
			container.appendChild(anchor);
		} else {
			container.appendChild(twentyTwenty);
			container.appendChild(captionText);
		}
		row.appendChild(container);
	}
};
Math.__name__ = true;
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) {
		v = parseInt(x);
	}
	if(isNaN(v)) {
		return null;
	}
	return v;
};
var StringTools = function() { };
StringTools.__name__ = true;
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
};
var TwentyTwenty = function(element,dividerStartFraction) {
	if(dividerStartFraction == null) {
		dividerStartFraction = 0.5;
	}
	this.leftPos = 0;
	this.maxLeftPos = 0;
	this.minLeftPos = 0;
	this.dragElementWidth = 0;
	this.elementOffsetLeft = 0;
	this.elementWidth = 0;
	this.beforeImage = null;
	this.beforeElement = null;
	this.draggerElement = null;
	this.element = element;
	var span = window.document.createElement("span");
	span.className = StringTools.replace(".twentytwenty-drag",".","");
	this.element.appendChild(span);
	var wrapper = window.document.createElement("div");
	var firstImage = this.element.querySelector("img:first-child");
	wrapper.appendChild(firstImage.cloneNode(true));
	firstImage.parentNode.replaceChild(wrapper,firstImage);
	this.draggerElement = this.element.querySelector(".twentytwenty-drag");
	this.beforeElement = this.element.querySelector("div:first-child");
	this.beforeImage = this.beforeElement.querySelector("img");
	this.elementWidth = Std.parseInt(window.getComputedStyle(this.element).width);
	this.elementOffsetLeft = this.element.getBoundingClientRect().left + window.document.body.scrollLeft;
	this.beforeImage.style.width = Std.string(this.elementWidth) + "px";
	this.dragElementWidth = Std.parseInt(window.getComputedStyle(this.draggerElement).width);
	this.minLeftPos = this.elementOffsetLeft + 10;
	this.maxLeftPos = this.elementOffsetLeft + this.elementWidth - this.dragElementWidth - 10;
	this.element.addEventListener("mousemove",$bind(this,this.onDrag));
	this.element.addEventListener("touchmove",$bind(this,this.onDrag));
	window.addEventListener("resize",$bind(this,this.setDimensions));
	this.setDividerPosition(dividerStartFraction);
};
TwentyTwenty.__name__ = true;
TwentyTwenty.prototype = {
	setDimensions: function() {
		this.elementWidth = Std.parseInt(window.getComputedStyle(this.element).width);
		this.elementOffsetLeft = this.element.getBoundingClientRect().left + window.document.body.scrollLeft;
		this.beforeImage.style.width = Std.string(this.elementWidth) + "px";
		this.dragElementWidth = Std.parseInt(window.getComputedStyle(this.draggerElement).width);
		this.minLeftPos = this.elementOffsetLeft + 10;
		this.maxLeftPos = this.elementOffsetLeft + this.elementWidth - this.dragElementWidth - 10;
	}
	,onDrag: function(e) {
		e.preventDefault();
		var moveX = e.pageX != null ? e.pageX : e.touches[0].pageX;
		this.leftPos = moveX - this.dragElementWidth;
		this.requestDrag();
	}
	,performDrag: function(dt) {
		if(this.leftPos < this.minLeftPos) {
			this.leftPos = this.minLeftPos;
		} else if(this.leftPos > this.maxLeftPos) {
			this.leftPos = this.maxLeftPos;
		}
		var openRatio = this.leftPos + this.dragElementWidth / 2 - this.elementOffsetLeft;
		openRatio /= this.elementWidth;
		this.setDividerPosition(openRatio);
	}
	,requestDrag: function() {
		window.requestAnimationFrame($bind(this,this.performDrag));
	}
	,setDividerPosition: function(fractionAcross) {
		var percentAcross = Std.string(fractionAcross * 100) + "%";
		this.draggerElement.style.left = percentAcross;
		this.beforeElement.style.width = percentAcross;
	}
};
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) {
					return o[0];
				}
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) {
						str += "," + js_Boot.__string_rec(o[i],s);
					} else {
						str += js_Boot.__string_rec(o[i],s);
					}
				}
				return str + ")";
			}
			var l = o.length;
			var i1;
			var str1 = "[";
			s += "\t";
			var _g11 = 0;
			var _g2 = l;
			while(_g11 < _g2) {
				var i2 = _g11++;
				str1 += (i2 > 0 ? "," : "") + js_Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var k = null;
		var str2 = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str2.length != 2) {
			str2 += ", \n";
		}
		str2 += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str2 += "\n" + s + "}";
		return str2;
	case "string":
		return o;
	default:
		return String(o);
	}
};
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
String.__name__ = true;
Array.__name__ = true;
Main.operatingSystem = PlatformDetector.getOperatingSystem();
Main.platformDownloadLink = (function($this) {
	var $r;
	var os = PlatformDetector.getOperatingSystem();
	$r = "https://github.com/Tw1ddle/geometrize/releases";
	return $r;
}(this));
Main.startGalleryItemContainer = window.document.getElementById("gallerystart");
Main.startDownloadContainer = window.document.getElementById("startdownload");
Main.keyFeaturesItemContainer = window.document.getElementById("keyfeatures");
Main.middleGalleryItemContainer = window.document.getElementById("gallerymiddle");
Main.moreProjectsItemContainer = window.document.getElementById("moreprojects");
Main.endDownloadContainer = window.document.getElementById("enddownload");
Main.main();
})();
