import React from 'react';

class Customer extends React.Component {
    render() {
        return (
            <div>
                <CustomerProfile name={this.props.name} id={this.props.id} image={this.props.image}/>
                <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} jop={this.props.jop}/>
            </div>
        )
    }
}

class CustomerProfile extends React.Component {
    render(){
        return(
            <div>
                <img src={this.props.image} alt="profileImage"/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class CustomerInfo extends React.Component {
    render(){
        return(
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.jop}</p>
            </div>
        )
    }
}

export default Customer;