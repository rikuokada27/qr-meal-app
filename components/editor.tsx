"use client";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { postPatchSchema, postPatchSchemaType } from "@/lib/validations/post";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { Icon } from "./icon";
import { Input } from "@/components/ui/input";
import { useLoadGoogleMaps } from "@/hooks/useLoadGoogleMaps";

interface EditorProps {
  post: {
    id: string;
    title: string;
    published: boolean;
    address: string;
    genre?: "CHINESE" | "JAPANESE" | "WESTERN" | "ITALIAN" | "FRENCH" | "SEAFOOD" | "BBQ" | "SUSHI" | "OTHER";
  };
}

export default function Editor({ post }: EditorProps) {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [marker, setMarker] = useState<google.maps.Marker | null>(null);
  const isGoogleMapsLoaded = useLoadGoogleMaps(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!);

  const genreMapping: Record<string, postPatchSchemaType["genre"]> = {
    "中華": "CHINESE",
    "日本食": "JAPANESE",
    "洋食": "WESTERN",
    "イタリアン": "ITALIAN",
    "フレンチ": "FRENCH",
    "海鮮": "SEAFOOD",
    "焼肉": "BBQ",
    "寿司": "SUSHI",
    "その他": "OTHER",
  };

  const { register, handleSubmit, watch, setValue } = useForm<postPatchSchemaType>({
    resolver: zodResolver(postPatchSchema),
    defaultValues: {
      title: post ? (post.title !== "Untitled Post" ? post.title : "") : "",
      address: post.address,
      genre: post.genre || undefined, // genreが設定されていない場合はundefined
    },
  });

  // 初期レンダリング時に地図を設定し、住所がある場合にその場所に地図を移動
  useEffect(() => {
    if (isGoogleMapsLoaded && !map) {
      const mapOptions = {
        center: { lat: 35.681236, lng: 139.767125 }, // 東京駅をデフォルトに
        zoom: 15,
      };
      const mapElement = document.getElementById("map") as HTMLElement;
      const newMap = new google.maps.Map(mapElement, mapOptions);
      setMap(newMap);
    }
  }, [isGoogleMapsLoaded, map]);

  useEffect(() => {
    // 地図が初期化され、post.addressが存在する場合にその住所を地図上に設定
    if (map && post.address) {
      updateMapLocation(post.address);
    }
  }, [map, post.address]);

  const updateMapLocation = async (address: string) => {
    if (!map || !window.google) return;

    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === "OK" && results && results[0]) {
        const location = results[0].geometry.location;
        map.setCenter(location);
        if (marker) {
          marker.setPosition(location);
        } else {
          const newMarker = new google.maps.Marker({
            map,
            position: location,
          });
          setMarker(newMarker);
        }
      } else {
        toast({
          title: "住所が見つかりませんでした。",
          description: "住所を確認してください。",
          variant: "destructive",
        });
      }
    });
  };

  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedJapaneseGenre = e.target.value;
    const mappedGenre = genreMapping[selectedJapaneseGenre];
    setValue("genre", mappedGenre); // react-hook-formのセットメソッドでgenreの値を設定
  };

  const genre = watch("genre"); // watchで現在のgenreの値を取得

  const onSubmit = async (data: postPatchSchemaType) => {
    setIsSaving(true);
    try {
      const response = await fetch(`/api/posts/${post.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: data.title,
          address: data.address,
          genre: data.genre,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Failed to save post:", errorData);
        return toast({
          title: "問題が発生しました。",
          description: "記事が保存されませんでした。もう一度お試しください。",
          variant: "destructive",
        });
      }

      toast({
        description: "正常に保存されました。",
      });

      router.push("/dashboard");
    } catch (error) {
      console.error("Unexpected error:", error);
      toast({
        title: "エラーが発生しました。",
        description: "保存に失敗しました。",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const address = watch("address");
  useEffect(() => {
    if (address) updateMapLocation(address);
  }, [address]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-6 pt-6 pb-6 max-w-4xl mx-auto">
        <div>
          <label htmlFor="title" className="block">店名</label>
          <Input
            id="title"
            {...register("title", { required: true })}
            placeholder="店名を入力"
            autoComplete="off"
          />
        </div>

        <div>
          <label htmlFor="genre" className="block">ジャンル</label>
          <select
            id="genre"
            className="w-full p-2 border rounded-md"
            onChange={handleGenreChange}
            value={Object.keys(genreMapping).find(key => genreMapping[key] === genre) || ""}
          >
            <option value="">ジャンルを選択してください</option>
            <option value="中華">中華</option>
            <option value="日本食">日本食</option>
            <option value="洋食">洋食</option>
            <option value="イタリアン">イタリアン</option>
            <option value="フレンチ">フレンチ</option>
            <option value="海鮮">海鮮</option>
            <option value="焼肉">焼肉</option>
            <option value="寿司">寿司</option>
            <option value="その他">その他</option>
          </select>
          <input type="hidden" {...register("genre", { required: true })} />
        </div>

        <div>
          <label htmlFor="address" className="block">住所</label>
          <Input
            id="address"
            {...register("address", { required: true })}
            placeholder="住所を入力"
            autoComplete="off"
          />
        </div>

        <div id="map" style={{ width: "100%", height: "400px" }} className="rounded-lg shadow-md"></div>

        <div className="flex w-full items-center justify-center pt-6">
          <button
            className={cn(
              buttonVariants(),
              "px-4 py-2 sm:px-10 sm:py-4 lg:px-14 lg:py-6",
              "text-sm sm:text-base lg:text-lg",
              "w-full sm:w-auto"
            )}
            type="submit"
            disabled={isSaving}
          >
            {isSaving && <Icon.spinner className="w-4 h-4 mr-2 animate-spin" />}
            <span>保存</span>
          </button>
        </div>
      </div>
    </form>
  );
}