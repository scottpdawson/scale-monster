// remap jQuery to $
(function($){})(window.jQuery);

    var CR = [["C3",1],["D3",2],["E3",3],["F3",1],["G3",2],["A4",3],["B4",4],["C4",5]];
    var CL = [["C2",5],["D2",4],["E2",3],["F2",2],["G2",1],["A3",3],["B3",2],["C3",1]];

    var DR = [["D3",1],["E3",2],["F#3",3],["G3",1],["A4",2],["B4",3],["C#4",4],["D4",5]];
    var DL = [["D2",5],["E2",4],["F#2",3],["G2",2],["A3",1],["B3",3],["C#3",2],["D3",1]];

    var ER = [["E3",1],["F#3",2],["G#3",3],["A4",1],["B4",2],["C#4",3],["Eb4",4],["E4",5]];
    var EL = [["E2",5],["F#2",4],["G#2",3],["A3",2],["B3",1],["C#3",3],["Eb3",2],["E3",1]];
    
    var FR = [["F3",1],["G3",2],["A4",3],["Bb4",4],["C4",1],["D4",2],["E4",3],["F4",4]];
    var FL = [["F2",5],["G2",4],["A3",3],["Bb3",2],["C3",1],["D3",3],["E3",2],["F3",1]];

    var GR = [["G3",1],["A4",2],["B4",3],["C4",1],["D4",2],["E4",3],["F#4",4],["G4",5]];
    var GL = [["G2",5],["A3",4],["B3",3],["C3",2],["D3",1],["E3",3],["F#3",2],["G3",1]];

    var AR = [["A4",1],["B4",2],["C#4",3],["D4",1],["E4",2],["F#4",3],["G#4",4],["A5",5]];
    var AL = [["A3",5],["B3",4],["C#3",3],["D3",2],["E3",1],["F#3",3],["G#3",2],["A4",1]];
    
    var BR = [["B4",1],["C#4",2],["Eb4",3],["E4",1],["F#4",2],["G#4",3],["Bb5",4],["B5",5]];
    var BL = [["B3",4],["C#3",3],["Eb3",2],["E3",1],["F#3",4],["G#3",3],["Bb4",2],["B4",1]];

    var BbR = [["Bb3",2],["C3",1],["D3",2],["Eb3",3],["F3",1],["G3",2],["A4",3],["Bb4",4]];
    var BbL = [["Bb2",3],["C2",2],["D2",1],["Eb2",4],["F2",3],["G2",2],["A3",1],["Bb3",3]];

    var EbR = [["Eb3",3],["F3",1],["G3",2],["G#3",3],["Bb4",4],["C4",1],["D4",2],["Eb4",3]];
    var EbL = [["Eb2",3],["F2",2],["G2",1],["G#2",4],["Bb3",3],["C3",2],["D3",1],["Eb3",3]];

    var AbR = [["G#3",3],["Bb4",4],["C4",1],["C#4",2],["Eb4",3],["F4",1],["G4",2],["G#4",3]];
    var AbL = [["G#2",3],["Bb3",2],["C3",1],["C#3",4],["Eb3",3],["F3",2],["G3",1],["G#3",3]];

    var DbR = [["C#3",2],["Eb3",3],["F3",1],["F#3",2],["G#3",3],["Bb4",4],["C4",1],["C#4",2]];
    var DbL = [["C#2",3],["Eb2",2],["F2",1],["F#2",4],["G#2",3],["Bb3",2],["C3",1],["C#3",3]];

    var GbR = [["F#3",2],["G#3",3],["Bb4",4],["B4",1],["C#4",2],["Eb4",3],["F4",1],["F#4",2]];
    var GbL = [["F#2",4],["G#2",3],["Bb3",2],["B3",1],["C#3",3],["Eb3",2],["F3",1],["F#3",4]];

    var CbR = [["B3",1],["C#3",2],["Eb3",3],["E3",1],["F#3",2],["G#3",3],["Bb4",4],["B4",5]];
    var CbL = [["B2",4],["C#2",3],["Eb2",2],["E2",1],["F#2",4],["G#2",3],["Bb3",2],["B3",1]];

    var AmR = [["A4",1],["B4",2],["C4",3],["D4",1],["E4",2],["F4",3],["G4",4],["A5",5]];
    var AmL = [["A3",5],["B3",4],["C3",3],["D3",2],["E3",1],["F3",3],["G3",2],["A4",1]];

    var AmHR = [["A4",1],["B4",2],["C4",3],["D4",1],["E4",2],["F4",3],["G#4",4],["A5",5]];
    var AmHL = [["A3",5],["B3",4],["C3",3],["D3",2],["E3",1],["F3",3],["G#3",2],["A4",1]];

    var EmR = [["E3",1],["F#3",2],["G3",3],["A4",1],["B4",2],["C4",3],["D4",4],["E4",5]];
    var EmL = [["E2",5],["F#2",4],["G2",3],["A3",2],["B3",1],["C3",3],["D3",2],["E3",1]];

    var EmHR = [["E3",1],["F#3",2],["G3",3],["A4",1],["B4",2],["C4",3],["Eb4",4],["E4",5]];
    var EmHL = [["E2",5],["F#2",4],["G2",3],["A3",2],["B3",1],["C3",3],["Eb3",2],["E3",1]];

    var EmMR = [["E3",1],["F#3",2],["G3",3],["A4",1],["B4",2],["C#4",3],["Eb4",4],["E4",5]];
    var EmML = [["E2",5],["F#2",4],["G2",3],["A3",2],["B3",1],["C#3",3],["Eb3",2],["E3",1]];

    var DmR = [["D3",1],["E3",2],["F3",3],["G3",1],["A4",2],["Bb4",3],["C4",4],["D4",5]];
    var DmL = [["D2",5],["E2",4],["F2",3],["G2",2],["A3",1],["Bb3",3],["C3",2],["D3",1]];

    var DmHR = [["D3",1],["E3",2],["F3",3],["G3",1],["A4",2],["Bb4",3],["C#4",4],["D4",5]];
    var DmHL = [["D2",5],["E2",4],["F2",3],["G2",2],["A3",1],["Bb3",3],["C#3",2],["D3",1]];

    var DmMR = [["D3",1],["E3",2],["F3",3],["G3",1],["A4",2],["B4",3],["C#4",4],["D4",5]];
    var DmML = [["D2",5],["E2",4],["F2",3],["G2",2],["A3",1],["B3",3],["C#3",2],["D3",1]];

    var GmR = [["G3",1],["A4",2],["Bb4",3],["C4",1],["D4",2],["Eb4",3],["F4",4],["G4",5]];
    var GmL = [["G2",5],["A3",4],["Bb3",3],["C3",2],["D3",1],["Eb3",3],["F3",2],["G3",1]];

    var CmR = [["C3",1],["D3",2],["Eb3",3],["F3",1],["G3",2],["G#3",3],["Bb4",4],["C4",5]];
    var CmL = [["C2",5],["D2",4],["Eb2",3],["F2",2],["G2",1],["G#2",3],["Bb3",2],["C3",1]];

    var FmR = [["F3",1],["G3",2],["G#3",3],["Bb4",4],["C4",1],["C#4",2],["Eb4",3],["F4",4]];
    var FmL = [["F2",5],["G2",4],["G#2",3],["Bb3",2],["C3",1],["C#3",3],["Eb3",2],["F3",1]];

    var BmR = [["B4",1],["C#4",2],["D4",3],["E4",1],["F#4",2],["G4",3],["A5",4],["B5",5]];
    var BmL = [["B3",4],["C#3",3],["D3",2],["E3",1],["F#3",4],["G3",3],["A4",2],["B4",1]];

    var BbmR = [["Bb3",2],["C3",1],["C#3",2],["Eb3",3],["F3",1],["F#3",2],["G#3",3],["Bb4",4]];
    var BbmL = [["Bb2",2],["C2",1],["C#2",3],["Eb2",2],["F2",1],["F#2",4],["G#2",3],["Bb3",2]];

    var EbmR = [["Eb3",3],["F3",1],["F#3",2],["G#3",3],["Bb4",4],["B4",1],["C#4",2],["Eb4",3]];
    var EbmL = [["Eb2",2],["F2",1],["F#2",4],["G#2",3],["Bb3",2],["B3",1],["C#3",3],["Eb3",2]];

    var AbmR = [["G#3",3],["Bb4",4],["B4",1],["C#4",2],["Eb4",3],["E4",1],["F#4",2],["G#4",3]];
    var AbmL = [["G#2",3],["Bb3",2],["B3",1],["C#3",3],["Eb3",2],["E3",1],["F#3",4],["G#3",3]];

    var GbmR = [["F#3",3],["G#3",4],["A4",1],["B4",2],["C#4",3],["D4",1],["E4",2],["F#4",3]];
    var GbmL = [["F#2",4],["G#2",3],["A3",2],["B3",1],["C#3",3],["D3",2],["E3",1],["F#3",4]];

    var DbmR = [["C#3",3],["Eb3",4],["E3",1],["F#3",2],["G#3",3],["A4",1],["B4",2],["C#4",3]];
    var DbmL = [["C#2",3],["Eb2",2],["E2",1],["F#2",4],["G#2",3],["A3",2],["B3",1],["C#3",3]];

    $(function() {  

        var isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function() {
                return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
            }
        };


        if(!isMobile.any()) {
            Th.init({beatSamples:20000});
            var ThDemo = {
                sineFunc:function(si, len, frq, chn, opt) {
                    var fad=Math.min(1,(opt.sustain || 1)*(len-si)/len);
                    return Math.floor(fad*128*256*(
                        Math.sin(2.0 * Math.PI * frq * si  / 44100)
                    ));            
                }
            };

            ThDemo.instSimple=function(arg) {
                if(Th.Inst.get("InstSimple") == null) {
                    Th.Inst.create("InstSimple",ThDemo.sineFunc);
                }       
                Th.Inst.get("InstSimple").getSound(arg).play();
            }  
        } else {
            // hide play buttons
            $(".playScale").hide();
        }

        addKey("A2","A","w");
        addKey("Bb2","A#<br/>Bb","b");
        addKey("B2","B","w");
        addKey("C2","C","w");
        addKey("C#2","C#<br />Db","b");
        addKey("D2","D","w");
        addKey("Eb2","D#<br />Eb","b");
        addKey("E2","E","w");
        addKey("F2","F","w");
        addKey("F#2","F#<br />Gb","b");
        addKey("G2","G","w");
        addKey("G#2","G#<br />Ab","b");
        addKey("A3","A","w");
        addKey("Bb3","A#<br/>Bb","b");
        addKey("B3","B","w");
        addKey("C3","C","w");
        addKey("C#3","C#<br />Db","b");
        addKey("D3","D","w");
        addKey("Eb3","D#<br />Eb","b");
        addKey("E3","E","w");
        addKey("F3","F","w");
        addKey("F#3","F#<br />Gb","b");
        addKey("G3","G","w");
        addKey("G#3","G#<br />Ab","b");
        addKey("A4","A","w");
        addKey("Bb4","A#<br/>Bb","b");
        addKey("B4","B","w");
        addKey("C4","C","w");
        addKey("C#4","C#<br />Db","b");
        addKey("D4","D","w");
        addKey("Eb4","D#<br />Eb","b");
        addKey("E4","E","w");
        addKey("F4","F","w");
        addKey("F#4","F#<br />Gb","b");
        addKey("G4","G","w");
        addKey("G#4","G#<br />Ab","b");
        addKey("A5","A","w");
        addKey("Bb5","A#<br/>Bb","b");
        addKey("B5","B","w");

        $(".pianoKey").each(function() {
            $(this).append('<span class="finger fingerLeft"></span>');
            $(this).append('<span class="finger fingerRight"></span>');
        });

        $(".pianoKey").click(function() {
            var note = $(this).attr("data-note");
            ThDemo.instSimple(note);
        });

        $(".scaleSelect").change(function() {
            // handle key changes from select list
            chordName = $(this).val();
            resetKeys();

            $(".leftHand .showScale").attr("data-scale", chordName + "L");
            $(".leftHand .playScale").attr("data-scale", chordName + "L");

            $(".handsTogether .showScale").attr("data-scale", chordName + "L " + chordName + "R");
            $(".handsTogether .playScale").attr("data-scale", chordName + "L " + chordName + "R");

            $(".rightHand .showScale").attr("data-scale", chordName + "R");
            $(".rightHand .playScale").attr("data-scale", chordName + "R");
        });

        // set to first chord in list // todo: future handle passing chord on command line
        var scaleDefault = getParameterByName('scale');
        if (scaleDefault && scaleDefault.length <= 5) {
            $(".scaleSelect").val(scaleDefault).change();
        } else {
            $(".scaleSelect").val("C").change();
        }
        

        $(".playScale").click(function() {
            
            // start fresh
            resetKeys();

            var scale = $(this).attr("data-scale");
            var res = scale.split(" ");
            for (var i = 0; i < res.length; i++) {

                thisScaleArray = window[res[i]];
                
                var fingering = "fingerRight";
                if(res[i].indexOf('L') != -1) {
                    fingering = "fingerLeft";
                }

                for (var k = 0; k < thisScaleArray.length; k++) {
                    var thisKey = $(".pianoKey[data-note='" + thisScaleArray[k][0] + "']");
                    var thisFingering = thisScaleArray[k][1];
                    $("." + fingering, thisKey).text(thisFingering);
                }

                playScale(thisScaleArray, fingering);
            }
            
        });

        $(".showScale").click(function() {
            var scale = $(this).attr("data-scale");
            var res = scale.split(" ");

            if ($(".active").length) {
                resetKeys();
            } else {
                for (var i = 0; i < res.length; i++) {

                    thisScaleArray = window[res[i]];
                    
                    var fingering = "fingerRight";
                    if(res[i].indexOf('L') != -1) {
                        fingering = "fingerLeft";
                    }

                    for (var k = 0; k < thisScaleArray.length; k++) {
                        var thisKey = $(".pianoKey[data-note='" + thisScaleArray[k][0] + "']");
                        var thisFingering = thisScaleArray[k][1];
                        $("." + fingering, thisKey).text(thisFingering);
                    }

                    showScale(thisScaleArray, fingering);
                }
            }
            
        });

    });

    function showScale(notes, fingering, i) {
        i = i || 1;
        fingering = fingering || "fingerRight";
        if (i <= notes.length) {
            var thisKey = $(".pianoKey[data-note='" + notes[i-1][0] + "']");
            thisKey.addClass("active").addClass("active" + fingering);
            setTimeout(function() {
                showScale(notes, fingering, i);
            }, 0, notes, fingering, i++);
        }
    }

    function playScale(notes, fingering, i) {
        i = i || 1;
        fingering = fingering || "fingerRight";
        if (i <= notes.length) {
            var thisKey = $(".pianoKey[data-note='" + notes[i-1][0] + "']");
            thisKey.click();
            keyHighlight(thisKey, fingering);
            setTimeout(function() {
                playScale(notes, fingering, i);
            }, 500, notes, fingering, i++);
        }
    }

    function keyHighlight(thisKey, fingering) {
        thisKey.addClass("active").addClass("active" + fingering);
        setTimeout(function() {
            thisKey.removeClass("active").removeClass("activefingerLeft").removeClass("activefingerRight");
        }, 500, thisKey);
    }

    function resetKeys() {
        $(".pianoKey").each(function() {
            $(this).removeClass("active").removeClass("activefingerLeft").removeClass("activefingerRight");
        });
    }

    function addKey(keyCode, keyName, keyType) {
        if (keyType == "w") {
            keyType = "whiteKey";
        } else {
            keyType = "blackKey";
        }
        $(".noteContainer").append('<div class="pianoKey ' + keyType + '" data-note="' + keyCode + '"><span class="keyName">' + keyName + '</span></div>');
    }

    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }