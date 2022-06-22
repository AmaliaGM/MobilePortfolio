
        let title = document.createElement('');
        title.innerText = 'Hey there. Im Amalia';
        title.classList = 'amalia';

        let  = document.createElement('ul');
        lits.classList = 'icons';

        const listItems = ['twitter', 'linkedin', 'medium', 'github', 'angellist']

        for(let i in listItems){
            let listItems = document.createElement('li');
            listItems.innerText = listItems(i);

            list.appendChild(listItems);
        }
        let body = document.getElementById('root');
        body.appendChild(title);
        body.appendChild(list);

        let header = document.getElementById('title')
        header.innerText = 'My Recent Work'
        
        <div><a href="title"><img src="images/Disabled.png" alt="scroll down button"></a></div>
        <div><h1>My recent Work</h1></div>
        <div><img src="images/indicator.png" alt="indicator"></div>
    </header>
    <section class="descript">
        <div class="planholder">
            <div class="div">
                <img class="img" src="images/plan.png" alt="planholder">
                <h2 class="subtitle">Multi-Post Stories Gain+Glory</h2>
                <ul class="language">
                    <li><a class="button1">Ruby on rails</a></li>
                    <li><a class="button1">css</a></li>
                    <li><a class="button1">Java Script</a></li>
                    <li><a class="button1">HTML</a></li>
                </ul>
                <button class="projects" type="button">See project</button>
            </div>

  /* const images = ["images/aboutme.png", "images/aboutright.png", "images/aboutright1.png", "images/angellist.png", "images/Disabled.png", "images/Enabled.png", "images/Frame.png", "images/Frame@2x.png", "images/github.png", "images/header-illsutration-mobile.png", "images/header.png", "images/icon-frameworks.svg", "images/icon-languages.svg", "images/icon-skills.svg", "images/illustration-contact-form.png", "images/Indicator.png", "images/Linkedin.png", "images/Live.png", "images/medium.png", "images/plan.png", "images/Snapshoot.png", "images/Snapshootbig.png", "images/Source.png", "images/twitter.png", "images/Vector.png"] 
  let phoneCont = document.getElementsById("img");
  let project = document.getElementsByClassName(".project")


  const navItem = document.querySelectorAll(".nav-item")
  const hambBut = document.querySelector(".hamburguer")
  const navB1 = document.querySelector(".navbar1")
  const iconsSM = document.querySelectorAll(".icons")
  const planHolder = document.querySelector(".divr")
  const skillBox = document.querySelectorAll(".skills")
  const contForm = document.querySelector(".form")
  const popWind = document.querySelector(".popup1")
  const mobileCl = document.querySelectorAll(".mobile")
  const desktop = document.querySelectorAll(".desktop")
  
  
  const nav = document.querySelector(".navbar1")
  const icons = document.querySelectorAll(".icons")
  const planholder = document.querySelector(".divr")
  const box = document.querySelectorAll(".skills")
  const contactForm = document.querySelector(".form")
  const popWin = document.querySelector(".popup1")
  const mobile = document.querySelector(".mobile")

  let 

  getButtons(){
    const btns = document.querySelectorAll(".project")
    Array.from(btns)
    buttonsDOM = btns;
    btns.forEach((btn) => {
        let id = btn.dataset.class
        let popUp = mobile.find((item) => item.id ===id);
        if(active)
        {
            btn.innerHTML = "active"
            btn.dissabled  = true
        }
        btn.addEventListener("click",(e)=>{
            e.currentTarget.innerHTML = "active"
            e.currentTarget.style.color = "white"
            e.currentTarget.style.pointerEvents = "none"
            let 
        })
    })
  } */