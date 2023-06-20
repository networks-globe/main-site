import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCenter } from "../../store/action_creators/CenterAction"
export default function OnlineRegistration() {
    let [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: "",
        center: "",
        course: "",
        address: "",
        city: "",
        country: "",
        zipcode: "",
        amount: 0
    })
    var allcenters = useSelector(state => state.CenterStateData)
    var dispatch = useDispatch()
    var router = useRouter()
    function getAPIData() {
        dispatch(getCenter())
        if (allcenters.length) {
            setUserData((old) => {
                return {
                    ...old,
                    ['center']: allcenters[0].title
                }
            })
        }
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
    async function postData(e) {
        e.preventDefault()
        if (userData.phone.length != 10)
            alert("Invalid Phone Number\nPlease Enter Only 10 Digits")
        else {
            var data = {
                name:userData.name,
                email:userData.email,
                phone:userData.phone,
                course:userData.course,
                center:userData.center,
                city:userData.city,
                country:userData.country,
                address:userData.address,
                zipcode:userData.zipcode,
                amount:userData.amount,
            }
            localStorage.setItem("name", userData.name)
            localStorage.setItem("email", userData.email)
            localStorage.setItem("phone", userData.phone)
            localStorage.setItem("amount", userData.amount)
            var response = await fetch(process.env.NEXT_PUBLIC_SERVER + "/api/online-registration", {
                method: "post",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ ...data })
            })
            response = await response.json()
            if (response.result === "Done"){
                localStorage.setItem("orderid",response.data._id)
                router.push("/payment")
            }
            else
            alert(response.message)
        }
    }
    useEffect(() => {
        getAPIData()
    }, [allcenters.length])
    return (
        <div className='container-fluid w-75 m-auto  mt-3 p-3'>
            <h5 className='text-center p-2 mt-3'>Register for a New Course or Pay Your Course Fee</h5>
            <form onSubmit={postData}>
                <div className="mb-3">
                    <input type="text" name='name' placeholder='Enter Your Name : ' onChange={getData} required minLength={3} className='form-control' />
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <input type="email" name="email" placeholder='Enter Email Address' onChange={getData} required className='form-control' />
                    </div>
                    <div className="col-md-6">
                        <input type="number" name="phone" placeholder='Enter Phone Number' onChange={getData} required className='form-control' />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <input type="text" name="course" placeholder='Enter Course' onChange={getData} required className='form-control' />
                    </div>
                    <div className="col-md-6">
                        <select name="center" className='form-select' onChange={getData} required>
                            {
                                allcenters.map((item, index) => {
                                    return <option key={index} value={item.title}>{item.title}</option>
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="mb-3">
                    <textarea name='address' rows={2} onChange={getData} required className="form-control" placeholder='Enter Address'></textarea>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <input type="text" name="city" onChange={getData} required placeholder='Enter City Name' className='form-control' />
                    </div>
                    <div className="col-md-6">
                        <input type="text" name="country" onChange={getData} required placeholder='Enter Country Name' className='form-control' />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <input type="text" name="zipcode" onChange={getData} required placeholder='Enter ZIP Code' className='form-control' />
                    </div>
                    <div className="col-md-6">
                        <input type="number" name="amount" onChange={getData} required placeholder='Enter Amount' className='form-control' />
                    </div>
                </div>
                <div className="mb-3">
                    <button className='btn btn-primary w-100'>Submit</button>
                </div>
            </form>
        </div>
    )
}
