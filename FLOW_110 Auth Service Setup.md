프로젝트 폴더 ticketing 생성, 진입
앱 폴더 auth 생성, 진입
npm init -y
npm install typescript ts-node-dev express @types/express
tsc --init

src 폴더 생성, 진입
index.ts 생성, express app실행코드 작성

```
import express from 'express';
import {json} from 'body-parser';

const app = express();
app.use(json());

app.listen(3000, () => {
    console.log('Listening on port 3000...')
})
```

package.json 에서 "scripts":{"start":"ts-node-dev --poll index.ts"} 작성
npm start
