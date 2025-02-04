"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CleanUpUrl() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const url = new URL(window.location.href);
    console.log(url)

    // Remove Facebook's `#_=_`
    if (url.hash === "#_=_") {
      url.hash = "";
      window.history.replaceState({}, document.title, url.pathname + url.search);
    }

    // Remove `error=Callback`
    if (url.searchParams.get("error") === "Callback") {
      url.searchParams.delete("error");
      window.history.replaceState({}, document.title, url.pathname + url.search);
    }

    if(url.pathname.includes("api/auth/signin")){
        url.pathname = "auth/signin";
        window.history.replaceState({}, document.title, url.pathname + url.search);
        router.push("/auth/signin");
    }

  }, [router]);

  return null;
}
