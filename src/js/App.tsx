import React from 'react';
import logo from '../img/logo.svg';
import '../css/App.css';


const App = () => (

    <div className="main">

      <div className="Search">
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Enter Github username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
          <div className="input-group-append">
            <button type="button" className="btn btn-success">Submit</button>
          </div>
        </div>
      </div>

      <div className="Repositories">

      </div>

      <div className="Organizations">

      </div>

    </div>
)

export default App;
