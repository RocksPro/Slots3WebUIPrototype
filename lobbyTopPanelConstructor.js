const uiGameTopPanelIntervalScale = 0.01;
const uiGameTopPanelHeightScale = 0.1;
var uiGameTopPanelWidth;
var uiGameTopPanelHeight;

const uiGameSlotsClubButtonWidthScale = 1.3;
var uiGameSlotsClubButtonWidth;
var uiGameSlotsClubButtonHeight;
var uiGameSlotsClubButtonLeft;
var uiGameSlotsClubButtonTop;

const uiGameSlotsMoneyPanelWidthScale = 0.24;
const uiGameSlotsMoneyPanelHeightScale = 0.58;
var uiGameSlotsMoneyPanelWidth;
var uiGameSlotsMoneyPanelHeight;
var uiGameSlotsMoneyPanelLeft;
var uiGameSlotsMoneyPanelTop;

const uiGameBuyButtonWidthScale = 0.28;
const uiGameBuyButtonHeightScale = 0.9;
const uiGameBuyButtonRightDist = 0.178;
var uiGameBuyButtonWidth;
var uiGameBuyButtonHeight;
var uiGameBuyButtonLeft;
var uiGameBuyButtonTop;

const uiGameExperiencePanelWidthScale = 0.2;
const uiGameExperiencePanelHeightScale = 0.8;
const uiGameExperiencePanelRightDist = 0.12;
var uiGameExperiencePanelWidth;
var uiGameExperiencePanelHeight;
var uiGameExperiencePanelLeft;
var uiGameExperiencePanelTop;

const uiGameOptionsButtonWidthScale = 0.1;
const uiGameOptionsButtonHeightScale = 1;
var uiGameOptionsButtonHeight;
var uiGameOptionsButtonWidth;
var uiGameOptionsButtonLeft;
var uiGameOptionsButtonTop;

const uiGameFacebookButtonWidthScale = 0.1;
const uiGameFacebookButtonHeightScale = 0.8;
var uiGameFacebookButtonWidth;
var uiGameFacebookButtonHeight;
var uiGameFacebookButtonLeft;
var uiGameFacebookButtonTop;

var uiGameExpProgressWidth;

