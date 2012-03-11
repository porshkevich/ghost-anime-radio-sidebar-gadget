/*
 * @class AnimeRadioGadget
 * @inherits JSGadget
 */

function AnimeRadioGadget() {
	JSGadget.apply(this, arguments);
	
	var self = this;
	
	this.radio = new WMPlayer();
	this.cBar = new ControlBar({
							container: $('div#bar'),
							buttons: ['volumeDe','play','pause','volumeIn',{name:'web',callback:function(){window.open("http://animeradio.su")}}]
						});
	this.cBar.onPlay = function(){ 
		self.radio.playURL('http://animeradio.su:8000');
		this.hideButton('play');
		this.showButton('pause');
	};
	this.cBar.onPause = function() {
		self.radio.stop();
		this.hideButton('pause');
		this.showButton('play');
	};
	this.cBar.onVolumeDecrease = function() {
		self.radio.addVolume(-5);
	};
	this.cBar.onVolumeIncrease = function() {
		self.radio.addVolume(5);
	};
	
	$(this.radio).bind('mediachange', function(e, item){
		log(item.name);
	});
	this.radio.onOpenStateChange = function(item){
		log(item);
	}
}

AnimeRadioGadget.prototype = new JSGadget();
AnimeRadioGadget.prototype.constructor = AnimeRadioGadget;

AnimeRadioGadget.prototype.onDock = function(){
	backgroundId.style.width = 0;
	
	$(document.body).removeClass("undocked").addClass("docked").css({height: '100px', width: '130px'});
	backgroundId.src="url(images/docked_glass_frame.png)";
};
AnimeRadioGadget.prototype.onUnDock = function(){
	backgroundId.style.width = 0;
	
	$(document.body).removeClass("docked").addClass("undocked").css({height: '280px', width: '360px'});
	//$('#banner').css({height: '280px', width: '360px'});
	backgroundId.src="url(images/undocked_glass_frame.png)";
};