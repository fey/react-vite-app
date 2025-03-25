install:
	npm ci

start:
	npx vite

lint:
	npx eslint

lint-fix:
	npx eslint --fix

test:
	echo 1

build:
	npx vite build

deploy: build
	npx gh-pages -d dist

serve:
	npx vite preview
