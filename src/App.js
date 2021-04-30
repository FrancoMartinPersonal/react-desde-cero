import React  from 'react'

import Card3 from './card3'
import './styles/styles.scss'

const cursos =[
  {"title":"muerte por electocutación",
  "image":"https://parecidas.com/img_es/tag/thumb/5a/29986.jpg",
  "imagePerson":"https://www.fundacionkonex.org/custom/web/data/imagenes/repositorio/2017/05/22/13015/201705220242232a44bdf3d593dff49862a4549f4e88a7.jpg",
  "person":"lic. O'Donell",
  "price" :"15.000 §"
    
  }, 
    {"title":"muerte por difamación",
  "image":"https://abogado.la/wp-content/uploads/2020/11/demanda-por-difamacion-en-california.jpg",
  "imagePerson":"https://lh3.googleusercontent.com/proxy/JIyL5D-U3vK-OKrnABGZ-_xX6qtkGqoZwSHv4yLWXT40Q3SHten8B0sjjzRu9tT14ZyUPI8v9ZPk5owRiQDUeU-8VTSf4LaiI20l6bzf8xc_5xyAUnJwejQ9v3ZuibQZmOikkDPYqMcHVF8",
  "person":"Lic. zlotogwiazda",
  "price" :"350 §"
  }, {
    "title":"muerte accidental",
 "image":"https://www.abogados.com/sites/default/files/styles/_750px_x_500px_/public/wp-content/uploads/worker2-01.jpg?itok=GEsDfATP",
 "imagePerson":"https://pbs.twimg.com/profile_images/653558348273569792/joxg8DZD_400x400.png",
 "person":"lic. Macri",
 "price" :"5.000 §"
  }
]

const App = ( ) => (
    <>
  <div className="main-banner img-container  l-section" id="main-banner">
  <div className="ed-grid lg-grid-6">
    <div className="lg-cols-4 lg-x-2">
      <img className="main-banner__img" alt=""src="https://concepto.de/wp-content/uploads/2015/03/muerte-e1549742739510.jpg"/>
      <div className="main-banner__data s-center">
        <p className="t2 s-mb-0">Muertes  Aseguradas</p>
        <p>muertes aseguradas y asociedados, contactenos para conseguir muertes rápidas</p>
        <a href="https://muerte.com" className="button">Matar</a>
      </div>
    </div>
  </div>
</div>
<div className="ed-grid m-grid-3">

 {
   cursos.map( curso => <Card3
    title={curso.title}
    image={curso.image}
    imagePerson={curso.imagePerson}
    person={curso.person}
    price={curso.price}/>)
 }
  <Card3 />
 </div> 
</>

)
 

export default App;
