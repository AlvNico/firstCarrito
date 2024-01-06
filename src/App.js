import Productos from './Components/Productos'
import  { Component } from 'react';
import Layout from './Components/Layout'
import Title from './Components/Title'
import Navbar from './Components/Navbar'
class App extends Component{
  state={
    productos:[
      {name: "Tomate",
       precio:1900222,
      img:'/productos/tomate.jpeg'},
      {name: "Lechuga",
       precio:1300,
      img:'/productos/lechuga.jpeg'},
      {name: "Arbeja",
       precio:100,
      img:'/productos/arbeja.jpeg'}
    ],
    carro:[],
    esCarroVisible:false
    }
  agregarCarro= (producto) =>{
    const {carro}=this.state
    if(carro.find(x => x.name===producto.name)){
      const newCarro= carro.map(x => x.name===producto.name ?
      ({...x,cantidad:x.cantidad+1}) : x
        )
        return this.setState({carro:newCarro})
    }
    return this.setState({
      carro:this.state.carro.concat({...producto,cantidad:1})
    })
  }

  mostrarCarro=()=>{
    if(!this.state.carro.length){
      return
    }
    this.setState({esCarroVisible: !this.state.esCarroVisible})
  }
  render(){
    const {esCarroVisible}= this.state
    return(
      <div>
        <Navbar carro={this.state.carro} esCarroVisible={esCarroVisible} mostrarCarro={this.mostrarCarro} />
        <Layout>
          <Title>

          </Title>
        <Productos
          agregarCarro= {this.agregarCarro}
          productos={this.state.productos}

        />
    </Layout>
      </div>
    )
  }
}
export default App;
