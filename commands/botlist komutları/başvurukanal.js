module.exports = ({
  name: "başvuru-kanal",
  code: `$setServerVar[başvurukanal;$replaceText[$replaceText[$message[1];ayarla;$mentionedChannels[1;yes];1];sıfırla; ;1]] 
  $setServerVar[botlistacik;$replaceText[$replaceText[$message[1];ayarla;açık;1];sıfırla;Kapalı;1]] 
  Başvuru kanalı başarı ile $replaceText[$replaceText[$message[1];ayarla;<#$mentionedChannels[1;yes]> olarak ayarlandı;1];sıfırla;sıfırlandı;1] ! 
   $onlyIf[$checkContains[$message[1];ayarla;sıfırla]==true;{title:HATA}{description:Lütfen $getServerVar[prefix]başvuru-kanal ayarla veya $getServerVar[prefix]başvuru-kanal sıfırla yazınız}{color:BLACK}] 
$onlyIf[$hasPerms[$authorID;admin]!=false;{title:HATA}{description:Bu komutu lullanmak için \`Yönetici\` yetkin olmalı!}{color:BLACK}]` 
})
