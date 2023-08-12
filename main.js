    // ĐĂNG KÍ

    const register = document.querySelector('.js-register');
    const modal_register = document.querySelector('.modal-register');
    const form_register = document.querySelector('.js-form-register');

    function showRegister(){
        modal_register.classList.add('open');
    }

    function closeRegister(){
        modal_register.classList.remove('open');
    }
    // Mở đăng kí
    register.addEventListener('click', showRegister);

    // Đóng đăng kí
    modal_register.addEventListener('click',closeRegister);

    form_register.addEventListener('click',function(e){
        e.stopPropagation();
    })

    // ĐĂNG NHẬP
    const login = document.querySelector('.js-login');
    const modal_login = document.querySelector('.modal-login');
    const form_login = document.querySelector('.js-form-login');
    function showLogin(){
        modal_login.classList.add('open');
    }

    function closeLogin(){
        modal_login.classList.remove('open');
    }

    login.addEventListener('click',showLogin);

    modal_login.addEventListener('click',closeLogin);

    form_login.addEventListener('click',function(e){
        e.stopPropagation();
    })

    // PREVENT DEFAULT
    var details = document.querySelectorAll('.row-product-link');

    for(detail of details){
        detail.onclick = function(e){
            e.preventDefault();
        }
    }
