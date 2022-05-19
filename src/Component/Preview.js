import React, { Component } from "react";
import "./Preview.css";
class Preview extends Component {
  state = {
    Name: "",
    Department: "",
    rating: "",
    employees: [],
  };
  changehandler = (e) => {
    
    this.setState({ [e.target.name]: e.target.value });
     };
  submithandler = (e) => {
    e.preventDefault();

    const emptyobj = {
      Name: this.state.Name,
      Department: this.state.Department,
      rating: this.state.rating,
    };

    const arr = this.state.employees;
    arr.push(emptyobj);
    this.setState({ employees: arr });
  };

  render() {
    return (
      <>
        <div >
          <h1 className="main-h1">EMPLOYEE FEEDBACK FORM</h1>
          <div className="container">
          <form action="">
            <label className="main main1" htmlfor="Name">
              Name:
            </label>
            <input
              type="text"
              className="main_name"
              name="Name"
              id="Name"
              required
              value={this.state.Name}
              onChange={this.changehandler}
            />
            <br />
            <label className="main main2" for="Department">
              Department:
            </label>
            <input
              type="text"
              className="main_name"
              name="Department"
              id="Department"
              required
              value={this.state.Department}
              onChange={this.changehandler.bind(this)}
            />
            <br />
            <label className="main main3" for="rating">
              Rating:
            </label>
            <input
              type="number"
              className="main_name"
              name="rating"
              id="rating"
              required
              value={this.state.rating}
              onChange={this.changehandler}
            />
            <br />
            <button className="submit1" onClick={this.submithandler}>
             <b>Submit</b>
            </button>
          </form>
        </div>


        <div className="result-mainpart">
          {this.state.employees.map((value, index) => {
            return (
              
                <div className="result-popup">
                  {index + 1}. Name :<span>{value.Name}</span> | Department :
                  <span>{value.Department}</span> | Rating :
                  <span>{value.rating}</span>
                </div>
            
            );
          })}
        </div>
        </div>
      </>
    );
  }
}
export default Preview;