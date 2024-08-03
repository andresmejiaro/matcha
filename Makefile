# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    Makefile                                           :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: amejia <amejia@student.42.fr>              +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2023/07/31 00:03:16 by amejia            #+#    #+#              #
#    Updated: 2024/08/03 15:44:34 by amejia           ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

DOCKER = docker
COMPOSE = docker compose -f docker-compose.yml

build:
	$(COMPOSE) build

up: 
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
	@	docker network prune -f
	rm -rf $(FRONTENDDIR)/build


.PHONY: build up down re clean fclean front_build front_build
