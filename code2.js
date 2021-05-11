gdjs.InstructionsCode = {};
gdjs.InstructionsCode.repeatCount3 = 0;

gdjs.InstructionsCode.repeatIndex3 = 0;

gdjs.InstructionsCode.GDMainMenuButtonObjects1= [];
gdjs.InstructionsCode.GDMainMenuButtonObjects2= [];
gdjs.InstructionsCode.GDMainMenuButtonObjects3= [];
gdjs.InstructionsCode.GDInstruction1Objects1= [];
gdjs.InstructionsCode.GDInstruction1Objects2= [];
gdjs.InstructionsCode.GDInstruction1Objects3= [];
gdjs.InstructionsCode.GDInstruction2Objects1= [];
gdjs.InstructionsCode.GDInstruction2Objects2= [];
gdjs.InstructionsCode.GDInstruction2Objects3= [];
gdjs.InstructionsCode.GDInstruction3Objects1= [];
gdjs.InstructionsCode.GDInstruction3Objects2= [];
gdjs.InstructionsCode.GDInstruction3Objects3= [];
gdjs.InstructionsCode.GDEnemySpriteObjects1= [];
gdjs.InstructionsCode.GDEnemySpriteObjects2= [];
gdjs.InstructionsCode.GDEnemySpriteObjects3= [];
gdjs.InstructionsCode.GDInstruction4Objects1= [];
gdjs.InstructionsCode.GDInstruction4Objects2= [];
gdjs.InstructionsCode.GDInstruction4Objects3= [];
gdjs.InstructionsCode.GDInstruction5Objects1= [];
gdjs.InstructionsCode.GDInstruction5Objects2= [];
gdjs.InstructionsCode.GDInstruction5Objects3= [];
gdjs.InstructionsCode.GDCoinSpriteObjects1= [];
gdjs.InstructionsCode.GDCoinSpriteObjects2= [];
gdjs.InstructionsCode.GDCoinSpriteObjects3= [];
gdjs.InstructionsCode.GDMuteButtonObjects1= [];
gdjs.InstructionsCode.GDMuteButtonObjects2= [];
gdjs.InstructionsCode.GDMuteButtonObjects3= [];
gdjs.InstructionsCode.GDBackObjects1= [];
gdjs.InstructionsCode.GDBackObjects2= [];
gdjs.InstructionsCode.GDBackObjects3= [];
gdjs.InstructionsCode.GDTimeObjectObjects1= [];
gdjs.InstructionsCode.GDTimeObjectObjects2= [];
gdjs.InstructionsCode.GDTimeObjectObjects3= [];
gdjs.InstructionsCode.GDInstruction6Objects1= [];
gdjs.InstructionsCode.GDInstruction6Objects2= [];
gdjs.InstructionsCode.GDInstruction6Objects3= [];

gdjs.InstructionsCode.conditionTrue_0 = {val:false};
gdjs.InstructionsCode.condition0IsTrue_0 = {val:false};
gdjs.InstructionsCode.condition1IsTrue_0 = {val:false};
gdjs.InstructionsCode.condition2IsTrue_0 = {val:false};
gdjs.InstructionsCode.condition3IsTrue_0 = {val:false};
gdjs.InstructionsCode.conditionTrue_1 = {val:false};
gdjs.InstructionsCode.condition0IsTrue_1 = {val:false};
gdjs.InstructionsCode.condition1IsTrue_1 = {val:false};
gdjs.InstructionsCode.condition2IsTrue_1 = {val:false};
gdjs.InstructionsCode.condition3IsTrue_1 = {val:false};


