// var script = document.createElement('script');
// script.src = 'https://code.jquery.com/jquery-3.6.0.js'
// document.getElementsByTagName('head')[0].appendChild(script);

var brands = [
    {
            "brandname": "Kohler",
            "bgimg": "./assets/img/box1.png"
    },
    {
            "brandname": "Cera",
            "bgimg": "./assets/img/box2.jpg"
    },
    {
            "brandname": "Parryware",
            "bgimg": "./assets/img/box3.jpg"
    },
    {
            "brandname": "Hindware",
            "bgimg": "./assets/img/box4.jpg"
    },
    {
            "brandname": "Toto",
            "bgimg": "./assets/img/box5.jpg"
    },
    {
            "brandname": "Jaquar",
            "bgimg": "./assets/img/box6.jpg"
    }
]


var brandhtml = "";
brands.forEach(e => {
        brandhtml += `
        <div class="col-md-4 card1 card11"  style="background: url(${e.bgimg}); padding-left: 0px; padding-right: 0px;">
            <div class="bv">
              <p>${e.brandname}</p>
            </div>
        </div>`
});

document.querySelector(".rowbrand").innerHTML += brandhtml







