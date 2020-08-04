import React from 'react';
import '../css/App.sass';


const App = () => (

    <div className="container">

      <div className="Search">
        <div className="input-group mb-3 mt-3 ">
          <input type="text" className="form-control border border-success" placeholder="Enter Github username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
          <div className="input-group-append">
            <button type="button" className="btn btn-success border border-success">Submit</button>
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
