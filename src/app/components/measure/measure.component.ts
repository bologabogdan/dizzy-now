import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { Router } from "@angular/router";
import { ValueConverter } from '@angular/compiler/src/render3/view/template';


@Component({
  selector: 'app-measure',
  templateUrl: './measure.component.html',
  styleUrls: ['./measure.component.css']
})
export class MeasureComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone,
  ) { }

  ngOnInit() {

    var slider = document.getElementById('myRange');
    var output = document.getElementById('demo');
    output.innerHTML = slider.value;
    
    slider.oninput = function() {
      output.innerHTML = this.value;
    }
  }

}
