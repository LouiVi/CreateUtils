cfg.Light, cfg.Portrait, cfg.MUI, cfg.Share;

app.LoadPlugin( "Utils" )
//Called when application is started.
function OnStart()
{
ide.MakePlugin("Utils");
utils = app.CreateUtils(null);
//alert(utils.GetSource());
//alert(utils.GetMethods().split(",").join("\r"));
//alert(utils.CountMethods());
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "Linear", "Vertical,HCenter,FillXY" )

spin = app.CreateSpinner( utils.GetMethods().split(","), 1, -1);
spin.SetOnChange( spin_OnChange );
spin.SetOnTouch( spin_OnTouch );
lay.AddChild( spin );
	//Create a text label and add it to layout.
	txt = app.CreateText( )
	txt.SetTextSize( 32 )
	lay.AddChild( txt )
	
	//Add layout to app.	
	app.AddLayout( lay )
	//utils.ForceDownload("https://www.google.com/", "/storage/emulated/0/Download/go.html");
}

function spin_OnChange(item, index)
{
	alert(item);
}

function spin_OnTouch()
{
	e = eval("utils."+spin.GetText());
	alert(utils.GetObjectFunctionsParameterNames(e));
	alert(utils.GetObjectFunctionsParameterTypes(e));
	txt.SetText(utils.GetObjectFunctionsParameterNames(e));
}