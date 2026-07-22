import { Middleware } from "./Middleware";
import type { IncomingRequest } from "./IncomingRequest";
import type { IncomingRequestContentType, MiddlewareFunction } from "./types";
import { Builder } from "./Builder";

namespace QualityApi {

    export function createMiddleware<
        InParams,
        InSearchParams,
        InHeaders,
        InBody,
        OutParams,
        OutSearchParams,
        OutHeaders,
        OutBody
    >(
        mf: MiddlewareFunction<InParams, InSearchParams, InHeaders, InBody, OutParams, OutSearchParams, OutHeaders, OutBody>
    ): Middleware<InParams, InSearchParams, InHeaders, InBody, OutParams, OutSearchParams, OutHeaders, OutBody> {
        return new Middleware<InParams, InSearchParams, InHeaders, InBody, OutParams, OutSearchParams, OutHeaders, OutBody>(mf);
    }

    export function initBuilder(contentType?: IncomingRequestContentType | null) {
        return new Builder(contentType);
    }

    export function respond(
        body: ConstructorParameters<typeof Response>[0],
        init: ConstructorParameters<typeof Response>[1]
    ) {
        return new Response(body, init);
    }

}

export default QualityApi;