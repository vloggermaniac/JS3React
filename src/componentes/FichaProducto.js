import React from "react";
import {CardImg, Modal, Button, Container, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import './FichaProducto.css';
import {listaCarrito} from '../listaCarrito.json';

class FichaProducto extends React.Component{
    constructor(props){
        super();
        this.state = {
            modal:false,
            listaCarrito,
            stock: props.props.stock
        }
        this.toggle= this.toggle.bind(this);
        this.agregrarCarrito= this.agregrarCarrito.bind(this);
    }

    toggle(){
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    agregrarCarrito(){
        listaCarrito.push({
            "titulo": this.props.props.titulo,
            "precio": this.props.props.precio
        });
        this.setState(prevState => ({
            modal: !prevState.modal
           
        }));

        if(this.state.stock !== 0){
            this.setState(prevState => ({
                stock: prevState.stock -1
            }));
        }else{
            alert('STOCK AGOTADO')
        }
        const badge = document.getElementById("Badge1");
        badge.innerText = listaCarrito.length;
    }

    render(){
        return(
        <Container> 
                <Button onClick={this.toggle}>Ver Ficha</Button>
            <Modal isOpen={this.state.modal}>
               <ModalHeader>{this.props.props.titulo}</ModalHeader>
               <ModalBody>
                   <CardImg src={this.props.props.imagen}/>
                   <p>El detalle del Producto selecionado es el siguiente </p>
                   {this.props.props.descripcion}
                   <p>Este producto tiene el valor de <b>{this.props.props.precio}</b> pesos</p>
                    <p>Hay <b>{this.state.stock}</b> unidades de este producto disponible</p>
               </ModalBody>
               <ModalFooter className="modalFooter">
                   <Button color="primary" onClick={this.agregrarCarrito}>Agregar al carrito</Button>
                   <Button color="secondary"onClick={this.toggle}>Volver atras</Button>
               </ModalFooter>
            </Modal> 
        </Container>
        ); 
    }
}
export default FichaProducto;