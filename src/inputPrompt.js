const prompts = require('prompts');

async function createPrompt() {
  const response = await prompts({
    type: 'text',
    name: 'value',
    message: 'Would you like to see more trucks? (y/n)',
    validate: value =>
      value.toLowerCase() === 'y' || value.toLowerCase() === 'n'
  });
  return response.value.toLowerCase() === 'y';
}

module.exports = createPrompt;
