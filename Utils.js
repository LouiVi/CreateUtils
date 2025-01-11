app.CreateUtils = function() {
	return app.CreateObject( "\u0055\u0074\u0069\u006c\u0073" );
}

function Utils() {
var self = this;
self.Alert = function( msg ){_utils.Alert(msg);};
self.ForceDownload = function (url, fileName) {  _utils.ForceDownload(url, fileName);}
self.Prompt = function( msg, dflt ){return _utils.Prompt(msg, dflt);};
self.Confirm = function( msg ){return _utils.Confirm(msg);};
self.RealPath = function() {return _utils.RealPath();};
self.GetVersion = function( num, txt ) { return _utils.GetVersion(num, txt);};
self.GetSource = function( ){ return _utils.GetSource(); };
self.Document = function() { return _utils.Document();};
self.Window = function() { return _utils.Window();};
self.Stringify = function( str ) { return _utils.Stringify(str);};
self.Parse = function( str ) { return _utils.Parse(str);};
self.ToUnicode = function( string ) { return _utils.ToUnicode(string);};
self.HexToRgb = function( hex ) { return _utils.HexToRgb(hex);};
self.HexToRgba = function( hex ) { return _utils.HexToRgba(hex);};
self.RgbToHex = function( rgb ) { return _utils.RgbToHex(rgb);};
self.RgbaToHex = function( rgba ) { return _utils.RgbaToHex(rgba);};
self.GetObjectFunctionsParameterNames = function( func ) { return _utils.GetObjectFunctionsParameterNames(func);};
self.GetObjectFunctionsParameterTypes = function( func ) { return _utils.GetObjectFunctionsParameterTypes(func);};
self.GetObjectFunctions = function( objName ) { return _utils.GetObjectFunctions(objName);};
self.Clone = function( obj ) { return _utils.Clone(objName);};
self.Remove = function( array, item ) { return _utils.Remove(array, item);};
self.RemoveAll = function( array ) { return _utils.RemoveAll(array);};
self.GetFileTitle = function( fileName, noExtension ) { return _utils.GetFileTitle(fileName, noExtension);};
self.RandomIntegerRange = function( rFrom, rTo ) { return _utils.RandomIntegerRange(rFrom, rTo);};
self.RandomFloatRange = function( from /* Starting range */, to /* Ending Range*/) { return _utils.RandomFloatRange(from /* Starting range */, to /* Ending Range*/);};
self.RandomHexColor = function( withAlpha ) { return _utils.RandomHexColor(withAlpha);};
self.Shuffle = function( array ) { return _utils.Shuffle(array);};
self.Hex = function( s ) { return _utils.Hex(s);};
self.HSVToRGB = function( hh, ss, vv ) { return _utils.HSVToRGB(hh, ss, vv);};
self.RGBToHSV = function( rr, gg, bb ) { return _utils.RGBToHSV(rr, gg, bb);};
self.Extend = function( o ) { return _utils.Extend(o);};
self.KilometersToMiles= function( kilometers ) { return _utils.KilometersToMiles(kilometers);};
self.MilesToKilometers = function( miles ) { return _utils.MilesToKilometers(miles);};
self.FahrenheitToCelsius = function( fahrenheit ) { return _utils.FahrenheitToCelsius(fahrenheit);};
self.FahrenheitToKelvin = function( fahrenheit ) { return _utils.FahrenheitToKelvin(fahrenheit);};
self.CelsiusToFahrenheit = function( celsius ) { return _utils.CelsiusToFahrenheit(celsius);};
self.CelsiusToKelvin = function( celsius ) { return _utils.CelsiusToKelvin(celsius);};
self.KelvinToCelsius= function( kelvin ) { return _utils.KelvinToCelsius(kelvin);};
self.KelvinToFahrenheit = function( kelvin ) { return _utils.KelvinToFahrenheit(kelvin);};
self.GetType = function() { return _utils.GetType();};
self.GetMethods = function() { return _utils.GetMethods();};
self.ImageToCanvas = function(img) { return _utils.ImageToCanvas(img);};
self.CreateCanvas = function(cont, img) { return _utils.CreateCanvas(cont, img);};
self.GetDecFromHex = function(h) { return _utils.GetDecFromHex(h);};
self.HexToDarkerHex = function(hex, percent) { return _utils.HexToDarkerHex(hex, percent);};
self.HexToLighterHex = function(hex, percent) { return _utils.HexToLighterHex(hex, percent);};
self.Guid = function () { return _utils.Guid();}
self.GuidAlternate = function () { return _utils.GuidAlternate();}
self.GetGradientColors = function (colors) { return _utils.GetGradientColors(colors);}
self.CreatePlugin = function (name) { _utils.CreatePlugin(name);}
self.ZipFolder = function (source, destination) { _utils.ZipFolder(source,destination);}
self.CountMethods = function () { return _utils.CountMethods();}
self.SetTimeout = function (funcName, interval) { return _utils.SetTimeout(funcName, interval);}
self.SetInterval = function (funcName, interval) { return _utils.SetInterval(funcName, interval);}
self.MakePlugin = function ( name ) { _utils.MakePlugin( name );}
self.SetTheme = function ( themeColor ) { _utils.SetTheme( themeColor );}
self.GetCookie = function ( cname ) { return _utils.GetCookie( cname  );}
self.SetCookie = function (cname, cvalue, exdays) { _utils.SetCookie(cname, cvalue, exdays);}
self.GetLocalStorage= function (lsKey, lsIndex) { return _utils.GetLocalStorage(lsKey, lsIndex);}
self.GetSessionStorage= function (lsKey, lsIndex) { return _utils.GetSessionStorage(lsKey, lsIndex);}
self.StringToBinary= function (str) { return _utils.StringToBinary(str);}
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

Utils.StringToBinary = function(str) {
    return str.split('').map(char => {
        return char.charCodeAt(0).toString(2).padStart(8, '0');
    }).join('');
};

Utils.Alert = function(msg) {
	alert(msg);
};

Utils.GetType = function() {
	return "Utils";
};

Utils.RealPath = function() {
	return "/storage/emulated/0/";
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

Utils.GetLocalStorage = function(lsKey, lsIndex) {
        var ls = localStorage;
        if(ls && ls.getItem(lsKey) ) {
            var lsValue = ls.getItem(lsKey);
            var lsArray = JSON.parse(lsValue);
            if( lsArray['data'] != undefined && lsArray['data'][lsIndex] != undefined){
                return lsArray['data'][lsIndex];
            }
        }
        return '';
}

Utils.GetSessionStorage = function(lsKey, lsIndex) {
        var ls = sessionStorage;
        if(ls && ls.getItem(lsKey) ) {
            var lsValue = ls.getItem(lsKey);
            var lsArray = JSON.parse(lsValue);
            if( lsArray['data'] != undefined && lsArray['data'][lsIndex] != undefined){
                return lsArray['data'][lsIndex];
            }
        }
        return '';
}

Utils.CreatePlugin = function(name) {
if(!app.FileExists(  app.GetAppPath() + "/" +  name + ".js")) {
var template = app.ReadFile( "/data/user/0/com.smartphoneremote.androidscriptfree/app_Plugins/utils/Misc/PluginTemplate.txt" );
template = template.replace("#TOUNICODE#", Utils.ToUnicode(name));
for(var c=0;c<10;c++) {
template = template.replace("#NAME#", name);
  template = template.replace("#name#", name.toLowerCase());
}
app.WriteFile(app.GetAppPath() + "/" +  name + ".js", template );
ide.MakePlugin(name);
} else {
ide.MakePlugin(name);
}
};

Utils.GuidAlternate = function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};  


Utils.Prompt = function(msg, dflt) {
	return prompt(msg, dflt);
};

Utils.Confirm = function(msg) {
	return confirm(msg);
};

Utils.SetTimeout = function(funcName, interval) {
	setTimeout(funcName, interval);
};

Utils.SetInterval = function(funcName, interval) {
	return setInterval(funcName, interval);
};

Utils.GetVersion = function( num, txt ) {
	return "1.69.71";
};

Utils.GetSource = function() {
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

Utils.SetCookie = function(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  this.Document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

Utils.GetCookie = function(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};


Utils.ToUnicode = function( string ) {
    return string.replace(/[\s\S]/g, function (escape) {
       return '\\u' + ('0000' + escape.charCodeAt().toString(16)).slice(-4);
    });
};
 
Utils.HexToRgb = function(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return "rgb(" + parseInt(result[1], 16) + "," + parseInt(result[2], 16) + "," + parseInt(result[3], 16) + ")";
};
 
Utils.HexToRgba = function(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return "rgba(" + parseInt(result[2], 16) + "," + parseInt(result[3], 16) + "," + parseInt(result[4], 16) + "," + parseInt(result[1], 16) + ")";
};
 
Utils.RgbToHex = function(rgb) {
    var result = rgb.match(/\d+/g);
    function hex(x) {
        var digits = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F");
        return isNaN(x) ? "00" : digits[(x - x % 16 ) / 16] + digits[x % 16];
    };
    return "#" + hex(result[0]) + hex(result[1]) + hex(result[2]);
};
 
Utils.RgbaToHex = function(rgba) {
    var result = rgba.match(/\d+/g);
    function hex(x) {
        var digits = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F");
        return isNaN(x) ? "00" : digits[(x - x % 16 ) / 16] + digits[x % 16];
    };
    return "#" + hex(result[3]) + hex(result[0]) + hex(result[1]) + hex(result[2]);
};

Utils.GetGradientColors = function(color) {
let r = parseInt(color.slice(1,3), 16);
let g = parseInt(color.slice(3,5), 16);
  let b = parseInt(color.slice(5,7), 16);
  let lightR = Math.min(r + 50, 255);
  let lightG = Math.min(g + 50, 255);
  let lightB = Math.min(b + 50, 255);
  let darkR = Math.max(r - 50, 0);
  let darkG = Math.max(g - 50, 0);
  let darkB = Math.max(b - 50, 0);
  let lightColor = Utils.RgbToHex(`rgb(${lightR}, ${lightG}, ${lightB})`);
  let darkColor = Utils.RgbToHex(`rgb(${darkR}, ${darkG}, ${darkB})`);
  return [lightColor, darkColor];
};

Utils.GetObjectFunctionsParameterNames = function( func ) {
  if( func ) {
      var STRIP_COMMENTS =  /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
      var ARGUMENT_NAMES = /([^\s,]+)/g;
      var fnStr = func.toString().replace(STRIP_COMMENTS, '');
      var result = fnStr.slice(fnStr.indexOf('(')+1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
      if(result === null) result = [];
      return result;
    }
};
Utils.GetObjectFunctionsParameterTypes = function( func ) {
  if( func ) {
      var STRIP_COMMENTS =  /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
      var ARGUMENT_NAMES = /([^\s,]+)/g;
      var fnStr = func.toString().replace(STRIP_COMMENTS, '');
      var result = typeof fnStr.slice(fnStr.indexOf('(')+1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
      if(result === null) result = [];
      return result;
    }
};

Utils.GetObjectFunctions = function( objName ) {
  var obj;
    if(typeof objName === 'object') {
    obj = objName;
    } else {
obj = eval("new "+objName+"()") ? eval("new "+objName+"()") : eval(objName);
}
var list = [];
    for (var Key in obj) {
      if (obj.hasOwnProperty(Key) && (typeof obj[Key] === 'function')) {
        list.push(Key);
      }
    }
    list.sort();
    return list;
};

Utils.Clone = function( obj ) {
  return JSON.parse(JSON.stringify(obj));
};

Utils.Remove = function( array, item ) {
    var i = array.indexOf( item );
    if( i>-1 ) array.splice( i, 1 );
};

Utils.RemoveAll = function( array ) {
while(array.length>0) {
array.pop();
}
};

Utils.GetFileTitle = function( fileName, noExtension ) {
var title = fileName.substr( fileName.lastIndexOf("/")+1 );
    if( noExtension ) title = title.substr( 0, title.lastIndexOf(".") );
    return title;
};

Utils.RandomIntegerRange = function(rFrom, rTo) {
return rFrom + Math.floor(Math.random() * (rTo - rFrom));
};

Utils.RandomFloatRange = function(from /* Starting range */, to /* Ending Range*/) {
return from + (Math.random() * (to - from));
};

Utils.RandomHexColor = function(withAlpha) {
    var letters = '0123456789ABCDEF';
    var color = '#';
    var j = 6;
    if(withAlpha) j = 8;
for (var i = 0; i < j; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

Utils.Shuffle = function( array ) {
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

Utils.Hex = function(s) {
var string = "";
string=s.toString(16).toLowerCase().slice(0,2);
if(string.length<2||string[1]==".")
string="0"+string[0];
return string;
};

Utils.HSVToRGB = function (hh,ss,vv) {
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

Utils.KilometersToMiles = function(kilometers) {
return kilometers * 0.621371;
};

Utils.MilesToKilometers = function(miles) {
return miles * 1.609344;
};

Utils.FahrenheitToCelsius = function(fahrenheit) {
return (fahrenheit - 32) * 5 / 9;
};

Utils.FahrenheitToKelvin = function(fahrenheit) {
return (fahrenheit - 32) * 5 / 9 + 273.15;
};

Utils.CelsiusToFahrenheit = function(celsius) {
return (celsius * 9 / 5) + 32;
};

Utils.CelsiusToKelvin= function(celsius) {
return celsius + 273.15;
};

Utils.KelvinToFahrenheit = function(kelvin) {
return (kelvin - 273.15) * 9 / 5 + 32;
};

Utils.KelvinToCelsius = function(kelvin) {
return kelvin - 273.15;
};

Utils.ImageToCanvas = function( image ) {
var width = image.width;
var height = image.height;
var canvas = this.Document.createElement( 'canvas' );
canvas.width = width;
canvas.height = height;
var context = canvas.getContext( '2d' );
context.drawImage( image, 0, 0, width, height );
return canvas;
};

Utils.CreateCanvas = function(container, image) {
var elem = self.imageToCanvas(image);
this.Document.getElementById(container).appendChild(elem);
};

Utils.GetDecFromHex = function(h) {
return eval("0x" + h.replace("#",""));
};

Utils.HexToDarkerHex = function(hex, percent) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
var value = parseInt(255 * percent);
    return this.RgbToHex("rgb(" + (parseInt(result[1], 16) - value ? parseInt(result[1], 16) - value : "00") + "," + (parseInt(result[2], 16) - value ? parseInt(result[2], 16) - value : "00") + "," + (parseInt(result[3], 16) - value ? parseInt(result[3], 16) - value : "00") + ")");
};

Utils.HexToLighterHex = function(hex, percent) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
var value = parseInt(255 * percent);
var r = parseInt(result[1], 16) + value; if(r>=255) r = 255;
var g = parseInt(result[2], 16) + value; if(g>=255) g = 255;
var b = parseInt(result[3], 16) + value; if(b >=255) b = 255;
    var ret = this.RgbToHex("rgb(" + (r ? r : "00") + "," + (g ? g : "00") + "," + (b ? b : "00") + ")");
return ret;
};
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
};


Utils.GetMethods = function() {
	return this.GetObjectFunctions(this).join(",");
};

Utils.CountMethods = function () {
	return this.GetMethods().split(",").length;
};

Utils.ForceDownload = function (url, fileName) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.responseType = "blob";
	xhr.onload = function() {
		var urlCreator = this.Window.URL || this.Window.webkitURL;
		var imageUrl = urlCreator.createObjectURL(this.response);
		var tag = this.Document.createElement("a");
		tag.href = imageUrl;
		tag.download = fileName;
		this.Document.body.appendChild(tag);
		tag.click();
		this.Document.body.removeChild(tag);
	};
	xhr.send();
};

Utils.SetTheme = function(themeColor){
	app.SetStatusBarColor(  themeColor);
	app.SetNavBarColor( themeColor );
};

//Build and install a plugin using current project.
Utils.MakePlugin = function( name ) {
    //Do nothing in APKs.
    if( app.IsAPK() ) return
   
    //Check for name clash.
    if( name.toLowerCase() == app.GetAppName().toLowerCase() ) {
        alert( "Plugin name cannot be same as App name!" )
        return
    }
   
    //Remove spaces from name.
    name = name.replaceAll(" ","")
    var lname = name.toLowerCase()
   
    //Get plugin dir and app dir.
    app.ShowProgress()
    var plugDir = app.GetPrivateFolder("Plugins")+"/"+lname
    app.MakeFolder( plugDir )
    var appDir = app.GetAppPath()
   
    //Add important missing files.
    var refresh = false
    if( !app.FileExists( appDir+"/Version.txt" ) ) {
        app.WriteFile( appDir+"/Version.txt","1.0")
        refresh = true
    }
    if( !app.FileExists( appDir+"/"+name+".html" ) ) {
        var s = app.ReadFile( "/Sys/ide/plugin.html" );
        s = s.replaceAll( "%NAME%", name )
        app.WriteFile( appDir+"/"+name+".html", s )
        refresh = true
    }
    if( !app.FileExists( appDir+"/"+name+".js" ) ) {
        var s = app.ReadFile( "/Sys/ide/plugin.js" );
        s = s.replaceAll( "%NAME%", name )
        app.WriteFile( appDir+"/"+name+".js", s )
        refresh = true
    }
    if( !app.FileExists( appDir+"/Img/"+name+".png" ) ) {
        app.MakeFolder( appDir+"/Img" )
        app.CopyFile( "/Sys/ide/plugin.png", appDir+"/Img/"+name+".png" )
        refresh = true
    }
    if( refresh ) {
        alert( "Some missing plugin files were auto-generated." +
            " Please refresh this project to see them, then re-run it" )
        app.Exit()
		return
    }
           
    //Copy files to plugins dir.
    app.CopyFolder( appDir, plugDir, true )
    app.DeleteFile( plugDir+"/"+app.GetAppName()+".js" )
   
    //Build plugin zip file.
    var ppkDir = app.GetPath()+"/PPKs"
    app.MakeFolder( ppkDir )
    app.ZipFolder( plugDir, ppkDir+"/"+name+".ppk" )
   
    //Copy plugin docs to wifi editor.
	var docsDir = app.GetPath()+"/.edit/docs/plugins/"+lname;
	app.CopyFolder( plugDir, docsDir, true );
	var implFiles = app.ListFolder(docsDir, ".*\.jar|.\.*inc|.*\.dat|.*\.zip",
		   null, "regex,files,fullpath");
	for(var i in implFiles) app.DeleteFile( implFiles[i] );
   
    //Show finished message and exit.
    app.HideProgress()
    app.ShowPopup( "Plugin installed\n\n"+ name
        + ".ppk created in folder:\n /DroidScript/PPKs", "long" )
};

// export as AMD module / Node module / browser variable
if (typeof define === 'function' && define.amd) define(Utils);
else if (typeof module !== 'undefined') module.exports = Utils;
else window.Utils = Utils;

}());

},{}]},{},[1]);