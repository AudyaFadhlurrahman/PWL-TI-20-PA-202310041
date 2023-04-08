import React, { Component } from "react";
import Layout from "./Layout";

class Widget1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "My Apps",
    };
  }

  render() {
    return (
      <Layout title={this.state.title}>
        <form method="post" autoComplete="off" className="form w-100">
          <div className="text-center mb-10">
            <h3 className="text-dark mb-3">Composition</h3>
            <div className="text-secondary fw-bold fs-5">
              Please fill up this form with correctly
            </div>
          </div>

          <div className="fv-row mb-10 fv-plugins-icon-container">
            <label className="form-label fs-6 fw-bolder text-dark">
              Type the title of this web
            </label>
            <input
              type="text"
              name="title"
              placeholder="Type here..."
              className="form-control form-control-lg form-control-solid"
              defaultValue={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
            />
          </div>

          <div className="text-center mt-4">
            <button type="button" className="btn btn-md btn-primary w-100 mb-2">
              Submit
            </button>
          </div>
        </form>
      </Layout>
    );
  }
}

export default Widget1;
