import React, {useReducer} from 'react'

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { 
    FORMULARIO_PROYECTO, 
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO
} from '../../types';
import uuid from 'uuid';

const ProyectoState = props => {

    const proyectos = [
        { id: 1, nombre: 'Diseño web'},
        { id: 2, nombre: 'Tienda virtual'},
        { id: 3, nombre: 'Compra de equipos'},
        { id: 4, nombre: 'Bodega'}
    ]

    const initialState = {
        proyectos : [],
        formulario : false,
        errorformulario: false,
        proyecto: null
    }

    // Dispatch para ejecutar acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    // Serie de funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    // Obtener los proyectos
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    // Agregar nuevo proyectos
    const agregarProyecto = proyecto => {
        proyecto.id = uuid.v4();

        // Insertar el proyecto al state
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
        })
    }

    // Valida el error por formulario
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    // Selecciona el proyecto que el usuario dio click
    const proyectoActual = proyectoId => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }

    // Eliminar un proyecto
    const eliminarProyecto = proyectoId => {
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload: proyectoId
        })
    }

    return(
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                proyecto: state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;