import  { Component } from 'react';
const styles={
    button:{
        backgroundColor:'#0A283E',
        color:'#fff',
        padding: '15px 20px',
        border:'none',
        borderRadius:'5px',
        cursor:'pointer' //Cambia el curso a la manito cuando pasa
    }
}

class Button extends Component {
   
    render() { 
        return (<button style={styles.button}{...this.props}/>); //usa spreadoperator, recibe lo que se manda entre la etiqueta del component cuando se llama
    }
}
 
export default Button;