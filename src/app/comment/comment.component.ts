import { Component, Input } from '@angular/core';
import { Pizza } from '../pizza';
import { Commentaire } from '../commentaire';
@Component({
  selector: 'moh-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent {
  @Input() comment!: Commentaire;
}
