//深度拷贝方法
var cloneObj = function(obj) {
    var str, newobj = obj.constructor === Array ? [] : {};
    if (typeof obj !== 'object') {
        return;
    } else if (window.JSON) {
        //字符串化对象
        str = JSON.stringify(obj),

        //还原成对象
        newobj = JSON.parse(str);
    } else {
        for (var i in obj) {
            newobj[i] = typeof obj[i] === 'object' ?
                        cloneObj(obj[i]) : obj[i];
        }
    }
    return newobj;
};

//深度extend方法
function extend(target, source) {
    target = target || {};

    for (var key in source) {

        if (!source.hasOwnProperty(key)) {
            continue;
        }

        if (typeof source[key] === "object") {
            target[key] = target[key] || {};
            arguments.callee(target[key], source[key])
        } else {
            target[key] = source[key];
        }
    }

    return target;
}