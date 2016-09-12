
$(document).ready(function() {

	//maping menu items and anchors
	anchor_navitem = [ [About_Me, about_me_li]
					  ,[Projects, projects_li]
					  ,[Contacts, contacts_li] ];

	//After scrolling activate menu item
	(function navlistSwitchToActiveAfterScroll () {
		document.addEventListener ("scroll", function (event) {
			var top  = window.pageYOffset || document.documentElement.scrollTop
			navlistItemActivateByScroll(top)
		})
	})(); 

	//activates menu item based on current window position
	function navlistItemActivateByScroll(currentYpos) {
		for (var i = 1; i < anchor_navitem.length; i++) {
			if (currentYpos < anchor_navitem[i][0].offsetTop - 350) { //fix to activate early before sections
				navlistItemActivate(anchor_navitem[i-1][1]);
				return;
			} else {
				navlistItemActivate(anchor_navitem[i][1]);
			};
		}
	}

	//add active class to list item inside navbar-nav
	//and remove active class from others
	function navlistItemActivate(item) {
		navlist_items = document.querySelectorAll(".navbar-nav > li");
			for (var i = navlist_items.length - 1; i >= 0; i--) {
				if (navlist_items[i] != item) {
					$(navlist_items[i]).removeClass("active");
				} else {
					$(item).addClass("active");
				}
			}
	//	console.log("activated: " + item.outerText)
		};

});

