const techimg=document.querySelector('#techimg');
const techinfo=document.querySelector('#techinfo');
const techname=document.querySelector('#techname');
const left =document.querySelector('#left');
const right=document.querySelector('#right');

const go_to_skills=document.querySelector('#gotoskills')
const go_to_contactme=document.querySelector('#gotocm');
const footer=document.querySelector('#footer');

const myskills=document.querySelector('#myskills');

const techimages=[
    "techimg1","techimg2","techimg3","techimg4","techimg5","techimg6","techimg7","techimg8","techimg9"
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
let currTech=document.querySelector(techimages[index]);

function refreshLeftAnimation(){
    currTech.classList.remove('slideL','slideR','cleft')
    void currTech.offsetWidth;
    currTech.classList.add('slideL');

    techinfo.classList.remove('slideR','slideL','cright')
    void techinfo.offsetWidth;
    techinfo.classList.add('slideL');

    techname.classList.remove('slideU')
    void techname.offsetWidth;
    techname.classList.add('slideU');
}

function refreshRightAnimation(){
    currTech.classList.remove('slideL','slideR','cleft')
    void currTech.offsetWidth;
    currTech.classList.add('slideR');

    techinfo.classList.remove('slideR','slideL','cright')
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

go_to_skills.addEventListener('click',function(e){
    myskills.scrollIntoView({
        behavior:'smooth'
    })
})

go_to_contactme.addEventListener('click',(e)=>{
    footer.scrollIntoView({
        behavior:'smooth'
    })
})

footer.addEventListener('click',function(e){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})


document.addEventListener('DOMContentLoaded', function () {

    const leftAnime=document.querySelectorAll('.leftAnime');
    const rightAnime=document.querySelectorAll('.rightAnime');

    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: `0px 0px 20% 0px`, // Adjust this margin to trigger earlier
        threshold: 0.01 // Trigger when 1% of the element is visible
      };

      const observer1 = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('cleft');
            observer.unobserve(entry.target); // Stop observing once the animation is triggered
          }
        });
      }, observerOptions);

      const observer2 = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('cright');
            observer.unobserve(entry.target); // Stop observing once the animation is triggered
          }
        });
      }, observerOptions);

      leftAnime.forEach(e=>observer1.observe(e))
      rightAnime.forEach(e=>observer2.observe(e))

  });
