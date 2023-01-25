import React, { Component } from 'react';
import User from './components/User.js';
import Experience from './components/Experience.js';
import Education from './components/Education.js';
import './App.css';

// Requirement
// Section to add name, email, phone no
// Section to add education (School name, study title, date of study)
// Section to add experience (company name, position, main tasks, date from ~ date end)
// Include edit and form submit button for all 3 section above

class App extends Component {
  constructor() {
    super();
    this.state = {
      editUser: false,
      userDetails: {
        name: 'NQW',
        title: 'In - Progress',
        phone: '+6018 - 777 8888',
        email: 'GGWP@gmail.com',
        location: 'KL, Malaysia',
      },
      jobHistory: [
        {
          title: 'Graduate Engineer',
          company: 'Alfa Laval',
          start: '2019',
          end: '2020',
        },
      ],
      eduHistory: [
        {
          qualification: 'Chem MEng',
          provider: 'UNMC',
          start: '2014',
          end: '2018',
        },
      ],
      searchfield: '',
    };
  }

  // setState for editUser (Alternate value between true & false)
  // edit() {
  //   console.log('EDIT MODE');
  // if (this.setState.editUser) {
  //   this.setState({
  //     editUser: false,
  //   });
  // } else {
  //   this.setState({
  //     editUser: true,
  //   });
  // }
  // }

  render() {
    const { editUser, userDetails } = this.state;
    return (
      <div className="md:w-4/5 md:h-screen md:border-2 md:border-black my-0 mx-auto ">
        {/* <User edit={editUser} input={userDetails} /> */}
        <User />
        <Experience />
        <Education />
      </div>
    );
  }
}

export default App;
