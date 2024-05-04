/**
 * This file can be used to store types and interfaces for data received from the API.
 * It's good practice to name your interfaces in the following format:
 * IMyInterfaceName - Where the character "I" is prepended to the name of your interface.
 * This helps remove confusion between classes and interfaces.
 */

/**
 * This represents a class as returned by the API
 */
export interface IUniversityClass {
  classId: string;
  description: string;
  meetingLocation: string;
  meetingTime: string;
  semester: string;
  status: string;
  title: string;
}
export interface IAssignmentHashmap {
  [key: string] : string;
}

export interface IGrades {
  classId: string;
  studentId: string;
  name: string;
  grades: any;
}

export interface IStudent {
  universityId: string;
  name: string;
  dateEnrolled:string;
  status: string;

}
export interface IAssignment {
  assignmentId:string;
  classId: string;
  date: string;
  weight: number;
}

export interface IData {
  id: string,
  studentName: string,
  classId: string,
  className: string,
  semester: string,
  finalGrade: number
}


// ass 4

export interface IShippingData {
  id: string,
  Date: string,
  WarehouseID: string,
  ShippingPO: string,
  ShipmentID: string,
  BoxesRcvd: string,
  ShipperID: string
  // ,
  // _rid: string,
  // _self: string,
  // _etag: string,
  // _attachments: string,
  // _ts: number
}

// {
//   "id": "1",
//   "Date": "Sep 1, 2023",
//   "WarehouseID": "a908cef7-4c67-40f3-88f7-08a03ba4104e",
//   "ShippingPO": "81d06bd2-39e3-427c-9fb3-4e217b9a4d60",
//   "ShipmentID": "100",
//   "BoxesRcvd": "100",
//   "ShipperID": "Zhang",
//   "partitionKey": "ass4item",
//   "_rid": "ldVkAP0fhCQKAAAAAAAAAA==",
//   "_self": "dbs/ldVkAA==/colls/ldVkAP0fhCQ=/docs/ldVkAP0fhCQKAAAAAAAAAA==/",
//   "_etag": "\"7e0094ac-0000-0100-0000-640fce9a0000\"",
//   "_attachments": "attachments/",
//   "_ts": 1678757530
// }