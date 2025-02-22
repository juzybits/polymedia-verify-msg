#!/usr/bin/env node

import { verifyPersonalMessageSignature } from "@mysten/sui/verify";
import { Command } from "commander";

import { getVersion } from "./lib/version.js";

type CommandOptions = {
    message: string;
    address: string;
    signature: string;
};

const program = new Command();

program
    .name("polymedia-verify-msg")
    .description("Verify a Sui personal message signature")
    .version(getVersion(), "-v, --version")
    .requiredOption("-m, --message <string>", "message that was signed")
    .requiredOption("-a, --address <string>", "signer address")
    .requiredOption("-s, --signature <string>", "signature to verify");

program.parse();

const { message, address, signature } = program.opts<CommandOptions>();

(async () => {
    try {
        const _pubKey = await verifyPersonalMessageSignature(
            new TextEncoder().encode(message),
            signature,
            { address },
        );
        console.log(JSON.stringify({
            success: true,
        }));
        process.exit(0);
    } catch (error) {
        console.error(JSON.stringify({
            success: false,
            error: error instanceof Error ? error.message : String(error),
        }));
        process.exit(1);
    }
})();
