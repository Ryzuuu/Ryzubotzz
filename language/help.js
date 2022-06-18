const speed = require('performance-now')

const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " Day " : " Days, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " Hours " : " Hours, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " Minute " : " Minute ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " Second " : " Second ") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
   
function toCommas(x) {
    x = x.toString()
    var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
       x = x.replace(pattern, "$1,$2");
    return x;
}

let timestamp = speed();
let latensi = speed() - timestamp

exports.menu = (botname, prefix, time, readmore, ucapanWaktu, mundur, tanggal, jam, pushname, GcRvk, AntiLink, isWelcome, isLeft, isRakyat, isCreator, isPremium, getLimit, getBalance, balance, pendaftar) => {
return`
${ucapanWaktu}, ${pushname}🐤

Hitung Mundur Lebaran
${mundur}

*BOT INFO ᜊ͡ᜲ֢ᜊᜲ*
 • Creator : ${ownername}
 • Bot Name : ${botname}
 • Owner : ${owner.length}
 • Pengguna : ${pendaftar.length} User
 • Time : ${jam}
 • Date : ${tanggal}
 • Speed : ${latensi.toFixed(4)}
 • Runtime : ${runtime(process.uptime())}

*USER INFO ᜊ͡ᜲ֢ᜊᜲ*
 • Nama : ${pushname}
 • Status : ${isCreator ? 'Owner 🌟' : isPremium ? 'Premium' : 'Free'}
 • Limit : ${getLimit(m.sender)}
 • Balance : $${toCommas(getBalance(m.sender, balance))}

*GROUP INFO ᜊ͡ᜲ֢ᜊᜲ*
 • Left : ${isLeft? "on" : "off"}
 • Antilink : ${AntiLink? "on" : "off"}
 • Welcome : ${isWelcome? "on" : "off"}
 • Autorevoke : ${GcRvk? "on" : "off"} 
${readmore}
┈─  ꕀ  ───    ꕀ    ───  ꕀ   ─┈
*ABOUT BOT* 
 • ${prefix}simi
 • ${prefix}ping
 • ${prefix}speed
 • ${prefix}runtime
 • ${prefix}ceklimit
 • ${prefix}cekprem
  
*GROUP MENU*
 • ${prefix}linkgroup
 • ${prefix}ephemeral 
 • ${prefix}setppgc
 • ${prefix}setname 
 • ${prefix}setdesc 
 • ${prefix}group 
 • ${prefix}editinfo 
 • ${prefix}add/kick 
 • ${prefix}hidetag/tagall 
 • ${prefix}antilink
 • ${prefix}mute
 • ${prefix}welcome
 • ${prefix}left
 • ${prefix}revoke
 • ${prefix}autorevoke
 • ${prefix}setwelcome
 • ${prefix}changewelcome
 • ${prefix}delsetwelcome
 • ${prefix}setleft
 • ${prefix}changeleft
 • ${prefix}delsetleft
 • ${prefix}promote/demote
 • ${prefix}vote/devote/upvote
 • ${prefix}cekvote/hapusvote

*BANK & PAYMENT*
 • ${prefix}sewa
 • ${prefix}donasi
 • ${prefix}transfer
 • ${prefix}buylimit
 • ${prefix}toplocal
 • ${prefix}topglobal

*OTHER MENU*
 • ${prefix}afk
 • ${prefix}owner
 • ${prefix}menu
 • ${prefix}delete
 • ${prefix}quote
 • ${prefix}listpc
 • ${prefix}listgc
 • ${prefix}gcbot
 • ${prefix}report
 • ${prefix}request
 • ${prefix}infochat
 • ${prefix}listonline

*SEARCH MENU*
 • ${prefix}play
 • ${prefix}yts
 • ${prefix}lirik
 • ${prefix}igstalk
 • ${prefix}brainly
 • ${prefix}jadwaltv
 • ${prefix}translate
 • ${prefix}google
 • ${prefix}gimage
 • ${prefix}pinterest 
 • ${prefix}wikimedia 
 • ${prefix}ytsearch
 • ${prefix}grupwa
 • ${prefix}webtonsearch

*DOWNLOADER MENU*
 • ${prefix}igdl
 • ${prefix}tiktok
 • ${prefix}tiktokaudio
 • ${prefix}ytmp3/ytmp4
 • ${prefix}getmusic
 • ${prefix}getvideo
 • ${prefix}umma
 • ${prefix}mediafire

*INSTANSTORY MENU*
 • ${prefix}coffe
 • ${prefix}meme
 • ${prefix}asupan
 • ${prefix}storywa
 • ${prefix}darkjokes

*INFORMATION MENU*
 • ${prefix}gempa
 • ${prefix}covidindo
 • ${prefix}merdeka-news 
 • ${prefix}kontan-news 
 • ${prefix}cnbc-news 
 • ${prefix}tribun-news 
 • ${prefix}indozone-news 
 • ${prefix}kompas-news 
 • ${prefix}detik-news 
 • ${prefix}daily-news 
 • ${prefix}inews-news 
 • ${prefix}okezone-news 
 • ${prefix}sindo-news 
 • ${prefix}tempo-news 
 • ${prefix}antara-news 
 • ${prefix}cnn-news 
 • ${prefix}fajar-news

*ANIME MENU*
 • ${prefix}loli
 • ${prefix}waifu
 • ${prefix}husbu
 • ${prefix}naruto
 • ${prefix}chara
 • ${prefix}manga

*NSFW MENU*
 • ${prefix}ass
 • ${prefix}yaoi
 • ${prefix}bdsm
 • ${prefix}ahegao
 • ${prefix}blowjob
 • ${prefix}pussy
 • ${prefix}hentai
 • ${prefix}masturbation
  
*TEXSPRO MENU*
 • ${prefix}3dbox
 • ${prefix}drapwater
 • ${prefix}lion2
 • ${prefix}herryp
 • ${prefix}3davengers
 • ${prefix}window
 • ${prefix}graffiti
 • ${prefix}grafiti
 • ${prefix}pornhub
 • ${prefix}blackping
 • ${prefix}glitch2
 • ${prefix}glitch3
 • ${prefix}3dspace
 • ${prefix}lion
 • ${prefix}3dneon
 • ${prefix}neon
 • ${prefix}greenneon
 • ${prefix}bokeh
 • ${prefix}hollographic
 • ${prefix}bear
 • ${prefix}wolf
 • ${prefix}natural
 • ${prefix}carbon
 • ${prefix}candy 
 • ${prefix}christmas
 • ${prefix}3dchristmas 
 • ${prefix}sparklechristmas
 • ${prefix}deepsea 
 • ${prefix}scifi
 • ${prefix}rainbow 
 • ${prefix}waterpipe 
 • ${prefix}spooky 
 • ${prefix}pencil 
 • ${prefix}circuit 
 • ${prefix}discovery 
 • ${prefix}metalic 
 • ${prefix}fiction 
 • ${prefix}demon 
 • ${prefix}transformer 
 • ${prefix}berry 
 • ${prefix}thunder 
 • ${prefix}magma 
 • ${prefix}3dstone 
 • ${prefix}neonlight 
 • ${prefix}glitch 
 • ${prefix}harrypotter 
 • ${prefix}brokenglass 
 • ${prefix}papercut 
 • ${prefix}watercolor 
 • ${prefix}multicolor 
 • ${prefix}neondevil 
 • ${prefix}underwater 
 • ${prefix}graffitibike
 • ${prefix}snow 
 • ${prefix}cloud 
 • ${prefix}honey 
 • ${prefix}ice 
 • ${prefix}fruitjuice 
 • ${prefix}biscuit 
 • ${prefix}wood 
 • ${prefix}chocolate 
 • ${prefix}strawberry 
 • ${prefix}matrix 
 • ${prefix}blood 
 • ${prefix}dropwater 
 • ${prefix}toxic 
 • ${prefix}lava 
 • ${prefix}rock 
 • ${prefix}bloodglas 
 • ${prefix}hallowen 
 • ${prefix}darkgold 
 • ${prefix}joker 
 • ${prefix}wicker
 • ${prefix}firework 
 • ${prefix}skeleton 
 • ${prefix}blackpink 
 • ${prefix}sand 
 • ${prefix}glue 
 • ${prefix}1917 
 • ${prefix}leaves 

*RANDOM MENU*
 • ${prefix}dadu
 • ${prefix}quote
 • ${prefix}couple
 • ${prefix}cecan
 • ${prefix}cogan
 • ${prefix}faktaunik
 • ${prefix}aesthetic
 • ${prefix}katagalau
 • ${prefix}gombalan
 • ${prefix}wallpaper
 • ${prefix}quotesanime

*STICKER ANIME*
 • ${prefix}cry
 • ${prefix}kill
 • ${prefix}hug
 • ${prefix}pat
 • ${prefix}lick
 • ${prefix}kiss
 • ${prefix}bite
 • ${prefix}yeet
 • ${prefix}neko
 • ${prefix}bully
 • ${prefix}bonk
 • ${prefix}wink
 • ${prefix}poke
 • ${prefix}nom
 • ${prefix}slap
 • ${prefix}smile
 • ${prefix}wave
 • ${prefix}awoo
 • ${prefix}blush
 • ${prefix}smug
 • ${prefix}glomp
 • ${prefix}happy
 • ${prefix}dance
 • ${prefix}cringe
 • ${prefix}cuddle
 • ${prefix}highfive
 • ${prefix}shinobu
 • ${prefix}megumin
 • ${prefix}handhold

*TELE STICK MENU*
 • ${prefix}gurastick
 • ${prefix}dogestick
 • ${prefix}bucinstick
 • ${prefix}patrick

*CONVERTER/TOOLS*
 • ${prefix}kbbi
 • ${prefix}attp
 • ${prefix}swm
 • ${prefix}sticker
 • ${prefix}smeme
 • ${prefix}togif
 • ${prefix}tourl
 • ${prefix}tovn
 • ${prefix}tomp3
 • ${prefix}toaudio
 • ${prefix}toimage
 • ${prefix}tovideo
 • ${prefix}emojimix

*FUN MENU*
 • ${prefix}rate 
 • ${prefix}cekme
 • ${prefix}halah
 • ${prefix}hilih
 • ${prefix}huluh 
 • ${prefix}heleh
 • ${prefix}holoh
 • ${prefix}gaycek 
 • ${prefix}lesbicek 
 • ${prefix}cekbapak
 • ${prefix}gantecek 
 • ${prefix}cantikcek 
 • ${prefix}sangecek
 • ${prefix}apakah 
 • ${prefix}bisakah
 • ${prefix}kapankah 
 • ${prefix}bagaimanakah
 • ${prefix}jadian
 • ${prefix}jodohku
 • ${prefix}delttt

*GAME MENU*
 • ${prefix}slot
 • ${prefix}math
 • ${prefix}suitpvp
 • ${prefix}tebak lirik
 • ${prefix}tebak lagu
 • ${prefix}tebak kata
 • ${prefix}tebak kalimat
 • ${prefix}tebak gambar
 • ${prefix}caklontong
 • ${prefix}tictactoe
 • ${prefix}family100

*ISLAMIC MENU*
 • ${prefix}iqra
 • ${prefix}hadist
 • ${prefix}alquran
 • ${prefix}juzamma
 • ${prefix}tafsirsurah 

*CERPEN MENU*
 • ${prefix}cerpen anak
 • ${prefix}cerpen bahasa daerah
 • ${prefix}cerpen bahasa inggris
 • ${prefix}cerpen bahasa jawa
 • ${prefix}cerpen bahasa sunda
 • ${prefix}cerpen budaya
 • ${prefix}cerpen cinta
 • ${prefix}cerpen cinta islami
 • ${prefix}cerpen cinta pertama
 • ${prefix}cerpen cinta romantis
 • ${prefix}cerpen cinta sedih
 • ${prefix}cerpen cinta segitiga
 • ${prefix}cerpen cinta sejati
 • ${prefix}cerpen galau
 • ${prefix}cerpen gokil
 • ${prefix}cerpen inspiratif
 • ${prefix}cerpen jepang
 • ${prefix}cerpen kehidupan
 • ${prefix}cerpen keluarga
 • ${prefix}cerpen kisah nyata
 • ${prefix}cerpen korea
 • ${prefix}cerpen kristen
 • ${prefix}cerpen liburan
 • ${prefix}cerpen lingkungan
 • ${prefix}cerpen lucu
 • ${prefix}cerpen malaysia
 • ${prefix}cerpen mengharukan
 • ${prefix}cerpen misteri
 • ${prefix}cerpen motivasi
 • ${prefix}cerpen nasihat
 • ${prefix}cerpen nasionalisme
 • ${prefix}cerpen olahraga
 • ${prefix}cerpen patah hati
 • ${prefix}cerpen penantian
 • ${prefix}cerpen pendidikan
 • ${prefix}cerpen pengalaman pribadi
 • ${prefix}cerpen pengorbanan
 • ${prefix}cerpen penyesalan
 • ${prefix}cerpen perjuangan
 • ${prefix}cerpen perpisahan
 • ${prefix}cerpen persahabatan
 • ${prefix}cerpen petualangan
 • ${prefix}cerpen ramadhan
 • ${prefix}cerpen remaja
 • ${prefix}cerpen renungan
 • ${prefix}cerpen rindu
 • ${prefix}cerpen rohani
 • ${prefix}cerpen romantis
 • ${prefix}cerpen sastra
 • ${prefix}cerpen sedih
 • ${prefix}cerpen sejarah
 • ${prefix}cerpen slice of life
 • ${prefix}cerpen terjemahan
 • ${prefix}cerpen thriller
  
*PRIMBON MENU*
 • ${prefix}nomorhoki
 • ${prefix}artimimpi
 • ${prefix}artinama
 • ${prefix}ramaljodoh
 • ${prefix}ramaljodohbali
 • ${prefix}suamiistri
 • ${prefix}ramalcinta
 • ${prefix}cocoknama
 • ${prefix}pasangan
 • ${prefix}jadiannikah
 • ${prefix}sifatusaha
 • ${prefix}rezeki
 • ${prefix}pekerjaan
 • ${prefix}nasib
 • ${prefix}penyakit
 • ${prefix}tarot
 • ${prefix}haribaik
 • ${prefix}harisangar
 • ${prefix}harisial
 • ${prefix}nagahari
 • ${prefix}arahrezeki
 • ${prefix}peruntungan
 • ${prefix}weton
 • ${prefix}karakter
 • ${prefix}keberuntungan
 • ${prefix}masasubur
 • ${prefix}shio

*ANONYMOUS CHATS*
 • ${prefix}start
 • ${prefix}next
 • ${prefix}keluar
 • ${prefix}sendkontak
 • ${prefix}anonymous

*BAILEYS*
 • ${prefix}setcmd
 • ${prefix}delcmd
 • ${prefix}listcmd
 
*OWNER'S MENU*
 • > evalcode
 • $ executor
 • ${prefix}chat
 • ${prefix}join 
 • ${prefix}leave
 • ${prefix}block
 • ${prefix}unblock 
 • ${prefix}bcgroup 
 • ${prefix}bcall 
 • ${prefix}setppbot 
 • ${prefix}setexif
 • ${prefix}setprefix
 • ${prefix}addprem
 • ${prefix}delprem
 • ${prefix}ban <add/del> nomorny
 • ${prefix}cowner <add/del> nomorny

┈─  ꕀ  ───    ꕀ    ───  ꕀ   ─┈
*TERAPKAN* 
⤿ Memakai masker
⤿ Mencuci tangan
⤿ Menjaga jarak
⤿ Menjauhi kerumunan
⤿ Membatasi mobilitas
┈─  ꕀ  ───    ꕀ    ───  ꕀ   ─┈
*TUTORIAL*
⤿ Pengambilan fitur diatas masih sama menggunakan *#* atau prefix lainnya, misal anda mau mencoba fitur bernama yts anda cukup mengetik *#yts maka akan muncul tutorial setiap fitur*
┈─  ꕀ  ───    ꕀ    ───  ꕀ   ─┈
*BANTUAN*
⤿ Jika terdapat fitur yangg tidak merespon silahkan cuba tanpa menggunakan prefix misal *#yts* ubah menjadi *yts* karena ada beberapa fitur yang saya ubah tanda menggunakan prefix
┈─  ꕀ  ───    ꕀ    ───  ꕀ   ─┈
*PERATURAN* 
⤿ Bot ini tidak menyimpan media/foto yang anda kirimkan
⤿ Gunakan bot ini sebaik mungkin
⤿ Dilarang *copy tampilan* bot
⤿ Jangan spam fitur/command bot
⤿ Bot ini hanya untuk hiburan semata, dan *tidak untuk dimakan*
⤿ Bot ini sekedar bot, tidak dapet berbicara/melakukan hall yang berlebihan seperti manusia
┈─  ꕀ  ───    ꕀ    ───  ꕀ   ─┈
*HUKUMAN* 
⤿ Owner berhak memberikan teguran hingga sanksi terhadap user yang melanggar peraturan di atas
⤿ Melanggar peraturan di atas dapat mendapatkan sanksi seperti banned/block user/denda
┈─  ꕀ  ───    ꕀ    ───  ꕀ   ─┈
`
}

