import { CanDeactivateFn } from '@angular/router';
import { BlogformComponent } from '../blogform/blogform.component';

export const rerouteGuard: CanDeactivateFn<BlogformComponent> = (component:BlogformComponent, currentRoute, currentState, nextState) => {
  console.log('rerouting..')
  console.log(component)
  // if issubmit is true return true else return confirm
  return component.isSubmit || window.confirm('Are you sure you want to navigate away')
};
