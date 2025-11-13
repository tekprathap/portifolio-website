  // active hamburger menu 
  let menuIcon = document.querySelector(".menu-icon");
  let navlist = document.querySelector(".navlist")
  menuIcon.addEventListener("click",()=>{
      menuIcon.classList.toggle("active");
      navlist.classList.toggle("active");
      document.body.classList.toggle("open");
  });
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submit
  
    // Get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");
  
    // Basic Validation
    if (name === "" || email === "" || message === "") {
      formMessage.textContent = "Please fill out all fields.";
      formMessage.style.color = "red";
      return;
    }
  
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      formMessage.textContent = "Please enter a valid email address.";
      formMessage.style.color = "red";
      return;
    }
  
    // If valid
    formMessage.textContent = "Your message has been sent!";
    formMessage.style.color = "green";
  
    // Reset form
    document.getElementById("contactForm").reset();
  });
  