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

var uiGameGiftsButtonWidth;
var uiGameGiftsButtonHeight;
var uiGameGiftsButtonLeft;
var uiGameGiftsButtonTop;
var uiGameGiftsButtonLabelLocalLeft;
var uiGameGiftsButtonLabelLocalTop;

var uiGameBuyButtonWidth;
var uiGameBuyButtonHeight;
var uiGameBuyButtonLeft;
var uiGameBuyButtonTop;
var uiGameBuyButtonLabelLocalLeft;
var uiGameBuyButtonLabelLocalTop;

var uiGameMegaBonusPanelWidth;
var uiGameMegaBonusPanelHeight;
var uiGameMegaBonusPanelLeft;
var uiGameMegaBonusPanelTop;

var uiGameMegaBonusIndicateWidth;
var uiGameMegaBonusIndicateHeight;
var uiGameMegaBonusIndicateLeft;
var uiGameMegaBonusIndicateTop;

var uiGameMegaBonusLabelLeft;
var uiGameMegaBonusLebelTop;

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
	
	const uiGameGiftsButtonWidthScale = 0.2;
	const uiGameGiftsButtonHeightScale = 0.1285;
	const uiGameGiftsButtonLeftScale = 0.145;
	const uiGameGiftsButtonTopScale = 0.8705;
	const uiGameGiftsButtonLabelLocalLeftScale = 0.5;
	const uiGameGiftsButtonLabelLocalTopScale = 0.5;
	uiGameGiftsButtonWidth = uiGameWidth * uiGameGiftsButtonWidthScale;
	uiGameGiftsButtonHeight = uiGameHeight * uiGameGiftsButtonHeightScale;
	uiGameGiftsButtonLeft = uiGameWidth * uiGameGiftsButtonLeftScale;
	uiGameGiftsButtonTop = uiGameHeight * uiGameGiftsButtonTopScale;
	uiGameGiftsButtonLabelLocalLeft = uiGameGiftsButtonWidth * uiGameGiftsButtonLabelLocalLeftScale;
	uiGameGiftsButtonLabelLocalTop = uiGameGiftsButtonHeight * uiGameGiftsButtonLabelLocalTopScale;
	
	const uiGameBuyButtonWidthScale = 0.2;
	const uiGameBuyButtonHeightScale = 0.1285;
	const uiGameBuyButtonLeftScale = 0.655;
	const uiGameBuyButtonTopScale = 0.8705;
	const uiGameBuyButtonLabelLocalLeftScale = 0.5;
	const uiGameBuyButtonLabelLocalTopScale = 0.5;
	uiGameBuyButtonWidth = uiGameWidth * uiGameBuyButtonWidthScale;
	uiGameBuyButtonHeight = uiGameHeight * uiGameBuyButtonHeightScale;
	uiGameBuyButtonLeft = uiGameWidth * uiGameBuyButtonLeftScale;
	uiGameBuyButtonTop = uiGameHeight * uiGameBuyButtonTopScale;
	uiGameBuyButtonLabelLocalLeft = uiGameBuyButtonWidth * uiGameBuyButtonLabelLocalLeftScale;
	uiGameBuyButtonLabelLocalTop = uiGameBuyButtonHeight * uiGameBuyButtonLabelLocalTopScale;

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
	
	const uiGameMegaBonusLabelLeftScale = 0.435;
	const uiGameMegaBonusLabelTopScale = 0.92;
	uiGameMegaBonusLabelLeft = uiGameWidth * uiGameMegaBonusLabelLeftScale;
	uiGameMegaBonusLabelTop = uiGameHeight * uiGameMegaBonusLabelTopScale;
	
	var bottomPanelHTML = '<div id = "bottomPanel">\
								<button id = "inboxButton"; onclick = \"showInboxPopup()\" style = \"font-size:'+uiGameFontSize+'px; color: #ffffff; border:none; background-color:Transparent; cursor:pointer; position: absolute; width: ' + uiGameInboxButtonWidth + 'px; height: ' + uiGameInboxButtonHeight + 'px; left: ' + uiGameInboxButtonLeft + 'px; top: ' + uiGameInboxButtonTop + 'px \">\
									<img id = "inboxButtonTexture"; src = "imgs/button_inbox.png" style="position:absolute; width:' +  uiGameInboxButtonWidth + 'px; height: ' + uiGameInboxButtonHeight + 'px; left: 0px; top: 0px ">\
										<div style="font-size:'+uiGameFontSize+'px; position:absolute; left:'+uiGameInboxButtonLabelLocalLeft+'px; top:'+uiGameInboxButtonLabelLocalTop+'px">Inbox '+giftscount+' </div>\
									</img>\ \
								</button>\
								<button id = "giftsButton"; onclick = \"showInboxPopup()\" style = \"font-size:'+uiGameFontSize+'px; color: #ffffff; border:none; background-color:Transparent; cursor:pointer; position: absolute; width: ' + uiGameGiftsButtonWidth + 'px; height: ' + uiGameGiftsButtonHeight + 'px; left: ' + uiGameGiftsButtonLeft + 'px; top: ' + uiGameGiftsButtonTop + 'px \">\
									<img id = "GiftsButtonTexture"; src = "imgs/button_gifts.png" style="position:absolute; width:' +  uiGameGiftsButtonWidth + 'px; height: ' + uiGameGiftsButtonHeight + 'px; left: 0px; top: 0px ">\
										<div style="font-size:'+uiGameFontSize+'px; position:absolute; left:'+uiGameGiftsButtonLabelLocalLeft+'px; top:'+uiGameGiftsButtonLabelLocalTop+'px">Gifts '+giftscount+' </div>\
									</img>\ \
								</button>\
								<button id = "buyButton"; onclick = \"showInboxPopup()\" style = \"font-size:'+uiGameFontSize+'px; color: #ffffff; border:none; background-color:Transparent; cursor:pointer; position: absolute; width: ' + uiGameBuyButtonWidth + 'px; height: ' + uiGameBuyButtonHeight + 'px; left: ' + uiGameBuyButtonLeft + 'px; top: ' + uiGameBuyButtonTop + 'px \">\
									<img id = "BuyButtonTexture"; src = "imgs/button_buy.png" style="position:absolute; width:' +  uiGameBuyButtonWidth + 'px; height: ' + uiGameBuyButtonHeight + 'px; left: 0px; top: 0px ">\
										<div style="font-size:'+uiGameFontSize+'px; position:absolute; left:'+uiGameBuyButtonLabelLocalLeft+'px; top:'+uiGameBuyButtonLabelLocalTop+'px">Buy</div>\
									</img>\ \
								</button>\
								<button id = "friendsButton"; onclick = \"showPopup()\" style = \"font-size:'+uiGameFontSize+'px; color: #ffffff; border:none; background-color:Transparent; cursor:pointer;  position: absolute; width: ' + uiGameFriendsButtonWidth + 'px; height: ' + uiGameFriendsButtonHeight + 'px; left: ' + uiGameFriendsButtonLeft + 'px; top: ' + uiGameFriendsButtonTop + 'px \"> \
									<img id = "friendsButtonTexture"; src = "imgs/button_friends.png" style="position:absolute; width:' +  uiGameFriendsButtonWidth + 'px; height: ' + uiGameFriendsButtonHeight + 'px; left: 0px; top: 0px ">\
										<div style="font-size:'+uiGameFontSize+'px; position:absolute; left:'+uiGameFriendsButtonLabelLocalLeft+'px; top:'+uiGameFriendsButtonLabelLocalTop+'px">Friends</div>\
									</img>\ \
								</button>\
								<button id = "bonusCollectButton"; onclick = \"collectBonus()\" style = \"background-color: Transparent; border: none; cursor:pointer;  position: absolute; position: absolute; width: ' + uiGameMegaBonusPanelWidth + 'px; height: ' + uiGameMegaBonusPanelHeight + 'px; left: ' + uiGameMegaBonusPanelLeft + 'px; top: ' + uiGameMegaBonusPanelTop + 'px">\
									<img id = "bonusCollectButtonTexture"; src = "imgs/bonus_plate.png" style="position:absolute; width: ' + uiGameMegaBonusPanelWidth + 'px; height: ' + uiGameMegaBonusPanelHeight*1.2 + 'px; left: 0px; top: 0px"></img>\
								</button>\
								<img id = "bonusIndicatorTexture"; src = "imgs/indicate.png" style="position:absolute; width: ' + uiGameMegaBonusIndicateWidth + 'px; height: ' + uiGameMegaBonusIndicateHeight + 'px; left: '+uiGameMegaBonusIndicateLeft+'px; top: '+uiGameMegaBonusIndicateTop+'px"></img>\
								<div id = "bonusCollectInfoLabel"; style = \"font-size:'+uiGameFontSize+'px; text-align: center; color: #ffffff; background-color: Trnsparent; position: absolute; left: ' + uiGameMegaBonusLabelLeft + 'px; top: ' + uiGameMegaBonusLabelTop + 'px;\">'+ megaBonusInfoText + ' ' + bonusButtonText + '</div>\
							</div>';
	return bottomPanelHTML;
}