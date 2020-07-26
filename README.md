# bootstrap-otp

<p>bootstrap-otp is an easy and fast component to handle your <b>OTP</b> page</p>

<p>template based on bootstrap, so you can change it simply:<p>
 
 ```
  <div class="row">
    <div class="col">***</div>
  </div>
 ``` 

<h2>How to use</h2>

<ul>
  <li>Download then copy bootstrap-otp folder in your project</li>  
  <li>Import the component in (app.module.ts)</li>
</ul>

<h6>app.module.ts</h6>

```
import { BootstrapOtpComponent } from './helper/bootstrap-otp/bootstrap-otp.component';

@NgModule({
  declarations: [BootstrapOtpComponent]
})
```

<h6>use it any where</h6>

```
/*without config: (default) length = 4 & type = text*/
<app-bootstrap-otp></app-bootstrap-otp> //export as console.log(window['bootstrap-otp']);

/*with config*/
<app-bootstrap-otp [configs]="{length: 6, type: 'number', result: 'my-code'}"></app-bootstrap-otp> //export as console.log(window['my-code']);
```

<h5>Types</h5>

<ul>
  <li>text</li>
  <li>number</li>
  <li>tel</li>
</ul>

<h5>Paste Event</h5>

Also you can paste number on inputs, <i>there is an condition if the number length in your cliboard lower than your code lengths returned false.</i>

<h5>The Result</h5>

You can get the code on `window['bootstrap-otp']` as result by default but you can change the <b>key name</b> by change the configs, you do not need to make bootstrap-otp component as `child` to return.

<h3>Exaple: my-custom.component.ts</h5>

```
getCode(){
  console.log(window['bootstrap-otp']);
}
```
