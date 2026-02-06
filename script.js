// ==========================
// Task 1: Get Attribute Value
// ==========================
const image = document.getElementById("myImage");
const imageSrc = image.getAttribute("src");
console.log("Image src:", imageSrc);


// ==========================
// Task 2: Change Image Source
// ==========================
const changeImg = document.getElementById("changeImg");
const changeImageBtn = document.getElementById("changeImageBtn");

changeImageBtn.addEventListener("click", function () {
  changeImg.setAttribute("src", "../DOM_Assignment-3/Capture-removebg-preview (1).png");
});


// ==========================
// Task 3: Set Attribute to Input
// ==========================
const nameInput = document.getElementById("nameInput");
nameInput.setAttribute("placeholder", "Enter your name");


// ==========================
// Task 4: Remove an Attribute
// ==========================
const disabledInput = document.getElementById("disabledInput");
const enableBtn = document.getElementById("enableBtn");

enableBtn.addEventListener("click", function () {
  disabledInput.removeAttribute("disabled");
});


// ==========================
// Task 5: Check if Attribute Exists
// ==========================
const para = document.getElementById("myPara");
const hasClass = para.hasAttribute("class");
console.log("Paragraph has class:", hasClass);


// ==========================
// Task 6: Change Link Destination
// ==========================
const myLink = document.getElementById("myLink");
const changeLinkBtn = document.getElementById("changeLinkBtn");

changeLinkBtn.addEventListener("click", function () {
  myLink.setAttribute("href", "https://www.wikipedia.org");
});
