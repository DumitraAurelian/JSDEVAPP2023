import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
user: any []=[];
selectedUser: User ={id: 0, nume: '', prenume: '', email: '', datanastere: new Date(), telefon:''};


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  createOrUpdateUser(form: {value:User;}){
    if(this.selectedUser && this.selectedUser.id){
      // this.apiService.updateUser(this.selectedUser.id, form.value).subscribe((user:User)=>{
      //   console.log ('User updated', user);
      // });
    }
    else {
      this.apiService.createUser(form.value).subscribe((user:User)=>{
        // this.readUsers();
        console.log ('User created,', user);
      });
    }
  }
 

}
