import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

@Component({
  selector: 'ae-grid',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AeGridComponent {
  public users = [
    {
      id: '5f1695db7a97d2d08d708fb3',
      name: 'Simone',
      creation: 'Sunday, February 24, 2019 11:27 AM',
      color: 'brown',
    },
    {
      id: '5f1695db656d586dfead1fd3',
      name: 'Mayra',
      creation: 'Wednesday, September 23, 2015 2:13 AM',
      color: 'brown',
    },
    {
      id: '5f1695db41468777b7ff9002',
      name: 'Eva',
      creation: 'Thursday, August 28, 2014 5:46 PM',
      color: 'brown',
    },
    {
      id: '5f1695db7d05f5a4fe86a8eb',
      name: 'Dyer',
      creation: 'Friday, August 26, 2016 7:11 PM',
      color: 'brown',
    },
    {
      id: '5f1695db7386a9239cb9a80c',
      name: 'Hamilton',
      creation: 'Tuesday, March 21, 2017 6:38 AM',
      color: 'green',
    },
    {
      id: '5f1695dbc3c560e3f8754c62',
      name: 'Nielsen',
      creation: 'Sunday, March 19, 2017 10:58 AM',
      color: 'brown',
    },
    {
      id: '5f1695dbd8acae5c43ef4462',
      name: 'Veronica',
      creation: 'Sunday, January 13, 2019 11:50 AM',
      color: 'blue',
    },
    {
      id: '5f1695db505f444314d10371',
      name: 'Lynn',
      creation: 'Wednesday, September 20, 2017 11:09 AM',
      color: 'green',
    },
    {
      id: '5f1695db9422fc1c3ecf3c04',
      name: 'Wolf',
      creation: 'Friday, February 16, 2018 4:40 AM',
      color: 'green',
    },
    {
      id: '5f1695dbd41c32644c338a96',
      name: 'King',
      creation: 'Wednesday, January 4, 2017 8:07 PM',
      color: 'green',
    },
  ];
}
