gdjs.Level_322Code = {};
gdjs.Level_322Code.repeatCount3 = 0;

gdjs.Level_322Code.repeatIndex3 = 0;

gdjs.Level_322Code.GDPlayerObjects1= [];
gdjs.Level_322Code.GDPlayerObjects2= [];
gdjs.Level_322Code.GDPlayerObjects3= [];
gdjs.Level_322Code.GDPlayerObjects4= [];
gdjs.Level_322Code.GDGrassObjects1= [];
gdjs.Level_322Code.GDGrassObjects2= [];
gdjs.Level_322Code.GDGrassObjects3= [];
gdjs.Level_322Code.GDGrassObjects4= [];
gdjs.Level_322Code.GDGrassSubObjects1= [];
gdjs.Level_322Code.GDGrassSubObjects2= [];
gdjs.Level_322Code.GDGrassSubObjects3= [];
gdjs.Level_322Code.GDGrassSubObjects4= [];
gdjs.Level_322Code.GDGrassJumpThruObjects1= [];
gdjs.Level_322Code.GDGrassJumpThruObjects2= [];
gdjs.Level_322Code.GDGrassJumpThruObjects3= [];
gdjs.Level_322Code.GDGrassJumpThruObjects4= [];
gdjs.Level_322Code.GDGrassJumpThru2Objects1= [];
gdjs.Level_322Code.GDGrassJumpThru2Objects2= [];
gdjs.Level_322Code.GDGrassJumpThru2Objects3= [];
gdjs.Level_322Code.GDGrassJumpThru2Objects4= [];
gdjs.Level_322Code.GDBackgroundObjects1= [];
gdjs.Level_322Code.GDBackgroundObjects2= [];
gdjs.Level_322Code.GDBackgroundObjects3= [];
gdjs.Level_322Code.GDBackgroundObjects4= [];
gdjs.Level_322Code.GDCoinObjects1= [];
gdjs.Level_322Code.GDCoinObjects2= [];
gdjs.Level_322Code.GDCoinObjects3= [];
gdjs.Level_322Code.GDCoinObjects4= [];
gdjs.Level_322Code.GDMoveLeftObjects1= [];
gdjs.Level_322Code.GDMoveLeftObjects2= [];
gdjs.Level_322Code.GDMoveLeftObjects3= [];
gdjs.Level_322Code.GDMoveLeftObjects4= [];
gdjs.Level_322Code.GDMoveRightObjects1= [];
gdjs.Level_322Code.GDMoveRightObjects2= [];
gdjs.Level_322Code.GDMoveRightObjects3= [];
gdjs.Level_322Code.GDMoveRightObjects4= [];
gdjs.Level_322Code.GDEnemyObjects1= [];
gdjs.Level_322Code.GDEnemyObjects2= [];
gdjs.Level_322Code.GDEnemyObjects3= [];
gdjs.Level_322Code.GDEnemyObjects4= [];
gdjs.Level_322Code.GDDoomObjects1= [];
gdjs.Level_322Code.GDDoomObjects2= [];
gdjs.Level_322Code.GDDoomObjects3= [];
gdjs.Level_322Code.GDDoomObjects4= [];
gdjs.Level_322Code.GDDoorObjects1= [];
gdjs.Level_322Code.GDDoorObjects2= [];
gdjs.Level_322Code.GDDoorObjects3= [];
gdjs.Level_322Code.GDDoorObjects4= [];
gdjs.Level_322Code.GDInvincibilityObjects1= [];
gdjs.Level_322Code.GDInvincibilityObjects2= [];
gdjs.Level_322Code.GDInvincibilityObjects3= [];
gdjs.Level_322Code.GDInvincibilityObjects4= [];
gdjs.Level_322Code.GDScoreObjects1= [];
gdjs.Level_322Code.GDScoreObjects2= [];
gdjs.Level_322Code.GDScoreObjects3= [];
gdjs.Level_322Code.GDScoreObjects4= [];
gdjs.Level_322Code.GDMuteButtonObjects1= [];
gdjs.Level_322Code.GDMuteButtonObjects2= [];
gdjs.Level_322Code.GDMuteButtonObjects3= [];
gdjs.Level_322Code.GDMuteButtonObjects4= [];
gdjs.Level_322Code.GDDoorFakeObjects1= [];
gdjs.Level_322Code.GDDoorFakeObjects2= [];
gdjs.Level_322Code.GDDoorFakeObjects3= [];
gdjs.Level_322Code.GDDoorFakeObjects4= [];
gdjs.Level_322Code.GDMainButtonObjects1= [];
gdjs.Level_322Code.GDMainButtonObjects2= [];
gdjs.Level_322Code.GDMainButtonObjects3= [];
gdjs.Level_322Code.GDMainButtonObjects4= [];
gdjs.Level_322Code.GDTimerObjects1= [];
gdjs.Level_322Code.GDTimerObjects2= [];
gdjs.Level_322Code.GDTimerObjects3= [];
gdjs.Level_322Code.GDTimerObjects4= [];
gdjs.Level_322Code.GDTimeObjectObjects1= [];
gdjs.Level_322Code.GDTimeObjectObjects2= [];
gdjs.Level_322Code.GDTimeObjectObjects3= [];
gdjs.Level_322Code.GDTimeObjectObjects4= [];

