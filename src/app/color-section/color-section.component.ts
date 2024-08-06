import {Component, Input} from '@angular/core';
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-color-section',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './color-section.component.html',
  styleUrl: './color-section.component.css'
})
export class ColorSectionComponent {
  @Input() color: string = 'grey';
}
