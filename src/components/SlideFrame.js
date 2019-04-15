/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Component } from 'react';
import Slide from './Slide';
import FrameControls from './FrameControls';
import { easing } from '../styles';

class SlideFrame extends Component {
    constructor() {
        super();

        this.state = {
            width: '100vw'
        };
    }

    render() {
        return (
            <div css={css`
                background-color: #fff;
                margin: 0 auto;
                height: 100vh;
                width: ${this.state.width};
                transition: width 0.5s ${easing};
            `}>
                <Slide />
                <FrameControls setWidth={this.setFrameWidth.bind(this)} />
            </div>
        );
    }

    setFrameWidth(width) {
        this.setState({ width });
    }
}

export default SlideFrame;