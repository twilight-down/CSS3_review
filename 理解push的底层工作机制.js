let obj = {
    2: 3,
    3: 4,
    length: 2,
    push: Array.prototype.push
}
console.log(obj);

obj.push(1);
obj.push(2);
console.log(obj);