function VoteBar(opt) {
	var i;
	var self = this;

	 this.defaultButtons = [
		 {name:'vote',j:1},
		 {name:'vote',j:2},
		 {name:'vote',j:3},
		 {name:'vote',j:4},
		 {name:'vote',j:5},
		 {name:'vote',j:6},
		 {name:'vote',j:7},
		 {name:'vote',j:8}
	 ];

	/*
	 * @private
	 */
	this.timerId = null;

	if ( opt != undefined ) {
		for ( var key in opt ) {
			if ( this[key] == undefined || this[key] == null )
				this[key] = opt[key];
		}
	}

	if (this.container == undefined) {
		this.container = $('<div/>', {
			id: 'bar',
			opacity: 0,
			focusin: this.showBar,
			focusout: this.hideBar});
	}

	this.container.animate({opacity: 0},'fast');

	$('body').mouseover(function(){self.showBar()});
	$('body').mouseout(function(){self.hideBar()});

	this.buttonDefine(this.buttons == undefined ? this.defaultButtons : this.buttons);

	this.hideButton('pause');
}

VoteBar.prototype.showBar = function(){
	$(this).trigger('show');
	this.container.stop(true).animate({opacity: 0.8},'slow');
};

VoteBar.prototype.hideBar = function(){
	var self = this;
	this.container.stop(true).animate({opacity: 0},'slow', function(){$(self).trigger('hide');});

};

VoteBar.prototype.action = function(action){
	if (console.log) console.log(action);
};

VoteBar.prototype.onButtonClick = function(button){
	if ( button != undefined && button.action != undefined && button.action != null ) {

		var self = this;

		var actionFunction = 'on' + button.action;

		if ( this[actionFunction] ) this[actionFunction](button);
	}
};

VoteBar.prototype.buttonDefine = function(buttons){

	var self = this;

	if ( this.buttons == undefined ) this.buttons = {};

	for ( var i=0, iLen=buttons.length ; i<iLen ; i++ ) {
		if ( typeof buttons[i] == "string" ){
			if ( VoteBar.Buttons[buttons[i]] == undefined ) {
				log('Undefined Button');
				continue;
			}
			this.buttons[i] = $.extend({}, VoteBar.Button, VoteBar.Buttons[buttons[i]]);
		}
		else if ( typeof buttons[i] == "object" ) {
			if ( VoteBar.Buttons[buttons[i].name] == undefined ) {
				this.buttons[i] = $.extend({}, VoteBar.Button, VoteBar.Buttons['default'], buttons[i]);
			}
			else {
				this.buttons[i] = $.extend({}, VoteBar.Button, VoteBar.Buttons[buttons[i].name], buttons[i]);
			}
		}
	}

	//this.buttons = $.extend(true, this.buttons, buttons, this.defaultButtons);

	for (var id in this.buttons)
	{
		this.buttons[id].img = $('<img />',{
			'id': 'bar_' + this.buttons[id].name + '_' + id,
			src: 'images/'+this.buttons[id].name+'_rest.png',
			'class': 'votebutton'
		})
//		.mouseover({src:'images/'+self.buttons[id].name+'_hov.png'},function(e){
//				this.src=e.data.src;
//		})
//		.mouseout({src:'images/'+self.buttons[id].name+'_rest.png'},function(e){
//				this.src=e.data.src;
//		})
		.hover(
			function(){
				if ( self.polled ) return;
				var id = this.id;
				$('.votebutton').filter(function(index){
					return this.id <= id;
				}).addClass('hover');
			},
			function(){
				$('.votebutton').removeClass('hover');
			})
		.click({VBarButton:this.buttons[id]},function(e){self.onButtonClick(e.data.VBarButton)})
		.appendTo(this.container);

		if ( this.buttons[id].callback ) this['on'+this.buttons[id].action] = this.buttons[id].callback;
	}
}

VoteBar.prototype.hideButton = function(button) {
	if ( this.buttons[button] ) this.buttons[button].hide();
}

VoteBar.prototype.showButton = function(button) {
	if ( this.buttons[button] ) this.buttons[button].show();
}

VoteBar.prototype.newVote = function(trackinfo) {
	this.polled = !trackinfo.canBeVote;
	this.trackinfo = trackinfo;
	var id = 'bar_vote_'+(trackinfo.rating-1);
	$('.votebutton').removeClass('polled').filter(function(index){
		return this.id <= id;
	}).addClass('polled');
	this.container.show();
}

VoteBar.prototype.onVote = function(button) {
	if ( !this.polled )	{
		this.polled = true;
		$('.votebutton').removeClass('hover');

		$.ajax({
			type: "GET",
			url: "http://animeradio.su/ajax.php?a=index_rating_rpc",
			cache: false,
			data: {
				j: button.j,
				q: this.trackinfo.q,
				t: this.trackinfo.t,
				c: 8
			}
		});
	}
}


VoteBar.prototype.stopVote = function() {
	this.polled = true;
	this.container.hide();
}

VoteBar.Buttons = {
	vote:	{
		name:	'vote',
		action:	'Vote',
		j:		0
	},
	'default':	{
		name:	'default',
		action: null
	}
};

VoteBar.Button = {
	hide:	function() {
		this.img.hide();
	},
	show:	function() {
		this.img.show();
	}
};