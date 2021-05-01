import React from 'react'

const Card2 = () => (
   
    <article className="card">
      {30 + 30}
      <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src="https://abogado.la/wp-content/uploads/2020/11/demanda-por-difamacion-en-california.jpg" alt="muerte por electrocutación"/>
      </div>
      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="t5 s-mb-2 s-center">
        muerte por difamación
        </h3>
        <div className="s-mb-2 s-main-center">
          <div className="card__teacher s-cross-center">
            <div className="card__avatar s-mr-1">
              <div className="circle img-container">
                <img src="https://www.fundacionkonex.org/custom/web/data/imagenes/repositorio/2017/05/22/13015/201705220242232a44bdf3d593dff49862a4549f4e88a7.jpg" alt="asesino"/>
              </div>
            </div>
            <span className="small">Lic. O'Donell</span>
          </div>
        </div>
        <div className="s-main-center">
          <a className="button--ghost-alert button--tiny" href="https://chinomaidana.com">12.000 §</a>
        </div>
      </div>
</article>
)
export default Card2