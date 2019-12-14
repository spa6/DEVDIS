import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Avatar from "@material-ui/core/Avatar";
import MenuIcon from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import Header from "../../common/Header";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import Favorite from "@material-ui/icons/Favorite";

const messages = [
  {
    id: 1,
    primary: "Do we have any special class this weekend?  ",
    secondary:
      "Do we have any special class this weekend? based on that i will paln my weekend ",
    person: "images/avatar/5.jpg",
    comments: []
  },
  {
    id: 2,
    primary: "Birthday Gift",
    secondary: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
    person: "images/avatar/1.jpg",
    comments: []
  },
  {
    id: 3,
    primary: "Recipe to try",
    secondary:
      "I am try out this new BBQ recipe, I think this might be amazing",
    person: "images/avatar/2.jpg",
    comments: []
  },
  {
    id: 4,
    primary: "Yes!",
    secondary: "I have the tickets to the ReactConf for this year.",
    person: "images/avatar/3.jpg",
    comments: []
  },
  {
    id: 5,
    primary: "Summer camp",
    secondary: "What are activities for thia year summer camp?",
    person: "images/avatar/4.jpg",
    comments: []
  },
  {
    id: 6,
    primary: "Discussion",
    secondary: `Menus that are generated by the bottom app bar (such as a bottom
      navigation drawer or overflow menu) open as bottom sheets at a higher elevation
      than the bar.`,
    person: "images/avatar/5.jpg",
    comments: []
  },
  {
    id: 7,
    primary: "Summer BBQ",
    secondary: `Who wants to have a cookout this weekend? I just got some furniture
      for my backyard and would love to fire up the grill.`,
    person: "images/avatar/1.jpg",
    comments: []
  }
];

