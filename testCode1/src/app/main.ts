import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {WeatherPage} from './pages/weather-list/weather-list';
import { AppModule } from './app.module';

@Component({
  templateUrl: 'build/app.html',
})
 
export class MyApp {
  rootPage: any = WeatherListPage;
 
  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
 
ionicBootstrap(MyApp);

platformBrowserDynamic().bootstrapModule(AppModule);