gdjs.InstructionsCode.mapOfGDgdjs_46InstructionsCode_46GDMainMenuButtonObjects1Objects = Hashtable.newFrom({"MainMenuButton": gdjs.InstructionsCode.GDMainMenuButtonObjects1});gdjs.InstructionsCode.mapOfGDgdjs_46InstructionsCode_46GDMuteButtonObjects1Objects = Hashtable.newFrom({"MuteButton": gdjs.InstructionsCode.GDMuteButtonObjects1});gdjs.InstructionsCode.eventsList0 = function(runtimeScene) {

{


gdjs.InstructionsCode.condition0IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if (gdjs.InstructionsCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.InstructionsCode.GDMuteButtonObjects1, gdjs.InstructionsCode.GDMuteButtonObjects2);

{for(var i = 0, len = gdjs.InstructionsCode.GDMuteButtonObjects2.length ;i < len;++i) {
    gdjs.InstructionsCode.GDMuteButtonObjects2[i].setString("Mute: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}}

}


{


gdjs.InstructionsCode.condition0IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == -(1);
}if (gdjs.InstructionsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.InstructionsCode.GDMuteButtonObjects1 */
{for(var i = 0, len = gdjs.InstructionsCode.GDMuteButtonObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDMuteButtonObjects1[i].setString("Mute: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
}}

}


};gdjs.InstructionsCode.eventsList1 = function(runtimeScene) {

{


gdjs.InstructionsCode.condition0IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.InstructionsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Kevin MacLeod - Pixelland NO COPYRIGHT 8-bit Music.mp3", 1, true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MuteButton"), gdjs.InstructionsCode.GDMuteButtonObjects1);

gdjs.InstructionsCode.condition0IsTrue_0.val = false;
gdjs.InstructionsCode.condition1IsTrue_0.val = false;
gdjs.InstructionsCode.condition2IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.InstructionsCode.mapOfGDgdjs_46InstructionsCode_46GDMuteButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.InstructionsCode.condition0IsTrue_0.val ) {
{
gdjs.InstructionsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.InstructionsCode.condition1IsTrue_0.val ) {
{
{gdjs.InstructionsCode.conditionTrue_1 = gdjs.InstructionsCode.condition2IsTrue_0;
gdjs.InstructionsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9328892);
}
}}
}
if (gdjs.InstructionsCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).mul(-(1));
}
{ //Subevents
gdjs.InstructionsCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.InstructionsCode.eventsList2 = function(runtimeScene) {

};gdjs.InstructionsCode.eventsList3 = function(runtimeScene) {

{


gdjs.InstructionsCode.condition0IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.InstructionsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TimeObject"), gdjs.InstructionsCode.GDTimeObjectObjects2);
{for(var i = 0, len = gdjs.InstructionsCode.GDTimeObjectObjects2.length ;i < len;++i) {
    gdjs.InstructionsCode.GDTimeObjectObjects2[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "total");
}}

}


{


gdjs.InstructionsCode.repeatCount3 = 1;
for(gdjs.InstructionsCode.repeatIndex3 = 0;gdjs.InstructionsCode.repeatIndex3 < gdjs.InstructionsCode.repeatCount3;++gdjs.InstructionsCode.repeatIndex3) {

gdjs.InstructionsCode.condition0IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "total");
}if (gdjs.InstructionsCode.condition0IsTrue_0.val)
{
{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "total");
}}
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("TimeObject"), gdjs.InstructionsCode.GDTimeObjectObjects1);
{for(var i = 0, len = gdjs.InstructionsCode.GDTimeObjectObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDTimeObjectObjects1[i].setString("Total Time Elapsed: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}}

}


};gdjs.InstructionsCode.eventsList4 = function(runtimeScene) {

{


gdjs.InstructionsCode.condition0IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
}if (gdjs.InstructionsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TimeObject"), gdjs.InstructionsCode.GDTimeObjectObjects2);
{for(var i = 0, len = gdjs.InstructionsCode.GDTimeObjectObjects2.length ;i < len;++i) {
    gdjs.InstructionsCode.GDTimeObjectObjects2[i].hide(false);
}
}}

}


{


gdjs.InstructionsCode.condition0IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == -(1);
}if (gdjs.InstructionsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TimeObject"), gdjs.InstructionsCode.GDTimeObjectObjects1);
{for(var i = 0, len = gdjs.InstructionsCode.GDTimeObjectObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDTimeObjectObjects1[i].hide();
}
}}

}


};gdjs.InstructionsCode.eventsList5 = function(runtimeScene) {

{


gdjs.InstructionsCode.condition0IsTrue_0.val = false;
gdjs.InstructionsCode.condition1IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "k");
}if ( gdjs.InstructionsCode.condition0IsTrue_0.val ) {
{
{gdjs.InstructionsCode.conditionTrue_1 = gdjs.InstructionsCode.condition1IsTrue_0;
gdjs.InstructionsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9334340);
}
}}
if (gdjs.InstructionsCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).mul(-(1));
}
{ //Subevents
gdjs.InstructionsCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.InstructionsCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MainMenuButton"), gdjs.InstructionsCode.GDMainMenuButtonObjects1);

gdjs.InstructionsCode.condition0IsTrue_0.val = false;
gdjs.InstructionsCode.condition1IsTrue_0.val = false;
gdjs.InstructionsCode.condition2IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.InstructionsCode.mapOfGDgdjs_46InstructionsCode_46GDMainMenuButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.InstructionsCode.condition0IsTrue_0.val ) {
{
gdjs.InstructionsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.InstructionsCode.condition1IsTrue_0.val ) {
{
{gdjs.InstructionsCode.conditionTrue_1 = gdjs.InstructionsCode.condition2IsTrue_0;
gdjs.InstructionsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9326372);
}
}}
}
if (gdjs.InstructionsCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


{


gdjs.InstructionsCode.eventsList1(runtimeScene);
}


{


gdjs.InstructionsCode.eventsList3(runtimeScene);
}


{


gdjs.InstructionsCode.eventsList5(runtimeScene);
}


};

