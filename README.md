# polymedia-verify-msg

Verify a Sui personal message signature.

Wraps `verifyPersonalMessageSignature()` as a CLI tool.

Signing:
https://sdk.mystenlabs.com/dapp-kit/wallet-hooks/useSignPersonalMessage

Verifying:
https://github.com/MystenLabs/ts-sdks/blob/main/packages/typescript/src/verify/verify.ts

## Usage

```
Usage: polymedia-verify-msg [options]

Verify a Sui personal message signature

Options:
  -m, --message <string>    message that was signed
  -a, --address <string>    signer address
  -s, --signature <string>  signature to verify
  -h, --help                display help for command
```
