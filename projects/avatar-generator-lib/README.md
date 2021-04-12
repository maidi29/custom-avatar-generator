# ng-custom-avatar-generator
[![npm](https://flat.badgen.net/npm/v/ng-custom-avatar-generator)](https://www.npmjs.com/package/ng-custom-avatar-generator)

Angular Module (Library) that creates a random avatar svg image and lets the user customize it with endless possible combinations.

This package contains an Angular Module to integrate into your Angular Application. If you want to integrate the generator as Web Component then check out this Package: https://www.npmjs.com/package/custom-avatar-generator

## Demo
Use the generator, see how it will look like at your application and play around with the attributes in this
⚡
**[Stackblitz](https://stackblitz.com/edit/ng-custom-avatar-generator?file=src/app/app.component.html)**
⚡

## Screenshots & Images
### User Interface
![Generator UI](https://raw.githubusercontent.com/maidi29/custom-avatar-generator/images/images/generator-interface.PNG)
### Resulting Avatars examples
![Example Avatar](https://raw.githubusercontent.com/maidi29/custom-avatar-generator/images/images/avatar-example-3.svg)
![Example Avatar](https://raw.githubusercontent.com/maidi29/custom-avatar-generator/images/images/avatar-example-2.svg)
![Example Avatar](https://raw.githubusercontent.com/maidi29/custom-avatar-generator/images/images/avatar-example-1.svg)
![Example Avatar](https://raw.githubusercontent.com/maidi29/custom-avatar-generator/images/images/avatar-example-4.svg)
## Usage
Install the package
````
npm install ng-custom-avatar-generator
````
Import the Module into the Module where you want to use it
````typescript
import { AvatarGeneratorModule } from 'ng-custom-avatar-generator';

@NgModule({
  declarations: [...],
  imports: [
    AvatarGeneratorModule,
    ...
  ],
})
export class YourModule { }
````
Use the component with desired optional inputs
```html
<ng-custom-avatar-generator
  [shape]="square" [enableBackground]="true" [displayDownload]="true"
  [texts]="{
    everything: 'EVERYTHING',
    allColors: 'All colors',
    background: 'Background',
    skin: 'Skin',
    hair: 'Hair',
    hairStyle: 'Hair Style',
    accessory: 'Accessory',
    clothes: 'Clothes',
    clothing: 'Clothing',
    print: 'Print',
  }"
  (svgUrl)="console.log('Do whatever you want with the actual svg url:', $event)"
></ng-custom-avatar-generator>
````
## Attributes
All input attributes are optional and have a default. Possible inputs are:

| name               | Type                                     | default        | description                                                                                     |
| -------------      |-------------                                        | ----           | -----                                                                                           |
| `shape`            | string ('sqaure' or 'round')                                 | 'round'        | shape of the avatar image                                                                       |
| `enable-background`| boolean                                  | false        | Displays a colored background behind the avatar and lets the user customize the color           |
| `display-download` | boolean                                   | false        | Displays a download button below the controls so the user can save the svg file on their device |
| `texts`            | Texts interface, see structure below | see object below | Modify the display texts of the controls                                                        |
```
{
    everything: 'EVERYTHING',
    allColors: 'All colors',
    background: 'Background',
    skin: 'Skin',
    hair: 'Hair',
    hairStyle: 'Hair Style',
    accessory: 'Accessory',
    clothes: 'Clothes',
    clothing: 'Clothing',
    print: 'Print',
}
```
Keep attention that you integrate every property when using the `texts` attribute because it completely overwrites the default texts object.

## Info
Based on https://avataaars.com/
