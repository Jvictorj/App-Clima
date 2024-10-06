import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  constructor(private navCtrl: NavController, private weatherService: WeatherService) {}

  // Navegar para a página de pesquisa de clima
  navigateToWeatherPage() {
    this.navCtrl.navigateForward('/weather');
  }

  // Buscar clima de uma cidade aleatória
  getRandomWeather() {
    const randomCities = ['São Paulo', 'Rio de Janeiro', 'Brasília', 'Curitiba', 'Salvador', 'Fortaleza'];
    const randomCity = randomCities[Math.floor(Math.random() * randomCities.length)];

    // Fazer a requisição para o clima da cidade aleatória
    this.weatherService.getWeather(randomCity).subscribe(data => {
      console.log('Clima de cidade aleatória:', data);
      // Aqui, redirecionamos para a página de clima e passamos os dados como parâmetro
      this.navCtrl.navigateForward('/weather', {
        queryParams: {
          weatherData: JSON.stringify(data),
        },
      });
    }, error => {
      console.error('Erro ao buscar clima aleatório', error);
    });
  }
}
