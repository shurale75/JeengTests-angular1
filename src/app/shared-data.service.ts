import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }

  private data:any = {datatest1: 'dtatatest1', datatest2: 'dtatatest2'};

  setData(data:any){
    this.data = data;
  }

  getData():any{
    return this.data;
  }
}
