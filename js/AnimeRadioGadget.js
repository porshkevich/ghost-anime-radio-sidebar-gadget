/*
 * @class
 *
 * @description
 *
 * @inherits JSGadget
 */

function AnimeRadioGadget(opt) {

	if (opt == undefined) opt = {};

	JSGadget.call(this);

	var self = this;

	this.trackinfo = {
		name: null,
		canBeVote: false

	};

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

	$(this.cBar).bind('show', function(e){
		$('#shorttrackinfo').removeClass('down');
		//log(item.name);
	});

	$(this.cBar).bind('hide', function(e){
		$('#shorttrackinfo').addClass('down');
		//log(item.name);
	});

	this.vBar = new VoteBar({
							container: $('div#votebar')
						});
	this.vBar.stopVote();

	this.lastSwfUpdate = new Date();
	this.timeSwfUpdate = opt.timeSwfUpdate*1000;
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

AnimeRadioGadget.prototype.onVisibilityChange = function(){

	if(System.Gadget.visible) {

	}
	else {
		banner.object.Movie = "swf/";
	}

};

AnimeRadioGadget.prototype.onUpdate = function(){

	var now = new Date();
	if ( System.Gadget.visible && this.lastSwfUpdate && (now.getTime() - this.lastSwfUpdate.getTime()) >= this.timeSwfUpdate ) {
		banner.object.Movie = "swf/";
		var h = now.getHours();
		if ( h < 9 ) banner.object.Movie = "swf/morning.swf";
		else if ( h < 21 ) banner.object.Movie = "swf/day.swf";
		else banner.object.Movie = "swf/night.swf";
		this.lastSwfUpdate = now;
	}
};

AnimeRadioGadget.prototype.onUpdateTrack = function(name){
	if ( this.currenttrack == name ) return false;

	this.parseIndexTable();

//	this.vBar.newVote(this.trackinfo)
//
//
//	$('#trackname').html(name);
//	this.scrollTrackName();

	this.currenttrack = name;
};

AnimeRadioGadget.prototype.onUpdateTrackInfo = function(){



	this.vBar.newVote(this.trackinfo);


	$('#trackname').html(this.trackinfo.name);
	this.scrollTrackName();

};

AnimeRadioGadget.prototype.scrollTrackName = function(){
	var self = this;

	var offset = $('#trackname')[0].offsetWidth - $('#shorttrackinfo')[0].offsetWidth;

	if ( offset > 0 )
		$('#trackname').stop(true)
		.animate({left: -offset}, offset*20+1500)
		.delay(1000)
		.animate({left: 0}, offset*20+1500, function(){
			setTimeout(function(){self.scrollTrackName();}, 100);
		})
};

AnimeRadioGadget.prototype.parseIndexTable = function(){
	var self = this;

	$.ajax({
		type: "GET",
		url: "http://animeradio.su/ajax.php?a=index_table",
		cache: false,
		success: function(msg){
			self.trackinfo.name = $('td:contains(Сейчас в эфире) + td', msg).html();
			self.trackinfo.fromanime = $('td:contains(Трек из аниме) + td', msg).html();
			self.trackinfo.orderedby = $('td:contains(Заказчик) + td', msg).html();
			self.trackinfo.quality_s = $('td:contains(Качество вещания) + td', msg).html();
			self.trackinfo.quality_n = parseInt($('td:contains(Качество вещания) + td', msg).html(), 10);
			self.trackinfo.listeners = parseInt($('td:contains(Слушателей) + td', msg).html(), 10);
			self.trackinfo.rating = parseInt($('li.current-rating:contains(Currently)', msg).html().replace('Currently ', ''), 10);
			var ajax_data = $('input[name=ajax_data]', msg);
			if ( ajax_data.length > 0 ) {
				self.trackinfo.canBeVote = true;
				ajax_data = ajax_data[0].value.split('&');
				self.trackinfo.q = ajax_data[1];
				self.trackinfo.t = ajax_data[2];
			}
			else {
				self.trackinfo.canBeVote = false;
			}
			self.onUpdateTrackInfo();
			return false;
		},
		error: function(){
		}
	});
};