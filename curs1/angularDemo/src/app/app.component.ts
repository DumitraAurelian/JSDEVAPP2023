import { Component } from '@angular/core';
import { User } from './model/user';
import { AlertaService } from './alerta.service';

const HEROES = [
  {id:1, name:'Superman'},
  {id:2, name: 'Batman'},
  {id:3, name: 'Batgirl'},
  {id:4, name: 'Aquaman'},
  {id:5, name: 'Hulk'},

];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'AngularDiemo';
  descriere: string = " O scurta descriere a aplicatiei";
  culoare: string = "blue";
  imgSrc:string = "https://www.opiniatimisoarei.ro/wp-content/uploads/2014/05/peste-poza-zilei.jpg";
  nr: number = 0;
  valoare:string='valoare input';

  afiseaza:boolean = false;
  eroi=HEROES;


  persoana:User = {
    id: 1,
    nume: 'Popescu',
    prenume: 'Ion'

  }
  constructor (private alertaService:AlertaService){

  }

  showImg(){
    if (this.imgSrc !== ''){
      this.imgSrc =''
    }
    else {
      this.imgSrc = "https://www.opiniatimisoarei.ro/wp-content/uploads/2014/05/peste-poza-zilei.jpg"
    }
    
  }
  showImg2(){
    this.afiseaza = !this.afiseaza
  }

  inputCount(){

    if (this.valoare.length>20){
      this.alertaService.afiseazaMesaj("Nr prea mare de caractere")
      this.valoare="";
    }
  }
}
