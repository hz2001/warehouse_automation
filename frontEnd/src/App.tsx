import React, {useEffect, useState} from "react";
import Grid from "@mui/material/Unstable_Grid2";
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography} from "@mui/material";
/**
 * You will find globals from this file useful!
 */
import {BASE_API_URL, CLASS_METHODS, GET_DEFAULT_HEADERS, MY_BU_ID, SEMESTER} from "./globals";
import {IData, IUniversityClass} from "./types/api_types";
import {ShippingDataTable} from "./components/GradeTable";
// import {calcAllFinalGrade} from "./utils/calculate_grade";

// ass4 imports 
import { TOKEN_GET, TOKEN_POST, SHIPPING_ITEM_METHODS,BASE_API_URL_SHIPPINGDATA,GET_DEFAULT_HEADERS_FOR_SHIPPINGDATA } from "./globals";
import { IShippingData } from "./types/api_types";

function App() {
  // You will need to use more of these!
  const [currClassId, setCurrClassId] = useState<string>("");
  const [classList, setClassList] = useState<IUniversityClass[]>([]);
  // const [data, setData] = useState<IData[]>([]);
  const [data, setData] = useState<IData[]>([]);

  //ass4 useState
  const [ShippingData, setShippingData] = useState<IShippingData[]>([]);
  const [currentShipperID, setShipperID] = useState<string>("");
  /**
   * This is JUST an example of how you might fetch some data(with a different API).
   * As you might notice, this does not show up in your console right now.
   * This is because the function isn't called by anything!
   *
   * You will need to lookup how to fetch data from an API using React.js
   * Something you might want to look at is the useEffect hook.
   *
   * The useEffect hook will be useful for populating the data in the dropdown box.
   * You will want to make sure that the effect is only called once at component mount.
   *
   * You will also need to explore the use of async/await.
   *
   */

  const Shippers = ["Duan", "Zhang", "Jimmy"];
  const getItemsByShipperID = async (ShipperID: string) => {
    const res = await fetch(BASE_API_URL_SHIPPINGDATA + SHIPPING_ITEM_METHODS.getByShipperID + "code=" + TOKEN_GET + "&ShipperID=" + ShipperID, {
      method: "GET",
      headers: GET_DEFAULT_HEADERS_FOR_SHIPPINGDATA(),
    });
    return await res.json()
  };

  useEffect ( () => {
    getItemsByShipperID(currentShipperID).then((data:IShippingData[]) => {
      let fetched_data:IShippingData[] = [];
      console.log(data);

      for (let i = 0; i < data.length; i++){
        let temp: IShippingData = {  
          id: data[i].id,
          Date: data[i].Date,
          WarehouseID: data[i].WarehouseID,
          ShippingPO: data[i].ShippingPO,
          ShipmentID: data[i].ShipmentID,
          BoxesRcvd: data[i].BoxesRcvd,
          ShipperID: data[i].ShipperID};
        fetched_data.push(temp);
        console.log(fetched_data);
      }
      
      setShippingData(fetched_data)}
    )
    
    // calcAllFinalGrade(currClassId).then(res => {
    //   // console.log("app, after calcAllFinalGrade()", res)
    //   setData(res)
    // });
  }, [currentShipperID]);

  const handleChange = (event: SelectChangeEvent) => {
    var ShipperID: string = event.target.value;
    console.log("ShipperID",ShipperID);
    setShipperID(ShipperID);
    // console.log("current class", currClassId);
  };

  

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Grid container spacing={2} style={{ padding: "1rem" }}>
        <Grid xs={12} container alignItems="center" justifyContent="center">
          <Typography variant="h2" gutterBottom>
            Spark Assessment
          </Typography>
        </Grid>
        <Grid xs={12} md={4}>
          <Typography variant="h4" gutterBottom>
            Select a shipper name:
          </Typography>

          <div style={{ width: "100%" }}>
            <FormControl variant="standard" sx={{ m:1, minWidth: 300 }}>
            <InputLabel id="demo-simple-select-standard-label">Shipper Name</InputLabel>
            <Select fullWidth={true} label="ShipperID" onChange={handleChange} defaultValue='' >
              <MenuItem value="" disabled selected>Name</MenuItem>
              {Shippers.map((option, index) => {
                return <MenuItem value={option} key={option} >
                  {option}
                </MenuItem>

              })}
            </Select>
            </FormControl>
          </div>
        </Grid>
        <Grid xs={12} md={8}>
          <Typography variant="h4" gutterBottom>
            Data Log
          </Typography>
          {ShippingDataTable(ShippingData)}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
