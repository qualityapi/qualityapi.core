import type { IncomingRequestContentType, IncomingRequestContentTypeMap } from "./types";

export async function parseRequestBodyByContentType<CT extends IncomingRequestContentType>(
    request: Request,
    contentType: CT
): Promise<IncomingRequestContentTypeMap[CT]> {
    return request[contentType]();
}

export function searchParamsToObj(urlsp: URLSearchParams) {
    const result: Record<string, string | string[]> = {};

    for (const k of urlsp.keys()) {
        const v = urlsp.getAll(k);

        result[k] =
            v.length === 1
                ? v[0]
                : v;
    }

    return result;
}