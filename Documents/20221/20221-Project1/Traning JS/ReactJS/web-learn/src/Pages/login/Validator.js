const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

export default function Validator(option) {
    var selectorRules = {};

    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            } else {
                element = element.parentElement;
            }
        }
    }

    const formElemnt = $(`${option.form}`);
    var isValid = true;
    formElemnt.onsubmit = function (e) {
        e.preventDefault();

        option.rules.forEach(function (rule) {
            var inputElement = formElemnt.querySelector(rule.selector);
            isValid = Validate(inputElement, rule);

            if (!isValid) {
                isValid = false;
            }
        });
        if (isValid) {
            if (typeof option.onSubmit === 'function') {
                var enableInputs = formElemnt.querySelectorAll('[name]:not(disable)');
                var data = Array.from(enableInputs).reduce(function (form, enableInput) {
                    switch (enableInput.type) {
                        case 'checkbox':
                            if (!enableInput.matches(':checked')) return form;

                            if (!Array.isArray(form[enableInput.name])) {
                                form[enableInput.name] = [];
                            }
                            form[enableInput.name].push(enableInput.value);
                            break;
                        case 'radio':
                            if (enableInput.matches(':checked')) {
                                form[enableInput.name] = enableInput.value;
                            }
                            break;
                        default:
                            form[enableInput.name] = enableInput.value;
                    }
                    if (!form[enableInput.name]) {
                        form[enableInput.name] = '';
                    }
                    return form;
                }, {});
                option.onSubmit(data);
            } else {
                formElemnt.onsubmit();
            }
        }
    };

    function Validate(inputElement, rule) {
        const mesElement = getParent(inputElement, option.formGroup).querySelector(option.message);
        var mes;
        var rules = selectorRules[rule.selector];
        for (var i = 0; i < rules.length; ++i) {
            switch (inputElement.type) {
                case 'checkbox':
                case 'radio':
                    // N???u kh??ng t???n t???i element n??o c?? thu???c t??nh checked th?? mes = null;
                    mes = rules[i](formElemnt.querySelector(rule.selector + ':checked'));
                    break;

                default:
                    mes = rules[i](inputElement.value);
            }
            if (mes) {
                break;
            }
        }

        if (mes) {
            mesElement.innerHTML = mes;
            getParent(inputElement, option.formGroup).classList.add('validator');
        } else {
            mesElement.innerHTML = '';
            getParent(inputElement, option.formGroup).classList.remove('validator');
        }
        return !mes;
    }

    if (formElemnt) {
        // L???p qua t???ng rule v?? hi???n l???i ra ngo??i giao di???n
        option.rules.forEach(function (rule) {
            var inputElements = formElemnt.querySelectorAll(rule.selector);

            Array.from(inputElements).forEach(function (inputElement) {
                const mesElement = getParent(inputElement, option.formGroup).querySelector(option.message);

                if (Array.isArray(selectorRules[rule.selector])) {
                    selectorRules[rule.selector].push(rule.test);
                } else {
                    selectorRules[rule.selector] = [rule.test];
                }

                if (inputElement) {
                    inputElement.onblur = function () {
                        Validate(inputElement, rule);
                    };

                    inputElement.oninput = function () {
                        mesElement.innerHTML = '';
                        getParent(inputElement, option.formGroup).classList.remove('validator');
                    };
                }
            });
        });
    }
}

Validator.isRequire = function (selector) {
    var mes = 'Vui l??ng nh???p tr?????ng n??y';
    return {
        selector: selector,
        test: function (value) {
            return value ? undefined : mes;
        },
    };
};

Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Vui l??ng nh???p ????ng Email';
        },
    };
};

Validator.isPassword = function (selector, minLength) {
    return {
        selector: selector,
        test: function (value) {
            var mes = `M???t kh???u ph???i ch???a ??t nh???t ${minLength} k?? t??? v?? kh??ng ch???a d???u c??ch`;
            if (value.length < minLength || value.includes(' ')) {
                return mes;
            }
            return undefined;
        },
    };
};

Validator.isRepeatPassword = function (selector, getConfirmValue) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : 'Nh???p l???i m???t kh???u kh??ng ch??nh x??c';
        },
    };
};
