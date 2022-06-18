
const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': '4AD2E985D2', // Kalau habis beli sendiri
}

// Other
global.premium = ['6285758050756','6285709450452']
global.owner = ['6285758050756']
global.premium = ['6285758050756','6285709450452']
global.packname = '© 2022 | @ryzuubot'
global.rkyt = []
global.author = 'By @eziiemlit'
global.ownernomer = '6285758050756'
global.ownername = 'Ezii Ganteng Banget'
global.botname = 'RyzuuBot'
global.footer = `2022 | WhatsApp Bot By @eziiemlit`
global.game = `2022 | Game By @ryzuubot`
global.email = 'ohyziro01@gmail.com'
global.region = 'Jepang 🇯🇵'
global.sc = 'https://youtube.com'
global.ig = 'https://www.instagram.com/ohyziro'
global.insta = 'https://www.instagram.com/ohyziro'
global.mygc = 'https://chat.whatsapp.com/FBioPs09A4SJFFhKYet5cr'
global.myweb = 'https://api-anya.herokuap.com'
global.wlcm = ['120363043965529911@g.us','120363023112413670@g.us','19054091487-1424650263@g.us','120363022988111568@g.us']
global.gcrevoke = ['19054091487-1424650263@g.us']
global.banUser = ['6281366679021@s.whatsapp.net']
global.ntilink = ['120363043965529911@g.us','120363022988111568@g.us']
global.prefa = ['','!','.','🐦','🐤','🗿']
global.prefix = ['#','.','!']
global.sp = '⭔'
global.sessionName = 'session'
global.mess = {
    success: '*_Doneeee_*',
    admin: '*_Command Ini Hanya Bisa Digunakan Oleh Admin Grup!_*',
    botAdmin: '*_Bot Harus Menjadi Admin Terlebih Dahulu!_*',
    owner: '*_Command Ini Khusus Owner_*',
    group: '*_Command Ini Hanya Bisa Digunakan Di Dalam Grup!_*',
    private: '*_Fitur Digunakan Hanya Untuk Private Chat!_*',
    bot: '*_Fitur Khusus Pengguna Nomor Bot!_*',
    wait: '*_Wait a minute, data is being processed!_*',
    ban: '*_Kamu Telah Dibanned Oleh Owner, Jika Ingin Di Unbanned Silahkan Hub Owner!_*',
    premium: '*_Hanya Khusus User Premium!_*',
    endLimit: '*_Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12_*',
}
    global.limitawal = {
    premium: "Infinity",
    free: 25,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./image/ezty.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
