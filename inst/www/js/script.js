// A list of CSS defined colors.
var name_hex_rgb = [
    ["aqua", "#00FFFF",	"0, 255, 255"],
    ["black", "#000000", "0, 0, 0"],
    ["blue", "#0000FF",	"0, 0, 255"],
    ["fuchsia", "#FF00FF", "255, 0, 255"],
    ["gray", "#808080",	"128, 128, 128"],
    ["green",	"#008000", "0, 128, 0"],
    ["lime", "#00FF00", "0, 255, 0"],
    ["maroon", "#800000", "128, 0, 0"],
    ["olive",	"#808000", "128, 128, 0"],
    ["purple", "#800080", "128, 0, 128"],	
    ["red", "#FF0000", "255, 0, 0"],
    ["silver", "#C0C0C0", "192, 192, 192"],
    ["teal", "#008080", "0, 128, 128"],
    ["white", "#FFFFFF", "255, 255, 255"],	
    ["yellow", "#FFFF00", "255, 255, 0"],
    ["aliceblue"	,"#F0F8FF",	"240, 248, 255"],
    ["antiquewhite"	,"#FAEBD7",	"250, 235, 215"],
    ["aqua"	,"#00FFFF",	"0, 255, 255"],
    ["aquamarine"	,"#7FFFD4",	"127, 255, 212"],
    ["azure"	,"#F0FFFF",	"1240, 255, 255"],
    ["beige"	,"#F5F5DC",	"245, 245, 220"],
    ["bisque"	,"#FFE4C4",	"255, 228, 196"],
    ["black"	,"#000000",	"0, 0, 0"],	
    ["blanchedalmond"	,"#FFEBCD",	"255, 235, 205"],	
    ["blue"	,"#0000FF",	"0, 0, 255"],	
    ["blueviolet"	,"#8A2BE2",	"138, 43, 226"],	
    ["brown"	,"#A52A2A",	"165, 42, 42"],	
    ["burlywood"	,"#DEB887",	"222, 184, 135"],	
    ["cadetblue"	,"#5F9EA0",	"95, 158, 160"],	
    ["chartreuse"	,"#7FFF00",	"95, 158, 160"],	
    ["chocolate"	,"#D2691E",	"210, 105, 30"],
    ["coral"	,"#FF7F50",	"255, 127, 80"],
    ["cornflowerblue"	,"#6495ED",	"100, 149, 237"],
    ["cornsilk"	,"#FFF8DC",	"255, 248, 220"],
    ["crimson"	,"#DC143C",	"220, 20, 60"],	
    ["cyan"	,"#00FFFF",	"0, 255, 255"],	
    ["darkblue"	,"#00008B",	"0, 0, 139"],	
    ["darkcyan"	,"#008B8B",	"0, 139, 139"],	
    ["darkgoldenrod"	,"#B8860B",	"184, 134, 11"],	
    ["darkgray"	,"#A9A9A9",	"169, 169, 169"],	
    ["darkgreen"	,"#006400",	"0, 100, 0"],	
    ["darkkhaki"	,"#BDB76B",	"189, 183, 107"],	
    ["darkmagenta"	,"#8B008B",	"139, 0, 139"],	
    ["darkolivegreen"	,"#556B2F",	"85, 107, 47"],	
    ["darkorange"	,"#FF8C00",	"255, 140, 0"],	
    ["darkorchid"	,"#9932CC",	"153, 50, 204"],	
    ["darkred"	,"#8B0000",	"139, 0, 0"],	
    ["darksalmon"	,"#E9967A",	"233, 150, 122"],	
    ["darkseagreen"	,"#8FBC8F",	"143, 188, 143"],	
    ["darkslateblue"	,"#483D8B",	"72, 61, 139"],	
    ["darkslategray"	,"#2F4F4F",	"47, 79, 79"],
    ["darkturquoise"	,"#00CED1",	"0, 206, 209"],	
    ["darkviolet"	,"#9400D3",	"148, 0, 211"],	
    ["deeppink"	,"#FF1493",	"255, 20, 147"],	
    ["deepskyblue"	,"#00BFFF",	"0, 191, 255"],	
    ["dimgray"	,"#696969",	"0, 191, 255"],	
    ["dodgerblue"	,"#1E90FF",	"30, 144, 255"],	
    ["firebrick"	,"#B22222",	"178, 34, 34"],	
    ["floralwhite"	,"#FFFAF0",	"255, 250, 240"],	
    ["forestgreen"	,"#228B22",	"34, 139, 34"],	
    ["fuchsia"	,"#FF00FF",	"255, 0, 255"],	
    ["gainsboro"	,"#DCDCDC",	"220, 220, 220"],	
    ["ghostwhite"	,"#F8F8FF",	"248, 248, 255"],	
    ["gold"	,"#FFD700",	"255, 215, 0"],	
    ["goldenrod"	,"#DAA520",	"218, 165, 32"],
    ["gray"	,"#7F7F7F",	"127, 127, 127"],	
    ["green"	,"#008000",	"0, 128, 0"],	
    ["greenyellow"	,"#ADFF2F",	"173, 255, 47"],	
    ["honeydew"	,"#F0FFF0",	"240, 255, 240"],	
    ["hotpink"	,"#FF69B4",	"255, 105, 180"],	
    ["indianred"	,"#CD5C5C",	"205, 92, 92"],	
    ["indigo"	,"#4B0082",	"75, 0, 130"],
    ["ivory"	,"#FFFFF0",	"255, 255, 240"],	
    ["khaki"	,"#F0E68C",	"240, 230, 140"],	
    ["lavender"	,"#E6E6FA",	"230, 230, 250"],	
    ["lavenderblush"	,"#FFF0F5",	"255, 240, 245"],	
    ["lawngreen"	,"#7CFC00",	"124, 252, 0"],
    ["lemonchiffon"	,"#FFFACD",	"255, 250, 205"],
    ["lightblue"	,"#ADD8E6",	"173, 216, 230"],
    ["lightcoral"	,"#F08080",	"240, 128, 128"],	
    ["lightcyan"	,"#E0FFFF",	"224, 255, 255"],	
    ["lightgoldenrodyellow"	,"#FAFAD2",	"250, 250, 210"],	
    ["lightgreen"	,"#90EE90",	"144, 238, 144"],	
    ["lightgrey"	,"#D3D3D3",	"211, 211, 211"],	
    ["lightpink"	,"#FFB6C1",	"255, 182, 193"],	
    ["lightsalmon"	,"#FFA07A",	"255, 160, 122"],	
    ["lightseagreen"	,"#20B2AA",	"32, 178, 170"],	
    ["lightskyblue"	,"#87CEFA",	"135, 206, 250"],	
    ["lightslategray"	,"#778899",	"119, 136, 153"],	
    ["lightsteelblue"	,"#B0C4DE",	"176, 196, 222"],
    ["lightyellow"	,"#FFFFE0",	"255, 255, 224"],	
    ["lime"	,"#00FF00",	"0, 255, 0"],	
    ["limegreen"	,"#32CD32",	"50, 205, 50"],	
    ["linen"	,"#FAF0E6",	"250, 240, 230"],	
    ["magenta"	,"#FF00FF",	"255, 0, 255"],	
    ["maroon"	,"#800000",	"128, 0, 0"],
    ["mediumaquamarine"	,"#66CDAA",	"102, 205, 170"],
    ["mediumblue"	,"#0000CD",	"0, 0, 205"],
    ["mediumorchid"	,"#BA55D3",	"186, 85, 211"],	
    ["mediumpurple"	,"#9370DB",	"147, 112, 219"],	
    ["mediumseagreen"	,"#3CB371",	"60, 179, 113"],
    ["mediumslateblue"	,"#7B68EE",	"123, 104, 238"],	
    ["mediumspringgreen"	,"#00FA9A",	"0, 250, 154"],
    ["mediumturquoise"	,"#48D1CC",	"72, 209, 204"],
    ["mediumvioletred"	,"#C71585",	"199, 21, 133"],
    ["midnightblue"	,"#191970",	"25, 25, 112"],	
    ["mintcream" ,"#F5FFFA",	"245, 255, 250"],	
    ["mistyrose"	,"#FFE4E1",	"255, 228, 225"],	
    ["moccasin"	,"#FFE4B5",	"255, 228, 181"],	
    ["navajowhite"	,"#FFDEAD",	"255, 222, 173"],	
    ["navy"	,"#000080",	"0, 0, 128"],
    ["navyblue"	,"#9FAFDF",	"159, 175, 223"],	
    ["oldlace"	,"#FDF5E6",	"253, 245, 230"],	
    ["olive"	,"#808000",	"128, 128, 0"],
    ["olivedrab"	,"#6B8E23",	"107, 142, 35"],	
    ["orange"	,"#FFA500",	"255, 165, 0"],	
    ["orangered"	,"#FF4500",	"255, 69, 0"],
    ["orchid"	,"#DA70D6",	"218, 112, 214"],
    ["palegoldenrod"	,"#EEE8AA",	"238, 232, 170"],
    ["palegreen"	,"#98FB98",	"152, 251, 152"],
    ["paleturquoise"	,"#AFEEEE",	"175, 238, 238"],	
    ["palevioletred"	,"#DB7093",	"219, 112, 147"],
    ["papayawhip"	,"#FFEFD5",	"255, 239, 213"],
    ["peachpuff"	,"#FFDAB9",	"255, 218, 185"],
    ["peru"	,"#CD853F",	"205, 133, 63"],
    ["pink"	,"#FFC0CB",	"255, 192, 203"],	
    ["plum"	,"#DDA0DD",	"221, 160, 221"],
    ["powderblue"	,"#B0E0E6",	"176, 224, 230"],	
    ["purple"	,"#800080",	"128, 0, 128"],
    ["red"	,"#FF0000",	"255, 0, 0"],
    ["rosybrown"	,"#BC8F8F",	"188, 143, 143"],	
    ["royalblue"	,"#4169E1",	"65, 105, 225"],	
    ["saddlebrown"	,"#8B4513",	"139, 69, 19"],	
    ["salmon"	,"#FA8072",	"250, 128, 114"],
    ["sandybrown"	,"#FA8072",	"244, 164, 96"],	
    ["seagreen"	,"#2E8B57",	"46, 139, 87"],	
    ["seashell"	,"#FFF5EE",	"255, 245, 238"],	
    ["sienna"	,"#A0522D",	"160, 82, 45"],	
    ["silver"	,"#C0C0C0",	"192, 192, 192"],	
    ["skyblue"	,"#87CEEB",	"135, 206, 235"],	
    ["slateblue"	,"#6A5ACD",	"106, 90, 205"],
    ["slategray"	,"#708090",	"112, 128, 144"],	
    ["snow"	,"#FFFAFA",	"255, 250, 250"],	
    ["springgreen"	,"#00FF7F", "0, 255, 127"],	
    ["steelblue"	,"#4682B4",	"70, 130, 180"],	
    ["tan"	,"#D2B48C",	"210, 180, 140"],	
    ["teal"	,"#008080",	"0, 128, 128"],	
    ["thistle"	,"#D8BFD8",	"216, 191, 216"],	
    ["tomato"	,"#FF6347",	"255, 99, 71"],
    ["turquoise"	,"#40E0D0",	"64, 224, 208"],	
    ["violet"	,"#EE82EE",	"238, 130, 238"],	
    ["wheat"	,"#F5DEB3",	"245, 222, 179"],	
    ["white"	,"#FFFFFF",	"255, 255, 255"],	
    ["whitesmoke"	,"#F5F5F5",	"245, 245, 245"],	
    ["yellow"	,"#FFFF00",	"255, 255, 0"],	
    ["yellowgreen"	,"#9ACD32",	"139, 205, 50"]
]

