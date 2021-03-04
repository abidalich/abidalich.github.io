gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.GDStartObjects1= [];
gdjs.Main_32MenuCode.GDStartObjects2= [];
gdjs.Main_32MenuCode.GDStartObjects3= [];
gdjs.Main_32MenuCode.GDCredentialsObjects1= [];
gdjs.Main_32MenuCode.GDCredentialsObjects2= [];
gdjs.Main_32MenuCode.GDCredentialsObjects3= [];
gdjs.Main_32MenuCode.GDQuitObjects1= [];
gdjs.Main_32MenuCode.GDQuitObjects2= [];
gdjs.Main_32MenuCode.GDQuitObjects3= [];

gdjs.Main_32MenuCode.conditionTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition0IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition1IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition2IsTrue_0 = {val:false};


gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDQuitObjects2Objects = Hashtable.newFrom({"Quit": gdjs.Main_32MenuCode.GDQuitObjects2});gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDStartObjects1Objects = Hashtable.newFrom({"Start": gdjs.Main_32MenuCode.GDStartObjects1});gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.Main_32MenuCode.GDQuitObjects2);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDQuitObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.Main_32MenuCode.GDStartObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDStartObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level Prototype", false);
}}

}


};gdjs.Main_32MenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.eventsList0(runtimeScene);
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

gdjs.Main_32MenuCode.eventsList1(runtimeScene);
return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
