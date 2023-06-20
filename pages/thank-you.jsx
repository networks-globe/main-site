import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'

export default function about() {
    return (<>
        <Head>
            <title>Ducat India - Campus &amp; Industrial IT Training  School</title>
            <script async src="https://www.googletagmanager.com/gtag/js?id=AW-1015237940"></script>
        </Head>
        <main>
            <>
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=AW-1015237940"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    
                    gtag('config', 'AW-1015237940');

                    gtag('event', 'conversion', {'send_to': 'AW-1015237940/WVZyCOS6p7QBELSajeQD'});
                 `}
                </Script>
            </>
            <section className="m-auto p-md-5 p-2" style={{ marginTop:"100px",width: "90%" }}>
                <div className="container thank-background">
                    <div className="card text-center" style={{ padding: "50px 10px" }}>
                        <h1 className="mb-4">Thank You</h1>
                        <h4 className="leading-normal">We got Your Enquiry</h4>
                        <h5>Our Team Will Contact You Soon</h5>
                        <Link href="/" className='btn search-background'>Go Back to Our Home Page</Link>
                    </div>
                </div>
            </section>
        </main>
    </>)
}