// Grab all the html color input objects and store them into a list.
var color_wheel_input_one = document.getElementById("color_wheel_input_one")
var color_wheel_input_two = document.getElementById("color_wheel_input_two")
var color_wheel_input_three = document.getElementById("color_wheel_input_three")
var color_wheel_input_four = document.getElementById("color_wheel_input_four")
var color_wheel_input_five = document.getElementById("color_wheel_input_five")

// Grab all the html color add buttons and store them into a list.
var add_color_input_one = document.getElementById("color_one_add")
var add_color_input_two = document.getElementById("color_two_add")
var add_color_input_three = document.getElementById("color_three_add")
var add_color_input_four = document.getElementById("color_four_add")
var add_color_input_five = document.getElementById("color_five_add")

// Grab all the encoding buttons and store them into list.
var hex_button_encoding = document.getElementById("hex")
var color_button_encoding =  document.getElementById("color")
var rgb_button_encoding =  document.getElementById("rgb")

// Get the eraser image.
var eraser = document.getElementById("eraser")

// Start encoding as HEX and make clipboard text empty. Keep track
// of elements too.
var encoding = "HEX"
var clipboard_text = ""
var elements = 0

var drag_data = ""
var eraser_dragging = false

document.getElementById("color_one_hex").value = color_wheel_input_one.value
document.getElementById("color_one_rgb").value = singleElementConvertToRGB("HEX", color_wheel_input_one.value)
document.getElementById("color_one_color").value = singleElementConvertToColor("HEX", color_wheel_input_one.value)
document.getElementById("color_two_hex").value = color_wheel_input_two.value
document.getElementById("color_two_rgb").value = singleElementConvertToRGB("HEX", color_wheel_input_two.value)
document.getElementById("color_two_color").value = singleElementConvertToColor("HEX", color_wheel_input_two.value)
document.getElementById("color_three_hex").value = color_wheel_input_three.value
document.getElementById("color_three_rgb").value = singleElementConvertToRGB("HEX", color_wheel_input_three.value)
document.getElementById("color_three_color").value = singleElementConvertToColor("HEX", color_wheel_input_three.value)
document.getElementById("color_four_hex").value = color_wheel_input_four.value
document.getElementById("color_four_rgb").value = singleElementConvertToRGB("HEX", color_wheel_input_four.value)
document.getElementById("color_four_color").value = singleElementConvertToColor("HEX", color_wheel_input_four.value)
document.getElementById("color_five_hex").value = color_wheel_input_five.value
document.getElementById("color_five_rgb").value = singleElementConvertToRGB("HEX", color_wheel_input_five.value)
document.getElementById("color_five_color").value = singleElementConvertToColor("HEX", color_wheel_input_five.value)

