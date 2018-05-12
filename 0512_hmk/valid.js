;(function(win){
    var el;
    var arr;
    win.valid = function(option){
        el = document.getElementById(option.el) //获取form表单
        for(var item in option.rules){ //遍历获取input对象
            var reg = option.rules[item].reg,
            hint = option.rules[item].hint,
            value = el[item].value,
            messageTag = option.rules[item].messageTag;
            if(reg.test(value)==false){
                var tag = document.getElementById(messageTag)
                if(tag){
                    tag.innerHTML = hint
                    tag.style.color = 'red'
                    tag.style.fontSize = '14px'
                    return
                } 
            }else{
                var tag = document.getElementById(messageTag)
                tag.innerHTML = "";
            }
        }
    }
})(window);
