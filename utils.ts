export function generateHTMLAndCSS(inputString: string): string {
    const lines = inputString.split('\n');
    let htmlCode = '';
    let cssCode = '';
  
    lines.forEach((line) => {
      const symbol = line[0];
      const content = line.substring(1).trim();
  
      switch (symbol) {
        case '*':
          // Title
          htmlCode += `<h1 class="text-3xl font-bold text-black">${content}</h1>\n`;
          break;
        case '&':
          // Sub-title
          htmlCode += `<h2 class="text-xl font-semibold text-black">${content}</h2>\n`;
          break;
        case '@':
          // Bash
          htmlCode += `<pre class="bg-black text-white p-2">${content}</pre>\n`;
          break;
        case '^':
          // Code (image)
          htmlCode += `<img src="${content}" alt="Code" />\n`;
          break;
        case '$':
          // Hints with Tailwind CSS
          htmlCode += `.hint {
            /* Your custom Tailwind CSS for hints here */
          }\n`;
          htmlCode += `<div class="hint">${content}</div>\n`;
          break;
        default:
          // Default case
          htmlCode += `<p class="text-black">${line}</p>\n`;
          break;
      }
    });
  
    // Wrap the generated HTML and CSS in a template.
    const finalHTML = `  
      <div> ${htmlCode} </div>`;
    return finalHTML;
  }
  
// Example usage:

//   const inputString = `
//   * This is a Title
//   & This is a Sub-title
//   @ echo "Hello, World!"
//   ^ path/to/code.png
//   $ Hint with Tailwind CSS styling
//   This is a regular text line.
//   `;
   
  