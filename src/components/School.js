import React, { Component } from 'react';

class School extends Component {
  // constructor() {
  //   super();
  //   this.delStudy = this.delStudy.bind(this);
  // }

  // delStudy(event) {
  //   // console.log(event);
  //   // Remove from array then render will update
  //   console.log(event.target.parentElement.parentElement);
  // }

  render() {
    const { key, qualification, provider, start, end } = this.props.education;

    return (
      <div className="flex justify-between pb-2 relative">
        <div className="flex gap-2 item-center">
          <h3 className="font-semibold">{qualification}</h3>
          <button data-key={key} onClick={this.props.delEducation}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-trash-fill w-5 hidden group-hover:block pointer-events-none"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
            </svg>
          </button>
        </div>
        <div className="flex">
          <h3 className="pr-2 border-r-2 border-r-gray-300">{provider}</h3>
          <h3 className="pl-2 font-semibold">
            {start} - {end}
          </h3>
        </div>
      </div>
    );
  }
}

export default School;
