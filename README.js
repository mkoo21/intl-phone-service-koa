Install the following either globally or locally:

`npm i -g babel-preset-es2015 babel-preset-stage-2 babel-cli`

Then test:

`curl --header "Content-Type: application/json"   --request POST   --data '{"phone": "780-222-9412", "country": "CA"}'   http://localhost:3123`

It handles country codes and stuff automatically as well.
