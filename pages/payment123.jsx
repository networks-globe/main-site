import Head from 'next/head'
import Link from 'next/link'
import Payment from '../components/posts/Payment'

export default function about() {
    return (<>
        <Head>
            <title>Ducat India - Campus &amp; Industrial IT Training  School in Noida</title>
        </Head>
        <main>
            <section>
                <div>
                    
                    <div className="w-75 m-auto m-3">
                        <Payment/>
                    </div>
                </div>
            </section>
        </main>
    </>)
}
