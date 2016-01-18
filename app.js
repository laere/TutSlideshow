window.onload = function() {
  var currentSlidePosition = 0;
  var slideText = document.querySelector('#text');
  var rightArrow = document.querySelector('#rightArrow');
  var leftArrow = document.querySelector('#leftArrow');

  //turn this into an array of objects
  //objects hold slide content and image { img: src, slide: content }
  slides = [
    'Sign up on Digital ocean and create an ubuntu droplet.',
    'Go to www.namecheap.com and purchase a domain name of your choice.',
    'Point your purchased domain name to the three digital ocean nameservers: ns1.digitalocean.com(ns2,ns3).',
    'Go to your created digital ocean droplet and create an A name document.',
    'Set the host name of your A document to "www" and the IP of your droplet.',
    'Download an SFTP client such as Filezilla.',
    'Log into your droplet server with username: root and your password.',
    'Log into your server directory via filezilla.',
    'Find the /var/www/ folder and create a folder with your purchased domain name (mydomain.com).'
  ];

  //create a function that adds the content based on the array index position
  function showSlide(slide) {
    slideText.innerHTML = slide;
  }
  //add first slide
  function addFirstSlide() {
    slideText.innerHTML = slides[0];
  }
  addFirstSlide();
  //create a function that goes forward through the array content in intervals
  //bind the function to an event listener conditional
  //better way of writing this?
  function clickToNextSlide() {
    console.log(slides.length);
    if (currentSlidePosition < slides.length - 1) {
      currentSlidePosition++;
      showSlide(slides[currentSlidePosition]);
      console.log(currentSlidePosition);
    }
  }
  //function that goes back through slides
  //better way of writing this?
  function clickToPreviousSlide() {
    console.log(slides.length);
    if (currentSlidePosition <= slides.length) {
      currentSlidePosition--;
      if (currentSlidePosition <= -1) {
        return;
      }
      showSlide(slides[currentSlidePosition]);
      console.log(currentSlidePosition);
    }
  }
  //attach event listeners to the document and create a conditional.
  document.querySelector('html').addEventListener('click', function(event) {
    var el = event.target;
    //if right arrow is clicked
    if (el === rightArrow) {
      console.log('right arrow!');
      clickToNextSlide();
      //else if left arrow is clicked
    } else if (el === leftArrow) {
      console.log('left arrow');
      clickToPreviousSlide();
      // } else {
      //   //do nothing
      //   event.stopPropagation();
    }
  }, false);
};
