import jsPDF from 'jspdf'
import React, { useState} from 'react'

export default function DownloadCertificate() {
    var [show, setShow] = useState(false)
    var [msg, setMsg] = useState("")
    var [ducatId, setDucatId] = useState("")
    var [student,setStudent] = useState({})
    function getData(e) {
        setDucatId(e.target.value)
    }
    function generateCertificate(name){
        var doc = new jsPDF()
        var downloadContent = document.querySelector(".download-content")
        doc.html(downloadContent, {
            callback: function (doc) {
                // Save the PDF
                doc.save(student.name);
            },
            x: 15,
            y: 15,
            width: 170, //target width in the PDF document
            windowWidth: 650 //window width in CSS pixels
        });
    }
    async function postData() {
        var response = await fetch(process.env.NEXT_PUBLIC_SERVER + "/api/certification-request/search-by-id", {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ ducatId: ducatId })
        })
        var result = await response.json()
        if (result.result === "Done") {
            setStudent(result.data)
            var downloadForm = document.querySelector(".download-form")
            var downloadContent = document.querySelector(".download-content")
            var downloadbutton = document.querySelector(".download-button")
            downloadForm.style.display = "none"
            downloadContent.style.display = "block"
            downloadbutton.style.display = "block"
        }
        else {
            setShow(true)
            setMsg(result.message)
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
            <button className='btn pdf-background w-25 m-auto download-button' style={{display:"none"}} onClick={generateCertificate}>Download</button>
            <div className='d-flex justify-content-center' style={{ height: "400px" }}>
                <div className="container-fluid  download-form" style={{ display: "block", height: "400px" }}>
                    <div className="col-md-3 m-auto">
                        <h5 className='mt-5 card text-center p-2'>Download Certificate</h5>
                        {
                            show ?
                                <div className="alert pdf-background text-center alert-dismissible fade show" role="alert">
                                    {msg}
                                    <button type="button" className="btn-close text-light" data-bs-dismiss="alert" aria-label="Close">X</button>
                                </div> : ""
                        }
                        <div className="mb-3">
                            <input type="text" name="ducatId" onChange={getData} placeholder='Enter Ducat Id to Download Certificate' className='form-control' />
                        </div>
                        <button className='btn pdf-background w-100' onClick={postData}>View</button>
                    </div>
                </div>
            </div>
        </>
    )
}
