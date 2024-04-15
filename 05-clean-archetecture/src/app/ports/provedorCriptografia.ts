export interface ProvedorCriptografia {
  criptografar(password: string): string;
  comparar(password: string, passwordCriptografada: string): boolean;
}
