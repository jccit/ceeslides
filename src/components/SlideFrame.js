/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Component } from 'react';
import Slide from './Slide';
import FrameControls from './FrameControls';
import InputManager from '../input/InputManager';

class SlideFrame extends Component {
    constructor() {
        super();

        this.inputManager = new InputManager(this.changeSlide.bind(this));

        this.state = {
            aspect: 1,
            slideDeck: 'test-deck',
            manifestLoaded: false,
            manifest: {},
            currentSlide: 0
        };
    }

    componentDidMount() {
        this.loadSlides();
    }

    async loadSlides() {
        const manifestRequest = await fetch(`/slides/${this.state.slideDeck}/manifest.json`);
        const manifest = await manifestRequest.json();

        this.setState({
            manifest,
            manifestLoaded: true
        });
    }

    changeSlide(offset) {
        if (this.state.currentSlide + offset < this.state.manifest.slides.length &&
            this.state.currentSlide + offset >= 0) {
            this.setState({
                currentSlide: this.state.currentSlide + offset
            });
        }
    }

    renderSlides() {
        if (this.state.manifestLoaded) {
            const slideEls = [];

            for (let i = 0; i < this.state.manifest.slides.length; i++) {
                const slide = this.state.manifest.slides[i];
                const show = i == this.state.currentSlide;
                slideEls.push(<Slide slide={`/slides/${this.state.slideDeck}/slides/${slide}.md`} show={show} key={i} />);
            }

            return slideEls;
        }

        return null;
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
                { this.renderSlides() }
                <FrameControls setAspect={this.setFrameAspect.bind(this)} />
            </div>
        );
    }

    setFrameAspect(aspect) {
        this.setState({ aspect });
    }
}

export default SlideFrame;