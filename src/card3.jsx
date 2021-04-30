import React from 'react'

const Card3 = () => (
   
    <article className="card">
      <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src="https://www.abogados.com/sites/default/files/styles/_750px_x_500px_/public/wp-content/uploads/worker2-01.jpg?itok=GEsDfATP" alt="muerte por electrocutación"/>
      </div>
      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="t5 s-mb-2 s-center">
        muerte accidental
        </h3>
        <div className="s-mb-2 s-main-center">
          <div className="card__teacher s-cross-center">
            <div className="card__avatar s-mr-1">
              <div className="circle img-container">
                <img src="https://pbs.twimg.com/profile_images/653558348273569792/joxg8DZD_400x400.png" alt="asesino"/>
              </div>
            </div>
            <span className="small">Lic. Macri</span>
          </div>
        </div>
        <div className="s-main-center">
          <a className="button--ghost-alert button--tiny" href="https://chinomaidana.com">5.000 §</a>
        </div>
      </div>
</article>
)
export default Card3