import axios, { AxiosResponse } from 'axios';
import { UserProps } from './User';

export class Sync {
  constructor(public rootUrl: string) {}

  fetch(id: number): void {
    axios.get(`${this.rootUrl}/${id}`).then((response: AxiosResponse) => {
      return response.data;
    });
  }

  save(data: UserProps): void {
    const { id } = data;
    if (id) {
      axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      axios.post(`${this.rootUrl}`, data);
    }
  }
}
