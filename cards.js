  /*let header = document.getElementsByClassName("title");
  let newSubtitle = document.createElement("h2");
  newSubtitle.innerText = "My Recent Work";
  header.appendChild(newSubtitle);*/


  //ul list

  const cards= [
    { 
      image: 'images/plan.png',
      heading:'Multi-Post Stories Gain+Glory',
      badge1: 'Ruby on Rails',
      badge2: 'css',
      badge3: 'Java Script',
      badge4: 'HTML',
    }
  ];
  
   window.addEventListener ('load', (event) =>{

    console.log("Page Loaded");
  
  for(let i=0; i<6; i++){  

  let sectionD = document.createElement("div");
  sectionD.classList = 'descript';
    
  let planHolder = document.createElement("div");
  planHolder.classList = 'planholder';
  sectionD.appendChild(planHolder);
  
  let div = document.createElement("div");
  planHolder.appendChild(div);
  div.classList = 'div';
  
  let imgPH = document.createElement('img');
  imgPH.classList = 'img';
  imgPH.src=(cards[0].image);
  div.appendChild(imgPH);

  let subTitle = document.createElement('h2');
  subTitle.classList = 'subtitle';
  subTitle.innerHTML = cards[0].heading
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
  newItem1.appendChild(newLink2);
  newItem1.appendChild(newLink3);
  newItem1.appendChild(newLink4);
  newLink1.innerText = "Ruby on Rails";
  newLink2.innerText = "css";
  newLink3.innerText = "Java Script";
  newLink4.innerText = "html";

  let append = document.getElementById("append");
  append.appendChild(sectionD);
  }
});


  
  
  
  
  



/*let append = document.getElementById("append");
for (let i = 0; i<6; i++) {
  let card= `
  <div class="div">
                <img class="img" src="${cards[0].image}" alt="planholder">
                <h2 class="subtitle">${cards[0].heading}</h2></h2>
                <ul class="language">
                    <li><a class="button1">${cards[0].badge1}</a></li>
                    <li><a class="button1">${cards[0].badge2}</a></li>
                    <li><a class="button1">${cards[0].badge3}</a></li>
                    <li><a class="button1">${cards[0].badge4}</a></li>
                </ul>
                <button class="projects" type="button">See project</button>
            </div>
  `
  //document.getElementById("append").innerHTML += card
  
}*/