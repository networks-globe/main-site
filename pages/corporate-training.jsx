import Head from 'next/head'
import Link from 'next/link'
import EnquiryForm from '../components/posts/EnquiryForm'


export default function contcat() {
    return (<>
        <Head>
            <title>Ducat Corporate Training</title>
            <meta name="description" content="DUCAT Corporate provides corporate education and custom-content training solutions to some of India's largest private, public and Government organizations ." />
            <link rel="canonical" href="http://www.ducatindia.com" />
        </Head>
        <main>
            <div>
                <div className="bannerimg cover-image home-banner  my-breadcrum" data-bs-image-src="../assets/images/banners/banner2.jpg">
                    <div className="header-text mb-0">
                        <div className="container">
                            <div className="text-center text-white ">
                                <h1 className="">Services</h1>
                                <ol className="breadcrumb text-center">
                                    <li className="breadcrumb-item">
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active text-white" aria-current="page">Services / Corporate Training</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid my-3">
                <div className="row">

                    <div className="col-xl-9 col-lg-9">

                        <img src="/images/corporate-training-at-ducat.jpg" alt="Corporate Training at Ducat" className="img-fluid mb-3 w-100" />

                        <p className='text-justify fs-5'>DUCAT Corporate provides corporate education and custom-content training solutions to some of Indias largest private, public and Government organizations .We serve clients in Various sectors such as information technology, financial services,pharmaceuticals,tele communications,education,professional services. Ducat corporate is proud of its ability to assess learning needs and develop and deliver training solutions to support and enhances return on learners training investments.</p>

                        <p className='text-justify fs-5'>Ducat envisages strengthening its training base on industry scenario and technology development issues, developing its training capabilities. it further acts as an interface with software companies to promote exchange of innovations, training methodologies, design on training curriculum and monitoring the software industry trends, country wide.</p>

                        <p className='text-justify fs-5'>Ducat corporate has been offering software training, drawn from experience in research ,training and facilitation in the areas of process improvement, product engineering,quality and knowledge management. Our holistic approach to process improvement training is based on the objective of integrating people, process, and technology, which are critical to the performance of a trainee.</p>

                        <div className="contentInfoArea">

                            <div className="row align-items-center">

                                <div className="col-xl-2 col-md-3">
                                    <div className="icon" style={{fontSize:"60px"}}>
                                        <i className="fas fa-tools"></i>
                                    </div>
                                </div>

                                <div className="col-xl-10 col-md-9">
                                    <h5 className="border-bottom bg-primary text-center p-2 pb-1 mb-1">Tailor-Made Program/Training</h5>
                                    <p className="text-justify fs-5 mb-0">Ducat offers a full spectrum of vendor authorized technical, business skills, project management and application courses designed to suit every skill level, as well as the ability to consult directly with organizations to tailor made learning plans for any number of employees.</p>
                                </div>
                            </div>

                            <hr className="style" />

                            <div className="row align-items-center">

                                <div className="col-xl-2 col-md-3">
                                    <div className="icon" style={{fontSize:"60px"}}>
                                        <i className="fas fa-user-clock"></i>
                                    </div>
                                </div>

                                <div className="col-xl-10 col-md-9">
                                    <h5 className="border-bottom bg-primary text-center p-2 pb-1 mb-1">Real Time Trainers</h5>
                                    <p className="text-justify fs-5 mb-0">The Core Strength of DUCAT are its trainers. Getting trained by these experts gives the complete insight of the market scenario with latest trends followed by various IT giants.</p>
                                </div>
                            </div>

                            <hr className="style" />

                            <div className="row align-items-center">

                                <div className="col-xl-2 col-md-3">
                                    <div className="icon" style={{fontSize:"60px"}}>
                                        <i className="fas fa-user-shield"></i>
                                    </div>
                                </div>

                                <div className="col-xl-10 col-md-9">
                                    <h5 className="border-bottom bg-primary text-center p-2 pb-1 mb-1">International Training and Certification</h5>
                                    <p className="text-justify fs-5 mb-0">Not Only the course content but the deliveries imparted helps in clearing the Global certification hence giving the candidate an Edge from others.</p>
                                </div>
                            </div>

                            <hr className="style" />

                            <div className="row align-items-center">

                                <div className="col-xl-2 col-md-3">
                                    <div className="icon" style={{fontSize:"60px"}}>
                                        <i className="fas fa-shield-alt"></i>
                                    </div>
                                </div>

                                <div className="col-xl-10 col-md-9">
                                    <h5 className="border-bottom bg-primary text-center p-2 pb-1 mb-1">Updated Course Content &amp; Courseware</h5>
                                    <p className="text-justify fs-5 mb-0">The course contents & Course ware are designed under the strict supervision of professionals from the relevant industries, focusing on the needs of the market with complete practical approach.</p>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="col-xl-3 col-lg-3">

                        <EnquiryForm />
                    </div>

                </div>
            </div>
        </main>
    </>
    )
}
