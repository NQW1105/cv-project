import React, { Component } from 'react';

class Job extends Component {
  render() {
    // Pass in props to create job DOM
    return (
      <div className="pb-2">
        <div className="flex justify-between">
          <h3 className="font-semibold">props.title</h3>
          <div className="flex">
            <h3 className="pr-2 border-r-2 border-r-gray-300">props.company</h3>
            <h3 className="pl-2 font-semibold">
              props.startYear - props.endYear
            </h3>
          </div>
        </div>
        <p>props.description</p>
      </div>
    );
  }
}

export default Job;