const useStyles = theme => ({
  text: {
    padding: 16
  },
  paper: {
    paddingBottom: 50
  },
  list: {
    marginBottom: 16
  },
  subheader: {
    backgroundColor: "#fff"
  },
  appBar: {
    top: "auto",
    bottom: 0
  },
  grow: {
    flexGrow: 1
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto"
  },
  paper_big: {
    position: "absolute",
    width: 600,
    backgroundColor: "white",
    padding: 16,
    outline: "none",
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`
  }
});

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile_picture: "",
      username: "",
      media: 0,
      follows: 0,
      followed_by: 0,
      full_name: "",
      userPosts: messages,
      access_token: sessionStorage.getItem("access-token"),
      editNameOpen: false,
      fullnameRequired: "dispNone",
      editFullName: "",
      postItemOpen: false,
      selectedPost: null,
      selectedIndex: -1,
      addNewComment: "",
      baseUrl: "https://api.instagram.com/v1/"
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header
          screen={"Messages"}
          //userProfileUrl={this.state.profile_picture}
        />
        <div className="container"></div>
        <Container fixed>
          <React.Fragment>
            <CssBaseline />
            <Paper square className={classes.paper}>
              {/* <Typography className={classes.text} variant="h5" gutterBottom>
          Inbox
        </Typography> */}
              <List className={classes.list}>
                {messages.map(({ id, primary, secondary, person }, index) => (
                  <React.Fragment key={id}>
                    {id === 1 && (
                      <ListSubheader className={classes.subheader}>
                        Today
                      </ListSubheader>
                    )}
                    {id === 3 && (
                      <ListSubheader className={classes.subheader}>
                        Yesterday
                      </ListSubheader>
                    )}
                    <ListItem
                      button
                      onClick={() => this.handlePostClickHandler(id, index)}
                    >
                      <ListItemAvatar>
                        <Avatar alt="Profile Picture" src={person} />
                      </ListItemAvatar>
                      <ListItemText primary={primary} secondary={secondary} />
                    </ListItem>
                  </React.Fragment>
                ))}
              </List>
            </Paper>
            {/* <AppBar position="fixed" color="primary" className={classes.appBar}>
          <Toolbar>
            <Fab
              color="secondary"
              aria-label="add"
              className={classes.fabButton}
            >
              <AddIcon />
            </Fab>
            <div className={classes.grow} />
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
            <IconButton edge="end" color="inherit">
              <MoreIcon />
            </IconButton>
          </Toolbar>
        </AppBar> */}
          </React.Fragment>
          {this.state.selectedPost !== null && (
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.state.postItemOpen}
              onClose={this.handlePostItemClose}
            >
              <div className={classes.paper_big}>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <img
                      src={this.state.selectedPost.person}
                      width="100%"
                      // alt={this.state.selectedPost.caption.text.split("\n")[0]}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Grid
                      container
                      spacing={3}
                      justify="flex-start"
                      alignItems="center"
                    >
                      {/* <Grid item>
                      <Avatar
                        src={this.state.selectedPost.user.profile_picture}
                        alt={this.state.selectedPost.user.username}
                      />
                    </Grid> */}
                      <Grid item>
                        <Typography variant="subtitle2">
                          {this.state.selectedPost.primary}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Divider light />
                    <Grid
                      container
                      spacing={3}
                      justify="flex-start"
                      alignItems="center"
                    >
                      <Grid item>
                        <Typography variant="caption">
                          {this.state.selectedPost.secondary}
                        </Typography>
                      </Grid>
                    </Grid>
                    {/* <Grid
                    container
                    spacing={3}
                    justify="flex-start"
                    alignItems="center"
                  >
                    <Grid item>
                      {(this.state.selectedPost.tags || []).map((tag, i) => {
                        return (
                          <Typography variant="caption" color="primary">
                            {" "}
                            #{tag}
                          </Typography>
                        );
                      })}
                    </Grid>
                  </Grid> */}

                    <Grid
                      container
                      spacing={1}
                      justify="flex-start"
                      alignItems="center"
                    >
                      <Grid item className="comments-min-height">
                        {(this.state.selectedPost.comments.data || []).map(
                          (comment, i) => {
                            return (
                              <Typography
                                key={comment.id}
                                variant="caption"
                                display="block"
                              >
                                <strong>Me :</strong> {comment.comment_value}
                              </Typography>
                            );
                          }
                        )}
                      </Grid>
                    </Grid>

                    {/* <Grid
                    container
                    spacing={1}
                    justify="flex-start"
                    alignItems="center"
                  >
                    <Grid item>
                      <Favorite
                        className={
                          this.state.selectedPost.user_has_liked
                            ? "redColor"
                            : "greyColor"
                        }
                        onClick={this.likesClickHandler}
                      />
                    </Grid>
                    <Grid item>
                      <Typography variant="caption">
                        {this.state.selectedPost.likes.count} likes
                      </Typography>
                    </Grid>
                  </Grid> */}

                    <Grid
                      container
                      spacing={2}
                      justify="flex-start"
                      alignItems="center"
                    >
                      <Grid item>
                        <FormControl className="formControl">
                          <InputLabel htmlFor="addcomment">Replay </InputLabel>
                          <Input
                            id="addcomment"
                            type="text"
                            onChange={this.inputAddCommentChangeHandler}
                            value={this.state.addNewComment}
                          />
                        </FormControl>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={this.addCommentClickHandler}
                        >
                          ADD
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </Modal>
          )}
        </Container>
      </div>
    );
  }
  handlePostClickHandler = (_id, _index) => {
    let _userPostItems = this.state.userPosts;
    this.setState({
      selectedPost: _userPostItems[_index],
      selectedIndex: _index,
      postItemOpen: true,
      addNewComment: ""
    });
  };
  handlePostItemClose = () => {
    this.setState({
      selectedPost: null,
      postItemOpen: false,
      selectedIndex: -1
    });
  };
  inputAddCommentChangeHandler = e => {
    this.setState({ addNewComment: e.target.value });
  };

  /**
   * @memberof Profile
   * @description Adding new comments to post
   */
  addCommentClickHandler = () => {
    if (this.state.addNewComment === "") {
      return;
    } else {
      let _selectedPostItem = this.state.selectedPost;
      _selectedPostItem.comments["data"] =
        _selectedPostItem.comments["data"] || [];
      _selectedPostItem.comments["data"].push({
        id: _selectedPostItem.comments["data"].length + 1,
        comment_by: this.state.username,
        comment_value: this.state.addNewComment
      });

      let _userPosts = this.state.userPosts;
      const _selectedIndex = this.state.selectedIndex;
      _userPosts[_selectedIndex] = _selectedPostItem;

      this.setState({
        selectedPost: _selectedPostItem,
        userPosts: _userPosts,
        addNewComment: ""
      });
    }
  };
}

export default withStyles(useStyles)(Messages);
