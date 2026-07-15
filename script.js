// ===== Scroll Animations =====

const elements = document.querySelectorAll("section,.hero,.gallery img");

const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
},{
threshold:.15
});

elements.forEach(el=>{
el.classList.add("fade");
observer.observe(el);
});

// ===== Header Background =====

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.style.background="rgba(0,0,0,.85)";
header.style.padding="20px 8%";

}else{

header.style.background="rgba(0,0,0,.35)";
header.style.padding="28px 8%";

}

});

// ===== Lightbox =====

const gallery=document.querySelectorAll(".gallery img");

const lightbox=document.createElement("div");

lightbox.id="lightbox";

lightbox.innerHTML="<img>";

document.body.appendChild(lightbox);

const lightboxImg=lightbox.querySelector("img");

gallery.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.classList.add("active");

lightboxImg.src=img.src;

});

});

lightbox.addEventListener("click",()=>{

lightbox.classList.remove("active");

});

// ===== Language Switch =====

const translations={

en:{
portfolio:"Portfolio",
about:"About",
contact:"Inquiry",
button:"Explore Portfolio"
},

es:{
portfolio:"Portfolio",
about:"Sobre mí",
contact:"Contacto",
button:"Ver Portfolio"
},

ro:{
portfolio:"Portofoliu",
about:"Despre mine",
contact:"Contact",
button:"Vezi Portofoliu"
}

};

document.querySelectorAll(".languages button").forEach(btn=>{

btn.onclick=()=>{

const lang=btn.textContent.toLowerCase();

document.querySelector('a[href="#portfolio"]').textContent=translations[lang].portfolio;

document.querySelector('a[href="#about"]').textContent=translations[lang].about;

document.querySelector('a[href="#contact"]').textContent=translations[lang].contact;

document.querySelector(".button").textContent=translations[lang].button;

};

});

// ===== Current Year =====

const year=document.querySelector("footer p");

if(year){

year.innerHTML=`© ${new Date().getFullYear()} Valentin Neacsu`;

}
