import React, { Component, Fragment } from "react";
import store from "../../Store";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import UsersActions from "../../Store/users/reducer";

import { Container, Post, BoxTitle, Title } from "./styles";
import PageTitle from "../../Components/PageTitle";

class Posts extends Component {
  state = {
    user: {},
    store: false
  };

  componentDidMount() {
    this.loadPost();
  }

  loadPost = async () => {
    const { id } = this.props.match.params;

    //Se esta no store, busca dele
    if (store.getState().users.data.length > 0) {
      const user = await store
        .getState()
        .users.data.filter(user => user.id == id);
      await user.map(user => console.log("user", user));
      this.setState({ user: user[0], store: false });
    } else {
      //caso não estiver no store busca na api
      const { userRequest } = this.props;
      this.setState({ store: true });
      userRequest("", id);
    }
  };

  render() {
    const { user, store } = this.state;
    const { users } = this.props;
    const { data, isLoading } = users;
    const posts = store ? data[0] : user;

    return (
      <Fragment>
        <PageTitle title="Posts" />

        <Container>
          {!isLoading && posts.post
            ? posts.post.map(post => (
                <Post key={post.id}>
                  <BoxTitle>
                    <Title>Title:</Title>
                    <p>{post.title}</p>
                  </BoxTitle>
                  {post.body}
                </Post>
              ))
            : null}
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(UsersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
