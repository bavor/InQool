import React from 'react';
import {Link} from  "react-router-dom";
import './user_detail.sass'


const UserRow = () => {
    return(
        <div className="col-12 col-md-10 offset-md-1">

            {props.users?.map((user, index) =>
                <div key={index}>

                    <div className="border-bottom views">
                        <div className="row">

                            {user.login &&
                            <div className="col-6 views-text">
                            <p className="ml-2">user.login</p>
                            </div>
                            }
                            {!user.login &&
                            <div className="col-6 views-text">
                            <p className="ml-2">nenaslo to login :(</p>
                            </div>
                            }

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
            )}


        </div>

    )

}
UserRow.defaultProps={
    users: [],
}

export default UserRow
