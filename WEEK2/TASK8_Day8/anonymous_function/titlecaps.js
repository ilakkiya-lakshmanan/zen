var str=["hi","hello"];
var x=function titleCase(str) {
    //var sentence = str.split(",");
    console.log(str);
    for(var i = 0; i< str.length; i++){
       str[i] = str[i][0].toUpperCase() + str[i].slice(1);
    }
 console.log(str.join(" "));
 return str;
}
x(str);