import React, { useContext, useEffect } from 'react'
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoProyectos = () => {

    // Extraer proyecto de state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyectos, obtenerProyectos } = proyectosContext;

    // Mostrar los proyectos
    useEffect(() => {
        obtenerProyectos();
    },[])


    // Validar si proyectos tiene contenido
    if(proyectos.length === 0 ) return <p>No hay proyectos, comienza a crear uno</p>

    return (
        <ul className='listado-proyectos'>
            {proyectos.map(proyecto =>(
                <Proyecto 
                    key={proyecto.id}
                    proyecto={proyecto}
                />
            ))}
        </ul>
    );
}

export default ListadoProyectos;