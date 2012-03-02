debugger;

jQuery.support.cors = true; 

var prevStationNum = -1;
var playing = false;
var _volume = 0;

function checkState()
{
	if(!System.Gadget.docked) 
	{
		UnDock();
	} 
	else if (System.Gadget.docked)
	{
		Dock(); 
	}
}

function Dock()
{
	backgroundId.style.width = 0;
	
	$(document.body).removeClass("undocked").addClass("docked").css({height: '100px', width: '130px'});
	backgroundId.src="url(images/docked_glass_frame.png)";
}

function UnDock()
{
	backgroundId.style.width = 0;
	
	$(document.body).removeClass("docked").addClass("undocked").css({height: '280px', width: '360px'});
	//$('#banner').css({height: '280px', width: '360px'});
	backgroundId.src="url(images/undocked_glass_frame.png)";
}

function SettingsClosed(event)
{
	if (event.closeAction == event.Action.commit)
	{
		//loadMain();
	}    
}

function Init()
{
	try {
	checkState();
	System.Gadget.settingsUI = "settings.html";
	System.Gadget.onSettingsClosed = SettingsClosed;
	System.Gadget.onUndock = checkState;
	System.Gadget.onDock = checkState;
	}
	catch(e)
	{
	}
	

	radio = new WMPlayer();
	cBar = new ControlBar({
							container: $('div#bar'),
							buttons: ['volumeDe','play','pause','volumeIn',{name:'web',callback:function(){window.open("http://animeradio.su")}}]
						});
	cBar.onPlay = function(){ 
		radio.playURL('http://animeradio.su:8000');
		this.hideButton('play');
		this.showButton('pause');
	};
	cBar.onPause = function() {
		radio.stop();
		this.hideButton('pause');
		this.showButton('play');
	};
	//$('#gadgetContent').html(dump(System.Gadget.background));
}

function SetVolume(volume)
{
	Radio.Volume(volume);
	var angl = Math.round((290 / 100) * volume);
	Volume.Rotation = angl;
	_volume = volume;
}

function draging(obj)
{
	_volume += obj.offsetMouse.x;
	if (_volume > 100)
		_volume = 100;
	if (_volume < 0)
		_volume = 0;
	SetVolume(_volume);
	SetText("Volume: "+_volume+"%");
}

function var_dump (obj) {
    var out = "";
    var obj = obj;
    function dump(obj, tab) {
     
       if(obj && typeof(obj) == "object"){
          for (var i in obj) {
             
            if(typeof(obj[i]) == "object")
            {
             out += tab+"\n"+i + "=> \n";
             dump(obj[i],'\u0009');
            }
            else
            {
            out += tab+i + ": " + obj[i] + "\n";
            }
           }
       } else {
        out = obj;
        }
   }
         
   dump(obj, '');
   return out;
}

function dump(arr,level) {
	var dumped_text = "";
	if(!level) level = 0;
	
	//The padding given at the beginning of the line.
	var level_padding = "";
	for(var j=0;j<level+1;j++) level_padding += "    ";
	
	if(typeof(arr) == 'object') { //Array/Hashes/Objects 
		for(var item in arr) {
			var value = arr[item];
			
			if(typeof(value) == 'object') { //If it is an array,
				dumped_text += level_padding + "'" + item + "' ...";
				dumped_text += "[Object]\n";//dump(value,level+1);
			} else {
				dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
			}
		}
	} else { //Stings/Chars/Numbers etc.
		dumped_text = "===>"+arr+"<===("+typeof(arr)+")";
	}
	return dumped_text;
}

function log(text) {
	$('#text > pre').append('<br />\n' + text);
}