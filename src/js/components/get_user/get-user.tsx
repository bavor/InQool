import React from 'react';
import axios from 'axios';


class GetUser extends React.Component{
    constructor(props){
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

            </div>
        )
    }





}

export default GetUser