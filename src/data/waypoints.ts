export interface WaypointConfig {
  id: number;
  tileX: number;
  tileY: number;
  npcId: string;
  slideId: string;
  greeting: string;
  travelTime: number; // in ms
}

// 9 coordinates provided by the user
export const WAYPOINTS_CONFIG: WaypointConfig[] = [
  {
    id: 0,
    tileX: 53,
    tileY: 47,
    npcId: "npc_0",
    slideId: "slide_0",
    greeting: "¡Hola! Bienvenidos a UGPPIENSA.",
    travelTime: 2000,
  },
  {
    id: 1,
    tileX: 74,
    tileY: 38,
    npcId: "npc_1",
    slideId: "slide_1",
    greeting: "El problema es evidente...",
    travelTime: 3000,
  },
  {
    id: 2,
    tileX: 82,
    tileY: 19,
    npcId: "npc_2",
    slideId: "slide_2",
    greeting: "Esta es nuestra solución.",
    travelTime: 3500,
  },
  {
    id: 3,
    tileX: 65,
    tileY: 9,
    npcId: "npc_3",
    slideId: "slide_3",
    greeting: "Así construimos el sistema.",
    travelTime: 3000,
  },
  {
    id: 4,
    tileX: 40,
    tileY: 9,
    npcId: "npc_4",
    slideId: "slide_4",
    greeting: "Te muestro cómo diseñamos el piloto.",
    travelTime: 3500,
  },
  {
    id: 5,
    tileX: 10,
    tileY: 17,
    npcId: "npc_5",
    slideId: "slide_5",
    greeting: "Mira estos resultados de bienestar.",
    travelTime: 4000,
  },
  {
    id: 6,
    tileX: 24,
    tileY: 31,
    npcId: "npc_6",
    slideId: "slide_6",
    greeting: "Hablemos de conocimiento...",
    travelTime: 3000,
  },
  {
    id: 7,
    tileX: 47,
    tileY: 31,
    npcId: "npc_7",
    slideId: "slide_7",
    greeting: "La participación fue increíble.",
    travelTime: 3000,
  },
  {
    id: 8,
    tileX: 42,
    tileY: 48,
    npcId: "npc_8",
    slideId: "slide_8",
    greeting: "En conclusión...",
    travelTime: 3500,
  }
];
