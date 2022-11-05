import { Actor, ActorSubclass, HttpAgent, Identity } from '@dfinity/agent';
import { Principal } from '@dfinity/principal';
import { IDL } from '@dfinity/candid';
import fetch from 'node-fetch';

export type ActorOptions = {
  canisterId: string,
  canisterIdlFactory: IDL.InterfaceFactory,
  identity?: Identity,
  isLocal?: boolean,
}

export const getActor = async <T>(options: ActorOptions): Promise<ActorSubclass<T>> => {

  const agent = new HttpAgent({
    fetch: fetch as any,
    host: options.isLocal ? 'http://localhost:8000' : 'https://boundary.ic0.app',
    identity: options.identity,
  });

  if (options.isLocal) {
    agent.fetchRootKey();
  }

  const actor: ActorSubclass<T> = Actor.createActor(options.canisterIdlFactory, {
    agent,
    canisterId: Principal.fromText(options.canisterId),
  });

  return actor;
}
