/*
输入：n (1 < n < 10^9)

从 1 开始到 n，转成字符串，然后拼接在一起

输出：这个字符串的长度

出处：https://www.v2ex.com/t/448561
 */

/**
 * [sumOfLenght 活动某个数位上所有数字上长度和，比如1-99，全部排列在一起，长度是9*1 + 90*2]
 * @param  {[type]} length [description]
 * @return {[type]}        [description]
 */
function sumOfLenght(length) {
    var max = Math.pow(10, length) - 1;
    var min = Math.pow(10, length - 1);
    return length * (max - min + 1);
}

function getSum(n) {
    var sum = 0;
    var length = (n + '').length;
    for (var i = 1; i <= length - 1; i++) {
        sum += sumOfLenght(i);
    }

    sum += (n - Math.pow(10, length - 1) + 1) * length;

    return sum;

}