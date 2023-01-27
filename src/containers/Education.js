import React, { Component } from 'react';
import School from '../components/School';
import SchoolForm from '../components/SchoolForm';
import EditSchool from '../components/EditSchool';

class Education extends Component {
  constructor() {
    super();
    this.state = {
      edit: false,
      educationForm: false,
      counter: 2,
      // Reset this to 0 when educationList is empty
      educationList: [
        {
          key: 0,
          qualification: 'Chem MEng',
          provider: 'UNMC',
          start: '2014',
          end: '2018',
        },
        {
          key: 1,
          qualification: 'A-Level',
          provider: 'TARC',
          start: '2012',
          end: '2013',
        },
      ],
    };

    this.upCounter = this.upCounter.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.createItem = this.createItem.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.delEducation = this.delEducation.bind(this);
    this.editEducation = this.editEducation.bind(this);
    this.updateQualification = this.updateQualification.bind(this);
    this.updateProvider = this.updateProvider.bind(this);
    this.updateStart = this.updateStart.bind(this);
    this.updateEnd = this.updateEnd.bind(this);
  }

  upCounter() {
    this.setState({ counter: this.state.counter + 1 });
  }

  addEducation() {
    this.state.educationForm
      ? this.setState({
          educationForm: false,
        })
      : this.setState({
          educationForm: true,
        });
  }

  createItem(event) {
    event.preventDefault();

    const newKey = this.state.counter;
    const newQualification = event.target[0].value;
    const newProvider = event.target[2].value;
    const newStart = event.target[3].value;
    const newEnd = event.target[4].value;

    const newObject = {
      key: newKey,
      qualification: newQualification,
      provider: newProvider,
      start: newStart,
      end: newEnd,
    };

    this.upCounter();
    this.setState({
      educationList: this.state.educationList.concat(newObject),
    });

    // Features to add-on:
    // Empty string in input should prevent form submit and prompt message
    // Reorder items based on year they ended
  }

  closeForm() {
    this.setState({ educationForm: false });
  }

  delEducation(event) {
    const toExclude = parseInt(event.target.dataset.key);
    this.setState({
      educationList: this.state.educationList.filter((item) => {
        return item.key !== toExclude;
      }),
    });
  }

  editEducation() {
    this.state.edit
      ? this.setState({ edit: false })
      : this.setState({ edit: true });
  }

  updateQualification(event) {
    const index = parseInt(event.target.dataset.key);
    const updatedQualification = event.target.value;

    let modifiedObj = this.state.educationList[index];
    Object.keys(modifiedObj).forEach((key) => {
      if (key === 'qualification') {
        modifiedObj[key] = updatedQualification;
      }
    });

    this.setState({
      educationList: this.state.educationList.map((item) => {
        if (item.key === index) {
          item = modifiedObj;
        }
        return item;
      }),
    });
  }

  updateProvider(event) {
    const index = parseInt(event.target.dataset.key);
    const updatedProvider = event.target.value;

    let modifiedObj = this.state.educationList[index];
    Object.keys(modifiedObj).forEach((key) => {
      if (key === 'provider') {
        modifiedObj[key] = updatedProvider;
      }
    });

    this.setState({
      educationList: this.state.educationList.map((item) => {
        if (item.key === index) {
          item = modifiedObj;
        }
        return item;
      }),
    });
  }

  updateStart(event) {
    const index = parseInt(event.target.dataset.key);
    const updatedStart = event.target.value;

    let modifiedObj = this.state.educationList[index];
    Object.keys(modifiedObj).forEach((key) => {
      if (key === 'start') {
        modifiedObj[key] = updatedStart;
      }
    });

    this.setState({
      educationList: this.state.educationList.map((item) => {
        if (item.key === index) {
          item = modifiedObj;
        }
        return item;
      }),
    });
  }

  updateEnd(event) {
    const index = parseInt(event.target.dataset.key);
    const updatedEnd = event.target.value;

    let modifiedObj = this.state.educationList[index];
    Object.keys(modifiedObj).forEach((key) => {
      if (key === 'end') {
        modifiedObj[key] = updatedEnd;
      }
    });

    this.setState({
      educationList: this.state.educationList.map((item) => {
        if (item.key === index) {
          item = modifiedObj;
        }
        return item;
      }),
    });
  }

  render() {
    if (this.state.edit) {
      // Render EditSchool component
      return (
        <div className="pt-0 px-10 group">
          <div className="flex gap-2 items-center pb-1">
            <h2 className="text-xl font-semibold text-slate-700">Education</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-pencil-square w-5 fill-gray-800 hover:cursor-pointer hidden group-hover:block"
              viewBox="0 0 16 16"
              onClick={this.editEducation}
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                fillRule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
              />
            </svg>
            <button
              className="add-btn font-semibold hidden group-hover:block"
              onClick={this.addEducation}
            >
              ADD
            </button>
          </div>
          <hr className="h-1 bg-gray-400 mb-3"></hr>

          <div>
            {this.state.educationList.map((item) => {
              return (
                <EditSchool
                  key={item.key}
                  education={item}
                  delEducation={this.delEducation}
                  editEducation={this.editEducation}
                  updateQualification={this.updateQualification}
                  updateProvider={this.updateProvider}
                  updateStart={this.updateStart}
                  updateEnd={this.updateEnd}
                ></EditSchool>
              );
            })}
          </div>
          <SchoolForm
            status={this.state.educationForm}
            createItem={this.createItem}
            closeForm={this.closeForm}
          ></SchoolForm>
        </div>
      );
    } else {
      // Render School component
      return (
        <div className="pt-0 px-10 group">
          <div className="flex gap-2 items-center pb-1">
            <h2 className="text-xl font-semibold text-slate-700">Education</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-pencil-square w-5 fill-gray-800 hover:cursor-pointer hidden group-hover:block"
              viewBox="0 0 16 16"
              onClick={this.editEducation}
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                fillRule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
              />
            </svg>
            <button
              className="add-btn font-semibold hidden group-hover:block"
              onClick={this.addEducation}
            >
              ADD
            </button>
          </div>
          <hr className="h-1 bg-gray-400 mb-3"></hr>
          <div>
            {this.state.educationList.map((item) => {
              return (
                <School
                  key={item.key}
                  education={item}
                  delEducation={this.delEducation}
                ></School>
              );
            })}
          </div>
          <SchoolForm
            status={this.state.educationForm}
            createItem={this.createItem}
            closeForm={this.closeForm}
          ></SchoolForm>
        </div>
      );
    }
  }
}

export default Education;
