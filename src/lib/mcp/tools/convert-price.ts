import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const RATE = 1.95583;

export default defineTool({
  name: "convert_price",
  title: "Convert BGN ↔ EUR",
  description:
    "Convert a price between Bulgarian lev (BGN) and euro (EUR) using the fixed rate 1 EUR = 1.95583 BGN. Rounded to the nearest whole unit, matching how prices are displayed on the site.",
  inputSchema: {
    amount: z.number().positive().describe("Numeric amount to convert."),
    from: z.enum(["BGN", "EUR"]).describe("Source currency."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ amount, from }) => {
    const to = from === "BGN" ? "EUR" : "BGN";
    const converted = from === "BGN" ? amount / RATE : amount * RATE;
    const rounded = Math.round(converted);
    const result = {
      input: { amount, currency: from },
      output: { amount: rounded, currency: to },
      rate: RATE,
      note: "Крайна цена без скрити такси",
    };
    return {
      content: [
        {
          type: "text",
          text: `${amount} ${from} ≈ ${rounded} ${to} (курс 1 EUR = ${RATE} BGN)`,
        },
      ],
      structuredContent: result,
    };
  },
});