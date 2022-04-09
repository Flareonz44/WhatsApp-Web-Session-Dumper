# WhatsApp Web Session Dumper

## Disclaimer ##

These scripts are only for educational propouses. You musn't use them with evil intentions. I'm not responsible for the bad or harmful use you give to all the information provided within this project.

## What is it exactly? ##

Well, this is what it's name sais: It a dumper which dumps all the WhatsApp Web data that is stored on your computer into a file. Then you could inject it on another computher and access the web session as if you were in the first computer, without scanning the QR again.This repo consist of two files: **wawebb_session_dumper.js** and **wawebb_session_injector.js**. These two files are independent, so they could be runned separately without affecting the results. Let's see what they do.

### wawebb_session_dumper.js ###

This script iterates over all the data stored on your localStorage, arranges it and creates a file that is automatic downloaded, after providing a name fot the file.

### wawebb_session_injector.js ###

This scripts does the inverse process of the script above, it asks for the data (created with the last script) of the file, and then it restores all the saved data back to localStorege, then it reloads the page.

## How to use it ##

This is very easy to use. First you have to create two bookmarks on Chrome: one for the dumper and the other for the injector. Open the file with github web, select all the code, copy it, and then, create a new bookmark. In the name write **wawebb_session_dumper.js** and where sais 'URL', delete all and write 'javascript:' (without quotes) and then, paste the copied coded next tho the ':', like so:

![image](https://user-images.githubusercontent.com/72309928/162549188-8214b615-91b8-4c03-92ed-b6c648e6f54e.png)

Then do the same for the other script and save those bookmarks into the same folder. Now go to [WhatsApp Web](https://web.whatsapp.com/ "WhatsApp Web") and scan the QR as always. Wait until it is completely loaded and when you are ready, go to your bookmark folder and click on **wawebb_session_dumper.js**. A prompt will apear asking for for a name for the session, just provide the name you like and click on ok. A file will be downloaded. Thats the session file.

Now, copy that file into an USB stick, or save it on the cloud (or wherever you want) and go to another computer. Open the session file with the notepad and select all the text and copy it to the clipboard. Go to [WhatsApp Web](https://web.whatsapp.com/ "WhatsApp Web") on Chrome and launch the bookmark **wawebb_session_injector.js**. A promp will apear asking you to provide the content of the session file. Just Ctrl + V or right-click-then-paste on the textbox the content of the clipboard and hit ok. Finally realod the page and thats all! you must be logged with the web session like in the first computer.

## Notes ##

This script was also tested on Android 10 Chrome Browser, so you can dump and inject on Android too! Anyway, I'm afraid that there is not a 100% compatibility, so it may work on the most of the latest devices, but it could fail to execute on older devices. This script was tested on Chrome Browser version 97. Not tested on other browsers.

## The darkside of this tool ##

As a cyber-security entusiast, I must say that this tool could be used to gain access to someone's WhatsApp. You only need to know the victim's phone password (or PIN) and have phisical access to his phone for at least 1 minute with Internet connection. 

Open Chrome Browser on your phone, search for 'whatsapp web' and, on the Google's results page, put your browser in Desktop Mode, then reload the result page and go to Whatsapp Web. Put your phone in landscape mode (rotate it) and wait untill you see the QR code. When it is loaded, grab the victim's phone, go to his WhatsApp and add a new Conected Device, then scan the QR on your phone and when it's done, launch the **wawebb_session_dumper.js** bookmark (previously created on your Chrome Browser) and then provide a name for the session file.

The next step is to copy the session file to your personal computer and injet it on your browser. Now you can see the victim's WhatsApp.

## How to protect yourself from this attack ##

It's very simple, just always follow this advices:
- 
