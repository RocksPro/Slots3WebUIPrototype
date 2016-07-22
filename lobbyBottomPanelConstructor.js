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
var uiGameFriendsButtonLabelLocalLeft;
var uiGameFriendsButtonLabelLocalTop;

var uiGameMegaBonusPanelWidth;
var uiGameMegaBonusPanelHeight;
var uiGameMegaBonusPanelLeft;
var uiGameMegaBonusPanelTop;

var uiGameMegaBonusIndicateWidth;
var uiGameMegaBonusIndicateHeight;
var uiGameMegaBonusIndicateLeft;
var uiGameMegaBonusIndicateTop;

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
	const uiGameFriendsButtonLabelLocalLeftScale = 0.5;
	const uiGameFriendsButtonLabelLocalTopScale = 0.5;
	uiGameFriendsButtonWidth = uiGameWidth * uiGameFriendsButtonWidthScale;
	uiGameFriendsButtonHeight = uiGameHeight * uiGameFriendsButtonHeightScale;
	uiGameFriendsButtonLeft = uiGameWidth * uiGameFriendsButtonLeftScale;
	uiGameFriendsButtonTop = uiGameHeight * uiGameFriendsButtonTopScale;
	uiGameFriendsButtonLabelLocalLeft = uiGameFriendsButtonWidth * uiGameFriendsButtonLabelLocalLeftScale;
	uiGameFriendsButtonLabelLocalTop = uiGameFriendsButtonHeight * uiGameFriendsButtonLabelLocalTopScale;

	const uiGameMegaBonusPanelWidthScale = 0.42;
	const uiGameMegaBonusPanelHeightScale = 0.14;
	const uiGameMegaBonusPanelLeftScale = 0.29;
	const uiGameMegaBonusPanelTopScale = 0.832;
	uiGameMegaBonusPanelWidth = uiGameWidth * uiGameMegaBonusPanelWidthScale;
	uiGameMegaBonusPanelHeight = uiGameHeight * uiGameMegaBonusPanelHeightScale;
	uiGameMegaBonusPanelLeft = uiGameWidth * uiGameMegaBonusPanelLeftScale;
	uiGameMegaBonusPanelTop = uiGameHeight * uiGameMegaBonusPanelTopScale;
	
	const uiGameMegaBonusIndicateWidthScale = 0.27;
	const uiGameMegaBonusIndicateHeightScale = 0.04;
	const uiGameMegaBonusIndicateLeftScale = 0.365;
	const uiGameMegaBonusIndicateTopScale = 0.848;
	uiGameMegaBonusIndicateWidth = uiGameWidth * uiGameMegaBonusIndicateWidthScale;
	uiGameMegaBonusIndicateHeight = uiGameHeight * uiGameMegaBonusIndicateHeightScale;
	uiGameMegaBonusIndicateLeft = uiGameWidth * uiGameMegaBonusIndicateLeftScale;
	uiGameMegaBonusIndicateTop = uiGameHeight * uiGameMegaBonusIndicateTopScale;
	
	var bottomPanelHTML = '<div id = "bottomPanel">\
								<button id = "inboxButton"; onclick = \"showInboxPopup()\" style = \"font-size:'+uiGameFontSize+'px; color: #ffffff; border:none; background-color:Transparent; cursor:pointer; position: absolute; width: ' + uiGameInboxButtonWidth + 'px; height: ' + uiGameInboxButtonHeight + 'px; left: ' + uiGameInboxButtonLeft + 'px; top: ' + uiGameInboxButtonTop + 'px \">\
									<img id = "inboxButtonTexture"; src = "imgs/button_inbox.png" style="position:absolute; width:' +  uiGameInboxButtonWidth + 'px; height: ' + uiGameInboxButtonHeight + 'px; left: 0px; top: 0px ">\
										<div style="font-size:'+uiGameFontSize+'px; position:absolute; left:'+uiGameInboxButtonLabelLocalLeft+'px; top:'+uiGameInboxButtonLabelLocalTop+'px">Inbox '+giftscount+' </div>\
									</img>\ \
								</button>\
								<button id = "friendsButton"; onclick = \"showPopup()\" style = \"font-size:'+uiGameFontSize+'px; color: #ffffff; border:none; background-color:Transparent; cursor:pointer;  position: absolute; width: ' + uiGameFriendsButtonWidth + 'px; height: ' + uiGameFriendsButtonHeight + 'px; left: ' + uiGameFriendsButtonLeft + 'px; top: ' + uiGameFriendsButtonTop + 'px \"> \
									<img id = "friendsButtonTexture"; src = "imgs/button_friends.png" style="position:absolute; width:' +  uiGameFriendsButtonWidth + 'px; height: ' + uiGameFriendsButtonHeight + 'px; left: 0px; top: 0px ">\
										<div style="font-size:'+uiGameFontSize+'px; position:absolute; left:'+uiGameFriendsButtonLabelLocalLeft+'px; top:'+uiGameFriendsButtonLabelLocalTop+'px">Friends</div>\
									</img>\ \
								</button>\
								<button id = "bonusCollectButton"; onclick = \"collectBonus()\" style = \"background-color: Transparent; border: none; cursor:pointer;  position: absolute; position: absolute; width: ' + uiGameMegaBonusPanelWidth + 'px; height: ' + uiGameMegaBonusPanelHeight + 'px; left: ' + uiGameMegaBonusPanelLeft + 'px; top: ' + uiGameMegaBonusPanelTop + 'px">\
									<img id = "bonusCollectButtonTexture"; src = "imgs/bonus_plate.png" style="position:absolute; width: ' + uiGameMegaBonusPanelWidth + 'px; height: ' + uiGameMegaBonusPanelHeight*1.2 + 'px; left: 0px; top: 0px"></img>\
									<div id = "bonusCollectInfoLabel"; style = \"font-size:'+uiGameFontSize*0.8+'px; text-align: center; color: #ffffff; background-color: Trnsparent; position: absolute; width: ' + uiGameMegaBonusPanelWidth + 'px; height: ' + uiGameMegaBonusPanelHeight + 'px; left: 0px; top: '+uiGameMegaBonusPanelHeight*0.12+'px \">'+ megaBonusInfoText + ' ' + bonusButtonText + '</div>\
								</button>\
								<img id = "bonusIndicatorTexture"; src = "imgs/indicate.png" style="position:absolute; width: ' + uiGameMegaBonusIndicateWidth + 'px; height: ' + uiGameMegaBonusIndicateHeight + 'px; left: '+uiGameMegaBonusIndicateLeft+'px; top: '+uiGameMegaBonusIndicateTop+'px"></img>\
							</div>';
	return bottomPanelHTML;
}