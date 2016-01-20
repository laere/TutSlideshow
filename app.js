window.onload = function() {
  var currentSlidePosition = 0;
  var currentImagePosition = 0;
  var slideText = document.querySelector('#text');
  var slideImage = document.querySelector('#image');
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
    'http://lorempixel.com/image_output/abstract-q-c-600-250-10.jpg',
    'http://lorempixel.com/image_output/animals-q-c-600-250-10.jpg',
    'http://lorempixel.com/image_output/business-q-c-600-250-3.jpg',
    'http://lorempixel.com/image_output/cats-q-c-600-250-5.jpg',
    'http://lorempixel.com/image_output/city-q-c-600-250-5.jpg',
    'http://lorempixel.com/image_output/food-q-c-600-250-7.jpg',
    'http://lorempixel.com/image_output/nightlife-q-c-600-250-1.jpg',
    'http://lorempixel.com/image_output/fashion-q-c-600-250-5.jpg',
    'http://lorempixel.com/image_output/people-q-c-600-250-7.jpg'
  ];
  console.log('Slide length: ' + slides.length);
  console.log('Images length: ' + images.length);
  console.log('Slide position: ' + currentSlidePosition);
  console.log('Image position: ' + currentImagePosition);
  addFirstSlide();
  addFirstImage();
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
        return;
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
        return;
      }
      showSlide(slides[currentSlidePosition]);
      showImage(images[currentImagePosition]);
      console.log('Slide position: ' + currentSlidePosition);
      console.log('Image position: ' + currentImagePosition);
    }
  }
  //attach event listeners to the document and create a conditional.
  document.querySelector('html').addEventListener('click', function(event) {
    var rightArrow = document.querySelector('#rightArrow');
    var leftArrow = document.querySelector('#leftArrow');
    var el = event.target;
    //if right arrow is clicked
    if (el === rightArrow) {
      console.log('right arrow!');
      clickToNextSlide();
      //else if left arrow is clicked
    } else if (el === leftArrow) {
      console.log('left arrow');
      clickToPreviousSlide();
    } else {
      // do nothing
      event.stopPropagation();
    }
  }, false);
};
