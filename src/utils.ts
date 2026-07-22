import type { IncomingRequestContentType, IncomingRequestContentTypeMap } from "./types";

export async function parseRequestBodyByContentType<CT extends IncomingRequestContentType>(
    request: Request,
    contentType: CT
): Promise<IncomingRequestContentTypeMap[CT]> {
    return request[contentType]();
}