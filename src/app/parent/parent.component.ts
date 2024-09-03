import { Component } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
  providers: [MyServiceService]
})
export class ParentComponent {
  primitiveData: number = 0;
  nonPrimitiveData = { count: 0 };
  constructor(public myService: MyServiceService) {
    this.myService.value = 'Parent Service';
  }

  updatePrimitive() {
    this.primitiveData++;
  }

  updateNonPrimitive() {
    this.nonPrimitiveData.count++;
  }
}
