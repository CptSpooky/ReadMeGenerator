// function to generate markdown for README
var generateMarkdown = function(data) {
  return `# ${data.title}
  
  `;
}

module.exports = {
  genMarkdown : generateMarkdown
}
