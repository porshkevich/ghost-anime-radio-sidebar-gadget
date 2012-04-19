//-------------------------------------------------------------
// Intellisense Support for Gadget Development
// MicrosoftAjax.debug.js is property of Microsoft Corporation
// This Sidebar.Intellisense.js was developed for Jonas Folles
// http://jonas.follesoe.no/JavaScriptIntelliSenseForTheVistaSidebarObjectModel.aspx
//-------------------------------------------------------------
/// <reference path="MicrosoftAjax.debug.js"/>
Type.registerNamespace("System");
Type.registerNamespace("System.Gadget");
Type.registerNamespace("System.Gadget.Settings");
Type.registerNamespace("System.Diagnostics");
Type.registerNamespace("System.Machine.CPU");
Type.registerNamespace("System.Network");
Type.registerNamespace("System.Shell");
Type.registerNamespace("System.Time");

System.Contact = function()
{
    /// <summary>The System.Contact object type exposes properties associated with a contact.</summary>
    /// <field name="city" type="String">The city name associated with a given contact. </field>
    /// <field name="country" type="String">The country name associated with a given contact.</field>
    /// <field name="defaultEmail" type="String">The default email address associated with a given contact. </field>
    /// <field name="filePath" type="String">The file path for the vCard associated with a given contact.</field>
    /// <field name="homePhone" type="String">The home telephone number associated with a given contact.</field>
    /// <field name="mobilePhone" type="String">The mobile telephone number associated with a given contact.</field>
    /// <field name="name" type="String">The display name (sometimes called the 'friendly name') associated with a given contact.</field>
    /// <field name="POBox" type="String">The postal box address associated with a given contact.</field>
    /// <field name="postalCode" type="String">The postal or ZIP code associated with a given contact.</field>
    /// <field name="state" type="String">The state associated with a given contact.</field>
    /// <field name="street" type="String">The street address associated with a given contact.</field>
    /// <field name="workPhone" type="String">The work telephone number associated with a given contact.</field>
    this.city = "";
    this.country = "";
    this.defaultEmail = "";
    this.filePath = "";
    this.homePhone = "";
    this.mobilePhone = "";
    this.name = "";
    this.POBox = "";
    this.postalCode = "";
    this.state = "";
    this.street = "";
    this.workPhone = "";
}
System.Contact.registerClass("System.Contact");

System.ContactManager = function()
{
    /// <summary>Exposes a collection of System.Contact objects.</summary>
    /// <field name="Contacts" type="Array" elementType="System.Contact">A collection of objects that expose System.Contact methods and properties. Note Objects of type System.Contact can only be accessed through the Contacts Collection. This collection is a member of System.ContactManager.</field>
    this.Contacts = [];
}
System.ContactManager.Contacts = [];
System.ContactManager.registerClass("System.ContactManager");

System.Debug = function()
{
    /// <summary>Exposes a method for use in debugging Windows Sidebar gadget script.</summary>
}
System.Debug.outputString = function(strOutputString)
{
    /// <summary>Writes developer-specified debugging information to the console.</summary>
    /// <remarks>The value of strOutputString can only be viewed with a script debugger while the gadget is running.</remarks>
    /// <param name="strOutputString" type="String">Required. Contains developer-specified information, such as variable values, gadget state data, or function names for display on the debugging console.</param>
}
System.Debug.registerClass("System.Debug");

System.Diagnostics.EventLog = function()
{
    /// <summary>Returns the contents of the specified Event Viewer event log.</summary>
}
System.Diagnostics.EventLog.writeEntry = function(strEventLogEntry, intEventType)
{
    /// <summary>Used in a gadget to write text entries to a debugging log.</summary>
    /// <param name="strEventLogEntry" type="String">Required. Initialize this string variable to contain the information that should be placed in the diagnostics log.</param>
    /// <param name="intEventType" type="Number" integer="true" elementMayBeNull="true">Optional. Use this integer variable to specify the type of event to log. The default value is 3. 0: Success, 1: Error, 2: Warning, 3: Information.</param>
}
System.Diagnostics.EventLog.registerClass("System.Diagnostics.EventLog");

System.Environment = function()
{
    /// <summary>Exposes methods and properties used to determine current user session machine characteristics.</summary>
    /// <field name="machineName" type="String">The name of the local computer.</field>
    this.machineName = "";
}

System.Environment.getEnvironmentVariable = function(strEnvCheck)
{
    /// <summary>Returns the value of a user-specified environment variable.</summary>
    /// <param name="strEnvCheck" type="String">Required. A String that contains the name of a environment variable.</param>
    /// <returns type="String">Returns the value of the specified environment variable.</returns>
}
System.Environment.registerClass("System.Environment");
System.Environment.machineName = "";

