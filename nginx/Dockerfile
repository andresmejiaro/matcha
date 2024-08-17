
FROM debian:buster

RUN apt-get update && apt-get install -y nginx curl && mkdir -p /etc/nginx/certs

COPY ngnix.conf /etc/nginx/conf.d/default.conf
COPY sitesEnabled-Default.conf /etc/nginx/sites-enabled/default

EXPOSE 3000
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]