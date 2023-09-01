
//========================================================================//
//                                Tabs                                    //
//========================================================================//

// Default Opened Tab

if (document.querySelector(".defaultOpen")) {
  document.querySelector(".defaultOpen").click();

}

//  Function to switch tabs of Horizons section

function openHorizonTabs(event, tabName) {
  // Declare all variables
  let tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("horizon-tabContent");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.className += " active";

  document.querySelector(".defaultOpen").classList.remove("defaultOpen");

}


//========================================================================//
//                          Active Nav Li                                 //
//========================================================================//


// let navLinks = document.querySelectorAll('.navItems');

// navLinks.forEach(element => {
//   element.addEventListener('click', function(event) {
//       // Remove "active" class from all links
//       navLinks.forEach(element => element.classList.remove('highlight'));

//       // Add "active" class to the clicked link
//       this.classList.add('highlight');

//       // alert('Message');
//   });
// });

// function activeCurrentPage1(itemId) {
//   alert(itemId);
//   let navLinks = document.querySelectorAll('.navItems');
//   alert(itemId);
//   navLinks.forEach(element => element.classList.remove('highlight'));
//   alert(itemId);
//   let a = document.querySelector('#'+itemId);
//   console.log("ffg" + a);
//   alert(itemId);

//   // Add "active" class to the clicked link
//   // itemId.classList.add('highlight');
//   document.getElementById(itemId).classList.add('highlight');
//   // document.querySelector('#'+itemId).classList.add('highlight');
//   alert(itemId);
//   console.log("ffg" + a);

// }

// function activeCurrentPage(itemId) {

//   let navLinks = document.querySelectorAll('.navItems');
//   navLinks.forEach(element => element.classList.remove('highlight'));
//   // Add "active" class to the clicked link
//   // itemId.classList.add('highlight');
//   document.getElementById(itemId).classList.add('highlight');
// }


//========================================================================//
//                           Image Slider                                 //
//========================================================================//


const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel{

  constructor(container, items, controls)
  {
    this.carouselContainer = container;
    this.carouselControls = controls;
    this.carouselArray = [...items];
  }

  updateGallery(){
    this.carouselArray.forEach(element => {
      element.classList.remove('gallery-item-1');
      element.classList.remove('gallery-item-2');
      element.classList.remove('gallery-item-3');
      element.classList.remove('gallery-item-4');
      element.classList.remove('gallery-item-5');
    });

    this.carouselArray.slice(0, 5).forEach((element, i) => {
      element.classList.add(`gallery-item-${i+1}`);
    });
  }

  setCurrentState(direction){
    if(direction.className == 'gallery-controls-previous')
    {
      this.carouselArray.unshift(this.carouselArray.pop());
    }
    else
    {
      this.carouselArray.push(this.carouselArray.shift());
    }
    this.updateGallery();
  }

  setControls(){
    this.carouselControls.forEach(control => {
      galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
      document.querySelector(`.gallery-controls-${control}`).innerText = control;
    });
  }

  useControls(){
    const triggers = [...galleryControlsContainer.childNodes];
    triggers.forEach(control => {
      control.addEventListener('click', e => {
        e.preventDefault();
        this.setCurrentState(control);
      });
    });
  }

}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);
exampleCarousel.setControls();
exampleCarousel.useControls();
