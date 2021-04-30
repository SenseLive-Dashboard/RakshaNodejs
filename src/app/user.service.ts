import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Emp } from './table';
import * as common from './baseurl'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // baseUrl: string = "http://mayurdafare.ml/APIs/table.php"; //table url
  // baseUrl1: string = "http://mayurdafare.ml/APIs/tslive.php"; //live sorting url
  // baseUrl2: string = "http://mayurdafare.ml/APIs/tsminute.php"; //minute sorting url
  // baseUrl3: string = "http://mayurdafare.ml/APIs/tshour.php"; //hour sorting url
  // baseUrl4: string = "http://mayurdafare.ml/APIs/tsday.php"; //day sorting url
  // baseUrl5: string = "http://mayurdafare.ml/APIs/tsweek.php"; //week sorting url
  // baseUrl6: string = "http://mayurdafare.ml/APIs/tsmonth.php"; //month sorting url
  // baseUrl7: string = "http://mayurdafare.ml/APIs/compdrpdwn.php";
  // baseUrl8: string = "http://mayurdafare.ml/APIs/meterndrpdwn.php";
  // baseUrl9: string = "http://mayurdafare.ml/APIs/datatypedrpdwn.php";
  constructor(private httpClient: HttpClient) { }
  get_tableData() {
    return this.httpClient.get<Emp[]>(common.baseURL + "/table.php");
  }
  get_liveData() {
    return this.httpClient.get<Emp[]>(common.baseURL + "/tslive.php");
  }
  get_minuteData() {
    return this.httpClient.get<Emp[]>(common.baseURL + "/tsminute.php");
  }
  get_hourData() {
    return this.httpClient.get<Emp[]>(common.baseURL + "/tshour.php");
  }
  get_dayData() {
    return this.httpClient.get<Emp[]>(common.baseURL + "/tsday.php");
  }
  get_weekData() {
    return this.httpClient.get<Emp[]>(common.baseURL + "/tsweek.php");
  }
  get_monthData() {
    return this.httpClient.get<Emp[]>(common.baseURL + "/tsmonth.php");
  }
  get_companyDrpdwn_data() {
    return this.httpClient.get<Emp[]>(common.baseURL + "/compdrpdwn.php");
  }
  get_meterDrpdwn_data() {
    return this.httpClient.get<Emp[]>(common.baseURL + "/meterndrpdwn.php");
  }
  get_datatypeDrpdwn_data() {
    return this.httpClient.get<Emp[]>(common.baseURL + "/datatypedrpdwn.php");
  }
}
