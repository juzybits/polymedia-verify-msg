import { verifyPersonalMessageSignature } from '@mysten/sui/verify';
import { Command } from 'commander';

const program = new Command();

program
    .name('verify')
    .description('Verify a Sui personal message signature')
    .requiredOption('-m, --message <string>', 'message that was signed')
    .requiredOption('-a, --address <string>', 'signer address')
    .requiredOption('-s, --signature <string>', 'signature to verify');

program.parse();

const { message, address, signature } = program.opts();

(async () => {
    try {
        const result = await verifyPersonalMessageSignature(
            new TextEncoder().encode(message),
            signature,
            { address }
        );
        console.log(result); // success
    } catch (error) {
        // something went wrong:
        // - "Signature is not valid for the provided address"
        // - "Signature is not valid for the provided message"
        // - "Unsupported signature scheme"
        // - "The string to be decoded is not correctly encoded"
        // - "Unsupported signature scheme"
        throw error;
    }
})();
