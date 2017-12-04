package;

import PlatformDetector;
import haxe.Constraints;
import js.Browser;
import js.Cocoen;
import js.html.Element;
import js.html.DivElement;
import js.html.InputElement;
import js.html.ButtonElement;
import js.html.AnchorElement;

using StringTools;

// Automatic HTML code completion, you need to point these to your HTML
@:build(CodeCompletion.buildLocalFile("bin/index.html"))
//@:build(CodeCompletion.buildUrl("http://www.geometrize.co.uk/"))
class ID {}

/**
 * Encapsulates a simple image and caption displayed on the page
 */
@:enum abstract ImageItemTypeId(Int) {
	var APP_FEATURE = 1;
	var APP_RESOURCE = 2;
}
class ImageItem {
	public function new(imagePath:String, caption:String, typeId:ImageItemTypeId, link:String = "") {
		this.imagePath = imagePath;
		this.caption = caption;
		this.typeId = typeId;
		this.link = link;
	}
	public var imagePath(default, null):String;
	public var caption(default, null):String;
	public var typeId(default, null):ImageItemTypeId;
	public var link(default, null):String;
}

/**
 * Encapsulates a before-and-after image displayed in a gallery section
 * Consists of a before (original) and after (geometrized) image path and a description.
 */
class GalleryItem {
	public function new(beforeImagePath:String, afterImagePath:String, caption:String) {
		this.beforeImagePath = beforeImagePath;
		this.afterImagePath = afterImagePath;
		this.caption = caption;
	}
	public var beforeImagePath(default,null):String;
	public var afterImagePath(default,null):String;
	public var caption(default,null):String;
}

/**
 * A one-page landing site for Geometrize, a tool for geometrizing images into geometric primitives.
 * @author Sam Twidale (http://www.geometrize.co.uk/)
 */
class Main {
	// Helpers to resolve page asset paths based on platform/OS etc
	private static var operatingSystem:OperatingSystem = PlatformDetector.getOperatingSystem();
	private static var platformDownloadLink:String = getDownloadLinkForOperatingSystem(PlatformDetector.getOperatingSystem());
	private static function resolveAssetPath(path:String):String {
		return path.replace("$screenshotFolder", getScreenshotsFolderNameForOperatingSystem(operatingSystem));
	}
	
	// All the required references to the HTML page elements
	private static inline function getElement(id:String):Dynamic {
		return Browser.document.getElementById(id);
	}
	private static var startGalleryItemContainer:DivElement = getElement(ID.gallerystart);
	private static var startDownloadContainer:Element = getElement(ID.startdownload);
	private static var keyFeaturesItemContainer:DivElement = getElement(ID.keyfeatures);
	private static var middleGalleryItemContainer:DivElement = getElement(ID.gallerymiddle);
	private static var moreProjectsItemContainer:DivElement = getElement(ID.moreprojects);
	private static var endDownloadContainer:Element = getElement(ID.enddownload);
	
