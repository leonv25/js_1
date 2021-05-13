let options = {
    width: 1024,
    height: 1024,
    name: "test"
};
console.log(options.name);
options.bool = false;
options.colors = {
    border: "black",
    bg: "red"
};

delete options.bool;

console.log(options);

for (let key in options) {
    console.log('Свойтво ' + key + ' имеет значение ' + options[key]);
}
console.log(Object.keys(options).length);

let arr = ["first", 2, 3, "four", 5];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

arr.forEach(function(item, i, mass){
    console.log(i + ': ' + item + " (масив: " + mass + ')');
});

console.log(arr);