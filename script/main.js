/*Для работы календаря*/
document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.datepicker');
    let instances = M.Datepicker.init(elems, {
        "format": "dd-mm-yyyy",
    });
});


/*Работа с модальным окном*/
document.querySelectorAll('.modal-show').forEach(function (element) {
    element.onclick = showModal;
});

document.querySelectorAll('.modal-project-close').forEach(function (element) {
    //Закрытие по кнопке
    element.onclick = closeModal;
});

document.querySelectorAll('.modal-wrap').forEach(function (element) {
    //Закрытие на клике в серой области
    element.onclick = closeModal;
});

//Предотвращение события на клике в форме логина
document.querySelector('#log-in .modal-project').onclick = function (event) {
    event.stopPropagation();
}

//Предотвращение события на клике в форме регистрации
document.querySelector('#sign-up .modal-project').onclick = function (event) {
    event.stopPropagation();
}


//Открытие окна
function showModal () {
    let modalId = this.dataset.modal;
    document.querySelector(modalId).classList.remove('hide');
    //Закрытие окна на Esc
    document.onkeydown = function (event) {
        if (event.key === "Escape") {
            closeModal();
        }
    }
}

//закрытие окна
function closeModal () {
    document.querySelectorAll('.modal-wrap').forEach(function (element) {
        element.classList.add('hide');
    });
    document.onkeydown = null;
}


/*Form Slider*/
//Button read rules
document.querySelector('.read-rules').onclick = function () {
    document.querySelector('.form-slider').style.marginLeft = '-355px';
}

//Button top back
document.querySelector('.top-rules-back').onclick = function () {
    document.querySelector('.form-slider').style.marginLeft = '0px';
}

//Button bottom back
document.querySelector('.bottom-rules-back').onclick = function () {
    document.querySelector('.form-slider').style.marginLeft = '0px';
}

//Button agree rules
document.querySelector('#agree-rules').onchange = function () {
    if(this.checked) {
        document.querySelector('#signup-submit').classList.remove('disabled');
    }
    else {
        document.querySelector('#signup-submit').classList.add('disabled');
    }
}