gdjs.Level_322Code.conditionTrue_0 = {val:false};
gdjs.Level_322Code.condition0IsTrue_0 = {val:false};
gdjs.Level_322Code.condition1IsTrue_0 = {val:false};
gdjs.Level_322Code.condition2IsTrue_0 = {val:false};
gdjs.Level_322Code.condition3IsTrue_0 = {val:false};
gdjs.Level_322Code.conditionTrue_1 = {val:false};
gdjs.Level_322Code.condition0IsTrue_1 = {val:false};
gdjs.Level_322Code.condition1IsTrue_1 = {val:false};
gdjs.Level_322Code.condition2IsTrue_1 = {val:false};
gdjs.Level_322Code.condition3IsTrue_1 = {val:false};


gdjs.Level_322Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_322Code.GDPlayerObjects2);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
gdjs.Level_322Code.condition1IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.Level_322Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level_322Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Level_322Code.condition1IsTrue_0.val = true;
        gdjs.Level_322Code.GDPlayerObjects2[k] = gdjs.Level_322Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_322Code.GDPlayerObjects2.length = k;}}
if (gdjs.Level_322Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level_322Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level_322Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDPlayerObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Level_322Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDPlayerObjects2[i].flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_322Code.GDPlayerObjects2);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
gdjs.Level_322Code.condition1IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.Level_322Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level_322Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Level_322Code.condition1IsTrue_0.val = true;
        gdjs.Level_322Code.GDPlayerObjects2[k] = gdjs.Level_322Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_322Code.GDPlayerObjects2.length = k;}}
