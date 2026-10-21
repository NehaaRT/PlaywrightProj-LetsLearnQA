//npx tsx pragameTS/Get.ts
//---------------get()-------------------------

const student = new Map<number, string>();   //Map(4) {
student.set(1000,"neha");                    //  1000 => 'neha',
student.set(1002,"nakhil");                  // 1002 => 'nakhil',
student.set(1003,"amol");                    // 1003 => 'amol',
student.set(1004,"rucha");                   // 1004 => 'rucha'
                                             //  }
console.log(student);                        
console.log(student.get(1004))               //rucha

//-----------size()---------
console.log(student.size);                    //4

//----------has()----------
console.log(student.has(1001));               //false

//----------delete()----------
student.delete(1001);  
console.log(student);         

//-----------clear()---------
for(const[key,value]of student)
{
console.log(`the key ${key } has a value ${value}`)   
}

/*the key 1000 has a value neha
the key 1002 has a value nakhil
the key 1003 has a value amol
the key 1004 has a value rucha
*/