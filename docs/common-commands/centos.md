## 常用知识

- `centOS`使用的是`yum`而不是`apt-get`，前者是`Red Hat`阵营，后者是`ubuntu` `Debian`阵营

## 工具

### ifconfig

`centOS7`上没有`ifconfig`，需要自行安装

```bash
yum search ifconfig

# net-tools.x86_64 : Basic networking tools 这个就是
```

### locate

安装`locate`工具(查找file位置)
```bash
yum search locate

# `mlocate.x86_64` 这个就是
```

::: tip
安装之后不能直接使用，需要更新db

```bash
sudo updatedb
```
:::

## 防火墙

::: tip
`centOS7`内置了防火墙`firewalld`，centOS在开发服务时需要手动设置防火墙
:::

::: warning
防火墙默认开启
:::

### 查看端口状态

```bash
firewall-cmd --query-port 80/tcp --zone=public
```

::: tip
`yes`为开启，`no`为关闭
:::

### 开启端口

```bash
firewall-cmd --zone=public --add-port=80/tcp --permanent
```

::: tip
`--permanent` 是永久有效
:::

::: warning
网页的**80**端口和数据库**3306**端口是不开放的
:::

## 端口

::: warning
端口默认不开放
:::

### 查看端口占用

```bash
lsof -i :7000
```

### 解除端口

```bash
kill -9 [pid]
```

