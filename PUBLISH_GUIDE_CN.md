# 学术主页发布指南（Windows / GitHub Pages）

这份指南对应本项目第一版。第一次做 GitHub Pages 时，按顺序操作即可。

## A. 先确认你的 GitHub 用户名

登录 GitHub，点击右上角头像。你的个人主页地址通常是：

`https://github.com/你的用户名`

假设用户名是 `abc123`，那么你的学术主页仓库必须命名为：

`abc123.github.io`

最终网址就是：

`https://abc123.github.io`

## B. 解压并修改两个必须项

把 ZIP 解压到一个英文路径，例如：

`D:\AcademicHomepage`

推荐用 VS Code 打开这个文件夹。

### 1. 修改 astro.config.mjs

找到：

`const username = 'YOUR_GITHUB_USERNAME';`

替换成你的真实 GitHub 用户名，例如：

`const username = 'abc123';`

### 2. 修改 public/robots.txt

把：

`https://YOUR_GITHUB_USERNAME.github.io/sitemap-index.xml`

替换为：

`https://abc123.github.io/sitemap-index.xml`

## C. 修改你自己的学术信息

绝大部分内容都集中在 `src/data/`，不要去页面里到处找文字。

### profile.ts

修改：姓名、身份、单位、个人介绍、Email、Google Scholar、ORCID、GitHub、CV PDF 路径。

如果某个链接暂时没有，保留空字符串 `''` 即可，网页不会显示空链接。

### publications.ts

每篇论文一个对象。共享信息只写一次：年份、作者、期刊、DOI、标签；标题、摘要、状态分别写 en/zh/ja。

### projects.ts

修改四个研究方向。可以继续增加第五、第六个。

### news.ts

写近期动态，例如论文录用、入学、获奖、会议报告。

### experience.ts

写教育和研究经历。

## D. 本地预览（强烈建议）

### 1. 安装 Node.js

安装 Node.js 22 LTS。

### 2. 打开 CMD

Win + R → 输入 `cmd` → Enter。

如果项目在：

`D:\AcademicHomepage`

输入：

```bat
cd /d D:\AcademicHomepage
```

然后：

```bat
npm install
```

第一次会下载依赖。

完成后：

```bat
npm run dev
```

终端会显示一个本地地址，通常是：

`http://localhost:4321`

复制到浏览器打开。

检查：

- EN / 中文 / 日本語 是否都能切换
- 手机宽度下菜单是否正常
- Dark / Light 是否正常
- Ctrl + K 是否能搜索
- Publication 筛选是否正常
- BibTeX 是否可复制
- 所有个人信息是否正确

停止本地服务器：在 CMD 按 `Ctrl + C`。

正式发布前再执行：

```bat
npm run build
```

## E. 在 GitHub 创建仓库

1. 登录 GitHub。
2. 右上角 `+` → `New repository`。
3. Repository name 填：`你的用户名.github.io`。
4. Visibility 选 `Public`。
5. 不要勾选 Add a README，因为项目里已经有 README。
6. 点击 `Create repository`。

## F. 在 GitHub 开启 Pages 的 Actions 发布方式

进入刚创建的仓库：

`Settings` → 左侧 `Pages`。

在 `Build and deployment` 下：

`Source` → 选择 `GitHub Actions`。

这个项目已经自带：

`.github/workflows/deploy.yml`

所以不需要你自己写 workflow。

## G. 第一次上传：最简单的 GitHub 网页方式

回到仓库首页。

点击：

`Add file` → `Upload files`

把解压后的项目**里面的所有文件和文件夹**拖进去，而不是把最外层 `mingrui-academic-homepage` 文件夹当成一层再上传。

必须确认 `.github` 文件夹也上传了。

页面底部 Commit message 写：

`Initial academic homepage`

点击：

`Commit changes`

## H. 查看自动发布

点击仓库顶部的：

`Actions`

你应该看到：

`Deploy to GitHub Pages`

正常流程：

`Build` → `Deploy`

变成绿色勾之后，访问：

`https://你的用户名.github.io`

如果第一次上传发生在你设置 Pages Source 之前，可以进入 Actions → Deploy to GitHub Pages → Run workflow，再手动运行一次。

## I. 以后如何更新

### 方法 1：GitHub 网页直接改

适合只改一两条 News 或 Publication：

1. 找到对应文件。
2. 点击铅笔图标 Edit。
3. 修改。
4. `Commit changes`。
5. GitHub Actions 自动重新部署。

### 方法 2：本地 Git（以后推荐）

安装 Git 后，在项目目录执行：

```bat
git init
git add .
git commit -m "Initial academic homepage"
git branch -M main
git remote add origin https://github.com/你的用户名/你的用户名.github.io.git
git push -u origin main
```

以后更新只需要：

```bat
git add .
git commit -m "update publications"
git push
```

## J. PDF 简历

把三份 PDF 放到：

`public/cv/`

例如：

- `cv-en.pdf`
- `cv-zh.pdf`
- `cv-ja.pdf`

然后在 `src/data/profile.ts` 改成：

```ts
cvPdf: {
  en: '/cv/cv-en.pdf',
  zh: '/cv/cv-zh.pdf',
  ja: '/cv/cv-ja.pdf'
}
```

## K. 你的论文怎么新增

复制 `src/data/publications.ts` 中现有的 publication 对象，在数组里继续添加即可。

最重要的是：

- `slug` 只能用英文小写、数字和连字符
- `year` 写数字
- `type` 只能用 `journal` / `conference` / `preprint`
- 三种语言都填写
- `featured: true` 表示它也会出现在首页

## L. 发布前检查

- 删除所有不想公开的信息
- 确认邮箱是否愿意公开
- 确认未公开投稿是否需要出现在主页
- DOI 与作者顺序检查
- CV 中不要放住址、证件号、私人手机号
- 搜索项目内是否还有 `YOUR_GITHUB_USERNAME`
- `npm run build` 无报错后再 push
