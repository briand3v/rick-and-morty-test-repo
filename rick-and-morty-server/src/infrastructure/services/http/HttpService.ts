import axios, {
    AxiosRequestConfig,
    AxiosInstance,
    AxiosError,
    AxiosResponse,
} from 'axios';
import { injectable } from 'inversify';
import { HttpError } from './HttpError';

type IHttpRequest = {
    url: string
    config?: AxiosRequestConfig
    data?: any
}

export interface IHttpService {
    get(request: IHttpRequest): Promise<any>
}

@injectable()
export class HttpService implements IHttpService{
    private axiosService: AxiosInstance;
    constructor(baseUrl: string) {
        this.axiosService = axios.create({
            baseURL: baseUrl,
            headers: { 'Content-Type': 'application/json' },
        });
        this._initializeRequestInterceptor();
        this._initializeResponseInterceptor();
    }

    public async get<T>(
        { url, config }: IHttpRequest,
    ): Promise<any> {
        try {
            const response = await this.axiosService.get<T>(url, config);
            return response;
        } catch (error: any) {
            if (this.isAxiosError(error)) {
                const httpError = error.response
                    ? HttpError.fromStatus(error.response.status, error.message)
                    : HttpError.fromMessage(error.message);

                return httpError;
            }
            throw error;
        }
    }

    private _initializeRequestInterceptor() {
        this.axiosService.interceptors.request.use(this._handleRequest);
    }

    private _initializeResponseInterceptor() {
        this.axiosService.interceptors.response.use(this._handleResponse);
    }

    private _handleRequest(config: AxiosRequestConfig) {
        return config;
    }

    private isAxiosError(error: Error): error is AxiosError {
        return (error as AxiosError).isAxiosError !== undefined;
    }

    private _handleResponse(response: AxiosResponse): AxiosResponse {
        return response;
    }
}