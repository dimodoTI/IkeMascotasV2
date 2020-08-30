export const GET = "[adjuntos] GET";
export const ADD = "[adjuntos] ADD";
export const PATCH = "[adjuntos] PATCH";
export const UPDATE = "[adjuntos] UPDATE";
export const REMOVE = "[adjuntos] REMOVE";
export const EDIT = "[adjuntos] EDIT"
export const UPLOAD = "[adjuntos] UPLOAD"
export const DEL_CLIENTE = "[adjuntos] DEL_CLIENTE"
export const DEL_VETERINARIO = "[adjuntos] DEL_VETERINARIO"

export const UPLOAD_SUCCESS = "[adjuntos] UPLOAD_SUCCESS"
export const UPLOAD_ERROR = "[adjuntos] UPLOAD_ERROR"
export const DEL_CLIENTE_SUCCESS = "[adjuntos] DEL_CLIENTE_SUCCESS"
export const DEL_CLIENTE_ERROR = "[adjuntos] DEL_CLIENTE_ERROR"
export const DEL_VETERINARIO_SUCCESS = "[adjuntos] DEL_VETERINARIO_SUCCESS"
export const DEL_VETERINARIO_ERROR = "[adjuntos] DEL_VETERINARIO_ERROR"

export const GET_SUCCESS = "[adjuntos] GET success";
export const ADD_SUCCESS = "[adjuntos] ADD success";
export const PATCH_SUCCESS = "[adjuntos] PATCH success";
export const UPDATE_SUCCESS = "[adjuntos] UPDATE success";
export const REMOVE_SUCCESS = "[adjuntos] REMOVE success";

export const GET_ERROR = "[adjuntos] GET error";
export const ADD_ERROR = "[adjuntos] ADD error";
export const PATCH_ERROR = "[adjuntos] PATCH error";
export const UPDATE_ERROR = "[adjuntos] UPDATE error";
export const REMOVE_ERROR = "[adjuntos] REMOVE error";




export const get = (options) => ({
    type: GET,
    options: options
});

export const add = (body, token) => ({
    type: ADD,
    body: body,
    token: token
});

export const update = (id, body, token) => ({
    type: UPDATE,
    id: id,
    body: body,
    token: token
});

export const patch = (id, body, token) => ({
    type: PATCH,
    id: id,
    body: body,
    token: token
});

export const remove = (id, token) => ({
    type: REMOVE,
    id: id,
    token: token
});

export const edit = (modo, item) => ({
    type: EDIT,
    item: item
})

export const upload = (body, token) => ({
    type: UPLOAD,
    body: body,
    token: token

})

export const delCliente = (reservaId, token) => ({
    type: DEL_CLIENTE,
    opciones: {
        filter: "ReservaId eq " + reservaId + " perfil eq cliente and Activo",
        orderby: "Fecha desc",
        token: token
    }
})

export const delVeterinario = (reservaId, token) => ({
    type: DEL_VETERINARIO,
    opciones: {
        filter: "ReservaId eq " + reservaId + " perfil eq Veterinario and Activo",
        orderby: "Fecha desc",
        token: token
    }
})