/**
 * This file contains some function stubs(ie incomplete functions) that
 * you MUST use to begin the work for calculating the grades.
 *
 * You may need more functions than are currently here...we highly encourage you to define more.
 *
 * Anything that has a type of "undefined" you will need to replace with something.
 */
import {IUniversityClass, IGrades, IStudent, IAssignment, IData, IAssignmentHashmap} from "../types/api_types";
import {STUDENT_METHODS, CLASS_METHODS, GET_DEFAULT_HEADERS, MY_BU_ID, BASE_API_URL, SEMESTER} from "../globals";

/**
 * This function might help you write the function below.
 * It retrieves the final grade for a single student based on the passed params.
 * 
 * If you are reading here and you haven't read the top of the file...go back.
 */

const getGradesBySidClassId = async (classId: string,studentId: string) => {
  const res = await fetch(
      BASE_API_URL + STUDENT_METHODS["getGradesBySidClassId"] + studentId + "/" + classId + MY_BU_ID,
      {
        method: "GET",
        headers: GET_DEFAULT_HEADERS(),
      });
  try{
    return await res.json();
  } catch(error){
    if (error){
      console.log("getGradesBySidClassId error ", error);
    }}};

const getStudentsByClass = async (classId: string) => {
    const res = await fetch(BASE_API_URL + CLASS_METHODS["getStudentsByClassId"] + classId + MY_BU_ID, {
        method: "GET",
        headers: GET_DEFAULT_HEADERS(),
    });
    try{
        return await res.json();
    } catch(error){
        if (error){
            console.log("getStudentsByClass error: "+  error);
        }
    }
};

const getStudentsBySid = async (studentId: string) => {
    const res = await fetch(BASE_API_URL + STUDENT_METHODS["getStudentById"] + studentId + MY_BU_ID,
        {
            method: "GET",
            headers: GET_DEFAULT_HEADERS(),
        });
    return res.json();
};

const getListAssignmentsByClassId = async (classId: string) => {
    const res = await fetch(
        BASE_API_URL + CLASS_METHODS["getListAssignments"] + classId + MY_BU_ID,
        {
            method: "GET",
            headers: GET_DEFAULT_HEADERS(),
        });
    try{
        return res.json();
    } catch(error){
        if (error){
            console.log("getListAssignmentsByClassId() error ", error);
        }}};

const getClass = async (classId: string) => {
    const res = await fetch(
        BASE_API_URL + CLASS_METHODS["getClassById"] + classId + MY_BU_ID,
        {
            method: "GET",
            headers: GET_DEFAULT_HEADERS(),
        });
    try{
        return res.json();
    } catch(error){
        if (error){
            console.log("getListAssignmentsByClassId() error ", error);
        }}};

export async function calculateStudentFinalGrade(
  studentID: string,
  classId: string,
  weights: Map<string, number>)  {
      let grade: number = 0;
      let listGrades: IGrades = await getGradesBySidClassId(classId,studentID);
      // console.log("listGrades: ", listGrades);
      let grades: IAssignmentHashmap= listGrades.grades[0];
      // console.log("grades type: ",grades);
        weights.forEach( (value: number, key: string, map: Map<string, number>) => {
            grade += parseFloat(grades[key]) * value;
            // console.log(grade);
        })
      return parseFloat(grade.toFixed(2));
}

export async function calcAllFinalGrade(classID: string) {
    let data: IData[] = [];
    if (classID){
        let studentList = await getStudentsByClass(classID)
        let assignments: IAssignment[]= await getListAssignmentsByClassId(classID);
        let weights = new Map<string, number>();
        for (let assignment of assignments) {
            weights.set(assignment.assignmentId, assignment.weight/100 as number);
            // console.log(typeof(weights.get(assignment.assignmentId)))
        }
        // console.log(weights)
        let currClassName: IUniversityClass = await getClass(classID);
        for (const studentId of studentList){
            let student:IStudent[] = await getStudentsBySid(studentId);
            let finalGrade: number = await calculateStudentFinalGrade(studentId, classID, weights);
            // console.log("StudentId: " , studentId, "Student Name: ", student.name, "classId: ", classID, "finalGrade: ", finalGrade);
            data.push({id: studentId,
                classId: classID,
                className: currClassName.title,
                finalGrade: finalGrade,
                semester: SEMESTER,
                studentName: student[0].name})
        }
    }
    return data;

}



