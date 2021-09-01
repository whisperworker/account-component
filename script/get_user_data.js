let userEmail = getCookie('email');

//Отправка запроса на получение пользователя с определенным куки
ajax ("core/get_user_data.php", "POST", getUserData , {"email" : userEmail});

//Достает значение куки
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

//Функция заполнения, которая срабатывает после успешного запроса
function getUserData(result) {
    result = JSON.parse(result);

    //Заполнение полей
    document.querySelector('#update-name').value = result.name;
    document.querySelector('#update-pass').value = result.password;
    document.querySelector('#update-birthday').value = result.birthday;



    let sex = document.getElementsByName('sex');

    //Определяем какой пол получен
    for(let i = 0; i < sex.length; i++) {
        if (sex[i].defaultValue === result.sex) {
            sex[i].checked = true;
            break;
        }
    }

    M.updateTextFields();
}

//Обновление данных по клику
document.querySelector('#update-submit').onclick = function (event) {
    event.preventDefault();
    let sex = document.getElementsByName('sex');

    //Определяем какой пол выбран из массива
    for(let i = 0; i < sex.length; i++) {
        if (sex[i].checked) {
            sex = sex[i].defaultValue;
            break;
        }
    }

    //Создаем массив данных
    let updateData = {
        "email": userEmail,
        "name": document.querySelector('#update-name').value,
        "pass": document.querySelector('#update-pass').value,
        "birthday": document.querySelector('#update-birthday').value,
        "sex": sex,
    }
    //запрос с данными которые хотим обновить
    ajax("core/update_user_data.php", "POST", updateUserData, updateData);
}

//Обработка ошибок
function updateUserData(result) {
    result = JSON.parse(result);
    if(result == 1) {
        M.toast({html: 'Данные успешно обновлены'});
    }
    else {
        M.toast({html: 'Ошибка обновления'});

    }
}