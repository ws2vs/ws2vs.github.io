---
slug: git
---

### git alias(也可以写bash)

```
[alias]
    pl = pull
        p = pull
        pp = !sh -c 'CURRENT=`git rev-parse --abbrev-ref HEAD` && git push origin ${CURRENT}'
        ps = !sh -c 'CURRENT=`git rev-parse --abbrev-ref HEAD` && git push origin HEAD:refs/for/${CURRENT}'
        ll = !sh -c 'TARGET=$0 && git fetch origin ${TARGET}:${TARGET}'
        lmg = !sh -c 'git ll $0 && git mg $0'
        nb = checkout -b
        db = !sh -c 'git bh -d $0 && git push origin --delete $0'

        ck = !sh -c 'git checkout $0'
        cka = checkout .
        aa = add -A
        cm = commit -m
        cma = commit --amend
        ss = status
        s = status
        st = stash
        stl = stash list
        stp = stash pop
        l = log -3
        mg = merge
        bh = branch
        cp = cherry-pick
```

### ssh key生成

```bash
# 一路回车
ssh-keygen -t rsa -C "your_email@example.com"
```

:::info 复制到剪切板

```bash
pbcopy < ~/.ssh/id_rsa.pub
# Copies the contents of the id_rsa.pub file to your clipboard
```

```bash
# for windows
clip < ~/.ssh/id_rsa.pub
# Copies the contents of the id_rsa.pub file to your clipboard
```

:::

### 新增类似git命令

mac版本（mac OS mojave 之前需要重启获得bin目录下的root权限，具体可以自行google；mojave之后在安全隐私那添加terminal进Full Disk Access即可）

- git push
    - 前往bin所在地: cd /usr/bin
    - 创建指令: sudo touch gpp
    - 修改文件权限: sudo chmod 777 gpp
    - 编辑内容如下

```
CURRENT_BRANCH_NAME=`git rev-parse --abbrev-ref HEAD`
TARGET_BRANCH_NAME=$1
git push origin ${TARGET_BRANCH_NAME:-$CURRENT_BRANCH_NAME}
```

- git 拉取一个非当前分支的内容，git fetch
    - 同git push前几步骤
    - 编辑内容如下

```
TARGET_BRANCH_NAME=$1
git fetch origin ${TARGET_BRANCH_NAME}:${TARGET_BRANCH_NAME}
```
