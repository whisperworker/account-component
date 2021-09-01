//Обработка и отправка запроса XMLHttpRequest
function ajax (url, method, functionName, dataArray) {
    //Создание нового запроса
    let xHttp = new XMLHttpRequest();

    //Открытие соединения с помощью open(Method, FilePath, асинхронный запрос(true) / синхронный запрос(false))
    xHttp.open(method, url, true);

    //Настройка типов данных которые будут отсылаться
    xHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    //Позволяет послать запрос на сервер
    xHttp.send(requestData(dataArray));

    //Отслеживание того когда придет ответ от сервера и функция которая будет выполняться
    xHttp.onreadystatechange = function () {
        if(xHttp.readyState === 4 && xHttp.status === 200) {
            //this указывает на то что пришло от сервера
            functionName(this.response);
        }
    }
}

//Функция преобразования массива к get строке
function requestData(dataArr) {
    let out = '';
    for (let key in dataArr) {
        out += `${key}=${dataArr[key]}&`
    }
    return out;
}



