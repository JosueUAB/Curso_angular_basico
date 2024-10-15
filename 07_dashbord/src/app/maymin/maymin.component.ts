import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-maymin',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './maymin.component.html',
  styleUrl: './maymin.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MayminComponent { }
