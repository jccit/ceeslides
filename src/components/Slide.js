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
        markdown(this.props.slide).then(content => {
            this.setState({ content });
        })
    }

    render() {
        if (this.props.show) {
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

        return null;
    }
}

export default Slide;