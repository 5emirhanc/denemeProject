import { Component } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NzLayoutModule,SidebarComponent,RouterOutlet,HeaderComponent,NzIconModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
