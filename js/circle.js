
$(document).ready(function() {

	$(window).scroll(function() {
 // Create an IntersectionObserver instance
 var observer = new IntersectionObserver(function(entries, observer) {
    // Loop through the entries
    entries.forEach(function(entry) {
      // Check if the element is intersecting the viewport
      if (entry.isIntersecting) {
        // Call a function when the element becomes visible
		var windowHeight = $(window).height(),
      scrollPos = $(window).scrollTop(),
      divPos = $(".round").offset().top,
      divHeight = $(".round").height(),
      percent;

  if (divPos < scrollPos + windowHeight && divPos + divHeight > scrollPos) {
    percent = ((scrollPos + windowHeight - divPos) / (divHeight + windowHeight)) * 100;
    $(".round").css("border-radius", percent + "%");

	var newWidth = $(window).width() * (100 - percent) / 100; // calculate new width based on percent
  if (newWidth < 800) {
    newWidth = 800; // set a minimum width of 800px
    $(".round").css({
      
      "width": newWidth + "px" // set new width in pixels
    });
  } 
  else {
    $(".round").css({
    
      "width": newWidth + "px" // set new width in percentage
    });
  }
}
        // Stop observing the element
        observer.unobserve(entry.target);
      }
	 
    });
  }, { threshold: [0] });
  
  // Observe the element
  observer.observe($(".round")[0]);
  
  // Define the function to call when the element becomes visible

	})
 
});

	