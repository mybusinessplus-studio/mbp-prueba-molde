import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import axe from "axe-core";
import Inicio from "@/app/page";

afterEach(cleanup);

describe("Página de inicio", () => {
  it("tiene un único h1", () => {
    render(<Inicio />);
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  });

  it("no tiene fallos de accesibilidad detectables automáticamente", async () => {
    const { container } = render(<Inicio />);
    // jsdom no calcula colores: el contraste se revisa con Lighthouse y a mano.
    const resultado = await axe.run(container, { rules: { "color-contrast": { enabled: false } } });
    expect(resultado.violations.map((v) => v.id)).toEqual([]);
  });
});
