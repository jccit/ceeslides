import React, { Component } from 'react';
import markdown from '../core/markdown';

class Slide extends Component {
    constructor() {
        super();

        this.state = {
            content: ''
        };
    }

    componentDidMount() {
        console.log(markdown);
        markdown('/test.md').then(content => {
            this.setState({ content });
        })
    }

    render() {
        return (
            <div dangerouslySetInnerHTML={{ __html: this.state.content }}></div>
        );
    }
}

export default Slide;