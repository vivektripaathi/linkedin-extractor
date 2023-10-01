chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'fetch-detail') {
        var url = document.URL
        var name = document.querySelector('.text-heading-xlarge.inline.t-24.v-align-middle.break-words').innerText
        var about = document.querySelector('.display-flex.ph5.pv3').innerText
        var bio = document.querySelector('.text-body-medium.break-words').innerText
        var location = document.querySelector('.text-body-small.inline.t-black--light.break-words').innerText
        var followerConnectionCount = document.querySelector('.pv-top-card--list.pv-top-card--list-bullet').innerText.split('\n')
        if (followerConnectionCount.length === 1){
            var followerCount = null
            var connectionCount = followerConnectionCount[0].split(' ')[0]
        }
        if (followerConnectionCount.length === 2){
            var followerCount = followerConnectionCount[0].split(' ')[0]
            var connectionCount = followerConnectionCount[1].split(' ')[0]
        } 
        sendResponse({name, about, bio, location, followerCount, connectionCount, url})
    }
});