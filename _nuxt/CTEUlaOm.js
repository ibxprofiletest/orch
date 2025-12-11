import {ag as H, aU as ve, aV as Ie, D as pe, a as N, z as fe, G as x, aW as se, B, M as ae, i as ce, v as we, u as Me, aX as de, W as $e, T as Ae, aY as W, S as Le} from "#entry";
import {r as O, u as i, p as ne, d as f, g as j, h as w, c as M, o, b as c, A as _, y as b, G as Te, l as U, U as C, a7 as ie, w as E, H as V, V as G, W as Be, v as X, i as oe, j as Q, k as D, f as Oe, b2 as Ue, ak as he, J as Ee, aj as Pe, x as me, aA as Ve} from "./B9Tch2p9.js";
import {u as Re} from "./kKrnZc_O.js";
import {a as J} from "./DCxyz_Wi.js";
import {L as Fe} from "./TTmWOU_t.js";
import {O as Ne} from "./C_NKgEAb.js";
import {V as je} from "./Blo3CUa_.js";
import {C as Z} from "./BTeq1YWB.js";
import {P as qe} from "./Dg51yJp6.js";
function He({selected: t, items: d, left: a="left", right: r="right", reveal: l="reveal", hide: v="hide", none: p="none"}) {
    const u = O(i(p));
    return ne( () => i(t), (m, n) => {
        const g = i(d)
          , S = g.indexOf(m)
          , k = g.indexOf(n);
        S === k ? u.value = i(p) : S === -1 || k === -1 ? S === -1 && k !== -1 ? u.value = i(v) : S !== -1 && k === -1 && (u.value = i(l)) : S > k ? u.value = i(a) : u.value = i(r)
    }
    ),
    {
        transition: u
    }
}
const Ge = t => ({
    noChatsContent: f( () => ({
        "unread-muted": {
            title: H().t("emptyStates.chats.chatsList.unread.title"),
            subTitle: H().t("emptyStates.chats.chatsList.unread.description"),
            emoji: "🤘"
        },
        favorite: {
            title: H().t("emptyStates.chats.chatsList.favorite.title"),
            subTitle: H().t("emptyStates.chats.chatsList.favorite.description"),
            emoji: "❤️"
        }
    })[i(t)] ?? null)
})
  , De = j({
    name: "ChatsSelector",
    mixins: [Ie],
    props: {
        modelValue: {
            type: String,
            required: !0
        }
    },
    data() {
        return {
            position: {},
            scrollLeft: 0
        }
    },
    computed: {
        chatsOptions: ve,
        localeLabelTabs() {
            return this.chatsOptions.forEach(t => {
                t.label = this.$t(`chatBarTabs.${t.key}`)
            }
            ),
            this.chatsOptions
        }
    },
    methods: {
        onMoveTab({tabKey: t, oldIndex: d, newIndex: a}) {
            if (d === a)
                return;
            const r = pe().chatTabsOrder
              , l = r.indexOf(t)
              , v = r.indexOf(this.chatsOptions[a].key);
            r.splice(v, 0, r.splice(l, 1)[0])
        },
        onMousewheel(t) {
            const d = this.$refs.chatsTabs.$el;
            d.scrollLeft += t.deltaY
        }
    }
});
function Ke(t, d, a, r, l, v) {
    const p = w("or-tabs");
    return o(),
    M(p, {
        ref: "chatsTabs",
        modelValue: t.value,
        "onUpdate:modelValue": d[0] || (d[0] = u => t.value = u),
        class: "chats-selector-heading",
        tabs: t.localeLabelTabs,
        "draggable-name": "chat-tab",
        "dragging-enabled": !0,
        onMousewheel: t.onMousewheel,
        onMoveTab: t.onMoveTab
    }, null, 8, ["modelValue", "tabs", "onMousewheel", "onMoveTab"])
}
const Ye = N(De, [["render", Ke], ["__scopeId", "data-v-7a0dbad5"]])
  , ze = {
    key: 0,
    class: "chat-item-divider"
}
  , We = j({
    __name: "ChatItemWrapper",
    props: {
        source: {},
        index: {},
        isActive: {
            type: Function
        },
        highlightedIndex: {},
        lastPinnedIndex: {}
    },
    emits: ["select"],
    setup(t) {
        const d = t
          , a = f( () => d.source.isPinned && d.index === d.lastPinnedIndex);
        return (r, l) => (o(),
        c("div", null, [_(Z, {
            entity: t.source,
            "is-active": t.isActive,
            "is-highlighted": t.highlightedIndex === t.index,
            onSelect: l[0] || (l[0] = v => r.$emit("select", v, t.source))
        }, null, 8, ["entity", "is-active", "is-highlighted"]), a.value ? (o(),
        c("div", ze)) : b("", !0)]))
    }
})
  , Je = N(We, [["__scopeId", "data-v-c7209050"]])
  , Xe = {
    class: "group-title-content"
}
  , Qe = {
    key: 0,
    class: "last-message-author"
}
  , Ze = {
    key: 1,
    class: "last-message-author"
}
  , et = {
    key: 2,
    class: "highlight"
}
  , tt = j({
    __name: "SearchChatItemWrapper",
    props: {
        source: {},
        isActive: {
            type: Function
        },
        index: {},
        highlightedIndex: {}
    },
    emits: ["select", "mark-read"],
    setup(t, {emit: d}) {
        const a = t
          , r = d
          , l = fe().one(a.source.data?.sender_uuid || "")
          , v = f( () => {
            const m = a.source.data?.created_at;
            return m instanceof Date ? Te().fromDate(m) : m
        }
        )
          , p = a.source.title === "chat" ? x("entities.chat", 2) : a.source.title === "message" ? x("entities.message", 2) : x("entities.archived", 2);
        function u(m) {
            if (a.source.type === "chat")
                return r("select", m, a.source.source);
            a.source.type === "message" && !a.isActive(a.source.source) && a.source.data && (r("select", m, a.source.source),
            se(a.source.source, a.source.data._uid)),
            X( () => {
                const n = a.source.type === "message" && a.source.data ? a.source.data._uid : a.source.source._uid;
                a.source.source?.MessagesHistory.focusAt(n)
            }
            )
        }
        return (m, n) => {
            const g = w("highlight")
              , S = w("pretty-date");
            return o(),
            c("div", null, [t.source.index === 0 ? (o(),
            c("div", {
                key: t.source.type,
                class: "group-title"
            }, [U("div", Xe, C(i(p)), 1)])) : b("", !0), _(Z, {
                entity: t.source.source,
                "is-active": t.isActive,
                "search-data": t.source.highlight.title,
                "search-data-type": t.source.type,
                "show-starred-mark": !1,
                "is-highlighted": t.highlightedIndex === t.index,
                onClick: u
            }, ie({
                _: 2
            }, [t.source.type === "message" && t.source.data ? {
                name: "preview",
                fn: E( () => [i(l)._uid === m.$user.uid ? (o(),
                c("span", Qe, " You: ")) : t.source.source.__typename !== i(V).PERSONAL ? (o(),
                c("span", Ze, C(i(l)?.first_name) + ":  ", 1)) : b("", !0), t.source.highlight.content && t.source.highlight.content.length || t.source.highlight.file_name && t.source.highlight.file_name.length ? (o(),
                c("span", et, [(o(!0),
                c(G, null, Be(t.source.highlight.content || t.source.highlight.file_name, (k, P) => (o(),
                M(g, {
                    key: P,
                    class: "message-part-text",
                    highlight: k
                }, null, 8, ["highlight"]))), 128))])) : b("", !0), t.source.data ? (o(),
                M(S, {
                    key: 3,
                    class: "message-time",
                    time: i(v),
                    type: "date-or-time"
                }, null, 8, ["time"])) : b("", !0)]),
                key: "0"
            } : void 0]), 1032, ["entity", "is-active", "search-data", "search-data-type", "is-highlighted"])])
        }
    }
})
  , st = N(tt, [["__scopeId", "data-v-f0487b81"]])
  , at = {
    key: 0,
    class: "last-message-author"
}
  , nt = {
    key: 1,
    class: "last-message-author"
}
  , it = j({
    __name: "StarredChatItemWrapper",
    props: {
        source: {},
        isActive: {
            type: Function
        },
        index: {},
        highlightedIndex: {}
    },
    emits: ["select"],
    setup(t, {emit: d}) {
        const a = t
          , r = d
          , l = B().one(a.source.chat_uid)
          , v = fe().one(a.source.sender_uuid);
        function p(u) {
            l?.MessagesHistory.focusAt(a.source.message_uid),
            l && !a.isActive(l) && r("select", u, l)
        }
        return (u, m) => {
            const n = w("pretty-date");
            return i(l) && i(v) ? (o(),
            M(Z, {
                key: 0,
                entity: i(l),
                "show-starred-mark": !1,
                "is-highlighted": t.highlightedIndex === t.index,
                onClick: p
            }, {
                preview: E( () => [i(v)._uid === u.$user.uid ? (o(),
                c("span", at, " You: ")) : i(l).__typename !== i(V).PERSONAL ? (o(),
                c("span", nt, C(i(v)?.first_name) + ":  ", 1)) : b("", !0), _(qe, {
                    source: t.source,
                    "source-type": "mention"
                }, null, 8, ["source"]), _(n, {
                    class: "message-time",
                    time: t.source.message_timestamp,
                    type: "date-or-time"
                }, null, 8, ["time"])]),
                _: 1
            }, 8, ["entity", "is-highlighted"])) : b("", !0)
        }
    }
})
  , ot = N(it, [["__scopeId", "data-v-b1ae0c1b"]])
  , ut = {
    key: 1
}
  , rt = {
    key: 4,
    class: "group-action"
}
  , lt = j({
    __name: "UnreadChatItemWrapper",
    props: {
        source: {},
        isActive: {
            type: Function
        },
        onMarkRead: {
            type: Function
        }
    },
    emits: ["select", "collapse-group"],
    setup(t) {
        const {t: d} = H()
          , a = t
          , r = d(`unreadGroups.${a.source.type}`)
          , l = O(!1)
          , v = f( () => [{
            icon: "eye",
            label: () => x("ctxMenu.chatCtxMenu.firstLevel.markAsRead", {
                count: a.source.count
            }),
            handler: p
        }])
          , p = () => {
            l.value = !0,
            a.onMarkRead(a.source.type).finally( () => l.value = !1)
        }
          , u = f( () => pe().chatUnreadSectionExpander);
        return (m, n) => {
            const g = w("or-expand-icon")
              , S = w("or-animation-loading")
              , k = w("or-button")
              , P = oe("ctx-menu");
            return o(),
            c("div", null, [t.source.index === 0 ? Q((o(),
            c("div", {
                key: t.source.type,
                class: "group-title"
            }, [u.value ? (o(),
            M(g, {
                key: 0,
                expanded: !t.source.collapsed,
                class: "group-title-icon",
                width: m.$device.isMobile ? "24px" : "20px",
                height: m.$device.isMobile ? "24px" : "20px",
                "hover-color": "var(--color-warm-graphite)",
                style: {
                    width: "24px",
                    height: "24px"
                },
                left: !0
            }, null, 8, ["expanded", "width", "height"])) : (o(),
            c("div", ut)), D(" " + C(i(r)) + " ", 1), n[1] || (n[1] = U("div", {
                style: {
                    flex: "1"
                }
            }, null, -1)), l.value ? (o(),
            M(S, {
                key: 2
            })) : t.source.type === "updates" ? (o(),
            M(k, {
                key: 3,
                type: "link",
                inline: !0,
                padding: "0",
                class: "group-action",
                onClick: ae(p, ["stop"])
            }, {
                default: E( () => [D(C(i(x)("ctxMenu.chatCtxMenu.firstLevel.markAsRead", {
                    count: t.source.count
                })), 1)]),
                _: 1
            })) : (o(),
            c("div", rt, C(t.source.count), 1))])), [[P, {
                entity: t.source,
                options: v.value
            }]]) : b("", !0), t.source.collapsed ? b("", !0) : (o(),
            M(Z, {
                key: 1,
                entity: t.source.item,
                "is-active": t.isActive,
                onSelect: n[0] || (n[0] = R => m.$emit("select", R, t.source.item))
            }, null, 8, ["entity", "is-active"]))])
        }
    }
})
  , ct = N(lt, [["__scopeId", "data-v-185d6374"]])
  , dt = {
    key: 1,
    class: "action-block"
}
  , ht = {
    class: "chats-list-wrapper"
}
  , mt = {
    key: 0,
    class: "skeletons chats-list-container"
}
  , vt = {
    key: 1,
    class: "no-chats"
}
  , pt = {
    class: "no-chats-header emoji"
}
  , ft = {
    class: "no-chats-header title"
}
  , gt = {
    class: "no-chats-header sub-title"
}
  , yt = {
    class: "no-chats-header"
}
  , kt = j({
    __name: "index",
    props: {
        showCreateButton: {
            type: Boolean,
            default: !0
        },
        autoFocusSearch: {
            type: Boolean,
            default: !1
        },
        tab: {
            default: null
        },
        showHeader: {
            type: Boolean,
            default: !0
        },
        showActionBlock: {
            type: Boolean,
            default: !0
        },
        searchKey: {
            default: "chatsBar"
        },
        isActive: {
            type: Function,
            default: () => !1
        },
        excludeChat: {
            type: Function,
            default: () => !0
        },
        listOverride: {
            default: null
        }
    },
    emits: ["select", "create-chat"],
    setup(t, {emit: d}) {
        const a = Le("list/chats")
          , r = t
          , l = d
          , v = O()
          , p = O()
          , u = f( () => B().search[r.searchKey])
          , m = f( () => B().isLoading)
          , n = f({
            get() {
                return u.value.query ? "search" : r.tab ?? (B().tab || "all")
            },
            set(s) {
                s !== n.value && (s !== "search" && (u.value.query = ""),
                B().tab = s)
            }
        })
          , g = f( () => ve().map(s => s.key))
          , {transition: S} = He({
            selected: n,
            items: g,
            left: "move-left",
            right: "move-right",
            hide: "move-top",
            reveal: "move-bottom"
        })
          , {noChatsContent: k} = Ge(n)
          , P = O([])
          , R = f( () => u.value.query ? B().found(r.searchKey) : n.value === "recent" ? B().byType(n.value, r.excludeChat) : r.listOverride && n.value === "all" ? r.listOverride : B().byType(n.value, r.excludeChat))
          , K = O([])
          , Y = O(new Set)
          , $ = O({})
          , I = Oe({
            mentioned: J(a, "unread/mentioned", !0).isExpanded,
            tasks: J(a, "unread/tasks", !0).isExpanded,
            other: J(a, "unread/other", !0).isExpanded,
            updates: J(a, "unread/updates", !0).isExpanded
        })
          , A = f( () => {
            const s = {
                mentioned: [],
                tasks: [],
                other: [],
                updates: []
            };
            return K.value.slice().sort(Ue).forEach(e => {
                const h = e.__typename
                  , L = ce().byChat(e._uid).length
                  , y = !e.hasSignificantMessages;
                h === V.PERSONAL || L ? ((e.isUnread || !$.value[e._uid]) && ($.value[e._uid] = "mentioned"),
                s.mentioned.push({
                    _uid: e._uid,
                    item: e,
                    type: "mentioned",
                    collapsed: !I.mentioned,
                    index: s.mentioned.length
                })) : h === "task" || h === "project" ? e.isUnread || !$.value[e._uid] ? y ? ($.value[e._uid] = "updates",
                s.updates.push({
                    _uid: e._uid,
                    item: e,
                    type: "updates",
                    collapsed: !I.updates,
                    index: s.updates.length
                })) : ($.value[e._uid] = "tasks",
                s.tasks.push({
                    _uid: e._uid,
                    item: e,
                    type: "tasks",
                    collapsed: !I.tasks,
                    index: s.tasks.length
                })) : s[$.value[e._uid]].push({
                    _uid: e._uid,
                    item: e,
                    type: $.value[e._uid],
                    collapsed: !I[$.value[e._uid]],
                    index: s[$.value[e._uid]].length
                }) : s.other.push({
                    _uid: e._uid,
                    item: e,
                    type: "other",
                    collapsed: !I.other,
                    index: s.other.length
                })
            }
            ),
            s.mentioned[0] && (s.mentioned[0].count = s.mentioned.length),
            s.tasks[0] && (s.tasks[0].count = s.tasks.length),
            s.other[0] && (s.other[0].count = s.other.length),
            s.updates[0] && (s.updates[0].count = s.updates.length),
            s
        }
        )
          , ge = f( () => [].concat(I.mentioned ? A.value.mentioned : A.value.mentioned.slice(0, 1)).concat(I.tasks ? A.value.tasks : A.value.tasks.slice(0, 1)).concat(I.other ? A.value.other : A.value.other.slice(0, 1)).concat(I.updates ? A.value.updates : A.value.updates.slice(0, 1)));
        ne( () => [we().layers().filter(s => s.chat.isOpen).map(s => s._uid), R.value], ([s,e]) => {
            if (n.value !== "unread-muted") {
                $.value = {},
                Y.value = new Set;
                return
            }
            const h = e.filter(y => !Y.value.has(y._uid))
              , L = [...new Set(K.value.concat(h.map(y => (Y.value.add(y._uid),
            y))))];
            K.value = L.filter(y => {
                const q = y.isUnread || s.includes(y._uid);
                return q || Y.value.delete(y._uid),
                q
            }
            )
        }
        , {
            immediate: !0,
            deep: !0
        });
        async function ye(s="updates") {
            const e = A.value[s];
            for (let h = 0; h < e.length; h += 300)
                await Ve(L => e.forEach( ({item: y}) => y.isUnread && y.markRead({
                    unread: !1,
                    batch: L
                })))
        }
        function ke(s) {
            I[s] = !I[s]
        }
        const xe = f( () => ce().bySpace(Me().currentUid, !0).sort( (s, e) => +e.message_timestamp - +s.message_timestamp))
          , F = f( () => n.value === "starred" ? xe.value : n.value === "recent" ? P.value : n.value === "unread-muted" ? ge.value : R.value)
          , be = f( () => {
            const s = F.value.slice().reverse().findIndex(h => h instanceof he && h.isPinned);
            if (s === -1 || n.value !== "all")
                return -1;
            const e = F.value.length - 1 - s;
            return e === F.value.length - 1 ? -1 : e
        }
        )
          , Ce = f( () => u.value.query && r.searchKey !== "forwarding" ? st : n.value === "starred" ? ot : n.value === "unread-muted" ? ct : Je)
          , {position: ee} = Re({
            list: () => F.value,
            listRef: v,
            initialIndex: -1,
            input: () => p.value?.$el,
            onEnter: (s, e) => {
                if (e instanceof he)
                    z(s, e);
                else if (n.value === "starred") {
                    const h = B().one(e.chat_uid);
                    if (!h)
                        return;
                    z(s, h),
                    "message_uid"in e && X( () => se(h, e.message_uid))
                } else
                    n.value === "search" && (z(s, e.source),
                    e.data && X( () => se(e.source, e.data._uid)))
            }
            ,
            onTab: s => {
                const e = g.value.indexOf(n.value);
                if (e === -1) {
                    n.value = g.value[0];
                    return
                }
                if (s.shiftKey) {
                    const L = e - 1;
                    n.value = g.value[L] ?? g.value[g.value.length - 1];
                    return
                }
                const h = e + 1;
                n.value = g.value[h] ?? g.value[0]
            }
        });
        ne( () => n.value, s => {
            ee.value > -1 && (ee.value = 0);
            const e = R.value;
            s === "unread-muted" ? K.value = e.slice() : s === "recent" && (P.value = e.slice())
        }
        , {
            immediate: !0
        });
        const te = O(!1);
        function ue() {
            const s = window.getSelection()?.toString();
            s ? (u.value.query = s,
            X( () => p.value?.focus())) : p.value?.focus()
        }
        function z(s, e) {
            p.value?.blur(),
            l("select", e, s)
        }
        const re = f( () => ({
            all: "task",
            personal: null,
            task: "task",
            project: "project",
            group: "group",
            channel: "channel",
            "assigned-to-me": "task",
            team: null,
            unread: null,
            "unread-muted": null,
            recent: null,
            favorite: null,
            starred: null,
            search: null,
            meeting: null
        })[n.value] || null);
        function le(s={
            type: re.value
        }) {
            l("create-chat", s)
        }
        const _e = () => [{
            _uid: V.TASK,
            name: x("entities.task", 1),
            icon: W.task
        }, {
            _uid: V.PROJECT,
            name: x("entities.project", 1),
            icon: W.project
        }, {
            _uid: V.GROUP,
            name: x("entities.group", 1),
            icon: W.group
        }, {
            _uid: V.CHANNEL,
            name: x("entities.channel", 1),
            icon: W.channel
        }].map(e => ({
            label: () => [_(w("or-icon"), {
                name: e.icon,
                width: "20px",
                height: "20px",
                color: "var(--color-secondary)"
            }, null), _("span", null, [e.name])],
            stayOnClick: !0,
            key: e._uid,
            className: "create-chat-item",
            handler: () => {}
        }));
        return Ee( () => {
            de.add(ue, "__CHATS_BAR__SEARCH__")
        }
        ),
        Pe( () => {
            de.remove(ue)
        }
        ),
        (s, e) => {
            const h = w("or-icon")
              , L = w("or-skeleton")
              , y = w("or-button")
              , q = oe("orch-anchor")
              , Se = oe("focus");
            return o(),
            c("div", {
                class: "chats-bar",
                onContextmenu: e[5] || (e[5] = ae( () => {}
                , ["prevent", "stop"]))
            }, [t.showHeader ? (o(),
            M(Fe, {
                key: 0
            }, ie({
                _: 2
            }, [t.showCreateButton && s.$space.isMember ? {
                name: "actions",
                fn: E( () => [_(Ne, {
                    "offset-v": 8,
                    class: "create-chat-selector",
                    "ctx-options": _e,
                    "ctx-style": {
                        padding: "8px",
                        "min-width": "148px",
                        width: "148px"
                    },
                    "no-hover": !0,
                    disabled: !1
                }, {
                    default: E( () => [Q(_(h, {
                        name: "edit",
                        width: "20px",
                        height: "20px",
                        class: me(["create-chat-selector-icon", {
                            active: !0
                        }]),
                        button: !0
                    }, null, 512), [[q, void 0, "chats-bar--create-chat-button"]])]),
                    _: 1
                })]),
                key: "0"
            } : void 0]), 1024)) : b("", !0), t.showActionBlock ? (o(),
            c("div", dt, [Q(_($e, {
                ref_key: "chatSearchInput",
                ref: p,
                modelValue: u.value.query,
                "onUpdate:modelValue": e[0] || (e[0] = T => u.value.query = T),
                icon: "search",
                type: "search",
                class: me(["chats-search-input", {
                    active: u.value.query?.trim()
                }]),
                cancelable: t.autoFocusSearch ? "value" : "value;focus",
                placeholder: i(x)("inputPlaceholders.search"),
                clearable: !0,
                blurable: s.$device.isMobile,
                onFocus: e[1] || (e[1] = T => te.value = !0),
                onBlur: e[2] || (e[2] = T => te.value = !1)
            }, null, 8, ["modelValue", "class", "cancelable", "placeholder", "blurable"]), [[Se, t.autoFocusSearch]])])) : b("", !0), t.showHeader ? (o(),
            M(Ye, {
                key: 2,
                modelValue: n.value,
                "onUpdate:modelValue": e[3] || (e[3] = T => n.value = T),
                onCreateChat: le
            }, null, 8, ["modelValue"])) : b("", !0), U("div", ht, [_(Ae, {
                name: i(S)
            }, {
                default: E( () => [Q((o(),
                c("div", {
                    key: n.value,
                    class: "chats-list"
                }, [!R.value.length && n.value !== "unread-muted" && m.value ? (o(),
                c("div", mt, [_(L, {
                    count: 10,
                    type: "grid",
                    image: !1,
                    "grid-lines": {
                        1: "55px",
                        2: "104px",
                        3: "250px"
                    },
                    "background-color": "transparent",
                    "lines-border-radius": "4px",
                    height: "82px",
                    width: "100%",
                    p: "0 var(--indent-left-menu-padding)"
                })])) : F.value.length ? b("", !0) : (o(),
                c("div", vt, [u.value.query && u.value.loading ? (o(),
                c(G, {
                    key: 0
                }, [e[6] || (e[6] = U("div", {
                    class: "loading-bar"
                }, null, -1)), D(" " + C(i(x)("searchingStateList.searching")), 1)], 64)) : u.value.query ? (o(),
                c(G, {
                    key: 1
                }, [D(C(i(x)("searchingStateList.notFound")), 1)], 64)) : i(k) ? (o(),
                c(G, {
                    key: 2
                }, [U("span", pt, C(i(k).emoji), 1), U("span", ft, C(i(k).title), 1), U("span", gt, C(i(k).subTitle), 1)], 64)) : (o(),
                c(G, {
                    key: 3
                }, [U("span", yt, C(i(x)("emptyStates.chats.chatsList.all.title")), 1), s.$space.isMember && re.value ? (o(),
                M(y, {
                    key: 0,
                    type: "secondary",
                    class: "create-button",
                    onClick: e[4] || (e[4] = ae(T => le(), ["stop"]))
                }, {
                    default: E( () => [D(C(i(x)("emptyStates.chats.chatsList.all.button")), 1)]),
                    _: 1
                })) : b("", !0)], 64))])), _(i(je), {
                    ref_key: "chatsList",
                    ref: v,
                    class: "chats-list-container",
                    "data-key": T => T.type + T._uid,
                    "data-sources": F.value,
                    "data-component": Ce.value,
                    "estimate-size": 86,
                    "item-wrapper": !0,
                    "extra-props": {
                        highlightedIndex: te.value ? i(ee) : -1,
                        isActive: t.isActive,
                        lastPinnedIndex: be.value,
                        onSelect: z,
                        class: "chat-list-item",
                        onMarkRead: ye,
                        onCollapseGroup: ke
                    },
                    keeps: 7
                }, ie({
                    _: 2
                }, [m.value ? {
                    name: "header",
                    fn: E( () => [e[7] || (e[7] = U("div", {
                        class: "loading-bar"
                    }, null, -1))]),
                    key: "0"
                } : void 0]), 1032, ["data-key", "data-sources", "data-component", "extra-props"])])), [[q, void 0, "chats-list"]])]),
                _: 1
            }, 8, ["name"])])], 32)
        }
    }
})
  , At = N(kt, [["__scopeId", "data-v-28393d72"]]);
export {At as C};
