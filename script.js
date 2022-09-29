window.onscroll = function() {stick()};

var navbar = document.getElementById("big_div")
var sticky = navbar.offsetTop;

function stick() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
/*Week 3
CSS Cards/Flip cards
Add buttons to link to levels.fyi sites
Week 4
Fix flow of website - having everything on a single page, with links to each section, so that as you scroll down you see a sample of all of the pages
Week 5
Add a sources page
If there’s time:
Add more pages/content
Mailchimp newsletter(?)
*/