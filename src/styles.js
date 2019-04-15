/** @jsx jsx */
import { Global, css, jsx } from '@emotion/core';

export default () => {
    return (
        <Global
            styles={css`
                * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                }

                html, body {
                    width: 100vw;
                    height: 100vh;
                    background: #000;
                }
            `}
        />
    );
};

export const easing = 'cubic-bezier(.07,.95,0,1)';