import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar:boolean = true): string {

    let nCaracteres:number = value.length;
    let valorFinal:string = '';

    if(nCaracteres != 0 )
    {
      if(activar)
      {
        do
        {
          valorFinal+='*';

        }while( valorFinal.length <= nCaracteres)
      }
      else
      {
        valorFinal= value;
      }
    }

    else
    {
      valorFinal = 'Introdusca Nombre';
    }

    return valorFinal;


  }

}
