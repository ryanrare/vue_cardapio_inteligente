export function itensDeLista1estaoEmLista2(lista1: unknown[], lista2: unknown[]) {
  return lista1.every((intemLista1) => lista2.includes(intemLista1));
}