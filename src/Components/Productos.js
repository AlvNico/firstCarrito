import  { Component } from 'react';
import Producto from './Producto'
const styles={
    productos:{
        display:'flex', //muestra una caja
        flexDirection:'row', // de izq a der
        justifyContent:'space-between' //cada producto ocupa el 100% del espacio misma dist entre todos
    }
}
class Productos extends Component {
    
    render() { 
        const {productos,agregarCarro}= this.props
 

        return (
           <div style={styles.productos}>
            {productos.map(producto => <Producto
            agregarCarro={agregarCarro}
            key={producto.name}
            producto={producto}
            />)}
           </div>

        );
    }
}
 
export default Productos;