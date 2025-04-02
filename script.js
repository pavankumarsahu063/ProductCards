const div=document.getElementById("main");


const api="https://fakestoreapi.com/products";


document.addEventListener("DOMContentLoaded",async ()=>{
    let res=await fetch(api);
    let data=await res.json();
    console.log(data);

    let currPage=data.slice(0,4);
    console.log(currPage);

    
    
    currPage.forEach(element => {
        console.log(element);
        let card=document.createElement("div");
        card.className="cards";
        card.innerHTML=`
        <img class="imgs" src="${element.image}" alt="images">
        <h1 class='title'>${element.title}</h1>
        <h1 class="price">${element.price}</h1>
        
        `
        div.appendChild(card);

        
        
    });
    let prevBtn=document.createElement("button").innerText="prev";
    prevBtn.className="btn";
    
    // document.querySelector(".btn").style.margin="20px";
    let nextBtn=document.createElement("button").innerText="Next";

    div.append(prevBtn,nextBtn);
    
})

