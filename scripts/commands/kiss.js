module.exports.config = {
  name: "github link",
  version: "1.0.0",
  permission: 2,
  credits: "Farhan",
  description: "github link",
  prefix: true, 
  category: "user", 
  usages: "sex",
  cooldowns: 5,
  dependencies: {
	}
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
     "https://i.postimg.cc/WbKvfHpB/Screenshot-2025-0713-035741.png", 
            
            "https://i.postimg.cc/k5NPGMNC/Screenshot-2025-0713-035903.png", 
            
            "https://i.postimg.cc/WbKvfHpB/Screenshot-2025-0713-035741.png",

"https://i.postimg.cc/k5NPGMNC/Screenshot-2025-0713-035903.png",
            
            "",
    ];
   var callback = () => api.sendMessage({body:`👉{https://github.com/DJ-FARHAN-BOT/MIM}👉-এই নাও বস ফারহান এর GITHUB -BOT- লিংক ফলো করে দিও-!!✔️😌}+\nSố ảnh: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
