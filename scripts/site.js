var APP = function() {
        function e() {
            APP.Utils.runIfClassNamePresent("page-home", t)
        }

        function t() {
            APP.Homepage.init()
        }
        return {
            initialize: e
        }
    }(),
    APP = APP || {};
APP.Utils = function() {
    return {
        isMobile: function() {
            return navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) ? !0 : !1
        }(),
        runIfClassNamePresent: function(e, t) {
            var n = document.getElementsByClassName(e);
            n.length > 0 && t()
        }
    }
}();
var APP = APP || {};
! function() {
    APP.Homepage = function() {
        return {
            ui: null,
            init: function() {
                this.ui = {
                    $doc: $(window),
                    $hero: $("#jumbotron"),
                    $collapse: $(".navbar-collapse")
                }, this.addEventListeners()
            },
            addEventListeners: function() {
                var e = this;
                APP.Utils.isMobile || e.ui.$doc.scroll(function() {
                    if (!e.ui.$collapse.hasClass("in")) {
                        var t = e.ui.$doc.scrollTop(),
                            n = .8 * t,
                            r = n - t;
                        e.ui.$hero.css("webkitTransform", "translate(0, " + n + "px)"), e.ui.$hero.find(".container").css("webkitTransform", "translate(0, " + r + "px)")
                    }
                })
            }
        }
    }()
}(jQuery, this);
