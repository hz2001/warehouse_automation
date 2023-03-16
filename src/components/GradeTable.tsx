import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {IShippingData} from "../types/api_types";

/**
 * You might find it useful to have some dummy data for your own testing.
 * Feel free to write this function if you find that feature desirable.
 * 
 * When you come to office hours for help, we will ask you if you have written
 * this function and tested your project using it.
 */


// export interface IShippingData {
//   id: string,
//   date: string,
//   WarehouseID: string,
//   ShippingPO: string,
//   ShipmentID: string,
//   BoxesRcvd: string,
//   ShipperID: string,
//   _rid: string,
//   _self: string,
//   _etag: string,
//   _attachments: string,
//   _ts: number
// }
export const ShippingDataTable = (
  data: IShippingData[]) => {
const columns: GridColDef[] = [
  { field: 'id',
    headerName: 'Item ID',
    minWidth: 100,
    flex:1,
    align: "center"},

  { field: 'Date',
    headerName: 'Date Shipped',
    minWidth: 100,
    flex:1,
    align: "center"},

  { field: 'WarehouseID',
    headerName: 'WarehouseID',
    minWidth: 100,
    flex:1,
    align: "center" },
  {field: 'ShippingPO',
    headerName: 'ShippingPO',
    type: 'string',
    minWidth: 100,
    flex:1,
    align: "center"},

  {field: 'ShipmentID',
    headerName: 'ShipmentID',
    type: 'string',
    minWidth: 50,
    flex:1,
    align: "center"},

  {
    field: 'BoxesRcvd',
    headerName: 'BoxesRcvd',
    type: "string",
    width: 50,
    align: "center",
    flex:1
  },
  {
    field: 'ShipperID',
    headerName: 'ShipperID',
    type: "string",
    width: 100,
    align: "center",
    flex:1
  }
  // ,
  // {
  //   field: '_rid',
  //   headerName: '_rid',
  //   type: "string",
  //   width: 10,
  //   align: "center",
  //   flex:1
  // },
  // {
  //   field: '_self',
  //   headerName: '_self',
  //   type: "string",
  //   width: 10,
  //   align: "center",
  //   flex:1
  // },
  // {
  //   field: '_etag',
  //   headerName: '_etag',
  //   type: "string",
  //   width: 10,
  //   align: "center",
  //   flex:1
  // },
  // {
  //   field: '_attachments',
  //   headerName: '_attachments',
  //   type: "string",
  //   width: 10,
  //   align: "center",
  //   flex:1
  // },
  // {
  //   field: '_ts',
  //   headerName: '_ts',
  //   width: 10,
  //   align: "center",
  //   flex:1
  // }
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
