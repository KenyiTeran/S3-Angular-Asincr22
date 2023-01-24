import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private rutaActiva: ActivatedRoute) { }
  username= ""
  lastname=""
  email=""
  ngOnInit(){
    this.username =  this.rutaActiva.snapshot.params["name"] || "";
    this.lastname =  this.rutaActiva.snapshot.params["lastname"];
    this.email =  this.rutaActiva.snapshot.params["email"];
  }
}
