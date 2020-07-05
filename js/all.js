$(document).ready(function () {
  // menu
  $('.showmenu').on('click', function (e) {
    e.preventDefault();
    $('.navbar').toggleClass('menu-show bg-assist');
    $(this).find('.fa').toggleClass('fa-bars').toggleClass('fa-minus');
  })
  $('body').on('blur', '.showmenu', function (e) {
    $('.navbar').removeClass('menu-show bg-assist');
    $(this).find('.fa').addClass('fa-bars').removeClass('fa-minus');
  })

  // scrollTop to #
  $('.scrollTop').on('click', function (e) {
    let target = $(this).attr('href');
    let targetPos = $(target).offset().top;
    $('html, body').animate({ scrollTop: targetPos - 60 }, 1000);
  })

  // scroll window
  $(window).scroll(function () {
    let scrollPos = $(window).scrollTop();
    var windowHeight = $(window).height();

    // navbar bg-color
    if (scrollPos > 250) {
      $('.navbar').addClass('scroll-bg');
    } else {
      $('.navbar').removeClass('scroll-bg');
    }

    // 取得每一個 .scrollTop 的值
    $('.scrollTop').each(function () {
      var target = $(this).attr("href");
      var targetPos = $(target).offset().top;
      //outerHight() 取得加padding的高
      var targetHight = $(target).outerHeight();
      // console.log(target, targetPos, targetHight);
      // 三個.srollTop 都同時判斷
      if (targetPos - 65 <= scrollPos && (targetPos + targetHight) > scrollPos) {
        $('.scrollTop').removeClass('active');
        $(this).addClass('active');
      } else {
        $(this).removeClass('active')
      }
    });

    //animated
    $('.animated').each(function () {
      var thisPos = $(this).offset().top;
      // console.log('animated',thisPos)
      if ((windowHeight + scrollPos) >= thisPos) {
        $(this).addClass('fadeIn')
      }
    })



  })

  // $('.showmenu').on('click', function(e) {
  //     e.preventDefault();
  //     $('.navbar').toggleClass('menu-show bg-assist');
  //     $(this).find('.fa').toggleClass('fa-bars fa-minus')
  // });

  // show card-reveal
  // img:press
  $('.card-img').on('click', function (e) {
    e.preventDefault();
    $(this).parent().find('.card-reveal').css('transform', 'translateY(-100%)');
  });
  // more:press
  $('.card-bar .more').on('click', function (e) {
    e.preventDefault();
    $(this).parent().parent().find('.card-reveal').css('transform', 'translateY(-100%)');
  });
  // colse card-reveal
  $('.card-title i').on('click', function (e) {
    e.preventDefault();
    $(this).parent().parent().css('transform', 'translateY(0%)');
  });

  // form active
  // toggle active
  $('body').on('focus', 'input, textarea', function (e) {
    $(this).parent().addClass('active');
  })
  $('body').on('blur', 'input, textarea', function (e) {
    if (!$(this).val().length > 0) {
      $(this).parent().removeClass('active');
    }
  })

  // footer scroll top
  $('.page-up').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 700);
  })

  // send email mailTo
  $('#formSend').submit(function (e) {
    e.preventDefault();
    const to = 'tkps92101@gmail.com'
    let name = $('#name').val();
    let email = $('#email').val();
    let subject = `我是${name}，想跟您聯繫。`;
    let message = $('#message').val();

    let body = `${message}%0A%0A%0A`;
    body += `From: ${name} %0AEmail: ${email} %0A`;

    $('#send').attr("href",`mailto:${to}?subject=${subject}&body=${body}`);
    document.getElementById('send').click();
    $(this)[0].reset();
    $('input, textarea').parent().removeClass('active');
    

  })
})
