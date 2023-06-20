import React, { useEffect, useState } from 'react'

import { getBlogs } from "../../store/action_creators/BlogsAction"
import { getBlogCategory } from "../../store/action_creators/BlogCategoryAction"
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'

import InfiniteScroll from "react-infinite-scroll-component";
import EnquiryForm from './EnquiryForm'

export default function Blogs() {
    let allblogs = useSelector((state) => state.BlogsStateData)
    let allblogCategories = useSelector((state) => state.BlogCategoryStateData)
    let dispatch = useDispatch()
    let [blogs, setBlogs] = useState([])
    let [count, setCount] = useState(1)
    let [currentCategory,setCurrentCategory] = useState("")
    function selectCategory(item){
        setCurrentCategory(item)
        setCount(1)
        if(item==="")
        setBlogs(allblogs.slice(0,6))
        else{
            let d = allblogs.filter((x)=>{
                return x.blogcategory===item
            })
            setBlogs(d.slice(0,6))
        }
    }
    async function getAPIData() {
        dispatch(getBlogCategory())
        dispatch(getBlogs())
        setBlogs(allblogs.slice((count - 1) * 6, count * 6))
    }
    var fetchMoreData = ()=>{
        if(currentCategory==="")
        setBlogs(blogs.concat(allblogs.slice(count* 6, (count+1) * 6)))
        else{
            let d = allblogs.filter((item)=>item.blogcategory===currentCategory)
            setBlogs(blogs.concat(d.slice(count* 6, (count+1) * 6)))
        }
        setCount(count+1)
    }
    useEffect(() => {
        getAPIData()
    }, [allblogs.length, allblogCategories.length])
    return (
        <>
            <section className="sptb">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-12">
                            {
                                blogs.length?
                                <InfiniteScroll
                                dataLength={blogs.length}
                                next={fetchMoreData}
                                hasMore={blogs.length<allblogs.length}
                                loader={<h4>Loading...</h4>}
                            >
                                <div className="row">
                                    {
                                        blogs.length && blogs.map((item, index) => {
                                            return <div key={index} className="col-xl-6 col-lg-12 col-md-12">
                                                <div className="card">
                                                    <div className="item7-card-img">
                                                        <img src={process.env.NEXT_PUBLIC_SERVER + `/blog/${item.featureImage}`} alt="img" className="cover-image" height="200px" width="100%" />
                                                        <div className="item7-card-text">
                                                            <span className="badge badge-success">{item.category}</span>
                                                        </div>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="item7-card-desc d-flex mb-2">
                                                            {/* <a href="#"><i className="fa fa-calendar-o text-muted me-2"></i>Dec-03-2018</a>
                                                        <div className="ms-auto">
                                                            <a href="#"><i className="fa fa-comment-o text-muted me-2"></i>4 Comments</a>
                                                        </div> */}
                                                        </div>
                                                        <Link href={`/blogs/${item.seourl}`} className="text-dark"><h4 className="font-weight-semibold">{item.title}</h4></Link>
                                                        <p dangerouslySetInnerHTML={{ __html: item.shortdescription }} style={{ height: "188px", overflow: 'hidden', textOverflow: "ellipsis" }}></p>
                                                        <Link href={`/blogs/${item.seourl}`} className="btn btn-primary btn-sm">Read More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        })
                                    }
                                </div>
                            </InfiniteScroll>:
                            <p className='text-center'>No Record Found</p>
                            }
                            {/* <div className="center-block text-center">
                                <ul className="pagination mb-lg-0 mb-5">
                                    <li className="page-item page-prev disabled">
                                        <a className="page-link" href="#" tabIndex="-1">Prev</a>
                                    </li>
                                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item page-next">
                                        <a className="page-link" href="#">Next</a>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            {/* <div className="card">
                                <div className="card-body">
                                    <div className="input-group">
                                        <input type="text" className="form-control br-ts-7 br-bs-7" placeholder="Search" />
                                        <div className="input-group-text border-0 bg-transparent p-0 ">
                                            <button type="button" className="btn btn-primary br-te-7 br-be-7">
                                                Search
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Categories</h3>
                                </div>
                                <div className="card-body p-0">
                                    <div className="list-catergory">
                                        <div className="item-list">
                                            <ul className="list-group mb-0">
                                                {
                                                    allblogCategories.length && allblogCategories.map((item, index) => {
                                                        return <li key={index} className="list-group-item">
                                                            <button className="text-dark border-0 bg-light p-1 w-100" onClick={()=>selectCategory(item.title)}>
                                                                <i className="fa fa-book bg-primary text-primary float-start"></i> {item.title}
                                                            </button>
                                                        </li>
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <EnquiryForm />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
