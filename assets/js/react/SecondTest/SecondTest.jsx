import React from 'react';

export default class SecondTest extends React.Component {

    constructor(props) {
        super();
        this.state = {...props};
    }

    render() {
        return (
        <div>this is my sweet second test nice lol</div>
        );
    }
}