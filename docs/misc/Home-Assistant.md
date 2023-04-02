# Home Assistant

## install

:::info
因为使用的是树莓派，这里我更喜欢使用`docker`的方式来安装
docker安装，参考[docker](../docker/install.md)
:::

[home assistant官方按照教程](https://www.home-assistant.io/installation/raspberrypi#install-home-assistant-container)

```bash
# 完整的本地按照命令
docker run -d \
  --name hass \
  --restart=unless-stopped \
  --privileged \
  -e TZ=Asia/Shanghai \
  -v /home/ubuntu/home-assistant:/config \
  --network=host \
  ghcr.io/home-assistant/home-assistant:stable
```

:::tip
- **TZ=Asia/Shanghai**
- **-v /home/ubuntu/home-assistant:/config**

分别用于设置本地`hass`的一些配置
:::

## 获取米家App内设备的信息

使用`tools/scripts`获取，参考[https://github.com/PiotrMachowski/Xiaomi-cloud-tokens-extractor](https://github.com/PiotrMachowski/Xiaomi-cloud-tokens-extractor)

## HACS

安装自定义扩展部分

:::caution

要是如要`Connecting to raw.githubusercontent.com (0.0.0.0:443)`

需要先通过能访问`raw.githubusercontent.com`的端，执行`ping raw.githubusercontent.com`获取`ip地址`

通过配置`vi /etc/hosts` 添加一条`hosts`
:::
