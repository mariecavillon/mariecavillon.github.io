.PHONY: prepare
prepare: prerequisite generate-ca self-signed-certificate install-nvm install-node-lts

.PHONY: renew-certificate
renew-certificate: generate-ca self-signed-certificate

.PHONY: prerequisite
prerequisite:
	sudo apt install openssl

.PHONY: generate-ca
generate-ca:
	openssl genrsa -des3 -out ./.provision/ca/myCA.key 2048
	openssl req -x509 -new -nodes -key ./.provision/ca/myCA.key -sha256 -days 365 -out ./.provision/ca/myCA.pem

.PHONY: self-signed-certificate
self-signed-certificate:
	openssl genrsa -out ./.provision/ssl/marie.dev.key 2048
	openssl req -new -key ./.provision/ssl/marie.dev.key -out ./.provision/ssl/marie.dev.csr
	openssl x509 -req -in ./.provision/ssl/marie.dev.csr -CA ./.provision/ca/myCA.pem -CAkey ./.provision/ca/myCA.key -CAcreateserial -out ./.provision/ssl/marie.dev.crt -days 825 -sha256 -extfile ./.provision/ssl/marie.dev.ext

.PHONY: install-nvm
install-nvm:
	curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.1/install.sh | bash

.PHONY: install-node-lts
install-node-lts:
	. ~/.nvm/nvm.sh; \
	nvm install 10.14

.PHONY: install-dependencies
install-dependencies: install-nvm install-node-lts
	cd ./site; \
	npm i

.PHONY: install-static
install-static:
	npm i react-static
	./node_modules/.bin/react-static create -n site --template typescript

.PHONY: start
start:
	docker-compose up -d

.PHONY: stop
stop:
	docker-compose down

.PHONY: build
build:
	cd ./site; \
	./node_modules/.bin/react-static build;
	cp -r ./site/dist/. ./docs/

.PHONY: build-docker
build-docker: build
	cd ./site; \
	cp ../Dockerfile.build ./dist/Dockerfile && \
	docker build -t marie.test ./docs/; \

.PHONY: test
test: build-docker
	docker run --rm -p 3000:80 marie.test
