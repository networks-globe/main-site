import { takeEvery, put } from "redux-saga/effects"
import {  GET_GALLERY,GET_GALLERY_RED } from "../constants/constants"

import { getGalleryAPI } from "../services/GalleryService"

function* getGallerySaga() {
    var response = yield getGalleryAPI()
    yield put({ type: GET_GALLERY_RED, result: response.result, data: response.data })
}

export default function* gallerySaga() {    //watcher
    yield takeEvery(GET_GALLERY, getGallerySaga)
}



