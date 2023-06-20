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
                    <div className="bannerimg cover-image home-banner  my-breadcrum" data-bs-image-src="../assets/images/banners/banner2.jpg">
                        <div className="header-text mb-0">
                            <div className="container">
                                <div className="text-center text-white ">
                                    <h1 className="">Payment</h1>
                                    <ol className="breadcrumb text-center">
                                        <li className="breadcrumb-item">
                                            <Link href="/">Home</Link>
                                        </li>
                                        <li className="breadcrumb-item active text-white" aria-current="page">Online Payment</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Payment/>
                </div>
            </section>
        </main>
    </>)
}
