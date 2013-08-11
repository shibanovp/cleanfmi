/*
var myGlobalFunction = function(param1){
    return param1;
}
function myNextFunction(param1){
    return param1;
}
console.log(myGlobalFunction('Paul'));
alert(myNextFunction(myGlobalFunction("Shps")));
alert(typeof myExample);
alert(myExample instanceof Object);
myExample.prop1='Property One';
console.log(myExample.prop1);
//alert(myExample())
//alert(new myExample())
*/
(function(){
/*function myExample(param1){
    var name ='Paul';
    //this.prop1 = 'Paul';
    alert(name);
    alert(this.prop1);
}
function myNewClass(arg1,arg2){
    this.name = 'Paul';
    this.family = 'Shibanov';
    this.method1 = function(){
        alert(this.name+this.family);
    }
}
myNewClass.prototype = {
    name:'Alexander',
    family:'Bell'
}
var obj1= new myNewClass();
obj1.method1();

//alert(myExample.length);
//myExample();
//myExample.call({prop1: 'Nicola'},1);
//alert("aaa");
var myObject = new Object('arg1','arg2');
alert (myObject);
*/
})();
(function(){
    window.onload = function(e){
    };
    /*var myObject = {};
    myObject.prop1 = 'Paul';
    myObject['prop2'] = 'Shibanov';
    myObject.method1 = function(atg1,arg2){
        alert('Arguments');
    };
    //alert(myObject.method1.length);
    //myObject.method1();
    var myObject2 = new Object();
    myObject2.prop1 = 'Paul';
    //alert(myObject2.toString());
    function MyClass(name,family){
        //alert(this.name=name);
        this.family=family;
        this.showName=function(){
            alert(this.name);
        }
        this.showFamily=function(){
            alert(this.name);
        }
        this.showFullName=function(){
            alert(this.name+' '+this.family);
        }
        this.showProp1=function(){
            alert(this.prop1);
        }
    }
    MyClass.prototype ={
        'prop1':'Nich',
        'prop2':'bien',
        'name':'Kathy'
    };
    MyClass.prototype.constructor = MyClass;
    obj1= new MyClass();
    //obj1.showProp1();
    //obj1.showFullName();
    //alert(MyClass.prototype.constructor);
    //alert(obj1.constructor);
    var myFunction = function forCallBack(arg1,arg2){
        for (var i=0; i<arguments.length;i++)
            alert(arguments[i]);
    }
    //myFunction(1,2,3,4);
    var myFunction2 = new Function('arg1','arg2','return arg1+arg2;');
    alert(myFunction2(1,2));
    
    nodeList = document.getElementsByTagName('DIV');
    //for (var i=0;i<nodeList.length;i++)
    //    alert(nodeList[i]);
    var element = document.getElementById('content');
    for(var i in element)
        console.log(i+': '+element[i]+'\r\n');
        */
        var element = document.getElementById('content');
    function onMouseOver(e){
        var event = e||window.event;
        var element = event.target || event.srcElement;
        alert('The mouse was over me: '+element.innerHTML);
    }
    if (element.addEventListener)
        element.addEventListener('mouseover','onMouseOver',false);
    
    var xmlhttp;
    if (window.XMLHttpRequest)
        xmlhttp = new window.XMLHttpRequest();
    else if (window.activeXObject)
        xmlhttp = new window.activeXObject();
    else alert ('Your browser dosent\' support XHR');
    xmlhttp.open('GET','exp.txt',true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var responseText = xmlhttp.responseText;
            var responseXml = xmlhttp.responseXml;
            alert(responseText);
        }
    }
})()