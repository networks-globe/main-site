import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import jQuery from 'jquery';
import { useRouter } from 'next/router'
import { addHomeEnquiry } from "../../../store/action_creators/HomeEnquiryAction"

import { getCourse } from '../../../store/action_creators/CourseAction';
import { getService } from '../../../store/action_creators/ServiceAction';
import { getCourseCategory } from "../../../store/action_creators/CourseCategoryAction"
import { getCenter } from '../../../store/action_creators/CenterAction'

import { useDispatch, useSelector } from 'react-redux';
export default function MobileNavigation() {
    let [userData, setUserData] = useState({
        name: "",
        phone: "",
        email: "",
        course: "",
        branch: "",
        message: ""
    });
    const router = useRouter()
    const [courseCategory, setCourseCategory] = useState([])
    const [courses, setCourses] = useState([])
    let [courseDropDown, setCourseDropDown] = useState([])
    var dispatch = useDispatch()

    var allCourses = useSelector((state) => state.CourseStateData)
    var allCourseCategories = useSelector((state) => state.CourseCategoryStateData)
    let allCenters = useSelector((state) => state.CenterStateData)
    // let allService = useSelector((state) => state.ServiceStateData)


    async function getAPIData() {
        dispatch(getCourse())
        dispatch(getCourseCategory())
        dispatch(getCenter())
        // dispatch(getService())
        if (allCourseCategories)
            setCourseCategory(allCourseCategories)
        if (allCourses)
            setCourses(allCourses)

        var response = await fetch(process.env.NEXT_PUBLIC_SERVER + "/api/course-dropdown")
        var result = await response.json()
        setCourseDropDown(result.data)
    }
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
                center: userData.center,
                utm_source:router.query.utm_source??"",
                utm_campaign:router.query.utm_campaignid??"",
                utm_agid:router.query.utm_agid??"",
                utm_term:router.query.utm_term??"",
                creative:router.query.creative??"",
                device:router.query.device??"",
                placement:router.query.placement??""
            }))
            router.push("/thank-you")
        }
    }
    function mobileNav() {

        jQuery('#horizontalMenucontainer').toggleClass('width-resize');
        jQuery('<div class="overlapblackbg"></div>').prependTo('.horizontalMenu');
        jQuery('body').toggleClass('active');
        jQuery('.overlapblackbg').on("click", function (e) {
            jQuery("body").removeClass('active');
        });

        jQuery(window).trigger('resize');

        jQuery('.horizontalMenu > .horizontalMenu-list > li').has('.sub-menu').prepend('<span class="horizontalMenu-click"><i class="horizontalMenu-arrow fa fa-angle-down"></i></span>');
        jQuery('.horizontalMenu > .horizontalMenu-list > li').has('.horizontal-megamenu').prepend('<span class="horizontalMenu-click"><i class="horizontalMenu-arrow fa fa-angle-down"></i></span>');
        jQuery('.horizontalMenu-click').on("click", function (e) {
            jQuery(this).toggleClass('ws-activearrow').parent().siblings().children().removeClass('ws-activearrow');
            jQuery(".horizontalMenu > .horizontalMenu-list > li > .sub-menu, .horizontal-megamenu").not(jQuery(this).siblings('.horizontalMenu > .horizontalMenu-list > li > .sub-menu, .horizontal-megamenu')).slideUp('slow');
            jQuery(this).siblings('.sub-menu').slideToggle('slow');
            jQuery(this).siblings('.horizontal-megamenu').slideToggle('slow');
        });

        jQuery('.horizontalMenu > .horizontalMenu-list > li > ul > li').has('.sub-menu').prepend('<span class="horizontalMenu-click02"><i class="horizontalMenu-arrow fa fa-angle-down"></i></span>');
        jQuery('.horizontalMenu > .horizontalMenu-list > li > ul > li > ul > li').has('.sub-menu').prepend('<span class="horizontalMenu-click02"><i class="horizontalMenu-arrow fa fa-angle-down"></i></span>');
        jQuery('.horizontalMenu-click02').on("click", function (e) {
            jQuery(this).children('.horizontalMenu-arrow').toggleClass('horizontalMenu-rotate');
            jQuery(this).siblings('li > .sub-menu').slideToggle('slow');
        });
    }
    function chatBot() {
        var chatbot_id = 5486;
        !function () {
            var t, e, a = document, s = "smatbot-chatbot"; a.getElementById(s) || (t = a.createElement("script"), t.id = s, t.type = "text/javascript", t.src = "https://smatbot.s3.amazonaws.com/files/smatbot_plugin.js.gz", e = a.getElementsByTagName("script")[0], e.parentNode.insertBefore(t, e))
        }()
    }
    useEffect(() => {
        getAPIData()
    }, [allCourses.length, allCourseCategories.length, allCenters.length])
    return (
        <>


            <div className='d-none d-lg-block' style={{ position: "fixed", bottom: "0px", zIndex: "1000", width: "100%" }}>
                <form onSubmit={postData} className='d-flex home-banner p-1'>
                    <input type="text" name="name" required onChange={getData} id="name" placeholder='Enter Name' className='form-control m-2' />
                    <input type="email" name="email" required onChange={getData} id="email" placeholder='Enter Email' className='form-control m-2' />
                    <input type="number" name="phone" required onChange={getData} id="phone" placeholder='Enter Contact Number' className='form-control m-2' />
                    <select name='course' required onChange={getData} id='course' className='form-control m-2'>
                        <option value="">Select a Course</option>
                        {
                            courseDropDown.map((item, index) => {
                                return <option key={index} value={item.name}>{item.name}</option>
                            })
                        }
                    </select>
                    <select name='center' required onChange={getData} id='center' className='form-control m-2'>
                        <option value="">Select Branch</option>
                        {
                            allCenters.map((item, index) => {
                                return <option key={index} value={item.title}>{item.title}</option>
                            })
                        }
                    </select>
                    <button className="btn pdf-background" style={{ width: "370px" }} type="submit">Call Back</button>
                </form>
            </div>
            {/* <!-- Mobile Header --> */}
            <div className="sticky sticky-pin">
                <div className="horizontal-header clearfix ">
                    <div className="container">
                        <a id="horizontal-navtoggle" className="animated-arrow" onClick={mobileNav}><span></span></a>
                        <span className="smllogo">
                            <img className="mobile-light-logo" src="/images/ducat_logo.png" width="120" alt="" />
                            <img className="mobile-dark-logo" src="/images/ducat_logo.png" width="120" alt="" />
                        </span>
                        <a href="tel:7070905090" className="callusbtn"><i className="fa fa-phone" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
            {/* <!-- Mobile Header --> */}

            <div>
                <div className="horizontal-main clearfix">
                    <div className="horizontal-mainwrapper container clearfix">
                        <div className="desktoplogo">
                            <Link href="/" className="light-logo"><img src="/images/ducat_logo.png" style={{ height: "60px" }} alt="" /></Link>
                            <Link href="/" className="dark-logo"><img src="/images/ducat_logo.png" style={{ height: "60px" }} alt="" /></Link>
                        </div>

                        {/* <!--Nav--> */}
                        <nav className="horizontalMenu clearfix d-md-flex sticky-top">
                            <ul className="horizontalMenu-list a-auto">
                                <li aria-haspopup="true">
                                    <Link href="/" style={{ fontSize: "17px" }}>Home</Link>
                                </li>

                                <li aria-haspopup="true"><a href="#" className='home-banner text-light' style={{ fontSize: "17px" }}>Course <span className="fa fa-caret-down m-0 text-light"></span></a>
                                    <ul className="sub-menu leftScrollBar">
                                        {
                                            courseCategory.length > 0 && courseCategory.map((value, index) => (
                                                <li aria-haspopup="true" key={index}><Link href={`/course-category/${value.name}`}>{value.name} <i className="fa fa-angle-right float-end mt-1 d-none d-lg-block"></i></Link>
                                                    <ul className="sub-menu">
                                                        {
                                                            courses.length > 0 && courses.map((course, index) => (

                                                                course.courseCategory === value.name ?
                                                                    (
                                                                        <li aria-haspopup="true" key={index}>
                                                                            <Link href={'/' + course.seourl}><span className='course-list-menu'>{course.title}</span>
                                                                            </Link>
                                                                        </li>
                                                                    ) : ('')
                                                            ))
                                                        }
                                                    </ul>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </li>

                                {/* <li aria-haspopup="true"><Link href="#">Certificate</Link></li> */}

                                <li aria-haspopup="true"><a href="#" style={{ fontSize: "17px" }}>Services <span className="fa fa-caret-down m-0"></span></a>
                                    <ul className="sub-menu">
                                        <li aria-haspopup="true"><Link href="/campus-training">Campus Training</Link></li>
                                        <li aria-haspopup="true"><Link href="/corporate-training">Corporate Training</Link></li>
                                        <li aria-haspopup="true"><Link href="/classroom-training">Classroom Training</Link></li>
                                        <li aria-haspopup="true"><Link href="/industrial-training">Industrial Training</Link></li>
                                    </ul>
                                </li>
                                {/* <li aria-haspopup="true"><Link href="#">Online Registration</Link></li> */}
                                {/* <li aria-haspopup="true"><Link href="#">Tutorials</Link></li> */}
                                <li aria-haspopup="true"><Link href="/placement" style={{ fontSize: "17px" }}>Placement</Link></li>
                                <li aria-haspopup="true"><Link href="/certificate" style={{ fontSize: "17px" }}>Certificate</Link></li>
                                {/* <li aria-haspopup="true"><Link href="/online-registration" style={{ fontSize: "17px" }}>Pay Now</Link></li> */}
                                <li aria-haspopup="true"><Link href="/about" style={{ fontSize: "17px" }}>About</Link></li>
                                <li aria-haspopup="true"><Link href="/blog" style={{ fontSize: "17px" }}>Blog</Link></li>
                                <li aria-haspopup="true"><Link href="/contact" style={{ fontSize: "17px" }}> Contact Us <span className="wsarrow"></span></Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}
