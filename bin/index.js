#! /usr/bin/env node
import fs from "fs";
import {
  CloudFormationClient,
  CreateStackCommand,
} from "@aws-sdk/client-cloudformation";
import yaml from "js-yaml";
import { CLOUDFORMATION_SCHEMA } from "js-yaml-cloudformation-schema";
import help from "./help.js";
import requiredParameters from "./requiredParameters.js";
import readParams from "./readParams.js";

const CLI_ARGS = process.argv.slice(2);

// Display template if user input is only `?`, `help`, `-h`, `--help`
help(CLI_ARGS);

const {
  region,
  stackName,
  accessKeyID,
  secretAccessKey,
  templateFilePath,
  config,
} = readParams(CLI_ARGS, requiredParameters);

let templateBody = fs.readFileSync(templateFilePath, "utf8");
templateBody = yaml.load(templateBody, { schema: CLOUDFORMATION_SCHEMA });

// Create the CloudFormation client
const client = new CloudFormationClient({
  region,
  credentials: { accessKeyId: accessKeyID, secretAccessKey },
});

/* Checks for Override YAML Configuration JSON File */
if (config) {
  const paramsObj = JSON.parse(fs.readFileSync(config, "utf8"));
  const params = Object.keys(paramsObj);

  params.forEach((param) => {
    templateBody["Parameters"][param]["Default"] = paramsObj[param];
  });
}

const params = {
  StackName: stackName ?? `AutoGenStack${Date.now()}`,
  TemplateBody: JSON.stringify(templateBody, null, 2),
};

const command = new CreateStackCommand(params);

try {
  const data = await client.send(command);
  console.log("CloudFormation stack created successfully:", data);
} catch (err) {
  console.error("Error creating CloudFormation stack:", err);
}
