// Generated by Haxe 3.4.7
(function () { "use strict";
var $estr = function() { return js_Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
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
var HxOverrides = function() { };
HxOverrides.__name__ = true;
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) {
		return undefined;
	}
	return x;
};
var Lambda = function() { };
Lambda.__name__ = true;
Lambda.exists = function(it,f) {
	var x = it.iterator();
	while(x.hasNext()) {
		var x1 = x.next();
		if(f(x1)) {
			return true;
		}
	}
	return false;
};
var List = function() {
	this.length = 0;
};
List.__name__ = true;
List.prototype = {
	iterator: function() {
		return new _$List_ListIterator(this.h);
	}
};
var _$List_ListNode = function(item,next) {
	this.item = item;
	this.next = next;
};
_$List_ListNode.__name__ = true;
var _$List_ListIterator = function(head) {
	this.head = head;
};
_$List_ListIterator.__name__ = true;
_$List_ListIterator.prototype = {
	hasNext: function() {
		return this.head != null;
	}
	,next: function() {
		var val = this.head.item;
		this.head = this.head.next;
		return val;
	}
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
			var _this2 = r.right;
			var _this3 = r.left;
			if((_this2 == null ? 0 : _this2._height) > (_this3 == null ? 0 : _this3._height)) {
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
var haxe_IMap = function() { };
haxe_IMap.__name__ = true;
var haxe_ds_EnumValueMap = function() {
	haxe_ds_BalancedTree.call(this);
};
haxe_ds_EnumValueMap.__name__ = true;
haxe_ds_EnumValueMap.__interfaces__ = [haxe_IMap];
haxe_ds_EnumValueMap.__super__ = haxe_ds_BalancedTree;
haxe_ds_EnumValueMap.prototype = $extend(haxe_ds_BalancedTree.prototype,{
	compare: function(k1,k2) {
		var d = k1[1] - k2[1];
		if(d != 0) {
			return d;
		}
		var p1 = k1.slice(2);
		var p2 = k2.slice(2);
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
		var _g1 = 0;
		var _g = a1.length;
		while(_g1 < _g) {
			var i = _g1++;
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
		} else if((v1 instanceof Array) && v1.__enum__ == null && ((v2 instanceof Array) && v2.__enum__ == null)) {
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
Main.requestLatestGithubReleaseData = function() {
	var request = new haxe_Http("https://api.github.com/repos/Tw1ddle/geometrize/releases/latest");
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
			console.log("Failed to extract assets object");
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
				console.log("Failed to extract browser URL/asset name");
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
		var _g1 = 0;
		while(_g1 < anchors.length) {
			var anchor = anchors[_g1];
			++_g1;
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
	} catch( e ) {
		console.log("Failed to parse JSON response");
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
		download.className = "button stitched geometrizedownloadlink";
		download.innerText = "Download";
		var os4 = Main.operatingSystem;
		if(Main.platformDownloadLinks.exists(os4)) {
			download.href = Main.platformDownloadLinks.get(os4);
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
		var container1 = Main.endDownloadContainer;
		var download1 = window.document.createElement("a");
		download1.className = "button stitched geometrizedownloadlink";
		download1.innerText = "Download";
		var os5 = Main.operatingSystem;
		if(Main.platformDownloadLinks.exists(os5)) {
			download1.href = Main.platformDownloadLinks.get(os5);
			download1.target = "";
		} else {
			download1.href = "https://github.com/Tw1ddle/geometrize/releases/latest";
			download1.target = "_blank";
		}
		var getCode1 = window.document.createElement("a");
		getCode1.className = "button stitched";
		getCode1.innerText = "Source Code";
		getCode1.href = "https://github.com/Tw1ddle/geometrize";
		getCode1.target = "_blank";
		var webDemo1 = window.document.createElement("a");
		webDemo1.className = "button stitched";
		webDemo1.innerText = "Web Demo";
		webDemo1.href = "https://www.samcodes.co.uk/project/geometrize-haxe-web/";
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
Reflect.compare = function(a,b) {
	if(a == b) {
		return 0;
	} else if(a > b) {
		return 1;
	} else {
		return -1;
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
var haxe_Http = function(url) {
	this.url = url;
	this.headers = new List();
	this.params = new List();
	this.async = true;
	this.withCredentials = false;
};
haxe_Http.__name__ = true;
haxe_Http.prototype = {
	request: function(post) {
		var me = this;
		me.responseData = null;
		var r = this.req = js_Browser.createXMLHttpRequest();
		var onreadystatechange = function(_) {
			if(r.readyState != 4) {
				return;
			}
			var s;
			try {
				s = r.status;
			} catch( e ) {
				s = null;
			}
			if(s != null && "undefined" !== typeof window) {
				var protocol = window.location.protocol.toLowerCase();
				var rlocalProtocol = new EReg("^(?:about|app|app-storage|.+-extension|file|res|widget):$","");
				var isLocal = rlocalProtocol.match(protocol);
				if(isLocal) {
					if(r.responseText != null) {
						s = 200;
					} else {
						s = 404;
					}
				}
			}
			if(s == undefined) {
				s = null;
			}
			if(s != null) {
				me.onStatus(s);
			}
			if(s != null && s >= 200 && s < 400) {
				me.req = null;
				me.onData(me.responseData = r.responseText);
			} else if(s == null) {
				me.req = null;
				me.onError("Failed to connect or resolve host");
			} else {
				switch(s) {
				case 12007:
					me.req = null;
					me.onError("Unknown host");
					break;
				case 12029:
					me.req = null;
					me.onError("Failed to connect to host");
					break;
				default:
					me.req = null;
					me.responseData = r.responseText;
					me.onError("Http Error #" + r.status);
				}
			}
		};
		if(this.async) {
			r.onreadystatechange = onreadystatechange;
		}
		var uri = this.postData;
		if(uri != null) {
			post = true;
		} else {
			var _g_head = this.params.h;
			while(_g_head != null) {
				var val = _g_head.item;
				_g_head = _g_head.next;
				var p = val;
				if(uri == null) {
					uri = "";
				} else {
					uri += "&";
				}
				var s1 = p.param;
				var uri1 = encodeURIComponent(s1) + "=";
				var s2 = p.value;
				uri += uri1 + encodeURIComponent(s2);
			}
		}
		try {
			if(post) {
				r.open("POST",this.url,this.async);
			} else if(uri != null) {
				var question = this.url.split("?").length <= 1;
				r.open("GET",this.url + (question ? "?" : "&") + uri,this.async);
				uri = null;
			} else {
				r.open("GET",this.url,this.async);
			}
		} catch( e1 ) {
			if (e1 instanceof js__$Boot_HaxeError) e1 = e1.val;
			me.req = null;
			this.onError(e1.toString());
			return;
		}
		r.withCredentials = this.withCredentials;
		if(!Lambda.exists(this.headers,function(h) {
			return h.header == "Content-Type";
		}) && post && this.postData == null) {
			r.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		}
		var _g_head1 = this.headers.h;
		while(_g_head1 != null) {
			var val1 = _g_head1.item;
			_g_head1 = _g_head1.next;
			var h1 = val1;
			r.setRequestHeader(h1.header,h1.value);
		}
		r.send(uri);
		if(!this.async) {
			onreadystatechange(null);
		}
	}
	,onData: function(data) {
	}
	,onError: function(msg) {
	}
	,onStatus: function(status) {
	}
};
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
			var _this2 = this.left;
			if(_this2 == null) {
				tmp = 0;
			} else {
				tmp = _this2._height;
			}
		} else {
			var _this3 = this.right;
			if(_this3 == null) {
				tmp = 0;
			} else {
				tmp = _this3._height;
			}
		}
		this._height = tmp + 1;
	} else {
		this._height = h;
	}
};
haxe_ds_TreeNode.__name__ = true;
var js__$Boot_HaxeError = function(val) {
	Error.call(this);
	this.val = val;
	this.message = String(val);
	if(Error.captureStackTrace) {
		Error.captureStackTrace(this,js__$Boot_HaxeError);
	}
};
js__$Boot_HaxeError.__name__ = true;
js__$Boot_HaxeError.wrap = function(val) {
	if((val instanceof Error)) {
		return val;
	} else {
		return new js__$Boot_HaxeError(val);
	}
};
js__$Boot_HaxeError.__super__ = Error;
js__$Boot_HaxeError.prototype = $extend(Error.prototype,{
});
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
var js_Browser = function() { };
js_Browser.__name__ = true;
js_Browser.createXMLHttpRequest = function() {
	if(typeof XMLHttpRequest != "undefined") {
		return new XMLHttpRequest();
	}
	if(typeof ActiveXObject != "undefined") {
		return new ActiveXObject("Microsoft.XMLHTTP");
	}
	throw new js__$Boot_HaxeError("Unable to create XMLHttpRequest object.");
};
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
String.__name__ = true;
Array.__name__ = true;
Main.operatingSystem = PlatformDetector.getOperatingSystem();
Main.platformDownloadLinks = new haxe_ds_EnumValueMap();
Main.startGalleryItemContainer = window.document.getElementById("gallerystart");
Main.startDownloadContainer = window.document.getElementById("startdownload");
Main.keyFeaturesItemContainer = window.document.getElementById("keyfeatures");
Main.middleGalleryItemContainer = window.document.getElementById("gallerymiddle");
Main.moreProjectsItemContainer = window.document.getElementById("moreprojects");
Main.endDownloadContainer = window.document.getElementById("enddownload");
Main.main();
})();
