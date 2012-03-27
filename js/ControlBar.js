function ControlBar(opt) {
	var i;
	var self = this;

	 this.defaultButtons = ['volumeDe','play','pause','volumeIn','web'];

	/*
	 * @private
	 */
	this.timerId = null;

	if (opt.container != undefined) {
		this.container = $(opt.container, {
			id: 'bar',
			opacity: 0,
			focusin: this.showBar,
			focusout: this.hideBar});
	}
	else
	{
		this.container = $('<div/>', {
			id: 'bar',
			opacity: 0,
			focusin: this.showBar,
			focusout: this.hideBar});
	}

	// ToDo: пїЅпїЅпїЅпїЅ пїЅпїЅпїЅ пїЅпїЅпїЅпїЅпїЅпїЅпїЅ пїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅ пїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅ пїЅпїЅпїЅпїЅпїЅ 1
	this.container.animate({opacity: 0},'fast');

	$('body').mouseover(function(){self.showBar()});
	$('body').mouseout(function(){self.hideBar()});

	this.buttonDefine(opt.buttons == undefined ? this.defaultButtons : opt.buttons);

	this.hideButton('pause');
}

ControlBar.prototype.showBar = function(){
	$(this).trigger('show');
	this.container.stop(true).animate({opacity: 0.7},'slow');
};

ControlBar.prototype.hideBar = function(){
	var self = this;
	this.container.stop(true).animate({opacity: 0},'slow', function(){$(self).trigger('hide');});

};

ControlBar.prototype.action = function(action){
	if (console.log) console.log(action);
};

ControlBar.prototype.onButtonClick = function(button){
	if ( button != undefined && button.action != undefined && button.action != null ) {

		var self = this;

		var actionFunction = 'on' + button.action;

		if ( this[actionFunction] ) this[actionFunction](button);
	}


	if (window.console != undefined && console.log) console.log(button.action);
	//if (log) log(action);
};

ControlBar.prototype.onButtonDown = function(button){
	clearInterval(this.timerId);
	if ( button != undefined && button.action != undefined && button.action != null ) {
		var self = this;
		/*
		 *  TODO: Back to the direct challenge to the 'on' event
		 */
		this.timerId = setInterval(function(){self.onButtonClick(button)}, 250);
	}
};

ControlBar.prototype.onButtonUp = function(){
	//var self = this;
	clearInterval(this.timerId);
};

ControlBar.prototype.buttonDefine = function(buttons){

	var self = this;

	if ( this.buttons == undefined ) this.buttons = {};

	for ( var i=0, iLen=buttons.length ; i<iLen ; i++ ) {
		if ( typeof buttons[i] == "string" ){
			if ( ControlBar.Buttons[buttons[i]] == undefined ) {
				log('Undefined Button');
				continue;
			}
			this.buttons[buttons[i]] = $.extend({}, ControlBar.Button, ControlBar.Buttons[buttons[i]]);
		}
		else if ( typeof buttons[i] == "object" ) {
			if ( ControlBar.Buttons[buttons[i].name] == undefined ) {
				this.buttons[buttons[i].name] = $.extend({}, ControlBar.Button, ControlBar.Buttons['default'], buttons[i]);
			}
			else {
				this.buttons[buttons[i].name] = $.extend({}, ControlBar.Button, ControlBar.Buttons[buttons[i].name], buttons[i]);
			}
		}
	}

	//this.buttons = $.extend(true, this.buttons, buttons, this.defaultButtons);

	for (var id in this.buttons)
	{
		this.buttons[id].img = $('<img />',{
			'id': 'bar_' + this.buttons[id].name,
			src: 'images/'+this.buttons[id].name+'_rest.png',
			border: 0,
			hspace: 3
		})
		.mouseover({src:'images/'+self.buttons[id].name+'_hov.png'},function(e){
				this.src=e.data.src;
		})
		.mouseout({src:'images/'+self.buttons[id].name+'_rest.png'},function(e){
				this.src=e.data.src;
				self.onButtonUp();
		})
		.click({CBarButton:this.buttons[id]},function(e){self.onButtonClick(e.data.CBarButton)})
		.mousedown({CBarButton:this.buttons[id]},function(e){self.onButtonDown(e.data.CBarButton)})
		.mouseup(function(e){self.onButtonUp()})
		.appendTo(this.container);

		if ( this.buttons[id].callback ) this['on'+this.buttons[id].action] = this.buttons[id].callback;
	}
}

ControlBar.prototype.hideButton = function(button) {
	if ( this.buttons[button] ) this.buttons[button].hide();
}

ControlBar.prototype.showButton = function(button) {
	if ( this.buttons[button] ) this.buttons[button].show();
}

ControlBar.Buttons = {
	volumeIn:	{
		name:'volumeIn',
		action:'VolumeIncrease'
	},
	play:	{
		name:'play',
		action:'Play'
	},
	pause:	{
		name:'pause',
		action:'Pause'
	},
	volumeDe:	{
		name:'volumeDe',
		action:'VolumeDecrease'
	},
	web:	{
		name:'web',
		action:'Web'
	},
	'default':	{
		name:'default',
		action: null
	}
};

ControlBar.Button = {
	hide:	function() {
		this.img.hide();
	},
	show:	function() {
		this.img.show();
	}
};