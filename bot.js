const Discord = require("discord.js");
  const gamer = new Discord.Client();
      gamer.on('ready', () => {
        gamer.user.setGame(`.help`,'https://www.twitch.tv/TEST-Broadcast');
          console.log('Im Ready!');
  
        });

  gamer.on('message', message => {
    if (message.content.split(' ')[0] == '.bc')
       message.guild.members.forEach( member => {
         if (!message.member.hasPermission("ADMINISTRATOR"))  return;


           member.send( `${member} ! ` + "**" + message.guild.name + " : ** " + message.content.substr(3));
                                                      message.delete();
            
                                                    });
            
                                                  });
   gamer.on("message", message => {
       var prefix = ".";
 
             var args = message.content.substring(prefix.length).split(" ");
                if (message.content.startsWith(prefix + "help")) {
                          if (!message.member.hasPermission("ADMINISTRATOR"))  return;

                          if (!args[1]) {
                            
                                 let embed3 = new Discord.RichEmbed()
                                     .setDescription(":white_check_mark: | تريد اضافة البوت لسيرفرك:https://discordapp.com/api/oauth2/authorize?client_id=538728083772014633&permissions=0&scope=bot لعمل بروداكس:.bc")
                                       .setColor("#FF00FF")
                                          message.channel.sendEmbed(embed3);
                            
                                        } else {

                            
                                           let embed4 = new Discord.RichEmbed()
                                                            .setDescription(':white_check_mark: | تم ارسال الرساله للجميع ..')
                                                                .setColor("#99999")
                               
                                                                message.channel.sendEmbed(embed4);
                                                      message.delete();
                            }
                          }
});
gamer.login("Token");
