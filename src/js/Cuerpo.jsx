import React from 'react';
import '../css/cuerpo.css';

class Cuerpo extends React.Component{
    componentDidMount(){
        document.querySelector( ".input input" ).addEventListener( "keyup", function( e ){
            if( e.keyCode == 13 ){
                document.querySelector( ".add" ).click();
            }
        });
    }

    add(){
        let error = document.querySelector( ".error" );
        let nombre = document.querySelector( ".input input" ).value.trim();
        if( nombre ){
            error.style.setProperty( "max-height", null );

            let task = document.createElement( "div" );
            task.setAttribute( "class", "tarea" );
            document.querySelector( ".tareas" ).appendChild( task );

            let taskText = document.createTextNode( nombre );
            task.appendChild( taskText );

            let del = document.createElement( "span" );
            del.setAttribute( "class", "delete" );
            task.appendChild( del );

            let delText = document.createTextNode( "X" );
            del.appendChild( delText );
            del.addEventListener( "click", function(){
                let nombre = this.parentElement.innerHTML.replace(/(<([^>]+)>)/gi, "");
                nombre = String( nombre ).substr( 0, nombre.length - 1 );
                if( window.confirm( `¿Seguro que quieres borrar la tarea ${ nombre }?` ) ){
                    del.parentElement.style.setProperty( "max-height", null );
                    del.parentElement.style.setProperty( "padding", "0px 20px" );
                    window.setTimeout( function(){
                        del.parentElement.remove();
                    }, 200 )
                }
            });
            task.appendChild( del );

            task.style.setProperty( "max-height", task.scrollHeight + "px" );
            task.style.setProperty( "padding", "10px 20px" );

            document.querySelector( ".input input" ).value = "";
        }else{
            error.style.setProperty( "max-height", error.scrollHeight + "px" );
        }
    }
    
    render(){
        return (
            <div className="cuerpo">
                <div className="formulario">
                    <div className="titulo">
                        Add a task
                        <span className="add" onClick={this.add}>+</span>
                    </div>
                    <div className="input">
                        <input type="text" placeholder="Nombre de la tarea"/>
                        <div className="error">No has introducido ningún nombre</div>
                    </div>
                    <div className="tareas"></div>
                </div>
            </div>
        );
    }
}

export default Cuerpo;