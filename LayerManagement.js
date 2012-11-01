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

var values = {
    lineweight: .5,
    checkbox: true
};

//Global Variables
var hiddenLayers = new Array();
var foreLayers = new Array();
var len = document.layers.length; 
var lastLayer = len - 1;
//print(lastLayer);


// Define the interface components to edit each value. Note that they
// need to use the same names as the properties in the values object:
var components = { 
    lineweight: {
        type: 'number', label: 'Hidden Layer Lineweight',
        range: [0, 1], steppers: true, units: 'point'
    },
    ruler1: {
        type: 'ruler'
    },
       checkbox: {
        type: 'boolean', label: 'Hidden Layers Visible?',
    },
    create: {
        type: 'button', value: 'Dale!',
        onClick: function() {

        	//visibility
        	var hiddenvis = values.checkbox;

			//Path Styles
			var foregroundStyle = {
				strokeColor: '#000000',
				fillColor: null,
				strokeWidth: 2
			};

            var hiddenStyle = {
				strokeColor: '#0040FF',
			    fillColor: null,
			    strokeWidth: values.lineweight
			};
            
            //Search through layers and find Hidden
			//Add them to a new Array list which we will access later.
			for (var i = 0; i < len; i++) {
				var str = document.layers[i].name;
				print(str);
					if (str.match(/HIDDEN/gi) == "HIDDEN"){
						hiddenLayers.push(document.layers[i]);
						}	
						else {
							foreLayers.push(document.layers[i]);							
					}
			}

			// Take Hidden Layers and assign their paths the (hiddenStyle)
			// print(hiddenLayers);
			for (var i = 0; i < hiddenLayers.length; i++) {
				var children = hiddenLayers[i].children;
				
				for (var j = 0; j < children.length; j++) {
					children[j].style = hiddenStyle;
				}

				hiddenLayers[i].color = '#ff0000';
				hiddenLayers[i].moveBelow(document.layers[lastLayer]);
				hiddenLayers[i].visible = hiddenvis;
			}

			// Take remaining Layers and assign their paths the (foregroundStyle)
			for (var i = 0; i < foreLayers.length; i++) {
				var fChild = foreLayers[i].children;
				for (var j = 0; j < fChild.length; j++) {
					fChild[j].style = foregroundStyle;
				}					 
			}
        }
    }    
};

// Now we create the palette window using the components
// and values definitions:
var palette = new Palette('Layer Management v.01', components, values);




