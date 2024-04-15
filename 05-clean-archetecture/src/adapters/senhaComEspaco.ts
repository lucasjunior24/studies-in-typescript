import { ProvedorCriptografia } from "../app/ports/provedorCriptografia";

export class SenhaComEspaco implements ProvedorCriptografia {
  criptografar(password: string): string {
    return password.split("").join(" ");
  }
  comparar(password: string, passwordCriptografada: string): boolean {
    return this.criptografar(password) === passwordCriptografada;
  }
}
