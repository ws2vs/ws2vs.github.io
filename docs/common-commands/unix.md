## 系统相关

### 查看linux内核版本

```bash
uname -a
```

### 查看当前系统版本

```bash
lsb_release -a
```


## 文件操作

### 解压

```bash
tar zxvf FileName.tar.gz
```

## 网络

### 设置终端临时代理

```bash
export ALL_PROXY=socks5://127.0.0.1:10808
```

### 下载到当前目录

```bash
wget [url]
```

## frp

### server background启动frps

```bash
nohup ./frps -c frps.ini &
```

::: tip
假设端口`7000`，查看是否开启 `lsof -i:7000`
:::

### 内网client background启动

```bash
nohup ./frpc -c frpc.ini &
```