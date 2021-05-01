import React from 'react'

class Formulario  extends React.Component{
    constructor (props) {
       super(props)
       this.state = {
        nombre: "",
        correo: "", 
        fecha: new Date()


    } 
    this.cambiarNombre = this.cambiarNombre.bind(this)
    this.cambiarCorreo = this.cambiarCorreo.bind(this)
    
}

cambiarNombre(e) {
     this.setState({
        nombre: e.target.value
    })
       
    }

cambiarCorreo(e) {
    this.setState({
        correo: e.target.value
    })
}
    cambiarFecha (){
        this.setState({
            fecha: new Date()
        }
        )
    }
    render() {
        return (
            
            <div className="ed-grid">    
            <h1>Formulario</h1>
            <h4>fecha actual {Math.ceil(this.state.fecha/1000)}</h4>
            <form id="formuId">
            <div className="ed-grid m-grid-2">
            
                <div className="form__item">
                    <label>nombre completo</label>
                    <input type="text"
                     onChange={this.cambiarNombre }/>
                </div>
                <div className="form__item">
                    <label>email</label>
                    <input type="email" 
                    onChange={this.cambiarCorreo}/>                   
                </div>
                <div className="form__item">
                        <input className="button full" type="submit"/>
                    </div>
            
            </div>
            </form>
            <div>
                <h2>{`hola ${this.state.nombre}`}</h2>
                <span>{`Tu correo es ${this.state.correo}`}</span>
            </div>
            </div>
            
        )
    }
    componentDidMount(){
        let formulario = document.getElementById("formuId")
        console.log(formulario)
      this.intervaloFecha =  setInterval(() => {
            this.cambiarFecha()
        }, 1000);
    }
    componentDidUpdate(prevProps, prevState) {
        
        console.log(prevState)
        
    }
    componentWillUnmount() {
         clearInterval(this.intervaloFecha)
    }
}

export default Formulario