chrome.runtime.onStartup.addListener(() => {
    // set up alarm makers
    chrome.storage.local.get("alarms", alarmsRaw => {
        const alarms = alarmsRaw.alarms;

        for (const alarm of alarms) {
            const time = new Date();
    
            // process alarm strin
            const parsedTime = alarm.split(":");

            time.setHours(parseInt(parsedTime[0]));
            time.setMinutes(parseInt(parsedTime[1]));

            time.setSeconds(0);
            time.setMilliseconds(0);

            chrome.alarms.create("Alarm " + alarm, {
                when: time.getTime()
            });
        }
    })
});

chrome.alarms.onAlarm.addListener(alarm => {
    if (!alarm.name.startsWith("Alarm ")) {
        return;
    }
    alarm.name = alarm.name.slice(6);

    chrome.notifications.create({
        message: `Your ${alarm.name} alarm has rung!`
    })
});