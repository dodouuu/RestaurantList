# Express app - Restaurant List
打造一個網站來收集另一種愛好：餐廳
> Bread is the staff of life.
---
## 功能列表

1. 在首頁瀏覽餐廳資料，包含：
    1. 餐廳照片
    2. 餐廳名稱
    3. 餐廳分類
    4. 餐廳評分
2. 點每一間餐廳的卡片，可以查看詳細資訊：
    1. 類別
    2. 地址 (結尾的箭頭點進去會跳轉到 Google Map)
    3. 電話
    4. 描述
    5. 圖片
3. 可以搜尋【名稱】或者【類別】來找到特定餐廳
---
安裝
1. 從 Terminal (command line interface) 移動到想存放專案的位置，執行：
```
git clone https://github.com/dodouuu/RestaurantList.git
```
2. 進入 repository 
```
cd RestaurantList
```
3. 安裝套件
```
npm i express@4.16.4
```
4. 執行
```
npm run dev
```
5. 確認 Terminal 顯示
```
[nodemon] 2.0.16
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node app.js`
Express is listening on localhost: 3000
```
代表啟動成功，打開瀏覽器，在網址列輸入http://localhost:3000
