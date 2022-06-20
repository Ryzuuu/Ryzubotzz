//═══════════════════════════════════════════════════════//

  /* SC NO ENC? RECODE SNDIRI DEK😏🍼
   CREDIT BY @vynns & @ohyziro
   
   Thanks To
   - Vynn's
   - Ezty */

/* Note : maaf jelek ga sebagus creator bot lain
cuman bisa segini buatnya maaf hhee, ku udh mau vkum
jdi scny cuman sampai sini, makasih buat orng yg dari dlu ngajarin ku ngebot. */


//═══════════════════════════════════════════════════════//
require('./setting/settings')

const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const yts = require("yt-search");
const fetch = require('node-fetch')
const brainly = require('brainly-scraper');
let google = require('google-it')
const kotz = require("kotz-api");
const hx = require('hxz-api')
const hxz = require('hxz-api')
const xfar = require('xfarr-api');
const XTeam = require('xteam-api');
const ig = require('insta-fetcher');
const maker = require('mumaker')
const { fromBuffer } = require('file-type') 
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,  Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");

// F U N C T I O N📍
const cerpen = require('./lib/cerpen')
const _prem = require("./lib/premium");

//P E N D A F T A R A N📍
let pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))

//━━━━━━━━━━━━━━━[ Lib ]━━━━━━━━━━━━━━━\\
const { color, bgcolor } = require("./lib/color")                                                                    
const { msgFilter } = require('./lib/antispam')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
const { TiktokDownloader } = require('./lib/tiktokdl') 
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const { webp2gifFile, igDownloader }= require("./lib/gif.js")
const { pinterest } = require("./lib/pinterest")
const { giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const {
	    cekPremium,
	    addPremium,
	    delPremium
	} = require('./lib/user.js'); // mengubah dan mengambil data user dalam ./database/user // > Credit By Vynn's

//━━━━━━━━━━━━━━━[ Scrape ]━━━━━━━━━━━━━━━\\
 const { 
  mediafireDl,
  igstalk
 } = require('./function/function.js')

let { covid } = require('./function/scrape/covid.js') 
const { lirikLagu } = require('./function/scrape/lirik')
const { Gempa } = require("./function/scrape/gempa.js");
const { jadwaltv }= require('./function/scrape/jadwaltv');
const geayubi = fs.readFileSync("./function/scrape/Result/Asupan/geayubi.json");
const bocil = fs.readFileSync("./function/scrape/Result/Asupan/bocil.json");
const rikagusriani = fs.readFileSync("./function/scrape/Result/Asupan/rikagusriani.json");
 //━━━━━━━━━━━━━━━[ Database Limit,Premium,Rpg By Vynn's ]━━━━━━━━━━━━━━━\\

const Options = require('./setting/options.js')

//F U N C T I O N R P G📍
   const { 
     addInventoriDarah, 
      cekDuluJoinAdaApaKagaDiJson, 
      addDarah, 
      kurangDarah, 
     getDarah 
   }  = require('./storage/user/darah.js')
   const { 
     cekInventoryAdaAtauGak, 
      addInventori,  
       addBesi, 
       addEmas, 
       addEmerald,
       addUmpan,
       addPotion,
       kurangBesi, 
       kurangEmas, 
       kurangEmerald, 
       kurangUmpan,
       kurangPotion,
       getBesi, 
      getEmas, 
     getEmerald,
     getUmpan,
    getPotion
   } = require('./storage/user/alat_tukar.js')
   const { 
    addInventoriMonay, 
    cekDuluJoinAdaApaKagaMonaynyaDiJson, 
    addMonay, 
    kurangMonay, 
   getMonay 
   } = require('./storage/user/monay.js')
   const { 
    addInventoriLimit, 
    cekDuluJoinAdaApaKagaLimitnyaDiJson, 
    addLimit, 
    kurangLimit, 
    getLimit 
   } = require('./storage/user/limit.js')
   const { 
    cekDuluHasilBuruanNya, 
     addInventoriBuruan, 
     adJamaln,
      addAyam, 
      addKelinci, 
      addDomba, 
      addSapi,
      addGajah,
      kurangIkan,
      kurangAyam, 
      kurangKelinci, 
      kurangDomba, 
      kurangSapi,
      kurangGajah,
      getIkan,
      getAyam, 
      getKelinci, 
      getDomba,
     getSapi,
    getGajah
   } = require('./storage/user/buruan.js')
   let DarahAwal =  global.rpg.darahawal
   const ikan = ['🐟','🐠','🐡']   

// D A T A B A S E R P G📍
let balance = JSON.parse(fs.readFileSync('./database/balance.json'));
let prem = JSON.parse(fs.readFileSync('./database/premium.json'));
let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))
const { isSetWelcome, addSetWelcome, changeSetWelcome, removeSetWelcome } = require('./lib/setwelcome');
const { isSetLeft, addSetLeft, removeSetLeft, changeSetLeft } = require('./lib/setleft');

// R E A D D A T A B A S E📍
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

// L A N G U A G E📍
const  { ind } = require(`./language`)
lang = ind // Language

// H E L P
let { menu } = require('./language/help')

//━━━━━━━━━━━━━━━[ Apikey Team Jojo ]━━━━━━━━━━━━━━━\\
const apikey = "melcantik"
const keyanto = "hardianto"
const jojoapi = "Syaa"

//━━━━━━━━━━━━━━━[ Tambahan ]━━━━━━━━━━━━━━━\\
prefixx = global.prefix
ptod = "6285758050756@s.whatsapp.net"
pp_bot = fs.readFileSync('./image/ezty.jpg')
donasi = fs.readFileSync('./image/donasi.jpg')

//P R E F I X📍
let multipref = true;
let oneprefix = false;
let preff = "!"

//━━━━━━━━━━━━━━━[ Module Export ]━━━━━━━━━━━━━━━\\
module.exports = ezty = async (ezty, m, chatUpdate, store, welcome, left, set_welcome_db, set_left_db,) => {
    try {
        var body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        if (multipref) {
        var prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '#'
        } else if (oneprefix) {
        prefix = preff
        }
        let footxt = `${pendaftar.length}`
        const isCmd = body.startsWith(prefix)
        const command = body.toLowerCase().split(' ')[0] || ''
        const Det = command.startsWith(prefix) 
        const { type, quotedMsg, mentioned, now, fromMe } = m
        const from = m.key.remoteJid
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await ezty.decodeJid(ezty.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const v = args.join(' ')
        const q = args.join(" ")
        const text = args.join(" ")
        const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
        const tanggal = moment().format("ll")
        const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
        const wita = moment(Date.now()).tz('Asia/Makassar').locale('id').format('HH:mm:ss z')
        const wit = moment(Date.now()).tz('Asia/Jayapura').locale('id').format('HH:mm:ss z')
        const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const more = String.fromCharCode(8206)
	    const readmore = more.repeat(4001)
	    let siapa = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? ezty.user.jid : m.sender;
        let dia = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : false;
        const order = body.slice(1).trim().split(/ +/).shift().toLowerCase()

        // G R O U P📍       
        const groupMetadata = m.isGroup ? await ezty.groupMetadata(from).catch(e => {}) : ''
        const groupMembers = m.isGroup ? groupMetadata.participants : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isPremium = isCreator ? true : _prem.checkPremiumUser(m.sender, premium)
        const isPpremium = prem.includes(m.sender) || isCreator
        const AntiLink = m.isGroup ? ntilink.includes(from) : false

// O T H E R📍
const isUser = pendaftar.includes(m.sender)
const isBan = banUser.includes(m.sender)
const isRakyat = isCreator || global.rkyt.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const gcounti = global.limitawal
const gcount = isPremium ? global.limitawal.premium : global.limitawal.free
const isWelcome = m.isGroup ? welcome.includes(from) ? true : false : false
const isLeft = m.isGroup ? left.includes(from) ? true : false : false
const welcm = m.isGroup ? wlcm.includes(from) : false
const GcRvk = m.isGroup ? gcrevoke.includes(from) : false

   const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
   const isCekDarah = getDarah(m.sender)
   const isUmpan = getUmpan(m.sender)
   const isPotion = getPotion(m.sender)
   const isIkan = getIkan(m.sender)
   const isAyam = getAyam(m.sender)
   const isKelinci = getKelinci(m.sender)
   const isDomba = getDomba(m.sender)
   const isSapi = getSapi(m.sender)
   const isGajah = getGajah(m.sender)
   const isMonay = getMonay(m.sender)
   const isBalance = getBalance(m.sender, balance)
   const isLimit = getLimit(m.sender)
   const isBesi = getBesi(m.sender)
   const isEmas = getEmas(m.sender)
   const isEmerald = getEmerald(m.sender)
   const isInventory = cekInventoryAdaAtauGak(m.sender)
   const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
   const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
   const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
	    

        // M E M E G📍
        let picaks = [flaming,fluming,flarun,flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]
		
          try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
            if (!isNumber(user.afkTime)) user.afkTime = -1
            if (!('afkReason' in user)) user.afkReason = ''
            if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
            afkTime: -1,
            afkReason: '',
            limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
            if (!('mute' in chats)) chats.mute = false
            } else global.db.data.chats[m.chat] = {
            mute: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
        if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
        
        // P R E M I U M📍
        _prem.expiredCheck(ezty, premium)

        // A N T I S P A M📍
if (m.message && msgFilter.isFiltered(from)) {
console.log('-> [SPAM]', color(moment(m.messageTimestamp * 3000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(m.pushName))
return m.reply(`Hai ${pushname}\nKamu terdeteksi menggunakan command tanpa jeda, harap tunggu 5 detik!`)
}
if (isCmd) msgFilter.addFilter(from)
	    
      // P U B L I C & S E L F📍
        if (!ezty.public) {
        if (!m.key.fromMe) return
        }

      // P U S H M E S S A G E T O C O N S O L E📍
        if (m.message) {
        console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m RYZUU \x1b[1;37m]', time, chalk.green(budy || m.mtype), 'Dari', chalk.blue(pushname), 'Di', chalk.yellow(groupName ? groupName : 'Private Chat' ), 'args :', chalk.white(args.length))
        }

     // A U T O M E N G E T I K📍
       /* if (command) {
        await ezty.sendPresenceUpdate('composing', m.chat)
        ezty.sendReadReceipt(from, m.sender, [m.key.id])
        } */
	
	        // A U T O R E G I S T R A S I📍
        if (isCmd && !isUser) {
          pendaftar.push(m.sender)
          fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar, null, 2))
        }
        
	// R E S E T L I M I T E V E R Y 12 H O U R S📍
let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
let user = Object.keys(global.db.data.users)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
for (let jid of user) global.db.data.users[jid].limit = limitUser
console.log('Reseted Limit')
}, {
scheduled: true,
timezone: "Asia/Jakarta"
})
        
	// A U T O S E T B I O📍
if (db.data.settings[botNumber].autobio) {
let setting = global.db.data.settings[botNumber]
if (new Date() * 1 - setting.status > 1000) {
let uptime = await runtime(process.uptime())
await ezty.setStatus(`${ezty.user.name} | Runtime : ${runtime(uptime)}`)
setting.status = new Date() * 1
}
}
	    
	  // A N T I L I N K📍
if (AntiLink) {
if (!isBotAdmins) return
linkgce = await ezty.groupInviteCode(from)
if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
m.reply(`\`\`\`「 DETECT LINK 」\`\`\`\n\nAnda tidak akan dikick bot karena yang anda kirim adalah link group yg ada di group ini`)
} else if (budy.match(`chat.whatsapp.com`)) {
if (isAdmins) return 
if (m.key.fromMe) return
if (isCreator) return 
kice = m.sender
await ezty.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
ezty.sendMessage(from, {text:`\`\`\`「 DETECT LINK 」\`\`\`\n\n@${kice.split("@")[0]} Telah dikick karena send link di group ini`, contextInfo:{mentionedJid:[kice]}}, { quoted: m })
} else {
}
}

//F U N C T I O N M E N T I O N S📍
function mentions(teks, mems = [], id) {
        	if (id == null || id == undefined || id == false) {
        	  let res = ezty.sendMessage(from, { text: teks, mentions: mems })
        	  return res
        	} else {
              let res = ezty.sendMessage(from, { text: teks, mentions: mems }, { quoted: troli })
              return res
             }
        }

//F U N C T I O N H I T U N G M U N D U R📍
          function hitungmundur(bulan, tanggal) {
          let from = new Date(`${bulan} ${tanggal}, 2022 00:00:00`).getTime();
          let now = Date.now();
          let distance = from - now;
          let days = Math.floor(distance / (1000 * 60 * 60 * 24));
          let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          let seconds = Math.floor((distance % (1000 * 60)) / 1000);
          return days + "Hari " + hours + "Jam " + minutes + "Menit " + seconds + "Detik"
        }

      // M U T E C H A T📍
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // R E S P O N C M D W I T H M E D I A📍
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
        userJid: ezty.user.id,
        quoted: troli.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, ezty.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
        ...chatUpdate,
        messages: [proto.WebMessageInfo.fromObject(messages)],
        type: 'append'
        }
        ezty.ev.emit('messages.upsert', msg)
        }
	    
	 //F U N📍
            if (('family100'+m.chat in _family100)) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
            let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
            if (room.terjawab[index]) return !0
            room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
           Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
            ${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
            ${Array.from(room.jawaban, (jawaban, index) => {
            return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
            }).filter(v => v).join('\n')}
            ${isSurender ? '' : `Perfect Player`}`.trim()
            ezty.sendText(from, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

            if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
            addBalance(m.sender, 100, balance)
            await ezty.sendButtonText(from, [{ buttonId: `${prefix}tebak lagu`, buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `*[ Tebak Lagu ]*\n\nJawaban Benar 🎉\nHadiah : $100\n\nIngin bermain lagi? tekan button dibawah`, `© ${game}`, m)
            delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

            if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
            addBalance(m.sender, 100, balance)
            await m.reply(`*[ Kuis Matematika ]*\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
            delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

            if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
            addBalance(m.sender, 100, balance)
            await ezty.sendButtonText(from, [{ buttonId: `${prefix}tebak gambar`, buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `*[ Tebak Gambar ]*\n\nJawaban Benar 🎉\nHadiah : $100\n\nIngin bermain lagi? tekan button dibawah`, `© ${game}`, m)
            delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

            if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
            addBalance(m.sender, 100, balance)
            await ezty.sendButtonText(from, [{ buttonId: `${prefix}tebak kata`, buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `*[ Tebak Kata ]*\n\nJawaban Benar 🎉\nHadiah : $100\n\nIngin bermain lagi? tekan button dibawah`, `© ${game}`, m)
            delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

            if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	        deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
            addBalance(m.sender, 100, balance)
            await ezty.sendButtonText(from, [{ buttonId: `${prefix}tebak lontong`, buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `*[ Cak Lontong ]*\n\nJawaban Benar 🎉\n*${deskripsi}*\nHadiah : $100\n\nIngin bermain lagi? tekan button dibawah`, `© ${game}`, m)
            delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

            if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
            addBalance(m.sender, 100, balance)
            await ezty.sendButtonText(from, [{ buttonId: `${prefix}tebak kalimat`, buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `*[ Tebak Kalimat ]*\n\nJawaban Benar 🎉\nHadiah : $100\n\nIngin bermain lagi? tekan button dibawah`, `© ${game}`, m)
            delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

            if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
            addBalance(m.sender, 100, balance)
            await ezty.sendButtonText(from, [{ buttonId: `${prefix}tebak lirik`, buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `*[ Tebak Lirik ]*\n\nJawaban Benar 🎉\nHadiah : $100\n\nIngin bermain lagi? tekan button dibawah`, `© ${game}`, m)
            delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	        if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
            addBalance(m.sender, 100, balance)
            await ezty.sendButtonText(from, [{ buttonId: `${prefix}tebak tebakan`, buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `*[ Tebak Tebakan ]*\n\nJawaban Benar 🎉\nHadiah : $100\n\nIngin bermain lagi? tekan button dibawah`, `© ${game}`, m)
            delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        //━━━━━━━━━━━━━━━[ Const By Ohyziro ]━━━━━━━━━━━━━━━\\
const fake3 = '© 2022 | Features By @ryzuubotz'
const fake = '© 2022 | WhatsApp Bot By @eziiemlit'
const fame = '© 2022 | Game By @ryzuubot'
const fakee = '𝐍𝐨𝐭𝐞 :\nIf there is an error feature, immediately report it to the bot owner [ .owner ]\n\n© 2022 Ryzuu Botz | On Insta @eziiemlit | No copyright dek!'

//C O N S T B A R U U📍
const pickRandom = (arr) => {
			return arr[Math.floor(Math.random() * arr.length)]
		}

//C O N S T F A K E📍
const fezy = (teks) => {
			ezty.sendMessage(from, { text: teks, contextInfo:{"externalAdReply": { "title":`WhatsApp Bot`, 'body': `nhentai.com`, mediaType: 3, "thumbnail": pp_bot, "sourceUrl": `https://www.instagram.com/ohyziro`}}}, { quoted: m })
		}
const troli =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 2022, status: 200, thumbnail: pp_bot, surface: 200, message: ` • ${botname}\n • Pengguna : ${pushname}`, orderTitle: 'EziiEmlit', sellerJid: '0@s.whatsapp.net'} } }    
const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: pp_bot, surface: 200, message: `WhatsApp Bot`, orderTitle: 'memek', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `WhatsApp Bot`,jpegThumbnail: pp_bot}}}
const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
const fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from } : {})},message: {"videoMessage": { "title":`WhatsApp Bot`, "h": `Hmm`,'seconds': '359996400', 'gifPlayback': 'true', 'caption': `WhatsApp Bot`, 'jpegThumbnail': pp_bot}}}
const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `WhatsApp Bot`, 'jpegThumbnail': pp_bot}}}
const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`${pushname}`, "h": `Hmm`,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': pp_bot}}}
const floc = {key : {participant : '0@s.whatsapp.net'},message: {locationMessage: {name: `WhatsApp Bot`,jpegThumbnail: pp_bot}}}
const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': pp_bot, thumbnail: pp_bot,sendEphemeral: true}}}

