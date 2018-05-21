$(".features").hide();
$(".products").hide();
$(".customers").hide();

  $(".jin-wraped").hide();
  $(".section_help").hide();

  $(".main").show("slow");
		$('.overlay').hide();

		$(".buttle").click(function() {
		$(".jin-wraped").fadeIn(1500)
		});

		$(".jin-close").click(function() {
		$(".jin-wraped").hide()
		});



		$("#jin").click(function() {
			$(".first-block").hide();
			$(".second-block").show();
		})


/* For good work this page after Bootstrap, use buffer HTML */
		buffer_feat = $(".features").html();
		buffer_prod = $(".products").html();
		buffer_cust = $(".customers").html();

/*  Action for "Inline-Block"-button pushing  */
$("#ib").click(function(){

	$(".features").hide();
	$(".products").hide();
	$(".customers").hide();
  
	$(".features").html(buffer_feat);
	$(".products").html(buffer_prod);
	$(".customers").html(buffer_cust);

 $("link").remove();
  $("head").append("<link rel='stylesheet' href='css/main.css'>")
  $("head").append("<link rel='stylesheet' href='css/bootstrap-grid.min.css'>")
  $("head").append("<link rel='stylesheet' href='css/grid-ib.css'>")
		$(".features").show(1200);
		$(".products").show(1200);
		$(".customers").show(1200);

		$(".jin-text-add").text("Да пожалуйста, забирай) Может еще разок?");
		$(".section_help").show();
		
});

/*  Action for "Bootstrap"-button pushing  */
$("#bs").click(function(){

	$(".features").hide();
	$(".products").hide();
	$(".customers").hide();

 $(".features").html(buffer_feat);
 $(".products").html(buffer_prod);
 $(".customers").html(buffer_cust);

/*  Adding some tags for correct work Bootstrap-grid  */
  $(".numbers").wrapInner("<div class='row align-items-start'>");
  $(".number").wrap("<div class='col-4'>");

  $(".feat-item").wrap("<div class='col-4'>");
  $(".my-row").wrapInner("<div class='row'>");

  $(".product-item").wrap("<div class='col-6'>");
  $(".customer-item").wrap("<div class='col-3'>");

   $("link").remove();
    $("head").append("<link rel='stylesheet' href='css/main.css'>")
    $("head").append("<link rel='stylesheet' href='css/bootstrap-grid.min.css'>")
    $("head").append("<link rel='stylesheet' href='css/grid-bs4.css'>")
  		$(".features").show(1200);
  		$(".products").show(1200);
  		$(".customers").show(1200);

  		$(".jin-text-add").text("Я для тебя ради Boostы даже теги в 'хэтэмэлэ'' вставил :)  проверь консоль!");
  		$(".section_help").show();
});

/*  Action for "Flex"-button pushing  */
$("#fx").click(function(){

	$(".features").hide();
	$(".products").hide();
	$(".customers").hide();

	$(".features").html(buffer_feat);
	$(".products").html(buffer_prod);
	$(".customers").html(buffer_cust);

     $("link").remove();
      $("head").append("<link rel='stylesheet' href='css/main.css'>")
      $("head").append("<link rel='stylesheet' href='css/bootstrap-grid.min.css'>")
      $("head").append("<link rel='stylesheet' href='css/grid-flex.css'>")
		$(".features").show(1200);
		$(".products").show(1200);
		$(".customers").show(1200);
 
   $(".jin-text-add").text("Вообще на изи, Босс!)");
   $(".section_help").show();

});


/*  Popup's action */
jQuery(document).ready(function() {
	 $('.header-contacts__button').on('click', function(){
	 	$('.overlay').show();
	 	$('.popup').hide();
	 	$('.popup').slideToggle(800);
});

	 $('.popup-close').on('click',  function() {
		$('.overlay').hide(700);
	 });

	 $('#popup-button').on('click',  function() {
		$('.overlay').hide(700);
	 });
  		 });





