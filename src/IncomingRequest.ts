import type { DefaultHeaders, DefaultParams, DefaultSearchParams, IncomingRequestMethod } from "./types";
import type { IncomingRequestUrl } from "./IncomingRequestUrl";

export class IncomingRequest<
    Params = DefaultParams,
    SearchParams = DefaultSearchParams,
    Headers = DefaultHeaders,
    Body = unknown
> {

    public _url: IncomingRequestUrl = null!;
    public get url() {
        return this._url;
    }

    public transformUrl<P, SP>(
        transformer: (__url: IncomingRequestUrl<Params, SearchParams>) => IncomingRequestUrl<P, SP>
    ): IncomingRequest<P, SP, Headers, Body> {
        this._url = transformer(this._url as any) as any;

        return this as unknown as IncomingRequest<P, SP, Headers, Body>;
    }


    private readonly _method: IncomingRequestMethod = null!;
    public get method() {
        return this._method;
    }


    private _headers: any = {};
    public get headers() {
        return this._headers as Headers;
    }

    public transformHeaders<T>(newHeaders: T): IncomingRequest<T, Body> {
        this._headers = newHeaders;

        return this as unknown as IncomingRequest<T, Body>;
    }


    private _body: any = {};
    public get body() {
        return this._body as Body;
    }

    public transformBody<T>(newBody: T): IncomingRequest<Headers, T> {
        this._body = newBody;

        return this as unknown as IncomingRequest<Headers, T>;
    }


    constructor(
        url: IncomingRequestUrl,
        method: IncomingRequestMethod,
        headers: Headers,
        body: Body
    ) {
        this._url = url;
        this._method = method;
        this._headers = headers;
        this._body = body;
    }

}