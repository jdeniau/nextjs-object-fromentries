import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const o = Object.fromEntries([['a', 'A']]);
  console.log(o);

  return <Component {...pageProps} />
}

export default MyApp
