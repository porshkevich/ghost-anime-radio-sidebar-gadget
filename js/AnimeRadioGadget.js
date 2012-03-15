/*
 * @class
 *
 * @description
 *
 * @inherits JSGadget
 */

function AnimeRadioGadget() {

	JSGadget.call(this);

	var self = this;

	this.radio = new WMPlayer({
		onOpenStateChange: function(item){
			//log(item);
		}
	});
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
		self.onUpdateTrack(item.name);
		//log(item.name);
	});

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

AnimeRadioGadget.prototype.onUpdateTrack = function(name){
	if ( this.currenttrack == name ) return false;

	this.currenttrack = name;
	$('#trackname').html(name);
	this.scrollTrackName();
};

AnimeRadioGadget.prototype.scrollTrackName = function(){
	var self = this;

	var offset = $('#trackname')[0].offsetWidth - $('#trackinfo')[0].offsetWidth;

	if ( offset > 0 )
		$('#trackname').stop(true)
		.animate({left: -offset}, offset*20+1500)
		.delay(1000)
		.animate({left: 0}, offset*20+1500, function(){
			setTimeout(function(){self.scrollTrackName();}, 100);
		})
};