	private var startGalleryItems:Array<GalleryItem> = [
		new GalleryItem(
			resolveAssetPath("assets/images/examples/train.png"),
			resolveAssetPath("assets/images/examples/train_geometrized.png"),
			"<i>260 Rotated Ellipses</i>"
		),
		new GalleryItem(
			resolveAssetPath("assets/images/examples/man.png"),
			resolveAssetPath("assets/images/examples/man_geometrized.png"),
			"<i>440 Rotated Rectangles</i>"
		),
		new GalleryItem(
			resolveAssetPath("assets/images/examples/rose.png"),
			resolveAssetPath("assets/images/examples/rose_geometrized.png"),
			"<i>240 Triangles</i>"
		)
	];
	private var keyFeaturesItems:Array<ImageItem> = [
		new ImageItem(
			resolveAssetPath("assets/images/$screenshotFolder/geometrize_image_task.png"),
			"<i>Configurable, interactive image geometrization</i>",
			ImageItemTypeId.APP_FEATURE,
			platformDownloadLink
		),
		new ImageItem(
			resolveAssetPath("assets/images/$screenshotFolder/geometrize_landing_page.png"),
			"<i>Get started with hundreds of preconfigured sample images</i>",
			ImageItemTypeId.APP_FEATURE,
			platformDownloadLink
		),
		new ImageItem(
			resolveAssetPath("assets/images/$screenshotFolder/geometrize_export_options.png"),
			"<i>Export to PNG, SVG, JSON and more...</i>",
			ImageItemTypeId.APP_FEATURE,
			platformDownloadLink
		),
		new ImageItem(
			resolveAssetPath("assets/images/$screenshotFolder/geometrize_scripting_panel.png"),
			"<i>Design your own geometrization algorithm with scripts</i>",
			ImageItemTypeId.APP_FEATURE,
			platformDownloadLink
		)
	];
	private var middleGalleryItems:Array<GalleryItem> = [
		new GalleryItem(
			resolveAssetPath("assets/images/examples/resting_shoes.png"),
			resolveAssetPath("assets/images/examples/resting_shoes_geometrized.png"),
			"<i>350 Rotated Ellipses</i>"
		),
		new GalleryItem(
			resolveAssetPath("assets/images/examples/ridge.png"),
			resolveAssetPath("assets/images/examples/ridge_geometrized.png"),
			"<i>430 Circles</i>"
		),
		new GalleryItem(
			resolveAssetPath("assets/images/examples/building.png"),
			resolveAssetPath("assets/images/examples/building_geometrized.png"),
			"<i>460 Circles</i>"
		),
		new GalleryItem(
			resolveAssetPath("assets/images/examples/sunset.png"),
			resolveAssetPath("assets/images/examples/sunset_geometrized.png"),
			"<i>350 Triangles</i>"
		),
		new GalleryItem(
			resolveAssetPath("assets/images/examples/man.png"),
			resolveAssetPath("assets/images/examples/man_geometrized.png"),
			"<i>400 Rotated Rectangles</i>"
		),
		new GalleryItem(
			resolveAssetPath("assets/images/examples/boat.png"),
			resolveAssetPath("assets/images/examples/boat_geometrized.png"),
			"<i>370 Rotated Ellipses</i>"
		),
		new GalleryItem(
			resolveAssetPath("assets/images/examples/wolf.png"),
			resolveAssetPath("assets/images/examples/wolf_geometrized.png"),
			"<i>210 Triangles</i>"
		),
		new GalleryItem(
			resolveAssetPath("assets/images/examples/flower_another.png"),
			resolveAssetPath("assets/images/examples/flower_another_geometrized.png"),
			"<i>330 Rotated Ellipses</i>"
		),
		new GalleryItem(
			resolveAssetPath("assets/images/examples/borrowdale_autumn.png"),
			resolveAssetPath("assets/images/examples/borrowdale_autumn_geometrized.png"),
			"<i>500 Rotated Ellipses</i>"
		)
	];
	private var moreProjectsItems:Array<ImageItem> = [
		new ImageItem(
			"assets/images/seagull_geometrized.png",
			"<i>The web demo, turning images into shapes in your browser</i>",
			ImageItemTypeId.APP_RESOURCE,
			"http://www.samcodes.co.uk/project/geometrize-haxe-web/"
		),
		new ImageItem(
			"assets/images/geometrize_twitter_bot.png",
			"<i>The Twitter bot, which regularly tweets geometrized artwork</i>",
			ImageItemTypeId.APP_RESOURCE,
			"https://twitter.com/Geometrizer"
		),
		new ImageItem(
			"assets/images/webgl_tweens_geometrize_demo.png",
			"<i>The WebGL demo showcasing animations of exported shape data</i>",
			ImageItemTypeId.APP_RESOURCE,
			"http://tweens.geometrize.co.uk/"
		),
		new ImageItem(
			"assets/images/geometrize_tutorial_videos.png",
			"<i>Quickstart videos and tutorials, for helping people get the most out of Geometrize</i>",
			ImageItemTypeId.APP_RESOURCE,
			"https://www.youtube.com/playlist?list=PLe9ogi_J4cFgcqLdpmPC7GdFV5ohJPEzN"
		),
		new ImageItem(
			"assets/images/resources_page_image.png",
			"<i>Additional resources. More places to look for inspiration, free images and code</i>",
			ImageItemTypeId.APP_RESOURCE,
			"http://resources.geometrize.co.uk/"
		)
	];

	private static function main():Void {
		var main = new Main();
	}

	private inline function new() {
		Browser.window.onload = onWindowLoaded;
	}
	
	private inline function init():Void {
		setupLinks();
		
		makeRows(startGalleryItems, addGalleryItem, startGalleryItemContainer, 3);
		makeRows(keyFeaturesItems, addImageItem, keyFeaturesItemContainer, 4);
		makeRows(middleGalleryItems, addGalleryItem, middleGalleryItemContainer, 3);
		makeRows(moreProjectsItems, addImageItem, moreProjectsItemContainer, 5);
		makeDownloadSection(startDownloadContainer);
		makeDownloadSection(endDownloadContainer);
		
		var nodes = js.Browser.document.querySelectorAll('.cocoen');
		for (node in nodes) {
			new Cocoen(cast node);
		}
	}

	private inline function onWindowLoaded():Void {
		init();
		animate();
	}
	
	/**
	 * Main update loop
	 */
	private function animate():Void {
		Browser.window.setTimeout(function():Void {
			this.animate();
		}, 20);
	}
	
	/**
	 * Adds a image item to a gallery
	 * @param	item The item to add
	 * @param	row The row to add the item to
	 */
	private inline function addImageItem(item:ImageItem, row:Element):Void {
		var container = js.Browser.document.createDivElement();
		
		container.className = "container imageitemcontainer";
		var image = js.Browser.document.createImageElement();
		image.className = "imageitem";
		if (item.typeId == ImageItemTypeId.APP_FEATURE) {
			image.className += " imagefeatureitem";
			container.className += " imagefeatureitemcontainer";
		} else if (item.typeId == ImageItemTypeId.APP_RESOURCE) {
			image.className += " imageresourceitem";
			container.className += " imageresourceitemcontainer";
		}
		image.src = item.imagePath;
		
		var captionText = js.Browser.document.createParagraphElement();
		captionText.innerHTML = item.caption;
		
		if (item.link != "") {
			var anchor = js.Browser.document.createAnchorElement();
			anchor.href = item.link;
			
			anchor.appendChild(image);
			anchor.appendChild(captionText);
			container.appendChild(anchor);
		} else {
			container.appendChild(image);
			container.appendChild(captionText);
		}
		
		row.appendChild(container);
	}
	
