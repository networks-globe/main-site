import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'


import Post from '../components/posts/Post'
import Testimonials from '../components/posts/Testimonials'
import Clients from "../components/posts/Clients"


import { getCourseCategory } from '../store/action_creators/CourseCategoryAction'
import { getCourse } from '../store/action_creators/CourseAction'
import { getUpcomingBatches } from '../store/action_creators/UpcomingBatchesAction'
import { getCenter } from '../store/action_creators/CenterAction'

import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'
import Script from 'next/script'

export default function Home() {
  let [courseCategory, setCourseCategory] = useState("")
  let [course, setCourse] = useState("")
  let [upcommingBatches, setUpcommingBatches] = useState([])
  let allCourseCategories = useSelector((state) => state.CourseCategoryStateData)
  let allUpcomingBatches = useSelector((state) => state.UpcomingBatchesStateData)
  let allCourses = useSelector((state) => state.CourseStateData)
  let allcenters = useSelector((state) => state.CenterStateData)

  let dispatch = useDispatch()
  var router = useRouter()
  async function getAPIData() {
    dispatch(getUpcomingBatches())
    dispatch(getCenter())
    dispatch(getCourseCategory())
    dispatch(getCourse())
    getCenterSelect('all')
    if (allCourses.length)
      setCourse(allCourses[0].seourl)
    if (allCourseCategories.length)
      setCourseCategory(allCourseCategories[0].name)
  }
  function getCourseCategorySelect(e) {
    setCourseCategory(e.target.value)
  }
  function getCourseSelect(e) {
    setCourse(e.target.value)
  }
  function postCourseCategory(e) {
    e.preventDefault()
    router.push(`/course-category/` + courseCategory)
  }
  function postCourse(e) {
    e.preventDefault()
    router.push(`/` + course)
  }
  function getCenterSelect(data) {
    if (data === 'all')
      var items = allUpcomingBatches
    else
      var items = allUpcomingBatches.filter((item) => item.center === data)

    items = items.slice(0, 6)
    setUpcommingBatches(items)
  }
  useEffect(() => {
    (async () => {
      await getAPIData();
    })()
  }, [allCourseCategories.length, allUpcomingBatches.length, allcenters.length, allCourses.length])

  return (
    <>
      <Head>
        <title>Ducat India - Campus &amp; Industrial IT Training  School</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.ducatindia.com" />
        <meta name="alexaVerifyID" content="979-vVKhq51_SSSWxmBb2U6eR00" />
        <meta name="google-site-verification" content="c2aO0biE5RcJckX_g5L5oSWbYMOSEbzayUw1baqqWxs" />
        <meta name="facebook-domain-verification" content="1if4dw5avxipwx10g160l4ts3eu35t" />
        <meta name="msvalidate.01" content="72BE4AC7034C652C6CBA71A43828CBDA" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="IT Industrial Training, Java, .Net, Php, Oracle, Sas, Training Institutes In Delhi, Noida, Ghaziabad, Gurgaon, Noida sector 63, Pitampura , South Ex."></meta>
        <meta name="description" content="Ducat provides all IT training courses with Classroom, Industrial, Campus & Corporate Training. Enhance your skills according to industry demand. ☎ 70-70-90-50-90"></meta>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="IT Industrial Training, Java, .Net, Php, Oracle, Sas, Training Institutes In Delhi, Noida, Ghaziabad, Gurgaon, Faridabad, Greater Noida." />
        <meta property="og:description" content="Industrial Training:DUCAT offers best IT training like Java .Net PHP Oracle program with live project by industry expert In Noida, Ghaziabad, Gurgaon, Faridabad, Greater Noida." />
        <meta property="og:url" content="https://www.ducatindia.com/" />
        <meta property="og:image" content="https://www.ducatindia.com//public/images/ducat_logo.png" />
        <meta property="og:site_name" content="Ducat India" />
        <meta property="article:publisher" content="https://www.facebook.com/ducatEducation" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="IT Industrial Training, Java, .Net, Php, Oracle, Sas, Training Institutes In Delhi, Noida, Ghaziabad, Gurgaon, Faridabad, Greater Noida." />
        <meta name="twitter:description" content="Industrial Training:DUCAT offers best IT training like Java .Net PHP Oracle program with live project by industry expert In Noida, Ghaziabad, Gurgaon, Faridabad, Greater Noida." />
        <meta name="twitter:url" content="https://www.ducatindia.com/" />
        <meta name="twitter:image" content="https://www.ducatindia.com/public/images/ducat_logo.png" />
        <meta name="twitter:creator" content="@Ducat_education" />
        <meta name="twitter:site" content="@Ducat_education" />
        </Head>
        <Script type="application/ld+json" id="ducat1-jsonld" dangerouslySetInnerHTML={{
          __html: `{
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.ducatindia.com/"  
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Courses",
            "item": "https://www.ducatindia.com/courses"  
          }]
        `}} />
      {/* End Google Tag Manager (noscript) */}
      <main>


        {/* <Script type="application/ld+json" key="ducat2-jsonld" dangerouslySetInnerHTML={{
          __html: `{
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://www.ducatindia.com/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://www.ducatindia.com/search?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }`
        }} /> */}
        <Script type="application/ld+json" id="ducat3-jsonld" dangerouslySetInnerHTML={{
          __html: `{"@context": "https://schema.org",
          "@type": "CollegeOrUniversity",
          "name": "Ducat India",
          "alternateName": "Ducat",
          "url": "https://www.ducatindia.com/",
          "logo": "https://www.ducatindia.com/images/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "70-70-90-50-90",
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": "en"
          },
          "sameAs": [
            "https://www.facebook.com/ducatEducation",
            "https://www.twitter.com/@Ducat_education",
            "https://www.instagram.com/ducateducation/",
            "https://www.youtube.com/c/DucatIndiatraining",
            "https://www.linkedin.com/company/ducateducation"
          ]}`}} />
        {/* <Script type="application/ld+json" key="ducat4-jsonld" dangerouslySetInnerHTML={{
          __html: `{"@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Ducat India",
          "image": "https://www.ducatindia.com/images/logo.png",
          "@id": "",
          "url": "https://www.ducatindia.com/",
          "telephone": "70-70-90-50-90",
          "priceRange": "?",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "A - 43 & A - 52",
            "addressLocality": "Sector - 16",
            "postalCode": "201301",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 28.5798487,
            "longitude": 77.3148063
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "09:00",
            "closes": "09:00"
          } `
        }} /> */}
        {/* <Script type="application/ld+json" key="ducat5-jsonld" dangerouslySetInnerHTML={{
          __html: `{ "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "What are the different courses offered by Ducat?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We offer more than 47+ courses for aspiring students who want to make a flourishing career with various technologies such as Java, Python, C++, AutoCAD, Digital Marketing, PHP, SAP, and many others."
              }
            },{
              "@type": "Question",
              "name": "Does Ducat also provide placements support?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Ducat provides placement support to the students. As we have a placement cell that gives regular updates to the students of the various job openings through our social media platforms and groups."
              }
            },{
              "@type": "Question",
              "name": "How is Ducat Helpful?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It is the best institute in NCR where they offer various courses from more than 20+ years and give quality education to the students and help them to shape their future in their chosen field. It assures the students to make their dream come true of getting a good job in top companies."
              }
            },{
              "@type": "Question",
              "name": "What types of services are offered by Ducat?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We offer various services such as campus training, corporate training, classroom training, and industrial training for the students."
              }
            },{
              "@type": "Question",
              "name": "Does Ducat also hold workshops?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer workshops for the students to give a better knowledge of the particular field and help them become an expert."
              }
            },{
              "@type": "Question",
              "name": "What Are The Payment Options?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We accept all types of payment such as cash, debit, or credit card and UPI payment option offered to the students."
              }
            },{
              "@type": "Question",
              "name": "I Have More Queries?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In case you have any other queries contact us and our experts will get in touch with you in a short period."
              }
            }]`
        }} /> */}
        {/* <!--Sliders Section--> */}

        <section>
          <div className="banner-2 home-banner sptb-2 sptb-tab">
            <div className="header-text mb-0">
              <div className="container">
                <div className="text-center text-white ">
                  <h1 className="mb-1">Find The Best IT Course & Kick Start Your Career</h1>
                </div>
                <div className="row">
                  <div className="col-xl-10 col-lg-12 col-md-12 d-block mx-auto">
                    <div className="item-search-tabs">
                      <div className="item-search-menu">
                        <ul className="nav">
                          <li className=""><a href="#tab1" className="active  home-search-tabs" data-bs-toggle="tab">Course Category</a></li>
                          <li><a href="#tab2" data-bs-toggle="tab" className=' home-search-tabs'>Courses</a></li>
                        </ul>
                      </div>
                      <div className="tab-content index-search-select">
                        <div className="tab-pane active" id="tab1">
                          <div className="search-background">
                            <form onSubmit={postCourseCategory}>
                              <div className="form row g-0">
                                <div className="form-group col-lg-9 col-md-12 mb-0">
                                  <select className="form-control select2-show-search border-bottom-0 w-100 " name='courseCategory' onChange={getCourseCategorySelect} data-placeholder="Select">
                                    <optgroup label="Categories">
                                      {
                                        allCourseCategories.map((item, index) => {
                                          return <option key={index} value={item.name}>{item.name}</option>
                                        })
                                      }
                                    </optgroup>
                                  </select>
                                </div>
                                <div className="form-group col-lg-3  col-md-12 mb-0 location">
                                  <div className="row g-0 bg-white br-2">
                                    <div className="col-12 mb-0">
                                      <button type='submit' className="btn btn-block pdf-background"><i className="fa fa-search"></i> Search</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div className="tab-pane" id="tab2">
                          <div className="search-background">
                            <form onSubmit={postCourse}>
                              <div className="form row g-0">
                                <div className="form-group col-lg-9 col-md-12 mb-0">
                                  <select className="form-control select2-show-search border-bottom-0 w-100" name='course' onChange={getCourseSelect} data-placeholder="Select">
                                    <optgroup label="Courses">
                                      {
                                        allCourses.map((item, index) => {
                                          return <option key={index} value={item.seourl}>{item.title}</option>
                                        })
                                      }
                                    </optgroup>
                                  </select>
                                </div>
                                <div className="form-group col-lg-3  col-md-12 mb-0 location">
                                  <div className="row g-0 bg-white br-2">
                                    <div className="col-12 mb-0">
                                      <button type='submit' className="btn btn-block pdf-background fs-14"><i className="fa fa-search"></i> Search</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              {/* <div className="text-center text-white m-auto" style={{width:"70%"}}>
                <div className="row">
                  <div className="col-xl-2 col-lg-3 col-md-4 col-6 btn pdf-background m-1">
                    <Link href="#" className='text-light'>Courses</Link>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-6 btn pdf-background m-1">
                    <Link href="#" className='text-light'>Placement</Link>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-6 btn pdf-background m-1">
                    <Link href="#" className='text-light'>Upcomming Batches</Link>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-6 btn pdf-background m-1">
                    <Link href="#" className='text-light'>What Students Say</Link>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-6 btn pdf-background m-1">
                    <Link href="#" className='text-light'>Courses</Link>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-6 btn pdf-background m-1">
                    <Link href="#" className='text-light'>Courses</Link>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-6 btn pdf-background m-1">
                    <Link href="#" className='text-light'>Courses</Link>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-6 btn pdf-background m-1">
                    <Link href="#" className='text-light'>Courses</Link>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-6 btn pdf-background m-1">
                    <Link href="#" className='text-light'>Courses</Link>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-6 btn pdf-background m-1">
                    <Link href="#" className='text-light'>Courses</Link>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-6 btn pdf-background m-1">
                    <Link href="#" className='text-light'>Courses</Link>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-6 btn pdf-background m-1">
                    <Link href="#" className='text-light'>Courses</Link>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
        {/* <!--/Sliders Section--> */}

        {/* <!--Categories--> */}
        <section className="sptb bg-white">
          <div className="container">
            <div className="section-title center-block text-center">
              <h1>Course Categories</h1>
            </div>
            <div className="item-all-cat center-block text-center education-categories">
              <div className="row">
                {
                  allCourseCategories.map((item, index) => {
                    return <div key={index} className="col-lg-2 col-sm-6 col-6 ">
                      <div className="item-all-card text-dark text-center liner-gradient-background" style={{ height: "170px" }}>
                        <Link href={`/course-category/${item.name}`}></Link>
                        <div className="iteam-all-icon">
                          {
                            item.logo ?
                              <img src={process.env.NEXT_PUBLIC_SERVER + `/courseCategory/${item.logo}`} style={{ height: "50px" }} alt="" /> : <i className="fa fa-language fa-3x gradient-icon "></i>
                          }
                        </div>
                        <div className="item-all-text mt-3">
                          <h5 className="mb-0 text-body">{item.name}</h5>
                        </div>
                      </div>
                    </div>
                  })
                }
              </div>
            </div>
          </div>
        </section>
        {/* <!--Categories--> */}

        <Post />



        {/* <!--Coming Classes--> */}
        <section className="sptb bg-white mt-1">
          <div className="container">
            <div className="section-title center-block text-center">
              <h1>Upcoming Batches</h1>
              <h4>Choose Your Nearest Location</h4>
            </div>
            <div className="panel panel-primary">
              <div className="d-none d-lg-block">
                <div className="tabs-menu d-flex justify-content-between flex-wrap">
                  {/* <!-- Tabs --> */}
                  {/* <button className="btn btn-primary m-1" style={{ width: "13%" }} onClick={() => getCenterSelect('all')}>All</button> */}
                  {
                    allcenters.map((item, index) => {
                      return <button key={index} className="btn home-banner text-light m-1" style={{ width: "15.5%" }} onClick={() => getCenterSelect(item.title)}>{item.title}</button>
                    })
                  }
                </div>
              </div>
              <div className="d-block d-lg-none">
                <div className="item-all-cat center-block text-center education-categories">
                  <div className="row">
                    {
                      allcenters.map((item, index) => {
                        return <div key={index} className="col-lg-2 col-sm-6 col-6 ">
                          <div className="item-all-card text-dark text-center liner-gradient-background" onClick={() => getCenterSelect(item.title)} style={{ height: "150px" }}>
                            {/* <Link href={`/course-category/${item.name}`}></Link>
                            <div className="iteam-all-icon">
                              {
                                item.logo ?
                                  <img src={process.env.NEXT_PUBLIC_SERVER + `/courseCategory/${item.logo}`} style={{ height: "40px" }} alt="" /> : <i className="fa-sharp fa-regular fa-school"></i>
                              }
                            </div> */}
                            <div className="item-all-text mt-3">
                              <h5 className="mb-0 text-body">{item.title}</h5>
                            </div>
                          </div>
                        </div>
                      })
                    }
                  </div>
                </div>
              </div>
              <div className="panel-body">
                <div className="tab-content">
                  <div className="tab-pane active show" id="index1">
                    <div className="row">
                      {
                        upcommingBatches.map((item, index) => {
                          return <div key={index} className="col-xl-4 col-md-6">
                            <div className="card overflow-hidden">
                              {/* <div className="ribbon ribbon-top-left text-danger"><span className="bg-danger">New</span></div> */}
                              {/* <div className="item-card7-img">
                                <div className="item-card7-imgs">
                                  <a href="#"></a>
                                  <i className="fa fa-graduation-cap text-light" style={{ fontSize: "200px" }}></i>
                                </div>
                                <div className="item-card7-overlaytext">
                                  <a href="#" className="text-white">{item.trainer}</a>
                                  <h4 className="font-weight-semibold mb-0">{item.center}</h4>
                                </div>
                              </div> */}
                              <div className='liner-gradient-background'>
                                <div className="card-body">
                                  <a className="me-4"><span className="font-weight-bold">Course:</span></a>
                                  <a className="me-4 float-end"><span className="font-weight-bold"></span> {item.course}</a>
                                </div>
                                <div className="card-body">
                                  <a className="me-4"><span className="font-weight-bold">Branch:</span></a>
                                  <a className="me-4 float-end"><span className="font-weight-bold"></span> {item.center}</a>
                                </div>
                                <div className="card-body">
                                  <a className="me-4"><span className="font-weight-bold">Date:</span> {item.startDate}</a>
                                  <a className="me-4 float-end"><span className="font-weight-bold">Time:</span> {item.startTime}</a>
                                </div>
                                <div className="card-body">
                                  <button data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" className="btn btn-white btn-block home-banner text-light">Get a Call Back</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        })
                      }
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                {
                  upcommingBatches.length >= 6 ?
                    <Link href="/upcoming-batches" className="btn home-banner text-light btn-pill"> View More</Link> : ""
                }
              </div>
            </div>
          </div>
        </section>
        {/* <!--/Coming Classes--> */}



        {/* <!--Testimonials--> */}
        <Testimonials />
        {/* <!--/Testimonials--> */}
        {/* <!--Subscribe--> */}
        {/* <section>
          <div className="about-1 cover-image sptb-2 bg-background-color" data-bs-image-src="/images/banners/subscribe.jpg">
            <div className="content-text mb-0">
              <div className="container">
                <div className="text-center text-white ">
                  <h1 className="mb-2">Subscribe</h1>
                  <p className="fs-16">It is a long established fact that a reader will be distracted by the readable.</p>
                  <div className="row">
                    <div className="col-lg-8 mx-auto d-block">
                      <div className="mt-5">
                        <div className="input-group sub-input mt-1">
                          <input type="text" className="form-control input-lg " placeholder="Enter your Email" />
                          <div className="input-group-text border-0 bg-transparent p-0 ">
                            <button type="button" className="btn btn-secondary btn-lg br-te-7 br-be-7">
                              Subscribe
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <!--/Subscribe--> */}
        <hr />
        <Clients />
      </main >
    </>
  )
}
// export async function getServerSideProps(context) {
//   return {
//       props: { },
//   };
// }