/** START-ENCODING-BUTTONS **/

// First color encoding button is HEX
hex_button_encoding.addEventListener("click", function() {
    hex_button_encoding.classList.add('highlight_encoding_select');
    color_button_encoding.classList.remove('highlight_encoding_select');
    rgb_button_encoding.classList.remove('highlight_encoding_select');
    if(elements != 0) {
        if(encoding === "COLOR") {
            clipboardDeleteConvert(convertToHex("COLOR", clipboard_text))
        } else {
            clipboardDeleteConvert(convertToHex("RGB", clipboard_text))
        }
    }
    
    encoding = "HEX"
})
// Second color encoding button is COLOR
color_button_encoding.addEventListener("click", function() {
    hex_button_encoding.classList.remove('highlight_encoding_select');
    color_button_encoding.classList.add('highlight_encoding_select');
    rgb_button_encoding.classList.remove('highlight_encoding_select');
    if(elements != 0) {
        if(encoding === "RGB") {
            clipboardDeleteConvert(convertToColor("RGB", clipboard_text))
        } else {
            clipboardDeleteConvert(convertToColor("HEX", clipboard_text))
        }
    }
    encoding = "COLOR"
})
// Third color encoding button is RGB
rgb_button_encoding.addEventListener("click", function() {
    hex_button_encoding.classList.remove('highlight_encoding_select');
    color_button_encoding.classList.remove('highlight_encoding_select');
    rgb_button_encoding.classList.add('highlight_encoding_select');
    if(elements != 0) {
        if(encoding === "HEX") {
            clipboardDeleteConvert(convertToRGB("HEX", clipboard_text))
        } else {
            clipboardDeleteConvert(convertToRGB("COLOR", clipboard_text))
        }
    }
    encoding = "RGB"
})

