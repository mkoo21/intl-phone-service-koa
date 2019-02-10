import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import cors from '@koa/cors';

const app = new Koa();
app.use(bodyParser());
app.use(cors({
  origin: '*'
}));

app.use(async ctx => {
  try {
    const { phone, country} = ctx.request.body;
    const phoneNumber = parsePhoneNumberFromString(phone, country);
    ctx.body = phoneNumber ? phoneNumber.isValid() : false;
    ctx.res.end();
    console.log(`${phone}, ${country} was ${ctx.body}`)
  } catch(e) {
    ctx.body = false;
    ctx.res.end();
    console.log(`ERROR: Attempt to validate ${JSON.stringify(ctx.request.body)} threw:\n${e}`);
  }
});

app.listen(3123);
