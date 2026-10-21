//objet it a collection of key - value paris where each key (property ) has a define type
// An object represnt real world entities like a student , employee , product , etc

//object create a course n has : name ,feees, publish course

let course = 
{
    courseName :"Typescript",
    CourseFess : 5000 ,
    inpublish : true

}
console.log(course.courseName);  //Typescript
console.log(course.CourseFess);  //5000

course.courseName =1000;       //Type 'number' is not assignable to type 'string'.

//------type define explicity------------------------------

let color : 
{
    colorName : string;
    Colorshade :number
    colorpublish :boolean


}=
{
    colorName :"red",
    Colorshade : 3000 ,
    colorpublish :false

}
console.log(color.colorName); 
console.log(color.Colorshade);  

