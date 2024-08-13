import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private router: Router) { } // Implementando rotas de redirecionamento app-routing.module.

  ngOnInit(): void {
  }

  cadastrar(form: NgForm){    // Como retorno do Console, teremos um objeto NgForm.
    if (form.valid) {
      this.router.navigate(['./sucesso'])  // Caso form seja válido, redirecionar para path: 'sucesso'.
    }  else {
      alert('Formulário Inválido.')
    }
      console.log(form.controls);
    
  }
}
