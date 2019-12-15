import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import 'mdbreact/dist/css/mdb.css';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  col: {
    width: "10%",
  },
});
function FormPage(props) {
  const { classes } = props;
  return (
    <MDBContainer>
      
      <MDBRow>
        <MDBCol >
          <form>
            <p className="h5 text-center mb-4">Get In Touch!</p>
            <div className="grey-text">
              <MDBInput
                label="Your name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Subject"
                icon="tag"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                type="textarea"
                rows="2"
                label="Your message"
                icon="pencil-alt"
              />
            </div>
            <div className="text-center">
              <MDBBtn outline color="secondary">
                Send <MDBIcon far icon="paper-plane" className="ml-1" />
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
        <MDBCol className = {classes.col}>

        </MDBCol>
        <MDBCol >
          <form>
            <p className="h3 text-center mb-4">Reach Us!</p>
            <div className="grey-text">
              <MDBInput
                label="Your name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Subject"
                icon="tag"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                type="textarea"
                rows="2"
                label="Your message"
                icon="pencil-alt"
              />
            </div>
            <div className="text-center">
              <MDBBtn outline color="secondary">
                Send <MDBIcon far icon="paper-plane" className="ml-1" />
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default withStyles(styles)(FormPage);