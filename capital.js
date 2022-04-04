 let sliderIndex = 0;
 let left = document.querySelector(".fa-arrow-left")
let right = document.querySelector(".fa-arrow-right")
let mySearch = document.querySelector(".search")
let display = document.querySelector(".search-input")
let cancel = document.querySelector(".cancel")
let search = document.querySelector("#search")

let errowTest = document.querySelector(".err");
let store = document.querySelector(".container3")




mySearch.addEventListener("click", function(){
    
    display.style.height = "100%";
    display.style.transition = ".5s";
})

cancel.addEventListener("click", function(){
    display.style.height = "0";
    display.style.transition = ".5s";
})

plusSlides();

function plusSlides(){
    let images = document.getElementsByClassName("slide")
    for(i = 0; i < images.length; i++){
        images[i].style.display = "none"
    }

    sliderIndex++;
    if(sliderIndex > images.length){
        sliderIndex = 1;
    }
    images[sliderIndex - 1].style.display = "block";
    setTimeout(plusSlides, 2000)
 }




 left.addEventListener("click", function(){
     let slide = document.getElementsByClassName("slide");
     sliderIndex += 1;
     if (sliderIndex > slide.length){
         sliderIndex = 1;
     }

     for (let i = 0; i < slide.length; i++){
         slide[i].style.display = "none"
     }
     slide[sliderIndex - 1].style.display = "block";
 })

 right.addEventListener("click", function(){
     let slide = document.getElementsByClassName("slide");

     sliderIndex -= 1;
     if(sliderIndex < 1){
         sliderIndex = slide.length;
     }
     for(i = 0; i < slide.length; i++){
         slide[i].style.display = "none";
         slide[sliderIndex - 1].style.display = "block";
     }
     
 })

 

const tred = [
                {
                    photo: "./img/fakerun.png",
                    amount: "$98.00",
                    name: "bag",
                    money:"$120"
                },
                {
                    photo: "./img/snowwhite.png",
                    amount: "$98.00",
                    name: "trouser",
                    money:"$120"
                },
                {
                    photo: "./img/styledollcolor.png",
                    amount: "$98.00",
                    name: "shoe",
                    money:"$120"
                },
                {
                    photo:"./img/redquotes.png",
                    amount: "$98.00 ",
                    name: "boxers",
                    money:"$120"
                }
    
]

let items = tred.map((p)=>{

return `
            <div class="container3-1"> 
                <div class="petdataimage">  
                    <img class="image1" src=${p.photo} />
                    <div class="header-container2-icons-wrapper">
                        <div class="java-icon">
                            <p><i class="fa fa-search search"></i></p>
                            <p><i class="fa fa-user"></i></p>
                            <p><i class="fa fa-shopping-cart"></i></p>
                        </div>
                    </div>
                </div>
                <div class="items-container-details">
                    <p class="amount1">${p.name}</p>
                    <p class="amount2">${p.money}</p>
                </div>
            </div>
        `
})

// let storeItems = [...document.querySelectorAll(".container3-1")];
// console.log(storeItems);

let Data = document.querySelector(".container3");
Data.innerHTML =`${items.join("")}`

//   slider function
let leftArrow = document.querySelector(".arrow")
let rightArrow = document.querySelector(".icon4-2")

leftArrow.addEventListener("click", function(){
    let image = document.getElementsByClassName("slider-container2");
    sliderIndex += 1;
    if(sliderIndex > image.length){
        sliderIndex = 1;
    }

    for (let i = 0; i < image.length; i++){
       image[i].style.display = "none"
    }
    image[sliderIndex - 1].style.display = "block";
})


rightArrow.addEventListener("click", function(){
    let image = document.getElementsByClassName("slider-container2");
    sliderIndex -= 1;

    if(sliderIndex < 1){
        sliderIndex = image.length;
    }

    for (i = 0; i < image.length; i++){
        image[i].style.display = "none";
        image[sliderIndex - 1].style.display = "block"
    }
})

const content = [
                    {
                     photo: "./img/fakerun.png",
                     amount: "$98.00",
                     name: "cashmere tank + bag",
                     money:"$120"
                    },
                    {
                     photo: "./img/snowwhite.png",
                     amount: "$98.00",
                     name: "cashmere tank + bag",
                     money:"$120"
                    },
                    {
                     photo: "./img/styledollcolor.png",
                     amount: "$98.00",
                     name: "cashmere tank + bag",
                     money:"$120"
                    },
                    {
                     photo:"./img/redquotes.png",
                     amount: "$98.00 ",
                     name: "cashmere tank + bag",
                     money:"$120"
                    }
    
]

let item = content.map((x)=>{
    return `
            <div class="container5-1">
                <div class="petdataimage1">  
                    <img class="image2" src=${x.photo} />
                </div>
                <div class="container5-details">
                    <p class="amount3">${x.name}</p>
                     <p class="amount4">${x.money}</p>
                 </div>
            </div>
    `
})

// console.log(item);

let goodsDate = document.querySelector(".container5-wrapper");
goodsDate.innerHTML =`${item.join("")}`;


    //  search function

search.addEventListener("keyup", function(e){
let search1 = e.target.value.toLowerCase().trim();
let filteredArray = tred.filter((fi)=>{
    if(fi.name.includes(search1)){
        return fi;
    }
}) 
let filteredContent = filteredArray.map((p)=>{

return `
            <div class="container3-1">
                <div class="petdataimage">  
                    <img class="image1" src=${p.photo} />
                    <div class="header-container2-icons-wrapper">
                        <div class="java-icon">
                            <p><i class="fa fa-search search"></i></p>
                            <p><i class="fa fa-user"></i></p>
                            <p><i class="fa fa-shopping-cart"></i></p>
                        </div>
                    </div>
                </div>
                <div class="items-container-details">
                    <p class="amount1">${p.name}</p>
                    <p class="amount2">${p.money}</p>
                </div>
            </div>
        `
})

Data.innerHTML =`${filteredContent.join("")}`

let noItemFound = Data.every(function(itemss){
    if(itemss.style.display == "none"){
        return true;
    } else return false;

    if(noItemFound){
        errowTest.style.display = "block";
        errowTest.textContent = `no ${search} found`;
    } else{errowTest.style.display = "none"}
})
// console.log(filteredArray);
});



