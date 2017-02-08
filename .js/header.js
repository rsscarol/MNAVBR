/**
 * This script defines all interactions related to the header.
 */

/**
 * Select all needed elements and save them to variables
 */
var $body = $('body');
var $mainNav = $('#main-nav');
var $menuTrigger = $('#menu-trigger');
var $menuOverlay = $('#menu-overlay');

/**
 * Whenever the menu-trigger element is clicked,
 * toggle (add if not present, remove if present)
 * the menu-open class from the body element.
 */
$menuTrigger.on('click', function (event) {
  $body.toggleClass('menu-open');
});

/**
 * Whenever the menu-overlay element is clicked,
 * remove the 'menu-open' class from the body element.
 * Click on the overlay always closes the menu.
 */
$menuOverlay.on('click', function (event) {
  $body.removeClass('menu-open');
});

/**
 * Whenever any anchor (<a></a>) element within the main-nav element
 * is clicked, remove the 'menu-open' class from the body element.
 */
$mainNav.on('click', 'a', function (event) {
  $body.removeClass('menu-open');
});
