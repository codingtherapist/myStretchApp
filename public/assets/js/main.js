//stretch images
const state = {
	eyes: {
	  visible: false,
	  container: "#eyesup",
	  uiElement: "#eyesnext",
	  images: [
		"https://res.cloudinary.com/dtamwfybo/image/upload/v1664557894/eyePalm_14_ea0aws.gif",
		"https://res.cloudinary.com/dtamwfybo/image/upload/v1664558197/eyePalm_13_o0jyf5.gif",
		"https://res.cloudinary.com/dtamwfybo/image/upload/v1664558188/eyePalm_4_orpfil.gif",

		],
	},
	neck: {
	  visible: false,
	  container: "#eyesup",
	  uiElement: "#necknext",
	  images: [ 
		"https://res.cloudinary.com/dtamwfybo/image/upload/v1664558197/eyePalm_7_zlq74j.gif",
		"https://res.cloudinary.com/dtamwfybo/image/upload/v1664561114/eyePalm_28_xatkdz.gif",
		"https://res.cloudinary.com/dtamwfybo/image/upload/v1664560959/eyePalm_24_cd0gow.gif",
		"https://res.cloudinary.com/dtamwfybo/image/upload/v1664560705/eyePalm_26_ecapfg.gif",
		

	]
	},
	shoulders: {
	  visible: false,
	  container: "#eyesup",
	  uiElement: "#shouldersnext",
	  images: [
		"https://res.cloudinary.com/dtamwfybo/image/upload/v1664558330/eyePalm_15_z5ybbz.gif",
		"https://res.cloudinary.com/dtamwfybo/image/upload/v1664558198/eyePalm_6_ip7qvh.gif", 
		"https://res.cloudinary.com/dtamwfybo/image/upload/v1664558193/eyePalm_5_yyv371.gif",
		"https://res.cloudinary.com/dtamwfybo/image/upload/v1664560476/eyePalm_15_klpxhx.gif",
		"https://res.cloudinary.com/dtamwfybo/image/upload/v1664560676/eyePalm_24_vilcpy.gif",
		"https://res.cloudinary.com/dtamwfybo/image/upload/v1664560689/eyePalm_22_vt2yv7.gif",
		"https://res.cloudinary.com/dtamwfybo/image/upload/v1664560684/eyePalm_23_iczazj.gif",
		"https://res.cloudinary.com/dtamwfybo/image/upload/v1664560693/eyePalm_21_dbwqrq.gif",
		"https://res.cloudinary.com/dtamwfybo/image/upload/v1664560700/eyePalm_27_bcf3ak.gif",
		"https://res.cloudinary.com/dtamwfybo/image/upload/v1664560705/eyePalm_26_ecapfg.gif",
		"https://res.cloudinary.com/dtamwfybo/image/upload/v1664560941/eyePalm_27_qrnlcz.gif",
		"https://res.cloudinary.com/dtamwfybo/image/upload/v1664560954/eyePalm_26_bcqoqz.gif",
		"https://res.cloudinary.com/dtamwfybo/image/upload/v1664560968/eyePalm_23_rgudkq.gif",
		"https://res.cloudinary.com/dtamwfybo/image/upload/v1664561278/eyePalm_32_apkz0i.gif",
		"https://res.cloudinary.com/dtamwfybo/image/upload/v1665509216/eyePalm_45_jlzw7v.gif",
		"https://res.cloudinary.com/dtamwfybo/image/upload/v1664560705/eyePalm_26_ecapfg.gif",
	  ],
	},
	hands: {
	  visible: false,
	  container: "#eyesup",
	  uiElement: "#handnext",
	  images: [
		"https://res.cloudinary.com/dtamwfybo/image/upload/v1664558193/eyePalm_5_yyv371.gif", 
		"https://res.cloudinary.com/dtamwfybo/image/upload/v1664560700/eyePalm_27_bcf3ak.gif",
		"https://res.cloudinary.com/dtamwfybo/image/upload/v1664560941/eyePalm_27_qrnlcz.gif",
		"https://res.cloudinary.com/dtamwfybo/image/upload/v1664561268/eyePalm_29_chggmv.gif",
		"https://res.cloudinary.com/dtamwfybo/image/upload/v1664561272/eyePalm_30_oaruek.gif",
		"https://res.cloudinary.com/dtamwfybo/image/upload/v1664563719/eyePalm_35_zxe2ca.gif",
		"https://res.cloudinary.com/dtamwfybo/image/upload/v1664563721/eyePalm_40_uudd9r.gif",
		"https://res.cloudinary.com/dtamwfybo/image/upload/v1664563727/eyePalm_36_bf4ovw.gif",
		"https://res.cloudinary.com/dtamwfybo/image/upload/v1664563727/eyePalm_38_ycyr97.gif",
		"https://res.cloudinary.com/dtamwfybo/image/upload/v1664563729/eyePalm_39_uug4wg.gif",
		"https://res.cloudinary.com/dtamwfybo/image/upload/v1664563735/eyePalm_41_dee9bv.gif",
		"https://res.cloudinary.com/dtamwfybo/image/upload/v1664563732/eyePalm_37_ughlvt.gif",
		"https://res.cloudinary.com/dtamwfybo/image/upload/v1665509227/eyePalm_49_xh9lop.gif",
		"https://res.cloudinary.com/dtamwfybo/image/upload/v1665509222/eyePalm_48_bc9voa.gif",
		"https://res.cloudinary.com/dtamwfybo/image/upload/v1665509219/eyePalm_46_ah9qsn.gif",
		"https://res.cloudinary.com/dtamwfybo/image/upload/v1665509216/eyePalm_42_wmtca4.gif",
		"https://res.cloudinary.com/dtamwfybo/image/upload/v1665509216/eyePalm_42_wmtca4.gif",
		"https://res.cloudinary.com/dtamwfybo/image/upload/v1665509215/eyePalm_47_ducrov.gif",
		"https://res.cloudinary.com/dtamwfybo/image/upload/v1665509212/eyePalm_43_lrww6g.gif",

	],
	},
  };
  // starting point, initialization step 
  function init() {
	// Going through each item in our state array.
	// for...in iterates through a JSON object's keys.
	for (const key in state) {
	  // for unexpected errors 
	  try {
		// inside the for...in loop, grab the value of the corresponding current key.
		const currentStateItem = state[key];
		// currentStateItem provides a few things like 'container' and 'uiElement' that you can use to do stuff with... like, send it to querySelector.
		const uiElementDOMNode = document.querySelector(
		  currentStateItem.uiElement
		);
		// ... or set an onclick event.
		currentStateItem.clickListener = uiElementDOMNode.addEventListener(
		  "click",
			// pass on the currentStatItem to our click event callback function.
		  	// normally the callback only takes one variable which is the event itself.
		  () => {
			// we pass the key and the value corresponding to that key. We'll need both later on.
			selectExercise({ key, item: currentStateItem });
		  }
		);
	  } catch (error) {
		console.error(
		  `Error intialising element ${key}. Check your HTML has the right identifiers.`
		);
	  }
	}
  }
  
  function hideEverythingExcept(args) {
	// passing variables to functions
	const skipThis = args?.skipThis;
	// loop through the state again, this time to hide stuff.
	// an example of how you now benefit from having the state in one place.
	// this loop's contents are very similar to what's happening in the init function
	for (const key in state) {
	  if (key === skipThis) continue;
	  const currentStateItem = state[key];
	  const currentDOMNode = document.querySelector(currentStateItem.container);
	  currentDOMNode.classList.add("hidden");
	}
  }

  function selectExercise(args) {
	const key = args?.key;
	const item = args?.item;
	// the parameter I'm passing into the below function is inside a JSON object
	// the reason for that is just so that it's easier for me to remember
	// exactly what I'm passing.
	// the key is from the click event, which was set up in the init() loop
	hideEverythingExcept({ skipThis: key });
	// after everything except the subject of the click event is hidden,
	// change its visibility and image src.
	if (item) {
	  const randomPick = Math.floor(Math.random() * item.images.length);
	  const currentDOMNode = document.querySelector(item.container);
	  currentDOMNode.src = `${item.images[randomPick]}`;
	  currentDOMNode.classList.toggle("hidden");
	}
  }
  init();
  
