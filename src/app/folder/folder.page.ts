import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public team;
  public psgTeam = [
    {
      nom: 'mbappe',
      numero: '7',
      img: '/assets/profil_mbappe.png',
      detail: 'Attaquant',
    },
    {
      nom: 'neymar',
      numero: '10',
      img: '/assets/profil_neynmar.png',
      detail: 'Attaquant',
    },
    {
      nom: 'navas',
      numero: '1',
      img: '/assets/profile_navas.png',
      detail: 'Gardien',
    },
  ];
  public realTeam = [
    {
      nom: 'benzema',
      numero: '9',
      img: '/assets/benzema.jpg',
      detail: 'Attaquant',
    },
    {
      nom: 'modric',
      numero: '10',
      img: '/assets/modric.jpg',
      detail: 'Attaquant',
    },
    {
      nom: 'courtois',
      numero: '1',
      img: '/assets/courtois.jpg',
      detail: 'Gardien',
    },
  ];
  public fcbTeam = [
    {
      nom: 'messi',
      numero: '10',
      img: '/assets/messi.jpg',
      detail: 'Attaquant',
    },
    {
      nom: 'griezou',
      numero: '7',
      img: '/assets/griezou.jpg',
      detail: 'Attaquant',
    },
    {
      nom: 'pique',
      numero: '3',
      img: '/assets/pique.jpg',
      detail: 'Defenseur',
    },
  ];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    switch (this.folder) {
      case 'PSG':
        this.team = this.psgTeam;
        console.log(this.team);
        break;
      case 'REAL':
        this.team = this.realTeam;
        console.log(this.team);
        break;
      case 'BARCA':
        this.team = this.fcbTeam;
        console.log(this.team);
        break;
    }
  }
}
