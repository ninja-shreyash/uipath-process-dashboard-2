import { UiPath } from '@uipath/uipath-typescript';

/**
 * Initialized UiPath SDK client
 */
export const uipath = new UiPath({
    baseUrl: 'https://alpha.uipath.com',
    orgName: 'popoc',
    tenantName: 'adetenant',
    secret: 'rt_4B6C71580636B81D5A9C571162352F934A3DD57BF648CCF4043E9E797D8A0DF9-1'
});

export type { UiPath } from '@uipath/uipath-typescript';