$(document).ready(function () {
  $(function () {
    $(".computer1").draggable({ containment: "#DragArea" });
    $(".computer2").draggable({ containment: "#DragArea" });
    $(".computer3").draggable({ containment: "#DragArea" });
    $(".computer4").draggable({ containment: "#DragArea" });
    $(".bunny").draggable({ containment: "#DragArea" });
    $(".bunny2").draggable({ containment: "#DragArea" });
    $(".leftComputer").draggable({ containment: "#DragArea" });
    $(".rightComputer").draggable({ containment: "#DragArea" });
    $(".deer").draggable({ containment: "#DragArea" });
    $(".deer2").draggable({ containment: "#DragArea" });
    $(".orangeRabbit").draggable({ containment: "#DragArea" });
    $(".bunny3").draggable({ containment: "#DragArea" });

    scroll: false;
  });
  //meadow
  $("#meadow").hover(
    function () {
      $(".computer1").fadeOut(400);
      //.computer2.computer3 .computer4
    },
    function () {
      $(".computer1").fadeIn(400);
    }
  );
  $("#meadow").hover(
    function () {
      $(".computer2").fadeOut(400);
      //.computer2.computer3 .computer4
    },
    function () {
      $(".computer2").fadeIn(400);
    }
  );
  $("#meadow").hover(
    function () {
      $(".computer3").fadeOut(400);
      //.computer2.computer3 .computer4
    },
    function () {
      $(".computer3").fadeIn(400);
    }
  );
  $("#meadow").hover(
    function () {
      $(".computer4").fadeOut(400);
      //.computer2.computer3 .computer4
    },
    function () {
      $(".computer4").fadeIn(400);
    }
  );

  //mammals
  $("#mammals").hover(
    function () {
      $(".computer1").fadeOut(400);
    },
    function () {
      $(".computer1").fadeIn(400);
    }
  );
  $("#mammals").hover(
    function () {
      $(".computer2").fadeOut(400);
    },
    function () {
      $(".computer2").fadeIn(400);
    }
  );
  $("#mammals").hover(
    function () {
      $(".computer3").fadeOut(400);
    },
    function () {
      $(".computer3").fadeIn(400);
    }
  );
  $("#mammals").hover(
    function () {
      $(".computer4").fadeOut(400);
    },
    function () {
      $(".computer4").fadeIn(400);
    }
  );
  $("#mammals").hover(
    function () {
      $(".grass1").fadeOut(400);
    },
    function () {
      $(".grass1").fadeIn(400);
    }
  );

  $("#mammals").hover(
    function () {
      $(".grass2").fadeOut(400);
    },
    function () {
      $(".grass2").fadeIn(400);
    }
  );
  $("#mammals").hover(
    function () {
      $(".grass3").fadeOut(400);
    },
    function () {
      $(".grass3").fadeIn(400);
    }
  );
  $("#mammals").hover(
    function () {
      $(".grass4").fadeOut(400);
    },
    function () {
      $(".grass4").fadeIn(400);
    }
  );
  $("#mammals").hover(
    function () {
      $(".grass6").fadeOut(400);
    },
    function () {
      $(".grass6").fadeIn(400);
    }
  );

  //computers
  $("#computers").hover(
    function () {
      $(".grass1").fadeOut(400);
    },
    function () {
      $(".grass1").fadeIn(400);
    }
  );

  $("#computers").hover(
    function () {
      $(".grass2").fadeOut(400);
    },
    function () {
      $(".grass2").fadeIn(400);
    }
  );
  $("#computers").hover(
    function () {
      $(".grass3").fadeOut(400);
    },
    function () {
      $(".grass3").fadeIn(400);
    }
  );
  $("#computers").hover(
    function () {
      $(".grass4").fadeOut(400);
    },
    function () {
      $(".grass4").fadeIn(400);
    }
  );
  $("#computers").hover(
    function () {
      $(".grass6").fadeOut(400);
    },
    function () {
      $(".grass6").fadeIn(400);
    }
  );
  $("#computers").hover(
    function () {
      $(".bunny").fadeOut(400);
    },
    function () {
      $(".bunny").fadeIn(400);
    }
  );
  $("#computers").hover(
    function () {
      $(".bunny2").fadeOut(400);
    },
    function () {
      $(".bunny2").fadeIn(400);
    }
  );
  $("#computers").hover(
    function () {
      $(".butterflies").fadeOut(400);
    },
    function () {
      $(".butterflies").fadeIn(400);
    }
  );
  $("#computers").hover(
    function () {
      $(".butterflies2").fadeOut(400);
    },
    function () {
      $(".butterflies2").fadeIn(400);
    }
  );

  //scene two
  $("#deer").hover(
    function () {
      $(".pine1").fadeOut(400);
    },
    function () {
      $(".pine1").fadeIn(400);
    }
  );
  $("#deer").hover(
    function () {
      $(".pine2").fadeOut(400);
    },
    function () {
      $(".pine2").fadeIn(400);
    }
  );
  $("#deer").hover(
    function () {
      $(".pine3").fadeOut(400);
    },
    function () {
      $(".pine3").fadeIn(400);
    }
  );

  $("#deer").hover(
    function () {
      $(".leftComputer").fadeOut(400);
    },
    function () {
      $(".leftComputer").fadeIn(400);
    }
  );

  $("#deer").hover(
    function () {
      $(".rightComputer").fadeOut(400);
    },
    function () {
      $(".rightComputer").fadeIn(400);
    }
  );
  $("#deer").hover(
    function () {
      $(".grass").fadeOut(400);
    },
    function () {
      $(".grass").fadeIn(400);
    }
  );
  $("#deer").hover(
    function () {
      $(".rightGrass").fadeOut(400);
    },
    function () {
      $(".rightGrass").fadeIn(400);
    }
  );

  //computer
  $("#computer").hover(
    function () {
      $(".pine1").fadeOut(400);
    },
    function () {
      $(".pine1").fadeIn(400);
    }
  );
  $("#computer").hover(
    function () {
      $(".pine2").fadeOut(400);
    },
    function () {
      $(".pine2").fadeIn(400);
    }
  );
  $("#computer").hover(
    function () {
      $(".pine3").fadeOut(400);
    },
    function () {
      $(".pine3").fadeIn(400);
    }
  );

  $("#computer").hover(
    function () {
      $(".grass").fadeOut(400);
    },
    function () {
      $(".Grass").fadeIn(400);
    }
  );
  $("#computer").hover(
    function () {
      $(".rightGrass").fadeOut(400);
    },
    function () {
      $(".rightGrass").fadeIn(400);
    }
  );
  $("#computer").hover(
    function () {
      $(".deer").fadeOut(400);
    },
    function () {
      $(".deer").fadeIn(400);
    }
  );
  $("#computer").hover(
    function () {
      $(".daisy1").fadeOut(400);
    },
    function () {
      $(".daisy1").fadeIn(400);
    }
  );
  $("#computer").hover(
    function () {
      $(".daisy2").fadeOut(400);
    },
    function () {
      $(".daisy2").fadeIn(400);
    }
  );
  $("#computer").hover(
    function () {
      $(".daisy3").fadeOut(400);
    },
    function () {
      $(".daisy3").fadeIn(400);
    }
  );
  $("#computer").hover(
    function () {
      $(".daisy4").fadeOut(400);
    },
    function () {
      $(".daisy4").fadeIn(400);
    }
  );
  $("#computer").hover(
    function () {
      $(".daisy5").fadeOut(400);
    },
    function () {
      $(".daisy5").fadeIn(400);
    }
  );

  //blossoms

  $("#blossoms").hover(
    function () {
      $(".pine1").fadeOut(400);
    },
    function () {
      $(".pine1").fadeIn(400);
    }
  );
  $("#blossoms").hover(
    function () {
      $(".pine2").fadeOut(400);
    },
    function () {
      $(".pine2").fadeIn(400);
    }
  );
  $("#blossoms").hover(
    function () {
      $(".pine3").fadeOut(400);
    },
    function () {
      $(".pine3").fadeIn(400);
    }
  );

  $("#blossoms").hover(
    function () {
      $(".deer").fadeOut(400);
    },
    function () {
      $(".deer").fadeIn(400);
    }
  );
  $("#blossoms").hover(
    function () {
      $(".leftComputer").fadeOut(400);
    },
    function () {
      $(".leftComputer").fadeIn(400);
    }
  );
  $("#blossoms").hover(
    function () {
      $(".rightComputer").fadeOut(400);
    },
    function () {
      $(".rightComputer").fadeIn(400);
    }
  );

  //forest

  $("#forest").hover(
    function () {
      $(".deer").fadeOut(400);
    },
    function () {
      $(".deer").fadeIn(400);
    }
  );
  $("#forest").hover(
    function () {
      $(".leftComputer").fadeOut(400);
    },
    function () {
      $(".leftComputer").fadeIn(400);
    }
  );
  $("#forest").hover(
    function () {
      $(".rightComputer").fadeOut(400);
    },
    function () {
      $(".rightComputer").fadeIn(400);
    }
  );

  //timed alert

  setTimeout(function () {
    $("#alert").slideToggle();
  }, 3000);

  setTimeout(function () {
    $("#alert").slideToggle();
  }, 8000);
});
