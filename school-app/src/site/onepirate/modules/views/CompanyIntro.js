import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "../components/Button";
import Typography from "../components/Typography";
import ProductHeroLayout from "./ProductHeroLayout";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";

const styles = theme => ({
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(10)
    }
  },
  more: {
    marginTop: theme.spacing(2)
  }
});

function CompanyIntro(props) {
  const { classes } = props;

  return (
    <div>
      <br></br>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <img
              src={window.location.origin + "/images/campus/MyLogo.jpg"}
              width="100%"
              // alt={this.state.selectedPost.caption.text.split("\n")[0]}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Grid
              container
              spacing={3}
              justify="flex-start"
              alignItems="center"
            >
              <Grid item>
                <Typography variant="h5">ABOUT US</Typography>
              </Grid>
            </Grid>
            <Divider light />
            <Grid
              container
              spacing={2}
              justify="flex-start"
              alignItems="center"
            >
              <Grid item>
                <Typography variant="body2">
                <br/>
                  <b style={{ color: 'green' }}>MY FOUNDATIONS</b> is a non-profit, non-governmental organization committed to helping children who are suffering the effects of poverty, disease, natural disaster, famine, abuse, civil strife and war. The heart and soul of Children's Fund is YOU. Through the generosity of our partners and donors, we are making a difference. Together, we are changing the lives of the impoverished and suffering children.
                </Typography>
                <br />
                <Typography variant="body2">
                  We committed to high standards of accountability and transparency which is an expression of our core value on 'stewardship'. This is because we believe that we work effectively for the well-being of children.
                  We know the very best thing for a child is to be part of a loving family—it’s where they thrive. That’s why everything we do is designed to accomplish just that.
                  We are with special motto to help the needy, poor and uneducated people.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Typography variant="body2">
              At <b style={{ color: 'green' }}>MY FOUNDATIONS</b>, We have our policies, procedures, systems, practices, work culture and audits well in place to reflect our commitment to accountability and transparency. We endeavors to convey a public image that conforms to reality and speaks and acts with diligent honesty. With the power of the Almighty, we intend to pursue excellence beyond compliance, in all aspects of our work - In governance, management, operations and administration.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

CompanyIntro.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CompanyIntro);
