import React, { Component } from 'react';
import {connect} from 'react-redux';

class Users extends Component {
    componentDidMount() {
        console.log('Users: ', this.props.users)
    }
    render() {
        const styles = {
            card: {
                border: '1px solid #ccc', 
                borderRadius: '7px', 
                margin: '10px', 
                width: '40vw'
            }
        }
        
        let users = null;
        users = this.props.users.map((user, index) => {
            return (
                <div key={index} style={styles.card}>
                    <h3>{user.name}</h3>
                    <span>{user.age}</span>
                    <p>{user.id}</p>
                </div>
            )
        })
        return (
            <div>
                {users}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.userReducer.users
    }
}

export default connect(mapStateToProps)(Users);