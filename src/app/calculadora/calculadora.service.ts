import { Injectable } from '@angular/core';

@Injectable()
export class CalculadoraService {

  constructor() { }

  addExpr(val, atualExpr): string{
    let _return
    try{
      if(val === "x") val = "*";
      _return = atualExpr.concat(val);
    }catch(e){
      console.log(e);
      _return = "Erro"
    }
    return _return
  }

  clearExpr(): string{
    return "";
  }

  calcExpr(expr): number{
    let _return
    try{
      _return = eval(expr);
      
      if(_return === expr){
        _return = "Erro"
      }
      
    }catch(e){
      console.log(e);
      _return = "Erro"
    }
    return _return;
  }

}