// List
exports.list = (pushname) => {
	return`Hai kak ${pushname}👋, silahkan dipilih list menu dibawah ini🐦`
}

// All Menu
exports.allmenu = (botname, prefix, time, readmore, ucapanWaktu, pushname) => {
return`

┈─  ꕀ  ───    ꕀ    ───  ꕀ   ─┈
*TERAPKAN* 
⤿ Memakai masker
⤿ Mencuci tangan
⤿ Menjaga jarak
⤿ Menjauhi kerumunan
⤿ Membatasi mobilitas
┈─  ꕀ  ───    ꕀ    ───  ꕀ   ─┈
*TUTORIAL*
⤿ Pengambilan fitur diatas masih sama menggunakan # atau prefix lainnya, misal anda mau mencoba fitur bernama yts anda cukup mengetik #yts maka akan muncul tutorial setiap fitur
┈─  ꕀ  ───    ꕀ    ───  ꕀ   ─┈
*BANTUAN*
⤿ Jika terdapat fitur yangg tidak merespon silahkan cuba tanpa menggunakan prefix misal *#yts* ubah menjadi *yts* karena ada beberapa fitur yang saya ubah tanda menggunakan prefix
┈─  ꕀ  ───    ꕀ    ───  ꕀ   ─┈
*PERATURAN* 
⤿ Bot ini tidak menyimpan media/foto yang anda kirimkan
⤿ Gunakan bot ini sebaik mungkin
⤿ Dilarang *copy tampilan* bot
⤿ Jangan spam fitur/command bot
⤿ Bot ini hanya untuk hiburan semata, dan *tidak untuk dimakan*
⤿ Bot ini sekedar bot, tidak dapet berbicara/melakukan hall yang berlebihan seperti manusia
┈─  ꕀ  ───    ꕀ    ───  ꕀ   ─┈
*HUKUMAN* 
⤿ Owner berhak memberikan teguran hingga sanksi terhadap user yang melanggar peraturan di atas
⤿ Melanggar peraturan di atas dapat mendapatkan sanksi seperti banned/block user/denda
┈─  ꕀ  ───    ꕀ    ───  ꕀ   ─┈
`
}

