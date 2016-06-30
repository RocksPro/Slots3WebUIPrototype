function themeLoaded()
{
	var theme = $_GET('t');
	
	if (theme == "farm")
	{
		return "<img src = 'images/bars_farm.png'></img>";
	}
	else if (theme == "rome")
	{
		return "<img src = 'images/bars_rome.png'></img>";
	}
	else if (theme == "aztec")
	{
		return "<img src = 'images/bars_aztec.png'></img>";
	}
	else if (theme == "classic")
	{
		return "<img src = 'images/bars_classic.png'></img>";
	}
	else if (theme == "billionaire")
	{
		return "<img src = 'images/bars_billionaire.png'></img>";
	}
	else if (theme == "africa")
	{
		return "<img src = 'images/bars_africa.png'></img>";
	}
	else
	{
		return "<img src = 'images/bars_farm.png'></img>";
	}
}
