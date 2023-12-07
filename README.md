Small repo I'm working to automatically redirect user from pathofexile.fandom.com to poewiki.net as it is more frequently updated and is also GGG (the game's developers/publisher) hosted.

The extension runs a script in the “background” to handle the redirection (basically the browser gives the extension its own environment to run in), but the script isn't persistant in that all chromium and firefox browsers disable to script from running until you navigate to a link containing `pathofexile.fandom.com`. 

## install for chrome / chromium browsers
1. Navigate to the `chrome://extensions` webpage (just type in that URL)
2. Click “developer mode” on the top left.
3. Download this repository:
   - Run `git clone https://github.com/anmolsinghbhullar/redirect-url-extension.git` in the directory of your choosing if you have git CLI on your command tools/terminal) _*OR*_
   - Click on the `code` button and click `Download zip`. Unzip with your favourite unzip tool into the directory of your choosing.
4. Click “Load unpacked” and navigate to the folder where you placed the downloaded repo. Then, select the `chrome` folder.
5. Navigate to a random `pathofexile.fandom.com` link to make sure it's working but it should be working as long as you've enabled it

## install for firefox

TODO 
	Will write an instruction on how to side-load an extension and might also submit it to mozilla addons distribution platform (AMO)
