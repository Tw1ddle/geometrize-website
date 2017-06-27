package;

import js.Browser;
import js.html.AnchorElement;
import js.html.ButtonElement;
import js.html.CanvasElement;
import js.html.DivElement;
import js.html.Element;
import js.html.Image;
import js.html.InputElement;
import js.html.TextAreaElement;

// Automatic HTML code completion, you need to point these to your debug/release HTML
#if debug
@:build(CodeCompletion.buildLocalFile("bin/debug/index.html"))
#else
@:build(CodeCompletion.buildLocalFile("bin/release/index.html"))
#end
//@:build(CodeCompletion.buildUrl("http://www.geometrize.co.uk/"))
class ID {}

/**
 * A one-page landing site for Geometrize, a tool for geometrizing images into geometric primitives.
 * @author Sam Twidale (http://www.geometrize.co.uk/)
 */
class Main {
	private static inline var WEBSITE_URL:String = "http://www.geometrize.co.uk/"; // Hosted site URL

	// All the required references to the HTML page elements
	private static inline function getElement(id:String):Dynamic {
		return Browser.document.getElementById(id);
	}
	private static var appLogo = getElement(ID.geometrizelogo);

	private static function main():Void {
		var main = new Main();
	}

	private inline function new() {
		// Wait for the window to load before creating the sliders, listening for input etc
		Browser.window.onload = onWindowLoaded;
	}
	
	private inline function init():Void {
		
	}

	private inline function onWindowLoaded():Void {
		init();
		animate();
	}
	
	/**
	 * Main update loop.
	 */
	private function animate():Void {
		Browser.window.setTimeout(function():Void {
			this.animate();
		}, 20);
	}
}