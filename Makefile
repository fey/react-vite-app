install:
	npm ci

start:
	npx vite

lint:
	npx eslint src

lint-fix:
	npx eslint src --fix

test:
	echo 1

build:
	npx vite build

deploy: build
	npx gh-pages -d dist

serve:
	npx vite preview --host 0.0.0.0

compose:
	docker compose up --abort-on-container-exit

compose-build:
	docker compose build

compose-down:
	docker compose down -v --remove-orphans
