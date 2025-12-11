import {g as _, b as f, o as v, l as n, U as x, d as h, H as $, r as b, h as g, A as o, u as s, w as B, x as F} from "./B9Tch2p9.js";
import {a as w, s as u, v as m, P as L, B as N, Q as I} from "#entry";
import {C as P} from "./CTEUlaOm.js";
import {N as R} from "./CKdsdZms.js";
import "./DVHQIg-6.js";
import "./kKrnZc_O.js";
import "./DCxyz_Wi.js";
import "./TTmWOU_t.js";
import "./C_NKgEAb.js";
import "./Blo3CUa_.js";
import "./BTeq1YWB.js";
import "./CtBBKx3r.js";
import "./Dg51yJp6.js";
import "./BLaXQDOe.js";
import "./BOqxOhVO.js";
import "./B2lQqXLs.js";
const U = _({
    name: "ChatPlaceholder",
    methods: {}
})
  , k = {
    class: "no-selected-chat-page"
}
  , A = {
    class: "main-message"
};
function O(d, c, e, a, p, l) {
    return v(),
    f("div", k, [n("div", A, x(d.$t("emptyStates.chats.chatsBody.title")), 1)])
}
const T = w(U, [["render", O], ["__scopeId", "data-v-eb0de888"]])
  , V = {
    class: "chats-bar-showcase md:w-[300px] sm:w-[300px] max-sm:w-[200px]"
}
  , z = "showcase-chat"
  , D = "showcase-chat"
  , E = _({
    __name: "ShowcaseChat",
    setup(d) {
        const c = u.main_chat_uid
          , e = h( () => m().repo(D))
          , a = e.value.addLayer({
            index: 0,
            type: $.TASK,
            _uid: c,
            chat_uid: c
        });
        a.chat.open(),
        a.info.close(),
        I(a),
        L(e.value);
        const p = h( () => e.value.chat())
          , l = t => {
            m().open("chat", t, {
                repo: z,
                init: !0
            })
        }
          , r = b(!1)
          , y = () => {
            r.value = !0
        }
          , C = () => {
            r.value = !1
        }
        ;
        return (t, H) => {
            const S = g("layers");
            return v(),
            f("div", {
                class: F(["showcase-fade-container", {
                    "is-focused": s(r) || t.$ctxMenu.isOpen()
                }])
            }, [n("div", {
                class: "showcase-chat w-full h-full glare-effect",
                onFocusin: y,
                onFocusout: C
            }, [o(R, {
                "active-tab": "chats",
                class: "navbar-showcase"
            }), n("div", V, [o(P, {
                "show-header": !0,
                "is-active": i => s(p)?._uid === i._uid,
                "list-override": s(u).visible_chats_uids.map(i => s(N)().one(i)),
                onSelect: l
            }, null, 8, ["is-active", "list-override"])]), o(S, {
                "space-uid": t.$spacesStore.currentUid,
                repo: s(e)._uid
            }, {
                default: B( () => [o(T)]),
                _: 1
            }, 8, ["space-uid", "repo"])], 32)], 2)
        }
    }
})
  , ce = w(E, [["__scopeId", "data-v-d23bda0e"]]);
export {ce as default};
