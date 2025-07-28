/**
 * ===== PORTFOLIO INTERACTIVE FUNCTIONALITY =====
 * Enhanced JavaScript for Paras Waghela's Portfolio
 * Includes tech stack carousel, navigation, and external links
 */

// ===== DOM ELEMENT REFERENCES =====
const techElements = {
    techinfo: document.querySelector('#techinfo'),
    techname: document.querySelector('#techname'),
    leftBtn: document.querySelector('#left'),
    rightBtn: document.querySelector('#right')
};

const navigationElements = {
    aboutme: document.querySelector('#aboutme'),
    footer: document.querySelector('#footer'),
    myskills: document.querySelector('#myskills'),
    navbar: document.querySelector('#navbar'),
    dsa: document.querySelector('#dsa'),
    myprojects: document.querySelector('#myprojects'),
    mycerti: document.querySelector('#mycerti')
};

const mobileMenuElements = {
    menubar: document.querySelector('#menubar'),
    hamburger: document.querySelector('#g1'),
    closeBtn: document.querySelector('#g2'),
    floater: document.querySelector('#floater'),
    floater2: document.querySelector('#floater2')
};

// ===== TECH STACK CONFIGURATION =====
const techStackConfig = {
    images: [
        "techimg5", "techimg6", "techimg7", "techimg8", "techimg4", 
        "techimg9", "techimg10", "techimg11", "techimg12", "techimg13", 
        "techimg1", "techimg2", "techimg3"
    ],
    
    details: [
        "MongoDB is my go-to for flexible and scalable NoSQL database solutions, essential for storing and managing data.",
        "ExpressJS provides a robust framework for building web applications and APIs using Node.js, simplifying server-side development.",
        "ReactJS enables me to create dynamic and responsive user interfaces for web applications, making it a powerful tool for front-end development",
        "NodeJS empowers me to build scalable and efficient server-side applications using JavaScript.",
        "Tailwind-CSS offers a utility-first approach to styling, enabling me to quickly build custom designs without writing custom CSS.",
        "GitHub serves as my platform for version control, collaboration, and hosting of code repositories.",
        "C++ provides me with a cleaner and more efficient way to tackle online coding problems, especially when it comes to data structures and algorithms.",
        "Vercel provides me with a smoother and easier way to deploy my project's frontend, simplifying both hosting and configuration.",
        "Render helps me easily host my backend and simplifies the configuration with the frontend, making the deployment process more efficient and manageable.",
        "Firebase provides backend services like auth, database, and hosting, enabling pure client-side projects with easy deployment.",
        "HTML serves as the fundamental structure for webpages, making it easier for me to integrate with CSS, JavaScript, and various CSS libraries.",
        "CSS allows me to style and design webpages, enhancing their visual appeal and layout.",
        "JavaScript enables me to add interactive elements and dynamic features to webpages, making them more engaging."
    ]
};

// ===== TECH STACK CAROUSEL STATE =====
let currentTechIndex = 0;
let currentTechElement = null;

// ===== UTILITY FUNCTIONS =====
const utils = {
    /**
     * Forces a reflow to restart CSS animations
     * @param {HTMLElement} element - Element to trigger reflow on
     */
    triggerReflow(element) {
        element.classList.remove('slideL', 'slideR', 'slideU');
        void element.offsetWidth; // Force reflow
    },

    /**
     * Extracts technology name from description
     * @param {string} description - Full tech description
     * @returns {string} Technology name
     */
    extractTechName(description) {
        const spaceIndex = description.indexOf(' ');
        return spaceIndex !== -1 ? description.substring(0, spaceIndex) : description;
    },

    /**
     * Opens URL in new tab with error handling
     * @param {string} url - URL to open
     */
    openUrl(url) {
        try {
            window.open(url, '_blank', 'noopener,noreferrer');
        } catch (error) {
            console.error('Failed to open URL:', url, error);
        }
    },

    /**
     * Smooth scrolls to element with fallback
     * @param {HTMLElement} element - Element to scroll to
     * @param {boolean} hideMobileMenu - Whether to hide mobile menu after scroll
     */
    smoothScrollTo(element, hideMobileMenu = false) {
        if (!element) {
            console.warn('Element not found for scrolling');
            return;
        }

        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        if (hideMobileMenu) {
            mobileMenu.hide();
        }
    }
};