if (gdjs.Level_322Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level_322Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level_322Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDPlayerObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Level_322Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDPlayerObjects2[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_322Code.GDPlayerObjects1);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_322Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Level_322Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.Level_322Code.condition0IsTrue_0.val = true;
        gdjs.Level_322Code.GDPlayerObjects1[k] = gdjs.Level_322Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_322Code.GDPlayerObjects1.length = k;}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_322Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDPlayerObjects1[i].setAnimation(0);
}
}}

}


};gdjs.Level_322Code.eventsList1 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_322Code.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Level_322Code.GDPlayerObjects1.length !== 0 ? gdjs.Level_322Code.GDPlayerObjects1[0] : null), true, "", 0);
}}

}


};gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDGrassJumpThruObjects3Objects = Hashtable.newFrom({"GrassJumpThru": gdjs.Level_322Code.GDGrassJumpThruObjects3});gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDMoveRightObjects3Objects = Hashtable.newFrom({"MoveRight": gdjs.Level_322Code.GDMoveRightObjects3});gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDGrassJumpThruObjects3Objects = Hashtable.newFrom({"GrassJumpThru": gdjs.Level_322Code.GDGrassJumpThruObjects3});gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDMoveLeftObjects3Objects = Hashtable.newFrom({"MoveLeft": gdjs.Level_322Code.GDMoveLeftObjects3});gdjs.Level_322Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GrassJumpThru"), gdjs.Level_322Code.GDGrassJumpThruObjects3);
gdjs.copyArray(runtimeScene.getObjects("MoveRight"), gdjs.Level_322Code.GDMoveRightObjects3);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDGrassJumpThruObjects3Objects, gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDMoveRightObjects3Objects, false, runtimeScene, false);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_322Code.GDGrassJumpThruObjects3 */
{for(var i = 0, len = gdjs.Level_322Code.GDGrassJumpThruObjects3.length ;i < len;++i) {
    gdjs.Level_322Code.GDGrassJumpThruObjects3[i].returnVariable(gdjs.Level_322Code.GDGrassJumpThruObjects3[i].getVariables().getFromIndex(0)).setString("Right");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GrassJumpThru"), gdjs.Level_322Code.GDGrassJumpThruObjects3);
gdjs.copyArray(runtimeScene.getObjects("MoveLeft"), gdjs.Level_322Code.GDMoveLeftObjects3);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDGrassJumpThruObjects3Objects, gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDMoveLeftObjects3Objects, false, runtimeScene, false);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_322Code.GDGrassJumpThruObjects3 */
{for(var i = 0, len = gdjs.Level_322Code.GDGrassJumpThruObjects3.length ;i < len;++i) {
    gdjs.Level_322Code.GDGrassJumpThruObjects3[i].returnVariable(gdjs.Level_322Code.GDGrassJumpThruObjects3[i].getVariables().getFromIndex(0)).setString("Left");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GrassJumpThru"), gdjs.Level_322Code.GDGrassJumpThruObjects3);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_322Code.GDGrassJumpThruObjects3.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDGrassJumpThruObjects3[i].getVariableString(gdjs.Level_322Code.GDGrassJumpThruObjects3[i].getVariables().getFromIndex(0)) == "Left" ) {
        gdjs.Level_322Code.condition0IsTrue_0.val = true;
        gdjs.Level_322Code.GDGrassJumpThruObjects3[k] = gdjs.Level_322Code.GDGrassJumpThruObjects3[i];
        ++k;
    }
}
gdjs.Level_322Code.GDGrassJumpThruObjects3.length = k;}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_322Code.GDGrassJumpThruObjects3 */
{for(var i = 0, len = gdjs.Level_322Code.GDGrassJumpThruObjects3.length ;i < len;++i) {
    gdjs.Level_322Code.GDGrassJumpThruObjects3[i].addForce(-(80), 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GrassJumpThru"), gdjs.Level_322Code.GDGrassJumpThruObjects2);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_322Code.GDGrassJumpThruObjects2.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDGrassJumpThruObjects2[i].getVariableString(gdjs.Level_322Code.GDGrassJumpThruObjects2[i].getVariables().getFromIndex(0)) == "Right" ) {
        gdjs.Level_322Code.condition0IsTrue_0.val = true;
        gdjs.Level_322Code.GDGrassJumpThruObjects2[k] = gdjs.Level_322Code.GDGrassJumpThruObjects2[i];
        ++k;
    }
}
gdjs.Level_322Code.GDGrassJumpThruObjects2.length = k;}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_322Code.GDGrassJumpThruObjects2 */
{for(var i = 0, len = gdjs.Level_322Code.GDGrassJumpThruObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDGrassJumpThruObjects2[i].addForce(80, 0, 0);
}
}}

}


};gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDGrassJumpThru2Objects2Objects = Hashtable.newFrom({"GrassJumpThru2": gdjs.Level_322Code.GDGrassJumpThru2Objects2});gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDMoveRightObjects2Objects = Hashtable.newFrom({"MoveRight": gdjs.Level_322Code.GDMoveRightObjects2});gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDGrassJumpThru2Objects2Objects = Hashtable.newFrom({"GrassJumpThru2": gdjs.Level_322Code.GDGrassJumpThru2Objects2});gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDMoveLeftObjects2Objects = Hashtable.newFrom({"MoveLeft": gdjs.Level_322Code.GDMoveLeftObjects2});gdjs.Level_322Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GrassJumpThru2"), gdjs.Level_322Code.GDGrassJumpThru2Objects2);
gdjs.copyArray(runtimeScene.getObjects("MoveRight"), gdjs.Level_322Code.GDMoveRightObjects2);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDGrassJumpThru2Objects2Objects, gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDMoveRightObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_322Code.GDGrassJumpThru2Objects2 */
{for(var i = 0, len = gdjs.Level_322Code.GDGrassJumpThru2Objects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDGrassJumpThru2Objects2[i].returnVariable(gdjs.Level_322Code.GDGrassJumpThru2Objects2[i].getVariables().getFromIndex(0)).setString("Right");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GrassJumpThru2"), gdjs.Level_322Code.GDGrassJumpThru2Objects2);
gdjs.copyArray(runtimeScene.getObjects("MoveLeft"), gdjs.Level_322Code.GDMoveLeftObjects2);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDGrassJumpThru2Objects2Objects, gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDMoveLeftObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_322Code.GDGrassJumpThru2Objects2 */
{for(var i = 0, len = gdjs.Level_322Code.GDGrassJumpThru2Objects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDGrassJumpThru2Objects2[i].returnVariable(gdjs.Level_322Code.GDGrassJumpThru2Objects2[i].getVariables().getFromIndex(0)).setString("Left");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GrassJumpThru2"), gdjs.Level_322Code.GDGrassJumpThru2Objects2);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_322Code.GDGrassJumpThru2Objects2.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDGrassJumpThru2Objects2[i].getVariableString(gdjs.Level_322Code.GDGrassJumpThru2Objects2[i].getVariables().getFromIndex(0)) == "Left" ) {
        gdjs.Level_322Code.condition0IsTrue_0.val = true;
        gdjs.Level_322Code.GDGrassJumpThru2Objects2[k] = gdjs.Level_322Code.GDGrassJumpThru2Objects2[i];
        ++k;
    }
}
gdjs.Level_322Code.GDGrassJumpThru2Objects2.length = k;}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_322Code.GDGrassJumpThru2Objects2 */
{for(var i = 0, len = gdjs.Level_322Code.GDGrassJumpThru2Objects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDGrassJumpThru2Objects2[i].addForce(-(80), 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GrassJumpThru2"), gdjs.Level_322Code.GDGrassJumpThru2Objects1);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_322Code.GDGrassJumpThru2Objects1.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDGrassJumpThru2Objects1[i].getVariableString(gdjs.Level_322Code.GDGrassJumpThru2Objects1[i].getVariables().getFromIndex(0)) == "Right" ) {
        gdjs.Level_322Code.condition0IsTrue_0.val = true;
        gdjs.Level_322Code.GDGrassJumpThru2Objects1[k] = gdjs.Level_322Code.GDGrassJumpThru2Objects1[i];
        ++k;
    }
}
gdjs.Level_322Code.GDGrassJumpThru2Objects1.length = k;}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_322Code.GDGrassJumpThru2Objects1 */
{for(var i = 0, len = gdjs.Level_322Code.GDGrassJumpThru2Objects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDGrassJumpThru2Objects1[i].addForce(80, 0, 0);
}
}}

}


};gdjs.Level_322Code.eventsList4 = function(runtimeScene) {

{


gdjs.Level_322Code.eventsList2(runtimeScene);
}


{


gdjs.Level_322Code.eventsList3(runtimeScene);
}


};gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Level_322Code.GDPlayerObjects2});gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDCoinObjects2Objects = Hashtable.newFrom({"Coin": gdjs.Level_322Code.GDCoinObjects2});gdjs.Level_322Code.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.Level_322Code.GDCoinObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_322Code.GDPlayerObjects2);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDPlayerObjects2Objects, gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDCoinObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_322Code.GDCoinObjects2 */
{for(var i = 0, len = gdjs.Level_322Code.GDCoinObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDCoinObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "handleCoins.ogg", false, 100, 1);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Level_322Code.GDScoreObjects1);
{for(var i = 0, len = gdjs.Level_322Code.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDScoreObjects1[i].setString("Tokens: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


};gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Level_322Code.GDPlayerObjects2});gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.Level_322Code.GDEnemyObjects2});gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Level_322Code.GDPlayerObjects2});gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.Level_322Code.GDEnemyObjects2});gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.Level_322Code.GDEnemyObjects2});gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDMoveRightObjects2Objects = Hashtable.newFrom({"MoveRight": gdjs.Level_322Code.GDMoveRightObjects2});gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.Level_322Code.GDEnemyObjects2});gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDMoveLeftObjects2Objects = Hashtable.newFrom({"MoveLeft": gdjs.Level_322Code.GDMoveLeftObjects2});gdjs.Level_322Code.eventsList6 = function(runtimeScene) {

{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MoveLeft"), gdjs.Level_322Code.GDMoveLeftObjects2);
gdjs.copyArray(runtimeScene.getObjects("MoveRight"), gdjs.Level_322Code.GDMoveRightObjects2);
{for(var i = 0, len = gdjs.Level_322Code.GDMoveLeftObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDMoveLeftObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Level_322Code.GDMoveRightObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDMoveRightObjects2[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Level_322Code.GDEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_322Code.GDPlayerObjects2);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
gdjs.Level_322Code.condition1IsTrue_0.val = false;
gdjs.Level_322Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_322Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Level_322Code.condition0IsTrue_0.val = true;
        gdjs.Level_322Code.GDPlayerObjects2[k] = gdjs.Level_322Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_322Code.GDPlayerObjects2.length = k;}if ( gdjs.Level_322Code.condition0IsTrue_0.val ) {
{
gdjs.Level_322Code.condition1IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1);
}if ( gdjs.Level_322Code.condition1IsTrue_0.val ) {
{
gdjs.Level_322Code.condition2IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDPlayerObjects2Objects, gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDEnemyObjects2Objects, false, runtimeScene, false);
}}
}
if (gdjs.Level_322Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Level_322Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level_322Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDPlayerObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Level_322Code.GDEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_322Code.GDPlayerObjects2);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
gdjs.Level_322Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_322Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Level_322Code.condition0IsTrue_0.val = true;
        gdjs.Level_322Code.GDPlayerObjects2[k] = gdjs.Level_322Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_322Code.GDPlayerObjects2.length = k;}if ( gdjs.Level_322Code.condition0IsTrue_0.val ) {
{
gdjs.Level_322Code.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDPlayerObjects2Objects, gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDEnemyObjects2Objects, false, runtimeScene, false);
}}
if (gdjs.Level_322Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level_322Code.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.Level_322Code.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDEnemyObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "knifeSlice2.ogg", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Level_322Code.GDEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("MoveRight"), gdjs.Level_322Code.GDMoveRightObjects2);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDEnemyObjects2Objects, gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDMoveRightObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_322Code.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.Level_322Code.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDEnemyObjects2[i].flipX(true);
}
}{for(var i = 0, len = gdjs.Level_322Code.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDEnemyObjects2[i].returnVariable(gdjs.Level_322Code.GDEnemyObjects2[i].getVariables().getFromIndex(0)).setString("Right");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Level_322Code.GDEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("MoveLeft"), gdjs.Level_322Code.GDMoveLeftObjects2);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDEnemyObjects2Objects, gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDMoveLeftObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_322Code.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.Level_322Code.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDEnemyObjects2[i].flipX(false);
}
}{for(var i = 0, len = gdjs.Level_322Code.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDEnemyObjects2[i].returnVariable(gdjs.Level_322Code.GDEnemyObjects2[i].getVariables().getFromIndex(0)).setString("Left");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Level_322Code.GDEnemyObjects2);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_322Code.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDEnemyObjects2[i].getVariableString(gdjs.Level_322Code.GDEnemyObjects2[i].getVariables().getFromIndex(0)) == "Left" ) {
        gdjs.Level_322Code.condition0IsTrue_0.val = true;
        gdjs.Level_322Code.GDEnemyObjects2[k] = gdjs.Level_322Code.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs.Level_322Code.GDEnemyObjects2.length = k;}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_322Code.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.Level_322Code.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDEnemyObjects2[i].addForce(-(100), 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Level_322Code.GDEnemyObjects1);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_322Code.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDEnemyObjects1[i].getVariableString(gdjs.Level_322Code.GDEnemyObjects1[i].getVariables().getFromIndex(0)) == "Right" ) {
        gdjs.Level_322Code.condition0IsTrue_0.val = true;
        gdjs.Level_322Code.GDEnemyObjects1[k] = gdjs.Level_322Code.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.Level_322Code.GDEnemyObjects1.length = k;}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_322Code.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.Level_322Code.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDEnemyObjects1[i].addForce(100, 0, 0);
}
}}

}


};gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Level_322Code.GDPlayerObjects2});gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDDoomObjects2Objects = Hashtable.newFrom({"Doom": gdjs.Level_322Code.GDDoomObjects2});gdjs.Level_322Code.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Doom"), gdjs.Level_322Code.GDDoomObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_322Code.GDPlayerObjects2);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
gdjs.Level_322Code.condition1IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDPlayerObjects2Objects, gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDDoomObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Level_322Code.condition0IsTrue_0.val ) {
{
gdjs.Level_322Code.condition1IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1);
}}
if (gdjs.Level_322Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level_322Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level_322Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDPlayerObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 2", false);
}}

}


