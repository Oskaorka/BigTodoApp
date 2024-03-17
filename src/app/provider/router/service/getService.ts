import httpService from './http.sevice';
import localStorageService from './localStorage.service';

export const getService = {
    get: async () => {
        const {data}  = await httpService.get('planing');
        console.log(data);
        
        return data;
    },
    create: async (payload:any, endPointPath:string) => {
        const  data = await httpService.post(
            endPointPath + payload,
            payload
        );
        // console.log(data);
        return data;
    },
    // getCurrentUser: async () => {
    //     const { data } = await httpService.get(
    //         userEndpoint + localStorageService.getUserId()
    //     );
    //     return data;
    // },
    //   в теле фунции необходимо точку отправки и непосредственно пользователя к замене (взможно ID)
    // update: async (payloadId, endPoint) => {
    //     const { data } = await httpService.patch(
    //         endPoint + payloadId,
    //         // 'planing' + localStorageService.getUserId(),
    //         // userEndpoint + localStorageService.getUserId(),
    //         payloadId
    //     );
    //     return data;
    // }
    removeTask: async (payloadId:any, endPoint: string) => {
        const { data } = await httpService.delete(
            endPoint + payloadId,
            // 'planing' + localStorageService.getUserId(),
            // userEndpoint + localStorageService.getUserId(),
            payloadId
        );
        return data;
    },
    // removeTask: async (payloadId, endPoint) => {
    //     const { data } = await httpService.delete(
    //         endPoint + payloadId,
    //         // 'planing' + localStorageService.getUserId(),
    //         // userEndpoint + localStorageService.getUserId(),
    //         payloadId
    //     );
    //     return data;
    // }
    getComments: async () => {
        const { data } = await httpService.get('coments');
        return data;
    },
    
    logInUsers: async () => {
        const  { data }  = await httpService.get(`users/${localStorageService.getUserId()}`);
        return data
    }
};