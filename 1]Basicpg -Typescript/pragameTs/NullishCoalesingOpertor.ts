//npx tsx pragameTS/NullishCoalesingOpertor.ts

//The Nullish Coalescing Opertaor is respresented by two adjacent question mark(??)
//varaible ?? defalut_value


function ShowValue(input?: number)
{
 const value = input;
 console.log(value); 
}
ShowValue(50);           //50
ShowValue();            //undefined

//-----------------------------

//2]its right_hand side opertor if it the left hand side operand is null or undefine
//3]otherwise, its return the left-hand side operand
function ShowValue1(input?: number)
{
 const value = input ?? 100;
 console.log(value); 
}
ShowValue1(50);           //50
ShowValue1();             //100

//4]This opeartor is usedful for assigning default value to variable
interface setting 
{
    volume? : number;
    brightness?: number;

}
const usereSetting: setting =
{
    volume : 0 
}
const volume = usereSetting.volume ?? 50;
console.log(volume);                            //0


const brightness = usereSetting.brightness ?? 50;
console.log(brightness);                                           //50