; (function (win) {
    win._ = {}
    /*
        调用：_.toArray(Obejct)
        描述：将伪数组转化为数组
        参数：(Object)obj 伪数组
        返回：(Array) 数组
    */
    _.toArray = function (obj) {
        var arr = [];
        for (var i = 0; i < obj.length; i++) {
            arr.push(obj[i])
        }
        return arr;
    }

    /*
        调用：_.typeOf(Object)
        描述：查询对象的数据类型
        参数：obj(Object)
        返回: 数据类型描述
    */
    _.typeOf = function (obj) {
        if (obj != obj) {
            return 'NaN'
        }
        switch (obj) {
            case null:
                return 'null';
                break
            case undefined:
                return undefined
                break
        }
        switch (true) {
            case obj instanceof Array:
                return 'Array';
                break
            case obj instanceof Function:
                return 'Function';
                break
            case obj instanceof RegExp:
                return 'RegExp';
                break
            case obj instanceof Object:
                return 'Object';
                break
        }
        return typeof obj
    }

    /*
        调用：_.Reduce(Array,var)
        描述：计算数组内内元素相加或者相减
        参数：obj(Array)
        返回：数组内元素依次相加（减）后的最终值
    */
    _.addArr = function (obj, m) {
        var add = m;
        for (var i = 0; i < obj.length; i++) {
            add += (m+obj[i]);
        }
        return add;
    }
    _.substractArr = function (obj) {
        var sub = '';
        for (var i = 0; i < obj.length; i++) {
            sub -= obj[i];
        }
        return sub;
    }

    /*
         调用：_.judgeArrMem(Array,statements)
         描述:判断数组内成员是否满足某些条件
         参数：obj(Array)
         返回：true or false
    */
    _.judgeArrMem = function (obj, rules) {
        for (var i = 0; i < obj.length; i++) {
            if (rules) {
                return true;
            } else {
                return false;
            }
        }
    }
    _.judgeArr = function (obj, rules) {
        for (var i = 0; i > obj.length; i++) {
            if (!rules) {
                return false;
            } else {
                return true;
            }
        }
    }
})(window || {});