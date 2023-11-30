import { Component, ElementRef, ViewChild } from '@angular/core';
import { fabric } from 'fabric';

@Component({
  selector: 'app-annotation',
  templateUrl: './annotation.component.html',
  styleUrls: ['./annotation.component.css']
})
export class AnnotationComponent {

  x!: number;
  y!: number;

  @ViewChild('imageCanvas')
  canvasElement!: ElementRef<HTMLCanvasElement>;
  private fabricCanvas!: fabric.Canvas;

  ngAfterViewInit() {
    this.fabricCanvas = new fabric.Canvas(this.canvasElement.nativeElement);
    
  }
}
