gdjs.Level_32PrototypeCode = {};
gdjs.Level_32PrototypeCode.GDPlayerObjects1= [];
gdjs.Level_32PrototypeCode.GDPlayerObjects2= [];
gdjs.Level_32PrototypeCode.GDPlayerObjects3= [];
gdjs.Level_32PrototypeCode.GDPlayerObjects4= [];
gdjs.Level_32PrototypeCode.GDGrassObjects1= [];
gdjs.Level_32PrototypeCode.GDGrassObjects2= [];
gdjs.Level_32PrototypeCode.GDGrassObjects3= [];
gdjs.Level_32PrototypeCode.GDGrassObjects4= [];
gdjs.Level_32PrototypeCode.GDGrassSubObjects1= [];
gdjs.Level_32PrototypeCode.GDGrassSubObjects2= [];
gdjs.Level_32PrototypeCode.GDGrassSubObjects3= [];
gdjs.Level_32PrototypeCode.GDGrassSubObjects4= [];
gdjs.Level_32PrototypeCode.GDGrassJumpThruObjects1= [];
gdjs.Level_32PrototypeCode.GDGrassJumpThruObjects2= [];
gdjs.Level_32PrototypeCode.GDGrassJumpThruObjects3= [];
gdjs.Level_32PrototypeCode.GDGrassJumpThruObjects4= [];
gdjs.Level_32PrototypeCode.GDGrassJumpThru2Objects1= [];
gdjs.Level_32PrototypeCode.GDGrassJumpThru2Objects2= [];
gdjs.Level_32PrototypeCode.GDGrassJumpThru2Objects3= [];
gdjs.Level_32PrototypeCode.GDGrassJumpThru2Objects4= [];
gdjs.Level_32PrototypeCode.GDBackgroundObjects1= [];
gdjs.Level_32PrototypeCode.GDBackgroundObjects2= [];
gdjs.Level_32PrototypeCode.GDBackgroundObjects3= [];
gdjs.Level_32PrototypeCode.GDBackgroundObjects4= [];
gdjs.Level_32PrototypeCode.GDCoinObjects1= [];
gdjs.Level_32PrototypeCode.GDCoinObjects2= [];
gdjs.Level_32PrototypeCode.GDCoinObjects3= [];
gdjs.Level_32PrototypeCode.GDCoinObjects4= [];
gdjs.Level_32PrototypeCode.GDMoveLeftObjects1= [];
gdjs.Level_32PrototypeCode.GDMoveLeftObjects2= [];
gdjs.Level_32PrototypeCode.GDMoveLeftObjects3= [];
gdjs.Level_32PrototypeCode.GDMoveLeftObjects4= [];
gdjs.Level_32PrototypeCode.GDMoveRightObjects1= [];
gdjs.Level_32PrototypeCode.GDMoveRightObjects2= [];
gdjs.Level_32PrototypeCode.GDMoveRightObjects3= [];
gdjs.Level_32PrototypeCode.GDMoveRightObjects4= [];
gdjs.Level_32PrototypeCode.GDEnemyObjects1= [];
gdjs.Level_32PrototypeCode.GDEnemyObjects2= [];
gdjs.Level_32PrototypeCode.GDEnemyObjects3= [];
gdjs.Level_32PrototypeCode.GDEnemyObjects4= [];
gdjs.Level_32PrototypeCode.GDDoomObjects1= [];
gdjs.Level_32PrototypeCode.GDDoomObjects2= [];
gdjs.Level_32PrototypeCode.GDDoomObjects3= [];
gdjs.Level_32PrototypeCode.GDDoomObjects4= [];
gdjs.Level_32PrototypeCode.GDDoorObjects1= [];
gdjs.Level_32PrototypeCode.GDDoorObjects2= [];
gdjs.Level_32PrototypeCode.GDDoorObjects3= [];
gdjs.Level_32PrototypeCode.GDDoorObjects4= [];
gdjs.Level_32PrototypeCode.GDInvincibilityObjects1= [];
gdjs.Level_32PrototypeCode.GDInvincibilityObjects2= [];
gdjs.Level_32PrototypeCode.GDInvincibilityObjects3= [];
gdjs.Level_32PrototypeCode.GDInvincibilityObjects4= [];

gdjs.Level_32PrototypeCode.conditionTrue_0 = {val:false};
gdjs.Level_32PrototypeCode.condition0IsTrue_0 = {val:false};
gdjs.Level_32PrototypeCode.condition1IsTrue_0 = {val:false};
gdjs.Level_32PrototypeCode.condition2IsTrue_0 = {val:false};
gdjs.Level_32PrototypeCode.condition3IsTrue_0 = {val:false};


gdjs.Level_32PrototypeCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_32PrototypeCode.GDPlayerObjects2);

