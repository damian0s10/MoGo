//scroll
function scroll(e) {
  const href = $(this).attr('href');
  e.preventDefault();
  $('html, body').animate({
      scrollTop: $(href).offset().top
  }, 600);
  location.hash = href;
};

$('.container li a[href^="#"]').click(scroll);

// toggle menu
  $(".fa-bars").click(function(){
    $(".menu_items").slideToggle();
  });

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



