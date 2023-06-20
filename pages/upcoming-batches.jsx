import Head from 'next/head'
import Link from 'next/link'
import UpcomingBatches from '../components/posts/UpcomingBatches'


export default function about() {
    return (<>
        <Head>
            <title>Ducat India - Campus &amp; Industrial IT Training School</title>
        </Head>
        <main>
            <section>
                <div className="bannerimg cover-image home-banner" data-bs-image-src="../assets/images/banners/banner2.jpg">
                    <div className="header-text mb-0">
                        <div className="container">
                            <div className="text-center text-white ">
                                <h1 className="">Upcoming Batches</h1>
                                <ol className="breadcrumb text-center">
                                    <li className="breadcrumb-item">
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active text-white" aria-current="page">Upcoming Batches</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <UpcomingBatches/>
        </main>
    </>)
}
