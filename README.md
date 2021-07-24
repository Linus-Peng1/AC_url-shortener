# AC_URL-Shortener
<br>

此專案為一個短網址產生器的網路應用程式。

## 產品功能

<br>

* 使用者可以在首頁表單內輸入原始網址，如 https://www.google.com
* 送出表單之後，畫面會回傳格式化後的短網址
* 在伺服器啟動期間，使用者可以在瀏覽器的網址列，輸入所提供的短網址，瀏覽器就會導向原本的網站

<br>

## 建置環境

<br>

* node.js : 10.15.0
* express: 4.17.1
* express-handlebars: 5.3.2
* mongoose: ^5.12.0
* mongoDB: ^4.2.14

<br>

## 安裝流程

<br>

1. 開啟終端機(terminal)，利用 git clone 將專案下載至本機
```
git clone https://github.com/Linus-Peng1/AC_url-shortener.git
```
2. 進入存放此專案資料夾
```
cd URL-Shortener
```
3. 安裝套件
```
npm install
```
4. 啟動網頁伺服器
```
npm run dev
```
5. 出現下列訊息，表示啟動成功，可點選連結開啟網頁

App is running on http://localhost:3000

