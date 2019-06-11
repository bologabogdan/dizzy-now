import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
@Component({
selector: 'app-sign-up',
templateUrl: './sign-up.component.html',
styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
    doctors: Array<any>;
constructor(
public authService: AuthService
) { }
ngOnInit()

{
this.getData(); 
}

    getData() {
        this.authService.GetDoctor().subscribe(result => {
            this.doctors = result;
        })
    } 


}
