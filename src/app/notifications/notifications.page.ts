import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import data from '../../assets/sample-data/notifications.json';
import { FirebaseService } from '../firebase/firebase-integration.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: [
    './styles/notifications.page.scss',
    './styles/notifications.shell.scss'
  ]
})
export class NotificationsPage implements OnInit {
  // notifications: any;
  private notifications = data;
  restNotifications: Object;
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
    console.log(this.notifications);
    this.http.get('https://sheet.best/api/sheets/4f29fe18-7501-495b-b89b-80629543d791').subscribe((res) => {
      console.log(res);
      this.restNotifications = res;
    })

  }
  // ngOnInit(): void {
  //   if (this.route && this.route.data) {
  //     this.route.data.subscribe(resolvedData => {
  //       const dataSource = resolvedData['data'];
  //       if (dataSource) {
  //         dataSource.source.subscribe(pageData => {
  //           if (pageData) {
  //             this.notifications = pageData;

  //           }
  //         });
  //       }
  //     });
  //   }
  // }
}
