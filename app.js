window.onload = function() {
  var i = 0,
    slideText = document.querySelector('#text'),
    rightArrow = document.querySelector('#rightArrow');
    leftArrow = document.querySelector('#leftArrow');
    //turn this into an array of objects
    //objects hold slide content and image { img: src, slide: content }
    slides = ['Sign up on Digital ocean and create an ubuntu droplet.',
    'Go to www.namecheape.com and purchase a domain name of your choice.',
    'Point your purchased domain name to the three digital ocean nameservers: ns1.digitalocean.com(ns2,ns3)',
    'Go to your created digital ocean droplet and create an A name document',
    'Set the host name of your A document to "www" and the IP of your droplet',
    'Download an SFTP client such as Filezilla',
    'Log into your droplet server with username: root and your password',
    'log into your server directory via filezilla',
    'find the /var/www/ folder and create a folder with your purchased domain name (mydomain.com)'
  ];

//create a function that adds the content based on the array index position
function showSlide(slide) {
  slideText.innerHTML = slide;
}
//create a function that goes forward through the array content in intervals
//bind the function to an event listener conditional
function clickToNextSlide() {
  if (i <= slides.length) {
    i++;
    showSlide(slides[i]);
  }
}
function clickToPreviousSlide() {

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
  } else {
    //do nothing
    event.stopPropagation();
  }
}, false);

};
