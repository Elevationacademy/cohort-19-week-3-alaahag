//dom traversal

const cmp_array = [];

const call_generator = function()
{
    $(".generator").each(function()
    {
        let computer_object = $(this).parent().parent().closest('.computer');
        let processor_id = $(this).parent().closest('.processor').attr('id');
        cmp_array.push({'cmp_id': processor_id});
        let computer_id = $(computer_object).data().id;
        let bus = $(computer_object).find(".BUS").text();
        console.log("Processor ID: " + processor_id);
        console.log("Computer's data-id: " + computer_id);
        console.log("BUS: " + bus);
        console.log(cmp_array);
    });
};

const call_validator = function()
{
    $(".validator").each(function()
    {
        let processor_object = $(this).parent().parent().siblings('.processor');
        let MB_text = processor_object.parent().find('.MB');
        let QR_texts = processor_object.find('.QR');
        console.log("Generator text: " + processor_object.find('.generator').text());
        console.log("MB: " + MB_text.text());
        $.each(QR_texts, function()
        {
            console.log("QR: " + $(this).text());
        });
    });
};

$(function ()
{
    $('button.generator').click(call_generator);
    $('button.validator').click(call_validator);
});