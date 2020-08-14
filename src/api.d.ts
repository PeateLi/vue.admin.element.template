import {HttpService} from './api/http';
   
declare module 'vue/types/vue' {
    interface Vue {
        $httpService: HttpService;
    }
}