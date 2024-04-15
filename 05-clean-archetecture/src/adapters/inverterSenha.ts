import { ProvedorCriptografia } from "../app/ports/provedorCriptografia";

export class InverterSenha implements ProvedorCriptografia {
  criptografar(password: string): string {
    return password.split("").reverse().join("");
  }
  comparar(password: string, passwordCriptografada: string): boolean {
    return this.criptografar(password) === passwordCriptografada;
  }
}
