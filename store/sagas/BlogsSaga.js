import { takeEvery, put } from "redux-saga/effects"
import {  GET_BLOGS,GET_BLOGS_RED } from "../constants/constants"

import { getBlogsAPI } from "../services/BlogsService"

function* getBlogSaga() {
    var response = yield getBlogsAPI()
    yield put({ type: GET_BLOGS_RED, result: response.result, data: response.data })
}

export default function* blogSaga() {    //watcher
    yield takeEvery(GET_BLOGS, getBlogSaga)
}



