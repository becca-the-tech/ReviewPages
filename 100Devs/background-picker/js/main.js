document.getElementById('purple').onclick = colorRandomizer;
document.getElementById('green').onclick = partyGreen;
document.getElementById('blue').onclick = partyBlue;
document.getElementById('randomize').onclick = colorRandomizer;

function colorRandomizer() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let rgb = `${r}, ${g}, ${b}, 1`;
  document.querySelector('body').style.backgroundColor = `rgba(${rgb})`;
  if (r + b + g > 350) {
    document.querySelector('body').style.color = 'white';
  } else {
    document.querySelector('body').style.color = 'black';
  }
}


function partyPurple() {
  document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)';
  document.querySelector('body').style.color = 'white';
}

function partyGreen() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)';
  document.querySelector('body').style.color = 'white';
}

function partyBlue() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)';
  document.querySelector('body').style.color = 'white';
}
