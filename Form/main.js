const validate_name = function(){
    if (the_name.value.length < 2)
    {
        valid_text.innerText = "Short Name";
        return false;
    }
    else
        return true;
};

const validate_salary = function(){
    let int_salary=parseInt(salary.value);
    if (int_salary < 10000 || int_salary > 16000)
    {
        valid_text.innerText = "Invalid Salary";
        return false;
    }
    else
        return true;
};

const validate_birthday = function(){
    if (birthday.value.length === 0)
    {
        valid_text.innerText = "Input Birthday";
        return false;
    }
    else
        return true;
};

const validate_phone = function(){
    if (phone.value.length !== 10)
    {
        valid_text.innerText = "Invalid Phone";
        return false;
    }
    else
        return true;
};

const validate = function(e){
    e.preventDefault();
    if (validate_name() && validate_salary() && validate_birthday() && validate_phone())
    {
        document.getElementsByTagName('form')[0].style.display = 'none';
        welcome.innerText = "Welcome " + the_name.value;
        document.getElementsByTagName('body')[0].appendChild(welcome);
        return true;
    }
    else
        return false;
};

let welcome = document.createElement('h1');
let button = document.getElementById('submit');

let valid_text = document.getElementById('validator');
let the_name = document.getElementById('the_name');
let salary = document.getElementById('salary');
let birthday = document.getElementById('birthday');
let phone = document.getElementById('phone');

button.addEventListener('click', (e) => validate(e));