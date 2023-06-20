import React, { useState} from 'react'

export default function VerifyCertificate() {
    var [show, setShow] = useState(false)
    var [msg, setMsg] = useState("")
    var [certificateNo, setCertificateNo] = useState("")
    var [student,setStudent] = useState({})
    function getData(e) {
        setCertificateNo(e.target.value)
    }
    async function postData() {
        var response = await fetch(process.env.NEXT_PUBLIC_SERVER + "/api/certification-request/search-by-number", {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ certificateNo:certificateNo })
        })
        var result = await response.json()
        if (result.result === "Done") {
            setStudent(result.data)
            // console.log(`${(new Date(`${result.data.from.replaceAll("/","-")}`)).getDate()}-${(new Date(`${result.data.from.replaceAll("/","-")}`)).getMonth()+1}-${(new Date(`${result.data.from.replaceAll("/","-")}`)).getFullYear()}`)
            var downloadForm = document.querySelector(".download-form")
            var downloadContent = document.querySelector(".download-content")
            downloadForm.style.display = "none"
            downloadContent.style.display = "block"
        }
        else {
            setShow(true)
            setMsg("Invalid Certificate Number")
        }
    }
    return (
        <>
            <div className="download-content" style={{ display: "none" }}>
                <div className="certificateWrapper">

                    <img src="/images/certificate.jpg" alt="Certificate" />

                    <h1>{student.name}</h1>

                    <h2>{student.course}</h2>

                    <h3>Certificate Number: <span>{student.certificateNo}</span></h3>

                    <h4>Student ID: <span>{student.ducatId}</span></h4>

                    <h5>Course Start Date: <span>{student.from}</span></h5>

                    <h6>Course End Date: <span>{student.toDate}</span></h6>
                </div>
            </div>
            <div className='d-flex justify-content-center' style={{ height: "400px" }}>
                <div className="container-fluid  download-form" style={{ display: "block", height: "400px" }}>
                    <div className="col-md-3 m-auto">
                        <h5 className='mt-5 card text-center p-2'>Verify Certificate</h5>
                        {
                            show ?
                                <div className="alert pdf-background text-center alert-dismissible fade show" role="alert">
                                    {msg}
                                    <button type="button" className="btn-close text-light" data-bs-dismiss="alert" aria-label="Close">X</button>
                                </div> : ""
                        }
                        <div className="mb-3">
                            <input type="text" name="certificateNo" onChange={getData} placeholder='Enter Certificate Number to Verify Certificate' className='form-control' />
                        </div>
                        <button className='btn pdf-background w-100' onClick={postData}>View</button>
                    </div>
                </div>
            </div>
        </>
    )
}
