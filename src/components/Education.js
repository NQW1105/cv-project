import React, { Component } from 'react';
import School from './School';

class Education extends Component {
  constructor() {
    super();
    this.editStudies = this.editStudies.bind(this);
    this.delStudy = this.delStudy.bind(this);
  }

  editStudies(event) {
    console.log(event);
    // Create form to edit details
  }

  // Method to remove study list
  delStudy(event) {
    console.log(event);
  }

  render() {
    const eduList = {
      degree: 'Chemical MEng',
      school: 'UNMC',
      begin: '2014',
      end: '2018',
    };
    // map the array, then create School components accordingly

    return (
      <div className="pt-0 px-10 group">
        <div className="flex gap-2 items-center">
          <h2 className="text-xl font-semibold text-slate-700">Education</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-pencil-square w-5 fill-gray-800 hover:cursor-pointer"
            viewBox="0 0 16 16"
            onClick={this.editStudies}
          >
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path
              fillRule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
            />
          </svg>
        </div>
        <hr className="h-1 bg-gray-400 mb-3"></hr>

        {/* Loop through School component and create list */}
        {/* Pass props to School component */}
        <School education={eduList}></School>
        <button className="edit-btn hidden group-hover:block">Add</button>

        {/* <div className="flex justify-between pb-2 relative">
          <div className="flex gap-2 item-center">
            <h3 className="font-semibold">Chemical MEng</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-trash-fill w-5 cursor-pointer"
              viewBox="0 0 16 16"
              onClick={this.delStudy}
            >
              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
            </svg>
          </div>
          <div className="flex">
            <h3 className="pr-2 border-r-2 border-r-gray-300">
              University of Nottingham, Malaysia
            </h3>
            <h3 className="pl-2 font-semibold">2014 - 2018</h3>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Education;
