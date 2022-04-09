function save(data) {
    var doc = document.createElement("a");
    doc.href = window.URL.createObjectURL(new Blob([data], {
        type: "text/plain"
    }));
    filen = prompt("Input session name", "saved-session") + ".was";
    if (!(filen == "null.was")) {
        doc.download = _name;
        doc.click();
        alert("\nFile successfuly saved as " + _name + "\n\nCreated by Flareonz44");
    }
}
if ((document.title).indexOf("WhatsApp") >= 0) {
    naou = "";
    for (i = 0; i < localStorage.length; i++) {
        keyn = localStorage.key(i);
        datag = localStorage.getItem(localStorage.key(i));
        if (!(i == 0)) {
            naou += "\n";
        }
        naou += keyn + ":::" + datag;
    }
    naou += "\n>>\n";
    for (i = 0; i < sessionStorage.length; i++) {
        keyn = sessionStorage.key(i);
        datag = sessionStorage.getItem(sessionStorage.key(i));
        if (!(i == 0)) {
            naou += "\n";
        }
        naou += keyn + ":::" + datag;
    }
    naou += "\n>>\n";
    idb = indexedDB.open("wawc");
    idb.onsuccess = function() {
        dbm = idb.result;
        d1 = dbm.transaction("user", "readwrite").objectStore("user").getAll();
        d1.onsuccess = function() {
            naou += JSON.stringify(d1.result) + "\n";
            save(naou);
        }
    }
} else {
    alert("\nERROR\nRun script inside WhatsApp's tab!");
}
