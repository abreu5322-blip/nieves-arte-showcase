import obra1 from "@/assets/obra-1.jpg";
import obra2 from "@/assets/obra-2.jpg";
import obra3 from "@/assets/obra-3.jpg";
import obra4 from "@/assets/obra-4.jpg";
import obra5 from "@/assets/obra-5.jpg";
import obra6 from "@/assets/obra-6.jpg";
import obra7 from "@/assets/obra-7.jpg";
import obra8 from "@/assets/obra-8.jpg";
import obra9 from "@/assets/obra-9.jpg";
import obra10 from "@/assets/obra-10.jpg";
import obra11 from "@/assets/obra-11.jpg";
import obra12 from "@/assets/obra-12.jpg";

export interface Artwork {
  id: number;
  title: string;
  year: number;
  technique: string;
  dimensions: string;
  series: string;
  image: string;
}

export const artworks: Artwork[] = [
  { id: 1, title: "Tierra Encendida", year: 2024, technique: "Óleo sobre lienzo", dimensions: "120 × 150 cm", series: "Raíces", image: obra1 },
  { id: 2, title: "Corriente Azul", year: 2024, technique: "Acrílico y técnica mixta", dimensions: "100 × 130 cm", series: "Agua", image: obra2 },
  { id: 3, title: "Estructura del Silencio", year: 2023, technique: "Acrílico sobre lienzo", dimensions: "100 × 100 cm", series: "Geometrías", image: obra3 },
  { id: 4, title: "Gesto Rojo", year: 2023, technique: "Tinta y acrílico", dimensions: "150 × 150 cm", series: "Impulso", image: obra4 },
  { id: 5, title: "Neblina Rosa", year: 2023, technique: "Técnica mixta", dimensions: "90 × 120 cm", series: "Agua", image: obra5 },
  { id: 6, title: "Sol Interior", year: 2022, technique: "Óleo y pigmentos", dimensions: "120 × 150 cm", series: "Raíces", image: obra6 },
  { id: 7, title: "Sombra y Luz", year: 2022, technique: "Tinta sobre papel", dimensions: "80 × 100 cm", series: "Impulso", image: obra7 },
  { id: 8, title: "Selva Dorada", year: 2022, technique: "Óleo y pan de oro", dimensions: "130 × 170 cm", series: "Raíces", image: obra8 },
  { id: 9, title: "Cosmos Violeta", year: 2021, technique: "Acrílico y pigmentos metálicos", dimensions: "140 × 140 cm", series: "Geometrías", image: obra9 },
  { id: 10, title: "Paisaje Interno", year: 2021, technique: "Óleo sobre lienzo", dimensions: "100 × 100 cm", series: "Raíces", image: obra10 },
  { id: 11, title: "Horizonte Quieto", year: 2021, technique: "Óleo sobre lienzo", dimensions: "70 × 100 cm", series: "Agua", image: obra11 },
  { id: 12, title: "Flor de Coral", year: 2020, technique: "Acrílico sobre lienzo", dimensions: "110 × 150 cm", series: "Impulso", image: obra12 },
];

export const series = [...new Set(artworks.map((a) => a.series))];
export const years = [...new Set(artworks.map((a) => a.year))].sort((a, b) => b - a);
