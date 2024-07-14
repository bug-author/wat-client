import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { polygonAmoyTestnet } from "./chain";

export default function RainbowkitProvider({
  children,
}: React.PropsWithChildren) {
  const { chains, publicClient } = configureChains(
    [polygonAmoyTestnet],
    [publicProvider()]
  );

  const { connectors } = getDefaultWallets({
    appName: "Web Archiver dApp",
    projectId: import.meta.env.VITE_PROJECT_ID as string,
    chains,
  });

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
  });
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
    </WagmiConfig>
  );
}