System.Gadget = function()
{
    /// <summary>Defines methods, events, and properties that are used to specify gadget configuration options in the Windows Sidebar environment.</summary>
    /// <field name="background" type="String">Used in a gadget to set the background image using a file path or to get the file name of the current background image.</field>
    /// <field name="docked" type="Boolean">Called from within a gadget to determine if the gadget making the script call is docked.</field>
    /// <field name="name" type="String">Used from within a gadget as a means to determine the gadget name as specified in the gadget manifest file.</field>
    /// <field name="opacity" type="Number" integer="true">Called from within a gadget to specify the percentage of opacity as an integer.</field>
    /// <field name="path" type="String">Called from within a gadget to display the file path for the gadget.</field>
    /// <field name="platformVersion" type="String">Called from within a gadget to retrieve the version of the gadget platform that the gadget is running on.</field>
    /// <field name="settingsUI" type="String">Called from within a gadget to specify the settings to display to the user and activate the user interface so that the user can bring up the Settings dialog box.</field>
    /// <field name="version" type="String">Called from within a gadget to retrieve the version of the Microsoft Windows operating system that the gadget platform is running on.</field>
    /// <field name="visible" type="Boolean">The gadget's visibility status.</field>
    this.background = "";
    this.docked = false;
    this.name = "";
    this.opacity = 0;
    this.path = location ? decodeURI(location.pathname.substring(1).replace(/\/([^/]+)$/, "").replace(/\//g,"\\")) : "";
    this.platformVersion = "";
    this.settingsUI = "";
    this.version = "";
    this.visible = false;
}
System.Gadget.background = "";
System.Gadget.docked = false;
System.Gadget.name = "";
System.Gadget.opacity = 0;
System.Gadget.path = location ? decodeURI(location.pathname.substring(1).replace(/\/([^/]+)$/, "").replace(/\//g,"\\")) : "";
System.Gadget.platformVersion = "";
System.Gadget.settingsUI = "";
System.Gadget.version = "";
System.Gadget.visible = false;
System.Gadget.onDock = function()
{
    /// <summary>This event is triggered when the gadget is docked. The specified script code runs when the event occurs.</summary>
}
System.Gadget.onSettingsClosed = function()
{
    /// <summary>This event is triggered when the Settings dialog box for the current gadget is about to close and specifies the script code that runs when the event occurs.</summary>
}
System.Gadget.onSettingsClosing = function()
{
    /// <summary>This event is triggered when the Settings dialog box for the current gadget is being closed, and specifies the script code that runs when the event occurs.</summary>
}
System.Gadget.onShowSettings = function()
{
    /// <summary>Detects when the Settings dialog box for the current gadget will open and runs the appropriate script code when the event occurs.</summary>
}
System.Gadget.onUndock = function()
{
    /// <summary>This event is triggered when a gadget is undocked. The specified script code runs when the event occurs.</summary>
}
System.Gadget.visibilityChanged = function()
{
    /// <summary>This event is triggered when the gadget's visibility changes. The specified script code runs when the event occurs.</summary>
}

System.Gadget.beginTransition = function()
{
    /// <summary>Called from within a gadget to specify any script code that should run when the gadget view is about to be updated and should be halted to shield the user from any transitional gadget effects in appearance.</summary>
}
System.Gadget.endTransition = function(intGadgetTransitionType, floatTransitionInSeconds)
{
    /// <summary>Called from within a gadget to transition into a new view state from a previous size or view state.</summary>
    /// <param name="intGadgetTransitionType" type="Number" integer="true" elementMayBeNull="false">Required. An integer containing the transition type.</param>
    /// <param name="floatTransitionInSeconds" type="Number" integer="false" elementMayBeNull="false">Required. A variable of type Float storing the number of seconds for the gadget transition effect.</param>
}
System.Gadget.close = function()
{
    /// <summary>Used to end a running instance of a gadget.</summary>
}
System.Gadget.registerClass("System.Gadget");

System.Gadget.Flyout = function()
{
    /// <summary>Used in a Windows Sidebar gadget to specify flyout prompt properties.</summary>
    /// <field name="document" type="String">Called from within a gadget to manage the contents of a gadget flyout prompt.</field>
    /// <field name="file" type="String">Used in a gadget to manage the contents of a gadget flyout.</field>
    /// <field name="show" type="Boolean">Indicates whether a gadget flyout is displayed.</field>
    /// <field name="onHide" type="Function">Event code triggered from within a gadget to specify the script code that runs when gadget flyout prompts are hidden.</field>
    /// <field name="onShow" type="Function">Event code triggered from within a gadget to specify the script code that runs when gadget flyout prompts are shown.</field>
    this.document = "";
    this.file = "";
    this.show = false;
    this.onHide = "";
    this.onShow = "";
}
System.Gadget.Flyout.document = "";
System.Gadget.Flyout.file = "";
System.Gadget.Flyout.show = "";
System.Gadget.Flyout.onHide = function()
{
    /// <summary>Event code triggered from within a gadget to specify the script code that runs when gadget flyout prompts are hidden.</summary>
}
System.Gadget.Flyout.onShow = function()
{
    /// <summary>Event code triggered from within a gadget to specify the script code that runs when gadget flyout prompts are shown.</summary>
}
System.Gadget.Flyout.registerClass("System.Gadget.Flyout");

System.Gadget.Settings = function()
{
    /// <summary>Checks to see if there are stored settings for a gadget, such as settings that are saved from an earlier session of a particular gadget instance.</summary>
}
System.Gadget.Settings.read = function(strSettingName)
{
    /// <summary>Called from within a gadget to read a gadget's stored settings.</summary>
    /// <param name="strSettingName" type="String">Required. String containing the name of the setting to retrieve.</param>
    /// <returns type="String">Returns the requested setting value.</returns>
}
System.Gadget.Settings.readString = function(strSettingName)
{
    /// <summary>Called from within a gadget to read the gadget's stored settings without attempting to determine the type of data stored. Note   Use readString and writeString to preserve the integrity of decimal values.</summary>
    /// <param name="strSettingName" type="String">Required. String containing the name of the setting to retrieve.</param>
    /// <returns type="String">Returns the requested setting value.</returns>
}
System.Gadget.Settings.write = function(strWriteSettingName, strWriteSettingInit)
{
    /// <summary>Called from within a gadget to store a setting that is persistent across sessions.</summary>
    /// <param name="strWriteSettingName" type="String">Required. A string containing the name of the setting to write.</param>
    /// <param name="strWriteSettingInit" type="String">Required. A string containing the value of the specified setting name to write for the gadget.</param>
}
System.Gadget.Settings.writeString = function(strWriteStrSettingName, strWriteStrSettingInit)
{
    /// <summary>Called from within a gadget to store a setting that is persistent across sessions. Note   Use readString and writeString to preserve the integrity of decimal values.</summary>
    /// <param name="strWriteStrSettingName" type="String">Required. A string containing the name of the setting to write.</param>
    /// <param name="strWriteStrSettingInit" type="String">Required. A string containing the value of the specified setting name to write for the gadget.</param>
}
System.Gadget.Settings.registerClass("System.Gadget.Settings");

System.Gadget.Settings.ClosingEvent = function()
{
    /// <summary>Defines properties and methods to identify and specify cancellation handlers for the gadget settings process.</summary>
    /// <field name="action" type="String">Read only. Indicates whether or not the Settings dialog box is closed.</field>
    /// <field name="cancel" type="String">Indicates whether or not the Settings dialog box is closed.</field>
    /// <field name="cancellable" type="String">Called in a gadget to detect whetherthe user can successfully cancel the gadget Settings dialog box.</field>
    /// <field name="closeAction" type="String">The settings dialog box status.</field>
    this.action = "";
    this.cancel = "";
    this.cancellable = false;
    this.closeAction = "";
}
System.Gadget.Settings.ClosingEvent.action = "";
System.Gadget.Settings.ClosingEvent.cancel = "";
System.Gadget.Settings.ClosingEvent.cancellable = "";
System.Gadget.Settings.ClosingEvent.closeAction = "";
System.Gadget.Settings.ClosingEvent.registerClass("System.Gadget.Settings.ClosingEvent");

System.Gadget.Sidebar = function()
{
    /// <summary>Exposes members associated with Windows Sidebar docking.</summary>
}
System.Gadget.Sidebar.onDockSideChanged = function()
{
    /// <summary>This event is raised when the anchored side of the Sidebar changes. A function that runs each time the anchored side of the Sidebar changes between "Left" and "Right".</summary>
}
System.Gadget.Sidebar.dockSide = "";
System.Gadget.Sidebar.registerClass("System.Gadget.Sidebar");

System.Gadget.SideShow = function()
{
    /// <summary>Exposes properties, methods and events for managing Sidebar gadget behavior on SideShow devices.</summary>
    /// <field name="enabled" type="Boolean">Boolean value that equals true if the SideShow device is available and false if it is not.</field>
    this.enabled = false;
}
System.Gadget.SideShow.applicationEvent = function()
{
    /// <summary>This event is raised when a SideShow device event occurs.</summary>
}
System.Gadget.SideShow.addImage = function(intSideShowContentID, strSideShowImageName)
{
    /// <summary>Displays an image on a SideShow device.</summary>
    /// <param name="intSideShowContentID" type="Number" integer="true">Required. An integer value representing the content ID of the image to display on a SideShow device.</param>
    /// <param name="strSideShowImageName" type="String">Required. A string value representing the path and file name of the image to display on the SideShow device.</param>
}
System.Gadget.SideShow.addText = function(intSideShowContentID, strSideShowText)
{
    /// <summary>Displays text on a SideShow device.</summary>
    /// <param name="intSideShowContentID" type="Number" integer="true">Required. An integer value representing the content ID of the image to display on a SideShow device.</param>
    /// <param name="strSideShowText" type="String">Required. A string value representing the text to display on the SideShow device.</param>
}
System.Gadget.SideShow.remove = function(strSideShowContentID)
{
    /// <summary>Removes the content specified by a content ID from a SideShow device. </summary>
    /// <param name="strSideShowContentID" type="String">Required. A string value representing the content ID of the image or text to remove from the SideShow device.</param>
}
System.Gadget.SideShow.removeAll = function()
{
    /// <summary>Removes all content displayed on a SideShow device.</summary>
}
System.Gadget.SideShow.setFriendlyName = function(strFriendlyNameResult)
{
    /// <summary>Sets the gadget's user-friendly name.</summary>
    /// <param name="strFriendlyNameResult" type="String">Required. A string value representing the user-friendly name of the gadget as defined in the Sidebar gadget manifest file.</param>
}
System.Gadget.SideShow.enabled = false;
System.Gadget.SideShow.registerClass("System.Gadget.SideShow");

System.Machine = function()
{
    /// <summary>Exposes properties and collections that identify the computer's processor and memory characteristics.</summary>
    /// <field name="CPUs" type="Array" elementType="System.Machine.CPU">A collection of objects that expose System.Machine.CPU methods and properties. Note   Objects of type System.Machine.CPU can only be accessed through the CPUs Collection.</field>
    /// <field name="availableMemory" type="Number" integer="true">An integer specifying the amount of available memory (MB).</field>
    /// <field name="processorArchitecture" type="String">A string containing the processor type.</field>
    /// <field name="totalMemory" type="Number" integer="true"></field>
    this.CPUs = new Array();
    this.availableMemory = 0;
    this.processorArchitecture = "64";
    this.totalMemory = 0;
}
System.Machine.CPUs = Array();
System.Machine.availableMemory = 0;
System.Machine.processorArchitecture = "64";
System.Machine.totalMemory = 0;
System.Machine.registerClass("System.Machine");

System.Machine.CPU = function()
{
    /// <summary>Exposes properties associated with a CPU.</summary>
    /// <field name="name" type="String">Name of the CPU.</field>
    /// <field name="usagePercentage" type="Number" integer="false">A Floating-point variable containing the result of the processor check, in decimal form, that represents the consumed percentage of CPU capacity.</field>
    this.name = "";
    this.usagePercentage = 0;
}
System.Machine.CPU.name = "";
System.Machine.CPU.usagePercentage = 0;
System.Machine.CPU.registerClass("System.Machine.CPU");

System.Machine.PowerStatus = function()
{
    /// <summary>Exposes properties and events for determining and managing power status.</summary>
    /// <field name="batteryCapacityRemaining" type="Number" integer="true">Estimated amount of battery power remaining, in seconds.</field>
    /// <field name="batteryCapacityTotal" type="Number" integer="true">An integer representing the estimated number of seconds of remaining power of a fully-charged battery.</field>
    /// <field name="batteryPercentRemaining" type="Number" integer="true">An integer representing the percentage of remaining battery power available.</field>
    /// <field name="batteryStatus" type="Number" integer="true">An integer that indicates the charge state of the battery.</field>
    /// <field name="batteryStatus" type="Boolean">Returns true if the power adapter is charging the battery and providing power to the system. Returns false if the power adapter is not providing power to the computer, and the computer is running on battery power and depleting the battery.</field>
    /// <field name="isPowerLineConnected" type="Boolean">Returns true if the power adapter is plugged in and providing power to the system. Returns false if the power adapter is not plugged in and the computer is running on battery power.</field>
    this.batteryCapacityRemaining = 0;
    this.batteryCapacityTotal = 0;
    this.batteryPercentRemaining = "";
    this.batteryStatus = 0;
    this.isBatteryCharging = false;
    this.isPowerLineConnected  = false;
}
System.Machine.PowerStatus.registerClass("System.Machine.PowerStatus");

System.Machine.PowerStatus.batteryCapacityRemaining = 0;
System.Machine.PowerStatus.batteryCapacityTotal = 0;
System.Machine.PowerStatus.batteryPercentRemaining = "";
System.Machine.PowerStatus.batteryStatus = 0;
System.Machine.PowerStatus.isBatteryCharging = 0;
System.Machine.PowerStatus.isPoweLineConnected = false;

System.Machine.PowerStatus.powerLineStatusChanged = function()
{
    /// <summary>This event is raised each time the computer's power source changes between battery and adaptor.</summary>
}

System.Machine.PowerStatus.EnumBatteryStatus = function()
{
    /// <field name="medium" type="Number" integer="true" static="true"></field>
    /// <field name="high" type="Number" integer="true" static="true"></field>
    /// <field name="low" type="Number" integer="true" static="true"></field>
    /// <field name="critical" type="Number" integer="true" static="true"></field>
    /// <field name="noBattery" type="Number" integer="true" static="true"></field>
    /// <field name="unknown" type="Number" integer="true" static="true"></field>
}
System.Machine.PowerStatus.EnumBatteryStatus.prototype =
{
    medium: 0,
    high: 1,
    low: 2,
    critical: 4,
    noBattery: 128,
    unknown: 255
}
System.Machine.PowerStatus.EnumBatteryStatus.registerEnum("System.Machine.PowerStatus.EnumBatteryStatus");

System.MessageStore = function()
{
    /// <summary>Exposes a collection of System.MessageStoreFolder object types.</summary>
    /// <field name="Folders" type="Array" optional="true" mayBeNull="true" elementMayBeNull="true" elementType="System.MessageStoreFolders">A collection of System.MessageStoreFolder object types.</field>
    this.Folders = [];
}
System.MessageStore.Folders = [];
System.MessageStore.registerClass("System.MessageStore");

System.MessageStoreFolder = function()
{
    /// <summary>Exposes a collection of System.MessageStoreMessage object types.</summary>
    /// <field name="Messages" type="Array" elementType="System.MessageStoreMessage">A collection of System.MessageStoreMessage object types.</field>
    /// <field name="messageCount" type="Number" integer="true">The number of messages in a folder.</field>
    /// <field name="unreadMessageCount" type="Number" integer="true">The number of unread messages in a folder.</field>
    /// <field name="name" type="String">Folder name.</field>
    this.Messages = [];
    this.messageCount = 0;
    this.unreadMessageCount = 0;
    this.name = "";
}
System.MessageStoreFolder.registerClass("System.MessageStoreFolder");
System.MessageStoreFolder.Messages = [];
System.MessageStoreFolder.messageCount = 0;
System.MessageStoreFolder.unreadMessageCount = 0;
System.MessageStoreFolder.name = "";

System.MessageStoreMessage = function()
{
    /// <summary>Exposes properties associated with messages.</summary>
    /// <field name="body" type="String">Contents of the body of a message.</field>
    /// <field name="from" type="String">Contents of the From field of a message.</field>
    /// <field name="subject" type="String">Contents of the Subject field of a message.</field>
    /// <field name="to" type="String">Contents of the To field of a message.</field>
    this.body = "";
    this.from = "";
    this.subject = "";
    this.to = "";
}
System.MessageStoreMessage.registerClass("System.MessageStoreMessage");

System.Network.Wireless = function()
{
    /// <summary>The object properties and events enable a gadget to detect wireless network interface settings on the Microsoft Windows system that the gadget is running on. </summary>
    /// <field name="address" type="String">Used in a gadget to determine the IP address of the active network adapter where the gadget is running.</field>
    /// <field name="ipv6Address" type="String">Used in a gadget to determine the IP Version 6.0 address on the active network adapter that the gadget is running on.</field>
    /// <field name="primaryDNSAddress" type="String">Called in a gadget to determine the IP address of the first available Domain Name System (DNS) server on the network that the machine running the gadget is connected to.</field>
    /// <field name="secureConnection" type="Boolean">Used in a gadget to determine whether the current connection is secure.</field>
    /// <field name="signalStrength" type="Number" integer="True">Used in a gadget to determine the signal strength of the network that the machine running the gadget is connected to.</field>
    /// <field name="ssid" type="String">Used in a Windows Sidebar gadget to determine the Service Set Identifier (SSID) of the wireless network connected in the Windows session where the gadget is running.</field>
    this.address = "";
    this.ipv6Address = "";
    this.primaryDNSAddress = "";
    this.secureConnection = true;
    this.signalStrength = 0;
    this.ssid = "";
}
System.Network.Wireless.address = "";
System.Network.Wireless.ipv6Address = "";
System.Network.Wireless.primaryDNSAddress = "";
System.Network.Wireless.secureConnection = true;
System.Network.Wireless.signalStrength = 0;
System.Network.Wireless.ssid = "";

System.Network.Wireless.connectionChanged = function()
{
    /// <summary>An event that enables script commands in a gadget to run when the signal strength of a wireless network connection changes.</summary>
}
System.Network.Wireless.signalStrengthChanged = function()
{
    /// <summary>An event that enables script commands in a gadget to run when the signal strength of a wireless connection changes.</summary>
}
System.Network.Wireless.registerClass("System.Network.Wireless");

System.Shell = function()
{
    /// <summary>Enables a Windows Sidebar gadget to use properties and objects from the Microsoft Windows shell.</summary>
}
System.Shell.chooseFile = function(bFoorOpen, strFilter, strInitialDirectory, strFileInit)
{
    /// <summary>Method that calls the File Picker dialog box to choose a file to use in a gadget.</summary>
    /// <param name="bFoorOpen" type="Boolean">Optional. A Boolean that indicates if the file is opened in read-only mode.</param>
    /// <param name="strFilter" type="String">Required. A string of file name extensions and descriptions. This filter is in the format "Description:Extension Description:Extension::" and quotation marks are required. (Example: "Text File:*.txt:Reg File:*.reg::")</param>
    /// <param name="strInitialDirectory" type="String">Optional. A default directory that is displayed in the File Picker dialog box.</param>
    /// <param name="strFileInit" type="String">Optional. A default directory that is displayed in the File Picker dialog box.</param>
    /// <returns type="System.Shell.Item">An instance of a System.Shell.Item object that represents the selected file.</returns>
    //return new System.Shell.Item();
}
System.Shell.chooseFolder = function(strTitle, intOptions)
{
    /// <summary>Called in a gadget to select the active folder for gadget file operations.</summary>
    /// <param name="strTitle" type="String">Required. A string specifying the title in the Folder Picker dialog box.</param>
    /// <param name="intOptions" type="Number" integer="true">Required. An integer representing the File Picker dialog box options.</param>
    /// <returns type="System.Shell.Item">An instance of a System.Shell.Item object that represents the selected folder. Valid integers are the same as for SHBrowseForFolder. Passing 0 is correct for most uses.</returns>
    //return new System.Shell.Item();
}
System.Shell.drive = function(strDrive)
{
    /// <summary>Retrieves a collection associated with a System.ShellDrive object.</summary>
    /// <param name="strDrive" type="String">Required. A String representing the symbolic drive letter of the storage device on the system.</param>
    /// <returns type="System.ShellDrive">Returns an instance of a System.ShellDrive object representing the specified drive. If the method fails, returns undefined.</returns>
}
System.Shell.execute = function(strFileOrUrl, strParams, strDirectory, strAction)
{
    /// <summary>Performs an operation on a specified file or launches a URL.</summary>
    /// <param name="strFileOrUrl" type="String">Required. Initialize this string variable to the full path and file name of the program, such as "C:\\Windows\\Notepad.Exe". Or, initialize this string variable to the URL, such as 'www.microsoftgadgets.com. Quotation marks are required for file name variables. Apostrophes are required for URLs.</param>
    /// <param name="strParams" type="String">Optional. Initialize this string variable to the switches that apply to the specified program, such as "MyFile.Txt". Quotation marks are required. </param>
    /// <param name="strDirectory" type="String">Optional. Initialize this string variable to the starting directory for the program, such as "C:\\Users\\MyName\\". Quotation marks and double backslashes are required. </param>
    /// <param name="strAction" type="String">Optional. Initialize this string variable to the Microsoft Windows Shell verb that specifies the action to be performed. Quotation marks are required. The set of available verbs depends on the particular file or folder: "edit" launches an editor and opens the document for editing. "explore" explores the folder specified by strFilename. "find" initiates a search starting from the specified directory. "open" opens the file specified by the strFilename parameter. "print" prints the file specified by strFilename.</param>
}
System.Shell.itemFromFileDrop = function(strDrive)
{
    /// <summary>Retrieves a collection associated with a System.Shell.Item object. </summary>
    /// <param name="strDrive" type="String">Required. A String that represents the System.Shell.Item object of the item in the file system.</param>
    /// <returns type="System.ShellDrive">Returns an instance of a System.ShellDrive object representing the specified drive. If the method fails, returns undefined.</returns>
}
System.Shell.itemFromPath = function(strPath)
{
    /// <summary>Retrieves a collection associated with a System.Shell.Item object. </summary>
    /// <param name="strPath" type="String">Required. A path to a file, as a string.</param>
    /// <returns type="System.Shell.Item">An instance of a System.Shell.Item object that represents the selected file.</returns>
}
System.Shell.knownFolder = function(oKnownFolderPath)
{
    /// <summary>Takes a string that represents a user's well-known folder, such as Documents, and returns an instance of a System.Shell.Folder object based on that folder path. </summary>
    /// <param name="oKnownFolderPath" type="String">Required. A String that identifies the well-known folder.</param>
    /// <returns type="System.Shell.Folder">An instance of a System.Shell.Folder object that can be used with System.Shell.Item object methods.</returns>
}
System.Shell.knownFolderPath = function(oKnownFolder)
{
    /// <summary>Takes a well-known folder, such as Documents, and returns the path name as defined in the context of the user's environment.</summary>
    /// <param name="oKnownFolder" type="String">Required. The well-known name of the folder as a string.</param>
    /// <returns type="System.Shell.Folder">An instance of System.Shell.Folder for the well-known folder as a string.</returns>
}
System.Shell.refreshDesktop = function()
{
    /// <summary>Refreshes the desktop after adding or removing files.</summary>
}
System.Shell.saveFileDialog = function(strPath, strFilter)
{
    /// <summary>Triggers a prompt that displays the standard Microsoft Windows File Save dialog box to enable a user to save data created in the gadget to a file.</summary>
    /// <param name="strPath" type="String">Required. A string containing the path for the File Save operation.</param>
    /// <param name="strFilter" type="String">Required. A string of file name extensions and descriptions. This filter is in the format "Description:Extension Description:Extension::" and quotation marks are required. (Example: "Text File:*.txt:Reg File:*.reg::")</param>
    /// <returns type="String">A string containing the resulting path after the file save operation ends.</returns>
}
System.Shell.registerClass("System.Shell");

System.Shell.Folder = function()
{
    /// <summary>Enables a Windows Sidebar gadget to mimic Microsoft Windows Explorer file management operations, such as copying, moving, and obtaining item information within folders. </summary>
    /// <field name="Items" type="Array" elementType="System.Shell.Item">Note  Objects of type System.Shell.Item can only be accessed through the Items Collection. The Items Collection is a member of System.Shell.Folder.</field>
    /// <field name="Parent" type="System.Shell.Folder">Enables a Sidebar gadget to detect the parent of a selected folder that the user intends to perform a file operation on, such as copying or moving. With this value, a gadget can mimic operations that a user might initiate in the Windows Explorer or the Windows Desktop.</field>
    /// <field name="Self" type="System.Shell.Folder">Returns information about the selected instance of a folder object.</field>
    this.Items = [];
    this.Parent = new Object();
    this.Self = new Object();
}
System.Shell.Folder.Items = [];
System.Shell.Folder.Parent = new Object();
System.Shell.Folder.Self = new Object();

System.Shell.Folder.copyHere = function(bFolderItem, intFlags)
{
    /// <summary>Called in a gadget to copy a specified file or folder to this Folder.</summary>
    /// <param name="bFolderItem" type="System.Shell.Item">Required. A variable indicating the selected folder or folder item. </param>
    /// <param name="intFlags" type="Number" integer="true">Optional. An integer specifying the options for the copy operation. This value can be 0 (zero) or a combination of the following values.</param>
}
System.Shell.Folder.moveHere = function(bFolderItem, intFlags)
{
    /// <summary>Called in a gadget to move a specified file or folder to this Folder.</summary>
    /// <param name="bFolderItem" type="System.Shell.Item">Required. A variable indicating the selected folder or folder item. </param>
    /// <param name="intFlags" type="Number" integer="true">Optional. An integer specifying the options for the copy operation. This value can be 0 (zero) or a combination of the following values.</param>
}
System.Shell.Folder.newFolder = function(strNewFolderName, intFlags)
{
    /// <summary>Called in a gadget to create a new folder in a specified location.</summary>
    /// <param name="strNewFolderName" type="String">Required. A string variable that represents the name of the new folder.</param>
    /// <param name="intFlags" type="Number" integer="true">Optional. An integer that specifies the options for the newFolder operation.</param>
}
System.Shell.Folder.parse = function(strFilePath)
{
    /// <summary>Used to return a Folder object and items contained in the folder when the path to the folder is specified.</summary>
    /// <param name="strFilePath" type="String">Required. String specifying the file path to the folder.</param>
    /// <returns type="System.Shell.Folder">An instance of a System.Shell.Folder object that represents the folder at a specified location.</returns>
}
System.Shell.Folder.registerClass("System.Shell.Folder");


System.Shell.Item = function()
{
    /// <summary>Exposes properties and methods associated with Windows shell items.</summary>
    /// <field name="isFile" type="Boolean">Checks to see if the selected shell item is a Microsoft Windows file and not a folder (directory) or a .Lnk file (shortcut).</field>
    /// <field name="isFileSystem" type="Boolean">Indicates whether the specified item is a critical file that is part of the file system.</field>
    /// <field name="isFolder" type="Boolean">Checks to see if the selected shell item is a Windows folder (directory) and not a file or a .Lnk file (shortcut).</field>
    /// <field name="isLink" type="Boolean">Checks to see if the selected shell item is a .Lnk file (Windows shortcut), and not a file or a folder (directory).</field>
    /// <field name="link" type="String">Returns the path to the item, if the specified item is a .Lnk file (shortcut).</field>
    /// <field name="modifyDate" type="Date">Checks the selected Windows Shell item to determine the date that the file was last modified.  </field>
    /// <field name="name" type="String">Used to determine the name of the selected Windows Shell item.</field>
    /// <field name="path" type="String">Contains the full path and name of the item.</field>
    /// <field name="SHFolder" type="String">Returns the current folder containing the selected item.</field>
    /// <field name="size" type="Number" integer="true">Returns the size (in bytes) of the selected item.</field>
    /// <field name="type" type="String">Returns the type (application or document extension) of the specified item as a string.</field>
    this.isFile = false;
    this.isFileSystem = false;
    this.isFolder = false;
    this.isLink = false;
    this.link = "";
    this.modifyDate = new Date();
    this.name = "";
    this.path = "";
    this.SHFolder = new Object();
    this.size = 0;
    this.type = "";
}
System.Shell.Item.invokeVerb = function(strVerb)
{
    /// <summary>Sets the collection's attribute and invokes the default verb for an item, such as open or edit.</summary>
    /// <param name="strVerb" type="String">Optional. A string value that contains a verb, such as open or edit.</param>
}
System.Shell.Item.metadata = function()
{
    /// <summary>Checks the current file specification to determine characteristics of the metadata properties associated with the item.</summary>
    /// <returns type="String">Returns a value representing the value for a specified piece of metadata.</returns>
}
System.Shell.Item.registerClass("System.Shell.Item");


System.Shell.RecycleBin = function()
{
    /// <summary>Enables a Windows Sidebar gadget to determine the Recycle Bin behaviors and settings, for example, file count and folder count.</summary>
    /// <field name="fileCount" type="Number" integer="true">Determines how many file objects and .Lnk files (shortcuts) are stored in the system Recycle Bin, awaiting deletion or recovery.</field>
    /// <field name="folderCount" type="Number" integer="true">Determines the number of folder objects stored in the system Recycle Bin, awaiting deletion or recovery.</field>
    /// <field name="sizeUsed" type="Number" integer="true">Determines the total amount of space used by files stored in the Recycle Bin.</field>
    this.fileCount = 0;
    this.folderCount = 0;
    this.sizeUsed = 0;
}

System.Shell.RecycleBin.fileCount = 0;
System.Shell.RecycleBin.folderCount = 0;
System.Shell.RecycleBin.sizeUsed = 0;

System.Shell.RecycleBin.deleteItem = function(strItemToDelete)
{
    /// <summary>Used to target specific files or folders for storage in the Recycle Bin.</summary>
    /// <param name="strItemToDelete" type="String">Required. Set this string variable to the item that is stored in the Recycle Bin and targeted for deletion.</param>
}
System.Shell.RecycleBin.emptyall = function()
{
    /// <summary>Deletes the contents of the Microsoft Windows Recycle Bin.</summary>
}
System.Shell.RecycleBin.showRecycleSettings = function()
{
    /// <summary>This event forces the Microsoft Windows Recycle Bin Settings dialog box to appear.</summary>
}
System.Shell.RecycleBin.onRecycleBinChanged = function()
{
    /// <summary>Enables script commands in a gadget to run when the contents of the Recycle Bin are modified, such as when files, folders, or links being added or deleted from the set of items currently stored in the Recycle Bin.</summary>
}
System.Shell.RecycleBin.registerClass("System.Shell.RecycleBin");

System.ShellDrive = function()
{
    /// <summary>Enables a Windows Sidebar gadget to access properties and methods associated with an instance of a drive object to use in a Sidebar gadget script. The object is created with the System.Shell.drive method. Drive characteristics of the retrieved object, for example, type of drive or volume label, can be determined.</summary>
    /// <field name="driveFormat" type="String">Returns a value that indicates if the formatted file system of the drive is NTFS (managed permissions) or FAT32 (unmanaged permissions).</field>
    /// <field name="driveLetter" type="String">Provides the script in a Windows Sidebar gadget with the drive letter of a selected system drive.</field>
    /// <field name="driveType" type="String">Determines the drive type of the device that the selected item is stored on.</field>
    /// <field name="freeSpace" type="Number" integer="false">A long integer containing the amount of free space remaining on the selected storage device (in megabytes).</field>
    /// <field name="isReady" type="Boolean">Returns true if the specified drive is ready; returns false if it is not.</field>
    /// <field name="rootDirectory" type="String">A string containing the file specification of the root directory of the selected drive.</field>
    /// <field name="totalFreeSpace" type="String">A string containing the amount of free disk space currently available on the system.</field>
    /// <field name="totalSize" type="String">A string containing the amount of disk space used on the selected hard drive without regard to partition configuration information.</field>
    /// <field name="volumeLabel" type="String">Returns the string (volume label) that identifies the hard drive.</field>
    this.driveFormat = "";
    this.driveLetter = "";
    this.driveType = "";
    this.freeSpace = 0;
    this.isReady = false;
    this.rootDirectory = "";
    this.totalFreeSpace = 0;
    this.totalSize = 0;
    this.volumeLabel = "";
}
System.ShellDrive.registerClass("System.ShellDrive");

System.Sound = function()
{
    /// <summary>Enables a gadget to determine sound characteristics such as volume and the location that a sound file should be played from.</summary>
}
System.Sound.beep = function()
{
    /// <summary>Generates simple beep tones on the system speakers.</summary>
}
System.Sound.playSound = function(strPlaySoundInit)
{
    /// <summary>Plays a specified sound file, given a valid file name.</summary>
    /// <param name="strPlaySoundInit" type="String">Required. A string that specifies a sound file to play. The maximum length is 255 characters.</param>
}
System.Sound.registerClass("System.Sound");

System.Time = function()
{
    /// <summary>Exposes members associated with system time characteristics.</summary>
    /// <field name="timeZones" type="Array" elementType="System.Time.timeZone">A collection of System.Time.timeZone object types.</field>
    /// <field name="currentTimeZone" type="System.Time.timeZone">Instance of a System.Time.timeZone object representing the current system time zone.</field>
    this.timeZones = new Array();
    this.currentTimeZone = Object();
}

System.Time.timeZones = new Array();
System.Time.currentTimeZone = Object();

System.Time.getLocalTime = function(oTimeZone)
{
    /// <summary>Current time in a specified time zone. </summary>
    /// <param name="oTimeZone" type="System.Time.timeZone">Required. An instance of a System.Time.timeZone object type.</param>
}
System.Time.registerClass("System.Time");

System.Time.timeZone = function()
{
    /// <summary>Exposes members associated with time zone characteristics.</summary>
    /// <field name="bias" type="Number" integer="true">Number of hours that a time zone is offset from Coordinated Universal Time (UTC).</field>
    /// <field name="displayName" type="String">Time zone display name.</field>
    /// <field name="DSTBias" type="Number" integer="true">Number of hours that a time zone is offset from Coordinated Universal Time (UTC), assuming that Daylight Savings Time (DST) is in effect.</field>
    /// <field name="DSTDate" type="Date">A time zone's date, assuming that Daylight Savings Time (DST) is in effect.</field>
    /// <field name="DSTDisplayName" type="String">Daylight Savings Time (DST) zone name.</field>
    /// <field name="name" type="String">Name of the computer's current time zone.</field>
    /// <field name="standardBias" type="Number" integer="true">Number of hours that the current time zone is offset from Coordinated Universal Time (UTC), assuming that Daylight Savings Time (DST) is not in effect.</field>
    /// <field name="standardDate" type="Date">Date based on the current time zone of the local computer, assuming that Daylight Savings Time (DST) is not in effect.</field>
    /// <field name="standardDisplayName" type="String">Standard time zone display name.</field>
    this.bias = 0;
    this.displayName = "";
    this.DSTBias = 0;
    this.DSTDate = new Date();
    this.DSTDisplayName = "";
    this.name = "";
    this.standardBias = 0;
    this.standardDate = new Date();
    this.standardDisplayName = "";
}
System.Time.timeZone.registerClass("System.Time.timeZone");