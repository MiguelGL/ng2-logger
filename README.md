## ng2-logger ##



Logger for angular 2 apps.

See what is going on in your app!
Now chrome console logs are full of colors!

![Modules marked](screen.png)

To install package run:

    npm install ng2-logger --save

First import it:

```ts
    import { Log, Level } from 'ng2-logger/ng2-logger'
```

Simple use:

Init your log :
```ts
    const log = Log.create('books'); 
```
or if you wanna just log errors and warnings :
```ts
    const log = Log.create('books', Level.ERROR, Level.WARN); 
```
'books' is current class or anything inside *.ts file.

You can also assign static color to specific module in application:
```ts
    log.color = 'red'; 
```
After inited **log** you are able to start debugging: 
```ts
    log.d('object',obj) // console.log
    log.er('object',obj) // console.error
    log.i('object',obj) // console.info
    log.w('object',obj) // console.warn
```


**Production mode**
-------------------

You will not see anyting in prduction mode:

    Log.setProductionMode();


**Selective debug - global settings**
-------------------

Optional specify what you wanna see in yours debug console.
This settings will override settings from files.
```ts
    export class AppComponent {   
        constructor(  ) {
            Log.onlyModules('books');
            Log.onlyLevel(Level.ERROR,Level.INFO);
        }    
    }
```

