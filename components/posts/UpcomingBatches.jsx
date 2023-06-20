import React,{useState,useEffect} from 'react'
import { getUpcomingBatches } from '../../store/action_creators/UpcomingBatchesAction'
import { getCenter } from '../../store/action_creators/CenterAction'

import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'
export default function UpcomingBatches() {
  let [upcommingBatches, setUpcommingBatches] = useState([])
  let allUpcomingBatches = useSelector((state) => state.UpcomingBatchesStateData)
  let allcenters = useSelector((state) => state.CenterStateData)
  let dispatch = useDispatch()
  async function getAPIData() {
    dispatch(getUpcomingBatches())
    dispatch(getCenter())
    getCenterSelect('all')
  }
  function getCenterSelect(data) {
    if (data === 'all')
      var items = allUpcomingBatches
    else
      var items = allUpcomingBatches.filter((item) =>{
          var cdata = new Date()
          var batchDate = new Date(`${item.batchDate} ${item.batchTime}`)
          console.log("hello",item.batchDate)
          return item.center === data
      })
    setUpcommingBatches(items)
  }
  useEffect(() => {
    (async () => {
      await getAPIData();
    })()
  }, [ allUpcomingBatches.length, allcenters.length])
  return (
    <>
      <section className="sptb bg-white mt-1">
        <div className="container">
          <div className="section-title center-block text-center">
            <h4>Choose Your Nearest Location</h4>
          </div>
          <div className="panel panel-primary">
            <div className="d-none d-lg-block">
              <div className="tabs-menu d-flex justify-content-between flex-wrap">
                {/* <!-- Tabs --> */}
                {/* <button className="btn btn-primary m-1" style={{ width: "13%" }} onClick={() => getCenterSelect('all')}>All</button> */}
                {
                  allcenters.map((item, index) => {
                    return <button key={index} className="btn home-banner text-light m-1" style={{ width: "15.5%" }} onClick={() => getCenterSelect(item.title)}>{item.title}</button>
                  })
                }
              </div>
            </div>
            <div className="d-block d-lg-none">
              <div className="item-all-cat center-block text-center education-categories">
                <div className="row">
                  {
                    allcenters.map((item, index) => {
                      return <div key={index} className="col-lg-2 col-sm-6 col-6 ">
                        <div className="item-all-card text-dark text-center liner-gradient-background"  style={{ height: "150px" }} onClick={() => getCenterSelect(item.title)}>
                          {/* <Link href={`/course-category/${item.name}`}></Link> */}
                          {/* <div className="iteam-all-icon">
                            {
                              item.logo ?
                                <img src={process.env.NEXT_PUBLIC_SERVER + `/courseCategory/${item.logo}`} style={{ height: "40px" }} alt="" /> : <i className="fa-sharp fa-regular fa-school"></i>
                            }
                          </div> */}
                          <div className="item-all-text mt-3">
                            <h5 className="mb-0 text-body">{item.title}</h5>
                          </div>
                        </div>
                      </div>
                    })
                  }
                </div>
              </div>
            </div>
            <div className="panel-body">
              <div className="tab-content">
                <div className="tab-pane active show" id="index1">
                  <div className="row">
                    {
                      upcommingBatches.map((item, index) => {
                        return <div key={index} className="col-xl-4 col-md-6">
                          <div className="card overflow-hidden">
                            {/* <div className="ribbon ribbon-top-left text-danger"><span className="bg-danger">New</span></div> */}
                            {/* <div className="item-card7-img">
                                <div className="item-card7-imgs">
                                  <a href="#"></a>
                                  <i className="fa fa-graduation-cap text-light" style={{ fontSize: "200px" }}></i>
                                </div>
                                <div className="item-card7-overlaytext">
                                  <a href="#" className="text-white">{item.trainer}</a>
                                  <h4 className="font-weight-semibold mb-0">{item.center}</h4>
                                </div>
                              </div> */}
                            <div className='liner-gradient-background'>
                              <div className="card-body">
                                <a className="me-4"><span className="font-weight-bold">Course:</span></a>
                                <a className="me-4 float-end"><span className="font-weight-bold"></span> {item.course}</a>
                              </div>
                              <div className="card-body">
                                <a className="me-4"><span className="font-weight-bold">Branch:</span></a>
                                <a className="me-4 float-end"><span className="font-weight-bold"></span> {item.center}</a>
                              </div>
                              <div className="card-body">
                                <a className="me-4"><span className="font-weight-bold">Date:</span> {item.startDate}</a>
                                <a className="me-4 float-end"><span className="font-weight-bold">Time:</span> {item.startTime}</a>
                              </div>
                              <div className="card-body">
                                <button data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" className="btn btn-white btn-block home-banner text-light">Get a Call Back</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
