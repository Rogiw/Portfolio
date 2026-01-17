const buttons = document.querySelectorAll(".icon-menu");

buttons.forEach(button => {
  const submenu = button.nextElementSibling;

  button.addEventListener("click", () => {
    const isActive = submenu.style.display === "flex"; 

    if(isActive) {
      
      buttons.forEach(b => b.style.display = "inline-block"); 
      submenu.style.display = "none"; 
    } else {
      
      submenu.style.display = "flex";
      buttons.forEach(b => {
        if(b !== button) b.style.display = "none"; 
        else b.style.color = "#4B4B4D";
      });
    }
  });
});