/** END ENCODING-BUTTONS **/

/** START COLOR-ENCODING-CONVERSION */

// Convert to hex value from "encoding"
// COLOR is off format "blue"
// HEX is of format "#114132"
// RGB is of format rgb(0.3131,0.1314,0.1241)
function singleElementConvertToHex(from, value) {
    if(from === "COLOR") {
        value = value.substring(1, value.length-1)
        for (let i = 0; i < name_hex_rgb.length; i++) {
            if(name_hex_rgb[i][0] === value) {
                console.log(name_hex_rgb[i][0])
                return name_hex_rgb[i][1].toLowerCase() 
            }
        }
    } else {
        red = parseFloat(value[0].substring(4, value[0].length)) * 256
        green = parseFloat(value[1]) * 256
        blue = parseFloat(value[2].substring(0, value[2].length - 1)) * 256

        hexr = parseInt(red).toString(16);
        hexg = parseInt(green).toString(16);
        hexb = parseInt(blue).toString(16);

        if (r.length == 1) 
            r = "0" + r;
        if (g.length == 1) 
            g = "0" + g;
        if (b.length == 1)
            b = "0" + b;
        return "#" + r + g + b;
    }
}
function singleElementConvertToRGB(from, value) {
    if(from === "HEX") {
        var value = value.match(/[A-Za-z0-9]{2}/g);
        value = value.map(function(v) { return (parseInt(v, 16)/256)});
        // [n, n, n] -> rgb(n,n,n)
        return "rgb(" + value.join(",") + ")";
    } else {
        for (let i = 0; i < name_hex_rgb.length; i++) {
            if(name_hex_rgb[i][0] === value) {
                splitRGBInts = name_hex_rgb[i][2].split(",")
                parsedInts = splitRGBInts.map(function(v) { return (parseInt(v)/256)});
                return("rgb(" + parsedInts.join(",") + ")")
            }
        }
    }
}

