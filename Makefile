all:
	dendry make-html --pretty
	cp out/html/* ./
	zip game.zip *.js index.html *.css images/* music/*
	#html-inline index.html > archivist.html
	#zip archivist.zip archivist.html *.css images/*
deploy:
	butler push game.zip red-autumn/archivist:win-mac-linux-android
deploy-dl:
	butler push game.zip red-autumn/archivist:download
