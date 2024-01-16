#! /usr/bin/env node

export default function help(params) {
  if (
    params[0] === "?" ||
    params[0] === "help" ||
    params[0] === "--help" ||
    params[0] === "-h"
  ) {
    console.info(
      `npm run start region=<region-name> stackName=<stack-name> accessKeyID=<access-key-id> secretAccessKey=<secret-access-key> templateFilePath=<template-file-path>`,
    );

    process.exit();
  }
}
