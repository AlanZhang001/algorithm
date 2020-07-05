# 记录一些常见算法及自己遇到过的算法题

## 常见算法

- 大整数相加[bigNumSum.js](bigNumSum.js)
- 常见排序[sort.js](sort.js)
- 深度拷贝，深度extend方法[deepCopyExtend.js](deepCopyExtend.js)

## 我见过的常见题目

- 数组A判断是否包含数组B,数组中可能存在重复数字，数组A:[2,3,46,75,23],数组B:[3,46,23],则数组A包含数组B；数组A:[2,3,46,75,23],数组B:[3,3,46,23],则数组A不包含数组B。[arrayContain.js](arrayContain.js)

- 一个整数的数组如下，数组中有没有这样的数，比他前面元素都大 ，比他后面元素都小的数[searchArray.js](searchArray.js)
	- [56,3,34,87,55,90,100,98,120 ] 比如这个数组，90 应该是符合要求的，给你这个数组，给出符合要求的数的下标
	- 时间复杂度和空间复杂度最大为o（n）
	- 思路：
		- 1.找到中间元素；
		- 2.如果左边有比它大的数，则它右边组成新的数组，重复1；
		- 3.如果右边有比它小的数，则它左边组成新的数组，重复1；

- 输入：n (1 < n < 10^9) 
从 1 开始到 n，转成字符串，然后拼接在一起
输出：这个字符串的长度
出处：https://www.v2ex.com/t/448561  [sumLength.js](./sumLength.js)

## 一些要搞明白的事情
- [尾递归调用优化](http://www.ruanyifeng.com/blog/2015/04/tail-call.html)
