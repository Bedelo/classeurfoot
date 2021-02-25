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
      detail: '...',
    },
    {
      nom: 'neymar',
      numero: '10',
      img: '/assets/profil_neynmar.png',
      detail: '...',
    },
    {
      nom: 'navas',
      numero: '1',
      img: '/assets/profile_navas.png',
      detail: '...',
    },
  ];
  public realTeam = [
    {
      nom: 'mbappe',
      numero: '7',
      img: '/assets/profil_mbappe.png',
      detail: '...',
    },
  ];
  public omTeam = [
    {
      nom: 'mbappe',
      numero: '7',
      img: '/assets/profil_mbappe.png',
      detail: '...',
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
      case 'OM':
        this.team = this.omTeam;
        console.log(this.team);
        break;
    }
  }
}
