# Cent

> 你可能只需要一個記賬軟體。

[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-green.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)
[![Build](https://img.shields.io/badge/build-passing-brightgreen.svg)]()
[![PWA](https://img.shields.io/badge/PWA-supported-blue.svg)]()
[![GitHub Repo](https://img.shields.io/badge/data-storage_on_GitHub-black?logo=github)]()

Cent 是一個 **完全免費、開源的多人協作記賬 Web App**，  
基於 **GitHub 倉庫** 實現數據同步與版本控制，無需服務器，即可實現跨平臺實時同步。

🔗 **在線體驗**：[https://cent.linkai.work](https://cent.linkai.work)  
💾 **開源倉庫**：[https://github.com/IllumiLove/Cent/tree/main](https://github.com/IllumiLove/Cent/tree/main)  
📖 **博客**：[https://illumi.love/](https://illumi.love/)  

> [Cent 1.0 正式發布 🎉](https://glink25.github.io/edit/?path=Cent-10-%E6%AD%A3%E5%BC%8F%E5%8F%91%E5%B8%83-)

---

## ✨ 特性

- 💾 **數據完全自持**：賬本數據保存在你的 GitHub/Gitee 私人倉庫/Web DAV中，無需任何第三方服務器。  
- 👥 **多人協作**：通過 GitHub/Gitee Collaborator 功能即可共用賬本，實時同步修改。 
- 🖼️ **導入導出**：自由導入和導出賬單數據，擺脫數據焦慮，支持微信/支付寶賬單導入
- ⚡️ **增量同步**：只上傳/下載變更數據，大幅縮短同步時間。  
- 📊 **豐富的統計分析**：支持多維度篩選與走勢分析，可自定義分析視圖。  
- 🏷️ **分類與標簽系統**：支持二級分類、自定義標簽、圖標、排序。  
- 💰 **預算管理**：按分類或標簽設定預算並實時監控進度。  
- 🖼️ **附件支持**：可為賬單上傳圖片附件。  
- 📱 **PWA 支持**：可安裝到桌面，像原生 App 一樣使用，支持 iOS 與 Android。  
- 🔒 **完全開源**：部署成本幾乎為零，代碼完全可審計、可自建。

---

>  [Cent 1.1](https://glink25.github.io/post/Cent-%E5%B7%B2%E6%94%AF%E6%8C%81%E5%A4%9A%E5%B8%81%E7%A7%8D%E8%87%AA%E5%8A%A8%E8%AE%B0%E8%B4%A6/) 正式推出，新功能包括快捷指令自動記賬、多幣種等。

## 🧠 核心原理

Cent 是一個“純前端”的 PWA 應用。  
除 GitHub/Gitee OAuth 登錄外，Cent 不依賴任何後端服務。

瞭解詳情：[現在開始將Github作為數據庫](https://glink25.github.io/post/%E7%8E%B0%E5%9C%A8%E5%BC%80%E5%A7%8B%E5%B0%86Github%E4%BD%9C%E4%B8%BA%E6%95%B0%E6%8D%AE%E5%BA%93/)

### 🗂 數據結構

- 每個賬本（Book）即為一個 GitHub/Gitee 倉庫。
- 數據以 JSON 格式存儲在倉庫中，支持歷史版本回滾。
- 通過倉庫名識別賬本，實現多賬本管理。

### 🔁 增量同步機制

Cent 內置一套自定義的增量同步策略，僅同步增量差異：  
- 首次同步：完整下載數據。  
- 後續同步：僅傳輸新增或修改部分。  
- 支持離線緩存與斷點續傳。  

該機制顯著提升了同步效率，使得多人協作體驗流暢自然。

### 🧩 可擴展同步端點

同步邏輯經過抽象封裝，未來將支持：  
- 自建服務器  
- 網盤（如 Dropbox、OneDrive）  
- 本地離線賬本  

---

## 📈 功能預覽

| 功能 | 截圖 |
|------|------|
| 二級分類 & 標簽管理 | ![分類示例](https://glink25.github.io/post-assets/mgucw881-cent-accountting.jpg) |
| 自定義標簽 | ![標簽示例](https://glink25.github.io/post-assets/mgucw884-cent-tag-1.jpg) |
| 統計與分析視圖 | ![統計分析](https://glink25.github.io/post-assets/mgucw884-cent-stat.jpg) |
| 預算管理 | ![預算視圖](https://glink25.github.io/post-assets/mgucw884-cent-budget.jpg) |
| GitHub 協作 | ![協作功能](https://glink25.github.io/post-assets/mgucw884-github-collaborator.jpg) |

---

## 🚀 部署與使用

### 方式一：直接使用線上版本

1. 打開 [https://cent.linkai.work](https://cent.linkai.work)
2. 使用 GitHub 登錄授權
3. 新建賬本（將自動創建一個倉庫）
4. 開始記賬 🎉

### 方式二：自行部署

1. Fork 本倉庫  
2. 在 [Cloudflare Pages](https://pages.cloudflare.com/) 或任意靜態托管平臺部署  
3. 在登錄界面手動輸入 GitHub Token 使用  
4. 所有賬本與數據均存儲於你的 GitHub 倉庫中  

> 出於安全考慮，self-hosted 方式無法支持 Github/Gitee 一鍵登錄，需要自行在Github/Gitee設定頁面生成具有Repo讀寫權限的token，通過手動輸入token功能使用。
Cent使用Cloudflare Workers部署了一個線上鑒權服務，該服務只針對受信任的功能變數名稱提供服務。如果需要快捷登錄服務，可以參考這個項目[cent-github-backend](https://github.com/IllumiLove/Cent/tree/main-github-backend)項目創建自己的後端服務，並自己申請對應平臺的OAuth app。

---

## 🧪 開發計劃

- ✅ 增量同步核心實現  
- ✅ 多人協作賬本  
- 🚧 自動測試體系  
- 🚧 地圖支出可視化  
- 🚧 更多同步端點（網盤 / 自建服務器）  
- 🚧 移動端交互優化  

---

## 💬 貢獻與反饋

Cent 歡迎所有開發者與用戶參與貢獻，提交代碼前請參考[貢獻指南](docs/contributing/zh.md)：

> QQ交流群：861180883

```bash
# 克隆項目
git clone https://github.com/IllumiLove/Cent/tree/main.git

# 安裝依賴
pnpm install

# 本地運行
pnpm dev

# 格式校驗
pnpm lint
```

## 📜 許可證

本項目採用 Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)
 協議。
 - 允許共用、改編與再發布
 - 必須署名原作者
 - 禁止商業使用
 - 派生作品須使用相同許可協議

 ---


## ☕️ Buy Me a Coffee

感謝您對本項目的支持！Cent目前僅由單人支持開發，您的捐贈將用於維護和持續開發。

---

<details>
<summary>點擊查看</summary>

### 💰 支付寶 (Alipay)


<img src="https://glink25.github.io/post-assets/sponsor-solana.jpg" width="50%" alt="支付寶收款碼">

---

### 🌐 Solana (SOL)

**錢包地址:**

`vEzM9jmxChx2AoMMDpHARHZcUjmUCHdBShwF9eJYGEg`

**二維碼:**

<img src="https://glink25.github.io/post-assets/sponsor-alipay.jpg" width="50%" alt="solana">

---
</details>

 # Cent

> You might only need an accounting software.

[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-green.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)
[![Build](https://img.shields.io/badge/build-passing-brightgreen.svg)]()
[![PWA](https://img.shields.io/badge/PWA-supported-blue.svg)]()
[![GitHub Repo](https://img.shields.io/badge/data-storage_on_GitHub-black?logo=github)]()

Cent is a **completely free, open-source, collaborative accounting Web App**,  
which uses a **GitHub Repository** for data synchronization and version control, enabling real-time cross-platform sync without a server.

🔗 **Live Demo**: [https://cent.linkai.work](https://cent.linkai.work)  
💾 **Open Source Repository**: [https://github.com/IllumiLove/Cent/tree/main](https://github.com/IllumiLove/Cent/tree/main)  
📖 **Blog**: [https://illumi.love/](https://illumi.love/)  

---

## ✨ Features

- 💾 **Fully Self-Contained Data**: Ledger data is stored in your private GitHub repository, without any third-party servers.  
- 👥 **Multi-User Collaboration**: Share ledgers and synchronize changes in real-time using the GitHub Collaborator feature.  
- ⚡️ **Incremental Sync**: Only uploads/downloads changed data, significantly reducing sync time.  
- 📊 **Rich Statistical Analysis**: Supports multi-dimensional filtering and trend analysis, with customizable analysis views.  
- 🏷️ **Category and Tag System**: Supports two-level categories, custom tags, icons, and sorting.  
- 💰 **Budget Management**: Set budgets by category or tag and monitor progress in real-time.  
- 🖼️ **Attachment Support**: Allows uploading image attachments for bills.  
- 📱 **PWA Support**: Can be installed to the desktop and used like a native App, supported on iOS and Android.  
- 🔒 **Completely Open Source**: Deployment cost is nearly zero, the code is fully auditable and can be self-hosted.

---

## 🧠 Core Principles

Cent is a "pure frontend" PWA application.  
Apart from GitHub OAuth login, Cent does not rely on any backend services.

### 🗂 Data Structure

- Each ledger (Book) corresponds to a GitHub repository.
- Data is stored in JSON format within the repository, supporting historical version rollback.
- Multi-ledger management is achieved by identifying ledgers via repository names.

### 🔁 Incremental Sync Mechanism

Cent incorporates a custom incremental synchronization strategy, only syncing the differential changes:  
- Initial Sync: Full data download.  
- Subsequent Sync: Only transfers newly added or modified parts.  
- Supports offline caching and resume capability.  

This mechanism significantly improves sync efficiency, leading to a smooth and natural collaborative experience.

### 🧩 Extensible Sync Endpoints

The synchronization logic has been abstracted and encapsulated, with future support planned for:  
- Self-hosted Servers  
- Cloud Drives (e.g., Dropbox, OneDrive)  
- Local Offline Ledgers  

---

## 📈 Feature Preview

| Feature | Screenshot |
|------|------|
| Two-Level Categories & Tag Management | ![Category Example](https://glink25.github.io/post-assets/mgucw881-cent-accountting.jpg) |
| Custom Tags | ![Tag Example](https://glink25.github.io/post-assets/mgucw884-cent-tag-1.jpg) |
| Statistics and Analysis View | ![Statistical Analysis](https://glink25.github.io/post-assets/mgucw884-cent-stat.jpg) |
| Budget Management | ![Budget View](https://glink25.github.io/post-assets/mgucw884-cent-budget.jpg) |
| GitHub Collaboration | ![Collaboration Feature](https://glink25.github.io/post-assets/mgucw884-github-collaborator.jpg) |

---

## 🚀 Deployment and Usage

### Method 1: Use the Online Version Directly

1. 打开 [https://cent.linkai.work](https://cent.linkai.work)
2. Log in and authorize with GitHub
3. Create a new ledger (a new repository will be created automatically)
4. Start recording transactions 🎉

### Method 2: Self-Deployment

1. Fork this repository  
2. Deploy on [Cloudflare Pages](https://pages.cloudflare.com/) or any static hosting platform  
3. Manually input your GitHub Token on the login screen to use it  
4. All ledgers and data are stored in your GitHub repositories  

> For security reasons, the self-hosted method cannot support GitHub/Gitee one-click-authentication. You will need to manually generate a token with read and write permissions for the repository (Repo) on the Github/Gitee settings page, and use it through the manual token input feature.
Cent uses Cloudflare Workers to deploy an online authentication service, which only provides services for trusted domains. If you require a quick login service, you can refer to the project [cent-github-backend](https://github.com/IllumiLove/Cent/tree/main-github-backend) to create your own backend service and apply for an OAuth app on the corresponding platform yourself.

---

## 🧪 Development Plan

- ✅ Incremental sync core implementation  
- ✅ Multi-user collaborative ledgers  
- 🚧 Automated testing system  
- 🚧 Map visualization of expenditures  
- 🚧 More sync endpoints (Cloud Drives / Self-hosted Servers)  
- 🚧 Mobile interaction optimization  

---

## 💬 Contribution and Feedback

Cent welcomes all developers and users to contribute:

```bash
# Clone the project
git clone [https://github.com/IllumiLove/Cent/tree/main.git](https://github.com/IllumiLove/Cent/tree/main.git)

# Install dependencies
pnpm install

# Run locally
pnpm dev

# Lint
pnpm lint
```

## 📜 License
 - This project is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) License.
 - You are free to share, adapt, and redistribute.
 - You must give appropriate credit.
 - You may not use the material for commercial purposes.
 - If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original.
