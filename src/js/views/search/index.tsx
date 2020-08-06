import React from 'react';
import './index.sass'
import GetUser from '../../components/user_list/user_list';




const Index = () => (
  <div className="container">
    <div className="row">

      <div className="col-12 col-md-10 offset-md-1">
        <h1 className="text-center my-3">InQool App</h1>
      </div>

      <div className="col-12 col-md-10 offset-md-1">
        <div className="input-group mb-3 mt-3 ">
          <input type="text" className="form-control border border-success" placeholder="Enter Github username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
          <div className="input-group-append">
            <button type="button" className="btn btn-success border border-success">Search</button>
          </div>
        </div>
      </div>

      <div className="user-top col-12 col-md-10 offset-md-1">
          <h2 className="border-bottom">Users</h2>
      </div>

      <GetUser UserUrl={"https://api.github.com/search/users?q=bavor"} />


      <div className="col-12 col-md-10 offset-md-1">


        <div className="border-bottom views">
          <div className="row">

            <div className="col-6 views-text">
              <p className="ml-2">dfasdf</p>
            </div>

            <div className="col-3">
              <img src="https://www.mojeparty.cz/data/USR_045_DEFAULT/Balonek_foliovy_Duhovy_jednorozec_1ks_303129901.jpg"
              alt="pony" className="img-fluid views-image " />
            </div>
          
            <div className="col-1 views-text">
              <i className="fa fa-star-o" aria-hidden="true"></i>
            </div>

            <div className="col-2 views-text">
              5.0
            </div>                       
  
          </div>
        </div>

        
      </div>
    




    </div>
  </div>
)

export default Index