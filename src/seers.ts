// Candid/IDL (Interface Definition Language)
// select "Interface tab" - expand "View did file"
// https://icscan.io/canister/b46ia-3qaaa-aaaap-qaaaq-cai

// See: https://github.com/ORIGYN-SA/csm/blob/main/src/methods/identity.ts
//import { getIdentity } from './identity.js';
import { getActor } from './actor.js';

import SeersService from './seers.did.js';
import canisterIdlFactory from './seers-idl.js';


BigInt.prototype["toJSON"] = function () {
  return this.toString();
};

const getFeed = async () => {
  //const pemFile = process.argv[2];
  //const identity = await getIdentity(pemFile);

  const actor = await getActor<SeersService>({
    canisterId: 'b46ia-3qaaa-aaaap-qaaaq-cai',
    canisterIdlFactory,
    /* identity */
  });

  return await actor.getFeed();
}

const feed = await getFeed();
console.log(JSON.stringify(feed, null, 2));

