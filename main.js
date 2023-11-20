AOS.init();
       
const emailInput = document.querySelector('.email-input');
const emailInputCon=document.querySelector('.email-input-con');
emailInput.addEventListener('focus', function () {
    emailInput.placeholder = '';
    emailInputCon.classList.remove('border-zinc-800');
    emailInputCon.classList.add('border-white');
});

emailInput.addEventListener('blur', function () {
    emailInput.placeholder = 'Enter your email';
    emailInputCon.classList.remove('border-white');
    emailInputCon.classList.add('border-zinc-800');
});

