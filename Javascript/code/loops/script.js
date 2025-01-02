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

