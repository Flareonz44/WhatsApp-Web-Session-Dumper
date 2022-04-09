if ((document.title).indexOf("WhatsApp") >= 0) {
    sesf = prompt("Paste raw data from .was files");
    if (sesf.indexOf(">>") >= 0) {
        sesfarr = sesf.split(">>");
        for (i = 0; i < sesfarr.length; i++) {
            if (i == 0) {
                localStorage.clear();
                let keyl = sesfarr[0].split("\n");
                for (j = 0; j < keylist.length; j++) {
                    if (keyl[j].indexOf(":::") >= 0) {
                        let key = keyl[j].split(":::")[0];
                        let val = keyl[j].split(":::")[1];
                        localStorage.setItem(key, val);
                    }
                }
            } else if (i == 1) {
                sessionStorage.clear();
                keyl = sesfarr[0].split("\n");
                for (j = 0; j < keyl.length; j++) {
                    if (keyl[j].indexOf(":::") >= 0) {
                        let key = keyl[j].split(":::")[0];
                        let val = keyl[j].split(":::")[1];
                        sessionStorage.setItem(key, val);
                    }
                }
            } else if (i == 2) {
                sesfarr[2] = sesfarr[2].replace(/(\n)/g, "");
                let idb = indexedDB.open("wawc");
                idb.onsuccess = function() {
                    let dbm = idb.result;
                    let d1 = dbm.transaction("user", "readwrite").objectStore("user").clear();
                    d1.onsuccess = function() {
                        let d2 = dbm.transaction("user", "readwrite").objectStore("user").put(JSON.parse(sesfarr[2]));
                    }
                }
            }
        }
        alert("\nData successfuly loaded!" + "\n\n       Created by Flareonz44");
        location.reload();
    } else {
        alert("\nERROR\nA valid raw data must be pasted!");
    }
} else {
    alert("\nERROR\nRun Script inside WhatsApp's tab!");
}
