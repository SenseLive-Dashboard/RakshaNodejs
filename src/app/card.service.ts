import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Emp } from './table';
import * as common from './baseurl'
@Injectable({
  providedIn: 'root'
})
export class CardService {
  // baseUrl: string = "http://mayurdafare.ml/APIs/card.php";
  // baseUrl1: string = "http://mayurdafare.ml/APIs/card1.php";
  // baseUrl2: string = "http://mayurdafare.ml/APIs/card2.php";
  // baseUrl3: string = "http://mayurdafare.ml/APIs/card3.php";
  // baseUrl4: string = "http://mayurdafare.ml/APIs/card4.php";
  // baseUrl5: string = "http://mayurdafare.ml/APIs/card5.php";


  constructor(private httpClient: HttpClient) { }
  get_current_data() {
    return this.httpClient.get<Emp[]>(common.baseURL + '/card.php');
  }
  get_voltage_data() {
    return this.httpClient.get<Emp[]>(common.baseURL + '/card1.php');
  }
  get_powerfactor_data() {
    return this.httpClient.get<Emp[]>(common.baseURL + '/card2.php');
  }
  get_activepower_data() {
    return this.httpClient.get<Emp[]>(common.baseURL + '/card3.php');
  }
  get_reactivepower_data() {
    return this.httpClient.get<Emp[]>(common.baseURL + '/card4.php');
  }
  get_apparentpower_data() {
    return this.httpClient.get<Emp[]>(common.baseURL + '/card5.php');
  }
}
