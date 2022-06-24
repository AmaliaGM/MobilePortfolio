const cards = [
  {
    image: 'images/plan.png',
    heading: 'Multi-Post Stories Gain+Glory',
    badge1: 'Ruby on Rails',
    badge2: 'css',
    badge3: 'Java Script',
    badge4: 'HTML',
  }
];

let append = document.getElementById("append");
let sectionD = document.createElement("div");
sectionD.classList = 'descript';
append.appendChild(sectionD);

let planHolder = document.createElement("div");
planHolder.classList = 'planholder';
sectionD.appendChild(planHolder);

for (let i = 0; i < 6; i++) {

  let div = document.createElement("div");
  div.classList = 'div';
  planHolder.appendChild(div);

  let imgPH = document.createElement('img');
  imgPH.classList = 'img';
  imgPH.src = (cards[0].image);
  div.appendChild(imgPH);

  let subTitle = document.createElement('h2');
  subTitle.classList = 'subtitle';
  subTitle.innerHTML = cards[0].heading;
  div.appendChild(subTitle);

  let newUl = document.createElement("ul");
  newUl.classList = 'language';
  div.appendChild(newUl);

  let newItem1 = document.createElement("li");
  let newItem2 = document.createElement("li");
  let newItem3 = document.createElement("li");
  let newItem4 = document.createElement("li");
  newUl.appendChild(newItem1);
  newUl.appendChild(newItem2);
  newUl.appendChild(newItem3);
  newUl.appendChild(newItem4);

  let newLink1 = document.createElement('a');
  let newLink2 = document.createElement('a');
  let newLink3 = document.createElement('a');
  let newLink4 = document.createElement('a');
  newLink1.classList = 'button1';
  newLink2.classList = 'button1';
  newLink3.classList = 'button1';
  newLink4.classList = 'button1';
  newItem1.appendChild(newLink1);
  newItem2.appendChild(newLink2);
  newItem3.appendChild(newLink3);
  newItem4.appendChild(newLink4);
  newLink1.innerText = "Ruby on Rails";
  newLink2.innerText = "css";
  newLink3.innerText = "Java Script";
  newLink4.innerText = "html";

  let projects = document.createElement('button');
  projects.id =  'popUpBtn'
  projects.classList = "projects";
  projects.innerText = "See Project";
  div.appendChild(projects);
  

  let append = document.getElementById("append");
  append.appendChild(sectionD);
};

// details pop up
window.addEventListener('click', (e) => {
  const idPopUpBtn = e.target.id;
});

const popUpBtn = document.querySelector('#popUpBtn');
const popUp = document.querySelector(".popup1");

popUpBtn.addEventListener("click", () => {
  popUp.classList.add("active");
  sectionD.classList.add("inactive");
});


// window.addEventListener('click', (e) => {
//   if (e.target === popUpBtn) {
//     modalContainer.classList.remove('.popup1');
//   }
// });