function singleElementConvertToColor(from, value) {
    if(from === "RGB") {
        return threeDimensionalEuclideanDistance(value)
    } else {
        return singleElementConvertToColor("RGB", singleElementConvertToRGB("HEX", value))
    }
}

function convertToHex(from, value) {
    if(from === "COLOR") {
        if(elements === 1) {
            return  "\"" + singleElementConvertToHex("COLOR", value) +  "\""
        } else {
            all_colors_split = value.split(",")
            all_colors_split[0] = all_colors_split[0].substring(2, all_colors_split[0].length)
            all_colors_split[all_colors_split.length - 1] = all_colors_split[all_colors_split.length - 1].substring(0, all_colors_split[all_colors_split.length - 1].length - 1)
            
            for(let i = 0; i < all_colors_split.length; i++) {
                all_colors_split[i] = singleElementConvertToHex("COLOR", all_colors_split[i])
            }

            return "c(\"" + all_colors_split.join("\",\"") + "\")"
        }

    } else {
        if(elements === 1) {
            return singleElementConvertToHex("RGB", value)
        } else {

        }
    }
}

// Convert to color value from "encoding"
function convertToColor(from, value) {
    if(from === "RGB") {
       if(elements === 1) {
            return "\"" + singleElementConvertToColor("RGB", value) + "\"" 
       } else {

       }
    } else {
       if(elements === 1) {
            return "\"" +  singleElementConvertToColor("HEX", value) + "\""
       } else {
            all_colors_split = value.split(",")
            all_colors_split[0] = all_colors_split[0].substring(2, all_colors_split[0].length)
            all_colors_split[all_colors_split.length - 1] = all_colors_split[all_colors_split.length - 1].substring(0, all_colors_split[all_colors_split.length - 1].length - 1)
            
            for(let i = 0; i < all_colors_split.length; i++) {
                all_colors_split[i] = singleElementConvertToColor("HEX", all_colors_split[i])
            }
            return("c(\"" + all_colors_split.join("\",\"") + "\")")
        }
    }
}
// Convert to RGB value from "encoding"
function convertToRGB(from, value) {
    if(from === "HEX") {
        if(elements === 1) {
            return singleElementConvertToRGB("HEX", value)
        } else {

        }
    } else {
        if(elements === 1) {
            return singleElementConvertToRGB("COLOR", value)
        } else {

        }
    }
}

