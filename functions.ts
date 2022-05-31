function add(n1: number, n2: number) {
    return n1 + n2;
}

function printVal(num: number) {
    console.log(num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    cb(n1 + n2);
}

let combinedValues: (a: number, b: number) => number;

combinedValues = add;

console.log(combinedValues(8,8));

addAndHandle(10, 20, printVal);

addAndHandle(15, 27, (num: number) => {
    console.log(num);
})