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
export const TOKEN_GET = "FJicRXr0SKxJws1tg6yFK14n35l-_-iblxAktWWG4AQMAzFu68AHKQ==" // key for DS519Assignment4_2.0 Azure function app: "getItems"
export const TOKEN_POST =  "it_Qyu7DsKfL91lBRLVuCXKfKdrHDZSTL6XkJ6wZPMRBAzFufHQJbw==" // key for DS519Assignment4_2.0 Azure function app: "postItems"
export const BASE_API_URL_SHIPPINGDATA = "https://ds519assignment4functions.azurewebsites.net/api"

export const ANYONE_CAN_ACCESS = "=_="

export const GET_DEFAULT_HEADERS_FOR_SHIPPINGDATA = () => {
  var headers = new Headers();
  headers.append('accept','application/json');
  // headers.append('x-functions-key',TOKEN_GET);
  return headers;
};

export const SHIPPING_ITEM_METHODS = {
  getByShipperID: "/getItems?" ,
  PostNewItem: "/postItems"
};