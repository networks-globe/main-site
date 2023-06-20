import Head from 'next/head'
import Link from 'next/link'
import EnquiryForm from '../components/posts/EnquiryForm'


export default function contcat() {
    return (<>
        <Head>
            <title>Classroom Training At Ducat</title>
            <meta name="description" content="Ducat Classroom Training gives you hands-on, interactive learning with expert instructors. Solidify your understanding through practice exercises." />
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
                                    <li className="breadcrumb-item active text-white" aria-current="page">Services / Classroom Training</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid my-3">
                <div className="row">

                    <div className="col-xl-9 col-lg-9">

                        <img src="/images/classroom-training-at-ducat.jpg" alt="Classroom Training at Ducat" className="img-fluid mb-3 w-100"/>

                            <p className="text-justify fs-5 ">Ducat Classroom Training gives you hands-on, interactive learning with expert instructors. Solidify your understanding through practice exercises. Classroom training has been the foundation of employee and client education for years. Many participants learn best and have the greatest opportunity for retention when they learn from a live instructor in a classroom setting. Classroom training affords the opportunity to incorporate various learning principles, including lectures, demonstrations, hands-on workshops, and retention quizzes.</p>

                            <div className="contentInfoArea">

                                <div className="row align-items-center">

                                    <div className="col-xl-2 col-md-3">
                                        <div className="icon"style={{fontSize:"60px"}}>
                                            <i className="fas fa-bullseye"></i>
                                        </div>
                                    </div>

                                    <div className="col-xl-10 col-md-9">
                                        <h5 className="bg-primary p-2 text-center border-bottom pb-1 mb-1">Solution Focused Approach</h5>
                                        <p className="text-justify fs-5 mb-0">Solution-focused is a future-focused, goal-directed approach to therapy that highlights the importance of searching for solutions. Trainer allows Candidate to adopt different perspectives to look at a specific situation and therefore deepen their understanding.</p>
                                    </div>

                                </div> 
                                <hr className="style"/>

                                    <div className="row align-items-center">

                                        <div className="col-xl-2 col-md-3">
                                            <div className="icon"style={{fontSize:"60px"}}>
                                                <i className="fas fa-user-tag"></i>
                                            </div>
                                        </div>

                                        <div className="col-xl-10 col-md-9">
                                            <h5 className="bg-primary p-2 text-center border-bottom pb-1 mb-1">Hands-On Demonstrations</h5>
                                            <p className="text-justify fs-5 mb-0">Reinforce new concepts with hands-on exercises that put your learning in action.</p>
                                        </div>

                                    </div> 
                                    <hr className="style"/>

                                        <div className="row align-items-center">

                                            <div className="col-xl-2 col-md-3">
                                                <div className="icon"style={{fontSize:"60px"}}>
                                                    <i className="fas fa-leaf"></i>
                                                </div>
                                            </div>

                                            <div className="col-xl-10 col-md-9">
                                                <h5 className="bg-primary p-2 text-center border-bottom pb-1 mb-1">Real Time Environment</h5>
                                                <p className="text-justify fs-5 mb-0">READY is the Buzz word for Industry, The learning system followed is replica to real time applications in Industry, making the candidates professional & can immediately be Developed on the Projects.</p>
                                            </div>

                                        </div> 
                                        <hr className="style"/>

                                            <div className="row align-items-center">

                                                <div className="col-xl-2 col-md-3">
                                                    <div className="icon"style={{fontSize:"60px"}}>
                                                        <i className="fas fa-user-shield"></i>
                                                    </div>
                                                </div>

                                                <div className="col-xl-10 col-md-9">
                                                    <h5 className="bg-primary p-2 text-center border-bottom pb-1 mb-1">Interact with top Instructors</h5>
                                                    <p className="text-justify fs-5 mb-0">Meet face-to-face with expert instructors; participate in question & answer sessions throughout the course. An interactive session full of examples, exercises, project based learning builds a great peer group that facilitates quicker problem solving.</p>
                                                </div>

                                            </div> 
                                        </div>

                                    </div>
                                    <div className="col-xl-3 col-md-3">
                                        <EnquiryForm />
                                    </div>
                            </div>
                    </div>
                </main>
            </>
            )
}
