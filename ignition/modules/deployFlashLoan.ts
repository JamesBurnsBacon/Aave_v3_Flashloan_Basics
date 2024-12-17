// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

//Define the deployment module
const FlashLoanModule = buildModule("FlashLoanModule", (m) => {
  //External addr param, Sepolia
  const poolAddress = "0x012bAC54348C0E635dCAc9D5FB99f06F24136C9A"; //https://aave.com/docs/resources/addresses
  
  //Deploy contract
  const flashLoan = m.contract("FlashLoan", [poolAddress]);

  return { flashLoan }
});

export default FlashLoanModule;
