let popup1 = document.createElement("section");
popup1.classList = 'popup1';

let popUpDiv = document.createElement("div");
popUpDiv.classList = 'images';
popup1.appendChild(popUpDiv);

let imgPopM = document.createElement("img");
imgPopM.classList = 'mobile img';
popUpDiv.appendChild(imgPopM);

let imgPopD = document.createElement("img");
imgPopD.classList = 'desktop img';
popUpDiv.appendChild(imgPopD);

let popDiv = document.createElement("div");
popDiv.classList = "pop";
popup1.appendChild(popDiv);

let popUpTitle = document.createElement("h2");
popUpTitle.classList = "popUp-title";
popup1.appendChild(popUpTitle);

let desktopSee = document.createElement("div");
desktopSee.classList  = "desktop see";
popup1.appendChild(desktopSee);

let aDesk = document.createElement("a");
aDesk.classList = 'dSeeLive';
desktopSee.appendChild(aDesk);

let bDesk = document.createElement("a");
aDesk.classList = "dSeeSource";
desktopSee.appendChild(aDesk);

let imgDL = document.createElement("img");
imgDL.src="images/Live.png";
aDesk.appendChild(imgDL);

let imgDS = document.createElement("img");
imgDL.src="images/Source.png";
bDesk.appendChild(imgDL);

let mobile = document.createElement("div");
mobile.classList = "mobile";
popup1.appendChild(mobile);

let ulLang = document.createElement("ul");
ulLang.classList = "languages";
popup1.appendChild(ulLang);

let liLang1 = document.createElement("li");
ulLang.appendChild(liLang1);

let liLang2 = document.createElement("li");
ulLang.appendChild(liLang2);

let liLang3 = document.createElement("li");
ulLang.appendChild(liLang3);

let liLang1a = document.createElement("a");
liLang1a.classList ="button1";
liLang1a.innerText = "Rubi on Rails"
liLang1.appendChild(liLang1a);

let liLang2a = document.createElement("a");
liLang2a.classList = "button1"
liLang2a.innerText = "css"
liLang2.appendChild(liLang2a);

let liLang3a = document.createElement("a");
liLang3a.classList = "button1"
liLang3a.innerText = "Java Script"
liLang2.appendChild(liLang3a);


let desktop = document.createElement("div");
desktop.classList= "desktop";
popup1.appendChild(desktop);

let ulLang1Desk = document.createElement("ul");
ulLang1Desk.classList = "languages";
popup1.appendChild(ulLang1Desk);

let liLang1D = document.createElement("li");
liLang1D.classList = "button1"
liLang1D.innerText = "Codekit"
ulLang.appendChild(liLang1D);

let liLang2D = document.createElement("li");
liLang2D.classList = "button1"
liLang2D.innerText = "GitHub"
ulLang.appendChild(liLang2D);

let liLang3D = document.createElement("li");
liLang3D.classList = "button1"
liLang3D.innerText = "Javascript"
ulLang.appendChild(liLang3D);

let liLang4D = document.createElement("li");
liLang4D.classList = "button1"
liLang4D.innerText = "Bootstrap"
ulLang.appendChild(liLang1D);

let liLang5D = document.createElement("li");
liLang5D.classList = "button1"
liLang5D.innerText = "Terminal"
ulLang.appendChild(liLang5D);

let liLang6D = document.createElement("li");
liLang6D.classList = "button1"
liLang6D.innerText = "Codepen"
ulLang.appendChild(liLang6D);

let loremIp = document.createElement("p");
loremIp.classList = "loremText";
loremIp.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea"
popup1.appendChild(loremIp);

let mobSee = document.createElement("div");
mobSee.classList = "mobile see";
popup1.appendChild(mobSee);

let amobSee1 = document.createElement("div");
mobSee.appendChild(amobSee1);

let amobSee2 = document.createElement("div");
mobSee.appendChild(amobSee2);

let imgDeskLive = document.createElement("img");
amobSee1.appendChild(imgDeskLive);

let imgDeskSource = document.createElement("img");
amobSee2.appendChild(imgDeskSource);

document.body.appendChild(popup1);