// ===== TECH STACK CAROUSEL FUNCTIONALITY =====
const techCarousel = {
    /**
     * Updates tech information display
     */
    updateTechInfo() {
        const currentDescription = techStackConfig.details[currentTechIndex];
        const techName = utils.extractTechName(currentDescription);
        const description = currentDescription.substring(techName.length);

        if (techElements.techinfo) {
            techElements.techinfo.innerHTML = `<span class="text-4xl">${techName}</span>${description}`;
        }

        if (techElements.techname) {
            techElements.techname.textContent = techName;
        }
    },

    /**
     * Shows current tech image
     */
    showCurrentTechImage() {
        // Hide all tech images
        techStackConfig.images.forEach(imageId => {
            const img = document.querySelector(`#${imageId}`);
            if (img) img.classList.add('hidden');
        });

        // Show current tech image
        const currentImageId = techStackConfig.images[currentTechIndex];
        currentTechElement = document.querySelector(`#${currentImageId}`);
        
        if (currentTechElement) {
            currentTechElement.classList.remove('hidden');
        }
    },

    /**
     * Applies slide left animation
     */
    animateLeft() {
        if (!currentTechElement || !techElements.techinfo || !techElements.techname) return;

        [currentTechElement, techElements.techinfo].forEach(element => {
            utils.triggerReflow(element);
            element.classList.add('slideL');
        });

        utils.triggerReflow(techElements.techname);
        techElements.techname.classList.add('slideU');
    },

    /**
     * Applies slide right animation
     */
    animateRight() {
        if (!currentTechElement || !techElements.techinfo || !techElements.techname) return;

        utils.triggerReflow(currentTechElement);
        currentTechElement.classList.add('slideR');

        utils.triggerReflow(techElements.techinfo);
        techElements.techinfo.classList.add('slideR');

        utils.triggerReflow(techElements.techname);
        techElements.techname.classList.add('slideU');
    },

    /**
     * Moves to next technology
     */
    next() {
        if (currentTechElement) {
            currentTechElement.classList.add('hidden');
        }

        currentTechIndex = (currentTechIndex + 1) % techStackConfig.images.length;
        
        this.showCurrentTechImage();
        this.updateTechInfo();
        this.animateRight();
    },

    /**
     * Moves to previous technology
     */
    previous() {
        if (currentTechElement) {
            currentTechElement.classList.add('hidden');
        }

        currentTechIndex = currentTechIndex === 0 
            ? techStackConfig.images.length - 1 
            : currentTechIndex - 1;
        
        this.showCurrentTechImage();
        this.updateTechInfo();
        this.animateLeft();
    },

    /**
     * Initializes the tech carousel
     */
    init() {
        this.showCurrentTechImage();
        this.updateTechInfo();

        // Add event listeners with error handling
        if (techElements.rightBtn) {
            techElements.rightBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.next();
            });
        }

        if (techElements.leftBtn) {
            techElements.leftBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.previous();
            });
        }
    }
};

// ===== MOBILE MENU FUNCTIONALITY =====
const mobileMenu = {
    /**
     * Shows mobile menu
     */
    show() {
        if (mobileMenuElements.menubar) {
            mobileMenuElements.menubar.classList.remove('goback');
        }
        
        if (mobileMenuElements.hamburger) {
            mobileMenuElements.hamburger.classList.add('toggle-hide');
        }
        
        if (mobileMenuElements.closeBtn) {
            mobileMenuElements.closeBtn.classList.remove('toggle-hide');
        }
    },

    /**
     * Hides mobile menu
     */
    hide() {
        if (mobileMenuElements.menubar) {
            mobileMenuElements.menubar.classList.add('goback');
        }
        
        if (mobileMenuElements.hamburger) {
            mobileMenuElements.hamburger.classList.remove('toggle-hide');
        }
        
        if (mobileMenuElements.closeBtn) {
            mobileMenuElements.closeBtn.classList.add('toggle-hide');
        }
    },

    /**
     * Toggles mobile menu visibility
     */
    toggle() {
        if (mobileMenuElements.menubar?.classList.contains('goback')) {
            this.show();
        } else {
            this.hide();
        }
    },

    /**
     * Initializes mobile menu event listeners
     */
    init() {
        if (mobileMenuElements.floater) {
            mobileMenuElements.floater.addEventListener('click', (e) => {
                e.preventDefault();
                this.show();
            });
        }

        if (mobileMenuElements.floater2) {
            mobileMenuElements.floater2.addEventListener('click', (e) => {
                e.preventDefault();
                this.hide();
            });
        }
    }
};

// ===== EXTERNAL LINKS FUNCTIONALITY =====
const externalLinks = {
    // Social Media Links
    linkedin: () => utils.openUrl('https://www.linkedin.com/in/paras-waghela-21b7bb26b/'),
    github: () => utils.openUrl('https://github.com/ParasWaghela07'),
    email: () => utils.openUrl('mailto:paras.w@somaiya.edu'),

    // Coding Platforms
    leetcode: () => utils.openUrl('https://leetcode.com/u/paraswaghela777/'),
    geeksforgeeks: () => utils.openUrl('https://www.geeksforgeeks.org/user/paraswagswty/'),
    codechef: () => utils.openUrl('https://www.codechef.com/users/paraswaghela77'),

    // Project Links
    bookify: () => utils.openUrl('https://bookify-4c8bf.web.app'),
    miniGames: () => utils.openUrl('https://paraswaghela07.github.io/Lets_play/main.html'),
    ecomm: () => utils.openUrl('https://github.com/ParasWaghela07/Ecomm'),

    // Repository Links
    aiRepo: () => utils.openUrl('https://github.com/ParasWaghela07/AI-Assistant'),
    bookifyRepo: () => utils.openUrl('https://github.com/ParasWaghela07/Bookify'),
    interwinRepo: () => utils.openUrl('https://github.com/ParasWaghela07/PrepDSA'),
    cartRepo: () => utils.openUrl('https://github.com/ParasWaghela07/Shopping-Cart'),
    notesRepo: () => utils.openUrl('https://github.com/ParasWaghela07/NotesApp'),
    miniGamesRepo: () => utils.openUrl('https://github.com/ParasWaghela07/Lets_play')
};

