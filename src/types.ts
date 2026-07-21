import type { IncomingRequest } from "./IncomingRequest";

export type IncomingRequestMethod =
    "get" |
    "head" |
    "post" |
    "put" |
    "delete" |
    "connect" |
    "options" |
    "trace" |
    "patch";

export type IncomingRequestContentTypeMap = {
    json: Awaited<ReturnType<Request["json"]>>;
    blob: Awaited<ReturnType<Request["blob"]>>;
    bytes: Awaited<ReturnType<Request["bytes"]>>;
    text: Awaited<ReturnType<Request["text"]>>;
    arrayBuffer: Awaited<ReturnType<Request["arrayBuffer"]>>;
    formData: Awaited<ReturnType<Request["formData"]>>;
};

export type IncomingRequestContentType = keyof IncomingRequestContentTypeMap;

export type DefaultParams = Record<string, string | string[]>;

export type DefaultSearchParams = Record<string, string | string[]>;

export type DefaultHeaders = Record<string, string>;

export type MiddlewareFunction<
    InIR extends IncomingRequest,
    Out extends IncomingRequest | unknown // Response
> =
    (ir: InIR) =>
        IncomingRequest |
        unknown // Response;
// Out extends IncomingRequest ? IncomingRequest : null