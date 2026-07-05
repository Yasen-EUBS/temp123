import { defineMcp } from "@lovable.dev/mcp-js";
import listServicesTool from "./tools/list-services";
import getContactInfoTool from "./tools/get-contact-info";
import convertPriceTool from "./tools/convert-price";

export default defineMcp({
  name: "kiparis-2000-mcp",
  title: "Кипарис 2000 — Траурна агенция",
  version: "0.1.0",
  instructions:
    "Tools for Траурна агенция Кипарис 2000 (Sofia, Bulgaria). Use `list_services` to discover funeral services and their URLs, `get_contact_info` for the 24/7 phone line and Sofia address, and `convert_price` to convert amounts between BGN and EUR at the fixed 1.95583 rate.",
  tools: [listServicesTool, getContactInfoTool, convertPriceTool],
});