const sidebar = document.getElementById("sidebar");

sidebar.addEventListener("mouseover", () => {
  sidebar.classList.add("expanded");
  const icons = sidebar.querySelectorAll(".icon");
  icons.forEach(icon => icon.classList.remove("hidden"));
});

sidebar.addEventListener("mouseout", () => {
  sidebar.classList.remove("expanded");
  const icons = sidebar.querySelectorAll(".icon");
  icons.forEach(icon => icon.classList.add("hidden"));
});

document.addEventListener("DOMContentLoaded", function () {
    const boardList = document.querySelector(".board-list"); 
    const maxHeight = 200; 
  
    if (boardList.scrollHeight > maxHeight) {
      boardList.style.maxHeight = `${maxHeight}px`;
      boardList.style.overflowY = "auto"; 
    }

    
  });