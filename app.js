window.onload = function() {
  var currentSlidePosition = 0;
  var currentImagePosition = 0;
  var slideText = document.querySelector('#text');
  var slideImage = document.querySelector('#image');
      slideImage.setAttribute('width', '450px');
  // slideImage.setAttribute('height', '190px');
  var slides = [
    '1. Sign up on Digital ocean and create an ubuntu droplet.',
    '2. Go to www.namecheap.com and purchase a domain name of your choice.',
    '3. Point your purchased domain name to the three digital ocean nameservers: ns1.digitalocean.com(ns2,ns3).',
    '4. Go to your created digital ocean droplet and create an A name document.',
    '5. Set the host name of your A document to "www" and the IP of your droplet.',
    '6. Download an SFTP client such as Filezilla.',
    '7. Log into your droplet server with username: root and your password.',
    '8. Log into your server directory via filezilla.',
    '9. Find the /var/www/ folder and create a folder with your purchased domain name (mydomain.com).'
  ];
  var images = [
    'http://i.istockimg.com/file_thumbview_approve/74002419/6/stock-photo-74002419-couple-friends-having-a-nice-dinner.jpg',
    'http://i.istockimg.com/file_thumbview_approve/68101899/6/stock-photo-68101899-hands-cutting-portobello-mushrooms.jpg',
    'http://i.istockimg.com/file_thumbview_approve/78725677/6/stock-photo-78725677-food-truck-in-the-street.jpg',
    'http://i.istockimg.com/file_thumbview_approve/67606017/6/stock-photo-67606017-vegetable-mix.jpg',
    'http://i.istockimg.com/file_thumbview_approve/71795775/6/stock-photo-71795775-avocado-toast-with-tomato.jpg',
    'http://i.istockimg.com/file_thumbview_approve/70604053/6/stock-photo-70604053-grab-a-bowl-of-goodness-.jpg',
    'http://i.istockimg.com/file_thumbview_approve/72353349/6/stock-photo-72353349-young-happy-family-having-breakfast.jpg',
    'http://i.istockimg.com/file_thumbview_approve/74072609/6/stock-photo-74072609-pink-food-truck.jpg',
    'http://i.istockimg.com/file_thumbview_approve/70610003/6/stock-photo-70610003-birthday-toast.jpg'
  ];

  console.log('Slide length: ' + slides.length);
  console.log('Images length: ' + images.length);
  console.log('Slide position: ' + currentSlidePosition);
  console.log('Image position: ' + currentImagePosition);

  addFirstSlide();
  addFirstImage();
  //for each item in the array create and Orb
  slides.forEach(function(func) {
    createOrbs('div', '50px', '50px', '#fff', '30px', 'inline-block');
  });
  //add first slide
  function addFirstSlide() {
    slideText.innerHTML = slides[0];
  }
  //create a function that adds the content based on the array index position
  function showSlide(slide) {
    slideText.innerHTML = slide;
  }
  function addFirstImage() {
    slideImage.setAttribute('src', images[0]);
  }
  function showImage(image) {
    slideImage.setAttribute('src', image);
  }
  function validateNextSlide() {
    return currentSlidePosition < slides.length - 1 && currentImagePosition < images.length - 1;
  }
  function validatePrevSlide() {
    return currentSlidePosition <= slides.length && currentImagePosition <= images.length;
  }
  //create a function that goes forward through the array content in intervals
  //bind the function to an event listener conditional
  //better way of writing this?
  function clickToNextSlide() {
    console.log('Slide length: ' + slides.length);
    console.log('Images length: ' + images.length);
    //if validate function is true.
    if (validateNextSlide) {
      currentSlidePosition++;
      currentImagePosition++;
      if (currentImagePosition >= slides.length  && currentImagePosition >= images.length) {
        currentImagePosition = 8;
        currentSlidePosition = 8;
      }
      showSlide(slides[currentSlidePosition]);
      showImage(images[currentImagePosition]);
      console.log('Slide position: ' + currentSlidePosition);
      console.log('Image position: ' + currentImagePosition);
    }
  }
  //function that goes back through slides
  //better way of writing this?
  function clickToPreviousSlide() {
    console.log('Slide length: ' + slides.length);
    console.log('Images length: ' + images.length);
    //if validate function is true.
    if (validatePrevSlide) {
      currentSlidePosition--;
      currentImagePosition--;
      console.log('Slide position: ' + currentSlidePosition);
      console.log('Image position: ' + currentImagePosition);
      if (currentSlidePosition <= -1 && currentImagePosition <= -1) {
        currentImagePosition = 0;
        currentSlidePosition = 0;
      }
      showSlide(slides[currentSlidePosition]);
      showImage(images[currentImagePosition]);
      console.log('Slide position: ' + currentSlidePosition);
      console.log('Image position: ' + currentImagePosition);
    }
  }

  function createOrbs(ele, height, width, color, radius, display) {
    var orbs = document.querySelector('#orbs'),
        //textNode = document.createTextNode(),
        element = document.createElement(ele);

    element.style.height = height;
    element.style.width = width;
    element.style.backgroundColor = color;
    element.style.borderRadius = radius;
    element.style.display = display;
    //element.appendChild(textNode);
    orbs.appendChild(element);
  }

  //attach event listeners to the document and create a conditional.
  document.querySelector('html').addEventListener('click', function(event) {
    var rightArrow = document.querySelector('#rightArrow');
    var leftArrow = document.querySelector('#leftArrow');
    var next = document.querySelector('#next');
    var back = document.querySelector('#back');
    var el = event.target;
    //if right arrow is clicked
    if (el === rightArrow || el === next) {
      console.log('right arrow!');
      clickToNextSlide();
      //else if left arrow is clicked
    } else if (el === leftArrow || el === back) {
      console.log('left arrow');
      clickToPreviousSlide();
    } else {
      // do nothing
      event.stopPropagation();
    }
  }, false);
};
