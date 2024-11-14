// hooks/useLoadGoogleMaps.ts
import { useEffect, useState } from "react";

let googleMapsScriptPromise: Promise<void> | null = null;

const loadGoogleMapsScript = (apiKey: string): Promise<void> => {
  if (googleMapsScriptPromise) {
    return googleMapsScriptPromise;
  }

  googleMapsScriptPromise = new Promise((resolve, reject) => {
    // Google Maps APIが既に読み込まれている場合は、すぐに解決
    if (typeof window !== "undefined" && window.google && window.google.maps) {
      resolve();
      return;
    }

    // 既にスクリプトタグが存在するか確認し、存在しなければ追加
    let script = document.querySelector(`script[src*="maps.googleapis.com/maps/api/js"]`) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = () => resolve();
      script.onerror = (error) => {
        googleMapsScriptPromise = null; // エラー時は再度読み込み可能にする
        reject(error);
      };
      document.head.appendChild(script);
    } else if (script.onload) {
      // スクリプトがすでに読み込み中または完了した場合の処理
      script.onload = () => resolve();
    } else {
      // スクリプトが読み込み済みの場合
      resolve();
    }
  });

  return googleMapsScriptPromise;
};

export const useLoadGoogleMaps = (apiKey: string) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    loadGoogleMapsScript(apiKey)
      .then(() => setIsLoaded(true))
      .catch((error) => console.error("Google Maps API の読み込みに失敗しました:", error));
  }, [apiKey]);

  return isLoaded;
};