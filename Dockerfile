FROM resin/rpi-node:6.5.0-slim-20160907

# Save source folder
RUN printf "%s\n" "${PWD##}" > SOURCEFOLDER

# Move to app dir
WORKDIR /usr/src/app

# Move app to filesystem
COPY "$SOURCEFOLDER/app" ./

## uncomment if you want systemd
ENV INITSYSTEM on

# Start app
CMD ["bash", "/usr/src/app/start.sh"]
