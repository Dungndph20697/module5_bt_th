import React, { Component } from "react";
import Header from "./header";
import Content from "./content";
import Cooter from "./footer";
export default class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lstStudents: [
        { name: "Nguyen Van A", phone: "0123456789", email: "a@gmail.com" },
        { name: "Tran Thi B", phone: "0987654321", email: "b@gmail.com" },
        { name: "Le Van C", phone: "0112233445", email: "c@gmail.com" },
      ],
      showModal: false,
    };
  }

  showModalAdd = () => {
    this.setState({ showModal: true });
  };

  hideModalAdd = () => {
    this.setState({ showModal: false });
  };

  addStudent = (newStudent) => {
    this.setState((prevState) => ({
      lstStudents: [...prevState.lstStudents, newStudent],
      showModal: false, 
    }));
  };

  render() {
    return (
      <>
        <Header />
        <Content
          lstStudents={this.state.lstStudents}
          showModalAdd={this.showModalAdd}
          showModal={this.state.showModal}
          hideModalAdd={this.hideModalAdd}
          addStudent={this.addStudent}
        />
        <Cooter />
      </>
    );
  }
}