// Must input an RGB value of format rgb(0.532,0.135,0.13113)
function threeDimensionalEuclideanDistance(rgb) {
    var value = rgb.split(",")
    
    red = parseFloat(value[0].substring(4, value[0].length)) * 256
    green = parseFloat(value[1]) * 256
    blue = parseFloat(value[2].substring(0, value[2].length - 1)) * 256

    min_e = Infinity
    min_e_index = -1 
    
    for (let i = 0; i < name_hex_rgb.length; i++) {
        this_colors_rgb = name_hex_rgb[i][2].split(",")
        this_rgb_red = parseInt(this_colors_rgb[0])
        this_rgb_green = parseInt(this_colors_rgb[1])
        this_rgb_blue = parseInt(this_colors_rgb[2])

        red_calc = (this_rgb_red - red)**2
        blue_calc = (this_rgb_blue - blue)**2
        green_calc = (this_rgb_green - green)**2

        e_dist = Math.sqrt(red_calc + blue_calc + green_calc)
        if(e_dist < min_e) {
            min_e = e_dist
            min_e_index = i
        }
    }

    return(name_hex_rgb[min_e_index][0])
}

/** END COLOR-ENCODING-CONVERSION */

// Drag event for the colors
function onColorsDrag(event) {
    eraser_dragging = false
    new_text_clipboard_text = event.target.value
    event
        .dataTransfer
        .setData("Text",  new_text_clipboard_text);
}

function clipboardDeleteConvert(newtext) {
    clipboard_text = newtext
    document.getElementById("clipboard_area").value = clipboard_text
    copyTextToClipboard(clipboard_text)
}

function allowTextCanvasDrop(event) {
    event.preventDefault()
}

function onTextCanvasDrop(event) {
    // If eraser is dropped in here, then we want to erase the whole canvas
    if(eraser_dragging) {
        clipboard_text = ""
        document.getElementById("clipboard_area").value = clipboard_text
        copyTextToClipboard(" ")
        elements = 0
        eraser_dragging = false
    // If eraser is not dragging then it is colors, then we need to update the text.
    } else {
        clipboardAddChanged(new_text_clipboard_text)
    }
}



// When the current clipboard content should change, call this.
// For example, when new colors are added on.
function clipboardAddChanged(newtext) {
    // Need to modify current clipboard content and variable by appending
    // new color.
    if(encoding === "HEX") {
        newtext = "\"" + newtext + "\""
    } else if(encoding === "COLOR") {
        newtext = "\"" + singleElementConvertToColor("HEX", newtext) + "\""
    } else if(encoding == "RGB") {
        newtext = singleElementConvertToRGB("HEX", newtext) 
    }

    if(elements === 0) {
        clipboard_text = newtext
    } else if(elements === 1) {
        clipboard_text = "c(" + clipboard_text + "," + newtext + ")"
    } else if(elements > 1) {
        clipboard_text = clipboard_text.substring(0, clipboard_text.length - 1) + "," + newtext + ")"
    }
    document.getElementById("clipboard_area").value = clipboard_text
    elements += 1
    copyTextToClipboard(clipboard_text)
}


