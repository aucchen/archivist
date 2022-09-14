all:
	dendry make-html --pretty
	cp out/html/* ./
	zip game.zip *.js index.html *.css backgrounds/* art/*
	html-inline index.html > archivist.html
	zip archivist.zip archivist.html *.css backgrounds/* art/*
deploy:
	butler push game.zip red-autumn/archivist:win-mac-linux-android
deploy-dl:
	butler push archivist.zip red-autumn/archivist:download
