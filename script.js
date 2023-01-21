// /////////////////////// basic calculator ///////////////////////////
let result=document.getElementById("inputext")

let calculate=(number)=>{
    result.value+=number;
}

let Result=()=>{
    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert("Enter The Valid Input")
    }
}

function clr(){
    result.value=" ";
}

function del(){
    result.value=result.value.slice(0,-1);
}


////////////////////////////////////////////single page (no reload)/////////////////////////////////

let home=document.querySelector(".H")
let home1=document.querySelector(".home")

let about=document.querySelector(".A")
let about1=document.querySelector(".about")

let contactMe=document.querySelector(".CM")
let contactMe1=document.querySelector(".contactMe")

let currency=document.querySelector(".AM")
let currency1=document.querySelector(".currency")

let click=document.querySelector("#click")


home.addEventListener("click",function(){
    home1.classList.remove("on")
    about1.classList.remove("on")
    contactMe1.classList.remove("on")
    about.classList.remove("on")
    contactMe.classList.remove("on")
    home.classList.add("on")
    currency.classList.remove("on")
    currency1.classList.remove("on")
    
})

about.addEventListener("click",function(){
    about1.classList.add("on")
    about.classList.add("on")
    home1.classList.add("on")
    contactMe1.classList.remove("on")
    contactMe.classList.remove("on")
    home.classList.remove("on")
    currency.classList.remove("on")
    currency1.classList.remove("on")
})
contactMe.addEventListener("click",function(){
    contactMe1.classList.add("on")
    contactMe.classList.add("on")
    home1.classList.add("on")
    about1.classList.remove("on")
    about.classList.remove("on")
    home.classList.remove("on")
    currency.classList.remove("on")
    currency1.classList.remove("on")
})
currency.addEventListener("click",function(){
    contactMe1.classList.remove("on")
    contactMe.classList.remove("on")
    home1.classList.add("on")
    about1.classList.remove("on")
    about.classList.remove("on")
    home.classList.remove("on")
    currency.classList.add("on")
    currency1.classList.add("on")
})


////////////////////////////////// distance ///////////////////////////////////

var feet = document.getElementById('feet');
var inches = document.getElementById('inches');

feet.addEventListener('input', function(){
    let f = this.value;
    let i = f*12;
    inches.value = i;
});

inches.addEventListener('input', function(){
    let i = this.value;
    let f = i/12;
    if(!Number.isInteger(f)){
        f = f.toFixed(2);
    };
    feet.value = f;
});

///////////////////////////////// weight  ////////////////////////////////////////////////

let kgRef = document.getElementById("kg");
let lbRef = document.getElementById("lb");
let ozRef = document.getElementById("oz");

let convertFromKg = () => {
  let kg = kgRef.value;
  //toFixed(2) limits the decimals to 2 digits.
  lbRef.value = (kg * 2.205).toFixed(2);
  ozRef.value = (kg * 35.274).toFixed(2);
};

let convertFromLb = () => {
  let lb = lbRef.value;
  kgRef.value = (lb / 2.205).toFixed(2);
  ozRef.value = (lb * 16).toFixed(2);
};

let convertFromOz = () => {
  let oz = ozRef.value;
  kgRef.value = (oz / 35.274).toFixed(2);
  lbRef.value = (oz / 16).toFixed(2);
};

kgRef.addEventListener("input", convertFromKg);
lbRef.addEventListener("input", convertFromLb);
ozRef.addEventListener("input", convertFromOz);
window.addEventListener("load", convertFromKg);