gdjs.Level_32PrototypeCode.condition0IsTrue_0.val = false;
gdjs.Level_32PrototypeCode.condition1IsTrue_0.val = false;
{
gdjs.Level_32PrototypeCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.Level_32PrototypeCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level_32PrototypeCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level_32PrototypeCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Level_32PrototypeCode.condition1IsTrue_0.val = true;
        gdjs.Level_32PrototypeCode.GDPlayerObjects2[k] = gdjs.Level_32PrototypeCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_32PrototypeCode.GDPlayerObjects2.length = k;}}
if (gdjs.Level_32PrototypeCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Level_32PrototypeCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level_32PrototypeCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_32PrototypeCode.GDPlayerObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Level_32PrototypeCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_32PrototypeCode.GDPlayerObjects2[i].flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_32PrototypeCode.GDPlayerObjects2);

gdjs.Level_32PrototypeCode.condition0IsTrue_0.val = false;
gdjs.Level_32PrototypeCode.condition1IsTrue_0.val = false;
{
gdjs.Level_32PrototypeCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.Level_32PrototypeCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level_32PrototypeCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level_32PrototypeCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Level_32PrototypeCode.condition1IsTrue_0.val = true;
        gdjs.Level_32PrototypeCode.GDPlayerObjects2[k] = gdjs.Level_32PrototypeCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_32PrototypeCode.GDPlayerObjects2.length = k;}}
if (gdjs.Level_32PrototypeCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Level_32PrototypeCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level_32PrototypeCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_32PrototypeCode.GDPlayerObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Level_32PrototypeCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_32PrototypeCode.GDPlayerObjects2[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_32PrototypeCode.GDPlayerObjects1);

gdjs.Level_32PrototypeCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_32PrototypeCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Level_32PrototypeCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.Level_32PrototypeCode.condition0IsTrue_0.val = true;
        gdjs.Level_32PrototypeCode.GDPlayerObjects1[k] = gdjs.Level_32PrototypeCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_32PrototypeCode.GDPlayerObjects1.length = k;}if (gdjs.Level_32PrototypeCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_32PrototypeCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_32PrototypeCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_32PrototypeCode.GDPlayerObjects1[i].setAnimation(0);
}
}}

}


};gdjs.Level_32PrototypeCode.eventsList1 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_32PrototypeCode.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Level_32PrototypeCode.GDPlayerObjects1.length !== 0 ? gdjs.Level_32PrototypeCode.GDPlayerObjects1[0] : null), true, "", 0);
}}

}


};gdjs.Level_32PrototypeCode.mapOfGDgdjs_46Level_9532PrototypeCode_46GDGrassJumpThruObjects3Objects = Hashtable.newFrom({"GrassJumpThru": gdjs.Level_32PrototypeCode.GDGrassJumpThruObjects3});gdjs.Level_32PrototypeCode.mapOfGDgdjs_46Level_9532PrototypeCode_46GDMoveRightObjects3Objects = Hashtable.newFrom({"MoveRight": gdjs.Level_32PrototypeCode.GDMoveRightObjects3});gdjs.Level_32PrototypeCode.mapOfGDgdjs_46Level_9532PrototypeCode_46GDGrassJumpThruObjects3Objects = Hashtable.newFrom({"GrassJumpThru": gdjs.Level_32PrototypeCode.GDGrassJumpThruObjects3});gdjs.Level_32PrototypeCode.mapOfGDgdjs_46Level_9532PrototypeCode_46GDMoveLeftObjects3Objects = Hashtable.newFrom({"MoveLeft": gdjs.Level_32PrototypeCode.GDMoveLeftObjects3});gdjs.Level_32PrototypeCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GrassJumpThru"), gdjs.Level_32PrototypeCode.GDGrassJumpThruObjects3);
gdjs.copyArray(runtimeScene.getObjects("MoveRight"), gdjs.Level_32PrototypeCode.GDMoveRightObjects3);

