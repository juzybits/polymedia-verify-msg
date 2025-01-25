# polymedia-verify-msg

CLI tool to verify Sui personal message signatures.

## Installation

```shell
npm install -g @polymedia/verify-msg
# or
pnpm add -g @polymedia/verify-msg
```

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

## Example

```shell
polymedia-verify-msg \
    -m "Hello Sui" \
    -a "0x9859bde15e867d37256aa080b5d092a2ed09347601ebc751c4478cf26f882bea" \
    -s "ACUqih6ukoYyYmAqJ3mE9Yy0XxvnvOQuTKUumE1mOwfAcMIJWpsIcoU/1Jaij2ywjbMvik+NWUeRBPvg2HHYGQs7AdEIr//TRcmBsxmWwuzr9KVoj/MN1Vw+eHF1eqmckg=="
```

## Output Format

Success (exit code 0):
```json
{
    "success": true
}
```

Error (exit code 1):
```json
{
    "success": false,
    "error": "Signature is not valid for the provided message"
}
```

## Related Links

- [Signing messages](https://sdk.mystenlabs.com/dapp-kit/wallet-hooks/useSignPersonalMessage)
- [Verifying signatures](https://github.com/MystenLabs/ts-sdks/blob/main/packages/typescript/src/verify/verify.ts)
