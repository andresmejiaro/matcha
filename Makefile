# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    Makefile                                           :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: amejia <amejia@student.42.fr>              +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2023/07/31 00:03:16 by amejia            #+#    #+#              #
#    Updated: 2024/07/12 21:49:00 by amejia           ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

DOCKER = docker
COMPOSE = docker-compose -f docker-compose.yml

build:
	docker-compose -f docker-compose.yml build

up:
	docker-compose -f docker-compose.yml up 

down:
	docker-compose -f docker-compose.yml down

re: down build up

clean:
	@echo "\033[1;33mCleaning containers\033[0m"
	@$(DOCKER)-compose down -v --rmi all --remove-orphans

fclean:
	@echo "\033[1;33mCleaning containers\033[0m"
	@$(DOCKER)-compose down -v
	@echo "\033[1;33mPruning Docker\033[0m"
	@$(DOCKER) system prune -a --force
	@echo "\033[1;33mRemoving Docker Volumes\033[0m"
	@$(DOCKER) volume prune --force


.PHONY: build up down
