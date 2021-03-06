import {
    GET_SUCCESS,
    GET_ERROR,
    PATCH_SUCCESS,
    PATCH_ERROR,
    UPDATE_SUCCESS,
    UPDATE_ERROR,
    ADD_SUCCESS,
    ADD_ERROR,
    REMOVE_SUCCESS,
    REMOVE_ERROR,
    EDIT,
    RESERVAR,
    RESERVARFECHA,
    ENATENCION,
    RESERVA_PARA_CHAT,
    RESERVA_CANTIDAD_SUCCESS,
    RESERVA_CANTIDAD_ERROR,
    TRAER_ULTIMA_RESERVA_SUCCESS,
    CALIFICAR_SUCCESS,
    CALIFICAR_ERROR,
    RESERVAS_A_FUTURO_ERROR,
    RESERVAS_A_FUTURO_SUCCESS,
    ANULAR_RESERVAS_ERROR,
    ANULAR_RESERVAS_SUCCESS,
    AGENDAR_RESERVA
} from "./actions";


const initialState = {
    entities: null,
    timeStamp: null,
    removeTimeStamp: null,
    updateTimeStamp: null,
    addTimeStamp: null,
    errorTimeStamp: null,
    commandErrorTimeStamp: null,
    editTimeStamp: null,
    entityReservaParaChat: null,
    reservaParaChatTimeStamp: null,
    ultimaReserva: null,
    ultimaReservaTimeStamp: null,
    reserva: {
        TramoId: 0,
        MascotaId: 0,
        UsuarioId: 0,
        FechaAtencion: "",
        HoraAtencion: 0,
        FechaGeneracion: "",
        Motivo: "",
        Estdo: 0,
        Activo: 1
    },
    claificarTimeStamp: null,
    reservasAFuturoTimeStamp: null,
    reservasAFurturo: null,
    anularReservaTimeStamp: null,
    agendarReserva: {
        mascotaId: null,
        sintoma: null,
        timeStamp: null
    }
};

export const reducer = (state = initialState, action) => {
    const newState = {
        ...state
    };

    switch (action.type) {
        case GET_SUCCESS:
            newState.entities = action.payload.receive
            newState.timeStamp = (new Date()).getTime();
            break;
        case EDIT:
            newState.editTimeStamp = (new Date()).getTime();
            newState.entities.currentItem = action.item
            newState.modo = action.modo;
            break;
        case UPDATE_SUCCESS:
            newState.updateTimeStamp = (new Date()).getTime();
            break;
        case PATCH_SUCCESS:
            newState.updateTimeStamp = (new Date()).getTime();
            break;
        case REMOVE_SUCCESS:
            newState.removeTimeStamp = (new Date()).getTime();
            break;
        case ADD_SUCCESS:
            newState.addTimeStamp = (new Date()).getTime();
            break;
        case GET_ERROR:
            newState.errorTimeStamp = (new Date()).getTime();
            break;
        case UPDATE_ERROR || REMOVE_ERROR || PATCH_ERROR || ADD_ERROR || RESERVA_CANTIDAD_ERROR || CALIFICAR_ERROR || RESERVAS_A_FUTURO_ERROR || ANULAR_RESERVAS_ERROR:
            newState.commandErrorTimeStamp = (new Date()).getTime();
            break;
        case RESERVAR:
            newState.reservarTimeStamp = (new Date()).getTime();
            newState.reserva.MascotaId = action.mascotaId;
            newState.reserva.Motivo = action.motivo
            newState.reserva.TramoId = action.tramoId

            break;
        case RESERVARFECHA:
            newState.reservarTimeStamp = (new Date()).getTime();
            newState.reserva.FechaAtencion = action.fecha;
            newState.reserva.HoraAtencion = action.hora
            newState.reserva.TramoId = action.tramoId
            break;

        case ENATENCION:
            newState.enAtencionTimeStamp = (new Date()).getTime();
            newState.entities.enAtencion = action.registro
            break;
        case RESERVA_PARA_CHAT:
            newState.entityReservaParaChat = action.registro
            newState.reservaParaChatTimeStamp = (new Date()).getTime();
            break;
        case RESERVA_CANTIDAD_SUCCESS:
            newState.reservaCantidad = action.payload.receive.length
            newState.reservaCantidadTimeStamp = (new Date()).getTime();
            break;
        case TRAER_ULTIMA_RESERVA_SUCCESS:
            newState.ultimaReserva = action.payload.receive.length > 0 ? action.payload.receive[0] : {}
            newState.ultimaReservaTimeStamp = (new Date()).getTime();
            break;
        case CALIFICAR_SUCCESS:
            newState.claificarTimeStamp = (new Date()).getTime();
            break;
        case RESERVAS_A_FUTURO_SUCCESS:
            newState.reservasAFuturoTimeStamp = (new Date()).getTime();
            newState.reservasAFurturo = action.payload.receive
            break;
        case ANULAR_RESERVAS_SUCCESS:
            newState.anularReservaTimeStamp = (new Date()).getTime();
            break;
        case AGENDAR_RESERVA:
            newState.agendarReserva.mascotaId = action.mascotaId;
            newState.agendarReserva.sintoma = action.sintoma;
            newState.agendarReserva.timeStamp = (new Date()).getTime();
            break
    }
    return newState;
};