//F A K E R E P L Y P R O D U C T📍
const ftoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": pp_bot //Gambarnye
},
"title": "My Eziitzy", //Kasih namalu 
"description": "Ryzuu Bot", 
"currencyCode": "USD",
"priceAmount1000": "2000",
"retailerId": "My Eziitzy",
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
}
//F A K E R E P L Y L O C A T I O N📍
const flokasi = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
locationMessage: {
name: 'Jepang',
jpegThumbnail: pp_bot
}
}
}
// U C A P A N📍
const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss");
if (time2 < "24:59:00") {
  var ucapanWaktu = "Good Night🌃";
}
if (time2 < "19:00:00") {
  var ucapanWaktu = "Good Evening🏙️";
}
if (time2 < "18:00:00") {
  var ucapanWaktu = "Good Evening🏙️";
}
if (time2 < "15:00:00") {
  var ucapanWaktu = "Good Afternoon🏜️";
}
if (time2 < "11:00:00") {
  var ucapanWaktu = "Good Morning🏞️";
}
if (time2 < "05:00:00") {
  var ucapanWaktu = "Good Night🌃";
}

// B U T T O N W I T H T E X T📍
const buttonWithText = (from, text, footer, buttons) => {
return ezty.sendMessage(from, { text: text, footer: footer, templateButtons: buttons })
}

// B U T T O N T I K T O K📍
        const buttonsTiktod = [
            { urlButton: { displayText: `Source Code`, url : `${q}` } },
        	{ quickReplyButton: { displayText: `Get Audio`, id: `${prefix}tiktokaudio ${args[1]}` } }
        ]

//S E N D B U T T O N 5📍
const sendButton5 = async (id, text1, desc1, yo) => {

// B Y F A B I L & R A S H I D📍
var buatpesan = await generateWAMessageFromContent(from, {
    "templateMessage": {
      "hydratedTemplate": {
        ...yo.message,
        "hydratedContentText": text1,
        "hydratedFooterText": desc1,
        "hydratedButtons": [
          {
            "callButton": {
              "displayText": "Developer",
              "phoneNumber": "+62 857-5805-0756"
            }
          },
          {
            "urlButton": {
              "displayText": "Instagram",
              "url": "http://bit.ly/ohyziro"
            }
          },
          {
            "quickReplyButton": {
              "displayText": "Donasi",
              "id": `${prefix}donasi`
            }
          },
          {
            "quickReplyButton": {
              "displayText": "Owner",
              "id": `${prefix}owner`,
            }
          },
          {
            "quickReplyButton": {
              "displayText": "List Menu",
              "id": `${prefix}command`
            }
        }
      ]
    }
  }
}, {})
ezty.relayMessage(id, buatpesan.message, { messageId: buatpesan.key.id })
}

ezty.createMessage = async (jidnya, kontennya, optionnya) => {
            return await generateWAMessage(jidnya, kontennya, {...optionnya,userJid: ezty.authState.creds.me.id,upload: ezty.waUploadToServer})
            }
            
  // R A K Y A T📍