{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Doom"), gdjs.Level_322Code.GDDoomObjects1);
{for(var i = 0, len = gdjs.Level_322Code.GDDoomObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDDoomObjects1[i].hide();
}
}}

}


};gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_322Code.GDPlayerObjects1});gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.Level_322Code.GDDoorObjects1});gdjs.Level_322Code.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Level_322Code.GDDoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_322Code.GDPlayerObjects1);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDPlayerObjects1Objects, gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDDoorObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "doorOpen_1.ogg", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "End Screen", true);
}}

}


};gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDInvincibilityObjects1Objects = Hashtable.newFrom({"Invincibility": gdjs.Level_322Code.GDInvincibilityObjects1});gdjs.Level_322Code.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Invincibility"), gdjs.Level_322Code.GDInvincibilityObjects1);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
gdjs.Level_322Code.condition1IsTrue_0.val = false;
gdjs.Level_322Code.condition2IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDInvincibilityObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Level_322Code.condition0IsTrue_0.val ) {
{
gdjs.Level_322Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Level_322Code.condition1IsTrue_0.val ) {
{
{gdjs.Level_322Code.conditionTrue_1 = gdjs.Level_322Code.condition2IsTrue_0;
gdjs.Level_322Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9448444);
}
}}
}
if (gdjs.Level_322Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Level_322Code.GDInvincibilityObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).mul(-(1));
}{for(var i = 0, len = gdjs.Level_322Code.GDInvincibilityObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDInvincibilityObjects1[i].setString("God Mode: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


};gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDMuteButtonObjects1Objects = Hashtable.newFrom({"MuteButton": gdjs.Level_322Code.GDMuteButtonObjects1});gdjs.Level_322Code.eventsList10 = function(runtimeScene) {

{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Level_322Code.GDMuteButtonObjects1, gdjs.Level_322Code.GDMuteButtonObjects2);

{for(var i = 0, len = gdjs.Level_322Code.GDMuteButtonObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDMuteButtonObjects2[i].setString("Mute: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}}

}


{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == -(1);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_322Code.GDMuteButtonObjects1 */
{for(var i = 0, len = gdjs.Level_322Code.GDMuteButtonObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDMuteButtonObjects1[i].setString("Mute: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
}}

}


};gdjs.Level_322Code.eventsList11 = function(runtimeScene) {

{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Kevin MacLeod - Pixelland NO COPYRIGHT 8-bit Music.mp3", 1, true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MuteButton"), gdjs.Level_322Code.GDMuteButtonObjects1);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
gdjs.Level_322Code.condition1IsTrue_0.val = false;
gdjs.Level_322Code.condition2IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDMuteButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Level_322Code.condition0IsTrue_0.val ) {
{
gdjs.Level_322Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Level_322Code.condition1IsTrue_0.val ) {
{
{gdjs.Level_322Code.conditionTrue_1 = gdjs.Level_322Code.condition2IsTrue_0;
gdjs.Level_322Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9451228);
}
}}
}
if (gdjs.Level_322Code.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).mul(-(1));
}
{ //Subevents
gdjs.Level_322Code.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.Level_322Code.eventsList12 = function(runtimeScene) {

};gdjs.Level_322Code.eventsList13 = function(runtimeScene) {

{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "countdown");
}{runtimeScene.getVariables().get("timerCountdown").setNumber(60);
}}

}


{


gdjs.Level_322Code.repeatCount3 = 1;
for(gdjs.Level_322Code.repeatIndex3 = 0;gdjs.Level_322Code.repeatIndex3 < gdjs.Level_322Code.repeatCount3;++gdjs.Level_322Code.repeatIndex3) {

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "countdown");
}if (gdjs.Level_322Code.condition0IsTrue_0.val)
{
{runtimeScene.getVariables().get("timerCountdown").sub(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "countdown");
}}
}

}


