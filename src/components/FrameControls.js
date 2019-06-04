/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Component } from 'react';

class FrameControls extends Component {
    render() {
        return (
            <div css={css`
                position: fixed;
                bottom: 0;
                right: 0;
            `}>
                <button onClick={() => this.props.setAspect(0.75)}>4:3</button>
                <button onClick={() => this.props.setAspect(0.5625)}>16:9</button>
                <button onClick={() => this.props.setAspect(1)}>fill</button>
            </div>
        );
    }
}

export default FrameControls;