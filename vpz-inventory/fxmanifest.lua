fx_version 'cerulean'
game 'gta5'

author 'V0pz'
description 'Wau, soo cool inventory #UNFINISHED'
version '1.0.0'

client_script 'client.lua' 

files {
    'html/index.html',
    'html/styles.css',
    'html/script.js',
    'html/html.js',
    'html/images/*.png'
}

ui_page 'html/index.html'

shared_scripts {
	'@ox_lib/init.lua',
} 


lua54 'yes'