// Donasi
exports.donasi  = (ownernomer) => {
	return`⎗ㅤㅤ⎚ㅤㅤ⎘ㅤㅤ⎌
*-------「 DONATE 」-------*

Hai Kak ☺️👋🏻
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi, berapapun donasi kalian akan sangat berarti 👍
Thanks!

Contact person Owner :
wa.me/${ownernomer}
`
}

//Rules Bot
exports.rules  = (prefix, ucapanWaktu, pushname) => {
	return`⎗ㅤㅤ⎚ㅤㅤ⎘ㅤㅤ⎌
*${ucapanWaktu}, ${pushname}*

*RULES BOT*
⤿ Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*
⤿ Jangan telepon bot.
Sanksi: *SOFT BLOCK*
⤿ Jangan mengeksploitasi bot.
Sanksi: *PERMANENT BLOCK*
┈─  ꕀ  ───    ꕀ    ───  ꕀ   ─┈
*INFORMASI* 
⤿ Bot ini tidak menyimpan media/foto yang anda kirimkan
⤿ Gunakan bot ini sebaik mungkin
⤿ Dilarang *copy tampilan* bot
⤿ Bot ini hanya untuk hiburan semata, dan *tidak untuk dimakan*
⤿ Bot ini sekedar bot, tidak dapet berbicara/melakukan hall yang berlebihan seperti manusia
┈─  ꕀ  ───    ꕀ    ───  ꕀ   ─┈
*HUKUMAN* 
⤿ Owner berhak memberikan teguran hingga sanksi terhadap user yang melanggar peraturan di atas
⤿ Melanggar peraturan di atas dapat mendapatkan sanksi seperti banned/block user/denda
Sekian, Terimakasih.
┈─  ꕀ  ───    ꕀ    ───  ꕀ   ─┈
`
}

