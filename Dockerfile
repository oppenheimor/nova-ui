FROM hub-dev.hexin.cn/pack-ci-plugin/frontend/node:20.13.1-slim

COPY ./ /nova-ui
WORKDIR /nova-ui
RUN ls -al
RUN chmod 755 ./bootstrap.sh
CMD ["./bootstrap.sh"]
