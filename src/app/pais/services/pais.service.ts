import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

import { Country } from '../interfaces/pais.interface';

//DESCOMENTAR EN CASO DE USAR EL OTRO METODO PARA CAPTURAR EL ERROR
//import { Observable, of } from 'rxjs';
//import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {


private apiUrl: string = 'https://restcountries.com/v3.1';

get httpParams(){
  return new HttpParams().set( 'fields', 'name,capital,cca2,flags,population,altSpellings' );
}

  constructor( private http: HttpClient ) { }



  buscarPais( termino: string ): Observable<Country[]>{
    
    const url = `${ this.apiUrl }/name/${ termino }`;
    this.http.get( url );
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }

buscarCapital ( termino: string ): Observable<Country[]>{
  const url = `${ this.apiUrl }/capital/${ termino }`;
  return this.http.get<Country[]>( url, { params: this.httpParams } );
}




getPaisPorAlpha ( id: string ): Observable<Country[]>{
  const url = `${ this.apiUrl }/alpha/${ id }`;
  return this.http.get<Country[]>( url );
}


// OTRA MANERA DE CAPTURAR EL ERROR USANDO EL PIPE Y CATCHERROR. ME RETORNA UN ARREGLO VACIO
/*   buscarPais( termino: string ): Observable<any>{
    
    const url = `${ this.apiUrl }/name/${ termino }`;
    this.http.get( url );
    return this.http.get( url )
    .pipe(
      catchError(err => of([]) )
    );
  }
 */






  buscarRegion ( region: string ): Observable<Country[]>{
    const url = `${ this.apiUrl }/region/${ region }`;
    //console.log(url);
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }


}