// Call this when clipboard text has changed.
function copyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log(text)
        console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
        console.log(text)
        console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
}

// Drag event for eraser dragging
function onEraserDrag(event) {
    eraser_dragging = true
}

// Erase the content on clipboard when eraser is clicked.
eraser.addEventListener("click", function(event) {
    if(elements === 1) {
        clipboard_text = " "
        elements = 0 
    } else if(elements > 1) {
        if(encoding === "RGB") {
            splitted = document.getElementById("clipboard_area").value.split("),")
            splitted.pop()
            clipboard_text = splitted.join("),") + "))"
        } else {
            splitted = document.getElementById("clipboard_area").value.split(",")
            splitted.pop()
            clipboard_text = splitted.join(",") + ")"
        }
        elements -= 1
        if(elements === 1) {
            clipboard_text = clipboard_text.substring(2, clipboard_text.length - 1)
        }
    }
    document.getElementById("clipboard_area").value = clipboard_text
    copyTextToClipboard(clipboard_text)
})


/** START ON-ADD-COLOR-INPUT**/ 
color_wheel_input_one.addEventListener("input", function(event) {
    document.getElementById("color_one_hex").value = color_wheel_input_one.value
    document.getElementById("color_one_rgb").value = singleElementConvertToRGB("HEX", color_wheel_input_one.value)
    document.getElementById("color_one_color").value = singleElementConvertToColor("HEX", color_wheel_input_one.value)
    
    clipboardAddChanged(color_wheel_input_one.value)
})
color_wheel_input_two.addEventListener("input", function(event) {
    document.getElementById("color_two_hex").value = color_wheel_input_two.value
    document.getElementById("color_two_rgb").value = singleElementConvertToRGB("HEX", color_wheel_input_two.value)
    document.getElementById("color_two_color").value = singleElementConvertToColor("HEX", color_wheel_input_two.value)
    
    clipboardAddChanged(color_wheel_input_two.value)
})
color_wheel_input_three.addEventListener("input", function(event) {
    document.getElementById("color_three_hex").value = color_wheel_input_three.value
    document.getElementById("color_three_rgb").value = singleElementConvertToRGB("HEX", color_wheel_input_three.value)
    document.getElementById("color_three_color").value = singleElementConvertToColor("HEX", color_wheel_input_three.value)
    
    clipboardAddChanged(color_wheel_input_three.value)
})
color_wheel_input_four.addEventListener("input", function(event) {
    document.getElementById("color_four_hex").value = color_wheel_input_four.value
    document.getElementById("color_four_rgb").value = singleElementConvertToRGB("HEX", color_wheel_input_four.value)
    document.getElementById("color_four_color").value = singleElementConvertToColor("HEX", color_wheel_input_four.value)
    
    clipboardAddChanged(color_wheel_input_four.value)
})
color_wheel_input_five.addEventListener("input", function(event) {
    document.getElementById("color_five_hex").value = color_wheel_input_five.value
    document.getElementById("color_five_rgb").value = singleElementConvertToRGB("HEX", color_wheel_input_five.value)
    document.getElementById("color_five_color").value = singleElementConvertToColor("HEX", color_wheel_input_five.value)
    
    clipboardAddChanged(color_wheel_input_five.value)
})

/** END ON-ADD-COLOR-INPUT **/ 
/** START ON-ADD-COLOR-BUTTON **/ 

add_color_input_one.addEventListener("click", function(event) {
    clipboardAddChanged(color_wheel_input_one.value)
})
add_color_input_two.addEventListener("click", function(event) {
    clipboardAddChanged(color_wheel_input_two.value)
})
add_color_input_three.addEventListener("click", function(event) {
    clipboardAddChanged(color_wheel_input_three.value)
})
add_color_input_four.addEventListener("click", function(event) {
    clipboardAddChanged(color_wheel_input_four.value)
})
add_color_input_five.addEventListener("click", function(event) {
    clipboardAddChanged(color_wheel_input_five.value)
})


/** END ON-ADD-COLOR-BUTTON **/ 