//timer object
const fullArray = 283;
const timerWarning = 10;
const timerAlert = 5;

const timerColors = {
  info: {
    color: "green",
  },
  warning: {
    color: "orange",
    threshold: timerWarning,
  },
  alert: {
    color: "red",
    threshold: timerAlert,
  },
};

const timerMax = 300;
let timePassed = 0;
let timeLeft = timerMax;
let timerInterval = null;
let remainingPathColor = timerColors.info.color;

document.getElementById("app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;

function onTimesUp() {
  clearInterval(timerInterval);
  timerInterval = undefined;
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = timerMax - timePassed;
    document.getElementById("base-timer-label").innerHTML =
      formatTime(timeLeft);
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
      alert("Your 5 minute stretch break is complete!");
    }
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = timerColors;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / timerMax;
  return rawTimeFraction - (1 / timerMax) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * fullArray
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}

function starTimer() {
  if (!timerInterval) startTimer();
}

function pauseTimer() {
  onTimesUp();
}
function resumeTimer() {
  console.log(timerInterval);
  if (!timerInterval) startTimer();
}
function resetTimer() {
  if (timerInterval) {
    onTimesUp();
  }
  timePassed = 0;
  timeLeft =  timerMax;
  timerInterval = null;

  document.getElementById("base-timer-label").innerHTML = formatTime(timeLeft);
  setCircleDasharray();
  setRemainingPathColor(timeLeft);
}




