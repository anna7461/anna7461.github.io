import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StyleGuideComponent } from './style-guide/style-guide.component';
import { ViewsComponent } from './views/views.component';
import { ComponentsComponent } from './style-guide/components/components.component';
import { ButtonsComponent } from './style-guide/components/buttons/buttons.component';
import { ColorsComponent } from './style-guide/components/colors/colors.component';
import { TypographyComponent } from './style-guide/components/typography/typography.component';
import { TabsComponent } from './style-guide/components/tabs/tabs.component';
import { FormsComponent } from './style-guide/components/forms/forms.component';
import { AlertsComponent } from './style-guide/components/alerts/alerts.component';
import { IconsComponent } from './style-guide/components/icons/icons.component';
import { SpacingComponent } from './style-guide/components/spacing/spacing.component';
import { InputsComponent } from './style-guide/components/forms/inputs/inputs.component';
import { SelectDropdownsComponent } from './style-guide/components/forms/select-dropdowns/select-dropdowns.component';
import { CheckboxComponent } from './style-guide/components/forms/checkbox/checkbox.component';
import { RadioButtonComponent } from './style-guide/components/forms/radio-button/radio-button.component';
import { ToggleButtonComponent } from './style-guide/components/forms/toggle-button/toggle-button.component';
import { TooltipsComponent } from './style-guide/components/forms/tooltips/tooltips.component';
import { TagsComponent } from './style-guide/components/forms/tags/tags.component';
import { IconComponent } from './style-guide/components/icons/icon/icon.component';

@NgModule({
  declarations: [
    AppComponent,
    StyleGuideComponent,
    ViewsComponent,
    ComponentsComponent,
    ButtonsComponent,
    ColorsComponent,
    TypographyComponent,
    TabsComponent,
    FormsComponent,
    AlertsComponent,
    IconsComponent,
    SpacingComponent,
    InputsComponent,
    SelectDropdownsComponent,
    CheckboxComponent,
    RadioButtonComponent,
    ToggleButtonComponent,
    TooltipsComponent,
    TagsComponent,
    IconComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
