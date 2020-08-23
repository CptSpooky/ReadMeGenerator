// function to generate markdown for README
var generateMarkdown = function(data) {
  return `# ${data.title}

  ## Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)

  ## Description
  test

  ## Installation

  ## Usage

  ## License

  ## Contributing

  ## Tests

  ## Questions

  
  `;
}

module.exports = {
  genMarkdown : generateMarkdown
}
