import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MultisigFactoryModule = buildModule("MultisigFactoryModule", (m) => {

  const multisigfactory = m.contract("MultisigFactory");

  return { multisigfactory };
});

export default MultisigFactoryModule;