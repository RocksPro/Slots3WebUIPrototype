function lobbyLoaded()
{
	var opened_popup = $_GET('popup');
	
	if (opened_popup == "options")
	{
		toggle_visibility('popup');
	}
	else if (opened_popup == "buy")
	{
		toggle_visibility('popup_buycoins');
	}
	else if (opened_popup == "receivegifts")
	{
		toggle_visibility('popup_receivegifts');
	}
	else if (opened_popup == "friends")
	{
		toggle_visibility('popup_friends');
	}
}