const lines = document.querySelectorAll(".animated-text .line");
lines.forEach((line, i) => {
      line.textContent = "";
      const text= line.CDATA_SECTION_NODE.text;
      let index = 0;

      function type() {
          if (index < text.length) {
              line.textContent += text.charAt(index);
              index++;
              setTimeout(type, 150);
            }
        }
        setTimeout(type, i * 1000);
});

