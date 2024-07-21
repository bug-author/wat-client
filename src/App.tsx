import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function App() {
  const onVerify = async (token: string) => {
    // verify token and send cache key to backend
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/verify-captcha`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
          cacheKey: filename,
        }),
      }
    );

    if (res.status === 201) {
      toast.success("Archive Created!");
    } else {
      toast.error("Something went wrong!");
    }
  };

  const { filename } = useParams();

  return (
    <main className="mt-20 flex min-h-screen w-screen flex-col items-center justify-start">
      <p className="bg-red-500">Hi</p>
      <HCaptcha
        sitekey={import.meta.env.VITE_HCAPTCHA_SITE_KEY}
        onVerify={onVerify}
      />
    </main>
  );
}
