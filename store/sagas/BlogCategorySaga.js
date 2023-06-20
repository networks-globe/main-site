import { takeEvery, put } from "redux-saga/effects"
import {  GET_BLOG_CATEGORY,GET_BLOG_CATEGORY_RED } from "../constants/constants"

import { getBlogCategoryAPI } from "../services/BlogCategoryService"

function* getBlogCategorySaga() {
    var response = yield getBlogCategoryAPI()
    yield put({ type: GET_BLOG_CATEGORY_RED, result: response.result, data: response.data })
}

export default function* blogCategorySaga() {    //watcher
    yield takeEvery(GET_BLOG_CATEGORY, getBlogCategorySaga)
}



