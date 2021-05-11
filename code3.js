gdjs.End_32ScreenCode = {};
gdjs.End_32ScreenCode.repeatCount3 = 0;

gdjs.End_32ScreenCode.repeatIndex3 = 0;

gdjs.End_32ScreenCode.GDStartObjects1= [];
gdjs.End_32ScreenCode.GDStartObjects2= [];
gdjs.End_32ScreenCode.GDStartObjects3= [];
gdjs.End_32ScreenCode.GDCredentialsObjects1= [];
gdjs.End_32ScreenCode.GDCredentialsObjects2= [];
gdjs.End_32ScreenCode.GDCredentialsObjects3= [];
gdjs.End_32ScreenCode.GDQuitObjects1= [];
gdjs.End_32ScreenCode.GDQuitObjects2= [];
gdjs.End_32ScreenCode.GDQuitObjects3= [];
gdjs.End_32ScreenCode.GDInstructionsObjects1= [];
gdjs.End_32ScreenCode.GDInstructionsObjects2= [];
gdjs.End_32ScreenCode.GDInstructionsObjects3= [];
gdjs.End_32ScreenCode.GDLevelSelectObjects1= [];
gdjs.End_32ScreenCode.GDLevelSelectObjects2= [];
gdjs.End_32ScreenCode.GDLevelSelectObjects3= [];
gdjs.End_32ScreenCode.GDMainObjects1= [];
gdjs.End_32ScreenCode.GDMainObjects2= [];
gdjs.End_32ScreenCode.GDMainObjects3= [];
gdjs.End_32ScreenCode.GDClosingMessageObjects1= [];
gdjs.End_32ScreenCode.GDClosingMessageObjects2= [];
gdjs.End_32ScreenCode.GDClosingMessageObjects3= [];
gdjs.End_32ScreenCode.GDPlayerSpriteObjects1= [];
gdjs.End_32ScreenCode.GDPlayerSpriteObjects2= [];
gdjs.End_32ScreenCode.GDPlayerSpriteObjects3= [];
gdjs.End_32ScreenCode.GDMuteButtonObjects1= [];
gdjs.End_32ScreenCode.GDMuteButtonObjects2= [];
gdjs.End_32ScreenCode.GDMuteButtonObjects3= [];
gdjs.End_32ScreenCode.GDTimeObjectObjects1= [];
gdjs.End_32ScreenCode.GDTimeObjectObjects2= [];
gdjs.End_32ScreenCode.GDTimeObjectObjects3= [];

gdjs.End_32ScreenCode.conditionTrue_0 = {val:false};
gdjs.End_32ScreenCode.condition0IsTrue_0 = {val:false};
gdjs.End_32ScreenCode.condition1IsTrue_0 = {val:false};
gdjs.End_32ScreenCode.condition2IsTrue_0 = {val:false};
gdjs.End_32ScreenCode.condition3IsTrue_0 = {val:false};
gdjs.End_32ScreenCode.conditionTrue_1 = {val:false};
gdjs.End_32ScreenCode.condition0IsTrue_1 = {val:false};
gdjs.End_32ScreenCode.condition1IsTrue_1 = {val:false};
gdjs.End_32ScreenCode.condition2IsTrue_1 = {val:false};
gdjs.End_32ScreenCode.condition3IsTrue_1 = {val:false};


gdjs.End_32ScreenCode.mapOfGDgdjs_46End_9532ScreenCode_46GDStartObjects2Objects = Hashtable.newFrom({"Start": gdjs.End_32ScreenCode.GDStartObjects2});gdjs.End_32ScreenCode.mapOfGDgdjs_46End_9532ScreenCode_46GDQuitObjects2Objects = Hashtable.newFrom({"Quit": gdjs.End_32ScreenCode.GDQuitObjects2});gdjs.End_32ScreenCode.mapOfGDgdjs_46End_9532ScreenCode_46GDLevelSelectObjects2Objects = Hashtable.newFrom({"LevelSelect": gdjs.End_32ScreenCode.GDLevelSelectObjects2});gdjs.End_32ScreenCode.mapOfGDgdjs_46End_9532ScreenCode_46GDMainObjects1Objects = Hashtable.newFrom({"Main": gdjs.End_32ScreenCode.GDMainObjects1});gdjs.End_32ScreenCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.End_32ScreenCode.GDStartObjects2);

