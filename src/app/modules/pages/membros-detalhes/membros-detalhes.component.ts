import { Membro } from './../../interface/membro';
import { ActivatedRoute } from '@angular/router';
import { MembroService } from './../../services/membro.service';
import { Component, OnInit, inject} from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { GalleryItem, GalleryModule, ImageItem } from 'ng-gallery';
@Component({
  selector: 'app-membros-detalhes',
  standalone: true,
  imports: [TabsModule,GalleryModule],
  templateUrl: './membros-detalhes.component.html',
  styleUrl: './membros-detalhes.component.css'
})
export class MembrosDetalhesComponent implements OnInit{
private membroService = inject(MembroService);
private route = inject(ActivatedRoute)
membro?: Membro;
imagens: GalleryItem[]=[]

ngOnInit(): void {
this.loadMembro()
}

loadMembro(){
  const usuario_nome = this.route.snapshot.paramMap.get('usuario_nome');
  if(!usuario_nome) return;
  this.membroService.getMembro(usuario_nome).subscribe({
    next: membro => {
      this.membro = membro;
      membro.fotos.map(p =>{
        this.imagens.push(new ImageItem({src: p.url, thumb: p.url}))
      })
    }
  })
}



}
