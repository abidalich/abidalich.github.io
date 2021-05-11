gdjs.Select_32LevelCode = {};
gdjs.Select_32LevelCode.repeatCount3 = 0;

gdjs.Select_32LevelCode.repeatIndex3 = 0;

gdjs.Select_32LevelCode.GDStartObjects1= [];
gdjs.Select_32LevelCode.GDStartObjects2= [];
gdjs.Select_32LevelCode.GDStartObjects3= [];
gdjs.Select_32LevelCode.GDCredentialsObjects1= [];
gdjs.Select_32LevelCode.GDCredentialsObjects2= [];
gdjs.Select_32LevelCode.GDCredentialsObjects3= [];
gdjs.Select_32LevelCode.GDQuitObjects1= [];
gdjs.Select_32LevelCode.GDQuitObjects2= [];
gdjs.Select_32LevelCode.GDQuitObjects3= [];
gdjs.Select_32LevelCode.GDInstructionsObjects1= [];
gdjs.Select_32LevelCode.GDInstructionsObjects2= [];
gdjs.Select_32LevelCode.GDInstructionsObjects3= [];
gdjs.Select_32LevelCode.GDLevelSelectObjects1= [];
gdjs.Select_32LevelCode.GDLevelSelectObjects2= [];
gdjs.Select_32LevelCode.GDLevelSelectObjects3= [];
gdjs.Select_32LevelCode.GDMainObjects1= [];
gdjs.Select_32LevelCode.GDMainObjects2= [];
gdjs.Select_32LevelCode.GDMainObjects3= [];
gdjs.Select_32LevelCode.GDLevel1Objects1= [];
gdjs.Select_32LevelCode.GDLevel1Objects2= [];
gdjs.Select_32LevelCode.GDLevel1Objects3= [];
gdjs.Select_32LevelCode.GDLevel2Objects1= [];
gdjs.Select_32LevelCode.GDLevel2Objects2= [];
gdjs.Select_32LevelCode.GDLevel2Objects3= [];
gdjs.Select_32LevelCode.GDMuteButtonObjects1= [];
gdjs.Select_32LevelCode.GDMuteButtonObjects2= [];
gdjs.Select_32LevelCode.GDMuteButtonObjects3= [];
gdjs.Select_32LevelCode.GDCoinSpriteObjects1= [];
gdjs.Select_32LevelCode.GDCoinSpriteObjects2= [];
gdjs.Select_32LevelCode.GDCoinSpriteObjects3= [];
gdjs.Select_32LevelCode.GDTimeObjectObjects1= [];
gdjs.Select_32LevelCode.GDTimeObjectObjects2= [];
gdjs.Select_32LevelCode.GDTimeObjectObjects3= [];

gdjs.Select_32LevelCode.conditionTrue_0 = {val:false};
gdjs.Select_32LevelCode.condition0IsTrue_0 = {val:false};
gdjs.Select_32LevelCode.condition1IsTrue_0 = {val:false};
gdjs.Select_32LevelCode.condition2IsTrue_0 = {val:false};
gdjs.Select_32LevelCode.condition3IsTrue_0 = {val:false};
gdjs.Select_32LevelCode.conditionTrue_1 = {val:false};
gdjs.Select_32LevelCode.condition0IsTrue_1 = {val:false};
gdjs.Select_32LevelCode.condition1IsTrue_1 = {val:false};
gdjs.Select_32LevelCode.condition2IsTrue_1 = {val:false};
gdjs.Select_32LevelCode.condition3IsTrue_1 = {val:false};


gdjs.Select_32LevelCode.mapOfGDgdjs_46Select_9532LevelCode_46GDStartObjects2Objects = Hashtable.newFrom({"Start": gdjs.Select_32LevelCode.GDStartObjects2});gdjs.Select_32LevelCode.mapOfGDgdjs_46Select_9532LevelCode_46GDQuitObjects2Objects = Hashtable.newFrom({"Quit": gdjs.Select_32LevelCode.GDQuitObjects2});gdjs.Select_32LevelCode.mapOfGDgdjs_46Select_9532LevelCode_46GDMainObjects2Objects = Hashtable.newFrom({"Main": gdjs.Select_32LevelCode.GDMainObjects2});gdjs.Select_32LevelCode.mapOfGDgdjs_46Select_9532LevelCode_46GDLevel1Objects2Objects = Hashtable.newFrom({"Level1": gdjs.Select_32LevelCode.GDLevel1Objects2});gdjs.Select_32LevelCode.mapOfGDgdjs_46Select_9532LevelCode_46GDLevel2Objects1Objects = Hashtable.newFrom({"Level2": gdjs.Select_32LevelCode.GDLevel2Objects1});gdjs.Select_32LevelCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.Select_32LevelCode.GDStartObjects2);

