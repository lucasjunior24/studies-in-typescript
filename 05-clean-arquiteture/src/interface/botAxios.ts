export interface IBotAxios {
  insert<T>(item: T): T;

  get<T>(id: string): Promise<T>;
  post<T>(item: T): Promise<T>;
}
