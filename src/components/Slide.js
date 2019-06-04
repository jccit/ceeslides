/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Component } from 'react';
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
            <div dangerouslySetInnerHTML={{ __html: this.state.content }} css={css`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            `}></div>
        );
    }
}

export default Slide;