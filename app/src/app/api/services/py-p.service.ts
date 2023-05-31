/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { PyP } from '../models/py-p';

@Injectable({
  providedIn: 'root',
})
export class PyPService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiPyPGet
   */
  static readonly ApiPyPGetPath = '/api/PyP';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPyPGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPyPGet$Plain$Response(params?: {
    Id?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PyP>> {

    const rb = new RequestBuilder(this.rootUrl, PyPService.ApiPyPGetPath, 'get');
    if (params) {
      rb.query('Id', params.Id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PyP>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPyPGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPyPGet$Plain(params?: {
    Id?: string;
  },
  context?: HttpContext

): Observable<PyP> {

    return this.apiPyPGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<PyP>) => r.body as PyP)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPyPGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPyPGet$Json$Response(params?: {
    Id?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PyP>> {

    const rb = new RequestBuilder(this.rootUrl, PyPService.ApiPyPGetPath, 'get');
    if (params) {
      rb.query('Id', params.Id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PyP>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPyPGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPyPGet$Json(params?: {
    Id?: string;
  },
  context?: HttpContext

): Observable<PyP> {

    return this.apiPyPGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<PyP>) => r.body as PyP)
    );
  }

}
