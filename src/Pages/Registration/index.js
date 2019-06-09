import React, { Component, Fragment } from "react";
import { withFormik, FieldArray } from "formik";
import * as Yup from "yup";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";

import UserActions from ".././../Store/users/reducer";

import InputForm from "../../Components/InputForm";
import ColumnForm from "../../Components/ColumnForm";
import Button from "../../Components/Button";
import { Column, Row } from "../../Styles/Flex";

import {
  FormGroup,
  ContainerForm,
  ContainerTitle,
  ContainerDays
} from "./styles";
import PageTitle from "../../Components/PageTitle";
import IconDescription from "../../Components/IconDescription";
import CheckBox from "../../Components/CheckBox";
import RadioButton from "../../Components/RadioButton";

const daysOfWeek = [
  { id: 1, name: "Sun" },
  { id: 2, name: "Mon" },
  { id: 3, name: "Tue" },
  { id: 4, name: "Wed" },
  { id: 5, name: "Thu" },
  { id: 6, name: "Fri" },
  { id: 7, name: "Sat" }
];

class Registration extends Component {
  handleResetForm = handleReset => {
    const { userSetUpdate } = this.props;
    userSetUpdate({});
    handleReset();
  };

  groupRide = (handleChange, values) => (
    <Fragment>
      <RadioButton
        descricao="Always"
        name="group"
        id="always"
        value="always"
        checked={values.group === "always"}
        onChange={handleChange}
      />
      <RadioButton
        descricao="Sometimes"
        name="group"
        id="sometimes"
        value="sometimes"
        checked={values.group === "sometimes"}
        onChange={handleChange}
      />
      <RadioButton
        descricao="Never"
        name="group"
        id="never"
        value="never"
        checked={values.group === "never"}
        onChange={handleChange}
      />
    </Fragment>
  );

  DaysOfWeek = values => (
    <FieldArray
      name="daysweek"
      render={arrDays => (
        <ContainerDays>
          {daysOfWeek.map((day, index) => (
            <CheckBox
              key={day.id}
              id={day.id}
              descricao={day.name}
              name="daysweek"
              values={values.daysweek}
              checked={values.daysweek.includes(day.id)}
              onChange={e => {
                this.handleCheck(e, day, arrDays, index);
              }}
            />
          ))}
        </ContainerDays>
      )}
    />
  );

  handleCheck = (e, day, arrDays, index) => {
    if (e.target.checked) arrDays.push(day.id);
    else {
      arrDays.remove(index);
    }
  };

  render() {
    const {
      handleChange,
      handleSubmit,
      errors,
      touched,
      handleReset,
      values
    } = this.props;

    return (
      <Fragment>
        <PageTitle title="Registration" />
        <ContainerTitle>
          <IconDescription
            icone="far fa-life-ring"
            titulo="Need help?"
            descricao="Lorem ipsum dolor sit amet, consectetur
adipisicing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua."
          />
          <IconDescription
            icone="fas fa-heartbeat"
            titulo="Why register?"
            descricao="Lorem ipsum dolor sit amet, consectetur
adipisicing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua."
          />
          <IconDescription
            icone="far fa-smile"
            titulo="What people are saying..."
            descricao="Lorem ipsum dolor sit amet, consectetur
adipisicing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua."
          />
        </ContainerTitle>
        <FormGroup onSubmit={handleSubmit} autoComplete="off">
          <ContainerForm>
            <InputForm
              label="Username"
              name="username"
              value={values.username}
              onChange={handleChange}
              errorView={
                errors.username && touched.username ? errors.username : ""
              }
              col={6}
            />
            <InputForm
              label="City"
              name="address.city"
              onChange={handleChange}
              value={values.address.city}
              description="optional"
              col={6}
            />
            <InputForm
              label="Name"
              name="name"
              value={values.name}
              onChange={handleChange}
              errorView={errors.name && touched.name ? errors.name : ""}
              col={6}
            />
            <ColumnForm
              col={6}
              label="Days of the week"
              component={() => this.DaysOfWeek(values)}
            />
            <InputForm
              label="E-mail"
              name="email"
              value={values.email}
              onChange={handleChange}
              errorView={errors.email && touched.email ? errors.email : ""}
              col={6}
            />
            <Column col={6}>
              <span>Rode in group?</span>
              <Row>{this.groupRide(handleChange, values)}</Row>
            </Column>

            <Button type="submit" Label="Save" />
            <Button
              tipo="secundary"
              type="button"
              Label="Discard"
              onClick={() => this.handleResetForm(handleReset)}
            />
          </ContainerForm>
        </FormGroup>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(UserActions, dispatch);

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withFormik({
    mapPropsToValues: props => {
      const { id, name, username, email, address } = props.users.userUpdate;
      const { city } = address ? address : "";

      return {
        id: id || 0,
        name: name || "",
        username: username || "",
        email: email || "",
        address: {
          city: city || "",
          geo: {
            lat: 0,
            lng: 0
          }
        },
        daysweek: [],
        group: "",
        post: [],
        albums: [],
        photos: []
      };
    },
    enableReinitialize: true,
    validateOnBlur: false,
    validateOnChange: false,

    validationSchema: Yup.object().shape({
      name: Yup.string().required("name is required!"),
      username: Yup.string().required("username is required!"),
      email: Yup.string().required("e-mail is required!")
    }),

    handleSubmit: (values, { resetForm, props }) => {
      const { userInsertOrUpdate, userSetUpdate } = props;
      userSetUpdate({});
      resetForm();
      userInsertOrUpdate(values);
    }
  })
)(Registration);
