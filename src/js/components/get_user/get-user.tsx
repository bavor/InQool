import React from 'react';
import axios from 'axios';
import UserRow from '../user_row/user_row';

type props= { UserUrl: string}

class GetUser extends React.Component<props>{

    state = {users:[]};

    componentDidMount(){
        axios.get(this.props.UserUrl)
            .then(res => {
                this.setState({users: res.data.results});
            });
    }

    render(){
        return(
            <div>
                <UserRow users={this.state.users}/>
            </div>
        )
    }

}

export default GetUser