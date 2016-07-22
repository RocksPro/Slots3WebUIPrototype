var uiGameTopPanelWidth;
var uiGameTopPanelHeight;

var uiGameSlotsClubButtonWidth;
var uiGameSlotsClubButtonHeight;
var uiGameSlotsClubButtonLeft;
var uiGameSlotsClubButtonTop;

var uiGameSlotsMoneyPanelWidth;
var uiGameSlotsMoneyPanelHeight;
var uiGameSlotsMoneyPanelLeft;
var uiGameSlotsMoneyPanelTop;

var uiGameBuyButtonWidth;
var uiGameBuyButtonHeight;
var uiGameBuyButtonLeft;
var uiGameBuyButtonTop;

var uiGameExperiencePanelWidth;
var uiGameExperiencePanelHeight;
var uiGameExperiencePanelLeft;
var uiGameExperiencePanelTop;

var uiGameOptionsButtonHeight;
var uiGameOptionsButtonWidth;
var uiGameOptionsButtonLeft;
var uiGameOptionsButtonTop;

function ConstructTopPanel()
{
	const uiGameTopPanelHeightScale = 0.12;
	uiGameTopPanelWidth = uiGameWidth;
	uiGameTopPanelHeight = uiGameHeight * uiGameTopPanelHeightScale;

	const uiGameSlotsClubButtonWidthScale = 0.08;
	const uiGameSlotsClubButtonHeightScale = 0.88;
	const uiGameSlotsClubButtonLeftScale = 0;
	const uiGameSlotsClubButtonTopScale = 0;
	uiGameSlotsClubButtonWidth = uiGameTopPanelWidth * uiGameSlotsClubButtonWidthScale;
	uiGameSlotsClubButtonHeight = uiGameTopPanelHeight * uiGameSlotsClubButtonHeightScale;
	uiGameSlotsClubButtonLeft = uiGameTopPanelWidth * uiGameSlotsClubButtonLeftScale;
	uiGameSlotsClubButtonTop = uiGameTopPanelHeight * uiGameSlotsClubButtonTopScale;

	const uiGameSlotsMoneyPanelWidthScale = 0.24;
	const uiGameSlotsMoneyPanelHeightScale = 0.58;
	const uiGameSlotsMoneyPanelLeftScale = 0.08;
	const uiGameSlotsMoneyPanelTopScale = 0.2;
	uiGameSlotsMoneyPanelWidth = uiGameTopPanelWidth * uiGameSlotsMoneyPanelWidthScale;
	uiGameSlotsMoneyPanelHeight = uiGameTopPanelHeight * uiGameSlotsMoneyPanelHeightScale;
	uiGameSlotsMoneyPanelLeft = uiGameTopPanelWidth * uiGameSlotsMoneyPanelLeftScale;
	uiGameSlotsMoneyPanelTop = uiGameTopPanelHeight * uiGameSlotsMoneyPanelTopScale;

	const uiGameBuyButtonWidthScale = 0.28;
	const uiGameBuyButtonHeightScale = 0.9;
	const uiGameBuyButtonLeftScale = 0.359;
	const uiGameBuyButtonTopScale = 0;
	uiGameBuyButtonWidth = uiGameTopPanelWidth * uiGameBuyButtonWidthScale;
	uiGameBuyButtonHeight = uiGameTopPanelHeight * uiGameBuyButtonHeightScale;
	uiGameBuyButtonLeft = uiGameTopPanelWidth * uiGameBuyButtonLeftScale;
	uiGameBuyButtonTop = uiGameTopPanelHeight * uiGameBuyButtonTopScale;

	const uiGameExperiencePanelWidthScale = 0.24;
	const uiGameExperiencePanelHeightScale = 0.58;
	const uiGameExperiencePanelLeftScale = 0.68;
	const uiGameExperiencePanelTopScale = 0.2;
	uiGameExperiencePanelWidth = uiGameTopPanelWidth * uiGameExperiencePanelWidthScale;
	uiGameExperiencePanelHeight = uiGameTopPanelHeight * uiGameExperiencePanelHeightScale;
	uiGameExperiencePanelLeft = uiGameTopPanelWidth * uiGameExperiencePanelLeftScale;
	uiGameExperiencePanelTop = uiGameTopPanelHeight * uiGameExperiencePanelTopScale;

	const uiGameOptionsButtonWidthScale = 0.08;
	const uiGameOptionsButtonHeightScale = 0.88;
	const uiGameOptionsButtonLeftScale = 0.92;
	const uiGameOptionsButtonTopScale = 0;
	uiGameOptionsButtonWidth = uiGameTopPanelWidth * uiGameOptionsButtonWidthScale;
	uiGameOptionsButtonHeight = uiGameTopPanelHeight * uiGameOptionsButtonHeightScale;
	uiGameOptionsButtonLeft = uiGameTopPanelWidth * uiGameOptionsButtonLeftScale;
	uiGameOptionsButtonTop = uiGameTopPanelHeight * uiGameOptionsButtonTopScale;
	
	var topPanelHTML = '<div id = \"uiTopPanel\"; style = \" background-color: Transparent; width:' + uiGameTopPanelWidth + 'px; height: ' + uiGameTopPanelHeight + 'px \">  \
							<img id = \"uiTopPanelTexture\"; src = "imgs/panel.png" style="position:absolute; width:' + uiGameTopPanelWidth + 'px; height: ' + uiGameTopPanelHeight + 'px"></img>\
							<button id = \"slotsClubButton\"; onclick = \"showPopup()\" style = \"font-size:'+uiGameFontSize+'px; border:none; background-color:Transparent; cursor:pointer; position: absolute; width: ' + uiGameSlotsClubButtonWidth + 'px; height: ' + uiGameSlotsClubButtonHeight + 'px; left: ' + uiGameSlotsClubButtonLeft + 'px; top: ' + uiGameSlotsClubButtonTop + 'px \">\
								<img id = \"slotsClubButtonTexture\"; src = "imgs/button_club.png" style="position:absolute; width:' +  uiGameSlotsClubButtonWidth + 'px; height: ' + uiGameSlotsClubButtonHeight + 'px; left: 0px; top: 0px ">\
								</img>\ \
							</button>\
							<img id = \"moneyPanelTexture\"; src = "imgs/roundedrect_1.png" style="position:absolute; width:' + uiGameSlotsMoneyPanelWidth + 'px; height: ' + uiGameSlotsMoneyPanelHeight + 'px; left: ' + uiGameSlotsMoneyPanelLeft + 'px; top: ' + uiGameSlotsMoneyPanelTop + 'px "></img>\
							<div id = \"moneyPanel\"; style = \"text-align: center; font-size:'+uiGameFontSize*1.7+'px; font-family:AeroMaticsBold; background-color: Transparent; color: #ffffff; position: absolute; width: ' + uiGameSlotsMoneyPanelWidth + 'px; height: ' + uiGameSlotsMoneyPanelHeight + 'px; left: ' + uiGameSlotsMoneyPanelLeft + 'px; top: ' + uiGameSlotsMoneyPanelTop + 'px \"><div id = \"cash\">'+(Math.ceil(cash))+' $</div></div>\
							<img id = \"expPanelTexture\"; src = \"imgs/roundedrect_2.png\"; style="position:absolute; width: ' + uiGameExperiencePanelWidth + 'px; height: ' + uiGameExperiencePanelHeight + 'px; left: ' + uiGameExperiencePanelLeft + 'px; top: ' + uiGameExperiencePanelTop + 'px"></img>\
							<div id = \"expPanel\"; style = \"text-align: center; font-size:'+uiGameFontSize*1.7+'px; font-family:AeroMaticsBold; color: #ffffff; position: absolute; width: ' + uiGameExperiencePanelWidth*1.14 + 'px; height: ' + uiGameExperiencePanelHeight + 'px; left: ' + uiGameExperiencePanelLeft + 'px; top: ' + uiGameExperiencePanelTop + 'px \">'+exp+'/1000</div>\
							<button id = \"optionsButton\"; onclick = \"showSmallSettings()\" style = \"font-size:'+uiGameFontSize+'px; border:none; background-color:Transparent; cursor:pointer; position: absolute; width: ' + uiGameOptionsButtonWidth + 'px; height: ' + uiGameOptionsButtonHeight + 'px; left: ' + uiGameOptionsButtonLeft + 'px; top: ' + uiGameOptionsButtonTop + 'px \">\
								<img id = \"optionsButtonTexture\"; src = "imgs/button_settings.png" style="position:absolute; width:' +  uiGameOptionsButtonWidth + 'px; height: ' + uiGameOptionsButtonHeight + 'px; left: 0px; top: 0px ">\
								</img>\ \
							</button>\
							<button id = \"buyButton\"; onclick = \"showCasherPopup()\" style = \"font-size:'+uiGameFontSize+'px; border:none; background-color:Transparent; cursor:pointer; position: absolute; width: ' + uiGameBuyButtonWidth + 'px; height: ' + uiGameBuyButtonHeight + 'px; left: ' + uiGameBuyButtonLeft + 'px; top: ' + uiGameBuyButtonTop + 'px \"> \
								<img id = \"buyButtonTexture\"; src = "imgs/button_buy_coins.png" style="position:absolute; width:' +  uiGameBuyButtonWidth + 'px; height: ' + uiGameBuyButtonHeight + 'px; left: 0px; top: 0px ">\
								</img>\ \
							</button>\
						</div> ';
						
	return topPanelHTML;
}