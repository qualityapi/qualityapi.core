import { Middleware } from "./Middleware";
import type { IncomingRequest } from "./IncomingRequest";
import type { IncomingRequestContentType, MiddlewareFunction } from "./types";
import { Builder } from "./Builder";

namespace QualityApi {

    export function createMiddleware<
        InIR extends IncomingRequest,
        Out extends IncomingRequest | unknown // Response
    >(mf: MiddlewareFunction<InIR, Out>): Middleware<InIR, Out> {
        return new Middleware<InIR, Out>(mf);
    }

    export function initBuilder(contentType: IncomingRequestContentType) {
        return new Builder(contentType);
    }

}

export default QualityApi;