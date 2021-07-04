module.exports = ({
  name:"reddet",
  code:`
  $title[Reddedilme işlemi]
  $description[
Bot Sahibi: <@$message[1]> 
Bot: <@$message[2]>
Reddeden yetkili: <@$authorID>]
$color[BLACK]
$useChannel[$getServerVar[botlog]]
$channelSendMessage[$channelID;$userTag[$message[1]] isimli kullanıcının $userTag[$message[2]] isimli botu reddedildi!] 
$suppressErrors[{title:HATA}{description:Bilinmeyen bir hata meydana geldi.}{color:BLACK}]
$onlyIf[$isNumber[$message[1]]==true;{title:HATA}{description:Sadece bir hesap ID'si giriniz!}{color:BLACK}]
$onlyIf[$isBot[$message[1]]==false;{title:HATA}{description:Girdiğiniz ID bir hesaba ait değil!}{color:BLACK}] 
$onlyIf[$isNumber[$message[2]]==true;{title:HATA}{description:Sadece bir bot ID'si giriniz!}{color:BLACK}]
$onlyIf[$isBot[$message[2]]==true;{title:HATA}{description:Girdiğiniz ID bir bota ait değil!}{color:BLACK}] 
$argsCheck[>2;{title:HATA}{description:Bir bot ID'si girmelisiniz.}{color:BLACK}]
$argsCheck[>1;{title:HATA}{description:Bir bot sahibinin ID'sini girmelisiniz!}{color:BLACK}] 
$onlyForRoles[$getServerVar[botlistyetkili];{title:HATA}{description:Bu komutu kullanabilmek için <@&$getServerVar[botlistyetkili]> rolüne sahip olmalısın!}{color:BLACK}]
$onlyIf[$getServerVar[botlistgeliştiriciaçık]==Açık;{title:HATA}{description:Onaylanan sahibe verilecek rol ayarlanmamış!}{color:BLACK}] 
$onlyIf[$getServerVar[botlistbotacik]==Açık;{title:HATA}{description:Onaylanan bota verilecek rol ayarlanmamış!}{color:BLACK}] 
$onlyIf[$getServerVar[botlistyetkiliaçık]==Açık;{title:HATA}{description:Bot list yetkili rolü ayarlanmamış!}{color:BLACK}]`})
