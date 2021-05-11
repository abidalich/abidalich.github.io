gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.repeatCount3 = 0;

gdjs.Main_32MenuCode.repeatIndex3 = 0;

gdjs.Main_32MenuCode.GDStartObjects1= [];
gdjs.Main_32MenuCode.GDStartObjects2= [];
gdjs.Main_32MenuCode.GDStartObjects3= [];
gdjs.Main_32MenuCode.GDCredentialsObjects1= [];
gdjs.Main_32MenuCode.GDCredentialsObjects2= [];
gdjs.Main_32MenuCode.GDCredentialsObjects3= [];
gdjs.Main_32MenuCode.GDQuitObjects1= [];
gdjs.Main_32MenuCode.GDQuitObjects2= [];
gdjs.Main_32MenuCode.GDQuitObjects3= [];
gdjs.Main_32MenuCode.GDInstructionsObjects1= [];
gdjs.Main_32MenuCode.GDInstructionsObjects2= [];
gdjs.Main_32MenuCode.GDInstructionsObjects3= [];
gdjs.Main_32MenuCode.GDLevelSelectObjects1= [];
gdjs.Main_32MenuCode.GDLevelSelectObjects2= [];
gdjs.Main_32MenuCode.GDLevelSelectObjects3= [];
gdjs.Main_32MenuCode.GDMainObjects1= [];
gdjs.Main_32MenuCode.GDMainObjects2= [];
gdjs.Main_32MenuCode.GDMainObjects3= [];
gdjs.Main_32MenuCode.GDMuteButtonObjects1= [];
gdjs.Main_32MenuCode.GDMuteButtonObjects2= [];
gdjs.Main_32MenuCode.GDMuteButtonObjects3= [];
gdjs.Main_32MenuCode.GDScoreObjects1= [];
gdjs.Main_32MenuCode.GDScoreObjects2= [];
gdjs.Main_32MenuCode.GDScoreObjects3= [];
gdjs.Main_32MenuCode.GDCoinSpriteObjects1= [];
gdjs.Main_32MenuCode.GDCoinSpriteObjects2= [];
gdjs.Main_32MenuCode.GDCoinSpriteObjects3= [];
gdjs.Main_32MenuCode.GDWelcomeObjects1= [];
gdjs.Main_32MenuCode.GDWelcomeObjects2= [];
gdjs.Main_32MenuCode.GDWelcomeObjects3= [];
gdjs.Main_32MenuCode.GDTimeObjectObjects1= [];
gdjs.Main_32MenuCode.GDTimeObjectObjects2= [];
gdjs.Main_32MenuCode.GDTimeObjectObjects3= [];
gdjs.Main_32MenuCode.GDWelcome2Objects1= [];
gdjs.Main_32MenuCode.GDWelcome2Objects2= [];
gdjs.Main_32MenuCode.GDWelcome2Objects3= [];

gdjs.Main_32MenuCode.conditionTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition0IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition1IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition2IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition3IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.conditionTrue_1 = {val:false};
gdjs.Main_32MenuCode.condition0IsTrue_1 = {val:false};
gdjs.Main_32MenuCode.condition1IsTrue_1 = {val:false};
gdjs.Main_32MenuCode.condition2IsTrue_1 = {val:false};
gdjs.Main_32MenuCode.condition3IsTrue_1 = {val:false};


gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDStartObjects2Objects = Hashtable.newFrom({"Start": gdjs.Main_32MenuCode.GDStartObjects2});gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDQuitObjects2Objects = Hashtable.newFrom({"Quit": gdjs.Main_32MenuCode.GDQuitObjects2});gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDInstructionsObjects2Objects = Hashtable.newFrom({"Instructions": gdjs.Main_32MenuCode.GDInstructionsObjects2});gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDLevelSelectObjects1Objects = Hashtable.newFrom({"LevelSelect": gdjs.Main_32MenuCode.GDLevelSelectObjects1});gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.Main_32MenuCode.GDStartObjects2);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition2IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDStartObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Main_32MenuCode.condition1IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition2IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9289596);
}
}}
}
if (gdjs.Main_32MenuCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.Main_32MenuCode.GDQuitObjects2);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition2IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDQuitObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Main_32MenuCode.condition1IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition2IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9290636);
}
}}
}
if (gdjs.Main_32MenuCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Instructions"), gdjs.Main_32MenuCode.GDInstructionsObjects2);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition2IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDInstructionsObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Main_32MenuCode.condition1IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition2IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9291260);
}
}}
}
if (gdjs.Main_32MenuCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Instructions", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LevelSelect"), gdjs.Main_32MenuCode.GDLevelSelectObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition2IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDLevelSelectObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Main_32MenuCode.condition1IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition2IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9292364);
}
}}
}
if (gdjs.Main_32MenuCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Select Level", true);
}}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDMuteButtonObjects1Objects = Hashtable.newFrom({"MuteButton": gdjs.Main_32MenuCode.GDMuteButtonObjects1});gdjs.Main_32MenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDMuteButtonObjects1, gdjs.Main_32MenuCode.GDMuteButtonObjects2);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDMuteButtonObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMuteButtonObjects2[i].setString("Mute: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == -(1);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDMuteButtonObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDMuteButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMuteButtonObjects1[i].setString("Mute: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
}}

}


};gdjs.Main_32MenuCode.eventsList2 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Kevin MacLeod - Pixelland NO COPYRIGHT 8-bit Music.mp3", 1, true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MuteButton"), gdjs.Main_32MenuCode.GDMuteButtonObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition2IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDMuteButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Main_32MenuCode.condition1IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition2IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9294828);
}
}}
}
if (gdjs.Main_32MenuCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).mul(-(1));
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.eventsList3 = function(runtimeScene) {

};gdjs.Main_32MenuCode.eventsList4 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TimeObject"), gdjs.Main_32MenuCode.GDTimeObjectObjects2);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDTimeObjectObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDTimeObjectObjects2[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "total");
}}

}


