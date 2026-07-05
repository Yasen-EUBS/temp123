import { defineTool } from "@lovable.dev/mcp-js";

const CONTACT = {
  name: "Траурна агенция Кипарис 2000",
  focus: "Международно репатриране и денонощни траурни услуги",
  phone: "02 846 55 24",
  phoneE164: "+35928465524",
  email: "kiparis2000@abv.bg",
  address: "1505 София, Район Оборище, ул. „Мърфи“ № 28, България",
  hours: "Денонощно, 7 дни в седмицата",
  website: "https://kiparisbg.com",
  serviceAreas: [
    "София Център",
    "Район Оборище",
    "Подуяне",
    "Гробищен парк Малашевци",
    "Бакърена фабрика",
    "Централни софийски гробища",
  ],
};

export default defineTool({
  name: "get_contact_info",
  title: "Get contact information",
  description:
    "Return contact details for Траурна агенция Кипарис 2000: 24/7 phone line, email, Sofia address, and served districts/cemeteries.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(CONTACT, null, 2) }],
    structuredContent: CONTACT,
  }),
});