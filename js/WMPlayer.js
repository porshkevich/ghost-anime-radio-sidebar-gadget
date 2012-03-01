function WMPlayer(opt) {
	
	if (opt == undefined) opt = {};

	var self = this;
	
    //public events
    this.onError = ( 'onError' in opt && opt.onError ) ? opt.onError : null;
    this.onStartBuffering = ( 'onStartBuffering' in opt && opt.onStartBuffering ) ? opt.onStartBuffering : null;
    this.onEndBuffering = ( 'onEndBuffering' in opt && opt.onEndBuffering ) ? opt.onEndBuffering : null;
    this.onBuffering = ( 'onBuffering' in opt && opt.onBuffering ) ? opt.onBuffering : null;
    
	/*
	 * @private 
	 */
	this.player = null;
	this.CLSID = '6BF52A52-394A-11d3-B153-00C04F79FAA6';
    var _bufferingTimerID = 0;
    var _url = "";
	
	

        var mplayer = '<object id="MediaPlayer1" height="0" width="0" classid="CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6">';
            mplayer += '<param name="autoStart" VALUE="True"/>';
            mplayer += '<param NAME="URL" value=""/>';
            mplayer += '<param NAME="uiMode" value="invisible"/>';
            mplayer += '<EMBED type="application/x-mplayer2" pluginspage="http://www.microsoft.com/Windows/MediaPlayer/" src="" align="top" width="0" height="0" autostart="False" autosize="0" showcontrols="0" showdisplay="0" EnableContextMenu="0" ShowStatusBar="0"></EMBED>';
            mplayer += '</object>';
//            mplayer += '<SCRIPT LANGUAGE = "JScript"  FOR = MediaPlayer1  EVENT = error()>';
//            mplayer += '    Radio._Error();';
//            mplayer += '</SCRIPT>';
//            mplayer += '<SCRIPT LANGUAGE = "JScript"  FOR = MediaPlayer1  EVENT = buffering(Start)>'
//            mplayer += '    Radio._Buffering(Start);';
//            mplayer += '</SCRIPT>'
//            mplayer += '<SCRIPT LANGUAGE = "JScript"  FOR = MediaPlayer1  EVENT = StatusChange()>'
//            mplayer += '    Radio._Status();' 
//            mplayer += '</SCRIPT>'
        var div = document.createElement("div");
        div.id = "playerContainer";
        document.body.appendChild(div);
        div.innerHTML = mplayer;
		this.player = document.getElementById("MediaPlayer1");

}

WMPlayer.prototype._Error = function() {
	if (this.OnError)
		this.OnError();
};

WMPlayer.prototype._Status = function() {
	  return this.player.status;
};

WMPlayer.prototype._updateBuffering = function()
{
	if (this.OnBuffering)
		this.OnBuffering(this.player.network.bufferingProgress);
};

WMPlayer.prototype._Buffering = function(start)
{
	if (true == start){ 
		if (this.OnStartBuffering)
			Radio.OnStartBuffering();
		_bufferingTimerID = window.setInterval("Radio._updateBuffering()", 1);
   }
   else {
	  if (Radio.OnEndBuffering)
		Radio.OnEndBuffering()
	  window.clearInterval(_bufferingTimerID);
   }
}

//public methods
WMPlayer.prototype.init = function()
{
	var mplayer = '<object id="MediaPlayer" height="0" width="0" classid="' + this._CLSID + '">';
		mplayer += '<param name="autoStart" VALUE="True"/>';
		mplayer += '<param NAME="URL" value=""/>';
		mplayer += '<param NAME="uiMode" value="invisible"/>';
		mplayer += '<EMBED type="application/x-mplayer2" pluginspage="http://www.microsoft.com/Windows/MediaPlayer/" src="" align="top" width="0" height="0" autostart="False" autosize="0" showcontrols="0" showdisplay="0" EnableContextMenu="0" ShowStatusBar="0"></EMBED>';
		mplayer += '</object>';
//		mplayer += '<SCRIPT LANGUAGE = "JScript"  FOR = MediaPlayer1  EVENT = error()>';
//		mplayer += '    Radio._Error();';
//		mplayer += '</SCRIPT>';
//		mplayer += '<SCRIPT LANGUAGE = "JScript"  FOR = MediaPlayer1  EVENT = buffering(Start)>'
//		mplayer += '    Radio._Buffering(Start);';
//		mplayer += '</SCRIPT>'
//		mplayer += '<SCRIPT LANGUAGE = "JScript"  FOR = MediaPlayer1  EVENT = StatusChange()>'
//		mplayer += '    Radio._Status();'
//		mplayer += '</SCRIPT>'
	var div = document.createElement("div");
	div.id = "playerContainer";
	document.body.appendChild(div);
	div.innerHTML = mplayer;
	var mp = document.getElementById("MediaPlayer");
}

WMPlayer.prototype.playURL = function(url)
{
	this._url = url;
	this.player.URL = url;
	this.player.controls.play();
}

WMPlayer.prototype.play = function()
{
	if (this._url)
	{
		this.player.URL = this._url;
		this.player.controls.play();
	}        
}

WMPlayer.prototype.stop = function()
{
	this.player.controls.stop();
}

WMPlayer.prototype.setVolume = function(volume)
{
	this.player.settings.volume = volume;
}

/*
 * @return number
 * @type number
 */
WMPlayer.prototype.getVolume = function()
{
	return this.player.settings.volume;
}