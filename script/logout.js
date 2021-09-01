document.querySelector('#logout').onclick = function () {
    var cookie = document.cookie;
    const d = new Date();
    //Устанавливаем время уничтожения куки
    d.setTime(d.getTime() - 10);
    let expires = d.toUTCString();
    document.cookie = `email=${cookie}; expires=${expires}; path=/`;
    location.reload();
}