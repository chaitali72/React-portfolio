import React, { Component } from "react";

export class SingleProj extends Component {
  state = {};

  render() {
    return (
      <div className="col-lg-8">
        <div className="card bg-light mb-3 cardproject">
          <br />
          <div className="card-body">
            <h5 className="catd-title">{this.props.title}</h5>
            <p className="card-desc">{this.props.techstack}</p>

            <a href={this.props.website} className="btn btn-primary mr-3">
              website
            </a>
            <a href={this.props.github} className="btn btn-secondary">
              Github
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleProj;
