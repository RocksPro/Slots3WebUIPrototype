function lobbyLoaded()
{
	var opened_popup = $_GET('popup');
	
	if (opened_popup == "options")
	{
		toggle_visibility('popup');
	}
}