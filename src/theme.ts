const theme = {
  spacingUnit: 20,
  breakpoints: {
    small: '20rem',
    medium: '60rem',
    large: '105rem',
  },
  colors: {
    main: '#2E3C43',
    highlight: '#5300CC',
    success: '#00aa13',
    redirect: 'orange',
    error: '#e53935',
    info: 'skyblue',
    text: '#263238',
    warning: '#f1c400',
    http: {
      get: '#6bbd5b',
      post: '#248fb2',
      put: '#9b708b',
      options: '#d3ca12',
      patch: '#e09d43',
      delete: '#e27a7a',
      basic: '#999',
      link: '#31bbb6',
    },
  },
  schemaView: {
    linesColor: '#7f99cf',
    defaultDetailsWidth: '75%',
  },
  baseFont: {
    size: '16px',
    lineHeight: '24px',
    weight: '400',
    family: 'Open Sans, sans-serif',
    smoothing: 'antialiased',
    optimizeSpeed: true,
  },
  headingsFont: {
    family: 'Montserrat, sans-serif',
  },
  code: {
    fontSize: '16px',
    fontFamily: 'Overpass Mono, sans-serif',
    fontWeight: '600',
  },
  links: {
    color: '#1FAC06',
    visited: '#1FAC06', // by default main color
    hover: '#188B04',
  },
  menu: {
    width: 218,
    backgroundColor: '#F9F9F9',
  },
  logo: {
    maxHeight: 'none',
    width: '100%',
  },
  rightPanel: {
    backgroundColor: '#263238',
    width: 40,
  },
  middlePanel: {
    width: '50%'
  },
};

export default theme;

export type ThemeInterface = typeof theme;
