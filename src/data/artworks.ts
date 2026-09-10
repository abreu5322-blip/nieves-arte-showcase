import P0017 from "@/assets/P0017.jpg";
import P0018 from "@/assets/P0018.jpg";
import P0019 from "@/assets/P0019.jpg";
import P0020 from "@/assets/P0020.jpg";
import P0022 from "@/assets/P0022.jpg";
import P0023 from "@/assets/P0023.jpg";
import P0024 from "@/assets/P0024.jpg";
import P0025 from "@/assets/P0025.jpg";
import P0026 from "@/assets/P0026.jpg";
import P0027 from "@/assets/P0027.jpg";
import P0028 from "@/assets/P0028.jpg";
import P0029 from "@/assets/P0029.jpg";
import P0030 from "@/assets/P0030.jpg";
import P0031 from "@/assets/P0031.jpg";
import P0032 from "@/assets/P0032.jpg";
import P0033 from "@/assets/P0033.jpg";
import P0034 from "@/assets/P0034.jpg";
import P0036 from "@/assets/P0036.jpg";
import P0037 from "@/assets/P0037.jpg";
import P0038 from "@/assets/P0038.jpg";
import P0039 from "@/assets/P0039.jpg";

export interface Artwork {
  id: string;
  title: string;
  year: number;
  technique: string;
  dimensions: string;
  series: string;
  image: string;
  note?: string;
}

export const artworks: Artwork[] = [
  { id: "P0017", title: "Pensamiento disuelto.", year: 2026, technique: "Pintura al óleo sobre madera", dimensions: "60x45 cm.", series: "Óleo", image: "/assets/P0017.jpg" },
  { id: "P0018", title: "Naturaleza reflejada.", year: 2026, technique: "Pintura al óleo sobre madera", dimensions: "60x45 cm.", series: "Óleo", image: "/assets/P0018.jpg" },
  { id: "P0019", title: "Elegancia en mosaico.", year: 2026, technique: "Pintura al óleo sobre madera", dimensions: "60x45 cm.", series: "Óleo", image: "/assets/P0019.jpg" },
  { id: "P0020", title: "El caballo de fuego", year: 2025, technique: "Pintura al óleo sobre madera", dimensions: "60x45 cm.", series: "Óleo", image: "/assets/P0020.jpg" },
  { id: "P0022", title: "Año 3025: Fin del mundo.", year: 2025, technique: "Pintura al óleo sobre madera", dimensions: "60x45 cm.", series: "Óleo", image: "/assets/P0022.jpg" },
  { id: "P0023", title: "Refugio de pétalos.", year: 2025, technique: "Pintura al óleo sobre madera", dimensions: "60x45 cm.", series: "Óleo", image: "/assets/P0023.jpg" },
  { id: "P0024", title: "El beso por Gustav klimt", year: 2026, technique: "Pintura al óleo sobre madera", dimensions: "60x45 cm.", series: "Óleo", image: "/assets/P0024.jpg" },
  { id: "P0025", title: "Simetria botanica", year: 2024, technique: "Pintura acrílica sobre madera", dimensions: "60x90 cm. (Díptico).", series: "Acrílico", image: "/assets/P0025.jpg" },
  { id: "P0026", title: "Atom heart mother", year: 2021, technique: "Pintura al óleo sobre lienzo", dimensions: "34x40 cm.", series: "Óleo", image: "/assets/P0026.jpg" },
  { id: "P0027", title: "Luz residual", year: 2022, technique: "Pintura al óleo sobre lienzo", dimensions: "30x40 cm.", series: "Óleo", image: "/assets/P0027.jpg" },
  { id: "P0028", title: "Umbral cósmico.", year: 2023, technique: "Pintura al óleo sobre madera", dimensions: "60x75 cm.", series: "Óleo", image: "/assets/P0028.jpg" },
  { id: "P0029", title: "Gracias mundo", year: 2026, technique: "Pintura al óleo sobre madera", dimensions: "60x90 cm.", series: "Óleo", image: "/assets/P0029.jpg" },
  { id: "P0030", title: "La ofrenda", year: 2025, technique: "Pintura al óleo sobre madera", dimensions: "60x90 cm. (Díptico).", series: "Óleo", image: "/assets/P0030.jpg" },
  { id: "P0031", title: "Mística moderna.", year: 2026, technique: "Pintura al óleo sobre madera", dimensions: "60x90 cm.", series: "Óleo", image: "/assets/P0031.jpg" },
  { id: "P0032", title: "Contraste vital", year: 2025, technique: "Pintura al óleo sobre madera", dimensions: "60x45 cm.", series: "Óleo", image: "/assets/P0032.jpg" },
  { id: "P0033", title: "El despertar de la diosa verde", year: 2023, technique: "Pintura al óleo sobre madera", dimensions: "50x45 cm.", series: "Óleo", image: "/assets/P0033.jpg" },
  { id: "P0034", title: "Raices del recuerdo", year: 2023, technique: "Pintura al óleo sobre madera", dimensions: "30x40 cm.", series: "Óleo", image: "/assets/P0034.jpg" },
  { id: "P0036", title: "El jardín de las Ias", year: 2025, technique: "Pintura acrílica sobre madera", dimensions: "60x90 cm. (Díptico).", series: "Acrílico", note: "Seleccionada en el Salón Arturo Michelena 2025 en el museo de la cultura de Carabobo.", image: "/assets/P0036.jpg" },
  { id: "P0037", title: "Angel estructural", year: 2026, technique: "Pintura al óleo sobre madera", dimensions: "60x45 cm.", series: "Óleo", image: "/assets/P0037.jpg" },
  { id: "P0038", title: "Luto: Cuando los colores de apagan.", year: 2025, technique: "Pintura acrílica sobre madera", dimensions: "1,20x90 cm.", series: "Acrílico", note: "Seleccionada en el Salón Elsa Morales 2025 en la galería de arte Nacional.", image: "/assets/P0038.jpg" },
  { id: "P0039", title: "Evolución felina.", year: 2022, technique: "Pintura al óleo sobre lienzo", dimensions: "60x80 cm.", series: "Óleo", image: "/assets/P0039.jpg" },
];

export const series = [...new Set(artworks.map((a) => a.series))];
export const years = [...new Set(artworks.map((a) => a.year))].sort((a, b) => b - a);
