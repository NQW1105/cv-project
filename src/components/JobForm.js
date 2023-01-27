import React, { Component } from 'react';

class JobForm extends Component {
  render() {
    if (this.props.status) {
      return (
        <form onSubmit={this.props.createItem}>
          <div className="flex justify-between w-full">
            <div className="flex items-center gap-1">
              <input
                type="text"
                className="bg-gray-300 p-1 text-sm font-medium rounded border-2 border-gray-500"
                placeholder="Job Title..."
              ></input>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-trash-fill h-5 cursor-pointer hover:fill-red-700"
                viewBox="0 0 16 16"
                onClick={this.props.closeForm}
              >
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
              </svg>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-check-square-fill h-8 cursor-pointer hover:fill-green-800"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
                </svg>
              </button>
            </div>

            <div className="flex justify-end">
              <input
                type="text"
                className="bg-gray-300 p-1 text-sm font-medium rounded border-2 border-gray-500 w-6/12 md:w-4/12"
                placeholder="Company..."
              ></input>
              <span className="mx-2 border-r-2 border-r-gray-300"></span>
              <input
                type="text"
                className="bg-gray-300 p-1 text-sm font-medium rounded border-2 border-gray-500 w-2/12 md:w-1/12"
                placeholder="Start"
              ></input>
              <span className="mx-1 font-semibold"> - </span>
              <input
                type="text"
                className="bg-gray-300 p-1 text-sm font-medium rounded border-2 border-gray-500 w-2/12 md:w-1/12"
                placeholder="End"
              ></input>
            </div>
          </div>
          <textarea
            className="bg-gray-300 mt-2 p-1 text-sm font-medium rounded border-2 border-gray-500 w-full"
            placeholder="Role/Job Responsibility..."
          ></textarea>
        </form>
      );
    } else {
      return null;
    }
  }
}

export default JobForm;
