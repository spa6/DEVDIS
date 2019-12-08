import React, { Component } from "react";
import Header from "../../common/Header";
import MaterialTable from 'material-table';
import ReactToExcel from 'react-html-table-to-excel';
import { withStyles } from "@material-ui/styles";
import Container from "@material-ui/core/Container";
const styles = theme => ({
});



export default function MaterialTableDemo() {
  
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname' },
      { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
      {
        title: 'Birth Place',
        field: 'birthCity',
        lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
      },
    ],
    data: [
      { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
      {
        name: 'Zerya Betül',
        surname: 'Baran',
        birthYear: 2017,
        birthCity: 34,
      },
    ],
    options: 
      { exportAllData: true, exportButton: true },
  });

  return (
    <div>
        <Header
          screen={"Students"}
          //userProfileUrl={this.state.profile_picture}
        />
        <div className="container">
        <Container fixed>
        <MaterialTable
      title="Student Details"
      columns={state.columns}
      data={state.data}
      options={state.options}
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
          }),
      }}
    />

    </Container>
        </div>
        </div>
    
  );
    
}
