# nodejs-crawling

### crawling in node.js
- 정적 페이지 -> fetch, axios, ...
- 동적 페이지 -> puppeteer, selenium, ...

### in this project
```
npm install puppeteer
npm install cheerio
```
- puppeteer : Chromium으로 Chrome 브라우저를 열고 페이지를 열어서 데이터가 모두 로드된 후에 크롤링할 수 있도록 함
- cheerio : jquery와 비슷한 문법으로 비교적 편리하게 DOM 파싱 가능

### play
<img style="width: 600px;" src="https://user-images.githubusercontent.com/86469788/216768681-ad8b730f-6799-413a-b1c3-3aeecdf1b594.png">

- 교보문고 베스트셀러 top20
