import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from './data';
import * as d3Scale from 'd3-scale';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  colorScale: any;

  generateColorScale() {
    const values: number[] = this.single.map(s => s.value);
    return d3Scale.scaleLinear()
      .domain([Math.min(...values), Math.max(...values)])
      .range(['green', 'red']);
  }

  customColors = (name) => {    
    const value = this.single.find(s => s.name === name).value;
    return this.colorScale(value);
  }

  constructor() {
    Object.assign(this, { single })
  }

  ngOnInit() {
    this.colorScale = this.generateColorScale();
  }

  onSelect(event) {
    console.log(event);
  }
}