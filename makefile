NODE_ENV = production

all:
	@echo Specify something...

clean:
	@rm ./index.js

build:
	browserify ./app/components/app.js -v -d -t [babelify --presets [ es2015 react stage-2] ] -t node-lessify -t imgurify | uglifyjs -c > index.js

watch:
	watchify ./app/components/app.js -v -d -t [babelify --presets [ es2015 react stage-2] ] -t node-lessify -t imgurify -o index.js

upload:
	scp ./index.html ./index.js app_o@kato:webserver/www/lubega
