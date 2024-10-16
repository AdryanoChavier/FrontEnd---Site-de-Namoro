import { CanDeactivateFn } from '@angular/router';
import { MembroEditComponent } from '../membro/membro-edit/membro-edit.component';

export const preventUnsavedChangesGuard: CanDeactivateFn<MembroEditComponent> = (component) => {
  if(component.editForm?.dirty){
    return confirm('Tem certeza de que deseja continuar? Quaisquer alterações não salvas serão perdidas')
  }
  return true;
};
