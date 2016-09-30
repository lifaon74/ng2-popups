[![npm version](https://badge.fury.io/js/ng2-popups.svg)](https://www.npmjs.com/package/ng2-popups)

[![NPM](https://nodei.co/npm/ng2-popups.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/ng2-popups/)

# ng2-popups

Popups for angular 2 : load dynamically your components into a popup. Minimal style and html for easy personalization.
This library use [ng2-component-injector](https://github.com/lifaon74/ng2-component-injector).
See *example/* if needed.

## Install
```
npm install ng2-popups --save
```
```ts
@NgModule({
    providers: [PopupModule],
    declarations: [ /* Put here your components to be injected */ ],
    entryComponents: [ /* Put here your components to be injected */  ],
})
export class AppModule { }
```
And put `<utx-popups></utx-popups>` into your main component template.

## Documentation
### PopupService
**open**
```ts
open(config: any):Promise<PopupComponent>>
```
Open a new popup and inject a component inside. Return a promise resolved when the popup is opened.

*config :*
```ts
{
    component: any; // the component to inject
    inputs?:any; // {Object} the inputs to pass to the component
    outputs?:any; // {Object} the outputs to listen to the component
}
```

**close**
```ts
close(popup: PopupComponent):Promise<any>
```
Close a popup. Return a promise resolved when the popup is closed.

**closeAll**
```ts
closeAll():Promise<any>
```
Close all popups. Return a promise resolved when all popups are closed.

### PopupComponent
**close**
```ts
close():Promise<any>
```
Close the popup. Return a promise resolved when the popup is closed.

**closePromise**
```ts
closePromise:Promise<any>
```
A promise resolved when the popup is closed.

**element**
```ts
element:HTMLElement
```
The DOM element of the popup (can be use to add class, etc...).


