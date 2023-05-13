import { Injectable } from "@angular/core";

@Injectable()
export class SettingsService{
    getBaseUrl(): string{
        return 'http://localhost:3000/api';
    }
}