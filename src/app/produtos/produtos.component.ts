import { Component,OnInit, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


interface ProdutosCarrinho {
  id: number;
  nome: string;
};

interface ResponseAPI {
  body: string;
  id: number;
  title: string;
  userId: number;
}

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {

  constructor(private dataService: DataService,
    private router: Router, ) { }

  posts: ResponseAPI[] = []; // Array para armazenar os posts
  
  
  @Input() mensagem = '';

  @Output() mensagemDoFilhoParaOPai = new EventEmitter<string>();

  isSpecial = true;

  receptStyle = true;

  showText = 1;

  // produtosCarrinho = ['Notebook', 'Teclado', 'Mouse', 'Mousepad'];

  statusProduto = 'pode vender';

  produtosCarrinho: ProdutosCarrinho[] = [
    { id: 1, nome: 'Notebook' },
    { id: 2, nome: 'Teclado' },
    { id: 3, nome: 'Mouse' },
    { id: 4, nome: 'Mousepad' }
  ];


  trackByItems(index: number, item: ProdutosCarrinho): number {
    return item.id;
  }

  emiteMensagemDoFilhoParaOPai() {
    
    console.log('Mensagem do produtos.');
  }


  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dataService.get<ResponseAPI[]>('http://jsonplaceholder.typicode.com/posts')
      .subscribe((response: ResponseAPI[]) => {
        console.log('Resposta do GET Data', response);          
        
        this.posts = response.slice(0, 9); // Seleciona os primeiros 9 posts
        console.log(this.posts)
      });

      
  }



}
