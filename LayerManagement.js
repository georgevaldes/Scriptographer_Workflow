//Pseudocode

/*
Without GUI
Open File (MANUALLY)
Select Layers with word _HIDDEN
Move to the Bottom of the list
Change Lineweights to .5
(TO DO:)
Hide Layers (Optional)
Change other layers' lineweights according to name
*/

var hiddenLayers = new Array();
var foreLayers = new Array();
var len = document.layers.length; // = 6
var lastLayer = len - 1;
print(lastLayer);

var hiddenStyle = {
	strokeColor: '#0040FF',
    fillColor: null,
    strokeWidth: .5
};

var foregroundStyle = {
	strokeColor: '#00ff00',
	fillColor: null,
	strokeWidth: 5
}

//Search through layers and find Hidden
//Add them to a new Array list which we will access later.
for (var i = 0; i < len; i++) {
	var str = document.layers[i].name;
	print(str);
		if (str.match(/HIDDEN/gi) == "HIDDEN"){
			hiddenLayers.push(document.layers[i]);
			}	
			else {
				print("Fuck "+ i);
				foreLayers.push(document.layers[i]);							
		}
};

// Take Hidden Layers and assign their paths the (hiddenStyle)
print(hiddenLayers);
for (var i = 0; i < hiddenLayers.length; i++) {
	var children = hiddenLayers[i].children;
	
	for (var j = 0; j < children.length; j++) {
		children[j].style = hiddenStyle;
	};

	hiddenLayers[i].color = '#ff0000';
	hiddenLayers[i].moveBelow(document.layers[lastLayer]);
};

// Take remaining Layers and assign their paths the (foregroundStyle)
for (var i = 0; i < foreLayers.length; i++) {
	var fChild = foreLayers[i].children;
	for (var j = 0; j < fChild.length; j++) {
		fChild[j].style = foregroundStyle;
	};					 
};