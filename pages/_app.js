import 'tailwindcss/tailwind.css'
import '/public/css/main.css'
import Menu from '../components/menu'
import Head from 'next/head'


function MyApp({Component, pageProps}) {


    return (
        <>
            <Head>
                <title>Meu 1º app no next.js |</title>
            </Head>
            <body className="bg-gray-200 text-gray-900 tracking-wider leading-normal">
                <Menu></Menu>
                <Component {...pageProps} />
            </body>
        </>
    )
}

export default MyApp
