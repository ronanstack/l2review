import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private apiUrl = 'http://localhost:5000/';  // Flask API
    private analyzeURL = this.apiUrl + 'process_text' // Analyze user input
    private respondURL = this.apiUrl + 'respond' // Respond to user input

    constructor(private http: HttpClient) {}

    getWelcomeMsg(): Observable<any> {
        return this.http.get(`${this.apiUrl}`);
    }

    // API call to receive feedback on user input
    analyzeUserInput(lang: string, text: string): Observable<any> {
        const data = { lang, text };
        return this.http.post(this.analyzeURL, data);
    }

    // API call to generate an appropriate response
    respondToInput(lang: string, text: string): Observable<any> {
        const data = { lang, text };
        return this.http.post(this.respondURL, data);
    }
}