/** @jsx jsx */
import { Global, css, jsx } from '@emotion/core';

export default () => {
    return (
        <Global
            styles={css`
                @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

                * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                    font-family: 'Roboto', sans-serif;
                    line-height: 1.4;
                }

                html, body {
                    width: 100vw;
                    height: 100vh;
                    background: #000;
                    font-size: 20px;
                }

                h1, h2, h3, h4, h5, h6 {
                    margin-bottom: 1rem;
                }

                p {
                    margin-bottom: 0.5rem;
                }

                ul {
                    margin-bottom: 0.5rem;
                    padding-left: 2rem;
                }
            `}
        />
    );
};

export const easing = 'cubic-bezier(.07,.95,0,1)';