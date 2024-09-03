import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MyServiceService]
})
export class ChildComponent {
  @Input() data: any;
  constructor(public myService: MyServiceService) {
    this.myService.value = 'Child Service';
  }
  updateData() {
    this.data.count++;
  }
}
