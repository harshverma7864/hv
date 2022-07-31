import React, { useState } from 'react'
import pr from '..../../styles/prd.module.css'
import style from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import mongoose from 'mongoose'



const product = ({product}) => {

    
     const [qty,setqty] = useState(1);

  return (
    <>
 <Navbar/>
        
<div className={`${pr.router} my-4`}> <span  >Home</span>  <span id={pr.routercatname} onclick="">Category</span>  <span id={pr.routersubcatname}   >subcategory</span> </div>

<div className={`${pr.maincard} shadow-sm`}>
    <div className={pr.imgcard}>
           
            <div className={pr.mainimg}>
            <model-viewer className={pr.modelviewer2} style={{height: '100%', width:'100%'}} ar ar-modes="webxr scene-viewer quick-look" camera-controls
                src="/models/boiling_water_tap/scene.gltf" alt="A 3D model of an astronaut">
                <button slot="ar-button"
                    style={{visibility:'hidden', backgroundColor: 'white', borderRadius: '4px', border: 'none', position: 'absolute', top: '16px', right: '16px' }}>
                    👋 Activate AR
                </button>
            </model-viewer>
            </div>
            <div className={pr.grid}>
                <img className={`shadow-sm ${pr.img1}`}  src="/img/box1.png" alt=""/>
                <img className={`shadow-sm ${pr.img2}`}  src="/img/box1.png" alt=""/>
                <img className={`shadow-sm ${pr.img3}`}  src="/img/box1.png" alt=""/>
                <img className={`shadow-sm ${pr.img4}`} src="/img/box1.png" alt=""/>
                <img className={`shadow-sm ${pr.img5}`}  src="/img/box1.png" alt=""/>
               
            </div>
    </div>
    <div className={pr.desccard}>
        <div className={pr.desc}>
            <h4 className={pr.name}>Blind Installation Wall Hung Bidet</h4>
            <br/>
            <div className={`${pr.star} my-2 d-flex`}> Rating : &nbsp; <br/> <span className={pr.stars} style={{marginTop:'-2px'}}></span> &nbsp; |&nbsp; <span className={pr.reviews}> 4 Reviews </span> </div>
            <h5 className="text-secondary">MRP &#8377; <span className={pr.price} id={pr.price}>500</span>  | <span className="text-success "><span className={pr.off}></span> % OFF</span></h5>
            <p>Inclusive of all taxes</p>
            <p className="my-3"><strong>Quantity :</strong>

            <span id={pr.minus} onClick={()=> { if(qty > 0) setqty(qty - 1)}} className="shadow-sm" >-</span><span id={pr.qty}><input className="text-center" id={pr.qtyval}
                type="text" value={qty}/></span><span id={pr.plus} className="shadow-sm" onClick={()=>setqty(qty + 1)} >+</span>

            </p>
            <div className={pr.ex}>
                <div className={pr.addtocart}>
                    <button className={pr.atc}>Add To Cart</button>
                </div>
                <div className={pr.deloptions}>
                <span className="my-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    </svg>  Delivery Options</span>

                    <input type="text" className="my-2" placeholder="Enter Pincode"/>
                    <button className={pr.chk}>Check</button>
                </div>
            </div>
        </div>
        <div className={pr.extras}>
            <div className={`${pr.row} text-center`}>
                <div className="col-md-4"> <span><img style={{height:'30px' , width:'30px'}} src="/img/100.png" alt=""/></span>&nbsp; 100% genuine products</div>
                <div className="col-md-4"> <span><img style={{height:'30px' , width:'30px'}} src="/img/return-box.png" alt=""/></span>&nbsp;Easy return policy</div>
                <div className="col-md-4">Sold By : AR-Cart</div>
            </div>
        </div>
</div>
</div>



<h3 className={`text-center my-4 ${style.headings}`}>PRODUCT DESCRIPTION</h3>

<div className={`${pr.secondaryMain} my-4`}>
    <div className={`${pr.description} shadow-sm`}>
    <ul className="nav nav-tabs my-3 mx-1">
    <li className="nav-item mx-2">
        <a className={`nav-link px-2 ${pr.one} active`} style={{padding: '0'}}  aria-current="page" >Description</a>
    </li>
    <li className="nav-item mx-2">
        <a className={`nav-link px-2  ${pr.two}`} style={{padding: '0'}}>Rating and Reviews</a>
    </li>
    <li className="nav-item mx-2">
        <a className={`nav-link px-2  ${pr.three}`} style={{padding: '0'}} > Product QnA</a>
    </li>
    <li className="nav-item">
        <a className={`nav-link px-2  ${pr.four}`} style={{padding: '0'}} >Write review</a>
    </li>
    </ul>
    <div className={pr.content}></div>
    </div>
    <div className={pr.pcard}>

    </div>
</div>
    </>
  )
}



export async function getServerSideProps(context) {


    if(!mongoose.connections[0].readyState){
        await mongoose.connect(process.env.MONGO_URI)
    }
    // Fetch data from external API
    // let dt = item.createdAt.substr(0,10);
  
    // const url = "https://winbattleuc.in/nextapis/getQuestion.php?sno=" + context.query.slug
  
    // let questions = await fetch(url);
  
    // let result = await questions.json()
   
    let product = await Products.find({_id : context.query.slug});

  console.log(questions)

  // Pass data to the page via props
  return { props: {product : JSON.parse(JSON.stringify(product))}}
    // Pass data to the page via props
    // return { props: {questions : JSON.parse(JSON.stringify(result))}}
  }

export default product
