window.onload = function() {

    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height() * .6;

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    var $elements = $('.animate');

    $(window).on("resize scroll load ready", function() {
        $elements.each(function(i) {
            var $el = $elements.eq(i);
            if ($el.isInViewport() == true && $el.hasClass('animated') == false) {
                var newClass = $el.attr('class').replace(/animation__/g, 'animate__');
                $el.addClass(newClass);
                $el.addClass("animate__animated");
                $el.addClass("animate__slow");
                $el.addClass("animated nowui-visible");

            }
        })
    });

};


// https://github.com/mrroot5/same-elements-height
var Utils = {
    is_empty: function(data) {
        var count = 0,
            i;

        if (typeof data === 'number') {
            return false;
        }

        if (typeof data === 'boolean') {
            return !data;
        }

        if (data === undefined || data === null) {
            return true;
        }

        if (data.length !== undefined) {
            return data.length === 0;
        }

        for (i in data) {
            if (data.hasOwnProperty(i)) {
                count += 1;
            }
        }

        return count === 0;
    },
    sameElementsHeight: function(selector) {
        try {
            var elements = document.querySelectorAll(selector),
                max = 0,
                i = 0;

            if (this.is_empty(elements)) {
                throw "No matched selector";
            }

            for (i = 0; i < elements.length; i++) {
                if (elements.hasOwnProperty(i)) {
                    if (elements[i].offsetHeight > max) {
                        max = elements[i].offsetHeight;
                    }
                }
            }

            for (i = 0; i < elements.length; i++) {
                if (elements.hasOwnProperty(i)) {
                    if (elements[i].offsetHeight < max) {
                        // console.log("offset height: " + elements[i].offsetHeight);
                        elements[i].style.height = max + "px";
                        elements[i].style.transform = "translate3d(0,0,0)";
                        // console.log("style height: " + elements[i].style.height);
                    }
                }
            }
        } catch (e) {
            // window.console.error("Same Elements Height: " + e.message);
        }
    }
};


var bodyId = document.getElementsByTagName("body")[0].id;

if (bodyId != 'home') {
    Utils.sameElementsHeight(".card");
    Utils.sameElementsHeight(".card-body");
    Utils.sameElementsHeight(".card-title");
}


document.addEventListener('DOMContentLoaded', function () {
// Adjust this value to match the height of your navbar
var navbarHeight = 100;

// Function to scroll to the anchor with the given offset
function scrollToAnchor(anchor, offset) {
    var target = document.querySelector(anchor);
    if (target) {
    var scrollOptions = {
        top: target.getBoundingClientRect().top + window.scrollY - offset,
        behavior: 'smooth'
    };
    window.scrollTo(scrollOptions);
    return false;
    }
}

// Attach click event to all anchor links
var anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
    event.preventDefault();
    scrollToAnchor(this.hash, navbarHeight);
    });
});
});
