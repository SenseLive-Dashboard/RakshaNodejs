import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Emp } from './table';
import * as common from './baseurl'
@Injectable({
  providedIn: 'root'
})
export class PowerService {
  // baseUrlp: string = "http://mayurdafare.ml/APIs/powerf.php";
  // baseUrlc: string = "http://mayurdafare.ml/APIs/current.php";
  // baseUrlv: string = "http://mayurdafare.ml/APIs/voltage.php";
  // baseUrlap: string = "http://mayurdafare.ml/APIs/activepow.php";
  // baseUrlrp: string = "http://mayurdafare.ml/APIs/reactivepow.php";
  // baseUrlapp: string = "http://mayurdafare.ml/APIs/apparentpow.php";

  constructor(private httpClient: HttpClient) { }
  getPowerFactor() {
    return this.httpClient.get<Emp[]>(common.baseURL+'/powerf.php');
  }
  getCurrent() {
    return this.httpClient.get<Emp[]>(common.baseURL+'/current.php');
  }
  getVoltage() {
    return this.httpClient.get<Emp[]>(common.baseURL+'/voltage.php');
  }
  getActivePower() {
    return this.httpClient.get<Emp[]>(common.baseURL+'/activepow.php');
  }
  getReactivePower() {
    return this.httpClient.get<Emp[]>(common.baseURL+'/reactivepow.php');
  }
  getApparentPower() {
    return this.httpClient.get<Emp[]>(common.baseURL+'/apparentpow.php');
  }
}
