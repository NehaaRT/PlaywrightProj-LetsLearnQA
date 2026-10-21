

//object create
type Course = {
    courseName: string;
    CourseFess: number;
    inpublish: boolean;
};

let course1: Course = {
    courseName: "typescript",
    CourseFess: 8000,
    inpublish: true
};

let course2: Course = {
    courseName: "javascript",
    CourseFess: 9000,
    inpublish: false
};
let course3: Course = {
    courseName: "java",
    CourseFess: 4000,
    inpublish: false
};

//1]A Alias in typesscript ia away to given a custom name to type
//2]it acts a synonym , allowing you to simplify complex type defination and resuse then throughout you code for better readablity and maintaince

type Color = {
    colorName: string;
    colorshade: number;
}
let FavColor1: Color = 
{
   colorName :" red",
   colorshade :12 
}
let FavColor2: Color = 
{
   colorName :" green",
   colorshade :14 
}