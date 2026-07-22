import type { MiddlewareFunction } from "./types";

export class Middleware<
    InParams,
    InSearchParams,
    InHeaders,
    InBody,
    OutParams,
    OutSearchParams,
    OutHeaders,
    OutBody
> {

    private readonly _middlewareFunction: MiddlewareFunction<
        InParams,
        InSearchParams,
        InHeaders,
        InBody,
        OutParams,
        OutSearchParams,
        OutHeaders,
        OutBody
    > = null!;

    public get middlewareFunction() {
        return this._middlewareFunction;
    }


    constructor(__middlewareFunction: MiddlewareFunction<
        InParams,
        InSearchParams,
        InHeaders,
        InBody,
        OutParams,
        OutSearchParams,
        OutHeaders,
        OutBody
    >) {
        this._middlewareFunction = __middlewareFunction;
    }

}