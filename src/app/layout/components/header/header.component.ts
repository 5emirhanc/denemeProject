import { Component } from '@angular/core';
import { NzPageHeaderModule} from 'ng-zorro-antd/page-header';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NzPageHeaderModule,NzBreadCrumbModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  onBack(): void {
    console.log('onBack');
  }
}
