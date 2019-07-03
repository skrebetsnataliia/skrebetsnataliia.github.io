function insert(c) {
    document.form.expes.value = document.form.expes.value + c;
}

function equal() {
    var exp = document.form.expes.value;
    if (exp) {
        document.form.expes.value = eval(exp);
    }
}

function clean() {
    document.form.expes.value = "";
}

function back() {
    var exp = document.form.expes.value;
    document.form.expes.value = exp.substring(0, exp.lenght - 1);
}