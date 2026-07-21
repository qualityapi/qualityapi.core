import type { IncomingRequestContentType } from "./types";

export class Builder {

    private _contentType: IncomingRequestContentType = null!;

    constructor(__contentType: IncomingRequestContentType) {
        this._contentType = __contentType;
    }

}