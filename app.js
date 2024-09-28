const techimg=document.querySelector('#techimg');
const techinfo=document.querySelector('#techinfo');
const techname=document.querySelector('#techname');
const left =document.querySelector('#left');
const right=document.querySelector('#right');

const abt=document.querySelector('#aboutme')
const footer=document.querySelector('#footer');
const myskills=document.querySelector('#myskills');

const techimages=[
    "techimg5","techimg6","techimg7","techimg8","techimg9","techimg10","techimg11","techimg12","techimg1","techimg2","techimg3","techimg4"
]
const techdetails=[
    "MongoDB is my go-to for flexible and scalable NoSQL database solutions, essential for storing and managing data.",
    "ExpressJS provides a robust framework for building web applications and APIs using Node.js, simplifying server-side development.",
    "ReactJS enables me to create dynamic and responsive user interfaces for web applications, making it a powerful tool for front-end development",
    "NodeJS empowers me to build scalable and efficient server-side applications using JavaScript.",
    "GitHub serves as my platform for version control, collaboration, and hosting of code repositories.",
    "C++ provides me with a cleaner and more efficient way to tackle online coding problems, especially when it comes to data structures and algorithms.",
    "Vercel provides me with a smoother and easier way to deploy my project's frontend, simplifying both hosting and configuration.",
    "Render helps me easily host my backend and simplifies the configuration with the frontend, making the deployment process more efficient and manageable.",
    "HTML serves as the fundamental structure for webpages, making it easier for me to integrate with CSS, JavaScript, and various CSS libraries.",
    "CSS allows me to style and design webpages, enhancing their visual appeal and layout.",
    "JavaScript enables me to add interactive elements and dynamic features to webpages, making them more engaging.",
    "Tailwind-CSS offers a utility-first approach to styling, enabling me to quickly build custom designs without writing custom CSS."
]



let index=0;
let currTech=document.querySelector(techimages[index]);

function refreshLeftAnimation(){
    currTech.classList.remove('slideL','slideR')
    void currTech.offsetWidth;
    currTech.classList.add('slideL');

    techinfo.classList.remove('slideR','slideL')
    void techinfo.offsetWidth;
    techinfo.classList.add('slideL');

    techname.classList.remove('slideU')
    void techname.offsetWidth;
    techname.classList.add('slideU');
}

function refreshRightAnimation(){
    currTech.classList.remove('slideL','slideR')
    void currTech.offsetWidth;
    currTech.classList.add('slideR');

    techinfo.classList.remove('slideR','slideL')
    void techinfo.offsetWidth;
    techinfo.classList.add('slideR');

    techname.classList.remove('slideU')
    void techname.offsetWidth;
    techname.classList.add('slideU');
}

function setSkillinfo(){
    let details=techdetails[index];
    let tech="";

    let i=0;

    while(details[i]!=' '){
        tech+=details[i];
        i++;
    }

    details=details.substring(i);

    techinfo.innerHTML=`<span class="text-4xl">${tech}</span>`+details;
    techname.innerText=tech;
}

function setSkillImage(){
    currTech=document.querySelector('#'+techimages[index]);
    currTech.classList.remove('hidden');
}


right.addEventListener('click',(e)=>{
    currTech.classList.add('hidden')

    if(index==techimages.length-1) index=0;
    else index++;

    
    setSkillImage();
    setSkillinfo();
    
    refreshRightAnimation();
})



left.addEventListener('click',(e)=>{

    currTech.classList.add('hidden')

    if(index==0) index=techimages.length-1;
    else index--;
    setSkillImage();
    setSkillinfo();

    refreshLeftAnimation();


})

setSkillImage();
setSkillinfo();

function gotocc(){
    window.open('https://www.codechef.com/users/paraswaghela77');
}

function gotomapgame(){
    window.open('https://paraswaghela07.github.io/MINI-PROJECT/map_game/map.html')
}

function gotomathgame(){
    window.open('https://paraswaghela07.github.io/MINI-PROJECT/memory_math/homepage.html');
}

function gotomaprepo(){
    window.open('https://github.com/ParasWaghela07/MINI-PROJECT/tree/main/map_game')
}

function gotomathrepo(){
    window.open('https://github.com/ParasWaghela07/MEMORY_MATH');
}

function gotocartrepo(){
    window.open('https://github.com/ParasWaghela07/Shopping-Cart');
}

function gotonotesrepo(){
    window.open('https://github.com/ParasWaghela07/NotesApp');
}

// function gotocartgame(){
//     window.open('https://shopping-cart-ten-liard.vercel.app/');
// }

function gotolc(){
    window.open('https://leetcode.com/u/paraswaghela777/')
}

function gotogfg(){
    window.open('https://www.geeksforgeeks.org/user/paraswagswty/')
}

function gotogithub(){
    window.open('https://github.com/ParasWaghela07');
}

function gotoli(){
    window.open('https://www.linkedin.com/in/paras-waghela-21b7bb26b/');
}

function gotomail(){
    window.open('mailto:paras.w@somaiya.edu?subject=Interact%20with%20me');
}

function gotoabout(){
    abt.scrollIntoView({
        behavior:'smooth'
    })
    hide();
}

function gotomyskills(){
    myskills.scrollIntoView({
        behavior:'smooth'
    })
    hide();
}

function gotoprojects(){
    document.querySelector('#myprojects').scrollIntoView({
        behavior:'smooth'
    })
    hide();
}
function gotocontactme(){
    footer.scrollIntoView({
        behavior:'smooth'
    })
    hide();
}


function hide(){
    document.querySelector('#menubar').classList.add('goback');
}


document.querySelector('#floater').addEventListener('click',()=>{
    document.querySelector('#menubar').classList.remove('goback');
})