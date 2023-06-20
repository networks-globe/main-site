import React, { useEffect, useState } from 'react'
import jQuery from 'jquery';
import dynamic from 'next/dynamic'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });


import { useRouter } from 'next/router'
import { getTestimonial } from '../../store/action_creators/TestimonialAction'
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

export default function Testimonials() {

    const options = {
        margin: 30,
        responsiveClass: true,
        nav: true,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1024: {
                items: 3,

            }
        },
    };
    const router = useRouter()
    var dispatch = useDispatch()
    let allTestimonials = useSelector((state) => state.TestimonialStateData)
    async function getAPIData() {
        dispatch(getTestimonial())
    }
    useEffect(() => {
        (async () => {
            await getAPIData();
        })()
    }, [allTestimonials.length])
    return (
        <div className="container py-2">
            <div className="section-title center-block text-center">
                <h1>Our Students Say</h1>
            </div>

            <OwlCarousel id="tesimonials" className='owl-theme owl-carousel-icons6' {...options}>
                {
                    allTestimonials.map((item, index) => {
                        return <div key={index} className="item text-center">
                            <div className="testimonia">
                                <div className="testimonia-img mx-auto mb-3 m-auto d-flex justify-content-center">
                                    <img src={process.env.NEXT_PUBLIC_SERVER + `/testimonial/${item.image}`} style={{ height: "100px", width: "100px" }}
                                        className="img-thumbnail rounded-circle alt=" alt="" />
                                </div>
                                <div className=" d-grid place-items-center">
                                    <h4 className="">{item.name}</h4>
                                    {/* <div className="rating-star sm my-rating-5" data-stars="5s">
                                            </div> */}
                                </div>
                            </div>
                            <div className='card p-5'>
                            <p className='text-justify' style={{ fontSize: "17px",height:"200px",overflow:"auto",scrollbarWidth:"none" }}>
                                <i className="fa fa-quote-left"></i> {item.message}
                            </p>
                            </div>
                        </div>
                    })
                }
            </OwlCarousel>
        </div>
    )
}
