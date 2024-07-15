const techimg=document.querySelector('#techimg');
const techinfo=document.querySelector('#techinfo');
const techname=document.querySelector('#techname');
const left =document.querySelector('#left');
const right=document.querySelector('#right');
const techimages=[
    "html.png","CSS.png","javas2.png","Tailwind.png","mongodb.png","Express.png","newReact.png","NodeJs.svg","github.png"
]
const techdetails=[
    "HTML serves as the fundamental structure for webpages, making it easier for me to integrate with CSS, JavaScript, and various CSS libraries.",
    "CSS allows me to style and design webpages, enhancing their visual appeal and layout.",
    "JavaScript enables me to add interactive elements and dynamic features to webpages, making them more engaging.",
    "Tailwind-CSS offers a utility-first approach to styling, enabling me to quickly build custom designs without writing custom CSS.",
    "MongoDB is my go-to for flexible and scalable NoSQL database solutions, essential for storing and managing data.",
    "ExpressJS provides a robust framework for building web applications and APIs using Node.js, simplifying server-side development.",
    "ReactJS enables me to create dynamic and responsive user interfaces for web applications, making it a powerful tool for front-end development",
    "NodeJS empowers me to build scalable and efficient server-side applications using JavaScript.",
    "GitHub serves as my platform for version control, collaboration, and hosting of code repositories."
]



let index=0;



function refreshRightAnimation(){
    techimg.classList.remove('slideR','slideL')
    void techimg.offsetWidth;
    techimg.classList.add('slideR');

    techinfo.classList.remove('slideR','slideL')
    void techinfo.offsetWidth;
    techinfo.classList.add('slideR');

    techname.classList.remove('slideU')
    void techname.offsetWidth;
    techname.classList.add('slideU');
}

function refreshLeftAnimation(){
    techimg.classList.remove('slideR','slideL')
    void techimg.offsetWidth;
    techimg.classList.add('slideL');

    techinfo.classList.remove('slideR','slideL')
    void techinfo.offsetWidth;
    techinfo.classList.add('slideL');

    techname.classList.remove('slideU')
    void techname.offsetWidth;
    techname.classList.add('slideU');

}

function setSkill(){
    let url='./images/'+techimages[index];
    let details=techdetails[index];

    let tech="";

    let i=0;

    while(details[i]!=' '){
        tech+=details[i];
        i++;
    }

    details=details.substring(i);

    // console.log(details);
    // console.log(tech)
    techimg.setAttribute('src',url);
    techinfo.innerHTML=`<span class="text-4xl">${tech}</span>`+details;
    techname.innerText=tech;
}

function refresh(){
    while(index<techimages.length){
        setSkill();
        index++;
    }
    index=0;
}

refresh();
setSkill();


right.addEventListener('click',(e)=>{
    if(index==techimages.length-1) index=0;
    else index++;

    refreshRightAnimation();

    setSkill();
})

left.addEventListener('click',(e)=>{
    if(index==0) index=techimages.length-1;
    else index--;

    refreshLeftAnimation();

    setSkill();
})

function gotocc(){
    window.open('https://www.codechef.com/users/paraswaghela77');
}

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

function scrollToTop() {
    console.log('hehe')
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

