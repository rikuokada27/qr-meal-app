// global.d.ts
export {};

declare global {
  interface Window {
    initMap?: () => void; // '?' を追加してオプショナルにする
  }
}