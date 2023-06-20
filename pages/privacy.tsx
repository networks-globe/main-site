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
                                    <h1 className="">Privacy Policy</h1>
                                    <ol className="breadcrumb text-center">
                                        <li className="breadcrumb-item">
                                            <Link href="/">Home</Link>
                                        </li>
                                        <li className="breadcrumb-item active text-white" aria-current="page">Privacy Policy</li>
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
                        <h1 className="mb-4" style={{ borderLeft: "3px solid red" }}> Privacy Policy</h1>
                        <p className="leading-normal text-center">Training Industry, Inc. respects your privacy. Because we gather certain types of information about our users, we feel you should fully understand the terms and conditions surrounding the capture and use of that information. More information about how we use collected data is included in our Terms of Use.</p>
                        <p>We appreciate you checking out the Ducat India website and our privacy policy. We follow simple privacy policy that we never provide, share or trade any of the student or website visitors data to any third party unless you choose to provide us we do not save any of you personal data</p>
                    </div>
                </div>
            </section>
        </main>
    </>)
}
