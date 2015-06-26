var theTask = "";
var lockIncreaseCountOf = false;
var evalMode = false;
var agenMode = false;
var showFace = false;

var sliderCollection = new Array();
sliderCollection[0] = new Array();
sliderCollection[0][0] = new Array("general","faceGender",2,1, 1.57, 0.0, 8.0, -100);		// 1
sliderCollection[0][1] = new Array("general","faceStyle",2,0, 1.57, 0.0, 8.0, -100);		// 2
sliderCollection[0][2] = new Array("general","skinDetails",2,1, 0.80, 0.0, 6.0, -110);	    // 3
sliderCollection[0][3] = new Array("general","skinColor",2,1, 1.57, 0.0, 9.0, -100);	    // 4
sliderCollection[0][4] = new Array("general","hairColor",4,2, 0.80, 0.5, 9.0, -80, "haircolor");	 // 5

sliderCollection[1] = new Array();
sliderCollection[1][0] = new Array("makeUp","eyeShadow",2,0, 1.57, 0.0, 6.0, -95);		// 6
sliderCollection[1][1] = new Array("makeUp","lipStick",2,0, 1.57, 0.0, 6.0, -130);		// 7
sliderCollection[1][2] = new Array("makeUp","rouge",2,0, 0.80, 0.0, 9.0, -110);			// 8

sliderCollection[2] = new Array();
sliderCollection[2][0] = new Array("eyes","eyeDepth",2,1, 2.50, 0.0, 7.0, -105);		// 9
sliderCollection[2][1] = new Array("eyes","eyeDistance",2,1, 1.57, 0.0, 7.0, -105);		// 10
sliderCollection[2][2] = new Array("eyes","eyeHeight",2,1, 1.57, 0.0, 7.0, -105);		// 11
sliderCollection[2][3] = new Array("eyes","eyeSize",2,1, 1.57, 0.0, 7.0, -105);			// 12
sliderCollection[2][4] = new Array("eyes","eyeOpening",2,1, 1.57, 0.0, 7.0, -105);		// 13
sliderCollection[2][5] = new Array("eyes","eyeShape",6,3, 1.57, 0.0, 7.0, -105);		// 14
sliderCollection[2][6] = new Array("eyes","eyeColor",6,1, 1.57, 0.0, 7.0, -105, "eyecolor"); // 15	
sliderCollection[2][7] = new Array("eyes","eyeRotation",2,1, 1.57, 0.0, 7.0, -105); // 15	

sliderCollection[3] = new Array();
sliderCollection[3][0] = new Array("nose","noseShape",2,1, 0.10, 0.0, 7.0, -110);		// 16
sliderCollection[3][1] = new Array("nose","noseLength",2,1, 0.10, 0.0, 8.0, -110);		// 17
sliderCollection[3][2] = new Array("nose","noseWidth",2,1, 1.57, 0.0, 6.0, -110);		// 18
sliderCollection[3][3] = new Array("nose","noseBridge",2,1, 1.57, 0.0, 6.0, -100);		// 19
sliderCollection[3][4] = new Array("nose","noseCartilage",2,1, 0.10, 0.0, 8.0, -110);	// 20

sliderCollection[4] = new Array();
sliderCollection[4][0] = new Array("eyebrows","eyebrowsLine",2,1, 1.57, 0.0, 7.5, -90);		// 21
sliderCollection[4][1] = new Array("eyebrows","eyebrowsShape",4,2, 1.57, 0.0, 7.5, -90);	// 22
sliderCollection[4][2] = new Array("eyebrows","eyebrowsColor",4,2, 1.57, 0.0, 7.5, -90, "haircolor");	// 23

sliderCollection[5] = new Array();
sliderCollection[5][0] = new Array("outerface","foreheadHeight",2,1, 1.57, 0.0, 8.0, -80);	// 24
sliderCollection[5][1] = new Array("outerface","earSize",2,1, 1.57, 0.0, 8.0, -100);		// 25
sliderCollection[5][2] = new Array("outerface","throatSize",2,1, 1.57, 0.0, 7.0, -140);		// 26

sliderCollection[6] = new Array();
sliderCollection[6][0] = new Array("jaw","cheeksBone",2,1, 2.10, 0.0, 7.0, -120);		// 27
sliderCollection[6][1] = new Array("jaw","jawShape",2,1, 1.57, 0.0, 7.5, -120);			// 28
sliderCollection[6][2] = new Array("jaw","jawChin",2,1, 1.57, 0.0, 6.5, -140);			// 29
sliderCollection[6][3] = new Array("jaw","jawLength",2,1, 2.00, 0.0, 8.5, -130);		// 30