function ConstructTopPanel()
{
	uiGameTopPanelWidth = uiGameWidth;
	uiGameTopPanelHeight = uiGameHeight * uiGameTopPanelHeightScale;

	uiGameSlotsClubButtonWidth = uiGameTopPanelHeight * uiGameSlotsClubButtonWidthScale;
	uiGameSlotsClubButtonHeight = uiGameSlotsClubButtonWidth*0.58;
	uiGameSlotsClubButtonLeft = 0;
	uiGameSlotsClubButtonTop = (uiGameTopPanelHeight - uiGameSlotsClubButtonHeight)/2;

	uiGameSlotsMoneyPanelWidth = uiGameTopPanelWidth * uiGameSlotsMoneyPanelWidthScale;
	uiGameSlotsMoneyPanelHeight = uiGameTopPanelHeight * uiGameSlotsMoneyPanelHeightScale;
	uiGameSlotsMoneyPanelLeft = uiGameSlotsClubButtonLeft*0.9 + uiGameSlotsClubButtonWidth + uiGameTopPanelWidth*uiGameTopPanelIntervalScale;
	uiGameSlotsMoneyPanelTop = (uiGameTopPanelHeight - uiGameSlotsMoneyPanelHeight)/2;

	uiGameBuyButtonWidth = uiGameTopPanelWidth * uiGameBuyButtonWidthScale;
	uiGameBuyButtonHeight = uiGameTopPanelHeight * uiGameBuyButtonHeightScale;
	uiGameBuyButtonLeft = uiGameSlotsMoneyPanelLeft + uiGameSlotsMoneyPanelWidth*0.33 + uiGameTopPanelWidth*uiGameTopPanelIntervalScale + uiGameTopPanelWidth*uiGameBuyButtonRightDist;
	uiGameBuyButtonTop = -uiGameTopPanelHeight;

	uiGameExperiencePanelWidth = uiGameTopPanelWidth * uiGameExperiencePanelWidthScale;
	uiGameExperiencePanelHeight = uiGameTopPanelHeight * uiGameExperiencePanelHeightScale;
	uiGameExperiencePanelLeft = uiGameBuyButtonLeft + uiGameBuyButtonWidth*0.7 + uiGameTopPanelWidth*uiGameTopPanelIntervalScale + + uiGameTopPanelWidth*uiGameExperiencePanelRightDist;
	uiGameExperiencePanelTop = (uiGameTopPanelHeight - uiGameExperiencePanelHeight)/2;

	uiGameOptionsButtonHeight = uiGameSlotsClubButtonHeight;
	uiGameOptionsButtonWidth = uiGameSlotsClubButtonWidth;
	uiGameOptionsButtonLeft = uiGameTopPanelWidth - uiGameOptionsButtonWidth;
	uiGameOptionsButtonTop = (uiGameTopPanelHeight - uiGameOptionsButtonHeight)/2;

	uiGameFacebookButtonWidth = uiGameTopPanelWidth * uiGameFacebookButtonWidthScale;
	uiGameFacebookButtonHeight = uiGameTopPanelHeight * uiGameFacebookButtonHeightScale;
	uiGameFacebookButtonLeft = uiGameOptionsButtonLeft - uiGameFacebookButtonWidth - uiGameTopPanelWidth*uiGameTopPanelIntervalScale;
	uiGameFacebookButtonTop = (uiGameTopPanelHeight - uiGameFacebookButtonHeight)/2;
	
	uiGameExpProgressWidth = uiGameExperiencePanelWidth * (exp/1000);
	
	var topPanelHTML = '<div style = \" background-color: Transparent; width:' + uiGameTopPanelWidth + 'px; height: ' + uiGameTopPanelHeight + 'px \">  \
							<img src = "imgs/panel.png" style="position:absolute; width:' + uiGameTopPanelWidth + 'px; height: ' + uiGameTopPanelHeight + 'px"></img>\
							<button onclick = \"showPopup()\" style = \"font-size:'+uiGameFontSize+'px; border:none; background-color:Transparent; cursor:pointer; position: absolute; width: ' + uiGameSlotsClubButtonWidth + 'px; height: ' + uiGameSlotsClubButtonHeight + 'px; left: ' + uiGameSlotsClubButtonLeft + 'px; top: ' + uiGameSlotsClubButtonTop + 'px \">\
								<img src = "imgs/button_club.png" style="position:absolute; width:' +  uiGameSlotsClubButtonWidth + 'px; height: ' + uiGameSlotsClubButtonHeight + 'px; left: 0px; top: 0px ">\
								</img>\ \
							</button>\
							<img src = "imgs/roundedrect_1.png" style="position:absolute; width:' + uiGameSlotsMoneyPanelWidth + 'px; height: ' + uiGameSlotsMoneyPanelHeight + 'px; left: ' + uiGameSlotsMoneyPanelLeft + 'px; top: ' + uiGameSlotsMoneyPanelTop + 'px "></img>\
							<div style = \"text-align: center; font-size:'+uiGameFontSize*1.7+'px; font-family:AeroMaticsBold; background-color: Transparent; color: #ffffff; position: absolute; width: ' + uiGameSlotsMoneyPanelWidth + 'px; height: ' + uiGameSlotsMoneyPanelHeight + 'px; left: ' + uiGameSlotsMoneyPanelLeft + 'px; top: ' + uiGameSlotsMoneyPanelTop*0.9 + 'px \"><div id = \"cash\">'+(Math.ceil(cash))+' $</div></div>\
							<img src = "imgs/bottomPanel.png" style="position:absolute; width: ' + uiGameExperiencePanelWidth*1.14 + 'px; height: ' + uiGameExperiencePanelHeight + 'px; left: ' + (uiGameExperiencePanelLeft+uiGameExperiencePanelWidth*0.25) + 'px; top: ' + uiGameExperiencePanelTop + 'px"></img>\
							<div style = \"text-align: center; color: #ffffff; background-color: Transparent; position: absolute; width: ' + uiGameExperiencePanelWidth*1.14 + 'px; height: ' + uiGameExperiencePanelHeight + 'px; left: ' + (uiGameExperiencePanelLeft+uiGameExperiencePanelWidth*0.25) + 'px; top: ' + uiGameExperiencePanelTop + 'px \">'+exp+'/1000</div>\
							<div style = \"text-align: center; background-color: #99ff99; position: absolute; width: ' + uiGameExpProgressWidth*1.14 + 'px; height: ' + uiGameExperiencePanelHeight + 'px; left: ' + (uiGameExperiencePanelLeft+uiGameExperiencePanelWidth*0.25) + 'px; top: ' + uiGameExperiencePanelTop + 'px \"></div>\
							<div style = \"text-align: center; color: #ffffff; position: absolute; width: ' + uiGameExperiencePanelWidth*1.14 + 'px; height: ' + uiGameExperiencePanelHeight + 'px; left: ' + (uiGameExperiencePanelLeft+uiGameExperiencePanelWidth*0.25) + 'px; top: ' + uiGameExperiencePanelTop + 'px \">'+exp+'/1000</div>\
							<button onclick = \"showSmallSettings()\" style = \"font-size:'+uiGameFontSize+'px; border:none; background-color:Transparent; cursor:pointer; position: absolute; width: ' + uiGameOptionsButtonWidth + 'px; height: ' + uiGameOptionsButtonHeight + 'px; left: ' + uiGameOptionsButtonLeft + 'px; top: ' + uiGameOptionsButtonTop + 'px \">\
								<img src = "imgs/button_settings.png" style="position:absolute; width:' +  uiGameOptionsButtonWidth + 'px; height: ' + uiGameOptionsButtonHeight + 'px; left: 0px; top: 0px ">\
									<div style="font-size:'+uiGameFontSize+'px; position:absolute; top:'+uiGameOptionsButtonHeight/3.8+'px; left:'+uiGameOptionsButtonWidth/5+'px"></div>\
								</img>\ \
							</button>\
						</div> ';
						
	return topPanelHTML;
}