//Function that sets the CoreStyle variables
var setVars = function(){
	//
	// Variables
	//

	// Theme colors
	CoreStyle.g.color = "#0066cc";
	CoreStyle.g.colorHover = "#0763bf";
	CoreStyle.g.colorActive = "#1a76d1";
	CoreStyle.g.positive = "#99cc33";
	CoreStyle.g.positiveHover = "#91bf35";
	CoreStyle.g.positiveActive = "#a3d148";
	CoreStyle.g.negative = "#b00000";
	CoreStyle.g.negativeHover = "#a50707";
	CoreStyle.g.negativeActive = "#b81a1a";
	CoreStyle.g.subdued = "#999";
	CoreStyle.g.subduedHover = "#919191";
	CoreStyle.g.subduedActive = "#a3a3a3";
	CoreStyle.g.significant = "#ff9900";
	CoreStyle.g.significantHover = "#ec9107";
	CoreStyle.g.significantActive = "#ffa31a";

	// Common colors
	CoreStyle.g.neutral = "#84959e";
	CoreStyle.g.neutralHover = "#7e8d95";
	CoreStyle.g.neutralActive = "#91a0a8";
	CoreStyle.g.grey1 = "#f2f2f2";
	CoreStyle.g.grey2 = "#cfcece";
	CoreStyle.g.grey3 = "#b3b5b7";
	CoreStyle.g.grey4 = "#aeadad";
	CoreStyle.g.grey5 = "#686868";
	CoreStyle.g.grey6 = "#31313d";

	// Breakpoints
	CoreStyle.g.widthXS = "480px";
	CoreStyle.g.widthSM = "768px";
	CoreStyle.g.widthMD = "992px";
	CoreStyle.g.widthLG = "1200px";
	CoreStyle.g.widthXL = "1400px";

	// Min and Max widths
	CoreStyle.g.widthMin = "320px";

	CoreStyle.g.widthMaxSM = "CoreStyle.g.widthSM - 40px";
	CoreStyle.g.widthMaxMD = "CoreStyle.g.widthMD - 40px";
	CoreStyle.g.widthMaxLG = "CoreStyle.g.widthLG - 40px";
	CoreStyle.g.widthMaxXL = "CoreStyle.g.widthXL - 40px";

	// Grid variables
	CoreStyle.g.gutter = "1.6%";
	CoreStyle.g.columnGutter = "CoreStyle.g.gutter / 2";

}

if (typeof CoreStyle === 'undefined'){//If core-style has not been loaded we set setVars() to execute when polymer is ready
	window.addEventListener('polymer-ready', setVars);
}else{//If core-style has already been loaded we execute setVars() 
	setVars();
}

