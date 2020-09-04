import {
    GET,
    GET_SUCCESS,
    GET_ERROR,
    ADD,
    ADD_SUCCESS,
    ADD_ERROR,
    UPDATE,
    UPDATE_SUCCESS,
    UPDATE_ERROR,
    PATCH,
    PATCH_SUCCESS,
    PATCH_ERROR,
    REMOVE,
    REMOVE_SUCCESS,
    REMOVE_ERROR,
    RESERVA_CANTIDAD,
    reservaParaChat,
    RESERVA_CANTIDAD_SUCCESS,
    RESERVA_CANTIDAD_ERROR,

    ENATENCION,
    TRAER_ULTIMA_RESERVA,
    TRAER_ULTIMA_RESERVA_ERROR,
    TRAER_ULTIMA_RESERVA_SUCCESS,
    traerUltimaReserva,
    get as getReservas,
    reservaCantidad



} from "./actions";

import {
    delCliente,
    delVeterinario
} from "../adjuntos/actions"

import {
    ikeReservasQuery,
    ikeReservas
} from "../fetchs"

import {

    RESTAdd,
    RESTDelete,
    RESTUpdate,
    RESTPatch
} from "../rest/actions"

import {
    apiRequest
} from "../api/actions"

export const get = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === GET || action.type === RESERVA_CANTIDAD || action.type === TRAER_ULTIMA_RESERVA) {
        dispatch(apiRequest(ikeReservasQuery, action.options, action.onSuccess, action.onError))
    }

};

export const enAtencion = ({
    dispatch,
    getState
}) => next => action => {
    next(action);
    if (action.type === ENATENCION) {
        dispatch(delCliente(action.registro.registro.Id, getState().cliente.datos.token))
        dispatch(delVeterinario(action.registro.registro.Id, getState().cliente.datos.token))
    }
};

export const add = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === ADD) {
        dispatch(RESTAdd(ikeReservas, action.body, ADD_SUCCESS, ADD_ERROR, action.token))
    }
};

export const update = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === UPDATE) {
        dispatch(RESTUpdate(ikeReservas, action.id, action.body, UPDATE_SUCCESS, UPDATE_ERROR, action.token))
    }
};

export const patch = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === PATCH) {
        dispatch(RESTPatch(ikeReservas, action.id, action.body, PATCH_SUCCESS, PATCH_ERROR, action.token))
    }
};

export const remove = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === REMOVE) {
        dispatch(RESTDelete(ikeReservas, action.id, REMOVE_SUCCESS, REMOVE_ERROR, action.token))
    }
};


export const processGet = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === GET_SUCCESS || action.type === RESERVA_CANTIDAD_SUCCESS || action.type === TRAER_ULTIMA_RESERVA_SUCCESS) {

    }

};

export const processComand = ({
    dispatch,
    getState
}) => next => action => {
    next(action);
    if (action.type === UPDATE_SUCCESS || action.type === REMOVE_SUCCESS || action.type === PATCH_SUCCESS) {

    }
    if (action.type === ADD_SUCCESS) {
        dispatch(traerUltimaReserva(getState().cliente.datos.token))
        dispatch(reservaCantidad({
            select: "Id",
            token: getState().cliente.datos.token,
        }))

    }
};



export const processError = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === GET_ERROR || action.type === ADD_ERROR || action.type === UPDATE_ERROR || action.type === REMOVE_ERROR || action.type === PATCH_ERROR || action.type === RESERVA_CANTIDAD_ERROR || action.type === TRAER_ULTIMA_RESERVA_ERROR) {

    }
};




export const middleware = [get, add, update, enAtencion, patch, remove, processGet, processComand, processError];