//nav bar
const navbar = document.querySelector('.navbar');
const hambuger = document.querySelector('.hambuger');
const pageContent = document.querySelector('.page-content');

hambuger.addEventListener('click', ()=> {
    hambuger.classList.toggle('active');
    navbar.classList.toggle('active');
    pageContent.style.filter = navbar.classList.contains('active') ? 'blur(5px)' : 'none';
    document.body.classList.toggle('nav-open');
})
window.addEventListener("scroll",  () => {
    hambuger.classList.remove('active');
    navbar.classList.remove('active');
    pageContent.style.filter = null;
    

});

document.addEventListener('click', (e) => {
    if (
        navbar.classList.contains('active') &&
        !navbar.contains(e.target) &&
        !hambuger.contains(e.target)
    ) {
        navbar.classList.remove('active');
        hambuger.classList.remove('active');
        document.body.classList.remove('nav-open'); // if you're using the blur class
        pageContent.style.filter = null
    }
});

//hide header
let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop && scrollTop > 100) {
    // Scrolling down
    header.style.top = "-70px"; // Hide header
  } else {
    // Scrolling up
    header.style.top = "0";
  }
  lastScrollTop = scrollTop;
});

//swiper
const swiperWrapper = document.querySelector('.swiper-wrapper');
const swiperSlides = document.querySelectorAll('.updates');
let currentIndex = 0;

 // Auto swipe every 5 seconds
    setInterval(() => {
      currentIndex = (currentIndex + 1) % swiperSlides.length;
      swiperWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, 3000);

// Load More
document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".item");
    const loadMoreBtn = document.getElementById("loadMoreBtn");

    let visibleCount = 3; // Number of items to show at a time

    // Show first 2 items initially
    function showItems() {
        for (let i = 0; i < visibleCount && i < items.length; i++) {
            items[i].style.display = "block";
        }

        // Hide button if all items are visible
        if (visibleCount >= items.length) {
            loadMoreBtn.style.display = "none";
        }
    }

    showItems();

    loadMoreBtn.addEventListener("click", function () {
        visibleCount += 3; // Load 2 more items each click
        showItems();
    });
});


// see more

const body = document.body
const buttons = document.querySelectorAll(".detailsBtn");

buttons.forEach(button => {
    button.addEventListener("click", function(){

        const popup = this.parentElement.querySelector(".popup");
        popup.style.display = "flex";
        body.classList.add('no-scroll');
    

        const closeBtn = popup.querySelector(".close");

        closeBtn.addEventListener("click", () => {
            popup.style.display = "none";
            body.classList.remove('no-scroll');
        });

        popup.addEventListener("click", (e)=>{
            if(e.target === popup){
                popup.style.display = "none";
                body.classList.remove('no-scroll');
            }
        });

    });
});

function openModal() {
  document.getElementById("modal").style.display = "block";
  document.body.classList.add("modal-open");
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
  document.body.classList.remove("modal-open");
}




