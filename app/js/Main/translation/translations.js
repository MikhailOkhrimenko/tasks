define([
    'mainApp'
], function(app) {
    app.run(['gettextCatalog', function (gettextCatalog) {
        /* jshint -W100 */
        gettextCatalog.setStrings('ru', {
            "* - Fields must be filled": "* - Поля обязательно должны быть заполнены",
            "* Confirm password:": "* Пароль еще раз:",
            "* First Name:": "* Имя:",
            "* Password:": "* Пароль:",
            "Add": "Добавить",
            "All tasks:": "Все задачи:",
            "Back": "Назад",
            "Birthday:": "День рождения:",
            "Cancel": "Отменить",
            "Confirm": "Зарегистрироваться",
            "Done": "Выполнено",
            "Done tasks:": "Выполненные задачи:",
            "Edit": "Редактировать",
            "Empty list!": "Список пуст!",
            "Invalid e-mail!": "Не верный формат e-mail!",
            "Invalid password!<br>Password must be between 6 and 30 characters and only English letters and numbers": "Не верный пароль!<br>Пароль должен быть от 6 до 30 символов и состоять из латинских букв и цифр",
            "Invalid username or password!": "Неверное имя пользователя и/или пароль!",
            "Last Name:": "Фамилия:",
            "Login": "Войти",
            "Logout": "Выход",
            "Needs to be done tasks:": "Еще нужно выполнить:",
            "Password:": "Пароль:",
            "Passwords do not match!": "Пароли не совпадают!",
            "Registration Form": "Форма регистрации",
            "Remove": "Удалить",
            "Remove all": "Удалить все",
            "Remove all done": "Удалить все выполненные",
            "Select a language:": "Выберите язык:",
            "Sign Up": "Регистрация",
            "Statistic:": "Статистика:",
            "Tasks list": "Список дел",
            "Terms of use": "Условия использования",
            "The first name must be between 3 and 25 characters!": "Имя должно быть от 3 до 25 символов!",
            "The last name must be between 3 and 50 characters!": "Фамилия должна быть от 3 до 50 символов!",
            "Welcome:": "Добро пожаловать:",
            "What to do": "Что сделать",
            "What to do?": "Что сделать?"
        });
        /* jshint +W100 */
    }]);
});