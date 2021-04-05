# custom-avatar-generator
Angular Element (Web Component) that creates a random avatar svg image and lets the user customize it.

Displays controls to customize your minimal and stylish avatar with endless combinations.

Based on https://avataaars.com/

## Demo
See it in action and play around:

⚡
https://jsfiddle.net/maidi/L4so8gyj/
⚡

## Screenshots
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
<script type="module" src="https://unpkg.com/custom-avatar-generator@1.0.2"></script>
````
Add the Angular Element with optional attributes to adapt the avatar generator.
````html
<custom-avatar-generator 
  shape="square" 
  enable-background="true" 
  display-download="true" 
  texts='{"everything":"EVERYTHING","allColors":"All colors","background":"Background","skin":"Skin","hair":"Hair","hairStyle":"Hair Style","accessory":"Accessory","clothes":"Clothes","clothing":"Clothing","print":"Print","download":"Download"}'>
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
| `display-download` | 'true' or 'false'                                   | 'false'        | Displays a download button below the controls so the user can save the svg file on their device |
| `texts`            | JSON with all displayed text string. Structure below| see JSON below | Modify the display texts of the controls                                                        |
```json
{
    "everything": "EVERYTHING",
    "allColors": "All colors",
    "background": "Background",
    "skin": "Skin",
    "hair": "Hair",
    "hairStyle": "Hair Style",
    "accessory": "Accessory",
    "clothes": "Clothes",
    "clothing": "Clothing",
    "print": "Print",
    "download": "Download"
}
```
Keep attention that you integrate every property when using the `texts` attribute because it will be completely overwritten.
