
FROM nginx:1.29-alpine AS nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/prod.conf /etc/nginx/conf.d
COPY ./dist /static