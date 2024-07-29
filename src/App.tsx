import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function App() {
  const onVerify = async (token: string) => {
    // verify token and send cache key to backend
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token,
        cacheKey,
      }),
    });

    const resJson = await res.json();
    if (res.status === 201) {
      setShowTxData(true);
      setTxData({
        transactionHash: resJson.transactionHash,
        nftUrl: resJson.nftUrl,
      });
      toast.success("Archive Created!");
    } else if (res.status === 406) {
      toast.error(
        "Verification timed out, please try again by capturing a screenshot."
      );
    } else {
      toast.error("Something went wrong, please try again!");
    }
  };

  const { cacheKey } = useParams();

  const [showTxData, setShowTxData] = useState(false);
  const [txData, setTxData] = useState({
    transactionHash: "",
    nftUrl: "",
  });

  return (
    <main className="mt-20 flex h-screen w-screen flex-col items-center justify-start">
      <HCaptcha
        sitekey={import.meta.env.VITE_HCAPTCHA_SITE_KEY}
        onVerify={onVerify}
      />

      {showTxData && (
        <div className="text-center m-20 text-gray-100 flex flex-col items-start space-y-4">
          <div className="flex font-bold gap-2">
            Transaction Hash:
            <a
              href={`https://amoy.polygonscan.com/tx/${txData.transactionHash}`}
              target="_blank"
            >
              <p className="hover:underline text-indigo-300">
                {txData.transactionHash}
              </p>
            </a>
          </div>

          <div className="flex font-bold gap-2">
            NFT URL:
            <a href={txData.nftUrl} target="_blank">
              <span className="hover:underline text-indigo-300">
                {txData.nftUrl}
              </span>
            </a>
          </div>
          <p className="text-yellow-400 text-sm">
            (It might take some time for NFT to be stored and show up)
          </p>
        </div>
      )}
    </main>
  );
}
