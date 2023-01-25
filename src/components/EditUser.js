import React, { Component } from 'react';

class EditUser extends Component {
  render() {
    // console.log(this.props);
    const { name, title, phone, email, location } = this.props.userInput;

    return (
      <form className="flex justify-between items-center bg-black text-neutral-50 py-5 px-10">
        <div>
          <input
            type="text"
            className="text-6xl font-semibold bg-black text-neutral-50 w-full"
            autoFocus
            value={name}
          ></input>
          <div className="flex gap-2">
            <input
              type="text"
              className="text-3xl pt-2 bg-black text-neutral-50 w-full"
              value={title}
            ></input>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-pencil-square w-5 fill-netural-50 hover:cursor-pointer"
              viewBox="0 0 16 16"
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                fillRule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 fill-neutral-50">
            <svg
              className="w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>phone</title>
              <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
            </svg>
            <input
              type="text"
              className="text-base font-semibold bg-black text-neutral-50"
              value={phone}
            ></input>
          </div>
          <div className="flex items-center gap-2 fill-neutral-50">
            <svg
              className="w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>email</title>
              <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
            </svg>
            <input
              type="text"
              className="text-base font-semibold bg-black text-neutral-50"
              value={email}
            ></input>
          </div>
          <div className="flex items-center gap-2 fill-neutral-50">
            <svg
              className="w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>map-marker</title>
              <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
            </svg>
            <input
              type="text"
              className="text-base font-semibold bg-black text-neutral-50"
              value={location}
            ></input>
          </div>
        </div>
      </form>
    );
  }
}

export default EditUser;
