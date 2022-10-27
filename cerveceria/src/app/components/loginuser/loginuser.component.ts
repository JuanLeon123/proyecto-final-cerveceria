import { Component, OnInit, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { loginusuario } from 'src/app/models/login';
import Swal from 'sweetalert2'

@Component({
    selector: 'app-loginuser',
    templateUrl: './loginuser.component.html',
    styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {

    @ViewChild('desplegarNavAdmin') btnNavAdmin?: ElementRef
    @ViewChild('.NavAdmin') ViewNavAdmin?: ElementRef


    constructor(private renderer2: Renderer2) { }

    ngOnInit(): void {
    }

    desplegarNav() {
        const desplegarNavAdmin = this.ViewNavAdmin?.nativeElement
        this.renderer2.removeClass(desplegarNavAdmin, "visually-hidden")
    }

    login() {
        // let email = localStorage.getItem('correo')
        // let password = localStorage.getItem('password')
        // let correo_usuario = document.getElementById("inputEmail4")?.value
        // if (!USER.correo.value === email || password.value === password) {
        //     Swal.fire({
        //         icon: 'error',
        //         title: 'Ashh, tenemos una mala noticia :(',
        //         text: 'Aun no eres mimebro de nuestro club, pero puedes registrarte totalmente gratis en nuestra pagina de registro'
        //     })else{
        //         location.href = 'https://mur75.github.io/cerveceria_angular/'
        //     }
        // }
    }
}


