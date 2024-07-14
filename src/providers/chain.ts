import { type Chain } from "viem";

export const polygonAmoyTestnet = {
  id: 80_002,
  name: "Amoy Testnet",
  network: "",
  nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://www.oklink.com/amoy"] },
    public: { http: ["https://www.oklink.com/amoy"] },
  },
} as const satisfies Chain;
