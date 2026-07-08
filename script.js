var typed= new Typed(".typing",{
    strings:["Data Engineer","Software Engineer","Web Developer"],
    typeSpeed:80,
    backSpeed:50,
    backDelay:1500,
    loop:true
});

particlesJS("particles-js",{

particles:{

number:{
value:80
},

color:{
value:"#00bfff"
},

shape:{
type:"circle"
},

opacity:{
value:0.5
},

size:{
value:3
},

move:{
enable:true,
speed:2
}

}

});

function showHome(){

document.getElementById("home-content").style.display="block";

document.getElementById("about-content").style.display="none";

}

function showAbout(){

document.getElementById("home-content").style.display="none";

document.getElementById("about-content").style.display="block";

}

var typed = new Typed(".auto-type", {
    strings: [
        "Aspiring Data Engineer",
        "Python Developer",
        "Power BI Developer",
        "SQL Enthusiast",
        "Data Analyst"
    ],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});

const skillCards = document.querySelectorAll(".skill-card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){

            skillCards.forEach((card,index)=>{
                setTimeout(()=>{
                    card.classList.add("show");
                }, index * 600);
            });

        }
    });
},{threshold:0.3});

observer.observe(document.querySelector("#skills"));
