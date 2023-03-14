import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {IData} from "../types/api_types";

/**
 * You might find it useful to have some dummy data for your own testing.
 * Feel free to write this function if you find that feature desirable.
 * 
 * When you come to office hours for help, we will ask you if you have written
 * this function and tested your project using it.
 */
export function dummyData() {

  return [
    { id: "1", studentName : '1', classId: 'Jon', semester: "2022Fall", finalGrade: 100.0 },
    { id: "2", studentName: '2', classId: 'Cersei', semester: "2022Fall", finalGrade: 100.0},
    { id: "3", studentName: '3', classId: 'Jaime', semester: "2022Fall" , finalGrade: 100.0},
    { id: "4", studentName: '4', classId: 'Arya', semester: "2022Fall", finalGrade: 100.0 },
  ];
    // ,
    // [
    //   { id: 5, studentName : '5', classId: 'Jon', semester: "2022Fall", finalGrade: 100.0 },
    //   { id: 6, studentName: '6', classId: 'Cersei', semester: "2022Fall", finalGrade: 100.0},
    //   { id: 7, studentName: '7', classId: 'Jaime', semester: "2022Fall" , finalGrade: 100.0},
    //   { id: 8, studentName: '8', classId: 'Arya', semester: "2022Fall", finalGrade: 100.0 },
    // ]
}
/**
 * This is the component where you should write the code for displaying the
 * the table of grades.
 *
 * You might need to change the signature of this function.
 *
 */
export const GradeTable = (
    data: IData[]) => {
  const columns: GridColDef[] = [
    { field: 'id',
      headerName: 'Student ID',
      minWidth: 120,
      flex:1,
      align: "center"},

    { field: 'studentName',
      headerName: 'Student Name',
      minWidth: 150,
      flex:1,
      align: "center"},

    { field: 'classId',
      headerName: 'Class ID',
      minWidth: 100,
      flex:1,
      align: "center" },
    {field: 'className',
      headerName: 'Class Name',
      type: 'string',
      minWidth: 100,
      flex:1,
      align: "center"},

    {field: 'semester',
      headerName: 'Semester',
      type: 'string',
      minWidth: 100,
      flex:1,
      align: "center"},

    {
      field: 'finalGrade',
      headerName: 'Final Grade',
      type: "float",
      width: 120,
      align: "center",
      flex:1,
      // valueGetter: (params: GridValueGetterParams) =>
      //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];
  // dummyData()[]
  // const rows = data

  return (<div style={{ height: 400, width: '100%' }}>
    <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
    />
  </div>);
};
