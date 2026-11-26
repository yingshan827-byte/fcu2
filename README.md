# 逢甲大學全球行銷碩士班網站重新設計

延續原站白底、黑字、橘色 MAR / KET / ING 品牌語彙，以簡化導覽、真實活動照片與中英文字級建立網站層次。本作品為重新設計展示，未取代官方網站。

## 開啟與交付

- 網站根目錄為 `dist/`，可直接雙擊 `dist/index.html` 瀏覽；YouTube 播放建議透過 HTTP 預覽或已部署網址。
- 本機預覽：於專案資料夾執行 `python3 -m http.server 8080 --directory dist`，開啟 `http://localhost:8080/`。
- 純 HTML / CSS / JavaScript，無須安裝依賴。頁面文字可直接編輯 HTML；如修改 `build.py`，請執行 `python3 build.py` 重新產生 HTML。
- HTML 生成器不覆寫 `dist/CSS/style.css`、`dist/JS/main.js` 或照片。
- `python3 verify.py` 檢查內部連結、圖片、錨點、H1、語系、SEO 描述及 JSON-LD。

## 檔案架構

```
dist/
  index.html               首頁
  courses.html             課程特色與實作
  faculty.html             師資介紹
  international.html       國際雙聯
  news.html                最新消息與分類
  news-admissions.html     招生公告內頁
  news-brand-visit.html    企業參訪內頁
  news-essex.html           雙聯消息內頁
  admissions.html          招生資訊與 FAQ
  contact.html             聯絡與交通
  sitemap.html             HTML 網站地圖
  404.html                 錯誤頁
  sitemap.xml              搜尋引擎網站地圖
  robots.txt               爬蟲指引
  CSS/style.css            所有樣式
  Pics/                    所有照片與 favicon
  JS/main.js               行動導覽、分類、影片載入
```

## Grid System 與 RWD

- 基礎 `.grid` 使用 12 欄 CSS Grid，內容最大寬度 1360px。
- 桌面首頁採 6 / 6 欄，影片區 5 / 7 欄；平板依可用寬度調整。
- 1100px 以下導覽改為可展開選單；700px 以下主要內容改為單欄。
- 卡片依螢幕由 3 欄改為 2 欄、1 欄。已檢查 390、768、1280px，並修正手機首頁溢出。
- 語意化區塊、跳至內容連結、清楚焦點樣式、Escape 關閉選單、圖片替代文字、減少動態偏好。

## SEO

每頁具有獨立 title / description / canonical、Open Graph、Twitter Card、正確語系、單一 H1 與語意化標題。提供 CollegeOrUniversity、WebSite、WebPage、EducationalOccupationalProgram、BreadcrumbList 及招生 FAQPage 的 JSON-LD（依頁面適用）。所有內容直接存在 HTML 中，不依賴 JavaScript 才能被讀取。

目前 canonical、社群圖片與 sitemap 使用 Sites 部署網址。若改部署到校方正式網域，請更新 `build.py` 的 `ORIGIN` 後重新生成。正式搬站仍須由網域管理者設定 HTTPS、舊網址 301 轉址，並向 Search Console 提交 sitemap；本專案未更動校方 DNS 或原站。

Sites 為私人預覽部署，搜尋引擎無法索引需登入的內容。公開正式部署後，SEO 結構即可供爬蟲使用；不保證搜尋排名。

## YouTube

使用原站介紹影片：https://www.youtube.com/watch?v=30iQGFES8Yo 。首頁點選播放後載入 youtube-nocookie.com 的響應式 iframe，保留外開 YouTube 連結。已透過本機 HTTP 預覽確認實際播放。影片外部服務需網路，file:// 可能受 YouTube 的來源驗證限制。

## 內容、圖片來源與維護

資料核對日期：2026-11-26（台北）。招生依民國 115 / 116 年轉為西元 2026 / 2027 年，甄選報名資訊明確標示為原站預告；正式時程、名額及條件均連回公告確認。師資頁為行銷學系部分師資，非保證當期授課名單。

- 原站首頁：https://globalmarketing.fcu.edu.tw/
- 課程：https://globalmarketing.fcu.edu.tw/課程特色
- 雙聯：https://globalmarketing.fcu.edu.tw/about-3
- Essex：https://globalmarketing.fcu.edu.tw/essex
- 企業參訪：https://globalmarketing.fcu.edu.tw/115走訪奧美與apple品牌
- 錄取公告：https://globalmarketing.fcu.edu.tw/116-甄試入學放榜
- 師資：https://marketing.fcu.edu.tw/teachers/
- 招生處：https://www.fcu.edu.tw/recurit_list/mastr_exam/

Pics 照片取自原網站公開使用的 static.wixstatic.com 圖檔，影片封面來自 YouTube。保留照片原始內容，未以生成式圖像替代活動紀錄。公開正式使用前，網站維護者應確認其既有素材使用授權。

## 驗證

- 12 份 HTML（含 404）：內部連結、資產路徑、錨點、描述與 JSON-LD 檢查通過。
- 11 個內容頁 × 3 種螢幕寬度檢查；手機首頁溢出修正後再次確認通過。
- 手機選單展開與 Escape 關閉、消息分類及 FAQ 展開已驗證。
- 原站 YouTube 影片已在本機頁面內成功播放。
- 預覽畫面：`preview/desktop.jpg`、`preview/mobile.jpg`。