sliderCollection[7] = new Array();
sliderCollection[7][0] = new Array("mouth","mouthVolume",2,1, 1.57, 0.0, 7.0, -130);	// 31
sliderCollection[7][1] = new Array("mouth","lipRatio",2,1, 1.57, 0.0, 6.0, -125);	// 32
sliderCollection[7][2] = new Array("mouth","mouthWidth",2,1, 1.57, 0.0, 7.0, -130);		// 33
sliderCollection[7][3] = new Array("mouth","mouthHeight",2,1, 1.57, 0.0, 7.0, -130);	// 34
sliderCollection[7][4] = new Array("mouth","mouthDepth",2,1, 0.10, 0.0, 7.0, -130);		// 35
sliderCollection[7][5] = new Array("mouth","mouthOverlap",2,1, 1.57, 0.0, 7.0, -130);		// 33
					
if(dataArray == null){
	var dataArray = new Array();

	dataArray["sessions"] = 0;
	dataArray["userUID"] = 0;
	dataArray["theAge"] = 0;
	dataArray["theGender"] = "";
	dataArray["theCountry"] = "";
	dataArray["playingGames"] = 0;
	dataArray["watchingMovies"] = 0;
	
	dataArray["acceptTOU"] = 0; 	
	dataArray["latinSquare"] = ""; 	
	dataArray["finalQuestion1"] = 0; 	
	dataArray["finalQuestion2"] = 0; 	
	dataArray["finalQuestion3"] = 0; 	
	dataArray["finalQuestion4"] = 0; 
	dataArray["ipadress"] = ""; 	
	dataArray["screenWidth"] = 0; 	
	dataArray["screenHeight"] = 0; 	 	
	dataArray["systemLanguage"] = ""; 	 	
	dataArray["userLanguage"] = ""; 	 	
	dataArray["cookies"] = ""; 	 	
	dataArray["platform"] = ""; 	 	
	dataArray["appCodeName"] = ""; 	 	
	dataArray["browser"] = ""; 	 	 	
	dataArray["product"] = ""; 	 	
	dataArray["webgl"] = "";
	dataArray["timeDate"] = "";
	dataArray["timeWelcome"] = 0;
	dataArray["timeStart"] = 0;
	dataArray["timeEnd"] = 0;
	dataArray["timeMainSessionTime"] = 0;
	dataArray["timeDuration"] = 0;
	dataArray["faceGender"] = 0.5;
	dataArray["faceStyle"] = 0.0;
	dataArray["skinDetails"] = 0.0;
	dataArray["skinColor"] = 0.0;
	dataArray["hairColor"] = 0.0;
	dataArray["eyeColor"] = 0.0;
	dataArray["eyeShape"] = 0.0;
	dataArray["eyeOpening"] = 0.0;
	dataArray["eyeSize"] = 0.0;
	dataArray["eyeHeight"] = 0.0;
	dataArray["eyeDistance"] = 0.0;
	dataArray["eyeDepth"] = 0.0;	
	dataArray["eyeRotation"] = 0.0;	
	dataArray["eyebrowsColor"] = 0.0;
	dataArray["eyebrowsShape"] = 0.0;
	dataArray["eyebrowsLine"] = 0.0;
	dataArray["noseShape"] = 0.0;
	dataArray["noseLength"] = 0.0;
	dataArray["noseWidth"] = 0.0;
	dataArray["noseBridge"] = 0.0;
	dataArray["noseCartilage"] = 0.0;
	dataArray["foreheadHeight"] = 0.0;
	dataArray["cheeksBone"] = 0.0;
	dataArray["jawShape"] = 0.0;
	dataArray["jawChin"] = 0.0;
	dataArray["jawLength"] = 0.0;
	dataArray["earSize"] = 0.0;
	dataArray["throatSize"] = 0.0;
	dataArray["mouthVolume"] = 0.0;
	dataArray["mouthWidth"] = 0.0;
	dataArray["mouthHeight"] = 0.0;
	dataArray["mouthDepth"] = 0.0;
	dataArray["mouthOverlap"] = 0.0;
	dataArray["lipRatio"] = 0.0;
	dataArray["eyeShadow"] = 0.0;	
	dataArray["lipStick"] = 0.0;	
	dataArray["rouge"] = 0.0;	
	dataArray["faceGenderClk"] = 0;
	dataArray["faceStyleClk"] = 0;
	dataArray["skinDetailsClk"] = 0;
	dataArray["skinColorClk"] = 0;
	dataArray["hairColorClk"] = 0;
	dataArray["eyeColorClk"] = 0;
	dataArray["eyeShapeClk"] = 0;
	dataArray["eyeOpeningClk"] = 0;
	dataArray["eyeSizeClk"] = 0;
	dataArray["eyeHeightClk"] = 0;
	dataArray["eyeDistanceClk"] = 0;
	dataArray["eyeDepthClk"] = 0;	
	dataArray["eyeRotationClk"] = 0;	
	dataArray["eyebrowsColorClk"] = 0;
	dataArray["eyebrowsShapeClk"] = 0;
	dataArray["eyebrowsLineClk"] = 0;
	dataArray["noseShapeClk"] = 0;
	dataArray["noseLengthClk"] = 0;
	dataArray["noseWidthClk"] = 0;
	dataArray["noseBridgeClk"] = 0;
	dataArray["noseCartilageClk"] = 0;
	dataArray["foreheadHeightClk"] = 0;
	dataArray["cheeksBoneClk"] = 0;
	dataArray["jawShapeClk"] = 0;
	dataArray["jawChinClk"] = 0;
	dataArray["jawLengthClk"] = 0;
	dataArray["earSizeClk"] = 0;
	dataArray["throatSizeClk"] = 0;
	dataArray["mouthVolumeClk"] = 0;
	dataArray["mouthWidthClk"] = 0;
	dataArray["mouthHeightClk"] = 0;
	dataArray["mouthDepthClk"] = 0;
	dataArray["mouthOverlapClk"] = 0;
	dataArray["lipRatioClk"] = 0;
	dataArray["eyeShadowClk"] = 0.0;	
	dataArray["lipStickClk"] = 0.0;	
	dataArray["rougeClk"] = 0.0;	
	dataArray["faceGenderMM"] = 0;
	dataArray["faceStyleMM"] = 0;
	dataArray["skinDetailsMM"] = 0;
	dataArray["skinColorMM"] = 0;
	dataArray["hairColorMM"] = 0;
	dataArray["eyeColorMM"] = 0;
	dataArray["eyeShapeMM"] = 0;
	dataArray["eyeOpeningMM"] = 0;
	dataArray["eyeSizeMM"] = 0;
	dataArray["eyeHeightMM"] = 0;
	dataArray["eyeDistanceMM"] = 0;
	dataArray["eyeDepthMM"] = 0;	
	dataArray["eyeRotationMM"] = 0;	
	dataArray["eyebrowsColorMM"] = 0;
	dataArray["eyebrowsShapeMM"] = 0;
	dataArray["eyebrowsLineMM"] = 0;
	dataArray["noseShapeMM"] = 0;
	dataArray["noseLengthMM"] = 0;
	dataArray["noseWidthMM"] = 0;
	dataArray["noseBridgeMM"] = 0;
	dataArray["noseCartilageMM"] = 0;
	dataArray["foreheadHeightMM"] = 0;
	dataArray["cheeksBoneMM"] = 0;
	dataArray["jawShapeMM"] = 0;
	dataArray["jawChinMM"] = 0;
	dataArray["jawLengthMM"] = 0;
	dataArray["earSizeMM"] = 0;
	dataArray["throatSizeMM"] = 0;
	dataArray["mouthVolumeMM"] = 0;
	dataArray["mouthWidthMM"] = 0;
	dataArray["mouthHeightMM"] = 0;
	dataArray["mouthDepthMM"] = 0;
	dataArray["mouthOverlapMM"] = 0;
	dataArray["lipRatioMM"] = 0;
	dataArray["eyeShadowMM"] = 0.0;	
	dataArray["lipStickMM"] = 0.0;	
	dataArray["rougeMM"] = 0.0;	
	dataArray["faceGenderRst"] = 0;
	dataArray["faceStyleRst"] = 0;
	dataArray["skinDetailsRst"] = 0;
	dataArray["skinColorRst"] = 0;
	dataArray["hairColorRst"] = 0;
	dataArray["eyeColorRst"] = 0;
	dataArray["eyeShapeRst"] = 0;
	dataArray["eyeOpeningRst"] = 0;
	dataArray["eyeSizeRst"] = 0;
	dataArray["eyeHeightRst"] = 0;
	dataArray["eyeDistanceRst"] = 0;
	dataArray["eyeDepthRst"] = 0;	
	dataArray["eyeRotationRst"] = 0;	
	dataArray["eyebrowsColorRst"] = 0;
	dataArray["eyebrowsShapeRst"] = 0;
	dataArray["eyebrowsLineRst"] = 0;
	dataArray["noseShapeRst"] = 0;
	dataArray["noseLengthRst"] = 0;
	dataArray["noseWidthRst"] = 0;
	dataArray["noseBridgeRst"] = 0;
	dataArray["noseCartilageRst"] = 0;
	dataArray["foreheadHeightRst"] = 0;
	dataArray["cheeksBoneRst"] = 0;
	dataArray["jawShapeRst"] = 0;
	dataArray["jawChinRst"] = 0;
	dataArray["jawLengthRst"] = 0;
	dataArray["earSizeRst"] = 0;
	dataArray["throatSizeRst"] = 0;
	dataArray["mouthVolumeRst"] = 0;
	dataArray["mouthWidthRst"] = 0;
	dataArray["mouthHeightRst"] = 0;
	dataArray["mouthDepthRst"] = 0;
	dataArray["mouthOverlapRst"] = 0;
	dataArray["lipRatioRst"] = 0;
	dataArray["eyeShadowRst"] = 0.0;	
	dataArray["lipStickRst"] = 0.0;	
	dataArray["rougeRst"] = 0.0;	
	dataArray["generalMoreBtnClicked"] = 0;
	dataArray["eyesMoreBtnClicked"] = 0;
	dataArray["eyebrowsMoreBtnClicked"] = 0;
	dataArray["noseMoreBtnClicked"] = 0;
	dataArray["mouthMoreBtnClicked"] = 0;
	dataArray["makeUpMoreBtnClicked"] = 0;
	dataArray["mainResetClicked"] = 0;
	dataArray["outerfaceMoreBtnClicked"] = 0;
	dataArray["interfaceResetClicked"] = 0;
	dataArray["jawMoreBtnClicked"] = 0;
	dataArray["lightsClicked"] = 0;
	dataArray["todoMoreBtnClicked"] = 0;
	dataArray["sendClicked"] = 0;

	
	initArrayfromCookie();
	/*
	for (item in dataArray) {
		setCheckedValue(item, dataArray[item]);
	}*/
}

