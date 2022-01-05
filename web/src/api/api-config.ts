"use strict";

import { extend } from 'umi-request';

const apiRequest = (host: string) => extend({
    prefix: host,
    timeout: 30000,
});

export default apiRequest;