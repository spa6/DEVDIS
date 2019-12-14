import React, { Component } from "react";
import Header from "../../common/Header";
import MaterialTable from "material-table";
import ReactToExcel from "react-html-table-to-excel";
import { withStyles } from "@material-ui/styles";
const styles = theme => ({});

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: "Name", field: "name" },
      { title: "Surname", field: "surname" },
      { title: "Birth Year", field: "birthYear", type: "numeric" },
      {
        title: "Birth Place",
        field: "birthCity",
        lookup: { 34: "Bangalore", 63: "Hyd" }
      }
    ],
    data: [
      { name: "Ishanvi", surname: "Potla", birthYear: 2016, birthCity: 34 },
      {
        name: "Sujay",
        surname: "Jarubula",
        birthYear: 2015,
        birthCity: 34
      },
      { name: "Anji", surname: "J", birthYear: 1965, birthCity: 63 },
      { name: "China abbai", surname: "V", birthYear: 1965, birthCity: 63 },
      { name: "Latha", surname: "Ch", birthYear: 1984, birthCity: 63 },
      { name: "Pullarao", surname: "V", birthYear: 1962, birthCity: 63 }
    ]
  });

  return (
    <div>
      <Header
        screen={"Students"}
        //userProfileUrl={this.state.profile_picture}
      />
      <div className="container">
        <MaterialTable
          title="Student Details"
          columns={state.columns}
          data={state.data}
          editable={{
            onRowAdd: newData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  setState(prevState => {
                    const data = [...prevState.data];
                    data.push(newData);
                    return { ...prevState, data };
                  });
                }, 600);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  if (oldData) {
                    setState(prevState => {
                      const data = [...prevState.data];
                      data[data.indexOf(oldData)] = newData;
                      return { ...prevState, data };
                    });
                  }
                }, 600);
              }),
            onRowDelete: oldData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  setState(prevState => {
                    const data = [...prevState.data];
                    data.splice(data.indexOf(oldData), 1);
                    return { ...prevState, data };
                  });
                }, 600);
              })
          }}
        />
      </div>
    </div>
  );
}
