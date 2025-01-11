cfg.Light, cfg.Portrait, cfg.MUI, cfg.Share;

app.LoadPlugin( "Utils" )
//Called when application is started.



function OnStart()
{
//ide.MakePlugin("Utils");
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
	// Example usage:
const binaryString = utils.StringToBinary("Hello");
//alert();
	txt = app.CreateText( binaryString)
	txt.SetTextSize( 18 )
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
var g = new Array();
	e = eval("utils."+spin.GetText());
	f = utils.GetObjectFunctionsParameterNames(e);
	alert(utils.GetObjectFunctionsParameterNames(e));
	alert(utils.GetObjectFunctionsParameterTypes(e));
	//ee = f + "".split(",");
	//alert(f[0]);
	//alert(ee.length);
	//if(ee.length>0) {
		for(d=0;d<f.length;d++){
	//	alert("D:"+d);
	ask = utils.Prompt()
			g[0] = eval(f[d] + "='" + ask + "';");
			alert(f[d] + "='" + ask + "';");
		}
		eval("utils."+spin.GetText()+"("+f[0]+","+f[1]+");");
	//}
//	eval("utils."+spin.GetText());
	
	txt.SetText(utils.GetObjectFunctionsParameterNames(e));
}