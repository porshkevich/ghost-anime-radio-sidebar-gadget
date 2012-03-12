/*
 * @class JSGadget
 */

function JSGadget() {
	var self = this;
	
	this.updatetimer = null;
	
	this.container = $('body');
	this.content = $('gadgetContent')[0];
	
	System.Gadget.settingsUI = "settings.html";
	System.Gadget.onSettingsClosed = function(){ self.onSettingsClosed; };
	
	System.Gadget.onUndock = function(){ self.onUnDock(); };
	System.Gadget.onDock = function(){ self.onDock(); };
	
	this.updatetimer = setInterval(function(){self.onUpdate}, 250);
}

JSGadget.prototype.onDock = function(){};
JSGadget.prototype.onUnDock = function(){};
JSGadget.prototype.onUpdate = function(){};

JSGadget.prototype.onSettingsClosed = function(event){
	if (event.closeAction == event.Action.commit)
	{
		//loadMain();
	}    
}

