$(document).ready(function() {
  // Sound Effect Loops
  function soundsLoaded() {
    var n = 1;

    rain.start("sound" + n);
    rain.volume($('.rain-slider').val() / 300);

    thunder.start("sound" + n);
    thunder.volume($('.thunder-slider').val() / 100);

    wind.start("sound" + n);
    wind.volume($('.wind-slider').val() / 100);
    stream.start("sound" + n);
    stream.volume($('.stream-slider').val() / 100);

    birds.start("sound" + n);
    birds.volume($('.birds-slider').val() / 100);

    bugs.start("sound" + n);
    bugs.volume($('.bugs-slider').val() / 100);
  };

  // ////////////// RAIN //////////////////
  var rain = new SeamlessLoop();

  rain.addUri("assets/sounds/heavy_rain.wav", 157000, "sound1");

  rain.callback(soundsLoaded);

  $('.rain-slider').on('input', function() {

    rain.volume($(this).val() / 100);
  });

  // ////////////// THUNDER //////////////////
  var thunder = new SeamlessLoop();
  thunder.addUri("assets/sounds/thunder.mp3", 215000, "sound1");

  $('.thunder-slider').on('input', function() {
    thunder.volume($(this).val() / 100);
  });

  // ////////////// WIND //////////////////
  var wind = new SeamlessLoop();
  wind.addUri("assets/sounds/wind.wav", 106000, "sound1");

  $('.wind-slider').on('input', function() {
    wind.volume($(this).val() / 100);
  });

  // ////////////// STREAM //////////////////
  var stream = new SeamlessLoop();
  stream.addUri("assets/sounds/stream.wav", 61000, "sound1");

  $('.stream-slider').on('input', function() {
    stream.volume($(this).val() / 100);
  });

  // ////////////// BIRDS //////////////////
  var birds = new SeamlessLoop();
  birds.addUri("assets/sounds/birds.wav", 151000, "sound1");

  $('.birds-slider').on('input', function() {
    birds.volume($(this).val() / 100);
  });

  // ////////////// BUGS //////////////////
  var bugs = new SeamlessLoop();
  bugs.addUri("assets/sounds/bugs.wav", 61000, "sound1");

  $('.bugs-slider').on('input', function() {
    bugs.volume($(this).val() / 100);
  });


  // //////////////// Video Section ///////////////
  const youtube_start = "https://www.youtube.com/embed/";
  const youtube_end = "?rel=0&amp;showinfo=0";
  var vSwitch = false;
  var vPlaying = false;

  $(".video-phase-1").click(function() {
    $(this).hide();
    $("#video-embeded").hide();
    $(".youtube-button").show();
    $("#video-form").hide();
    $("#video-control").css("margin-right", "0px");
    $(".video-new").hide();
  });

  $(".video-new").click(function() {
    vSwitch = false
  })

  $(".video-phase-2").click(function() {
    if (vSwitch && vPlaying) {
      showVideo()
    } else {
      if (vPlaying) {
        vSwitch = true;
      }
      $(this).hide();
      $("#video-embeded").hide();
      $("#video-form").show();
      $("#video-control").css("margin-right", "0px");
      $(".video-close").show();
    }
  });

  // Video Search
  $('#video-input').bind("enterKey", function(e) {
    let youtube_url = youtube_start + $("#video-input").val() + youtube_end
    $("#video-embeded").attr("src", youtube_url);
    vSwitch = true
    vPlaying = true
    showVideo();
  });

  $('#video-input').keyup(function(e) {
    if (e.keyCode == 13) {
      $(this).trigger("enterKey");
    }
  });

  function showVideo() {
    $(".youtube-button").hide();
    $("#video-form").hide();
    $("#video-embeded").show();
    $("#video-control").css("margin-right", "-30px");
    $(".video-new").show();
    $(".video-close").show();
  }

  // /////////////// Settings Section //////////////////
  var sSwitch = true;
  $(".fa-cog").click(function() {
    if (sSwitch) {
      $("#settings").removeClass("animated slideOutRight");
      $("#settings").addClass("animated slideInRight");
      sSwitch = false;
    } else {
      $("#settings").removeClass("animated slideInRight");
      $("#settings").addClass("animated slideOutRight");
      sSwitch = true;
    };
  });

  $(document).click(function(event) {
    if (!$(event.target).closest('#settings-container').length) {
      if ($('#settings:visible') && sSwitch === false) {
        $("#settings").removeClass("animated slideInRight");
        $("#settings").addClass("animated slideOutRight");
        sSwitch = true;
      }
    }
  });

  $(".settings-img").click(function() {
    $(".fullscreen").attr("src", "assets/rain" + $(this).attr("data-id") + ".mp4");
  });

});
