const data = {
    slackProfilePicturePath : './me-564px.jpg',
    scrapeAnyWebHref:"http://scrapeanyweb.site/",
    keywordLinkHref:"http://keyword.dog/",
    hngLinkHref:"http://hng.tech/learn",
    DisplayName : 'Evan',
    slackEmail : 'egwomevan323@gmail.com',
    dayOfWeek : ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    time : {
        hrs : '',
        mins : '',
        secs : ''
    }
}

const slackProfilePicture = document.querySelector('[data-testid="slackProfilePicture"]')
const scrapeanyweb = document.querySelector('[data-testid="scrapeanywebLink"]')
const keywordLink = document.querySelector('[data-testid="keywordLink"]')
const hngLink = document.querySelector('[data-testid="hngLink"]')
const slackEmail = document.querySelector('[data-testid="slackEmail"]')
const slackDisplayName = document.querySelector('[data-testid="slackDisplayName"]')
const currentDay = document.querySelector('[data-testid="currentDay"]')
const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]')

slackProfilePicture.src = data.slackProfilePicturePath
slackProfilePicture.alt = data.DisplayName
slackProfilePicture.style.width = '100%'
scrapeanyweb.href = data.scrapeAnyWebHref
keywordLink.href = data.keywordLinkHref
hngLink.href = data.hngLinkHref
slackDisplayName.textContent = data.DisplayName
slackEmail.textContent = data.slackEmail

const updateFunction = ()=>{
    const currentDate = new Date()
    currentDay.textContent = data.dayOfWeek[currentDate.getUTCDay()]

    data.time.hrs = currentDate.getUTCHours() < 10 ? '0'+currentDate.getUTCHours() : currentDate.getUTCHours()
    data.time.mins = currentDate.getUTCMinutes() < 10 ? '0'+currentDate.getUTCMinutes() : currentDate.getUTCMinutes()
    data.time.secs = currentDate.getUTCSeconds() < 10 ? '0'+currentDate.getUTCSeconds() : currentDate.getUTCSeconds()

    currentTimeUTC.textContent = `${data.time.hrs}:${data.time.mins}:${data.time.secs}:${currentDate.getUTCMilliseconds()}`
}
setInterval(updateFunction, 50)
