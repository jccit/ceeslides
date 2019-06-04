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
            aspect: 1
        };
    }

    render() {
        const containerCSS = css`
            background-color: #fff;
            margin: 0 auto;
            position: relative;
        `;

        const fixedAspectCSS = css`
            width: ${1 / this.state.aspect * 100}vh;

            &::before {
                content: '';
                position: relative;
                display: block;
                top: 0;
                left: 0;
                width: 100%;
                padding-bottom: ${this.state.aspect * 100}%;
            }
        `;

        const fillCSS = css`
            width: 100vw;
            height: 100vh;
        `;

        let styles = [containerCSS];

        if (this.state.aspect === 1) {
            styles.push(fillCSS);
        } else {
            styles.push(fixedAspectCSS);
        }

        return (
            <div css={styles}>
                <Slide />
                <FrameControls setAspect={this.setFrameAspect.bind(this)} />
            </div>
        );
    }

    setFrameAspect(aspect) {
        this.setState({ aspect });
    }
}

export default SlideFrame;