gdjs.Select_32LevelCode.condition0IsTrue_0.val = false;
gdjs.Select_32LevelCode.condition1IsTrue_0.val = false;
gdjs.Select_32LevelCode.condition2IsTrue_0.val = false;
{
gdjs.Select_32LevelCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Select_32LevelCode.mapOfGDgdjs_46Select_9532LevelCode_46GDStartObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Select_32LevelCode.condition0IsTrue_0.val ) {
{
gdjs.Select_32LevelCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Select_32LevelCode.condition1IsTrue_0.val ) {
{
{gdjs.Select_32LevelCode.conditionTrue_1 = gdjs.Select_32LevelCode.condition2IsTrue_0;
gdjs.Select_32LevelCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9308252);
}
}}
}
if (gdjs.Select_32LevelCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.Select_32LevelCode.GDQuitObjects2);

gdjs.Select_32LevelCode.condition0IsTrue_0.val = false;
gdjs.Select_32LevelCode.condition1IsTrue_0.val = false;
gdjs.Select_32LevelCode.condition2IsTrue_0.val = false;
{
gdjs.Select_32LevelCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Select_32LevelCode.mapOfGDgdjs_46Select_9532LevelCode_46GDQuitObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Select_32LevelCode.condition0IsTrue_0.val ) {
{
gdjs.Select_32LevelCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Select_32LevelCode.condition1IsTrue_0.val ) {
{
{gdjs.Select_32LevelCode.conditionTrue_1 = gdjs.Select_32LevelCode.condition2IsTrue_0;
gdjs.Select_32LevelCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9309292);
}
}}
}
if (gdjs.Select_32LevelCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Main"), gdjs.Select_32LevelCode.GDMainObjects2);

gdjs.Select_32LevelCode.condition0IsTrue_0.val = false;
gdjs.Select_32LevelCode.condition1IsTrue_0.val = false;
gdjs.Select_32LevelCode.condition2IsTrue_0.val = false;
{
gdjs.Select_32LevelCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Select_32LevelCode.mapOfGDgdjs_46Select_9532LevelCode_46GDMainObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Select_32LevelCode.condition0IsTrue_0.val ) {
{
gdjs.Select_32LevelCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Select_32LevelCode.condition1IsTrue_0.val ) {
{
{gdjs.Select_32LevelCode.conditionTrue_1 = gdjs.Select_32LevelCode.condition2IsTrue_0;
gdjs.Select_32LevelCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9310316);
}
}}
}
if (gdjs.Select_32LevelCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Level1"), gdjs.Select_32LevelCode.GDLevel1Objects2);

gdjs.Select_32LevelCode.condition0IsTrue_0.val = false;
gdjs.Select_32LevelCode.condition1IsTrue_0.val = false;
gdjs.Select_32LevelCode.condition2IsTrue_0.val = false;
{
gdjs.Select_32LevelCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Select_32LevelCode.mapOfGDgdjs_46Select_9532LevelCode_46GDLevel1Objects2Objects, runtimeScene, true, false);
}if ( gdjs.Select_32LevelCode.condition0IsTrue_0.val ) {
{
gdjs.Select_32LevelCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Select_32LevelCode.condition1IsTrue_0.val ) {
{
{gdjs.Select_32LevelCode.conditionTrue_1 = gdjs.Select_32LevelCode.condition2IsTrue_0;
gdjs.Select_32LevelCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9311020);
}
}}
}
if (gdjs.Select_32LevelCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Level2"), gdjs.Select_32LevelCode.GDLevel2Objects1);

gdjs.Select_32LevelCode.condition0IsTrue_0.val = false;
gdjs.Select_32LevelCode.condition1IsTrue_0.val = false;
gdjs.Select_32LevelCode.condition2IsTrue_0.val = false;
{
gdjs.Select_32LevelCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Select_32LevelCode.mapOfGDgdjs_46Select_9532LevelCode_46GDLevel2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Select_32LevelCode.condition0IsTrue_0.val ) {
{
gdjs.Select_32LevelCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Select_32LevelCode.condition1IsTrue_0.val ) {
{
{gdjs.Select_32LevelCode.conditionTrue_1 = gdjs.Select_32LevelCode.condition2IsTrue_0;
gdjs.Select_32LevelCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9312020);
}
}}
}
if (gdjs.Select_32LevelCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 2", true);
}}

}


};gdjs.Select_32LevelCode.mapOfGDgdjs_46Select_9532LevelCode_46GDMuteButtonObjects1Objects = Hashtable.newFrom({"MuteButton": gdjs.Select_32LevelCode.GDMuteButtonObjects1});gdjs.Select_32LevelCode.eventsList1 = function(runtimeScene) {

{


gdjs.Select_32LevelCode.condition0IsTrue_0.val = false;
{
gdjs.Select_32LevelCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if (gdjs.Select_32LevelCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Select_32LevelCode.GDMuteButtonObjects1, gdjs.Select_32LevelCode.GDMuteButtonObjects2);

{for(var i = 0, len = gdjs.Select_32LevelCode.GDMuteButtonObjects2.length ;i < len;++i) {
    gdjs.Select_32LevelCode.GDMuteButtonObjects2[i].setString("Mute: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}}

}


{


gdjs.Select_32LevelCode.condition0IsTrue_0.val = false;
{
gdjs.Select_32LevelCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == -(1);
}if (gdjs.Select_32LevelCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Select_32LevelCode.GDMuteButtonObjects1 */
{for(var i = 0, len = gdjs.Select_32LevelCode.GDMuteButtonObjects1.length ;i < len;++i) {
    gdjs.Select_32LevelCode.GDMuteButtonObjects1[i].setString("Mute: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
}}

}


};gdjs.Select_32LevelCode.eventsList2 = function(runtimeScene) {

{


gdjs.Select_32LevelCode.condition0IsTrue_0.val = false;
{
gdjs.Select_32LevelCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Select_32LevelCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Kevin MacLeod - Pixelland NO COPYRIGHT 8-bit Music.mp3", 1, true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MuteButton"), gdjs.Select_32LevelCode.GDMuteButtonObjects1);

gdjs.Select_32LevelCode.condition0IsTrue_0.val = false;
gdjs.Select_32LevelCode.condition1IsTrue_0.val = false;
gdjs.Select_32LevelCode.condition2IsTrue_0.val = false;
{
gdjs.Select_32LevelCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Select_32LevelCode.mapOfGDgdjs_46Select_9532LevelCode_46GDMuteButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Select_32LevelCode.condition0IsTrue_0.val ) {
{
gdjs.Select_32LevelCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Select_32LevelCode.condition1IsTrue_0.val ) {
{
{gdjs.Select_32LevelCode.conditionTrue_1 = gdjs.Select_32LevelCode.condition2IsTrue_0;
gdjs.Select_32LevelCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9314468);
}
}}
}
if (gdjs.Select_32LevelCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).mul(-(1));
}
{ //Subevents
gdjs.Select_32LevelCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.Select_32LevelCode.eventsList3 = function(runtimeScene) {

};gdjs.Select_32LevelCode.eventsList4 = function(runtimeScene) {

{


gdjs.Select_32LevelCode.condition0IsTrue_0.val = false;
{
gdjs.Select_32LevelCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Select_32LevelCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TimeObject"), gdjs.Select_32LevelCode.GDTimeObjectObjects2);
{for(var i = 0, len = gdjs.Select_32LevelCode.GDTimeObjectObjects2.length ;i < len;++i) {
    gdjs.Select_32LevelCode.GDTimeObjectObjects2[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "total");
}}

}


{


gdjs.Select_32LevelCode.repeatCount3 = 1;
for(gdjs.Select_32LevelCode.repeatIndex3 = 0;gdjs.Select_32LevelCode.repeatIndex3 < gdjs.Select_32LevelCode.repeatCount3;++gdjs.Select_32LevelCode.repeatIndex3) {

gdjs.Select_32LevelCode.condition0IsTrue_0.val = false;
{
gdjs.Select_32LevelCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "total");
}if (gdjs.Select_32LevelCode.condition0IsTrue_0.val)
{
{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "total");
}}
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("TimeObject"), gdjs.Select_32LevelCode.GDTimeObjectObjects1);
{for(var i = 0, len = gdjs.Select_32LevelCode.GDTimeObjectObjects1.length ;i < len;++i) {
    gdjs.Select_32LevelCode.GDTimeObjectObjects1[i].setString("Total Time Elapsed: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}}

}


};gdjs.Select_32LevelCode.eventsList5 = function(runtimeScene) {

{


gdjs.Select_32LevelCode.condition0IsTrue_0.val = false;
{
gdjs.Select_32LevelCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
}if (gdjs.Select_32LevelCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TimeObject"), gdjs.Select_32LevelCode.GDTimeObjectObjects2);
{for(var i = 0, len = gdjs.Select_32LevelCode.GDTimeObjectObjects2.length ;i < len;++i) {
    gdjs.Select_32LevelCode.GDTimeObjectObjects2[i].hide(false);
}
}}

}


{


gdjs.Select_32LevelCode.condition0IsTrue_0.val = false;
{
gdjs.Select_32LevelCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == -(1);
}if (gdjs.Select_32LevelCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TimeObject"), gdjs.Select_32LevelCode.GDTimeObjectObjects1);
{for(var i = 0, len = gdjs.Select_32LevelCode.GDTimeObjectObjects1.length ;i < len;++i) {
    gdjs.Select_32LevelCode.GDTimeObjectObjects1[i].hide();
}
}}

}


};gdjs.Select_32LevelCode.eventsList6 = function(runtimeScene) {

{


gdjs.Select_32LevelCode.condition0IsTrue_0.val = false;
gdjs.Select_32LevelCode.condition1IsTrue_0.val = false;
{
gdjs.Select_32LevelCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "k");
}if ( gdjs.Select_32LevelCode.condition0IsTrue_0.val ) {
{
{gdjs.Select_32LevelCode.conditionTrue_1 = gdjs.Select_32LevelCode.condition1IsTrue_0;
gdjs.Select_32LevelCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9319916);
}
}}
if (gdjs.Select_32LevelCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).mul(-(1));
}
{ //Subevents
gdjs.Select_32LevelCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.Select_32LevelCode.eventsList7 = function(runtimeScene) {

{


gdjs.Select_32LevelCode.eventsList0(runtimeScene);
}


{


gdjs.Select_32LevelCode.eventsList2(runtimeScene);
}


{


gdjs.Select_32LevelCode.eventsList4(runtimeScene);
}


{


gdjs.Select_32LevelCode.eventsList6(runtimeScene);
}


};

gdjs.Select_32LevelCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Select_32LevelCode.GDStartObjects1.length = 0;
gdjs.Select_32LevelCode.GDStartObjects2.length = 0;
gdjs.Select_32LevelCode.GDStartObjects3.length = 0;
gdjs.Select_32LevelCode.GDCredentialsObjects1.length = 0;
gdjs.Select_32LevelCode.GDCredentialsObjects2.length = 0;
gdjs.Select_32LevelCode.GDCredentialsObjects3.length = 0;
gdjs.Select_32LevelCode.GDQuitObjects1.length = 0;
gdjs.Select_32LevelCode.GDQuitObjects2.length = 0;
gdjs.Select_32LevelCode.GDQuitObjects3.length = 0;
gdjs.Select_32LevelCode.GDInstructionsObjects1.length = 0;
gdjs.Select_32LevelCode.GDInstructionsObjects2.length = 0;
gdjs.Select_32LevelCode.GDInstructionsObjects3.length = 0;
gdjs.Select_32LevelCode.GDLevelSelectObjects1.length = 0;
gdjs.Select_32LevelCode.GDLevelSelectObjects2.length = 0;
gdjs.Select_32LevelCode.GDLevelSelectObjects3.length = 0;
gdjs.Select_32LevelCode.GDMainObjects1.length = 0;
gdjs.Select_32LevelCode.GDMainObjects2.length = 0;
gdjs.Select_32LevelCode.GDMainObjects3.length = 0;
gdjs.Select_32LevelCode.GDLevel1Objects1.length = 0;
gdjs.Select_32LevelCode.GDLevel1Objects2.length = 0;
gdjs.Select_32LevelCode.GDLevel1Objects3.length = 0;
gdjs.Select_32LevelCode.GDLevel2Objects1.length = 0;
gdjs.Select_32LevelCode.GDLevel2Objects2.length = 0;
gdjs.Select_32LevelCode.GDLevel2Objects3.length = 0;
gdjs.Select_32LevelCode.GDMuteButtonObjects1.length = 0;
gdjs.Select_32LevelCode.GDMuteButtonObjects2.length = 0;
gdjs.Select_32LevelCode.GDMuteButtonObjects3.length = 0;
gdjs.Select_32LevelCode.GDCoinSpriteObjects1.length = 0;
gdjs.Select_32LevelCode.GDCoinSpriteObjects2.length = 0;
gdjs.Select_32LevelCode.GDCoinSpriteObjects3.length = 0;
gdjs.Select_32LevelCode.GDTimeObjectObjects1.length = 0;
gdjs.Select_32LevelCode.GDTimeObjectObjects2.length = 0;
gdjs.Select_32LevelCode.GDTimeObjectObjects3.length = 0;

gdjs.Select_32LevelCode.eventsList7(runtimeScene);
return;

}

gdjs['Select_32LevelCode'] = gdjs.Select_32LevelCode;
