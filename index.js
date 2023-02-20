//Bolatito just got admitted to Greenfield High School as an Arts student. 
//To commence her studies, she needs to know the subjects she will be taking 
//as an Arts student. All students have to take the General subjects.
//The subjects for each class group are as follows:
//Science Subjects - Physics, Chemistry, Biology, Technical Drawing 
//Social Science Subjects - Accounting, Commerce, Marketing, Geography
//Arts Subjects - Government, Economics, Literature, History
//General Subjects - English, Mathematics

//Using if…else conditional statement, write a program that will help Bolatito 
//determine the subjects she will be taking for the session using her class group.
// Also, in the case of an invalid class group, your output should be the General
//subjects. 

//let subjects = Physics, Chemistry, Biology, TechnicalDrawing, Accounting, Commerce, Marketing, Geography, Government, Economics, Literature, History, English, Mathematics;
//let socialScience =  Accounting, Commerce, Marketing, Geography;
//let artSubjects = Government, Economics, Literature, History;
//let generalSubjects = English, Mathematics;

let scienceSubject = Physics, Chemistry, Biology, TechnicalDrawing;
let artSubjects = Government, Economics, Literature, History;
let socialScience =  Accounting, Commerce, Marketing, Geography;
let generalSubjects = English, Mathematics;

if (artSubjects && generalSubjects ) {
    console.log('Valid class group')
} else {
    console.log('Invalid class group')
}