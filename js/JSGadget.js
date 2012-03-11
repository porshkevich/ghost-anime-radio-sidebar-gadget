function JSGadget() {
	var self = this;
	
	var updatetimer = null;
	
	System.Gadget.settingsUI = "settings.html";
	System.Gadget.onSettingsClosed = function(){ self.onSettingsClosed; };
	
	System.Gadget.onUndock = function(){ self.onUnDock(); };
	System.Gadget.onDock = function(){ self.onDock(); };
}

JSGadget.prototype.onDock = function(){};
JSGadget.prototype.onUnDock = function(){};
//JSGadget.prototype.onDock = function(){};

JSGadget.prototype.onSettingsClosed = function(event){
	if (event.closeAction == event.Action.commit)
	{
		//loadMain();
	}    
}

