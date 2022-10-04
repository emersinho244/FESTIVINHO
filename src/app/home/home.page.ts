import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  quantidadeCrianca: number = 0;
  quantidadeAdulto: number = 0;
  quantidadeRefrigeranteCrianca: number = 0;
  quantidadeRefrigeranteAdulto: number = 0;
  quantidadeSalgadinhoCrianca: number = 0;
  quantidadeSalgadinhoAdulto: number = 0;
  quantidadeBoloCrianca: number = 0;
  quantidadeBoloAdulto: number = 0;
  totalContaCrianca: number = 0;
  totalSalgadinho: number = 0;
  totalRefrigerante: number = 0;
  totalBolo: number = 0;
  totalContaAdulto: number = 0;

  constructor() {}

  adicionarCrianca() {
    this.quantidadeCrianca++;
    this.calcularTotalConta();
  }
  adicionarAdulto() {
    this.quantidadeAdulto++;
    this.calcularTotalConta();
  }

  removerCrianca() {
    if(this.quantidadeCrianca > 0){
      this.quantidadeCrianca--;
      this.calcularTotalConta();
    }
  }

  removerAdulto(){
    if(this.quantidadeAdulto > 0){
      this.quantidadeAdulto--;
      this.calcularTotalConta();
    }
  }

  calcularTotalConta(){
    this.quantidadeSalgadinhoAdulto = this.quantidadeAdulto * 10;
    this.quantidadeSalgadinhoCrianca = this.quantidadeCrianca * 7;
    this.quantidadeRefrigeranteAdulto = (this.quantidadeAdulto * 400)/1000;
    this.quantidadeRefrigeranteCrianca = (this.quantidadeCrianca * 300)/1000;
    this.quantidadeBoloAdulto = (this.quantidadeAdulto * 100)/1000;
    this.quantidadeBoloCrianca = (this.quantidadeCrianca * 100)/1000;
    
    this.totalSalgadinho = this.quantidadeSalgadinhoAdulto + this.quantidadeSalgadinhoCrianca;
    this.totalRefrigerante = this.quantidadeRefrigeranteAdulto + this.quantidadeRefrigeranteCrianca;
    this.totalBolo = this.quantidadeBoloAdulto + this.quantidadeBoloCrianca;
  }

  limpar(){
    this.quantidadeCrianca = 0;
    this.quantidadeAdulto = 0;
    this.calcularTotalConta();
    {{this.totalSalgadinho = 0 }}
    {{this.totalRefrigerante = 0 }}
    {{this.totalBolo = 0 }}
  }
}