{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
gdjs.Level_322Code.condition1IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("timerCountdown")) <= 0;
}if ( gdjs.Level_322Code.condition0IsTrue_0.val ) {
{
gdjs.Level_322Code.condition1IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1);
}}
if (gdjs.Level_322Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.Level_322Code.GDTimerObjects1);
{for(var i = 0, len = gdjs.Level_322Code.GDTimerObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDTimerObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("timerCountdown"))));
}
}}

}


};gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDMainButtonObjects1Objects = Hashtable.newFrom({"MainButton": gdjs.Level_322Code.GDMainButtonObjects1});gdjs.Level_322Code.eventsList14 = function(runtimeScene) {

};gdjs.Level_322Code.eventsList15 = function(runtimeScene) {

{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TimeObject"), gdjs.Level_322Code.GDTimeObjectObjects2);
{for(var i = 0, len = gdjs.Level_322Code.GDTimeObjectObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDTimeObjectObjects2[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "total");
}}

}


{


gdjs.Level_322Code.repeatCount3 = 1;
for(gdjs.Level_322Code.repeatIndex3 = 0;gdjs.Level_322Code.repeatIndex3 < gdjs.Level_322Code.repeatCount3;++gdjs.Level_322Code.repeatIndex3) {

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "total");
}if (gdjs.Level_322Code.condition0IsTrue_0.val)
{
{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "total");
}}
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("TimeObject"), gdjs.Level_322Code.GDTimeObjectObjects1);
{for(var i = 0, len = gdjs.Level_322Code.GDTimeObjectObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDTimeObjectObjects1[i].setString("Total Time Elapsed: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}}

}


};gdjs.Level_322Code.eventsList16 = function(runtimeScene) {

{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TimeObject"), gdjs.Level_322Code.GDTimeObjectObjects2);
{for(var i = 0, len = gdjs.Level_322Code.GDTimeObjectObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDTimeObjectObjects2[i].hide(false);
}
}}

}


{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == -(1);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TimeObject"), gdjs.Level_322Code.GDTimeObjectObjects1);
{for(var i = 0, len = gdjs.Level_322Code.GDTimeObjectObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDTimeObjectObjects1[i].hide();
}
}}

}


};gdjs.Level_322Code.eventsList17 = function(runtimeScene) {

{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
gdjs.Level_322Code.condition1IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "k");
}if ( gdjs.Level_322Code.condition0IsTrue_0.val ) {
{
{gdjs.Level_322Code.conditionTrue_1 = gdjs.Level_322Code.condition1IsTrue_0;
gdjs.Level_322Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9461012);
}
}}
if (gdjs.Level_322Code.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).mul(-(1));
}
{ //Subevents
gdjs.Level_322Code.eventsList16(runtimeScene);} //End of subevents
}

}


};gdjs.Level_322Code.eventsList18 = function(runtimeScene) {

{


gdjs.Level_322Code.eventsList0(runtimeScene);
}


{


gdjs.Level_322Code.eventsList1(runtimeScene);
}


{


gdjs.Level_322Code.eventsList4(runtimeScene);
}


{


gdjs.Level_322Code.eventsList5(runtimeScene);
}


{


gdjs.Level_322Code.eventsList6(runtimeScene);
}


{


gdjs.Level_322Code.eventsList7(runtimeScene);
}


{


gdjs.Level_322Code.eventsList8(runtimeScene);
}


{


gdjs.Level_322Code.eventsList9(runtimeScene);
}


{


gdjs.Level_322Code.eventsList11(runtimeScene);
}


{


gdjs.Level_322Code.eventsList13(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("MainButton"), gdjs.Level_322Code.GDMainButtonObjects1);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
gdjs.Level_322Code.condition1IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDMainButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Level_322Code.condition0IsTrue_0.val ) {
{
gdjs.Level_322Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Level_322Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


{


gdjs.Level_322Code.eventsList15(runtimeScene);
}


{


gdjs.Level_322Code.eventsList17(runtimeScene);
}


};

gdjs.Level_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_322Code.GDPlayerObjects1.length = 0;
gdjs.Level_322Code.GDPlayerObjects2.length = 0;
gdjs.Level_322Code.GDPlayerObjects3.length = 0;
gdjs.Level_322Code.GDPlayerObjects4.length = 0;
gdjs.Level_322Code.GDGrassObjects1.length = 0;
gdjs.Level_322Code.GDGrassObjects2.length = 0;
gdjs.Level_322Code.GDGrassObjects3.length = 0;
gdjs.Level_322Code.GDGrassObjects4.length = 0;
gdjs.Level_322Code.GDGrassSubObjects1.length = 0;
gdjs.Level_322Code.GDGrassSubObjects2.length = 0;
gdjs.Level_322Code.GDGrassSubObjects3.length = 0;
gdjs.Level_322Code.GDGrassSubObjects4.length = 0;
gdjs.Level_322Code.GDGrassJumpThruObjects1.length = 0;
gdjs.Level_322Code.GDGrassJumpThruObjects2.length = 0;
gdjs.Level_322Code.GDGrassJumpThruObjects3.length = 0;
gdjs.Level_322Code.GDGrassJumpThruObjects4.length = 0;
gdjs.Level_322Code.GDGrassJumpThru2Objects1.length = 0;
gdjs.Level_322Code.GDGrassJumpThru2Objects2.length = 0;
gdjs.Level_322Code.GDGrassJumpThru2Objects3.length = 0;
gdjs.Level_322Code.GDGrassJumpThru2Objects4.length = 0;
gdjs.Level_322Code.GDBackgroundObjects1.length = 0;
gdjs.Level_322Code.GDBackgroundObjects2.length = 0;
gdjs.Level_322Code.GDBackgroundObjects3.length = 0;
gdjs.Level_322Code.GDBackgroundObjects4.length = 0;
gdjs.Level_322Code.GDCoinObjects1.length = 0;
gdjs.Level_322Code.GDCoinObjects2.length = 0;
gdjs.Level_322Code.GDCoinObjects3.length = 0;
gdjs.Level_322Code.GDCoinObjects4.length = 0;
gdjs.Level_322Code.GDMoveLeftObjects1.length = 0;
gdjs.Level_322Code.GDMoveLeftObjects2.length = 0;
gdjs.Level_322Code.GDMoveLeftObjects3.length = 0;
gdjs.Level_322Code.GDMoveLeftObjects4.length = 0;
gdjs.Level_322Code.GDMoveRightObjects1.length = 0;
gdjs.Level_322Code.GDMoveRightObjects2.length = 0;
gdjs.Level_322Code.GDMoveRightObjects3.length = 0;
gdjs.Level_322Code.GDMoveRightObjects4.length = 0;
gdjs.Level_322Code.GDEnemyObjects1.length = 0;
gdjs.Level_322Code.GDEnemyObjects2.length = 0;
gdjs.Level_322Code.GDEnemyObjects3.length = 0;
gdjs.Level_322Code.GDEnemyObjects4.length = 0;
gdjs.Level_322Code.GDDoomObjects1.length = 0;
gdjs.Level_322Code.GDDoomObjects2.length = 0;
gdjs.Level_322Code.GDDoomObjects3.length = 0;
gdjs.Level_322Code.GDDoomObjects4.length = 0;
gdjs.Level_322Code.GDDoorObjects1.length = 0;
gdjs.Level_322Code.GDDoorObjects2.length = 0;
gdjs.Level_322Code.GDDoorObjects3.length = 0;
gdjs.Level_322Code.GDDoorObjects4.length = 0;
gdjs.Level_322Code.GDInvincibilityObjects1.length = 0;
gdjs.Level_322Code.GDInvincibilityObjects2.length = 0;
gdjs.Level_322Code.GDInvincibilityObjects3.length = 0;
gdjs.Level_322Code.GDInvincibilityObjects4.length = 0;
gdjs.Level_322Code.GDScoreObjects1.length = 0;
gdjs.Level_322Code.GDScoreObjects2.length = 0;
gdjs.Level_322Code.GDScoreObjects3.length = 0;
gdjs.Level_322Code.GDScoreObjects4.length = 0;
gdjs.Level_322Code.GDMuteButtonObjects1.length = 0;
gdjs.Level_322Code.GDMuteButtonObjects2.length = 0;
gdjs.Level_322Code.GDMuteButtonObjects3.length = 0;
gdjs.Level_322Code.GDMuteButtonObjects4.length = 0;
gdjs.Level_322Code.GDDoorFakeObjects1.length = 0;
gdjs.Level_322Code.GDDoorFakeObjects2.length = 0;
gdjs.Level_322Code.GDDoorFakeObjects3.length = 0;
gdjs.Level_322Code.GDDoorFakeObjects4.length = 0;
gdjs.Level_322Code.GDMainButtonObjects1.length = 0;
gdjs.Level_322Code.GDMainButtonObjects2.length = 0;
gdjs.Level_322Code.GDMainButtonObjects3.length = 0;
gdjs.Level_322Code.GDMainButtonObjects4.length = 0;
gdjs.Level_322Code.GDTimerObjects1.length = 0;
gdjs.Level_322Code.GDTimerObjects2.length = 0;
gdjs.Level_322Code.GDTimerObjects3.length = 0;
gdjs.Level_322Code.GDTimerObjects4.length = 0;
gdjs.Level_322Code.GDTimeObjectObjects1.length = 0;
gdjs.Level_322Code.GDTimeObjectObjects2.length = 0;
gdjs.Level_322Code.GDTimeObjectObjects3.length = 0;
gdjs.Level_322Code.GDTimeObjectObjects4.length = 0;

gdjs.Level_322Code.eventsList18(runtimeScene);
return;

}

gdjs['Level_322Code'] = gdjs.Level_322Code;
