/*
 * @class
 *
 * @description
 */

function HotkeyControl()
{
    this.initializeInterop();
    this.hotkeyCtrl = new ActiveXObject("Indev.HotkeyControl");
}

// Public variables

MOD_ALT = 1;
MOD_CONTROL = 2;
MOD_SHIFT = 4;
MOD_WIN = 8;

// Public functions

HotkeyControl.prototype.addHotkey = function(modifiers, vkey, targetWindow, callback)
{
    return this.hotkeyCtrl.AddJScriptCallbackHotkey(modifiers, vkey, targetWindow, callback);
}

HotkeyControl.prototype.removeHotkey = function(hotkeyId)
{
    this.hotkeyCtrl.RemoveJScriptHotkey(hotkeyId);
}

HotkeyControl.prototype.getCodeFromString = function(str)
{
    var arr = str.split(",");
    var retObj = new Array();
    retObj["modifier"] = parseInt(arr[0]);
    retObj["vkey"] = parseInt(arr[1]);
    return retObj;
}

HotkeyControl.prototype.getStringFromCode = function(modifier, vkey)
{
    return modifier + "," +vkey;
}

// Private functions

HotkeyControl.prototype.initializeInterop = function()
{
    if(!this.interopRegistered())
    {
        try
        {
            this.register("HKCR\\");
        }
        catch(e)
        {
            try
            {
                this.register("HKCU\\Software\\Classes\\");
            }
            catch(e)
            {
            }
        }
    }
}

HotkeyControl.prototype.interopRegistered = function()
{
    try
    {
        var proxy = new ActiveXObject("Indev.HotkeyControl");
        proxy = null;
        return true;
    }
    catch (e)
    {
        return false;
    }
}

HotkeyControl.prototype.register = function(root)
{
    var codeBase;
    if(System.Machine.processorArchitecture.indexOf("64") != -1)
    {
        codeBase = System.Gadget.path + "\\dlls\\HotkeyControl64.dll";
    }
    else
    {
        codeBase = System.Gadget.path + "\\dlls\\HotkeyControl32.dll";
    }
    shell = new ActiveXObject("WScript.Shell");
    shell.RegWrite(root + "Indev.HotkeyControl\\", "Indev.HotkeyControl");
    shell.RegWrite(root + "Indev.HotkeyControl\\CLSID\\", "{87DD6B1F-2884-4b04-8790-90128CEECD85}");
    shell.RegWrite(root + "CLSID\\{87DD6B1F-2884-4b04-8790-90128CEECD85}\\", "Indev.HotkeyControl");
    shell.RegWrite(root + "CLSID\\{87DD6B1F-2884-4b04-8790-90128CEECD85}\\InprocServer32\\", "mscoree.dll");
    shell.RegWrite(root + "CLSID\\{87DD6B1F-2884-4b04-8790-90128CEECD85}\\InprocServer32\\ThreadingModel", "Both");
    shell.RegWrite(root + "CLSID\\{87DD6B1F-2884-4b04-8790-90128CEECD85}\\InprocServer32\\Class", "Indev.HotkeyControl");
    shell.RegWrite(root + "CLSID\\{87DD6B1F-2884-4b04-8790-90128CEECD85}\\InprocServer32\\Assembly", "HotkeyControl, Version=0.0.1.0, Culture=neutral, PublicKeyToken=ecd53068afd4f5bc");
    shell.RegWrite(root + "CLSID\\{87DD6B1F-2884-4b04-8790-90128CEECD85}\\InprocServer32\\RuntimeVersion", "v2.0.50727");
    shell.RegWrite(root + "CLSID\\{87DD6B1F-2884-4b04-8790-90128CEECD85}\\InprocServer32\\CodeBase", "file:///" + codeBase);
    shell.RegWrite(root + "CLSID\\{87DD6B1F-2884-4b04-8790-90128CEECD85}\\InprocServer32\\1.0.0.0\\Class", "Indev.HotkeyControl");
    shell.RegWrite(root + "CLSID\\{87DD6B1F-2884-4b04-8790-90128CEECD85}\\InprocServer32\\1.0.0.0\\Assembly", "HotkeyControl, Version=0.0.1.0, Culture=neutral, PublicKeyToken=ecd53068afd4f5bc");
    shell.RegWrite(root + "CLSID\\{87DD6B1F-2884-4b04-8790-90128CEECD85}\\InprocServer32\\1.0.0.0\\RuntimeVersion", "v2.0.50727");
    shell.RegWrite(root + "CLSID\\{87DD6B1F-2884-4b04-8790-90128CEECD85}\\InprocServer32\\1.0.0.0\\CodeBase", "file:///" + codeBase);
    shell.RegWrite(root + "CLSID\\{87DD6B1F-2884-4b04-8790-90128CEECD85}\\ProgId\\", "Indev.HotkeyControl");
    shell.RegWrite(root + "Component Categories\\{62C8FE65-4EBB-45e7-B440-6E39B2CDBF29}\\0	", ".NET Category");
}

HotkeyControl.prototype.unregister = function(root)
{
    shell = new ActiveXObject("WScript.Shell");
	shell.RegDelete(root + "Indev.HotkeyControl\\CLSID\\");
    shell.RegDelete(root + "Indev.HotkeyControl\\");

    shell.RegDelete(root + "CLSID\\{87DD6B1F-2884-4b04-8790-90128CEECD85}\\InprocServer32\\1.0.0.0\\Class");
    shell.RegDelete(root + "CLSID\\{87DD6B1F-2884-4b04-8790-90128CEECD85}\\InprocServer32\\1.0.0.0\\Assembly");
    shell.RegDelete(root + "CLSID\\{87DD6B1F-2884-4b04-8790-90128CEECD85}\\InprocServer32\\1.0.0.0\\RuntimeVersion");
    shell.RegDelete(root + "CLSID\\{87DD6B1F-2884-4b04-8790-90128CEECD85}\\InprocServer32\\1.0.0.0\\CodeBase");
	shell.RegDelete(root + "CLSID\\{87DD6B1F-2884-4b04-8790-90128CEECD85}\\InprocServer32\\1.0.0.0\\");
    shell.RegDelete(root + "CLSID\\{87DD6B1F-2884-4b04-8790-90128CEECD85}\\InprocServer32\\ThreadingModel");
    shell.RegDelete(root + "CLSID\\{87DD6B1F-2884-4b04-8790-90128CEECD85}\\InprocServer32\\Class");
    shell.RegDelete(root + "CLSID\\{87DD6B1F-2884-4b04-8790-90128CEECD85}\\InprocServer32\\Assembly");
    shell.RegDelete(root + "CLSID\\{87DD6B1F-2884-4b04-8790-90128CEECD85}\\InprocServer32\\RuntimeVersion");
    shell.RegDelete(root + "CLSID\\{87DD6B1F-2884-4b04-8790-90128CEECD85}\\InprocServer32\\CodeBase");
	shell.RegDelete(root + "CLSID\\{87DD6B1F-2884-4b04-8790-90128CEECD85}\\InprocServer32\\");
	shell.RegDelete(root + "CLSID\\{87DD6B1F-2884-4b04-8790-90128CEECD85}\\ProgId\\");
	shell.RegDelete(root + "CLSID\\{87DD6B1F-2884-4b04-8790-90128CEECD85}\\");
//    shell.RegDelete(root + "Component Categories\\{62C8FE65-4EBB-45e7-B440-6E39B2CDBF29}\\0	", ".NET Category");
}

