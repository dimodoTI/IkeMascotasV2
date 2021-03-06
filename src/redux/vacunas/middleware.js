import {
    GET,
    GET_SUCCESS,
    GET_ERROR,



} from "./actions";

import {
    ikeVacunasQuery
} from "../fetchs"



import {
    apiRequest
} from "../api/actions"
import {
    GET_CANTIDAD_ERROR
} from "../mascotas/actions";

export const get = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === GET) {
        dispatch(apiRequest(ikeVacunasQuery, action.options, GET_SUCCESS, GET_ERROR))
    }
};

export const processGet = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === GET_SUCCESS) {

    }
};

export const processError = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === GET_ERROR) {

    }
};

export const middleware = [get, processGet, processError];