$(document).ready(function() {

var owl = $(".carousel");
owl.owlCarousel({
items : 1,
pagination:true,
autoHeight : true
});
owl.on("mousewheel", ".owl-wrapper", function (e) {
if (e.deltaY > 0) {
owl.trigger("owl.prev");
} else {
owl.trigger("owl.next");
}
e.preventDefault();
});
$(".next_button").click(function(){
owl.trigger("owl.next");
});
$(".prev_button").click(function(){
owl.trigger("owl.prev");
});
$(".auth_buttons").click(function(){
$(this).next().slideToggle();
});
$(".main_menu_button").click(function(){
$(".main_menu ul").slideToggle();
});
});