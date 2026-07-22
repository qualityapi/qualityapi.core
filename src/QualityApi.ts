import { Middleware } from "./Middleware";
import type { IncomingRequest } from "./IncomingRequest";
import type { IncomingRequestContentType, IncomingRequestContentTypeMap, MiddlewareFunction } from "./types";
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

    export function initBuilder<T extends IncomingRequestContentType | undefined | null>(contentType?: T) {
        return new Builder<
            unknown,
            unknown,
            unknown,
            T extends IncomingRequestContentType
                ? IncomingRequestContentTypeMap[T]
                : unknown
        >(contentType);
    }

    export function respond(
        body: ConstructorParameters<typeof Response>[0],
        init: ConstructorParameters<typeof Response>[1]
    ) {
        return new Response(body, init);
    }

}

export default QualityApi;