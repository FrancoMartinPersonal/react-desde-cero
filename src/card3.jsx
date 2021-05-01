import React from 'react'
import PropTypes from 'prop-types'

const Card3 = props => (
   
    <article className="card">
      
      <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
       <img src={props.image} alt="muerte por electrocutación"/> 
        
      </div>
      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="t5 s-mb-2 s-center">
        {props.title}
        </h3>
        <div className="s-mb-2 s-main-center">
          <div className="card__teacher s-cross-center">
            <div className="card__avatar s-mr-1">
              <div className="circle img-container">
               
                <img src={props.imagePerson} alt="asesino"/> 
                
              </div>
            </div>
            <span className="small"> {props.person} </span>
          </div>
        </div>
        <div className="s-main-center">
          <a className="button--ghost-alert button--tiny" href="https://chinomaidana.com">{props.price}</a>
        </div>
      </div>
</article>
)
Card3.propTypes = {
  title : PropTypes.string,
  image : PropTypes.string,
  imagePerson: PropTypes.string,
  price: PropTypes.string,
  person: PropTypes.string

}
Card3.defaultProps = {
  title : "no se encontró titulo",
  image : "https://www.elestadista.com.ar/wp-content/uploads/standby.jpg",
  imagePerson : "https://www.elestadista.com.ar/wp-content/uploads/standby.jpg",
  price: "§  --  ",
  person: "  --  "
}
export default Card3