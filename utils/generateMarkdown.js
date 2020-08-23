// function to generate markdown for README
var generateMarkdown = function(data) {
  return `# ${data.title}

  ## Table of Contents
  - [Heading](#Description)
  - [Heading](#heading-1)
  - [Heading](#heading-2)

  
  `;
}

module.exports = {
  genMarkdown : generateMarkdown
}
