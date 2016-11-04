 /**
 * [sumBigIntStrings 相加2个大整数]
 * @param  {[type]} a [description]
 * @param  {[type]} b [description]
 * @return {[type]}   [description]
 */
function sumBigIntStrings1 (a,b) {
    var res = "",
        c   = 0;

    a = (a +"").split(""),
    b = (b +"").split("");

    while (a.length || b.length || c) {
        c = ~~c + ~~a.pop() + ~~b.pop();
        res = c%10 + res;

        c = c > 9;
    }

    return res;
}

/**
 * [bigIntSum 相加2个大整数]
 * @param  {[type]} operator1 [description]
 * @param  {[type]} operator2 [description]
 * @return {[type]}           [description]
 */
function sumBigIntStrings2 (operator1,operator2) {

    if(/[^0-9]/gi.test(operator1 +""+operator2))  {
        return;
    }

    var shortOne = operator1 + "",
        longOne  = operator2 + "";

    // 确定长度长的和短的
    var tmp = "";
    if (shortOne.length > longOne.length) {
        tmp = shortOne;
        shortOne = longOne;
        longOne = tmp;
    }

    // 在数组上从最后一个位相加值，进位则继续向前加
    Array.prototype.sumKey = function (position,value) {

        var res,
            left;

        res = ~~this[position] + ~~value;

        this[position] = res%10;

        if(res > 9) {
            return arguments.callee.call(this,position - 1,Math.floor(res/10));
        }else{
            return this;
        }

    };

    var shortArr = shortOne.split(""),
        longArr  = longOne.split("");
            longArr.unshift("0");

    var longLength  =  longArr.length,
        shortLength = shortArr.length;
    for (var leng1 = shortLength - 1;leng1 >= 0;leng1-- ) {

        longArr.sumKey(longLength - (shortLength - leng1),shortArr[leng1]);

    }

    return longArr.join("").replace(/^0*/,"");
}

var operator1 =       542341134,
operator2 = 649423934523456;

var res1 = sumBigIntStrings1(operator1,operator2);
var res2 = sumBigIntStrings2(operator1,operator2);
console.log("operator1: " + operator1 +"  operator2:" + operator2);
console.log("方法1结果："+ res1);
console.log("方法2结果："+ res2);