gdjs.Level_32PrototypeCode.condition0IsTrue_0.val = false;
{
gdjs.Level_32PrototypeCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_32PrototypeCode.mapOfGDgdjs_46Level_9532PrototypeCode_46GDGrassJumpThruObjects3Objects, gdjs.Level_32PrototypeCode.mapOfGDgdjs_46Level_9532PrototypeCode_46GDMoveRightObjects3Objects, false, runtimeScene, false);
}if (gdjs.Level_32PrototypeCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_32PrototypeCode.GDGrassJumpThruObjects3 */
{for(var i = 0, len = gdjs.Level_32PrototypeCode.GDGrassJumpThruObjects3.length ;i < len;++i) {
    gdjs.Level_32PrototypeCode.GDGrassJumpThruObjects3[i].returnVariable(gdjs.Level_32PrototypeCode.GDGrassJumpThruObjects3[i].getVariables().getFromIndex(0)).setString("Right");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GrassJumpThru"), gdjs.Level_32PrototypeCode.GDGrassJumpThruObjects3);
gdjs.copyArray(runtimeScene.getObjects("MoveLeft"), gdjs.Level_32PrototypeCode.GDMoveLeftObjects3);

gdjs.Level_32PrototypeCode.condition0IsTrue_0.val = false;
{
gdjs.Level_32PrototypeCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_32PrototypeCode.mapOfGDgdjs_46Level_9532PrototypeCode_46GDGrassJumpThruObjects3Objects, gdjs.Level_32PrototypeCode.mapOfGDgdjs_46Level_9532PrototypeCode_46GDMoveLeftObjects3Objects, false, runtimeScene, false);
}if (gdjs.Level_32PrototypeCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_32PrototypeCode.GDGrassJumpThruObjects3 */
{for(var i = 0, len = gdjs.Level_32PrototypeCode.GDGrassJumpThruObjects3.length ;i < len;++i) {
    gdjs.Level_32PrototypeCode.GDGrassJumpThruObjects3[i].returnVariable(gdjs.Level_32PrototypeCode.GDGrassJumpThruObjects3[i].getVariables().getFromIndex(0)).setString("Left");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GrassJumpThru"), gdjs.Level_32PrototypeCode.GDGrassJumpThruObjects3);

gdjs.Level_32PrototypeCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_32PrototypeCode.GDGrassJumpThruObjects3.length;i<l;++i) {
    if ( gdjs.Level_32PrototypeCode.GDGrassJumpThruObjects3[i].getVariableString(gdjs.Level_32PrototypeCode.GDGrassJumpThruObjects3[i].getVariables().getFromIndex(0)) == "Left" ) {
        gdjs.Level_32PrototypeCode.condition0IsTrue_0.val = true;
        gdjs.Level_32PrototypeCode.GDGrassJumpThruObjects3[k] = gdjs.Level_32PrototypeCode.GDGrassJumpThruObjects3[i];
        ++k;
    }
}
gdjs.Level_32PrototypeCode.GDGrassJumpThruObjects3.length = k;}if (gdjs.Level_32PrototypeCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_32PrototypeCode.GDGrassJumpThruObjects3 */
{for(var i = 0, len = gdjs.Level_32PrototypeCode.GDGrassJumpThruObjects3.length ;i < len;++i) {
    gdjs.Level_32PrototypeCode.GDGrassJumpThruObjects3[i].addForce(-(80), 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GrassJumpThru"), gdjs.Level_32PrototypeCode.GDGrassJumpThruObjects2);

gdjs.Level_32PrototypeCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_32PrototypeCode.GDGrassJumpThruObjects2.length;i<l;++i) {
    if ( gdjs.Level_32PrototypeCode.GDGrassJumpThruObjects2[i].getVariableString(gdjs.Level_32PrototypeCode.GDGrassJumpThruObjects2[i].getVariables().getFromIndex(0)) == "Right" ) {
        gdjs.Level_32PrototypeCode.condition0IsTrue_0.val = true;
        gdjs.Level_32PrototypeCode.GDGrassJumpThruObjects2[k] = gdjs.Level_32PrototypeCode.GDGrassJumpThruObjects2[i];
        ++k;
    }
}
gdjs.Level_32PrototypeCode.GDGrassJumpThruObjects2.length = k;}if (gdjs.Level_32PrototypeCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_32PrototypeCode.GDGrassJumpThruObjects2 */
{for(var i = 0, len = gdjs.Level_32PrototypeCode.GDGrassJumpThruObjects2.length ;i < len;++i) {
    gdjs.Level_32PrototypeCode.GDGrassJumpThruObjects2[i].addForce(80, 0, 0);
}
}}

}


};gdjs.Level_32PrototypeCode.mapOfGDgdjs_46Level_9532PrototypeCode_46GDGrassJumpThru2Objects2Objects = Hashtable.newFrom({"GrassJumpThru2": gdjs.Level_32PrototypeCode.GDGrassJumpThru2Objects2});gdjs.Level_32PrototypeCode.mapOfGDgdjs_46Level_9532PrototypeCode_46GDMoveRightObjects2Objects = Hashtable.newFrom({"MoveRight": gdjs.Level_32PrototypeCode.GDMoveRightObjects2});gdjs.Level_32PrototypeCode.mapOfGDgdjs_46Level_9532PrototypeCode_46GDGrassJumpThru2Objects2Objects = Hashtable.newFrom({"GrassJumpThru2": gdjs.Level_32PrototypeCode.GDGrassJumpThru2Objects2});gdjs.Level_32PrototypeCode.mapOfGDgdjs_46Level_9532PrototypeCode_46GDMoveLeftObjects2Objects = Hashtable.newFrom({"MoveLeft": gdjs.Level_32PrototypeCode.GDMoveLeftObjects2});gdjs.Level_32PrototypeCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GrassJumpThru2"), gdjs.Level_32PrototypeCode.GDGrassJumpThru2Objects2);
gdjs.copyArray(runtimeScene.getObjects("MoveRight"), gdjs.Level_32PrototypeCode.GDMoveRightObjects2);

gdjs.Level_32PrototypeCode.condition0IsTrue_0.val = false;
{
gdjs.Level_32PrototypeCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_32PrototypeCode.mapOfGDgdjs_46Level_9532PrototypeCode_46GDGrassJumpThru2Objects2Objects, gdjs.Level_32PrototypeCode.mapOfGDgdjs_46Level_9532PrototypeCode_46GDMoveRightObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level_32PrototypeCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_32PrototypeCode.GDGrassJumpThru2Objects2 */
{for(var i = 0, len = gdjs.Level_32PrototypeCode.GDGrassJumpThru2Objects2.length ;i < len;++i) {
    gdjs.Level_32PrototypeCode.GDGrassJumpThru2Objects2[i].returnVariable(gdjs.Level_32PrototypeCode.GDGrassJumpThru2Objects2[i].getVariables().getFromIndex(0)).setString("Right");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GrassJumpThru2"), gdjs.Level_32PrototypeCode.GDGrassJumpThru2Objects2);
gdjs.copyArray(runtimeScene.getObjects("MoveLeft"), gdjs.Level_32PrototypeCode.GDMoveLeftObjects2);

gdjs.Level_32PrototypeCode.condition0IsTrue_0.val = false;
{
gdjs.Level_32PrototypeCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_32PrototypeCode.mapOfGDgdjs_46Level_9532PrototypeCode_46GDGrassJumpThru2Objects2Objects, gdjs.Level_32PrototypeCode.mapOfGDgdjs_46Level_9532PrototypeCode_46GDMoveLeftObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level_32PrototypeCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_32PrototypeCode.GDGrassJumpThru2Objects2 */
{for(var i = 0, len = gdjs.Level_32PrototypeCode.GDGrassJumpThru2Objects2.length ;i < len;++i) {
    gdjs.Level_32PrototypeCode.GDGrassJumpThru2Objects2[i].returnVariable(gdjs.Level_32PrototypeCode.GDGrassJumpThru2Objects2[i].getVariables().getFromIndex(0)).setString("Left");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GrassJumpThru2"), gdjs.Level_32PrototypeCode.GDGrassJumpThru2Objects2);

gdjs.Level_32PrototypeCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_32PrototypeCode.GDGrassJumpThru2Objects2.length;i<l;++i) {
    if ( gdjs.Level_32PrototypeCode.GDGrassJumpThru2Objects2[i].getVariableString(gdjs.Level_32PrototypeCode.GDGrassJumpThru2Objects2[i].getVariables().getFromIndex(0)) == "Left" ) {
        gdjs.Level_32PrototypeCode.condition0IsTrue_0.val = true;
        gdjs.Level_32PrototypeCode.GDGrassJumpThru2Objects2[k] = gdjs.Level_32PrototypeCode.GDGrassJumpThru2Objects2[i];
        ++k;
    }
}
gdjs.Level_32PrototypeCode.GDGrassJumpThru2Objects2.length = k;}if (gdjs.Level_32PrototypeCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_32PrototypeCode.GDGrassJumpThru2Objects2 */
{for(var i = 0, len = gdjs.Level_32PrototypeCode.GDGrassJumpThru2Objects2.length ;i < len;++i) {
    gdjs.Level_32PrototypeCode.GDGrassJumpThru2Objects2[i].addForce(-(80), 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GrassJumpThru2"), gdjs.Level_32PrototypeCode.GDGrassJumpThru2Objects1);

gdjs.Level_32PrototypeCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_32PrototypeCode.GDGrassJumpThru2Objects1.length;i<l;++i) {
    if ( gdjs.Level_32PrototypeCode.GDGrassJumpThru2Objects1[i].getVariableString(gdjs.Level_32PrototypeCode.GDGrassJumpThru2Objects1[i].getVariables().getFromIndex(0)) == "Right" ) {
        gdjs.Level_32PrototypeCode.condition0IsTrue_0.val = true;
        gdjs.Level_32PrototypeCode.GDGrassJumpThru2Objects1[k] = gdjs.Level_32PrototypeCode.GDGrassJumpThru2Objects1[i];
        ++k;
    }
}
gdjs.Level_32PrototypeCode.GDGrassJumpThru2Objects1.length = k;}if (gdjs.Level_32PrototypeCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_32PrototypeCode.GDGrassJumpThru2Objects1 */
{for(var i = 0, len = gdjs.Level_32PrototypeCode.GDGrassJumpThru2Objects1.length ;i < len;++i) {
    gdjs.Level_32PrototypeCode.GDGrassJumpThru2Objects1[i].addForce(80, 0, 0);
}
}}

}


};gdjs.Level_32PrototypeCode.eventsList4 = function(runtimeScene) {

{


gdjs.Level_32PrototypeCode.eventsList2(runtimeScene);
}


{


gdjs.Level_32PrototypeCode.eventsList3(runtimeScene);
}


};gdjs.Level_32PrototypeCode.mapOfGDgdjs_46Level_9532PrototypeCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_32PrototypeCode.GDPlayerObjects1});gdjs.Level_32PrototypeCode.mapOfGDgdjs_46Level_9532PrototypeCode_46GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.Level_32PrototypeCode.GDCoinObjects1});gdjs.Level_32PrototypeCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.Level_32PrototypeCode.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_32PrototypeCode.GDPlayerObjects1);

gdjs.Level_32PrototypeCode.condition0IsTrue_0.val = false;
{
gdjs.Level_32PrototypeCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_32PrototypeCode.mapOfGDgdjs_46Level_9532PrototypeCode_46GDPlayerObjects1Objects, gdjs.Level_32PrototypeCode.mapOfGDgdjs_46Level_9532PrototypeCode_46GDCoinObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level_32PrototypeCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_32PrototypeCode.GDCoinObjects1 */
{for(var i = 0, len = gdjs.Level_32PrototypeCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.Level_32PrototypeCode.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Level_32PrototypeCode.mapOfGDgdjs_46Level_9532PrototypeCode_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Level_32PrototypeCode.GDPlayerObjects2});gdjs.Level_32PrototypeCode.mapOfGDgdjs_46Level_9532PrototypeCode_46GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.Level_32PrototypeCode.GDEnemyObjects2});gdjs.Level_32PrototypeCode.mapOfGDgdjs_46Level_9532PrototypeCode_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Level_32PrototypeCode.GDPlayerObjects2});gdjs.Level_32PrototypeCode.mapOfGDgdjs_46Level_9532PrototypeCode_46GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.Level_32PrototypeCode.GDEnemyObjects2});gdjs.Level_32PrototypeCode.mapOfGDgdjs_46Level_9532PrototypeCode_46GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.Level_32PrototypeCode.GDEnemyObjects2});gdjs.Level_32PrototypeCode.mapOfGDgdjs_46Level_9532PrototypeCode_46GDMoveRightObjects2Objects = Hashtable.newFrom({"MoveRight": gdjs.Level_32PrototypeCode.GDMoveRightObjects2});gdjs.Level_32PrototypeCode.mapOfGDgdjs_46Level_9532PrototypeCode_46GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.Level_32PrototypeCode.GDEnemyObjects2});gdjs.Level_32PrototypeCode.mapOfGDgdjs_46Level_9532PrototypeCode_46GDMoveLeftObjects2Objects = Hashtable.newFrom({"MoveLeft": gdjs.Level_32PrototypeCode.GDMoveLeftObjects2});gdjs.Level_32PrototypeCode.eventsList6 = function(runtimeScene) {

{


gdjs.Level_32PrototypeCode.condition0IsTrue_0.val = false;
{
gdjs.Level_32PrototypeCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level_32PrototypeCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MoveLeft"), gdjs.Level_32PrototypeCode.GDMoveLeftObjects2);
gdjs.copyArray(runtimeScene.getObjects("MoveRight"), gdjs.Level_32PrototypeCode.GDMoveRightObjects2);
{for(var i = 0, len = gdjs.Level_32PrototypeCode.GDMoveLeftObjects2.length ;i < len;++i) {
    gdjs.Level_32PrototypeCode.GDMoveLeftObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Level_32PrototypeCode.GDMoveRightObjects2.length ;i < len;++i) {
    gdjs.Level_32PrototypeCode.GDMoveRightObjects2[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Level_32PrototypeCode.GDEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_32PrototypeCode.GDPlayerObjects2);

gdjs.Level_32PrototypeCode.condition0IsTrue_0.val = false;
gdjs.Level_32PrototypeCode.condition1IsTrue_0.val = false;
gdjs.Level_32PrototypeCode.condition2IsTrue_0.val = false;
{
gdjs.Level_32PrototypeCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_32PrototypeCode.mapOfGDgdjs_46Level_9532PrototypeCode_46GDPlayerObjects2Objects, gdjs.Level_32PrototypeCode.mapOfGDgdjs_46Level_9532PrototypeCode_46GDEnemyObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Level_32PrototypeCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level_32PrototypeCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level_32PrototypeCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Level_32PrototypeCode.condition1IsTrue_0.val = true;
        gdjs.Level_32PrototypeCode.GDPlayerObjects2[k] = gdjs.Level_32PrototypeCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_32PrototypeCode.GDPlayerObjects2.length = k;}if ( gdjs.Level_32PrototypeCode.condition1IsTrue_0.val ) {
{
gdjs.Level_32PrototypeCode.condition2IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1);
}}
}
if (gdjs.Level_32PrototypeCode.condition2IsTrue_0.val) {
/* Reuse gdjs.Level_32PrototypeCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level_32PrototypeCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_32PrototypeCode.GDPlayerObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Level_32PrototypeCode.GDEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_32PrototypeCode.GDPlayerObjects2);

gdjs.Level_32PrototypeCode.condition0IsTrue_0.val = false;
gdjs.Level_32PrototypeCode.condition1IsTrue_0.val = false;
{
gdjs.Level_32PrototypeCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_32PrototypeCode.mapOfGDgdjs_46Level_9532PrototypeCode_46GDPlayerObjects2Objects, gdjs.Level_32PrototypeCode.mapOfGDgdjs_46Level_9532PrototypeCode_46GDEnemyObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Level_32PrototypeCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level_32PrototypeCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level_32PrototypeCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Level_32PrototypeCode.condition1IsTrue_0.val = true;
        gdjs.Level_32PrototypeCode.GDPlayerObjects2[k] = gdjs.Level_32PrototypeCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_32PrototypeCode.GDPlayerObjects2.length = k;}}
if (gdjs.Level_32PrototypeCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Level_32PrototypeCode.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.Level_32PrototypeCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Level_32PrototypeCode.GDEnemyObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Level_32PrototypeCode.GDEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("MoveRight"), gdjs.Level_32PrototypeCode.GDMoveRightObjects2);

gdjs.Level_32PrototypeCode.condition0IsTrue_0.val = false;
{
gdjs.Level_32PrototypeCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_32PrototypeCode.mapOfGDgdjs_46Level_9532PrototypeCode_46GDEnemyObjects2Objects, gdjs.Level_32PrototypeCode.mapOfGDgdjs_46Level_9532PrototypeCode_46GDMoveRightObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level_32PrototypeCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_32PrototypeCode.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.Level_32PrototypeCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Level_32PrototypeCode.GDEnemyObjects2[i].flipX(true);
}
}{for(var i = 0, len = gdjs.Level_32PrototypeCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Level_32PrototypeCode.GDEnemyObjects2[i].returnVariable(gdjs.Level_32PrototypeCode.GDEnemyObjects2[i].getVariables().getFromIndex(0)).setString("Right");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Level_32PrototypeCode.GDEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("MoveLeft"), gdjs.Level_32PrototypeCode.GDMoveLeftObjects2);

gdjs.Level_32PrototypeCode.condition0IsTrue_0.val = false;
{
gdjs.Level_32PrototypeCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_32PrototypeCode.mapOfGDgdjs_46Level_9532PrototypeCode_46GDEnemyObjects2Objects, gdjs.Level_32PrototypeCode.mapOfGDgdjs_46Level_9532PrototypeCode_46GDMoveLeftObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level_32PrototypeCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_32PrototypeCode.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.Level_32PrototypeCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Level_32PrototypeCode.GDEnemyObjects2[i].flipX(false);
}
}{for(var i = 0, len = gdjs.Level_32PrototypeCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Level_32PrototypeCode.GDEnemyObjects2[i].returnVariable(gdjs.Level_32PrototypeCode.GDEnemyObjects2[i].getVariables().getFromIndex(0)).setString("Left");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Level_32PrototypeCode.GDEnemyObjects2);

gdjs.Level_32PrototypeCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_32PrototypeCode.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs.Level_32PrototypeCode.GDEnemyObjects2[i].getVariableString(gdjs.Level_32PrototypeCode.GDEnemyObjects2[i].getVariables().getFromIndex(0)) == "Left" ) {
        gdjs.Level_32PrototypeCode.condition0IsTrue_0.val = true;
        gdjs.Level_32PrototypeCode.GDEnemyObjects2[k] = gdjs.Level_32PrototypeCode.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs.Level_32PrototypeCode.GDEnemyObjects2.length = k;}if (gdjs.Level_32PrototypeCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_32PrototypeCode.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.Level_32PrototypeCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Level_32PrototypeCode.GDEnemyObjects2[i].addForce(-(100), 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Level_32PrototypeCode.GDEnemyObjects1);

gdjs.Level_32PrototypeCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_32PrototypeCode.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.Level_32PrototypeCode.GDEnemyObjects1[i].getVariableString(gdjs.Level_32PrototypeCode.GDEnemyObjects1[i].getVariables().getFromIndex(0)) == "Right" ) {
        gdjs.Level_32PrototypeCode.condition0IsTrue_0.val = true;
        gdjs.Level_32PrototypeCode.GDEnemyObjects1[k] = gdjs.Level_32PrototypeCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.Level_32PrototypeCode.GDEnemyObjects1.length = k;}if (gdjs.Level_32PrototypeCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_32PrototypeCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.Level_32PrototypeCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Level_32PrototypeCode.GDEnemyObjects1[i].addForce(100, 0, 0);
}
}}

}


};gdjs.Level_32PrototypeCode.mapOfGDgdjs_46Level_9532PrototypeCode_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Level_32PrototypeCode.GDPlayerObjects2});gdjs.Level_32PrototypeCode.mapOfGDgdjs_46Level_9532PrototypeCode_46GDDoomObjects2Objects = Hashtable.newFrom({"Doom": gdjs.Level_32PrototypeCode.GDDoomObjects2});gdjs.Level_32PrototypeCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Doom"), gdjs.Level_32PrototypeCode.GDDoomObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_32PrototypeCode.GDPlayerObjects2);

gdjs.Level_32PrototypeCode.condition0IsTrue_0.val = false;
gdjs.Level_32PrototypeCode.condition1IsTrue_0.val = false;
{
gdjs.Level_32PrototypeCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_32PrototypeCode.mapOfGDgdjs_46Level_9532PrototypeCode_46GDPlayerObjects2Objects, gdjs.Level_32PrototypeCode.mapOfGDgdjs_46Level_9532PrototypeCode_46GDDoomObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Level_32PrototypeCode.condition0IsTrue_0.val ) {
{
gdjs.Level_32PrototypeCode.condition1IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1);
}}
if (gdjs.Level_32PrototypeCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Level_32PrototypeCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level_32PrototypeCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_32PrototypeCode.GDPlayerObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


{


gdjs.Level_32PrototypeCode.condition0IsTrue_0.val = false;
{
gdjs.Level_32PrototypeCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level_32PrototypeCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Doom"), gdjs.Level_32PrototypeCode.GDDoomObjects1);
{for(var i = 0, len = gdjs.Level_32PrototypeCode.GDDoomObjects1.length ;i < len;++i) {
    gdjs.Level_32PrototypeCode.GDDoomObjects1[i].hide();
}
}}

}


};gdjs.Level_32PrototypeCode.mapOfGDgdjs_46Level_9532PrototypeCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_32PrototypeCode.GDPlayerObjects1});gdjs.Level_32PrototypeCode.mapOfGDgdjs_46Level_9532PrototypeCode_46GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.Level_32PrototypeCode.GDDoorObjects1});gdjs.Level_32PrototypeCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Level_32PrototypeCode.GDDoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_32PrototypeCode.GDPlayerObjects1);

gdjs.Level_32PrototypeCode.condition0IsTrue_0.val = false;
{
gdjs.Level_32PrototypeCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_32PrototypeCode.mapOfGDgdjs_46Level_9532PrototypeCode_46GDPlayerObjects1Objects, gdjs.Level_32PrototypeCode.mapOfGDgdjs_46Level_9532PrototypeCode_46GDDoorObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level_32PrototypeCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", true);
}}

}


};gdjs.Level_32PrototypeCode.mapOfGDgdjs_46Level_9532PrototypeCode_46GDInvincibilityObjects1Objects = Hashtable.newFrom({"Invincibility": gdjs.Level_32PrototypeCode.GDInvincibilityObjects1});gdjs.Level_32PrototypeCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Invincibility"), gdjs.Level_32PrototypeCode.GDInvincibilityObjects1);

gdjs.Level_32PrototypeCode.condition0IsTrue_0.val = false;
gdjs.Level_32PrototypeCode.condition1IsTrue_0.val = false;
{
gdjs.Level_32PrototypeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_32PrototypeCode.mapOfGDgdjs_46Level_9532PrototypeCode_46GDInvincibilityObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Level_32PrototypeCode.condition0IsTrue_0.val ) {
{
gdjs.Level_32PrototypeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Level_32PrototypeCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Level_32PrototypeCode.GDInvincibilityObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).mul(-(1));
}{for(var i = 0, len = gdjs.Level_32PrototypeCode.GDInvincibilityObjects1.length ;i < len;++i) {
    gdjs.Level_32PrototypeCode.GDInvincibilityObjects1[i].setString("God Mode: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


};gdjs.Level_32PrototypeCode.eventsList10 = function(runtimeScene) {

{


gdjs.Level_32PrototypeCode.eventsList0(runtimeScene);
}


{


gdjs.Level_32PrototypeCode.eventsList1(runtimeScene);
}


{


gdjs.Level_32PrototypeCode.eventsList4(runtimeScene);
}


{


gdjs.Level_32PrototypeCode.eventsList5(runtimeScene);
}


{


gdjs.Level_32PrototypeCode.eventsList6(runtimeScene);
}


{


gdjs.Level_32PrototypeCode.eventsList7(runtimeScene);
}


{


gdjs.Level_32PrototypeCode.eventsList8(runtimeScene);
}


{


gdjs.Level_32PrototypeCode.eventsList9(runtimeScene);
}


};

gdjs.Level_32PrototypeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_32PrototypeCode.GDPlayerObjects1.length = 0;
gdjs.Level_32PrototypeCode.GDPlayerObjects2.length = 0;
gdjs.Level_32PrototypeCode.GDPlayerObjects3.length = 0;
gdjs.Level_32PrototypeCode.GDPlayerObjects4.length = 0;
gdjs.Level_32PrototypeCode.GDGrassObjects1.length = 0;
gdjs.Level_32PrototypeCode.GDGrassObjects2.length = 0;
gdjs.Level_32PrototypeCode.GDGrassObjects3.length = 0;
gdjs.Level_32PrototypeCode.GDGrassObjects4.length = 0;
gdjs.Level_32PrototypeCode.GDGrassSubObjects1.length = 0;
gdjs.Level_32PrototypeCode.GDGrassSubObjects2.length = 0;
gdjs.Level_32PrototypeCode.GDGrassSubObjects3.length = 0;
gdjs.Level_32PrototypeCode.GDGrassSubObjects4.length = 0;
gdjs.Level_32PrototypeCode.GDGrassJumpThruObjects1.length = 0;
gdjs.Level_32PrototypeCode.GDGrassJumpThruObjects2.length = 0;
gdjs.Level_32PrototypeCode.GDGrassJumpThruObjects3.length = 0;
gdjs.Level_32PrototypeCode.GDGrassJumpThruObjects4.length = 0;
gdjs.Level_32PrototypeCode.GDGrassJumpThru2Objects1.length = 0;
gdjs.Level_32PrototypeCode.GDGrassJumpThru2Objects2.length = 0;
gdjs.Level_32PrototypeCode.GDGrassJumpThru2Objects3.length = 0;
gdjs.Level_32PrototypeCode.GDGrassJumpThru2Objects4.length = 0;
gdjs.Level_32PrototypeCode.GDBackgroundObjects1.length = 0;
gdjs.Level_32PrototypeCode.GDBackgroundObjects2.length = 0;
gdjs.Level_32PrototypeCode.GDBackgroundObjects3.length = 0;
gdjs.Level_32PrototypeCode.GDBackgroundObjects4.length = 0;
gdjs.Level_32PrototypeCode.GDCoinObjects1.length = 0;
gdjs.Level_32PrototypeCode.GDCoinObjects2.length = 0;
gdjs.Level_32PrototypeCode.GDCoinObjects3.length = 0;
gdjs.Level_32PrototypeCode.GDCoinObjects4.length = 0;
gdjs.Level_32PrototypeCode.GDMoveLeftObjects1.length = 0;
gdjs.Level_32PrototypeCode.GDMoveLeftObjects2.length = 0;
gdjs.Level_32PrototypeCode.GDMoveLeftObjects3.length = 0;
gdjs.Level_32PrototypeCode.GDMoveLeftObjects4.length = 0;
gdjs.Level_32PrototypeCode.GDMoveRightObjects1.length = 0;
gdjs.Level_32PrototypeCode.GDMoveRightObjects2.length = 0;
gdjs.Level_32PrototypeCode.GDMoveRightObjects3.length = 0;
gdjs.Level_32PrototypeCode.GDMoveRightObjects4.length = 0;
gdjs.Level_32PrototypeCode.GDEnemyObjects1.length = 0;
gdjs.Level_32PrototypeCode.GDEnemyObjects2.length = 0;
gdjs.Level_32PrototypeCode.GDEnemyObjects3.length = 0;
gdjs.Level_32PrototypeCode.GDEnemyObjects4.length = 0;
gdjs.Level_32PrototypeCode.GDDoomObjects1.length = 0;
gdjs.Level_32PrototypeCode.GDDoomObjects2.length = 0;
gdjs.Level_32PrototypeCode.GDDoomObjects3.length = 0;
gdjs.Level_32PrototypeCode.GDDoomObjects4.length = 0;
gdjs.Level_32PrototypeCode.GDDoorObjects1.length = 0;
gdjs.Level_32PrototypeCode.GDDoorObjects2.length = 0;
gdjs.Level_32PrototypeCode.GDDoorObjects3.length = 0;
gdjs.Level_32PrototypeCode.GDDoorObjects4.length = 0;
gdjs.Level_32PrototypeCode.GDInvincibilityObjects1.length = 0;
gdjs.Level_32PrototypeCode.GDInvincibilityObjects2.length = 0;
gdjs.Level_32PrototypeCode.GDInvincibilityObjects3.length = 0;
gdjs.Level_32PrototypeCode.GDInvincibilityObjects4.length = 0;

gdjs.Level_32PrototypeCode.eventsList10(runtimeScene);
return;

}

gdjs['Level_32PrototypeCode'] = gdjs.Level_32PrototypeCode;