(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Browser fixes.

		// IE: Flexbox min-height bug.
			if (browser.name == 'ie')
				(function() {

					var flexboxFixTimeoutId;

					$window.on('resize.flexbox-fix', function() {

						var $x = $('.fullscreen');

						clearTimeout(flexboxFixTimeoutId);

						flexboxFixTimeoutId = setTimeout(function() {

							if ($x.prop('scrollHeight') > $window.height())
								$x.css('height', 'auto');
							else
								$x.css('height', '100vh');

						}, 250);

					}).triggerHandler('resize.flexbox-fix');

				})();

		// Object fit workaround.
			if (!browser.canUse('object-fit'))
				(function() {

					$('.banner .image, .spotlight .image').each(function() {

						var $this = $(this),
							$img = $this.children('img'),
							positionClass = $this.parent().attr('class').match(/image-position-([a-z]+)/);

						// Set image.
							$this
								.css('background-image', 'url("' + $img.attr('src') + '")')
								.css('background-repeat', 'no-repeat')
								.css('background-size', 'cover');

						// Set position.
							switch (positionClass.length > 1 ? positionClass[1] : '') {

								case 'left':
									$this.css('background-position', 'left');
									break;

								case 'right':
									$this.css('background-position', 'right');
									break;

								default:
								case 'center':
									$this.css('background-position', 'center');
									break;

							}

						// Hide original.
							$img.css('opacity', '0');

					});

				})();

	// Smooth scroll.
		$('.smooth-scroll').scrolly();
		$('.smooth-scroll-middle').scrolly({ anchor: 'middle' });

	// Wrapper.
		$wrapper.children()
			.scrollex({
				top:		'30vh',
				bottom:		'30vh',
				initialize:	function() {
					$(this).addClass('is-inactive');
				},
				terminate:	function() {
					$(this).removeClass('is-inactive');
				},
				enter:		function() {
					$(this).removeClass('is-inactive');
				},
				leave:		function() {

					var $this = $(this);

					if ($this.hasClass('onscroll-bidirectional'))
						$this.addClass('is-inactive');

				}
			});

	// Items.
		$('.items')
			.scrollex({
				top:		'30vh',
				bottom:		'30vh',
				delay:		50,
				initialize:	function() {
					$(this).addClass('is-inactive');
				},
				terminate:	function() {
					$(this).removeClass('is-inactive');
				},
				enter:		function() {
					$(this).removeClass('is-inactive');
				},
				leave:		function() {

					var $this = $(this);

					if ($this.hasClass('onscroll-bidirectional'))
						$this.addClass('is-inactive');

				}
			})
			.children()
				.wrapInner('<div class="inner"></div>');

	// Gallery.
		$('.gallery')
			.wrapInner('<div class="inner"></div>')
			.prepend(browser.mobile ? '' : '<div class="forward"></div><div class="backward"></div>')
			.scrollex({
				top:		'30vh',
				bottom:		'30vh',
				delay:		50,
				initialize:	function() {
					$(this).addClass('is-inactive');
				},
				terminate:	function() {
					$(this).removeClass('is-inactive');
				},
				enter:		function() {
					$(this).removeClass('is-inactive');
				},
				leave:		function() {

					var $this = $(this);

					if ($this.hasClass('onscroll-bidirectional'))
						$this.addClass('is-inactive');

				}
			})
			.children('.inner')
				//.css('overflow', 'hidden')
				.css('overflow-y', browser.mobile ? 'visible' : 'hidden')
				.css('overflow-x', browser.mobile ? 'scroll' : 'hidden')
				.scrollLeft(0);

		// Style #1.
			// ...

		// Style #2.
			$('.gallery')
				.on('wheel', '.inner', function(event) {

					var	$this = $(this),
						delta = (event.originalEvent.deltaX * 10);

					// Cap delta.
						if (delta > 0)
							delta = Math.min(25, delta);
						else if (delta < 0)
							delta = Math.max(-25, delta);

					// Scroll.
						$this.scrollLeft( $this.scrollLeft() + delta );

				})
				.on('mouseenter', '.forward, .backward', function(event) {

					var $this = $(this),
						$inner = $this.siblings('.inner'),
						direction = ($this.hasClass('forward') ? 1 : -1);

					// Clear move interval.
						clearInterval(this._gallery_moveIntervalId);

					// Start interval.
						this._gallery_moveIntervalId = setInterval(function() {
							$inner.scrollLeft( $inner.scrollLeft() + (5 * direction) );
						}, 10);

				})
				.on('mouseleave', '.forward, .backward', function(event) {

					// Clear move interval.
						clearInterval(this._gallery_moveIntervalId);

				});

		// Lightbox.
			$('.gallery.lightbox')
				.on('click', 'a', function(event) {

					var $a = $(this),
						$gallery = $a.parents('.gallery'),
						$modal = $gallery.children('.modal'),
						$modalImg = $modal.find('img'),
						href = $a.attr('href');

					// Not an image? Bail.
						if (!href.match(/\.(jpg|gif|png|mp4)$/))
							return;

					// Prevent default.
						event.preventDefault();
						event.stopPropagation();

					// Locked? Bail.
						if ($modal[0]._locked)
							return;

					// Lock.
						$modal[0]._locked = true;

					// Set src.
						$modalImg.attr('src', href);

					// Set visible.
						$modal.addClass('visible');

					// Focus.
						$modal.focus();

					// Delay.
						setTimeout(function() {

							// Unlock.
								$modal[0]._locked = false;

						}, 600);

				})
				.on('click', '.modal', function(event) {

					var $modal = $(this),
						$modalImg = $modal.find('img');

					// Locked? Bail.
						if ($modal[0]._locked)
							return;

					// Already hidden? Bail.
						if (!$modal.hasClass('visible'))
							return;

					// Lock.
						$modal[0]._locked = true;

					// Clear visible, loaded.
						$modal
							.removeClass('loaded')

					// Delay.
						setTimeout(function() {

							$modal
								.removeClass('visible')

							setTimeout(function() {

								// Clear src.
									$modalImg.attr('src', '');

								// Unlock.
									$modal[0]._locked = false;

								// Focus.
									$body.focus();

							}, 475);

						}, 125);

				})
				.on('keypress', '.modal', function(event) {

					var $modal = $(this);

					// Escape? Hide modal.
						if (event.keyCode == 27)
							$modal.trigger('click');

				})
				.prepend('<div class="modal" tabIndex="-1"><div class="inner"><img src="" /></div></div>')
					.find('img')
						.on('load', function(event) {

							var $modalImg = $(this),
								$modal = $modalImg.parents('.modal');

							setTimeout(function() {

								// No longer visible? Bail.
									if (!$modal.hasClass('visible'))
										return;

								// Set loaded.
									$modal.addClass('loaded');

							}, 275);

						});

})(jQuery);


