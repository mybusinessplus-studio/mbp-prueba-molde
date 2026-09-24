import { useState } from "react";

// Fallo provocado: un hook de React dentro de una función normal y de un if.
export function calcular(activo: boolean) {
  if (activo) {
    const [valor] = useState(0);
    return valor;
  }
  return 0;
}
