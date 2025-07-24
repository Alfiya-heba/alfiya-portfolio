document.addEventListener("DOMContentLoaded", () => {
  const sideMenu = document.getElementById("sideMenu");
  const navBar = document.querySelector("nav");
  const navLinks = document.querySelector("nav ul");
  const form = document.getElementById("contact-form");

  
  
  
  window.openMenu = function () {
    sideMenu.style.right = "0";
  };

  window.closeMenu = function () {
    sideMenu.style.right = "-16rem";
  };

  window.addEventListener('scroll', () => {
    if (scrollY > 50) {
      navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm','dark:bg-darkTheme','dark:shadow-white/20');
      navLinks.classList.remove('bg-white','shadow-sm','bg-opacity-50','dark:border','dark:border-white/70','dark:bg-transparent')
    } else {
      navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm','dark:bg-darkTheme','dark:shadow-white/20');
      navLinks.classList.add('bg-white','shadow-sm','bg-opacity-50','dark:border','dark:border-white/70','dark:bg-transparent')
    }
  });
});

// light and dark mode
if(localStorage.theme==='dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme:dark)').matches)){
  document.documentElement.classList.add('dark')
}else{
  document.documentElement.classList.remove('dark')
}

function toggleTheme(){
  document.documentElement.classList.toggle('dark')
  if( document.documentElement.classList.contains('dark')){
    localStorage.theme='dark'
  }else{
    localStorage.theme='light';
  }
}

// contact section web3forms
form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(form);
  //  Added  web3forms line here
  formData.append("access_key", WEB3FORMS_ACCESS_KEY);

  
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      // Show success popup
      document.getElementById("success-popup").classList.remove("hidden");
      form.reset();
    } else {
      alert("Something went wrong!");
    }
  } catch (error) {
    console.error("Error:", error);
  }
});