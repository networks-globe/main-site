import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'

import { addHomeEnquiry } from "../../store/action_creators/HomeEnquiryAction"
import Script from 'next/script'
import EnquiryForm from '../../components/posts/EnquiryForm'


export default function Blogs({ allCenters, courseDropDownList, blog, relatedBlogs }) {
    let router = useRouter()
    let [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: "",
        center: "",
        course: ""
    })
    var dispatch = useDispatch()

    function getData(e) {
        var { name, value } = e.target
        setUserData((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }
    function postData(e) {
        e.preventDefault()
        if (userData.phone.length != 10) {
            alert("Invalid Phone Number\nPhone Number must Contains Only 10 Digits")
        } else {
            dispatch(addHomeEnquiry({
                name: userData.name,
                email: userData.email,
                phone: userData.phone,
                course: userData.course,
                center: userData.center
            }))
            router.push("/thank-you")
        }
    }
    return (
        <>
            <Head>
                <title>{blog.title}</title>
                <meta name="keywords" content={blog.metakeywords} />
                <meta name="description" content={blog.metadescription} />
                <link rel="canonical" href={`https://www.ducatindia.com/blog/${blog.seourl}`} />
                <script id='application/ld+json' dangerouslySetInnerHTML={{ __html: blog.headjs }} />
            </Head>
            <main>
                <section>
                    <div>
                        <div className="bannerimg cover-image home-banner  my-breadcrum" data-bs-image-src="../assets/images/banners/banner2.jpg">
                            <div className="header-text mb-0">
                                <div className="container">
                                    <div className="text-center text-white ">
                                        <h1 className="">Blogs</h1>
                                        <ol className="breadcrumb text-center">
                                            <li className="breadcrumb-item">
                                                <Link href="/">Home</Link>
                                            </li>
                                            <li className="breadcrumb-item active text-white" aria-current="page">{blog.title}</li>
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
                                        <a href="#" className="text-dark">
                                            <h2 className="font-weight-semibold">{blog.title}</h2>
                                        </a>
                                        <div>
                                            <img src={process.env.NEXT_PUBLIC_SERVER + `/blog/${blog.image}`} height="350px" width="100%" alt="" />
                                        </div>
                                        {/* <div dangerouslySetInnerHTML={{ __html: blog.shortdescription }} /> */}
                                        <br />
                                        <div dangerouslySetInnerHTML={{ __html: blog.longdescription }} />
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-12">
                                <EnquiryForm/>
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Related Blogs</h3>
                                    </div>
                                    <div className="card-body p-0">
                                        <div className="list-catergory">
                                            <div className="item-list">
                                                <ul className="list-group mb-0">
                                                    {
                                                        relatedBlogs.map((item, index) => {
                                                            return <li key={index} className="list-group-item">
                                                                <Link href={'/blogs/' + item.seourl} className="text-dark">
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
    var response = await fetch(process.env.NEXT_PUBLIC_SERVER + "/api/blog/" + context.query.slug)
    response = await response.json()

    var blog = response.data
    var relatedBlogs = response.relatedBlogs ?? []


    response = await fetch(process.env.NEXT_PUBLIC_SERVER + "/api/center")
    let allCenters = await response.json()

    response = await fetch(process.env.NEXT_PUBLIC_SERVER + "/api/course-dropdown")
    let courseDropDownList = await response.json()
    return {
        props: { allCenters: allCenters.data??[], courseDropDownList: courseDropDownList.data??[], blog: blog, relatedBlogs: relatedBlogs },
    };
}