if (!isRakyat) {
rkyt.push(m.sender.split("@")[0])
}

        //T I C T A C T O E📍
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // fezy(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    fezy({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await ezty.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await ezty.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //S U I T P V P📍
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    ezty.sendTextWithMentions(from, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, troli)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    ezty.sendText(from, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) ezty.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, troli)
	    if (!roof.pilih2) ezty.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, troli)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) ezty.sendText(from, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    ezty.sendTextWithMentions(from, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, troli)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    fezy(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) ezty.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    fezy(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) ezty.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    ezty.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            fezy(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            fezy(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
	    
        switch(command) {
        
	    case prefix+'afk': {
                let user = global.db.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                fezy(`${m.pushName} Telah Afk Dengan Alasan ${text ? ': ' + text : ''}`)
            }
            break	
        case prefix+'ttc': case prefix+'ttt': case prefix+'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            fezy('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await ezty.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await ezty.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            fezy('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case prefix+'delttc': case prefix+'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            ezty.sendText(from, `Berhasil Delete Session TicTacToe`, troli)
            } else if (!this.game) {
            fezy(`Session TicTacToe Tidak Ada`)
            } else throw '?'
            } catch (e) {
            fezy('rusak')
            }
            }
            break
            case prefix+'suitpvp': case prefix+'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) fezy(`Selesaikan suit mu yang sebelumnya`)
	        if (m.mentionedJid[0] === m.sender) return fezy(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return fezy(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            this.suit[id] = {
            chat: await ezty.sendText(from, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) ezty.sendText(from, `_Waktu suit habis_`, troli)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
            case prefix+'chaat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    ezty.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => fezy(jsonformat(res))).catch((err) => fezy(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    ezty.chatModify({ mute: null }, m.chat, []).then((res) => fezy(jsonformat(res))).catch((err) => fezy(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    ezty.chatModify({  archive: true }, m.chat, []).then((res) => fezy(jsonformat(res))).catch((err) => fezy(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    ezty.chatModify({ archive: false }, m.chat, []).then((res) => fezy(jsonformat(res))).catch((err) => fezy(jsonformat(err)))
                } else if (args[0] === 'read') {
                    ezty.chatModify({ markRead: true }, m.chat, []).then((res) => fezy(jsonformat(res))).catch((err) => fezy(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    ezty.chatModify({ markRead: false }, m.chat, []).then((res) => fezy(jsonformat(res))).catch((err) => fezy(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    ezty.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => fezy(jsonformat(res))).catch((err) => fezy(jsonformat(err)))
                }
            }
            break
	case prefix+'family100': {
                if ('family100'+m.chat in _family100) {
                    fezy('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await ezty.sendText(from, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case prefix+'tebak': {
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await ezty.sendMessage(from, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: troli })
                    ezty.sendText(from, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    ezty.sendButtonText(from, [{ buttonId: `${prefix}tebak lagu`, buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, fame, troli)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    ezty.sendImage(from, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    ezty.sendButtonText(from, [{ buttonId: `${prefix}tebak gambar`, buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, fame, troli)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    ezty.sendText(from, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    ezty.sendButtonText(from, [{ buttonId: `${prefix}tebak kata`, buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, fame, troli)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    ezty.sendText(from, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    ezty.sendButtonText(from, [{ buttonId: `${prefix}tebak kalimat`, buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, fame, troli)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    ezty.sendText(from, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    ezty.sendButtonText(from, [{ buttonId: `${prefix}tebak lirik`, buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, fame, troli)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                    }
                    }
                    break
case prefix+'caklontong': {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    ezty.sendText(from, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    ezty.sendButtonText(from, [{ buttonId: `${prefix}caklontong`, buttonText: { displayText: 'Cak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, fame, troli)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            break
            case prefix+'kuismath': case prefix+'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                ezty.sendText(from, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break

//━━━━━━━━━━━━━━━[ Grup Fitur ]━━━━━━━━━━━━━━━\\
            case prefix+'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                fezy(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await ezty.groupAcceptInvite(result).then((res) => fezy(jsonformat(res))).catch((err) => fezy(jsonformat(err)))
            }
            break
            case prefix+'leave': {
                if (!isCreator) throw mess.owner
                await ezty.groupLeave(from).then((res) => fezy(jsonformat(res))).catch((err) => fezy(jsonformat(err)))
            }
            break
            case prefix+'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Example : ${command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          fezy(`Exif berhasil diubah menjadi\n\n• Packname : ${global.packname}\n• Author : ${global.author}`)
            }
            break
	case prefix+'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ezty.groupParticipantsUpdate(from, [users], 'remove').then((res) => fezy(jsonformat(res))).catch((err) => fezy(jsonformat(err)))
	}
	break
	case prefix+'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ezty.groupParticipantsUpdate(from, [users], 'add').then((res) => fezy(jsonformat(res))).catch((err) => fezy(jsonformat(err)))
	}
	break
	case prefix+'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ezty.groupParticipantsUpdate(from, [users], 'promote').then((res) => fezy(jsonformat(res))).catch((err) => fezy(jsonformat(err)))
	}
	break
	case prefix+'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ezty.groupParticipantsUpdate(from, [users], 'demote').then((res) => fezy(jsonformat(res))).catch((err) => fezy(jsonformat(err)))
	}
	break
    case prefix+'setname': case prefix+'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await ezty.groupUpdateSubject(from, text).then((res) => fezy(mess.success)).catch((err) => fezy(jsonformat(err)))
            }
            break
          case prefix+'setdesc': case prefix+'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins && !isGroupOwner) throw mess.admin
                if (!text) throw 'Text ?'
                await ezty.groupUpdateDescription(from, text).then((res) => fezy(mess.success)).catch((err) => fezy(jsonformat(err)))
            }
            break
          case prefix+'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${command}`
                let media = await ezty.downloadAndSaveMediaMessage(quoted)
                await ezty.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                fezy(mess.success)
                }
                break
           case prefix+'setppgroup': case prefix+'setppgrup': case prefix+'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${command}`
                let media = await ezty.downloadAndSaveMediaMessage(quoted)
                await ezty.updateProfilePicture(from, { url: media }).catch((err) => fs.unlinkSync(media))
                fezy(mess.success)
                }
                break
            case prefix+'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `▭ׁ֢▬ׅ݊✪〘 *Tag All* 〙✪▭ׁ֢▬ׅ݊
 
 ⪧ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `• @${mem.id.split('@')[0]}\n`
                }
                ezty.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted: troli })
                }
                break
         case prefix+'h': case prefix+'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isAdmins) throw mess.admin
            if (!isBotAdmins && !isCreator) throw mess.botAdmin
            ezty.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: troli })
            }
            break
               case prefix+'vote': {
            if (!m.isGroup) throw mess.group
            if (from in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
            if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${command} Ohyziro*`
            fezy(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: fake,
                buttons: buttonsVote,
                headerType: 1
            }
            ezty.sendMessage(from, buttonMessageVote)
	    }
            break
               case prefix+'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(from in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: fake,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            ezty.sendMessage(from, buttonMessageUpvote)
	    }
             break
                case prefix+'devote': {
            if (!m.isGroup) throw mess.group
            if (!(from in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: fake,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            ezty.sendMessage(from, buttonMessageDevote)
	}
            break
                 
case prefix+'cekvote':
if (!m.isGroup) throw mess.group
if (!(from in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote

`
ezty.sendTextWithMentions(from, teks_vote, m)
break
case prefix+'deletevote': case'delvote': case prefix+'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(from in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            delete vote[m.chat]
            fezy('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
               case prefix+'group': case prefix+'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await ezty.groupSettingUpdate(from, 'announcement').then((res) => fezy(`Sukses Menutup Group`)).catch((err) => fezy(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await ezty.groupSettingUpdate(from, 'not_announcement').then((res) => fezy(`Sukses Membuka Group`)).catch((err) => fezy(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: `${prefix}group open`, buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: `${prefix}group close`, buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await ezty.sendButtonText(from, buttons, `Mode Group`, fake3, troli)

             }
            }
            break
            case prefix+'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await ezty.groupSettingUpdate(from, 'unlocked').then((res) => fezy(`Sukses Membuka Edit Info Group`)).catch((err) => fezy(jsonformat(err)))
             } else if (args[0] === 'close'){
                await ezty.groupSettingUpdate(from, 'locked').then((res) => fezy(`Sukses Menutup Edit Info Group`)).catch((err) => fezy(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: `${prefix}editinfo open`, buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: `${prefix}editinfo close`, buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await ezty.sendButtonText(from, buttons, `Mode Edit Info`, fake3, troli)

            }
            }
            break
case prefix+'autorevoke': {
if (!m.isGroup) return fezy(mess.group)
if (!isBotAdmins) return fezy(mess.botAdmin)
if (!isAdmins && !isCreator) return fezy(mess.admin)
if (args.length < 1) return fezy('Ketik enable untuk mengaktifkan\nKetik disable untuk menonaktifkan')
if (args[0] === "enable") {
if (GcRvk) return fezy('Sudah Aktif')
gcrevoke.push(from)
fezy('Succes menyalakan autorevoke di group ini')
} else if (args[0] === "disable") {
if (!GcRvk) return fezy('Sudah Mati')
let off = wlcm.indexOf(from)
gcrevoke.splice(off, 1)
fezy('Succes mematikan autorevoke di group ini')
} else {
fezy('Ketik enable untuk mengaktifkan\nKetik disable untuk menonaktifkan')
}
}
break
case prefix+'antilink': {
if (!m.isGroup) return fezy(mess.group)
if (!isBotAdmins) return fezy(mess.botAdmin)
if (!isAdmins && !isCreator) return fezy(mess.admin)
if (args.length < 1) return fezy('Ketik enable untuk mengaktifkan\nKetik disable untuk menonaktifkan')
if (args[0] === "enable") {
if (AntiLink) return fezy('Sudah Aktif')
ntilink.push(from)
fezy('Succes menyalakan antilink di group ini')
var groupe = await ezty.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ezty.sendMessage(from, {text: `PERINGATAN!!! jika bukan admin jangan send link di group ini`, contextInfo: { mentionedJid : mems }}, { quoted: troli })
} else if (args[0] === "disable") {
if (!AntiLink) return fezy('Sudah Mati')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
fezy('Succes mematikan antilink di group ini')
} else {
fezy('Ketik enable untuk mengaktifkan\nKetik disable untuk menonaktifkan')
}
}
break
case prefix+'revoke': {
if (!m.isGroup) return fezy(mess.group)
if (!isBotAdmins) return fezy(mess.botAdmin)
if (!isAdmins && !isCreator) return fezy(mess.admin)
ezty.groupRevokeInvite(m.chat)
}
break
             case prefix+'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "enable") {
                if (db.chats[m.chat].mute) return fezy(`Sudah Aktif Sebelumnya`)
                db.chats[m.chat].mute = true
                fezy(`${ezty.user.name} telah di mute di group ini !`)
                } else if (args[0] === "disable") {
                if (!db.chats[m.chat].mute) return fezy(`Sudah Tidak Aktif Sebelumnya`)
                db.chats[m.chat].mute = false
                fezy(`${ezty.user.name} telah di unmute di group ini !`)
                } else {
                 fezy('Ketik enable untuk mengaktifkan\nKetik disable untuk menonaktifkan')
                }
             }
             break
            case prefix+'linkgroup': case prefix+'linkgc': {
                if (!m.isGroup) throw mess.group
                let response = await ezty.groupInviteCode(from)
                ezty.sendText(from, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case prefix+'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await ezty.sendMessage(from, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => fezy(jsonformat(res))).catch((err) => fezy(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await ezty.sendMessage(from, { disappearingMessagesInChat: false }).then((res) => fezy(jsonformat(res))).catch((err) => fezy(jsonformat(err)))
                }
            }
            break
            case prefix+'delete': case prefix+'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                ezty.sendMessage(from, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
        case prefix+'welcome':
                if (!m.isGroup) return fezy(mess.group)
                if (!isAdmins && !isCreator) return fezy(mess.admin)
                if (args.length < 1) return fezy(`Pilih enable atau disable`)
                if (args[0].toLowerCase() === "enable") {
                    if (isWelcome) return fezy(`Udah aktif`)
                    welcome.push(from)
                    fs.writeFileSync('./database/welcome.json', JSON.stringify(welcome, null, 2))
                    fezy('Sukses mengaktifkan welcome di grup ini')
                } else if (args[0].toLowerCase() === "disable") {
                    var posi = welcome.indexOf(from)
                    welcome.splice(posi, 1)
                    fs.writeFileSync('./database/welcome.json', JSON.stringify(welcome, null, 2))
                    fezy('Sukses menonaktifkan welcome di grup ini')
                } else {
                    fezy('Ketik enable untuk mengaktifkan\nKetik disable untuk menonaktifkan')
                }
                break
            case prefix+'left':
                if (!m.isGroup) return fezy(mess.group)
                if (!isAdmins && !isCreator) return fezy(mess.admin)
                if (args.length < 1) return fezy(`Pilih enable atau disable`)
                if (args[0].toLowerCase() === "enable") {
                    if (isLeft) return fezy(`Udah aktif`)
                    left.push(from)
                    fs.writeFileSync('./database/left.json', JSON.stringify(left, null, 2))
                    fezy('Sukses mengaktifkan left di grup ini')
                } else if (args[0].toLowerCase() === "disable") {
                    var posi = left.indexOf(from)
                    left.splice(posi, 1)
                    fs.writeFileSync('./database/left.json', JSON.stringify(left, null, 2))
                    fezy('Ketik enable untuk mengaktifkan\nKetik disable untuk menonaktifkan')
                } else {
                    fezy(`Pilih enable atau disable`)
                }
                break
case prefix+'setwelcome':
            if (!m.isGroup) return fezy(mess.group)
            if (!isAdmins && !isCreator) return fezy(mess.admin)
            if (!q) return fezy(`Gunakan dengan cara ${command} *teks_welcome*\n\n_Contoh_\n\n${command} Halo @user, Selamat datang di @group`)
            if (isSetWelcome(from, set_welcome_db)) return fezy(`Set welcome already active`)
            addSetWelcome(q, from, set_welcome_db)
            fezy(`Successfully set welcome!`)
            break
        case prefix+'changewelcome':
            if (!m.isGroup) return fezy(mess.group)
            if (!isAdmins && !isCreator) return fezy(mess.admin)
            if (!q) return fezy(`Gunakan dengan cara ${command} *teks_welcome*\n\n_Contoh_\n\n${command} Halo @user, Selamat datang di @group`)
            if (isSetWelcome(from, set_welcome_db)) {
                changeSetWelcome(q, from, set_welcome_db)
                fezy(`Sukses change set welcome teks!`)
            } else {
                addSetWelcome(q, from, set_welcome_db)
                fezy(`Sukses change set welcome teks!`)
            }
            break
        case prefix+'delsetwelcome':
            if (!m.isGroup) return fezy(mess.group)
            if (!isAdmins && !isCreator) return fezy(mess.admin)
            if (!isSetWelcome(from, set_welcome_db)) return fezy(`Belum ada set welcome di sini..`)
            removeSetWelcome(from, set_welcome_db)
            fezy(`Sukses delete set welcome`)
            break
        case prefix+'setleft':
            if (!m.isGroup) return fezy(mess.group)
            if (!isAdmins && !isCreator) return fezy(mess.admin)
            if (!q) return fezy(`Gunakan dengan cara ${command} *teks_left*\n\n_Contoh_\n\n${command} Halo @user, Selamat tinggal dari @group`)
            if (isSetLeft(from, set_left_db)) return fezy(`Set left already active`)
            addSetLeft(q, from, set_left_db)
            fezy(`Successfully set left!`)
            break
        case prefix+'changeleft':
            if (!m.isGroup) return fezy(mess.group)
            if (!isAdmins && !isCreator) return fezy(mess.admin)
            if (!q) return fezy(`Gunakan dengan cara ${command} *teks_left*\n\n_Contoh_\n\n${command} Halo @user, Selamat tinggal dari @group`)
            if (isSetLeft(from, set_left_db)) {
                changeSetLeft(q, from, set_left_db)
                fezy(`Sukses change set left teks!`)
            } else {
                addSetLeft(q, from, set_left_db)
                fezy(`Sukses change set left teks!`)
            }
            break
        case prefix+'delsetleft':
            if (!m.isGroup) return fezy(mess.group)
            if (!isAdmins && !isCreator) return fezy(mess.admin)
            if (!isSetLeft(from, set_left_db)) return fezy(`Belum ada set left di sini..`)
            removeSetLeft(from, set_left_db)
            fezy(`Sukses delete set left`)
            break
            
//━━━━━━━━━━━━━━━[ Asupan Fitur ]━━━━━━━━━━━━━━━\\
case prefix+'asupan':
  if (isBan) return fezy(mess.ban)
  if (!isPremium && !isCreator) return fezy('Maaf Fitur Ini Khusus User Premium!')
  fezy(mess.wait)
  var asupan = JSON.parse(fs.readFileSync('./fitur/asupan.json'))
var hasil = pickRandom(asupan)
ezty.sendMessage(from, {video: {url: hasil.url}}, {quoted: troli})
break

//━━━━━━━━━━━━━━━[ About By Ohyziro ]━━━━━━━━━━━━━━━\\
case prefix+'tes': 
if (isBan) return fezy(mess.ban)
            fezy(`*ACTIVE BOT!*`)
            break
case prefix+'runtime':
if (isBan) return fezy(mess.ban)
            fezy(`Runtime : ${runtime(process.uptime())}`)
            break
case prefix+'leftt':
            setTimeout( () => {
            ezty.groupLeave(from) 
            }, 2000)
            setTimeout( () => {
            fezy('See You...\nJgn Lupa Sewa Lagi👋🏻')
            }, 0)
            break
case prefix+'speed':
if (isBan) return fezy(mess.ban)
            let timestamp = speed();
            let latensi = speed() - timestamp
            fezy(`${latensi.toFixed(4)} Second`)
		    break

//━━━━━━━━━━━━━━━[ Fun Fitur By Ohyziro ]━━━━━━━━━━━━━━━\\
            case prefix+'apakah':
                if (isBan) return fezy(mess.ban)
                if (!q) return fezy(`Penggunaan ${command} text\n\nContoh : ${command} kamu lonteh`)
                const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul','Bisa Jadi Tidak']
                const kah = apa[Math.floor(Math.random() * apa.length)]
                ezty.sendMessage(from, { text: `Pertanyaan : apakah ${q}\nJawaban : ${kah}` }, { quoted: troli })
                break
            case prefix+'bisakah': case prefix+'bisa': case prefix+'bisagak':
                if (isBan) return fezy(mess.ban)
                if (!q) return fezy(`Penggunaan ${command} text\n\nContoh : ${command} saya punya cewe`)
                const bisa = ['Bisa','Gak Bisa','Gak Bisa Ajg Awokwokak','TENTU PASTI KAMU BISA!!!!','TENTU, PASTI KAMU *TIDAK* BISA!!']
                const ga = bisa[Math.floor(Math.random() * bisa.length)]
                ezty.sendMessage(from, { text: `Pertanyaan : bisakah ${q}\nJawaban : ${ga}` }, { quoted: troli })
                break
            case prefix+'kapankah': case prefix+'kapan':
                if (isBan) return fezy(mess.ban)
                if (!q) return fezy(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} saya punya cewe`)
                const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi','20 Hari Lagi', '25 Hari Lagi','30 Hari Lagi','35 Hari Lagi','40 Hari Lagi','45 Hari Lagi','50 Hari Lagi','55 Hari Lagi','60 Hari Lagi','65 Hari Lagi','70 Hari Lagi','75 Hari Lagi','80 Hari Lagi','85 Hari Lagi','90 Hari Lagi','100 Hari Lagi','5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi','20 Bulan Lagi', '25 Bulan Lagi','30 Bulan Lagi','35 Bulan Lagi','40 Bulan Lagi','45 Bulan Lagi','50 Bulan Lagi','55 Bulan Lagi','60 Bulan Lagi','65 Bulan Lagi','70 Bulan Lagi','75 Bulan Lagi','80 Bulan Lagi','85 Bulan Lagi','90 Bulan Lagi','100 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','Besok','Lusa',`Abis Ini Juga Lu ${q}`]
                const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
                ezty.sendMessage(from, { text: `Pertanyaan : kapankah ${q}\nJawaban : *${kapankah}*` }, { quoted: troli })
                break
            case prefix+'bagaimanakah': case prefix+'gimanakah': case prefix+'gimana':
                if (isBan) return fezy(mess.ban)
                if (!q) return fezy(`Penggunaan ${command} text\n\nContoh : ${command} cara punya cewe`)
                const gimana = ['Ga Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','Astaghfirallah Beneran???','Pusing ah','Ooh Gitu','Yang Sabar Ya Bos','Gimana yeee']
                const ya = gimana[Math.floor(Math.random() * gimana.length)]
                ezty.sendMessage(from, { text: `Pertanyaan : bagaimanakah ${q}\nJawaban : ${ya}` }, { quoted: troli })
                break
            case prefix+'rate': case prefix+'nilai':
                if (isBan) return fezy(mess.ban)
                if (!q) return fezy(`Penggunaan ${command} text\n\nContoh : ${command} kebesaran titit sy`)
                const ra = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
                const te = ra[Math.floor(Math.random() * ra.length)]
                ezty.sendMessage(from, { text: `Rate : ${q}\nJawaban : *${te}%*` }, { quoted: troli })
                break
            case prefix+'gantengcek': case prefix+'cekganteng':
                if (isBan) return fezy(mess.ban)
                if (!q) return fezy(`Penggunaan ${command} Nama\n\nContoh : ${command} Fadly`)
                const gan = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
                const teng = gan[Math.floor(Math.random() * gan.length)]
                ezty.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${teng}%*` }, { quoted: troli })
                break
           case prefix+'cantikcek': case prefix+'cekcantik':
                if (isBan) return fezy(mess.ban)
                if (!q) return fezy(`Penggunaan ${command} Nama\n\nContoh : ${command} Fafa`)
                const can = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
                const tik = can[Math.floor(Math.random() * can.length)]
                ezty.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${tik}%*` }, { quoted: troli })
                break
           case prefix+'sangecek': case prefix+'ceksange': case prefix+'gaycek': case prefix+'cekgay': case prefix+'lesbicek': case prefix+'ceklesbi':
                if (isBan) return fezy(mess.ban)
                if (!q) return fezy(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
                const sangeh = ['5', '10', '15','20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
                const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
                ezty.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${sange}%*` }, { quoted: troli })
                break
            case prefix+'cekbapak':
                if (isBan) return fezy(mess.ban)
                const bapak = ['Wah Mantap Lu Masih Punya Bapack\nPasti Bapack Nya Kuli :v\nAwowkwokwwok\n#CandabOs', 'Aowkwwo Disini Ada Yteam :v\nLu Yteam Bro? Awowkwowk\nSabar Bro Ga Punya Bapack\n#Camda', 'Bjir Bapack Mu Ternyata Sudah Cemrai\nSedih Bro Gua Liatnya\nTapi Nih Tapi :v\nTetep Ae Lu Yteam Aowkwowkw Ngakak :v', 'Jangan #cekbapak Mulu Broo :v\nKasian Yang Yteam\nNtar Tersinggung Kan\nYahahaha Hayyuk By : Fadly ID']
                const bapack = bapak[Math.floor(Math.random() * bapak.length)]
                ezty.sendMessage(from, { text: bapack }, { quoted: troli })
                break
    case prefix+'gaycek':
      case prefix+'cekgay':
        case prefix+'lesbicek':
          case prefix+'ceklesbi':
                if (isBan) return fezy(mess.ban)
                    if (!q) return fezy(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
					const sangehh = ['5', '10', '15','20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const sangee = sangehh[Math.floor(Math.random() * sangehh.length)]
ezty.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${sangee}%*` }, { quoted: troli })
break
            case prefix+'halah': case prefix+'hilih': case prefix+'huluh': case prefix+'heleh': case prefix+'holoh':
            if (isBan) return fezy(mess.ban)
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case prefix+'jodohku': {
            if (isBan) return fezy(mess.ban)
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: `${prefix}jodohku`, buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await ezty.sendButtonText(from, buttons, jawab, fake3, troli, {mentions: ments})
            }
            break
            case prefix+'jadian': {
            if (isBan) return fezy(mess.ban)
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: `${prefix}jadian`, buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await ezty.sendButtonText(from, buttons, jawab, fake3, troli, {mentions: menst})
            }
            break
case prefix+'cekme':
  case prefix+'me':
  if (isBan) return fezy(mess.ban)
  fezy(mess.wait)
  const ganteng = ['Cakep ✅','Jelek Anjrit ❌']
  const sifat = ['Pembohong','Galak','Suka Bantu Orang','Baik','Jahat:(','Bobrok','Suka BadMood','Setia','Tulus','Beriman','Penyayang Binatang','Baperan']
  const suka = ['Makan','Tidur','Main Game','Sesama Jenis','Binatang',`Seseorang Yang ${pushname} Sukai`,'Belajar','Ibadah','Diri Sendiri']
  const nomernyah = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','31','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','82','84','84','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
  const keberanian = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','31','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','82','84','84','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
  const kepinteran = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','31','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','82','84','84','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const ganz = ganteng[Math.floor(Math.random() * ganteng.length)]
					const sipat = sifat[Math.floor(Math.random() * sifat.length)]
					const numab = nomernyah[Math.floor(Math.random() * nomernyah.length)]
					const gai = suka[Math.floor(Math.random() * suka.length)]
					const berani = keberanian[Math.floor(Math.random() * keberanian.length)]
					const pinter = kepinteran[Math.floor(Math.random() * kepinteran.length)]
  var cek = `*[ CEK PRIBADI KAMU ]*
 
Nama : ${pushname}
Sifat : ${sipat}
Keberanian : ${berani}%
Ketakutan : ${numab}%
Cakep : ${ganz}
Cek Pintar : ${pinter}%
Menyukai : ${gai}
  `
var but = [{buttonId: `${prefix}yy`, buttonText: { displayText: 'Cocok' }, type: 1 }, {buttonId: `${prefix}nn`, buttonText: { displayText: 'Gak Cocok' }, type: 1 }]
					ezty.sendMessage(from, { caption: cek, image: { url: `https://telegra.ph/file/a48660964fc598016dc71.png` }, buttons: but }, { quoted: troli })
				    break
case prefix+'yy':
  fezy("Yey Prediksi Bot Benar")
  break
case prefix+'nn':
  fezy("Yah Maaf Ya kak:(")
  break

//━━━━━━━━━━━━━━━[ Akher Nsfw Fitur ]━━━━━━━━━━━━━━━\\
case prefix+'slot':
if (isBan) return fezy(mess.ban)
fezy(mess.wait)
  const pepekk = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', //Arasya
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍊: 🍊',
        '🍊 : 🔔 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🥑 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🥑 : 🥑 : 🥑 Win👑',
        '🍐 : 🔔 : 🔔',
        '🥑 : 🍋 : 🍒',
        '🌶️ : 🌶️ : 🌶️ Win👑',
        '🍋 : 🍋 : 🍋 Win👑',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🥑',
        '🍌 : 🍌 : 🍌 Win👑'
        ]
  const kalah = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', //Arasya
        '🔔 : 🥑 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔',
        ]
 const kalah2 = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', //Arasya
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🍊',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🍇',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔',
        ]
        const selot = pepekk[Math.floor(Math.random() * pepekk.length)]
        const kalahnya = kalah[Math.floor(Math.random() * kalah.length)]
        const kalahnya2 = kalah2[Math.floor(Math.random() * kalah2.length)]
        var slotnya = `*[ 🎰 GAME SLOT 🎰 ]*

${kalahnya}
${selot}
${kalahnya2}

Note : Jika Kamu Mendapatkan Item Yang Sama, Kamu Menang!!!
Contoh : 🔔 : 🔔 : 🔔`
        var but = [{buttonId: `${command}`, buttonText: { displayText: "Kembali Slot" }, type: 1 }]
ezty.sendMessage(from, { text: slotnya, buttons: but, fake, templateButtons: but }, { quoted: troli })
        break

//━━━━━━━━━━━━━━━[ Nsfw Fitur ]━━━━━━━━━━━━━━━\\
case prefix+'hentai':
  if (isBan) return fezy(mess.ban)
  if (!isPremium && !isCreator) return fezy('Maaf Fitur Ini Khusus User Premium!')
  fezy(mess.wait)
var hentai = JSON.parse(fs.readFileSync('./fitur/nsfw/hentai.json'))
var hasil = pickRandom(hentai)
ezty.sendMessage(from, {caption: `Sange kok sama gambar`, image: {url: hasil}}, {quoted: troli})
break 
case prefix+'pussy':
  if (isBan) return fezy(mess.ban)
  if (!isPremium && !isCreator) return fezy('Maaf Fitur Ini Khusus User Premium!')
  fezy(mess.wait)
var pussy = JSON.parse(fs.readFileSync('./fitur/nsfw/pussy.json'))
var hasil = pickRandom(pussy)
ezty.sendMessage(from, {caption: `Sange kok sama gambar`, image: {url: hasil}}, {quoted: troli})
break
case prefix+'masturbation':
  if (isBan) return fezy(mess.ban)
  if (!isPremium && !isCreator) return fezy('Maaf Fitur Ini Khusus User Premium!')
  fezy(mess.wait)
var masturbation = JSON.parse(fs.readFileSync('./fitur/nsfw/masturbation.json'))
var hasil = pickRandom(masturbation)
ezty.sendMessage(from, {caption: `Sange kok sama gambar`, image: {url: hasil}}, {quoted: troli})
break 
case prefix+'blowjob':
  if (isBan) return fezy(mess.ban)
  if (!isPremium && !isCreator) return fezy('Maaf Fitur Ini Khusus User Premium!')
  fezy(mess.wait)
var bj = JSON.parse(fs.readFileSync('./fitur/nsfw/blowjob.json'))
var hasil = pickRandom(bj)
ezty.sendMessage(from, {caption: `Sange kok sama gambar`, image: {url: hasil}}, {quoted: troli})
break 
case prefix+'bdsm':
  if (isBan) return fezy(mess.ban)
  if (!isPremium && !isCreator) return fezy('Maaf Fitur Ini Khusus User Premium!')
  fezy(mess.wait)
var bdsm = JSON.parse(fs.readFileSync('./fitur/nsfw/bdsm.json'))
var hasil = pickRandom(bdsm)
ezty.sendMessage(from, {caption: `Sange kok sama gambar`, image: {url: hasil}}, {quoted: troli})
break 
case prefix+'ass':
  if (isBan) return fezy(mess.ban)
  if (!isPremium && !isCreator) return fezy('Maaf Fitur Ini Khusus User Premium!')
  fezy(mess.wait)
var ass = JSON.parse(fs.readFileSync('./fitur/nsfw/ass.json'))
var hasil = pickRandom(ass)
ezty.sendMessage(from, {caption: `Sange kok sama gambar`, image: {url: hasil}}, {quoted: troli})
break 
case prefix+'ahegao':
  if (isBan) return fezy(mess.ban)
  if (!isPremium && !isCreator) return fezy('Maaf Fitur Ini Khusus User Premium!')
  fezy(mess.wait)
var ahegao = JSON.parse(fs.readFileSync('./fitur/nsfw/ahegao.json'))
var hasil = pickRandom(ahegao)
ezty.sendMessage(from, {caption: `Sange kok sama gambar`, image: {url: hasil}}, {quoted: troli})
break 
case prefix+'yaoi':
if (isBan) return fezy(mess.ban)
if (!isPremium && !isCreator) return fezy('Maaf Fitur Ini Khusus User Premium!')
fezy(mess.wait)
var query = ["yaoi","yaoi aesthetic","yaoi hd","yaoi ganteng"]
var ezi = await pinterest(pickRandom(query))
var but = [{buttonId: `${command}`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
ezty.sendMessage(from, { caption: "Random Foto Yaoi", image: { url: pickRandom(ezi.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: troli })
 break

//━━━━━━━━━━━━━━━[ Maker Fitur ]━━━━━━━━━━━━━━━\\
case prefix+'3dbox':
if (isBan) return fezy(mess.ban)
if(!q) return fezy(`Penggunaan ${command} teks`)
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
kurangLimit(m.sender, 1)
fezy(mess.wait)
maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
    `${q}`,])
.then((data) => ezty.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: troli }))
.catch((err) => console.log(err));
break
case prefix+'drapwater':
if (isBan) return fezy(mess.ban)
if(!q) return fezy(`Penggunaan ${command} teks`)
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
kurangLimit(m.sender, 1)
fezy(mess.wait)
 maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
     `${q}`,])
    .then((data) => ezty.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: troli }))
    .catch((err) => console.log(err));
     break
case prefix+'lion2':
  if (isBan) return fezy(mess.ban)
  if(!q) return fezy(`Penggunaan ${command} teks`)
  if (!isInventoryLimit){ addInventoriLimit(m.sender) }
  if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
  kurangLimit(m.sender, 1)
  fezy(mess.wait)
  maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
      `${q}`,])
     .then((data) => ezty.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: troli }))
     .catch((err) => console.log(err));
     break
case prefix+'herryp':
       if (isBan) return fezy(mess.ban)
       if(!q) return fezy(`Penggunaan ${command} teks|teks`)
       if (!isInventoryLimit){ addInventoriLimit(m.sender) }
       if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
       kurangLimit(m.sender, 1)
       fezy(mess.wait)
       teks1 = q.split("|")[0]
       teks2 = q.split("|")[1]
       maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
 `${teks1}`,`${teks2}`])
 .then((data) => ezty.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: troli }))
 .catch((err) => console.log(err));
 break
case prefix+'3davengers':
if (isBan) return fezy(mess.ban)
if(!q) return fezy(`Penggunaan ${command} teks`)
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
kurangLimit(m.sender, 1)
fezy(mess.wait)
maker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
    `${q}`,])
  .then((data) => ezty.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: troli }))
  .catch((err) => console.log(err));
   break
