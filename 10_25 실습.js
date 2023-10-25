// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2]; 

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);
console.clear();

// 3. Loopint over an array
for (let i = 0; i < fruits.length; i++)  {
    console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits)  {
    console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('apple', 'banana')
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
fruits.unshift('apple', 'banana');
console.log(fruits);

// shift: remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push('apple', 'banana', 'orange')
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, 'apple', 'banana')
console.log(fruits);

// combine two arrays
const fruits2 = ['apple', 'banana']
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(',');
    console.log(result);
}

// Q2. make an array out of a string
{
    const fruits = 'apple, banana, orange';
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
}

// 04. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5);
    console.log(result);
    console.log(array);
}
class Student {
    constructor(name, age, enrolled, score)  {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 50, false, 66),
    new Student('E', 18, true, 88)
];



