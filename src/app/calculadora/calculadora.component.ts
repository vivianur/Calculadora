import { Component } from '@angular/core';

import { CalculadoraService } from './calculadora.service'

@Component({
  selector: 'calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent{
  expr: string = ""
  result: number = 0

  nums: string[] = [ "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", "." ]
  opes: string[] = [ "/", "x", "-", "+" ]

  constructor(private calculadoraService: CalculadoraService) { }

  addExpr(val){
    this.expr = this.calculadoraService.addExpr(val, this.expr) 
  }

  calcExpr(){
    this.result = this.calculadoraService.calcExpr(this.expr)
  }

  clearExpr(){
    this.expr = this.calculadoraService.clearExpr()
    this.result = 0; // :D kkk
  }
}