// ===== NAVIGATION FUNCTIONALITY =====
const navigation = {
    /**
     * Scrolls to top of page
     * @param {boolean} hideMobileMenu - Whether to hide mobile menu
     */
    gotoTop(hideMobileMenu = false) {
        utils.smoothScrollTo(navigationElements.navbar, hideMobileMenu);
    },

    /**
     * Scrolls to about section
     * @param {boolean} hideMobileMenu - Whether to hide mobile menu
     */
    gotoAbout(hideMobileMenu = false) {
        utils.smoothScrollTo(navigationElements.aboutme, hideMobileMenu);
    },

    /**
     * Scrolls to skills section
     * @param {boolean} hideMobileMenu - Whether to hide mobile menu
     */
    gotoSkills(hideMobileMenu = false) {
        utils.smoothScrollTo(navigationElements.myskills, hideMobileMenu);
    },

    /**
     * Scrolls to DSA section
     * @param {boolean} hideMobileMenu - Whether to hide mobile menu
     */
    gotoDSA(hideMobileMenu = false) {
        utils.smoothScrollTo(navigationElements.dsa, hideMobileMenu);
    },

    /**
     * Scrolls to projects section
     * @param {boolean} hideMobileMenu - Whether to hide mobile menu
     */
    gotoProjects(hideMobileMenu = false) {
        utils.smoothScrollTo(navigationElements.myprojects, hideMobileMenu);
    },

    /**
     * Scrolls to certificates section
     * @param {boolean} hideMobileMenu - Whether to hide mobile menu
     */
    gotoCertificates(hideMobileMenu = false) {
        utils.smoothScrollTo(navigationElements.mycerti, hideMobileMenu);
    },

    /**
     * Scrolls to contact section
     * @param {boolean} hideMobileMenu - Whether to hide mobile menu
     */
    gotoContact(hideMobileMenu = false) {
        utils.smoothScrollTo(navigationElements.footer, hideMobileMenu);
    }
};

// ===== GLOBAL FUNCTION BINDINGS =====
// These functions are called from HTML onclick attributes
window.gotoli = externalLinks.linkedin;
window.gotogithub = externalLinks.github;
window.gotomail = externalLinks.email;
window.gotolc = externalLinks.leetcode;
window.gotogfg = externalLinks.geeksforgeeks;
window.gotocc = externalLinks.codechef;
window.gotobookify = externalLinks.bookify;
window.gotominigame = externalLinks.miniGames;
window.gotoairepo = externalLinks.aiRepo;
window.gotobookifyrepo = externalLinks.bookifyRepo;
window.gotointerwinrepo = externalLinks.interwinRepo;
window.gotocartrepo = externalLinks.cartRepo;
window.gotonotesrepo = externalLinks.notesRepo;
window.gotominigamerepo = externalLinks.miniGamesRepo;
window.gotoecommrepo = externalLinks.ecomm; // Updated to new project

window.gototop = navigation.gotoTop;
window.gotoabout = navigation.gotoAbout;
window.gotomyskills = navigation.gotoSkills;
window.gotodsa = navigation.gotoDSA;
window.gotoprojects = navigation.gotoProjects;
window.gotocerti = navigation.gotoCertificates;
window.gotocontactme = navigation.gotoContact;

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing Portfolio...');
    
    try {
        techCarousel.init();
        mobileMenu.init();
        console.log('Portfolio initialized successfully');
    } catch (error) {
        console.error('Error initializing portfolio:', error);
    }
});

// ===== PERFORMANCE OPTIMIZATION =====
// Throttle scroll events for better performance
let ticking = false;

function updateScrollPosition() {
    // Add any scroll-based functionality here
    ticking = false;
}

window.addEventListener('scroll', function() {
    if (!ticking) {
        requestAnimationFrame(updateScrollPosition);
        ticking = true;
    }
});

// ===== ERROR HANDLING =====
window.addEventListener('error', function(event) {
    console.error('Portfolio Error:', event.error);
});

// ===== EXPORT FOR TESTING (if needed) =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        techCarousel,
        mobileMenu,
        navigation,
        externalLinks,
        utils
    };
}
