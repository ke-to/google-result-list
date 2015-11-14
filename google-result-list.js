a= document.getElementsByClassName('r');
var c=[];
for(var i=0;i<a.length;i++){
 b=a[i].children;
 c.push(b[0].innerHTML);
}
d=c.toString();
alert(d);