var counterCookies;

var counterArray = new Array();
counterArray["sendClicked"] = 0;
counterArray["lightsClicked"] = 0;
counterArray["todoMoreBtnClicked"] = 0;
counterArray["interfaceResetClicked"] = 0;
counterArray["makeUpMoreBtnClicked"] = 0;
counterArray["mainResetClicked"] = 0;
counterArray["mouthMoreBtnClicked"] = 0;
counterArray["outerfaceMoreBtnClicked"] = 0;
counterArray["noseMoreBtnClicked"] = 0;
counterArray["eyebrowsMoreBtnClicked"] = 0;
counterArray["eyesMoreBtnClicked"] = 0;
counterArray["jawMoreBtnClicked"] = 0;
counterArray["generalMoreBtnClicked"] = 0;

counterArray["faceGenderClk"] = 0;
counterArray["faceStyleClk"] = 0;
counterArray["skinDetailsClk"] = 0;
counterArray["skinColorClk"] = 0;
counterArray["hairColorClk"] = 0;
counterArray["eyeColorClk"] = 0;
counterArray["eyeShapeClk"] = 0;
counterArray["eyeOpeningClk"] = 0;
counterArray["eyeSizeClk"] = 0;
counterArray["eyeHeightClk"] = 0;
counterArray["eyeDistanceClk"] = 0;
counterArray["eyeDepthClk"] = 0;	
counterArray["eyeRotationClk"] = 0;	
counterArray["eyebrowsColorClk"] = 0;
counterArray["eyebrowsShapeClk"] = 0;
counterArray["eyebrowsLineClk"] = 0;
counterArray["noseShapeClk"] = 0;
counterArray["noseLengthClk"] = 0;
counterArray["noseWidthClk"] = 0;
counterArray["noseBridgeClk"] = 0;
counterArray["noseCartilageClk"] = 0;
counterArray["foreheadHeightClk"] = 0;
counterArray["cheeksBoneClk"] = 0;
counterArray["jawShapeClk"] = 0;
counterArray["jawChinClk"] = 0;
counterArray["jawLengthClk"] = 0;
counterArray["earSizeClk"] = 0;
counterArray["throatSizeClk"] = 0;
counterArray["mouthVolumeClk"] = 0;
counterArray["mouthWidthClk"] = 0;
counterArray["mouthHeightClk"] = 0;
counterArray["mouthDepthClk"] = 0;
counterArray["mouthOverlapClk"] = 0;
counterArray["lipRatioClk"] = 0;
counterArray["eyeShadowClk"] = 0.0;	
counterArray["lipStickClk"] = 0.0;	
counterArray["rougeClk"] = 0.0;	