gdjs.End_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.End_32ScreenCode.condition1IsTrue_0.val = false;
gdjs.End_32ScreenCode.condition2IsTrue_0.val = false;
{
gdjs.End_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.End_32ScreenCode.mapOfGDgdjs_46End_9532ScreenCode_46GDStartObjects2Objects, runtimeScene, true, false);
}if ( gdjs.End_32ScreenCode.condition0IsTrue_0.val ) {
{
gdjs.End_32ScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.End_32ScreenCode.condition1IsTrue_0.val ) {
{
{gdjs.End_32ScreenCode.conditionTrue_1 = gdjs.End_32ScreenCode.condition2IsTrue_0;
gdjs.End_32ScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9343260);
}
}}
}
if (gdjs.End_32ScreenCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.End_32ScreenCode.GDQuitObjects2);

gdjs.End_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.End_32ScreenCode.condition1IsTrue_0.val = false;
gdjs.End_32ScreenCode.condition2IsTrue_0.val = false;
{
gdjs.End_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.End_32ScreenCode.mapOfGDgdjs_46End_9532ScreenCode_46GDQuitObjects2Objects, runtimeScene, true, false);
}if ( gdjs.End_32ScreenCode.condition0IsTrue_0.val ) {
{
gdjs.End_32ScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.End_32ScreenCode.condition1IsTrue_0.val ) {
{
{gdjs.End_32ScreenCode.conditionTrue_1 = gdjs.End_32ScreenCode.condition2IsTrue_0;
gdjs.End_32ScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9344300);
}
}}
}
if (gdjs.End_32ScreenCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LevelSelect"), gdjs.End_32ScreenCode.GDLevelSelectObjects2);

gdjs.End_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.End_32ScreenCode.condition1IsTrue_0.val = false;
gdjs.End_32ScreenCode.condition2IsTrue_0.val = false;
{
gdjs.End_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.End_32ScreenCode.mapOfGDgdjs_46End_9532ScreenCode_46GDLevelSelectObjects2Objects, runtimeScene, true, false);
}if ( gdjs.End_32ScreenCode.condition0IsTrue_0.val ) {
{
gdjs.End_32ScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.End_32ScreenCode.condition1IsTrue_0.val ) {
{
{gdjs.End_32ScreenCode.conditionTrue_1 = gdjs.End_32ScreenCode.condition2IsTrue_0;
gdjs.End_32ScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9344924);
}
}}
}
if (gdjs.End_32ScreenCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Select Level", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Main"), gdjs.End_32ScreenCode.GDMainObjects1);

