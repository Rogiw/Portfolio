document.addEventListener("DOMContentLoaded", () => {
  const lines = document.querySelectorAll(".animated-text .line");
  let currentLine = 0;
  let animationRun = 0;

  function eraseLines(groupName, callback, run) {
    if (run !== animationRun) return;
    const groupLines = Array.from(lines).filter((line) => line.dataset.clearGroup === groupName);
    let currentGroupLine = groupLines.length - 1;

    function eraseLine() {
      if (run !== animationRun) return;
      if (currentGroupLine < 0) {
        callback();
        return;
      }

      const line = groupLines[currentGroupLine];
      line.classList.add("typing");

      function eraseChar() {
        if (run !== animationRun) return;
        if (line.textContent.length > 0) {
          line.textContent = line.textContent.slice(0, -1);
          setTimeout(eraseChar, 16);
        } else {
          line.classList.remove("typing");
          line.classList.add("is-cleared");
          currentGroupLine--;
          setTimeout(eraseLine, 45);
        }
      }

      eraseChar();
    }

    eraseLine();
  }

  function typeLine(run) {
    if (run !== animationRun) return;
    if(currentLine >= lines.length) return;

    const line = lines[currentLine];
    line.classList.add("typing");

    const text = line.dataset.text;
    let index = 0;

    function typeChar() {
      if (run !== animationRun) return;
      if(index < text.length) {
        line.textContent += text[index];
        index++;
        setTimeout(typeChar, 72); 
      } else {
        line.classList.remove("typing"); 
        currentLine++;

        if (line.hasAttribute("data-clear-after")) {
          setTimeout(() => {
            eraseLines(line.dataset.clearGroup, () => typeLine(run), run);
          }, 900);
          return;
        }

        setTimeout(() => typeLine(run), 200); 
      }
    }

    typeChar();
  }

  const restart = () => {
    animationRun++;
    currentLine = 0;
    lines.forEach((line) => {
      line.textContent = "";
      line.classList.remove("typing", "is-cleared");
    });
    typeLine(animationRun);
  };

  window.addEventListener("site-language-changed", restart);
  restart();
});
