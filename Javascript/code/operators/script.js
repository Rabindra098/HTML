/*arithematic operators*/
let a=20,b=10;
console.log(`the sum of ${a} and ${b} which is equals to ${a+b}`)
console.log(`the substraction of ${a} and ${b} which is equals to ${a-b}`)
console.log(`the multiplication of ${a} and ${b} which is equals to ${a*b}`)
console.log(`the division of ${a} and ${b} which is equals to ${a/b}`)
console.log(`the reminder of ${a} and ${b} which is equals to ${a%b}`)
console.log(`the power of ${a} and ${b} which is equals to ${a**b}`)

/* relational operators*/
let a1=20,b1=5,c1='20';
console.log(a1>b1)
console.log(a1<b1)
console.log(a1>=b1)
console.log(a1<=b1)
console.log(a1==c1)
console.log(a1===b1)
console.log(a1!=b1)
console.log(a1!==b1)

/* Logical operators */
let x=30,y=20,z=5;
console.log("Logical AND will be true when both statements are true only : "+(x>y)&&(x>z))
console.log("Logical OR will be true when any of the statements are true only : "+(x>y)||(x>z))
console.log("Logical NOT will be true when statement is false : "+(!((x>y)&&(x>z))))

/* assignment or shorthand operators */
console.log(a+=2);  //22
console.log(a-=2);  //20
console.log(a*=2);  //40
console.log(a/=2);  //20
console.log(a**=2);  //400
console.log(a%=2);  //0

a=5;
b=a++;  //a=a+1
c=++a;  //a=1+a
console.log(a,b,c)  //7,5,7

a=20, b=10;
c= ++a + a++ + --b + b-- ;
console.log(c)

/* ternary oprators */
a=11;
c=(a%2==0)? 'Even' : 'Odd'
console.log(c)

console.log('5'+5)
console.log(+'5'+5)

a=5;
var d=25;
c=d ?? a;
console.log(c)

d=undefined;
a=10;
c=d??a;
console.log(c)