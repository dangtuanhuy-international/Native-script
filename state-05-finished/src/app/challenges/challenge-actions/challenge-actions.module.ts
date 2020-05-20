import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { ChallengeActionsComponent } from './challenge-actions.component';

@NgModule({
  declarations: [ChallengeActionsComponent],
  imports: [NativeScriptCommonModule],
  exports: [ChallengeActionsComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ChallengeActionsModule {}
