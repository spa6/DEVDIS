import React, { Component } from "react";
import "./Home.css";
import "../../assets/font-awesome-4.7.0/css/font-awesome.min.css";
import { withStyles } from "@material-ui/core/styles";
import Header from "../../common/header/Header";
// import Card from "@material-ui/core/Card";
// import CardMedia from "@material-ui/core/CardMedia";
// import CardContent from "@material-ui/core/CardContent";
// import Typography from "@material-ui/core/Typography";
// import GridList from "@material-ui/core/GridList";
// import GridListTile from "@material-ui/core/GridListTile";

const styles = theme => ({
  nullStudentList: {
    marginTop: 15,
    marginLeft: 25
  },
  studentCardsGridList: {
    margin: "auto"
  },
  studentCard: {
    width: 250,
    maxWidth: 250,
    height: 340,
    maxHeight: 340,
    marginTop: 15,
    marginBottom: 10,
    marginLeft: 25,
    marginRight: 5,
    paddingBottom: 15,
    cursor: "pointer"
  },
  studentCardMedia: {
    height: 140
  },
  studentName: {
    marginBottom: 20
  },
  ratingAvgRateDiv: {
    position: "absolute",
    bottom: 20
  },
  studentRatingDiv: {
    backgroundColor: "#EACC5E",
    width: 100,
    textAlign: "center",
    float: "left"
  },
  studentRatingText: {
    color: "white"
  },
  studentAvgRateText: {
    marginLeft: 30,
    float: "right"
  }
});

class Home extends Component {
  constructor() {
    super();
    this.state = {
      students: [],
      cards: 2
    };
  }

  componentWillMount() {
    // clear existing cart
    // sessionStorage.removeItem("customer-cart");
    // get students from api
    // let that = this;
    // let dataStudents = null;
    // let xhrStudents = new XMLHttpRequest();
    // xhrStudents.addEventListener("readystatechange", function() {
    //   if (this.readyState === 4) {
    //     that.setState({
    //       students: JSON.parse(this.responseText).students
    //     });
    //   }
    // });
    // xhrStudents.open("GET", `${this.props.baseUrl}student`);
    // xhrStudents.send(dataStudents);
  }

  //   componentDidMount() {
  //     }

  //   componentWillUnmount() {
  //     }

  render() {
    return (
      <div>
        {/* header with search box */}
        <Header showSearchBox={true} searchHandler={this.searchHandler} />
      </div>
    );
  }
}

export default withStyles(styles)(Home);
