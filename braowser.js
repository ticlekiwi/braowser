/*!
 Braowser - 1.0.7
 Copyright © 2016 Florian Nicolas
 Licensed under the MIT license.
 https://github.com/ticlekiwi/braowser.js
 !*/

var classes = '';
var os = navigator.platform;
var vendor = navigator.vendor;
var user_agent = navigator.userAgent;
var version = null;
var name = '';
var is_ie = false;

/* Get operating system
 ----------------------------------------------------------------------------------------*/


if (/Mac/.test(os)) {
    classes += " mac";
} else if (/Linux/.test(os)) {
    classes += " linux";

} else if (/Win/.test(os)) {
    classes += " windows";
}
// Windows Phone must come first because its UA also contains "Android"
if (/windows phone/i.test(user_agent)) {
    classes += " windows_phone";
}

if (/android/i.test(user_agent)) {
    classes += " android";
}
// iOS detection from: http://stackoverflow.com/a/9039885/177710
if (/iPad|iPhone|iPod/.test(user_agent) && !window.MSStream) {
    classes += " ios";
}

/* Get mobile or touch screen
 ----------------------------------------------------------------------------------------*/
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
        classes += " mobile";
}
if('ontouchstart' in window || navigator.msMaxTouchPoints){
    classes += " touch";
}

/* Get browser
 ----------------------------------------------------------------------------------------*/

if (/Apple/.test(vendor)) {
    name = 'Safari';
    classes += " safari";
} else if (/Google/.test(vendor)){
    name = 'Chrome';
    classes += " chrome";
} else if (/Firefox/.test(user_agent)) {
    name = 'Firefox';
    classes += " firefox";
} else if (/Edge/.test(user_agent)) {
    name = 'Edge';
    classes += " edge";
} else if (/MSIE/.test(user_agent)) {
    name = 'Internet Explorer';
    classes += " ie";
    is_ie = true;
    version = user_agent.match(/MSIE (\d+(?:\.\d+)+(?:b\d*)?)/);
} else if (/Gecko|Mozilla/.test(user_agent)) {
    name = 'Mozilla';
    version = user_agent.match(/rv:(\d+(?:\.\d+)+)/);
} else if (window.opera != undefined) {
    name = 'Opera';
    classes += " opera";
} 
if (!version) {
    var regex = new RegExp(name + '(?:\\s|\\/)(\\d+(?:\\.\\d+)+(?:(?:a|b)\\d*)?)');
    var result = user_agent.match(regex);
    version = parseFloat(result[1]);
}


/* Special IE Cases
 ----------------------------------------------------------------------------------------*/

if(version == 'MSIE 8.0,8.0'){
    version = '8';
    if(!is_ie)
        classes += " ie";
} else if(version == 'MSIE 9.0,9.0'){
    version = '9';
    if(!is_ie)
        classes += " ie";
} else if(version == 'MSIE 10.0,10.0'){
    version = '10';
    if(!is_ie)
        classes += " ie";
} else if(version == 'rv:11.0,11.0'){
    version = '11';
    if(!is_ie)
        classes += " ie";
}

/* Add Version
 ----------------------------------------------------------------------------------------*/

classes += " v-" + version;


/* Check if is retina
 ----------------------------------------------------------------------------------------*/

if (window.devicePixelRatio >= 2) {
    classes += " retina";
} 

/* Add Classes
 ----------------------------------------------------------------------------------------*/

document.documentElement.className += classes;
console.log('braowser.js : ' + classes);


/* Braowser method to check class
 ----------------------------------------------------------------------------------------*/

function braowser_hasClass(classes){
    return ((' ' + document.documentElement.className + ' ').indexOf(classes) > -1);
}



