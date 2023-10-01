const profiles = ['https://www.linkedin.com/in/vivek-tripathi1/','https://www.linkedin.com/in/shubhamkumarit/','https://www.linkedin.com/in/utkarsh---srivastava/']

var button = document.getElementById("button")

button.addEventListener("click", async() => {
    for(const profile of profiles){
        const tab = await chrome.tabs.create({ url: profile, active: false });
        await new Promise(resolve => setTimeout(resolve, 5000));
        await chrome.tabs.sendMessage(tab.id, {action : 'fetch-detail'}, async res => {
            await fetch(`http://localhost:3000/api/profiles`, {
                method : 'POST',
                headers: {'Content-Type': 'application/json'},
                body : JSON.stringify(res)
            })
        })
        await chrome.tabs.remove(tab.id);
    }
});