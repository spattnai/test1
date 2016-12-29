import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {MovieService} from '../services/MovieService';
import {MovieInfo} from '../movie-info/movie-info';
 
@Component({
    templateUrl: 'build/pages/movie-list/movie-list.html',
    providers: [MovieService]
})
 
export class WeatherListPage {
 
        cities: Array<any>;
 
        constructor(private navController: NavController, private weatherService: WeatherService) {
 
        }
   
    searchWeatherDB(event, key) {
        if(event.target.value.length > 2) {
            this.weatherService.searchCities(event.target.value).subscribe(
                data => {
                    this.cities = data.results; 
                    console.log(data);
                },
                err => {
                    console.log(err);
                },
                () => console.log('Weather Search Complete')
            );
        }
    } 
   
    itemTapped(event, cityWeather) {
        console.log(cityWeather);  
        this.navController.push(WeatherInfo, {
            cityWeather: cityWeather
        });
    }
}