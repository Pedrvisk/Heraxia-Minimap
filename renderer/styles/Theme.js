import { defaultTheme, createGlobalStyle } from '@xstyled/emotion';

// Styles: HeraxiaTheme
export const HeraxiaTheme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    text: '#3e2d1a',
    'text-500': '#75542c',
    'main-text': '#402813',
    bgQuad: '#614727',
    bg: '#967843'
  }
};

export const GlobalStyle = createGlobalStyle`
html, body {
	height: 100%;
}

.dragBox {
  -webkit-app-region:drag;
}

.noDragBox {
  -webkit-app-region:no-drag;
}
`;
