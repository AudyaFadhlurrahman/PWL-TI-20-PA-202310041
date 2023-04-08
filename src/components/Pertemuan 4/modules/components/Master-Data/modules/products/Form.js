import React, { useState } from "react";
import CallAxios from "../../../Library/CallAxios";

export function Form() {
  const [postData, setPostData] = useState({
    name: "",
    description: "",
    stock: 0,
    price: "",
    is_active: 1,
  });

  const submitForm = (e) => {
    e.preventDefault();
    const param = {
      method: "POST",
      url: "http://localhost:8080/api/products",
      headers: { "Content-Type": "application.json" },
      data: postData,
    };
    CallAxios(param).then((response) => {
      if (response.error) {
        openModal({ header: "error", message: response.error });
      }
    });
  };

  return (
    <div className="card bg-white">
      <div className="card-header border-0 py-3">
        <div className="card-title d-flex flex-column">
          <h3 className="text-dark">Form Product</h3>
          <p className="text-muted fs-7">Please fill up the form with correctly</p>
        </div>
      </div>
      <div className="card-body pt-0">
        <form method="post" autoComplete="off" id="form-product">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" name="name" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea name="desc" className="form-control"></textarea>
          </div>
          <div className="row">
            <div className="col-sm-12 col-lg-3">
              <div className="mb-3">
                <label className="form-label">Stock</label>
                <input type="number" name="name" className="form-control" />
              </div>
            </div>
            <div className="col-sm-12 col-lg-9">
              <div className="mb-3">
                <label className="form-label">Price</label>
                <div className="input-group">
                  <span className="input-group-text">Rp</span>
                  <input type="text" name="price" className="form-control" />
                </div>
              </div>
            </div>
          </div>

          <div className="text-end mt-3">
            <button className="btn btn-light" type="button">
              Cancel
            </button>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
