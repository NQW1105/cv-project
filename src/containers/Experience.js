import React, { Component } from 'react';
import Job from '../components/Job';
import JobForm from '../components/JobForm';
import EditJob from '../components/EditJob';

class Experience extends Component {
  constructor() {
    super();
    this.state = {
      edit: false,
      jobForm: false,
      counter: 1,
      // Reset this to 0 when jobList is empty
      jobList: [
        {
          key: 0,
          title: 'Project Engineer',
          description: 'Not happy in current working environment',
          company: 'SCA',
          start: '2021',
          end: '2023',
        },
      ],
    };
  }

  upCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  editJob = () => {
    this.state.edit
      ? this.setState({ edit: false })
      : this.setState({ edit: true });
  };

  addJob = () => {
    this.state.jobForm
      ? this.setState({
          jobForm: false,
        })
      : this.setState({
          jobForm: true,
        });
  };

  closeForm = () => {
    this.setState({ jobForm: false });
  };

  createItem = (event) => {
    event.preventDefault();

    const newKey = this.state.counter;
    const newTitle = event.target[0].value;
    const newDescription = event.target[4].value;
    const newCompany = event.target[2].value;
    const newStart = event.target[3].value;
    const newEnd = event.target[5].value;

    const newObject = {
      key: newKey,
      title: newTitle,
      description: newDescription,
      company: newCompany,
      start: newStart,
      end: newEnd,
    };

    this.upCounter();
    this.setState({
      jobList: this.state.jobList.concat(newObject),
    });

    // Features to add-on:
    // Empty string in input should prevent form submit and prompt message
    // Reorder items based on year they ended
  };

  delJob = (event) => {
    const toExclude = parseInt(event.target.dataset.key);
    this.setState({
      jobList: this.state.jobList.filter((item) => {
        return item.key !== toExclude;
      }),
    });
  };

  updateTitle = (event) => {
    const index = parseInt(event.target.dataset.key);
    const updatedTitle = event.target.value;

    let modifiedObj = this.state.jobList[index];
    Object.keys(modifiedObj).forEach((key) => {
      if (key === 'title') {
        modifiedObj[key] = updatedTitle;
      }
    });

    this.setState({
      jobList: this.state.jobList.map((item) => {
        if (item.key === index) {
          item = modifiedObj;
        }
        return item;
      }),
    });
  };

  updateDescription = (event) => {
    console.log(event);
    const index = parseInt(event.target.dataset.key);
    const updatedDescription = event.target.value;

    let modifiedObj = this.state.jobList[index];
    Object.keys(modifiedObj).forEach((key) => {
      if (key === 'description') {
        modifiedObj[key] = updatedDescription;
      }
    });

    this.setState({
      jobList: this.state.jobList.map((item) => {
        if (item.key === index) {
          item = modifiedObj;
        }
        return item;
      }),
    });
  };

  updateCompany = (event) => {
    const index = parseInt(event.target.dataset.key);
    const updatedCompany = event.target.value;

    let modifiedObj = this.state.jobList[index];
    Object.keys(modifiedObj).forEach((key) => {
      if (key === 'company') {
        modifiedObj[key] = updatedCompany;
      }
    });

    this.setState({
      jobList: this.state.jobList.map((item) => {
        if (item.key === index) {
          item = modifiedObj;
        }
        return item;
      }),
    });
  };

  updateStart = (event) => {
    const index = parseInt(event.target.dataset.key);
    const updatedStart = event.target.value;

    let modifiedObj = this.state.jobList[index];
    Object.keys(modifiedObj).forEach((key) => {
      if (key === 'start') {
        modifiedObj[key] = updatedStart;
      }
    });

    this.setState({
      jobList: this.state.jobList.map((item) => {
        if (item.key === index) {
          item = modifiedObj;
        }
        return item;
      }),
    });
  };

  updateEnd = (event) => {
    const index = parseInt(event.target.dataset.key);
    const updatedEnd = event.target.value;

    let modifiedObj = this.state.jobList[index];
    Object.keys(modifiedObj).forEach((key) => {
      if (key === 'end') {
        modifiedObj[key] = updatedEnd;
      }
    });

    this.setState({
      jobList: this.state.jobList.map((item) => {
        if (item.key === index) {
          item = modifiedObj;
        }
        return item;
      }),
    });
  };

  render() {
    if (this.state.edit) {
      // Render EditJob component
      return (
        <div className="py-5 px-10 group">
          <div className="flex gap-2 items-center">
            <h2 className="text-xl font-semibold text-slate-700">
              Work Experience
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-pencil-square w-5 fill-gray-800 hover:cursor-pointer hidden group-hover:block"
              viewBox="0 0 16 16"
              onClick={this.editJob}
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                fillRule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
              />
            </svg>
            <button
              className="add-btn font-semibold hidden group-hover:block"
              onClick={this.addJob}
            >
              ADD
            </button>
          </div>
          <hr className="h-1 bg-gray-400 mb-3"></hr>

          <div>
            {this.state.jobList.map((item) => {
              return (
                <EditJob
                  key={item.key}
                  job={item}
                  delJob={this.delJob}
                  editJob={this.editJob}
                  updateTitle={this.updateTitle}
                  updateDescription={this.updateDescription}
                  updateCompany={this.updateCompany}
                  updateStart={this.updateStart}
                  updateEnd={this.updateEnd}
                ></EditJob>
              );
            })}
          </div>

          <JobForm
            status={this.state.jobForm}
            createItem={this.createItem}
            closeForm={this.closeForm}
          ></JobForm>
        </div>
      );
    } else {
      // Render Job component
      return (
        <div className="py-5 px-10 group">
          <div className="flex gap-2 items-center">
            <h2 className="text-xl font-semibold text-slate-700">
              Work Experience
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-pencil-square w-5 fill-gray-800 hover:cursor-pointer hidden group-hover:block"
              viewBox="0 0 16 16"
              onClick={this.editJob}
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                fillRule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
              />
            </svg>
            <button
              className="add-btn font-semibold hidden group-hover:block"
              onClick={this.addJob}
            >
              ADD
            </button>
          </div>
          <hr className="h-1 bg-gray-400 mb-3"></hr>

          <div>
            {this.state.jobList.map((item) => {
              return <Job key={item.key} job={item} delJob={this.delJob}></Job>;
            })}
          </div>

          <JobForm
            status={this.state.jobForm}
            createItem={this.createItem}
            closeForm={this.closeForm}
          ></JobForm>
        </div>
      );
    }
  }
}

export default Experience;
