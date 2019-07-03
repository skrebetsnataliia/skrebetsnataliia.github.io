######Calculator

######History

[comment]:<>(For screen md and less than md)
[MC](#){:.btn}
[MR](#){:.btn}
[MS](#){:.btn}
[M-mul](#){:.btn}
[M-](#){:.btn}

[&lArr;](#){:.btn}
[CE](#){:.btn}
[C](#){:.btn}
[pm](#){:.btn}
[sqr](#){:.btn}

[7](#){:.btn}
[8](#){:.btn}
[9](#){:.btn}
[/](#){:.btn}
[%](#){:.btn}
    
[4](#){:.btn}
[5](#){:.btn}
[6](#){:.btn}
[*](#){:.btn}
[1/x](#){:.btn}

[1](#){:.btn}
[2](#){:.btn}
[3](#){:.btn}
[-](#){:.btn}
[+](#){:.btn}

[.](#){:.btn}
[0](#){:.btn}
[=](#){:.btn}

[comment]:<>(For screen lg)

[MC](#){:.btn}
[Clear](#){:.btn}
[CE](#){:.btn}
[C](#){:.btn}
[pm](#){:.btn}
[sqr](#){:.btn}

[MR](#){:.btn}
[7](#){:.btn}
[8](#){:.btn}
[9](#){:.btn}
[/](#){:.btn}
[%](#){:.btn}

[MS](#){:.btn}
[4](#){:.btn}
[5](#){:.btn}
[6](#){:.btn}
[*](#){:.btn}
[1x](#){:.btn}

[M](#){:.btn}
[1](#){:.btn}
[2](#){:.btn}
[3](#){:.btn}
[-](#){:.btn}
[+](#){:.btn}

[M](#){:.btn}
[.](#){:.btn}
[0](#){:.btn}
[=](#){:.btn}

```javascript
function insert(arg) {
    document.form.expes.value = document.form.expes.value + arg;
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
}
```