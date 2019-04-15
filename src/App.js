import React from 'react';
import { render } from 'react-dom';
import SlideFrame from './components/SlideFrame';
import GlobalStyles from './styles';

render(
    <main>
        <GlobalStyles />
        <SlideFrame />
    </main>
, document.querySelector('#app'));