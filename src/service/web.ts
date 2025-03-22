import { IWebInfo } from '@/types/web';
import {commonClient} from './common';

export const getWebInfo = async (hostName: string): Promise<IWebInfo[]> => {
    try {
        const resp = await commonClient(`/api/webs?hostname=` + hostName, 'GET', undefined, true);
        return resp.data;
    } catch (error: any) {
        throw error;
    }
}