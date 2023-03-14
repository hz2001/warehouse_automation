import React, {useEffect, useState} from "react";
import Grid from "@mui/material/Unstable_Grid2";
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography} from "@mui/material";
/**
 * You will find globals from this file useful!
 */
import {BASE_API_URL, CLASS_METHODS, GET_DEFAULT_HEADERS, MY_BU_ID, SEMESTER} from "./globals";
import {IData, IUniversityClass} from "./types/api_types";
import {GradeTable} from "./components/GradeTable";
import {calcAllFinalGrade} from "./utils/calculate_grade";

function App() {
  // You will need to use more of these!
  const [currClassId, setCurrClassId] = useState<string>("");
  const [classList, setClassList] = useState<IUniversityClass[]>([]);
  const [data, setData] = useState<IData[]>([]);
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

  const getClassesBySemester = async (semester: string) => {
    const res = await fetch(BASE_API_URL + CLASS_METHODS["getClassesBySemester"] + semester + MY_BU_ID, {
      method: "GET",
      headers: GET_DEFAULT_HEADERS(),
    });
    return await res.json()
  };

  useEffect ( () => {
    getClassesBySemester(SEMESTER).then((classes)=>setClassList(classes));
    calcAllFinalGrade(currClassId).then(res => {
      // console.log("app, after calcAllFinalGrade()", res)
      setData(res)
    });
  }, [currClassId]);

  // call get class to load the names to classList
  // RESOLVED: why does it keep make api calls? set deps = [] makes it make only 1 api call

  const handleChange = (event: SelectChangeEvent) => {
    var classValue: string = event.target.value;
    setCurrClassId(classValue);
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
            Select a class
          </Typography>

          <div style={{ width: "100%" }}>
            <FormControl variant="standard" sx={{ m:1, minWidth: 300 }}>
            <InputLabel id="demo-simple-select-standard-label">Class</InputLabel>
            <Select fullWidth={true} label="Class" onChange={handleChange} defaultValue='' >
              <MenuItem value="" disabled selected>Classes</MenuItem>
              {classList.map((option, index) => {
                return <MenuItem value={option.classId} key={option.classId} >
                  {option.title}
                </MenuItem>

              })}
            </Select>
            </FormControl>
          </div>
        </Grid>
        <Grid xs={12} md={8}>
          <Typography variant="h4" gutterBottom>
            Final Grades
          </Typography>
          {GradeTable(data)}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