gdjs.End_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.End_32ScreenCode.condition1IsTrue_0.val = false;
gdjs.End_32ScreenCode.condition2IsTrue_0.val = false;
{
gdjs.End_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.End_32ScreenCode.mapOfGDgdjs_46End_9532ScreenCode_46GDMainObjects1Objects, runtimeScene, true, false);
}if ( gdjs.End_32ScreenCode.condition0IsTrue_0.val ) {
{
gdjs.End_32ScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.End_32ScreenCode.condition1IsTrue_0.val ) {
{
{gdjs.End_32ScreenCode.conditionTrue_1 = gdjs.End_32ScreenCode.condition2IsTrue_0;
gdjs.End_32ScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9346428);
}
}}
}
if (gdjs.End_32ScreenCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", true);
}}

}


};gdjs.End_32ScreenCode.mapOfGDgdjs_46End_9532ScreenCode_46GDMuteButtonObjects1Objects = Hashtable.newFrom({"MuteButton": gdjs.End_32ScreenCode.GDMuteButtonObjects1});gdjs.End_32ScreenCode.eventsList1 = function(runtimeScene) {

{


gdjs.End_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.End_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if (gdjs.End_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.End_32ScreenCode.GDMuteButtonObjects1, gdjs.End_32ScreenCode.GDMuteButtonObjects2);

{for(var i = 0, len = gdjs.End_32ScreenCode.GDMuteButtonObjects2.length ;i < len;++i) {
    gdjs.End_32ScreenCode.GDMuteButtonObjects2[i].setString("Mute: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}}

}


{


gdjs.End_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.End_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == -(1);
}if (gdjs.End_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.End_32ScreenCode.GDMuteButtonObjects1 */
{for(var i = 0, len = gdjs.End_32ScreenCode.GDMuteButtonObjects1.length ;i < len;++i) {
    gdjs.End_32ScreenCode.GDMuteButtonObjects1[i].setString("Mute: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
}}

}


};gdjs.End_32ScreenCode.eventsList2 = function(runtimeScene) {

{


gdjs.End_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.End_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.End_32ScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Kevin MacLeod - Pixelland NO COPYRIGHT 8-bit Music.mp3", 1, true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MuteButton"), gdjs.End_32ScreenCode.GDMuteButtonObjects1);

gdjs.End_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.End_32ScreenCode.condition1IsTrue_0.val = false;
gdjs.End_32ScreenCode.condition2IsTrue_0.val = false;
{
gdjs.End_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.End_32ScreenCode.mapOfGDgdjs_46End_9532ScreenCode_46GDMuteButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.End_32ScreenCode.condition0IsTrue_0.val ) {
{
gdjs.End_32ScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.End_32ScreenCode.condition1IsTrue_0.val ) {
{
{gdjs.End_32ScreenCode.conditionTrue_1 = gdjs.End_32ScreenCode.condition2IsTrue_0;
gdjs.End_32ScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9348476);
}
}}
}
if (gdjs.End_32ScreenCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).mul(-(1));
}
{ //Subevents
gdjs.End_32ScreenCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.End_32ScreenCode.eventsList3 = function(runtimeScene) {

};gdjs.End_32ScreenCode.eventsList4 = function(runtimeScene) {

{


gdjs.End_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.End_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.End_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TimeObject"), gdjs.End_32ScreenCode.GDTimeObjectObjects2);
{for(var i = 0, len = gdjs.End_32ScreenCode.GDTimeObjectObjects2.length ;i < len;++i) {
    gdjs.End_32ScreenCode.GDTimeObjectObjects2[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "total");
}}

}


{


gdjs.End_32ScreenCode.repeatCount3 = 1;
for(gdjs.End_32ScreenCode.repeatIndex3 = 0;gdjs.End_32ScreenCode.repeatIndex3 < gdjs.End_32ScreenCode.repeatCount3;++gdjs.End_32ScreenCode.repeatIndex3) {

gdjs.End_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.End_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "total");
}if (gdjs.End_32ScreenCode.condition0IsTrue_0.val)
{
{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "total");
}}
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("TimeObject"), gdjs.End_32ScreenCode.GDTimeObjectObjects1);
{for(var i = 0, len = gdjs.End_32ScreenCode.GDTimeObjectObjects1.length ;i < len;++i) {
    gdjs.End_32ScreenCode.GDTimeObjectObjects1[i].setString("Total Time Elapsed: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}}

}


};gdjs.End_32ScreenCode.eventsList5 = function(runtimeScene) {

{


gdjs.End_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.End_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
}if (gdjs.End_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TimeObject"), gdjs.End_32ScreenCode.GDTimeObjectObjects2);
{for(var i = 0, len = gdjs.End_32ScreenCode.GDTimeObjectObjects2.length ;i < len;++i) {
    gdjs.End_32ScreenCode.GDTimeObjectObjects2[i].hide(false);
}
}}

}


{


gdjs.End_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.End_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == -(1);
}if (gdjs.End_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TimeObject"), gdjs.End_32ScreenCode.GDTimeObjectObjects1);
{for(var i = 0, len = gdjs.End_32ScreenCode.GDTimeObjectObjects1.length ;i < len;++i) {
    gdjs.End_32ScreenCode.GDTimeObjectObjects1[i].hide();
}
}}

}


};gdjs.End_32ScreenCode.eventsList6 = function(runtimeScene) {

{


gdjs.End_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.End_32ScreenCode.condition1IsTrue_0.val = false;
{
gdjs.End_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "k");
}if ( gdjs.End_32ScreenCode.condition0IsTrue_0.val ) {
{
{gdjs.End_32ScreenCode.conditionTrue_1 = gdjs.End_32ScreenCode.condition1IsTrue_0;
gdjs.End_32ScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9353924);
}
}}
if (gdjs.End_32ScreenCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).mul(-(1));
}
{ //Subevents
gdjs.End_32ScreenCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.End_32ScreenCode.eventsList7 = function(runtimeScene) {

{


gdjs.End_32ScreenCode.eventsList0(runtimeScene);
}


{


gdjs.End_32ScreenCode.eventsList2(runtimeScene);
}


{


gdjs.End_32ScreenCode.eventsList4(runtimeScene);
}


{


gdjs.End_32ScreenCode.eventsList6(runtimeScene);
}


};

gdjs.End_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.End_32ScreenCode.GDStartObjects1.length = 0;
gdjs.End_32ScreenCode.GDStartObjects2.length = 0;
gdjs.End_32ScreenCode.GDStartObjects3.length = 0;
gdjs.End_32ScreenCode.GDCredentialsObjects1.length = 0;
gdjs.End_32ScreenCode.GDCredentialsObjects2.length = 0;
gdjs.End_32ScreenCode.GDCredentialsObjects3.length = 0;
gdjs.End_32ScreenCode.GDQuitObjects1.length = 0;
gdjs.End_32ScreenCode.GDQuitObjects2.length = 0;
gdjs.End_32ScreenCode.GDQuitObjects3.length = 0;
gdjs.End_32ScreenCode.GDInstructionsObjects1.length = 0;
gdjs.End_32ScreenCode.GDInstructionsObjects2.length = 0;
gdjs.End_32ScreenCode.GDInstructionsObjects3.length = 0;
gdjs.End_32ScreenCode.GDLevelSelectObjects1.length = 0;
gdjs.End_32ScreenCode.GDLevelSelectObjects2.length = 0;
gdjs.End_32ScreenCode.GDLevelSelectObjects3.length = 0;
gdjs.End_32ScreenCode.GDMainObjects1.length = 0;
gdjs.End_32ScreenCode.GDMainObjects2.length = 0;
gdjs.End_32ScreenCode.GDMainObjects3.length = 0;
gdjs.End_32ScreenCode.GDClosingMessageObjects1.length = 0;
gdjs.End_32ScreenCode.GDClosingMessageObjects2.length = 0;
gdjs.End_32ScreenCode.GDClosingMessageObjects3.length = 0;
gdjs.End_32ScreenCode.GDPlayerSpriteObjects1.length = 0;
gdjs.End_32ScreenCode.GDPlayerSpriteObjects2.length = 0;
gdjs.End_32ScreenCode.GDPlayerSpriteObjects3.length = 0;
gdjs.End_32ScreenCode.GDMuteButtonObjects1.length = 0;
gdjs.End_32ScreenCode.GDMuteButtonObjects2.length = 0;
gdjs.End_32ScreenCode.GDMuteButtonObjects3.length = 0;
gdjs.End_32ScreenCode.GDTimeObjectObjects1.length = 0;
gdjs.End_32ScreenCode.GDTimeObjectObjects2.length = 0;
gdjs.End_32ScreenCode.GDTimeObjectObjects3.length = 0;

gdjs.End_32ScreenCode.eventsList7(runtimeScene);
return;

}

gdjs['End_32ScreenCode'] = gdjs.End_32ScreenCode;
