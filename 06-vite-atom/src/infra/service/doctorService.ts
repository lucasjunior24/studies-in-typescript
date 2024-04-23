import { NewDoctorFormData } from "../../pages/Doctor";
import { DoctorsDTO } from "../../pages/Doctors";

import { BotAxios, IBotAxios } from "./RequestApi";

export class DoctorService {
  constructor(private bot: IBotAxios = new BotAxios()) {}

  private static NAME = "doctors";

  async get(): Promise<DoctorsDTO[]> {
    return await this.bot.get<DoctorsDTO>(`/${DoctorService.NAME}`);
  }

  async post(data: NewDoctorFormData): Promise<NewDoctorFormData[]> {
    return await this.bot.post<NewDoctorFormData>(
      `/${DoctorService.NAME}`,
      data
    );
  }

  static singleton: DoctorService = new DoctorService();
}
