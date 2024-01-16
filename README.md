# AWS SDK FOR CREATING CLIENT CLOUDFORMATION

## Overview

Effortlessly Create and Manage AWS CloudFormation Stacks Using Node.js

aws-client-cloudformation-invisinet empowers you to directly create and manage AWS CloudFormation stacks from your Node.js environment, streamlining infrastructure provisioning and automation. It offers:

- Direct Stack Creation: Conveniently create stacks without manual AWS Console interactions.
- Streamlined Automation: Integrate stack management seamlessly into your Node.js workflows.
- Flexible Deployment: Choose between local installation or global execution via npx.
- Secure Credentials Handling: Supports secure storage and retrieval of AWS credentials.
- Customizable Configuration: Override default settings for specific needs.
- Public Availability: Readily accessible through npm for effortless integration.

Key Features:

- Simple command-line interface for stack creation and management.
- Support for AWS credentials through environment variables or configuration files.
- Ability to specify CloudFormation template files and optional configuration overrides.
- Clear output for tracking stack creation progress and status.

## Installation

**Prerequisites:** `Node.js (LTS)`

Installation steps:

```SH
# Using npx
npx aws-client-cloudformation-invisinet region=<val> stackName=<val> accessKeyID=<val> secretAccessKey=<val> templateFilePath=<path> config=<path>;
```

<!-- ## Usage -->

## Examples

```SH
# Using npx
npx aws-client-cloudformation-invisinet region=us-east-x stackName=test-stack-1 accessKeyID=S0M3ENCRYTEDV4LU3 secretAccessKey=S3CR3TACC355K3YV4LU3H4SH templateFilePath=C://Users/<username>/stack.template.yaml config=C://Users/<username>/override-template.json;
```

## Contributing

No Contributions Allowed. But You can fork 👍.

## License

[ISC](/LICENSE)
