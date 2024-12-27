import { clusterApiUrl, PublicKey } from "@solana/web3.js";
import {idl} from "./soundhaven";

export const SOLANA_HOST = clusterApiUrl("devnet");

export const SOUNDHAVEN_ID = new PublicKey("5MF2gLKg9fYnqrRecgirt9g34Kg26xzAoH1QyhNDQPfG");

export const SOUNDHAVEN_IDL = idl;

