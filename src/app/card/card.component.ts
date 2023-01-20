import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public image:string="https://qtxasset.com/cdn-cgi/image/w=384,h=216,f=auto,fit=crop,g=0.5x0.5/https://qtxasset.com/quartz/qcloud4/media/image/fierceelectronics/1622817373/ufo%20classic%20illo.jpg?VersionId=3Ko2eqLlCg1j9fsLEI51mPfskhXALVGj";
  public Titulo:string="Curso de Angular con interpolación";
  constructor(){}

  ngOnInit(): void {
  }
}
