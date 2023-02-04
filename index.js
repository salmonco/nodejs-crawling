const puppeteer = require("puppeteer");
const cheerio = require("cheerio");

const url =
  "https://product.kyobobook.co.kr/bestseller/total?period=002#?page=1&per=20&period=002&ymw=&bsslBksClstCode=A";

const getHtml = async () => {
  try {
    const browser = await puppeteer.launch({
      headless: false,
    });
    const page = await browser.newPage();
    await page.setViewport({
      width: 1920,
      height: 1080,
    });
    await page.goto(url);
    await page.waitForSelector("ol.prod_list > li.prod_item");
    const content = await page.content();
    await page.close();
    await browser.close();

    const $ = cheerio.load(content);

    let book = [];
    const list = $("ol.prod_list > li.prod_item");

    list.each((index, item) => {
      const info = $(item)
        .find("div.prod_info_box span.prod_author")
        .text()
        .split("·");

      book.push({
        no: index + 1,
        title: $(item)
          .find("div.prod_info_box a.prod_info span.prod_name")
          .text(),
        author: info[0].trim(),
        publisher: info[1].trim(),
        date: info[2].trim(),
        desc: $(item).find("div.prod_info_box p.prod_introduction").text(),
        price: $(item)
          .find("div.prod_info_box div.prod_price span.price span.val")
          .text(),
        image: $(item).find("div.prod_thumb_box span.img_box img").attr("src"),
      });
    });

    console.log(book);
  } catch (e) {
    console.log(e);
  }
};

getHtml();
