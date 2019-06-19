import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  private users: any = [];

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone
  ) { }

  ngOnInit() 
  {
    this.getData();
  }

  getData() {
    this.authService.GetUserDataDoctor().subscribe(result => {
        this.users.push(result);
    })
} 
}
