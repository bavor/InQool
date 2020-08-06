import React from 'react';
import axios from 'axios';
import UserRow from '../user_row/user_row';

class GetUser extends React.Component{
    constructor(props: any){
        super(props);
        this.state = {users:[]};
    }

    componentDidMount(){
        axios.get(this.props.refer)
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