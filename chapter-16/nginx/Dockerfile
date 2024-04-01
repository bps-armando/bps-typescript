FROM nginx:alpine as production
RUN rm /etc/nginx/conf.d/*
RUN rm -rf /usr/share/nginx/html/*
COPY ./default.conf /etc/nginx/conf.d/
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
