/**
 * This file can be used to store global variables that you need to access across multiple places.
 * We've put a few here that we know you will need.
 * Fill in the blank for each one
 */
export const MY_BU_ID = "?buid=U82392079";
export const BASE_API_URL = "https://dscs519-assessment.azurewebsites.net/api";
// You can get this from Piazza
export const TOKEN = "fKZTwhwT1DV64q_JzG6sYoShfq-cJbPwBgjIMOImYSTiAzFuv4-H5g==";
//TODO: what if they changed the semester variable for testing, then the whole program will not work
export const SEMESTER = "fall2022"
// This is a helper function to generate the headers with the x-functions-key attached
export const GET_DEFAULT_HEADERS = () => {
  var headers = new Headers();
  headers.append('accept','application/json');
  headers.append('x-functions-key',TOKEN);
  // You will need to add another header here
  // If you do not, the API will reject your request (:
  return headers;
};

export const CLASS_METHODS = {
  getClassById: "/class/GetById/", /*{classId}*/
  getListAssignments: "/class/listAssignments/", /*{classId}*/
  getClassesBySemester: "/class/listBySemester/", /*{semester}*/
  getStudentsByClassId: "/class/listStudents/" /*{classId}*/
};
export const STUDENT_METHODS = {
  getGradesBySidClassId: "/student/listGrades/", /*{studentId, classId}*/
  getStudentById: "/student/GetById/" /*{studentId}*/
}


// ass 4 
export const TOKEN_GET = "zz2Jj5KKJUmi1h-If9iaSpe1p3JTIvIs7QA8P7REtVeFAzFu1irh_w=="
export const TOKEN_POST =  "uf48t-u-aHVbri72ihvMvXye07xQ5wIvUeRZO4Vo_RqpAzFux9FiZw=="
export const BASE_API_URL_SHIPPINGDATA = "https://ds519ass4functions.azurewebsites.net/api"

export const GET_DEFAULT_HEADERS_FOR_SHIPPINGDATA = () => {
  var headers = new Headers();
  headers.append('accept','application/json');
  // headers.append('x-functions-key',TOKEN_GET);
  return headers;
};

export const SHIPPING_ITEM_METHODS = {
  getByShipperID: "/shippingItemGet?" ,
  PostNewItem: "/shippingItemPost"
};