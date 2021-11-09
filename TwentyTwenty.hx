package;

import js.html.Element;
import js.Browser;
import js.html.DragEvent;
import js.html.TouchEvent;
import js.html.SpanElement;

using StringTools;

/**
 * A twenty-twenty-style image comparison widget.
 * Based on Cocoen (https://github.com/koenoe/cocoen) by Koen Romers (https://github.com/koenoe)
 * @author Sam Twidale (https://www.geometrize.co.uk/)
 */
class TwentyTwenty {
	private var element:Element;
	
	private static inline var dragElementSelector:String = '.twentytwenty-drag';
	
	private var draggerElement:SpanElement = null;
	private var beforeElement:Element = null;
	private var beforeImage:Element = null;
	
	private var elementWidth:Int = 0;
	private var elementOffsetLeft:Float = 0;
	private var dragElementWidth:Int = 0;
	private var minLeftPos:Float = 0;
	private var maxLeftPos:Float = 0;
	private var leftPos:Float = 0;
	
	public function new(element:Element, dividerStartFraction:Float = 0.5) {
		this.element = element;
		
		init();
		
		setDividerPosition(dividerStartFraction);
	}
	
	private inline function init():Void {
		createElements();
		setDimensions();
		setupEventListeners();
	}
	
	private inline function createElements():Void {
		// Create drag element
		var span = Browser.window.document.createSpanElement();
		span.className = dragElementSelector.replace('.', '');
		element.appendChild(span);
		
		// Wrap first image in div
		var wrapper = Browser.window.document.createElement('div');
		var firstImage = element.querySelector('img:first-child');
		wrapper.appendChild(firstImage.cloneNode(true));
		firstImage.parentNode.replaceChild(wrapper, firstImage);
		
		// Set class elements we need later
		draggerElement = cast element.querySelector(dragElementSelector);
		beforeElement = element.querySelector('div:first-child');
		beforeImage = beforeElement.querySelector('img');
	}
	
	private inline function setDimensions():Void {
		elementWidth = Std.parseInt(Browser.window.getComputedStyle(element).width);
		elementOffsetLeft = element.getBoundingClientRect().left + Browser.document.body.scrollLeft;
		beforeImage.style.width = Std.string(elementWidth) + "px";
		dragElementWidth = Std.parseInt(Browser.window.getComputedStyle(draggerElement).width);
		minLeftPos = elementOffsetLeft + 10;
		maxLeftPos = (elementOffsetLeft + elementWidth) - dragElementWidth - 10;
	}
	
	private inline function setupEventListeners():Void {
		element.addEventListener('mousemove', onDrag);
		element.addEventListener('touchmove', onDrag);
		
		Browser.window.addEventListener('resize', setDimensions);
	}
	
	private function onDrag(e:TouchEvent):Void {
		e.preventDefault();
		
		var moveX = (e.pageX != null) ? e.pageX : e.touches[0].pageX;
		leftPos = moveX - dragElementWidth;

		requestDrag();
	}
	
	private function performDrag(dt:Float):Void {
		if (leftPos < minLeftPos) {
			leftPos = minLeftPos;
		} else if (leftPos > maxLeftPos) {
			leftPos = maxLeftPos;
		}
		
		var openRatio:Float = (leftPos + (dragElementWidth / 2)) - elementOffsetLeft;
		openRatio /= elementWidth;
		setDividerPosition(openRatio);
	}
	
	private function requestDrag():Void {
		Browser.window.requestAnimationFrame(performDrag);
	}
	
	private function setDividerPosition(fractionAcross:Float):Void {
		var percentAcross:String = Std.string(fractionAcross * 100) + "%";
		draggerElement.style.left = percentAcross;
		beforeElement.style.width = percentAcross;
	}
}