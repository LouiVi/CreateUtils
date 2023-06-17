app.CreateUtils = function()
{
	return app.CreateObject( "\u0055\u0074\u0069\u006c\u0073" );// Utils
}

function Utils()
{
	var self = this;
	self.Alert = function( msg ){_utils.Alert(msg);};
	this.Prompt = function( msg, dflt ){return _utils.Prompt(msg, dflt);};
	this.Confirm = function( msg ){return _utils.Confirm(msg);};
	this.GetVersion = function( num, txt ) { return _utils.GetVersion(num, txt);};
	this.GetSource = function( ){ return _utils.GetSource(); };
	this.Document = function() { return _utils.Document();};
	this.Window = function() { return _utils.Window();};
	this.Stringify = function( str ) { return _utils.Stringify(str);};
	this.Parse = function( str ) { return _utils.Parse(str);};
	this.ToUnicode = function( string ) { return _utils.ToUnicode(string);};
	this.HexToRgb = function( hex ) { return _utils.HexToRgb(hex);};
	this.HexToRgba = function( hex ) { return _utils.HexToRgba(hex);};
	this.RgbToHex = function( rgb ) { return _utils.RgbToHex(rgb);};
	this.RgbaToHex = function( rgba ) { return _utils.RgbaToHex(rgba);};
	this.GetObjectFunctionsParameterNames = function( func ) { return _utils.GetObjectFunctionsParameterNames(func);};
	this.GetObjectFunctions = function( objName ) { return _utils.GetObjectFunctions(objName);};
	this.Clone = function( obj ) { return _utils.Clone(objName);};
	this.Remove = function( array, item ) { return _utils.Remove(array, item);};
	this.RemoveAll = function( array ) { return _utils.RemoveAll(array);};
	this.GetFileTitle = function( fileName, noExtension ) { return _utils.GetFileTitle(fileName, noExtension);};
	this.RandomIntegerRange = function( rFrom, rTo ) { return _utils.RandomIntegerRange(rFrom, rTo);};
	this.RandomFloatRange = function( rFrom, rTo ) { return _utils.RandomFloatRange(rFrom, rTo);};
	this.RandomHexColor = function( withAlpha ) { return _utils.RandomHexColor(withAlpha);};
	this.Shuffle = function( array ) { return _utils.Shuffle(array);};
	this.Hex = function( s ) { return _utils.Hex(s);};
	this.HSVToRGB = function( hh, ss, vv ) { return _utils.HSVToRGB(hh, ss, vv);};
	this.RGBToHSV = function( rr, gg, bb ) { return _utils.RGBToHSV(rr, gg, bb);};
	this.Extend = function( o ) { return _utils.Extend(o);};
	this.KilometersToMiles= function( kilometers ) { return _utils.KilometersToMiles(kilometers);};
	this.MilesToKilometers = function( miles ) { return _utils.MilesToKilometers(miles);};
	this.FahrenheitToCelsius = function( fahrenheit ) { return _utils.FahrenheitToCelsius(fahrenheit);};
	this.FahrenheitToKelvin = function( fahrenheit ) { return _utils.FahrenheitToKelvin(fahrenheit);};
	this.CelsiusToFahrenheit = function( celsius ) { return _utils.CelsiusToFahrenheit(celsius);};
	this.CelsiusToKelvin = function( celsius ) { return _utils.CelsiusToKelvin(celsius);};
	this.KelvinToCelsius= function( kelvin ) { return _utils.KelvinToCelsius(kelvin);};
	this.KelvinToFahrenheit = function( kelvin ) { return _utils.KelvinToFahrenheit(kelvin);};
	this.GetType = function() { return _utils.GetType();};
	self.GetMethods = function() { return _utils.GetMethods();};
this.ImageToCanvas = function(img) { return _utils.ImageToCanvas(img);};
this.CreateCanvas = function(cont, img) { return _utils.CreateCanvas(cont, img);};
this.GetDecFromHex = function(h) { return _utils.GetDecFromHex(h);};
this.HexToDarkerHex = function(hex, percent) { return _utils.HexToDarkerHex(hex, percent);};
this.HexToLighterHex = function(hex, percent) { return _utils.HexToLighterHex(hex, percent);};
this.Guid = function () { return _utils.Guid();}
self.GuidAlternate = function () { return _utils.GuidAlternate();}
self.GetGradientColors = function (colors) { return _utils.GetGradientColors(colors);}
self.CreatePlugin = function (name) { _utils.CreatePlugin(name);}
self.ZipFolder = function (source, destination) { _utils.ZipFolder(source,destination);}
self.CountMethods = function () { return _utils.CountMethods();}

//Misc/PluginTemplate.txt
}


