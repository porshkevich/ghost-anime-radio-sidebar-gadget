debugger;

jQuery.support.cors = true;

$(document).ready(function() {
	animeradio = new AnimeRadioGadget();


});

function checkVisibility()
{
	if(System.Gadget.visible)
		Visible();
	else
		Unvisible();

}

function Visible()
{
}

function Unvisible()
{
}

function Update()
{
}

function var_dump (obj) {
    var out = "";
    var obj = obj;
    function dump(obj, tab) {

       if(obj && typeof(obj) == "object"){
          for (var i in obj) {

            if(typeof(obj[i]) == "object")
            {
             out += tab+"\n"+i + "=> \n";
             dump(obj[i],'\u0009');
            }
            else
            {
            out += tab+i + ": " + obj[i] + "\n";
            }
           }
       } else {
        out = obj;
        }
   }

   dump(obj, '');
   return out;
}

function dump(arr,level) {
	var dumped_text = "";
	if(!level) level = 0;

	//The padding given at the beginning of the line.
	var level_padding = "";
	for(var j=0;j<level+1;j++) level_padding += "    ";

	if(typeof(arr) == 'object') { //Array/Hashes/Objects
		for(var item in arr) {
			var value = arr[item];

			if(typeof(value) == 'object') { //If it is an array,
				dumped_text += level_padding + "'" + item + "' ...";
				dumped_text += "[Object]\n";//dump(value,level+1);
			} else {
				dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
			}
		}
	} else { //Stings/Chars/Numbers etc.
		dumped_text = "===>"+arr+"<===("+typeof(arr)+")";
	}
	return dumped_text;
}

function log(text) {
	$('#text > pre').append('<br />\n' + text);
}