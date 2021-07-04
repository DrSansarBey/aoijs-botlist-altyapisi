module.exports = ({
  name:"bot-ekle",
  aliases:['add-bot','botekle','addbot'],
  code:`$deleteIn[3s]
$color[BLACK]
$title[BAŞARILI!]
$description[Başvurunuz iletildi!]

$channelSendMessage[$getServerVar[botlog];{title:Bir başvuru var!}{description:[Botu 0 perm ekle](https://discordapp.com/oauth2/authorize?client_id=$message[1]&scope=bot&permissions=0) | [Botu 8 perm ekle](https://discordapp.com/oauth2/authorize?client_id=$message[1]&scope=bot&permissions=8)
  Başvuran: $username[$authorID]#$discriminator[$authorID] 
  Botun prefixi: $message[2]
  Bot ismi: $username[$message[1]]#$discriminator[$message[1]]
  Bot ID'si: $message[1]
  DBL Onay durumu: $message[3]}{color:BLACK}]
$suppressErrors[{title:HATA}{description:Bilinmeyen bir hata meydana geldi.}{color:BLACK}]
$onlyIf[$checkContains[$toLowercase[$message];@;<;https;discord.gg;.gg;bit.ly;.net;.org;.com;<@&;<@!]==false;{title:HATA}{description:Etiket yada link algılandı!}{color:BLACK}]
$argsCheck[>1;{title:HATA}{description:Bir bot ID'si giriniz}{color:BLACK}] 
$argsCheck[>2;{title:HATA}{description:Bir prefix giriniz}{color:BLACK}]
$argsCheck[>3;{title:HATA}{description:DBL onay durumunu giriniz}{color:BLACK}] 
$setUserVar[botlistbotid;$message[1];$authorID]
$setUserVar[botlistbotidacik;Açık;$authorID]
 $onlyIf[$isNumber[$message[1]]==true;{title:HATA}{description:Sadece bir bot ID'si giriniz!}{color:BLACK}]
$onlyIf[$isBot[$message[1]]==true;{title:HATA}{description:Girdiğiniz ID bir bota ait değil!}{color:BLACK}]
$onlyForChannels[$getServerVar[başvurukanal];{title:HATA}{description:Bu komutu sadece <#$getServerVar[başvurukanal]>'da kullanabilirsin!}{color:BLACK}]
$onlyIf[$getServerVar[botlistacik]==açık;{title:HATA}{description:Bot list sistemi açık değil!}{color:BLACK}]`})