(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window._utils = require('utils');

},{"utils":2}],2:[function(require,module,exports){
/*
 (c) 1974-????, Luis Ramírez De La Rosa
 Utils is a JavaScript library for using some of the native JavaScript functions intended to use on the browser but you can execute in DroidScript too because is based/created in JavaScript too.
 https://www.luillosoftinc.com/software/DroidScript/ExtraUtils/
*/

(function () { 'use strict';

var Utils = {};

Utils.GetType = function() {
	return "Utils";
};

Utils.ZipFolder = function( source, destination ) {
    function add( folder, name="" ) {
        app.ListFolder( folder, null, null, "AlphaSort" )
            .forEach( function (item) {
                if ( !app.IsFolder( folder+"/"+item )) {
                    zu.AddFile( name+item, folder+"/"+item )
                } else {
                    add( folder+"/"+item, name+item+"/" )
                }
            })
    }
    const zu = app.CreateZipUtil(  )
    zu.Create( destination )
    add( source )
    zu.Close()
};

Utils.CreatePlugin = function(name) {
	if(!app.FileExists(  app.GetAppPath() + "/" +  name + ".js")){
	var template = app.ReadFile( "/data/user/0/com.smartphoneremote.androidscriptfree/app_Plugins/utils/Misc/PluginTemplate.txt" );
	template = template.replace("#TOUNICODE#", Utils.ToUnicode(name));

	for(var c=0;c<10;c++){
	template = template.replace("#NAME#", name);
  template = template.replace("#name#", name.toLowerCase());
	}
	//alert(template);
	app.WriteFile(app.GetAppPath() + "/" +  name + ".js", template );
	ide.MakePlugin(name);
	}
	else
	{
	ide.MakePlugin(name);
	}
	//return "";
	//return template;
};
//Misc/PluginTemplate.txt


Utils.GuidAlternate = function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, 
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}   


Utils.Alert = function(msg) {
	alert(msg);
};

Utils.Prompt = function(msg, dflt) {
	return prompt(msg, dflt);
};

Utils.Confirm = function(msg) {
	return confirm(msg);
};

Utils.GetVersion = function( num, txt ) { 
	return "1.69.71";
};

Utils.GetSource = function() { 
//return app.GetPrivateFolder( "Plugins" );
/*var f = "/storage/emulated/0/LSD-Temp";
app.MakeFolder( f );
app.CopyFile( "/data/user/0/com.smartphoneremote.androidscriptfree/app_Plugins/utils/Utils.inc", f + "/Utils.inc" );
	return app.ReadFile( f + "/Utils.inc");//"/data/user/0/com.smartphoneremote.androidscriptfree/app_Plugins/utils/Utils.inc" );
	*/
		return app.ReadFile( "/data/user/0/com.smartphoneremote.androidscriptfree/app_Plugins/utils/Utils.js" );
};


Utils.Document = function() { 
	return document ? document : 'document object not exist';
};

Utils.Window = function() { 
	return window ? window : 'window object not exist';
};

Utils.Stringify = function(str) { 
	return JSON.stringify(str);
};

Utils.Parse = function(str) { 
	return JSON.parse(str);
};

//Convert a string to unicode escape sequences.
Utils.ToUnicode = function( string )
{
    return string.replace(/[\s\S]/g, function (escape) {
       return '\\u' + ('0000' + escape.charCodeAt().toString(16)).slice(-4);
    });
};

/**
 * Convert hex to rgb
 *
 * @method HexToRgb
 * @chainable
 */
 
Utils.HexToRgb = function(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return "rgb(" + parseInt(result[1], 16) + "," + parseInt(result[2], 16) + "," + parseInt(result[3], 16) + ")";
};

/**
 * Convert hex to rgba
 *
 * @method HexToRgba
 * @chainable
 */
 
Utils.HexToRgba = function(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return "rgba(" + parseInt(result[2], 16) + "," + parseInt(result[3], 16) + "," + parseInt(result[4], 16) + "," + parseInt(result[1], 16) + ")";
};

/**
 * Convert rgb to hex
 *
 * @method RgbToHex
 * @chainable
 */
 
Utils.RgbToHex = function(rgb) {
    var result = rgb.match(/\d+/g);

    function hex(x) {
        var digits = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F");
        return isNaN(x) ? "00" : digits[(x - x % 16 ) / 16] + digits[x % 16];
    };

    return "#" + hex(result[0]) + hex(result[1]) + hex(result[2]);
};

/**
 * Convert rgba to hex
 *
 * @method RgbaToHex
 * @chainable
 */
 
Utils.RgbaToHex = function(rgba) {
    var result = rgba.match(/\d+/g);

    function hex(x) {
        var digits = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F");
        return isNaN(x) ? "00" : digits[(x - x % 16 ) / 16] + digits[x % 16];
    };

    return "#" + hex(result[3]) + hex(result[0]) + hex(result[1]) + hex(result[2]);
};

Utils.GetGradientColors = function(color) {
  // Convert the hex color to RGB values
  let r = parseInt(color.slice(1,3), 16);
  let g = parseInt(color.slice(3,5), 16);
  let b = parseInt(color.slice(5,7), 16);

  // Calculate the lighter and darker versions of the color
  let lightR = Math.min(r + 50, 255);
  let lightG = Math.min(g + 50, 255);
  let lightB = Math.min(b + 50, 255);
  let darkR = Math.max(r - 50, 0);
  let darkG = Math.max(g - 50, 0);
  let darkB = Math.max(b - 50, 0);

  // Construct the gradient colors in CSS string format
  let lightColor = Utils.RgbToHex(`rgb(${lightR}, ${lightG}, ${lightB})`);
  let darkColor = Utils.RgbToHex(`rgb(${darkR}, ${darkG}, ${darkB})`);

//alert(lightColor);
  // Return the gradient colors as an array
  return [lightColor, darkColor];
};

 //Get the names of a function's parameters.
Utils.GetObjectFunctionsParameterNames = function( func ) {
    if( func ) {
      var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
      var ARGUMENT_NAMES = /([^\s,]+)/g;
      var fnStr = func.toString().replace(STRIP_COMMENTS, '');
      var result = fnStr.slice(fnStr.indexOf('(')+1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
      if(result === null) result = [];
      return result;
    }
};

//Get all methods of an object.
Utils.GetObjectFunctions = function( objName )
{
    var obj;
    if(typeof objName === 'object') {
    	obj = objName;
    }else{
		obj = eval("new "+objName+"()") ? eval("new "+objName+"()") : eval(objName);
	}
    //Get obj methods.
    var list = [];
    for (var Key in obj) {
      if (obj.hasOwnProperty(Key) && (typeof obj[Key] === 'function'))
      {
	       list.push(Key);
      } 
    }
    list.sort();
    return list;
};

//Clone an object.
Utils.Clone = function( obj ) {
    return JSON.parse(JSON.stringify(obj));
};

//Remove an item from an array/list.
Utils.Remove = function( array, item ) 
{
    var i = array.indexOf( item );
    if( i>-1 ) array.splice( i, 1 );
};

//Remove all items from an array/list.
Utils.RemoveAll = function( array ) 
{
	while(array.length>0) {
		array.pop();
	}
};

//Get the file title from the full name
//eg /sdcard/fred.txt -> fred
Utils.GetFileTitle = function( fileName, noExtension )
{
    var title = fileName.substr( fileName.lastIndexOf("/")+1 );
    if( noExtension ) title = title.substr( 0, title.lastIndexOf(".") );
    return title;
};

Utils.RandomIntegerRange = function(rFrom, rTo) {
	return rFrom + Math.floor(Math.random() * (rTo - rFrom));
};

Utils.RandomFloatRange = function(rFrom, rTo) {
	return rFrom + (Math.random() * (rTo - rFrom));
};

Utils.RandomHexColor = function(withAlpha) 
{
    var letters = '0123456789ABCDEF';
    var color = '#';
    var j = 6;
    if(withAlpha) j = 8;
    
    for (var i = 0; i < j; i++) 
    {
        color += letters[Math.floor(Math.random() * 16)];
    }
    
    return color;
};

Utils.Shuffle = function( array )
{
	var count = array.length,
		randomnumber,
		temp;
	while( count ){
		randomnumber = Math.random() * count-- | 0;
		temp = array[count];
		array[count] = array[randomnumber];
		array[randomnumber] = temp;
	}
};

Utils.Hex = function(s)
{
	var string = "";
	string=s.toString(16).toLowerCase().slice(0,2);
	if(string.length<2||string[1]==".")
	string="0"+string[0];
	return string;
};

//Converts HSV to RGB. Hue from 0-360; Saturation and Value from 0 to 255. Returns array.
Utils.HSVToRGB = function (hh,ss,vv)
{
var nr=0;
var ng=0;
var nb=0;

if(hh>360)hh=hh-(360*Math.floor(hh/360));
if(hh<0)hh=hh+(360*Math.ceil(-hh/360));

//Hue
if((hh>=0&&hh<60)||hh==360)
{
nr=255;
ng=hh*(255/60);
if(hh==360)
ng=0;
}
if(hh>=60&&hh<120)
{
nr=(120-hh)*(255/60);
ng=255;
}
if(hh>=120&&hh<180)
{
ng=255;
nb=(hh-120)*(255/60);
}
if(hh>=180&&hh<240)
{
nb=255;
ng=(240-hh)*(255/60);
}
if(hh>=240&&hh<300)
{
nb=255;
nr=(hh-240)*(255/60);
}
if(hh>=300&&hh<360)
{
nr=255;
nb=(360-hh)*(255/60);
}

//Saturation
nr=(255-nr)/255*(255-ss)+nr;
ng=(255-ng)/255*(255-ss)+ng;
nb=(255-nb)/255*(255-ss)+nb;

//Variance
nr=nr*(vv/255);
ng=ng*(vv/255);
nb=nb*(vv/255);

return [nr.toFixed(0)*1, ng.toFixed(0)*1, nb.toFixed(0)*1];

};

//Converts RGB to HSV. Values from 0-255. Returns array of values.
Utils.RGBToHSV = function(rr,gg,bb)
{
var nh=0;
var ns=0;
var nv=0;

var v1 = Math.max(rr,gg,bb);
var v2 = 0;
var v3 = Math.min(rr,gg,bb);
if(rr!=v1&&rr!=v3)v2=rr;
if(gg!=v1&&gg!=v3)v2=gg;
if(bb!=v1&&bb!=v3)v2=bb;

if(rr==gg&&v1==rr)v2=gg;
if(gg==bb&&v1==gg)v2=bb;
if(rr==bb&&v1==rr)v2=bb;

var R = 1;

var ov1 = v1;
var ov2 = v2;
var ov3 = v3;

//Finding Hue p1
if(v1==rr&&v2==gg)nh=0;
if(v1==gg&&v2==rr)nh=60;
if(v1==gg&&v2==bb)nh=120;
if(v1==bb&&v2==gg)nh=180;
if(v1==bb&&v2==rr)nh=240;
if(v1==rr&&v2==bb)nh=300;

//Finding Value
R = 255/v1;
v2=v2*R;
v3=v3*R;
nv = v1;
v1=255;

//nr=((nr1-255+S)*255)/S
//Finding Saturation
R=255/v3;
ns=255-v3;
//v2=(255*R-v2)/(R-1);
v2=((v2-255+ns)*255)/ns;
v3=0;

//Finding Hue p2
if(ov1==rr&&ov2==gg)nh=nh+((v2/255)*60);
if(ov1==gg&&ov2==rr)nh=nh+(((255-v2)/255)*60);
if(ov1==gg&&ov2==bb)nh=nh+((v2/255)*60);
if(ov1==bb&&ov2==gg)nh=nh+(((255-v2)/255)*60);
if(ov1==bb&&ov2==rr)nh=nh+((v2/255)*60);
if(ov1==rr&&ov2==bb)nh=nh+(((255-v2)/255)*60);

if(rr==gg&&ov1==rr)nh=60;
if(gg==bb&&ov1==gg)nh=180;
if(bb==rr&&ov1==bb)nh=300;
if(ov1==rr&&v2==0)nh=0;
if(ov1==gg&&v2==0)nh=120;
if(ov1==bb&&v2==0)nh=240;

if(rr==gg&&gg==bb)
{
nh=0;
ns=0;
nv=rr;
}

return [nh,ns,nv];
};

/* Extend
 * Modifies object methods Set*, Add*, to return the object, so methods can be chained.
 */
 
Utils.Extend = function(o) {
    Reflect.ownKeys(o)
        .filter(m => /^Set|Add/.test(m))
        .forEach(
            function (method) {
                const str = o[method].toString()
                const aStart = str.indexOf("(") + 1
                const aEnd = str.indexOf(")") - 1
                const bStart = str.indexOf("{") + 1
                const bEnd = str.lastIndexOf("}")
                const args = str.slice(aStart, aEnd).split(",")
                const body = str.slice(bStart, bEnd).replace(/obj.id/g, "this.id").concat(" return this;")
                args.push(body)
                o[method] = new Function(...args)
            })
    return o
};

Utils.KilometersToMiles = function(kilometers)
{
	return kilometers * 0.621371;
};

Utils.MilesToKilometers = function(miles)
{
	return miles * 1.609344;
};

Utils.FahrenheitToCelsius = function(fahrenheit)
{
	return (fahrenheit - 32) * 5 / 9;
};

Utils.FahrenheitToKelvin = function(fahrenheit)
{
	return (fahrenheit - 32) * 5 / 9 + 273.15;
};

Utils.CelsiusToFahrenheit = function(celsius)
{
	return (celsius * 9 / 5) + 32;
};

Utils.CelsiusToKelvin= function(celsius)
{
	return celsius + 273.15;
};

Utils.KelvinToFahrenheit = function(kelvin)
{
	return (kelvin - 273.15) * 9 / 5 + 32;
};

Utils.KelvinToCelsius = function(kelvin)
{
	return kelvin - 273.15;
};

//Latest additions

Utils.ImageToCanvas = function( image ) 
			{
				var width = image.width;
				var height = image.height;

				var canvas = document.createElement( 'canvas' );

				canvas.width = width;
				canvas.height = height;

				//alert(canvas.toDataURL("image/png"));

				var context = canvas.getContext( '2d' );
				context.drawImage( image, 0, 0, width, height );

				return canvas;
			};

Utils.CreateCanvas = function(container, image)
{
	var elem = imageToCanvas(image);
	document.getElementById(container).appendChild(elem);
};

Utils.GetDecFromHex = function(h)
{
	return eval("0x" + h.replace("#",""));
};

Utils.HexToDarkerHex = function(hex, percent) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		var value = parseInt(255 * percent);
    return this.RgbToHex("rgb(" + (parseInt(result[1], 16) - value ? parseInt(result[1], 16) - value : "00") + "," + (parseInt(result[2], 16) - value ? parseInt(result[2], 16) - value : "00") + "," + (parseInt(result[3], 16) - value ? parseInt(result[3], 16) - value : "00") + ")");
}

Utils.HexToLighterHex = function(hex, percent) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		var value = parseInt(255 * percent);
var r = parseInt(result[1], 16) + value; if(r>=255) r = 255;
var g = parseInt(result[2], 16) + value; if(g>=255) g = 255;
var b = parseInt(result[3], 16) + value; if(b >=255) b = 255;
    var ret = this.RgbToHex("rgb(" + (r ? r : "00") + "," + (g ? g : "00") + "," + (b ? b : "00") + ")");
//alert(ret);
return ret;
}

Utils.Guid = function () {
  let guid = '';
  for (let i = 0; i < 36; i++) {
    if (i === 8 || i === 13 || i === 18 || i === 23) {
      guid += '-';
    } else if (i === 14) {
      guid += '4';
    } else {
      guid += Math.floor(Math.random() * 15).toString(16);
    }
  }
  return guid;
}


Utils.GetMethods = function()
{
	return "Alert,CelsiusToFahrenheit,CelsiusToKelvin,Clone,Confirm,CountMethods,CreateCanvas,CreatePlugin,Document,Extend,FahrenheitToCelsius,FahrenheitToKelvin,GetDecFromHex,GetFileTitle,GetGradientColors,GetMethods,GetSource,GetObjectFunctions,GetObjectFunctionsParameterNames,GetType,GetVersion,Guid,GuidAlternate,HSVToRGB,Hex,HexToDarkerHex,HexToLighterHex,HexToRgb,HexToRgba,ImageToCanvas,KelvinToCelsius,KelvinToFahrenheit,KilometersToMiles,MilesToKilometers,Parse,Prompt,RGBToHSV,RandomFloatRange,RandomHexColor,RandomIntegerRange,Remove,RemoveAll,RgbToHex,RgbaToHex,Shuffle,Stringify,ToUnicode,Window,ZipFolder";
};

Utils.CountMethods = function ()
{
	return Utils.GetMethods().split(",").length;
};

// export as AMD module / Node module / browser variable
if (typeof define === 'function' && define.amd) define(Utils);
else if (typeof module !== 'undefined') module.exports = Utils;
else window.Utils = Utils;

}());

},{}]},{},[1]);