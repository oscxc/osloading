
// osloading.js
// author：七八个星天怪
// LICENSE：MIT

'use strict';
(function (f) {
    if (typeof module === 'object' && typeof module.exports === 'object'){
        module.exports = f
    }
    else{
        window.osloading = f
    }
})(function (mycfg) {
    function create(t) {
        return document.createElement(t);
    }
    function extend(t,o) {
        for(var n in o){
            t[n]=o[n] ;
        }
    }
    function append(dom,arr) {
        if(type(arr)=='Array'){
            for(var i=0;i<arr.length;i++){
                dom.appendChild(arr[i]);
            }
        }
        else{
            dom.appendChild(arr);
        }
    }
    function type(v) {
        return Object.prototype.toString.apply(v).slice(8,-1);
    }
    function each(v,f) {
        var t = type(v);
        if (t=='Array'||t=='NodeList') {
            for (var i=0;i<v.length;i++) {
                f(i,v[i]);
            }
        }
        else if(t=='Object'){
            for (var key in v) {
                f(key,v[key]);
            }
        }
        else if(t=='Number'){
            for (var i=0;i<v;i++) {
                f(i,v);
            }
        }
        else{
            throw new TypeError('该对象不支持遍历');
        }
    }
    function css(dom,obj) {
        each(obj,function (k,v) {
            dom.style[k] = v;
        });
    }
    function getRGB(s) {
        if(s.length==4){
            return [parseInt('0x'+s.charAt(1)+s.charAt(1),16),parseInt('0x'+s.charAt(2)+s.charAt(2),16),parseInt('0x'+s.charAt(3)+s.charAt(3),16)];
        }
        else if(s.length==7){
            return [parseInt('0x'+s.charAt(1)+s.charAt(2),16),parseInt('0x'+s.charAt(3)+s.charAt(4),16),parseInt('0x'+s.charAt(5)+s.charAt(6),16)];
        }
    }
    function getColor(s) {
        var RGB = getRGB(s);
        var A = 0.2;
        return 'rgba('+RGB[0]+', '+RGB[1]+', '+RGB[2]+', '+A+')';
    }
    var style = null;
    var head = null;
    function createLoading5(s) {
        style = document.createElement('style');
        head = document.getElementsByTagName('head')[0];
        var RGB = getRGB(s);
        var keyframes = '@keyframes CLoading5 {' +
            '0%,100% {box-shadow:0 -34px 0 0 rgba({{R}}, {{G}}, {{B}}, 1),24px -24px 0 0 rgba({{R}}, {{G}}, {{B}}, 0.1),34px 0 0 0 rgba({{R}}, {{G}}, {{B}}, 0.1),' +
            '24px 24px 0 0 rgba({{R}}, {{G}}, {{B}}, 0.1),0 34px 0 0 rgba({{R}}, {{G}}, {{B}}, 0.1),-24px 24px 0 0 rgba({{R}}, {{G}}, {{B}}, 0.1), ' +
            '-34px 0 0 0 rgba({{R}}, {{G}}, {{B}}, 0.4),-24px -24px 0 0 rgba({{R}}, {{G}}, {{B}}, 0.7);}12.5% {box-shadow:0 -34px 0 0 rgba({{R}}, {{G}}, {{B}}, 0.7),' +
            '24px -24px 0 0 rgba({{R}}, {{G}}, {{B}}, 1),34px 0 0 0 rgba({{R}}, {{G}}, {{B}}, 0.1),24px 24px 0 0 rgba({{R}}, {{G}}, {{B}}, 0.1),' +
            '0 34px 0 0 rgba({{R}}, {{G}}, {{B}}, 0.1),-24px 24px 0 0 rgba({{R}}, {{G}}, {{B}}, 0.1),-34px 0 0 0 rgba({{R}}, {{G}}, {{B}}, 0.1), ' +
            '-24px -24px 0 0 rgba({{R}}, {{G}}, {{B}}, 0.4);}25% {box-shadow:0 -34px 0 0 rgba({{R}}, {{G}}, {{B}}, 0.4),24px -24px 0 0 rgba({{R}}, {{G}}, {{B}}, 0.7),' +
            '34px 0 0 0 rgba({{R}}, {{G}}, {{B}}, 1),24px 24px 0 0 rgba({{R}}, {{G}}, {{B}}, 0.1),0 34px 0 0 rgba({{R}}, {{G}}, {{B}}, 0.1),' +
            '-24px 24px 0 0 rgba({{R}}, {{G}}, {{B}}, 0.1),-34px 0 0 0 rgba({{R}}, {{G}}, {{B}}, 0.1),-24px -24px 0 0 rgba({{R}}, {{G}}, {{B}}, 0.1);}37.5% {' +
            'box-shadow:0 -34px 0 0 rgba({{R}}, {{G}}, {{B}}, 0.1),24px -24px 0 0 rgba({{R}}, {{G}}, {{B}}, 0.4),34px 0 0 0 rgba({{R}}, {{G}}, {{B}}, 0.7),' +
            '24px 24px 0 0 rgba({{R}}, {{G}}, {{B}}, 1),0 34px 0 0 rgba({{R}}, {{G}}, {{B}}, 0.1),-24px 24px 0 0 rgba({{R}}, {{G}}, {{B}}, 0.1),' +
            '-34px 0 0 0 rgba({{R}}, {{G}}, {{B}}, 0.1),-24px -24px 0 0 rgba({{R}}, {{G}}, {{B}}, 0.1);}50% {box-shadow:0 -34px 0 0 rgba({{R}}, {{G}}, {{B}}, 0.1),' +
            '24px -24px 0 0 rgba({{R}}, {{G}}, {{B}}, 0.1),34px 0 0 0 rgba({{R}}, {{G}}, {{B}}, 0.4),24px 24px 0 0 rgba({{R}}, {{G}}, {{B}}, 0.7),' +
            '0 34px 0 0 rgba({{R}}, {{G}}, {{B}}, 1),-24px 24px 0 0 rgba({{R}}, {{G}}, {{B}}, 0.1),-34px 0 0 0 rgba({{R}}, {{G}}, {{B}}, 0.1), ' +
            '-24px -24px 0 0 rgba({{R}}, {{G}}, {{B}}, 0.1);}62.5% {box-shadow:0 -34px 0 0 rgba({{R}}, {{G}}, {{B}}, 0.1),24px -24px 0 0 rgba({{R}}, {{G}}, {{B}}, 0.1),' +
            '34px 0 0 0 rgba({{R}}, {{G}},{{B}}, 0.1),24px 24px 0 0 rgba({{R}}, {{G}}, {{B}}, 0.4),0 34px 0 0 rgba({{R}}, {{G}}, {{B}}, 0.7), ' +
            '-24px 24px 0 0 rgba({{R}}, {{G}}, {{B}}, 1),-34px 0 0 0 rgba({{R}}, {{G}}, {{B}}, 0.1),-24px -24px 0 0 rgba({{R}}, {{G}}, {{B}}, 0.1);}' +
            '75% {box-shadow:0 -34px 0 0 rgba({{R}}, {{G}}, {{B}}, 0.1),24px -24px 0 0 rgba({{R}}, {{G}}, {{B}}, 0.1),34px 0 0 0 rgba({{R}}, {{G}}, {{B}}, 0.1),' +
            '24px 24px 0 0 rgba({{R}}, {{G}}, {{B}}, 0.1),0 34px 0 0 rgba({{R}}, {{G}}, {{B}}, 0.4),-24px 24px 0 0 rgba({{R}}, {{G}}, {{B}}, 0.7), ' +
            '-34px 0 0 0 rgba({{R}}, {{G}}, {{B}}, 1),-24px -24px 0 0 rgba({{R}}, {{G}}, {{B}}, 0.1);}87.5% {box-shadow:0 -34px 0 0 rgba({{R}}, {{G}}, {{B}}, 0.1),' +
            '24px -24px 0 0 rgba({{R}}, {{G}}, {{B}}, 0.1),34px 0 0 0 rgba({{R}}, {{G}}, {{B}}, 0.1),24px 24px 0 0 rgba({{R}}, {{G}}, {{B}}, 0.1),' +
            '0 34px 0 0 rgba({{R}}, {{G}}, {{B}}, 0.1),-24px 24px 0 0 rgba({{R}}, {{G}}, {{B}}, 0.4),-34px 0 0 0 rgba({{R}}, {{G}}, {{B}}, 0.7), ' +
            '-24px -24px 0 0 rgba({{R}}, {{G}}, {{B}}, 1);}}';
        keyframes = keyframes.replace(/{{R}}/g,RGB[0]).replace(/{{G}}/g,RGB[1]).replace(/{{B}}/g,RGB[2]);
        style.innerHTML = keyframes;
        head.appendChild(style);
    }
    function createLoading6(s) {
        style = document.createElement('style');
        head = document.getElementsByTagName('head')[0];
        var keyframes = '@keyframes CLoading6 {0%,100% {box-shadow:0 -34px 0 3px {{color}},24px -24px 0 1px {{color}},34px 0 0 -6px {{color}},24px 24px 0 -6px {{color}},' +
            '0 34px 0 -6px {{color}},-24px 24px 0 -6px {{color}},-34px 0 0 -6px {{color}},-24px -24px 0 1px {{color}};}12.5% {box-shadow:0 -34px 0 1px {{color}},' +
            '24px -24px 0 3px {{color}},34px 0 0 1px {{color}},24px 24px 0 -6px {{color}},0 34px 0 -6px {{color}},-24px 24px 0 -6px {{color}},-34px 0 0 -6px {{color}}, ' +
            '-24px -24px 0 -6px {{color}};}25% {box-shadow:0 -34px 0 -6px {{color}},24px -24px 0 1px {{color}},34px 0 0 3px {{color}},24px 24px 0 1px {{color}},' +
            '0 34px 0 -6px {{color}}, -24px 24px 0 -6px {{color}}, -34px 0 0 -6px {{color}}, -24px -24px 0 -6px {{color}};}37.5% {box-shadow:0 -34px 0 -6px {{color}},' +
            '24px -24px 0 -6px {{color}},34px 0 0 1px {{color}},24px 24px 0 3px {{color}},0 34px 0 1px {{color}},-24px 24px 0 -6px {{color}},-34px 0 0 -6px {{color}}, ' +
            '-24px -24px 0 -6px {{color}};}50% {box-shadow:0 -34px 0 -6px {{color}},24px -24px 0 -6px {{color}},34px 0 0 -6px {{color}},24px 24px 0 1px {{color}},' +
            '0 34px 0 3px {{color}},-24px 24px 0 1px {{color}},-34px 0 0 -6px {{color}},-24px -24px 0 -6px {{color}};}62.5% {box-shadow:0 -34px 0 -6px {{color}},' +
            '24px -24px 0 -6px {{color}},34px 0 0 -6px {{color}},24px 24px 0 -6px {{color}},0 34px 0 1px {{color}},-24px 24px 0 3px {{color}},-34px 0 0 1px {{color}},' +
            '-24px -24px 0 -6px {{color}};}75% {box-shadow:0 -34px 0 -6px {{color}},24px -24px 0 -6px {{color}},34px 0 0 -6px {{color}},24px 24px 0 -6px {{color}},' +
            '0 34px 0 -6px {{color}},-24px 24px 0 1px {{color}},-34px 0 0 3px {{color}},-24px -24px 0 1px {{color}};}87.5% {box-shadow:0 -34px 0 1px {{color}},' +
            '24px -24px 0 -6px {{color}},34px 0 0 -6px {{color}},24px 24px 0 -6px {{color}},0 34px 0 -6px {{color}},-24px 24px 0 -6px {{color}},-34px 0 0 1px {{color}}, ' +
            '-24px -24px 0 3px {{color}};}}';
        keyframes = keyframes.replace(/{{color}}/g,s);
        style.innerHTML = keyframes;
        head.appendChild(style);
    }
    function createLoading7(s) {
        style = document.createElement('style');
        head = document.getElementsByTagName('head')[0];
        var keyframes = '@keyframes CLoading7 {0% ,100%{transform: rotate(0deg);box-shadow:0 -34px 0 -8px {{color}},-24px -24px 0 -8px {{color}},-34px 0 0 -8px {{color}}, ' +
            '-24px 24px 0 -8px {{color}};}20%, 80% {box-shadow:0 -34px 0 -3px {{color}},-24px -24px 0 -3px {{color}},-34px 0 0 -3px {{color}},-24px 24px 0 -3px {{color}};' +
            '}100% {transform: rotate(360deg);}}';
        keyframes = keyframes.replace(/{{color}}/g,s);
        style.innerHTML = keyframes;
        head.appendChild(style);
    }
    var cfg = {
        el:undefined,
        type:1,
        color:'#fe7f02',
        backgroundColor:'#333',
        opacity:1,
    };
    mycfg && extend(cfg,mycfg);

    var parent = cfg.el?cfg.el:document.body;

    if(cfg.el && window.getComputedStyle(parent).getPropertyValue('position')=='static'){
        parent.style.position = 'relative';
    }

    var el = create('div');
    el.className = 'CLoading' + cfg.type;
    css(el,{
        width:cfg.el?'inherit':'100%',
        height:cfg.el?'inherit':'100%',
        backgroundColor:cfg.backgroundColor,
        opacity:cfg.opacity
    });

    function createELChilds() {
        function type1() {
            var dd = create('div');
            el.appendChild(dd);
            each(4,function (i,v) {
                var d = create('span');
                if(i==0){
                    d.innerText = 'Loading';
                }
                else{
                    d.innerText = '.';
                }
                d.style.color = cfg.color;
                dd.appendChild(d);
            });
        }
        function type2() {
            var dd = create('div');
            el.appendChild(dd);
            each(5,function (i,v) {
                var d = create('div');
                d.style.backgroundColor = cfg.color;
                dd.appendChild(d);
            });
        }
        function type3() {
            var dd = create('div');
            dd.style.borderColor = getColor(cfg.color);
            dd.style.borderLeftColor = cfg.color;
            el.appendChild(dd);
        }
        function type4() {
            var dd = create('div');
            el.appendChild(dd);
            each(4,function (i,v) {
                var d = create('div');
                d.style.backgroundColor = cfg.color;
                dd.appendChild(d);
            });
        }
        function type5() {
            createLoading5(cfg.color);
            var dd = create('div');
            el.appendChild(dd);
        }
        function type6() {
            createLoading6(cfg.color);
            var dd = create('div');
            el.appendChild(dd);
        }
        function type7() {
            createLoading7(cfg.color);
            var dd = create('div');
            el.appendChild(dd);
        }
        switch (cfg.type){
            case 1:
                type1();break;
            case 2:
                type2();break;
            case 3:
                type3();break;
            case 4:
                type4();break;
            case 5:
                type5();break;
            case 6:
                type6();break;
            case 7:
                type7();break;
        }
    }

    createELChilds();

    parent.insertAdjacentElement('afterBegin', el);

    this.show = function () {
        el.style.display = 'block';
    };

    this.hide = function () {
        el.style.display = 'none';
    };

    this.remove = function () {
        parent.removeChild(el);
        if(head){
            head.removeChild(style);
        }
    };
})
