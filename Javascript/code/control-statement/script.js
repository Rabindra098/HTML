// // // let isLogin = true;
// // // if (isLogin==true) 
// // // {
// // //     alart ("please login to continue") ;   
// // // }
// let a=10;
// if (a%2==0) {
//     console.log(a+" is even")
// }
// else{
//     console.log(a+" is odd")
// }

// /* A person is eleigible to vote aftr 18 years chaeck whwther a person eligible to vote or not by the age*/
// let age =+prompt("Enter your age : ")
// if (age>=18) {
//     console.log("You will be eligible to Vote")
// } else {
//     console.log("You can't eligible to vote and wait for "+(18-age)+" years")
// }

// /* WAP to check and print whether the given person lastname is "pandey" or not */
// let fullname=prompt("Enter your full name :")
// //Rabindra kumar sahoo
// if (fullname.endsWith("pandey")) {
//     console.log("Yes, he is belonging in pandey family")
// } else {
//     console.log("Yes, he is not belonging in pandey family")
// }

// //WAP to check whether given name/word is a pallindrome or not
// //Eg: madam ,dad,mom,racecar,malayalam,radar,level
// // let word =+prompt("Enter a word")
// // let revword=word.split('').reverse().join('')
// // if (word==revword) {
// //     console.log(word+" is a pallindrome word")
// // } else {
// //     console.log(word+" is not a pallindrome word")
// // }

// //WAP to check whether the given is positive or negitive
// let num=+prompt("Enter a number :")
// if (num>0) {
//     console.log(num+" is a positive value")
// } else if(num<0) {
//     console.log(num+" is a negative value");
// }
// else{
//     console.log("It is neither positive nor negative value. you are enter value 0 ")
// }

//switch
//wap to prin correct ans or not ansd based on user's choice?
console.log("what is 2+2 ?")
console.log("1. 2")
console.log("2. 22")
console.log("3. 4")
console.log("4. 5")
let ch =+prompt ("Enter the ans")
switch (ch) {
    case 1:
        alert("wrong ans");
        break;
    case 2:
        alert("wrong ans");
        break;
    case 3:
        alert("right  ans");
        break;
    case 4:
        alert("wrong ans");
        break;
    default:
        alert("invalit input");
        break;
}

//
console.log("write a day name ?")
console.log("1. sunday")
console.log("2. monday")
console.log("3. tuesday")
console.log("4. wednesday")
console.log("5. thusday")
console.log("6. friday")
console.log("7. saterday")
let ch1= +prompt("Enter a day name ?")
switch (ch1) {
    case 1:
        alert("The day is sunday")
        break;
    case 2:
        alert("The day is monday")
        break;
        case 3:
            alert("The day is tuesday")
            break;
            case 4:
                alert("The day is wednesday")
                break;
                case 5:
                    alert("The day is thusday")
                    break;
                    case 6:
                        alert("The day is friday")
                        break;               
                        case 7:
                            alert("The day is saterday")
                            break;
    default:
        alert("Invalid input")
        break;
}