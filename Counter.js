// // function for counter
let data = 0;
function addOn() {
  data++;
  document.getElementById("demo").innerHTML = data;
}
function reset() {
  data = 0;
  document.getElementById("demo").innerHTML = data;
}
function minus() {
  data--;
  document.getElementById("demo").innerHTML = data;
}