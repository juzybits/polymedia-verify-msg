import { verifyPersonalMessageSignature } from '@mysten/sui/verify';

// TODO read from stdin
const message = "Hello Sui!";
const address = "0x9859bde15e867d37256aa080b5d092a2ed09347601ebc751c4478cf26f882bea";
const signature = "AK8wR2Yv/Rf8YVFSAXIHNVPjOHfRiM88fi4lKyEtWBbyz8sui8gIlIPZAPhk/nnuAV6J1FWdTcVDEL1YlK08XAM7AdEIr//TRcmBsxmWwuzr9KVoj/MN1Vw+eHF1eqmckg==";

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
