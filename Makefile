# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    Makefile                                           :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: amejia <amejia@student.42.fr>              +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2023/07/31 00:03:16 by amejia            #+#    #+#              #
#    Updated: 2024/07/26 19:19:52 by amejia           ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

DOCKER = docker
COMPOSE = docker compose -f docker-compose.yml
FRONTENDDIR = frontend/src/
FRONTSRC = $(wildcard $(FRONTENDDIR)*.js) $(wildcard $(FRONTENDDIR)*.css) 
FRONTDIRRIN= frontend

build:front_build
	$(COMPOSE) build

up: front_build
	$(COMPOSE) up 

down:
	$(COMPOSE) down

re: down build up

clean:
	@echo "\033[1;33mCleaning containers\033[0m"
	@$(DOCKER) compose down -v --rmi all --remove-orphans
	rm -rf $(FRONTENDDIR)/build

fclean:
	@echo "\033[1;33mCleaning containers\033[0m"
	@$(COMPOSE) down -v
	@echo "\033[1;33mPruning Docker\033[0m"
	@$(DOCKER) system prune -a --force
	@echo "\033[1;33mRemoving Docker Volumes\033[0m"
	@$(DOCKER) volume prune --force
	rm -rf $(FRONTENDDIR)/build

$(FRONTDIRRIN)/package-lock.json: 
	cd $(FRONTDIRRIN) && npm install

front_dev: $(FRONTDIRRIN)/package-lock.json
	cd $(FRONTDIRRIN) && npm start
	
front_build: $(FRONTSRC)
	cd $(FRONTENDDIR) && npm run build


.PHONY: build up down re clean fclean front_build front_build
