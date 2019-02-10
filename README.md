## Koa 2 microservice for validating international phone numbers

_Mostly just an excuse to use koa since it only saves 680kb from your prod bundle_

[google-libphonenumber](https://www.npmjs.com/package/google-libphonenumber) is perfectly fine for this.

Before becoming aware of google-libphonenumber, I looked at some alternatives that add as many as [*21.4 MB*](https://packagephobia.now.sh/result?p=libphonenumber) or [16.9 MB](https://packagephobia.now.sh/result?p=react-phone-number-input) to your prod bundle, which is unacceptable when all you want to do is figure out if +7 12345 is a valid Russian phone number. 

This may still be useful on blur/submit validation if you don't mind handling some extra network requests that return True or False and don't want all this extra code in your bundle.

Install the following either globally or locally:

`npm i -g babel-preset-es2015 babel-preset-stage-2 babel-cli`

Run the service:

`npm run start`

Then test:

```
curl --header "Content-Type: application/json"   --request POST   --data '{"phone": "780-222-9412", "country": "CA"}'   http://localhost:3123
```
