import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    exports: [
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatDividerModule,
        MatButtonModule,
        MatProgressBarModule,
        MatToolbarModule,
        MatIconModule,
        MatExpansionModule,
        MatTableModule,
        MatDialogModule,
        MatCheckboxModule,
        MatSlideToggleModule
    ],
    providers: [],
})
export class MaterialModule { }