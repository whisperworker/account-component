//Отправка формы логина на сервер
document.querySelector('#login-submit').onclick = function (event) {
    //делаем превент дефолт чтобы форма не отправлялась
    event.preventDefault();
    //Достаем данные
    let pass = document.querySelector('#login-pass').value;
    let email = document.querySelector('#login-email').value;

    //Собираем данные в массив
    let data = {
        "pass": pass,
        "email": email,
    }

    //Отправка запроса логирование на сервер
    ajax("core/login.php", "POST", login, data);

    //Обработка ошибок
    function login(result){
        if(result == 2) {
            M.toast({html: 'Заполните поля'});
        }
        else if (result == 0) {
            M.toast({html: 'Пользователь не найден'});
        }
        else {
            console.log(result);
            //Распаршивание результата
            result = JSON.parse(result);
            //Получение объекта date
            const d = new Date();
            //Для этого объекта устанавливается текущее время плюс время жизни
            d.setTime(d.getTime() + (24*60*60*1000));
            //toUTCString() преобразует дату в строку, используя часовой пояс UTC.
            let expires = d.toUTCString();
            //Установление куки для пользователя с временем жизни
            document.cookie = `email=${result.email}; expires=${expires}; path=/`;
            //Перенаправление в кабинет
            location.href = "cabinet.php";
        }
    }
}