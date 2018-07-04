# Note

### 1 webStorm鸡和马

### 2 ssh key生成
#### 2.1 生成
命令行输入`ssh-keygen -t rsa -C "your_email@example.com"`，一路回车
#### 2.2 复制上传
mac

```
pbcopy < ~/.ssh/id_rsa.pub
# Copies the contents of the id_rsa.pub file to your clipboard
```

windows

```
clip < ~/.ssh/id_rsa.pub
# Copies the contents of the id_rsa.pub file to your clipboard
```

# Eslint-Airbnb-JavaScript-Style-In-WebStorm

强迫症患者的福音

--------

- A space is required before closing bracket
- Validate spacing before closing bracket in JSX (react/jsx-space-before-closing)

> Setting => Editor => Code Style => HTML => Other => Spaces => in empty tag(checked to preserve)

- object-curly-spacing
- ES6 destructuring assignment

> setting => Editor => Code Style => JavaScript => Spaces => Within
> choose `Object literal braces` & `ES6 import/export braces`


# git懒人
## 新增类似git命令

mac版本

- git push
	- 前往bin所在地: cd /usr/bin
	- 创建指令: sudo touch gpp
	- 修改文件权限: sudo chmod 777 gpp
	- 编辑内容如下

```JavaScript
CURRENT_BRANCH_NAME=`git rev-parse --abbrev-ref HEAD`
TARGET_BRANCH_NAME=$1
git push origin ${TARGET_BRANCH_NAME:-$CURRENT_BRANCH_NAME}
```

- git 拉取一个非当前分支的内容，git fetch
	- 同git push前几步骤
	- 编辑内容如下

```JavaScript
TARGET_BRANCH_NAME=$1
git fetch origin ${TARGET_BRANCH_NAME}:${TARGET_BRANCH_NAME}
```

## git alias
        ck = checkout
        aa = add -A
        cm = commit -m
        cma = commit --amend
        ll = pull
        ss = status
        st = stash
        stp = stash pop
        l = log -5
        mg = merge
        bh = branch