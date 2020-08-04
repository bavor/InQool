import React from 'react';
import logo from '../img/logo.svg';
import '../css/App.css';


const App = () => (

    <div className="main">

      <div className="Search">
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2">@example.com</span>
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
