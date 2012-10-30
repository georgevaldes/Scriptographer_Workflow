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
	strokeWidth: 1
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
				var foreChildren = document.layers[i].children;
				for (var j = 0; j < foreChildren.length; j++) {
					foreChildren[j].style = foregroundStyle; 
				};
				
		}
};

print(hiddenLayers);
for (var i = 0; i < hiddenLayers.length; i++) {
	var children = hiddenLayers[i].children;
	for (var j = 0; j < children.length; j++) {
		children[j].style = hiddenStyle;
	};
	hiddenLayers[i].color = '#ff0000';
	hiddenLayers[i].moveBelow(document.layers[lastLayer]);
};
