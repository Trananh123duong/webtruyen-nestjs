import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as cheerio from 'cheerio';

@Injectable()
export class TruyenchuService {
  async crawlTruyenChu(url: string): Promise<any> {
    // console.log(url.concat('', '/danh-sach/truyen-moi?page=1'));
    await this.delay(5000);
    const response = await axios.get(
      url.concat('', '/danh-sach/truyen-moi?page=1'),
    );
    const html = response.data;
    const truyenInfo = this.listTruyenInfoFromHTML(html);
    return truyenInfo;
  }

  private delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  private listTruyenInfoFromHTML(html: string): any {
    const $ = cheerio.load(html);
    const danhSachTruyen = [];
    $(
      'div.list.list-truyen.col-xs-12 > div > div.col-xs-9 > div > h3 > a',
    ).each((index, element) => {
      const title = $(element).text();
      const link = $(element).attr('href');
      danhSachTruyen.push({ title, link });
    });
    return danhSachTruyen;
  }
}
