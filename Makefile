images/%.png: %.png.64
	base64 -d $< > $@

out: images/test-milje.png
