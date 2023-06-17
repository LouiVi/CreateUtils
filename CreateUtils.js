//app.LoadPlugin( "Utils" ); utils = app.CreateUtils();

//Called when application is started.
function OnStart()
{
ide.MakePlugin("Utils");
app.Exit( );
app.Wait( 2, true );
	utils = app.CreateUtils();
 // ide.MakePlugin("Utils");
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" )
	lay.SetBackColor( "#ffffff" );
	spinner = app.CreateSpinner( "-- Choose --,"+utils.GetMethods(), 0.65, 0.1 );
	spinner.SetOnChange( Sample );
	spinner.SetTextColor( "#000000" )
	//Create a text label and add it to layout.
	//txt = app.CreateText( utils.GetMethods(), 1, 0.4, "multiline" );
	//txt.SetTextSize( 16 )
	lay.AddChild( spinner )
	
	//Add layout to app.	
	app.AddLayout( lay )
}

function Sample(item, index)
{
	alert(eval("utils."+item));
}