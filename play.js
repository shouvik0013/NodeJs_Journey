// const person = {
//     name: 'Rohon',
//     age: 26,
//     greet() {
//         console.log('Hello, I am ' + this.name);
//     }
// }; // end javascript class with semicolon

// const copiedPerson = {...person};
// console.log(copiedPerson);

// const hobbies = ['Sports', 'Cooking'];

// for (let hobby of hobbies) {
//     console.log(hobby);
// }
// console.log(hobbies.map((hobby) => {
//     return 'Hobby: ' + hobby;
// }));
// console.log(hobbies);
// hobbies.push('Programming');
// console.log(hobbies);

// const copiedArray = hobbies.slice();
// console.log(copiedArray);

// const copiedArray = [...hobbies];
// console.log(copiedArray);

// const toArray = (...args) => {
//     return args;    // here args is an array
// }

// console.log(toArray(1, 2, 4, 5, 6));

// setTimeout(() => {
//     console.log('Timer is done');
// }, 1);

// console.log('Mi1');
// console.log('Mi2');


// // callback is the arrow function from setTimeout()
// const fetchData = (callback) => {
//     setTimeout(() => {
//         callback('Done!');
//     }, 10000);
// };

// setTimeout(() => {
//     console.log('Timer is done');
//     // fetchdata expects a function as a parameter
//     // here a arrow function is passed
//     // the function expects a text to console.log() it
//     fetchData(text => {
//         console.log(text);
//     })
// }, 2000);



const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done');
        }, 1500);
    });
    return promise;
};

setTimeout(() => {
    console.log('Timer is done');
    fetchData().then(text => {
        console.log(text);
        return fetchData();
    })
    .then(text2 => {
        console.log(text2);
    })
}, 2000);


console.log('Hello');
console.log('Hi');