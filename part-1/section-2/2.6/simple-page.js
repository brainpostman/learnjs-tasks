result = prompt("Введи свое имя:", "");
if (result === null) {
    result = "незнакомец";
}
alert(`Привет, ${result}!`)