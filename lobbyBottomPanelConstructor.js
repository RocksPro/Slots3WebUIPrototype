const uiGameBottomPanelHeightScale = 0.18;
var uiGameBottomPanelWidth;
var uiGameBottomPanelHeight;
var uiGameBottomPanelLeft;
var uiGameBottomPanelTop;

const uiGameGiftsButtonWidthScale = 1.8;
var uiGameGiftsButtonWidth;
var uiGameGiftsButtonHeight;
var uiGameGiftsButtonLeft;
var uiGameGiftsButtonTop;

const uiGameFriendsButtonWidthScale = 1.8;
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
	uiGameBottomPanelWidth = uiGameWidth;
	uiGameBottomPanelHeight = uiGameTopPanelHeight*1.2;
	uiGameBottomPanelLeft = 0;
	uiGameBottomPanelTop = uiGameTopPanelHeight*9;

	uiGameGiftsButtonWidth = uiGameBottomPanelHeight * uiGameGiftsButtonWidthScale;
	uiGameGiftsButtonHeight = uiGameGiftsButtonWidth*0.3;
	uiGameGiftsButtonLeft = 0;
	uiGameGiftsButtonTop = (uiGameBottomPanelHeight - uiGameGiftsButtonHeight)/2;

	uiGameFriendsButtonWidth = uiGameBottomPanelHeight * uiGameFriendsButtonWidthScale;
	uiGameFriendsButtonHeight = uiGameFriendsButtonWidth*0.3;
	uiGameFriendsButtonLeft = uiGameBottomPanelWidth - uiGameFriendsButtonWidth;
	uiGameFriendsButtonTop = (uiGameBottomPanelHeight - uiGameFriendsButtonHeight)/2;

	uiGameMegaBonusPanelWidth = uiGameBottomPanelWidth * uiGameMegaBonusPanelWidthScale;
	uiGameMegaBonusPanelHeight = uiGameBottomPanelHeight;
	uiGameMegaBonusPanelLeft = uiGameBottomPanelWidth/2 - uiGameMegaBonusPanelWidth/2;
	uiGameMegaBonusPanelTop = -uiGameBottomPanelHeight * uiGameMegaBonusPanelWidthScale/30;

	uiGameMegaBonusButtonWidth = uiGameMegaBonusPanelWidth / 2;
	uiGameMegaBonusButtonHeight = uiGameBottomPanelHeight / 3;
	uiGameMegaBonusButtonLeft = uiGameBottomPanelWidth/2 - uiGameMegaBonusButtonWidth/2;
	uiGameMegaBonusButtonTop = uiGameMegaBonusButtonHeight;

	uiGameMegaBonusCountWidth = uiGameMegaBonusPanelWidth / 2;
	uiGameMegaBonusCountHeight = uiGameBottomPanelHeight / 4;
	uiGameMegaBonusCountLeft = uiGameBottomPanelWidth/2 - uiGameMegaBonusButtonWidth/2;
	uiGameMegaBonusCountTop = uiGameMegaBonusButtonHeight*2;	
	
	const uiGameInboxFriendsLabelWidthScale = 4;
	const uiGameInboxFriendsLabelHeightScale = 4;
	
	var bottomPanelHTML = '<div style = \"text-align: center; background-color: Transparent; position: absolute; width: ' + uiGameBottomPanelWidth + 'px; height: ' + uiGameBottomPanelHeight + 'px; left: ' + uiGameBottomPanelLeft + 'px; top: ' + uiGameBottomPanelTop + 'px \">   \
								<img src = "imgs/bottomPanel.png" style="position:absolute; width:' + uiGameBottomPanelWidth + 'px; height: ' + uiGameBottomPanelHeight + 'px; left: ' + uiGameBottomPanelLeft + 'px;"></img>\
								<button onclick = \"showInboxPopup()\" style = \"font-size:'+uiGameFontSize+'px; color: #ffffff; border:none; background-color:Transparent; cursor:pointer; position: absolute; width: ' + uiGameGiftsButtonWidth + 'px; height: ' + uiGameGiftsButtonHeight + 'px; left: ' + uiGameGiftsButtonLeft + 'px; top: ' + uiGameGiftsButtonTop + 'px \">\
									<img src = "imgs/button2.png" style="position:absolute; width:' +  uiGameGiftsButtonWidth + 'px; height: ' + uiGameGiftsButtonHeight + 'px; left: 0px; top: 0px ">\
										<div style="font-size:'+uiGameFontSize+'px; position:absolute; top:'+uiGameGiftsButtonHeight/uiGameInboxFriendsLabelHeightScale+'px; left:'+uiGameGiftsButtonWidth/uiGameInboxFriendsLabelWidthScale+'px">Inbox '+giftscount+' </div>\
									</img>\ \
								</button>\
								<button onclick = \"showPopup()\" style = \"font-size:'+uiGameFontSize+'px; color: #ffffff; border:none; background-color:Transparent; cursor:pointer;  position: absolute; width: ' + uiGameFriendsButtonWidth + 'px; height: ' + uiGameFriendsButtonHeight + 'px; left: ' + uiGameFriendsButtonLeft + 'px; top: ' + uiGameGiftsButtonTop + 'px \"> \
									<img src = "imgs/button2.png" style="position:absolute; width:' +  uiGameGiftsButtonWidth + 'px; height: ' + uiGameGiftsButtonHeight + 'px; left: 0px; top: 0px ">\
										<div style="font-size:'+uiGameFontSize+'px; position:absolute; top:'+uiGameGiftsButtonHeight/uiGameInboxFriendsLabelHeightScale+'px; left:'+uiGameGiftsButtonWidth/uiGameInboxFriendsLabelWidthScale+'px">Friends</div>\
									</img>\ \
								</button>\
								\
								<button onclick = \"collectBonus()\" style = \"background-color: Transparent; border: none; cursor:pointer;  position: absolute; position: absolute; width: ' + uiGameMegaBonusPanelWidth + 'px; height: ' + uiGameMegaBonusPanelHeight*1.2 + 'px; left: ' + uiGameMegaBonusPanelLeft + 'px; top: ' + uiGameMegaBonusPanelTop*20 + 'px">\
									<img src = "imgs/b'+bonusesCollected+'.png" style="position:absolute; width: ' + uiGameMegaBonusPanelWidth*0.7 + 'px; height: ' + uiGameMegaBonusPanelHeight*0.5 + 'px; left: '+(uiGameMegaBonusPanelWidth*0.5-uiGameMegaBonusPanelWidth*0.35)+'px; top: '+uiGameMegaBonusPanelHeight*(-0.35)+'px"></img>\
									<img src = "imgs/cashpanel2.png" style="position:absolute; width: ' + uiGameMegaBonusPanelWidth + 'px; height: ' + uiGameMegaBonusPanelHeight*1.2 + 'px; left: 0px; top: 0px"></img>\
									<div style = \"font-size:'+uiGameFontSize*0.8+'px; text-align: center; color: #ffffff; background-color: Trnsparent; position: absolute; width: ' + uiGameMegaBonusPanelWidth + 'px; height: ' + uiGameMegaBonusPanelHeight + 'px; left: 0px; top: '+uiGameMegaBonusPanelHeight*0.12+'px \">'+megaBonusTitle+' <br> '+ megaBonusInfoText +'</div>\
									<div style = \"font-size:'+uiGameFontSize*0.8+'px; text-align: center; color: #ffffff; background-color: Transparent; position: absolute; width: ' + uiGameMegaBonusPanelWidth + 'px; height: ' + uiGameMegaBonusPanelHeight*0.4 + 'px; left: 0px; top: '+uiGameMegaBonusPanelHeight*0.7+'px \">'+ bonusButtonText +'</div>\
								</button>\
							</div>';
	return bottomPanelHTML;
}