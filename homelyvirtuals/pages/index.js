import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import style from '../styles/brands.module.css'
import Navbar from './components/navbar'
import $ from 'jquery'

import Slider from './components/slider';
import Slider2 from './components/slider2';


export default function Home() {

// var script = document.createElement('script');
// script.src = 'https://code.jquery.com/jquery-3.6.0.js'
// document.getElementsByTagName('head')[0].appendChild(script);

var brands = [
  {
          "brandname": "Kohler",
          "bgimg": "/img/box1.png"
  },
  {
          "brandname": "Cera",
          "bgimg": "/img/box2.jpg"
  },
  {
          "brandname": "Parryware",
          "bgimg": "/img/box3.jpg"
  },
  {
          "brandname": "Hindware",
          "bgimg": "/img/box4.jpg"
  },
  {
          "brandname": "Toto",
          "bgimg": "/img/box5.jpg"
  },
  {
          "brandname": "Jaquar",
          "bgimg": "/img/box6.jpg"
  }
]















  return (
    <>
      <Navbar />

      <section className={`${styles.section1}`}>

        <div className={styles.section1left}>
          <div className={styles.maincontainertext}>
            <h3>Experience India's First AR based Sanitary Faucets </h3>
            <p>Buy After deciding the right place for your faucet using AR technology</p> <br /><br />
          </div>
            <button style={{position:"relative" , top:"20vh"}} className='btn btn-primary'>Shop Now</button>
        </div>
        <div className={styles.section1right}>

        {/* <model-viewer style={{height: '100%', width: '100%'}} ar ar-modes="webxr scene-viewer quick-look" camera-controls
        src="/models/cuisine_robinet_mitigeur__mixer_tap/scene.gltf" alt="A 3D model of an astronaut" >
       
      </model-viewer> */}
        </div>

      </section>


      <div className={`${styles.headings} text-center my-4 `}>CATEGORIES</div>

<div className={`${styles.categories} shadow`}>
  <div className={`${styles.row1} `}>
    <div className={`${styles.rowele1} `}>
      <div  className={`${styles.blackbox} `}>
        <p>BATHROOM</p>
      </div>
    </div>
    <div className={`${styles.rowele2} `}>
      <div  className={`${styles.blackbox} `}>
        <p>LIGHTING</p>
      </div>
    </div>
  </div>
  <div className={`${styles.row2} row `} style={{padding: '0', margin: '0'}}>
    <div className={`${styles.rowele3} col-md-4`}  style={{padding: '0'}}>
      <div  className={`${styles.blackbox} `}>
        <p>KITCHEN</p>

      </div>
    </div>
    <div className={`${styles.rowele4} col-md-4`} style={{padding: '0'}}>
      <div  className={`${styles.blackbox} `}>
        <p>LIVING ROOM</p>

      </div>
    </div>
    <div className={`${styles.rowele5} col-md-4`} style={{padding: '0'}}>
      <div  className={`${styles.blackbox} `}>
        <p>WASHROOM</p>

      </div>
    </div>
  </div>
</div>

<div className={`${styles.headings} text-center my-4`}>TOP BRANDS</div>

<section className={`${styles.main3} `}>
  <div className={`${styles.container1} `}>
    <div className={`${styles.rowbrand} row `} style={{margin: '0'}}>
      
    {brands.map(function(e, idx){
         return (<div className="col-md-4" >
         <div className={style.card17} style={{background:`url(${e.bgimg})`}}>
           <div className={style.blackbox}>
             <h1>{e.brandname}</h1>
           </div>
         </div>
       </div>)
       })}

       
    </div>
  </div>
</section>

<div className={`${styles.headings} text-center my-4`}>BEST SELLERS</div>
<section className={styles.section2}>

<Slider title="bestseller"/>
</section>
  


<div className={`py-4 ${style.latestcollection}`} style={{marginTop: '10vh'}}>
    <div className={style.latest1}></div>
    <div className={style.latest2}></div>
  </div>

  <div className={`${styles.headings} text-center my-4`}>MOST RATED</div>
  <section className={styles.section2}>

<Slider2 title="mostrated" />
</section>


<div className={style.services}>
    <div className={`${style.row ,style.serverow}`} style={{margin: '5vh 0', padding: '0'}}>
      <div className={`col-md-3 ${style.serveele}`} style={{margin: '0', padding: '0'}}>
        <div className={`${style.serve1} shadow-sm`}>
          <img src="/img/shipped.png" alt=""/><br/>

          <p>Free Shipping</p>
        </div>
      </div>
      <div className={`col-md-3 ${style.serveele}`} style={{margin: '0', padding: '0'}}>
        <div className={`${style.serve1} shadow-sm`}>
          <img src="/img/support.png" alt=""/><br/>

          <p>24/7 Support</p>
        </div>
      </div>
      <div className={`col-md-3 ${style.serveele}`} style={{margin: '0', padding: '0'}}>
        <div className={`${style.serve1} shadow-sm`}>
          <img src="/img/money.png" alt=""/><br/>
          <p>Money Back</p>
        </div>
      </div>
      <div className={`col-md-3 ${style.serveele}`} style={{margin: '0', padding: '0'}}>
        <div className={`${style.serve1} shadow-sm`}>
          <img src="/img/coupon.png" alt=""/><br/>

          <p>Free Gift Coupons</p>
        </div>
      </div>
    </div>
  </div>




  {/* <script src='/index.js'></script> */}
  <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"/>
      <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>

    </>
  )
}
