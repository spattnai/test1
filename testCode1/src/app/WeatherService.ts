import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
  
export class WeatherService {  
    static get parameters() {
        return [[Http]];
    }
  
    constructor(private http:Http) {
         
    }
  
    searchCities(cityName) {
        var url = 'http://api.openweathermap.org/data/2.5/weather?q=&query=' + encodeURI(cityName) + '&api_key=b971cab803e8c55524abde5f9bdcbb37';
        var response = this.http.get(url).map(res => res.json());
        return response;
    }
}