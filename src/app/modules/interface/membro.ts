import { Foto } from "./foto"

export interface Membro {
  usuario_id: number
  usuario_nome: string
  usuario_sobrenome: string
  idade: number
  fotoUrl: string
  conhecidoComo: string
  created: Date
  primeiroLogin: Date
  genero: string
  introducao: string
  interesses: string
  procurandoPor: string
  cidade: string
  pais: string
  fotos: Foto[]
}

