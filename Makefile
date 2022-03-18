-include .env

APP_NAME = devcyclereact
RELEASE_VERSION ?= $(shell git describe --abbrev=0 --tags)-$(shell git log -1 --format=%h)

git-tag: 
	./.github/auto-increment-tag.sh

docker-build:
	docker build -t $(APP_NAME) --build-arg VCS_REF=$(shell git log -1 --format=%h) --build-arg SOURCE_BRANCH=$(shell git symbolic-ref -q --short HEAD) --build-arg BUILD_DATE=$(shell date -u +"%Y-%m-%dT%H:%M:%SZ") .
	docker tag $(APP_NAME):latest $(APP_NAME):$(shell git describe --always --tags)

docker-release: docker-build
	docker tag $(APP_NAME):latest $(APP_NAME):$(RELEASE_VERSION)

