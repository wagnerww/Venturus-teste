import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import UsersActions from "../../Store/users/reducer";

import { Table, LinhaCabecalho, LinhaCorpo } from "./styles";

import PageTitle from "../../Components/PageTitle";
import InputIcon from "../../Components/InputIcon";

class Users extends Component {
  state = {
    oldSearch: ""
  };

  async componentDidMount() {
    const { userRequest } = this.props;
    userRequest();
  }

  handleUpdate = user => {
    const { userSetUpdate } = this.props;
    userSetUpdate(user);
  };

  handleChange(e, props) {
    const { value } = e.target;
    const { userRequest } = props;
    this.setState({ oldSearch: value });
    if (value.length >= 3) {
      userRequest(value);
    } else {
      //Controle para evitar muitas requisições
      if (this.state.oldSearch.length >= 1) {
        userRequest();
      }
    }
  }

  search = () => (
    <InputIcon
      onChange={e => this.handleChange(e, this.props)}
      col={5}
      placeholder="Filter user name"
    />
  );

  render() {
    const { handleUpdate } = this;
    const { users } = this.props;
    const { data } = users;
    return (
      <Fragment>
        <PageTitle title="Users" filters={this.search} />

        <Table>
          <thead>
            <LinhaCabecalho>
              <td>Username</td>
              <td>Name</td>
              <td>E-mail</td>
              <td>City</td>
              <td>Ride in group</td>
              <td>Day of the week</td>
              <td>Posts</td>
              <td>Albums</td>
              <td>Photos</td>
              <td />
            </LinhaCabecalho>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <LinhaCorpo key={index} onClick={() => handleUpdate(user)}>
                <td>{user.username}</td>
                <td>{user.name}</td>
                <td>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td>
                  <a
                    href={`http://maps.google.com/maps?q=${
                      user.address.geo.lat
                    },${user.address.geo.lng}`}
                    target="_blank"
                  >
                    {user.address.city}
                  </a>
                </td>
                <td>Always</td>
                <td>Every day</td>
                <td>
                  <Link to={`/posts/${user.id}`}>{user.post.length}</Link>
                </td>
                <td>
                  <a>{user.albums.length}</a>
                </td>
                <td>{user.photos.length}</td>
                <td>
                  <i className="far fa-trash-alt" />
                </td>
              </LinhaCorpo>
            ))}
          </tbody>
        </Table>
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
)(Users);
