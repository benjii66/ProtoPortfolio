import {sliderDatas} from "./datas/projectsDatas.js";



export const createList = ()=> {


  const ulElement = document.createElement('ul');
  ulElement.className = 'slider';

  sliderDatas.forEach(item => {
    const liElement = document.createElement('li');
    liElement.className = 'item';
    liElement.style.backgroundImage = `url('${item.imageUrl}')`;

   
    const contentDiv = document.createElement('div');
    contentDiv.className = 'content';

    const titleElement = document.createElement('h2');
    titleElement.className = 'title';
    titleElement.textContent = item.title;
    titleElement.style.backgroundImage = `url('${item.titleBackground}')`;
    
    const descriptionElement = document.createElement('p');
    descriptionElement.className = 'description';
    descriptionElement.textContent = item.description;

  
    const buttonElement = document.createElement('button');
    buttonElement.setAttribute('data-hover', 'Click me !');

    
    const anchorElement = document.createElement('a');
    anchorElement.className = 'hover-me';
    anchorElement.textContent = 'Read More';
    anchorElement.setAttribute('href', '#static-link');

    console.log(anchorElement);

    

    buttonElement.appendChild(anchorElement);
    contentDiv.appendChild(titleElement);
    contentDiv.appendChild(descriptionElement);
    contentDiv.appendChild(buttonElement);
    liElement.appendChild(contentDiv);
    ulElement.appendChild(liElement);
  });
    
    const navElement = document.createElement('nav');
    navElement.className = 'nav';
  
    const prevButton = document.createElement('ion-icon');
    prevButton.className = 'btn prev';
    prevButton.setAttribute('name', 'arrow-back-outline');
  
    const nextButton = document.createElement('ion-icon');
    nextButton.className = 'btn next';
    nextButton.setAttribute('name', 'arrow-forward-outline');
  
    navElement.appendChild(prevButton);
    navElement.appendChild(nextButton);



    const mainElement = document.querySelector('main');
    mainElement.insertBefore(ulElement, document.querySelector('.nav'));
    mainElement.appendChild(navElement);
    document.body.appendChild(mainElement);

}