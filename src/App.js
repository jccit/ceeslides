/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { render } from 'react-dom';
import SlideFrame from './components/SlideFrame';
import GlobalStyles from './styles';

render(
    <main css={css`
        display: flex;
        align-items: center;
        height: 100vh;
    `}>
        <GlobalStyles />
        <SlideFrame />
    </main>
, document.querySelector('#app'));