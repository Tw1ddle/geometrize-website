package;

enum OperatingSystem {
	WINDOWS;
	OSX;
	LINUX;
	ANDROID;
	IOS;
	OTHER;
}

/**
 * Helper methods for getting the reported OS of the client machine on js.
 * @author Sam Twidale (http://www.geometrize.co.uk/)
 */
class PlatformDetector {
	public static function getOperatingSystem():OperatingSystem {
		if (js.Browser.navigator.userAgent.indexOf("Win") != -1) {
			return OperatingSystem.WINDOWS;
		}
		
		if (js.Browser.navigator.userAgent.indexOf("OSX") != -1) {
			return OperatingSystem.OSX;
		}
		
		if (js.Browser.navigator.userAgent.indexOf("Linux") != -1) {
			return OperatingSystem.LINUX;
		}
		
		if (js.Browser.navigator.userAgent.indexOf("Android") != -1) {
			return OperatingSystem.ANDROID;
		}
		
		if (js.Browser.navigator.userAgent.indexOf("iOS") != -1) {
			return OperatingSystem.IOS;
		}
		
		return OperatingSystem.OTHER;
	}
}