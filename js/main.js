function fixNav() {
  const nav = document.querySelector('header');
  const line = document.querySelector('.line');
  const aboutLeft = document.querySelector('.aboutme-left');
  const aboutRight = document.querySelector('.aboutme-right');
  const pf = document.querySelector('.pf');
  const dsBox = document.querySelector('.design');
  const contact = document.querySelector('#contact');
  //const Arr = ['sub-fade-in','third-fade-in','four-fade-in'];


  //console.log(aboutBar);
  const nav1 = window.pageYOffset; //스크롤값 알려줌
  //console.log(nav1);

  if (nav1 > 0) {
    nav.classList.add('fixed-nav'); 
  } else if(window.scrollY == 0) {
    nav.classList.remove('fixed-nav'); 
  }

  if (nav1 >= 100) {
    line.classList.add('active');
  } else {
    return; 
  }

  if (nav1 >= 200) {
    aboutLeft.classList.add('fade-in');
    aboutRight.classList.add('sub-fade-in');
  } else {
    return;
  }

  if (nav1 > 300) {
    const skills = document.querySelectorAll('.bar');
    let colArr = ['#e44d26','#0070ba','#63a814','#6e81b6'];
    let subColArr = ['#f16529','#29a8e0','#8acf17','#90b7fc'];
    for(let i = 0; i < skills.length; i++){
      skills[i].style.background=colArr[i];
      skills[i].lastChild.previousSibling.style.background=subColArr[i];
      let rateNum = $(".bar").eq(i).find("b").attr("value");
      $(".bar").eq(i).find(".inner-bar").delay(1500).animate({width:rateNum+"%"}, 1500);
    }
  }

  if (nav1 >= 920) {
    pf.classList.add('fade-in');
  } else {
    return;
  }
  
  if (nav1 >= 1929) {
    dsBox.classList.add('fade-in');
  } else {
    return;
  }

  if (nav1 >= 2764) {
    contact.classList.add('fade-in');
  } else {
    return;
  }
}
window.addEventListener('scroll', fixNav);


//Changing Navigation font color when Scrolling------------------//
var activeHeader = function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
  
    for (var i = 0; i < $("section").length; i++) {
      var secTop = $("section").eq(i).offset().top;
      var secBtm = secTop + $("section").eq(i).outerHeight();

      if (scroll >= secTop - 1 && scroll < secBtm - 1) {
        $(".nav li button").eq(i).addClass("nav-color");
      } else {
        $(".nav li button").eq(i).removeClass("nav-color");
      }
    }
  });
}
activeHeader();
//------------------------------------------------------------------//


//Click Scrolling Event Code---------------------------------------//
const navButton = document.querySelectorAll('.nav button');
const home = document.querySelector('.intro');
const infiArrow = document.querySelector('.intro .infinity-img');
const aboutMe = document.querySelector('.about');
const portFolio = document.querySelector('.pf');
const design = document.querySelector('.design');
const contact = document.querySelector('#contact');

const homeTop = home.offsetTop;
const aboutMeTop = aboutMe.offsetTop;
const portFolioTop = portFolio.offsetTop;
const designTop = design.offsetTop;
const contactTop = contact.offsetTop;

navButton[0].onclick = function(){
  window.scroll({top:homeTop, behavior: 'smooth'})
}

infiArrow.onclick = function(){
  window.scroll({top:aboutMeTop, behavior: 'smooth'})
}

navButton[1].onclick = function(){
  window.scroll({top:aboutMeTop, behavior: 'smooth'})
}

navButton[2].onclick = function(){
  window.scroll({top:portFolioTop, behavior: 'smooth'})
}

navButton[3].onclick = function(){
  window.scroll({top:designTop, behavior: 'smooth'})
}

navButton[4].onclick = function(){
  window.scroll({top:contactTop, behavior: 'smooth'})
}
//-----------------------------------------------------------//


// Portfolio Total Code-----------------------------------//
//MouseWheel Code
// jQuery Next or First / Prev or Last plugin

$.fn.nextOrFirst = function(selector){
  var next = this.next(selector);
  return (next.length) ? next : this.prevAll(selector).last();
};

$.fn.prevOrLast = function(selector){
  var prev = this.prev(selector);
  return (prev.length) ? prev : this.nextAll(selector).last();
};

// Scroll Functions

function scrollSection(parent, dir) {
  var active = "active",
    section = parent.find("."+active);
  if (dir == "prev") {
    $(".horizontal section").animate({left:-100 * n + "%"}, 500); 
    //section.removeClass(active).prevOrLast().addClass(active);
  } else {
    $(".horizontal section").animate({left:100 * n + "%"}, 500); 
  }
}

// Bind Scroll function to mouse wheel event

$('#horizontal').on('mousewheel wheel', function(e){
if (e.originalEvent.wheelDelta /120 > 0) { // scroll up event
  scrollSection($(this), "prev");
} else { // scroll down event
  scrollSection($(this));
}
});


// const mouseWheel = document.querySelector('.pf-box');
// const pfBox = document.querySelector('.each-pf-box');
// var pfWidth = pfBox.offsetWidth;

// mouseWheel.addEventListener('wheel', function(e) {
//     const race = pfWidth; // How many pixels to scroll
//     if (e.deltaY > 0) // Scroll right
//         mouseWheel.scrollLeft += race;
//     else // Scroll left
//         mouseWheel.scrollLeft -= race;
// 		e.preventDefault();
// });

//Modal Code
const openModal = document.querySelectorAll('#openModal');
const Modal = document.querySelectorAll('#pf-Modal');

for(let i=0; i < openModal.length; i++){
  openModal[i].onclick = function(){
    Modal[i].style.display = "block";
    window.onclick = function(event){
      if(event.target == Modal[i]){
        Modal[i].style.display = "none";
      }
    }
  }
}
//----------------------------------------------------------//


// Mobile Menu Click Effect---------------------------------//
$(function(){
  $("header .menu-icon").click(function(){
    $(this).toggleClass('icon-rotate');
    if($(this).hasClass('icon-rotate')){
      $("header .nav").animate({
        right:"5%"
      },300);
      $(".overlay1").animate({
        "width":"100%"
      },300);
    } else {
      $("header .nav").animate({
        right:'-50%'
      },300);
      $(".overlay1").animate({
        "width":0
      },300);
    }
  });

  $("header .nav button").click(function(){
    $("header .menu-icon").removeClass('icon-rotate');
    $("header .nav").animate({
      right:'-50%'
    },300);
    $(".overlay1").animate({
      "width":0
    },300);
  });
});



  