	/**
	 * Adds a gallery item to a gallery
	 * @param	item The item to add
	 * @param	row The row to add the item to
	 */
	private inline function addGalleryItem(item:GalleryItem, row:Element):Void {
		var container = js.Browser.document.createDivElement();
		container.className = "container galleryitemcontainer";
		
		var cocoen = js.Browser.document.createDivElement();
		cocoen.className = "cocoen galleryitem";
		
		container.appendChild(cocoen);
		
		var captionText = js.Browser.document.createParagraphElement();
		captionText.innerHTML = item.caption;
		
		container.appendChild(captionText);
		
		var beforeImage = js.Browser.document.createImageElement();
		beforeImage.src = item.beforeImagePath;
		
		var afterImage = js.Browser.document.createImageElement();
		afterImage.src = item.afterImagePath;
		
		cocoen.appendChild(beforeImage);
		cocoen.appendChild(afterImage);
		
		row.appendChild(container);
	}
	
	private static inline function makeRows<T>(items:Array<T>, addItem:Function, element:DivElement, rows:Int):Void {
		var i:Int = 0;
		while (i + rows <= items.length) {
			var row = js.Browser.document.createDivElement();
			row.className = "rowborder";
			for (j in 0...rows) {
				addItem(items[i + j], row);
			}
			element.appendChild(row);
			i += rows;
		}
	}
	
	/**
	 * Populates a download button/other links section
	 * @param	container The section to populate
	 */
	private static inline function makeDownloadSection(container:Element):Void {
		var download = js.Browser.document.createAnchorElement();
		download.className = "button";
		download.innerText = "Download For " + getOperatingSystemName(PlatformDetector.getOperatingSystem());
		download.href = getDownloadLinkForOperatingSystem(PlatformDetector.getOperatingSystem());
		download.target = "_blank";
		
		var getCode = js.Browser.document.createAnchorElement();
		getCode.className = "button";
		getCode.innerText = "Download Source Code";
		getCode.href = "https://github.com/Tw1ddle/geometrize";
		getCode.target = "_blank";
		
		var webDemo = js.Browser.document.createAnchorElement();
		webDemo.className = "button";
		webDemo.innerText = "Run Web Demo";
		webDemo.href = "http://www.samcodes.co.uk/project/geometrize-haxe-web/";
		webDemo.target = "_blank";
		
		var span = js.Browser.document.createSpanElement();
		span.className = "downloadsectionspan";
		
		span.appendChild(download);
		span.appendChild(getCode);
		span.appendChild(webDemo);
		
		container.appendChild(span);
	}
	
	/**
	 * Populates on-page links that depend on the platform, for places other than the download button/other links sections
	 */
	private inline function setupLinks():Void {
		var anchors = js.Browser.document.getElementsByTagName("a");
		for (anchor in anchors) {
			var a:AnchorElement = cast anchor;
			if (anchor.classList.contains("geometrizedownloadlink")) {
				a.href = getDownloadLinkForOperatingSystem(operatingSystem);
			} else if (anchor.classList.contains("geometrizewindowsdownloadlink")) {
				a.href = getDownloadLinkForOperatingSystem(OperatingSystem.WINDOWS);
			} else if (anchor.classList.contains("geometrizemacdownloadlink")) {
				a.href = getDownloadLinkForOperatingSystem(OperatingSystem.OSX);
			} else if (anchor.classList.contains("geometrizelinuxdownloadlink")) {
				a.href = getDownloadLinkForOperatingSystem(OperatingSystem.LINUX);
			}
		}
	}
	
	private static inline function getDownloadLinkForOperatingSystem(os:OperatingSystem):String {
		return "https://github.com/Tw1ddle/geometrize/releases"; //TODO!!!
		/*
		return switch(os) {
			case OperatingSystem.WINDOWS:
				"windows";
			case OperatingSystem.OSX, OperatingSystem.IOS:
				"mac";
			case OperatingSystem.LINUX:
				"https://github.com/Tw1ddle/geometrize/releases";
			default:
				"windows";
		}
		*/
	}
	
	private static inline function getScreenshotsFolderNameForOperatingSystem(os:OperatingSystem):String {
		return switch(os) {
			case OperatingSystem.WINDOWS:
				"windows";
			case OperatingSystem.OSX, OperatingSystem.IOS:
				"mac";
			case OperatingSystem.LINUX:
				"linux";
			default:
				"windows";
		}
	}
	
	private static inline function getOperatingSystemName(os:OperatingSystem):String {
		return switch(os) {
			case OperatingSystem.WINDOWS:
				"Windows";
			case OperatingSystem.OSX, OperatingSystem.IOS:
				"Mac";
			case OperatingSystem.LINUX:
				"Linux";
			default:
				"Windows";
		}
	}
}