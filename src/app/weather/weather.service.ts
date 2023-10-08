import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getweather(city: string, units: string) {

    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=97225b364dd70cd3b1660906c5ef560a&units=' + units);
  }
}
