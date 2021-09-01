//Отправка формы регистрации на сервер
document.querySelector('#signup-submit').onclick = function (event) {
    //делаем превент дефолт чтобы форма не отправлялась
    event.preventDefault();
    //Достаем данные
    let name = document.querySelector('#signup-name').value;
    let pass = document.querySelector('#signup-pass').value;
    let email = document.querySelector('#signup-email').value;
    let birthday = document.querySelector('#signup-birthday').value;
    let sex = document.getElementsByName('sex');

    //Определяем какой пол выбран из массива
    for(let i = 0; i < sex.length; i++) {
        if (sex[i].checked) {
            sex = sex[i].value;
            break;
        }
    }

    //Собираем данные в массив
    let data = {
        "name": name,
        "pass": pass,
        "email": email,
        "birthday": birthday,
        "sex": sex,
    }

    //Отправка запроса регистрации на сервер
    ajax("core/signup.php", "POST", signup, data);

    //Обработка ошибок
    function signup(result){
        if(result == 2) {
            M.toast({html: 'Заполните поля'});
        }
        else if (result == 1) {
            M.toast({html: 'Вы успешно зарегистрированы'});
            closeModal();
        }
        else {
            M.toast({html: 'Ошибка регистрации. Повторите попытку позже'});
        }
    }
}