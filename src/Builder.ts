import type { IncomingRequestContentType } from "./types";
import type { Middleware } from "./Middleware";
import type { IncomingRequest } from "./IncomingRequest";

export class Builder<IR extends IncomingRequest> {

    private _contentType: IncomingRequestContentType = null!;
    private _middlewares: Middleware<any, any>[] = [];


    public mw<
        InIR extends IncomingRequest,
        Out extends IncomingRequest | unknown // Response
    >(middleware: Middleware<InIR, Out>) {
        this._middlewares.push(middleware);

        return this as Builder<Out>;
    }


    constructor(__contentType: IncomingRequestContentType) {
        this._contentType = __contentType;
    }

}