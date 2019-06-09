import React, { Component, Fragment } from "react";

import { Container } from "./styles";
import BreadCrumpItem from "../BreadCrumpItem";

const bread = [
  {
    page: "/",
    name: "Users",
    childrens: [{ page: "/posts/:id", name: "Posts" }]
  }
];

export default class BreadCrump extends Component {
  render() {
    return (
      <Container>
        <i className="fas fa-home" />

        {bread.map((pages, index) => (
          <Fragment key={index}>
            <BreadCrumpItem key={index} title={pages.name} />
            {pages.childrens.map((childrens, i) => {
              if (
                this.props.router.children.props.match.path === childrens.page
              ) {
                return (
                  <BreadCrumpItem
                    key={`${index}.${i}`}
                    title={childrens.name}
                  />
                );
              }
            })}
          </Fragment>
        ))}
      </Container>
    );
  }
}
