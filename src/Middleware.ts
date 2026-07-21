import type { IncomingRequest } from "./IncomingRequest";
import type { MiddlewareFunction } from "./types";

export class Middleware<
    InIR extends IncomingRequest,
    Out extends IncomingRequest | unknown // Response
> {

    private readonly _middlewareFunction: MiddlewareFunction<InIR, Out> = null!;
    public get middlewareFunction() {
        return this._middlewareFunction;
    }


    constructor(__middlewareFunction: MiddlewareFunction<InIR, Out>) {
        this._middlewareFunction = __middlewareFunction;
    }

}