//Sewa Bot
exports.sewa  = (ownernomer, prefix, ucapanWaktu, pushname) => {
	return`⎗ㅤㅤ⎚ㅤㅤ⎘ㅤㅤ⎌
*-------「 SEWA/PREMIUM 」-------*

╭── 「 *Sewa Bot* 」
├ Sewa 3k/minggu
├ Sewa 6k/bulan
╰────────

╭── 「 *Premium* 」
├ 1 Minggu : 6k
├ 2 Minggu : 9k
├ 1 Bulan : 12k
╰────────

Payment : Gopay, Dana, Ovo, Pulsa(+2k)
Jika Minat Sewa/BuyPrem Bot Silahkan Hubungi Owner

Contact person Owner :
wa.me/${ownernomer}

Note : Bot Ini On 24j Karena Berjalan Tanpa Menggunakan Internet!
`
}

//Grup Bot
exports.gcbot  = (ownernomer, prefix, ucapanWaktu, pushname) => {
	return`⎗ㅤㅤ⎚ㅤㅤ⎘ㅤㅤ⎌
*-------「 GROUP BOT 」-------*

*･ᴗ･‌ ROOM GC RYZUBOTZ¹*
https://chat.whatsapp.com/FBioPs09A4SJFFhKYet5cr

Note : Jgn Lupa Join Ke Gc Bot Untuk Mendapat Seputar Informasi Tentang Bot.
`
}

