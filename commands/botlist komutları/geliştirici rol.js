module.exports = ({
  name:"geliştirici-rol",
  code:`$if[$message[1]==ayarla]
  $setServerVar[botlistgeliştirici;$mentionedRoles[1]]
  $setServerVar[botlistgeliştiriciaçık;Açık]
  Bot onaylanınca sahibine verilecek rol <@&$mentionedRoles[1]> olarak ayarlandı!
  $argsCheck[>1;{title:HATA}{description:Bir rol etiketleyiniz.}{color:BLACK}]
  $onlyIf[$isNumber[$mentionedRoles[1]]==true;{title:HATA}{description:Sadece bir rol etiketleyiniz.}{color:BLACK}] 
 $onlyBotPerms[manageroles;{title:HATA}{description:Rolleri yönet yetkim olmadığı için işlem yapamam!}{color:BLACK}]  
  $onlyPerms[admin;{title:HATA}{description:Bu komudu kullanmak için \`Yönetici\` yetkisine sahip olmalısın!}{color:BLACK}]
 $endif
$if[$message[1]==sıfırla] 
$setServerVar[botlistgeliştirici;]
  $setServerVar[botlistgeliştiriciaçık;Kapalı]
  Bot onaylanınca sahibine verilecek rol sıfırlandı.
   $onlyBotPerms[manageroles;{title:HATA}{description:Rolleri yönet yetkim olmadığı için işlem yapamam!}{color:BLACK}]  
  $onlyPerms[admin;{title:HATA}{description:Bu komudu kullanmak için \`Yönetici\` yetkisine sahip olmalısın!}{color:BLACK}]
$endif
$argsCheck[>1;{title:HATA}{description:Lütfen $getServerVar[prefix]geliştirici-rol ayarla/sıfırla yazınız.}{color:BLACK}]`})
