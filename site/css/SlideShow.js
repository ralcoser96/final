// JavaScript Document
var slideshows=document.querySelectorAll('[data-component="slideshow"]');
//applu to all slidesshow defined in markup
slideshows.forEach(initSlideShow);
function initSlideShow(slideshow){
	var slides=document.querySlectorAll('#${slideshow.id} [role="list"] .slide'); //get array of slides
	var index=0, time=500;
	slides[index].classList.add('active');
	
	setInterval(() =>{
		slides[index].classList.removed('active');
		//go over each slide incrementing the index
		index++;
		//if all slides goes over restart index to start over
		if(index === slides.length) index=0;
		slides[index].classList.add('active');
	},time)
}