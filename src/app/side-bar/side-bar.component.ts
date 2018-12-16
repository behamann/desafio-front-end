import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  curentBread: string;
  curentBreadName: string;

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.curentBread = val.url;
        switch (val.url) {
          case '/products':
          case '/':
            this.curentBreadName = 'Listar Produtos';
            break;
          case '/products/new':
            this.curentBreadName = 'Novo Produto';
            break;
          default:
            this.curentBreadName = 'Editar Produto';
            break;
        }
      }
    });
  }

  public showMenu = () => {
    document.querySelector('#nav-mobile').classList.add('open-menu');
  }
  public closeMenu = () => {
    document.querySelector('#nav-mobile').classList.remove('open-menu');
  }

  ngOnInit() {}

}
