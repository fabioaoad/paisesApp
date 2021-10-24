import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
    `
    li {
      cursor: pointer; 
    }
    `
  ]
})
export class PorCapitalComponent  {

  termino : string = '';
  hayError: boolean = false;
  paises  : Country[] = [];
  capitalesSugeridas  : Country[] = [];
  mostrarSugerencias: boolean = false;

   constructor( private paisService: PaisService ){}




   buscar( termino: string){
    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino = termino; 
    console.log(this.termino);
    this.paisService.buscarCapital(this.termino)
    .subscribe( (paises) => {
      console.log(paises);
      this.paises = paises; 
      
    }, (err) => {
     // console.log('Error');
      //console.info(err);
      this.hayError = true;
      this.paises = [];
    }
    );
   }



   sugerencias( termino: string ){
   
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    //splice muestra los primer 5 capitales sugeridos
    this.paisService.buscarCapital( termino )
      .subscribe( 
        capitales => this.capitalesSugeridas = capitales.splice(0,5),
        (err) => this.capitalesSugeridas = []
        );
    
 }


 buscarSugerido( termino: string ){
  this.buscar( termino );
 
}



}