counterArray["faceGenderMM"] = 0;
counterArray["faceStyleMM"] = 0;
counterArray["skinDetailsMM"] = 0;
counterArray["skinColorMM"] = 0;
counterArray["hairColorMM"] = 0;
counterArray["eyeColorMM"] = 0;
counterArray["eyeShapeMM"] = 0;
counterArray["eyeOpeningMM"] = 0;
counterArray["eyeSizeMM"] = 0;
counterArray["eyeHeightMM"] = 0;
counterArray["eyeDistanceMM"] = 0;
counterArray["eyeDepthMM"] = 0;	
counterArray["eyeRotationMM"] = 0;	
counterArray["eyebrowsColorMM"] = 0;
counterArray["eyebrowsShapeMM"] = 0;
counterArray["eyebrowsLineMM"] = 0;
counterArray["noseShapeMM"] = 0;
counterArray["noseLengthMM"] = 0;
counterArray["noseWidthMM"] = 0;
counterArray["noseBridgeMM"] = 0;
counterArray["noseCartilageMM"] = 0;
counterArray["foreheadHeightMM"] = 0;
counterArray["cheeksBoneMM"] = 0;
counterArray["jawShapeMM"] = 0;
counterArray["jawChinMM"] = 0;
counterArray["jawLengthMM"] = 0;
counterArray["earSizeMM"] = 0;
counterArray["throatSizeMM"] = 0;
counterArray["mouthVolumeMM"] = 0;
counterArray["mouthWidthMM"] = 0;
counterArray["mouthHeightMM"] = 0;
counterArray["mouthDepthMM"] = 0;
counterArray["mouthOverlapMM"] = 0;
counterArray["lipRatioMM"] = 0;
counterArray["eyeShadowMM"] = 0.0;	
counterArray["lipStickMM"] = 0.0;	
counterArray["rougeMM"] = 0.0;	

