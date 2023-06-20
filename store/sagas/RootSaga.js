import { all } from "redux-saga/effects"

import courseSaga from "./CourseSaga"
import courseCategorySaga from "./CourseCategorySaga"
import centerSaga from "./CenterSaga"
import homeEnquirySaga from "./HomeEnquirySaga"
import upcomingBatchesSaga from "./UpcomingBatchesSaga"
import serviceSaga from "./ServicesSaga"
import cmsSaga from "./CMSSaga"
import driveSaga from "./DriveSaga"
import testimonialSaga from "./TestimonialSaga"
import placedStudentsSaga from "./PlacedStudentsSaga"
import gallerySaga from "./GallerySaga"
import clientsSaga from "./ClientsSaga"
import blogsSaga from "./BlogsSaga"
import blogCategorySaga from "./BlogCategorySaga"

export default function* RootSaga() {
    yield all([
        courseSaga(),
        courseCategorySaga(),
        centerSaga(),
        homeEnquirySaga(),
        upcomingBatchesSaga(),
        serviceSaga(),
        cmsSaga(),
        driveSaga(),
        testimonialSaga(),
        placedStudentsSaga(),
        gallerySaga(),
        clientsSaga(),
        blogsSaga(),
        blogCategorySaga()
    ])
}