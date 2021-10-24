import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
    }
    `
  ]
})
export class PorRegionComponent  {


  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];
  hayError: boolean = false;


  activarRegion( region: string ){
    //console.log(region);
    if ( region === this.regionActiva ) { return; }
    this.regionActiva = region;
    this.paises = [];
    this.paisService.buscarRegion( region )
    .subscribe( paises => {
      console.log(paises)
      this.paises = paises} );
   
  }



  getClaseCSS( region: string ): string {
     return (region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary';
  }

  constructor( private paisService: PaisService  ) { }

  
}
