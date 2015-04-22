// Function that sets the CoreStyle variables
var setVars = function(){
  CoreStyle.g.color =
    "#0066cc";

  CoreStyle.g.text =
    "white";

  CoreStyle.g.border =
    "#0066cc";

  CoreStyle.g.colorHover =
    "#0059b3";

  CoreStyle.g.textHover =
    "white";

  CoreStyle.g.borderHover =
    "#0059b3";

  CoreStyle.g.colorActive =
    "#004c99";

  CoreStyle.g.textActive =
    "white";

  CoreStyle.g.borderActive =
    "#004c99";

  CoreStyle.g.positive =
    "#99cc33";

  CoreStyle.g.positiveText =
    "white";

  CoreStyle.g.positiveBorder =
    "#99cc33";

  CoreStyle.g.positiveHover =
    "#8ab82e";

  CoreStyle.g.positiveTextHover =
    "white";

  CoreStyle.g.positiveBorderHover =
    "#8ab82e";

  CoreStyle.g.positiveActive =
    "#7aa329";

  CoreStyle.g.positiveTextActive =
    "white";

  CoreStyle.g.positiveBorderActive =
    "#7aa329";

  CoreStyle.g.negative =
    "#b00000";

  CoreStyle.g.negativeText =
    "white";

  CoreStyle.g.negativeBorder =
    "#b00000";

  CoreStyle.g.negativeHover =
    "#970000";

  CoreStyle.g.negativeTextHover =
    "white";

  CoreStyle.g.negativeBorderHover =
    "#970000";

  CoreStyle.g.negativeActive =
    "#7d0000";

  CoreStyle.g.negativeTextActive =
    "white";

  CoreStyle.g.negativeBorderActive =
    "#7d0000";

  CoreStyle.g.subdued =
    "#999";

  CoreStyle.g.subduedText =
    "white";

  CoreStyle.g.subduedBorder =
    "#999999";

  CoreStyle.g.subduedHover =
    "#8c8c8c";

  CoreStyle.g.subduedTextHover =
    "white";

  CoreStyle.g.subduedBorderHover =
    "#8c8c8c";

  CoreStyle.g.subduedActive =
    "#808080";

  CoreStyle.g.subduedTextActive =
    "white";

  CoreStyle.g.subduedBorderActive =
    "#808080";

  CoreStyle.g.significant =
    "#ff9900";

  CoreStyle.g.significantText =
    "white";

  CoreStyle.g.significantBorder =
    "#ff9900";

  CoreStyle.g.significantHover =
    "#e68a00";

  CoreStyle.g.significantTextHover =
    "white";

  CoreStyle.g.significantBorderHover =
    "#e68a00";

  CoreStyle.g.significantActive =
    "#cc7a00";

  CoreStyle.g.significantTextActive =
    "white";

  CoreStyle.g.significantBorderActive =
    "#cc7a00";

  CoreStyle.g.warning =
    "#f0ad4e";

  CoreStyle.g.grey1 =
    "#f2f2f2";

  CoreStyle.g.grey2 =
    "#cfcece";

  CoreStyle.g.grey3 =
    "#b3b5b7";

  CoreStyle.g.grey4 =
    "#aeadad";

  CoreStyle.g.grey5 =
    "#686868";

  CoreStyle.g.grey6 =
    "#31313d";

  CoreStyle.g.headerNav =
    "#660099";

  CoreStyle.g.headerText =
    "white";

  CoreStyle.g.headerIcon =
    "#a175c4";

  CoreStyle.g.headerReverse =
    "#660099";

  CoreStyle.g.headerBg =
    "url('../theme_vivo/images/bg.jpg')";

  CoreStyle.g.headerLogo =
    "url('../theme_vivo/images/logo.png')";

  CoreStyle.g.shadow =
    "0 2px 6px rgba(0, 0, 0, 0.3)";

  CoreStyle.g.shadowReverse =
    "0 -2px 6px rgba(0, 0, 0, 0.3)";

  CoreStyle.g.radius =
    "4px";

  CoreStyle.g.widthXS =
    "480px";

  CoreStyle.g.widthSM =
    "768px";

  CoreStyle.g.widthMD =
    "992px";

  CoreStyle.g.widthLG =
    "1167px";

  CoreStyle.g.widthMin =
    "320px";

  CoreStyle.g.widthMax =
    "1167px";

  CoreStyle.g.gutter =
    "16px";

  CoreStyle.g.columnGutter =
    "8px";


}

if (typeof CoreStyle === 'undefined'){
  // If core-style has not been loaded we set setVars()
  // to execute when polymer is ready
  window.addEventListener('polymer-ready', setVars);
} else {
  // If core-style has already been loaded we execute setVars()
  setVars();
}
