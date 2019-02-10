import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

const app = new Koa();
app.use(bodyParser());

app.use(async ctx => {
  const { phone, country} = ctx.request.body;
  const phoneNumber = parsePhoneNumberFromString(phone, country);
  console.log(`${phone}, ${country} is ${phoneNumber.isValid()}`)
  ctx.body = phoneNumber.isValid();
});

app.listen(3123);
