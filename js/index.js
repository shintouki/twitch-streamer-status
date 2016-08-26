let listOfStreamers = ["freecodecamp", "sleepcycles", "cretetion", "northernlion", "brunofin", "riotgames", "summit1g", "Nightblue3", "captainsparklez", "comster404", "esl_csgo", "syndicate", "LIRIK", "PhantomL0rd", "sodapoppin", "imaqtpie"];

let api = "https://api.twitch.tv/kraken/";

for (let i = 0; i < listOfStreamers.length; i++) {
  let streamerName = listOfStreamers[i];
  let streamApi = api + "streams/" + streamerName;
  let channelApi = api + "channels/" + streamerName;

  $.getJSON(streamApi, function(json) {
      let onlineStatus = json.stream;
      $.getJSON(channelApi, function(json) {

        let icon = json.logo;
        let displayName = json.display_name;
        let game = json.game;
        let status = json.status;
        let channelLink = "https://www.twitch.tv/" + streamerName;

        let box_num = "box" + i;
        let link_num = "link" + i;

        let onlineHtml;
        if (onlineStatus) {
          onlineHtml = '<span class="online">Online</span>';
        } else {
          onlineHtml = '<span class="offline">Offline</span>';
        }

        let boxHtml = '<div class="box" id="' + box_num + '"></div>';
        let iconHtml = '<img class="icon_image" src="' + icon + '">';
        let nameHtml = '<p class="name">' + displayName + ' - ' + onlineHtml + '</p>';
        let linkHtml = '<a href="' + channelLink + '" class="links" id="' + link_num + '"></a>';
        let gameAndStatusHtml = '<p class="game_and_status">' + game + ": " + status + "</p>";;

        $("#streamer_boxes").prepend(linkHtml);
        $("#" + link_num).append(boxHtml);
        $("#" + box_num).append(iconHtml);
        $("#" + box_num).append(nameHtml);
        $("#" + box_num).append(gameAndStatusHtml);
      });

    })
    .fail(function() {
      let icon = "http://www.clker.com/cliparts/F/g/8/N/k/X/black-question-mark-square-icon-md.png";
      let displayName = streamerName;
      let status = "Account Closed or Never Existed";

      let channelLink = "https://s.codepen.io/FreeCodeCamp/fullpage/undefined";

      let box_num = "box" + i;
      let link_num = "link" + i;

      let boxHtml = '<div class="box" id="' + box_num + '"></div>';
      let iconHtml = '<img class="icon_image" src="' + icon + '">';
      let nameHtml = '<p class="name">' + displayName + '</p>';
      let linkHtml = '<a href="' + channelLink + '" class="links" id="' + link_num + '"></a>';
      let gameAndStatusHtml = '<p class="game_and_status">' + status + "</p>";

      $("#streamer_boxes").append(linkHtml);
      $("#" + link_num).append(boxHtml);
      $("#" + box_num).append(iconHtml);
      $("#" + box_num).append(nameHtml);
      $("#" + box_num).append(gameAndStatusHtml);
    });

}