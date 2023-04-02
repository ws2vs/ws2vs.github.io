## 安装在centOS7上

[传送门](https://docs.docker.com/engine/install/ubuntu/)

### 在Ubuntu上安装

[https://docs.docker.com/engine/install/ubuntu/](https://docs.docker.com/engine/install/ubuntu/)


## docker 常用命令

### 启动docker

```bash
sudo systemctl start docker
```

### 生成容器

```bash
docker container run --rm -p 8000:3000 -it [docker]
```

### docker-compose

定义和运行多容器(命令行巨复杂可以这样搞)

```bash
sudo apt-get install docker-compose
```