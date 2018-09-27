console.log('heey');

const a = function (z,b,v){
 return z + b - v ;
};
const h = a(1,5,2);
console.log(h);

const b = function (){
	return 'Hello World';
};
console.log(b());

const z = function (vm,md) {
console.log( vm + md + 5);
};
z(7,8);

const f3 = function (f,l,g) {
	if(f.length>l.length && f.length>g.length){
		return f;
	} else if(l.length>f.length && l.length>g.length){
		return l;
	} else if(g.length>f.length && g.length>l.length){
		return g;
	} else {
	return "nope";
  	};
};
console.log(f3('Ani','Sahakyan','female'));

const number = function(v,k) {
if(v===k) {
	return 0;
 } else if(v>k){
	return 1;
 } else {
	return (-1);
}
};
console.log(number(8,10));

const multiply= function(a,b) {
	return a*b;
};
console.log(multiply(4,8));

const devide= function(r,k) {
	return r/k;
};
console.log(devide(32,2));


const triangleArea = function(base, height){
 let a  = multiply(base, height); 
 let b = devide(a,2);
  return b;
};
console.log(triangleArea(4,8));


const numLength = function (n){
	let k = n + ""; 
	return k.length ;
};
console.log(numLength(647593491));
	 

 const f2 = function(st1,st2,n1){
 	if((st1.length + st2.length) > n1){
 		return 1;
 	} else {
 		return (-1); 
 	};
 };
 console.log(f2('AUA','Student',24));


const runStuff = function(num1,num2,str){
	let r = multiply(num1,num2);
	let t = devide(r,2);
	if(str === 'rectangle') {
		return r;
	} else if(str === 'triangle'){
		return t; 
	} else {
		return (-1);
	}
};
console.log(runStuff(8,16,'triangle'));