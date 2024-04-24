export default interface CripoProvider {
  exec(senha: string): string;
  compare(password: string, criptoPassord: string): boolean
}