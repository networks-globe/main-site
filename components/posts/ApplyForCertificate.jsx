import { useState, useEffect } from "react"

export default function ApplyForCertificate() {
    let [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        faculty: "",
        ducatId: "",
        course: "",
        center: "",
        from: "",
        toDate: "",
    })
    let [center, setCenter] = useState([])
    let [show, setShow] = useState(false)
    let [msg, setMsg] = useState("")
    function getInputData(e) {
        var { name, value } = e.target
        setData((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }
    async function postData(e) {
        document.getElementById("submitButton").style.display="none"
        e.preventDefault()
        if (data.name === "" || data.email === "" || data.phone === "" || data.course === "" || data.center === "" || data.faculty === "" || data.ducatId === "" || data.from === "" || data.toDate === "") {
            setShow(true)
            setMsg("Please Fill All Details !!!")
        }
        else {
            var response = await fetch(process.env.NEXT_PUBLIC_SERVER + "/api/certification-request/search-by-id", {
                method: "post",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ ducatId: data.ducatId })
            })
            var result = await response.json()
            if (result.result === "Done") {
                setShow(true)
                setMsg("Your Certification Request is Already in Process. Please Wait or Contact Us on Call")
            }
            else {
                var item = {
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    course: data.course,
                    center: data.center,
                    faculty: data.faculty,
                    ducatId: data.ducatId,
                    from: data.from,
                    toDate: data.toDate,
                }
                var response = await fetch(process.env.NEXT_PUBLIC_SERVER + "/api/certification-request", {
                    method: "post",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(item)
                })
                var result = await response.json()
                setShow(true)
                if (result.result === "Done") {
                    setMsg("Thanks to Share Your Details.\nYour certificate Will be Generated Within 3-5 Working Days. a Confirmation Mail will Be Sent on Your Registered Email Id")
                    setData({
                        name: "",
                        email: "",
                        phone: "",
                        faculty: "",
                        ducatId: "",
                        course: "",
                        center: "",
                        from: "",
                        toDate: ""
                    })
                }
                else {
                    setMsg(result.message)
                }
            }
        }
    }
    function resetForm() {
        setData({
            name: "",
            email: "",
            phone: "",
            faculty: "",
            ducatId: "",
            course: "",
            center: "",
            from: "",
            toDate: ""
        })
    }
    async function getAPIData() {
        let response2 = await fetch(process.env.NEXT_PUBLIC_SERVER + "/api/center")
        let result2 = await response2.json()
        if (result2.data)
            setCenter(result2.data)
        setData((old) => {
            return {
                ...old,
                ['center']: result2.data[0].title
            }
        })
    }
    useEffect(() => {
        getAPIData()
    }, [center.length])
    return (
        
        <div className="container-fluid w-75 m-auto">
            <h4 className='card mt-5 text-center p-2'>Apply for Certificate</h4>
            {
                show ?
                    <div className="alert text-light text-center alert-dismissible fade show" role="alert" style={{backgroundColor:"green"}}>
                        {msg}
                        <button type="button" className="btn-close text-light" data-bs-dismiss="alert" aria-label="Close">X</button>
                    </div> : ""
            }
            <form onSubmit={postData}>
                <div className="mb-3">
                    <input type="text" required onChange={getInputData} name="name" value={data.name} placeholder='Enter Name ' className='form-control' />
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <input type="email" required onChange={getInputData} name="email" value={data.email} placeholder='Enter Email Address' className='form-control' />
                    </div>
                    <div className="col-md-6">
                        <input type="number" required onChange={getInputData} name="phone" value={data.phone} placeholder='Enter Phone Number' className='form-control' />
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-md-6">
                        <input type="text" required onChange={getInputData} name="course" value={data.course} placeholder='Enter Course ' className='form-control' />                       
                    </div>
                    <div className="col-md-6">
                        <select name="center" id="center" required onChange={getInputData} className="form-control">
                            <option value="">Choose a Center</option>
                            {
                                center.map((item, index) => {
                                    return <option key={index} value={item.title}>{item.title}</option>
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <input type="text" required onChange={getInputData} name="faculty" value={data.faculty} placeholder='Enter Faculty Name' className='form-control' />
                    </div>
                    <div className="col-md-6">
                        <input type="text" required onChange={getInputData} name="ducatId" value={data.ducatId} placeholder='Enter Ducat Student Id Number eg 2021/10145' className='form-control' />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label className="form-label">Start Date</label>
                        <input type="date" required onChange={getInputData} name="from" value={data.from} className='form-control' />
                    </div>
                    <div className="col-md-6">
                    <label className="form-label">End Date</label>
                        <input type="date" required onChange={getInputData} name="toDate" value={data.toDate} className='form-control' />
                    </div>
                </div>
                <div className="mb-3 d-flex">
                    <button className='btn home-banner text-light w-50 m-2' onClick={resetForm}>Reset</button>
                    <button className='btn pdf-background w-50 m-2' type="submit" id="submitButton">Send Request</button>
                </div>
            </form>
        </div>
    )
}
