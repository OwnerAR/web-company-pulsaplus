import type { Metadata } from "next";
import { HargaClient } from "@/components/sections/HargaClient";

export const metadata: Metadata = {
  title: 'Harga',
};

export default function HargaPage() {
  return <HargaClient />;
}
