import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ClassList from '../ClassList/ClassList';
import axios from 'axios';

export default class Student extends Component {
  constructor(props) {
    super(props);

    // this.goBack = this.goBack.bind.this;
    this.state = {
      studentInfo: {}
    };
  }
  componentDidMount() {
    console.log(this.props.match.params.id);

    return axios
      .get(`http://localhost:3005/students/${this.props.match.params.id}`)
      .then(results => {
        console.log(results.data);
        this.setState({ studentInfo: results.data });
      });
    // console.log('state', this.state.studentInfo);
  }
  // componentDidMount() {
  //   return axios
  //     .get(`http://localhost:3005/students/${this.props.match.params.id}`)
  //     .then(results => {
  //       this.setState({
  //         studentInfo: results.data
  //       });
  //     });
  // }
  goBack() {
    console.log('hello???');
    this.props.history.goBack();
  }

  render() {
    console.log('this.props in student:', this.props);
    console.log('props in student:', this.props);
    console.log(this.state.studentInfo);
    return (
      <div className='box'>
        <div className='box'>
          <h1>Student:</h1>
          <h1>
            {this.state.studentInfo.first_name}
            {this.state.studentInfo.last_name}
          </h1>
          <h3>Grade: {this.state.studentInfo.grade}</h3>
          <h3>Email: {this.state.studentInfo.email}</h3>
        </div>
        {/* <Link to='/classlist' component={ClassList}> */}
        <button onClick={this.goBack}>Back</button>
        {/* </Link> */}
      </div>
    );
  }
}
