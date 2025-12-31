document.addEventListener("DOMContentLoaded", () => {
  const lines = document.querySelectorAll(".animated-text .line");
  let currentLine = 0;

  function typeLine() {
    if(currentLine >= lines.length) return;

    const line = lines[currentLine];
    line.classList.add("typing");

    const text = line.dataset.text;
    let index = 0;

    function typeChar() {
      if(index < text.length) {
        line.textContent += text[index];
        index++;
        setTimeout(typeChar, 100); 
      } else {
        line.classList.remove("typing"); 
        currentLine++;
        setTimeout(typeLine, 200); 
      }
    }

    typeChar();
  }

  typeLine();
});
