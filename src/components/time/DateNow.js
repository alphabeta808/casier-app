import React from 'react';

export default class MyComponent extends React.Component {
    state = {
        date: new Date()
    };

    callMe() {
        setInterval(() => {
            this.setState({ 
                date: new Date()
            });
        }, 1000)
    }

    render() {
        return (
            <div className='flex text-white'>
                {this.state.date.toLocaleString()}
                {this.callMe()}
            </div>
        );
    }
}