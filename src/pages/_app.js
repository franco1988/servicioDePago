import 'tailwindcss/tailwind.css'

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((pageE1) => pageE1)

  return getLayout(<Component {...pageProps} />)
}