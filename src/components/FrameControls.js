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
                <button onClick={() => this.props.setWidth('133vh')}>4:3</button>
                <button onClick={() => this.props.setWidth('177vh')}>16:9</button>
                <button onClick={() => this.props.setWidth('100vw')}>fill</button>
            </div>
        );
    }
}

export default FrameControls;