export interface Persona {
    nombre: string,
    apellido: string,
    edad: number
}

export function mostrar(p: Persona) {
    console.log(p);
}