counterArray["faceGenderRst"] = 0;
counterArray["faceStyleRst"] = 0;
counterArray["skinDetailsRst"] = 0;
counterArray["skinColorRst"] = 0;
counterArray["hairColorRst"] = 0;
counterArray["eyeColorRst"] = 0;
counterArray["eyeShapeRst"] = 0;
counterArray["eyeOpeningRst"] = 0;
counterArray["eyeSizeRst"] = 0;
counterArray["eyeHeightRst"] = 0;
counterArray["eyeDistanceRst"] = 0;
counterArray["eyeDepthRst"] = 0;	
counterArray["eyeRotationRst"] = 0;	
counterArray["eyebrowsColorRst"] = 0;
counterArray["eyebrowsShapeRst"] = 0;
counterArray["eyebrowsLineRst"] = 0;
counterArray["noseShapeRst"] = 0;
counterArray["noseLengthRst"] = 0;
counterArray["noseWidthRst"] = 0;
counterArray["noseBridgeRst"] = 0;
counterArray["noseCartilageRst"] = 0;
counterArray["foreheadHeightRst"] = 0;
counterArray["cheeksBoneRst"] = 0;
counterArray["jawShapeRst"] = 0;
counterArray["jawChinRst"] = 0;
counterArray["jawLengthRst"] = 0;
counterArray["earSizeRst"] = 0;
counterArray["throatSizeRst"] = 0;
counterArray["mouthVolumeRst"] = 0;
counterArray["mouthWidthRst"] = 0;
counterArray["mouthHeightRst"] = 0;
counterArray["mouthDepthRst"] = 0;
counterArray["mouthOverlapRst"] = 0;
counterArray["lipRatioRst"] = 0;
counterArray["eyeShadowRst"] = 0.0;	
counterArray["lipStickRst"] = 0.0;	
counterArray["rougeRst"] = 0.0;	
/*
$.ajax({
	async: true,
    url: "http://ipinfo.io/json",
    success: function(response) {
        setDataCookie("ipadress", response.ip);
    },
    dataType: 'json',
    statusCode: {
        429: function() {
            alert( "Number of tries exceeded" );
        }
    }
});
*/
$.get("http://ipinfo.io", function(response) {
	setDataCookie("ipadress", response.ip);
}, "jsonp");			
 
$.ajax({
	url: '//freegeoip.net/json/',
	type: 'POST',
	dataType: 'jsonp',
	success: function(response) {
		setDataCookie("ipadress", response.ip);
	}
});

