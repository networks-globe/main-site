
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });


import { useRouter } from 'next/router'
import { getPlacedStudents } from '../../store/action_creators/PlacedStudentsAction'
import { getDrive } from '../../store/action_creators/DriveAction'
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

export default function PlacedStudents() {

    const options = {
        margin: 30,
        responsiveClass: true,
        nav: true,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
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
    let [data, setData] = useState([])
    var dispatch = useDispatch()
    let allPlacedStudents = useSelector((state) => state.PlacedStudentsStateData)
    let alldrives = useSelector((state) => state.DriveStateData)
    async function getAPIData() {
        dispatch(getPlacedStudents())
        dispatch(getDrive())
        if (allPlacedStudents.length) {
            setData(allPlacedStudents)
        }
    }
    useEffect(() => {
        (async () => {
            await getAPIData();
        })()
    }, [allPlacedStudents.length, alldrives.length])
    return (
        <div className="container">
            <h3 className="mb-5 mt-4 text-center">Placed Students</h3>

            <OwlCarousel id="myCarousel5" className='owl-theme owl-carousel-icons6' {...options}>
                {
                    data.map((item, index) => {
                        return <div key={index} className="item">
                            <div className="card">
                                <div className="product-item2">
                                    <div className="product-item2-img text-center">
                                        {
                                            item.image ?
                                                <img src={process.env.NEXT_PUBLIC_SERVER + `/placedStudents/${item.image}`} alt="img" className="mx-auto" /> :
                                                <img src="../assets/images/products/8.png" alt="img" className="mx-auto" />
                                        }
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="product-item2-desc">
                                        <table className='table table-bordered'>
                                            <tbody>
                                                <tr>
                                                    <th>Name</th>
                                                    <td>{item.name}</td>
                                                </tr>
                                                <tr>
                                                    <th>Job Profile</th>
                                                    <td>{item.role}</td>
                                                </tr>
                                                <tr>
                                                    <th>Package</th>
                                                    <td>{item.package}</td>
                                                </tr>
                                                <tr>
                                                    <th>Company</th>
                                                    <td>{item.company}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </OwlCarousel>
            <section className="sptb">
                <div className="container">
                    <div className="section-title center-block text-center">
                        <h1>Upcoming Drives and Walk-In</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card mb-0">
                                {/* <div className="card-header">
                                    <h3 className="card-title text-transform-lowercase">Just one step and job is yours</h3>
                                </div> */}
                                <div className="card-body">
                                    <OwlCarousel id="categorizes-demo" className='owl-carousel owl-carousel-icons5' {...options}>
                                        {
                                            alldrives && alldrives.map((item, index) => {
                                                return <div key={index} className="item">
                                                    <div className="power-ribbon power-ribbon-top-left text-warning"><span className="bg-warning"><i className="fa fa-bolt"></i></span></div>
                                                    <div className="owl-product text-center border">
                                                        <div className="owl-productinfo">
                                                            <a href="ecommerce.html"><h5 className="text-center text-dark mt-3 mb-1 font-weight-bold">{item.name}</h5></a>
                                                            <div className='d-flex justify-content-between'>
                                                                <div>
                                                                    <p className="text-dark text-center mb-2">Date</p>
                                                                    <p className="text-dark text-center mb-2">{item.startDate}</p>
                                                                </div>
                                                                <div>
                                                                    <p className="text-dark text-center mb-2">Time</p>
                                                                    <p className="text-dark text-center mb-2">{item.startTime}</p>
                                                                </div>
                                                            </div>
                                                            <div className="table-responsive">
                                                            <table className='table table-bordered'>
                                                                <tbody>
                                                                    <tr>
                                                                        <th>Technology</th>
                                                                        <td>{item.technology}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>Company</th>
                                                                        <td>{item.company}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>Profile</th>
                                                                        <td>{item.profile}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>Experience</th>
                                                                        <td>{item.experience}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>Qualification</th>
                                                                        <td>{item.qualification}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>Contact Person</th>
                                                                        <td>{item.contactPerson}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>Contact Number</th>
                                                                        <td>{item.contactNumber}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>Location</th>
                                                                        <td>{item.location}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>Skills</th>
                                                                        <td>{item.skills}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>Venue</th>
                                                                        <td>{item.venu}</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            })
                                        }
                                    </OwlCarousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}
