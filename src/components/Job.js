import React, { Component } from 'react';

class Job extends Component {
  render() {
    return (
      <div className="pb-2">
        <div className="flex justify-between">
          <div className="flex gap-2 item-center">
            <h3 className="font-semibold">{this.props.job.title}</h3>
            <button data-key={this.props.job.key} onClick={this.props.delJob}>
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
            <h3 className="pr-2 border-r-2 border-r-gray-300">
              {this.props.job.company}
            </h3>
            <h3 className="pl-2 font-semibold">
              {this.props.job.start} - {this.props.job.end}
            </h3>
          </div>
        </div>
        <p>{this.props.job.description}</p>
      </div>
    );
  }
}

export default Job;
