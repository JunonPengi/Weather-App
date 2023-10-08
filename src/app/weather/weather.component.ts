import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
myweather: any;
temperature: number = 0;
max: number = 0;
min: number = 0;
humidity: number = 0;
wind: number = 0;
city: string = 'Lille';
units: string = 'metric'

  constructor(private weatherservice: WeatherService) {
    
  }
  ngOnInit(): void {
    this.weatherservice.getweather(this.city, this.units).subscribe({

      next: (res) => {
        console.log(res)
        this.myweather = res;
        console.log(this.myweather);
        this.temperature = this.myweather.main.temp;
        this.min = this.myweather.main.temp_min;
        this.max = this.myweather.main.temp_max;
        this.humidity = this.myweather.main.humidity;
        this.wind = this.myweather.wind;
      },

      error: (error) => console.log(error.message),
      complete: () => console.info('API call completed')
    })
  }
}
