import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.page.html',
  styleUrls: ['./solicitud.page.scss'],
})
export class SolicitudPage implements OnInit { 
  solicitudForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private alertController: AlertController
  ) {
    this.solicitudForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      carrera: ['', [Validators.required, Validators.minLength(5)]],
      carnet: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      mensaje: ['', [Validators.required, Validators.maxLength(200)]],
    });
  }

  ngOnInit() {
    console.log('Componente SolicitudPage inicializado');
  }

  async enviarSolicitud() {
    if (this.solicitudForm.valid) {
      const alert = await this.alertController.create({
        header: 'Confirmar Solicitud',
        message: '¿Está seguro de enviar la solicitud?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {},
          },
          {
            text: 'Aceptar',
            handler: () => {
              console.log('Solicitud enviada:', this.solicitudForm.value);
            },
          },
        ],
      });

      await alert.present();
    }
  }
}