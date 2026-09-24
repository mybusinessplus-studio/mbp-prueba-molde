import { describe, expect, it } from "vitest";
import { serializarJsonLd } from "@/components/json-ld";

describe("serializarJsonLd", () => {
  it("escapa '<' para impedir cerrar la etiqueta script", () => {
    const salida = serializarJsonLd({ name: "</script><script>alert(1)</script>" });
    expect(salida).not.toContain("<");
    expect(JSON.parse(salida)).toEqual({ name: "</script><script>alert(1)</script>" });
  });
});
