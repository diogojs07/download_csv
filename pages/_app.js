import '../styles/globals.css'

if (typeof global.navigator === 'undefined') global.navigator = {};


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
