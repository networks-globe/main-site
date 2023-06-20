import Head from 'next/head'
import Link from 'next/link'

export default function tnc() {
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
                                    <h1 className="">Term and Conditions</h1>
                                    <ol className="breadcrumb text-center">
                                        <li className="breadcrumb-item">
                                            <Link href="/">Home</Link>
                                        </li>
                                        <li className="breadcrumb-item active text-white" aria-current="page">Term and Conditions</li>
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
                        <h1 className="mb-4" style={{ borderLeft: "3px solid red" }}> Term and Condition</h1>
                        <p className="leading-normal text-center">Ducat requires that all visitors to website(s) owned, operated, licensed and/or controlled by Ducat adhere to these Terms of Use and consent to the terms of our Privacy Policy. By accessing and using the Ducat Site, you indicate your acknowledgement and acceptance of these Terms of Use. If you do not agree with these Terms of Use, you are not authorized to continue use of Ducat site(s) or resources.</p>
                        <p className="leading-normal text-center">Ducat is owned by S.O Infotech Pvt. Ltd. , AAM Infotech Pvt. Ltd. & UM Infotech Pvt. Ltd.</p>
                    </div>
                </div>
            </section>
        </main>
    </>)
}
