import { takeEvery, put } from "redux-saga/effects"
import {  GET_CLIENTS,GET_CLIENTS_RED } from "../constants/constants"

import { getClientsAPI } from "../services/ClientsService"

function* getClientsSaga() {
    var response = yield getClientsAPI()
    yield put({ type: GET_CLIENTS_RED, result: response.result, data: response.data })
}

export default function* clientsSaga() {    //watcher
    yield takeEvery(GET_CLIENTS, getClientsSaga)
}



