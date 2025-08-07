// navbar button active or none
document.addEventListener('DOMContentLoaded' , function(){
  const hamburger = document.getElementById('hamburger');
   const closeBtn = document.getElementById('closeBtn');
    const menuNav = document.getElementById('menuNav');

  // toggle menu on click 

  hamburger.addEventListener('click' , function(){
    menuNav.classList.add('active');
  })

  //close menu on close when click

  closeBtn.addEventListener('click', function(){
    menuNav.classList.remove('active');
  })

   // Close menu when clicking outside
      document.addEventListener('click', function(event) {
        const isClickInsideMenu = menuNav.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);
        
        if (!isClickInsideMenu && !isClickOnHamburger && menuNav.classList.contains('active')) {
          menuNav.classList.remove('active');
        }
      });

})