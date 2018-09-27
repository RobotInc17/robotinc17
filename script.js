var x = 0;
var quiz = ["a", "b", "c", "d", "e", "f"];
var questionsweb = ["Which is not a html tag:\n", "Output of the code:\n"  + "var a = 5;\n" +  "var b = 0;\n" +  "var c = a*c;\n" + "function myf(){ alert.('' + c);\n" + "}", "Which is not a javascript library:", 
"What does CSS stand for?", "HTML Tag used for importing a font from Google font:", "Which is not a javascript event:", "How to add a shadow to an element in CSS?", "Fill the line: document.getElementById('text')", "The following code prints:<br> for(var i = 0; i <= 10; i++){ console.log(i);<br>      }", "The img tag needs </img> closing"];
var aaa = ["&lta&gt", "5", "C#", "Cascate Style Sheets", "&ltlink&gt", "onclick", "shadow-set:", ".innerHTML", "012345678910", "False"];
var bbb = ["&ltcenter&gt", "0", "React.js", "Concise Style Sheets", "&ltfont&gt", "onload", "object-shadow", ".getValue()", "12345678910", "True"];
var ccc = ["&ltcompile&gt", "undefined", "jQuery", "Cascading Style Sheets", "&ltimport&gt", "onturn", "box-shadow:", ".valueOf", "0123456789", "It needs other kind of closing tag"];
var number = 0;
var answer = 0;
var right = [3, 2, 1, 3, 1, 3, 3, 1, 1, 1];
var points = 0;
function show(){
   document.getElementById("tag").style.visibility = "visible";
   document.getElementById("qtext").innerHTML = "question";
   document.getElementById("start").style.visibility = "hidden"
}
function back(){
    if(x === 0){
    x = 5;
    }else{
    x = x - 1;
    }
  document.getElementById("title").innerHTML = quiz[x];
}
function forward(){
    if(x === 5){
        x = 0;
        }else{
        x = x + 1;
        }
   document.getElementById("title").innerHTML = quiz[x];
}
function questions(){
    number = 0;
    var xxx = ["<center>", "a", "a"];
    document.getElementById("ida").innerHTML = questionsweb[0];
    document.getElementById("a").innerHTML = aaa[0];
    document.getElementById("b").innerHTML = bbb[0];
    document.getElementById("c").innerHTML = ccc[0];
}
function update(){
    if(answer === right[number]){
     points++;
    }
    number++;
    document.getElementById("ida").innerHTML = questionsweb[number];
    document.getElementById("a").innerHTML = aaa[number];
    document.getElementById("b").innerHTML = bbb[number];
    document.getElementById("c").innerHTML = ccc[number];
    if(number === 10){
        localStorage.setItem("score", points);
        document.location.href ="result.html"; 
    }
}
function function_a(){
 answer = 1;
 update();
}
function function_b(){
 answer = 2;
 update();
}
function function_c(){
 answer = 3;
 update();
}
function result(){
    var z = localStorage.getItem("score");
    document.getElementById("title").innerHTML = "" + z;
    if(z === 5){
        document.getElementById("ida").innerHTML = "3/3 - it certainly speaks for itself";
    }
    if(z === 2){
        document.getElementById("ida").innerHTML = "That's quite impressive. Even though you're not yet a web wizard, you've got what it takes to become one."
    }
    if(z < 2){
        document.getElementById("ida").innerHTML = "You have basic knowledge on web development, yet many hours of Stack Overflow await you."
    }
}