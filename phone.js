import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

const app = new Koa();
app.use(bodyParser());

app.use(async ctx => {
  const { phone, country} = ctx.request.body;
  const phoneNumber = parsePhoneNumberFromString(phone, country);
  ctx.body = phoneNumber.isValid();
  ctx.res.end();
  // Print || log result after response
  console.log(`${phone}, ${country} was ${phoneNumber.isValid()}`)
});

app.listen(3123);
