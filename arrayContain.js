var AArray = [2,3,46,75,23],
    BArray = [3,3,46,23];

/*----------------------方法一------------------------------*/
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

/*----------------------方法二------------------------------*/
// 判断A是否包含B
function compare(A, B) {
    var indexA = 0,
        indexB = 0;

    for (var i = 0, length = B.length; i < length;) {
        if (B[indexB] === A[indexA]) {
            indexA++;
            indexB++;
            i++;
        } else {
            indexA++;
        }
        if (indexA > A.length) {
            break;
        }
    }

    if (indexB === B.length) {
        console.log(true);
    } else {
        console.log(false);
    }
}

compare([2, 3, 4, 5, 6, 8, 9], [3, 4, 5, 6, 7, 10]); //true
compare([2, 3, 4, 5, 6, 8, 9], [3, 4, 5, 6]); //false