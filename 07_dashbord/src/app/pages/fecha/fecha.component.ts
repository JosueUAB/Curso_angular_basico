import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-fecha',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './fecha.component.html',
  styleUrl: './fecha.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FechaComponent { }
