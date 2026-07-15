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

const translations = {

en:{
portfolio:"Portfolio",
about:"About",
contact:"Inquiry",
button:"Explore Portfolio",

title:"Photography • Filmmaking",

location:"Based in Switzerland. Available worldwide.",

aboutTitle:"About",

aboutText:"I'm Valentin Neacsu, a visual artist and photographer based in Switzerland. My work spans portrait, fashion, commercial, automotive, events and creative storytelling, always driven by authenticity, emotion and timeless aesthetics. I believe every project deserves its own visual identity, combining artistic vision with attention to detail to create imagery that leaves a lasting impression.",

inquiry:"Inquiry",

subtitle:"Let's create something meaningful together.",

name:"Name",
email:"Email",
company:"Company (optional)",
project:"Project",
message:"Tell me about your project...",
send:"Send Inquiry"

},

es:{
portfolio:"Portfolio",
about:"Sobre mí",
contact:"Contacto",
button:"Ver Portfolio",

title:"Fotografía • Cine",

location:"Con base en Suiza. Disponible en todo el mundo.",

aboutTitle:"Sobre mí",

aboutText:"Soy Valentin Neacsu, artista visual y fotógrafo con base en Suiza. Mi trabajo abarca retrato, moda, fotografía comercial, automoción, eventos y narrativa visual, siempre con un enfoque en la autenticidad, la emoción y una estética atemporal.",

inquiry:"Contacto",

subtitle:"Creemos algo único juntos.",

name:"Nombre",
email:"Correo electrónico",
company:"Empresa (opcional)",
project:"Proyecto",
message:"Cuéntame sobre tu proyecto...",
send:"Enviar"

},

de:{
portfolio:"Portfolio",
about:"Über mich",
contact:"Anfrage",
button:"Portfolio ansehen",

title:"Fotografie • Film",

location:"Mit Sitz in der Schweiz. Weltweit verfügbar.",

aboutTitle:"Über mich",

aboutText:"Ich bin Valentin Neacsu, Visual Artist und Fotograf mit Sitz in der Schweiz. Meine Arbeit umfasst Portrait-, Fashion-, Commercial-, Automotive- und Eventfotografie sowie kreatives Storytelling.",

inquiry:"Anfrage",

subtitle:"Lass uns gemeinsam etwas Besonderes schaffen.",

name:"Name",
email:"E-Mail",
company:"Unternehmen (optional)",
project:"Projekt",
message:"Erzähl mir von deinem Projekt...",
send:"Anfrage senden"

},

fr:{
portfolio:"Portfolio",
about:"À propos",
contact:"Contact",
button:"Voir le Portfolio",

title:"Photographie • Cinéma",

location:"Basé en Suisse. Disponible dans le monde entier.",

aboutTitle:"À propos",

aboutText:"Je suis Valentin Neacsu, artiste visuel et photographe basé en Suisse. Mon travail couvre le portrait, la mode, la photographie commerciale, automobile, les événements et le storytelling visuel.",

inquiry:"Contact",

subtitle:"Créons quelque chose d'unique ensemble.",

name:"Nom",
email:"E-mail",
company:"Entreprise (optionnel)",
project:"Projet",
message:"Parlez-moi de votre projet...",
send:"Envoyer"

},

it:{
portfolio:"Portfolio",
about:"Chi sono",
contact:"Contatti",
button:"Esplora Portfolio",

title:"Fotografia • Cinema",

location:"Con sede in Svizzera. Disponibile in tutto il mondo.",

aboutTitle:"Chi sono",

aboutText:"Sono Valentin Neacsu, artista visivo e fotografo con sede in Svizzera. Il mio lavoro comprende ritratto, moda, fotografia commerciale, automotive, eventi e storytelling creativo.",

inquiry:"Contatti",

subtitle:"Creiamo qualcosa di unico insieme.",

name:"Nome",
email:"Email",
company:"Azienda (opzionale)",
project:"Progetto",
message:"Parlami del tuo progetto...",
send:"Invia"

}

};

document.querySelectorAll(".languages button").forEach(button=>{

button.addEventListener("click",()=>{

const lang=button.dataset.lang;
const t=translations[lang];

document.querySelector('a[href="#portfolio"]').textContent=t.portfolio;
document.querySelector('a[href="#about"]').textContent=t.about;
document.querySelector('a[href="#contact"]').textContent=t.contact;

document.getElementById("hero-title").textContent=t.title;
document.getElementById("hero-location").textContent=t.location;

document.getElementById("hero-button").textContent=t.button;

document.getElementById("about-title").textContent=t.aboutTitle;
document.getElementById("about-text").textContent=t.aboutText;

document.getElementById("contact-title").textContent=t.inquiry;
document.getElementById("contact-subtitle").textContent=t.subtitle;

document.getElementById("name").placeholder=t.name;
document.getElementById("email").placeholder=t.email;
document.getElementById("company").placeholder=t.company;
document.getElementById("project").placeholder=t.project;
document.getElementById("message").placeholder=t.message;

document.getElementById("send").textContent=t.send;

localStorage.setItem("language",lang);

});

});

const savedLanguage=localStorage.getItem("language");

if(savedLanguage){

document.querySelector(`[data-lang="${savedLanguage}"]`).click();

}
// ===== Current Year =====

const year=document.querySelector("footer p");

if(year){

year.innerHTML=`© ${new Date().getFullYear()} Valentin Neacsu`;

}
