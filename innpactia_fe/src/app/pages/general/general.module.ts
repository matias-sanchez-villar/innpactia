import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MenuComponent } from 'src/app/component/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [GeneralModule.rootComponent],
    imports: [
        CommonModule, 
        FormsModule,
        RouterModule
    ],
    exports: [GeneralModule.rootComponent],
    entryComponents: [GeneralModule.rootComponent],
})

export class GeneralModule {
    static rootComponent = MenuComponent
}
   