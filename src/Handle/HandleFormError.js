const handleFormPhone = (e) => {
    const idElement = e.target.id;
    const formElement = document.querySelector(`#${idElement}`);
    console.log(formElement);
    const ErrorMessage =
        formElement.parentElement.querySelector('.form-message');
    const ErrorNotify = check(formElement.value);
    if (formElement) {
        if (ErrorNotify) {
            ErrorMessage.innerText = ErrorNotify;
        } else {
            ErrorMessage.innerText = '';
        }
    }

    function check(value) {
        var checkRegex =
            /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        return checkRegex.test(value)
            ? undefined
            : 'The telephone number is invalid.';
    }
};

const handleFormEmail = (e) => {
    const idElement = e.target.id;
    const formElement = document.querySelector(`#${idElement}`);
    console.log(formElement);
    const ErrorMessage =
        formElement.parentElement.querySelector('.form-message');
    const ErrorNotify = check(formElement.value);
    if (formElement) {
        if (ErrorNotify) {
            ErrorMessage.innerText = ErrorNotify;
        } else {
            ErrorMessage.innerText = '';
        }
    }

    function check(value) {
        var checkRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return checkRegex.test(value)
            ? undefined
            : 'The e-mail address entered is invalid.';
    }
};

const handleErrorButton = (e) => {
    const idElement = e.target.id;
    const formElement = document.querySelector(`#${idElement}`);
    const BtnErrorMessage =
        formElement.parentElement.querySelector('.form-message');
    const PhoneErrorElement =
        formElement.parentElement.parentElement.querySelector('#phone');
    const errorMessagePhone =
        PhoneErrorElement.parentElement.querySelector('.form-message');
    const FullnameErrorElement =
        formElement.parentElement.parentElement.querySelector('#fullname');
    const EmailErrorElement =
        formElement.parentElement.parentElement.querySelector('#email');
    const errorMessageEmail =
        EmailErrorElement.parentElement.querySelector('.form-message');
    const AgeErrorElement =
        formElement.parentElement.parentElement.querySelector('#age');

    if (
        FullnameErrorElement.value !== '' &&
        PhoneErrorElement.value !== '' &&
        errorMessagePhone.value === undefined &&
        EmailErrorElement.value !== '' &&
        errorMessageEmail.value === undefined &&
        AgeErrorElement.value !== ''
    ) {
        BtnErrorMessage.innerText = '';
    } else {
        BtnErrorMessage.innerText = 'Hãy điền vào tất cả các mục!';
    }
};

export { handleFormEmail, handleFormPhone, handleErrorButton };