case prefix+'window':
if (isBan) return fezy(mess.ban)
if(!q) return fezy(`Penggunaan ${command} teks`)
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
kurangLimit(m.sender, 1)
fezy(mess.wait)
maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${q}`,])
  .then((data) => ezty.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: troli }))
  .catch((err) => console.log(err));
   break
case prefix+'graffiti':
   case prefix+'grafiti':
if (isBan) return fezy(mess.ban)
if(!q) return fezy(`Penggunaan ${command} teks|teks`)
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
kurangLimit(m.sender, 1)
fezy(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => ezty.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: troli }))
  .catch((err) => console.log(err));
   break
case prefix+'pornhub':
if (isBan) return fezy(mess.ban)
if(!q) return fezy(`Penggunaan ${command} teks`)
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
kurangLimit(m.sender, 1)
fezy(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => ezty.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: troli }))
  .catch((err) => console.log(err));
   break
case prefix+'blackping':
if (isBan) return fezy(mess.ban)
if(!q) return fezy(`Penggunaan ${command} teks`)
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
kurangLimit(m.sender, 1)
fezy(mess.wait)
maker.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    `${q}`,])
  .then((data) => ezty.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: troli }))
  .catch((err) => console.log(err));
   break
case prefix+'glitch2':
if (isBan) return fezy(mess.ban)
if(!q) return fezy(`Penggunaan ${command} teks|teks`)
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
kurangLimit(m.sender, 1)
fezy(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => ezty.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: troli }))
  .catch((err) => console.log(err));
   break
case prefix+'glitch3':
if (isBan) return fezy(mess.ban)
if(!q) return fezy(`Penggunaan ${command} teks|teks`)
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
kurangLimit(m.sender, 1)
fezy(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => ezty.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: troli }))
  .catch((err) => console.log(err));
   break
case prefix+'3dspace':
if (isBan) return fezy(mess.ban)
if(!q) return fezy(`Penggunaan ${command} teks|teks`)
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
kurangLimit(m.sender, 1)
fezy(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => ezty.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: troli }))
  .catch((err) => console.log(err));
   break
case prefix+'lion':
if (isBan) return fezy(mess.ban)
if(!q) return fezy(`Penggunaan ${command} teks|teks`)
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
kurangLimit(m.sender, 1)
fezy(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => ezty.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: troli }))
  .catch((err) => console.log(err));
   break
case prefix+'3dneon':
if (isBan) return fezy(mess.ban)
if(!q) return fezy(`Penggunaan ${command} teks`)
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
kurangLimit(m.sender, 1)
fezy(mess.wait)
maker.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
    `${q}`,])
  .then((data) => ezty.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: troli }))
  .catch((err) => console.log(err));
   break
case prefix+'neon':
if (isBan) return fezy(mess.ban)
if(!q) return fezy(`Penggunaan ${command} teks`)
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
kurangLimit(m.sender, 1)
fezy(mess.wait)
maker.textpro("https://textpro.me/neon-text-effect-online-879.html", [
    `${q}`,])
  .then((data) => ezty.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: troli }))
  .catch((err) => console.log(err));
   break
case prefix+'greenneon':
if (isBan) return fezy(mess.ban)
if(!q) return fezy(`Penggunaan ${command} teks`)
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
kurangLimit(m.sender, 1)
fezy(mess.wait)
maker.textpro("https://textpro.me/green-neon-text-effect-874.html", [
    `${q}`,])
  .then((data) => ezty.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: troli }))
  .catch((err) => console.log(err));
   break
case prefix+'bokeh':
if (isBan) return fezy(mess.ban)
if(!q) return fezy(`Penggunaan ${command} teks`)
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
kurangLimit(m.sender, 1)
fezy(mess.wait)
maker.textpro("https://textpro.me/bokeh-text-effect-876.html", [
    `${q}`,])
  .then((data) => ezty.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: troli }))
  .catch((err) => console.log(err));
   break
case prefix+'hollographic':
if (isBan) return fezy(mess.ban)
if(!q) return fezy(`Penggunaan ${command} teks`)
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
kurangLimit(m.sender, 1)
fezy(mess.wait)
maker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
    `${q}`,])
  .then((data) => ezty.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: troli }))
  .catch((err) => console.log(err));
   break
case prefix+'bear':
if (isBan) return fezy(mess.ban)
if(!q) return fezy(`Penggunaan ${command} teks`)
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
kurangLimit(m.sender, 1)
fezy(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => ezty.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: troli }))
  .catch((err) => console.log(err));
   break
case prefix+'wolf':
if (isBan) return fezy(mess.ban)
if(!q) return fezy(`Penggunaan ${command} teks`)
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
kurangLimit(m.sender, 1)
fezy(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => ezty.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: troli }))
  .catch((err) => console.log(err));
   break
case prefix+'natural':
if (isBan) return fezy(mess.ban)
if(!q) return fezy(`Penggunaan ${command} teks`)
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
kurangLimit(m.sender, 1)
fezy(mess.wait)
maker.textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
    `${q}`,])
  .then((data) => ezty.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: troli }))
  .catch((err) => console.log(err));
   break
case prefix+'carbon':
if (isBan) return fezy(mess.ban)
if(!q) return fezy(`Penggunaan ${command} teks`)
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
kurangLimit(m.sender, 1)
fezy(mess.wait)
maker.textpro("https://textpro.me/carbon-text-effect-833.html", [
    `${q}`,])
  .then((data) => ezty.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: troli }))
  .catch((err) => console.log(err));
   break
case prefix+'candy': case prefix+'christmas': case prefix+'3dchristmas': case prefix+'sparklechristmas':
case prefix+'deepsea': case prefix+'scifi': case prefix+'rainbow': case prefix+'waterpipe': case prefix+'spooky': 
case prefix+'pencil': case prefix+'circuit': case prefix+'discovery': case prefix+'metalic': case prefix+'fiction': case prefix+'demon': 
case prefix+'transformer': case prefix+'berry': case prefix+'thunder': case prefix+'magma': case prefix+'3dstone': 
case prefix+'neonlight': case prefix+'glitch': case prefix+'harrypotter': case prefix+'brokenglass': case prefix+'papercut': 
case prefix+'watercolor': case prefix+'multicolor': case prefix+'neondevil': case prefix+'underwater': case prefix+'graffitibike':
case prefix+'snow': case prefix+'cloud': case prefix+'honey': case prefix+'ice': case prefix+'fruitjuice': case prefix+'biscuit': case prefix+'wood': 
case prefix+'chocolate': case prefix+'strawberry': case prefix+'matrix': case prefix+'blood': case prefix+'dropwater': case prefix+'toxic': 
case prefix+'lava': case prefix+'rock': case prefix+'bloodglas': case prefix+'hallowen': case prefix+'darkgold': case prefix+'joker': case prefix+'wicker':
case prefix+'firework': case prefix+'skeleton': case prefix+'blackpink': case prefix+'sand': case prefix+'glue': case prefix+'1917': case prefix+'leaves': {
             if (isBan) return fezy(mess.ban)
             if (!q) return fezy(`Example : ${command} Ezii`) 
             if (!isInventoryLimit){ addInventoriLimit(m.sender) }
             if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
             kurangLimit(m.sender, 1)
             fezy(mess.wait)
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
             if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
             let anu = await maker.textpro(link, q)
                ezty.sendMessage(m.chat, { image: { url: anu }, caption: `*Done*` }, { quoted: troli })
             }
             break
//━━━━━━━━━━━━━━━[ Simi Fitur ]━━━━━━━━━━━━━━━\\
case prefix+'jo':
  case prefix+'simi':
  if (isBan) return fezy(mess.ban)
  if (isGroup)return fezy("Hanya bisa di lakukan di chat pribadi!")
  const cimcimi = await fetchJson(`https://api.simsimi.net/v2/?text=${q}&lc=id`)
  ezty.sendMessage(from, { text: cimcimi.success})
  break

//━━━━━━━━━━━━━━━[ Random Anime Fitur ]━━━━━━━━━━━━━━━\\
				case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'neko':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':
                if (isBan) return fezy(mess.ban)
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
                if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
                kurangLimit(m.sender, 1)
                fezy(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/${command}`)
					.then(({data}) => {
						ezty.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
					})
					break
				case prefix+'waifu': case prefix+'loli':
				if (isBan) return fezy(mess.ban)
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
                if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
                kurangLimit(m.sender, 1)
                fezy(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/waifu`)
					.then(({data}) => {
					ezty.sendImage(from, data.url, `✅Doneee\nUse Bots As Well As Possible And Dont Spam!`, troli)
					})
					break            
