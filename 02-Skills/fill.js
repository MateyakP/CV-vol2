function fill(element, label, Twidth) {
  var elem = document.getElementById(element);
  var label = document.getElementById("#" + label);
  var id = sectInterval(frame, 40, label, Twidth);
  var Cwidth = 10;
// console.log(element, label, Twidth);
function frame (label, Twidth) {
  if (Cwidth >= Twidth) {

  clearInterval(id);
  }
  else {
  Cwidth++;
  elem.style.width = Cwidth + '%';
  label.innerHTML = Cwidth  + '%';
  }
}
}


// Cwidth = Current_Width
// Twidth = Targetted_Width
// ---
// fill ('html','label1',90)
