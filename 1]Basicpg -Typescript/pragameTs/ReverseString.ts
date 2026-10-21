//npx tsx pragameTS/ReverseString

//input string = typescript  : 10 lenght last index 9
//output strig = tpircspyt

function Doreverse(str: string): string {
    let reverse: string = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reverse = reverse + str.charAt(i);
    }

    return reverse;
}

let inputstring = 'Neha';                   
const outputstring = Doreverse(inputstring);

console.log(`Reverse of ${inputstring} is = ${outputstring}`);             //Reverse of Neha is = aheN
