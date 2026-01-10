gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.idToCallbackMap = new Map();
gdjs.Untitled_32sceneCode.GDNewTextInputObjects1= [];
gdjs.Untitled_32sceneCode.GDNewTextInputObjects2= [];
gdjs.Untitled_32sceneCode.GDtxt_9595NameObjects1= [];
gdjs.Untitled_32sceneCode.GDtxt_9595NameObjects2= [];
gdjs.Untitled_32sceneCode.GDtxt_9595EmailObjects1= [];
gdjs.Untitled_32sceneCode.GDtxt_9595EmailObjects2= [];
gdjs.Untitled_32sceneCode.GDtxt_9595TextObjects1= [];
gdjs.Untitled_32sceneCode.GDtxt_9595TextObjects2= [];
gdjs.Untitled_32sceneCode.GDFloatingOutButtonDarkBlueObjects1= [];
gdjs.Untitled_32sceneCode.GDFloatingOutButtonDarkBlueObjects2= [];
gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1= [];
gdjs.Untitled_32sceneCode.GDNew3DBoxObjects2= [];


gdjs.Untitled_32sceneCode.userFunc0x8f5010 = function GDJSInlineCode(runtimeScene) {
"use strict";
// Prevent loading the script multiple times
if (!document.getElementById("emailjs-sdk")) {
    var script = document.createElement("script");
    script.id = "emailjs-sdk";
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.async = true;
    
    document.head.appendChild(script);

    // Initialize EmailJS once the script is loaded
    script.onload = function() {
        // REPLACE 'YOUR_PUBLIC_KEY' WITH YOUR ACTUAL KEY FROM EMAILJS DASHBOARD
        emailjs.init({
            publicKey: "yovbECmaMT0rYyRis",
        });
        console.log("EmailJS SDK Loaded");
    };
}
};
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.userFunc0x8f5010(runtimeScene);

}


};gdjs.Untitled_32sceneCode.userFunc0x897e98 = function GDJSInlineCode(runtimeScene) {
"use strict";
// Ensure EmailJS is loaded before trying to send
if (typeof emailjs !== 'undefined') {
    
    // Get values from GDevelop variables (Optional)
    // Example: specific global variables for name and score
    var clientName = runtimeScene.getGame().getVariables().get("CName").getAsString();
    var clientmessage = runtimeScene.getGame().getVariables().get("CMessage").getAsString();
    var clientEmail = runtimeScene.getGame().getVariables().get("CEmail").getAsString();

    // Prepare the parameters matching your EmailJS Template
    var templateParams = {
        name: clientName,
        email: clientEmail,
        message: clientmessage,
        title: "From NH Website"
    };
    
    // Send the email
    // REPLACE 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with actual IDs
    emailjs.send('service_9ksn8er', 'template_37g5zug', templateParams)
        .then(function(response) {
            alert('SUCCESS!');
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        });
    emailjs.send('service_9ksn8er', 'template_3wavmc6', templateParams)
        .then(function(response) {
        }, function(error) {
        });
} else {
    console.log("EmailJS not loaded yet.");
}

};
gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.userFunc0x897e98(runtimeScene);

}


};gdjs.Untitled_32sceneCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FloatingOutButtonDarkBlue"), gdjs.Untitled_32sceneCode.GDFloatingOutButtonDarkBlueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDFloatingOutButtonDarkBlueObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDFloatingOutButtonDarkBlueObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDFloatingOutButtonDarkBlueObjects1[k] = gdjs.Untitled_32sceneCode.GDFloatingOutButtonDarkBlueObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDFloatingOutButtonDarkBlueObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDFloatingOutButtonDarkBlueObjects1 */
gdjs.copyArray(runtimeScene.getObjects("txt_Email"), gdjs.Untitled_32sceneCode.GDtxt_9595EmailObjects1);
gdjs.copyArray(runtimeScene.getObjects("txt_Name"), gdjs.Untitled_32sceneCode.GDtxt_9595NameObjects1);
gdjs.copyArray(runtimeScene.getObjects("txt_Text"), gdjs.Untitled_32sceneCode.GDtxt_9595TextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setString((( gdjs.Untitled_32sceneCode.GDtxt_9595NameObjects1.length === 0 ) ? "" :gdjs.Untitled_32sceneCode.GDtxt_9595NameObjects1[0].getBehavior("Text").getText()));
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setString((( gdjs.Untitled_32sceneCode.GDtxt_9595TextObjects1.length === 0 ) ? "" :gdjs.Untitled_32sceneCode.GDtxt_9595TextObjects1[0].getBehavior("Text").getText()));
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setString((( gdjs.Untitled_32sceneCode.GDtxt_9595EmailObjects1.length === 0 ) ? "" :gdjs.Untitled_32sceneCode.GDtxt_9595EmailObjects1[0].getBehavior("Text").getText()));
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtxt_9595NameObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtxt_9595NameObjects1[i].getBehavior("Text").setText("");
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtxt_9595EmailObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtxt_9595EmailObjects1[i].getBehavior("Text").setText("");
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtxt_9595TextObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtxt_9595TextObjects1[i].getBehavior("Text").setText("");
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDFloatingOutButtonDarkBlueObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDFloatingOutButtonDarkBlueObjects1[i].SetLabelTextOp("Sent!", null);
}
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDNewTextInputObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextInputObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDtxt_9595NameObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDtxt_9595NameObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDtxt_9595EmailObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDtxt_9595EmailObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDtxt_9595TextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDtxt_9595TextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDFloatingOutButtonDarkBlueObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNew3DBoxObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList2(runtimeScene);
gdjs.Untitled_32sceneCode.GDNewTextInputObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextInputObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDtxt_9595NameObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDtxt_9595NameObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDtxt_9595EmailObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDtxt_9595EmailObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDtxt_9595TextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDtxt_9595TextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDFloatingOutButtonDarkBlueObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNew3DBoxObjects2.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
