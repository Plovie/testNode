"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkSameKeys(obj, arr) {
    console.log(checkKeysInObj(obj, arr), checkKeysInArr(obj, arr));
    return checkKeysInObj(obj, arr) && checkKeysInArr(obj, arr);
}
exports.checkSameKeys = checkSameKeys;
function checkKeysInObj(obj, arr) {
    let objKeys = Object.keys(obj);
    let objKeysString = JSON.stringify(objKeys);
    function keysInObj(elem) {
        return objKeysString.indexOf(elem) > 0;
    }
    return arr.every(keysInObj);
}
function checkKeysInArr(obj, arr) {
    let objKeys = Object.keys(obj);
    let arrKeysString = JSON.stringify(arr);
    function keysInArr(elem) {
        return arrKeysString.indexOf(elem) > 0;
    }
    return objKeys.every(keysInArr);
}
exports.checkKeysInArr = checkKeysInArr;
//# sourceMappingURL=helper.js.map