function getBrowser(_field) {
	var browser = navigator.sayswho = (function(){
		var N = navigator.appName, ua= navigator.userAgent, tem;

		// if IE11+
		if (new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})").exec(ua) !== null) {
			var M= ["Internet Explorer"];
			if(M && (tem= ua.match(/rv:([0-9]{1,}[\.0-9]{0,})/))!= null) M[2]= tem[1];
			M= M? [M[0], M[2]]: [N, navigator.appVersion,'-?'];
			return M;
		}

		var M= ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
		if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
		M= M? [M[1], M[2]]: [N, navigator.appVersion,'-?'];
		
		return M;
	})();
	//console.log(browser[0] + " " + browser[1]);
	if(_field == "all") return browser;
	else return browser[0] + " " + browser[1];
}

function findMetaData() {
	setDataCookie("screenWidth", window.innerWidth);
	setDataCookie("screenHeight", window.innerHeight);
	setDataCookie("systemLanguage", navigator.language);
	setDataCookie("userLanguage", selectedLanguage);
	setDataCookie("cookies", navigator["cookieEnabled"]);
	setDataCookie("platform", navigator.platform);
	setDataCookie("product", navigator.product);		
	setDataCookie("appCodeName", navigator.appName);		
	setDataCookie("appVersion", navigator.appVersion);		
	setDataCookie("webgl", !!window.WebGLRenderingContext);
	setDataCookie("browser", getBrowser());
	
}

//console.log("appCodeName: " + navigator.appName);

function initArrayfromCookie(){
	for(var item in dataArray) {
		
		if(typeof $.cookie(item) != 'undefined' || $.cookie(item) != null){
			//console.log("item " + item + " cookie: " + $.cookie(item));
			dataArray[item] = $.cookie(item);
		} else {
			remapDataArray(item);
		}
	}
	//console.log($.cookie());
}

function remapDataArray(_item){
	if(_item){
		for(var sliderGrp = 0; sliderGrp < sliderCollection.length; sliderGrp++){
			for(var slider = 0; slider < sliderCollection[sliderGrp].length; slider++){
				if(_item == sliderCollection[sliderGrp][slider][1]) {
					dataArray[_item] = sliderCollection[sliderGrp][slider][3] / sliderCollection[sliderGrp][slider][2];
				}
			}
		}
	} else {
		for(var item in dataArray) {
			for(var sliderGrp = 0; sliderGrp < sliderCollection.length; sliderGrp++){
				for(var slider = 0; slider < sliderCollection[sliderGrp].length; slider++){
					if(item == sliderCollection[sliderGrp][slider][1]) {
						dataArray[item] = sliderCollection[sliderGrp][slider][3] / sliderCollection[sliderGrp][slider][2];
					}
				}
			}
		}
	}
}

function getDataCookie(_id){
	if($.cookie(_id) == null){
		$.cookie(_id, 0);
	}
	return $.cookie(_id);
}

function setDataCookie(_id, _value){
	if(!evalMode){
		$.cookie(_id, _value, { expires: 7 });
		dataArray[_id] = _value;	
	}else {
		dataArray[_id] = _value;	
	}
	//console.log("dataArray[" + _id +"] = "+ dataArray[_id]);
}

function clearOldUserUID(){
	$.removeCookie("userUID");
	dataArray["userUID"] = "";
}

function removeAllDataCookies(){
	for(var item in dataArray) {
	   	if(item != "userUID"){
			$.removeCookie(item);
			dataArray[item] = null;
			for(var sliderGrp = 0; sliderGrp < sliderCollection.length; sliderGrp++){
				for(var slider = 0; slider < sliderCollection[sliderGrp].length; slider++){
					if(item == sliderCollection[sliderGrp][slider][1]) {
						dataArray[item] = sliderCollection[sliderGrp][slider][3] / sliderCollection[sliderGrp][slider][2];
					}
				}
			}
		}
	}
	clearListCookies();
}

function clearListCookies()
{   
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++)
    {   
        var spcook =  cookies[i].split("=");
        deleteCookie(spcook[0]);
    }
    function deleteCookie(cookiename)
    {
        var d = new Date();
        d.setDate(d.getDate() - 1);
        var expires = ";expires="+d;
        var name = cookiename;
        var value="";
        document.cookie = name + "=" + value + expires + "; path=/acc/html";                    
    }
}

function loadCookies(){
	//console.log($.cookie());
	initArrayfromCookie();
	for (item in dataArray) {
		setCheckedValue(item, dataArray[item]);
	}
	
}

