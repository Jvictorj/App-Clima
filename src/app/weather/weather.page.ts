import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {
  weatherData: any = null;
  city: string = '';

  constructor(private weatherService: WeatherService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['weatherData']) {
        this.weatherData = JSON.parse(params['weatherData']);  // Corrigido: acesso com colchetes
      } else {
        this.getWeather();  // Caso contrário, faça a busca manualmente
      }
    });
  }

  getWeather() {
    if (this.city.trim() === '') {
      console.error('Nenhuma cidade fornecida');
      return;
    }

    this.weatherService.getWeather(this.city).subscribe(data => {
      this.weatherData = data;
    }, error => {
      console.error('Erro ao buscar previsão do tempo', error);
    });
  }

  getRandomWeather() {
      const randomCities = [
        'Acre',
        'Alagoas',
        'Amapá',
        'Amazonas',
        'Bahia',
        'Ceará',
        'Distrito Federal',
        'Espírito Santo',
        'Goiás',
        'Maranhão',
        'Mato Grosso',
        'Mato Grosso do Sul',
        'Minas Gerais',
        'Pará',
        'Paraíba',
        'Paraná',
        'Pernambuco',
        'Piauí',
        'Rio de Janeiro',
        'Rio Grande do Norte',
        'Rio Grande do Sul',
        'Rondônia',
        'Roraima',
        'Santa Catarina',
        'São Paulo',
        'Sergipe',
        'Tocantins'
      ];
    this.city = randomCities[Math.floor(Math.random() * randomCities.length)];
    this.getWeather(); // Chama a função para buscar a previsão do tempo com a cidade aleatória
  }
}
