/*
 * @class WMPlayer
 * @description Object to control the Emded Windows Media Player
 */

function WMPlayer(opt) {

	if (opt == undefined) opt = {};

	var self = this;

	var empty_callback = function(){};

    //public events
    this.onError = ( 'onError' in opt && opt.onError ) ? opt.onError : empty_callback;
    this.onStartBuffering = ( 'onStartBuffering' in opt && opt.onStartBuffering ) ? opt.onStartBuffering : empty_callback;
    this.onEndBuffering = ( 'onEndBuffering' in opt && opt.onEndBuffering ) ? opt.onEndBuffering : empty_callback;
    this.onBuffering = ( 'onBuffering' in opt && opt.onBuffering ) ? opt.onBuffering : empty_callback;
    this.onMediaChange = ( 'onMediaChange' in opt && opt.onMediaChange ) ? opt.onMediaChange : empty_callback;
	this.onOpenStateChange = ( 'onOpenStateChange' in opt && opt.onOpenStateChange ) ? opt.onOpenStateChange : empty_callback;
	this.onCurrentItemChange = ( 'onCurrentItemChange' in opt && opt.onCurrentItemChange ) ? opt.onCurrentItemChange : empty_callback;
	/*
	 * @private
	 */
	this.player = null;
	this.CLSID = '6BF52A52-394A-11d3-B153-00C04F79FAA6';
    var _bufferingTimerID = 0;
    var _url = "";



        var mplayer = '<object id="MediaPlayer1" height="0" width="0" classid="CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6" type="application/x-ms-wmp">';
            mplayer += '<param name="autoStart" VALUE="True"/>';
            mplayer += '<param NAME="URL" value=""/>';
            mplayer += '<param NAME="uiMode" value="invisible"/>';
			mplayer += '<param name="<b>SendPlayStateChangeEvents</b>" value="true"/>';
			mplayer += '<param name="<b>MediaChange</b>" value="true"/>';
            mplayer += '<EMBED type="application/x-ms-wmp" pluginspage="http://www.microsoft.com/Windows/MediaPlayer/" src="" align="top" width="0" height="0" autostart="False" autosize="0" showcontrols="0" showdisplay="0" EnableContextMenu="0" ShowStatusBar="0"></EMBED>';
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
//			  mplayer += '<SCRIPT for="MediaPlayer1" event="PlayStateChange(NewState)">';
//			  mplayer += 'alert(NewState)';
//			  mplayer += '</SCRIPT>';
        var div = document.createElement("div");
        div.id = "playerContainer";
        document.body.appendChild(div);
        div.innerHTML = mplayer;
		this.player = document.getElementById("MediaPlayer1");

		// TODO: Kill onEvent style constraction
		this.player.attachEvent('MediaChange', function(item){
			self.onMediaChange(item);
			$(self).trigger('mediachange',[item]);
		});
		this.player.attachEvent('OpenStateChange', function(item){
			self.onOpenStateChange(item);
			$(self).trigger('openstatechange',[item]);
		});
		this.player.attachEvent('CurrentItemChange', function(item){
			self.onCurrentItemChange(item);
			$(self).trigger('currentitemchange',[item]);
		});
		this.player.attachEvent('Buffering', function(start){
			self.onBuffering();
			$(self).trigger('buffering',[item]);
			if ( start ) {
				self.onBufferingStart;
				$(self).trigger('bufferingstart',[item]);
			}
			else {
				self.onBufferingEnd;
				$(self).trigger('bufferingend',[item]);
			}
		});
		this.player.attachEvent('Error', function(){
			self.onError();
			self.trigger('error');
		});
}

//public methods

// TODO check how get status of player
WMPlayer.prototype.status = function() {
	  return this.player.status;
};

WMPlayer.prototype.playURL = function(url)
{
	this._url = url;
	this.player.URL = url;
	this.player.controls.play();
}

WMPlayer.prototype.play = function()
{
	if ( this.player );
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

WMPlayer.prototype.addVolume = function(volume)
{
	this.player.settings.volume += volume;
}

/*
 * @return number
 * @type number
 */
WMPlayer.prototype.getVolume = function()
{
	return this.player.settings.volume;
}

WMPlayer.prototype.nowPlayed = function()
{
	return this.player.controls.currentItem;
}