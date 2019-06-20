import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { Component, NgZone, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Plotly from 'plotly.js';
import { Daily } from '/../src/app/shared/services/feed';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { flatten } from '@angular/core/src/render3/util';
import { Timestamp } from 'rxjs';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})

export class HistoryComponent implements OnInit {

  history: Array<any>;

  constructor(
    public asf: AngularFirestore,
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone
  ) { }

  @ViewChild('chart', { read: ElementRef }) el: ElementRef;
  public x = [];
  public y = [];

  feedCollection: AngularFirestoreCollection<Daily>;

  ngOnInit() {
  this.getData();
  this.getGraph();
  }

      getData() {
          this.authService.GetHistory().subscribe(result => {
              this.history = result;
          });
      }

      getGraph() {
        const userdata = JSON.parse(localStorage.getItem('user'));
        this.feedCollection = this.asf.collection('patients').doc(userdata.uid).collection('daily-measurement');
        this.feedCollection.snapshotChanges().subscribe(result => {
          return result.map( change => {
            // this.x = change.payload.doc.data().TimeStamp;
            // this.y=change.payload.doc.data().Mood;
            this.x.push(change.payload.doc.data().level);
            this.y.push(change.payload.doc.data().level);
            const element = this.el.nativeElement;
            const data = [{
            x: this.x,
            y: this.y
          }];

            Plotly.plot(element, data);


          });
          });

  }
}


