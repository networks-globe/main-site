import { useState, useEffect } from "react"

export default function Career() {
    let [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        aboutYourself: "",
        aboutCourse: "",
        course: "",
        center: "",
        jobType: "Full Time",
        linkedinProfile: "",
        resume: ""
    })
    let [courseDropDown, setCourseDropDown] = useState([])
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
    function getFile(e) {
        var value = e.target.files[0]
        setData((old) => {
            return {
                ...old,
                ['resume']: value
            }
        })
    }
    async function postData(e) {
        e.preventDefault()
        var formData = new FormData()
        formData.append("name", data.name)
        formData.append("email", data.email)
        formData.append("phone", data.phone)
        formData.append("aboutYourself", data.aboutYourself)
        formData.append("aboutCourse", data.aboutCourse)
        formData.append("course", data.course)
        formData.append("center", data.center)
        formData.append("jobType", data.jobType)
        formData.append("linkedinProfile", data.linkedinProfile)
        formData.append("resume", data.resume)

        var response = await fetch(process.env.NEXT_PUBLIC_SERVER + "/api/apply-for-job", {
            method: "post",
            body: formData
        })
        var result = await response.json()
        setShow(true)
        if (result.result === "Done") {
            setMsg("Thanks to Share Your Details Our Team Will Contact You Soon!")
            setData({
                name: "",
                email: "",
                phone: "",
                aboutYourself: "",
                aboutCourse: "",
                course: "",
                center: "",
                jobType: "Full Time",
                linkedinProfile: "",
                resume: ""
            })
        }
        else {
            setMsg(result.message)
        }
    }
    async function getAPIData() {
        var response1 = await fetch(process.env.NEXT_PUBLIC_SERVER + "/api/course-dropdown")
        var result1 = await response1.json()
        if (result1.data)
            setCourseDropDown(result1.data)

        let response2 = await fetch(process.env.NEXT_PUBLIC_SERVER + "/api/center")
        let result2 = await response2.json()
        if (result2.data)
            setCenter(result2.data)
        setData((old) => {
            return {
                ...old,
                ['course']: result1.data[0].name,
                ['center']: result2.data[0].title
            }
        })
    }
    useEffect(() => {
        getAPIData()
    }, [courseDropDown.length, center.length])
    return (
        <div className="container-fluid p-2">
            <div className="row">
                <div className="col-md-6 col-12 card p-5">
                    <h3 className='text-bold'>Want to Become a Part of Ducat Family</h3>
                    <p className='text-justify'>Being an instructor is not a bad job because through this profession you can deliver your skills to others in the most efficient way so that other people can with the other companies.</p>

                    <h4>The Question Arises where to go?</h4>

                    <p className='text-justify'>We at Ducat provide the opportunities to the newbies to make their career as an instructor. At Ducat you can apply for more than one zone as a trainer for the technology they are good at. Trainers have always played a vital role in the enhancement of the knowledge as every instructor has his own way to deal and deliver to his trainees and at Ducat, you can find range of instructors with the most innovative ways of teaching.</p>

                    <p className='text-justify'>It is not easy to find a right place to work at but at Ducat we end your search because Ducat is the best place for the all the instructors whether new or experienced to work at because it is one of the good education and training industries where you can get the best exposure in every technological field if you have that talent in you.</p>

                    s                        <p className='text-justify'>Instructors are those who are responsible for whatever a trainee learns that is why it is becoming an instructor is not an easy job and to be one amongst the known instructors and to increase your value it is necessary to work with the one where you get the real value and Ducat is the right place for you if you want to enlist your name as a good instructor.</p>
                </div>
                <div className="col-md-6 col-12">
                    <div className="card p-1">
                        <h3 className='text-center mt-2'>Apply Now For Job</h3>
                    </div>
                    {
                        show ?
                            <div className="alert pdf-background text-center alert-dismissible fade show" role="alert">
                                {msg}
                                <button type="button" className="btn-close text-light" data-bs-dismiss="alert" aria-label="Close">X</button>
                            </div> : ""
                    }
                    <form onSubmit={postData}>
                        <div className="mb-2">
                            <input type="text" name="name" required value={data.name} id="name" placeholder='Enter Name : ' onChange={getInputData} className="form-control" />
                        </div>
                        <div className="row mb-2">
                            <div className="col-md-6">
                                <input type="text" name="email" required value={data.email} id="email" placeholder='Enter Email Address : ' onChange={getInputData} className="form-control" />
                            </div>
                            <div className="col-md-6">
                                <input type="number" name="phone" required value={data.phone} id="phone" placeholder='Enter Phone Number : ' onChange={getInputData} className="form-control" />
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-md-6">
                                <select name="course" id="course"  defaltValue={data.course} className="form-control">
                                    <option value="">Choose a Course</option>
                                    {
                                        courseDropDown.map((item, index) => {
                                            return <option key={index} value={item.name}>{item.name}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className="col-md-6">
                                <select name="center" id="center"  defaltValue={data.center} className="form-control">
                                    <option value="">Choose a Center</option>
                                    {
                                        center.map((item, index) => {
                                            return <option key={index} value={item.title}>{item.title}</option>
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-md-6">
                                <select name="jobType" id="jobType" required value={data.jobType} className='form-control' onChange={getInputData}>
                                    <option value="Full Time">Full Time</option>
                                    <option value="Part Time">Part Time</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <input type="text" name="linkedinProfile" value={data.linkedinProfile} id="linkedinProfile" placeholder='Enter Linkedin Profile : ' onChange={getInputData} className="form-control" />
                            </div>
                        </div>
                        <div className="mb-2">
                            <textarea name="aboutYourself" value={data.aboutYourself} onChange={getInputData} id="aboutYourself" rows="3" className='form-control' placeholder='About Yourself'></textarea>
                        </div>
                        <div className="mb-2">
                            <textarea name="aboutCourse" value={data.aboutCourse} onChange={getInputData} id="aboutCourse" rows="3" className='form-control' placeholder='About Course'></textarea>
                        </div>
                        <div className="mb-2">
                            <label>Resume</label>
                            <input type="file" name="resume" onChange={getFile} id="resume" className='form-control' />
                        </div>
                        <div className="mb-2">
                            <button className='btn pdf-background w-100'>Apply</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
