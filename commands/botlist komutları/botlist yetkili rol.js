module.exports = ({
  name:"botlist-yetkili-rol",
  code:`$if[$message[1]==sıfırla]
$setServerVar[botlistyetkili;]
  $setServerVar[botlistyetkiliaçık;Kapalı]
  Bot list yetkili rol sıfırlandı.
  $onlyBotPerms[manageroles;{title:HATA}{description:Rolleri yönet yetkim olmadığı için işlem yapamam!}{color:BLACK}]  
  $onlyPerms[admin;{title:HATA}{description:Bu komudu kullanmak için \`Yönetici\` yetkisine sahip olmalısın!}{color:BLACK}]
$endif
$if[$message[1]==ayarla]
$setServerVar[botlistyetkili;$mentionedRoles[1]]
  $setServerVar[botlistyetkiliaçık;Açık]
  Yetkili rolü <@&$mentionedRoles[1]> olarak ayarlandı!
  $argsCheck[>1;{title:HATA}{description:Bir rol etiketleyiniz.}{color:BLACK}]
  $onlyBotPerms[manageroles;{title:HATA}{description:Rolleri yönet yetkim olmadığı için işlem yapamam!}{color:BLACK}]  
  $onlyPerms[admin;{title:HATA}{description:Bu komudu kullanmak için \`Yönetici\` yetkisine sahip olmalısın!}{color:BLACK}]
$endif

$argsCheck[>1;{title:HATA}{description:Lütfen $getServerVar[prefix]botlist-yetkili-rol ayarla/sıfırla yazınız.}{color:BLACK}]`})
