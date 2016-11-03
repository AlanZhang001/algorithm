var AArray = [2,3,46,75,23],
    BArray = [3,3,46,23];

function contains (A,B) {
    var AStart = 0;
    for (var i = 0,length = B.length;i < length;i++) {

        var index = search(A,B[i],AStart);
        if(index === -1) {
            return false;
        }else {
            AStart = index + 1;
        }

    }

    return true;

    /**
     * [seach description]
     * @param  {Array} array [查找的数组]
     * @param  {number} item  [要查找的数字]
     * @param  {number} start [从数组的那一项开始查找]
     * @return {[type]}       [description]
     */
    function search (array,item,start) {
        for(var i = start,length = array.length;i < length;i++) {
            if(item === array[i]) {
                return i;
            }
        }
        return -1;
    }
}

console.log("case:", AArray + ["不包含","包含"][~~contains(AArray,BArray)] + BArray);