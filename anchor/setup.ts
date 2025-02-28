import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import { Program, web3 } from "@coral-xyz/anchor";
import type { Soundhaven } from "./soundhaven.types";
import soundhaven from "./soundhaven.json";

export const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

export const program = new Program(soundhaven as Soundhaven, {
  connection,
});

export const createUser = async (
  user: PublicKey,
  name: string,
  profileImg: string,
  description: string,
  isArtist: boolean
) => {
  const [userPda] = web3.PublicKey.findProgramAddressSync(
    [Buffer.from("user"), user.toBuffer()],
    program.programId
  );

  const Ix = await program.methods
    .initializeUser(name, profileImg, description, isArtist)
    .accountsPartial({
      user: userPda,
      signer: user,
      systemProgram: web3.SystemProgram.programId,
    })
    .instruction();

  return Ix;
};

export const fetchUser = async (user: PublicKey) => {
  const [userPda] = web3.PublicKey.findProgramAddressSync(
    [Buffer.from("user"), user.toBuffer()],
    program.programId
  );

  const userDetails = await program.account.user.fetch(userPda);

  return userDetails;
};
