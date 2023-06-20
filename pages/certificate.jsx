import Head from 'next/head'
import Link from 'next/link'

export default function about() {
    return (<>
        <Head>
            <title>Ducat India - Campus &amp; Industrial IT Training  School in Noida</title>
        </Head>
        <main>
            <div>
                <div className="bannerimg cover-image home-banner  my-breadcrum" data-bs-image-src="../assets/images/banners/banner2.jpg">
                    <div className="header-text mb-0">
                        <div className="container">
                            <div className="text-center text-white ">
                                <h1 className="">Certificate</h1>
                                <ol className="breadcrumb text-center">
                                    <li className="breadcrumb-item">
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active text-white" aria-current="page">Certificate</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center' style={{ height: "300px" }}>
                <div className="container-fluid d-md-flex justify-center m-auto w-50">
                    <div className="col-md-3">
                        <Link href="/apply-for-certificate" className='btn pdf-background p-2 m-2 w-100'>Apply for Certificate</Link>
                    </div>
                    <div className="col-md-3">
                        <Link href="/download-certificate" className='btn pdf-background p-2 m-2 w-100'>Download Certificate</Link>
                    </div>
                    <div className="col-md-3">
                        <Link href="/verify-certificate" className='btn pdf-background p-2 m-2 w-100'>Verify Certificate</Link>
                    </div>
                </div>
            </div>
        </main>
    </>)
}
