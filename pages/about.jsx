import Head from 'next/head'

import About from "../components/posts/About"

export default function about() {
    
    return (<>
        <Head>
            <title>Ducat India - Campus &amp; Industrial IT Training  School in Noida</title>
        </Head>
        <main>
            <About/>
        </main>
    </>)
}
