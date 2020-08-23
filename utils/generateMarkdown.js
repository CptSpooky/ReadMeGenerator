// function to generate markdown for README
var generateMarkdown = function(data) {
  return `# ${data.title}

  ## Table of Contents
  - [Description](#heading-1)
  - [Installation](#heading-2)
  - [Usage](#heading-3)
  - [License](#heading-4)
  - [Contributing](#heading-5)
  - [Tests](#heading-6)
  - [Questions](#heading-7)

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
