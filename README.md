# custom-avatar-generator
[![npm](https://flat.badgen.net/npm/v/custom-avatar-generator)](https://www.npmjs.com/package/custom-avatar-generator)

Angular Element (Web Component) that creates a random avatar svg image and lets the user customize it with endless possible combinations.

If you would like to use this generator as Angular Module inside your Angular Application, checkout this package:
https://www.npmjs.com/package/ng-custom-avatar-generator

## Demo
Use the generator and see how it will look like at your page or application: 
👾**[Demo inside a real application](https://www.gifit2me.com)** [(Code)](https://github.com/maidi29/gifit2me)

⚡**[Demo without Face Details](https://htmlpreview.github.io/?https://github.com/maidi29/custom-avatar-generator/demo/demo/index.html)**⚡ (enable-face is false)

✨**[Demo with Face Details](https://htmlpreview.github.io/?https://github.com/maidi29/custom-avatar-generator/demo/demo/demo-with-face.html)**✨ (enable-face is true)

See the code and play with the attributes: 
👩‍💻 [JSFiddle](https://jsfiddle.net/maidi/L4so8gyj/)👩‍💻

## Screenshots & Images
### User Interface
![Generator UI](https://raw.githubusercontent.com/maidi29/custom-avatar-generator/images/images/generator-interface.PNG)
### Resulting Avatars examples
![Example Avatar](https://raw.githubusercontent.com/maidi29/custom-avatar-generator/images/images/avatar-example-3.svg)
![Example Avatar](https://raw.githubusercontent.com/maidi29/custom-avatar-generator/images/images/avatar-example-2.svg)
![Example Avatar](https://raw.githubusercontent.com/maidi29/custom-avatar-generator/images/images/avatar-example-1.svg)
![Example Avatar](https://raw.githubusercontent.com/maidi29/custom-avatar-generator/images/images/avatar-example-4.svg)
## Usage
Integrate the package script:
````html
<script type="module" src="https://unpkg.com/custom-avatar-generator@1.2.0"></script>
````
Add the Angular Element with optional attributes to adapt the avatar generator.
````html
<custom-avatar-generator 
  shape="square" 
  enable-background="true" 
  display-download="true" 
  texts='{"everything":"EVERYTHING","allColors":"All colors","background":"Background","skin":"Skin","hair":"Hair","hairStyle":"Hair Style","accessory":"Accessory","clothes":"Clothes","clothing":"Clothing","print":"Print"}'>
<custom-avatar-generator 
````
On every change the component fires an event with the current svg url, so you can listen to it (and e.g. store it in a variable to save it to your database when the user clicks "save") - or whatever you want to do with the svg.
```javascript
const el = document.querySelector('custom-avatar-generator');
el.addEventListener('svgUrl', (event) => {
    const mySvgUrl = event.detail;
    console.log(mySvgUrl);
    // do whatever you want here
});
````
## Attributes
All input attributes are optional and have a default. Possible inputs are:

| name               | possible values                                     | default        | description                                                                                     |
| -------------      |-------------                                        | ----           | -----                                                                                           |
| `shape`            | 'sqaure' or 'round'                                 | 'round'        | shape of the avatar image                                                                       |
| `enable-background`| 'true' or 'false'                                   | 'false'        | Displays a colored background behind the avatar and lets the user customize the color           |
| `enable-face`      | 'true' or 'false'                                   | 'false'        | Displays eyebrows, eyes, nose, mouth, facial hair and glasses and lets the user customize the color and type           |
| `display-download` | 'true' or 'false'                                   | 'false'        | Displays a download button below the controls so the user can save the svg file on their device |
| `texts`            | JSON with all displayed text string. Structure below| see JSON below | Modify the display texts of the controls                                                        |
```json
{
    "everything": "EVERYTHING",
    "allColors": "All colors",
    "background": "Background", // optional
    "skin": "Skin",
    "hair": "Hair",
    "hairStyle": "Hair Style",
    "accessory": "Accessory",
    "clothes": "Clothes",
    "clothing": "Clothing",
    "print": "Print",
    "eyebrows": "Eyebrows", // optional
    "eyes": "Eyes", // optional
    "nose": "Nose", // optional
    "mouth": "Mouth", // optional
    "facialHair": "FacialHair", // optional
    "glasses": "Glasses" // optional
}
```
Keep attention that you integrate every property when using the `texts` attribute because it completely overwrites the default texts object.

## Info
Based on https://avataaars.com/
