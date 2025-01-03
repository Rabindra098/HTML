let a=1
while(a<10){
    console.log(a)
    a++;
}
let b=10
while(b>=1){
    console.log(b)
    b--;
}
// take a string of anyname and print ited even numbered string 
//ex:-  "Rabindra"   ---->aida

let name="RABINDRA",i=0,name1='';
while (i<name.length) {
    if ((i+1)%2==0) 
        name1=name1+name1[i]
    i++;
}
console.log(name1)

//while loop to print even number from 1 - 20 ?
let n=2;
while (n<=20){
    console.log(n)
    n+=2;
}
//take a name and acronym of the name ?
//input : "Rabindra Kumar Sahoo"--->RKS
function makeAcronym(str)
{
    //let arr=str.split('');
    let i=0; str1=str[0];
    while(i<str.length)
    {
        if (str.charAt(i)=='')
        {
           str1=str1+str.charAt(i+1);
        }
        i++;
    }
    return str1.toUpperCase()
}
let res =makeAcronym("World Helth Organization")
console.log(res)

i=0;
while(i<10){
    console.log(i)
    i++;
}

i=0;
do{
    console.log(i);
    i++;
}while (i<10);

// print 20 to 1 even is reverse order like 20 18 16 .......2 ?
let j=20;
while(j>1)
{
    console.log(j);
    j-=2;
}
let j1=20;
for(j =20; j>=1; j-=2)
{
   console.log(j) 
}

//using standard for print arr element ?
let arr=[5,6,7,8,9]
for (i = 0; i < arr.length; i++) {
    console.log(arr[i])  
}