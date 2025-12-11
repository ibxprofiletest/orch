import {a as B, v as A, ai as x, u as S, a7 as U, B as I, x as T, z as w, Y as M, G as h, M as D, aa as r, ab as u} from "#entry";
import {g as f, h as l, b as v, o as a, A as c, w as G, c as b, y as N, U as j, x as C, i as y, V as z, W as L, j as _, d as p, l as O} from "./B9Tch2p9.js";
import {C as V} from "./TTmWOU_t.js";
import {c as q} from "./B2lQqXLs.js";
/**
 * @license lucide-vue-next v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E = q("sun-moon", [["path", {
    d: "M12 2v2",
    key: "tus03m"
}], ["path", {
    d: "M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715",
    key: "xlf6rm"
}], ["path", {
    d: "M16 12a4 4 0 0 0-4-4",
    key: "6vsxu"
}], ["path", {
    d: "m19 5-1.256 1.256",
    key: "1yg6a6"
}], ["path", {
    d: "M20 12h2",
    key: "1q8mjw"
}]])
  , R = f({
    name: "NavBarElement",
    props: {
        item: {
            type: Object,
            required: !0
        },
        active: {
            type: Boolean,
            default: !1
        },
        disabled: {
            type: Boolean,
            default: !1
        }
    }
})
  , W = {
    key: 1,
    class: "nav-bar-element-name"
};
function P(e, s, o, n, m, d) {
    const i = l("or-icon")
      , g = l("or-badge");
    return a(),
    v("button", {
        tabindex: "0",
        class: C(["nav-bar-element", {
            mobile: e.$device.isMobile,
            disabled: e.disabled
        }])
    }, [c(g, {
        value: e.item.badge || 0,
        "is-dot": !0,
        hidden: !e.item.badge,
        type: e.item.badgeType || "success",
        border: "none",
        style: {
            "flex-direction": "column",
            "align-items": "center",
            "justify-content": "center"
        }
    }, {
        default: G( () => [e.item.icon ? (a(),
        b(i, {
            key: 0,
            name: e.active && e.item.fillIcon || e.item.icon,
            width: "28px",
            height: "28px",
            class: "nav-bar-element-icon"
        }, null, 8, ["name"])) : N("", !0), e.item.label ? (a(),
        v("div", W, j(e.item.label), 1)) : N("", !0)]),
        _: 1
    }, 8, ["value", "hidden", "type"])], 2)
}
const F = B(R, [["render", P], ["__scopeId", "data-v-f1ddf4ed"]])
  , Y = f({
    name: "NavTabs",
    components: {
        NavBarElement: F
    },
    props: {
        activeTab: {
            type: String,
            default: ""
        }
    },
    computed: {
        navActions() {
            return [{
                _uid: "chats",
                key: "chats",
                label: this.$t("entities.chat", 2),
                icon: "chat-outline",
                fillIcon: "chat",
                badge: I().hasUnread("unread-muted"),
                badgeType: I().hasUnread("unread") ? "blue" : "muted"
            }, {
                _uid: "tasks",
                key: "tasks",
                label: this.$t("entities.task", 2),
                icon: "task-outline",
                fillIcon: "task",
                disabled: this.$space?.isGuest
            }, {
                _uid: "docs",
                key: "docs",
                label: this.$t("entities.document", 2),
                icon: "document-blank",
                fillIcon: "document-fill",
                filter: () => S().features?.documents?.enabled ?? !1,
                disabled: this.$space?.isGuest
            }, {
                key: "calendar",
                label: this.$t("entities.calendar", 1),
                icon: "calendar",
                fillIcon: "calendar",
                filter: () => S().features?.calendar?.enabled ?? !1,
                disabled: this.$space?.isGuest
            }, {
                _uid: "teams",
                key: "teams",
                label: this.$t("entities.team", 2),
                icon: "group-outline",
                fillIcon: "group",
                disabled: this.$space?.isGuest
            }].filter(e => e.filter?.() ?? !0)
        },
        activeScreen() {
            return this.activeTab || ((this._.provides[U] || this.$route).name ?? "").split("-")[1] || "chats"
        }
    },
    methods: {
        selectActiveScreen(e) {
            if (e.disabled)
                return;
            const s = e.key;
            if (s === this.activeScreen) {
                this.$device.isMobile && A().initRepo();
                return
            }
            x({
                name: `space_uid-${s}`,
                params: {
                    space_uid: S().currentUid
                }
            })
        }
    }
});
function H(e, s, o, n, m, d) {
    const i = l("nav-bar-element")
      , g = l("or-tooltip")
      , k = y("orch-anchor");
    return a(),
    v("div", {
        class: C(["navbar-actions", {
            mobile: e.$device.isMobile
        }])
    }, [(a(!0),
    v(z, null, L(e.navActions, t => (a(),
    b(g, {
        key: t.key,
        content: t.disabled ? e.$t("navTabs.errors.shouldBeMember") : t.label,
        placement: "right",
        offset: 15
    }, {
        default: G( () => [_(c(i, {
            class: C(["navbar-action", {
                active: t.key === e.activeScreen
            }]),
            item: t,
            disabled: t.disabled,
            active: t.key === e.activeScreen,
            onClick: $ => e.selectActiveScreen(t)
        }, null, 8, ["class", "item", "disabled", "active", "onClick"]), [[k, t, "navbar-action"]])]),
        _: 2
    }, 1032, ["content"]))), 128))], 2)
}
const J = B(Y, [["render", H], ["__scopeId", "data-v-0c6a7293"]])
  , K = f({
    __name: "SettingsControl",
    setup(e) {
        const s = p( () => T().loading)
          , o = p( () => w().one(T()._uid))
          , n = p( () => (M()?.name ?? "").startsWith("space_uid-settings"))
          , m = p( () => [{
            icon: "settings",
            label: h("userSettings.accountSettings"),
            handler: d
        }, {
            icon: "person",
            label: h("userSettings.profile"),
            handler: () => A().open("info", w().one(T()._uid))
        }])
          , d = () => x({
            name: "space_uid-settings-account",
            params: {
                space_uid: M().params.space_uid
            },
            query: {
                return_url: M().fullPath
            },
            replace: !0
        });
        return (i, g) => {
            const k = l("or-avatar")
              , t = l("or-entity-avatar")
              , $ = y("ctx-menu");
            return s.value || !o.value ? _((a(),
            b(k, {
                key: 0,
                class: "user-avatar",
                placeholder: !0,
                size: "medium-plus"
            }, null, 512)), [[$, {
                options: m.value,
                entity: i.$space
            }]]) : _((a(),
            b(t, {
                key: 1,
                class: "user-avatar",
                entity: o.value,
                size: "medium-plus",
                "has-border": n.value,
                button: !0,
                tabindex: "0",
                onClick: D(d, ["stop"])
            }, null, 8, ["entity", "has-border"])), [[$, {
                options: m.value,
                entity: i.$space
            }]])
        }
    }
})
  , Q = f({
    __name: "ThemeControl",
    setup(e) {
        const s = () => r().toggleTheme()
          , o = p( () => [{
            label: h("userSettings.pages.config.theme.light"),
            selected: r().themeSetting === u.light,
            icon: "light",
            handler: () => r().setTheme(u.light)
        }, {
            label: h("userSettings.pages.config.theme.dark"),
            selected: r().themeSetting === u.dark,
            icon: "dark",
            handler: () => r().setTheme(u.dark)
        }, {
            type: "divider"
        }, {
            label: h("userSettings.pages.config.theme.system"),
            selected: r().themeSetting === u.system,
            icon: () => c(E, null, null),
            handler: () => r().setTheme(u.system)
        }]);
        return (n, m) => {
            const d = l("or-icon")
              , i = y("ctx-menu");
            return _((a(),
            b(d, {
                name: n.$theme === "dark" ? "light" : "dark",
                class: "nav-icon theme-icon",
                button: !0,
                width: "24px",
                height: "24px",
                "is-hover": !1,
                tabindex: "0",
                onClick: D(s, ["stop"])
            }, null, 8, ["name"])), [[i, {
                options: o.value,
                entity: n.$space
            }]])
        }
    }
})
  , X = {
    class: "navbar"
}
  , Z = {
    ref: "navButtons",
    class: "nav-buttons"
}
  , ee = f({
    __name: "index",
    props: {
        activeTab: {}
    },
    setup(e) {
        return (s, o) => {
            const n = y("orch-anchor");
            return _((a(),
            v("nav", X, [c(V, {
                "show-actions": !0
            }), c(J, {
                class: "workspace-tabs",
                "active-tab": e.activeTab
            }, null, 8, ["active-tab"]), O("div", Z, [c(Q), c(K)], 512)])), [[n, void 0, "navbar"]])
        }
    }
})
  , ie = B(ee, [["__scopeId", "data-v-4d3dd1e0"]]);
export {ie as N};
