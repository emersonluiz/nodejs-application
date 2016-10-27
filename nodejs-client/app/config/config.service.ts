export class ConfigService {

    private server_domain: string = 'http://localhost:';
    private client_url: string = '3000';

    public clientUrl(): string {
        return this.server_domain + this.client_url;
    }
}