function setCheckedValue(_id, _value) {
	if (_id){
		if($("#acceptTOU").length && $("#acceptTOU").val().length){
			if(_value == null || _value < 2) $("#acceptTOU").attr('checked', false);
			else $("#acceptTOU").attr('checked', true);
		}
		
		if($("input[name=" + _id + "]").length && $("input[name=" + _id + "]").val().length){
			if(_value == null || _value == 0) $("input[name=" + _id + "]").attr('checked', false);
			else $("input[name=" + _id + "][value=" + _value + "]").attr('checked', true);
		}
		
		switch (_id) {
			case "theAge":
				$("select[name=" + _id + "] option[value=" + _value + "]").attr('selected', 'selected');
			break;
			
			case "theCountry":

				if(_value != "") $("select[name=" + _id + "] option[value=" + _value + "]").attr('selected', 'selected');
				//if($.cookie("theCountry")){
				//$("select[name='theCountry']").get(0).selectedIndex = $.cookie("theCountry") + 1;
				//console.log("tc val: " + _value);
				$("select[name='theCountry']").val(_value);
			//} else {
				//$("select[name='theCountry']").get(0).selectedIndex = 0;
				//console.log("wtf");
			//}

			break;
		}
	}
}

function showUIElement(_id) {
	$("#uiRow_" +_id).show();
	$("select[name=" + _id + "]").trigger('change');
	$("input[name=" + _id + "]").trigger('change');
	$("#submitButton").trigger("change");
	$("#submitButton").fadeOut(250);
}

				
function checkForUserID(){
	var theUserID;
	
	if(getDataCookie("userUID") == "" || getDataCookie("userUID") == 0 ) {	
		theUserID = uuid();
		setDataCookie("userUID", theUserID);
	} else {
		theUserID = getDataCookie("userUID");
	}
	
	//console.log("User ID: " + theUserID);
	return theUserID;
}
				
function uuid()
{
   var jetzt = new Date();
   var from = 10000000000000;
   var to = 99999999999999;
   var rnd = Math.floor(Math.random() * (to - from + 1) + from);
   return rnd;
}

function deleteNeedTask(){
	$.removeCookie("needTask");
	$.removeCookie("sessions");
}

function getLatinSquareTask() {
	var needTask;
	var sessionCount;
	
	if(	parseInt($.cookie("needTask")) === 0 || 
		parseInt($.cookie("needTask")) === null || 
		typeof $.cookie("needTask") === "undefined")
	{
		$.ajax({ async: false, crossDomain: false, cache: true, type: "GET", url: "php/getLatinSquare.php", success: function(response) {	
			needTask = response;
			$.cookie("needTask", needTask);
			//console.log("no cookie, new cookie: " + needTask);
		}});
	} else {
		needTask = $.cookie("needTask");
		//console.log("first cookie: " + needTask);
	}
	//numberTrials = parseInt(getDataCookie("userUID"));
	sessionCount = parseInt(getDataCookie("sessions"));
	
	//console.log("needed latinSquare: " + needTask + " session: " + parseInt(getDataCookie("sessions")) + " next: " + getLatinSquare(needTask, (sessionCount%6)));
	
	setDataCookie("latinSquare", getLatinSquare(needTask, (sessionCount%6)));
	return getDataCookie("latinSquare");
}

function getLatinSquare(_index, _column){
	// based on http://www.yorku.ca/mack/RN-Counterbalancing.html
	var latinSq = new Array();
	latinSq["A"] = new Array("A","B","F","C","E","D");
	latinSq["B"] = new Array("B","C","A","D","F","E");
	latinSq["C"] = new Array("C","D","B","E","A","F");
	latinSq["D"] = new Array("D","E","C","F","B","A");
	latinSq["E"] = new Array("E","F","D","A","C","B");
	latinSq["F"] = new Array("F","A","E","B","D","C");
	
	return latinSq[_index][ _column];
}

