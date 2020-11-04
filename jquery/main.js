
//ex1 + ex2
// $('input[type="button"]').on('click', function(){
//     $('ul').append("<li>" + $('input[type="text"]').val() + "</li>");
// });

// $('ul').on('click', 'li', function()
// {
//     console.log('hi');
//     $(this).hide();
// });


//ex3
// $('body').append('<div id="box1" class="box"></div>');
// $('body').append('<div id="box2" class="box"></div>');
// $("#box1").on('mouseleave', function(){
//     $('#box2').css('background-color', 'red');
// });
// $("#box1").on('mouseenter', function(){
//     $(this).css('background-color', '#8e44ad');
// });

// $("#box2").on('mouseleave', function(){
//     $('#box1').css('background-color', 'red');
// });
// $("#box2").on('mouseenter', function(){
//     $(this).css('background-color', '#8e44ad');
// });


//ex4 + extensions
const arr_counter = {'Shoe': 0, 'Melon': 0};
$('.item').on('click', function()
{
    if ($(this).data('instock') == true)
    {
        //let counter = $(this).data('counter') || 0;
        //counter++;
        //$(this).data('counter', counter);
        //console.log(counter);
        arr_counter[$(this).text()]++;
        $('#cart').append("<div>" + $(this).text() + " v" + arr_counter[$(this).text()] + "</div>");
        $('#cart div').on('click',function()
        {
            $(this).remove();
        });
    }
});


//ex5
// const fruits = [
//     { name: "Orange", color: "orange" },
//     { name: "Banana", color: "yellow" },
//     { name: "Coconut", color: "brown" },
//     { name: "Kiwi", color: "brown" },
//     { name: "Lemon", color: "yellow" },
//     { name: "Cucumber", color: "green" },
//     { name: "Persimmon", color: "orange" },
//     { name: "Pumpkin", color: "orange" }
//   ]

//   $.each(fruits, function(){
//     $('#basket').append("<div class=" + this.color + ">" + this.name + "</div>");
//   });
//   //<div class="orange">Orange</div>


//ex6
// $('#colors span').each(function(index, value)
// {
//     $(this).addClass('picker');
//     $(this).css('background-color', $(this).text());
//     $(this).on('click', function(){
//         $('.box').css('background-color', $(this).text());
//     });
// });