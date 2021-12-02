function drawNum() {
    let min = document.forms["range"]['min'];
    let max = document.forms["range"]['max'];
    let num = Math.random() * (max - min) + min;
}