function btnLoadFromXML(_id, _value) {
	$("#infoBoxBackground").fadeIn(200);
	document.getElementById("infoBoxText").innerHTML = "";

	$("#infoBox").css("top", window.innerHeight/2);
	var btnClickedTag = _id + "MoreBtnClicked";
	
	if(parseInt(getDataCookie(btnClickedTag)) != null || typeof parseInt(getDataCookie(btnClickedTag)) != "undefined") setDataCookie(btnClickedTag, parseInt(getDataCookie(btnClickedTag)) + 1);
	
	infoBoxOpen = true;
	

	$.ajax({async: true, crossDomain: false, cache: true, url: "data/sites.xml", dataType: "xml", success: function(xml) {
		$(xml).find('site').each(function(){
		
			var id = $(this).attr('id');
			var title = $(this).find('title[lang="' + selectedLanguage + '"]').text();
			var url = $(this).find('url').text();
			var text = $(this).find('text[lang="' + selectedLanguage + '"]').html();
			
			if ( id == _id) {
				document.getElementById("infoBoxTitle").innerHTML = title;
				
				if(url && url != ""){
					$("#infoBoxImage").css("background", "url('" + url + "') no-repeat center");
					$("#infoBoxImage").show();
				} else {
					$("#infoBoxImage").hide();
				}
				var button = $(this).find('text[lang="' + selectedLanguage + '"]').attr('button');
				
				if( button != null || typeof button != "undefined"){ 
					document.getElementById("buttonHolder").innerHTML = "<a id='okay' class='button' href='#'>" +  $(this).find('text[lang="' + selectedLanguage + '"]').attr('button') + "</a>";
					$("#okay").click(function(e) {
						$("#infoBoxBackground").fadeOut(200, function(){
							document.getElementById("buttonHolder").innerHTML = null;
							if(_id == "todo"){
								showFace = true;
							}
						});
						infoBoxOpen = _value;
					});
				}else{
					document.getElementById("buttonHolder").innerHTML = "";
					$("#infoBoxBackground").click(function(e) {	
						$("#infoBoxBackground").fadeOut(200);
						infoBoxOpen = _value;
					});
				}
				
				if(_id == "todo"){
					var latinSquareLetter = getLatinSquareTask();
					
					//console.log("latinSquareLetter "  + latinSquareLetter);
					var task = $(this).find('task' + latinSquareLetter + '[lang="' + selectedLanguage + '"]').html();
					theTask = task;
					document.getElementById("infoBoxText").innerHTML = "<div class='sp_sub_table_centeredCell task'>" + task + "</div><br /><p></p>";
					document.getElementById("infoBoxText").innerHTML += text;
					document.getElementById("theMission").innerHTML = task + " (" + $.cookie("sessions") + "/6)";
				} else {
					document.getElementById("infoBoxText").innerHTML = text;
				}
			}
	});}});
}

function increaseCountOf(_name, _suffix) {
	if(evalMode == false && agenMode == false && faceMakerStarted == true && showFace == true){
		var dataName = _name + _suffix;
		var cookieString = "";
		
		if(_suffix == "Clk"){
			if(sliderInUse == true && lockIncreaseCountOf == false){
				lockIncreaseCountOf	= true;
				if(typeof dataArray[dataName] == "undefined" || isNaN(dataArray[dataName]) == true) dataArray[dataName] = 0;
				dataArray[dataName] = parseInt(dataArray[dataName]) + 1;
				
			}
		} else {

				if(typeof dataArray[dataName] == "undefined" || isNaN(dataArray[dataName]) == true) dataArray[dataName] = 0;
				
				if(_suffix == "Rst"){
					dataName_Clk = _name + "Clk"; 
					if(typeof dataArray[dataName_Clk] == "undefined" || isNaN(dataArray[dataName_Clk]) == true) dataArray[dataName_Clk] = 0;
					dataArray[dataName_Clk] =parseInt(dataArray[dataName_Clk]) - 1;
					//console.log(dataName_Clk +" = "+ dataArray[dataName_Clk]);
				}
				
				dataArray[dataName] = parseInt(dataArray[dataName]) + 1;
			
		}
	
		//console.log(dataName +" = "+ dataArray[dataName]);
		for(var item in counterArray){
			if(typeof dataArray[item] == "undefined" || isNaN(dataArray[item]) == true) dataArray[item] = 0;

			cookieString += dataArray[item] + " ";
			
		}
		
		saveCounterCookies(cookieString);

		cookieString = cookieString.substr(0, (cookieString.length - 1))
	}
}

function saveCounterCookies(_string){
	$.cookie("cookieString", _string);
}

function loadCounterCookies(){
	//console.log($.cookie("cookieString"));
	if(	parseInt($.cookie("cookieString")) == null || 
		typeof $.cookie("cookieString") == "undefined")
	{
		//console.log("resetted");
		resetCounterCookies();
	} else{
		
		var counterCookieString = $.cookie("cookieString");
		var counterCookieSplit = counterCookieString.split(" ");
		var iter = 0;
		
		for(var item in counterArray){
			if(typeof counterCookieSplit[iter] == "undefined" || isNaN(counterCookieSplit[iter]) == true) counterCookieSplit[iter] = 0;
			dataArray[item] = parseInt(counterCookieSplit[iter]);
			
			iter++;
		}
	}
	//console.log($.cookie("cookieString"));
}
function resetCounterCookies(){
	var cookieString = "";
	for(var item in counterArray){
		dataArray[item] = 0;
		cookieString += "0 ";
	}
	
	saveCounterCookies(cookieString);
}

function deleteCookieString() {
	$.removeCookie("cookieString");
}