// console.log(document)
// console.log(document.getElementsByTagName('h1')[0])
// console.log(document.getElementsByClassName('heading')[0])
// console.log(document.getElementById('myEle'))
// console.log(document.querySelector('#myEle'))
// console.log(document.querySelector('.heading'))
// console.log(document.querySelectorAll('.heading'))

let myHeading = document.getElementById("myEle");
console.log(myHeading.textContent)
const count = document.getElementById('count')//<span>
let c = 0;
function change ()
{
    if (c < 20)
    {
			c++ //1
			count.textContent = c //1
		}
}
function change2 ()
{
    c--;
    count.textContent = c
}

const ele= document.getElementsByTagName('h1')
console.log(ele[0])

const ele1= document.getElementsByClassName('.head')
console.log(ele[0])

const ele2= document.getElementById('#heading')
console.log(ele)

const ele3= document.querySelector('#mydiv')
console.log(ele3)