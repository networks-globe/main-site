import React, { useEffect, useState } from 'react'
import jQuery from 'jquery';
import dynamic from 'next/dynamic'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });


import { useRouter } from 'next/router'
import { getClients } from '../../store/action_creators/ClientsAction'
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

export default function Clients() {

    const options = {
        margin: 30,
        responsiveClass: true,
        nav: true,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        loop:true,
        responsive: {
            0: {
                items: 2,
            },
            400: {
                items: 3,
            },
            600: {
                items: 4,
            },
            700: {
                items: 4,
            },
            1000: {
                items: 6,

            }
        },
    };
    const router = useRouter()
    var dispatch = useDispatch()
    let allClients = useSelector((state) => state.ClientsStateData)
    async function getAPIData() {
        dispatch(getClients())
    }
    useEffect(() => {
        (async () => {
            await getAPIData();
        })()
    }, [allClients.length])
    return (
        <div className="container py-2">
            <div className="section-title center-block text-center">
                <h1>Our Clients</h1>
            </div>

            <OwlCarousel id="client" className='owl-theme owl-carousel-icons6' {...options}>
                {
                    allClients.map((item, index) => {
                        return <div key={index} className="item text-center">
                            <div className="testimonia">
                                <div className="testimonia-img mx-auto mb-3 m-auto d-flex justify-content-center">
                                    <img src={process.env.NEXT_PUBLIC_SERVER + `/clients/${item.image}`} style={{ height: "120px", width: "100%" }}
                                        className="img-thumbnail  alt=" alt="" />
                                </div>
                                <div className=" d-grid place-items-center">
                                    <h4 className="mt-4">{item.name}</h4>
                                </div>
                            </div>
                        </div>
                    })
                }
            </OwlCarousel>
        </div>
    )
}
