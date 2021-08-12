import 'tailwindcss/tailwind.css'
import Menu from '../components/menu'
import Head from 'next/head'


function MyApp({Component, pageProps}) {


    return (
        <>
            <Head>
                <title>Meu 1º app no next.js |</title>
            </Head>
            <Menu></Menu>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
