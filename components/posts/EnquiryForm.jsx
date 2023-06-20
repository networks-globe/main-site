import { useRouter } from 'next/router'
import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'


import { addHomeEnquiry } from "../../store/action_creators/HomeEnquiryAction"
export default function EnquiryForm() {
    let [courseDropDown, setCourseDropDown] = useState([])
    let [center, setCenter] = useState([])
    let [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: "",
        center: "",
        course: ""
    })
    var dispatch = useDispatch()
    var router = useRouter()
    async function getAPIData() {
        let response = await fetch(process.env.NEXT_PUBLIC_SERVER + "/api/course-dropdown")
        let result = await response.json()
        setCourseDropDown(result.data)
        setUserData((old) => {
            return {
                ...old,
                ['course']: result.data[0].name
            }
        })

        response = await fetch(process.env.NEXT_PUBLIC_SERVER + "/api/center")
        result = await response.json()
        setCenter(result.data)
        setUserData((old) => {
            return {
                ...old,
                ['center']: result.data[0].title
            }
        })
        // console.log("Hello",router.query);
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
        if (userData.phone.length != 10)
            alert("Invalid Phone Number\nPlease Enter Only 10 Digits")
        else {
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
    useEffect(() => {
        (async () => {
            await getAPIData();
        })()
    }, [])
    return (
        <>
            <h5 className='text-center home-banner text-light p-2'>Enquiry Now</h5>
            <form onSubmit={postData}>
                <div className="mb-1">
                    {/* <label htmlFor="name">Name</label> */}
                    <input type="text" name="name" required onChange={getData} id="name" placeholder='Enter Name' className='form-control' />
                </div>
                <div className="mb-1">
                    {/* <label htmlFor="email">Email</label> */}
                    <input type="email" name="email" required onChange={getData} id="email" placeholder='Enter Email' className='form-control' />
                </div>
                <div className="mb-1">
                    {/* <label htmlFor="phone">Phone</label> */}
                    <input type="text" name="phone" required onChange={getData} id="phone" placeholder='Enter Contact Number' className='form-control' />
                </div>
                <div className="mb-1">
                    {/* <label htmlFor="course">Course</label> */}
                    <select name='course' required onChange={getData} id='course' className='form-control'>
                        <option value="" disabled>Select a Course</option>
                        {
                            courseDropDown.map((item, index) => {
                                return <option key={index} value={item.name}>{item.name}</option>
                            })
                        }
                    </select>
                </div>
                <div className="mb-1">
                    {/* <label htmlFor="center">Center</label> */}
                    <select name='center' required onChange={getData} id='center' className='form-control'>
                        <option value="" disabled>Select Branch</option>
                        {
                            center.map((item, index) => {
                                return <option key={index} value={item.title}>{item.title}</option>
                            })
                        }
                    </select>
                </div>
                <div className="mt-2">
                    <button className='btn home-banner text-light w-100' type='submit'>Submit</button>
                </div>
            </form>
        </>
    )
}
