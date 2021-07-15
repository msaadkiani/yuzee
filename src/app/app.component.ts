import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
    cards = [
        {heading: 'Taylors University World Class Scholarship'},
        {heading: 'Summer Research Scholarship'},
        {heading: 'Postgraduate Research Scholarship'},
        {heading: 'Taylors University Mechanical Engineering Scholarship'},
        {heading: 'The Gates Scholarship'}
    ]

    cardDetail = [
        {detIcon: './assets/det-ic1.png', detHeading: '18 March 2020', detText: 'Deadline'},
        {detIcon: './assets/det-ic2.png', detHeading: 'Domestic & International', detText: 'Validity'},
        {detIcon: './assets/det-ic3.png', detHeading: 'USD 2915 per year', detText: 'Amount'},
        {detIcon: './assets/det-ic4.png', detHeading: 'Degree  |  Postgraduate', detText: 'Study Level'},
        {detIcon: './assets/det-ic5.png', detHeading: 'May 2020', detText: 'Intake(s)'}
    ]
}
