import React from 'react'

import styl from '/styles/brands.module.css'



var $ = require("jquery");
if (typeof window !== "undefined") {
   window.$ = window.jQuery = require("jquery");

  

if (window.innerWidth > 1000) {
   var ca = 4
}

else if (window.innerWidth  < 1000 && window.innerWidth >700 ) {
   var ca = 3
}

else if (window.innerWidth < 700 && window.innerWidth > 500 ) {
   var ca = 2
}

else if (window.innerWidth < 500) {
   var ca = 1
}

}


import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



import dynamic from "next/dynamic";
import Image from 'next/image';
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});



export default function slider(props) {
   
    if (typeof window !='undefined') {
        window.localStorage.setItem('slider1',props.title);
    }

  return (

    
    <>
        <div className="car">
            <OwlCarousel className='owl-theme' items={ca} margin={10} loop nav>

            <div  className={`${styl.card15} shadow`}>
                <div className={`${styl.img2}`}>
                <Image src={"/img/two.webp"} width={100} height={80} alt=""/>
                </div>
                <div className={`${styl.details} text-center`}>
                <p>Blind Installation Wall Hung Bidet</p>
                <span>MRP &#8377; <span id={styl.price}> 500</span> | <span id={styl.off}>20</span> <span>% OFF</span></span>
                <p className={styl.stars}>
                </p>
                </div>
                <div className={`${styl.buttons} add-to-cart text-center`}>
                Add To Cart
                </div>
            </div>
            <div  className={`${styl.card15} shadow`}>
                <div className={`${styl.img2}`}>
                <Image src={"/img/two.webp"} width={100} height={80} alt=""/>
                </div>
                <div className={`${styl.details} text-center`}>
                <p>Blind Installation Wall Hung Bidet</p>
                <span>MRP &#8377; <span id={styl.price}> 500</span> | <span id={styl.off}>20</span> <span>% OFF</span></span>
                <p className={styl.stars}>
                </p>
                </div>
                <div className={`${styl.buttons} add-to-cart text-center`}>
                Add To Cart
                </div>
            </div>
            <div  className={`${styl.card15} shadow`}>
                <div className={`${styl.img2}`}>
                <Image src={"/img/two.webp"} width={100} height={80} alt=""/>
                </div>
                <div className={`${styl.details} text-center`}>
                <p>Blind Installation Wall Hung Bidet</p>
                <span>MRP &#8377; <span id={styl.price}> 500</span> | <span id={styl.off}>20</span> <span>% OFF</span></span>
                <p className={styl.stars}>
                </p>
                </div>
                <div className={`${styl.buttons} add-to-cart text-center`}>
                Add To Cart
                </div>
            </div>
            <div  className={`${styl.card15} shadow`}>
                <div className={`${styl.img2}`}>
                <Image src={"/img/two.webp"} width={100} height={80} alt=""/>
                </div>
                <div className={`${styl.details} text-center`}>
                <p>Blind Installation Wall Hung Bidet</p>
                <span>MRP &#8377; <span id={styl.price}> 500</span> | <span id={styl.off}>20</span> <span>% OFF</span></span>
                <p className={styl.stars}>
                </p>
                </div>
                <div className={`${styl.buttons} add-to-cart text-center`}>
                Add To Cart
                </div>
            </div>
            <div  className={`${styl.card15} shadow`}>
                <div className={`${styl.img2}`}>
                <Image src={"/img/two.webp"} width={100} height={80} alt=""/>
                </div>
                <div className={`${styl.details} text-center`}>
                <p>Blind Installation Wall Hung Bidet</p>
                <span>MRP &#8377; <span id={styl.price}> 500</span> | <span id={styl.off}>20</span> <span>% OFF</span></span>
                <p className={styl.stars}>
                </p>
                </div>
                <div className={`${styl.buttons} add-to-cart text-center`}>
                Add To Cart
                </div>
            </div>
                
                
            </OwlCarousel>
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
    if (typeof window != 'undefined') {
        var cat = window.localStorage.getItem('slider1')
    }
    
    let products = await Products.find({Type:cat});

//   console.log(questions)

  // Pass data to the page via props
  return { props: {products : JSON.parse(JSON.stringify(products))}}
    // Pass data to the page via props
    // return { props: {questions : JSON.parse(JSON.stringify(result))}}
  }