gdjs.InstructionsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InstructionsCode.GDMainMenuButtonObjects1.length = 0;
gdjs.InstructionsCode.GDMainMenuButtonObjects2.length = 0;
gdjs.InstructionsCode.GDMainMenuButtonObjects3.length = 0;
gdjs.InstructionsCode.GDInstruction1Objects1.length = 0;
gdjs.InstructionsCode.GDInstruction1Objects2.length = 0;
gdjs.InstructionsCode.GDInstruction1Objects3.length = 0;
gdjs.InstructionsCode.GDInstruction2Objects1.length = 0;
gdjs.InstructionsCode.GDInstruction2Objects2.length = 0;
gdjs.InstructionsCode.GDInstruction2Objects3.length = 0;
gdjs.InstructionsCode.GDInstruction3Objects1.length = 0;
gdjs.InstructionsCode.GDInstruction3Objects2.length = 0;
gdjs.InstructionsCode.GDInstruction3Objects3.length = 0;
gdjs.InstructionsCode.GDEnemySpriteObjects1.length = 0;
gdjs.InstructionsCode.GDEnemySpriteObjects2.length = 0;
gdjs.InstructionsCode.GDEnemySpriteObjects3.length = 0;
gdjs.InstructionsCode.GDInstruction4Objects1.length = 0;
gdjs.InstructionsCode.GDInstruction4Objects2.length = 0;
gdjs.InstructionsCode.GDInstruction4Objects3.length = 0;
gdjs.InstructionsCode.GDInstruction5Objects1.length = 0;
gdjs.InstructionsCode.GDInstruction5Objects2.length = 0;
gdjs.InstructionsCode.GDInstruction5Objects3.length = 0;
gdjs.InstructionsCode.GDCoinSpriteObjects1.length = 0;
gdjs.InstructionsCode.GDCoinSpriteObjects2.length = 0;
gdjs.InstructionsCode.GDCoinSpriteObjects3.length = 0;
gdjs.InstructionsCode.GDMuteButtonObjects1.length = 0;
gdjs.InstructionsCode.GDMuteButtonObjects2.length = 0;
gdjs.InstructionsCode.GDMuteButtonObjects3.length = 0;
gdjs.InstructionsCode.GDBackObjects1.length = 0;
gdjs.InstructionsCode.GDBackObjects2.length = 0;
gdjs.InstructionsCode.GDBackObjects3.length = 0;
gdjs.InstructionsCode.GDTimeObjectObjects1.length = 0;
gdjs.InstructionsCode.GDTimeObjectObjects2.length = 0;
gdjs.InstructionsCode.GDTimeObjectObjects3.length = 0;
gdjs.InstructionsCode.GDInstruction6Objects1.length = 0;
gdjs.InstructionsCode.GDInstruction6Objects2.length = 0;
gdjs.InstructionsCode.GDInstruction6Objects3.length = 0;

gdjs.InstructionsCode.eventsList6(runtimeScene);
return;

}

gdjs['InstructionsCode'] = gdjs.InstructionsCode;
