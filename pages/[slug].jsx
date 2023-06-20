import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import EnquiryForm from '../components/posts/EnquiryForm'

export default function Course({ course, relatedCourse }) {
    let router = useRouter()
    return (
        <>
            <Head>
                <title>{course.seotitle}</title>
                <meta name="keywords" content={course.metakeywords} />
                <meta name="description" content={course.metadescription} />
                <link rel="canonical" href={`https://www.ducatindia.com/${course.seourl}`} />
                <script id='application/ld+json' dangerouslySetInnerHTML={{ __html: course.headjs }} />
            </Head>
            {/* <Script id='application/ld+json' dangerouslySetInnerHTML={{__html:course.headjs}} /> */}
            <main>
                <section>
                    <div>
                        <div className="bannerimg cover-image home-banner  my-breadcrum" data-bs-image-src="../assets/images/banners/banner2.jpg">
                            <div className="header-text mb-0">
                                <div className="container">
                                    <div className="text-center text-white ">
                                        <h1 className="">Course</h1>
                                        <ol className="breadcrumb text-center">
                                            <li className="breadcrumb-item">
                                                <Link href="/">Home</Link>
                                            </li>
                                            <li className="breadcrumb-item active text-white" aria-current="page">{course.title}</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="sptb">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8 col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="item7-card-img">
                                            {
                                                course.cover ?
                                                    <img src={process.env.NEXT_PUBLIC_SERVER + `/course/${course.cover}`} alt="img" height="300px" className="w-100" /> :
                                                    ""
                                            }
                                        </div>
                                        <a href="#" className="text-dark">
                                            <h2 className="font-weight-semibold text-center card text-dark py-2">{course.title}</h2>
                                        </a>
                                        {/* <h3 className="font-weight-semibold mb-3" style={{borderLeft:"5px solid blue"}}>&nbsp;{course.seotitle}</h3> */}
                                        <div dangerouslySetInnerHTML={{ __html: course.description }} />
                                        {/* <div>
                                            {
                                                course.content.map((item, index) => {
                                                    return <div>
                                                        <h2 className='pdf-background p-1'>{item.heading}</h2>
                                                        <p className='text-justify card p-5'>{item.value}</p>
                                                    </div>
                                                })
                                            }
                                        </div> */}
                                        {/* <h5>Course Content</h5>
                                        <div class="accordion" id="accordionExample">
                                            {
                                                course.topics.map((item,index)=>{
                                                    return <div key={index} class="accordion-item">
                                                    <h2 class="accordion-header" id={`index`}>
                                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                           {item.heading}
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby={`index`} data-bs-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            {item.value}
                                                        </div>
                                                    </div>
                                                </div>
                                                })
                                            }
                                        </div> */}
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-12">
                                <a target="_blank" rel='noreferrer' href={`${process.env.NEXT_PUBLIC_SERVER}/course/${course.pdf}`} className='btn pdf-background w-100 mb-3'>Download Course Brochure</a>
                                <EnquiryForm />
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Related Courses</h3>
                                    </div>
                                    <div className="card-body p-0">
                                        <div className="list-catergory">
                                            <div className="item-list">
                                                <ul className="list-group mb-0">
                                                    {
                                                        relatedCourse.map((item, index) => {
                                                            return <li key={index} className="list-group-item">
                                                                <Link href={'/' + item.seourl} className="text-dark">
                                                                    {item.title}
                                                                </Link>
                                                            </li>
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
export async function getServerSideProps(context) {
    // const router = useRouter()
    // let [course, setCourse] = useState({})
    var response = await fetch(process.env.NEXT_PUBLIC_SERVER + "/api/course/" + context.query.slug)
    response = await response.json()

    var course = response.data
    var relatedCourse = response.relatedData

    return {
        props: { course: course, relatedCourse: relatedCourse },
    };
}