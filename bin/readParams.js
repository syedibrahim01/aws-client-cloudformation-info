export default function readParams(args, requiredParams) {
  const argsObj = {};

  if (args.length) {
    // Parse Arguments to Variables
    args.forEach((arg, index, array) => {
      if (arg.slice(0, 2) === "--") {
        argsObj[arg.replace("--", "")] = args[index + 1];
      }

      if (arg.slice(0, 1) === "-") {
        argsObj[arg.replace("-", "")] = args[index + 1];
      }

      if (arg.includes("=")) {
        argsObj[arg.split("=")[0]] = arg.split("=")[1];
      }
    });
  } else {
    console.error(
      `Arguments are Invalid!\n - You can use "-region <region-name>" or "--region <region-name>" or "region=<region-name>"\n - Parameters Required are: region, stack-name, access-key-id, secret-access-key, template-file-path\n - Eg: npm run start region=us-east-1 stack-name=test-stack access-key-id=ASDF798ASDF79A87DF89ASDF secret-access-key=ALSDF908SDF0809ASDF09 template-file-path=/c/Users/batman/download/configuration.yaml`,
    );
  }

  // Throws Error if required parameters aren't passed
  try {
    requiredParams.forEach((requiredParam) => {
      if (!argsObj[requiredParam]) {
        throw Error(`${requiredParam} is ${argsObj[requiredParam]}`);
      }
    });
  } catch (error) {
    console.error(error);
  }

  return argsObj;
}
