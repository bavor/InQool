import React from 'react';
import './index.sass'

const Index = () => (
    <div className="container">
      <h1 className="text-center my-3">InQool App</h1>
      <div className="Search col-md-10 offset-md-1 col-12 ">
        <div className="input-group mb-3 mt-3 ">
          <input type="text" className="form-control border border-success" placeholder="Enter Github username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
          <div className="input-group-append">
            <button type="button" className="btn btn-success border border-success">Search</button>
          </div>
        </div>
      </div>

      <h2 className="my-4">Repositories</h2>
      <div className="Repositories row border views col-md-10 offset-md-1 col-12">
        <div className="col-6 views-username">
        <p>prvni username</p>
        </div>
        <div className="col-2"> 
        <img src="https://www.mojeparty.cz/data/USR_045_DEFAULT/Balonek_foliovy_Duhovy_jednorozec_1ks_303129901.jpg"
         alt="pony" className="img-fluid views-image" />
        </div>
        <div className="col-1 views-username">
          hvezda
        </div>
        <div className="col-1 views-username">
          score
        </div>

      </div>

      <h2 className="my-4">Organizations</h2>
      <div className="Organizations row border">
        <div className="col-12">
        <h2>organizace</h2>
        </div>
      </div>

    </div>
)

export default Index