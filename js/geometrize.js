(function ($global) { "use strict";
var $estr = function() { return js_Boot.__string_rec(this,''); },$hxEnums = $hxEnums || {},$_;
function $extend(from, fields) {
	var proto = Object.create(from);
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var EReg = function(r,opt) {
	this.r = new RegExp(r,opt.split("u").join(""));
};
EReg.__name__ = true;
EReg.prototype = {
	match: function(s) {
		if(this.r.global) {
			this.r.lastIndex = 0;
		}
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
};
var Lambda = function() { };
Lambda.__name__ = true;
Lambda.exists = function(it,f) {
	var x = $getIterator(it);
	while(x.hasNext()) {
		var x1 = x.next();
		if(f(x1)) {
			return true;
		}
	}
	return false;
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
ImageItem.prototype = {
	get_link: function() {
		if(this.link.length != 0) {
			return this.link;
		}
		return "https://www.geometrize.co.uk/" + this.imagePath;
	}
};
var GalleryItem = function(beforeImagePath,afterImagePath,shapeName,shapeCount) {
	this.beforeImagePath = beforeImagePath;
	this.afterImagePath = afterImagePath;
	this.shapeName = shapeName;
	this.shapeCount = shapeCount;
};
GalleryItem.__name__ = true;
GalleryItem.prototype = {
	get_caption: function() {
		return Std.string(this.shapeCount) + " " + this.shapeName;
	}
	,get_link: function() {
		return "https://www.geometrize.co.uk/" + this.beforeImagePath;
	}
};
var PlatformDetector = function() { };
PlatformDetector.__name__ = true;
PlatformDetector.getOperatingSystem = function() {
	if($global.navigator.userAgent.indexOf("Win") != -1) {
		return OperatingSystem.WINDOWS;
	}
	if($global.navigator.userAgent.indexOf("Mac") != -1 || $global.navigator.userAgent.indexOf("OSX") != -1) {
		return OperatingSystem.OSX;
	}
	if($global.navigator.userAgent.indexOf("Android") != -1) {
		return OperatingSystem.ANDROID;
	}
	if($global.navigator.userAgent.indexOf("Linux") != -1) {
		return OperatingSystem.LINUX;
	}
	if($global.navigator.userAgent.indexOf("iOS") != -1) {
		return OperatingSystem.IOS;
	}
	return OperatingSystem.OTHER;
};
var OperatingSystem = $hxEnums["OperatingSystem"] = { __ename__:true,__constructs__:null
	,WINDOWS: {_hx_name:"WINDOWS",_hx_index:0,__enum__:"OperatingSystem",toString:$estr}
	,OSX: {_hx_name:"OSX",_hx_index:1,__enum__:"OperatingSystem",toString:$estr}
	,LINUX: {_hx_name:"LINUX",_hx_index:2,__enum__:"OperatingSystem",toString:$estr}
	,ANDROID: {_hx_name:"ANDROID",_hx_index:3,__enum__:"OperatingSystem",toString:$estr}
	,IOS: {_hx_name:"IOS",_hx_index:4,__enum__:"OperatingSystem",toString:$estr}
	,OTHER: {_hx_name:"OTHER",_hx_index:5,__enum__:"OperatingSystem",toString:$estr}
};
OperatingSystem.__constructs__ = [OperatingSystem.WINDOWS,OperatingSystem.OSX,OperatingSystem.LINUX,OperatingSystem.ANDROID,OperatingSystem.IOS,OperatingSystem.OTHER];
var haxe_ds_BalancedTree = function() {
};
haxe_ds_BalancedTree.__name__ = true;
haxe_ds_BalancedTree.prototype = {
	set: function(key,value) {
		this.root = this.setLoop(key,value,this.root);
	}
	,get: function(key) {
		var node = this.root;
		while(node != null) {
			var c = this.compare(key,node.key);
			if(c == 0) {
				return node.value;
			}
			if(c < 0) {
				node = node.left;
			} else {
				node = node.right;
			}
		}
		return null;
	}
	,exists: function(key) {
		var node = this.root;
		while(node != null) {
			var c = this.compare(key,node.key);
			if(c == 0) {
				return true;
			} else if(c < 0) {
				node = node.left;
			} else {
				node = node.right;
			}
		}
		return false;
	}
	,setLoop: function(k,v,node) {
		if(node == null) {
			return new haxe_ds_TreeNode(null,k,v,null);
		}
		var c = this.compare(k,node.key);
		if(c == 0) {
			return new haxe_ds_TreeNode(node.left,k,v,node.right,node == null ? 0 : node._height);
		} else if(c < 0) {
			var nl = this.setLoop(k,v,node.left);
			return this.balance(nl,node.key,node.value,node.right);
		} else {
			var nr = this.setLoop(k,v,node.right);
			return this.balance(node.left,node.key,node.value,nr);
		}
	}
	,balance: function(l,k,v,r) {
		var hl = l == null ? 0 : l._height;
		var hr = r == null ? 0 : r._height;
		if(hl > hr + 2) {
			var _this = l.left;
			var _this1 = l.right;
			if((_this == null ? 0 : _this._height) >= (_this1 == null ? 0 : _this1._height)) {
				return new haxe_ds_TreeNode(l.left,l.key,l.value,new haxe_ds_TreeNode(l.right,k,v,r));
			} else {
				return new haxe_ds_TreeNode(new haxe_ds_TreeNode(l.left,l.key,l.value,l.right.left),l.right.key,l.right.value,new haxe_ds_TreeNode(l.right.right,k,v,r));
			}
		} else if(hr > hl + 2) {
			var _this = r.right;
			var _this1 = r.left;
			if((_this == null ? 0 : _this._height) > (_this1 == null ? 0 : _this1._height)) {
				return new haxe_ds_TreeNode(new haxe_ds_TreeNode(l,k,v,r.left),r.key,r.value,r.right);
			} else {
				return new haxe_ds_TreeNode(new haxe_ds_TreeNode(l,k,v,r.left.left),r.left.key,r.left.value,new haxe_ds_TreeNode(r.left.right,r.key,r.value,r.right));
			}
		} else {
			return new haxe_ds_TreeNode(l,k,v,r,(hl > hr ? hl : hr) + 1);
		}
	}
	,compare: function(k1,k2) {
		return Reflect.compare(k1,k2);
	}
};
var haxe_ds_EnumValueMap = function() {
	haxe_ds_BalancedTree.call(this);
};
haxe_ds_EnumValueMap.__name__ = true;
haxe_ds_EnumValueMap.__super__ = haxe_ds_BalancedTree;
haxe_ds_EnumValueMap.prototype = $extend(haxe_ds_BalancedTree.prototype,{
	compare: function(k1,k2) {
		var d = k1._hx_index - k2._hx_index;
		if(d != 0) {
			return d;
		}
		var p1 = Type.enumParameters(k1);
		var p2 = Type.enumParameters(k2);
		if(p1.length == 0 && p2.length == 0) {
			return 0;
		}
		return this.compareArgs(p1,p2);
	}
	,compareArgs: function(a1,a2) {
		var ld = a1.length - a2.length;
		if(ld != 0) {
			return ld;
		}
		var _g = 0;
		var _g1 = a1.length;
		while(_g < _g1) {
			var i = _g++;
			var d = this.compareArg(a1[i],a2[i]);
			if(d != 0) {
				return d;
			}
		}
		return 0;
	}
	,compareArg: function(v1,v2) {
		if(Reflect.isEnumValue(v1) && Reflect.isEnumValue(v2)) {
			return this.compare(v1,v2);
		} else if(((v1) instanceof Array) && ((v2) instanceof Array)) {
			return this.compareArgs(v1,v2);
		} else {
			return Reflect.compare(v1,v2);
		}
	}
});
var Main = function() {
	this.moreProjectsItems = [new ImageItem("assets/images/haxe_demo_geometrized.png","The web demo, turning images into shapes in your browser",2,"https://www.samcodes.co.uk/project/geometrize-haxe-web/"),new ImageItem("assets/images/geometrize_tutorial_videos.png","Quickstart videos and tutorials, for getting the most out of Geometrize",2,"https://www.youtube.com/playlist?list=PLe9ogi_J4cFgcqLdpmPC7GdFV5ohJPEzN"),new ImageItem("assets/images/geometrize_twitter_bot.png","The Twitter bot, which regularly tweets geometrized artwork",2,"https://twitter.com/Geometrizer"),new ImageItem("assets/images/webgl_tweens_geometrize_demo.png","The WebGL demo, showcasing animations made from shape data",2,"https://tweens.geometrize.co.uk/"),new ImageItem("assets/images/resources_page_image.png","Additional resources. Places to find inspiration, related projects and free images",2,"https://resources.geometrize.co.uk/")];
	this.middleGalleryItems = [new GalleryItem(Main.resolveAssetPath("assets/images/examples/resting_shoes_geometrized.png"),Main.resolveAssetPath("assets/images/examples/resting_shoes.png"),"Rotated Ellipses",350),new GalleryItem(Main.resolveAssetPath("assets/images/examples/ridge_geometrized.png"),Main.resolveAssetPath("assets/images/examples/ridge.png"),"Circles",430),new GalleryItem(Main.resolveAssetPath("assets/images/examples/tree_under_clouds_geometrized.png"),Main.resolveAssetPath("assets/images/examples/tree_under_clouds.png"),"Ellipses",200),new GalleryItem(Main.resolveAssetPath("assets/images/examples/wolf_geometrized.png"),Main.resolveAssetPath("assets/images/examples/wolf.png"),"Triangles",210),new GalleryItem(Main.resolveAssetPath("assets/images/examples/building_geometrized.png"),Main.resolveAssetPath("assets/images/examples/building.png"),"Circles",460),new GalleryItem(Main.resolveAssetPath("assets/images/examples/sunset_geometrized.png"),Main.resolveAssetPath("assets/images/examples/sunset.png"),"Triangles",350),new GalleryItem(Main.resolveAssetPath("assets/images/examples/boat_geometrized.png"),Main.resolveAssetPath("assets/images/examples/boat.png"),"Rotated Ellipses",370),new GalleryItem(Main.resolveAssetPath("assets/images/examples/flower_another_geometrized.png"),Main.resolveAssetPath("assets/images/examples/flower_another.png"),"Rotated Ellipses",330),new GalleryItem(Main.resolveAssetPath("assets/images/examples/flowers_geometrized.png"),Main.resolveAssetPath("assets/images/examples/flowers.png"),"Rotated Ellipses",200),new GalleryItem(Main.resolveAssetPath("assets/images/examples/tree_under_clouds_geometrized.png"),Main.resolveAssetPath("assets/images/examples/tree_under_clouds.png"),"Ellipses",290),new GalleryItem(Main.resolveAssetPath("assets/images/examples/tree_geometrized.png"),Main.resolveAssetPath("assets/images/examples/tree.png"),"Rotated Ellipses",400)];
	this.keyFeaturesItems = [new ImageItem(Main.resolveAssetPath("assets/images/$screenshotFolder/geometrize_landing_page.png"),"Get started with hundreds of images with preconfigured settings. Or import your own photos - simply drag-drop an image, or copy-paste a link",1),new ImageItem(Main.resolveAssetPath("assets/images/$screenshotFolder/geometrize_image_task.png"),"Interactive image geometrization with dozens of settings. Zoomable raster and vector-based views for watching images transform into geometric primitives in realtime",1),new ImageItem(Main.resolveAssetPath("assets/images/$screenshotFolder/geometrize_export_options.png"),"Export the geometrized images as PNG, JPG, SVG, JSON, sequences of images, and more...",1),new ImageItem(Main.resolveAssetPath("assets/images/$screenshotFolder/geometrize_scripting_panel.png"),"Customize the geometrization algorithm using the embedded ChaiScript scripting engine",1)];
	this.startGalleryItems = [new GalleryItem(Main.resolveAssetPath("assets/images/examples/train_geometrized.png"),Main.resolveAssetPath("assets/images/examples/train.png"),"Rotated Ellipses",260),new GalleryItem(Main.resolveAssetPath("assets/images/examples/man_geometrized.png"),Main.resolveAssetPath("assets/images/examples/man.png"),"Rotated Rectangles",440),new GalleryItem(Main.resolveAssetPath("assets/images/examples/rose_geometrized.png"),Main.resolveAssetPath("assets/images/examples/rose.png"),"Triangles",240)];
	window.onload = $bind(this,this.onWindowLoaded);
};
Main.__name__ = true;
Main.resolveAssetPath = function(path) {
	var tmp;
	switch(Main.operatingSystem._hx_index) {
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
Main.requestLatestGithubReleaseData = function() {
	var request = new haxe_http_HttpJs("https://api.github.com/repos/Tw1ddle/geometrize/releases/latest");
	request.onData = Main.onGithubReleasesResponse;
	request.request(false);
};
Main.onGithubReleasesResponse = function(data) {
	if(data == null) {
		return;
	}
	try {
		var json = JSON.parse(data);
		var assets = json.assets;
		if(assets == null) {
			return;
		}
		var assetArr = assets;
		var _g = 0;
		while(_g < assetArr.length) {
			var asset = assetArr[_g];
			++_g;
			var browserUrl = asset.browser_download_url;
			var name = asset.name;
			if(browserUrl == null || name == null) {
				continue;
			}
			if(name.indexOf("linux") >= 0) {
				Main.platformDownloadLinks.set(OperatingSystem.LINUX,browserUrl);
			} else if(name.indexOf("osx") >= 0) {
				Main.platformDownloadLinks.set(OperatingSystem.OSX,browserUrl);
			} else if(name.indexOf("windows") >= 0) {
				Main.platformDownloadLinks.set(OperatingSystem.WINDOWS,browserUrl);
			}
		}
		var anchors = window.document.getElementsByTagName("a");
		var _g = 0;
		while(_g < anchors.length) {
			var anchor = anchors[_g];
			++_g;
			var a = anchor;
			if(anchor.classList.contains("geometrizedownloadlink")) {
				var os = Main.operatingSystem;
				if(Main.platformDownloadLinks.exists(os)) {
					a.href = Main.platformDownloadLinks.get(os);
					a.target = "";
				} else {
					a.href = "https://github.com/Tw1ddle/geometrize/releases/latest";
					a.target = "_blank";
				}
			} else if(anchor.classList.contains("geometrizewindowsdownloadlink")) {
				var os1 = OperatingSystem.WINDOWS;
				if(Main.platformDownloadLinks.exists(os1)) {
					a.href = Main.platformDownloadLinks.get(os1);
					a.target = "";
				} else {
					a.href = "https://github.com/Tw1ddle/geometrize/releases/latest";
					a.target = "_blank";
				}
			} else if(anchor.classList.contains("geometrizemacdownloadlink")) {
				var os2 = OperatingSystem.OSX;
				if(Main.platformDownloadLinks.exists(os2)) {
					a.href = Main.platformDownloadLinks.get(os2);
					a.target = "";
				} else {
					a.href = "https://github.com/Tw1ddle/geometrize/releases/latest";
					a.target = "_blank";
				}
			} else if(anchor.classList.contains("geometrizelinuxdownloadlink")) {
				var os3 = OperatingSystem.LINUX;
				if(Main.platformDownloadLinks.exists(os3)) {
					a.href = Main.platformDownloadLinks.get(os3);
					a.target = "";
				} else {
					a.href = "https://github.com/Tw1ddle/geometrize/releases/latest";
					a.target = "_blank";
				}
			}
		}
	} catch( _g ) {
	}
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
				if(Main.platformDownloadLinks.exists(os)) {
					a.href = Main.platformDownloadLinks.get(os);
					a.target = "";
				} else {
					a.href = "https://github.com/Tw1ddle/geometrize/releases/latest";
					a.target = "_blank";
				}
			} else if(anchor.classList.contains("geometrizewindowsdownloadlink")) {
				var os1 = OperatingSystem.WINDOWS;
				if(Main.platformDownloadLinks.exists(os1)) {
					a.href = Main.platformDownloadLinks.get(os1);
					a.target = "";
				} else {
					a.href = "https://github.com/Tw1ddle/geometrize/releases/latest";
					a.target = "_blank";
				}
			} else if(anchor.classList.contains("geometrizemacdownloadlink")) {
				var os2 = OperatingSystem.OSX;
				if(Main.platformDownloadLinks.exists(os2)) {
					a.href = Main.platformDownloadLinks.get(os2);
					a.target = "";
				} else {
					a.href = "https://github.com/Tw1ddle/geometrize/releases/latest";
					a.target = "_blank";
				}
			} else if(anchor.classList.contains("geometrizelinuxdownloadlink")) {
				var os3 = OperatingSystem.LINUX;
				if(Main.platformDownloadLinks.exists(os3)) {
					a.href = Main.platformDownloadLinks.get(os3);
					a.target = "";
				} else {
					a.href = "https://github.com/Tw1ddle/geometrize/releases/latest";
					a.target = "_blank";
				}
			}
		}
		Main.requestLatestGithubReleaseData();
		var items = this.startGalleryItems;
		var addItem = $bind(this,this.addGalleryItem);
		var element = Main.startGalleryItemContainer;
		var i = 0;
		while(i + 3 <= items.length) {
			var row = window.document.createElement("div");
			row.className = "rowborder";
			var _g = 0;
			var _g1 = 3;
			while(_g < _g1) {
				var j = _g++;
				addItem(items[i + j],row);
			}
			element.appendChild(row);
			i += 3;
		}
		var items = this.keyFeaturesItems;
		var addItem = $bind(this,this.addImageItem);
		var element = Main.keyFeaturesItemContainer;
		var i = 0;
		while(i + 4 <= items.length) {
			var row = window.document.createElement("div");
			row.className = "rowborder";
			var _g = 0;
			var _g1 = 4;
			while(_g < _g1) {
				var j = _g++;
				addItem(items[i + j],row);
			}
			element.appendChild(row);
			i += 4;
		}
		var items = this.middleGalleryItems;
		var addItem = $bind(this,this.addGalleryItem);
		var element = Main.middleGalleryItemContainer;
		var i = 0;
		while(i + 3 <= items.length) {
			var row = window.document.createElement("div");
			row.className = "rowborder";
			var _g = 0;
			var _g1 = 3;
			while(_g < _g1) {
				var j = _g++;
				addItem(items[i + j],row);
			}
			element.appendChild(row);
			i += 3;
		}
		var items = this.moreProjectsItems;
		var addItem = $bind(this,this.addImageItem);
		var element = Main.moreProjectsItemContainer;
		var i = 0;
		while(i + 5 <= items.length) {
			var row = window.document.createElement("div");
			row.className = "rowborder";
			var _g = 0;
			var _g1 = 5;
			while(_g < _g1) {
				var j = _g++;
				addItem(items[i + j],row);
			}
			element.appendChild(row);
			i += 5;
		}
		var container = Main.startDownloadContainer;
		var download = window.document.createElement("a");
		download.className = "button stitched geometrizedownloadlink";
		download.innerText = "Download";
		var os = Main.operatingSystem;
		if(Main.platformDownloadLinks.exists(os)) {
			download.href = Main.platformDownloadLinks.get(os);
			download.target = "";
		} else {
			download.href = "https://github.com/Tw1ddle/geometrize/releases/latest";
			download.target = "_blank";
		}
		var getCode = window.document.createElement("a");
		getCode.className = "button stitched";
		getCode.innerText = "Source Code";
		getCode.href = "https://github.com/Tw1ddle/geometrize";
		getCode.target = "_blank";
		var webDemo = window.document.createElement("a");
		webDemo.className = "button stitched";
		webDemo.innerText = "Web Demo";
		webDemo.href = "https://www.samcodes.co.uk/project/geometrize-haxe-web/";
		webDemo.target = "_blank";
		var span = window.document.createElement("span");
		span.className = "downloadsectionspan";
		span.appendChild(download);
		span.appendChild(getCode);
		span.appendChild(webDemo);
		container.appendChild(span);
		var container = Main.endDownloadContainer;
		var download = window.document.createElement("a");
		download.className = "button stitched geometrizedownloadlink";
		download.innerText = "Download";
		var os = Main.operatingSystem;
		if(Main.platformDownloadLinks.exists(os)) {
			download.href = Main.platformDownloadLinks.get(os);
			download.target = "";
		} else {
			download.href = "https://github.com/Tw1ddle/geometrize/releases/latest";
			download.target = "_blank";
		}
		var getCode = window.document.createElement("a");
		getCode.className = "button stitched";
		getCode.innerText = "Source Code";
		getCode.href = "https://github.com/Tw1ddle/geometrize";
		getCode.target = "_blank";
		var webDemo = window.document.createElement("a");
		webDemo.className = "button stitched";
		webDemo.innerText = "Web Demo";
		webDemo.href = "https://www.samcodes.co.uk/project/geometrize-haxe-web/";
		webDemo.target = "_blank";
		var span = window.document.createElement("span");
		span.className = "downloadsectionspan";
		span.appendChild(download);
		span.appendChild(getCode);
		span.appendChild(webDemo);
		container.appendChild(span);
		var nodes = window.document.querySelectorAll(".twentytwenty");
		var _g = 0;
		while(_g < nodes.length) {
			var node = nodes[_g];
			++_g;
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
		if(item.get_link() != "") {
			var anchor = window.document.createElement("a");
			anchor.href = item.get_link();
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
		if(item.get_link() != "https://www.geometrize.co.uk/") {
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
var Reflect = function() { };
Reflect.__name__ = true;
Reflect.isFunction = function(f) {
	if(typeof(f) == "function") {
		return !(f.__name__ || f.__ename__);
	} else {
		return false;
	}
};
Reflect.compare = function(a,b) {
	if(a == b) {
		return 0;
	} else if(a > b) {
		return 1;
	} else {
		return -1;
	}
};
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) {
		return true;
	}
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) {
		return false;
	}
	if(f1.scope == f2.scope && f1.method == f2.method) {
		return f1.method != null;
	} else {
		return false;
	}
};
Reflect.isEnumValue = function(v) {
	if(v != null) {
		return v.__enum__ != null;
	} else {
		return false;
	}
};
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
Std.parseInt = function(x) {
	if(x != null) {
		var _g = 0;
		var _g1 = x.length;
		while(_g < _g1) {
			var i = _g++;
			var c = x.charCodeAt(i);
			if(c <= 8 || c >= 14 && c != 32 && c != 45) {
				var nc = x.charCodeAt(i + 1);
				var v = parseInt(x,nc == 120 || nc == 88 ? 16 : 10);
				if(isNaN(v)) {
					return null;
				} else {
					return v;
				}
			}
		}
	}
	return null;
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
var Type = function() { };
Type.__name__ = true;
Type.enumParameters = function(e) {
	var enm = $hxEnums[e.__enum__];
	var params = enm.__constructs__[e._hx_index].__params__;
	if(params != null) {
		var _g = [];
		var _g1 = 0;
		while(_g1 < params.length) {
			var p = params[_g1];
			++_g1;
			_g.push(e[p]);
		}
		return _g;
	} else {
		return [];
	}
};
var haxe_Exception = function(message,previous,native) {
	Error.call(this,message);
	this.message = message;
	this.__previousException = previous;
	this.__nativeException = native != null ? native : this;
};
haxe_Exception.__name__ = true;
haxe_Exception.caught = function(value) {
	if(((value) instanceof haxe_Exception)) {
		return value;
	} else if(((value) instanceof Error)) {
		return new haxe_Exception(value.message,null,value);
	} else {
		return new haxe_ValueException(value,null,value);
	}
};
haxe_Exception.thrown = function(value) {
	if(((value) instanceof haxe_Exception)) {
		return value.get_native();
	} else if(((value) instanceof Error)) {
		return value;
	} else {
		var e = new haxe_ValueException(value);
		return e;
	}
};
haxe_Exception.__super__ = Error;
haxe_Exception.prototype = $extend(Error.prototype,{
	unwrap: function() {
		return this.__nativeException;
	}
	,get_native: function() {
		return this.__nativeException;
	}
});
var haxe_ValueException = function(value,previous,native) {
	haxe_Exception.call(this,String(value),previous,native);
	this.value = value;
};
haxe_ValueException.__name__ = true;
haxe_ValueException.__super__ = haxe_Exception;
haxe_ValueException.prototype = $extend(haxe_Exception.prototype,{
	unwrap: function() {
		return this.value;
	}
});
var haxe_ds_TreeNode = function(l,k,v,r,h) {
	if(h == null) {
		h = -1;
	}
	this.left = l;
	this.key = k;
	this.value = v;
	this.right = r;
	if(h == -1) {
		var tmp;
		var _this = this.left;
		var _this1 = this.right;
		if((_this == null ? 0 : _this._height) > (_this1 == null ? 0 : _this1._height)) {
			var _this = this.left;
			tmp = _this == null ? 0 : _this._height;
		} else {
			var _this = this.right;
			tmp = _this == null ? 0 : _this._height;
		}
		this._height = tmp + 1;
	} else {
		this._height = h;
	}
};
haxe_ds_TreeNode.__name__ = true;
var haxe_http_HttpBase = function(url) {
	this.url = url;
	this.headers = [];
	this.params = [];
	this.emptyOnData = $bind(this,this.onData);
};
haxe_http_HttpBase.__name__ = true;
haxe_http_HttpBase.prototype = {
	onData: function(data) {
	}
	,onBytes: function(data) {
	}
	,onError: function(msg) {
	}
	,onStatus: function(status) {
	}
	,hasOnData: function() {
		return !Reflect.compareMethods($bind(this,this.onData),this.emptyOnData);
	}
	,success: function(data) {
		this.responseBytes = data;
		this.responseAsString = null;
		if(this.hasOnData()) {
			this.onData(this.get_responseData());
		}
		this.onBytes(this.responseBytes);
	}
	,get_responseData: function() {
		if(this.responseAsString == null && this.responseBytes != null) {
			this.responseAsString = this.responseBytes.getString(0,this.responseBytes.length,haxe_io_Encoding.UTF8);
		}
		return this.responseAsString;
	}
};
var haxe_http_HttpJs = function(url) {
	this.async = true;
	this.withCredentials = false;
	haxe_http_HttpBase.call(this,url);
};
haxe_http_HttpJs.__name__ = true;
haxe_http_HttpJs.__super__ = haxe_http_HttpBase;
haxe_http_HttpJs.prototype = $extend(haxe_http_HttpBase.prototype,{
	request: function(post) {
		var _gthis = this;
		this.responseAsString = null;
		this.responseBytes = null;
		var r = this.req = js_Browser.createXMLHttpRequest();
		var onreadystatechange = function(_) {
			if(r.readyState != 4) {
				return;
			}
			var s;
			try {
				s = r.status;
			} catch( _g ) {
				s = null;
			}
			if(s == 0 && js_Browser.get_supported() && $global.location != null) {
				var protocol = $global.location.protocol.toLowerCase();
				var rlocalProtocol = new EReg("^(?:about|app|app-storage|.+-extension|file|res|widget):$","");
				var isLocal = rlocalProtocol.match(protocol);
				if(isLocal) {
					s = r.response != null ? 200 : 404;
				}
			}
			if(s == undefined) {
				s = null;
			}
			if(s != null) {
				_gthis.onStatus(s);
			}
			if(s != null && s >= 200 && s < 400) {
				_gthis.req = null;
				_gthis.success(haxe_io_Bytes.ofData(r.response));
			} else if(s == null || s == 0 && r.response == null) {
				_gthis.req = null;
				_gthis.onError("Failed to connect or resolve host");
			} else if(s == null) {
				_gthis.req = null;
				var onreadystatechange = r.response != null ? haxe_io_Bytes.ofData(r.response) : null;
				_gthis.responseBytes = onreadystatechange;
				_gthis.onError("Http Error #" + r.status);
			} else {
				switch(s) {
				case 12007:
					_gthis.req = null;
					_gthis.onError("Unknown host");
					break;
				case 12029:
					_gthis.req = null;
					_gthis.onError("Failed to connect to host");
					break;
				default:
					_gthis.req = null;
					var onreadystatechange = r.response != null ? haxe_io_Bytes.ofData(r.response) : null;
					_gthis.responseBytes = onreadystatechange;
					_gthis.onError("Http Error #" + r.status);
				}
			}
		};
		if(this.async) {
			r.onreadystatechange = onreadystatechange;
		}
		var uri;
		var _g = this.postData;
		var _g1 = this.postBytes;
		if(_g == null) {
			if(_g1 == null) {
				uri = null;
			} else {
				var bytes = _g1;
				uri = new Blob([bytes.b.bufferValue]);
			}
		} else if(_g1 == null) {
			var str = _g;
			uri = str;
		} else {
			uri = null;
		}
		if(uri != null) {
			post = true;
		} else {
			var _g = 0;
			var _g1 = this.params;
			while(_g < _g1.length) {
				var p = _g1[_g];
				++_g;
				if(uri == null) {
					uri = "";
				} else {
					uri = (uri == null ? "null" : Std.string(uri)) + "&";
				}
				var s = p.name;
				var value = (uri == null ? "null" : Std.string(uri)) + encodeURIComponent(s) + "=";
				var s1 = p.value;
				uri = value + encodeURIComponent(s1);
			}
		}
		try {
			if(post) {
				r.open("POST",this.url,this.async);
			} else if(uri != null) {
				var question = this.url.split("?").length <= 1;
				r.open("GET",this.url + (question ? "?" : "&") + (uri == null ? "null" : Std.string(uri)),this.async);
				uri = null;
			} else {
				r.open("GET",this.url,this.async);
			}
			r.responseType = "arraybuffer";
		} catch( _g ) {
			var e = haxe_Exception.caught(_g).unwrap();
			this.req = null;
			this.onError(e.toString());
			return;
		}
		r.withCredentials = this.withCredentials;
		if(!Lambda.exists(this.headers,function(h) {
			return h.name == "Content-Type";
		}) && post && this.postData == null) {
			r.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		}
		var _g = 0;
		var _g1 = this.headers;
		while(_g < _g1.length) {
			var h = _g1[_g];
			++_g;
			r.setRequestHeader(h.name,h.value);
		}
		r.send(uri);
		if(!this.async) {
			onreadystatechange(null);
		}
	}
});
var haxe_io_Bytes = function(data) {
	this.length = data.byteLength;
	this.b = new Uint8Array(data);
	this.b.bufferValue = data;
	data.hxBytes = this;
	data.bytes = this.b;
};
haxe_io_Bytes.__name__ = true;
haxe_io_Bytes.ofData = function(b) {
	var hb = b.hxBytes;
	if(hb != null) {
		return hb;
	}
	return new haxe_io_Bytes(b);
};
haxe_io_Bytes.prototype = {
	getString: function(pos,len,encoding) {
		if(pos < 0 || len < 0 || pos + len > this.length) {
			throw haxe_Exception.thrown(haxe_io_Error.OutsideBounds);
		}
		if(encoding == null) {
			encoding = haxe_io_Encoding.UTF8;
		}
		var s = "";
		var b = this.b;
		var i = pos;
		var max = pos + len;
		switch(encoding._hx_index) {
		case 0:
			var debug = pos > 0;
			while(i < max) {
				var c = b[i++];
				if(c < 128) {
					if(c == 0) {
						break;
					}
					s += String.fromCodePoint(c);
				} else if(c < 224) {
					var code = (c & 63) << 6 | b[i++] & 127;
					s += String.fromCodePoint(code);
				} else if(c < 240) {
					var c2 = b[i++];
					var code1 = (c & 31) << 12 | (c2 & 127) << 6 | b[i++] & 127;
					s += String.fromCodePoint(code1);
				} else {
					var c21 = b[i++];
					var c3 = b[i++];
					var u = (c & 15) << 18 | (c21 & 127) << 12 | (c3 & 127) << 6 | b[i++] & 127;
					s += String.fromCodePoint(u);
				}
			}
			break;
		case 1:
			while(i < max) {
				var c = b[i++] | b[i++] << 8;
				s += String.fromCodePoint(c);
			}
			break;
		}
		return s;
	}
};
var haxe_io_Encoding = $hxEnums["haxe.io.Encoding"] = { __ename__:true,__constructs__:null
	,UTF8: {_hx_name:"UTF8",_hx_index:0,__enum__:"haxe.io.Encoding",toString:$estr}
	,RawNative: {_hx_name:"RawNative",_hx_index:1,__enum__:"haxe.io.Encoding",toString:$estr}
};
haxe_io_Encoding.__constructs__ = [haxe_io_Encoding.UTF8,haxe_io_Encoding.RawNative];
var haxe_io_Error = $hxEnums["haxe.io.Error"] = { __ename__:true,__constructs__:null
	,Blocked: {_hx_name:"Blocked",_hx_index:0,__enum__:"haxe.io.Error",toString:$estr}
	,Overflow: {_hx_name:"Overflow",_hx_index:1,__enum__:"haxe.io.Error",toString:$estr}
	,OutsideBounds: {_hx_name:"OutsideBounds",_hx_index:2,__enum__:"haxe.io.Error",toString:$estr}
	,Custom: ($_=function(e) { return {_hx_index:3,e:e,__enum__:"haxe.io.Error",toString:$estr}; },$_._hx_name="Custom",$_.__params__ = ["e"],$_)
};
haxe_io_Error.__constructs__ = [haxe_io_Error.Blocked,haxe_io_Error.Overflow,haxe_io_Error.OutsideBounds,haxe_io_Error.Custom];
var haxe_iterators_ArrayIterator = function(array) {
	this.current = 0;
	this.array = array;
};
haxe_iterators_ArrayIterator.__name__ = true;
haxe_iterators_ArrayIterator.prototype = {
	hasNext: function() {
		return this.current < this.array.length;
	}
	,next: function() {
		return this.array[this.current++];
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
		if(o.__enum__) {
			var e = $hxEnums[o.__enum__];
			var con = e.__constructs__[o._hx_index];
			var n = con._hx_name;
			if(con.__params__) {
				s = s + "\t";
				return n + "(" + ((function($this) {
					var $r;
					var _g = [];
					{
						var _g1 = 0;
						var _g2 = con.__params__;
						while(true) {
							if(!(_g1 < _g2.length)) {
								break;
							}
							var p = _g2[_g1];
							_g1 = _g1 + 1;
							_g.push(js_Boot.__string_rec(o[p],s));
						}
					}
					$r = _g;
					return $r;
				}(this))).join(",") + ")";
			} else {
				return n;
			}
		}
		if(((o) instanceof Array)) {
			var str = "[";
			s += "\t";
			var _g = 0;
			var _g1 = o.length;
			while(_g < _g1) {
				var i = _g++;
				str += (i > 0 ? "," : "") + js_Boot.__string_rec(o[i],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( _g ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		var k = null;
		for( k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) {
			str += ", \n";
		}
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "string":
		return o;
	default:
		return String(o);
	}
};
var js_Browser = function() { };
js_Browser.__name__ = true;
js_Browser.get_supported = function() {
	if(typeof(window) != "undefined" && typeof(window.location) != "undefined") {
		return typeof(window.location.protocol) == "string";
	} else {
		return false;
	}
};
js_Browser.createXMLHttpRequest = function() {
	if(typeof XMLHttpRequest != "undefined") {
		return new XMLHttpRequest();
	}
	if(typeof ActiveXObject != "undefined") {
		return new ActiveXObject("Microsoft.XMLHTTP");
	}
	throw haxe_Exception.thrown("Unable to create XMLHttpRequest object.");
};
function $getIterator(o) { if( o instanceof Array ) return new haxe_iterators_ArrayIterator(o); else return o.iterator(); }
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $global.$haxeUID++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = m.bind(o); o.hx__closures__[m.__id__] = f; } return f; }
$global.$haxeUID |= 0;
if( String.fromCodePoint == null ) String.fromCodePoint = function(c) { return c < 0x10000 ? String.fromCharCode(c) : String.fromCharCode((c>>10)+0xD7C0)+String.fromCharCode((c&0x3FF)+0xDC00); }
String.__name__ = true;
Array.__name__ = true;
js_Boot.__toStr = ({ }).toString;
Main.operatingSystem = PlatformDetector.getOperatingSystem();
Main.platformDownloadLinks = new haxe_ds_EnumValueMap();
Main.startGalleryItemContainer = window.document.getElementById("gallerystart");
Main.startDownloadContainer = window.document.getElementById("startdownload");
Main.keyFeaturesItemContainer = window.document.getElementById("keyfeatures");
Main.middleGalleryItemContainer = window.document.getElementById("gallerymiddle");
Main.moreProjectsItemContainer = window.document.getElementById("moreprojects");
Main.endDownloadContainer = window.document.getElementById("enddownload");
Main.main();
})(typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);