case prefix+'naruto':
				if (isBan) return fezy(mess.ban)
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
                if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
                kurangLimit(m.sender, 1)
                fezy(mess.wait)
			    var query = ["naruto hd","naruto boruto","naruto sasuke", "naruto aesthetic", "naruto aesthetic"]
                var ezi = await pinterest(pickRandom(query))
				var but = [{buttonId: `${command}`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				ezty.sendMessage(from, { caption: "Random Foto Naruto", image: { url: pickRandom(ezi.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: troli })
			    break
case prefix+'lolii':
				if (isBan) return fezy(mess.ban)
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
                if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
                kurangLimit(m.sender, 1)
                fezy(mess.wait)
			    var query = ["loli","loli chan","loli anime","loli hd","loli aesthetic"]
                var ezi = await pinterest(pickRandom(query))
				var but = [{buttonId: `${command}`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				ezty.sendMessage(from, { caption: "Random Foto Loli Chan", image: { url: pickRandom(ezi.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: troli })
 			    break
case prefix+'waifuu':
				if (isBan) return fezy(mess.ban)
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
                if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
                kurangLimit(m.sender, 1)
                fezy(mess.wait)
			    var query = ["waifu","waifu aesthetic","waifu hd"]
                var ezi = await pinterest(pickRandom(query))
				var but = [{buttonId: `${command}`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				ezty.sendMessage(from, { caption: "Random Waifu", image: { url: pickRandom(ezi.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: troli })
 			    break
case prefix+'husbu':
				if (isBan) return fezy(mess.ban)
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
                if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
                kurangLimit(m.sender, 1)
                fezy(mess.wait)
			    var query = ["husbu anime","husbu hd","husbu aesthetic"]
                var ezi = await pinterest(pickRandom(query))
				var but = [{buttonId: `${command}`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				ezty.sendMessage(from, { caption: "Random Husbu", image: { url: pickRandom(ezi.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: troli })
 			    break

//━━━━━━━━━━━━━━━[ Sticker Fitur ]━━━━━━━━━━━━━━━\\
case prefix+'gura':
case prefix+'gurastick':{
if (isBan) return fezy(mess.ban)
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
kurangLimit(m.sender, 1)
fezy(mess.wait)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await ezty.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case prefix+'doge':
case prefix+'dogestick':{
if (isBan) return fezy(mess.ban)
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
kurangLimit(m.sender, 1)
fezy(mess.wait)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await ezty.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case prefix+'bucinstick':
case prefix+'bucinp' :{
if (isBan) return fezy(mess.ban)
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
kurangLimit(m.sender, 1)
fezy(mess.wait)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await ezty.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case prefix+'patrik':
case prefix+'patrick': {
if (isBan) return fezy(mess.ban)
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
kurangLimit(m.sender, 1)
fezy(mess.wait)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await ezty.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break

//━━━━━━━━━━━━━━━[ Information Fitur ]━━━━━━━━━━━━━━━\\
case prefix+'covidindo':
if (isBan) return fezy(mess.ban)
if (q.includes('--help')) return fezy(examkosong) 
const c = await covid()
var { kasus, kematian, sembuh } = c[0]
ezty.sendMessage(from, {text : `Kasus : ${kasus}\n\nKematian : ${kematian}\n\nSembuh : ${sembuh}`}, m)
break
case prefix+'gempa':
if (isBan) return fezy(mess.ban)
if (q.includes('--help')) return fezy(examkosong) 
const tres = await Gempa()
var { Waktu, Lintang, Bujur, Magnitude, Kedalaman, Wilayah, Map } = tres.result
console.log(Map)
const captt = `Waktu : ${Waktu}\nLintang : ${Lintang}\nBujur : ${Bujur}\nWilayah : ${Wilayah}`
ezty.sendMessage(from, { image : { url : Map }, caption : captt})
break
case prefix+'fajar-news':
if (isBan) return fezy(mess.ban)
fezy(mess.wait)
FajarNews().then(async(res) => {
console.log(res) 
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
fezy(teks) 
})
break
case prefix+'cnn-news':
if (isBan) return fezy(mess.ban)
CNNNews().then(res => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
fezy(teks) 
})
break
case prefix+'layarkaca-search':
if (isBan) return fezy(mess.ban)
if (!q) return fezy('Judul') 
fezy(mess.wait)
LayarKaca21(q).then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Film: ${i.film_title}\n`
teks += `Link: ${i.film_link}\n`
}
teks += ``
fezy(teks) 
})
break
case prefix+'cnbc-news':
if (isBan) return fezy(mess.ban)
fezy(mess.wait)
CNBCNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
ezty.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : troli })
})
break
case prefix+'tribun-news':
if (isBan) return fezy(mess.ban)
fezy(mess.wait)
TribunNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
ezty.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : troli })
})
break
case prefix+'indozone-news':
if (isBan) return fezy(mess.ban)
fezy(mess.wait)
IndozoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
ezty.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : troli })
})
break
case prefix+'kompas-news':
if (isBan) return fezy(mess.ban)
fezy(mess.wait)
KompasNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
ezty.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : troli })
})
break
case prefix+'detik-news':
if (isBan) return fezy(mess.ban)
fezy(mess.wait)
DetikNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
ezty.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : troli })
})
break
case prefix+'daily-news':
if (isBan) return fezy(mess.ban)
fezy(mess.wait)
DailyNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
ezty.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : troli })
})
break
case prefix+'inews-news':
if (isBan) return fezy(mess.ban)
fezy(mess.wait)
iNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
fezy(teks) 
})
break
case prefix+'okezone-news':
if (isBan) return fezy(mess.ban)
fezy(mess.wait)
OkezoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
ezty.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : troli })
})
break
case prefix+'sindo-news':
if (isBan) return fezy(mess.ban)
fezy(mess.wait)
SindoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
fezy(teks) 
})
break
case prefix+'tempo-news':
if (isBan) return fezy(mess.ban)
fezy(mess.wait)
TempoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
ezty.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : troli })
})
break
case prefix+'antara-news':
if (isBan) return fezy(mess.ban)
fezy(mess.wait)
AntaraNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
ezty.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : troli })
})
break
case prefix+"kontan-news":
if (isBan) return fezy(mess.ban)
fezy(mess.wait)
KontanNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
ezty.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : troli })
})
break
case prefix+"merdeka-news":
if (isBan) return fezy(mess.ban)
fezy(mess.wait)
MerdekaNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
ezty.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : troli })
})
break
case prefix+"jalantikus-meme":
if (isBan) return fezy(mess.ban)
fezy(mess.wait)
var res = await JalanTikusMeme()
teks = ""
teks += "Jalan Tikus Meme\n\n"
teks += `Source: ${res}`
teks += ""
ezty.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : troli })
break

//━━━━━━━━━━━━━━━[ Owner Fitur ]━━━━━━━━━━━━━━━\\
            case prefix+'bcgc': case prefix+'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${command} fatih-san`
                let getGroups = await ezty.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                fezy(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'My Group',
                                    url: `${mygc}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '🧾 Donasi',
                                    id: `${prefix}donasi`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '🌟 Owner',
                                    id: `${prefix}owner`
                                }  
                            }]
                      let txt = `⎗ㅤㅤ⎚ㅤㅤ⎘ㅤㅤ⎌\n           *「 BROADCAST BOT 」*\n\n${text}`
                      ezty.send5Loc(i, txt, fake, global.thumb, btn)
                    }
                fezy(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case prefix+'bc': case prefix+'broadcast': case prefix+'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                fezy(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'My Group',
                                    url: `${mygc}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '🧾 Donasi',
                                    id: `${prefix}donasi`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '🌟 Owner',
                                    id: `${prefix}owner`
                                }  
                            }]
                      let txt = `⎗ㅤㅤ⎚ㅤㅤ⎘ㅤㅤ⎌\n           *「 BROADCAST BOT 」*\n\n${text}`
                      ezty.send5Loc(yoi, txt, fake, global.thumb, btn)
		}
		fezy('Sukses Broadcast')
            }
            break
case prefix+"setprefix":
if (!isCreator) throw mess.owner
if (!q) return fezy("Prefix nya mau apa?")
multipref = false;
noprefix = false;
oneprefix = true;
preff = q
break
case prefix+'chat': {
if (!isCreator) return fezy(mess.owner)
if (!args.join(" ")) return fezy(`Example :\n${prefix + command} 62813xxxx|Woi`)
const cpes = args.join(" ")
const nony = cpes.split("|")[0];
const pesny = cpes.split("|")[1];
lolh = `*| CHAT FITUR |*

Pesan dari admin bot
Nomor : @${m.sender.split("@")[0]}
Pesan : ${pesny}`
ezty.sendMessage(nony + "@s.whatsapp.net", {text:lolh, mentions:[m.sender]}, {quoted:m})
}
await fezy("Succes")
break
case prefix+'ban': {
if (!isCreator) return fezy(mess.owner)
if (!args[0]) return fezy(`Ketik ${command} add nomornya\n Ketik ${command} del nomornya`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banUser.includes(orgnye)
if (args[0] === "add") {
if (isBane) return fezy('User sudah dibanned')
banUser.push(orgnye)
fezy(`Succes ban`)
} else if (args[0] === "del") {
if (!isBane) return fezy('User tidak dibanned')
let delbans = banUser.indexOf(orgnye)
banUser.splice(delbans, 1)
fezy(`Succes delban`)
} else {
fezy("Error")
}
}
break
case prefix+'cowner': {
if (isBan) return fezy(mess.ban)
if (!isCreator) return fezy(mess.owner)
if (!args[0]) return fezy(`Ketik ${command} add nomornya\n Ketik ${command} del nomornya`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isCwner = owner.includes(orgnye)
if (args[0] === "add") {
if (isCwner) return fezy('User sudah menjadi owner')
owner.push(orgnye)
fezy(`Succes add friends`)
} else if (args[0] === "del") {
if (!isCwner) return fezy('User bukan owner')
let delcwner = owner.indexOf(orgnye)
owner.splice(delcwner, 1)
fezy(`Succes del friends`)
} else {
fezy("Error")
}
}
break

//━━━━━━━━━━━━━━━[ Other Fitur ]━━━━━━━━━━━━━━━\\
            case prefix+'infochat': {
                if (isBan) return fezy(mess.ban)
                if (!m.quoted) fezy('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `• @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━• *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} • *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                ezty.sendTextWithMentions(from, teks, m)
            }
            break
            case prefix+'listpc': {
                 if (isBan) return fezy(mess.ban)
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `• *Nama :* ${nama}\n• *User :* @${i.split('@')[0]}\n• *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 ezty.sendTextWithMentions(from, teks, m)
             }
             break
                case prefix+'listgc': {
                 if (isBan) return fezy(mess.ban)
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await ezty.groupMetadata(i)
                     teks += `• *Nama :* ${metadata.subject}\n• *Owner :* @${metadata.owner.split('@')[0]}\n• *ID :* ${metadata.id}\n• *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n• *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 ezty.sendTextWithMentions(from, teks, m)
             }
             break
             case prefix+'listonline': case prefix+'liston': {
                    if (isBan) return fezy(mess.ban)
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    ezty.sendText(from, 'List Online:\n\n' + online.map(v => '• @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
case prefix+'request': {
if (isBan) return fezy(mess.ban)
if (!args.join(" ")) return fezy(`Example : ${command} min tambahin fitur downloader`)
teks = `*| REQUEST FITUR |*`
teks11 = `\n\nNomor : @${m.sender.split("@")[0]}\nRequest : ${args.join(" ")}`
teks12 = `\n\nSucces send to owner`
for (let i of owner) {
ezty.sendMessage(i + "@s.whatsapp.net", {text: teks + teks11, mentions:[m.sender]}, {quoted:m})
}
ezty.sendMessage(m.chat, {text: teks + teks12 + teks11, mentions:[m.sender]}, {quoted:m})
}
break
case prefix+'report': {
if (isBan) return fezy(mess.ban)
if (!args.join(" ")) return fezy(`Example : \n- ${command} fitur ig error min\n- ${prefix + command} user ini nyepam min`)
teks = `*| REPORT FITUR |*`
teks11 = `\n\nNomor : @${m.sender.split("@")[0]}\nReport : ${args.join(" ")}`
teks12 = `\n\nSucces send to owner`
for (let i of owner) {
ezty.sendMessage(i + "@s.whatsapp.net", {text: teks + teks11, mentions:[m.sender]}, {quoted:m})
}
ezty.sendMessage(m.chat, {text: teks + teks12 + teks11, mentions:[m.sender]}, {quoted:m})
}
break

//━━━━━━━━━━━━━━━[ Convert Fitur ]━━━━━━━━━━━━━━━\\
            case prefix+'stiker': case prefix+'sticker': case prefix+'s': case prefix+'stickergif': case prefix+'sgif': {
            if (isBan) return fezy(mess.ban)
            if (!quoted) throw `Balas Video/Image Dengan Caption ${command}`
            if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
            kurangLimit(m.sender, 1)
            fezy(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await ezty.sendImageAsSticker(from, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return fezy('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await ezty.sendVideoAsSticker(from, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Kirim Gambar/Video Dengan Caption ${command}\nDurasi Video 1-9 Detik`
                }
            }
            break
       case prefix+'emojimix': {
        if (isBan) return fezy(mess.ban)
        if (!text) throw `Example : ${command} 😅+🤔`
        if (!isInventoryLimit){ addInventoriLimit(m.sender) }
        if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
        kurangLimit(m.sender, 1)
        fezy(mess.wait)
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await ezty.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
case prefix+'smeme': case prefix+'stickermeme': case prefix+'stickmeme': {
let { TelegraPh } = require('./lib/uploader')
if (isBan) return fezy(mess.ban)
if (!text) return fezy(`Kirim/Reply Foto Dengan Caption ${command} *teks*`)
if (text.includes('|')) return fezy(`Kirim/Reply Foto Dengan Caption ${command} *teks*`)
if (!/image/.test(mime)) return fezy(`Kirim/Reply Foto Dengan Caption ${command} *teks*`)
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
kurangLimit(m.sender, 1)
fezy(mess.wait)
mee = await ezty.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await ezty.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
case prefix+'smeme': case prefix+'stickmeme': case prefix+'stikmeme': case prefix+'stickermeme': case prefix+'stikermeme': {
if (isBan) return fezy(mess.ban)
let respond = `Kirim/reply image/sticker dengan caption ${command} text1|text2`
if (!/image/.test(mime)) throw respond
if (!text) throw respond
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
kurangLimit(m.sender, 1)
fezy(mess.wait)
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
let dwnld = await quoted.download()
let { floNime } = require('./lib/uploader')
let fatGans = await floNime(dwnld)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
let Riy = await ezty.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
await fs.unlinkSync(Riy)
}
break     
case prefix+'swm': case prefix+'stickerwm': {
if (isBan) return fezy(mess.ban)
if (!args.join(" ")) return fezy(`Example :\n${prefix}swm MyRyzuu | Itseziii`)
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
kurangLimit(m.sender, 1)
fezy(mess.wait)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
ezty.downloadAndSaveMediaMessage(quoted, "gifee")
ezty.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:troli})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await ezty.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return fezy('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await ezty.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
fezy(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
case prefix+'attp':
if (isBan) return fezy(mess.ban)
if (!q) return fezy("Textnya mana kak")
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
kurangLimit(m.sender, 1)
fezy(mess.wait)
nyz200 = await getBuffer(`https://myselfff.herokuapp.com/docs/random/attp?query=${q}`)
ezty.sendMessage(from, {sticker:nyz200}, { quoted: troli })
break
case prefix+'kbbi':
	  if (isBan) return fezy(mess.ban)
      if (!q) return fezy(`Masukan query! Contoh : ${command} pohon`)
      if (!isInventoryLimit){ addInventoriLimit(m.sender) }
      if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
      kurangLimit(m.sender, 1)
      fezy(mess.wait)
      bi = await fetchJson(`https://human-apixyz.herokuapp.com/api/info/kbbi?kata=${q}&apikey=AnggaKey`)
	  biba = `KBBI RESULT\n\nLema : ${bi.result.lema}\nArti : ${bi.result.arti}`
	  ezty.sendMessage(from, {text: biba}, { quoted: troli })
	  break
            case prefix+'toimage': case prefix+'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${command}*`
                fezy(mess.wait)
                let media = await ezty.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    ezty.sendMessage(from, { image: buffer }, { quoted: troli })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case prefix+'tomp4': case prefix+'tovideo': {
                if (isBan) return fezy(mess.ban)
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${command}*`
                fezy(mess.wait)
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await ezty.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await ezty.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: troli })
                await fs.unlinkSync(media)
            }
            break
            case prefix+'toaud': case prefix+'toaudio': {
            if (isBan) return fezy(mess.ban)
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin DijaJamaln Audio Dengan Caption ${command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin DijaJamaln Audio Dengan Caption ${command}`
            fezy(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            ezty.sendMessage(from, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : troli })
            }
            break
            case prefix+'tomp3': {
            if (isBan) return fezy(mess.ban)
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin DijaJamaln MP3 Dengan Caption ${command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin DijaJamaln MP3 Dengan Caption ${command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin DijaJamaln MP3 Dengan Caption ${command}`
            fezy(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            ezty.sendMessage(from, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${ezty.user.name}.mp3`}, { quoted : troli })
            }
            break
            case prefix+'tovn': case prefix+'toptt': {
            if (isBan) return fezy(mess.ban)
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin DijaJamaln VN Dengan Caption ${command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin DijaJamaln VN Dengan Caption ${command}`
            fezy(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            ezty.sendMessage(from, {audio: audio, mimetype:'audio/mpeg', ptt:true }, { quoted: troli })
            }
            break
            case prefix+'togif': {
                if (isBan) return fezy(mess.ban)
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${command}*`
                fezy(mess.wait)
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await ezty.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await ezty.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: troli })
                await fs.unlinkSync(media)
            }
            break
        case prefix+'tourl': {
                if (isBan) return fezy(mess.ban)
                if (!quoted) throw 'Reply Image'
                fezy(mess.wait)
		        let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await ezty.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    fezy(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    fezy(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
	
//━━━━━━━━━━━━━━━[ Search Fitur ]━━━━━━━━━━━━━━━\\
        case prefix+'google': {
                if (isBan) return fezy(mess.ban)
                if (!text) throw `Example : ${command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `• *Title* : ${g.title}\n`
                teks += `• *Description* : ${g.snippet}\n`
                teks += `• *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                fezy(teks)
                })
                }
                break
        case prefix+'gimage': {
        if (isBan) return fezy(mess.ban)
        if (!text) throw `Example : ${command} kaori cicak`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `${prefix}gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `⎗ㅤㅤ⎚ㅤㅤ⎘ㅤㅤ⎌
*-------「 GIMAGE SEARCH 」-------*
*• Query* : ${text}
*• Media Url* : ${images}`,
                    footer: fake,
                    buttons: buttons,
                    headerType: 4
                }
                ezty.sendMessage(from, buttonMessage, { quoted: troli })
        })
        }
        break
	case prefix+'cerpen':{
if (isBan) return fezy(mess.ban)
if (!q) return fezy('Judul cerpen yang tersedia lihat di list!')
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
kurangLimit(m.sender, 1)
fezy(mess.wait)
let cerpe = await cerpen(q)
var riych = await getBuffer(picak+`Cerpen ${q}`)
await ezty.send5Loc(from, `⎗ㅤㅤ⎚ㅤㅤ⎘ㅤㅤ⎌\n • _*Title :*_ ${cerpe.title}\n • _*Author :*_ ${cerpe.author}\n • _*Category :*_ ${cerpe.kategori}\n • _*Pass Moderation :*_ ${cerpe.lolos}\n • _*Story :*_\n${cerpe.cerita}`, `${fake}`,riych, [{"urlButton": {"displayText": "My Group","url": `${mygc}`}}] )
}
break
case prefix+'pinterest':
				if (isBan) return fezy(mess.ban)
                if (!q) return fezy(`Kirim perintah ${command} query atau ${command} query --jumlah\nContoh :\n${command} cecan atau ${command} cecan --10`)
		        if (!isInventoryLimit){ addInventoriLimit(m.sender) }
                if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
                kurangLimit(m.sender, 1)
                fezy(mess.wait)
			    var jumlah;
			    if (q.includes('--')) jumlah = q.split('--')[1]
			    pinterest(q.replace('--'+jumlah, '')).then(async(data) => {
				  if (q.includes('--')) {
					if (ezi.result.length < jumlah) {
					  jumlah = ezi.result.length
					  fezy(`Hanya ditemukan ${ezi.result.length}, foto segera dikirim`)
					}
					for (let i = 0; i < jumlah; i++) {
					  ezty.sendMessage(from, { image: { url: ezi.result[i] }})
				  }
				    
				  } else {
					var but = [{buttonId: `${command} ${q}`, buttonText: { displayText: 'Next Photo' }, type: 1 }]
					ezty.sendMessage(from, { caption: `Hasil pencarian dari ${q}`, image: { url: pickRandom(ezi.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: troli })
				  }
				})
			    break
case prefix+'webtonsearch': case prefix+'webtoon':
if (isBan) return fezy(mess.ban)
if (!q) return fezy('Nyari apa')
await fezy('Wait')
xfar.Webtoons(q).then(async data => {
let txt = `⎗ㅤㅤ⎚ㅤㅤ⎘ㅤㅤ⎌
*------「 WEBTOONS 」------*\n\n`
for (let i of data) {
txt += `*🛡 Title :* ${i.judul}\n`
txt += `*👍🏻 Like :* ${i.like}\n`
txt += `*👑 Creator :* ${i.creator}\n`
txt += `*🎥 Genre :* ${i.genre}\n`
txt += `*📃Url :* ${i.url}\n ----------------------------------------------------------\n`
}
await fezy(txt)
})
.catch((err) => {
fezy(lang.err())
})
break
case prefix+'brainly':
if (isBan) return fezy(mess.ban)
if (q.includes('--help')) return fezy(examquery) 
const anj = await brainly(q)
  var hmm2 = '────────────────💟\n'
  for (let Y of anj.data) {
  hmm2 += `*Pertanyaan:* ${Y.pertanyaan}\n\n*Jawaban:* ${Y.jawaban[0].text}\n──────────────────💖\n`
  }
  ezty.sendMessage(from, {image : { url : 'https://telegra.ph/file/ba004c72b2222f4913e99.jpg' }, caption : hmm2}) 
  
break
case prefix+'jadwaltv':
if (isBan) return fezy(mess.ban)
if (q.includes('--help')) return fezy(examquery) 
if (!q) return fezy('Kirim perintah *#jadwaltv [channel]*')
fezy(await jadwaltv(q))
break
            case prefix+'wikimedia': {
                if (isBan) return fezy(mess.ban)
                if (!text) throw 'Masukkan Title/Judul'
		        let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `${prefix}wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `• Title : ${result.title}\n• Source : ${result.source}\n• Media Url : ${result.image}`,
                    footer: fake,
                    buttons: buttons,
                    headerType: 4
                }
                ezty.sendMessage(from, buttonMessage, { quoted: troli })
            }
            break
case prefix+'lirik':
if (isBan) return fezy(mess.ban)
if (q.includes('--help')) return fezy(examquery) 
if (args.length < 1) return fezy('Title/Nama Lagu')
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
kurangLimit(m.sender, 1)
fezy(mess.wait)
lirikLagu(q).then((res) => {
let lirik = `*• Nama Lagu :* ${q}\n*• Lirik :*\n ${res[0].result}`
fezy(lirik)
})
break
case prefix+'chara':
if (isBan) return fezy(mess.ban)
if (q.includes('--help')) return fezy(examquery) 
if(!q) return fezy(`gambar apa?\n${prefix}chara nino`)
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
kurangLimit(m.sender, 1)
fezy(`Satu Limit Kamu Sudah Terpakai>.<\nSisa limit kamu : ${getLimit(m.sender)}`)
let im = await hx.chara(q)
let acak = im[Math.floor(Math.random() * im.length)]
await ezty.sendMessage(from, {image : { url : acak }, caption : 'Nih bang'})
break
case prefix+'manga':{
if (isBan) return fezy(mess.ban)
if (q.includes('--help')) return fezy(examquery) 
if (!q) return fezy(`Masukkan query!`)
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
kurangLimit(m.sender, 1)
fezy(mess.wait)
let res = await fetch(`https://api.jikan.moe/v3/search/manga?q=${q}`)
let json = await res.json()
let { title, synopsis, chapters, url, volumes, score, image_url } = json.results[0]
let mangaingfo = `*Title:* ${title}
*• Chapters:* ${chapters}
*• Volumes:* ${volumes}
*• Score:* ${score}
*• Synopsis:* ${synopsis}
*• Link*: ${url}`
ezty.sendMessage(from, {image : { url : image_url }, caption: mangaingfo})
} 
  break
case prefix+'translate': case prefix+'terjemahan': {
if (isBan) return fezy(mess.ban)
if (!args.join(" ")) return fezy("Textnya?")
tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=id&kata=${args.join(" ")}`)
Infoo = tes.info
Detek = tes.translate
fezy(`🌐Translate : ${Detek}\n📘Hasil : ${Infoo}`)
}
break  
case prefix+'grupwa': case prefix+'searchgrup':
			    if (isBan) return fezy(mess.ban)
				if (args.length < 2) return fezy(`Kirim perintah ${command} nama grup`)
				if (!isInventoryLimit){ addInventoriLimit(m.sender) }
                if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
                kurangLimit(m.sender, 1)
                fezy(mess.wait)
			    hxz.linkwa(q).then(async(data) => {
				  if (data.length == 0) return fezy(`Grup ${q} tidak ditemukan`)
				  var teks = `*Hasil Pencarian Dari ${q}*\n\n`
				  for (let x of data) {
					teks += `*Nama :* ${x.nama}\n*Link :* ${x.link}\n\n`
				  }
				  fezy(teks)
				}).catch(() => fezy('Eror'))
			    break
  
//━━━━━━━━━━━━━━━[ Random Fitur By Ohyziro ]━━━━━━━━━━━━━━━\\
    case prefix+'couple': {
		        if (isBan) return fezy(mess.ban)
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
                if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
                kurangLimit(m.sender, 1)
                fezy(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                ezty.sendMessage(from, { image: { url: random.male }, caption: `Couple Male` }, { quoted: troli })
                ezty.sendMessage(from, { image: { url: random.female }, caption: `Couple Female` }, { quoted: troli })
            }
	    break
            case prefix+'coffe': case prefix+'kopi': {
            	if (isBan) return fezy(mess.ban)
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
                if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
                kurangLimit(m.sender, 1)
               let buttons = [
                    {buttonId: `${prefix}coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `Random Coffe`,
                    footer: fake,
                    buttons: buttons,
                    headerType: 4
                }
                ezty.sendMessage(from, buttonMessage, { quoted: troli })
            }
            break
            case prefix+'wallpaper': {
                if (isBan) return fezy(mess.ban)
                if (!text) throw 'Masukkan Query Title'
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
                if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
                kurangLimit(m.sender, 1)
                let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `${prefix}wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `• Title : ${result.title}\n• Category : ${result.type}\n• Detail : ${result.source}\n• Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: fake,
                    buttons: buttons,
                    headerType: 4
                }
                ezty.sendMessage(from, buttonMessage, { quoted: troli })
            }
            break
case prefix+'dadu':
if (isBan) return fezy(mess.ban)
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
kurangLimit(m.sender, 1)
var dadu = JSON.parse(fs.readFileSync('./fitur/dadu.json'))
var hasil = pickRandom(dadu)
ezty.sendMessage(from, {sticker: {url: hasil.url}}, {quoted: troli})
break
case prefix+'gombal':
  case prefix+'gombalan':
    var gombal = JSON.parse(fs.readFileSync('./fitur/gombalan.json'))
if (isBan) return fezy(mess.ban)
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
kurangLimit(m.sender, 1)
fezy(mess.wait)
var hasil = pickRandom(gombal)
var but = [{buttonId: `${command}`, buttonText: { displayText: "➡️ Next Gombalan" }, type: 1 }]
ezty.sendMessage(from, { text: hasil, buttons: but, templateButtons: but, footer: 'Cie Di Gombal Robot >.<' }, { quoted: troli })
break
case prefix+'katagalau':
    case prefix+'galau':
if (isBan) return fezy(mess.ban)
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
kurangLimit(m.sender, 1)
fezy(mess.wait)
var kotes = JSON.parse(fs.readFileSync('./fitur/katagalau.json'))
var hasil = pickRandom(kotes)
var but = [{buttonId: `${command}`, buttonText: { displayText: "➡️ Next Kata Galau" }, type: 1 }]
ezty.sendMessage(from, { text: hasil, buttons: but, templateButtons: but, footer: 'Galau Mulu Lu' }, { quoted: troli })
break
case prefix+'quote': case prefix+'quotes':
case prefix+'randomquote': case prefix+'randomquotes':
if (isBan) return fezy(mess.ban)
fezy(mess.wait)
var res = await Quotes()
var anjayani = `${res.quotes}\n\nQuotes By - ${res.author}`
var but = [{buttonId: `${command}`, buttonText: { displayText: "Get Quotes" }, type: 1 }]
ezty.sendMessage(from, { text: anjayani, buttons: but, templateButtons: but }, { quoted: troli })
break
case prefix+"darkjoke": case prefix+"darkjokes": case prefix+'meme': case prefix+'memeindo':
if (isBan) return fezy(mess.ban)
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
kurangLimit(m.sender, 1)
fezy(mess.wait)
var res = await Darkjokes()
teks = "*DARKJOKES*"
ezty.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : troli })
break
case prefix+'faktaunik':
case prefix+'faktamenarik':
if (isBan) return fezy(mess.ban)
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
kurangLimit(m.sender, 1)
fezy(mess.wait)
var ezi = await fetchJson(`https://docs-jojo.herokuapp.com/api/fakta-unik`)
var caption = `Tahukah kamu?
${ezi.result}`
var but = [{buttonId: `${command}`, buttonText: { displayText: "Fakta Unik" }, type: 1 }]
ezty.sendMessage(from, { text: caption, buttons: but, fake, templateButtons: but }, { quoted: troli })
break
case prefix+'cecan': case prefix+'cewek':
				if (isBan) return fezy(mess.ban)
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
                if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
                kurangLimit(m.sender, 1)
                fezy(mess.wait)
			    var query = ["cecan hd","cecan indo","cewe cantik", "cewe aesthetic", "cecan aesthetic"]
                var ezi = await pinterest(pickRandom(query))
				var but = [{buttonId: `${command}`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				ezty.sendMessage(from, { caption: "Random Cewe Cantik", image: { url: pickRandom(ezi.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: troli })
			    break
			case prefix+'cogan': case prefix+'cowok':
				if (isBan) return fezy(mess.ban)
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
                if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
                kurangLimit(m.sender, 1)
                fezy(mess.wait)
				var query = ["cogan hd","cogan indo","cowo ganteng","handsome boy","hot boy","oppa","cowo aesthetic","cogan aesthetic"]
				var ezi = await pinterest(pickRandom(query))
				var but = [{buttonId: `${command}`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				ezty.sendMessage(from, { caption: "Random Cowo Ganteng", image: { url: pickRandom(ezi.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: troli })
			    break
case prefix+'aesthetic':
if (isBan) return fezy(mess.ban)
if (q.includes('--help')) return fezy(examkosong) 
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
kurangLimit(m.sender, 1)
fezy(mess.wait)
const Depp = fs.readFileSync("./function/scrape/Result/RandomImage/aesthetic.json");
const Dep = JSON.parse(Depp)
const Defff = Math.floor(Math.random() * Dep.length)
const Diep = Dep[Defff]
ezty.sendMessage(from, { image : { url : Diep }, caption : 'nih' }, { quoted : m}) 
break
case prefix+'storywa':
if (isBan) return fezy(mess.ban)
if (q.includes('--help')) return fezy(examkosong) 
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
kurangLimit(m.sender, 1)
fezy(mess.wait)
const Depp1 = fs.readFileSync("./function/scrape/Result/RandomVideo/storywa.json");
const Dep1 = JSON.parse(Depp1)
const Defff1 = Math.floor(Math.random() * Dep1.length)
const Diep1 = Dep1[Defff1]
ezty.sendMessage(from, { video : { url : Diep1.url }, caption : 'nih' }) 
break
            case prefix+'quotesanime': case prefix+'quoteanime': {
		        if (isBan) return fezy(mess.ban)
                let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `${prefix}quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                ezty.sendMessage(from, buttonMessage, { quoted: troli })
            }
            break

//━━━━━━━━━━━━━━━[ Primbon Fitur ]━━━━━━━━━━━━━━━\\
    case prefix+'nomerhoki': case prefix+'nomorhoki': {
                if (isBan) return fezy(mess.ban)
                if (!Number(text)) throw `Example : ${command} 6288292024190`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return fezy(anu.message)
                ezty.sendText(from, `• *Nomor HP :* ${anu.message.nomer_hp}\n• *Angka Shuzi :* ${anu.message.angka_shuzi}\n• *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n• *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, troli)
            }
            break
            case prefix+'artimimpi': case prefix+'tafsirmimpi': {
                if (isBan) return fezy(mess.ban)
                if (!text) throw `Example : ${command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return fezy(anu.message)
                ezty.sendText(from, `• *Mimpi :* ${anu.message.mimpi}\n• *Arti :* ${anu.message.arti}\n• *Solusi :* ${anu.message.solusi}`, troli)
            }
            break
            case prefix+'ramalanjodoh': case prefix+'ramaljodoh': {
                if (isBan) return fezy(mess.ban)
                if (!text) throw `Example : ${command} Jamal, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return fezy(anu.message)
                ezty.sendText(from, `• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, troli)
            }
            break
            case prefix+'ramalanjodohbali': case prefix+'ramaljodohbali': {
                if (isBan) return fezy(mess.ban)
                if (!text) throw `Example : ${command} Jamal, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return fezy(anu.message)
                ezty.sendText(from, `• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, troli)
            }
            break
            case prefix+'suamiistri': {
                if (isBan) return fezy(mess.ban)
                if (!text) throw `Example : ${command} Jamal, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return fezy(anu.message)
                ezty.sendText(from, `• *Nama Suami :* ${anu.message.suami.nama}\n• *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n• *Nama Istri :* ${anu.message.istri.nama}\n• *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, troli)
            }
            break
            case prefix+'ramalancinta': case prefix+'ramalcinta': {
                if (isBan) return fezy(mess.ban)
                if (!text) throw `Example : ${command} Jamal, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return fezy(anu.message)
                ezty.sendText(from, `• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}\n• *Catatan :* ${anu.message.catatan}`, troli)
            }
            break
            case prefix+'artinama': {
                if (isBan) return fezy(mess.ban)
                if (!text) throw `Example : ${command} Jamal Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return fezy(anu.message)
                ezty.sendText(from, `• *Nama :* ${anu.message.nama}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`, troli)
            }
            break
            case prefix+'kecocokannama': case prefix+'cocoknama': {
                if (isBan) return fezy(mess.ban)
                if (!text) throw `Example : ${command} Jamal, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return fezy(anu.message)
                ezty.sendText(from, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Life Path :* ${anu.message.life_path}\n• *Destiny :* ${anu.message.destiny}\n• *Destiny Desire :* ${anu.message.destiny_desire}\n• *Personality :* ${anu.message.personality}\n• *Persentase :* ${anu.message.persentase_kecocokan}`, troli)
            }
            break
            case prefix+'kecocokanpasangan': case prefix+'cocokpasangan': case prefix+'pasangan': {
                if (isBan) return fezy(mess.ban)
                if (!text) throw `Example : ${command} Jamal|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return fezy(anu.message)
                ezty.sendImage(from,  anu.message.gambar, `• *Nama Anda :* ${anu.message.nama_anda}\n• *Nama Pasangan :* ${anu.message.nama_pasangan}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}`, troli)
            }
            break
            case prefix+'jadianpernikahan': case prefix+'jadiannikah': {
                if (isBan) return fezy(mess.ban)
                if (!text) throw `Example : ${command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return fezy(anu.message)
                ezty.sendText(from, `• *Tanggal Pernikahan :* ${anu.message.tanggal}\n• *karakteristik :* ${anu.message.karakteristik}`, troli)
            }
            break
            case prefix+'sifatusaha': {
                if (isBan) return fezy(mess.ban)
                if (!ext)throw `Example : ${command} 28, 12, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return fezy(anu.message)
                ezty.sendText(from, `• *Lahir :* ${anu.message.hari_lahir}\n• *Usaha :* ${anu.message.usaha}`, troli)
            }
            break
            case prefix+'rejeki': case prefix+'rezeki': {
                if (isBan) return fezy(mess.ban)
                if (!text) throw `Example : ${command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return fezy(anu.message)
                ezty.sendText(from, `• *Lahir :* ${anu.message.hari_lahir}\n• *Rezeki :* ${anu.message.rejeki}\n• *Catatan :* ${anu.message.catatan}`, troli)
            }
            break
            case prefix+'pekerjaan': case prefix+'kerja': {
                if (isBan) return fezy(mess.ban)
                if (!text) throw `Example : ${command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return fezy(anu.message)
                ezty.sendText(from, `• *Lahir :* ${anu.message.hari_lahir}\n• *Pekerjaan :* ${anu.message.pekerjaan}\n• *Catatan :* ${anu.message.catatan}`, troli)
            }
            break
            case prefix+'ramalannasib': case prefix+'ramalnasib': case prefix+'nasib': {
                if (isBan) return fezy(mess.ban)
                if (!text) throw `Example : 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return fezy(anu.message)
                ezty.sendText(from, `• *Analisa :* ${anu.message.analisa}\n• *Angka Akar :* ${anu.message.angka_akar}\n• *Sifat :* ${anu.message.sifat}\n• *Elemen :* ${anu.message.elemen}\n• *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, troli)
            }
            break
            case prefix+'potensipenyakit': case prefix+'penyakit': {
                if (isBan) return fezy(mess.ban)
                if (!text) throw `Example : ${command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return fezy(anu.message)
                ezty.sendText(from, `• *Analisa :* ${anu.message.analisa}\n• *Sektor :* ${anu.message.sektor}\n• *Elemen :* ${anu.message.elemen}\n• *Catatan :* ${anu.message.catatan}`, troli)
            }
            break
            case prefix+'artitarot': case prefix+'tarot': {
                if (isBan) return fezy(mess.ban)
                if (!text) throw `Example : ${command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return fezy(anu.message)
                ezty.sendImage(from, anu.message.image, `• *Lahir :* ${anu.message.tgl_lahir}\n• *Simbol Tarot :* ${anu.message.simbol_tarot}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`, troli)
            }
            break
            case prefix+'haribaik': {
                if (isBan) return fezy(mess.ban)
                if (!text) throw `Example : ${command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return fezy(anu.message)
                ezty.sendText(from, `• *Lahir :* ${anu.message.tgl_lahir}\n• *Kala Tinantang :* ${anu.message.kala_tinantang}\n• *Info :* ${anu.message.info}\n• *Catatan :* ${anu.message.catatan}`, troli)
            }
            break
            case prefix+'harisangar': case prefix+'taliwangke': {
                if (isBan) return fezy(mess.ban)
                if (!text) throw `Example : ${command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return fezy(anu.message)
                ezty.sendText(from, `• *Lahir :* ${anu.message.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Info :* ${anu.message.info}\n• *Catatan :* ${anu.message.catatan}`, troli)
            }
            break
            case prefix+'harinaas': case prefix+'harisial': {
                if (isBan) return fezy(mess.ban)
                if (!text) throw `Example : ${command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return fezy(anu.message)
                ezty.sendText(from, `• *Hari Lahir :* ${anu.message.hari_lahir}\n• *Tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Hari Naas :* ${anu.message.hari_naas}\n• *Info :* ${anu.message.catatan}\n• *Catatan :* ${anu.message.info}`, troli)
            }
            break
            case prefix+'nagahari': case prefix+'harinaga': {
                if (isBan) return fezy(mess.ban)
                if (!text) throw `Example : ${command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return fezy(anu.message)
                ezty.sendText(from, `• *Hari Lahir :* ${anu.message.hari_lahir}\n• *Tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n• *Catatan :* ${anu.message.catatan}`, troli)
            }
            break
            case prefix+'arahrejeki': case prefix+'arahrezeki': {
                if (isBan) return fezy(mess.ban)
                if (!text) throw `Example : ${command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return fezy(anu.message)
                ezty.sendText(from, `• *Hari Lahir :* ${anu.message.hari_lahir}\n• *tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Arah Rezeki :* ${anu.message.arah_rejeki}\n• *Catatan :* ${anu.message.catatan}`, troli)
            }
            break
            case prefix+'peruntungan': {
                if (isBan) return fezy(mess.ban)
                if (!text) throw `Example : ${command} Jamal, 7, 7, 2005, 2022\n\nNote : ${command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return fezy(anu.message)
                ezty.sendText(from, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, troli)
            }
            break
            case prefix+'weton': case prefix+'wetonjawa': {
                if (isBan) return fezy(mess.ban)
                if (!text) throw `Example : ${command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return fezy(anu.message)
                ezty.sendText(from, `• *Tanggal :* ${anu.message.tanggal}\n• *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n• *Watak Hari :* ${anu.message.watak_hari}\n• *Naga Hari :* ${anu.message.naga_hari}\n• *Jam Baik :* ${anu.message.jam_baik}\n• *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, troli)
            }
            break
            case prefix+'sifat': case prefix+'karakter': {
                if (isBan) return fezy(mess.ban)
                if (!text) throw `Example : ${command} Jamal, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return fezy(anu.message)
                ezty.sendText(from, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Garis Hidup :* ${anu.message.garis_hidup}`, troli)
            }
            break
            case prefix+'keberuntungan': {
                if (isBan) return fezy(mess.ban)
                if (!text) throw `Example : ${command} Jamal, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return fezy(anu.message)
                ezty.sendText(from, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Hasil :* ${anu.message.result}`, troli)
            }
            break
            case prefix+'masasubur': {
                if (isBan) return fezy(mess.ban)
                if (!text) throw `Example : ${command} 12, 1, 2022, 28\n\nNote : ${command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return fezy(anu.message)
                ezty.sendText(from, `• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, troli)
            }
            break
            case prefix+'shio': {
                if (isBan) return fezy(mess.ban)
                if (!text) throw `Example : ${command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return fezy(anu.message)
                ezty.sendText(from, `• *Hasil :* ${anu.message}`, troli)
            }
            break
//━━━━━━━━━━━━━━━[ Download Fitur ]━━━━━━━━━━━━━━━\\
      /* case prefix+'tiktok': case prefix+'tiktoknowm': {
  if (isBan) return fezy(mess.ban)
  if (!q) return fezy('Linknya?')
  if (!q.includes('tiktok')) return fezy('Itu bukan link tiktok!')
  if (!isInventoryLimit){ addInventoriLimit(m.sender) }
  if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
  kurangLimit(m.sender, 1)
  fezy(mess.wait)
  let musim_rambutan = await TiktokDownloader(`${q}`).catch(e => {
 fezy('eror') 
} )
   console.log(musim_rambutan)
   let vid = musim_rambutan.result.nowatermark
                let buttons = [
                    {urlButton: { displayText: `Source Code`, url : `${args[1]}` } },
                    {buttonId: `${prefix}tiktokaudio ${text}`, buttonText: {displayText: 'Get Audio'}, type: 1},
                ]
                let buttonMessage = {
                    video: { url: vid },
                    caption: `✅Doneee`,
                    footer: `ꔛ Want to Convert To Audio? Please Select the Fi Button Below`,
                    buttons: buttons,
                    headerType: 5
                }
                ezty.sendMessage(m.chat, buttonMessage, { quoted: troli })
            }
            break
       case prefix+'tiktokwm':{
  if (isBan) return fezy(mess.ban)
  if (!q) return fezy('Linknya?')
  if (!q.includes('tiktok')) return fezy('Itu bukan link tiktok!')
   let musim_rambutan = await TiktokDownloader(`${q}`).catch(e => {
 fezy('eror') 
} )
   console.log(musim_rambutan)
   let musimwm = musim_rambutan.result.watermark
                let buttons = [
                    {urlButton: { displayText: `Source Code`, url : `${args[1]}` } },
                    {buttonId: `${prefix}tiktok ${text}`, buttonText: {displayText: 'No Watermark'}, type: 1},
                    {buttonId: `${prefix}tiktokaudio ${text}`, buttonText: {displayText: 'Audio'}, type: 1},
                ]
                let buttonMessage = {
                    video: { url: musimwm },
                    caption: `✅Doneee`,
                    footer: `ꔛ Want to Convert To No Watermark/Audio? Please Select the Fi Button Below`,
                    buttons: buttons,
                    headerType: 5
                }
                ezty.sendMessage(from, buttonMessage, { quoted: troli })
            }
            break */
/* case prefix+'tiktok':
			    if (args.length < 1) return fezy(`Kirim perintah ${command} link`)
			    if (!isUrl(args[0])) return fezy('eror')
			    if (!q.includes('tiktok')) return fezy('Itu bukan link tiktok!')
			    fezy(mess.wait)
			    hxz.ttdownloader(`${q}`).then( data => {
                let buttons = [
                    {urlButton: { displayText: `Source Code`, url : `${args[1]}` } },
                    {buttonId: `${prefix}tiktok ${text}`, buttonText: {displayText: 'Watermark'}, type: 1},
                    {buttonId: `${prefix}tiktokaudio ${text}`, buttonText: {displayText: 'Audio'}, type: 1},
                ]
                let buttonMessage = {
                    video: { url: data.nowm },
                    caption: `✅Doneee`,
                    footer: `ꔛ Want to Convert To No Watermark/Audio? Please Select the Fi Button Below`,
                    buttons: buttons,
                    headerType: 5
                }
                ezty.sendMessage(from, buttonMessage, { quoted: troli })
               }).catch(() => fezy('eror'))
            break */
            /* case prefix+'tiktokwm':
			    if (args.length < 1) return fezy(`Kirim perintah ${command} link`)
			    if (!isUrl(args[0])) return fezy('eror')
			    if (!q.includes('tiktok')) return fezy('Itu bukan link tiktok!')
			    fezy(mess.wait)
			    xfar.Tiktok(`${q}`).then( data => {
                let buttons = [
                    {urlButton: { displayText: `Source Code`, url : `${args[1]}` } },
                    {buttonId: `${prefix}tiktok ${text}`, buttonText: {displayText: 'No Watermark'}, type: 1},
                    {buttonId: `${prefix}tiktokaudio ${text}`, buttonText: {displayText: 'Audio'}, type: 1},
                ]
                let buttonMessage = {
                    video: { url: data.medias[0].url },
                    caption: `✅Doneee`,
                    footer: `ꔛ Want to Convert To No Watermark/Audio? Please Select the Fi Button Below`,
                    buttons: buttons,
                    headerType: 5
                }
                ezty.sendMessage(from, buttonMessage, { quoted: troli })
                }).catch(() => fezy('eror'))
			    break */
            case prefix+'tiktokwm':
			    if (args.length < 1) return fezy(`Kirim perintah ${command} link`)
			    if (!isUrl(args[0])) return fezy('eror')
			    if (!q.includes('tiktok')) return fezy('Itu bukan link tiktok!')
			    fezy(mess.wait)
			    xfar.Tiktok(`${q}`).then( data => {
                    ezty.sendMessage(from, { video: { url: data.medias[0].url }}, { quoted: troli })
			    }).catch(() => fezy('eror'))
			    break
			case prefix+'tiktok':
			    if (args.length < 1) return fezy(`Kirim perintah ${command} link`)
			    if (!isUrl(args[0])) return fezy('eror')
			    if (!q.includes('tiktok')) return fezy('Itu bukan link tiktok!')
			    fezy(mess.wait)
			    hxz.ttdownloader(`${q}`).then( data => {
			      ezty.sendMessage(from, { caption: `✅Doneee\nUse Bots As Well As Possible And Dont Spam!`, video: { url: data.nowm }, templateButtons: buttonsTiktod, footer: `ꔛ Want to Convert To Audio? Please Select the Fi Button Below`, mentions: [m.sender] }, { quoted: troli })
			     }).catch(() => fezy('eror'))
			    break
  case prefix+'tiktokmp3': case prefix+'tiktokaudio':{
  if (isBan) return fezy(mess.ban)
  if (!q) return fezy('Linknya?')
  if (!q.includes('tiktok')) return fezy('Itu bukan link tiktok!')
   let musim_rambutan = await TiktokDownloader(`${q}`).catch(e => {
 fezy('eror') 
} )
   console.log(musim_rambutan)
   const musim_duren_a = musim_rambutan.result.audio
    ezty.sendMessage(from, {document: { url: musim_duren_a }, mimetype: 'audio/mpeg', fileName: `${q}.mp3`}, { quoted : troli })
    
   }
 break
case prefix+'yts': case prefix+'ytsearch':
if (isBan) return fezy(mess.ban)
if (args.length < 1) return fezy(`Contoh:\n${command} bukti cinta saya`)
let list_rows = [];
const data = await yts(q);
for(let a of data.all) {
list_rows.push({
title: a.title, description: `• Channel: ${a.author.name}\n• Durasi: ${a.duration}`, rowId: `${prefix}ytmp3 ${a.url}`
})
}
   const button = {
        title: `*YOUTUBE SEARCH🔎*`,
        description: `Menemukan Pencarian ${q}`,
        footerText: fake,
        buttonText: 'Click Here',
        listType: 'SINGLE_SELECT',
        sections: [
            {
                title: `Hasil Pencarian : ${q}`,
                rows: list_rows
            }
        ]
        }
       const templateList = generateWAMessageFromContent(from, proto.Message.fromObject({ "listMessage": button }), {});
        ezty.relayMessage(from, templateList.message, { messageId: templateList.key.id });
break
case prefix+'play' :
if (isBan) return fezy(mess.ban)
if (!q) return fezy('Linknya/Judul Yg Dicari')
var search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let thumbInfo = `⎗ㅤㅤ⎚ㅤㅤ⎘ㅤㅤ⎌
*-------「 YOUTUBE PLAY 」-------*
                
 *• Title :* ${anu.title}
 *• Views :* ${anu.views}
 *• Duration :* ${anu.timestamp}
 *• Channel :* ${anu.author.name}
 *• Upload :* ${anu.ago}
 *• Url Video :* ${anu.url}' `

                ok = `${thumbInfo}`

     const template = generateWAMessageFromContent(from, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: ok,
           locationMessage: { 
           jpegThumbnail: await getBuffer(anu.image) }, 
           hydratedFooterText: fake,
           hydratedButtons: [{
             urlButton: {
                                    displayText: 'Source Code',
                                    url: `${args[1]}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Video',
                                    id: `${prefix}ytmp4 ${anu.url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Music',
                                    id: `${prefix}ytmp3 ${anu.url}`
                                }  
                            }]
         }
       }
     }), { userJid: m.sender, quoted: troli });
    //ezty.reply(from, text.trim(), m)
    return await ezty.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )

break
	    case prefix+'ytmp3': case prefix+'ytaudio': {
                if (isBan) return fezy(mess.ban)
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
                if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
                kurangLimit(m.sender, 1)
                fezy(mess.wait)
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return fezy('File Melebihi Batas '+util.format(media))
                ezty.sendMessage(from, {document: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3`}, { quoted : troli })
            }
            break
            case prefix+'ytmp4': case prefix+'ytvideo': {
                if (isBan) return fezy(mess.ban)
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
                if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
                kurangLimit(m.sender, 1)
                fezy(mess.wait)
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return fezy('File Melebihi Batas '+util.format(media))
                ezty.sendMessage(from, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `✅Doneee\nUse Bots As Well As Possible And Dont Spam!` }, { quoted: troli })
            }
            break
	case prefix+'igstalk':
if (isBan) return fezy(mess.ban)
if (q.includes('--help')) return fezy(examquery)
if (!q) return fezy('*Example* : #igstalk ohyziro') 
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
kurangLimit(m.sender, 1)
fezy(mess.wait)
igstalk(q).then(result => {
console.log(result)
ezty.sendMessage(from, { image : { url : result.thumbnail}, caption : `*- Username:* ${result.username}\n*- Fullname:* ${result.fullname}\n*- Followers:* ${result.followers}\n*- Following:* ${result.following}\n*- Verified:* ${result.verified}\n*- Bio:* ${result.bio}`}, {quoted : m}) 
}) 
break
case prefix+'igdl': {
if (isBan) return fezy(mess.ban)
if (q.includes('--help')) return fezy(examlink) 
if (!args[0]) return fezy('Linknya mana?')
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
kurangLimit(m.sender, 1)
fezy(mess.wait)
    try{
    let anu = await igDownloader(`${q}`)
     .then((data) => { 
      let linck = data.result.link
      let desksz = data.result.desc
     if (linck.includes("mp4")){
       ezty.sendMessage(from, { video: { url : linck }, caption: desksz}, { quoted: troli } )
      } else 
     if (linck.includes("jpg")){
       ezty.sendMessage(from, { image: { url : linck }, caption: desksz}, { quoted: troli } )
     }
     console.log(data)
    }
    )
   } catch { fezy('eror') }
  }
  break       
    case prefix+'getmusic': {
                if (isBan) return fezy(mess.ban)
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${command} 1`
                if (!m.quoted) return fezy('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
		        let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return fezy('File Melebihi Batas '+util.format(media))
                ezty.sendImage(from, media.thumb, `• Title : ${media.title}\n• File Size : ${media.filesizeF}\n• Url : ${urls[text - 1]}\n• Ext : MP3\n• Resolusi : ${args[1] || '128kbps'}`, troli)
                ezty.sendMessage(from, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: troli })
            }
            break
            case prefix+'getvideo': {
                if (isBan) return fezy(mess.ban)
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${command} 1`
                if (!m.quoted) return fezy('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return fezy('File Melebihi Batas '+util.format(media))
                ezty.sendMessage(from, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `• Title : ${media.title}\n• File Size : ${media.filesizeF}\n• Url : ${urls[text - 1]}\n• Ext : MP3\n• Resolusi : ${args[1] || '360p'}` }, { quoted: troli })
            }
            break
        case prefix+'umma': case prefix+'ummadl': {
	        if (isBan) return fezy(mess.ban)
                if (!text) throw `Example : ${command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		        let anu = await umma(isUrl(text)[0])
		        if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `${prefix}ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                        {buttonId: `${prefix}ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
*• Title* : ${anu.title}
*• Author* : ${anu.author.name}
*• Like* : ${anu.like}
*• Caption* : ${anu.caption}
*• Url* : ${anu.media[0]}
*Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas*
`,
			footer: fake,
			buttons,
			headerType: 4
		    }
		    ezty.sendMessage(from, buttonMessage, { quoted: troli })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        ezty.sendMessage(from, { image: { url }, caption: `• Title : ${anu.title}\n• Author : ${anu.author.name}\n• Like : ${anu.like}\n• Caption : ${anu.caption}` }, { quoted: troli })
		    })
		}
	    }
	    break
		case prefix+'mediafire':
if (isBan) return fezy(mess.ban)
if (q.includes('--help')) return fezy(examlink) 
if (args.length < 1) return fezy('Mana Linknya?')
if (!args[0].includes('mediafire')) return fezy(`Link is not valid`)
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return fezy('Maaf Limit Kamu Telah Habis:‹ , Silahkan Isi Ulang Limit Dengan Cara Ketik #buylimit _jumlah_')
kurangLimit(m.sender, 1)
fezy(mess.wait)
const teks1 = args.join(' ')
const baby1 = await mediafireDl(teks1)
const result4 = `*DATA DITEMUKAN*				
*• Judul* : ${baby1[0].nama}
*• Link* : ${baby1[0].link}
*• Size* : ${baby1[0].size}				
_Mengirim file..._`
fezy(result4)
ezty.sendMessage(from, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }) 
break
		
//━━━━━━━━━━━━━━━[ Agama Fitur ]━━━━━━━━━━━━━━━\\
case prefix+'iqra': {
		if (isBan) return fezy(mess.ban)
        oh = `Example : ${command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		ezty.sendMessage(from, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, { quoted: troli }).catch ((err) => fezy(oh))
		}
		break
		case prefix+'juzamma': {
		if (args[0] === 'pdf') {
		fezy(mess.wait)
		ezty.sendMessage(from, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, { quoted: troli })
		} else if (args[0] === 'docx') {
		fezy(mess.wait)
		ezty.sendMessage(from, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, { quoted: troli })
		} else if (args[0] === 'pptx') {
		fezy(mess.wait)
		ezty.sendMessage(from, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, { quoted: troli })
		} else if (args[0] === 'xlsx') {
		fezy(mess.wait)
		ezty.sendMessage(from, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, { quoted: troli })
		} else {
		fezy(`Mau format apa ? Example : ${command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break
		case prefix+'hadis': case prefix+'hadist': {
if (isBan) return fezy(mess.ban)
if (!args[0]) throw `Contoh:
${command} bukhari 1
${command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		fezy(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		fezy(`Hadis tidak ditemukan !`)
		}
		}
		break
		case prefix+'alquran': {
		if (isBan) return fezy(mess.ban)
        if (!args[0]) throw `Contoh penggunaan:\n${command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		fezy(txt)
		ezty.sendMessage(from, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : troli })
		}
		break
		case prefix+'tafsirsurah': {
		if (isBan) return fezy(mess.ban)
        if (!args[0]) throw `Contoh penggunaan:\n${command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		fezy(txt)
		}
		break

//━━━━━━━━━━━━━━━[ Database Fitur ]━━━━━━━━━━━━━━━\\
            case prefix+'setcmd': {
                if (isBan) return fezy(mess.ban)
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                fezy(`Done!`)
            }
            break
            case prefix+'delcmd': {
                if (isBan) return fezy(mess.ban)
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.sticker[hash]
                fezy(`Done!`)
            }
            break
            case prefix+'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                ezty.sendText(from, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case prefix+'lockcmd': {
                if (isBan) return fezy(mess.ban)
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.sticker)) throw 'Hash not found in database'
                global.db.sticker[hash].locked = !/^un/i.test(command)
                fezy('Done!')
            }
            break

//━━━━━━━━━━━━━━━[ Anonymous Fitur By Ohyziro ]━━━━━━━━━━━━━━━\\
    case prefix+'anonymous': {
                if (isBan) return fezy(mess.ban)
                if (m.isGroup) return fezy('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: `${prefix}start`, buttonText: { displayText: 'Start' }, type: 1 }
                ]
                ezty.sendButtonText(from, buttons, `\`\`\`Hi ${await ezty.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, fake3, troli)
            }
			break
            case prefix+'keluar': case prefix+'leave': {
                if (isBan) return fezy(mess.ban)
                if (m.isGroup) return fezy('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: `${prefix}start`, buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await ezty.sendButtonText(from, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                fezy('Ok')
                let other = room.other(m.sender)
                if (other) await ezty.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, troli)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case prefix+'mulai': case prefix+'start': {
                if (isBan) return fezy(mess.ban)
                if (m.isGroup) return fezy('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: `${prefix}keluar`, buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await ezty.sendButtonText(from, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, fake3, troli)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: `${prefix}next`, buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: `${prefix}keluar`, buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await ezty.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, fake3, troli)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await ezty.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, fake3, troli)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: `${prefix}keluar`, buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await ezty.sendButtonText(from, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, fake3, troli)
                }
                break
            }
            case prefix+'next': case prefix+'lanjut': {
                if (isBan) return fezy(mess.ban)
                if (m.isGroup) return fezy('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: `${prefix}start`, buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await ezty.sendButtonText(from, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await ezty.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, troli)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: `${prefix}next`, buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: `${prefix}keluar`, buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await ezty.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, fake3, troli)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await ezty.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, fake3, troli)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: `${prefix}keluar`, buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await ezty.sendButtonText(from, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, fake3, troli)
                }
                break
            }
            case prefix+'public': {
                if (!isCreator) throw mess.owner
                ezty.public = true
                fezy('Sukse Change To Public Usage')
            }
            break
            case prefix+'self': {
                if (!isCreator) throw mess.owner
                ezty.public = false
                fezy('Sukses Change To Self Usage')
            }
            break

//━━━━━━━━━━━━━━━[ Botstatus By Ohyziro ]━━━━━━━━━━━━━━━\\
            case prefix+'ping': case prefix+'botstatus': case prefix+'statusbot': {
                if (isBan) return fezy(mess.ban)
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                fezy(respon)
            }
            break
            case prefix+'owner': case prefix+'creator': {
                ezty.sendContact(from, global.owner, m)
            }
            break

//━━━━━━━━━━━━━━━[ Database Menu By Ohyziro ]━━━━━━━━━━━━━━━\\
case prefix+'menu':
if (isBan) return fezy(mess.ban)
let mundur = hitungmundur(5, 2)
addBalance(m.sender, 5, balance)
let butMen = [
        	{ urlButton: { displayText: `My Group`, url : `${mygc}` } },
        	{ urlButton: { displayText: `Instagram`, url : `${insta}` } },
        	{ quickReplyButton: { displayText: `📚 Information`, id: `${prefix}infomation` } }
        	]
        	buttonWithText(from, `${menu(botname, prefix, time, readmore, ucapanWaktu, mundur, tanggal, jam, pushname, GcRvk, AntiLink, isWelcome, isLeft, isRakyat, isCreator, isPremium, getLimit, getBalance, balance, pendaftar)}`, fake, butMen)
            break

//━━━━━━━━━━━━━━━[ Database Allmenu By Ohyziro ]━━━━━━━━━━━━━━━\\
case prefix+'allmenu12':
if (isBan) return fezy(mess.ban)
var vynns = await getBuffer(picak+'All Menu')
await ezty.send5Loc(from, `` + '' + lang.allmenu(botname, prefix, time, readmore, ucapanWaktu, pushname), `© ${footer}`,vynns, [{"urlButton": {"displayText": "My Group","url": `${mygc}`}},{"quickReplyButton": {"displayText": "🧾 Donasi","id": `${prefix}donasi`}},{"quickReplyButton": {"displayText": "🌟 Owner","id": `${prefix}owner`}}] )
break
case prefix+'groupmenu12':
if (isBan) return fezy(mess.ban)
var vynns = await getBuffer(picak+'Group Menu')
await ezty.send5Loc(from, `` + '' + lang.groupmenu(prefix), `© ${footer}`,vynns, [{"urlButton": {"displayText": "My Group","url": `${mygc}`}},{"quickReplyButton": {"displayText": "🧾 Donasi","id": `${prefix}donasi`}},{"quickReplyButton": {"displayText": "🌟 Owner","id": `${prefix}owner`}}] )
break
case prefix+'rpgmenu12':
if (isBan) return fezy(mess.ban)
var vynns = await getBuffer(picak+'Rpg Menu')
await ezty.send5Loc(from, `` + '' + lang.rpgmenu(prefix), `© ${footer}`,vynns, [{"urlButton": {"displayText": "My Group","url": `${mygc}`}},{"quickReplyButton": {"displayText": "🧾 Donasi","id": `${prefix}donasi`}},{"quickReplyButton": {"displayText": "🌟 Owner","id": `${prefix}owner`}}] )
break
case prefix+'downloadermenu12':
if (isBan) return fezy(mess.ban)
var vynns = await getBuffer(picak+'Downloader Menu')
await ezty.send5Loc(from, `` + '' + lang.downloadermenu(prefix), `© ${footer}`,vynns, [{"urlButton": {"displayText": "My Group","url": `${mygc}`}},{"quickReplyButton": {"displayText": "🧾 Donasi","id": `${prefix}donasi`}},{"quickReplyButton": {"displayText": "🌟 Owner","id": `${prefix}owner`}}] )
break
case prefix+'searchmenu12':
if (isBan) return fezy(mess.ban)
var vynns = await getBuffer(picak+'Search Menu')
await ezty.send5Loc(from, `` + '' + lang.searchmenu(prefix), `© ${footer}`,vynns, [{"urlButton": {"displayText": "My Group","url": `${mygc}`}},{"quickReplyButton": {"displayText": "?? Donasi","id": `${prefix}donasi`}},{"quickReplyButton": {"displayText": "🌟 Owner","id": `${prefix}owner`}}] )
break
case prefix+'randommenu12':
if (isBan) return fezy(mess.ban)
var vynns = await getBuffer(picak+'Random Menu')
await ezty.send5Loc(from, `` + '' + lang.randommenu(prefix), `© ${footer}`,vynns, [{"urlButton": {"displayText": "My Group","url": `${mygc}`}},{"quickReplyButton": {"displayText": "🧾 Donasi","id": `${prefix}donasi`}},{"quickReplyButton": {"displayText": "🌟 Owner","id": `${prefix}owner`}}] )
break
case prefix+'searchmenu12':
if (isBan) return fezy(mess.ban)
var vynns = await getBuffer(picak+'Search Menu')
await ezty.send5Loc(from, `` + '' + lang.searchmenu(prefix), `© ${footer}`,vynns, [{"urlButton": {"displayText": "My Group","url": `${mygc}`}},{"quickReplyButton": {"displayText": "🧾 Donasi","id": `${prefix}donasi`}},{"quickReplyButton": {"displayText": "🌟 Owner","id": `${prefix}owner`}}] )
break
case prefix+'textpromenu12':
if (isBan) return fezy(mess.ban)
var vynns = await getBuffer(picak+'Textpro Menu')
await ezty.send5Loc(from, `` + '' + lang.textpromenu(prefix), `© ${footer}`,vynns, [{"urlButton": {"displayText": "My Group","url": `${mygc}`}},{"quickReplyButton": {"displayText": "🧾 Donasi","id": `${prefix}donasi`}},{"quickReplyButton": {"displayText": "?? Owner","id": `${prefix}owner`}}] )
break
case prefix+'photooxymenu12':
if (isBan) return fezy(mess.ban)
var vynns = await getBuffer(picak+'Photo Oxy Menu')
await ezty.send5Loc(from, `` + '' + lang.photooxymenu(prefix), `© ${footer}`,vynns, [{"urlButton": {"displayText": "My Group","url": `${mygc}`}},{"quickReplyButton": {"displayText": "🧾 Donasi","id": `${prefix}donasi`}},{"quickReplyButton": {"displayText": "🌟 Owner","id": `${prefix}owner`}}] )
break
case prefix+'ephotomenu12':
if (isBan) return fezy(mess.ban)
var vynns = await getBuffer(picak+'Ephoto Menu')
await ezty.send5Loc(from, `` + '' + lang.ephotomenu(prefix), `© ${footer}`,vynns, [{"urlButton": {"displayText": "My Group","url": `${mygc}`}},{"quickReplyButton": {"displayText": "🧾 Donasi","id": `${prefix}donasi`}},{"quickReplyButton": {"displayText": "🌟 Owner","id": `${prefix}owner`}}] )
break
case prefix+'funmenu12':
if (isBan) return fezy(mess.ban)
var vynns = await getBuffer(picak+'Fun Menu')
await ezty.send5Loc(from, `` + '' + lang.funmenu(prefix), `© ${footer}`,vynns, [{"urlButton": {"displayText": "My Group","url": `${mygc}`}},{"quickReplyButton": {"displayText": "🧾 Donasi","id": `${prefix}donasi`}},{"quickReplyButton": {"displayText": "🌟 Owner","id": `${prefix}owner`}}] )
break
case prefix+'primbonmenu12':
if (isBan) return fezy(mess.ban)
var vynns = await getBuffer(picak+'Primbon Menu')
await ezty.send5Loc(from, `` + '' + lang.primbonmenu(prefix), `© ${footer}`,vynns, [{"urlButton": {"displayText": "My Group","url": `${mygc}`}},{"quickReplyButton": {"displayText": "🧾 Donasi","id": `${prefix}donasi`}},{"quickReplyButton": {"displayText": "🌟 Owner","id": `${prefix}owner`}}] )
break
case prefix+'convertmenu12':
if (isBan) return fezy(mess.ban)
var vynns = await getBuffer(picak+'Converter Menu')
await ezty.send5Loc(from, `` + '' + lang.convertmenu(prefix), `© ${footer}`,vynns, [{"urlButton": {"displayText": "My Group","url": `${mygc}`}},{"quickReplyButton": {"displayText": "🧾 Donasi","id": `${prefix}donasi`}},{"quickReplyButton": {"displayText": "🌟 Owner","id": `${prefix}owner`}}] )
break
case prefix+'mainmenu12':
if (isBan) return fezy(mess.ban)
var vynns = await getBuffer(picak+'Main Menu')
await ezty.send5Loc(from, `` + '' + lang.mainmenu(prefix), `© ${footer}`,vynns, [{"urlButton": {"displayText": "My Group","url": `${mygc}`}},{"quickReplyButton": {"displayText": "🧾 Donasi","id": `${prefix}donasi`}},{"quickReplyButton": {"displayText": "🌟 Owner","id": `${prefix}owner`}}] )
break
case prefix+'databasemenu12':
if (isBan) return fezy(mess.ban)
var vynns = await getBuffer(picak+'Database Menu')
await ezty.send5Loc(from, `` + '' + lang.groupmenu(prefix), `© ${footer}`,vynns, [{"urlButton": {"displayText": "My Group","url": `${mygc}`}},{"quickReplyButton": {"displayText": "🧾 Donasi","id": `${prefix}donasi`}},{"quickReplyButton": {"displayText": "🌟 Owner","id": `${prefix}owner`}}] )
break
case prefix+'anonymousmenu12':
if (isBan) return fezy(mess.ban)
var vynns = await getBuffer(picak+'Anonymous Menu')
await ezty.send5Loc(from, `` + '' + lang.anonymousmenu(prefix), `© ${footer}`,vynns, [{"urlButton": {"displayText": "My Group","url": `${mygc}`}},{"quickReplyButton": {"displayText": "🧾 Donasi","id": `${prefix}donasi`}},{"quickReplyButton": {"displayText": "🌟 Owner","id": `${prefix}owner`}}] )
break
case prefix+'islamicmenu12':
if (isBan) return fezy(mess.ban)
var vynns = await getBuffer(picak+'Islamic Menu')
await ezty.send5Loc(from, `` + '' + lang.islamicmenu(prefix), `© ${footer}`,vynns, [{"urlButton": {"displayText": "My Group","url": `${mygc}`}},{"quickReplyButton": {"displayText": "🧾 Donasi","id": `${prefix}donasi`}},{"quickReplyButton": {"displayText": "🌟 Owner","id": `${prefix}owner`}}] )
break
case prefix+'voicechargermenu12':
if (isBan) return fezy(mess.ban)
var vynns = await getBuffer(picak+'Voice Charger Menu')
await ezty.send5Loc(from, `` + '' + lang.voicechargermenu(prefix), `© ${footer}`,vynns, [{"urlButton": {"displayText": "My Group","url": `${mygc}`}},{"quickReplyButton": {"displayText": "🧾 Donasi","id": `${prefix}donasi`}},{"quickReplyButton": {"displayText": "🌟 Owner","id": `${prefix}owner`}}] )
break
case prefix+'ownermenu12':
if (isBan) return fezy(mess.ban)
var vynns = await getBuffer(picak+'Owner Menu')
await ezty.send5Loc(from, `` + '' + lang.ownermenu(prefix), `© ${footer}`,vynns, [{"urlButton": {"displayText": "My Group","url": `${mygc}`}},{"quickReplyButton": {"displayText": "?? Donasi","id": `${prefix}donasi`}},{"quickReplyButton": {"displayText": "🌟 Owner","id": `${prefix}owner`}}] )
break
case prefix+'donasi':
if (isBan) return fezy(mess.ban)
await ezty.send5ButImg(from, `` + '' + lang.donasi(ownernomer), `© ${footer}`,donasi, [{"urlButton": {"displayText": "My Group","url": `${mygc}`}},{"quickReplyButton": {"displayText": "🌟 Owner","id": `${prefix}owner`}}] )
break
case prefix+'rules':
if (isBan) return fezy(mess.ban)
var vynns = await getBuffer(picak+'Rules Bot')
await ezty.send5Loc(from, `` + '' + lang.rules(prefix, ucapanWaktu, pushname), `© ${footer}`,vynns, [{"urlButton": {"displayText": "My Group","url": `${mygc}`}},{"quickReplyButton": {"displayText": "🧾 Donasi","id": `${prefix}donasi`}},{"quickReplyButton": {"displayText": "🌟 Owner","id": `${prefix}owner`}}] )
break
case prefix+'sewa':
if (isBan) return fezy(mess.ban)
var vynns = await getBuffer(picak+'Sewa Bot')
await ezty.send5Loc(from, `` + '' + lang.sewa(ownernomer, prefix, ucapanWaktu, pushname), `© ${footer}`,vynns, [{"urlButton": {"displayText": "My Group","url": `${mygc}`}},{"quickReplyButton": {"displayText": "🧾 Donasi","id": `${prefix}donasi`}},{"quickReplyButton": {"displayText": "🌟 Owner","id": `${prefix}owner`}}] )
break
case prefix+'gcbot':
if (isBan) return fezy(mess.ban)
var vynns = await getBuffer(picak+'Group Bot')
await ezty.send5Loc(from, `` + '' + lang.gcbot(ownernomer, prefix, ucapanWaktu, pushname), `© ${footer}`,vynns, [{"urlButton": {"displayText": "Instagram","url": `${insta}`}},{"quickReplyButton": {"displayText": "🧾 Donasi","id": `${prefix}donasi`}},{"quickReplyButton": {"displayText": "🌟 Owner","id": `${prefix}owner`}}] )
break
case prefix+'thanksto12': case prefix+'tqto12':
if (isBan) return fezy(mess.ban)
var vynns = await getBuffer(picak+'Constributor')
await ezty.send5Loc(from, `` + '' + lang.thanksto(), `© ${footer}`,vynns, [{"urlButton": {"displayText": "My Group","url": `${mygc}`}},{"quickReplyButton": {"displayText": "🧾 Donasi","id": `${prefix}donasi`}},{"quickReplyButton": {"displayText": "🌟 Owner","id": `${prefix}owner`}}] )
break

//━━━━━━━━━━━━━━━[ Respon Fitur By Ohyziro ]━━━━━━━━━━━━━━━\\
case prefix+'cry':case prefix+'kill':case prefix+'hug':case prefix+'pat':case prefix+'lick':case prefix+'kiss':case prefix+'bite':case prefix+'yeet':case prefix+'neko':case prefix+'bully':case prefix+'bonk':case prefix+'wink':case prefix+'poke':case prefix+'nom':case prefix+'slap':case prefix+'smile':case prefix+'wave':case prefix+'awoo':case prefix+'blush':case prefix+'smug':case prefix+'glomp':case prefix+'happy':case prefix+'dance':case prefix+'cringe':case prefix+'cuddle':case prefix+'highfive':case prefix+'shinobu':case prefix+'megumin':case prefix+'handhold':
			   if (isBan) return fezy(mess.ban)
               fezy(`Gunakan Fitur Ini Tanpa Menggunakan Prefix\nContoh : Kiss`)
               break

//━━━━━━━━━━━━━━━[ Limit & Premium Fitur By Ohyziro ]━━━━━━━━━━━━━━━\\
case prefix+'limit': case prefix+'ceklimit': case prefix+'cekmonay': {
if (isBan) return fezy(mess.ban)
var vynns = await getBuffer(picak+`${q}`)
                 menu =`⎗ㅤㅤ⎚ㅤㅤ⎘ㅤㅤ⎌\n                *LIMIT & MONEY* \n\n*• Name* : *${pushname}* \n*• Limit* : ${getLimit(m.sender)}\n*• Balance* : $${getBalance(m.sender, balance)}\n\nNote : Jika Limitmu Habis Kamu Dapat Membeli Limit Di Owner Atau Kamu Dapat Membeli Menggunakan Balance Yg Kamu Miliki Dengan Ketik #buylimit _jumlah_`
                 let bton = [{"urlButton": {"displayText": "My Group","url": `${mygc}`}},{"quickReplyButton": {"displayText": "🧾 Donasi","id": `${prefix}donasi`}},{"quickReplyButton": {"displayText": "🌟 Owner","id": `${prefix}owner`}}]
            celinecans = vynns
                      ezty.send5Loc(m.chat, menu, fake, celinecans, bton)
                          }
       break
case prefix+'cekprem': case prefix+'cekpremium': {
if (isBan) return fezy(mess.ban)
var vynns = await getBuffer(picak+'Cek Premium')
                 menun =`⎗ㅤㅤ⎚ㅤㅤ⎘ㅤㅤ⎌\n                *CEK PREMIUM* \n\n*• Name* : *${pushname}* \n*• Status* : ${isCreator ? 'Owner 🌟' : isPremium ? 'Premium' : 'Free'}\n*• Limit* : Unlimited\n\nNote : Jika Kamu Ingin Menjadi User Premium Silahkan Hubungi Owner Dengan Ketik #owner`
                 let bton = [{"urlButton": {"displayText": "My Group","url": `${mygc}`}},{"quickReplyButton": {"displayText": "🧾 Donasi","id": `${prefix}donasi`}},{"quickReplyButton": {"displayText": "🌟 Owner","id": `${prefix}owner`}}]
            celinecans = vynns
                      ezty.send5Loc(m.chat, menun, fake, celinecans, bton)
                          }
       break
       case prefix+'infomation': {
                 ahhhh =`⎗ㅤㅤ⎚ㅤㅤ⎘ㅤㅤ⎌
*_Ryzuu Botz Information_*

*• Bot Name* : ${botname}
*• Number* : ${ezty.user.id}
*• Total Pengguna* : ${pendaftar.length}
*• Prefix* : Multi Prefix
*• Bot Created On 2 Mei 2022*

*_Special Thanks To :_*
*• Allah SWT*
*• Adiwajshing/Baileys*
*• I My Self*
*• Ezii Ganteng*
*• Penyedia Dari :*
   *- Rest Api*
   *- Module*`
                 let bton = [{
                                urlButton: {
                                    displayText: 'Instagram',
                                    url: `${insta}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '🧾 Donasi',
                                    id: `${prefix}donasi`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '🌟 Owner',
                                    id: `${prefix}owner`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '📧 Rules Bot',
                                    id: `${prefix}rules`
                                }  
                            }]
            celinecans = thumb
                      ezty.send5ButImg(m.chat, ahhhh, fake, celinecans, bton)
                          }
       break
// Bank & Payment Menu
case prefix+'buylimit':{
                if (isBan) return fezy(mess.ban)
                if (args.length < 1) return fezy(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $150 balance`)
                if (!args[0]) return fezy(`Masukkan nominal nya!`)
                if (!isNaN(args[1])) return fezy(`Nominal harus berupa angka!`)
                if (args[0].toLowerCase() === 'infinity') return fezy(`Yahaha saya ndak bisa di tipu`)
                if (args[0].includes("-")) return fezy(`Jangan menggunakan -`)
                let ane = Number(parseInt(args[0]) * 150)
                if (getBalance(m.sender, balance) < ane) return fezy(`Balance kamu tidak mencukupi untuk pembelian ini`)
                kurangBalance(m.sender, ane, balance)
                addLimit(m.sender, parseInt(args[0]))
                fezy(`Yeay Kamu Berhasil Membeli ${args[0]} Limit\n*Sisa balance kamu* : $${getBalance(m.sender, balance)}\n*Limit kamu* : ${getLimit(m.sender)}`)
            }
                break
case prefix+'transfer':
            case prefix+'tf':{
                 if (args.length < 2) return fezy(`Kirim perintah *${command}* nominal @tag\nContoh : ${command} 2000 @6285758050756`)
                 if (m.mentionedJid.length == 0) return fezy(`Tag orang yang ingin di transfer balance`)
                 if (!args[1]) return fezy(`Masukkan nominal nya!`)
                 if (isNaN(args[0])) return fezy(`Nominal harus berupa angka!`)
                 if (args[0].toLowerCase() === 'infinity') return fezy(`Yahaha saya ndak bisa di tipu`)
                 if (args[0].includes("-")) return fezy(`Jangan menggunakan -`)
                 var anuy = getBalance(m.sender, balance)
                 if (anuy < args[2] || anuy == 'undefined') return fezy(`Balance Kamu Tidak Mencukupi Untuk Transfer Sebesar $${args[2]}, Kumpulkan Terlebih Dahulu\nKetik ${prefix}balance, untuk mengecek Balance mu!`)
                 kurangBalance(m.sender, parseInt(args[0]), balance)
                 addBalance(m.mentionedJid[0], parseInt(args[0]), balance)
                 ezty.sendMessage(from, { text: `Success transfer balance sebesar $${args[0]} kepada @${m.mentionedJid[0].split("@")[0]}`, mentions: [m.mentionedJid[0]] }, { quoted: troli })
            }
                 break
case prefix+'topglobal':{
                if (isBan) return fezy(mess.ban)
                balance.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
                let top = '*── 「 TOPGLOBAL BALANCE 」 ──*\n\n'
                let arrTop = []
				var total = 10
				if (balance.length < 10) total = balance.length
                for (let i = 0; i < total; i ++){
                    top += `${i + 1}. @${balance[i].id.split("@")[0]}\n=> Balance : $${balance[i].balance}\n\n`
                    arrTop.push(balance[i].id)
                }
                mentions(top, arrTop, true)
                }
                break
            case prefix+'toplocal':{
                if (isBan) return fezy(mess.ban)
                if (!m.isGroup) throw mess.group
                balance.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
                let top = '*── 「 TOPLOCAL BALANCE 」 ──*\n\n'
                let arrTop = []
                var total = 10
				if (balance.length < 10) total = balance.length
                let anggroup = groupMembers.map(a => a.id)
                for (let i = 0; i < total; i ++){
                    if (anggroup.includes(balance[i].id)) {
                        top += `${i + 1}. @${balance[i].id.split("@")[0]}\n=> Balance : $${balance[i].balance}\n\n`
                        arrTop.push(balance[i].id)
                    }
                }
                mentions(top, arrTop, true)
                }
                break
            case prefix+'addprem': case prefix+'addpremium':
                if (!isCreator) return fezy(mess.owner)
                if (args.length < 2) return fezy(`Penggunaan :\n*${prefix}addprem* @tag waktu\n*${prefix}addprem* nomor waktu\n\nContoh : ${command} @tag 30 day`)
                if (!args[2]) return fezy(`Mau yang berapa hari?`)
                if (m.mentionedJid.length !== 0) {
                    _prem.addPremiumUser(m.mentionedJid[0], args[2], premium)
                    fezy('Success')
                }
                break
            case prefix+'delprem': case prefix+'delpremium':
                if (!isCreator) return fezy(mess.owner)
                if (args.length < 1) return fezy(`Penggunaan :\n*${prefix}delprem* @tag\n*${prefix}delprem* nomor`)
                if (m.mentionedJid.length !== 0){
                    premium.splice(_prem.getPremiumPosition(m.mentionedJid[0], premium), 1)
                    fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
                    fezy('Success!')
                }
                break
                    
            default:
  
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (from.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (from.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    ezty.copyNForward(from, msgs[budy.toLowerCase()], true)
		}
        }
        
    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