{


gdjs.Main_32MenuCode.repeatCount3 = 1;
for(gdjs.Main_32MenuCode.repeatIndex3 = 0;gdjs.Main_32MenuCode.repeatIndex3 < gdjs.Main_32MenuCode.repeatCount3;++gdjs.Main_32MenuCode.repeatIndex3) {

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "total");
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val)
{
{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "total");
}}
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("TimeObject"), gdjs.Main_32MenuCode.GDTimeObjectObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDTimeObjectObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDTimeObjectObjects1[i].setString("Total Time Elapsed: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}}

}


};gdjs.Main_32MenuCode.eventsList5 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TimeObject"), gdjs.Main_32MenuCode.GDTimeObjectObjects2);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDTimeObjectObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDTimeObjectObjects2[i].hide(false);
}
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == -(1);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TimeObject"), gdjs.Main_32MenuCode.GDTimeObjectObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDTimeObjectObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDTimeObjectObjects1[i].hide();
}
}}

}


};gdjs.Main_32MenuCode.eventsList6 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "k");
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9300276);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).mul(-(1));
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.eventsList7 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.eventsList0(runtimeScene);
}


{


gdjs.Main_32MenuCode.eventsList2(runtimeScene);
}


{


gdjs.Main_32MenuCode.eventsList4(runtimeScene);
}


{


gdjs.Main_32MenuCode.eventsList6(runtimeScene);
}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDStartObjects1.length = 0;
gdjs.Main_32MenuCode.GDStartObjects2.length = 0;
gdjs.Main_32MenuCode.GDStartObjects3.length = 0;
gdjs.Main_32MenuCode.GDCredentialsObjects1.length = 0;
gdjs.Main_32MenuCode.GDCredentialsObjects2.length = 0;
gdjs.Main_32MenuCode.GDCredentialsObjects3.length = 0;
gdjs.Main_32MenuCode.GDQuitObjects1.length = 0;
gdjs.Main_32MenuCode.GDQuitObjects2.length = 0;
gdjs.Main_32MenuCode.GDQuitObjects3.length = 0;
gdjs.Main_32MenuCode.GDInstructionsObjects1.length = 0;
gdjs.Main_32MenuCode.GDInstructionsObjects2.length = 0;
gdjs.Main_32MenuCode.GDInstructionsObjects3.length = 0;
gdjs.Main_32MenuCode.GDLevelSelectObjects1.length = 0;
gdjs.Main_32MenuCode.GDLevelSelectObjects2.length = 0;
gdjs.Main_32MenuCode.GDLevelSelectObjects3.length = 0;
gdjs.Main_32MenuCode.GDMainObjects1.length = 0;
gdjs.Main_32MenuCode.GDMainObjects2.length = 0;
gdjs.Main_32MenuCode.GDMainObjects3.length = 0;
gdjs.Main_32MenuCode.GDMuteButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDMuteButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDMuteButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDScoreObjects1.length = 0;
gdjs.Main_32MenuCode.GDScoreObjects2.length = 0;
gdjs.Main_32MenuCode.GDScoreObjects3.length = 0;
gdjs.Main_32MenuCode.GDCoinSpriteObjects1.length = 0;
gdjs.Main_32MenuCode.GDCoinSpriteObjects2.length = 0;
gdjs.Main_32MenuCode.GDCoinSpriteObjects3.length = 0;
gdjs.Main_32MenuCode.GDWelcomeObjects1.length = 0;
gdjs.Main_32MenuCode.GDWelcomeObjects2.length = 0;
gdjs.Main_32MenuCode.GDWelcomeObjects3.length = 0;
gdjs.Main_32MenuCode.GDTimeObjectObjects1.length = 0;
gdjs.Main_32MenuCode.GDTimeObjectObjects2.length = 0;
gdjs.Main_32MenuCode.GDTimeObjectObjects3.length = 0;
gdjs.Main_32MenuCode.GDWelcome2Objects1.length = 0;
gdjs.Main_32MenuCode.GDWelcome2Objects2.length = 0;
gdjs.Main_32MenuCode.GDWelcome2Objects3.length = 0;

gdjs.Main_32MenuCode.eventsList7(runtimeScene);
return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
