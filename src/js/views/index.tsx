import React from 'react';

const Index = () => (
    <div className="container">
      <h1 className="text-center my-3">InQool App</h1>
      <div className="Search">
        <div className="input-group mb-3 mt-3 ">
          <input type="text" className="form-control border border-success" placeholder="Enter Github username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
          <div className="input-group-append">
            <button type="button" className="btn btn-success border border-success">Search</button>
          </div>
        </div>
      </div>

      <h2 className="my-4">Repositories</h2>
      <div className="Repositories">
        <div className="row border">
          <div className="col-12">
          <h2>..........</h2>

          </div>

        </div>
      </div>

      <h2 className="my-4">Organizations</h2>
      <div className="Organizations">
      </div>

    </div>
)

export default Index