let numA = document.getElementById("numA");
let numB = document.getElementById("numB");
let numC = document.getElementById("numC");
let numD = document.getElementById("numD");
let allPlus = document.getElementById("allPlus");
let allMinus = document.getElementById("allMinus");
let aPlus = document.getElementById("aPlus");
let aMinus = document.getElementById("aMinus");
let bPlus = document.getElementById("bPlus");
let bMinus = document.getElementById("bMinus");
let cPlus = document.getElementById("cPlus");
let cMinus = document.getElementById("cMinus");
let dPlus = document.getElementById("dPlus");
let dMinus = document.getElementById("dMinus");

let obj = { totalA: 0, totalB: 0, totalC: 0, totalD: 0 };

allPlus.addEventListener("click", (e) => {
  e.preventDefault();
  AllPlus();
});
allMinus.addEventListener("click", (e) => {
  e.preventDefault();
  AllMinus();
});

aPlus.addEventListener("click", (e) => {
  e.preventDefault();
  aPlusbtn();
});
aMinus.addEventListener("click", (e) => {
  e.preventDefault();
  aMinusbtn();
});
bPlus.addEventListener("click", (e) => {
  e.preventDefault();
  bPlusbtn();
});
bMinus.addEventListener("click", (e) => {
  e.preventDefault();
  bMinusbtn();
});
cPlus.addEventListener("click", (e) => {
  e.preventDefault();
  cPlusbtn();
});
cMinus.addEventListener("click", (e) => {
  e.preventDefault();
  cMinusbtn();
});

dPlus.addEventListener("click", (e) => {
  e.preventDefault();
  dPlusbtn();
});

dMinus.addEventListener("click", (e) => {
  e.preventDefault();
  dMinusbtn();
});

function AllPlus() {
  obj.totalA++;
  obj.totalB++;
  obj.totalC++;
  obj.totalD++;
  numA.textContent = obj.totalA;
  numB.textContent = obj.totalB;
  numC.textContent = obj.totalC;
  numD.textContent = obj.totalD;
}

function AllMinus() {
  obj.totalA--;
  obj.totalB--;
  obj.totalC--;
  obj.totalD--;
  numA.textContent = obj.totalA;
  numB.textContent = obj.totalB;
  numC.textContent = obj.totalC;
  numD.textContent = obj.totalD;
}

function aPlusbtn() {
  obj.totalA++;
  numA.textContent = obj.totalA;
}
function aMinusbtn() {
  obj.totalA--;
  numA.textContent = obj.totalA;
}
function bPlusbtn() {
  obj.totalB++;
  numB.textContent = obj.totalB;
}
function bMinusbtn() {
  obj.totalB--;
  numB.textContent = obj.totalB;
}

function cPlusbtn() {
  obj.totalC++;
  numC.textContent = obj.totalC;
}
function cMinusbtn() {
  obj.totalC++;
  numC.textContent = obj.totalC;
}
function dPlusbtn() {
  obj.totalD++;
  numD.textContent = obj.totalD;
}
function dMinusbtn() {
  obj.totalD++;
  numD.textContent = obj.totalD;
}
