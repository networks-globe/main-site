import Head from 'next/head'
import Link from 'next/link'

export default function about() {
    return (<>
        <Head>
            <title>Ducat India - Campus &amp; Industrial IT Training  School</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <section>
            <div>
                    <div className="bannerimg cover-image home-banner  my-breadcrum" data-bs-image-src="../assets/images/banners/banner2.jpg">
                        <div className="header-text mb-0">
                            <div className="container">
                                <div className="text-center text-white ">
                                    <h1 className="">Refund Policy</h1>
                                    <ol className="breadcrumb text-center">
                                        <li className="breadcrumb-item">
                                            <Link href="/">Home</Link>
                                        </li>
                                        <li className="breadcrumb-item active text-white" aria-current="page">Refund and Cancellation Policy</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sptb">
                <div className="container">
                    <div className="text-justify">
                        <h1 className="mb-4" style={{ borderLeft: "3px solid red" }}> Refund and Cancellation Policy</h1>
                        <p>Fee once paid is not refundable /adjustable/transferable</p>
                        <p>Any Disputes is under the jurisdiction of Noida</p>
                    </div>
                </div>
            </section>
        </main>
    </>)
}
