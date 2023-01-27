import React, { Component } from 'react';
import Applicant from '../components/Applicant';
import EditApplicant from '../components/EditApplicant';

class User extends Component {
  constructor() {
    super();
    this.state = {
      editUser: false,
      name: 'NQW',
      title: 'Future Developer',
      phone: '+6018 - 777 8888',
      email: 'GGWP@gmail.com',
      location: 'KL, Malaysia',
    };
    this.edit = this.edit.bind(this);
    // this.nameUpdate = this.nameUpdate.bind(this);
  }

  edit() {
    this.state.editUser
      ? this.setState({ editUser: false })
      : this.setState({ editUser: true });
  }

  // nameUpdate(event) {
  //   this.setState({ name: event.target.value });
  // }
  nameUpdate = (event) => {
    this.setState({ name: event.target.value });
  };

  titleUpdate = (event) => {
    this.setState({ title: event.target.value });
  };

  phoneUpdate = (event) => {
    this.setState({ phone: event.target.value });
  };

  emailUpdate = (event) => {
    this.setState({ email: event.target.value });
  };

  locationUpdate = (event) => {
    this.setState({ location: event.target.value });
  };

  render() {
    if (this.state.editUser) {
      return (
        <div className="flex bg-black text-neutral-50 relative group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-pencil-square h-5 fill-netural-50 hover:cursor-pointer absolute top-1/2 -translate-y-1/2 pl-2.5 hidden group-hover:block"
            viewBox="0 0 16 16"
            onClick={this.edit}
          >
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path
              fillRule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
            />
          </svg>
          <EditApplicant
            applicantDetails={this.state}
            nameUpdate={this.nameUpdate}
            titleUpdate={this.titleUpdate}
            emailUpdate={this.emailUpdate}
            phoneUpdate={this.phoneUpdate}
            locationUpdate={this.locationUpdate}
          ></EditApplicant>
        </div>
      );
    } else {
      return (
        <div className="flex bg-black text-neutral-50 relative group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-pencil-square h-5 fill-netural-50 hover:cursor-pointer absolute top-1/2 -translate-y-1/2 pl-2.5 hidden group-hover:block"
            viewBox="0 0 16 16"
            onClick={this.edit}
          >
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path
              fillRule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
            />
          </svg>
          <Applicant applicantDetails={this.state} />
        </div>
      );
    }
  }
}

export default User;
