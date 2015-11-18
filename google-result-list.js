a= document.getElementsByClassName('r');
a2= document.getElementsByClassName('st');
var c=[];
for(var i=0;i<a.length;i++){
 b=a[i].children;
 c.push(b[0].innerHTML);
 c.push(a2.innerHTML);
}
d=c.toString();
console.log(d);