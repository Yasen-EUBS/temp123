import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const SERVICES = [
  {
    slug: "pogrebenie",
    name: "Погребение",
    url: "https://kiparisbg.com/pogrebenie",
    description:
      "Пълна организация на достойно погребение в София — транспорт, ковчег, ритуал, документация.",
  },
  {
    slug: "kremacia",
    name: "Кремация",
    url: "https://kiparisbg.com/kremacia",
    description: "Кремация в София с пълно съдействие по документи и урна.",
  },
  {
    slug: "prevoz-na-pokoinik",
    name: "Превоз на покойник",
    url: "https://kiparisbg.com/prevoz-na-pokoinik",
    description:
      "Денонощен превоз на покойник в страната и международно репатриране от/до България.",
  },
  {
    slug: "nadgrobni-pametnici",
    name: "Надгробни паметници",
    url: "https://kiparisbg.com/nadgrobni-pametnici",
    description: "Изработка и монтаж на надгробни паметници от гранит и мрамор.",
  },
  {
    slug: "traurni-stoki",
    name: "Траурни стоки",
    url: "https://kiparisbg.com/traurni-stoki",
    description: "Ковчези, венци, кръстове и траурни аксесоари.",
  },
] as const;

export default defineTool({
  name: "list_services",
  title: "List funeral services",
  description:
    "List the funeral services offered by Кипарис 2000 (погребение, кремация, репатриране, паметници, траурни стоки) with URLs and short descriptions.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(SERVICES, null, 2) }],
    structuredContent: { services: SERVICES },
  }),
});