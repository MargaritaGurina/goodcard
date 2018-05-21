
$('.burger-menu').hide();


/*  Popup's action */
jQuery(document).ready(function() {


	 $('.header-contacts__button').on('click', function(){
	 	$('.overlay').css('display', 'flex');
	 	$('.popup').hide();
	 	$('.popup').slideToggle(800);
});

	 $('.popup-close').on('click',  function() {
		$('.overlay').hide(700);
	 });

	 // $('#popup-button').on('click',  function() {
    // if ($(''))
		// $('.overlay').hide(700);
	 // });

var link = $('.menu-link');
var menu_active = $('.wrapper-menu')
var nav_link = $('.menu-list1 a')


  link.click(function() {
  	link.toggleClass('menu-link_active');
  	menu_active.toggleClass('active');
  })

  nav_link.click(function() {
  	link.toggleClass('menu-link_active');
  	menu_active.toggleClass('active');
  })
 


   $('form').keydown(function(event){
           if(event.keyCode == 13) {
             event.preventDefault();
             return false;
         }
      });

    $('form').submit(function(e) { //устанавливаем событие отправки для формы с id=form
 
               e.preventDefault();

               var form_data = $(this).serialize();
              $('.thanxyou').slideToggle(600);
               $.ajax({
                 url: "./mailer/smart.php",
                 type: "POST",
                 data: form_data,
                 success: function(response) {
                   document.getElementById("form1").reset(); //native JS
                   document.getElementById("form2").reset(); //native JS
                   document.getElementById("form3").reset(); //native JS
                   document.getElementById("form4").reset(); //native JS
                   // $('.thanxyou').slideToggle(600);
                   $('.overlay').hide(700);

                 },
                 error: function(response) {
                   alert('Ошибка! Попробуйте еще раз.');
                 }
               });

    });

	 	$('.close').click(function() {
	 		 $('.thanxyou').hide(600);
	 	})
	
////////////////////////////////////

  		 });

