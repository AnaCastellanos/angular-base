import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { AppGlobal } from './../app.global';

import { AuthService } from './../auth/auth.service';

@Injectable()
export class ItemService {

  constructor(private httpClient: HttpClient,
              private authService: AuthService,
              private appGlobal: AppGlobal) {}

  listItems(queryParams: any) {
    let headers = this.authService.getGlobalHeaders();

    let params = new HttpParams({
      fromObject: queryParams
    })

    return this.httpClient.get(
      `${this.appGlobal.getBaseUrl()}v1/item/`,
      {
        params: params,
        headers: headers
      });
  }

  retrieveItem(id: string) {
    let headers = this.authService.getGlobalHeaders();

    return this.httpClient.get(
      `${this.appGlobal.getBaseUrl()}v1/item/${id}`,
      {
        headers: headers
      });
  }

}
