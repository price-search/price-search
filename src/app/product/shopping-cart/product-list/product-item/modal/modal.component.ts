import { Component, OnInit, Input } from '@angular/core';
import { ShoppingList } from 'src/app/models/lista';
import { ListaService } from 'src/app/services/lista.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {


  constructor(private listaService: ListaService) { }
  lists: ShoppingList;
  ngOnInit(): void {
    this.listaService.getList()
    .subscribe(res => this.lists = res);
  }

}