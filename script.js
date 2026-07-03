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