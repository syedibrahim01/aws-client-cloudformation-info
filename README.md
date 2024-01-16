# Command Template

```SH
# Development Environment

npm run start region=<region> stackName=<stack-name> accessKeyID=<access-key-id> secretAccessKey=<secret-access-key> templateFilePath=<template-file-path> config=<optional-config-overrider-json-path>;

# Production Environment

npx aws-cloudformation-sdk region=<region> stackName=<stack-name> accessKeyID=<access-key-id> secretAccessKey=<secret-access-key> templateFilePath=<template-file-path> config=<optional-config-overrider-json-path>;
```
