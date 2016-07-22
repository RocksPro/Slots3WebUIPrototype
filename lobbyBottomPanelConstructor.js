var uiGameInboxButtonWidth;
var uiGameInboxButtonHeight;
var uiGameInboxButtonLeft;
var uiGameInboxButtonTop;
var uiGameInboxButtonLabelLocalLeft;
var uiGameInboxButtonLabelLocalTop;

var uiGameFriendsButtonWidth;
var uiGameFriendsButtonHeight;
var uiGameFriendsButtonLeft;
var uiGameFriendsButtonTop;

const uiGameMegaBonusPanelWidthScale = 0.3;
var uiGameMegaBonusPanelWidth;
var uiGameMegaBonusPanelHeight;
var uiGameMegaBonusPanelLeft;
var uiGameMegaBonusPanelTop;

var uiGameMegaBonusButtonWidth;
var uiGameMegaBonusButtonHeight;
var uiGameMegaBonusButtonLeft;
var uiGameMegaBonusButtonTop;

var uiGameMegaBonusCountWidth;
var uiGameMegaBonusCountHeight;
var uiGameMegaBonusCountLeft;
var uiGameMegaBonusCountTop;

function ConstructBittomPanel()
{
	const uiGameInboxButtonWidthScale = 0.2;
	const uiGameInboxButtonHeightScale = 0.15;
	const uiGameInboxButtonLeftScale = 0;
	const uiGameInboxButtonTopScale = 0.85;
	const uiGameInboxButtonLabelLocalLeftScale = 0.5;
	const uiGameInboxButtonLabelLocalTopScale = 0.5;
	uiGameInboxButtonWidth = uiGameWidth * uiGameInboxButtonWidthScale;
	uiGameInboxButtonHeight = uiGameHeight * uiGameInboxButtonHeightScale;
	uiGameInboxButtonLeft = uiGameWidth * uiGameInboxButtonLeftScale;
	uiGameInboxButtonTop = uiGameHeight * uiGameInboxButtonTopScale;
	uiGameInboxButtonLabelLocalLeft = uiGameInboxButtonWidth * uiGameInboxButtonLabelLocalLeftScale;
	uiGameInboxButtonLabelLocalTop = uiGameInboxButtonHeight * uiGameInboxButtonLabelLocalTopScale;

	const uiGameFriendsButtonWidthScale = 0.2;
	const uiGameFriendsButtonHeightScale = 0.15;
	const uiGameFriendsButtonLeftScale = 0.8;
	const uiGameFriendsButtonTopScale = 0.85;
	const uiGameFriendsButtonLabelLocalLeftScale = 0;
	const uiGameFriendsButtonLabelLocalTopScale = 0;
	uiGameFriendsButtonWidth = uiGameWidth * uiGameFriendsButtonWidthScale;
	uiGameFriendsButtonHeight = uiGameHeight * uiGameFriendsButtonHeightScale;
	uiGameFriendsButtonLeft = uiGameWidth * uiGameFriendsButtonLeftScale;
	uiGameFriendsButtonTop = uiGameHeight * uiGameFriendsButtonTopScale;

	uiGameMegaBonusPanelWidth = uiGameMegaBonusPanelWidthScale;
	uiGameMegaBonusPanelHeight = 0;
	uiGameMegaBonusPanelLeft = uiGameMegaBonusPanelWidth/2;
	uiGameMegaBonusPanelTop = - uiGameMegaBonusPanelWidthScale/30;

	uiGameMegaBonusButtonWidth = uiGameMegaBonusPanelWidth / 2;
	uiGameMegaBonusButtonHeight = 3;
	uiGameMegaBonusButtonLeft = uiGameMegaBonusButtonWidth/2;
	uiGameMegaBonusButtonTop = uiGameMegaBonusButtonHeight;

	uiGameMegaBonusCountWidth = uiGameMegaBonusPanelWidth / 2;
	uiGameMegaBonusCountHeight = 4;
	uiGameMegaBonusCountLeft = uiGameMegaBonusButtonWidth/2;
	uiGameMegaBonusCountTop = uiGameMegaBonusButtonHeight*2;	
	
	const uiGameInboxFriendsLabelWidthScale = 4;
	const uiGameInboxFriendsLabelHeightScale = 4;
	
	var bottomPanelHTML = '<div id = "bottomPanel">\
								<button id = "inboxButton"; onclick = \"showInboxPopup()\" style = \"font-size:'+uiGameFontSize+'px; color: #ffffff; border:none; background-color:Transparent; cursor:pointer; position: absolute; width: ' + uiGameInboxButtonWidth + 'px; height: ' + uiGameInboxButtonHeight + 'px; left: ' + uiGameInboxButtonLeft + 'px; top: ' + uiGameInboxButtonTop + 'px \">\
									<img id = "inboxButtonTexture"; src = "imgs/button_inbox.png" style="position:absolute; width:' +  uiGameInboxButtonWidth + 'px; height: ' + uiGameInboxButtonHeight + 'px; left: 0px; top: 0px ">\
										<div style="font-size:'+uiGameFontSize+'px; position:absolute; left:'+uiGameInboxButtonLabelLocalLeft+'px; top:'+uiGameInboxButtonLabelLocalTop+'px">Inbox '+giftscount+' </div>\
									</img>\ \
								</button>\
								<button id = "friendsButton"; onclick = \"showPopup()\" style = \"font-size:'+uiGameFontSize+'px; color: #ffffff; border:none; background-color:Transparent; cursor:pointer;  position: absolute; width: ' + uiGameFriendsButtonWidth + 'px; height: ' + uiGameFriendsButtonHeight + 'px; left: ' + uiGameFriendsButtonLeft + 'px; top: ' + uiGameFriendsButtonTop + 'px \"> \
									<img id = "friendsButtonTexture"; src = "imgs/button_friends.png" style="position:absolute; width:' +  uiGameFriendsButtonWidth + 'px; height: ' + uiGameFriendsButtonHeight + 'px; left: 0px; top: 0px ">\
										<div style="font-size:'+uiGameFontSize+'px; position:absolute; top:'+uiGameInboxButtonHeight/uiGameInboxFriendsLabelHeightScale+'px; left:'+uiGameInboxButtonWidth/uiGameInboxFriendsLabelWidthScale+'px">Friends</div>\
									</img>\ \
								</button>\
								<button id = "bonusCollectButton"; onclick = \"collectBonus()\" style = \"background-color: Transparent; border: none; cursor:pointer;  position: absolute; position: absolute; width: ' + uiGameMegaBonusPanelWidth + 'px; height: ' + uiGameMegaBonusPanelHeight*1.2 + 'px; left: ' + uiGameMegaBonusPanelLeft + 'px; top: ' + uiGameMegaBonusPanelTop*20 + 'px">\
									<img id = "bonusIndicatorTexture"; src = "imgs/b1.png" style="position:absolute; width: ' + uiGameMegaBonusPanelWidth*0.7 + 'px; height: ' + uiGameMegaBonusPanelHeight*0.5 + 'px; left: '+(uiGameMegaBonusPanelWidth*0.5-uiGameMegaBonusPanelWidth*0.35)+'px; top: '+uiGameMegaBonusPanelHeight*(-0.35)+'px"></img>\
									<img id = "bonusCollectButtonTexture"; src = "imgs/bonus_plate.png" style="position:absolute; width: ' + uiGameMegaBonusPanelWidth + 'px; height: ' + uiGameMegaBonusPanelHeight*1.2 + 'px; left: 0px; top: 0px"></img>\
									<div id = "bonusCollectInfoLabel"; style = \"font-size:'+uiGameFontSize*0.8+'px; text-align: center; color: #ffffff; background-color: Trnsparent; position: absolute; width: ' + uiGameMegaBonusPanelWidth + 'px; height: ' + uiGameMegaBonusPanelHeight + 'px; left: 0px; top: '+uiGameMegaBonusPanelHeight*0.12+'px \">'+ megaBonusInfoText + ' ' + bonusButtonText + '</div>\
								</button>\
							</div>';
	return bottomPanelHTML;
}