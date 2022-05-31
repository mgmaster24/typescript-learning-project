type Combinable = number | string
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(input1: Combinable, input2: Combinable, resultConversion: ConversionDescriptor = 'as-text') {
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        return +input1 + +input2;
    } else {
         return input1.toString() + input2.toString();
    }
}


const combinedAges = combine(30, 28, 'as-number');
const combinedName = combine('Michael ', 'Masterson', 'as-text');
const combined = combine('30', '28', 'as-number');

console.log(combinedAges);
console.log(combinedName);
console.log(combined);