// Simple Menu
exports.groupmenu = (prefix) => {
	return`
Tambahin Sendiri!!
`
}

exports.rpgmenu = (prefix, pushname) => {
	return`
Tambahin Sendiri!!
`
}

exports.downloadermenu = (prefix) => {
	return`
Tambahin Sendiri!!
`
}

exports.searchmenu = (prefix) => {
	return`
Tambahin Sendiri!!
`
}

exports.randommenu = (prefix) => {
	return`
Tambahin Sendiri!!
`
}

exports.textpromenu = (prefix) => {
	return`
Tambahin Sendiri!!
`
}

exports.photooxymenu = (prefix) => {
	return`
Tambahin Sendiri!!
`
}

exports.ephotomenu = (prefix) => {
	return`
Tambahin Sendiri!!
`
}

exports.funmenu = (prefix) => {
	return`
Tambahin Sendiri!!
`
}

exports.primbonmenu = (prefix) => {
	return`
Tambahin Sendiri!!
`
}

exports.convertmenu = (prefix) => {
	return`
Tambahin Sendiri!!
`
}

exports.mainmenu = (prefix) => {
	return`
Tambahin Sendiri!!
`
}

exports.databasemenu = (prefix) => {
	return`
Tambahin Sendiri!!
`
}

exports.anonymousmenu = (prefix) => {
	return`
Tambahin Sendiri!!
`
}

exports.islamicmenu = (prefix) => {
	return`
Tambahin Sendiri!!
`
}

exports.voicechargermenu = (prefix) => {
	return`
Tambahin Sendiri!!
`
}

exports.ownermenu = (prefix) => {
	return`
Tambahin Sendiri!!
`
}

exports.thanksto = () => {
	return`
Tambahin Sendiri!!
`
}