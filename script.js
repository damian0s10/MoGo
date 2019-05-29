//scroll
function scroll(e) {
  const href = $(this).attr('href');
  e.preventDefault();
  $('nav .items').toggleClass('navActive');
  $('nav .menu').toggleClass('open');
  $('html, body').animate({
      scrollTop: $(href).offset().top
  }, 600);
  location.hash = href;
};

$('.container li a[href^="#"]').click(scroll);

// open close paragraph
const paragraphs = $('.service2 .service2_container .service2_content .text');
const arrows = $('.service2 .arrow');
let last;
function toggleActive() {
  if(!this.classList.contains('arrow_active')) {
    arrows.removeClass('arrow_active');
    paragraphs.removeClass('text_active');
    this.classList.add('arrow_active');
    this.parentElement.nextElementSibling.classList.add('text_active');
  } else {
    arrows.removeClass('arrow_active');
    paragraphs.removeClass('text_active');
  }
}
arrows.click(toggleActive);

//toggle Menu
function toggleNav() {
  $('nav .menu_items').toggleClass('navActive');
}
$('.fa-bars').click(toggleNav);

