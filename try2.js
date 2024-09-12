/*const values = [123, 'hello world',true,[5,6,7],{id:1, title: 'untitled'}]

values[values.length] = 'good bye' //grow size
//values.push('good bye')

console.log(values)
console.log(values[0]) // first item
console.log(values[values.length - 1]) // last item

array.forEach(element => {
    console.log(element)
})

for(const item of values){
    console.log(item)
}*/


/* array
const colors = [['red','green','blue'],['brown','yellow']]

console.log(colors)*/

/*
const values = [5,10,15,20]
const x =[100,200,300]
const nums =[...x ,1,3, ...values]
console.log(nums)

nums[0]=555
console.log(nums)
console.log(x)

const students = [{id:66130500060,name:'Paveepat'},
                  {id:66130500050,name:'Narisara'}]

const alumniStudents = [...students]

alumniStudents[0].id = 9999999
console.log(students)
console.log(alumniStudents)

const str ='hello world'
console.log([...str])
*/

/*
const values = new Array(1)
console.log(values)
console.log(values.length)


const x = new Array(1,3,5,7)
console.log(x)
console.log(x.length)

const y = new Array()
console.log(y.length)
console.log(typeof y)
*/


/*
const x = Array.of(1)
console.log(x.length)
console.log(x)

const y = Array.of(true, {id:1},'hello world')
console.log(y)

const m = [2,4,6]
const n = Array.from(m)

console.log(n)
console.log(n.length)
*/

/*
const x= []
x[0] = 1
x[x.length] = 10
console.log(x)
delete x[0]
console.log(x)
console.log(x.length)

x.push(100)
x.push(200)
x.pop()
console.log(x)
console.log(x.length)

x.unshift('A')
x.unshift('B')
x.shift()
console.log(x)
*/


/*
const x = [1,3,5,7]
let [a,m, ,o]=x
console.log(typeof a)
console.log(typeof m)
console.log(a,m)
console.log(o)

const [...n] = x
console.log(n)
console.log(n.length)

const d =[]
const [...c] = d
console.log(d)
*/

/*
const words = ['apple','book','car']

for (let [index,word] of words.entries()) {
    console.log(word,index)
}
for (const word of words){
    console.log(word)
}
*/

 /*
function dosomething(x,y){
    console.log(x)
    console.log(y)
}
dosomething(1,2)
dosomething('A','B')
dosomething(true,false)
dosomething(x,y) // wrong position
*/

/*
console.log(area(3,2))
function area(x,y){
    return x*y
}
    */

function greet(name,greeting){
    return `${greeting}, ${name}!`; 
}
console.log(greet('Alice'));
console.log(greet('Bob', 'Hi'));
console.log(greet('Charlie', 'Good morning'));