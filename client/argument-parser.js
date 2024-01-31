function parseArguments() {
  const argumentsObj = {};

  process.argv.forEach((arg) => {
    if (arg.match(/[a-z]+=.+/)) {
      const [argumentName, argumentValue] = arg.split("=");
      argumentsObj[argumentName] = argumentValue;
    }
  });

  return argumentsObj;
}

module.exports = {
  parseArguments,
};
