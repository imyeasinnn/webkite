import {
    a as e,
    i as t,
    n,
    o as r,
    r as i,
    s as a,
    t as o
} from "./index-DeP7Jmel.js";
var s = a(i(), 1),
    c = (0, s.createContext)({});

function l(e) {
    let t = (0, s.useRef)(null);
    return t.current === null && (t.current = e()), t.current
}
var u = typeof window < `u` ? s.useLayoutEffect : s.useEffect,
    d = (0, s.createContext)(null);

function f(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}

function p(e, t) {
    let n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
var m = (e, t, n) => n > t ? t : n < e ? e : n,
    h = {},
    g = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
    _ = e => typeof e == `object` && !!e,
    v = e => /^0[^.\s]+$/u.test(e);

function y(e) {
    let t;
    return () => (t === void 0 && (t = e()), t)
}
var b = e => e,
    x = (...e) => e.reduce((e, t) => n => t(e(n))),
    S = (e, t, n) => {
        let r = t - e;
        return r ? (n - e) / r : 1
    },
    C = class {
        constructor() {
            this.subscriptions = []
        }
        add(e) {
            return f(this.subscriptions, e), () => p(this.subscriptions, e)
        }
        notify(e, t, n) {
            let r = this.subscriptions.length;
            if (r)
                if (r === 1) this.subscriptions[0](e, t, n);
                else
                    for (let i = 0; i < r; i++) {
                        let r = this.subscriptions[i];
                        r && r(e, t, n)
                    }
        }
        getSize() {
            return this.subscriptions.length
        }
        clear() {
            this.subscriptions.length = 0
        }
    },
    w = e => e * 1e3,
    T = e => e / 1e3,
    E = (e, t) => t ? 1e3 / t * e : 0,
    D = (e, t, n) => {
        let r = t - e;
        return ((n - e) % r + r) % r + e
    },
    O = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
    k = 1e-7,
    A = 12;

function j(e, t, n, r, i) {
    let a, o, s = 0;
    do o = t + (n - t) / 2, a = O(o, r, i) - e, a > 0 ? n = o : t = o; while (Math.abs(a) > k && ++s < A);
    return o
}

function M(e, t, n, r) {
    if (e === t && n === r) return b;
    let i = t => j(t, 0, 1, e, n);
    return e => e === 0 || e === 1 ? e : O(i(e), t, r)
}
var N = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
    P = e => t => 1 - e(1 - t),
    ee = M(.33, 1.53, .69, .99),
    F = P(ee),
    te = N(F),
    ne = e => e >= 1 ? 1 : (e *= 2) < 1 ? .5 * F(e) : .5 * (2 - 2 ** (-10 * (e - 1))),
    re = e => 1 - Math.sin(Math.acos(e)),
    ie = P(re),
    I = N(re),
    L = M(.42, 0, 1, 1),
    ae = M(0, 0, .58, 1),
    oe = M(.42, 0, .58, 1),
    R = e => Array.isArray(e) && typeof e[0] != `number`;

function se(e, t) {
    return R(e) ? e[D(0, e.length, t)] : e
}
var ce = e => Array.isArray(e) && typeof e[0] == `number`,
    le = {
        linear: b,
        easeIn: L,
        easeInOut: oe,
        easeOut: ae,
        circIn: re,
        circInOut: I,
        circOut: ie,
        backIn: F,
        backInOut: te,
        backOut: ee,
        anticipate: ne
    },
    ue = e => typeof e == `string`,
    de = e => {
        if (ce(e)) {
            e.length;
            let [t, n, r, i] = e;
            return M(t, n, r, i)
        } else if (ue(e)) return le[e], `${e}`, le[e];
        return e
    },
    fe = [`setup`, `read`, `resolveKeyframes`, `preUpdate`, `update`, `preRender`, `render`, `postRender`];

function pe(e) {
    let t = new Set,
        n = new Set,
        r = !1,
        i = !1,
        a = new WeakSet,
        o = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        };

    function s(t) {
        a.has(t) && (c.schedule(t), e()), t(o)
    }
    let c = {
        schedule: (e, i = !1, o = !1) => {
            let s = o && r ? t : n;
            return i && a.add(e), s.add(e), e
        },
        cancel: e => {
            n.delete(e), a.delete(e)
        },
        process: e => {
            if (o = e, r) {
                i = !0;
                return
            }
            r = !0;
            let a = t;
            t = n, n = a, t.forEach(s), t.clear(), r = !1, i && (i = !1, c.process(e))
        }
    };
    return c
}
var me = 40;

function he(e, t) {
    let n = !1,
        r = !0,
        i = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        a = () => n = !0,
        o = fe.reduce((e, t) => (e[t] = pe(a), e), {}),
        {
            setup: s,
            read: c,
            resolveKeyframes: l,
            preUpdate: u,
            update: d,
            preRender: f,
            render: p,
            postRender: m
        } = o,
        g = () => {
            let a = h.useManualTiming,
                o = a ? i.timestamp : performance.now();
            n = !1, a || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(o - i.timestamp, me), 1)), i.timestamp = o, i.isProcessing = !0, s.process(i), c.process(i), l.process(i), u.process(i), d.process(i), f.process(i), p.process(i), m.process(i), i.isProcessing = !1, n && t && (r = !1, e(g))
        },
        _ = () => {
            n = !0, r = !0, i.isProcessing || e(g)
        };
    return {
        schedule: fe.reduce((e, t) => {
            let r = o[t];
            return e[t] = (e, t = !1, i = !1) => (n || _(), r.schedule(e, t, i)), e
        }, {}),
        cancel: e => {
            for (let t = 0; t < fe.length; t++) o[fe[t]].cancel(e)
        },
        state: i,
        steps: o
    }
}
var {
    schedule: z,
    cancel: ge,
    state: B,
    steps: _e
} = he(typeof requestAnimationFrame < `u` ? requestAnimationFrame : b, !0), ve;

function ye() {
    ve = void 0
}
var be = {
        now: () => (ve === void 0 && be.set(B.isProcessing || h.useManualTiming ? B.timestamp : performance.now()), ve),
        set: e => {
            ve = e, queueMicrotask(ye)
        }
    },
    xe = e => t => typeof t == `string` && t.startsWith(e),
    Se = xe(`--`),
    Ce = xe(`var(--`),
    we = e => Ce(e) ? Te.test(e.split(`/*`)[0].trim()) : !1,
    Te = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;

function Ee(e) {
    return typeof e == `string` ? e.split(`/*`)[0].includes(`var(--`) : !1
}
var De = {
        test: e => typeof e == `number`,
        parse: parseFloat,
        transform: e => e
    },
    Oe = { ...De,
        transform: e => m(0, 1, e)
    },
    ke = { ...De,
        default: 1
    },
    Ae = e => Math.round(e * 1e5) / 1e5,
    je = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function Me(e) {
    return e == null
}
var Ne = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    Pe = (e, t) => n => !!(typeof n == `string` && Ne.test(n) && n.startsWith(e) || t && !Me(n) && Object.prototype.hasOwnProperty.call(n, t)),
    Fe = (e, t, n) => r => {
        if (typeof r != `string`) return r;
        let [i, a, o, s] = r.match(je);
        return {
            [e]: parseFloat(i),
            [t]: parseFloat(a),
            [n]: parseFloat(o),
            alpha: s === void 0 ? 1 : parseFloat(s)
        }
    },
    Ie = e => m(0, 255, e),
    Le = { ...De,
        transform: e => Math.round(Ie(e))
    },
    Re = {
        test: Pe(`rgb`, `red`),
        parse: Fe(`red`, `green`, `blue`),
        transform: ({
            red: e,
            green: t,
            blue: n,
            alpha: r = 1
        }) => `rgba(` + Le.transform(e) + `, ` + Le.transform(t) + `, ` + Le.transform(n) + `, ` + Ae(Oe.transform(r)) + `)`
    };

function ze(e) {
    let t = ``,
        n = ``,
        r = ``,
        i = ``;
    return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
var Be = {
        test: Pe(`#`),
        parse: ze,
        transform: Re.transform
    },
    Ve = e => ({
        test: t => typeof t == `string` && t.endsWith(e) && t.split(` `).length === 1,
        parse: parseFloat,
        transform: t => `${t}${e}`
    }),
    He = Ve(`deg`),
    Ue = Ve(`%`),
    V = Ve(`px`),
    We = Ve(`vh`),
    Ge = Ve(`vw`),
    Ke = { ...Ue,
        parse: e => Ue.parse(e) / 100,
        transform: e => Ue.transform(e * 100)
    },
    qe = {
        test: Pe(`hsl`, `hue`),
        parse: Fe(`hue`, `saturation`, `lightness`),
        transform: ({
            hue: e,
            saturation: t,
            lightness: n,
            alpha: r = 1
        }) => `hsla(` + Math.round(e) + `, ` + Ue.transform(Ae(t)) + `, ` + Ue.transform(Ae(n)) + `, ` + Ae(Oe.transform(r)) + `)`
    },
    H = {
        test: e => Re.test(e) || Be.test(e) || qe.test(e),
        parse: e => Re.test(e) ? Re.parse(e) : qe.test(e) ? qe.parse(e) : Be.parse(e),
        transform: e => typeof e == `string` ? e : e.hasOwnProperty(`red`) ? Re.transform(e) : qe.transform(e),
        getAnimatableNone: e => {
            let t = H.parse(e);
            return t.alpha = 0, H.transform(t)
        }
    },
    Je = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function Ye(e) {
    return isNaN(e) && typeof e == `string` && (e.match(je) ? .length || 0) + (e.match(Je) ? .length || 0) > 0
}
var Xe = `number`,
    Ze = `color`,
    Qe = `var`,
    $e = `var(`,
    et = "${}",
    tt = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function nt(e) {
    let t = e.toString(),
        n = [],
        r = {
            color: [],
            number: [],
            var: []
        },
        i = [],
        a = 0;
    return {
        values: n,
        split: t.replace(tt, e => (H.test(e) ? (r.color.push(a), i.push(Ze), n.push(H.parse(e))) : e.startsWith($e) ? (r.var.push(a), i.push(Qe), n.push(e)) : (r.number.push(a), i.push(Xe), n.push(parseFloat(e))), ++a, et)).split(et),
        indexes: r,
        types: i
    }
}

function rt(e) {
    return nt(e).values
}

function it({
    split: e,
    types: t
}) {
    let n = e.length;
    return r => {
        let i = ``;
        for (let a = 0; a < n; a++)
            if (i += e[a], r[a] !== void 0) {
                let e = t[a];
                e === Xe ? i += Ae(r[a]) : e === Ze ? i += H.transform(r[a]) : i += r[a]
            }
        return i
    }
}

function at(e) {
    return it(nt(e))
}
var ot = e => typeof e == `number` ? 0 : H.test(e) ? H.getAnimatableNone(e) : e,
    st = (e, t) => typeof e == `number` ? t ? .trim().endsWith(`/`) ? e : 0 : ot(e);

function ct(e) {
    let t = nt(e);
    return it(t)(t.values.map((e, n) => st(e, t.split[n])))
}
var lt = {
    test: Ye,
    parse: rt,
    createTransformer: at,
    getAnimatableNone: ct
};

function ut(e, t, n) {
    return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}

function dt({
    hue: e,
    saturation: t,
    lightness: n,
    alpha: r
}) {
    e /= 360, t /= 100, n /= 100;
    let i = 0,
        a = 0,
        o = 0;
    if (!t) i = a = o = n;
    else {
        let r = n < .5 ? n * (1 + t) : n + t - n * t,
            s = 2 * n - r;
        i = ut(s, r, e + 1 / 3), a = ut(s, r, e), o = ut(s, r, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(a * 255),
        blue: Math.round(o * 255),
        alpha: r
    }
}

function ft(e, t) {
    return n => n > 0 ? t : e
}
var U = (e, t, n) => e + (t - e) * n,
    pt = (e, t, n) => {
        let r = e * e,
            i = n * (t * t - r) + r;
        return i < 0 ? 0 : Math.sqrt(i)
    },
    mt = [Be, Re, qe],
    ht = e => mt.find(t => t.test(e));

function gt(e) {
    let t = ht(e);
    if (`${e}`, !t) return !1;
    let n = t.parse(e);
    return t === qe && (n = dt(n)), n
}
var _t = (e, t) => {
        let n = gt(e),
            r = gt(t);
        if (!n || !r) return ft(e, t);
        let i = { ...n
        };
        return e => (i.red = pt(n.red, r.red, e), i.green = pt(n.green, r.green, e), i.blue = pt(n.blue, r.blue, e), i.alpha = U(n.alpha, r.alpha, e), Re.transform(i))
    },
    vt = new Set([`none`, `hidden`]);

function yt(e, t) {
    return vt.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
}

function bt(e, t) {
    return n => U(e, t, n)
}

function xt(e) {
    return typeof e == `number` ? bt : typeof e == `string` ? we(e) ? ft : H.test(e) ? _t : Tt : Array.isArray(e) ? St : typeof e == `object` ? H.test(e) ? _t : Ct : ft
}

function St(e, t) {
    let n = [...e],
        r = n.length,
        i = e.map((e, n) => xt(e)(e, t[n]));
    return e => {
        for (let t = 0; t < r; t++) n[t] = i[t](e);
        return n
    }
}

function Ct(e, t) {
    let n = { ...e,
            ...t
        },
        r = {};
    for (let i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = xt(e[i])(e[i], t[i]));
    return e => {
        for (let t in r) n[t] = r[t](e);
        return n
    }
}

function wt(e, t) {
    let n = [],
        r = {
            color: 0,
            var: 0,
            number: 0
        };
    for (let i = 0; i < t.values.length; i++) {
        let a = t.types[i],
            o = e.indexes[a][r[a]];
        n[i] = e.values[o] ? ? 0, r[a]++
    }
    return n
}
var Tt = (e, t) => {
    let n = lt.createTransformer(t),
        r = nt(e),
        i = nt(t);
    return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? vt.has(e) && !i.values.length || vt.has(t) && !r.values.length ? yt(e, t) : x(St(wt(r, i), i.values), n) : (`${e}${t}`, ft(e, t))
};

function Et(e, t, n) {
    return typeof e == `number` && typeof t == `number` && typeof n == `number` ? U(e, t, n) : xt(e)(e, t)
}
var Dt = e => {
        let t = ({
            timestamp: t
        }) => e(t);
        return {
            start: (e = !0) => z.update(t, e),
            stop: () => ge(t),
            now: () => B.isProcessing ? B.timestamp : be.now()
        }
    },
    Ot = (e, t, n = 10) => {
        let r = ``,
            i = Math.max(Math.round(t / n), 2);
        for (let t = 0; t < i; t++) r += Math.round(e(t / (i - 1)) * 1e4) / 1e4 + `, `;
        return `linear(${r.substring(0,r.length-2)})`
    },
    kt = 2e4;

function At(e) {
    let t = 0,
        n = e.next(t);
    for (; !n.done && t < 2e4;) t += 50, n = e.next(t);
    return t >= 2e4 ? 1 / 0 : t
}

function jt(e, t = 100, n) {
    let r = n({ ...e,
            keyframes: [0, t]
        }),
        i = Math.min(At(r), kt);
    return {
        type: `keyframes`,
        ease: e => r.next(i * e).value / t,
        duration: T(i)
    }
}
var W = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
};

function Mt(e, t) {
    return e * Math.sqrt(1 - t * t)
}
var Nt = 12;

function Pt(e, t, n) {
    let r = n;
    for (let n = 1; n < Nt; n++) r -= e(r) / t(r);
    return r
}
var Ft = .001;

function It({
    duration: e = W.duration,
    bounce: t = W.bounce,
    velocity: n = W.velocity,
    mass: r = W.mass
}) {
    let i, a;
    W.maxDuration;
    let o = 1 - t;
    o = m(W.minDamping, W.maxDamping, o), e = m(W.minDuration, W.maxDuration, T(e)), o < 1 ? (i = t => {
        let r = t * o,
            i = r * e,
            a = r - n,
            s = Mt(t, o),
            c = Math.exp(-i);
        return Ft - a / s * c
    }, a = t => {
        let r = t * o * e,
            a = r * n + n,
            s = o ** 2 * t ** 2 * e,
            c = Math.exp(-r),
            l = Mt(t ** 2, o);
        return (-i(t) + Ft > 0 ? -1 : 1) * ((a - s) * c) / l
    }) : (i = t => -.001 + Math.exp(-t * e) * ((t - n) * e + 1), a = t => Math.exp(-t * e) * ((n - t) * (e * e)));
    let s = 5 / e,
        c = Pt(i, a, s);
    if (e = w(e), isNaN(c)) return {
        stiffness: W.stiffness,
        damping: W.damping,
        duration: e
    }; {
        let t = c ** 2 * r;
        return {
            stiffness: t,
            damping: o * 2 * Math.sqrt(r * t),
            duration: e
        }
    }
}
var Lt = [`duration`, `bounce`],
    Rt = [`stiffness`, `damping`, `mass`];

function zt(e, t) {
    return t.some(t => e[t] !== void 0)
}

function Bt(e) {
    let t = {
        velocity: W.velocity,
        stiffness: W.stiffness,
        damping: W.damping,
        mass: W.mass,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!zt(e, Rt) && zt(e, Lt))
        if (t.velocity = 0, e.visualDuration) {
            let n = e.visualDuration,
                r = 2 * Math.PI / (n * 1.2),
                i = r * r,
                a = 2 * m(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
            t = { ...t,
                mass: W.mass,
                stiffness: i,
                damping: a
            }
        } else {
            let n = It({ ...e,
                velocity: 0
            });
            t = { ...t,
                ...n,
                mass: W.mass
            }, t.isResolvedFromDuration = !0
        }
    return t
}

function Vt(e = W.visualDuration, t = W.bounce) {
    let n = typeof e == `object` ? e : {
            visualDuration: e,
            keyframes: [0, 1],
            bounce: t
        },
        {
            restSpeed: r,
            restDelta: i
        } = n,
        a = n.keyframes[0],
        o = n.keyframes[n.keyframes.length - 1],
        s = {
            done: !1,
            value: a
        },
        {
            stiffness: c,
            damping: l,
            mass: u,
            duration: d,
            velocity: f,
            isResolvedFromDuration: p
        } = Bt({ ...n,
            velocity: -T(n.velocity || 0)
        }),
        m = f || 0,
        h = l / (2 * Math.sqrt(c * u)),
        g = o - a,
        _ = T(Math.sqrt(c / u)),
        v = Math.abs(g) < 5;
    r || = v ? W.restSpeed.granular : W.restSpeed.default, i || = v ? W.restDelta.granular : W.restDelta.default;
    let y, b, x, S, C, E;
    if (h < 1) x = Mt(_, h), S = (m + h * _ * g) / x, y = e => o - Math.exp(-h * _ * e) * (S * Math.sin(x * e) + g * Math.cos(x * e)), C = h * _ * S + g * x, E = h * _ * g - S * x, b = e => Math.exp(-h * _ * e) * (C * Math.sin(x * e) + E * Math.cos(x * e));
    else if (h === 1) {
        y = e => o - Math.exp(-_ * e) * (g + (m + _ * g) * e);
        let e = m + _ * g;
        b = t => Math.exp(-_ * t) * (_ * e * t - m)
    } else {
        let e = _ * Math.sqrt(h * h - 1);
        y = t => {
            let n = Math.exp(-h * _ * t),
                r = Math.min(e * t, 300);
            return o - n * ((m + h * _ * g) * Math.sinh(r) + e * g * Math.cosh(r)) / e
        };
        let t = (m + h * _ * g) / e,
            n = h * _ * t - g * e,
            r = h * _ * g - t * e;
        b = t => {
            let i = Math.exp(-h * _ * t),
                a = Math.min(e * t, 300);
            return i * (n * Math.sinh(a) + r * Math.cosh(a))
        }
    }
    let D = {
        calculatedDuration: p && d || null,
        velocity: e => w(b(e)),
        next: e => {
            if (!p && h < 1) {
                let t = Math.exp(-h * _ * e),
                    n = Math.sin(x * e),
                    a = Math.cos(x * e),
                    c = o - t * (S * n + g * a),
                    l = w(t * (C * n + E * a));
                return s.done = Math.abs(l) <= r && Math.abs(o - c) <= i, s.value = s.done ? o : c, s
            }
            let t = y(e);
            if (p) s.done = e >= d;
            else {
                let n = w(b(e));
                s.done = Math.abs(n) <= r && Math.abs(o - t) <= i
            }
            return s.value = s.done ? o : t, s
        },
        toString: () => {
            let e = Math.min(At(D), kt),
                t = Ot(t => D.next(e * t).value, e, 30);
            return e + `ms ` + t
        },
        toTransition: () => {}
    };
    return D
}
Vt.applyToOptions = e => {
    let t = jt(e, 100, Vt);
    return e.ease = t.ease, e.duration = w(t.duration), e.type = `keyframes`, e
};
var Ht = 5;

function Ut(e, t, n) {
    let r = Math.max(t - Ht, 0);
    return E(n - e(r), t - r)
}

function Wt({
    keyframes: e,
    velocity: t = 0,
    power: n = .8,
    timeConstant: r = 325,
    bounceDamping: i = 10,
    bounceStiffness: a = 500,
    modifyTarget: o,
    min: s,
    max: c,
    restDelta: l = .5,
    restSpeed: u
}) {
    let d = e[0],
        f = {
            done: !1,
            value: d
        },
        p = e => s !== void 0 && e < s || c !== void 0 && e > c,
        m = e => s === void 0 ? c : c === void 0 || Math.abs(s - e) < Math.abs(c - e) ? s : c,
        h = n * t,
        g = d + h,
        _ = o === void 0 ? g : o(g);
    _ !== g && (h = _ - d);
    let v = e => -h * Math.exp(-e / r),
        y = e => _ + v(e),
        b = e => {
            let t = v(e),
                n = y(e);
            f.done = Math.abs(t) <= l, f.value = f.done ? _ : n
        },
        x, S, C = e => {
            p(f.value) && (x = e, S = Vt({
                keyframes: [f.value, m(f.value)],
                velocity: Ut(y, e, f.value),
                damping: i,
                stiffness: a,
                restDelta: l,
                restSpeed: u
            }))
        };
    return C(0), {
        calculatedDuration: null,
        next: e => {
            let t = !1;
            return !S && x === void 0 && (t = !0, b(e), C(e)), x !== void 0 && e >= x ? S.next(e - x) : (!t && b(e), f)
        }
    }
}

function Gt(e, t, n) {
    let r = [],
        i = n || h.mix || Et,
        a = e.length - 1;
    for (let n = 0; n < a; n++) {
        let a = i(e[n], e[n + 1]);
        t && (a = x(Array.isArray(t) ? t[n] || b : t, a)), r.push(a)
    }
    return r
}

function Kt(e, t, {
    clamp: n = !0,
    ease: r,
    mixer: i
} = {}) {
    let a = e.length;
    if (t.length, a === 1) return () => t[0];
    if (a === 2 && t[0] === t[1]) return () => t[1];
    let o = e[0] === e[1];
    e[0] > e[a - 1] && (e = [...e].reverse(), t = [...t].reverse());
    let s = Gt(t, r, i),
        c = s.length,
        l = n => {
            if (o && n < e[0]) return t[0];
            let r = 0;
            if (c > 1)
                for (; r < e.length - 2 && !(n < e[r + 1]); r++);
            let i = S(e[r], e[r + 1], n);
            return s[r](i)
        };
    return n ? t => l(m(e[0], e[a - 1], t)) : l
}

function qt(e, t) {
    let n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        let i = S(0, t, r);
        e.push(U(n, 1, i))
    }
}

function Jt(e) {
    let t = [0];
    return qt(t, e.length - 1), t
}

function Yt(e, t) {
    return e.map(e => e * t)
}

function Xt(e, t) {
    return e.map(() => t || oe).splice(0, e.length - 1)
}

function Zt({
    duration: e = 300,
    keyframes: t,
    times: n,
    ease: r = `easeInOut`
}) {
    let i = R(r) ? r.map(de) : de(r),
        a = {
            done: !1,
            value: t[0]
        },
        o = Kt(Yt(n && n.length === t.length ? n : Jt(t), e), t, {
            ease: Array.isArray(i) ? i : Xt(t, i)
        });
    return {
        calculatedDuration: e,
        next: t => (a.value = o(t), a.done = t >= e, a)
    }
}
var Qt = e => e !== null;

function $t(e, {
    repeat: t,
    repeatType: n = `loop`
}, r, i = 1) {
    let a = e.filter(Qt),
        o = i < 0 || t && n !== `loop` && t % 2 == 1 ? 0 : a.length - 1;
    return !o || r === void 0 ? a[o] : r
}
var en = {
    decay: Wt,
    inertia: Wt,
    tween: Zt,
    keyframes: Zt,
    spring: Vt
};

function tn(e) {
    typeof e.type == `string` && (e.type = en[e.type])
}
var nn = class {
        constructor() {
            this.updateFinished()
        }
        get finished() {
            return this._finished
        }
        updateFinished() {
            this._finished = new Promise(e => {
                this.resolve = e
            })
        }
        notifyFinished() {
            this.resolve()
        }
        then(e, t) {
            return this.finished.then(e, t)
        }
    },
    rn = e => e / 100,
    an = class extends nn {
        constructor(e) {
            super(), this.state = `idle`, this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
                done: !1,
                value: void 0
            }, this.stop = () => {
                let {
                    motionValue: e
                } = this.options;
                e && e.updatedAt !== be.now() && this.tick(be.now()), this.isStopped = !0, this.state !== `idle` && (this.teardown(), this.options.onStop ? .())
            }, this.options = e, this.initAnimation(), this.play(), e.autoplay === !1 && this.pause()
        }
        initAnimation() {
            let {
                options: e
            } = this;
            tn(e);
            let {
                type: t = Zt,
                repeat: n = 0,
                repeatDelay: r = 0,
                repeatType: i,
                velocity: a = 0
            } = e, {
                keyframes: o
            } = e, s = t || Zt;
            s !== Zt && typeof o[0] != `number` && (this.mixKeyframes = x(rn, Et(o[0], o[1])), o = [0, 100]);
            let c = s({ ...e,
                keyframes: o
            });
            i === `mirror` && (this.mirroredGenerator = s({ ...e,
                keyframes: [...o].reverse(),
                velocity: -a
            })), c.calculatedDuration === null && (c.calculatedDuration = At(c));
            let {
                calculatedDuration: l
            } = c;
            this.calculatedDuration = l, this.resolvedDuration = l + r, this.totalDuration = this.resolvedDuration * (n + 1) - r, this.generator = c
        }
        updateTime(e) {
            let t = Math.round(e - this.startTime) * this.playbackSpeed;
            this.holdTime === null ? this.currentTime = t : this.currentTime = this.holdTime
        }
        tick(e, t = !1) {
            let {
                generator: n,
                totalDuration: r,
                mixKeyframes: i,
                mirroredGenerator: a,
                resolvedDuration: o,
                calculatedDuration: s
            } = this;
            if (this.startTime === null) return n.next(0);
            let {
                delay: c = 0,
                keyframes: l,
                repeat: u,
                repeatType: d,
                repeatDelay: f,
                type: p,
                onUpdate: h,
                finalKeyframe: g
            } = this.options;
            this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - r / this.speed, this.startTime)), t ? this.currentTime = e : this.updateTime(e);
            let _ = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1),
                v = this.playbackSpeed >= 0 ? _ < 0 : _ > r;
            this.currentTime = Math.max(_, 0), this.state === `finished` && this.holdTime === null && (this.currentTime = r);
            let y = this.currentTime,
                b = n;
            if (u) {
                let e = Math.min(this.currentTime, r) / o,
                    t = Math.floor(e),
                    n = e % 1;
                !n && e >= 1 && (n = 1), n === 1 && t--, t = Math.min(t, u + 1), t % 2 && (d === `reverse` ? (n = 1 - n, f && (n -= f / o)) : d === `mirror` && (b = a)), y = m(0, 1, n) * o
            }
            let x;
            v ? (this.delayState.value = l[0], x = this.delayState) : x = b.next(y), i && !v && (x.value = i(x.value));
            let {
                done: S
            } = x;
            !v && s !== null && (S = this.playbackSpeed >= 0 ? this.currentTime >= r : this.currentTime <= 0);
            let C = this.holdTime === null && (this.state === `finished` || this.state === `running` && S);
            return C && p !== Wt && (x.value = $t(l, this.options, g, this.speed)), h && h(x.value), C && this.finish(), x
        }
        then(e, t) {
            return this.finished.then(e, t)
        }
        get duration() {
            return T(this.calculatedDuration)
        }
        get iterationDuration() {
            let {
                delay: e = 0
            } = this.options || {};
            return this.duration + T(e)
        }
        get time() {
            return T(this.currentTime)
        }
        set time(e) {
            e = w(e), this.currentTime = e, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = `paused`, this.holdTime = e, this.tick(e))
        }
        getGeneratorVelocity() {
            let e = this.currentTime;
            if (e <= 0) return this.options.velocity || 0;
            if (this.generator.velocity) return this.generator.velocity(e);
            let t = this.generator.next(e).value;
            return Ut(e => this.generator.next(e).value, e, t)
        }
        get speed() {
            return this.playbackSpeed
        }
        set speed(e) {
            let t = this.playbackSpeed !== e;
            t && this.driver && this.updateTime(be.now()), this.playbackSpeed = e, t && this.driver && (this.time = T(this.currentTime))
        }
        play() {
            if (this.isStopped) return;
            let {
                driver: e = Dt,
                startTime: t
            } = this.options;
            this.driver || = e(e => this.tick(e)), this.options.onPlay ? .();
            let n = this.driver.now();
            this.state === `finished` ? (this.updateFinished(), this.startTime = n) : this.holdTime === null ? this.startTime || = t ? ? n : this.startTime = n - this.holdTime, this.state === `finished` && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = `running`, this.driver.start()
        }
        pause() {
            this.state = `paused`, this.updateTime(be.now()), this.holdTime = this.currentTime
        }
        complete() {
            this.state !== `running` && this.play(), this.state = `finished`, this.holdTime = null
        }
        finish() {
            this.notifyFinished(), this.teardown(), this.state = `finished`, this.options.onComplete ? .()
        }
        cancel() {
            this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel ? .()
        }
        teardown() {
            this.state = `idle`, this.stopDriver(), this.startTime = this.holdTime = null
        }
        stopDriver() {
            this.driver && = (this.driver.stop(), void 0)
        }
        sample(e) {
            return this.startTime = 0, this.tick(e, !0)
        }
        attachTimeline(e) {
            return this.options.allowFlatten && (this.options.type = `keyframes`, this.options.ease = `linear`, this.initAnimation()), this.driver ? .stop(), e.observe(this)
        }
    };

function on(e) {
    for (let t = 1; t < e.length; t++) e[t] ? ? (e[t] = e[t - 1])
}
var sn = e => e * 180 / Math.PI,
    cn = e => un(sn(Math.atan2(e[1], e[0]))),
    ln = {
        x: 4,
        y: 5,
        translateX: 4,
        translateY: 5,
        scaleX: 0,
        scaleY: 3,
        scale: e => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
        rotate: cn,
        rotateZ: cn,
        skewX: e => sn(Math.atan(e[1])),
        skewY: e => sn(Math.atan(e[2])),
        skew: e => (Math.abs(e[1]) + Math.abs(e[2])) / 2
    },
    un = e => (e %= 360, e < 0 && (e += 360), e),
    dn = cn,
    fn = e => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
    pn = e => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
    mn = {
        x: 12,
        y: 13,
        z: 14,
        translateX: 12,
        translateY: 13,
        translateZ: 14,
        scaleX: fn,
        scaleY: pn,
        scale: e => (fn(e) + pn(e)) / 2,
        rotateX: e => un(sn(Math.atan2(e[6], e[5]))),
        rotateY: e => un(sn(Math.atan2(-e[2], e[0]))),
        rotateZ: dn,
        rotate: dn,
        skewX: e => sn(Math.atan(e[4])),
        skewY: e => sn(Math.atan(e[1])),
        skew: e => (Math.abs(e[1]) + Math.abs(e[4])) / 2
    };

function hn(e) {
    return +!!e.includes(`scale`)
}

function gn(e, t) {
    if (!e || e === `none`) return hn(t);
    let n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),
        r, i;
    if (n) r = mn, i = n;
    else {
        let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        r = ln, i = t
    }
    if (!i) return hn(t);
    let a = r[t],
        o = i[1].split(`,`).map(vn);
    return typeof a == `function` ? a(o) : o[a]
}
var _n = (e, t) => {
    let {
        transform: n = `none`
    } = getComputedStyle(e);
    return gn(n, t)
};

function vn(e) {
    return parseFloat(e.trim())
}
var yn = [`transformPerspective`, `x`, `y`, `z`, `translateX`, `translateY`, `translateZ`, `scale`, `scaleX`, `scaleY`, `rotate`, `rotateX`, `rotateY`, `rotateZ`, `skew`, `skewX`, `skewY`],
    bn = new Set([...yn, `pathRotation`]),
    xn = e => e === De || e === V,
    Sn = new Set([`x`, `y`, `z`]),
    Cn = yn.filter(e => !Sn.has(e));

function wn(e) {
    let t = [];
    return Cn.forEach(n => {
        let r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]), r.set(+!!n.startsWith(`scale`)))
    }), t
}
var Tn = {
    width: ({
        x: e
    }, {
        paddingLeft: t = `0`,
        paddingRight: n = `0`,
        boxSizing: r
    }) => {
        let i = e.max - e.min;
        return r === `border-box` ? i : i - parseFloat(t) - parseFloat(n)
    },
    height: ({
        y: e
    }, {
        paddingTop: t = `0`,
        paddingBottom: n = `0`,
        boxSizing: r
    }) => {
        let i = e.max - e.min;
        return r === `border-box` ? i : i - parseFloat(t) - parseFloat(n)
    },
    top: (e, {
        top: t
    }) => parseFloat(t),
    left: (e, {
        left: t
    }) => parseFloat(t),
    bottom: ({
        y: e
    }, {
        top: t
    }) => parseFloat(t) + (e.max - e.min),
    right: ({
        x: e
    }, {
        left: t
    }) => parseFloat(t) + (e.max - e.min),
    x: (e, {
        transform: t
    }) => gn(t, `x`),
    y: (e, {
        transform: t
    }) => gn(t, `y`)
};
Tn.translateX = Tn.x, Tn.translateY = Tn.y;
var En = new Set,
    Dn = !1,
    On = !1,
    kn = !1;

function An() {
    if (On) {
        let e = Array.from(En).filter(e => e.needsMeasurement),
            t = new Set(e.map(e => e.element)),
            n = new Map;
        t.forEach(e => {
            let t = wn(e);
            t.length && (n.set(e, t), e.render())
        }), e.forEach(e => e.measureInitialState()), t.forEach(e => {
            e.render();
            let t = n.get(e);
            t && t.forEach(([t, n]) => {
                e.getValue(t) ? .set(n)
            })
        }), e.forEach(e => e.measureEndState()), e.forEach(e => {
            e.suspendedScrollY !== void 0 && window.scrollTo(0, e.suspendedScrollY)
        })
    }
    On = !1, Dn = !1, En.forEach(e => e.complete(kn)), En.clear()
}

function jn() {
    En.forEach(e => {
        e.readKeyframes(), e.needsMeasurement && (On = !0)
    })
}

function Mn() {
    kn = !0, jn(), An(), kn = !1
}
var Nn = class {
        constructor(e, t, n, r, i, a = !1) {
            this.state = `pending`, this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = t, this.name = n, this.motionValue = r, this.element = i, this.isAsync = a
        }
        scheduleResolve() {
            this.state = `scheduled`, this.isAsync ? (En.add(this), Dn || (Dn = !0, z.read(jn), z.resolveKeyframes(An))) : (this.readKeyframes(), this.complete())
        }
        readKeyframes() {
            let {
                unresolvedKeyframes: e,
                name: t,
                element: n,
                motionValue: r
            } = this;
            if (e[0] === null) {
                let i = r ? .get(),
                    a = e[e.length - 1];
                if (i !== void 0) e[0] = i;
                else if (n && t) {
                    let r = n.readValue(t, a);
                    r != null && (e[0] = r)
                }
                e[0] === void 0 && (e[0] = a), r && i === void 0 && r.set(e[0])
            }
            on(e)
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete(e = !1) {
            this.state = `complete`, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), En.delete(this)
        }
        cancel() {
            this.state === `scheduled` && (En.delete(this), this.state = `pending`)
        }
        resume() {
            this.state === `pending` && this.scheduleResolve()
        }
    },
    Pn = e => e.startsWith(`--`);

function Fn(e, t, n) {
    Pn(t) ? e.style.setProperty(t, n) : e.style[t] = n
}
var In = {};

function Ln(e, t) {
    let n = y(e);
    return () => In[t] ? ? n()
}
var Rn = Ln(() => window.ScrollTimeline !== void 0, `scrollTimeline`),
    zn = Ln(() => {
        try {
            document.createElement(`div`).animate({
                opacity: 0
            }, {
                easing: `linear(0, 1)`
            })
        } catch {
            return !1
        }
        return !0
    }, `linearEasing`),
    Bn = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
    Vn = {
        linear: `linear`,
        ease: `ease`,
        easeIn: `ease-in`,
        easeOut: `ease-out`,
        easeInOut: `ease-in-out`,
        circIn: Bn([0, .65, .55, 1]),
        circOut: Bn([.55, 0, 1, .45]),
        backIn: Bn([.31, .01, .66, -.59]),
        backOut: Bn([.33, 1.53, .69, .99])
    };

function Hn(e, t) {
    if (e) return typeof e == `function` ? zn() ? Ot(e, t) : `ease-out` : ce(e) ? Bn(e) : Array.isArray(e) ? e.map(e => Hn(e, t) || Vn.easeOut) : Vn[e]
}

function Un(e, t, n, {
    delay: r = 0,
    duration: i = 300,
    repeat: a = 0,
    repeatType: o = `loop`,
    ease: s = `easeOut`,
    times: c
} = {}, l = void 0) {
    let u = {
        [t]: n
    };
    c && (u.offset = c);
    let d = Hn(s, i);
    Array.isArray(d) && (u.easing = d);
    let f = {
        delay: r,
        duration: i,
        easing: Array.isArray(d) ? `linear` : d,
        fill: `both`,
        iterations: a + 1,
        direction: o === `reverse` ? `alternate` : `normal`
    };
    return l && (f.pseudoElement = l), e.animate(u, f)
}

function Wn(e) {
    return typeof e == `function` && `applyToOptions` in e
}

function Gn({
    type: e,
    ...t
}) {
    return Wn(e) && zn() ? e.applyToOptions(t) : (t.duration ? ? = 300, t.ease ? ? = `easeOut`, t)
}
var Kn = class extends nn {
        constructor(e) {
            if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !e) return;
            let {
                element: t,
                name: n,
                keyframes: r,
                pseudoElement: i,
                allowFlatten: a = !1,
                finalKeyframe: o,
                onComplete: s
            } = e;
            this.isPseudoElement = !!i, this.allowFlatten = a, this.options = e, e.type;
            let c = Gn(e);
            this.animation = Un(t, n, r, c, i), c.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
                if (this.finishedTime = this.time, !i) {
                    let e = $t(r, this.options, o, this.speed);
                    this.updateMotionValue && this.updateMotionValue(e), Fn(t, n, e), this.animation.cancel()
                }
                s ? .(), this.notifyFinished()
            }
        }
        play() {
            this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === `finished` && this.updateFinished())
        }
        pause() {
            this.animation.pause()
        }
        complete() {
            this.animation.finish ? .()
        }
        cancel() {
            try {
                this.animation.cancel()
            } catch {}
        }
        stop() {
            if (this.isStopped) return;
            this.isStopped = !0;
            let {
                state: e
            } = this;
            e === `idle` || e === `finished` || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel())
        }
        commitStyles() {
            let e = this.options ? .element;
            !this.isPseudoElement && e ? .isConnected && this.animation.commitStyles ? .()
        }
        get duration() {
            let e = this.animation.effect ? .getComputedTiming ? .().duration || 0;
            return T(Number(e))
        }
        get iterationDuration() {
            let {
                delay: e = 0
            } = this.options || {};
            return this.duration + T(e)
        }
        get time() {
            return T(Number(this.animation.currentTime) || 0)
        }
        set time(e) {
            let t = this.finishedTime !== null;
            this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = w(e), t && this.animation.pause()
        }
        get speed() {
            return this.animation.playbackRate
        }
        set speed(e) {
            e < 0 && (this.finishedTime = null), this.animation.playbackRate = e
        }
        get state() {
            return this.finishedTime === null ? this.animation.playState : `finished`
        }
        get startTime() {
            return this.manualStartTime ? ? Number(this.animation.startTime)
        }
        set startTime(e) {
            this.manualStartTime = this.animation.startTime = e
        }
        attachTimeline({
            timeline: e,
            rangeStart: t,
            rangeEnd: n,
            observe: r
        }) {
            return this.allowFlatten && this.animation.effect ? .updateTiming({
                easing: `linear`
            }), this.animation.onfinish = null, e && Rn() ? (this.animation.timeline = e, t && (this.animation.rangeStart = t), n && (this.animation.rangeEnd = n), b) : r(this)
        }
    },
    qn = {
        anticipate: ne,
        backInOut: te,
        circInOut: I
    };

function Jn(e) {
    return e in qn
}

function Yn(e) {
    typeof e.ease == `string` && Jn(e.ease) && (e.ease = qn[e.ease])
}
var Xn = 10,
    Zn = class extends Kn {
        constructor(e) {
            Yn(e), tn(e), super(e), e.startTime !== void 0 && e.autoplay !== !1 && (this.startTime = e.startTime), this.options = e
        }
        updateMotionValue(e) {
            let {
                motionValue: t,
                onUpdate: n,
                onComplete: r,
                element: i,
                ...a
            } = this.options;
            if (!t) return;
            if (e !== void 0) {
                t.set(e);
                return
            }
            let o = new an({ ...a,
                    autoplay: !1
                }),
                s = Math.max(Xn, be.now() - this.startTime),
                c = m(0, Xn, s - Xn),
                l = o.sample(s).value,
                {
                    name: u
                } = this.options;
            i && u && Fn(i, u, l), t.setWithVelocity(o.sample(Math.max(0, s - c)).value, l, c), o.stop()
        }
    },
    Qn = (e, t) => t === `zIndex` ? !1 : !!(typeof e == `number` || Array.isArray(e) || typeof e == `string` && (lt.test(e) || e === `0`) && !e.startsWith(`url(`));

function $n(e) {
    let t = e[0];
    if (e.length === 1) return !0;
    for (let n = 0; n < e.length; n++)
        if (e[n] !== t) return !0
}

function er(e, t, n, r) {
    let i = e[0];
    if (i === null) return !1;
    if (t === `display` || t === `visibility`) return !0;
    let a = e[e.length - 1],
        o = Qn(i, t),
        s = Qn(a, t);
    return `${t}${i}${a}${o?a:i}`, !o || !s ? !1 : $n(e) || (n === `spring` || Wn(n)) && r
}

function tr(e) {
    e.duration = 0, e.type = `keyframes`
}
var nr = new Set([`opacity`, `clipPath`, `filter`, `transform`]),
    rr = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;

function ir(e) {
    for (let t = 0; t < e.length; t++)
        if (typeof e[t] == `string` && rr.test(e[t])) return !0;
    return !1
}
var ar = new Set([`color`, `backgroundColor`, `outlineColor`, `fill`, `stroke`, `borderColor`, `borderTopColor`, `borderRightColor`, `borderBottomColor`, `borderLeftColor`]),
    or = y(() => Object.hasOwnProperty.call(Element.prototype, `animate`));

function sr(e) {
    let {
        motionValue: t,
        name: n,
        repeatDelay: r,
        repeatType: i,
        damping: a,
        type: o,
        keyframes: s
    } = e;
    if (!(t ? .owner ? .current instanceof HTMLElement)) return !1;
    let {
        onUpdate: c,
        transformTemplate: l
    } = t.owner.getProps();
    return or() && n && (nr.has(n) || ar.has(n) && ir(s)) && (n !== `transform` || !l) && !c && !r && i !== `mirror` && a !== 0 && o !== `inertia`
}
var cr = 40,
    lr = class extends nn {
        constructor({
            autoplay: e = !0,
            delay: t = 0,
            type: n = `keyframes`,
            repeat: r = 0,
            repeatDelay: i = 0,
            repeatType: a = `loop`,
            keyframes: o,
            name: s,
            motionValue: c,
            element: l,
            ...u
        }) {
            super(), this.stop = () => {
                this._animation && (this._animation.stop(), this.stopTimeline ? .()), this.keyframeResolver ? .cancel()
            }, this.createdAt = be.now();
            let d = {
                    autoplay: e,
                    delay: t,
                    type: n,
                    repeat: r,
                    repeatDelay: i,
                    repeatType: a,
                    name: s,
                    motionValue: c,
                    element: l,
                    ...u
                },
                f = l ? .KeyframeResolver || Nn;
            this.keyframeResolver = new f(o, (e, t, n) => this.onKeyframesResolved(e, t, d, !n), s, c, l), this.keyframeResolver ? .scheduleResolve()
        }
        onKeyframesResolved(e, t, n, r) {
            this.keyframeResolver = void 0;
            let {
                name: i,
                type: a,
                velocity: o,
                delay: s,
                isHandoff: c,
                onUpdate: l
            } = n;
            this.resolvedAt = be.now();
            let u = !0;
            er(e, i, a, o) || (u = !1, (h.instantAnimations || !s) && l ? .($t(e, n, t)), e[0] = e[e.length - 1], tr(n), n.repeat = 0);
            let d = {
                    startTime: r ? this.resolvedAt && this.resolvedAt - this.createdAt > cr ? this.resolvedAt : this.createdAt : void 0,
                    finalKeyframe: t,
                    ...n,
                    keyframes: e
                },
                f = u && !c && sr(d),
                p = d.motionValue ? .owner ? .current,
                m;
            if (f) try {
                m = new Zn({ ...d,
                    element: p
                })
            } catch {
                m = new an(d)
            } else m = new an(d);
            m.finished.then(() => {
                this.notifyFinished()
            }).catch(b), this.pendingTimeline && = (this.stopTimeline = m.attachTimeline(this.pendingTimeline), void 0), this._animation = m
        }
        get finished() {
            return this._animation ? this.animation.finished : this._finished
        }
        then(e, t) {
            return this.finished.finally(e).then(() => {})
        }
        get animation() {
            return this._animation || (this.keyframeResolver ? .resume(), Mn()), this._animation
        }
        get duration() {
            return this.animation.duration
        }
        get iterationDuration() {
            return this.animation.iterationDuration
        }
        get time() {
            return this.animation.time
        }
        set time(e) {
            this.animation.time = e
        }
        get speed() {
            return this.animation.speed
        }
        get state() {
            return this.animation.state
        }
        set speed(e) {
            this.animation.speed = e
        }
        get startTime() {
            return this.animation.startTime
        }
        attachTimeline(e) {
            return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e, () => this.stop()
        }
        play() {
            this.animation.play()
        }
        pause() {
            this.animation.pause()
        }
        complete() {
            this.animation.complete()
        }
        cancel() {
            this._animation && this.animation.cancel(), this.keyframeResolver ? .cancel()
        }
    },
    ur = class {
        constructor(e) {
            this.stop = () => this.runAll(`stop`), this.animations = e.filter(Boolean)
        }
        get finished() {
            return Promise.all(this.animations.map(e => e.finished))
        }
        getAll(e) {
            return this.animations[0][e]
        }
        setAll(e, t) {
            for (let n = 0; n < this.animations.length; n++) this.animations[n][e] = t
        }
        attachTimeline(e) {
            let t = this.animations.map(t => t.attachTimeline(e));
            return () => {
                t.forEach((e, t) => {
                    e && e(), this.animations[t].stop()
                })
            }
        }
        get time() {
            return this.getAll(`time`)
        }
        set time(e) {
            this.setAll(`time`, e)
        }
        get speed() {
            return this.getAll(`speed`)
        }
        set speed(e) {
            this.setAll(`speed`, e)
        }
        get state() {
            return this.getAll(`state`)
        }
        get startTime() {
            return this.getAll(`startTime`)
        }
        get duration() {
            return dr(this.animations, `duration`)
        }
        get iterationDuration() {
            return dr(this.animations, `iterationDuration`)
        }
        runAll(e) {
            this.animations.forEach(t => t[e]())
        }
        play() {
            this.runAll(`play`)
        }
        pause() {
            this.runAll(`pause`)
        }
        cancel() {
            this.runAll(`cancel`)
        }
        complete() {
            this.runAll(`complete`)
        }
    };

function dr(e, t) {
    let n = 0;
    for (let r = 0; r < e.length; r++) {
        let i = e[r][t];
        i !== null && i > n && (n = i)
    }
    return n
}
var fr = class extends ur {
    then(e, t) {
        return this.finished.finally(e).then(() => {})
    }
};

function pr(e, t, n, r = 0, i = 1) {
    let a = Array.from(e).sort((e, t) => e.sortNodePosition(t)).indexOf(t),
        o = e.size,
        s = (o - 1) * r;
    return typeof n == `function` ? n(a, o) : i === 1 ? a * r : s - a * r
}
var mr = 30,
    hr = e => !isNaN(parseFloat(e)),
    gr = {
        current: void 0
    },
    _r = class {
        constructor(e, t = {}) {
            this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = e => {
                let t = be.now();
                if (this.updatedAt !== t && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(e), this.current !== this.prev && (this.events.change ? .notify(this.current), this.dependents))
                    for (let e of this.dependents) e.dirty()
            }, this.hasAnimated = !1, this.setCurrent(e), this.owner = t.owner
        }
        setCurrent(e) {
            this.current = e, this.updatedAt = be.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = hr(this.current))
        }
        setPrevFrameValue(e = this.current) {
            this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt
        }
        onChange(e) {
            return this.on(`change`, e)
        }
        on(e, t) {
            this.events[e] || (this.events[e] = new C);
            let n = this.events[e].add(t);
            return e === `change` ? () => {
                n(), z.read(() => {
                    this.events.change.getSize() || this.stop()
                })
            } : n
        }
        clearListeners() {
            for (let e in this.events) this.events[e].clear()
        }
        attach(e, t) {
            this.passiveEffect = e, this.stopPassiveEffect = t
        }
        set(e) {
            this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e)
        }
        setWithVelocity(e, t, n) {
            this.set(t), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - n
        }
        jump(e, t = !0) {
            this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, t && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
        }
        dirty() {
            this.events.change ? .notify(this.current)
        }
        addDependent(e) {
            this.dependents || = new Set, this.dependents.add(e)
        }
        removeDependent(e) {
            this.dependents && this.dependents.delete(e)
        }
        get() {
            return gr.current && gr.current.push(this), this.current
        }
        getPrevious() {
            return this.prev
        }
        getVelocity() {
            let e = be.now();
            if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > mr) return 0;
            let t = Math.min(this.updatedAt - this.prevUpdatedAt, mr);
            return E(parseFloat(this.current) - parseFloat(this.prevFrameValue), t)
        }
        start(e) {
            return this.stop(), new Promise(t => {
                this.hasAnimated = !0, this.animation = e(t), this.events.animationStart && this.events.animationStart.notify()
            }).then(() => {
                this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
            })
        }
        stop() {
            this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
        }
        isAnimating() {
            return !!this.animation
        }
        clearAnimation() {
            delete this.animation
        }
        destroy() {
            this.dependents ? .clear(), this.events.destroy ? .notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
        }
    };

function vr(e, t) {
    return new _r(e, t)
}

function yr(e, t) {
    if (e ? .inherit && t) {
        let {
            inherit: n,
            ...r
        } = e;
        return { ...t,
            ...r
        }
    }
    return e
}

function br(e, t) {
    let n = e ? .[t] ? ? e ? .default ? ? e;
    return n === e ? n : yr(n, e)
}
var xr = {
        type: `spring`,
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    },
    Sr = e => ({
        type: `spring`,
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    Cr = {
        type: `keyframes`,
        duration: .8
    },
    wr = {
        type: `keyframes`,
        ease: [.25, .1, .35, 1],
        duration: .3
    },
    Tr = (e, {
        keyframes: t
    }) => t.length > 2 ? Cr : bn.has(e) ? e.startsWith(`scale`) ? Sr(t[1]) : xr : wr,
    Er = new Set([`when`, `delay`, `delayChildren`, `staggerChildren`, `staggerDirection`, `repeat`, `repeatType`, `repeatDelay`, `from`, `elapsed`]);

function Dr(e) {
    for (let t in e)
        if (!Er.has(t)) return !0;
    return !1
}
var Or = (e, t, n, r = {}, i, a) => o => {
        let s = br(r, e) || {},
            c = s.delay || r.delay || 0,
            {
                elapsed: l = 0
            } = r;
        l -= w(c);
        let u = {
            keyframes: Array.isArray(n) ? n : [null, n],
            ease: `easeOut`,
            velocity: t.getVelocity(),
            ...s,
            delay: -l,
            onUpdate: e => {
                t.set(e), s.onUpdate && s.onUpdate(e)
            },
            onComplete: () => {
                o(), s.onComplete && s.onComplete()
            },
            name: e,
            motionValue: t,
            element: a ? void 0 : i
        };
        Dr(s) || Object.assign(u, Tr(e, u)), u.duration && = w(u.duration), u.repeatDelay && = w(u.repeatDelay), u.from !== void 0 && (u.keyframes[0] = u.from);
        let d = !1;
        if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (tr(u), u.delay === 0 && (d = !0)), (h.instantAnimations || h.skipAnimations || i ? .shouldSkipAnimations || s.skipAnimations) && (d = !0, tr(u), u.delay = 0), u.allowFlatten = !s.type && !s.ease, d && !a && t.get() !== void 0) {
            let e = $t(u.keyframes, s);
            if (e !== void 0) {
                z.update(() => {
                    u.onUpdate(e), u.onComplete()
                });
                return
            }
        }
        return s.isSync ? new an(u) : new lr(u)
    },
    kr = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function Ar(e) {
    let t = kr.exec(e);
    if (!t) return [, ];
    let [, n, r, i] = t;
    return [`--${n??r}`, i]
}

function jr(e, t, n = 1) {
    `${e}`;
    let [r, i] = Ar(e);
    if (!r) return;
    let a = window.getComputedStyle(t).getPropertyValue(r);
    if (a) {
        let e = a.trim();
        return g(e) ? parseFloat(e) : e
    }
    return we(i) ? jr(i, t, n + 1) : i
}

function Mr(e) {
    let t = [{}, {}];
    return e ? .values.forEach((e, n) => {
        t[0][n] = e.get(), t[1][n] = e.getVelocity()
    }), t
}

function Nr(e, t, n, r) {
    if (typeof t == `function`) {
        let [i, a] = Mr(r);
        t = t(n === void 0 ? e.custom : n, i, a)
    }
    if (typeof t == `string` && (t = e.variants && e.variants[t]), typeof t == `function`) {
        let [i, a] = Mr(r);
        t = t(n === void 0 ? e.custom : n, i, a)
    }
    return t
}

function Pr(e, t, n) {
    let r = e.getProps();
    return Nr(r, t, n === void 0 ? r.custom : n, e)
}
var Fr = new Set([`width`, `height`, `top`, `left`, `right`, `bottom`, ...yn]),
    Ir = e => Array.isArray(e);

function Lr(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, vr(n))
}

function Rr(e) {
    return Ir(e) ? e[e.length - 1] || 0 : e
}

function zr(e, t) {
    let {
        transitionEnd: n = {},
        transition: r = {},
        ...i
    } = Pr(e, t) || {};
    i = { ...i,
        ...n
    };
    for (let t in i) Lr(e, t, Rr(i[t]))
}
var Br = e => !!(e && e.getVelocity);

function Vr(e) {
    return !!(Br(e) && e.add)
}

function Hr(e, t) {
    let n = e.getValue(`willChange`);
    if (Vr(n)) return n.add(t);
    if (!n && h.WillChange) {
        let n = new h.WillChange(`auto`);
        e.addValue(`willChange`, n), n.add(t)
    }
}

function Ur(e) {
    return e.replace(/([A-Z])/g, e => `-${e.toLowerCase()}`)
}
var Wr = `data-` + Ur(`framerAppearId`);

function Gr(e) {
    return e.props[Wr]
}

function Kr({
    protectedKeys: e,
    needsAnimating: t
}, n) {
    let r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1, r
}

function qr(e, t, {
    delay: n = 0,
    transitionOverride: r,
    type: i
} = {}) {
    let {
        transition: a,
        transitionEnd: o,
        ...s
    } = t, c = e.getDefaultTransition();
    a = a ? yr(a, c) : c;
    let l = a ? .reduceMotion,
        u = a ? .skipAnimations;
    r && (a = r);
    let d = [],
        f = i && e.animationState && e.animationState.getState()[i],
        p = a ? .path;
    p && p.animateVisualElement(e, s, a, n, d);
    for (let t in s) {
        let r = e.getValue(t, e.latestValues[t] ? ? null),
            i = s[t];
        if (i === void 0 || f && Kr(f, t)) continue;
        let o = {
            delay: n,
            ...br(a || {}, t)
        };
        u && (o.skipAnimations = !0);
        let c = r.get();
        if (c !== void 0 && !r.isAnimating() && !Array.isArray(i) && i === c && !o.velocity) {
            z.update(() => r.set(i));
            continue
        }
        let p = !1;
        if (window.MotionHandoffAnimation) {
            let n = Gr(e);
            if (n) {
                let e = window.MotionHandoffAnimation(n, t, z);
                e !== null && (o.startTime = e, p = !0)
            }
        }
        Hr(e, t);
        let m = l ? ? e.shouldReduceMotion;
        r.start(Or(t, r, i, m && Fr.has(t) ? {
            type: !1
        } : o, e, p));
        let h = r.animation;
        h && d.push(h)
    }
    if (o) {
        let t = () => z.update(() => {
            o && zr(e, o)
        });
        d.length ? Promise.all(d).then(t) : t()
    }
    return d
}

function Jr(e, t, n = {}) {
    let r = Pr(e, t, n.type === `exit` ? e.presenceContext ? .custom : void 0),
        {
            transition: i = e.getDefaultTransition() || {}
        } = r || {};
    n.transitionOverride && (i = n.transitionOverride);
    let a = r ? () => Promise.all(qr(e, r, n)) : () => Promise.resolve(),
        o = e.variantChildren && e.variantChildren.size ? (r = 0) => {
            let {
                delayChildren: a = 0,
                staggerChildren: o,
                staggerDirection: s
            } = i;
            return Yr(e, t, r, a, o, s, n)
        } : () => Promise.resolve(),
        {
            when: s
        } = i;
    if (s) {
        let [e, t] = s === `beforeChildren` ? [a, o] : [o, a];
        return e().then(() => t())
    } else return Promise.all([a(), o(n.delay)])
}

function Yr(e, t, n = 0, r = 0, i = 0, a = 1, o) {
    let s = [];
    for (let c of e.variantChildren) c.notify(`AnimationStart`, t), s.push(Jr(c, t, { ...o,
        delay: n + (typeof r == `function` ? 0 : r) + pr(e.variantChildren, c, r, i, a)
    }).then(() => c.notify(`AnimationComplete`, t)));
    return Promise.all(s)
}

function Xr(e, t, n = {}) {
    e.notify(`AnimationStart`, t);
    let r;
    if (Array.isArray(t)) {
        let i = t.map(t => Jr(e, t, n));
        r = Promise.all(i)
    } else if (typeof t == `string`) r = Jr(e, t, n);
    else {
        let i = typeof t == `function` ? Pr(e, t, n.custom) : t;
        r = Promise.all(qr(e, i, n))
    }
    return r.then(() => {
        e.notify(`AnimationComplete`, t)
    })
}
var Zr = {
        test: e => e === `auto`,
        parse: e => e
    },
    Qr = e => t => t.test(e),
    $r = [De, V, Ue, He, Ge, We, Zr],
    ei = e => $r.find(Qr(e));

function ti(e) {
    return typeof e == `number` ? e === 0 : e === null ? !0 : e === `none` || e === `0` || v(e)
}
var ni = new Set([`brightness`, `contrast`, `saturate`, `opacity`]);

function ri(e) {
    let [t, n] = e.slice(0, -1).split(`(`);
    if (t === `drop-shadow`) return e;
    let [r] = n.match(je) || [];
    if (!r) return e;
    let i = n.replace(r, ``),
        a = +!!ni.has(t);
    return r !== n && (a *= 100), t + `(` + a + i + `)`
}
var ii = /\b([a-z-]*)\(.*?\)/gu,
    ai = { ...lt,
        getAnimatableNone: e => {
            let t = e.match(ii);
            return t ? t.map(ri).join(` `) : e
        }
    },
    oi = { ...lt,
        getAnimatableNone: e => {
            let t = lt.parse(e);
            return lt.createTransformer(e)(t.map(e => typeof e == `number` ? 0 : typeof e == `object` ? { ...e,
                alpha: 1
            } : e))
        }
    },
    si = { ...De,
        transform: Math.round
    },
    ci = {
        borderWidth: V,
        borderTopWidth: V,
        borderRightWidth: V,
        borderBottomWidth: V,
        borderLeftWidth: V,
        borderRadius: V,
        borderTopLeftRadius: V,
        borderTopRightRadius: V,
        borderBottomRightRadius: V,
        borderBottomLeftRadius: V,
        width: V,
        maxWidth: V,
        height: V,
        maxHeight: V,
        top: V,
        right: V,
        bottom: V,
        left: V,
        inset: V,
        insetBlock: V,
        insetBlockStart: V,
        insetBlockEnd: V,
        insetInline: V,
        insetInlineStart: V,
        insetInlineEnd: V,
        padding: V,
        paddingTop: V,
        paddingRight: V,
        paddingBottom: V,
        paddingLeft: V,
        paddingBlock: V,
        paddingBlockStart: V,
        paddingBlockEnd: V,
        paddingInline: V,
        paddingInlineStart: V,
        paddingInlineEnd: V,
        margin: V,
        marginTop: V,
        marginRight: V,
        marginBottom: V,
        marginLeft: V,
        marginBlock: V,
        marginBlockStart: V,
        marginBlockEnd: V,
        marginInline: V,
        marginInlineStart: V,
        marginInlineEnd: V,
        fontSize: V,
        backgroundPositionX: V,
        backgroundPositionY: V,
        rotate: He,
        pathRotation: He,
        rotateX: He,
        rotateY: He,
        rotateZ: He,
        scale: ke,
        scaleX: ke,
        scaleY: ke,
        scaleZ: ke,
        skew: He,
        skewX: He,
        skewY: He,
        distance: V,
        translateX: V,
        translateY: V,
        translateZ: V,
        x: V,
        y: V,
        z: V,
        perspective: V,
        transformPerspective: V,
        opacity: Oe,
        originX: Ke,
        originY: Ke,
        originZ: V,
        zIndex: si,
        fillOpacity: Oe,
        strokeOpacity: Oe,
        numOctaves: si
    },
    li = { ...ci,
        color: H,
        backgroundColor: H,
        outlineColor: H,
        fill: H,
        stroke: H,
        borderColor: H,
        borderTopColor: H,
        borderRightColor: H,
        borderBottomColor: H,
        borderLeftColor: H,
        filter: ai,
        WebkitFilter: ai,
        mask: oi,
        WebkitMask: oi
    },
    ui = e => li[e],
    di = new Set([ai, oi]);

function fi(e, t) {
    let n = ui(e);
    return di.has(n) || (n = lt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
var pi = new Set([`auto`, `none`, `0`]);

function mi(e, t, n) {
    let r = 0,
        i;
    for (; r < e.length && !i;) {
        let t = e[r];
        typeof t == `string` && !pi.has(t) && nt(t).values.length && (i = e[r]), r++
    }
    if (i && n)
        for (let r of t) e[r] = fi(n, i)
}
var hi = class extends Nn {
        constructor(e, t, n, r, i) {
            super(e, t, n, r, i, !0)
        }
        readKeyframes() {
            let {
                unresolvedKeyframes: e,
                element: t,
                name: n
            } = this;
            if (!t || !t.current) return;
            super.readKeyframes();
            for (let n = 0; n < e.length; n++) {
                let r = e[n];
                if (typeof r == `string` && (r = r.trim(), we(r))) {
                    let i = jr(r, t.current);
                    i !== void 0 && (e[n] = i), n === e.length - 1 && (this.finalKeyframe = r)
                }
            }
            if (this.resolveNoneKeyframes(), !Fr.has(n) || e.length !== 2) return;
            let [r, i] = e, a = ei(r), o = ei(i);
            if (Ee(r) !== Ee(i) && Tn[n]) {
                this.needsMeasurement = !0;
                return
            }
            if (a !== o)
                if (xn(a) && xn(o))
                    for (let t = 0; t < e.length; t++) {
                        let n = e[t];
                        typeof n == `string` && (e[t] = parseFloat(n))
                    } else Tn[n] && (this.needsMeasurement = !0)
        }
        resolveNoneKeyframes() {
            let {
                unresolvedKeyframes: e,
                name: t
            } = this, n = [];
            for (let t = 0; t < e.length; t++)(e[t] === null || ti(e[t])) && n.push(t);
            n.length && mi(e, n, t)
        }
        measureInitialState() {
            let {
                element: e,
                unresolvedKeyframes: t,
                name: n
            } = this;
            if (!e || !e.current) return;
            n === `height` && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Tn[n](e.measureViewportBox(), window.getComputedStyle(e.current)), t[0] = this.measuredOrigin;
            let r = t[t.length - 1];
            r !== void 0 && e.getValue(n, r).jump(r, !1)
        }
        measureEndState() {
            let {
                element: e,
                name: t,
                unresolvedKeyframes: n
            } = this;
            if (!e || !e.current) return;
            let r = e.getValue(t);
            r && r.jump(this.measuredOrigin, !1);
            let i = n.length - 1,
                a = n[i];
            n[i] = Tn[t](e.measureViewportBox(), window.getComputedStyle(e.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), this.removedTransforms ? .length && this.removedTransforms.forEach(([t, n]) => {
                e.getValue(t).set(n)
            }), this.resolveNoneKeyframes()
        }
    },
    gi = [`borderTopLeftRadius`, `borderTopRightRadius`, `borderBottomRightRadius`, `borderBottomLeftRadius`];

function _i(e, t, n) {
    if (e == null) return [];
    if (e instanceof EventTarget) return [e];
    if (typeof e == `string`) {
        let r = document;
        t && (r = t.current);
        let i = n ? .[e] ? ? r.querySelectorAll(e);
        return i ? Array.from(i) : []
    }
    return Array.from(e).filter(e => e != null)
}
var vi = (e, t) => t && typeof e == `number` ? t.transform(e) : e;

function yi(e) {
    return _(e) && `offsetHeight` in e && !(`ownerSVGElement` in e)
}
var {
    schedule: bi,
    cancel: xi
} = he(queueMicrotask, !1), Si = {
    x: !1,
    y: !1
};

function Ci() {
    return Si.x || Si.y
}

function wi(e) {
    return e === `x` || e === `y` ? Si[e] ? null : (Si[e] = !0, () => {
        Si[e] = !1
    }) : Si.x || Si.y ? null : (Si.x = Si.y = !0, () => {
        Si.x = Si.y = !1
    })
}

function Ti(e, t) {
    let n = _i(e),
        r = new AbortController;
    return [n, {
        passive: !0,
        ...t,
        signal: r.signal
    }, () => r.abort()]
}

function Ei(e) {
    return !(e.pointerType === `touch` || Ci())
}

function Di(e, t, n = {}) {
    let [r, i, a] = Ti(e, n);
    return r.forEach(e => {
        let n = !1,
            r = !1,
            a, o = () => {
                e.removeEventListener(`pointerleave`, u)
            },
            s = e => {
                a && = (a(e), void 0), o()
            },
            c = e => {
                n = !1, window.removeEventListener(`pointerup`, c), window.removeEventListener(`pointercancel`, c), r && (r = !1, s(e))
            },
            l = () => {
                n = !0, window.addEventListener(`pointerup`, c, i), window.addEventListener(`pointercancel`, c, i)
            },
            u = e => {
                if (e.pointerType !== `touch`) {
                    if (n) {
                        r = !0;
                        return
                    }
                    s(e)
                }
            };
        e.addEventListener(`pointerenter`, n => {
            if (!Ei(n)) return;
            r = !1;
            let o = t(e, n);
            typeof o == `function` && (a = o, e.addEventListener(`pointerleave`, u, i))
        }, i), e.addEventListener(`pointerdown`, l, i)
    }), a
}
var Oi = (e, t) => t ? e === t ? !0 : Oi(e, t.parentElement) : !1,
    ki = e => e.pointerType === `mouse` ? typeof e.button != `number` || e.button <= 0 : e.isPrimary !== !1,
    Ai = new Set([`BUTTON`, `INPUT`, `SELECT`, `TEXTAREA`, `A`]);

function ji(e) {
    return Ai.has(e.tagName) || e.isContentEditable === !0
}
var Mi = new Set([`INPUT`, `SELECT`, `TEXTAREA`]);

function Ni(e) {
    return Mi.has(e.tagName) || e.isContentEditable === !0
}
var Pi = new WeakSet;

function Fi(e) {
    return t => {
        t.key === `Enter` && e(t)
    }
}

function Ii(e, t) {
    e.dispatchEvent(new PointerEvent(`pointer` + t, {
        isPrimary: !0,
        bubbles: !0
    }))
}
var Li = (e, t) => {
    let n = e.currentTarget;
    if (!n) return;
    let r = Fi(() => {
        if (Pi.has(n)) return;
        Ii(n, `down`);
        let e = Fi(() => {
            Ii(n, `up`)
        });
        n.addEventListener(`keyup`, e, t), n.addEventListener(`blur`, () => Ii(n, `cancel`), t)
    });
    n.addEventListener(`keydown`, r, t), n.addEventListener(`blur`, () => n.removeEventListener(`keydown`, r), t)
};

function Ri(e) {
    return ki(e) && !Ci()
}
var zi = new WeakSet;

function Bi(e, t, n = {}) {
    let [r, i, a] = Ti(e, n), o = e => {
        let r = e.currentTarget;
        if (!Ri(e) || zi.has(e)) return;
        Pi.add(r), n.stopPropagation && zi.add(e);
        let a = t(r, e),
            o = { ...i,
                capture: !0
            },
            s = (e, t) => {
                window.removeEventListener(`pointerup`, c, o), window.removeEventListener(`pointercancel`, l, o), Pi.has(r) && Pi.delete(r), Ri(e) && typeof a == `function` && a(e, {
                    success: t
                })
            },
            c = e => {
                s(e, r === window || r === document || n.useGlobalTarget || Oi(r, e.target))
            },
            l = e => {
                s(e, !1)
            };
        window.addEventListener(`pointerup`, c, o), window.addEventListener(`pointercancel`, l, o)
    };
    return r.forEach(e => {
        (n.useGlobalTarget ? window : e).addEventListener(`pointerdown`, o, i), yi(e) && (e.addEventListener(`focus`, e => Li(e, i)), !ji(e) && !e.hasAttribute(`tabindex`) && (e.tabIndex = 0))
    }), a
}

function Vi(e) {
    return _(e) && `ownerSVGElement` in e
}
var Hi = new WeakMap,
    Ui, Wi = (e, t, n) => (r, i) => i && i[0] ? i[0][e + `Size`] : Vi(r) && `getBBox` in r ? r.getBBox()[t] : r[n],
    Gi = Wi(`inline`, `width`, `offsetWidth`),
    Ki = Wi(`block`, `height`, `offsetHeight`);

function qi({
    target: e,
    borderBoxSize: t
}) {
    Hi.get(e) ? .forEach(n => {
        n(e, {
            get width() {
                return Gi(e, t)
            },
            get height() {
                return Ki(e, t)
            }
        })
    })
}

function Ji(e) {
    e.forEach(qi)
}

function Yi() {
    typeof ResizeObserver > `u` || (Ui = new ResizeObserver(Ji))
}

function Xi(e, t) {
    Ui || Yi();
    let n = _i(e);
    return n.forEach(e => {
        let n = Hi.get(e);
        n || (n = new Set, Hi.set(e, n)), n.add(t), Ui ? .observe(e)
    }), () => {
        n.forEach(e => {
            let n = Hi.get(e);
            n ? .delete(t), n ? .size || Ui ? .unobserve(e)
        })
    }
}
var Zi = new Set,
    Qi;

function $i() {
    Qi = () => {
        let e = {
            get width() {
                return window.innerWidth
            },
            get height() {
                return window.innerHeight
            }
        };
        Zi.forEach(t => t(e))
    }, window.addEventListener(`resize`, Qi)
}

function ea(e) {
    return Zi.add(e), Qi || $i(), () => {
        Zi.delete(e), !Zi.size && typeof Qi == `function` && (window.removeEventListener(`resize`, Qi), Qi = void 0)
    }
}

function ta(e, t) {
    return typeof e == `function` ? ea(e) : Xi(e, t)
}
var na = {
    value: null,
    addProjectionMetrics: null
};

function ra(e) {
    return Vi(e) && e.tagName === `svg`
}
var ia = [...$r, H, lt],
    aa = e => ia.find(Qr(e)),
    oa = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }),
    sa = () => ({
        x: oa(),
        y: oa()
    }),
    ca = () => ({
        min: 0,
        max: 0
    }),
    G = () => ({
        x: ca(),
        y: ca()
    }),
    la = new WeakMap;

function ua(e) {
    return typeof e == `object` && !!e && typeof e.start == `function`
}

function da(e) {
    return typeof e == `string` || Array.isArray(e)
}
var fa = [`animate`, `whileInView`, `whileFocus`, `whileHover`, `whileTap`, `whileDrag`, `exit`],
    pa = [`initial`, ...fa];

function ma(e) {
    return ua(e.animate) || pa.some(t => da(e[t]))
}

function ha(e) {
    return !!(ma(e) || e.variants)
}

function ga(e, t, n) {
    for (let r in t) {
        let i = t[r],
            a = n[r];
        if (Br(i)) e.addValue(r, i);
        else if (Br(a)) e.addValue(r, vr(i, {
            owner: e
        }));
        else if (a !== i)
            if (e.hasValue(r)) {
                let t = e.getValue(r);
                t.liveStyle === !0 ? t.jump(i) : t.hasAnimated || t.set(i)
            } else {
                let t = e.getStaticValue(r);
                e.addValue(r, vr(t === void 0 ? i : t, {
                    owner: e
                }))
            }
    }
    for (let r in n) t[r] === void 0 && e.removeValue(r);
    return t
}
var _a = {
        current: null
    },
    va = {
        current: !1
    },
    ya = typeof window < `u`;

function ba() {
    if (va.current = !0, ya)
        if (window.matchMedia) {
            let e = window.matchMedia(`(prefers-reduced-motion)`),
                t = () => _a.current = e.matches;
            e.addEventListener(`change`, t), t()
        } else _a.current = !1
}
var xa = [`AnimationStart`, `AnimationComplete`, `Update`, `BeforeLayoutMeasure`, `LayoutMeasure`, `LayoutAnimationStart`, `LayoutAnimationComplete`],
    Sa = {};

function Ca(e) {
    Sa = e
}

function wa() {
    return Sa
}
var Ta = class {
        scrapeMotionValuesFromProps(e, t, n) {
            return {}
        }
        constructor({
            parent: e,
            props: t,
            presenceContext: n,
            reducedMotionConfig: r,
            skipAnimations: i,
            blockInitialAnimation: a,
            visualState: o
        }, s = {}) {
            this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = new Map, this.KeyframeResolver = Nn, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify(`Update`, this.latestValues), this.render = () => {
                this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
            }, this.renderScheduledAt = 0, this.scheduleRender = () => {
                let e = be.now();
                this.renderScheduledAt < e && (this.renderScheduledAt = e, z.render(this.render, !1, !0))
            };
            let {
                latestValues: c,
                renderState: l
            } = o;
            this.latestValues = c, this.baseTarget = { ...c
            }, this.initialValues = t.initial ? { ...c
            } : {}, this.renderState = l, this.parent = e, this.props = t, this.presenceContext = n, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = r, this.skipAnimationsConfig = i, this.options = s, this.blockInitialAnimation = !!a, this.isControllingVariants = ma(t), this.isVariantNode = ha(t), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(e && e.current);
            let {
                willChange: u,
                ...d
            } = this.scrapeMotionValuesFromProps(t, {}, this);
            for (let e in d) {
                let t = d[e];
                c[e] !== void 0 && Br(t) && t.set(c[e])
            }
        }
        mount(e) {
            if (this.hasBeenMounted)
                for (let e in this.initialValues) this.values.get(e) ? .jump(this.initialValues[e]), this.latestValues[e] = this.initialValues[e];
            this.current = e, la.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((e, t) => this.bindToMotionValue(t, e)), this.reducedMotionConfig === `never` ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === `always` ? this.shouldReduceMotion = !0 : (va.current || ba(), this.shouldReduceMotion = _a.current), this.shouldSkipAnimations = this.skipAnimationsConfig ? ? !1, this.parent ? .addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0
        }
        unmount() {
            this.projection && this.projection.unmount(), ge(this.notifyUpdate), ge(this.render), this.valueSubscriptions.forEach(e => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent ? .removeChild(this);
            for (let e in this.events) this.events[e].clear();
            for (let e in this.features) {
                let t = this.features[e];
                t && (t.unmount(), t.isMounted = !1)
            }
            this.current = null
        }
        addChild(e) {
            this.children.add(e), this.enteringChildren ? ? = new Set, this.enteringChildren.add(e)
        }
        removeChild(e) {
            this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e)
        }
        bindToMotionValue(e, t) {
            if (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(), t.accelerate && nr.has(e) && this.current instanceof HTMLElement) {
                let {
                    factory: n,
                    keyframes: r,
                    times: i,
                    ease: a,
                    duration: o
                } = t.accelerate, s = new Kn({
                    element: this.current,
                    name: e,
                    keyframes: r,
                    times: i,
                    ease: a,
                    duration: w(o)
                }), c = n(s);
                this.valueSubscriptions.set(e, () => {
                    c(), s.cancel()
                });
                return
            }
            let n = bn.has(e);
            n && this.onBindTransform && this.onBindTransform();
            let r = t.on(`change`, t => {
                    this.latestValues[e] = t, this.props.onUpdate && z.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender()
                }),
                i;
            typeof window < `u` && window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, e, t)), this.valueSubscriptions.set(e, () => {
                r(), i && i()
            })
        }
        sortNodePosition(e) {
            return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current)
        }
        updateFeatures() {
            let e = `animation`;
            for (e in Sa) {
                let t = Sa[e];
                if (!t) continue;
                let {
                    isEnabled: n,
                    Feature: r
                } = t;
                if (!this.features[e] && r && n(this.props) && (this.features[e] = new r(this)), this.features[e]) {
                    let t = this.features[e];
                    t.isMounted ? t.update() : (t.mount(), t.isMounted = !0)
                }
            }
        }
        triggerBuild() {
            this.build(this.renderState, this.latestValues, this.props)
        }
        measureViewportBox() {
            return this.current ? this.measureInstanceViewportBox(this.current, this.props) : G()
        }
        getStaticValue(e) {
            return this.latestValues[e]
        }
        setStaticValue(e, t) {
            this.latestValues[e] = t
        }
        update(e, t) {
            (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = t;
            for (let t = 0; t < xa.length; t++) {
                let n = xa[t];
                this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
                let r = e[`on` + n];
                r && (this.propEventSubscriptions[n] = this.on(n, r))
            }
            this.prevMotionValues = ga(this, this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
        }
        getProps() {
            return this.props
        }
        getVariant(e) {
            return this.props.variants ? this.props.variants[e] : void 0
        }
        getDefaultTransition() {
            return this.props.transition
        }
        getTransformPagePoint() {
            return this.props.transformPagePoint
        }
        getClosestVariantNode() {
            return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
        }
        addVariantChild(e) {
            let t = this.getClosestVariantNode();
            if (t) return t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e)
        }
        addValue(e, t) {
            let n = this.values.get(e);
            t !== n && (n && this.removeValue(e), this.bindToMotionValue(e, t), this.values.set(e, t), this.latestValues[e] = t.get())
        }
        removeValue(e) {
            this.values.delete(e);
            let t = this.valueSubscriptions.get(e);
            t && (t(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState)
        }
        hasValue(e) {
            return this.values.has(e)
        }
        getValue(e, t) {
            if (this.props.values && this.props.values[e]) return this.props.values[e];
            let n = this.values.get(e);
            return n === void 0 && t !== void 0 && (n = vr(t === null ? void 0 : t, {
                owner: this
            }), this.addValue(e, n)), n
        }
        readValue(e, t) {
            let n = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ? ? this.readValueFromInstance(this.current, e, this.options);
            return n != null && (typeof n == `string` && (g(n) || v(n)) ? n = parseFloat(n) : !aa(n) && lt.test(t) && (n = fi(e, t)), this.setBaseTarget(e, Br(n) ? n.get() : n)), Br(n) ? n.get() : n
        }
        setBaseTarget(e, t) {
            this.baseTarget[e] = t
        }
        getBaseTarget(e) {
            let {
                initial: t
            } = this.props, n;
            if (typeof t == `string` || typeof t == `object`) {
                let r = Nr(this.props, t, this.presenceContext ? .custom);
                r && (n = r[e])
            }
            if (t && n !== void 0) return n;
            let r = this.getBaseTargetFromProps(this.props, e);
            return r !== void 0 && !Br(r) ? r : this.initialValues[e] !== void 0 && n === void 0 ? void 0 : this.baseTarget[e]
        }
        on(e, t) {
            return this.events[e] || (this.events[e] = new C), this.events[e].add(t)
        }
        notify(e, ...t) {
            this.events[e] && this.events[e].notify(...t)
        }
        scheduleRenderMicrotask() {
            bi.render(this.render)
        }
    },
    Ea = class extends Ta {
        constructor() {
            super(...arguments), this.KeyframeResolver = hi
        }
        sortInstanceNodePosition(e, t) {
            return e.compareDocumentPosition(t) & 2 ? 1 : -1
        }
        getBaseTargetFromProps(e, t) {
            let n = e.style;
            return n ? n[t] : void 0
        }
        removeValueFromRenderState(e, {
            vars: t,
            style: n
        }) {
            delete t[e], delete n[e]
        }
        handleChildMotionValue() {
            this.childSubscription && (this.childSubscription(), delete this.childSubscription);
            let {
                children: e
            } = this.props;
            Br(e) && (this.childSubscription = e.on(`change`, e => {
                this.current && (this.current.textContent = `${e}`)
            }))
        }
    },
    Da = class {
        constructor(e) {
            this.isMounted = !1, this.node = e
        }
        update() {}
    };

function Oa({
    top: e,
    left: t,
    right: n,
    bottom: r
}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}

function ka({
    x: e,
    y: t
}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}

function Aa(e, t) {
    if (!t) return e;
    let n = t({
            x: e.left,
            y: e.top
        }),
        r = t({
            x: e.right,
            y: e.bottom
        });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}

function ja(e) {
    return e === void 0 || e === 1
}

function Ma({
    scale: e,
    scaleX: t,
    scaleY: n
}) {
    return !ja(e) || !ja(t) || !ja(n)
}

function Na(e) {
    return Ma(e) || Pa(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}

function Pa(e) {
    return Fa(e.x) || Fa(e.y)
}

function Fa(e) {
    return e && e !== `0%`
}

function Ia(e, t, n) {
    return n + t * (e - n)
}

function La(e, t, n, r, i) {
    return i !== void 0 && (e = Ia(e, i, r)), Ia(e, n, r) + t
}

function Ra(e, t = 0, n = 1, r, i) {
    e.min = La(e.min, t, n, r, i), e.max = La(e.max, t, n, r, i)
}

function za(e, {
    x: t,
    y: n
}) {
    Ra(e.x, t.translate, t.scale, t.originPoint), Ra(e.y, n.translate, n.scale, n.originPoint)
}
var Ba = .999999999999,
    Va = 1.0000000000001;

function Ha(e, t, n, r = !1) {
    let i = n.length;
    if (!i) return;
    t.x = t.y = 1;
    let a, o;
    for (let s = 0; s < i; s++) {
        a = n[s], o = a.projectionDelta;
        let {
            visualElement: i
        } = a.options;
        i && i.props.style && i.props.style.display === `contents` || (r && a.options.layoutScroll && a.scroll && a !== a.root && (Ua(e.x, -a.scroll.offset.x), Ua(e.y, -a.scroll.offset.y)), o && (t.x *= o.x.scale, t.y *= o.y.scale, za(e, o)), r && Na(a.latestValues) && Ka(e, a.latestValues, a.layout ? .layoutBox))
    }
    t.x < Va && t.x > Ba && (t.x = 1), t.y < Va && t.y > Ba && (t.y = 1)
}

function Ua(e, t) {
    e.min += t, e.max += t
}

function Wa(e, t, n, r, i = .5) {
    Ra(e, t, n, U(e.min, e.max, i), r)
}

function Ga(e, t) {
    return typeof e == `string` ? parseFloat(e) / 100 * (t.max - t.min) : e
}

function Ka(e, t, n) {
    let r = n ? ? e;
    Wa(e.x, Ga(t.x, r.x), t.scaleX, t.scale, t.originX), Wa(e.y, Ga(t.y, r.y), t.scaleY, t.scale, t.originY)
}

function qa(e, t) {
    return Oa(Aa(e.getBoundingClientRect(), t))
}

function Ja(e, t, n) {
    let r = qa(e, n),
        {
            scroll: i
        } = t;
    return i && (Ua(r.x, i.offset.x), Ua(r.y, i.offset.y)), r
}
var Ya = {
        x: `translateX`,
        y: `translateY`,
        z: `translateZ`,
        transformPerspective: `perspective`
    },
    Xa = yn.length;

function Za(e, t, n) {
    let r = ``,
        i = !0;
    for (let a = 0; a < Xa; a++) {
        let o = yn[a],
            s = e[o];
        if (s === void 0) continue;
        let c = !0;
        if (typeof s == `number`) c = s === +!!o.startsWith(`scale`);
        else {
            let e = parseFloat(s);
            c = o.startsWith(`scale`) ? e === 1 : e === 0
        }
        if (!c || n) {
            let e = vi(s, ci[o]);
            if (!c) {
                i = !1;
                let t = Ya[o] || o;
                r += `${t}(${e}) `
            }
            n && (t[o] = e)
        }
    }
    let a = e.pathRotation;
    return a && (i = !1, r += `rotate(${vi(a,ci.pathRotation)}) `), r = r.trim(), n ? r = n(t, i ? `` : r) : i && (r = `none`), r
}

function Qa(e, t, n) {
    let {
        style: r,
        vars: i,
        transformOrigin: a
    } = e, o = !1, s = !1;
    for (let e in t) {
        let n = t[e];
        if (bn.has(e)) {
            o = !0;
            continue
        } else if (Se(e)) {
            i[e] = n;
            continue
        } else {
            let t = vi(n, ci[e]);
            e.startsWith(`origin`) ? (s = !0, a[e] = t) : r[e] = t
        }
    }
    if (t.transform || (o || n ? r.transform = Za(t, e.transform, n) : r.transform && = `none`), s) {
        let {
            originX: e = `50%`,
            originY: t = `50%`,
            originZ: n = 0
        } = a;
        r.transformOrigin = `${e} ${t} ${n}`
    }
}

function $a(e, {
    style: t,
    vars: n
}, r, i) {
    let a = e.style,
        o;
    for (o in t) a[o] = t[o];
    for (o in i ? .applyProjectionStyles(a, r), n) a.setProperty(o, n[o])
}

function eo(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
var to = {
        correct: (e, t) => {
            if (!t.target) return e;
            if (typeof e == `string`)
                if (V.test(e)) e = parseFloat(e);
                else return e;
            return `${eo(e,t.target.x)}% ${eo(e,t.target.y)}%`
        }
    },
    no = {
        correct: (e, {
            treeScale: t,
            projectionDelta: n
        }) => {
            let r = e,
                i = lt.parse(e);
            if (i.length > 5) return r;
            let a = lt.createTransformer(e),
                o = typeof i[0] == `number` ? 0 : 1,
                s = n.x.scale * t.x,
                c = n.y.scale * t.y;
            i[0 + o] /= s, i[1 + o] /= c;
            let l = U(s, c, .5);
            return typeof i[2 + o] == `number` && (i[2 + o] /= l), typeof i[3 + o] == `number` && (i[3 + o] /= l), a(i)
        }
    },
    ro = {
        borderRadius: { ...to,
            applyTo: [...gi]
        },
        borderTopLeftRadius: to,
        borderTopRightRadius: to,
        borderBottomLeftRadius: to,
        borderBottomRightRadius: to,
        boxShadow: no
    };

function io(e, {
    layout: t,
    layoutId: n
}) {
    return bn.has(e) || e.startsWith(`origin`) || (t || n !== void 0) && (!!ro[e] || e === `opacity`)
}

function ao(e, t, n) {
    let r = e.style,
        i = t ? .style,
        a = {};
    if (!r) return a;
    for (let t in r)(Br(r[t]) || i && Br(i[t]) || io(t, e) || n ? .getValue(t) ? .liveStyle !== void 0) && (a[t] = r[t]);
    return a
}

function oo(e) {
    return window.getComputedStyle(e)
}
var so = class extends Ea {
    constructor() {
        super(...arguments), this.type = `html`, this.renderInstance = $a
    }
    readValueFromInstance(e, t) {
        if (bn.has(t)) return this.projection ? .isProjecting ? hn(t) : _n(e, t); {
            let n = oo(e),
                r = (Se(t) ? n.getPropertyValue(t) : n[t]) || 0;
            return typeof r == `string` ? r.trim() : r
        }
    }
    measureInstanceViewportBox(e, {
        transformPagePoint: t
    }) {
        return qa(e, t)
    }
    build(e, t, n) {
        Qa(e, t, n.transformTemplate)
    }
    scrapeMotionValuesFromProps(e, t, n) {
        return ao(e, t, n)
    }
};

function co(e, t) {
    return e in t
}
var lo = class extends Ta {
        constructor() {
            super(...arguments), this.type = `object`
        }
        readValueFromInstance(e, t) {
            if (co(t, e)) {
                let n = e[t];
                if (typeof n == `string` || typeof n == `number`) return n
            }
        }
        getBaseTargetFromProps() {}
        removeValueFromRenderState(e, t) {
            delete t.output[e]
        }
        measureInstanceViewportBox() {
            return G()
        }
        build(e, t) {
            Object.assign(e.output, t)
        }
        renderInstance(e, {
            output: t
        }) {
            Object.assign(e, t)
        }
        sortInstanceNodePosition() {
            return 0
        }
    },
    uo = {
        offset: `stroke-dashoffset`,
        array: `stroke-dasharray`
    },
    fo = {
        offset: `strokeDashoffset`,
        array: `strokeDasharray`
    };

function po(e, t, n = 1, r = 0, i = !0) {
    e.pathLength = 1;
    let a = i ? uo : fo;
    e[a.offset] = `${-r}`, e[a.array] = `${t} ${n}`
}
var mo = [`offsetDistance`, `offsetPath`, `offsetRotate`, `offsetAnchor`];

function ho(e, {
    attrX: t,
    attrY: n,
    attrScale: r,
    pathLength: i,
    pathSpacing: a = 1,
    pathOffset: o = 0,
    ...s
}, c, l, u) {
    if (Qa(e, s, l), c) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style, e.style = {};
    let {
        attrs: d,
        style: f
    } = e;
    d.transform && (f.transform = d.transform, delete d.transform), (f.transform || d.transformOrigin) && (f.transformOrigin = d.transformOrigin ? ? `50% 50%`, delete d.transformOrigin), f.transform && (f.transformBox = u ? .transformBox ? ? `fill-box`, delete d.transformBox);
    for (let e of mo) d[e] !== void 0 && (f[e] = d[e], delete d[e]);
    t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), r !== void 0 && (d.scale = r), i !== void 0 && po(d, i, a, o, !1)
}
var go = new Set([`baseFrequency`, `diffuseConstant`, `kernelMatrix`, `kernelUnitLength`, `keySplines`, `keyTimes`, `limitingConeAngle`, `markerHeight`, `markerWidth`, `numOctaves`, `targetX`, `targetY`, `surfaceScale`, `specularConstant`, `specularExponent`, `stdDeviation`, `tableValues`, `viewBox`, `gradientTransform`, `pathLength`, `startOffset`, `textLength`, `lengthAdjust`]),
    _o = e => typeof e == `string` && e.toLowerCase() === `svg`;

function vo(e, t, n, r) {
    $a(e, t, void 0, r);
    for (let n in t.attrs) e.setAttribute(go.has(n) ? n : Ur(n), t.attrs[n])
}

function yo(e, t, n) {
    let r = ao(e, t, n);
    for (let n in e)
        if (Br(e[n]) || Br(t[n])) {
            let t = yn.indexOf(n) === -1 ? n : `attr` + n.charAt(0).toUpperCase() + n.substring(1);
            r[t] = e[n]
        }
    return r
}
var bo = class extends Ea {
        constructor() {
            super(...arguments), this.type = `svg`, this.isSVGTag = !1, this.measureInstanceViewportBox = G
        }
        getBaseTargetFromProps(e, t) {
            return e[t]
        }
        readValueFromInstance(e, t) {
            if (bn.has(t)) {
                let e = ui(t);
                return e && e.default || 0
            }
            return t = go.has(t) ? t : Ur(t), e.getAttribute(t)
        }
        scrapeMotionValuesFromProps(e, t, n) {
            return yo(e, t, n)
        }
        build(e, t, n) {
            ho(e, t, this.isSVGTag, n.transformTemplate, n.style)
        }
        renderInstance(e, t, n, r) {
            vo(e, t, n, r)
        }
        mount(e) {
            this.isSVGTag = _o(e.tagName), super.mount(e)
        }
    },
    xo = pa.length;

function So(e) {
    if (!e) return;
    if (!e.isControllingVariants) {
        let t = e.parent && So(e.parent) || {};
        return e.props.initial !== void 0 && (t.initial = e.props.initial), t
    }
    let t = {};
    for (let n = 0; n < xo; n++) {
        let r = pa[n],
            i = e.props[r];
        (da(i) || i === !1) && (t[r] = i)
    }
    return t
}

function Co(e, t) {
    if (!Array.isArray(t)) return !1;
    let n = t.length;
    if (n !== e.length) return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r]) return !1;
    return !0
}
var wo = [...fa].reverse(),
    To = fa.length;

function Eo(e) {
    return t => Promise.all(t.map(({
        animation: t,
        options: n
    }) => Xr(e, t, n)))
}

function Do(e) {
    let t = Eo(e),
        n = Ao(),
        r = !0,
        i = !1,
        a = t => (n, r) => {
            let i = Pr(e, r, t === `exit` ? e.presenceContext ? .custom : void 0);
            if (i) {
                let {
                    transition: e,
                    transitionEnd: t,
                    ...r
                } = i;
                n = { ...n,
                    ...r,
                    ...t
                }
            }
            return n
        };

    function o(n) {
        t = n(e)
    }

    function s(o) {
        let {
            props: s
        } = e, c = So(e.parent) || {}, l = [], u = new Set, d = {}, f = 1 / 0;
        for (let t = 0; t < To; t++) {
            let p = wo[t],
                m = n[p],
                h = s[p] === void 0 ? c[p] : s[p],
                g = da(h),
                _ = p === o ? m.isActive : null;
            _ === !1 && (f = t);
            let v = h === c[p] && h !== s[p] && g;
            if (v && (r || i) && e.manuallyAnimateOnMount && (v = !1), m.protectedKeys = { ...d
                }, !m.isActive && _ === null || !h && !m.prevProp || ua(h) || typeof h == `boolean`) continue;
            if (p === `exit` && m.isActive && _ !== !0) {
                m.prevResolvedValues && (d = { ...d,
                    ...m.prevResolvedValues
                });
                continue
            }
            let y = Oo(m.prevProp, h),
                b = y || p === o && m.isActive && !v && g || t > f && g,
                x = !1,
                S = Array.isArray(h) ? h : [h],
                C = S.reduce(a(p), {});
            _ === !1 && (C = {});
            let {
                prevResolvedValues: w = {}
            } = m, T = { ...w,
                ...C
            }, E = t => {
                b = !0, u.has(t) && (x = !0, u.delete(t)), m.needsAnimating[t] = !0;
                let n = e.getValue(t);
                n && (n.liveStyle = !1)
            };
            for (let e in T) {
                let t = C[e],
                    n = w[e];
                if (d.hasOwnProperty(e)) continue;
                let r = !1;
                r = Ir(t) && Ir(n) ? !Co(t, n) || y : t !== n, r ? t == null ? u.add(e) : E(e) : t !== void 0 && u.has(e) ? E(e) : m.protectedKeys[e] = !0
            }
            m.prevProp = h, m.prevResolvedValues = C, m.isActive && (d = { ...d,
                ...C
            }), (r || i) && e.blockInitialAnimation && (b = !1);
            let D = v && y;
            b && (!D || x) && l.push(...S.map(t => {
                let n = {
                    type: p
                };
                if (typeof t == `string` && (r || i) && !D && e.manuallyAnimateOnMount && e.parent) {
                    let {
                        parent: r
                    } = e, i = Pr(r, t);
                    if (r.enteringChildren && i) {
                        let {
                            delayChildren: t
                        } = i.transition || {};
                        n.delay = pr(r.enteringChildren, e, t)
                    }
                }
                return {
                    animation: t,
                    options: n
                }
            }))
        }
        if (u.size) {
            let t = {};
            if (typeof s.initial != `boolean`) {
                let n = Pr(e, Array.isArray(s.initial) ? s.initial[0] : s.initial);
                n && n.transition && (t.transition = n.transition)
            }
            u.forEach(n => {
                let r = e.getBaseTarget(n),
                    i = e.getValue(n);
                i && (i.liveStyle = !0), t[n] = r ? ? null
            }), l.push({
                animation: t
            })
        }
        let p = !!l.length;
        return r && (s.initial === !1 || s.initial === s.animate) && !e.manuallyAnimateOnMount && (p = !1), r = !1, i = !1, p ? t(l) : Promise.resolve()
    }

    function c(t, r) {
        if (n[t].isActive === r) return Promise.resolve();
        e.variantChildren ? .forEach(e => e.animationState ? .setActive(t, r)), n[t].isActive = r;
        let i = s(t);
        for (let e in n) n[e].protectedKeys = {};
        return i
    }
    return {
        animateChanges: s,
        setActive: c,
        setAnimateFunction: o,
        getState: () => n,
        reset: () => {
            n = Ao(), i = !0
        }
    }
}

function Oo(e, t) {
    return typeof t == `string` ? t !== e : Array.isArray(t) ? !Co(t, e) : !1
}

function ko(e = !1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function Ao() {
    return {
        animate: ko(!0),
        whileInView: ko(),
        whileHover: ko(),
        whileTap: ko(),
        whileDrag: ko(),
        whileFocus: ko(),
        exit: ko()
    }
}

function jo(e, t) {
    e.min = t.min, e.max = t.max
}

function Mo(e, t) {
    jo(e.x, t.x), jo(e.y, t.y)
}

function No(e, t) {
    e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin
}
var Po = .9999,
    Fo = 1.0001,
    Io = -.01,
    Lo = .01;

function Ro(e) {
    return e.max - e.min
}

function zo(e, t, n) {
    return Math.abs(e - t) <= n
}

function Bo(e, t, n, r = .5) {
    e.origin = r, e.originPoint = U(t.min, t.max, e.origin), e.scale = Ro(n) / Ro(t), e.translate = U(n.min, n.max, e.origin) - e.originPoint, (e.scale >= Po && e.scale <= Fo || isNaN(e.scale)) && (e.scale = 1), (e.translate >= Io && e.translate <= Lo || isNaN(e.translate)) && (e.translate = 0)
}

function Vo(e, t, n, r) {
    Bo(e.x, t.x, n.x, r ? r.originX : void 0), Bo(e.y, t.y, n.y, r ? r.originY : void 0)
}

function Ho(e, t, n, r = 0) {
    e.min = (r ? U(n.min, n.max, r) : n.min) + t.min, e.max = e.min + Ro(t)
}

function Uo(e, t, n, r) {
    Ho(e.x, t.x, n.x, r ? .x), Ho(e.y, t.y, n.y, r ? .y)
}

function Wo(e, t, n, r = 0) {
    let i = r ? U(n.min, n.max, r) : n.min;
    e.min = t.min - i, e.max = e.min + Ro(t)
}

function Go(e, t, n, r) {
    Wo(e.x, t.x, n.x, r ? .x), Wo(e.y, t.y, n.y, r ? .y)
}

function Ko(e, t, n, r, i) {
    return e -= t, e = Ia(e, 1 / n, r), i !== void 0 && (e = Ia(e, 1 / i, r)), e
}

function qo(e, t = 0, n = 1, r = .5, i, a = e, o = e) {
    if (Ue.test(t) && (t = parseFloat(t), t = U(o.min, o.max, t / 100) - o.min), typeof t != `number`) return;
    let s = U(a.min, a.max, r);
    e === a && (s -= t), e.min = Ko(e.min, t, n, s, i), e.max = Ko(e.max, t, n, s, i)
}

function Jo(e, t, [n, r, i], a, o) {
    qo(e, t[n], t[r], t[i], t.scale, a, o)
}
var Yo = [`x`, `scaleX`, `originX`],
    Xo = [`y`, `scaleY`, `originY`];

function Zo(e, t, n, r) {
    Jo(e.x, t, Yo, n ? n.x : void 0, r ? r.x : void 0), Jo(e.y, t, Xo, n ? n.y : void 0, r ? r.y : void 0)
}

function Qo(e) {
    return e.translate === 0 && e.scale === 1
}

function $o(e) {
    return Qo(e.x) && Qo(e.y)
}

function es(e, t) {
    return e.min === t.min && e.max === t.max
}

function ts(e, t) {
    return es(e.x, t.x) && es(e.y, t.y)
}

function ns(e, t) {
    return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}

function rs(e, t) {
    return ns(e.x, t.x) && ns(e.y, t.y)
}

function is(e) {
    return Ro(e.x) / Ro(e.y)
}

function as(e, t) {
    return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}

function os(e) {
    return [e(`x`), e(`y`)]
}

function ss(e, t, n) {
    let r = ``,
        i = e.x.translate / t.x,
        a = e.y.translate / t.y,
        o = n ? .z || 0;
    if ((i || a || o) && (r = `translate3d(${i}px, ${a}px, ${o}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1/t.x}, ${1/t.y}) `), n) {
        let {
            transformPerspective: e,
            rotate: t,
            pathRotation: i,
            rotateX: a,
            rotateY: o,
            skewX: s,
            skewY: c
        } = n;
        e && (r = `perspective(${e}px) ${r}`), t && (r += `rotate(${t}deg) `), i && (r += `rotate(${i}deg) `), a && (r += `rotateX(${a}deg) `), o && (r += `rotateY(${o}deg) `), s && (r += `skewX(${s}deg) `), c && (r += `skewY(${c}deg) `)
    }
    let s = e.x.scale * t.x,
        c = e.y.scale * t.y;
    return (s !== 1 || c !== 1) && (r += `scale(${s}, ${c})`), r || `none`
}
var cs = gi.length,
    ls = e => typeof e == `string` ? parseFloat(e) : e,
    us = e => typeof e == `number` || V.test(e);

function ds(e, t, n, r, i, a) {
    i ? (e.opacity = U(0, n.opacity ? ? 1, ps(r)), e.opacityExit = U(t.opacity ? ? 1, 0, ms(r))) : a && (e.opacity = U(t.opacity ? ? 1, n.opacity ? ? 1, r));
    for (let i = 0; i < cs; i++) {
        let a = gi[i],
            o = fs(t, a),
            s = fs(n, a);
        o === void 0 && s === void 0 || (o || = 0, s || = 0, o === 0 || s === 0 || us(o) === us(s) ? (e[a] = Math.max(U(ls(o), ls(s), r), 0), (Ue.test(s) || Ue.test(o)) && (e[a] += `%`)) : e[a] = s)
    }(t.rotate || n.rotate) && (e.rotate = U(t.rotate || 0, n.rotate || 0, r))
}

function fs(e, t) {
    return e[t] === void 0 ? e.borderRadius : e[t]
}
var ps = hs(0, .5, ie),
    ms = hs(.5, .95, b);

function hs(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(S(e, t, r))
}

function gs(e, t, n) {
    let r = Br(e) ? e : vr(e);
    return r.start(Or(``, r, t, n)), r.animation
}

function _s(e, t, n, r = {
    passive: !0
}) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r)
}
var vs = (e, t) => e.depth - t.depth,
    ys = class {
        constructor() {
            this.children = [], this.isDirty = !1
        }
        add(e) {
            f(this.children, e), this.isDirty = !0
        }
        remove(e) {
            p(this.children, e), this.isDirty = !0
        }
        forEach(e) {
            this.isDirty && this.children.sort(vs), this.isDirty = !1, this.children.forEach(e)
        }
    };

function bs(e, t) {
    let n = be.now(),
        r = ({
            timestamp: i
        }) => {
            let a = i - n;
            a >= t && (ge(r), e(a - t))
        };
    return z.setup(r, !0), () => ge(r)
}

function xs(e) {
    return Br(e) ? e.get() : e
}
var Ss = class {
        constructor() {
            this.members = []
        }
        add(e) {
            f(this.members, e);
            for (let t = this.members.length - 1; t >= 0; t--) {
                let n = this.members[t];
                if (n === e || n === this.lead || n === this.prevLead) continue;
                let r = n.instance;
                (!r || r.isConnected === !1) && !n.snapshot && (p(this.members, n), n.unmount())
            }
            e.scheduleRender()
        }
        remove(e) {
            if (p(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
                let e = this.members[this.members.length - 1];
                e && this.promote(e)
            }
        }
        relegate(e) {
            for (let t = this.members.indexOf(e) - 1; t >= 0; t--) {
                let e = this.members[t];
                if (e.isPresent !== !1 && e.instance ? .isConnected !== !1) return this.promote(e), !0
            }
            return !1
        }
        promote(e, t) {
            let n = this.lead;
            if (e !== n && (this.prevLead = n, this.lead = e, e.show(), n)) {
                n.updateSnapshot(), e.scheduleRender();
                let {
                    layoutDependency: r
                } = n.options, {
                    layoutDependency: i
                } = e.options;
                (r === void 0 || r !== i) && (e.resumeFrom = n, t && (n.preserveOpacity = !0), n.snapshot && (e.snapshot = n.snapshot, e.snapshot.latestValues = n.animationValues || n.latestValues), e.root ? .isUpdating && (e.isLayoutDirty = !0)), e.options.crossfade === !1 && n.hide()
            }
        }
        exitAnimationComplete() {
            this.members.forEach(e => {
                e.options.onExitComplete ? .(), e.resumingFrom ? .options.onExitComplete ? .()
            })
        }
        scheduleRender() {
            this.members.forEach(e => e.instance && e.scheduleRender(!1))
        }
        removeLeadSnapshot() {
            this.lead ? .snapshot && (this.lead.snapshot = void 0)
        }
    },
    Cs = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
    },
    ws = {
        nodes: 0,
        calculatedTargetDeltas: 0,
        calculatedProjections: 0
    },
    Ts = [``, `X`, `Y`, `Z`],
    Es = 1e3,
    Ds = 0;

function Os(e, t, n, r) {
    let {
        latestValues: i
    } = t;
    i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0))
}

function ks(e) {
    if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
    let {
        visualElement: t
    } = e.options;
    if (!t) return;
    let n = Gr(t);
    if (window.MotionHasOptimisedAnimation(n, `transform`)) {
        let {
            layout: t,
            layoutId: r
        } = e.options;
        window.MotionCancelOptimisedAnimation(n, `transform`, z, !(t || r))
    }
    let {
        parent: r
    } = e;
    r && !r.hasCheckedOptimisedAppear && ks(r)
}

function As({
    attachResizeListener: e,
    defaultParent: t,
    measureScroll: n,
    checkIsScrollRoot: r,
    resetTransform: i
}) {
    return class {
        constructor(e = {}, n = t ? .()) {
            this.id = Ds++, this.animationId = 0, this.animationCommitId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, na.value && (ws.nodes = ws.calculatedTargetDeltas = ws.calculatedProjections = 0), this.nodes.forEach(Ns), this.nodes.forEach(Hs), this.nodes.forEach(Us), this.nodes.forEach(Ps), na.addProjectionMetrics && na.addProjectionMetrics(ws)
            }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = e, this.root = n ? n.root || n : this, this.path = n ? [...n.path, n] : [], this.parent = n, this.depth = n ? n.depth + 1 : 0;
            for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
            this.root === this && (this.nodes = new ys)
        }
        addEventListener(e, t) {
            return this.eventHandlers.has(e) || this.eventHandlers.set(e, new C), this.eventHandlers.get(e).add(t)
        }
        notifyListeners(e, ...t) {
            let n = this.eventHandlers.get(e);
            n && n.notify(...t)
        }
        hasListeners(e) {
            return this.eventHandlers.has(e)
        }
        mount(t) {
            if (this.instance) return;
            this.isSVG = Vi(t) && !ra(t), this.instance = t;
            let {
                layoutId: n,
                layout: r,
                visualElement: i
            } = this.options;
            if (i && !i.current && i.mount(t), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (r || n) && (this.isLayoutDirty = !0), e) {
                let n, r = 0,
                    i = () => this.root.updateBlockedByResize = !1;
                z.read(() => {
                    r = window.innerWidth
                }), e(t, () => {
                    let e = window.innerWidth;
                    e !== r && (r = e, this.root.updateBlockedByResize = !0, n && n(), n = bs(i, 250), Cs.hasAnimatedSinceResize && (Cs.hasAnimatedSinceResize = !1, this.nodes.forEach(Vs)))
                })
            }
            n && this.root.registerSharedNode(n, this), this.options.animate !== !1 && i && (n || r) && this.addEventListener(`didUpdate`, ({
                delta: e,
                hasLayoutChanged: t,
                hasRelativeLayoutChanged: n,
                layout: r
            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                let a = this.options.transition || i.getDefaultTransition() || Xs,
                    {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: s
                    } = i.getProps(),
                    c = !this.targetLayout || !rs(this.targetLayout, r),
                    l = !t && n;
                if (this.options.layoutRoot || this.resumeFrom || l || t && (c || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
                    let t = { ...br(a, `layout`),
                        onPlay: o,
                        onComplete: s
                    };
                    (i.shouldReduceMotion || this.options.layoutRoot) && (t.delay = 0, t.type = !1), this.startAnimation(t), this.setAnimationOrigin(e, l, t.path)
                } else t || Vs(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = r
            })
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            let e = this.getStack();
            e && e.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), ge(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Ws), this.animationId++)
        }
        getTransformTemplate() {
            let {
                visualElement: e
            } = this.options;
            return e && e.getProps().transformTemplate
        }
        willUpdate(e = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && ks(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let e = 0; e < this.path.length; e++) {
                let t = this.path[e];
                t.shouldResetTransform = !0, (typeof t.latestValues.x == `string` || typeof t.latestValues.y == `string`) && (t.isLayoutDirty = !0), t.updateScroll(`snapshot`), t.options.layoutRoot && t.willUpdate(!1)
            }
            let {
                layoutId: t,
                layout: n
            } = this.options;
            if (t === void 0 && !n) return;
            let r = this.getTransformTemplate();
            this.prevTransformTemplateValue = r ? r(this.latestValues, ``) : void 0, this.updateSnapshot(), e && this.notifyListeners(`willUpdate`)
        }
        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                let e = this.updateBlockedByResize;
                this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), e && this.nodes.forEach(Ls), this.nodes.forEach(Is);
                return
            }
            if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(Rs);
                return
            }
            this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(zs), this.nodes.forEach(Bs), this.nodes.forEach(js), this.nodes.forEach(Ms)) : this.nodes.forEach(Rs), this.clearAllSnapshots();
            let e = be.now();
            B.delta = m(0, 1e3 / 60, e - B.timestamp), B.timestamp = e, B.isProcessing = !0, _e.update.process(B), _e.preRender.process(B), _e.render.process(B), B.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, bi.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(Fs), this.sharedNodes.forEach(Gs)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, z.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            z.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !Ro(this.snapshot.measuredBox.x) && !Ro(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
            let e = this.layout;
            this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected || = G(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners(`measure`, this.layout.layoutBox);
            let {
                visualElement: t
            } = this.options;
            t && t.notify(`LayoutMeasure`, this.layout.layoutBox, e ? e.layoutBox : void 0)
        }
        updateScroll(e = `measure`) {
            let t = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (t = !1), t && this.instance) {
                let t = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: e,
                    isRoot: t,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : t
                }
            }
        }
        resetTransform() {
            if (!i) return;
            let e = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                t = this.projectionDelta && !$o(this.projectionDelta),
                n = this.getTransformTemplate(),
                r = n ? n(this.latestValues, ``) : void 0,
                a = r !== this.prevTransformTemplateValue;
            e && this.instance && (t || Na(this.latestValues) || a) && (i(this.instance, r), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(e = !0) {
            let t = this.measurePageBox(),
                n = this.removeElementScroll(t);
            return e && (n = this.removeTransform(n)), ec(n), {
                animationId: this.root.animationId,
                measuredBox: t,
                layoutBox: n,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            let {
                visualElement: e
            } = this.options;
            if (!e) return G();
            let t = e.measureViewportBox();
            if (!(this.scroll ? .wasRoot || this.path.some(nc))) {
                let {
                    scroll: e
                } = this.root;
                e && (Ua(t.x, e.offset.x), Ua(t.y, e.offset.y))
            }
            return t
        }
        removeElementScroll(e) {
            let t = G();
            if (Mo(t, e), this.scroll ? .wasRoot) return t;
            for (let n = 0; n < this.path.length; n++) {
                let r = this.path[n],
                    {
                        scroll: i,
                        options: a
                    } = r;
                r !== this.root && i && a.layoutScroll && (i.wasRoot && Mo(t, e), Ua(t.x, i.offset.x), Ua(t.y, i.offset.y))
            }
            return t
        }
        applyTransform(e, t = !1, n) {
            let r = n || G();
            Mo(r, e);
            for (let e = 0; e < this.path.length; e++) {
                let n = this.path[e];
                !t && n.options.layoutScroll && n.scroll && n !== n.root && (Ua(r.x, -n.scroll.offset.x), Ua(r.y, -n.scroll.offset.y)), Na(n.latestValues) && Ka(r, n.latestValues, n.layout ? .layoutBox)
            }
            return Na(this.latestValues) && Ka(r, this.latestValues, this.layout ? .layoutBox), r
        }
        removeTransform(e) {
            let t = G();
            Mo(t, e);
            for (let e = 0; e < this.path.length; e++) {
                let n = this.path[e];
                if (!Na(n.latestValues)) continue;
                let r;
                n.instance && (Ma(n.latestValues) && n.updateSnapshot(), r = G(), Mo(r, n.measurePageBox())), Zo(t, n.latestValues, n.snapshot ? .layoutBox, r)
            }
            return Na(this.latestValues) && Zo(t, this.latestValues), t
        }
        setTargetDelta(e) {
            this.targetDelta = e, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }
        setOptions(e) {
            this.options = { ...this.options,
                ...e,
                crossfade: e.crossfade === void 0 ? !0 : e.crossfade
            }
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== B.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(e = !1) {
            let t = this.getLead();
            this.isProjectionDirty || = t.isProjectionDirty, this.isTransformDirty || = t.isTransformDirty, this.isSharedProjectionDirty || = t.isSharedProjectionDirty;
            let n = !!this.resumingFrom || this !== t;
            if (!(e || n && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent ? .isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
            let {
                layout: r,
                layoutId: i
            } = this.options;
            if (!this.layout || !(r || i)) return;
            this.resolvedRelativeTargetAt = B.timestamp;
            let a = this.getClosestProjectingParent();
            a && this.linkedParentVersion !== a.layoutVersion && !a.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && a && a.layout ? this.createRelativeTarget(a, this.layout.layoutBox, a.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = G(), this.targetWithTransforms = G()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Uo(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : Mo(this.target, this.layout.layoutBox), za(this.target, this.targetDelta)) : Mo(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && a && !!a.resumingFrom == !!this.resumingFrom && !a.options.layoutScroll && a.target && this.animationProgress !== 1 ? this.createRelativeTarget(a, this.target, a.target) : this.relativeParent = this.relativeTarget = void 0), na.value && ws.calculatedTargetDeltas++)
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Ma(this.parent.latestValues) || Pa(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        createRelativeTarget(e, t, n) {
            this.relativeParent = e, this.linkedParentVersion = e.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = G(), this.relativeTargetOrigin = G(), Go(this.relativeTargetOrigin, t, n, this.options.layoutAnchor || void 0), Mo(this.relativeTarget, this.relativeTargetOrigin)
        }
        removeRelativeTarget() {
            this.relativeParent = this.relativeTarget = void 0
        }
        calcProjection() {
            let e = this.getLead(),
                t = !!this.resumingFrom || this !== e,
                n = !0;
            if ((this.isProjectionDirty || this.parent ? .isProjectionDirty) && (n = !1), t && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === B.timestamp && (n = !1), n) return;
            let {
                layout: r,
                layoutId: i
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(r || i)) return;
            Mo(this.layoutCorrected, this.layout.layoutBox);
            let a = this.treeScale.x,
                o = this.treeScale.y;
            Ha(this.layoutCorrected, this.treeScale, this.path, t), e.layout && !e.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (e.target = e.layout.layoutBox, e.targetWithTransforms = G());
            let {
                target: s
            } = e;
            if (!s) {
                this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                return
            }!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (No(this.prevProjectionDelta.x, this.projectionDelta.x), No(this.prevProjectionDelta.y, this.projectionDelta.y)), Vo(this.projectionDelta, this.layoutCorrected, s, this.latestValues), (this.treeScale.x !== a || this.treeScale.y !== o || !as(this.projectionDelta.x, this.prevProjectionDelta.x) || !as(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners(`projectionUpdate`, s)), na.value && ws.calculatedProjections++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(e = !0) {
            if (this.options.visualElement ? .scheduleRender(), e) {
                let e = this.getStack();
                e && e.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = sa(), this.projectionDelta = sa(), this.projectionDeltaWithTransform = sa()
        }
        setAnimationOrigin(e, t = !1, n) {
            let r = this.snapshot,
                i = r ? r.latestValues : {},
                a = { ...this.latestValues
                },
                o = sa();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !t;
            let s = G(),
                c = (r ? r.source : void 0) !== (this.layout ? this.layout.source : void 0),
                l = this.getStack(),
                u = !l || l.members.length <= 1,
                d = !!(c && !u && this.options.crossfade === !0 && !this.path.some(Ys));
            this.animationProgress = 0;
            let f, p = n ? .interpolateProjection(e);
            this.mixTargetDelta = t => {
                let n = t / 1e3,
                    r = p ? .(n);
                r ? (o.x.translate = r.x, o.x.scale = U(e.x.scale, 1, n), o.x.origin = e.x.origin, o.x.originPoint = e.x.originPoint, o.y.translate = r.y, o.y.scale = U(e.y.scale, 1, n), o.y.origin = e.y.origin, o.y.originPoint = e.y.originPoint) : (Ks(o.x, e.x, n), Ks(o.y, e.y, n)), this.setTargetDelta(o), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Go(s, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), Js(this.relativeTarget, this.relativeTargetOrigin, s, n), f && ts(this.relativeTarget, f) && (this.isProjectionDirty = !1), f || = G(), Mo(f, this.relativeTarget)), c && (this.animationValues = a, ds(a, i, this.latestValues, n, d, u)), r && r.rotate !== void 0 && (this.animationValues || = a, this.animationValues.pathRotation = r.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(e) {
            this.notifyListeners(`animationStart`), this.currentAnimation ? .stop(), this.resumingFrom ? .currentAnimation ? .stop(), this.pendingAnimation && = (ge(this.pendingAnimation), void 0), this.pendingAnimation = z.update(() => {
                Cs.hasAnimatedSinceResize = !0, this.motionValue || = vr(0), this.motionValue.jump(0, !1), this.currentAnimation = gs(this.motionValue, [0, 1e3], { ...e,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: t => {
                        this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t)
                    },
                    onComplete: () => {
                        e.onComplete && e.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            let e = this.getStack();
            e && e.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners(`animationComplete`)
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Es), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            let e = this.getLead(),
                {
                    targetWithTransforms: t,
                    target: n,
                    layout: r,
                    latestValues: i
                } = e;
            if (!(!t || !n || !r)) {
                if (this !== e && this.layout && r && tc(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
                    n = this.target || G();
                    let t = Ro(this.layout.layoutBox.x);
                    n.x.min = e.target.x.min, n.x.max = n.x.min + t;
                    let r = Ro(this.layout.layoutBox.y);
                    n.y.min = e.target.y.min, n.y.max = n.y.min + r
                }
                Mo(t, n), Ka(t, i), Vo(this.projectionDeltaWithTransform, this.layoutCorrected, t, i)
            }
        }
        registerSharedNode(e, t) {
            this.sharedNodes.has(e) || this.sharedNodes.set(e, new Ss), this.sharedNodes.get(e).add(t);
            let n = t.options.initialPromotionConfig;
            t.promote({
                transition: n ? n.transition : void 0,
                preserveFollowOpacity: n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(t) : void 0
            })
        }
        isLead() {
            let e = this.getStack();
            return e ? e.lead === this : !0
        }
        getLead() {
            let {
                layoutId: e
            } = this.options;
            return e && this.getStack() ? .lead || this
        }
        getPrevLead() {
            let {
                layoutId: e
            } = this.options;
            return e ? this.getStack() ? .prevLead : void 0
        }
        getStack() {
            let {
                layoutId: e
            } = this.options;
            if (e) return this.root.sharedNodes.get(e)
        }
        promote({
            needsReset: e,
            transition: t,
            preserveFollowOpacity: n
        } = {}) {
            let r = this.getStack();
            r && r.promote(this, n), e && (this.projectionDelta = void 0, this.needsReset = !0), t && this.setOptions({
                transition: t
            })
        }
        relegate() {
            let e = this.getStack();
            return e ? e.relegate(this) : !1
        }
        resetSkewAndRotation() {
            let {
                visualElement: e
            } = this.options;
            if (!e) return;
            let t = !1,
                {
                    latestValues: n
                } = e;
            if ((n.z || n.rotate || n.rotateX || n.rotateY || n.rotateZ || n.skewX || n.skewY) && (t = !0), !t) return;
            let r = {};
            n.z && Os(`z`, e, r, this.animationValues);
            for (let t = 0; t < Ts.length; t++) Os(`rotate${Ts[t]}`, e, r, this.animationValues), Os(`skew${Ts[t]}`, e, r, this.animationValues);
            e.render();
            for (let t in r) e.setStaticValue(t, r[t]), this.animationValues && (this.animationValues[t] = r[t]);
            e.scheduleRender()
        }
        applyProjectionStyles(e, t) {
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) {
                e.visibility = `hidden`;
                return
            }
            let n = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = !1, e.visibility = ``, e.opacity = ``, e.pointerEvents = xs(t ? .pointerEvents) || ``, e.transform = n ? n(this.latestValues, ``) : `none`;
                return
            }
            let r = this.getLead();
            if (!this.projectionDelta || !this.layout || !r.target) {
                this.options.layoutId && (e.opacity = this.latestValues.opacity === void 0 ? 1 : this.latestValues.opacity, e.pointerEvents = xs(t ? .pointerEvents) || ``), this.hasProjected && !Na(this.latestValues) && (e.transform = n ? n({}, ``) : `none`, this.hasProjected = !1);
                return
            }
            e.visibility = ``;
            let i = r.animationValues || r.latestValues;
            this.applyTransformsToTarget();
            let a = ss(this.projectionDeltaWithTransform, this.treeScale, i);
            n && (a = n(i, a)), e.transform = a;
            let {
                x: o,
                y: s
            } = this.projectionDelta;
            e.transformOrigin = `${o.origin*100}% ${s.origin*100}% 0`, r.animationValues ? e.opacity = r === this ? i.opacity ? ? this.latestValues.opacity ? ? 1 : this.preserveOpacity ? this.latestValues.opacity : i.opacityExit : e.opacity = r === this ? i.opacity === void 0 ? `` : i.opacity : i.opacityExit === void 0 ? 0 : i.opacityExit;
            for (let t in ro) {
                if (i[t] === void 0) continue;
                let {
                    correct: n,
                    applyTo: o,
                    isCSSVariable: s
                } = ro[t], c = a === `none` ? i[t] : n(i[t], r);
                if (o) {
                    let t = o.length;
                    for (let n = 0; n < t; n++) e[o[n]] = c
                } else s ? this.options.visualElement.renderState.vars[t] = c : e[t] = c
            }
            this.options.layoutId && (e.pointerEvents = r === this ? xs(t ? .pointerEvents) || `` : `none`)
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(e => e.currentAnimation ? .stop()), this.root.nodes.forEach(Is), this.root.sharedNodes.clear()
        }
    }
}

function js(e) {
    e.updateLayout()
}

function Ms(e) {
    let t = e.resumeFrom ? .snapshot || e.snapshot;
    if (e.isLead() && e.layout && t && e.hasListeners(`didUpdate`)) {
        let {
            layoutBox: n,
            measuredBox: r
        } = e.layout, {
            animationType: i
        } = e.options, a = t.source !== e.layout.source;
        if (i === `size`) os(e => {
            let r = a ? t.measuredBox[e] : t.layoutBox[e],
                i = Ro(r);
            r.min = n[e].min, r.max = r.min + i
        });
        else if (i === `x` || i === `y`) {
            let e = i === `x` ? `y` : `x`;
            jo(a ? t.measuredBox[e] : t.layoutBox[e], n[e])
        } else tc(i, t.layoutBox, n) && os(r => {
            let i = a ? t.measuredBox[r] : t.layoutBox[r],
                o = Ro(n[r]);
            i.max = i.min + o, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[r].max = e.relativeTarget[r].min + o)
        });
        let o = sa();
        Vo(o, n, t.layoutBox);
        let s = sa();
        a ? Vo(s, e.applyTransform(r, !0), t.measuredBox) : Vo(s, n, t.layoutBox);
        let c = !$o(o),
            l = !1;
        if (!e.resumeFrom) {
            let r = e.getClosestProjectingParent();
            if (r && !r.resumeFrom) {
                let {
                    snapshot: i,
                    layout: a
                } = r;
                if (i && a) {
                    let o = e.options.layoutAnchor || void 0,
                        s = G();
                    Go(s, t.layoutBox, i.layoutBox, o);
                    let c = G();
                    Go(c, n, a.layoutBox, o), rs(s, c) || (l = !0), r.options.layoutRoot && (e.relativeTarget = c, e.relativeTargetOrigin = s, e.relativeParent = r)
                }
            }
        }
        e.notifyListeners(`didUpdate`, {
            layout: n,
            snapshot: t,
            delta: s,
            layoutDelta: o,
            hasLayoutChanged: c,
            hasRelativeLayoutChanged: l
        })
    } else if (e.isLead()) {
        let {
            onExitComplete: t
        } = e.options;
        t && t()
    }
    e.options.transition = void 0
}

function Ns(e) {
    na.value && ws.nodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty), e.isTransformDirty || = e.parent.isTransformDirty)
}

function Ps(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}

function Fs(e) {
    e.clearSnapshot()
}

function Is(e) {
    e.clearMeasurements()
}

function Ls(e) {
    e.isLayoutDirty = !0, e.updateLayout()
}

function Rs(e) {
    e.isLayoutDirty = !1
}

function zs(e) {
    e.isAnimationBlocked && e.layout && !e.isLayoutDirty && (e.snapshot = e.layout, e.isLayoutDirty = !0)
}

function Bs(e) {
    let {
        visualElement: t
    } = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify(`BeforeLayoutMeasure`), e.resetTransform()
}

function Vs(e) {
    e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0
}

function Hs(e) {
    e.resolveTargetDelta()
}

function Us(e) {
    e.calcProjection()
}

function Ws(e) {
    e.resetSkewAndRotation()
}

function Gs(e) {
    e.removeLeadSnapshot()
}

function Ks(e, t, n) {
    e.translate = U(t.translate, 0, n), e.scale = U(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint
}

function qs(e, t, n, r) {
    e.min = U(t.min, n.min, r), e.max = U(t.max, n.max, r)
}

function Js(e, t, n, r) {
    qs(e.x, t.x, n.x, r), qs(e.y, t.y, n.y, r)
}

function Ys(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
var Xs = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    },
    Zs = e => typeof navigator < `u` && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
    Qs = Zs(`applewebkit/`) && !Zs(`chrome/`) ? Math.round : b;

function $s(e) {
    e.min = Qs(e.min), e.max = Qs(e.max)
}

function ec(e) {
    $s(e.x), $s(e.y)
}

function tc(e, t, n) {
    return e === `position` || e === `preserve-aspect` && !zo(is(t), is(n), .2)
}

function nc(e) {
    return e !== e.root && e.scroll ? .wasRoot
}
var rc = As({
        attachResizeListener: (e, t) => _s(e, `resize`, t),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body ? .scrollLeft || 0,
            y: document.documentElement.scrollTop || document.body ? .scrollTop || 0
        }),
        checkIsScrollRoot: () => !0
    }),
    ic = {
        current: void 0
    },
    ac = As({
        measureScroll: e => ({
            x: e.scrollLeft,
            y: e.scrollTop
        }),
        defaultParent: () => {
            if (!ic.current) {
                let e = new rc({});
                e.mount(window), e.setOptions({
                    layoutScroll: !0
                }), ic.current = e
            }
            return ic.current
        },
        resetTransform: (e, t) => {
            e.style.transform = t === void 0 ? `none` : t
        },
        checkIsScrollRoot: e => window.getComputedStyle(e).position === `fixed`
    }),
    oc = (0, s.createContext)({
        transformPagePoint: e => e,
        isStatic: !1,
        reducedMotion: `never`
    });

function sc(e = !0) {
    let t = (0, s.useContext)(d);
    if (t === null) return [!0, null];
    let {
        isPresent: n,
        onExitComplete: r,
        register: i
    } = t, a = (0, s.useId)();
    (0, s.useEffect)(() => {
        if (e) return i(a)
    }, [e]);
    let o = (0, s.useCallback)(() => e && r && r(a), [a, r, e]);
    return !n && r ? [!1, o] : [!0]
}
var cc = (0, s.createContext)({
        strict: !1
    }),
    lc = {
        animation: [`animate`, `variants`, `whileHover`, `whileTap`, `exit`, `whileInView`, `whileFocus`, `whileDrag`],
        exit: [`exit`],
        drag: [`drag`, `dragControls`],
        focus: [`whileFocus`],
        hover: [`whileHover`, `onHoverStart`, `onHoverEnd`],
        tap: [`whileTap`, `onTap`, `onTapStart`, `onTapCancel`],
        pan: [`onPan`, `onPanStart`, `onPanSessionStart`, `onPanEnd`],
        inView: [`whileInView`, `onViewportEnter`, `onViewportLeave`],
        layout: [`layout`, `layoutId`]
    },
    uc = !1;

function dc() {
    if (uc) return;
    let e = {};
    for (let t in lc) e[t] = {
        isEnabled: e => lc[t].some(t => !!e[t])
    };
    Ca(e), uc = !0
}

function fc() {
    return dc(), wa()
}

function pc(e) {
    let t = fc();
    for (let n in e) t[n] = { ...t[n],
        ...e[n]
    };
    Ca(t)
}
var mc = new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(`.`));

function hc(e) {
    return e.startsWith(`while`) || e.startsWith(`drag`) && e !== `draggable` || e.startsWith(`layout`) || e.startsWith(`onTap`) || e.startsWith(`onPan`) || e.startsWith(`onLayout`) || mc.has(e)
}
var gc = e({
        default: () => _c
    }),
    _c, vc = t((() => {
        throw _c = {}, Error(`Could not resolve "@emotion/is-prop-valid" imported by "framer-motion". Is it installed?`)
    })),
    yc = e => !hc(e);

function bc(e) {
    typeof e == `function` && (yc = t => t.startsWith(`on`) ? !hc(t) : e(t))
}
try {
    bc((vc(), r(gc)).default)
} catch {}

function xc(e, t, n) {
    let r = {};
    for (let i in e) i === `values` && typeof e.values == `object` || Br(e[i]) || (yc(i) || n === !0 && hc(i) || !t && !hc(i) || e.draggable && i.startsWith(`onDrag`)) && (r[i] = e[i]);
    return r
}
var Sc = (0, s.createContext)({});

function Cc(e, t) {
    if (ma(e)) {
        let {
            initial: t,
            animate: n
        } = e;
        return {
            initial: t === !1 || da(t) ? t : void 0,
            animate: da(n) ? n : void 0
        }
    }
    return e.inherit === !1 ? {} : t
}

function wc(e) {
    let {
        initial: t,
        animate: n
    } = Cc(e, (0, s.useContext)(Sc));
    return (0, s.useMemo)(() => ({
        initial: t,
        animate: n
    }), [Tc(t), Tc(n)])
}

function Tc(e) {
    return Array.isArray(e) ? e.join(` `) : e
}
var Ec = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});

function Dc(e, t, n) {
    for (let r in t) !Br(t[r]) && !io(r, n) && (e[r] = t[r])
}

function Oc({
    transformTemplate: e
}, t) {
    return (0, s.useMemo)(() => {
        let n = Ec();
        return Qa(n, t, e), Object.assign({}, n.vars, n.style)
    }, [t])
}

function kc(e, t) {
    let n = e.style || {},
        r = {};
    return Dc(r, n, e), Object.assign(r, Oc(e, t)), r
}

function Ac(e, t) {
    let n = {},
        r = kc(e, t);
    return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = `none`, r.touchAction = e.drag === !0 ? `none` : `pan-${e.drag===`x`?`y`:`x`}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n
}
var jc = () => ({ ...Ec(),
    attrs: {}
});

function Mc(e, t, n, r) {
    let i = (0, s.useMemo)(() => {
        let n = jc();
        return ho(n, t, _o(r), e.transformTemplate, e.style), { ...n.attrs,
            style: { ...n.style
            }
        }
    }, [t]);
    if (e.style) {
        let t = {};
        Dc(t, e.style, e), i.style = { ...t,
            ...i.style
        }
    }
    return i
}
var Nc = [`animate`, `circle`, `defs`, `desc`, `ellipse`, `g`, `image`, `line`, `filter`, `marker`, `mask`, `metadata`, `path`, `pattern`, `polygon`, `polyline`, `rect`, `stop`, `switch`, `symbol`, `svg`, `text`, `tspan`, `use`, `view`];

function Pc(e) {
    return typeof e != `string` || e.includes(`-`) ? !1 : !!(Nc.indexOf(e) > -1 || /[A-Z]/u.test(e))
}

function Fc(e, t, n, {
    latestValues: r
}, i, a = !1, o) {
    let c = (o ? ? Pc(e) ? Mc : Ac)(t, r, i, e),
        l = xc(t, typeof e == `string`, a),
        u = e === s.Fragment ? {} : { ...l,
            ...c,
            ref: n
        },
        {
            children: d
        } = t,
        f = (0, s.useMemo)(() => Br(d) ? d.get() : d, [d]);
    return (0, s.createElement)(e, { ...u,
        children: f
    })
}

function Ic({
    scrapeMotionValuesFromProps: e,
    createRenderState: t
}, n, r, i) {
    return {
        latestValues: Lc(n, r, i, e),
        renderState: t()
    }
}

function Lc(e, t, n, r) {
    let i = {},
        a = r(e, {});
    for (let e in a) i[e] = xs(a[e]);
    let {
        initial: o,
        animate: s
    } = e, c = ma(e), l = ha(e);
    t && l && !c && e.inherit !== !1 && (o === void 0 && (o = t.initial), s === void 0 && (s = t.animate));
    let u = n ? n.initial === !1 : !1;
    u || = o === !1;
    let d = u ? s : o;
    if (d && typeof d != `boolean` && !ua(d)) {
        let t = Array.isArray(d) ? d : [d];
        for (let n = 0; n < t.length; n++) {
            let r = Nr(e, t[n]);
            if (r) {
                let {
                    transitionEnd: e,
                    transition: t,
                    ...n
                } = r;
                for (let e in n) {
                    let t = n[e];
                    if (Array.isArray(t)) {
                        let e = u ? t.length - 1 : 0;
                        t = t[e]
                    }
                    t !== null && (i[e] = t)
                }
                for (let t in e) i[t] = e[t]
            }
        }
    }
    return i
}
var Rc = e => (t, n) => {
        let r = (0, s.useContext)(Sc),
            i = (0, s.useContext)(d),
            a = () => Ic(e, t, r, i);
        return n ? a() : l(a)
    },
    zc = Rc({
        scrapeMotionValuesFromProps: ao,
        createRenderState: Ec
    }),
    Bc = Rc({
        scrapeMotionValuesFromProps: yo,
        createRenderState: jc
    }),
    Vc = Symbol.for(`motionComponentSymbol`);

function Hc(e, t, n) {
    let r = (0, s.useRef)(n);
    (0, s.useInsertionEffect)(() => {
        r.current = n
    });
    let i = (0, s.useRef)(null);
    return (0, s.useCallback)(n => {
        n && e.onMount ? .(n), t && (n ? t.mount(n) : t.unmount());
        let a = r.current;
        if (typeof a == `function`)
            if (n) {
                let e = a(n);
                typeof e == `function` && (i.current = e)
            } else i.current ? (i.current(), i.current = null) : a(n);
        else a && (a.current = n)
    }, [t])
}
var Uc = (0, s.createContext)({});

function Wc(e) {
    return e && typeof e == `object` && Object.prototype.hasOwnProperty.call(e, `current`)
}

function Gc(e, t, n, r, i, a) {
    let {
        visualElement: o
    } = (0, s.useContext)(Sc), c = (0, s.useContext)(cc), l = (0, s.useContext)(d), f = (0, s.useContext)(oc), p = f.reducedMotion, m = f.skipAnimations, h = (0, s.useRef)(null), g = (0, s.useRef)(!1);
    r || = c.renderer, !h.current && r && (h.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceContext: l,
        blockInitialAnimation: l ? l.initial === !1 : !1,
        reducedMotionConfig: p,
        skipAnimations: m,
        isSVG: a
    }), g.current && h.current && (h.current.manuallyAnimateOnMount = !0));
    let _ = h.current,
        v = (0, s.useContext)(Uc);
    _ && !_.projection && i && (_.type === `html` || _.type === `svg`) && Kc(h.current, n, i, v);
    let y = (0, s.useRef)(!1);
    (0, s.useInsertionEffect)(() => {
        _ && y.current && _.update(n, l)
    });
    let b = n[Wr],
        x = (0, s.useRef)(!!b && typeof window < `u` && !window.MotionHandoffIsComplete ? .(b) && window.MotionHasOptimisedAnimation ? .(b));
    return u(() => {
        g.current = !0, _ && (y.current = !0, window.MotionIsMounted = !0, _.updateFeatures(), _.scheduleRenderMicrotask(), x.current && _.animationState && _.animationState.animateChanges())
    }), (0, s.useEffect)(() => {
        _ && (!x.current && _.animationState && _.animationState.animateChanges(), x.current && = (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete ? .(b)
        }), !1), _.enteringChildren = void 0)
    }), _
}

function Kc(e, t, n, r) {
    let {
        layoutId: i,
        layout: a,
        drag: o,
        dragConstraints: s,
        layoutScroll: c,
        layoutRoot: l,
        layoutAnchor: u,
        layoutCrossfade: d
    } = t;
    e.projection = new n(e.latestValues, t[`data-framer-portal-id`] ? void 0 : qc(e.parent)), e.projection.setOptions({
        layoutId: i,
        layout: a,
        alwaysMeasureLayout: !!o || s && Wc(s),
        visualElement: e,
        animationType: typeof a == `string` ? a : `both`,
        initialPromotionConfig: r,
        crossfade: d,
        layoutScroll: c,
        layoutRoot: l,
        layoutAnchor: u
    })
}

function qc(e) {
    if (e) return e.options.allowProjection === !1 ? qc(e.parent) : e.projection
}
var K = o();

function Jc(e, {
    forwardMotionProps: t = !1,
    type: n
} = {}, r, i) {
    r && pc(r);
    let a = n ? n === `svg` : Pc(e),
        o = a ? Bc : zc;

    function c(n, c) {
        let l, u = { ...(0, s.useContext)(oc),
                ...n,
                layoutId: Yc(n)
            },
            {
                isStatic: d
            } = u,
            f = wc(n),
            p = o(n, d);
        if (!d && typeof window < `u`) {
            Xc(u, r);
            let t = Zc(u);
            l = t.MeasureLayout, f.visualElement = Gc(e, p, u, i, t.ProjectionNode, a)
        }
        return (0, K.jsxs)(Sc.Provider, {
            value: f,
            children: [l && f.visualElement ? (0, K.jsx)(l, {
                visualElement: f.visualElement,
                ...u
            }) : null, Fc(e, n, Hc(p, f.visualElement, c), p, d, t, a)]
        })
    }
    c.displayName = `motion.${typeof e==`string`?e:`create(${e.displayName??e.name??``})`}`;
    let l = (0, s.forwardRef)(c);
    return l[Vc] = e, l
}

function Yc({
    layoutId: e
}) {
    let t = (0, s.useContext)(c).id;
    return t && e !== void 0 ? t + `-` + e : e
}

function Xc(e, t) {
    (0, s.useContext)(cc).strict
}

function Zc(e) {
    let {
        drag: t,
        layout: n
    } = fc();
    if (!t && !n) return {};
    let r = { ...t,
        ...n
    };
    return {
        MeasureLayout: t ? .isEnabled(e) || n ? .isEnabled(e) ? r.MeasureLayout : void 0,
        ProjectionNode: r.ProjectionNode
    }
}

function Qc(e, t) {
    if (typeof Proxy > `u`) return Jc;
    let n = new Map,
        r = (n, r) => Jc(n, r, e, t);
    return new Proxy((e, t) => r(e, t), {
        get: (i, a) => a === `create` ? r : (n.has(a) || n.set(a, Jc(a, void 0, e, t)), n.get(a))
    })
}
var $c = (e, t) => t.isSVG ? ? Pc(e) ? new bo(t) : new so(t, {
        allowProjection: e !== s.Fragment
    }),
    el = class extends Da {
        constructor(e) {
            super(e), e.animationState || = Do(e)
        }
        updateAnimationControlsSubscription() {
            let {
                animate: e
            } = this.node.getProps();
            ua(e) && (this.unmountControls = e.subscribe(this.node))
        }
        mount() {
            this.updateAnimationControlsSubscription()
        }
        update() {
            let {
                animate: e
            } = this.node.getProps(), {
                animate: t
            } = this.node.prevProps || {};
            e !== t && this.updateAnimationControlsSubscription()
        }
        unmount() {
            this.node.animationState.reset(), this.unmountControls ? .()
        }
    },
    tl = 0,
    nl = {
        animation: {
            Feature: el
        },
        exit: {
            Feature: class extends Da {
                constructor() {
                    super(...arguments), this.id = tl++, this.isExitComplete = !1
                }
                update() {
                    if (!this.node.presenceContext) return;
                    let {
                        isPresent: e,
                        onExitComplete: t
                    } = this.node.presenceContext, {
                        isPresent: n
                    } = this.node.prevPresenceContext || {};
                    if (!this.node.animationState || e === n) return;
                    if (e && n === !1) {
                        if (this.isExitComplete) {
                            let {
                                initial: e,
                                custom: t
                            } = this.node.getProps();
                            if (typeof e == `string` || typeof e == `object` && e && !Array.isArray(e)) {
                                let n = Pr(this.node, e, t);
                                if (n) {
                                    let {
                                        transition: e,
                                        transitionEnd: t,
                                        ...r
                                    } = n;
                                    for (let e in r) this.node.getValue(e) ? .jump(r[e])
                                }
                            }
                            this.node.animationState.reset(), this.node.animationState.animateChanges()
                        } else this.node.animationState.setActive(`exit`, !1);
                        this.isExitComplete = !1;
                        return
                    }
                    let r = this.node.animationState.setActive(`exit`, !e);
                    t && !e && r.then(() => {
                        this.isExitComplete = !0, t(this.id)
                    })
                }
                mount() {
                    let {
                        register: e,
                        onExitComplete: t
                    } = this.node.presenceContext || {};
                    t && t(this.id), e && (this.unmount = e(this.id))
                }
                unmount() {}
            }
        }
    };

function rl(e) {
    return {
        point: {
            x: e.pageX,
            y: e.pageY
        }
    }
}
var il = e => t => ki(t) && e(t, rl(t));

function al(e, t, n, r) {
    return _s(e, t, il(n), r)
}
var ol = ({
        current: e
    }) => e ? e.ownerDocument.defaultView : null,
    sl = (e, t) => Math.abs(e - t);

function cl(e, t) {
    let n = sl(e.x, t.x),
        r = sl(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
var ll = new Set([`auto`, `scroll`]),
    ul = class {
        constructor(e, t, {
            transformPagePoint: n,
            contextWindow: r = window,
            dragSnapToOrigin: i = !1,
            distanceThreshold: a = 3,
            element: o
        } = {}) {
            if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = new Map, this.removeScrollListeners = null, this.onElementScroll = e => {
                    this.handleScroll(e.target)
                }, this.onWindowScroll = () => {
                    this.handleScroll(window)
                }, this.updatePoint = () => {
                    if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                    this.lastRawMoveEventInfo && (this.lastMoveEventInfo = dl(this.lastRawMoveEventInfo, this.transformPagePoint));
                    let e = pl(this.lastMoveEventInfo, this.history),
                        t = this.startEvent !== null,
                        n = cl(e.offset, {
                            x: 0,
                            y: 0
                        }) >= this.distanceThreshold;
                    if (!t && !n) return;
                    let {
                        point: r
                    } = e, {
                        timestamp: i
                    } = B;
                    this.history.push({ ...r,
                        timestamp: i
                    });
                    let {
                        onStart: a,
                        onMove: o
                    } = this.handlers;
                    t || (a && a(this.lastMoveEvent, e), this.startEvent = this.lastMoveEvent), o && o(this.lastMoveEvent, e)
                }, this.handlePointerMove = (e, t) => {
                    this.lastMoveEvent = e, this.lastRawMoveEventInfo = t, this.lastMoveEventInfo = dl(t, this.transformPagePoint), z.update(this.updatePoint, !0)
                }, this.handlePointerUp = (e, t) => {
                    this.end();
                    let {
                        onEnd: n,
                        onSessionEnd: r,
                        resumeAnimation: i
                    } = this.handlers;
                    if ((this.dragSnapToOrigin || !this.startEvent) && i && i(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                    let a = pl(e.type === `pointercancel` ? this.lastMoveEventInfo : dl(t, this.transformPagePoint), this.history);
                    this.startEvent && n && n(e, a), r && r(e, a)
                }, !ki(e)) return;
            this.dragSnapToOrigin = i, this.handlers = t, this.transformPagePoint = n, this.distanceThreshold = a, this.contextWindow = r || window;
            let s = dl(rl(e), this.transformPagePoint),
                {
                    point: c
                } = s,
                {
                    timestamp: l
                } = B;
            this.history = [{ ...c,
                timestamp: l
            }];
            let {
                onSessionStart: u
            } = t;
            u && u(e, pl(s, this.history));
            let d = {
                passive: !0,
                capture: !0
            };
            this.removeListeners = x(al(this.contextWindow, `pointermove`, this.handlePointerMove, d), al(this.contextWindow, `pointerup`, this.handlePointerUp, d), al(this.contextWindow, `pointercancel`, this.handlePointerUp, d)), o && this.startScrollTracking(o)
        }
        startScrollTracking(e) {
            let t = e.parentElement;
            for (; t;) {
                let e = getComputedStyle(t);
                (ll.has(e.overflowX) || ll.has(e.overflowY)) && this.scrollPositions.set(t, {
                    x: t.scrollLeft,
                    y: t.scrollTop
                }), t = t.parentElement
            }
            this.scrollPositions.set(window, {
                x: window.scrollX,
                y: window.scrollY
            }), window.addEventListener(`scroll`, this.onElementScroll, {
                capture: !0
            }), window.addEventListener(`scroll`, this.onWindowScroll), this.removeScrollListeners = () => {
                window.removeEventListener(`scroll`, this.onElementScroll, {
                    capture: !0
                }), window.removeEventListener(`scroll`, this.onWindowScroll)
            }
        }
        handleScroll(e) {
            let t = this.scrollPositions.get(e);
            if (!t) return;
            let n = e === window,
                r = n ? {
                    x: window.scrollX,
                    y: window.scrollY
                } : {
                    x: e.scrollLeft,
                    y: e.scrollTop
                },
                i = {
                    x: r.x - t.x,
                    y: r.y - t.y
                };
            i.x === 0 && i.y === 0 || (n ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += i.x, this.lastMoveEventInfo.point.y += i.y) : this.history.length > 0 && (this.history[0].x -= i.x, this.history[0].y -= i.y), this.scrollPositions.set(e, r), z.update(this.updatePoint, !0))
        }
        updateHandlers(e) {
            this.handlers = e
        }
        end() {
            this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), ge(this.updatePoint)
        }
    };

function dl(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}

function fl(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}

function pl({
    point: e
}, t) {
    return {
        point: e,
        delta: fl(e, hl(t)),
        offset: fl(e, ml(t)),
        velocity: gl(t, .1)
    }
}

function ml(e) {
    return e[0]
}

function hl(e) {
    return e[e.length - 1]
}

function gl(e, t) {
    if (e.length < 2) return {
        x: 0,
        y: 0
    };
    let n = e.length - 1,
        r = null,
        i = hl(e);
    for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > w(t)));) n--;
    if (!r) return {
        x: 0,
        y: 0
    };
    r === e[0] && e.length > 2 && i.timestamp - r.timestamp > w(t) * 2 && (r = e[1]);
    let a = T(i.timestamp - r.timestamp);
    if (a === 0) return {
        x: 0,
        y: 0
    };
    let o = {
        x: (i.x - r.x) / a,
        y: (i.y - r.y) / a
    };
    return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
}

function _l(e, {
    min: t,
    max: n
}, r) {
    return t !== void 0 && e < t ? e = r ? U(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? U(n, e, r.max) : Math.min(e, n)), e
}

function vl(e, t, n) {
    return {
        min: t === void 0 ? void 0 : e.min + t,
        max: n === void 0 ? void 0 : e.max + n - (e.max - e.min)
    }
}

function yl(e, {
    top: t,
    left: n,
    bottom: r,
    right: i
}) {
    return {
        x: vl(e.x, n, i),
        y: vl(e.y, t, r)
    }
}

function bl(e, t) {
    let n = t.min - e.min,
        r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
        min: n,
        max: r
    }
}

function xl(e, t) {
    return {
        x: bl(e.x, t.x),
        y: bl(e.y, t.y)
    }
}

function Sl(e, t) {
    let n = .5,
        r = Ro(e),
        i = Ro(t);
    return i > r ? n = S(t.min, t.max - r, e.min) : r > i && (n = S(e.min, e.max - i, t.min)), m(0, 1, n)
}

function Cl(e, t) {
    let n = {};
    return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n
}
var wl = .35;

function Tl(e = wl) {
    return e === !1 ? e = 0 : e === !0 && (e = wl), {
        x: El(e, `left`, `right`),
        y: El(e, `top`, `bottom`)
    }
}

function El(e, t, n) {
    return {
        min: Dl(e, t),
        max: Dl(e, n)
    }
}

function Dl(e, t) {
    return typeof e == `number` ? e : e[t] || 0
}
var Ol = new WeakMap,
    kl = class {
        constructor(e) {
            this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                x: 0,
                y: 0
            }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = G(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = e
        }
        start(e, {
            snapToCursor: t = !1,
            distanceThreshold: n
        } = {}) {
            let {
                presenceContext: r
            } = this.visualElement;
            if (r && r.isPresent === !1) return;
            let i = e => {
                    t && this.snapToCursor(rl(e).point), this.stopAnimation()
                },
                a = (e, t) => {
                    let {
                        drag: n,
                        dragPropagation: r,
                        onDragStart: i
                    } = this.getProps();
                    if (n && !r && (this.openDragLock && this.openDragLock(), this.openDragLock = wi(n), !this.openDragLock)) return;
                    this.latestPointerEvent = e, this.latestPanInfo = t, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), os(e => {
                        let t = this.getAxisMotionValue(e).get() || 0;
                        if (Ue.test(t)) {
                            let {
                                projection: n
                            } = this.visualElement;
                            if (n && n.layout) {
                                let r = n.layout.layoutBox[e];
                                r && (t = Ro(r) * (parseFloat(t) / 100))
                            }
                        }
                        this.originPoint[e] = t
                    }), i && z.update(() => i(e, t), !1, !0), Hr(this.visualElement, `transform`);
                    let {
                        animationState: a
                    } = this.visualElement;
                    a && a.setActive(`whileDrag`, !0)
                },
                o = (e, t) => {
                    this.latestPointerEvent = e, this.latestPanInfo = t;
                    let {
                        dragPropagation: n,
                        dragDirectionLock: r,
                        onDirectionLock: i,
                        onDrag: a
                    } = this.getProps();
                    if (!n && !this.openDragLock) return;
                    let {
                        offset: o
                    } = t;
                    if (r && this.currentDirection === null) {
                        this.currentDirection = Nl(o), this.currentDirection !== null && i && i(this.currentDirection);
                        return
                    }
                    this.updateAxis(`x`, t.point, o), this.updateAxis(`y`, t.point, o), this.visualElement.render(), a && z.update(() => a(e, t), !1, !0)
                },
                s = (e, t) => {
                    this.latestPointerEvent = e, this.latestPanInfo = t, this.stop(e, t), this.latestPointerEvent = null, this.latestPanInfo = null
                },
                c = () => {
                    let {
                        dragSnapToOrigin: e
                    } = this.getProps();
                    (e || this.constraints) && this.startAnimation({
                        x: 0,
                        y: 0
                    })
                },
                {
                    dragSnapToOrigin: l
                } = this.getProps();
            this.panSession = new ul(e, {
                onSessionStart: i,
                onStart: a,
                onMove: o,
                onSessionEnd: s,
                resumeAnimation: c
            }, {
                transformPagePoint: this.visualElement.getTransformPagePoint(),
                dragSnapToOrigin: l,
                distanceThreshold: n,
                contextWindow: ol(this.visualElement),
                element: this.visualElement.current
            })
        }
        stop(e, t) {
            let n = e || this.latestPointerEvent,
                r = t || this.latestPanInfo,
                i = this.isDragging;
            if (this.cancel(), !i || !r || !n) return;
            let {
                velocity: a
            } = r;
            this.startAnimation(a);
            let {
                onDragEnd: o
            } = this.getProps();
            o && z.postRender(() => o(n, r))
        }
        cancel() {
            this.isDragging = !1;
            let {
                projection: e,
                animationState: t
            } = this.visualElement;
            e && (e.isAnimationBlocked = !1), this.endPanSession();
            let {
                dragPropagation: n
            } = this.getProps();
            !n && this.openDragLock && (this.openDragLock(), this.openDragLock = null), t && t.setActive(`whileDrag`, !1)
        }
        endPanSession() {
            this.panSession && this.panSession.end(), this.panSession = void 0
        }
        updateAxis(e, t, n) {
            let {
                drag: r
            } = this.getProps();
            if (!n || !Ml(e, r, this.currentDirection)) return;
            let i = this.getAxisMotionValue(e),
                a = this.originPoint[e] + n[e];
            this.constraints && this.constraints[e] && (a = _l(a, this.constraints[e], this.elastic[e])), i.set(a)
        }
        resolveConstraints() {
            let {
                dragConstraints: e,
                dragElastic: t
            } = this.getProps(), n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection ? .layout, r = this.constraints;
            e && Wc(e) ? this.constraints || = this.resolveRefConstraints() : e && n ? this.constraints = yl(n.layoutBox, e) : this.constraints = !1, this.elastic = Tl(t), r !== this.constraints && !Wc(e) && n && this.constraints && !this.hasMutatedConstraints && os(e => {
                this.constraints !== !1 && this.getAxisMotionValue(e) && (this.constraints[e] = Cl(n.layoutBox[e], this.constraints[e]))
            })
        }
        resolveRefConstraints() {
            let {
                dragConstraints: e,
                onMeasureDragConstraints: t
            } = this.getProps();
            if (!e || !Wc(e)) return !1;
            let n = e.current,
                {
                    projection: r
                } = this.visualElement;
            if (!r || !r.layout) return !1;
            r.root && (r.root.scroll = void 0, r.root.updateScroll());
            let i = Ja(n, r.root, this.visualElement.getTransformPagePoint()),
                a = xl(r.layout.layoutBox, i);
            if (t) {
                let e = t(ka(a));
                this.hasMutatedConstraints = !!e, e && (a = Oa(e))
            }
            return a
        }
        startAnimation(e) {
            let {
                drag: t,
                dragMomentum: n,
                dragElastic: r,
                dragTransition: i,
                dragSnapToOrigin: a,
                onDragTransitionEnd: o
            } = this.getProps(), s = this.constraints || {}, c = os(o => {
                if (!Ml(o, t, this.currentDirection)) return;
                let c = s && s[o] || {};
                (a === !0 || a === o) && (c = {
                    min: 0,
                    max: 0
                });
                let l = r ? 200 : 1e6,
                    u = r ? 40 : 1e7,
                    d = {
                        type: `inertia`,
                        velocity: n ? e[o] : 0,
                        bounceStiffness: l,
                        bounceDamping: u,
                        timeConstant: 750,
                        restDelta: 1,
                        restSpeed: 10,
                        ...i,
                        ...c
                    };
                return this.startAxisValueAnimation(o, d)
            });
            return Promise.all(c).then(o)
        }
        startAxisValueAnimation(e, t) {
            let n = this.getAxisMotionValue(e);
            return Hr(this.visualElement, e), n.start(Or(e, n, 0, t, this.visualElement, !1))
        }
        stopAnimation() {
            os(e => this.getAxisMotionValue(e).stop())
        }
        getAxisMotionValue(e) {
            let t = `_drag${e.toUpperCase()}`;
            return this.visualElement.getProps()[t] || this.visualElement.getValue(e, this.visualElement.latestValues[e] ? ? 0)
        }
        snapToCursor(e) {
            os(t => {
                let {
                    drag: n
                } = this.getProps();
                if (!Ml(t, n, this.currentDirection)) return;
                let {
                    projection: r
                } = this.visualElement, i = this.getAxisMotionValue(t);
                if (r && r.layout) {
                    let {
                        min: n,
                        max: a
                    } = r.layout.layoutBox[t], o = i.get() || 0;
                    i.set(e[t] - U(n, a, .5) + o)
                }
            })
        }
        scalePositionWithinConstraints() {
            if (!this.visualElement.current) return;
            let {
                drag: e,
                dragConstraints: t
            } = this.getProps(), {
                projection: n
            } = this.visualElement;
            if (!Wc(t) || !n || !this.constraints) return;
            this.stopAnimation();
            let r = {
                x: 0,
                y: 0
            };
            os(e => {
                let t = this.getAxisMotionValue(e);
                if (t && this.constraints !== !1) {
                    let n = t.get();
                    r[e] = Sl({
                        min: n,
                        max: n
                    }, this.constraints[e])
                }
            });
            let {
                transformTemplate: i
            } = this.visualElement.getProps();
            this.visualElement.current.style.transform = i ? i({}, ``) : `none`, n.root && n.root.updateScroll(), n.updateLayout(), this.constraints = !1, this.resolveConstraints(), os(t => {
                if (!Ml(t, e, null)) return;
                let n = this.getAxisMotionValue(t),
                    {
                        min: i,
                        max: a
                    } = this.constraints[t];
                n.set(U(i, a, r[t]))
            }), this.visualElement.render()
        }
        addListeners() {
            if (!this.visualElement.current) return;
            Ol.set(this.visualElement, this);
            let e = this.visualElement.current,
                t = al(e, `pointerdown`, t => {
                    let {
                        drag: n,
                        dragListener: r = !0
                    } = this.getProps(), i = t.target, a = i !== e && Ni(i);
                    n && r && !a && this.start(t)
                }),
                n, r = () => {
                    let {
                        dragConstraints: t
                    } = this.getProps();
                    Wc(t) && t.current && (this.constraints = this.resolveRefConstraints(), n || = jl(e, t.current, () => this.scalePositionWithinConstraints()))
                },
                {
                    projection: i
                } = this.visualElement,
                a = i.addEventListener(`measure`, r);
            i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), z.read(r);
            let o = _s(window, `resize`, () => this.scalePositionWithinConstraints()),
                s = i.addEventListener(`didUpdate`, (({
                    delta: e,
                    hasLayoutChanged: t
                }) => {
                    this.isDragging && t && (os(t => {
                        let n = this.getAxisMotionValue(t);
                        n && (this.originPoint[t] += e[t].translate, n.set(n.get() + e[t].translate))
                    }), this.visualElement.render())
                }));
            return () => {
                o(), t(), a(), s && s(), n && n()
            }
        }
        getProps() {
            let e = this.visualElement.getProps(),
                {
                    drag: t = !1,
                    dragDirectionLock: n = !1,
                    dragPropagation: r = !1,
                    dragConstraints: i = !1,
                    dragElastic: a = wl,
                    dragMomentum: o = !0
                } = e;
            return { ...e,
                drag: t,
                dragDirectionLock: n,
                dragPropagation: r,
                dragConstraints: i,
                dragElastic: a,
                dragMomentum: o
            }
        }
    };

function Al(e) {
    let t = !0;
    return () => {
        if (t) {
            t = !1;
            return
        }
        e()
    }
}

function jl(e, t, n) {
    let r = ta(e, Al(n)),
        i = ta(t, Al(n));
    return () => {
        r(), i()
    }
}

function Ml(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}

function Nl(e, t = 10) {
    let n = null;
    return Math.abs(e.y) > t ? n = `y` : Math.abs(e.x) > t && (n = `x`), n
}
var Pl = class extends Da {
        constructor(e) {
            super(e), this.removeGroupControls = b, this.removeListeners = b, this.controls = new kl(e)
        }
        mount() {
            let {
                dragControls: e
            } = this.node.getProps();
            e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || b
        }
        update() {
            let {
                dragControls: e
            } = this.node.getProps(), {
                dragControls: t
            } = this.node.prevProps || {};
            e !== t && (this.removeGroupControls(), e && (this.removeGroupControls = e.subscribe(this.controls)))
        }
        unmount() {
            this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession()
        }
    },
    Fl = e => (t, n) => {
        e && z.update(() => e(t, n), !1, !0)
    },
    Il = class extends Da {
        constructor() {
            super(...arguments), this.removePointerDownListener = b
        }
        onPointerDown(e) {
            this.session = new ul(e, this.createPanHandlers(), {
                transformPagePoint: this.node.getTransformPagePoint(),
                contextWindow: ol(this.node)
            })
        }
        createPanHandlers() {
            let {
                onPanSessionStart: e,
                onPanStart: t,
                onPan: n,
                onPanEnd: r
            } = this.node.getProps();
            return {
                onSessionStart: Fl(e),
                onStart: Fl(t),
                onMove: Fl(n),
                onEnd: (e, t) => {
                    delete this.session, r && z.postRender(() => r(e, t))
                }
            }
        }
        mount() {
            this.removePointerDownListener = al(this.node.current, `pointerdown`, e => this.onPointerDown(e))
        }
        update() {
            this.session && this.session.updateHandlers(this.createPanHandlers())
        }
        unmount() {
            this.removePointerDownListener(), this.session && this.session.end()
        }
    },
    Ll = !1,
    Rl = class extends s.Component {
        componentDidMount() {
            let {
                visualElement: e,
                layoutGroup: t,
                switchLayoutGroup: n,
                layoutId: r
            } = this.props, {
                projection: i
            } = e;
            i && (t.group && t.group.add(i), n && n.register && r && n.register(i), Ll && i.root.didUpdate(), i.addEventListener(`animationComplete`, () => {
                this.safeToRemove()
            }), i.setOptions({ ...i.options,
                layoutDependency: this.props.layoutDependency,
                onExitComplete: () => this.safeToRemove()
            })), Cs.hasEverUpdated = !0
        }
        getSnapshotBeforeUpdate(e) {
            let {
                layoutDependency: t,
                visualElement: n,
                drag: r,
                isPresent: i
            } = this.props, {
                projection: a
            } = n;
            return a ? (a.isPresent = i, e.layoutDependency !== t && a.setOptions({ ...a.options,
                layoutDependency: t
            }), Ll = !0, r || e.layoutDependency !== t || t === void 0 || e.isPresent !== i ? a.willUpdate() : this.safeToRemove(), e.isPresent !== i && (i ? a.promote() : a.relegate() || z.postRender(() => {
                let e = a.getStack();
                (!e || !e.members.length) && this.safeToRemove()
            })), null) : null
        }
        componentDidUpdate() {
            let {
                visualElement: e,
                layoutAnchor: t
            } = this.props, {
                projection: n
            } = e;
            n && (n.options.layoutAnchor = t, n.root.didUpdate(), bi.postRender(() => {
                !n.currentAnimation && n.isLead() && this.safeToRemove()
            }))
        }
        componentWillUnmount() {
            let {
                visualElement: e,
                layoutGroup: t,
                switchLayoutGroup: n
            } = this.props, {
                projection: r
            } = e;
            Ll = !0, r && (r.scheduleCheckAfterUnmount(), t && t.group && t.group.remove(r), n && n.deregister && n.deregister(r))
        }
        safeToRemove() {
            let {
                safeToRemove: e
            } = this.props;
            e && e()
        }
        render() {
            return null
        }
    };

function zl(e) {
    let [t, n] = sc(), r = (0, s.useContext)(c);
    return (0, K.jsx)(Rl, { ...e,
        layoutGroup: r,
        switchLayoutGroup: (0, s.useContext)(Uc),
        isPresent: t,
        safeToRemove: n
    })
}
var Bl = {
    pan: {
        Feature: Il
    },
    drag: {
        Feature: Pl,
        ProjectionNode: ac,
        MeasureLayout: zl
    }
};

function Vl(e, t, n) {
    let {
        props: r
    } = e;
    e.animationState && r.whileHover && e.animationState.setActive(`whileHover`, n === `Start`);
    let i = r[`onHover` + n];
    i && z.postRender(() => i(t, rl(t)))
}
var Hl = class extends Da {
        mount() {
            let {
                current: e
            } = this.node;
            e && (this.unmount = Di(e, (e, t) => (Vl(this.node, t, `Start`), e => Vl(this.node, e, `End`))))
        }
        unmount() {}
    },
    Ul = class extends Da {
        constructor() {
            super(...arguments), this.isActive = !1
        }
        onFocus() {
            let e = !1;
            try {
                e = this.node.current.matches(`:focus-visible`)
            } catch {
                e = !0
            }!e || !this.node.animationState || (this.node.animationState.setActive(`whileFocus`, !0), this.isActive = !0)
        }
        onBlur() {
            !this.isActive || !this.node.animationState || (this.node.animationState.setActive(`whileFocus`, !1), this.isActive = !1)
        }
        mount() {
            this.unmount = x(_s(this.node.current, `focus`, () => this.onFocus()), _s(this.node.current, `blur`, () => this.onBlur()))
        }
        unmount() {}
    };

function Wl(e, t, n) {
    let {
        props: r
    } = e;
    if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
    e.animationState && r.whileTap && e.animationState.setActive(`whileTap`, n === `Start`);
    let i = r[`onTap` + (n === `End` ? `` : n)];
    i && z.postRender(() => i(t, rl(t)))
}
var Gl = class extends Da {
        mount() {
            let {
                current: e
            } = this.node;
            if (!e) return;
            let {
                globalTapTarget: t,
                propagate: n
            } = this.node.props;
            this.unmount = Bi(e, (e, t) => (Wl(this.node, t, `Start`), (e, {
                success: t
            }) => Wl(this.node, e, t ? `End` : `Cancel`)), {
                useGlobalTarget: t,
                stopPropagation: n ? .tap === !1
            })
        }
        unmount() {}
    },
    Kl = new WeakMap,
    ql = new WeakMap,
    Jl = e => {
        let t = Kl.get(e.target);
        t && t(e)
    },
    Yl = e => {
        e.forEach(Jl)
    };

function Xl({
    root: e,
    ...t
}) {
    let n = e || document;
    ql.has(n) || ql.set(n, {});
    let r = ql.get(n),
        i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(Yl, {
        root: e,
        ...t
    })), r[i]
}

function Zl(e, t, n) {
    let r = Xl(t);
    return Kl.set(e, n), r.observe(e), () => {
        Kl.delete(e), r.unobserve(e)
    }
}
var Ql = {
        some: 0,
        all: 1
    },
    $l = class extends Da {
        constructor() {
            super(...arguments), this.hasEnteredView = !1, this.isInView = !1
        }
        startObserver() {
            this.stopObserver ? .();
            let {
                viewport: e = {}
            } = this.node.getProps(), {
                root: t,
                margin: n,
                amount: r = `some`,
                once: i
            } = e, a = {
                root: t ? t.current : void 0,
                rootMargin: n,
                threshold: typeof r == `number` ? r : Ql[r]
            }, o = e => {
                let {
                    isIntersecting: t
                } = e;
                if (this.isInView === t || (this.isInView = t, i && !t && this.hasEnteredView)) return;
                t && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive(`whileInView`, t);
                let {
                    onViewportEnter: n,
                    onViewportLeave: r
                } = this.node.getProps(), a = t ? n : r;
                a && a(e)
            };
            this.stopObserver = Zl(this.node.current, a, o)
        }
        mount() {
            this.startObserver()
        }
        update() {
            if (typeof IntersectionObserver > `u`) return;
            let {
                props: e,
                prevProps: t
            } = this.node;
            [`amount`, `margin`, `root`].some(eu(e, t)) && this.startObserver()
        }
        unmount() {
            this.stopObserver ? .(), this.hasEnteredView = !1, this.isInView = !1
        }
    };

function eu({
    viewport: e = {}
}, {
    viewport: t = {}
} = {}) {
    return n => e[n] !== t[n]
}
var tu = {
        inView: {
            Feature: $l
        },
        tap: {
            Feature: Gl
        },
        focus: {
            Feature: Ul
        },
        hover: {
            Feature: Hl
        }
    },
    nu = {
        layout: {
            ProjectionNode: ac,
            MeasureLayout: zl
        }
    },
    ru = Qc({ ...nl,
        ...tu,
        ...Bl,
        ...nu
    }, $c);

function iu(e) {
    let t = l(() => vr(e)),
        {
            isStatic: n
        } = (0, s.useContext)(oc);
    if (n) {
        let [, n] = (0, s.useState)(e);
        (0, s.useEffect)(() => t.on(`change`, n), [])
    }
    return t
}

function au(e) {
    return typeof e == `object` && !Array.isArray(e)
}

function ou(e, t, n, r) {
    return e == null ? [] : typeof e == `string` && au(t) ? _i(e, n, r) : e instanceof NodeList ? Array.from(e) : Array.isArray(e) ? e.filter(e => e != null) : [e]
}

function su(e, t, n) {
    return e * (t + 1) + n * t
}

function cu(e, t, n, r) {
    return typeof t == `number` ? t : t.startsWith(`-`) || t.startsWith(`+`) ? Math.max(0, e + parseFloat(t)) : t === `<` ? n : t.startsWith(`<`) ? Math.max(0, n + parseFloat(t.slice(1))) : r.get(t) ? ? e
}

function lu(e, t, n) {
    for (let r = 0; r < e.length; r++) {
        let i = e[r];
        i.at > t && i.at < n && (p(e, i), r--)
    }
}

function uu(e, t, n, r, i, a) {
    lu(e, i, a);
    for (let o = 0; o < t.length; o++) e.push({
        value: t[o],
        at: U(i, a, r[o]),
        easing: se(n, o)
    })
}

function du(e, t, n = 0) {
    let r = t + 1 + t * n;
    for (let t = 0; t < e.length; t++) e[t] = e[t] / r
}

function fu(e, t) {
    return e.at === t.at ? e.value === null ? 1 : t.value === null ? -1 : 0 : e.at - t.at
}
var pu = `easeInOut`,
    mu = 20;

function hu(e, {
    defaultTransition: t = {},
    ...n
} = {}, r, i) {
    let a = t.duration || .3,
        o = new Map,
        s = new Map,
        c = {},
        l = new Map,
        u = 0,
        d = 0,
        f = 0;
    for (let n = 0; n < e.length; n++) {
        let o = e[n];
        if (typeof o == `string`) {
            l.set(o, d);
            continue
        } else if (!Array.isArray(o)) {
            l.set(o.name, cu(d, o.at, u, l));
            continue
        }
        let [p, m, h = {}] = o;
        h.at !== void 0 && (d = cu(d, h.at, u, l));
        let g = 0,
            _ = (e, n, r, o = 0, s = 0) => {
                let c = vu(e),
                    {
                        delay: l = 0,
                        times: u = Jt(c),
                        type: p = t.type || `keyframes`,
                        repeat: m,
                        repeatType: h,
                        repeatDelay: _ = 0,
                        ...v
                    } = n,
                    {
                        ease: y = t.ease || `easeOut`,
                        duration: b
                    } = n,
                    x = typeof l == `function` ? l(o, s) : l,
                    S = c.length,
                    C = Wn(p) ? p : i ? .[p || `keyframes`];
                if (S <= 2 && C) {
                    let e = 100;
                    if (S === 2 && xu(c)) {
                        let t = c[1] - c[0];
                        e = Math.abs(t)
                    }
                    let n = { ...t,
                        ...v
                    };
                    b !== void 0 && (n.duration = w(b));
                    let r = jt(n, e, C);
                    y = r.ease, b = r.duration
                }
                b ? ? = a;
                let T = d + x;
                u.length === 1 && u[0] === 0 && (u[1] = 1);
                let E = u.length - c.length;
                if (E > 0 && qt(u, E), c.length === 1 && c.unshift(null), m && `${m}${mu}`, m && m < mu) {
                    let e = b > 0 ? _ / b : 0;
                    b = su(b, m, _);
                    let t = [...c],
                        n = [...u];
                    y = Array.isArray(y) ? [...y] : [y];
                    let r = [...y],
                        i = h === `reverse` || h === `mirror`,
                        a = t,
                        o = r;
                    i && (a = [...t].reverse(), h === `reverse` && (o = [...r].reverse().map(e => typeof e == `function` ? P(e) : e)));
                    for (let s = 0; s < m; s++) {
                        let l = i && s % 2 == 0,
                            d = l ? a : t,
                            f = l ? o : r,
                            p = (s + 1) * (1 + e);
                        e > 0 && (c.push(c[c.length - 1]), u.push(p), y.push(`linear`)), c.push(...d);
                        for (let e = 0; e < d.length; e++) u.push(n[e] + p), y.push(e === 0 ? `linear` : se(f, e - 1))
                    }
                    du(u, m, e)
                }
                let D = T + b;
                uu(r, c, y, u, T, D), g = Math.max(x + b, g), f = Math.max(D, f)
            };
        if (Br(p)) {
            let e = gu(p, s);
            _(m, h, _u(`default`, e))
        } else {
            let e = ou(p, m, r, c),
                t = e.length;
            for (let n = 0; n < t; n++) {
                m = m, h = h;
                let r = e[n],
                    i = gu(r, s);
                for (let e in m) _(m[e], yu(h, e), _u(e, i), n, t)
            }
        }
        u = d, d += g
    }
    return s.forEach((e, r) => {
        for (let i in e) {
            let a = e[i];
            a.sort(fu);
            let s = [],
                c = [],
                l = [];
            for (let e = 0; e < a.length; e++) {
                let {
                    at: t,
                    value: n,
                    easing: r
                } = a[e];
                s.push(n), c.push(S(0, f, t)), l.push(r || `easeOut`)
            }
            c[0] !== 0 && (c.unshift(0), s.unshift(s[0]), l.unshift(pu)), c[c.length - 1] !== 1 && (c.push(1), s.push(null)), o.has(r) || o.set(r, {
                keyframes: {},
                transition: {}
            });
            let u = o.get(r);
            u.keyframes[i] = s;
            let {
                type: d,
                ...p
            } = t;
            u.transition[i] = { ...p,
                duration: f,
                ease: l,
                times: c,
                ...n
            }
        }
    }), o
}

function gu(e, t) {
    return !t.has(e) && t.set(e, {}), t.get(e)
}

function _u(e, t) {
    return t[e] || (t[e] = []), t[e]
}

function vu(e) {
    return Array.isArray(e) ? e : [e]
}

function yu(e, t) {
    return e && e[t] ? { ...e,
        ...e[t]
    } : { ...e
    }
}
var bu = e => typeof e == `number`,
    xu = e => e.every(bu);

function Su(e) {
    let t = {
            presenceContext: null,
            props: {},
            visualState: {
                renderState: {
                    transform: {},
                    transformOrigin: {},
                    style: {},
                    vars: {},
                    attrs: {}
                },
                latestValues: {}
            }
        },
        n = Vi(e) && !ra(e) ? new bo(t) : new so(t);
    n.mount(e), la.set(e, n)
}

function Cu(e) {
    let t = new lo({
        presenceContext: null,
        props: {},
        visualState: {
            renderState: {
                output: {}
            },
            latestValues: {}
        }
    });
    t.mount(e), la.set(e, t)
}

function wu(e, t) {
    return Br(e) || typeof e == `number` || typeof e == `string` && !au(t)
}

function Tu(e, t, n, r) {
    let i = [];
    if (wu(e, t)) i.push(gs(e, au(t) && t.default || t, n && (n.default || n)));
    else {
        if (e == null) return i;
        let a = ou(e, t, r),
            o = a.length;
        for (let e = 0; e < o; e++) {
            let r = a[e],
                s = r instanceof Element ? Su : Cu;
            la.has(r) || s(r);
            let c = la.get(r),
                l = { ...n
                };
            `delay` in l && typeof l.delay == `function` && (l.delay = l.delay(e, o)), i.push(...qr(c, { ...t,
                transition: l
            }, {}))
        }
    }
    return i
}

function Eu(e, t, n) {
    let r = [];
    return hu(e.map(e => {
        if (Array.isArray(e) && typeof e[0] == `function`) {
            let t = e[0],
                n = vr(0);
            return n.on(`change`, t), e.length === 1 ? [n, [0, 1]] : e.length === 2 ? [n, [0, 1], e[1]] : [n, e[1], e[2]]
        }
        return e
    }), t, n, {
        spring: Vt
    }).forEach(({
        keyframes: e,
        transition: t
    }, n) => {
        r.push(...Tu(n, e, t))
    }), r
}

function Du(e) {
    return Array.isArray(e) && e.some(Array.isArray)
}

function Ou(e = {}) {
    let {
        scope: t,
        reduceMotion: n,
        skipAnimations: r
    } = e;

    function i(e, i, a) {
        let o = [],
            s, c = {};
        if (n !== void 0 && (c.reduceMotion = n), r !== void 0 && (c.skipAnimations = r), Du(e)) {
            let {
                onComplete: n,
                ...r
            } = i || {};
            typeof n == `function` && (s = n), o = Eu(e, { ...c,
                ...r
            }, t)
        } else {
            let {
                onComplete: n,
                ...r
            } = a || {};
            typeof n == `function` && (s = n), o = Tu(e, i, { ...c,
                ...r
            }, t)
        }
        let l = new fr(o);
        return s && l.finished.then(s), t && (t.animations.push(l), l.finished.then(() => {
            p(t.animations, l)
        })), l
    }
    return i
}
var ku = Ou(),
    Au = {
        some: 0,
        all: 1
    };

function ju(e, t, {
    root: n,
    margin: r,
    amount: i = `some`
} = {}) {
    let a = _i(e),
        o = new WeakMap,
        s = new IntersectionObserver(e => {
            e.forEach(e => {
                let n = o.get(e.target);
                if (e.isIntersecting !== !!n)
                    if (e.isIntersecting) {
                        let n = t(e.target, e);
                        typeof n == `function` ? o.set(e.target, n) : s.unobserve(e.target)
                    } else typeof n == `function` && (n(e), o.delete(e.target))
            })
        }, {
            root: n,
            rootMargin: r,
            threshold: typeof i == `number` ? i : Au[i]
        });
    return a.forEach(e => s.observe(e)), () => s.disconnect()
}

function Mu(e, {
    root: t,
    margin: n,
    amount: r,
    once: i = !1,
    initial: a = !1
} = {}) {
    let [o, c] = (0, s.useState)(a);
    return (0, s.useEffect)(() => {
        if (!e.current || i && o) return;
        let a = () => (c(!0), i ? void 0 : () => c(!1)),
            s = {
                root: t && t.current || void 0,
                margin: n,
                amount: r
            };
        return ju(e.current, a, s)
    }, [t, e, n, i, r]), o
}
var Nu = ru,
    Pu = (...e) => e.filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t).join(` `).trim(),
    Fu = e => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase(),
    Iu = e => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase()),
    Lu = e => {
        let t = Iu(e);
        return t.charAt(0).toUpperCase() + t.slice(1)
    },
    Ru = {
        xmlns: `http://www.w3.org/2000/svg`,
        width: 24,
        height: 24,
        viewBox: `0 0 24 24`,
        fill: `none`,
        stroke: `currentColor`,
        strokeWidth: 2,
        strokeLinecap: `round`,
        strokeLinejoin: `round`
    },
    zu = e => {
        for (let t in e)
            if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
        return !1
    },
    Bu = (0, s.forwardRef)(({
        color: e = `currentColor`,
        size: t = 24,
        strokeWidth: n = 2,
        absoluteStrokeWidth: r,
        className: i = ``,
        children: a,
        iconNode: o,
        ...c
    }, l) => (0, s.createElement)(`svg`, {
        ref: l,
        ...Ru,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? Number(n) * 24 / Number(t) : n,
        className: Pu(`lucide`, i),
        ...!a && !zu(c) && {
            "aria-hidden": `true`
        },
        ...c
    }, [...o.map(([e, t]) => (0, s.createElement)(e, t)), ...Array.isArray(a) ? a : [a]])),
    Vu = (e, t) => {
        let n = (0, s.forwardRef)(({
            className: n,
            ...r
        }, i) => (0, s.createElement)(Bu, {
            ref: i,
            iconNode: t,
            className: Pu(`lucide-${Fu(Lu(e))}`, `lucide-${e}`, n),
            ...r
        }));
        return n.displayName = Lu(e), n
    },
    Hu = Vu(`arrow-right`, [
        [`path`, {
            d: `M5 12h14`,
            key: `1ays0h`
        }],
        [`path`, {
            d: `m12 5 7 7-7 7`,
            key: `xquz4c`
        }]
    ]),
    Uu = Vu(`bell`, [
        [`path`, {
            d: `M10.268 21a2 2 0 0 0 3.464 0`,
            key: `vwvbt9`
        }],
        [`path`, {
            d: `M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326`,
            key: `11g9vi`
        }]
    ]),
    Wu = Vu(`calendar`, [
        [`path`, {
            d: `M8 2v4`,
            key: `1cmpym`
        }],
        [`path`, {
            d: `M16 2v4`,
            key: `4m81vk`
        }],
        [`rect`, {
            width: `18`,
            height: `18`,
            x: `3`,
            y: `4`,
            rx: `2`,
            key: `1hopcy`
        }],
        [`path`, {
            d: `M3 10h18`,
            key: `8toen8`
        }]
    ]),
    Gu = Vu(`check`, [
        [`path`, {
            d: `M20 6 9 17l-5-5`,
            key: `1gmf2c`
        }]
    ]),
    Ku = Vu(`chevron-down`, [
        [`path`, {
            d: `m6 9 6 6 6-6`,
            key: `qrunsl`
        }]
    ]),
    qu = Vu(`chevron-up`, [
        [`path`, {
            d: `m18 15-6-6-6 6`,
            key: `153udz`
        }]
    ]),
    Ju = Vu(`clock`, [
        [`circle`, {
            cx: `12`,
            cy: `12`,
            r: `10`,
            key: `1mglay`
        }],
        [`path`, {
            d: `M12 6v6l4 2`,
            key: `mmk7yg`
        }]
    ]),
    Yu = Vu(`menu`, [
        [`path`, {
            d: `M4 5h16`,
            key: `1tepv9`
        }],
        [`path`, {
            d: `M4 12h16`,
            key: `1lakjw`
        }],
        [`path`, {
            d: `M4 19h16`,
            key: `1djgab`
        }]
    ]),
    Xu = Vu(`message-square`, [
        [`path`, {
            d: `M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z`,
            key: `18887p`
        }]
    ]),
    Zu = Vu(`phone-call`, [
        [`path`, {
            d: `M13 2a9 9 0 0 1 9 9`,
            key: `1itnx2`
        }],
        [`path`, {
            d: `M13 6a5 5 0 0 1 5 5`,
            key: `11nki7`
        }],
        [`path`, {
            d: `M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384`,
            key: `9njp5v`
        }]
    ]),
    Qu = Vu(`phone-incoming`, [
        [`path`, {
            d: `M16 2v6h6`,
            key: `1mfrl5`
        }],
        [`path`, {
            d: `m22 2-6 6`,
            key: `6f0sa0`
        }],
        [`path`, {
            d: `M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384`,
            key: `9njp5v`
        }]
    ]),
    $u = Vu(`phone`, [
        [`path`, {
            d: `M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384`,
            key: `9njp5v`
        }]
    ]),
    ed = Vu(`shield-check`, [
        [`path`, {
            d: `M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,
            key: `oel41y`
        }],
        [`path`, {
            d: `m9 12 2 2 4-4`,
            key: `dzmm74`
        }]
    ]),
    td = Vu(`sparkles`, [
        [`path`, {
            d: `M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,
            key: `1s2grr`
        }],
        [`path`, {
            d: `M20 2v4`,
            key: `1rf3ol`
        }],
        [`path`, {
            d: `M22 4h-4`,
            key: `gwowj6`
        }],
        [`circle`, {
            cx: `4`,
            cy: `20`,
            r: `2`,
            key: `6kqj1y`
        }]
    ]),
    nd = Vu(`star`, [
        [`path`, {
            d: `M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`,
            key: `r04s7s`
        }]
    ]),
    rd = Vu(`wrench`, [
        [`path`, {
            d: `M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z`,
            key: `1ngwbx`
        }]
    ]),
    id = Vu(`x`, [
        [`path`, {
            d: `M18 6 6 18`,
            key: `1bl5f8`
        }],
        [`path`, {
            d: `m6 6 12 12`,
            key: `d8bk6v`
        }]
    ]),
    ad = Vu(`zap`, [
        [`path`, {
            d: `M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z`,
            key: `1xq2db`
        }]
    ]);

function od(e, t = []) {
    let n = [];

    function r(t, r) {
        let i = s.createContext(r),
            a = n.length;
        n = [...n, r];
        let o = t => {
            let {
                scope: n,
                children: r,
                ...o
            } = t, c = n ? .[e] ? .[a] || i, l = s.useMemo(() => o, Object.values(o));
            return (0, K.jsx)(c.Provider, {
                value: l,
                children: r
            })
        };
        o.displayName = t + `Provider`;

        function c(n, o) {
            let c = o ? .[e] ? .[a] || i,
                l = s.useContext(c);
            if (l) return l;
            if (r !== void 0) return r;
            throw Error(`\`${n}\` must be used within \`${t}\``)
        }
        return [o, c]
    }
    let i = () => {
        let t = n.map(e => s.createContext(e));
        return function(n) {
            let r = n ? .[e] || t;
            return s.useMemo(() => ({
                [`__scope${e}`]: { ...n,
                    [e]: r
                }
            }), [n, r])
        }
    };
    return i.scopeName = e, [r, sd(i, ...t)]
}

function sd(...e) {
    let t = e[0];
    if (e.length === 1) return t;
    let n = () => {
        let n = e.map(e => ({
            useScope: e(),
            scopeName: e.scopeName
        }));
        return function(e) {
            let r = n.reduce((t, {
                useScope: n,
                scopeName: r
            }) => {
                let i = n(e)[`__scope${r}`];
                return { ...t,
                    ...i
                }
            }, {});
            return s.useMemo(() => ({
                [`__scope${t.scopeName}`]: r
            }), [r])
        }
    };
    return n.scopeName = t.scopeName, n
}

function cd(e, t) {
    if (typeof e == `function`) return e(t);
    e != null && (e.current = t)
}

function ld(...e) {
    return t => {
        let n = !1,
            r = e.map(e => {
                let r = cd(e, t);
                return !n && typeof r == `function` && (n = !0), r
            });
        if (n) return () => {
            for (let t = 0; t < r.length; t++) {
                let n = r[t];
                typeof n == `function` ? n() : cd(e[t], null)
            }
        }
    }
}

function q(...e) {
    return s.useCallback(ld(...e), e)
}

function ud(e) {
    let t = dd(e),
        n = s.forwardRef((e, n) => {
            let {
                children: r,
                ...i
            } = e, a = s.Children.toArray(r), o = a.find(pd);
            if (o) {
                let e = o.props.children,
                    r = a.map(t => t === o ? s.Children.count(e) > 1 ? s.Children.only(null) : s.isValidElement(e) ? e.props.children : null : t);
                return (0, K.jsx)(t, { ...i,
                    ref: n,
                    children: s.isValidElement(e) ? s.cloneElement(e, void 0, r) : null
                })
            }
            return (0, K.jsx)(t, { ...i,
                ref: n,
                children: r
            })
        });
    return n.displayName = `${e}.Slot`, n
}

function dd(e) {
    let t = s.forwardRef((e, t) => {
        let {
            children: n,
            ...r
        } = e;
        if (s.isValidElement(n)) {
            let e = hd(n),
                i = md(r, n.props);
            return n.type !== s.Fragment && (i.ref = t ? ld(t, e) : e), s.cloneElement(n, i)
        }
        return s.Children.count(n) > 1 ? s.Children.only(null) : null
    });
    return t.displayName = `${e}.SlotClone`, t
}
var fd = Symbol(`radix.slottable`);

function pd(e) {
    return s.isValidElement(e) && typeof e.type == `function` && `__radixId` in e.type && e.type.__radixId === fd
}

function md(e, t) {
    let n = { ...t
    };
    for (let r in t) {
        let i = e[r],
            a = t[r];
        /^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
            let t = a(...e);
            return i(...e), t
        } : i && (n[r] = i) : r === `style` ? n[r] = { ...i,
            ...a
        } : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `))
    }
    return { ...e,
        ...n
    }
}

function hd(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, `ref`) ? .get,
        n = t && `isReactWarning` in t && t.isReactWarning;
    return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, `ref`) ? .get, n = t && `isReactWarning` in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}

function gd(e) {
    let t = e + `CollectionProvider`,
        [n, r] = od(t),
        [i, a] = n(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }),
        o = e => {
            let {
                scope: t,
                children: n
            } = e, r = s.useRef(null), a = s.useRef(new Map).current;
            return (0, K.jsx)(i, {
                scope: t,
                itemMap: a,
                collectionRef: r,
                children: n
            })
        };
    o.displayName = t;
    let c = e + `CollectionSlot`,
        l = ud(c),
        u = s.forwardRef((e, t) => {
            let {
                scope: n,
                children: r
            } = e;
            return (0, K.jsx)(l, {
                ref: q(t, a(c, n).collectionRef),
                children: r
            })
        });
    u.displayName = c;
    let d = e + `CollectionItemSlot`,
        f = `data-radix-collection-item`,
        p = ud(d),
        m = s.forwardRef((e, t) => {
            let {
                scope: n,
                children: r,
                ...i
            } = e, o = s.useRef(null), c = q(t, o), l = a(d, n);
            return s.useEffect(() => (l.itemMap.set(o, {
                ref: o,
                ...i
            }), () => void l.itemMap.delete(o))), (0, K.jsx)(p, {
                [f]: ``,
                ref: c,
                children: r
            })
        });
    m.displayName = d;

    function h(t) {
        let n = a(e + `CollectionConsumer`, t);
        return s.useCallback(() => {
            let e = n.collectionRef.current;
            if (!e) return [];
            let t = Array.from(e.querySelectorAll(`[${f}]`));
            return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current))
        }, [n.collectionRef, n.itemMap])
    }
    return [{
        Provider: o,
        Slot: u,
        ItemSlot: m
    }, h, r]
}
typeof window < `u` && window.document && window.document.createElement;

function J(e, t, {
    checkForDefaultPrevented: n = !0
} = {}) {
    return function(r) {
        if (e ? .(r), n === !1 || !r.defaultPrevented) return t ? .(r)
    }
}
var _d = globalThis ? .document ? s.useLayoutEffect : () => {},
    vd = s.useInsertionEffect || _d;

function yd({
    prop: e,
    defaultProp: t,
    onChange: n = () => {},
    caller: r
}) {
    let [i, a, o] = bd({
        defaultProp: t,
        onChange: n
    }), c = e !== void 0, l = c ? e : i; {
        let t = s.useRef(e !== void 0);
        s.useEffect(() => {
            let e = t.current;
            e !== c && console.warn(`${r} is changing from ${e?`controlled`:`uncontrolled`} to ${c?`controlled`:`uncontrolled`}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), t.current = c
        }, [c, r])
    }
    return [l, s.useCallback(t => {
        if (c) {
            let n = xd(t) ? t(e) : t;
            n !== e && o.current ? .(n)
        } else a(t)
    }, [c, e, a, o])]
}

function bd({
    defaultProp: e,
    onChange: t
}) {
    let [n, r] = s.useState(e), i = s.useRef(n), a = s.useRef(t);
    return vd(() => {
        a.current = t
    }, [t]), s.useEffect(() => {
        i.current !== n && (a.current ? .(n), i.current = n)
    }, [n, i]), [n, r, a]
}

function xd(e) {
    return typeof e == `function`
}
var Sd = a(n(), 1);

function Cd(e) {
    let t = wd(e),
        n = s.forwardRef((e, n) => {
            let {
                children: r,
                ...i
            } = e, a = s.Children.toArray(r), o = a.find(Ed);
            if (o) {
                let e = o.props.children,
                    r = a.map(t => t === o ? s.Children.count(e) > 1 ? s.Children.only(null) : s.isValidElement(e) ? e.props.children : null : t);
                return (0, K.jsx)(t, { ...i,
                    ref: n,
                    children: s.isValidElement(e) ? s.cloneElement(e, void 0, r) : null
                })
            }
            return (0, K.jsx)(t, { ...i,
                ref: n,
                children: r
            })
        });
    return n.displayName = `${e}.Slot`, n
}

function wd(e) {
    let t = s.forwardRef((e, t) => {
        let {
            children: n,
            ...r
        } = e;
        if (s.isValidElement(n)) {
            let e = Od(n),
                i = Dd(r, n.props);
            return n.type !== s.Fragment && (i.ref = t ? ld(t, e) : e), s.cloneElement(n, i)
        }
        return s.Children.count(n) > 1 ? s.Children.only(null) : null
    });
    return t.displayName = `${e}.SlotClone`, t
}
var Td = Symbol(`radix.slottable`);

function Ed(e) {
    return s.isValidElement(e) && typeof e.type == `function` && `__radixId` in e.type && e.type.__radixId === Td
}

function Dd(e, t) {
    let n = { ...t
    };
    for (let r in t) {
        let i = e[r],
            a = t[r];
        /^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
            let t = a(...e);
            return i(...e), t
        } : i && (n[r] = i) : r === `style` ? n[r] = { ...i,
            ...a
        } : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `))
    }
    return { ...e,
        ...n
    }
}

function Od(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, `ref`) ? .get,
        n = t && `isReactWarning` in t && t.isReactWarning;
    return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, `ref`) ? .get, n = t && `isReactWarning` in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var Y = [`a`, `button`, `div`, `form`, `h2`, `h3`, `img`, `input`, `label`, `li`, `nav`, `ol`, `p`, `select`, `span`, `svg`, `ul`].reduce((e, t) => {
    let n = Cd(`Primitive.${t}`),
        r = s.forwardRef((e, r) => {
            let {
                asChild: i,
                ...a
            } = e, o = i ? n : t;
            return typeof window < `u` && (window[Symbol.for(`radix-ui`)] = !0), (0, K.jsx)(o, { ...a,
                ref: r
            })
        });
    return r.displayName = `Primitive.${t}`, { ...e,
        [t]: r
    }
}, {});

function kd(e, t) {
    e && Sd.flushSync(() => e.dispatchEvent(t))
}

function Ad(e, t) {
    return s.useReducer((e, n) => t[e][n] ? ? e, e)
}
var jd = e => {
    let {
        present: t,
        children: n
    } = e, r = Md(t), i = typeof n == `function` ? n({
        present: r.isPresent
    }) : s.Children.only(n), a = q(r.ref, Pd(i));
    return typeof n == `function` || r.isPresent ? s.cloneElement(i, {
        ref: a
    }) : null
};
jd.displayName = `Presence`;

function Md(e) {
    let [t, n] = s.useState(), r = s.useRef(null), i = s.useRef(e), a = s.useRef(`none`), [o, c] = Ad(e ? `mounted` : `unmounted`, {
        mounted: {
            UNMOUNT: `unmounted`,
            ANIMATION_OUT: `unmountSuspended`
        },
        unmountSuspended: {
            MOUNT: `mounted`,
            ANIMATION_END: `unmounted`
        },
        unmounted: {
            MOUNT: `mounted`
        }
    });
    return s.useEffect(() => {
        let e = Nd(r.current);
        a.current = o === `mounted` ? e : `none`
    }, [o]), _d(() => {
        let t = r.current,
            n = i.current;
        if (n !== e) {
            let r = a.current,
                o = Nd(t);
            e ? c(`MOUNT`) : o === `none` || t ? .display === `none` ? c(`UNMOUNT`) : c(n && r !== o ? `ANIMATION_OUT` : `UNMOUNT`), i.current = e
        }
    }, [e, c]), _d(() => {
        if (t) {
            let e, n = t.ownerDocument.defaultView ? ? window,
                o = a => {
                    let o = Nd(r.current).includes(CSS.escape(a.animationName));
                    if (a.target === t && o && (c(`ANIMATION_END`), !i.current)) {
                        let r = t.style.animationFillMode;
                        t.style.animationFillMode = `forwards`, e = n.setTimeout(() => {
                            t.style.animationFillMode === `forwards` && (t.style.animationFillMode = r)
                        })
                    }
                },
                s = e => {
                    e.target === t && (a.current = Nd(r.current))
                };
            return t.addEventListener(`animationstart`, s), t.addEventListener(`animationcancel`, o), t.addEventListener(`animationend`, o), () => {
                n.clearTimeout(e), t.removeEventListener(`animationstart`, s), t.removeEventListener(`animationcancel`, o), t.removeEventListener(`animationend`, o)
            }
        } else c(`ANIMATION_END`)
    }, [t, c]), {
        isPresent: [`mounted`, `unmountSuspended`].includes(o),
        ref: s.useCallback(e => {
            r.current = e ? getComputedStyle(e) : null, n(e)
        }, [])
    }
}

function Nd(e) {
    return e ? .animationName || `none`
}

function Pd(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, `ref`) ? .get,
        n = t && `isReactWarning` in t && t.isReactWarning;
    return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, `ref`) ? .get, n = t && `isReactWarning` in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var Fd = s.useId || (() => void 0),
    Id = 0;

function Ld(e) {
    let [t, n] = s.useState(Fd());
    return _d(() => {
        e || n(e => e ? ? String(Id++))
    }, [e]), e || (t ? `radix-${t}` : ``)
}
var Rd = `Collapsible`,
    [zd, Bd] = od(Rd),
    [Vd, Hd] = zd(Rd),
    Ud = s.forwardRef((e, t) => {
        let {
            __scopeCollapsible: n,
            open: r,
            defaultOpen: i,
            disabled: a,
            onOpenChange: o,
            ...c
        } = e, [l, u] = yd({
            prop: r,
            defaultProp: i ? ? !1,
            onChange: o,
            caller: Rd
        });
        return (0, K.jsx)(Vd, {
            scope: n,
            disabled: a,
            contentId: Ld(),
            open: l,
            onOpenToggle: s.useCallback(() => u(e => !e), [u]),
            children: (0, K.jsx)(Y.div, {
                "data-state": Yd(l),
                "data-disabled": a ? `` : void 0,
                ...c,
                ref: t
            })
        })
    });
Ud.displayName = Rd;
var Wd = `CollapsibleTrigger`,
    Gd = s.forwardRef((e, t) => {
        let {
            __scopeCollapsible: n,
            ...r
        } = e, i = Hd(Wd, n);
        return (0, K.jsx)(Y.button, {
            type: `button`,
            "aria-controls": i.contentId,
            "aria-expanded": i.open || !1,
            "data-state": Yd(i.open),
            "data-disabled": i.disabled ? `` : void 0,
            disabled: i.disabled,
            ...r,
            ref: t,
            onClick: J(e.onClick, i.onOpenToggle)
        })
    });
Gd.displayName = Wd;
var Kd = `CollapsibleContent`,
    qd = s.forwardRef((e, t) => {
        let {
            forceMount: n,
            ...r
        } = e, i = Hd(Kd, e.__scopeCollapsible);
        return (0, K.jsx)(jd, {
            present: n || i.open,
            children: ({
                present: e
            }) => (0, K.jsx)(Jd, { ...r,
                ref: t,
                present: e
            })
        })
    });
qd.displayName = Kd;
var Jd = s.forwardRef((e, t) => {
    let {
        __scopeCollapsible: n,
        present: r,
        children: i,
        ...a
    } = e, o = Hd(Kd, n), [c, l] = s.useState(r), u = s.useRef(null), d = q(t, u), f = s.useRef(0), p = f.current, m = s.useRef(0), h = m.current, g = o.open || c, _ = s.useRef(g), v = s.useRef(void 0);
    return s.useEffect(() => {
        let e = requestAnimationFrame(() => _.current = !1);
        return () => cancelAnimationFrame(e)
    }, []), _d(() => {
        let e = u.current;
        if (e) {
            v.current = v.current || {
                transitionDuration: e.style.transitionDuration,
                animationName: e.style.animationName
            }, e.style.transitionDuration = `0s`, e.style.animationName = `none`;
            let t = e.getBoundingClientRect();
            f.current = t.height, m.current = t.width, _.current || (e.style.transitionDuration = v.current.transitionDuration, e.style.animationName = v.current.animationName), l(r)
        }
    }, [o.open, r]), (0, K.jsx)(Y.div, {
        "data-state": Yd(o.open),
        "data-disabled": o.disabled ? `` : void 0,
        id: o.contentId,
        hidden: !g,
        ...a,
        ref: d,
        style: {
            "--radix-collapsible-content-height": p ? `${p}px` : void 0,
            "--radix-collapsible-content-width": h ? `${h}px` : void 0,
            ...e.style
        },
        children: g && i
    })
});

function Yd(e) {
    return e ? `open` : `closed`
}
var Xd = Ud,
    Zd = Gd,
    Qd = qd,
    $d = s.createContext(void 0);

function ef(e) {
    let t = s.useContext($d);
    return e || t || `ltr`
}
var tf = `Accordion`,
    nf = [`Home`, `End`, `ArrowDown`, `ArrowUp`, `ArrowLeft`, `ArrowRight`],
    [rf, af, of ] = gd(tf),
    [sf, cf] = od(tf, [ of , Bd]),
    lf = Bd(),
    uf = s.forwardRef((e, t) => {
        let {
            type: n,
            ...r
        } = e, i = r, a = r;
        return (0, K.jsx)(rf.Provider, {
            scope: e.__scopeAccordion,
            children: n === `multiple` ? (0, K.jsx)(gf, { ...a,
                ref: t
            }) : (0, K.jsx)(hf, { ...i,
                ref: t
            })
        })
    });
uf.displayName = tf;
var [df, ff] = sf(tf), [pf, mf] = sf(tf, {
    collapsible: !1
}), hf = s.forwardRef((e, t) => {
    let {
        value: n,
        defaultValue: r,
        onValueChange: i = () => {},
        collapsible: a = !1,
        ...o
    } = e, [c, l] = yd({
        prop: n,
        defaultProp: r ? ? ``,
        onChange: i,
        caller: tf
    });
    return (0, K.jsx)(df, {
        scope: e.__scopeAccordion,
        value: s.useMemo(() => c ? [c] : [], [c]),
        onItemOpen: l,
        onItemClose: s.useCallback(() => a && l(``), [a, l]),
        children: (0, K.jsx)(pf, {
            scope: e.__scopeAccordion,
            collapsible: a,
            children: (0, K.jsx)(yf, { ...o,
                ref: t
            })
        })
    })
}), gf = s.forwardRef((e, t) => {
    let {
        value: n,
        defaultValue: r,
        onValueChange: i = () => {},
        ...a
    } = e, [o, c] = yd({
        prop: n,
        defaultProp: r ? ? [],
        onChange: i,
        caller: tf
    }), l = s.useCallback(e => c((t = []) => [...t, e]), [c]), u = s.useCallback(e => c((t = []) => t.filter(t => t !== e)), [c]);
    return (0, K.jsx)(df, {
        scope: e.__scopeAccordion,
        value: o,
        onItemOpen: l,
        onItemClose: u,
        children: (0, K.jsx)(pf, {
            scope: e.__scopeAccordion,
            collapsible: !0,
            children: (0, K.jsx)(yf, { ...a,
                ref: t
            })
        })
    })
}), [_f, vf] = sf(tf), yf = s.forwardRef((e, t) => {
    let {
        __scopeAccordion: n,
        disabled: r,
        dir: i,
        orientation: a = `vertical`,
        ...o
    } = e, c = q(s.useRef(null), t), l = af(n), u = ef(i) === `ltr`, d = J(e.onKeyDown, e => {
        if (!nf.includes(e.key)) return;
        let t = e.target,
            n = l().filter(e => !e.ref.current ? .disabled),
            r = n.findIndex(e => e.ref.current === t),
            i = n.length;
        if (r === -1) return;
        e.preventDefault();
        let o = r,
            s = i - 1,
            c = () => {
                o = r + 1, o > s && (o = 0)
            },
            d = () => {
                o = r - 1, o < 0 && (o = s)
            };
        switch (e.key) {
            case `Home`:
                o = 0;
                break;
            case `End`:
                o = s;
                break;
            case `ArrowRight`:
                a === `horizontal` && (u ? c() : d());
                break;
            case `ArrowDown`:
                a === `vertical` && c();
                break;
            case `ArrowLeft`:
                a === `horizontal` && (u ? d() : c());
                break;
            case `ArrowUp`:
                a === `vertical` && d();
                break
        }
        n[o % i].ref.current ? .focus()
    });
    return (0, K.jsx)(_f, {
        scope: n,
        disabled: r,
        direction: i,
        orientation: a,
        children: (0, K.jsx)(rf.Slot, {
            scope: n,
            children: (0, K.jsx)(Y.div, { ...o,
                "data-orientation": a,
                ref: c,
                onKeyDown: r ? void 0 : d
            })
        })
    })
}), bf = `AccordionItem`, [xf, Sf] = sf(bf), Cf = s.forwardRef((e, t) => {
    let {
        __scopeAccordion: n,
        value: r,
        ...i
    } = e, a = vf(bf, n), o = ff(bf, n), s = lf(n), c = Ld(), l = r && o.value.includes(r) || !1, u = a.disabled || e.disabled;
    return (0, K.jsx)(xf, {
        scope: n,
        open: l,
        disabled: u,
        triggerId: c,
        children: (0, K.jsx)(Xd, {
            "data-orientation": a.orientation,
            "data-state": Af(l),
            ...s,
            ...i,
            ref: t,
            disabled: u,
            open: l,
            onOpenChange: e => {
                e ? o.onItemOpen(r) : o.onItemClose(r)
            }
        })
    })
});
Cf.displayName = bf;
var wf = `AccordionHeader`,
    Tf = s.forwardRef((e, t) => {
        let {
            __scopeAccordion: n,
            ...r
        } = e, i = vf(tf, n), a = Sf(wf, n);
        return (0, K.jsx)(Y.h3, {
            "data-orientation": i.orientation,
            "data-state": Af(a.open),
            "data-disabled": a.disabled ? `` : void 0,
            ...r,
            ref: t
        })
    });
Tf.displayName = wf;
var Ef = `AccordionTrigger`,
    Df = s.forwardRef((e, t) => {
        let {
            __scopeAccordion: n,
            ...r
        } = e, i = vf(tf, n), a = Sf(Ef, n), o = mf(Ef, n), s = lf(n);
        return (0, K.jsx)(rf.ItemSlot, {
            scope: n,
            children: (0, K.jsx)(Zd, {
                "aria-disabled": a.open && !o.collapsible || void 0,
                "data-orientation": i.orientation,
                id: a.triggerId,
                ...s,
                ...r,
                ref: t
            })
        })
    });
Df.displayName = Ef;
var Of = `AccordionContent`,
    kf = s.forwardRef((e, t) => {
        let {
            __scopeAccordion: n,
            ...r
        } = e, i = vf(tf, n), a = Sf(Of, n), o = lf(n);
        return (0, K.jsx)(Qd, {
            role: `region`,
            "aria-labelledby": a.triggerId,
            "data-orientation": i.orientation,
            ...o,
            ...r,
            ref: t,
            style: {
                "--radix-accordion-content-height": `var(--radix-collapsible-content-height)`,
                "--radix-accordion-content-width": `var(--radix-collapsible-content-width)`,
                ...e.style
            }
        })
    });
kf.displayName = Of;

function Af(e) {
    return e ? `open` : `closed`
}
var jf = uf,
    Mf = Cf,
    Nf = Tf,
    Pf = Df,
    Ff = kf;

function If(e) {
    var t, n, r = ``;
    if (typeof e == `string` || typeof e == `number`) r += e;
    else if (typeof e == `object`)
        if (Array.isArray(e)) {
            var i = e.length;
            for (t = 0; t < i; t++) e[t] && (n = If(e[t])) && (r && (r += ` `), r += n)
        } else
            for (n in e) e[n] && (r && (r += ` `), r += n);
    return r
}

function Lf() {
    for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)(e = arguments[n]) && (t = If(e)) && (r && (r += ` `), r += t);
    return r
}
var Rf = (e, t) => {
        let n = Array(e.length + t.length);
        for (let t = 0; t < e.length; t++) n[t] = e[t];
        for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
        return n
    },
    zf = (e, t) => ({
        classGroupId: e,
        validator: t
    }),
    Bf = (e = new Map, t = null, n) => ({
        nextPart: e,
        validators: t,
        classGroupId: n
    }),
    Vf = `-`,
    Hf = [],
    Uf = `arbitrary..`,
    Wf = e => {
        let t = qf(e),
            {
                conflictingClassGroups: n,
                conflictingClassGroupModifiers: r
            } = e;
        return {
            getClassGroupId: e => {
                if (e.startsWith(`[`) && e.endsWith(`]`)) return Kf(e);
                let n = e.split(Vf);
                return Gf(n, +(n[0] === `` && n.length > 1), t)
            },
            getConflictingClassGroupIds: (e, t) => {
                if (t) {
                    let t = r[e],
                        i = n[e];
                    return t ? i ? Rf(i, t) : t : i || Hf
                }
                return n[e] || Hf
            }
        }
    },
    Gf = (e, t, n) => {
        if (e.length - t === 0) return n.classGroupId;
        let r = e[t],
            i = n.nextPart.get(r);
        if (i) {
            let n = Gf(e, t + 1, i);
            if (n) return n
        }
        let a = n.validators;
        if (a === null) return;
        let o = t === 0 ? e.join(Vf) : e.slice(t).join(Vf),
            s = a.length;
        for (let e = 0; e < s; e++) {
            let t = a[e];
            if (t.validator(o)) return t.classGroupId
        }
    },
    Kf = e => e.slice(1, -1).indexOf(`:`) === -1 ? void 0 : (() => {
        let t = e.slice(1, -1),
            n = t.indexOf(`:`),
            r = t.slice(0, n);
        return r ? Uf + r : void 0
    })(),
    qf = e => {
        let {
            theme: t,
            classGroups: n
        } = e;
        return Jf(n, t)
    },
    Jf = (e, t) => {
        let n = Bf();
        for (let r in e) {
            let i = e[r];
            Yf(i, n, r, t)
        }
        return n
    },
    Yf = (e, t, n, r) => {
        let i = e.length;
        for (let a = 0; a < i; a++) {
            let i = e[a];
            Xf(i, t, n, r)
        }
    },
    Xf = (e, t, n, r) => {
        if (typeof e == `string`) {
            Zf(e, t, n);
            return
        }
        if (typeof e == `function`) {
            Qf(e, t, n, r);
            return
        }
        $f(e, t, n, r)
    },
    Zf = (e, t, n) => {
        let r = e === `` ? t : ep(t, e);
        r.classGroupId = n
    },
    Qf = (e, t, n, r) => {
        if (tp(e)) {
            Yf(e(r), t, n, r);
            return
        }
        t.validators === null && (t.validators = []), t.validators.push(zf(n, e))
    },
    $f = (e, t, n, r) => {
        let i = Object.entries(e),
            a = i.length;
        for (let e = 0; e < a; e++) {
            let [a, o] = i[e];
            Yf(o, ep(t, a), n, r)
        }
    },
    ep = (e, t) => {
        let n = e,
            r = t.split(Vf),
            i = r.length;
        for (let e = 0; e < i; e++) {
            let t = r[e],
                i = n.nextPart.get(t);
            i || (i = Bf(), n.nextPart.set(t, i)), n = i
        }
        return n
    },
    tp = e => `isThemeGetter` in e && e.isThemeGetter === !0,
    np = e => {
        if (e < 1) return {
            get: () => void 0,
            set: () => {}
        };
        let t = 0,
            n = Object.create(null),
            r = Object.create(null),
            i = (i, a) => {
                n[i] = a, t++, t > e && (t = 0, r = n, n = Object.create(null))
            };
        return {
            get(e) {
                let t = n[e];
                if (t !== void 0) return t;
                if ((t = r[e]) !== void 0) return i(e, t), t
            },
            set(e, t) {
                e in n ? n[e] = t : i(e, t)
            }
        }
    },
    rp = `!`,
    ip = `:`,
    ap = [],
    op = (e, t, n, r, i) => ({
        modifiers: e,
        hasImportantModifier: t,
        baseClassName: n,
        maybePostfixModifierPosition: r,
        isExternal: i
    }),
    sp = e => {
        let {
            prefix: t,
            experimentalParseClassName: n
        } = e, r = e => {
            let t = [],
                n = 0,
                r = 0,
                i = 0,
                a, o = e.length;
            for (let s = 0; s < o; s++) {
                let o = e[s];
                if (n === 0 && r === 0) {
                    if (o === ip) {
                        t.push(e.slice(i, s)), i = s + 1;
                        continue
                    }
                    if (o === `/`) {
                        a = s;
                        continue
                    }
                }
                o === `[` ? n++ : o === `]` ? n-- : o === `(` ? r++ : o === `)` && r--
            }
            let s = t.length === 0 ? e : e.slice(i),
                c = s,
                l = !1;
            s.endsWith(rp) ? (c = s.slice(0, -1), l = !0) : s.startsWith(rp) && (c = s.slice(1), l = !0);
            let u = a && a > i ? a - i : void 0;
            return op(t, l, c, u)
        };
        if (t) {
            let e = t + ip,
                n = r;
            r = t => t.startsWith(e) ? n(t.slice(e.length)) : op(ap, !1, t, void 0, !0)
        }
        if (n) {
            let e = r;
            r = t => n({
                className: t,
                parseClassName: e
            })
        }
        return r
    },
    cp = e => {
        let t = new Map;
        return e.orderSensitiveModifiers.forEach((e, n) => {
            t.set(e, 1e6 + n)
        }), e => {
            let n = [],
                r = [];
            for (let i = 0; i < e.length; i++) {
                let a = e[i],
                    o = a[0] === `[`,
                    s = t.has(a);
                o || s ? (r.length > 0 && (r.sort(), n.push(...r), r = []), n.push(a)) : r.push(a)
            }
            return r.length > 0 && (r.sort(), n.push(...r)), n
        }
    },
    lp = e => ({
        cache: np(e.cacheSize),
        parseClassName: sp(e),
        sortModifiers: cp(e),
        ...Wf(e)
    }),
    up = /\s+/,
    dp = (e, t) => {
        let {
            parseClassName: n,
            getClassGroupId: r,
            getConflictingClassGroupIds: i,
            sortModifiers: a
        } = t, o = [], s = e.trim().split(up), c = ``;
        for (let e = s.length - 1; e >= 0; --e) {
            let t = s[e],
                {
                    isExternal: l,
                    modifiers: u,
                    hasImportantModifier: d,
                    baseClassName: f,
                    maybePostfixModifierPosition: p
                } = n(t);
            if (l) {
                c = t + (c.length > 0 ? ` ` + c : c);
                continue
            }
            let m = !!p,
                h = r(m ? f.substring(0, p) : f);
            if (!h) {
                if (!m) {
                    c = t + (c.length > 0 ? ` ` + c : c);
                    continue
                }
                if (h = r(f), !h) {
                    c = t + (c.length > 0 ? ` ` + c : c);
                    continue
                }
                m = !1
            }
            let g = u.length === 0 ? `` : u.length === 1 ? u[0] : a(u).join(`:`),
                _ = d ? g + rp : g,
                v = _ + h;
            if (o.indexOf(v) > -1) continue;
            o.push(v);
            let y = i(h, m);
            for (let e = 0; e < y.length; ++e) {
                let t = y[e];
                o.push(_ + t)
            }
            c = t + (c.length > 0 ? ` ` + c : c)
        }
        return c
    },
    fp = (...e) => {
        let t = 0,
            n, r, i = ``;
        for (; t < e.length;)(n = e[t++]) && (r = pp(n)) && (i && (i += ` `), i += r);
        return i
    },
    pp = e => {
        if (typeof e == `string`) return e;
        let t, n = ``;
        for (let r = 0; r < e.length; r++) e[r] && (t = pp(e[r])) && (n && (n += ` `), n += t);
        return n
    },
    mp = (e, ...t) => {
        let n, r, i, a, o = o => (n = lp(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)),
            s = e => {
                let t = r(e);
                if (t) return t;
                let a = dp(e, n);
                return i(e, a), a
            };
        return a = o, (...e) => a(fp(...e))
    },
    hp = [],
    X = e => {
        let t = t => t[e] || hp;
        return t.isThemeGetter = !0, t
    },
    gp = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
    _p = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
    vp = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
    yp = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    bp = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    xp = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
    Sp = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    Cp = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    wp = e => vp.test(e),
    Z = e => !!e && !Number.isNaN(Number(e)),
    Tp = e => !!e && Number.isInteger(Number(e)),
    Ep = e => e.endsWith(`%`) && Z(e.slice(0, -1)),
    Dp = e => yp.test(e),
    Op = () => !0,
    kp = e => bp.test(e) && !xp.test(e),
    Ap = () => !1,
    jp = e => Sp.test(e),
    Mp = e => Cp.test(e),
    Np = e => !Q(e) && !$(e),
    Pp = e => Yp(e, $p, Ap),
    Q = e => gp.test(e),
    Fp = e => Yp(e, em, kp),
    Ip = e => Yp(e, tm, Z),
    Lp = e => Yp(e, rm, Op),
    Rp = e => Yp(e, nm, Ap),
    zp = e => Yp(e, Zp, Ap),
    Bp = e => Yp(e, Qp, Mp),
    Vp = e => Yp(e, im, jp),
    $ = e => _p.test(e),
    Hp = e => Xp(e, em),
    Up = e => Xp(e, nm),
    Wp = e => Xp(e, Zp),
    Gp = e => Xp(e, $p),
    Kp = e => Xp(e, Qp),
    qp = e => Xp(e, im, !0),
    Jp = e => Xp(e, rm, !0),
    Yp = (e, t, n) => {
        let r = gp.exec(e);
        return r ? r[1] ? t(r[1]) : n(r[2]) : !1
    },
    Xp = (e, t, n = !1) => {
        let r = _p.exec(e);
        return r ? r[1] ? t(r[1]) : n : !1
    },
    Zp = e => e === `position` || e === `percentage`,
    Qp = e => e === `image` || e === `url`,
    $p = e => e === `length` || e === `size` || e === `bg-size`,
    em = e => e === `length`,
    tm = e => e === `number`,
    nm = e => e === `family-name`,
    rm = e => e === `number` || e === `weight`,
    im = e => e === `shadow`,
    am = mp(() => {
        let e = X(`color`),
            t = X(`font`),
            n = X(`text`),
            r = X(`font-weight`),
            i = X(`tracking`),
            a = X(`leading`),
            o = X(`breakpoint`),
            s = X(`container`),
            c = X(`spacing`),
            l = X(`radius`),
            u = X(`shadow`),
            d = X(`inset-shadow`),
            f = X(`text-shadow`),
            p = X(`drop-shadow`),
            m = X(`blur`),
            h = X(`perspective`),
            g = X(`aspect`),
            _ = X(`ease`),
            v = X(`animate`),
            y = () => [`auto`, `avoid`, `all`, `avoid-page`, `page`, `left`, `right`, `column`],
            b = () => [`center`, `top`, `bottom`, `left`, `right`, `top-left`, `left-top`, `top-right`, `right-top`, `bottom-right`, `right-bottom`, `bottom-left`, `left-bottom`],
            x = () => [...b(), $, Q],
            S = () => [`auto`, `hidden`, `clip`, `visible`, `scroll`],
            C = () => [`auto`, `contain`, `none`],
            w = () => [$, Q, c],
            T = () => [wp, `full`, `auto`, ...w()],
            E = () => [Tp, `none`, `subgrid`, $, Q],
            D = () => [`auto`, {
                span: [`full`, Tp, $, Q]
            }, Tp, $, Q],
            O = () => [Tp, `auto`, $, Q],
            k = () => [`auto`, `min`, `max`, `fr`, $, Q],
            A = () => [`start`, `end`, `center`, `between`, `around`, `evenly`, `stretch`, `baseline`, `center-safe`, `end-safe`],
            j = () => [`start`, `end`, `center`, `stretch`, `center-safe`, `end-safe`],
            M = () => [`auto`, ...w()],
            N = () => [wp, `auto`, `full`, `dvw`, `dvh`, `lvw`, `lvh`, `svw`, `svh`, `min`, `max`, `fit`, ...w()],
            P = () => [wp, `screen`, `full`, `dvw`, `lvw`, `svw`, `min`, `max`, `fit`, ...w()],
            ee = () => [wp, `screen`, `full`, `lh`, `dvh`, `lvh`, `svh`, `min`, `max`, `fit`, ...w()],
            F = () => [e, $, Q],
            te = () => [...b(), Wp, zp, {
                position: [$, Q]
            }],
            ne = () => [`no-repeat`, {
                repeat: [``, `x`, `y`, `space`, `round`]
            }],
            re = () => [`auto`, `cover`, `contain`, Gp, Pp, {
                size: [$, Q]
            }],
            ie = () => [Ep, Hp, Fp],
            I = () => [``, `none`, `full`, l, $, Q],
            L = () => [``, Z, Hp, Fp],
            ae = () => [`solid`, `dashed`, `dotted`, `double`],
            oe = () => [`normal`, `multiply`, `screen`, `overlay`, `darken`, `lighten`, `color-dodge`, `color-burn`, `hard-light`, `soft-light`, `difference`, `exclusion`, `hue`, `saturation`, `color`, `luminosity`],
            R = () => [Z, Ep, Wp, zp],
            se = () => [``, `none`, m, $, Q],
            ce = () => [`none`, Z, $, Q],
            le = () => [`none`, Z, $, Q],
            ue = () => [Z, $, Q],
            de = () => [wp, `full`, ...w()];
        return {
            cacheSize: 500,
            theme: {
                animate: [`spin`, `ping`, `pulse`, `bounce`],
                aspect: [`video`],
                blur: [Dp],
                breakpoint: [Dp],
                color: [Op],
                container: [Dp],
                "drop-shadow": [Dp],
                ease: [`in`, `out`, `in-out`],
                font: [Np],
                "font-weight": [`thin`, `extralight`, `light`, `normal`, `medium`, `semibold`, `bold`, `extrabold`, `black`],
                "inset-shadow": [Dp],
                leading: [`none`, `tight`, `snug`, `normal`, `relaxed`, `loose`],
                perspective: [`dramatic`, `near`, `normal`, `midrange`, `distant`, `none`],
                radius: [Dp],
                shadow: [Dp],
                spacing: [`px`, Z],
                text: [Dp],
                "text-shadow": [Dp],
                tracking: [`tighter`, `tight`, `normal`, `wide`, `wider`, `widest`]
            },
            classGroups: {
                aspect: [{
                    aspect: [`auto`, `square`, wp, Q, $, g]
                }],
                container: [`container`],
                columns: [{
                    columns: [Z, Q, $, s]
                }],
                "break-after": [{
                    "break-after": y()
                }],
                "break-before": [{
                    "break-before": y()
                }],
                "break-inside": [{
                    "break-inside": [`auto`, `avoid`, `avoid-page`, `avoid-column`]
                }],
                "box-decoration": [{
                    "box-decoration": [`slice`, `clone`]
                }],
                box: [{
                    box: [`border`, `content`]
                }],
                display: [`block`, `inline-block`, `inline`, `flex`, `inline-flex`, `table`, `inline-table`, `table-caption`, `table-cell`, `table-column`, `table-column-group`, `table-footer-group`, `table-header-group`, `table-row-group`, `table-row`, `flow-root`, `grid`, `inline-grid`, `contents`, `list-item`, `hidden`],
                sr: [`sr-only`, `not-sr-only`],
                float: [{
                    float: [`right`, `left`, `none`, `start`, `end`]
                }],
                clear: [{
                    clear: [`left`, `right`, `both`, `none`, `start`, `end`]
                }],
                isolation: [`isolate`, `isolation-auto`],
                "object-fit": [{
                    object: [`contain`, `cover`, `fill`, `none`, `scale-down`]
                }],
                "object-position": [{
                    object: x()
                }],
                overflow: [{
                    overflow: S()
                }],
                "overflow-x": [{
                    "overflow-x": S()
                }],
                "overflow-y": [{
                    "overflow-y": S()
                }],
                overscroll: [{
                    overscroll: C()
                }],
                "overscroll-x": [{
                    "overscroll-x": C()
                }],
                "overscroll-y": [{
                    "overscroll-y": C()
                }],
                position: [`static`, `fixed`, `absolute`, `relative`, `sticky`],
                inset: [{
                    inset: T()
                }],
                "inset-x": [{
                    "inset-x": T()
                }],
                "inset-y": [{
                    "inset-y": T()
                }],
                start: [{
                    "inset-s": T(),
                    start: T()
                }],
                end: [{
                    "inset-e": T(),
                    end: T()
                }],
                "inset-bs": [{
                    "inset-bs": T()
                }],
                "inset-be": [{
                    "inset-be": T()
                }],
                top: [{
                    top: T()
                }],
                right: [{
                    right: T()
                }],
                bottom: [{
                    bottom: T()
                }],
                left: [{
                    left: T()
                }],
                visibility: [`visible`, `invisible`, `collapse`],
                z: [{
                    z: [Tp, `auto`, $, Q]
                }],
                basis: [{
                    basis: [wp, `full`, `auto`, s, ...w()]
                }],
                "flex-direction": [{
                    flex: [`row`, `row-reverse`, `col`, `col-reverse`]
                }],
                "flex-wrap": [{
                    flex: [`nowrap`, `wrap`, `wrap-reverse`]
                }],
                flex: [{
                    flex: [Z, wp, `auto`, `initial`, `none`, Q]
                }],
                grow: [{
                    grow: [``, Z, $, Q]
                }],
                shrink: [{
                    shrink: [``, Z, $, Q]
                }],
                order: [{
                    order: [Tp, `first`, `last`, `none`, $, Q]
                }],
                "grid-cols": [{
                    "grid-cols": E()
                }],
                "col-start-end": [{
                    col: D()
                }],
                "col-start": [{
                    "col-start": O()
                }],
                "col-end": [{
                    "col-end": O()
                }],
                "grid-rows": [{
                    "grid-rows": E()
                }],
                "row-start-end": [{
                    row: D()
                }],
                "row-start": [{
                    "row-start": O()
                }],
                "row-end": [{
                    "row-end": O()
                }],
                "grid-flow": [{
                    "grid-flow": [`row`, `col`, `dense`, `row-dense`, `col-dense`]
                }],
                "auto-cols": [{
                    "auto-cols": k()
                }],
                "auto-rows": [{
                    "auto-rows": k()
                }],
                gap: [{
                    gap: w()
                }],
                "gap-x": [{
                    "gap-x": w()
                }],
                "gap-y": [{
                    "gap-y": w()
                }],
                "justify-content": [{
                    justify: [...A(), `normal`]
                }],
                "justify-items": [{
                    "justify-items": [...j(), `normal`]
                }],
                "justify-self": [{
                    "justify-self": [`auto`, ...j()]
                }],
                "align-content": [{
                    content: [`normal`, ...A()]
                }],
                "align-items": [{
                    items: [...j(), {
                        baseline: [``, `last`]
                    }]
                }],
                "align-self": [{
                    self: [`auto`, ...j(), {
                        baseline: [``, `last`]
                    }]
                }],
                "place-content": [{
                    "place-content": A()
                }],
                "place-items": [{
                    "place-items": [...j(), `baseline`]
                }],
                "place-self": [{
                    "place-self": [`auto`, ...j()]
                }],
                p: [{
                    p: w()
                }],
                px: [{
                    px: w()
                }],
                py: [{
                    py: w()
                }],
                ps: [{
                    ps: w()
                }],
                pe: [{
                    pe: w()
                }],
                pbs: [{
                    pbs: w()
                }],
                pbe: [{
                    pbe: w()
                }],
                pt: [{
                    pt: w()
                }],
                pr: [{
                    pr: w()
                }],
                pb: [{
                    pb: w()
                }],
                pl: [{
                    pl: w()
                }],
                m: [{
                    m: M()
                }],
                mx: [{
                    mx: M()
                }],
                my: [{
                    my: M()
                }],
                ms: [{
                    ms: M()
                }],
                me: [{
                    me: M()
                }],
                mbs: [{
                    mbs: M()
                }],
                mbe: [{
                    mbe: M()
                }],
                mt: [{
                    mt: M()
                }],
                mr: [{
                    mr: M()
                }],
                mb: [{
                    mb: M()
                }],
                ml: [{
                    ml: M()
                }],
                "space-x": [{
                    "space-x": w()
                }],
                "space-x-reverse": [`space-x-reverse`],
                "space-y": [{
                    "space-y": w()
                }],
                "space-y-reverse": [`space-y-reverse`],
                size: [{
                    size: N()
                }],
                "inline-size": [{
                    inline: [`auto`, ...P()]
                }],
                "min-inline-size": [{
                    "min-inline": [`auto`, ...P()]
                }],
                "max-inline-size": [{
                    "max-inline": [`none`, ...P()]
                }],
                "block-size": [{
                    block: [`auto`, ...ee()]
                }],
                "min-block-size": [{
                    "min-block": [`auto`, ...ee()]
                }],
                "max-block-size": [{
                    "max-block": [`none`, ...ee()]
                }],
                w: [{
                    w: [s, `screen`, ...N()]
                }],
                "min-w": [{
                    "min-w": [s, `screen`, `none`, ...N()]
                }],
                "max-w": [{
                    "max-w": [s, `screen`, `none`, `prose`, {
                        screen: [o]
                    }, ...N()]
                }],
                h: [{
                    h: [`screen`, `lh`, ...N()]
                }],
                "min-h": [{
                    "min-h": [`screen`, `lh`, `none`, ...N()]
                }],
                "max-h": [{
                    "max-h": [`screen`, `lh`, ...N()]
                }],
                "font-size": [{
                    text: [`base`, n, Hp, Fp]
                }],
                "font-smoothing": [`antialiased`, `subpixel-antialiased`],
                "font-style": [`italic`, `not-italic`],
                "font-weight": [{
                    font: [r, Jp, Lp]
                }],
                "font-stretch": [{
                    "font-stretch": [`ultra-condensed`, `extra-condensed`, `condensed`, `semi-condensed`, `normal`, `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`, Ep, Q]
                }],
                "font-family": [{
                    font: [Up, Rp, t]
                }],
                "font-features": [{
                    "font-features": [Q]
                }],
                "fvn-normal": [`normal-nums`],
                "fvn-ordinal": [`ordinal`],
                "fvn-slashed-zero": [`slashed-zero`],
                "fvn-figure": [`lining-nums`, `oldstyle-nums`],
                "fvn-spacing": [`proportional-nums`, `tabular-nums`],
                "fvn-fraction": [`diagonal-fractions`, `stacked-fractions`],
                tracking: [{
                    tracking: [i, $, Q]
                }],
                "line-clamp": [{
                    "line-clamp": [Z, `none`, $, Ip]
                }],
                leading: [{
                    leading: [a, ...w()]
                }],
                "list-image": [{
                    "list-image": [`none`, $, Q]
                }],
                "list-style-position": [{
                    list: [`inside`, `outside`]
                }],
                "list-style-type": [{
                    list: [`disc`, `decimal`, `none`, $, Q]
                }],
                "text-alignment": [{
                    text: [`left`, `center`, `right`, `justify`, `start`, `end`]
                }],
                "placeholder-color": [{
                    placeholder: F()
                }],
                "text-color": [{
                    text: F()
                }],
                "text-decoration": [`underline`, `overline`, `line-through`, `no-underline`],
                "text-decoration-style": [{
                    decoration: [...ae(), `wavy`]
                }],
                "text-decoration-thickness": [{
                    decoration: [Z, `from-font`, `auto`, $, Fp]
                }],
                "text-decoration-color": [{
                    decoration: F()
                }],
                "underline-offset": [{
                    "underline-offset": [Z, `auto`, $, Q]
                }],
                "text-transform": [`uppercase`, `lowercase`, `capitalize`, `normal-case`],
                "text-overflow": [`truncate`, `text-ellipsis`, `text-clip`],
                "text-wrap": [{
                    text: [`wrap`, `nowrap`, `balance`, `pretty`]
                }],
                indent: [{
                    indent: w()
                }],
                "vertical-align": [{
                    align: [`baseline`, `top`, `middle`, `bottom`, `text-top`, `text-bottom`, `sub`, `super`, $, Q]
                }],
                whitespace: [{
                    whitespace: [`normal`, `nowrap`, `pre`, `pre-line`, `pre-wrap`, `break-spaces`]
                }],
                break: [{
                    break: [`normal`, `words`, `all`, `keep`]
                }],
                wrap: [{
                    wrap: [`break-word`, `anywhere`, `normal`]
                }],
                hyphens: [{
                    hyphens: [`none`, `manual`, `auto`]
                }],
                content: [{
                    content: [`none`, $, Q]
                }],
                "bg-attachment": [{
                    bg: [`fixed`, `local`, `scroll`]
                }],
                "bg-clip": [{
                    "bg-clip": [`border`, `padding`, `content`, `text`]
                }],
                "bg-origin": [{
                    "bg-origin": [`border`, `padding`, `content`]
                }],
                "bg-position": [{
                    bg: te()
                }],
                "bg-repeat": [{
                    bg: ne()
                }],
                "bg-size": [{
                    bg: re()
                }],
                "bg-image": [{
                    bg: [`none`, {
                        linear: [{
                            to: [`t`, `tr`, `r`, `br`, `b`, `bl`, `l`, `tl`]
                        }, Tp, $, Q],
                        radial: [``, $, Q],
                        conic: [Tp, $, Q]
                    }, Kp, Bp]
                }],
                "bg-color": [{
                    bg: F()
                }],
                "gradient-from-pos": [{
                    from: ie()
                }],
                "gradient-via-pos": [{
                    via: ie()
                }],
                "gradient-to-pos": [{
                    to: ie()
                }],
                "gradient-from": [{
                    from: F()
                }],
                "gradient-via": [{
                    via: F()
                }],
                "gradient-to": [{
                    to: F()
                }],
                rounded: [{
                    rounded: I()
                }],
                "rounded-s": [{
                    "rounded-s": I()
                }],
                "rounded-e": [{
                    "rounded-e": I()
                }],
                "rounded-t": [{
                    "rounded-t": I()
                }],
                "rounded-r": [{
                    "rounded-r": I()
                }],
                "rounded-b": [{
                    "rounded-b": I()
                }],
                "rounded-l": [{
                    "rounded-l": I()
                }],
                "rounded-ss": [{
                    "rounded-ss": I()
                }],
                "rounded-se": [{
                    "rounded-se": I()
                }],
                "rounded-ee": [{
                    "rounded-ee": I()
                }],
                "rounded-es": [{
                    "rounded-es": I()
                }],
                "rounded-tl": [{
                    "rounded-tl": I()
                }],
                "rounded-tr": [{
                    "rounded-tr": I()
                }],
                "rounded-br": [{
                    "rounded-br": I()
                }],
                "rounded-bl": [{
                    "rounded-bl": I()
                }],
                "border-w": [{
                    border: L()
                }],
                "border-w-x": [{
                    "border-x": L()
                }],
                "border-w-y": [{
                    "border-y": L()
                }],
                "border-w-s": [{
                    "border-s": L()
                }],
                "border-w-e": [{
                    "border-e": L()
                }],
                "border-w-bs": [{
                    "border-bs": L()
                }],
                "border-w-be": [{
                    "border-be": L()
                }],
                "border-w-t": [{
                    "border-t": L()
                }],
                "border-w-r": [{
                    "border-r": L()
                }],
                "border-w-b": [{
                    "border-b": L()
                }],
                "border-w-l": [{
                    "border-l": L()
                }],
                "divide-x": [{
                    "divide-x": L()
                }],
                "divide-x-reverse": [`divide-x-reverse`],
                "divide-y": [{
                    "divide-y": L()
                }],
                "divide-y-reverse": [`divide-y-reverse`],
                "border-style": [{
                    border: [...ae(), `hidden`, `none`]
                }],
                "divide-style": [{
                    divide: [...ae(), `hidden`, `none`]
                }],
                "border-color": [{
                    border: F()
                }],
                "border-color-x": [{
                    "border-x": F()
                }],
                "border-color-y": [{
                    "border-y": F()
                }],
                "border-color-s": [{
                    "border-s": F()
                }],
                "border-color-e": [{
                    "border-e": F()
                }],
                "border-color-bs": [{
                    "border-bs": F()
                }],
                "border-color-be": [{
                    "border-be": F()
                }],
                "border-color-t": [{
                    "border-t": F()
                }],
                "border-color-r": [{
                    "border-r": F()
                }],
                "border-color-b": [{
                    "border-b": F()
                }],
                "border-color-l": [{
                    "border-l": F()
                }],
                "divide-color": [{
                    divide: F()
                }],
                "outline-style": [{
                    outline: [...ae(), `none`, `hidden`]
                }],
                "outline-offset": [{
                    "outline-offset": [Z, $, Q]
                }],
                "outline-w": [{
                    outline: [``, Z, Hp, Fp]
                }],
                "outline-color": [{
                    outline: F()
                }],
                shadow: [{
                    shadow: [``, `none`, u, qp, Vp]
                }],
                "shadow-color": [{
                    shadow: F()
                }],
                "inset-shadow": [{
                    "inset-shadow": [`none`, d, qp, Vp]
                }],
                "inset-shadow-color": [{
                    "inset-shadow": F()
                }],
                "ring-w": [{
                    ring: L()
                }],
                "ring-w-inset": [`ring-inset`],
                "ring-color": [{
                    ring: F()
                }],
                "ring-offset-w": [{
                    "ring-offset": [Z, Fp]
                }],
                "ring-offset-color": [{
                    "ring-offset": F()
                }],
                "inset-ring-w": [{
                    "inset-ring": L()
                }],
                "inset-ring-color": [{
                    "inset-ring": F()
                }],
                "text-shadow": [{
                    "text-shadow": [`none`, f, qp, Vp]
                }],
                "text-shadow-color": [{
                    "text-shadow": F()
                }],
                opacity: [{
                    opacity: [Z, $, Q]
                }],
                "mix-blend": [{
                    "mix-blend": [...oe(), `plus-darker`, `plus-lighter`]
                }],
                "bg-blend": [{
                    "bg-blend": oe()
                }],
                "mask-clip": [{
                    "mask-clip": [`border`, `padding`, `content`, `fill`, `stroke`, `view`]
                }, `mask-no-clip`],
                "mask-composite": [{
                    mask: [`add`, `subtract`, `intersect`, `exclude`]
                }],
                "mask-image-linear-pos": [{
                    "mask-linear": [Z]
                }],
                "mask-image-linear-from-pos": [{
                    "mask-linear-from": R()
                }],
                "mask-image-linear-to-pos": [{
                    "mask-linear-to": R()
                }],
                "mask-image-linear-from-color": [{
                    "mask-linear-from": F()
                }],
                "mask-image-linear-to-color": [{
                    "mask-linear-to": F()
                }],
                "mask-image-t-from-pos": [{
                    "mask-t-from": R()
                }],
                "mask-image-t-to-pos": [{
                    "mask-t-to": R()
                }],
                "mask-image-t-from-color": [{
                    "mask-t-from": F()
                }],
                "mask-image-t-to-color": [{
                    "mask-t-to": F()
                }],
                "mask-image-r-from-pos": [{
                    "mask-r-from": R()
                }],
                "mask-image-r-to-pos": [{
                    "mask-r-to": R()
                }],
                "mask-image-r-from-color": [{
                    "mask-r-from": F()
                }],
                "mask-image-r-to-color": [{
                    "mask-r-to": F()
                }],
                "mask-image-b-from-pos": [{
                    "mask-b-from": R()
                }],
                "mask-image-b-to-pos": [{
                    "mask-b-to": R()
                }],
                "mask-image-b-from-color": [{
                    "mask-b-from": F()
                }],
                "mask-image-b-to-color": [{
                    "mask-b-to": F()
                }],
                "mask-image-l-from-pos": [{
                    "mask-l-from": R()
                }],
                "mask-image-l-to-pos": [{
                    "mask-l-to": R()
                }],
                "mask-image-l-from-color": [{
                    "mask-l-from": F()
                }],
                "mask-image-l-to-color": [{
                    "mask-l-to": F()
                }],
                "mask-image-x-from-pos": [{
                    "mask-x-from": R()
                }],
                "mask-image-x-to-pos": [{
                    "mask-x-to": R()
                }],
                "mask-image-x-from-color": [{
                    "mask-x-from": F()
                }],
                "mask-image-x-to-color": [{
                    "mask-x-to": F()
                }],
                "mask-image-y-from-pos": [{
                    "mask-y-from": R()
                }],
                "mask-image-y-to-pos": [{
                    "mask-y-to": R()
                }],
                "mask-image-y-from-color": [{
                    "mask-y-from": F()
                }],
                "mask-image-y-to-color": [{
                    "mask-y-to": F()
                }],
                "mask-image-radial": [{
                    "mask-radial": [$, Q]
                }],
                "mask-image-radial-from-pos": [{
                    "mask-radial-from": R()
                }],
                "mask-image-radial-to-pos": [{
                    "mask-radial-to": R()
                }],
                "mask-image-radial-from-color": [{
                    "mask-radial-from": F()
                }],
                "mask-image-radial-to-color": [{
                    "mask-radial-to": F()
                }],
                "mask-image-radial-shape": [{
                    "mask-radial": [`circle`, `ellipse`]
                }],
                "mask-image-radial-size": [{
                    "mask-radial": [{
                        closest: [`side`, `corner`],
                        farthest: [`side`, `corner`]
                    }]
                }],
                "mask-image-radial-pos": [{
                    "mask-radial-at": b()
                }],
                "mask-image-conic-pos": [{
                    "mask-conic": [Z]
                }],
                "mask-image-conic-from-pos": [{
                    "mask-conic-from": R()
                }],
                "mask-image-conic-to-pos": [{
                    "mask-conic-to": R()
                }],
                "mask-image-conic-from-color": [{
                    "mask-conic-from": F()
                }],
                "mask-image-conic-to-color": [{
                    "mask-conic-to": F()
                }],
                "mask-mode": [{
                    mask: [`alpha`, `luminance`, `match`]
                }],
                "mask-origin": [{
                    "mask-origin": [`border`, `padding`, `content`, `fill`, `stroke`, `view`]
                }],
                "mask-position": [{
                    mask: te()
                }],
                "mask-repeat": [{
                    mask: ne()
                }],
                "mask-size": [{
                    mask: re()
                }],
                "mask-type": [{
                    "mask-type": [`alpha`, `luminance`]
                }],
                "mask-image": [{
                    mask: [`none`, $, Q]
                }],
                filter: [{
                    filter: [``, `none`, $, Q]
                }],
                blur: [{
                    blur: se()
                }],
                brightness: [{
                    brightness: [Z, $, Q]
                }],
                contrast: [{
                    contrast: [Z, $, Q]
                }],
                "drop-shadow": [{
                    "drop-shadow": [``, `none`, p, qp, Vp]
                }],
                "drop-shadow-color": [{
                    "drop-shadow": F()
                }],
                grayscale: [{
                    grayscale: [``, Z, $, Q]
                }],
                "hue-rotate": [{
                    "hue-rotate": [Z, $, Q]
                }],
                invert: [{
                    invert: [``, Z, $, Q]
                }],
                saturate: [{
                    saturate: [Z, $, Q]
                }],
                sepia: [{
                    sepia: [``, Z, $, Q]
                }],
                "backdrop-filter": [{
                    "backdrop-filter": [``, `none`, $, Q]
                }],
                "backdrop-blur": [{
                    "backdrop-blur": se()
                }],
                "backdrop-brightness": [{
                    "backdrop-brightness": [Z, $, Q]
                }],
                "backdrop-contrast": [{
                    "backdrop-contrast": [Z, $, Q]
                }],
                "backdrop-grayscale": [{
                    "backdrop-grayscale": [``, Z, $, Q]
                }],
                "backdrop-hue-rotate": [{
                    "backdrop-hue-rotate": [Z, $, Q]
                }],
                "backdrop-invert": [{
                    "backdrop-invert": [``, Z, $, Q]
                }],
                "backdrop-opacity": [{
                    "backdrop-opacity": [Z, $, Q]
                }],
                "backdrop-saturate": [{
                    "backdrop-saturate": [Z, $, Q]
                }],
                "backdrop-sepia": [{
                    "backdrop-sepia": [``, Z, $, Q]
                }],
                "border-collapse": [{
                    border: [`collapse`, `separate`]
                }],
                "border-spacing": [{
                    "border-spacing": w()
                }],
                "border-spacing-x": [{
                    "border-spacing-x": w()
                }],
                "border-spacing-y": [{
                    "border-spacing-y": w()
                }],
                "table-layout": [{
                    table: [`auto`, `fixed`]
                }],
                caption: [{
                    caption: [`top`, `bottom`]
                }],
                transition: [{
                    transition: [``, `all`, `colors`, `opacity`, `shadow`, `transform`, `none`, $, Q]
                }],
                "transition-behavior": [{
                    transition: [`normal`, `discrete`]
                }],
                duration: [{
                    duration: [Z, `initial`, $, Q]
                }],
                ease: [{
                    ease: [`linear`, `initial`, _, $, Q]
                }],
                delay: [{
                    delay: [Z, $, Q]
                }],
                animate: [{
                    animate: [`none`, v, $, Q]
                }],
                backface: [{
                    backface: [`hidden`, `visible`]
                }],
                perspective: [{
                    perspective: [h, $, Q]
                }],
                "perspective-origin": [{
                    "perspective-origin": x()
                }],
                rotate: [{
                    rotate: ce()
                }],
                "rotate-x": [{
                    "rotate-x": ce()
                }],
                "rotate-y": [{
                    "rotate-y": ce()
                }],
                "rotate-z": [{
                    "rotate-z": ce()
                }],
                scale: [{
                    scale: le()
                }],
                "scale-x": [{
                    "scale-x": le()
                }],
                "scale-y": [{
                    "scale-y": le()
                }],
                "scale-z": [{
                    "scale-z": le()
                }],
                "scale-3d": [`scale-3d`],
                skew: [{
                    skew: ue()
                }],
                "skew-x": [{
                    "skew-x": ue()
                }],
                "skew-y": [{
                    "skew-y": ue()
                }],
                transform: [{
                    transform: [$, Q, ``, `none`, `gpu`, `cpu`]
                }],
                "transform-origin": [{
                    origin: x()
                }],
                "transform-style": [{
                    transform: [`3d`, `flat`]
                }],
                translate: [{
                    translate: de()
                }],
                "translate-x": [{
                    "translate-x": de()
                }],
                "translate-y": [{
                    "translate-y": de()
                }],
                "translate-z": [{
                    "translate-z": de()
                }],
                "translate-none": [`translate-none`],
                accent: [{
                    accent: F()
                }],
                appearance: [{
                    appearance: [`none`, `auto`]
                }],
                "caret-color": [{
                    caret: F()
                }],
                "color-scheme": [{
                    scheme: [`normal`, `dark`, `light`, `light-dark`, `only-dark`, `only-light`]
                }],
                cursor: [{
                    cursor: [`auto`, `default`, `pointer`, `wait`, `text`, `move`, `help`, `not-allowed`, `none`, `context-menu`, `progress`, `cell`, `crosshair`, `vertical-text`, `alias`, `copy`, `no-drop`, `grab`, `grabbing`, `all-scroll`, `col-resize`, `row-resize`, `n-resize`, `e-resize`, `s-resize`, `w-resize`, `ne-resize`, `nw-resize`, `se-resize`, `sw-resize`, `ew-resize`, `ns-resize`, `nesw-resize`, `nwse-resize`, `zoom-in`, `zoom-out`, $, Q]
                }],
                "field-sizing": [{
                    "field-sizing": [`fixed`, `content`]
                }],
                "pointer-events": [{
                    "pointer-events": [`auto`, `none`]
                }],
                resize: [{
                    resize: [`none`, ``, `y`, `x`]
                }],
                "scroll-behavior": [{
                    scroll: [`auto`, `smooth`]
                }],
                "scroll-m": [{
                    "scroll-m": w()
                }],
                "scroll-mx": [{
                    "scroll-mx": w()
                }],
                "scroll-my": [{
                    "scroll-my": w()
                }],
                "scroll-ms": [{
                    "scroll-ms": w()
                }],
                "scroll-me": [{
                    "scroll-me": w()
                }],
                "scroll-mbs": [{
                    "scroll-mbs": w()
                }],
                "scroll-mbe": [{
                    "scroll-mbe": w()
                }],
                "scroll-mt": [{
                    "scroll-mt": w()
                }],
                "scroll-mr": [{
                    "scroll-mr": w()
                }],
                "scroll-mb": [{
                    "scroll-mb": w()
                }],
                "scroll-ml": [{
                    "scroll-ml": w()
                }],
                "scroll-p": [{
                    "scroll-p": w()
                }],
                "scroll-px": [{
                    "scroll-px": w()
                }],
                "scroll-py": [{
                    "scroll-py": w()
                }],
                "scroll-ps": [{
                    "scroll-ps": w()
                }],
                "scroll-pe": [{
                    "scroll-pe": w()
                }],
                "scroll-pbs": [{
                    "scroll-pbs": w()
                }],
                "scroll-pbe": [{
                    "scroll-pbe": w()
                }],
                "scroll-pt": [{
                    "scroll-pt": w()
                }],
                "scroll-pr": [{
                    "scroll-pr": w()
                }],
                "scroll-pb": [{
                    "scroll-pb": w()
                }],
                "scroll-pl": [{
                    "scroll-pl": w()
                }],
                "snap-align": [{
                    snap: [`start`, `end`, `center`, `align-none`]
                }],
                "snap-stop": [{
                    snap: [`normal`, `always`]
                }],
                "snap-type": [{
                    snap: [`none`, `x`, `y`, `both`]
                }],
                "snap-strictness": [{
                    snap: [`mandatory`, `proximity`]
                }],
                touch: [{
                    touch: [`auto`, `none`, `manipulation`]
                }],
                "touch-x": [{
                    "touch-pan": [`x`, `left`, `right`]
                }],
                "touch-y": [{
                    "touch-pan": [`y`, `up`, `down`]
                }],
                "touch-pz": [`touch-pinch-zoom`],
                select: [{
                    select: [`none`, `text`, `all`, `auto`]
                }],
                "will-change": [{
                    "will-change": [`auto`, `scroll`, `contents`, `transform`, $, Q]
                }],
                fill: [{
                    fill: [`none`, ...F()]
                }],
                "stroke-w": [{
                    stroke: [Z, Hp, Fp, Ip]
                }],
                stroke: [{
                    stroke: [`none`, ...F()]
                }],
                "forced-color-adjust": [{
                    "forced-color-adjust": [`auto`, `none`]
                }]
            },
            conflictingClassGroups: {
                overflow: [`overflow-x`, `overflow-y`],
                overscroll: [`overscroll-x`, `overscroll-y`],
                inset: [`inset-x`, `inset-y`, `inset-bs`, `inset-be`, `start`, `end`, `top`, `right`, `bottom`, `left`],
                "inset-x": [`right`, `left`],
                "inset-y": [`top`, `bottom`],
                flex: [`basis`, `grow`, `shrink`],
                gap: [`gap-x`, `gap-y`],
                p: [`px`, `py`, `ps`, `pe`, `pbs`, `pbe`, `pt`, `pr`, `pb`, `pl`],
                px: [`pr`, `pl`],
                py: [`pt`, `pb`],
                m: [`mx`, `my`, `ms`, `me`, `mbs`, `mbe`, `mt`, `mr`, `mb`, `ml`],
                mx: [`mr`, `ml`],
                my: [`mt`, `mb`],
                size: [`w`, `h`],
                "font-size": [`leading`],
                "fvn-normal": [`fvn-ordinal`, `fvn-slashed-zero`, `fvn-figure`, `fvn-spacing`, `fvn-fraction`],
                "fvn-ordinal": [`fvn-normal`],
                "fvn-slashed-zero": [`fvn-normal`],
                "fvn-figure": [`fvn-normal`],
                "fvn-spacing": [`fvn-normal`],
                "fvn-fraction": [`fvn-normal`],
                "line-clamp": [`display`, `overflow`],
                rounded: [`rounded-s`, `rounded-e`, `rounded-t`, `rounded-r`, `rounded-b`, `rounded-l`, `rounded-ss`, `rounded-se`, `rounded-ee`, `rounded-es`, `rounded-tl`, `rounded-tr`, `rounded-br`, `rounded-bl`],
                "rounded-s": [`rounded-ss`, `rounded-es`],
                "rounded-e": [`rounded-se`, `rounded-ee`],
                "rounded-t": [`rounded-tl`, `rounded-tr`],
                "rounded-r": [`rounded-tr`, `rounded-br`],
                "rounded-b": [`rounded-br`, `rounded-bl`],
                "rounded-l": [`rounded-tl`, `rounded-bl`],
                "border-spacing": [`border-spacing-x`, `border-spacing-y`],
                "border-w": [`border-w-x`, `border-w-y`, `border-w-s`, `border-w-e`, `border-w-bs`, `border-w-be`, `border-w-t`, `border-w-r`, `border-w-b`, `border-w-l`],
                "border-w-x": [`border-w-r`, `border-w-l`],
                "border-w-y": [`border-w-t`, `border-w-b`],
                "border-color": [`border-color-x`, `border-color-y`, `border-color-s`, `border-color-e`, `border-color-bs`, `border-color-be`, `border-color-t`, `border-color-r`, `border-color-b`, `border-color-l`],
                "border-color-x": [`border-color-r`, `border-color-l`],
                "border-color-y": [`border-color-t`, `border-color-b`],
                translate: [`translate-x`, `translate-y`, `translate-none`],
                "translate-none": [`translate`, `translate-x`, `translate-y`, `translate-z`],
                "scroll-m": [`scroll-mx`, `scroll-my`, `scroll-ms`, `scroll-me`, `scroll-mbs`, `scroll-mbe`, `scroll-mt`, `scroll-mr`, `scroll-mb`, `scroll-ml`],
                "scroll-mx": [`scroll-mr`, `scroll-ml`],
                "scroll-my": [`scroll-mt`, `scroll-mb`],
                "scroll-p": [`scroll-px`, `scroll-py`, `scroll-ps`, `scroll-pe`, `scroll-pbs`, `scroll-pbe`, `scroll-pt`, `scroll-pr`, `scroll-pb`, `scroll-pl`],
                "scroll-px": [`scroll-pr`, `scroll-pl`],
                "scroll-py": [`scroll-pt`, `scroll-pb`],
                touch: [`touch-x`, `touch-y`, `touch-pz`],
                "touch-x": [`touch`],
                "touch-y": [`touch`],
                "touch-pz": [`touch`]
            },
            conflictingClassGroupModifiers: {
                "font-size": [`leading`]
            },
            orderSensitiveModifiers: [`*`, `**`, `after`, `backdrop`, `before`, `details-content`, `file`, `first-letter`, `first-line`, `marker`, `placeholder`, `selection`]
        }
    });

function om(...e) {
    return am(Lf(e))
}
var sm = jf,
    cm = s.forwardRef(({
        className: e,
        ...t
    }, n) => (0, K.jsx)(Mf, {
        ref: n,
        className: om(`border-b`, e),
        ...t
    }));
cm.displayName = `AccordionItem`;
var lm = s.forwardRef(({
    className: e,
    children: t,
    ...n
}, r) => (0, K.jsx)(Nf, {
    className: `flex`,
    children: (0, K.jsxs)(Pf, {
        ref: r,
        className: om(`flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180`, e),
        ...n,
        children: [t, (0, K.jsx)(Ku, {
            className: `h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200`
        })]
    })
}));
lm.displayName = Pf.displayName;
var um = s.forwardRef(({
    className: e,
    children: t,
    ...n
}, r) => (0, K.jsx)(Ff, {
    ref: r,
    className: `overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down`,
    ...n,
    children: (0, K.jsx)(`div`, {
        className: om(`pb-4 pt-0`, e),
        children: t
    })
}));
um.displayName = Ff.displayName;
var dm = Symbol.for(`react.lazy`),
    fm = s.use;

function pm(e) {
    return typeof e == `object` && !!e && `then` in e
}

function mm(e) {
    return typeof e == `object` && !!e && `$$typeof` in e && e.$$typeof === dm && `_payload` in e && pm(e._payload)
}

function hm(e) {
    let t = _m(e),
        n = s.forwardRef((e, n) => {
            let {
                children: r,
                ...i
            } = e;
            mm(r) && typeof fm == `function` && (r = fm(r._payload));
            let a = s.Children.toArray(r),
                o = a.find(ym);
            if (o) {
                let e = o.props.children,
                    r = a.map(t => t === o ? s.Children.count(e) > 1 ? s.Children.only(null) : s.isValidElement(e) ? e.props.children : null : t);
                return (0, K.jsx)(t, { ...i,
                    ref: n,
                    children: s.isValidElement(e) ? s.cloneElement(e, void 0, r) : null
                })
            }
            return (0, K.jsx)(t, { ...i,
                ref: n,
                children: r
            })
        });
    return n.displayName = `${e}.Slot`, n
}
var gm = hm(`Slot`);

function _m(e) {
    let t = s.forwardRef((e, t) => {
        let {
            children: n,
            ...r
        } = e;
        if (mm(n) && typeof fm == `function` && (n = fm(n._payload)), s.isValidElement(n)) {
            let e = xm(n),
                i = bm(r, n.props);
            return n.type !== s.Fragment && (i.ref = t ? ld(t, e) : e), s.cloneElement(n, i)
        }
        return s.Children.count(n) > 1 ? s.Children.only(null) : null
    });
    return t.displayName = `${e}.SlotClone`, t
}
var vm = Symbol(`radix.slottable`);

function ym(e) {
    return s.isValidElement(e) && typeof e.type == `function` && `__radixId` in e.type && e.type.__radixId === vm
}

function bm(e, t) {
    let n = { ...t
    };
    for (let r in t) {
        let i = e[r],
            a = t[r];
        /^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
            let t = a(...e);
            return i(...e), t
        } : i && (n[r] = i) : r === `style` ? n[r] = { ...i,
            ...a
        } : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `))
    }
    return { ...e,
        ...n
    }
}

function xm(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, `ref`) ? .get,
        n = t && `isReactWarning` in t && t.isReactWarning;
    return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, `ref`) ? .get, n = t && `isReactWarning` in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var Sm = e => typeof e == `boolean` ? `${e}` : e === 0 ? `0` : e,
    Cm = Lf,
    wm = (e, t) => n => {
        if (t ? .variants == null) return Cm(e, n ? .class, n ? .className);
        let {
            variants: r,
            defaultVariants: i
        } = t, a = Object.keys(r).map(e => {
            let t = n ? .[e],
                a = i ? .[e];
            if (t === null) return null;
            let o = Sm(t) || Sm(a);
            return r[e][o]
        }), o = n && Object.entries(n).reduce((e, t) => {
            let [n, r] = t;
            return r === void 0 || (e[n] = r), e
        }, {});
        return Cm(e, a, t ? .compoundVariants ? .reduce((e, t) => {
            let {
                class: n,
                className: r,
                ...a
            } = t;
            return Object.entries(a).every(e => {
                let [t, n] = e;
                return Array.isArray(n) ? n.includes({ ...i,
                    ...o
                }[t]) : { ...i,
                    ...o
                }[t] === n
            }) ? [...e, n, r] : e
        }, []), n ? .class, n ? .className)
    },
    Tm = wm(`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`, {
        variants: {
            variant: {
                default: `bg-primary text-primary-foreground shadow hover:bg-primary/90`,
                destructive: `bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90`,
                outline: `border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground`,
                secondary: `bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80`,
                ghost: `hover:bg-accent hover:text-accent-foreground`,
                link: `text-primary underline-offset-4 hover:underline`
            },
            size: {
                default: `h-9 px-4 py-2`,
                sm: `h-8 rounded-md px-3 text-xs`,
                lg: `h-10 rounded-md px-8`,
                icon: `h-9 w-9`
            }
        },
        defaultVariants: {
            variant: `default`,
            size: `default`
        }
    }),
    Em = s.forwardRef(({
        className: e,
        variant: t,
        size: n,
        asChild: r = !1,
        ...i
    }, a) => (0, K.jsx)(r ? gm : `button`, {
        className: om(Tm({
            variant: t,
            size: n,
            className: e
        })),
        ref: a,
        ...i
    }));
Em.displayName = `Button`;
var Dm = s.forwardRef(({
    className: e,
    type: t,
    ...n
}, r) => (0, K.jsx)(`input`, {
    type: t,
    className: om(`flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm`, e),
    ref: r,
    ...n
}));
Dm.displayName = `Input`;
var Om = [`a`, `button`, `div`, `form`, `h2`, `h3`, `img`, `input`, `label`, `li`, `nav`, `ol`, `p`, `select`, `span`, `svg`, `ul`].reduce((e, t) => {
        let n = hm(`Primitive.${t}`),
            r = s.forwardRef((e, r) => {
                let {
                    asChild: i,
                    ...a
                } = e, o = i ? n : t;
                return typeof window < `u` && (window[Symbol.for(`radix-ui`)] = !0), (0, K.jsx)(o, { ...a,
                    ref: r
                })
            });
        return r.displayName = `Primitive.${t}`, { ...e,
            [t]: r
        }
    }, {}),
    km = `Label`,
    Am = s.forwardRef((e, t) => (0, K.jsx)(Om.label, { ...e,
        ref: t,
        onMouseDown: t => {
            t.target.closest(`button, input, select, textarea`) || (e.onMouseDown ? .(t), !t.defaultPrevented && t.detail > 1 && t.preventDefault())
        }
    }));
Am.displayName = km;
var jm = Am,
    Mm = wm(`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`),
    Nm = s.forwardRef(({
        className: e,
        ...t
    }, n) => (0, K.jsx)(jm, {
        ref: n,
        className: om(Mm(), e),
        ...t
    }));
Nm.displayName = jm.displayName;

function Pm(e, [t, n]) {
    return Math.min(n, Math.max(t, e))
}

function Fm(e) {
    let t = s.useRef(e);
    return s.useEffect(() => {
        t.current = e
    }), s.useMemo(() => (...e) => t.current ? .(...e), [])
}

function Im(e, t = globalThis ? .document) {
    let n = Fm(e);
    s.useEffect(() => {
        let e = e => {
            e.key === `Escape` && n(e)
        };
        return t.addEventListener(`keydown`, e, {
            capture: !0
        }), () => t.removeEventListener(`keydown`, e, {
            capture: !0
        })
    }, [n, t])
}
var Lm = `DismissableLayer`,
    Rm = `dismissableLayer.update`,
    zm = `dismissableLayer.pointerDownOutside`,
    Bm = `dismissableLayer.focusOutside`,
    Vm, Hm = s.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    Um = s.forwardRef((e, t) => {
        let {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: i,
            onFocusOutside: a,
            onInteractOutside: o,
            onDismiss: c,
            ...l
        } = e, u = s.useContext(Hm), [d, f] = s.useState(null), p = d ? .ownerDocument ? ? globalThis ? .document, [, m] = s.useState({}), h = q(t, e => f(e)), g = Array.from(u.layers), [_] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), v = g.indexOf(_), y = d ? g.indexOf(d) : -1, b = u.layersWithOutsidePointerEventsDisabled.size > 0, x = y >= v, S = Km(e => {
            let t = e.target,
                n = [...u.branches].some(e => e.contains(t));
            !x || n || (i ? .(e), o ? .(e), e.defaultPrevented || c ? .())
        }, p), C = qm(e => {
            let t = e.target;
            [...u.branches].some(e => e.contains(t)) || (a ? .(e), o ? .(e), e.defaultPrevented || c ? .())
        }, p);
        return Im(e => {
            y === u.layers.size - 1 && (r ? .(e), !e.defaultPrevented && c && (e.preventDefault(), c()))
        }, p), s.useEffect(() => {
            if (d) return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Vm = p.body.style.pointerEvents, p.body.style.pointerEvents = `none`), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), Jm(), () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = Vm)
            }
        }, [d, p, n, u]), s.useEffect(() => () => {
            d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), Jm())
        }, [d, u]), s.useEffect(() => {
            let e = () => m({});
            return document.addEventListener(Rm, e), () => document.removeEventListener(Rm, e)
        }, []), (0, K.jsx)(Y.div, { ...l,
            ref: h,
            style: {
                pointerEvents: b ? x ? `auto` : `none` : void 0,
                ...e.style
            },
            onFocusCapture: J(e.onFocusCapture, C.onFocusCapture),
            onBlurCapture: J(e.onBlurCapture, C.onBlurCapture),
            onPointerDownCapture: J(e.onPointerDownCapture, S.onPointerDownCapture)
        })
    });
Um.displayName = Lm;
var Wm = `DismissableLayerBranch`,
    Gm = s.forwardRef((e, t) => {
        let n = s.useContext(Hm),
            r = s.useRef(null),
            i = q(t, r);
        return s.useEffect(() => {
            let e = r.current;
            if (e) return n.branches.add(e), () => {
                n.branches.delete(e)
            }
        }, [n.branches]), (0, K.jsx)(Y.div, { ...e,
            ref: i
        })
    });
Gm.displayName = Wm;

function Km(e, t = globalThis ? .document) {
    let n = Fm(e),
        r = s.useRef(!1),
        i = s.useRef(() => {});
    return s.useEffect(() => {
        let e = e => {
                if (e.target && !r.current) {
                    let r = function() {
                            Ym(zm, n, a, {
                                discrete: !0
                            })
                        },
                        a = {
                            originalEvent: e
                        };
                    e.pointerType === `touch` ? (t.removeEventListener(`click`, i.current), i.current = r, t.addEventListener(`click`, i.current, {
                        once: !0
                    })) : r()
                } else t.removeEventListener(`click`, i.current);
                r.current = !1
            },
            a = window.setTimeout(() => {
                t.addEventListener(`pointerdown`, e)
            }, 0);
        return () => {
            window.clearTimeout(a), t.removeEventListener(`pointerdown`, e), t.removeEventListener(`click`, i.current)
        }
    }, [t, n]), {
        onPointerDownCapture: () => r.current = !0
    }
}

function qm(e, t = globalThis ? .document) {
    let n = Fm(e),
        r = s.useRef(!1);
    return s.useEffect(() => {
        let e = e => {
            e.target && !r.current && Ym(Bm, n, {
                originalEvent: e
            }, {
                discrete: !1
            })
        };
        return t.addEventListener(`focusin`, e), () => t.removeEventListener(`focusin`, e)
    }, [t, n]), {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}

function Jm() {
    let e = new CustomEvent(Rm);
    document.dispatchEvent(e)
}

function Ym(e, t, n, {
    discrete: r
}) {
    let i = n.originalEvent.target,
        a = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
        });
    t && i.addEventListener(e, t, {
        once: !0
    }), r ? kd(i, a) : i.dispatchEvent(a)
}
var Xm = 0;

function Zm() {
    s.useEffect(() => {
        let e = document.querySelectorAll(`[data-radix-focus-guard]`);
        return document.body.insertAdjacentElement(`afterbegin`, e[0] ? ? Qm()), document.body.insertAdjacentElement(`beforeend`, e[1] ? ? Qm()), Xm++, () => {
            Xm === 1 && document.querySelectorAll(`[data-radix-focus-guard]`).forEach(e => e.remove()), Xm--
        }
    }, [])
}

function Qm() {
    let e = document.createElement(`span`);
    return e.setAttribute(`data-radix-focus-guard`, ``), e.tabIndex = 0, e.style.outline = `none`, e.style.opacity = `0`, e.style.position = `fixed`, e.style.pointerEvents = `none`, e
}
var $m = `focusScope.autoFocusOnMount`,
    eh = `focusScope.autoFocusOnUnmount`,
    th = {
        bubbles: !1,
        cancelable: !0
    },
    nh = `FocusScope`,
    rh = s.forwardRef((e, t) => {
        let {
            loop: n = !1,
            trapped: r = !1,
            onMountAutoFocus: i,
            onUnmountAutoFocus: a,
            ...o
        } = e, [c, l] = s.useState(null), u = Fm(i), d = Fm(a), f = s.useRef(null), p = q(t, e => l(e)), m = s.useRef({
            paused: !1,
            pause() {
                this.paused = !0
            },
            resume() {
                this.paused = !1
            }
        }).current;
        s.useEffect(() => {
            if (r) {
                let e = function(e) {
                        if (m.paused || !c) return;
                        let t = e.target;
                        c.contains(t) ? f.current = t : uh(f.current, {
                            select: !0
                        })
                    },
                    t = function(e) {
                        if (m.paused || !c) return;
                        let t = e.relatedTarget;
                        t !== null && (c.contains(t) || uh(f.current, {
                            select: !0
                        }))
                    },
                    n = function(e) {
                        if (document.activeElement === document.body)
                            for (let t of e) t.removedNodes.length > 0 && uh(c)
                    };
                document.addEventListener(`focusin`, e), document.addEventListener(`focusout`, t);
                let r = new MutationObserver(n);
                return c && r.observe(c, {
                    childList: !0,
                    subtree: !0
                }), () => {
                    document.removeEventListener(`focusin`, e), document.removeEventListener(`focusout`, t), r.disconnect()
                }
            }
        }, [r, c, m.paused]), s.useEffect(() => {
            if (c) {
                dh.add(m);
                let e = document.activeElement;
                if (!c.contains(e)) {
                    let t = new CustomEvent($m, th);
                    c.addEventListener($m, u), c.dispatchEvent(t), t.defaultPrevented || (ih(mh(oh(c)), {
                        select: !0
                    }), document.activeElement === e && uh(c))
                }
                return () => {
                    c.removeEventListener($m, u), setTimeout(() => {
                        let t = new CustomEvent(eh, th);
                        c.addEventListener(eh, d), c.dispatchEvent(t), t.defaultPrevented || uh(e ? ? document.body, {
                            select: !0
                        }), c.removeEventListener(eh, d), dh.remove(m)
                    }, 0)
                }
            }
        }, [c, u, d, m]);
        let h = s.useCallback(e => {
            if (!n && !r || m.paused) return;
            let t = e.key === `Tab` && !e.altKey && !e.ctrlKey && !e.metaKey,
                i = document.activeElement;
            if (t && i) {
                let t = e.currentTarget,
                    [r, a] = ah(t);
                r && a ? !e.shiftKey && i === a ? (e.preventDefault(), n && uh(r, {
                    select: !0
                })) : e.shiftKey && i === r && (e.preventDefault(), n && uh(a, {
                    select: !0
                })) : i === t && e.preventDefault()
            }
        }, [n, r, m.paused]);
        return (0, K.jsx)(Y.div, {
            tabIndex: -1,
            ...o,
            ref: p,
            onKeyDown: h
        })
    });
rh.displayName = nh;

function ih(e, {
    select: t = !1
} = {}) {
    let n = document.activeElement;
    for (let r of e)
        if (uh(r, {
                select: t
            }), document.activeElement !== n) return
}

function ah(e) {
    let t = oh(e);
    return [sh(t, e), sh(t.reverse(), e)]
}

function oh(e) {
    let t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: e => {
                let t = e.tagName === `INPUT` && e.type === `hidden`;
                return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; n.nextNode();) t.push(n.currentNode);
    return t
}

function sh(e, t) {
    for (let n of e)
        if (!ch(n, {
                upTo: t
            })) return n
}

function ch(e, {
    upTo: t
}) {
    if (getComputedStyle(e).visibility === `hidden`) return !0;
    for (; e;) {
        if (t !== void 0 && e === t) return !1;
        if (getComputedStyle(e).display === `none`) return !0;
        e = e.parentElement
    }
    return !1
}

function lh(e) {
    return e instanceof HTMLInputElement && `select` in e
}

function uh(e, {
    select: t = !1
} = {}) {
    if (e && e.focus) {
        let n = document.activeElement;
        e.focus({
            preventScroll: !0
        }), e !== n && lh(e) && t && e.select()
    }
}
var dh = fh();

function fh() {
    let e = [];
    return {
        add(t) {
            let n = e[0];
            t !== n && n ? .pause(), e = ph(e, t), e.unshift(t)
        },
        remove(t) {
            e = ph(e, t), e[0] ? .resume()
        }
    }
}

function ph(e, t) {
    let n = [...e],
        r = n.indexOf(t);
    return r !== -1 && n.splice(r, 1), n
}

function mh(e) {
    return e.filter(e => e.tagName !== `A`)
}
var hh = [`top`, `right`, `bottom`, `left`],
    gh = Math.min,
    _h = Math.max,
    vh = Math.round,
    yh = Math.floor,
    bh = e => ({
        x: e,
        y: e
    }),
    xh = {
        left: `right`,
        right: `left`,
        bottom: `top`,
        top: `bottom`
    };

function Sh(e, t, n) {
    return _h(e, gh(t, n))
}

function Ch(e, t) {
    return typeof e == `function` ? e(t) : e
}

function wh(e) {
    return e.split(`-`)[0]
}

function Th(e) {
    return e.split(`-`)[1]
}

function Eh(e) {
    return e === `x` ? `y` : `x`
}

function Dh(e) {
    return e === `y` ? `height` : `width`
}

function Oh(e) {
    let t = e[0];
    return t === `t` || t === `b` ? `y` : `x`
}

function kh(e) {
    return Eh(Oh(e))
}

function Ah(e, t, n) {
    n === void 0 && (n = !1);
    let r = Th(e),
        i = kh(e),
        a = Dh(i),
        o = i === `x` ? r === (n ? `end` : `start`) ? `right` : `left` : r === `start` ? `bottom` : `top`;
    return t.reference[a] > t.floating[a] && (o = zh(o)), [o, zh(o)]
}

function jh(e) {
    let t = zh(e);
    return [Mh(e), t, Mh(t)]
}

function Mh(e) {
    return e.includes(`start`) ? e.replace(`start`, `end`) : e.replace(`end`, `start`)
}
var Nh = [`left`, `right`],
    Ph = [`right`, `left`],
    Fh = [`top`, `bottom`],
    Ih = [`bottom`, `top`];

function Lh(e, t, n) {
    switch (e) {
        case `top`:
        case `bottom`:
            return n ? t ? Ph : Nh : t ? Nh : Ph;
        case `left`:
        case `right`:
            return t ? Fh : Ih;
        default:
            return []
    }
}

function Rh(e, t, n, r) {
    let i = Th(e),
        a = Lh(wh(e), n === `start`, r);
    return i && (a = a.map(e => e + `-` + i), t && (a = a.concat(a.map(Mh)))), a
}

function zh(e) {
    let t = wh(e);
    return xh[t] + e.slice(t.length)
}

function Bh(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}

function Vh(e) {
    return typeof e == `number` ? {
        top: e,
        right: e,
        bottom: e,
        left: e
    } : Bh(e)
}

function Hh(e) {
    let {
        x: t,
        y: n,
        width: r,
        height: i
    } = e;
    return {
        width: r,
        height: i,
        top: n,
        left: t,
        right: t + r,
        bottom: n + i,
        x: t,
        y: n
    }
}

function Uh(e, t, n) {
    let {
        reference: r,
        floating: i
    } = e, a = Oh(t), o = kh(t), s = Dh(o), c = wh(t), l = a === `y`, u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
    switch (c) {
        case `top`:
            p = {
                x: u,
                y: r.y - i.height
            };
            break;
        case `bottom`:
            p = {
                x: u,
                y: r.y + r.height
            };
            break;
        case `right`:
            p = {
                x: r.x + r.width,
                y: d
            };
            break;
        case `left`:
            p = {
                x: r.x - i.width,
                y: d
            };
            break;
        default:
            p = {
                x: r.x,
                y: r.y
            }
    }
    switch (Th(t)) {
        case `start`:
            p[o] -= f * (n && l ? -1 : 1);
            break;
        case `end`:
            p[o] += f * (n && l ? -1 : 1);
            break
    }
    return p
}
async function Wh(e, t) {
    t === void 0 && (t = {});
    let {
        x: n,
        y: r,
        platform: i,
        rects: a,
        elements: o,
        strategy: s
    } = e, {
        boundary: c = `clippingAncestors`,
        rootBoundary: l = `viewport`,
        elementContext: u = `floating`,
        altBoundary: d = !1,
        padding: f = 0
    } = Ch(t, e), p = Vh(f), m = o[d ? u === `floating` ? `reference` : `floating` : u], h = Hh(await i.getClippingRect({
        element: await (i.isElement == null ? void 0 : i.isElement(m)) ? ? !0 ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(o.floating)),
        boundary: c,
        rootBoundary: l,
        strategy: s
    })), g = u === `floating` ? {
        x: n,
        y: r,
        width: a.floating.width,
        height: a.floating.height
    } : a.reference, _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating)), v = await (i.isElement == null ? void 0 : i.isElement(_)) && await (i.getScale == null ? void 0 : i.getScale(_)) || {
        x: 1,
        y: 1
    }, y = Hh(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: o,
        rect: g,
        offsetParent: _,
        strategy: s
    }) : g);
    return {
        top: (h.top - y.top + p.top) / v.y,
        bottom: (y.bottom - h.bottom + p.bottom) / v.y,
        left: (h.left - y.left + p.left) / v.x,
        right: (y.right - h.right + p.right) / v.x
    }
}
var Gh = 50,
    Kh = async (e, t, n) => {
        let {
            placement: r = `bottom`,
            strategy: i = `absolute`,
            middleware: a = [],
            platform: o
        } = n, s = o.detectOverflow ? o : { ...o,
            detectOverflow: Wh
        }, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
            reference: e,
            floating: t,
            strategy: i
        }), {
            x: u,
            y: d
        } = Uh(l, r, c), f = r, p = 0, m = {};
        for (let n = 0; n < a.length; n++) {
            let h = a[n];
            if (!h) continue;
            let {
                name: g,
                fn: _
            } = h, {
                x: v,
                y,
                data: b,
                reset: x
            } = await _({
                x: u,
                y: d,
                initialPlacement: r,
                placement: f,
                strategy: i,
                middlewareData: m,
                rects: l,
                platform: s,
                elements: {
                    reference: e,
                    floating: t
                }
            });
            u = v ? ? u, d = y ? ? d, m[g] = { ...m[g],
                ...b
            }, x && p < Gh && (p++, typeof x == `object` && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
                reference: e,
                floating: t,
                strategy: i
            }) : x.rects), {
                x: u,
                y: d
            } = Uh(l, f, c)), n = -1)
        }
        return {
            x: u,
            y: d,
            placement: f,
            strategy: i,
            middlewareData: m
        }
    },
    qh = e => ({
        name: `arrow`,
        options: e,
        async fn(t) {
            let {
                x: n,
                y: r,
                placement: i,
                rects: a,
                platform: o,
                elements: s,
                middlewareData: c
            } = t, {
                element: l,
                padding: u = 0
            } = Ch(e, t) || {};
            if (l == null) return {};
            let d = Vh(u),
                f = {
                    x: n,
                    y: r
                },
                p = kh(i),
                m = Dh(p),
                h = await o.getDimensions(l),
                g = p === `y`,
                _ = g ? `top` : `left`,
                v = g ? `bottom` : `right`,
                y = g ? `clientHeight` : `clientWidth`,
                b = a.reference[m] + a.reference[p] - f[p] - a.floating[m],
                x = f[p] - a.reference[p],
                S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)),
                C = S ? S[y] : 0;
            (!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
            let w = b / 2 - x / 2,
                T = C / 2 - h[m] / 2 - 1,
                E = gh(d[_], T),
                D = gh(d[v], T),
                O = E,
                k = C - h[m] - D,
                A = C / 2 - h[m] / 2 + w,
                j = Sh(O, A, k),
                M = !c.arrow && Th(i) != null && A !== j && a.reference[m] / 2 - (A < O ? E : D) - h[m] / 2 < 0,
                N = M ? A < O ? A - O : A - k : 0;
            return {
                [p]: f[p] + N,
                data: {
                    [p]: j,
                    centerOffset: A - j - N,
                    ...M && {
                        alignmentOffset: N
                    }
                },
                reset: M
            }
        }
    }),
    Jh = function(e) {
        return e === void 0 && (e = {}), {
            name: `flip`,
            options: e,
            async fn(t) {
                var n;
                let {
                    placement: r,
                    middlewareData: i,
                    rects: a,
                    initialPlacement: o,
                    platform: s,
                    elements: c
                } = t, {
                    mainAxis: l = !0,
                    crossAxis: u = !0,
                    fallbackPlacements: d,
                    fallbackStrategy: f = `bestFit`,
                    fallbackAxisSideDirection: p = `none`,
                    flipAlignment: m = !0,
                    ...h
                } = Ch(e, t);
                if ((n = i.arrow) != null && n.alignmentOffset) return {};
                let g = wh(r),
                    _ = Oh(o),
                    v = wh(o) === o,
                    y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)),
                    b = d || (v || !m ? [zh(o)] : jh(o)),
                    x = p !== `none`;
                !d && x && b.push(...Rh(o, m, p, y));
                let S = [o, ...b],
                    C = await s.detectOverflow(t, h),
                    w = [],
                    T = i.flip ? .overflows || [];
                if (l && w.push(C[g]), u) {
                    let e = Ah(r, a, y);
                    w.push(C[e[0]], C[e[1]])
                }
                if (T = [...T, {
                        placement: r,
                        overflows: w
                    }], !w.every(e => e <= 0)) {
                    let e = (i.flip ? .index || 0) + 1,
                        t = S[e];
                    if (t && (!(u === `alignment` && _ !== Oh(t)) || T.every(e => Oh(e.placement) === _ ? e.overflows[0] > 0 : !0))) return {
                        data: {
                            index: e,
                            overflows: T
                        },
                        reset: {
                            placement: t
                        }
                    };
                    let n = T.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0] ? .placement;
                    if (!n) switch (f) {
                        case `bestFit`:
                            {
                                let e = T.filter(e => {
                                    if (x) {
                                        let t = Oh(e.placement);
                                        return t === _ || t === `y`
                                    }
                                    return !0
                                }).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0] ? .[0];e && (n = e);
                                break
                            }
                        case `initialPlacement`:
                            n = o;
                            break
                    }
                    if (r !== n) return {
                        reset: {
                            placement: n
                        }
                    }
                }
                return {}
            }
        }
    };

function Yh(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}

function Xh(e) {
    return hh.some(t => e[t] >= 0)
}
var Zh = function(e) {
        return e === void 0 && (e = {}), {
            name: `hide`,
            options: e,
            async fn(t) {
                let {
                    rects: n,
                    platform: r
                } = t, {
                    strategy: i = `referenceHidden`,
                    ...a
                } = Ch(e, t);
                switch (i) {
                    case `referenceHidden`:
                        {
                            let e = Yh(await r.detectOverflow(t, { ...a,
                                elementContext: `reference`
                            }), n.reference);
                            return {
                                data: {
                                    referenceHiddenOffsets: e,
                                    referenceHidden: Xh(e)
                                }
                            }
                        }
                    case `escaped`:
                        {
                            let e = Yh(await r.detectOverflow(t, { ...a,
                                altBoundary: !0
                            }), n.floating);
                            return {
                                data: {
                                    escapedOffsets: e,
                                    escaped: Xh(e)
                                }
                            }
                        }
                    default:
                        return {}
                }
            }
        }
    },
    Qh = new Set([`left`, `top`]);
async function $h(e, t) {
    let {
        placement: n,
        platform: r,
        elements: i
    } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = wh(n), s = Th(n), c = Oh(n) === `y`, l = Qh.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = Ch(t, e), {
        mainAxis: f,
        crossAxis: p,
        alignmentAxis: m
    } = typeof d == `number` ? {
        mainAxis: d,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis
    };
    return s && typeof m == `number` && (p = s === `end` ? m * -1 : m), c ? {
        x: p * u,
        y: f * l
    } : {
        x: f * l,
        y: p * u
    }
}
var eg = function(e) {
        return e === void 0 && (e = 0), {
            name: `offset`,
            options: e,
            async fn(t) {
                var n;
                let {
                    x: r,
                    y: i,
                    placement: a,
                    middlewareData: o
                } = t, s = await $h(t, e);
                return a === o.offset ? .placement && (n = o.arrow) != null && n.alignmentOffset ? {} : {
                    x: r + s.x,
                    y: i + s.y,
                    data: { ...s,
                        placement: a
                    }
                }
            }
        }
    },
    tg = function(e) {
        return e === void 0 && (e = {}), {
            name: `shift`,
            options: e,
            async fn(t) {
                let {
                    x: n,
                    y: r,
                    placement: i,
                    platform: a
                } = t, {
                    mainAxis: o = !0,
                    crossAxis: s = !1,
                    limiter: c = {
                        fn: e => {
                            let {
                                x: t,
                                y: n
                            } = e;
                            return {
                                x: t,
                                y: n
                            }
                        }
                    },
                    ...l
                } = Ch(e, t), u = {
                    x: n,
                    y: r
                }, d = await a.detectOverflow(t, l), f = Oh(wh(i)), p = Eh(f), m = u[p], h = u[f];
                if (o) {
                    let e = p === `y` ? `top` : `left`,
                        t = p === `y` ? `bottom` : `right`,
                        n = m + d[e],
                        r = m - d[t];
                    m = Sh(n, m, r)
                }
                if (s) {
                    let e = f === `y` ? `top` : `left`,
                        t = f === `y` ? `bottom` : `right`,
                        n = h + d[e],
                        r = h - d[t];
                    h = Sh(n, h, r)
                }
                let g = c.fn({ ...t,
                    [p]: m,
                    [f]: h
                });
                return { ...g,
                    data: {
                        x: g.x - n,
                        y: g.y - r,
                        enabled: {
                            [p]: o,
                            [f]: s
                        }
                    }
                }
            }
        }
    },
    ng = function(e) {
        return e === void 0 && (e = {}), {
            options: e,
            fn(t) {
                let {
                    x: n,
                    y: r,
                    placement: i,
                    rects: a,
                    middlewareData: o
                } = t, {
                    offset: s = 0,
                    mainAxis: c = !0,
                    crossAxis: l = !0
                } = Ch(e, t), u = {
                    x: n,
                    y: r
                }, d = Oh(i), f = Eh(d), p = u[f], m = u[d], h = Ch(s, t), g = typeof h == `number` ? {
                    mainAxis: h,
                    crossAxis: 0
                } : {
                    mainAxis: 0,
                    crossAxis: 0,
                    ...h
                };
                if (c) {
                    let e = f === `y` ? `height` : `width`,
                        t = a.reference[f] - a.floating[e] + g.mainAxis,
                        n = a.reference[f] + a.reference[e] - g.mainAxis;
                    p < t ? p = t : p > n && (p = n)
                }
                if (l) {
                    let e = f === `y` ? `width` : `height`,
                        t = Qh.has(wh(i)),
                        n = a.reference[d] - a.floating[e] + (t && o.offset ? .[d] || 0) + (t ? 0 : g.crossAxis),
                        r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset ? .[d] || 0) - (t ? g.crossAxis : 0);
                    m < n ? m = n : m > r && (m = r)
                }
                return {
                    [f]: p,
                    [d]: m
                }
            }
        }
    },
    rg = function(e) {
        return e === void 0 && (e = {}), {
            name: `size`,
            options: e,
            async fn(t) {
                var n, r;
                let {
                    placement: i,
                    rects: a,
                    platform: o,
                    elements: s
                } = t, {
                    apply: c = () => {},
                    ...l
                } = Ch(e, t), u = await o.detectOverflow(t, l), d = wh(i), f = Th(i), p = Oh(i) === `y`, {
                    width: m,
                    height: h
                } = a.floating, g, _;
                d === `top` || d === `bottom` ? (g = d, _ = f === (await (o.isRTL == null ? void 0 : o.isRTL(s.floating)) ? `start` : `end`) ? `left` : `right`) : (_ = d, g = f === `end` ? `top` : `bottom`);
                let v = h - u.top - u.bottom,
                    y = m - u.left - u.right,
                    b = gh(h - u[g], v),
                    x = gh(m - u[_], y),
                    S = !t.middlewareData.shift,
                    C = b,
                    w = x;
                if ((n = t.middlewareData.shift) != null && n.enabled.x && (w = y), (r = t.middlewareData.shift) != null && r.enabled.y && (C = v), S && !f) {
                    let e = _h(u.left, 0),
                        t = _h(u.right, 0),
                        n = _h(u.top, 0),
                        r = _h(u.bottom, 0);
                    p ? w = m - 2 * (e !== 0 || t !== 0 ? e + t : _h(u.left, u.right)) : C = h - 2 * (n !== 0 || r !== 0 ? n + r : _h(u.top, u.bottom))
                }
                await c({ ...t,
                    availableWidth: w,
                    availableHeight: C
                });
                let T = await o.getDimensions(s.floating);
                return m !== T.width || h !== T.height ? {
                    reset: {
                        rects: !0
                    }
                } : {}
            }
        }
    };

function ig() {
    return typeof window < `u`
}

function ag(e) {
    return cg(e) ? (e.nodeName || ``).toLowerCase() : `#document`
}

function og(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}

function sg(e) {
    return ((cg(e) ? e.ownerDocument : e.document) || window.document) ? .documentElement
}

function cg(e) {
    return ig() ? e instanceof Node || e instanceof og(e).Node : !1
}

function lg(e) {
    return ig() ? e instanceof Element || e instanceof og(e).Element : !1
}

function ug(e) {
    return ig() ? e instanceof HTMLElement || e instanceof og(e).HTMLElement : !1
}

function dg(e) {
    return !ig() || typeof ShadowRoot > `u` ? !1 : e instanceof ShadowRoot || e instanceof og(e).ShadowRoot
}

function fg(e) {
    let {
        overflow: t,
        overflowX: n,
        overflowY: r,
        display: i
    } = Cg(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== `inline` && i !== `contents`
}

function pg(e) {
    return /^(table|td|th)$/.test(ag(e))
}

function mg(e) {
    try {
        if (e.matches(`:popover-open`)) return !0
    } catch {}
    try {
        return e.matches(`:modal`)
    } catch {
        return !1
    }
}
var hg = /transform|translate|scale|rotate|perspective|filter/,
    gg = /paint|layout|strict|content/,
    _g = e => !!e && e !== `none`,
    vg;

function yg(e) {
    let t = lg(e) ? Cg(e) : e;
    return _g(t.transform) || _g(t.translate) || _g(t.scale) || _g(t.rotate) || _g(t.perspective) || !xg() && (_g(t.backdropFilter) || _g(t.filter)) || hg.test(t.willChange || ``) || gg.test(t.contain || ``)
}

function bg(e) {
    let t = Tg(e);
    for (; ug(t) && !Sg(t);) {
        if (yg(t)) return t;
        if (mg(t)) return null;
        t = Tg(t)
    }
    return null
}

function xg() {
    return vg ? ? = typeof CSS < `u` && CSS.supports && CSS.supports(`-webkit-backdrop-filter`, `none`), vg
}

function Sg(e) {
    return /^(html|body|#document)$/.test(ag(e))
}

function Cg(e) {
    return og(e).getComputedStyle(e)
}

function wg(e) {
    return lg(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}

function Tg(e) {
    if (ag(e) === `html`) return e;
    let t = e.assignedSlot || e.parentNode || dg(e) && e.host || sg(e);
    return dg(t) ? t.host : t
}

function Eg(e) {
    let t = Tg(e);
    return Sg(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ug(t) && fg(t) ? t : Eg(t)
}

function Dg(e, t, n) {
    t === void 0 && (t = []), n === void 0 && (n = !0);
    let r = Eg(e),
        i = r === e.ownerDocument ? .body,
        a = og(r);
    if (i) {
        let e = Og(a);
        return t.concat(a, a.visualViewport || [], fg(r) ? r : [], e && n ? Dg(e) : [])
    } else return t.concat(r, Dg(r, [], n))
}

function Og(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}

function kg(e) {
    let t = Cg(e),
        n = parseFloat(t.width) || 0,
        r = parseFloat(t.height) || 0,
        i = ug(e),
        a = i ? e.offsetWidth : n,
        o = i ? e.offsetHeight : r,
        s = vh(n) !== a || vh(r) !== o;
    return s && (n = a, r = o), {
        width: n,
        height: r,
        $: s
    }
}

function Ag(e) {
    return lg(e) ? e : e.contextElement
}

function jg(e) {
    let t = Ag(e);
    if (!ug(t)) return bh(1);
    let n = t.getBoundingClientRect(),
        {
            width: r,
            height: i,
            $: a
        } = kg(t),
        o = (a ? vh(n.width) : n.width) / r,
        s = (a ? vh(n.height) : n.height) / i;
    return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
        x: o,
        y: s
    }
}
var Mg = bh(0);

function Ng(e) {
    let t = og(e);
    return !xg() || !t.visualViewport ? Mg : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}

function Pg(e, t, n) {
    return t === void 0 && (t = !1), !n || t && n !== og(e) ? !1 : t
}

function Fg(e, t, n, r) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    let i = e.getBoundingClientRect(),
        a = Ag(e),
        o = bh(1);
    t && (r ? lg(r) && (o = jg(r)) : o = jg(e));
    let s = Pg(a, n, r) ? Ng(a) : bh(0),
        c = (i.left + s.x) / o.x,
        l = (i.top + s.y) / o.y,
        u = i.width / o.x,
        d = i.height / o.y;
    if (a) {
        let e = og(a),
            t = r && lg(r) ? og(r) : r,
            n = e,
            i = Og(n);
        for (; i && r && t !== n;) {
            let e = jg(i),
                t = i.getBoundingClientRect(),
                r = Cg(i),
                a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x,
                o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
            c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = og(i), i = Og(n)
        }
    }
    return Hh({
        width: u,
        height: d,
        x: c,
        y: l
    })
}

function Ig(e, t) {
    let n = wg(e).scrollLeft;
    return t ? t.left + n : Fg(sg(e)).left + n
}

function Lg(e, t) {
    let n = e.getBoundingClientRect();
    return {
        x: n.left + t.scrollLeft - Ig(e, n),
        y: n.top + t.scrollTop
    }
}

function Rg(e) {
    let {
        elements: t,
        rect: n,
        offsetParent: r,
        strategy: i
    } = e, a = i === `fixed`, o = sg(r), s = t ? mg(t.floating) : !1;
    if (r === o || s && a) return n;
    let c = {
            scrollLeft: 0,
            scrollTop: 0
        },
        l = bh(1),
        u = bh(0),
        d = ug(r);
    if ((d || !d && !a) && ((ag(r) !== `body` || fg(o)) && (c = wg(r)), d)) {
        let e = Fg(r);
        l = jg(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop
    }
    let f = o && !d && !a ? Lg(o, c) : bh(0);
    return {
        width: n.width * l.x,
        height: n.height * l.y,
        x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
        y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
    }
}

function zg(e) {
    return Array.from(e.getClientRects())
}

function Bg(e) {
    let t = sg(e),
        n = wg(e),
        r = e.ownerDocument.body,
        i = _h(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
        a = _h(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight),
        o = -n.scrollLeft + Ig(e),
        s = -n.scrollTop;
    return Cg(r).direction === `rtl` && (o += _h(t.clientWidth, r.clientWidth) - i), {
        width: i,
        height: a,
        x: o,
        y: s
    }
}
var Vg = 25;

function Hg(e, t) {
    let n = og(e),
        r = sg(e),
        i = n.visualViewport,
        a = r.clientWidth,
        o = r.clientHeight,
        s = 0,
        c = 0;
    if (i) {
        a = i.width, o = i.height;
        let e = xg();
        (!e || e && t === `fixed`) && (s = i.offsetLeft, c = i.offsetTop)
    }
    let l = Ig(r);
    if (l <= 0) {
        let e = r.ownerDocument,
            t = e.body,
            n = getComputedStyle(t),
            i = e.compatMode === `CSS1Compat` && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0,
            o = Math.abs(r.clientWidth - t.clientWidth - i);
        o <= Vg && (a -= o)
    } else l <= Vg && (a += l);
    return {
        width: a,
        height: o,
        x: s,
        y: c
    }
}

function Ug(e, t) {
    let n = Fg(e, !0, t === `fixed`),
        r = n.top + e.clientTop,
        i = n.left + e.clientLeft,
        a = ug(e) ? jg(e) : bh(1);
    return {
        width: e.clientWidth * a.x,
        height: e.clientHeight * a.y,
        x: i * a.x,
        y: r * a.y
    }
}

function Wg(e, t, n) {
    let r;
    if (t === `viewport`) r = Hg(e, n);
    else if (t === `document`) r = Bg(sg(e));
    else if (lg(t)) r = Ug(t, n);
    else {
        let n = Ng(e);
        r = {
            x: t.x - n.x,
            y: t.y - n.y,
            width: t.width,
            height: t.height
        }
    }
    return Hh(r)
}

function Gg(e, t) {
    let n = Tg(e);
    return n === t || !lg(n) || Sg(n) ? !1 : Cg(n).position === `fixed` || Gg(n, t)
}

function Kg(e, t) {
    let n = t.get(e);
    if (n) return n;
    let r = Dg(e, [], !1).filter(e => lg(e) && ag(e) !== `body`),
        i = null,
        a = Cg(e).position === `fixed`,
        o = a ? Tg(e) : e;
    for (; lg(o) && !Sg(o);) {
        let t = Cg(o),
            n = yg(o);
        !n && t.position === `fixed` && (i = null), (a ? !n && !i : !n && t.position === `static` && i && (i.position === `absolute` || i.position === `fixed`) || fg(o) && !n && Gg(e, o)) ? r = r.filter(e => e !== o) : i = t, o = Tg(o)
    }
    return t.set(e, r), r
}

function qg(e) {
    let {
        element: t,
        boundary: n,
        rootBoundary: r,
        strategy: i
    } = e, a = [...n === `clippingAncestors` ? mg(t) ? [] : Kg(t, this._c) : [].concat(n), r], o = Wg(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
    for (let e = 1; e < a.length; e++) {
        let n = Wg(t, a[e], i);
        s = _h(n.top, s), c = gh(n.right, c), l = gh(n.bottom, l), u = _h(n.left, u)
    }
    return {
        width: c - u,
        height: l - s,
        x: u,
        y: s
    }
}

function Jg(e) {
    let {
        width: t,
        height: n
    } = kg(e);
    return {
        width: t,
        height: n
    }
}

function Yg(e, t, n) {
    let r = ug(t),
        i = sg(t),
        a = n === `fixed`,
        o = Fg(e, !0, a, t),
        s = {
            scrollLeft: 0,
            scrollTop: 0
        },
        c = bh(0);

    function l() {
        c.x = Ig(i)
    }
    if (r || !r && !a)
        if ((ag(t) !== `body` || fg(i)) && (s = wg(t)), r) {
            let e = Fg(t, !0, a, t);
            c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop
        } else i && l();
    a && !r && i && l();
    let u = i && !r && !a ? Lg(i, s) : bh(0);
    return {
        x: o.left + s.scrollLeft - c.x - u.x,
        y: o.top + s.scrollTop - c.y - u.y,
        width: o.width,
        height: o.height
    }
}

function Xg(e) {
    return Cg(e).position === `static`
}

function Zg(e, t) {
    if (!ug(e) || Cg(e).position === `fixed`) return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return sg(e) === n && (n = n.ownerDocument.body), n
}

function Qg(e, t) {
    let n = og(e);
    if (mg(e)) return n;
    if (!ug(e)) {
        let t = Tg(e);
        for (; t && !Sg(t);) {
            if (lg(t) && !Xg(t)) return t;
            t = Tg(t)
        }
        return n
    }
    let r = Zg(e, t);
    for (; r && pg(r) && Xg(r);) r = Zg(r, t);
    return r && Sg(r) && Xg(r) && !yg(r) ? n : r || bg(e) || n
}
var $g = async function(e) {
    let t = this.getOffsetParent || Qg,
        n = this.getDimensions,
        r = await n(e.floating);
    return {
        reference: Yg(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};

function e_(e) {
    return Cg(e).direction === `rtl`
}
var t_ = {
    convertOffsetParentRelativeRectToViewportRelativeRect: Rg,
    getDocumentElement: sg,
    getClippingRect: qg,
    getOffsetParent: Qg,
    getElementRects: $g,
    getClientRects: zg,
    getDimensions: Jg,
    getScale: jg,
    isElement: lg,
    isRTL: e_
};

function n_(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}

function r_(e, t) {
    let n = null,
        r, i = sg(e);

    function a() {
        var e;
        clearTimeout(r), (e = n) == null || e.disconnect(), n = null
    }

    function o(s, c) {
        s === void 0 && (s = !1), c === void 0 && (c = 1), a();
        let l = e.getBoundingClientRect(),
            {
                left: u,
                top: d,
                width: f,
                height: p
            } = l;
        if (s || t(), !f || !p) return;
        let m = yh(d),
            h = yh(i.clientWidth - (u + f)),
            g = yh(i.clientHeight - (d + p)),
            _ = yh(u),
            v = {
                rootMargin: -m + `px ` + -h + `px ` + -g + `px ` + -_ + `px`,
                threshold: _h(0, gh(1, c)) || 1
            },
            y = !0;

        function b(t) {
            let n = t[0].intersectionRatio;
            if (n !== c) {
                if (!y) return o();
                n ? o(!1, n) : r = setTimeout(() => {
                    o(!1, 1e-7)
                }, 1e3)
            }
            n === 1 && !n_(l, e.getBoundingClientRect()) && o(), y = !1
        }
        try {
            n = new IntersectionObserver(b, { ...v,
                root: i.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(b, v)
        }
        n.observe(e)
    }
    return o(!0), a
}

function i_(e, t, n, r) {
    r === void 0 && (r = {});
    let {
        ancestorScroll: i = !0,
        ancestorResize: a = !0,
        elementResize: o = typeof ResizeObserver == `function`,
        layoutShift: s = typeof IntersectionObserver == `function`,
        animationFrame: c = !1
    } = r, l = Ag(e), u = i || a ? [...l ? Dg(l) : [], ...t ? Dg(t) : []] : [];
    u.forEach(e => {
        i && e.addEventListener(`scroll`, n, {
            passive: !0
        }), a && e.addEventListener(`resize`, n)
    });
    let d = l && s ? r_(l, n) : null,
        f = -1,
        p = null;
    o && (p = new ResizeObserver(e => {
        let [r] = e;
        r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
            var e;
            (e = p) == null || e.observe(t)
        })), n()
    }), l && !c && p.observe(l), t && p.observe(t));
    let m, h = c ? Fg(e) : null;
    c && g();

    function g() {
        let t = Fg(e);
        h && !n_(h, t) && n(), h = t, m = requestAnimationFrame(g)
    }
    return n(), () => {
        var e;
        u.forEach(e => {
            i && e.removeEventListener(`scroll`, n), a && e.removeEventListener(`resize`, n)
        }), d ? .(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m)
    }
}
var a_ = eg,
    o_ = tg,
    s_ = Jh,
    c_ = rg,
    l_ = Zh,
    u_ = qh,
    d_ = ng,
    f_ = (e, t, n) => {
        let r = new Map,
            i = {
                platform: t_,
                ...n
            },
            a = { ...i.platform,
                _c: r
            };
        return Kh(e, t, { ...i,
            platform: a
        })
    },
    p_ = typeof document < `u` ? s.useLayoutEffect : function() {};

function m_(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (typeof e == `function` && e.toString() === t.toString()) return !0;
    let n, r, i;
    if (e && t && typeof e == `object`) {
        if (Array.isArray(e)) {
            if (n = e.length, n !== t.length) return !1;
            for (r = n; r-- !== 0;)
                if (!m_(e[r], t[r])) return !1;
            return !0
        }
        if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
        for (r = n; r-- !== 0;)
            if (!{}.hasOwnProperty.call(t, i[r])) return !1;
        for (r = n; r-- !== 0;) {
            let n = i[r];
            if (!(n === `_owner` && e.$$typeof) && !m_(e[n], t[n])) return !1
        }
        return !0
    }
    return e !== e && t !== t
}

function h_(e) {
    return typeof window > `u` ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}

function g_(e, t) {
    let n = h_(e);
    return Math.round(t * n) / n
}

function __(e) {
    let t = s.useRef(e);
    return p_(() => {
        t.current = e
    }), t
}

function v_(e) {
    e === void 0 && (e = {});
    let {
        placement: t = `bottom`,
        strategy: n = `absolute`,
        middleware: r = [],
        platform: i,
        elements: {
            reference: a,
            floating: o
        } = {},
        transform: c = !0,
        whileElementsMounted: l,
        open: u
    } = e, [d, f] = s.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    }), [p, m] = s.useState(r);
    m_(p, r) || m(r);
    let [h, g] = s.useState(null), [_, v] = s.useState(null), y = s.useCallback(e => {
        e !== C.current && (C.current = e, g(e))
    }, []), b = s.useCallback(e => {
        e !== w.current && (w.current = e, v(e))
    }, []), x = a || h, S = o || _, C = s.useRef(null), w = s.useRef(null), T = s.useRef(d), E = l != null, D = __(l), O = __(i), k = __(u), A = s.useCallback(() => {
        if (!C.current || !w.current) return;
        let e = {
            placement: t,
            strategy: n,
            middleware: p
        };
        O.current && (e.platform = O.current), f_(C.current, w.current, e).then(e => {
            let t = { ...e,
                isPositioned: k.current !== !1
            };
            j.current && !m_(T.current, t) && (T.current = t, Sd.flushSync(() => {
                f(t)
            }))
        })
    }, [p, t, n, O, k]);
    p_(() => {
        u === !1 && T.current.isPositioned && (T.current.isPositioned = !1, f(e => ({ ...e,
            isPositioned: !1
        })))
    }, [u]);
    let j = s.useRef(!1);
    p_(() => (j.current = !0, () => {
        j.current = !1
    }), []), p_(() => {
        if (x && (C.current = x), S && (w.current = S), x && S) {
            if (D.current) return D.current(x, S, A);
            A()
        }
    }, [x, S, A, D, E]);
    let M = s.useMemo(() => ({
            reference: C,
            floating: w,
            setReference: y,
            setFloating: b
        }), [y, b]),
        N = s.useMemo(() => ({
            reference: x,
            floating: S
        }), [x, S]),
        P = s.useMemo(() => {
            let e = {
                position: n,
                left: 0,
                top: 0
            };
            if (!N.floating) return e;
            let t = g_(N.floating, d.x),
                r = g_(N.floating, d.y);
            return c ? { ...e,
                transform: `translate(` + t + `px, ` + r + `px)`,
                ...h_(N.floating) >= 1.5 && {
                    willChange: `transform`
                }
            } : {
                position: n,
                left: t,
                top: r
            }
        }, [n, c, N.floating, d.x, d.y]);
    return s.useMemo(() => ({ ...d,
        update: A,
        refs: M,
        elements: N,
        floatingStyles: P
    }), [d, A, M, N, P])
}
var y_ = e => {
        function t(e) {
            return {}.hasOwnProperty.call(e, `current`)
        }
        return {
            name: `arrow`,
            options: e,
            fn(n) {
                let {
                    element: r,
                    padding: i
                } = typeof e == `function` ? e(n) : e;
                return r && t(r) ? r.current == null ? {} : u_({
                    element: r.current,
                    padding: i
                }).fn(n) : r ? u_({
                    element: r,
                    padding: i
                }).fn(n) : {}
            }
        }
    },
    b_ = (e, t) => {
        let n = a_(e);
        return {
            name: n.name,
            fn: n.fn,
            options: [e, t]
        }
    },
    x_ = (e, t) => {
        let n = o_(e);
        return {
            name: n.name,
            fn: n.fn,
            options: [e, t]
        }
    },
    S_ = (e, t) => ({
        fn: d_(e).fn,
        options: [e, t]
    }),
    C_ = (e, t) => {
        let n = s_(e);
        return {
            name: n.name,
            fn: n.fn,
            options: [e, t]
        }
    },
    w_ = (e, t) => {
        let n = c_(e);
        return {
            name: n.name,
            fn: n.fn,
            options: [e, t]
        }
    },
    T_ = (e, t) => {
        let n = l_(e);
        return {
            name: n.name,
            fn: n.fn,
            options: [e, t]
        }
    },
    E_ = (e, t) => {
        let n = y_(e);
        return {
            name: n.name,
            fn: n.fn,
            options: [e, t]
        }
    },
    D_ = `Arrow`,
    O_ = s.forwardRef((e, t) => {
        let {
            children: n,
            width: r = 10,
            height: i = 5,
            ...a
        } = e;
        return (0, K.jsx)(Y.svg, { ...a,
            ref: t,
            width: r,
            height: i,
            viewBox: `0 0 30 10`,
            preserveAspectRatio: `none`,
            children: e.asChild ? n : (0, K.jsx)(`polygon`, {
                points: `0,0 30,0 15,10`
            })
        })
    });
O_.displayName = D_;
var k_ = O_;

function A_(e) {
    let [t, n] = s.useState(void 0);
    return _d(() => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            let t = new ResizeObserver(t => {
                if (!Array.isArray(t) || !t.length) return;
                let r = t[0],
                    i, a;
                if (`borderBoxSize` in r) {
                    let e = r.borderBoxSize,
                        t = Array.isArray(e) ? e[0] : e;
                    i = t.inlineSize, a = t.blockSize
                } else i = e.offsetWidth, a = e.offsetHeight;
                n({
                    width: i,
                    height: a
                })
            });
            return t.observe(e, {
                box: `border-box`
            }), () => t.unobserve(e)
        } else n(void 0)
    }, [e]), t
}
var j_ = `Popper`,
    [M_, N_] = od(j_),
    [P_, F_] = M_(j_),
    I_ = e => {
        let {
            __scopePopper: t,
            children: n
        } = e, [r, i] = s.useState(null);
        return (0, K.jsx)(P_, {
            scope: t,
            anchor: r,
            onAnchorChange: i,
            children: n
        })
    };
I_.displayName = j_;
var L_ = `PopperAnchor`,
    R_ = s.forwardRef((e, t) => {
        let {
            __scopePopper: n,
            virtualRef: r,
            ...i
        } = e, a = F_(L_, n), o = s.useRef(null), c = q(t, o), l = s.useRef(null);
        return s.useEffect(() => {
            let e = l.current;
            l.current = r ? .current || o.current, e !== l.current && a.onAnchorChange(l.current)
        }), r ? null : (0, K.jsx)(Y.div, { ...i,
            ref: c
        })
    });
R_.displayName = L_;
var z_ = `PopperContent`,
    [B_, V_] = M_(z_),
    H_ = s.forwardRef((e, t) => {
        let {
            __scopePopper: n,
            side: r = `bottom`,
            sideOffset: i = 0,
            align: a = `center`,
            alignOffset: o = 0,
            arrowPadding: c = 0,
            avoidCollisions: l = !0,
            collisionBoundary: u = [],
            collisionPadding: d = 0,
            sticky: f = `partial`,
            hideWhenDetached: p = !1,
            updatePositionStrategy: m = `optimized`,
            onPlaced: h,
            ...g
        } = e, _ = F_(z_, n), [v, y] = s.useState(null), b = q(t, e => y(e)), [x, S] = s.useState(null), C = A_(x), w = C ? .width ? ? 0, T = C ? .height ? ? 0, E = r + (a === `center` ? `` : `-` + a), D = typeof d == `number` ? d : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...d
        }, O = Array.isArray(u) ? u : [u], k = O.length > 0, A = {
            padding: D,
            boundary: O.filter(K_),
            altBoundary: k
        }, {
            refs: j,
            floatingStyles: M,
            placement: N,
            isPositioned: P,
            middlewareData: ee
        } = v_({
            strategy: `fixed`,
            placement: E,
            whileElementsMounted: (...e) => i_(...e, {
                animationFrame: m === `always`
            }),
            elements: {
                reference: _.anchor
            },
            middleware: [b_({
                mainAxis: i + T,
                alignmentAxis: o
            }), l && x_({
                mainAxis: !0,
                crossAxis: !1,
                limiter: f === `partial` ? S_() : void 0,
                ...A
            }), l && C_({ ...A
            }), w_({ ...A,
                apply: ({
                    elements: e,
                    rects: t,
                    availableWidth: n,
                    availableHeight: r
                }) => {
                    let {
                        width: i,
                        height: a
                    } = t.reference, o = e.floating.style;
                    o.setProperty(`--radix-popper-available-width`, `${n}px`), o.setProperty(`--radix-popper-available-height`, `${r}px`), o.setProperty(`--radix-popper-anchor-width`, `${i}px`), o.setProperty(`--radix-popper-anchor-height`, `${a}px`)
                }
            }), x && E_({
                element: x,
                padding: c
            }), q_({
                arrowWidth: w,
                arrowHeight: T
            }), p && T_({
                strategy: `referenceHidden`,
                ...A
            })]
        }), [F, te] = J_(N), ne = Fm(h);
        _d(() => {
            P && ne ? .()
        }, [P, ne]);
        let re = ee.arrow ? .x,
            ie = ee.arrow ? .y,
            I = ee.arrow ? .centerOffset !== 0,
            [L, ae] = s.useState();
        return _d(() => {
            v && ae(window.getComputedStyle(v).zIndex)
        }, [v]), (0, K.jsx)(`div`, {
            ref: j.setFloating,
            "data-radix-popper-content-wrapper": ``,
            style: { ...M,
                transform: P ? M.transform : `translate(0, -200%)`,
                minWidth: `max-content`,
                zIndex: L,
                "--radix-popper-transform-origin": [ee.transformOrigin ? .x, ee.transformOrigin ? .y].join(` `),
                ...ee.hide ? .referenceHidden && {
                    visibility: `hidden`,
                    pointerEvents: `none`
                }
            },
            dir: e.dir,
            children: (0, K.jsx)(B_, {
                scope: n,
                placedSide: F,
                onArrowChange: S,
                arrowX: re,
                arrowY: ie,
                shouldHideArrow: I,
                children: (0, K.jsx)(Y.div, {
                    "data-side": F,
                    "data-align": te,
                    ...g,
                    ref: b,
                    style: { ...g.style,
                        animation: P ? void 0 : `none`
                    }
                })
            })
        })
    });
H_.displayName = z_;
var U_ = `PopperArrow`,
    W_ = {
        top: `bottom`,
        right: `left`,
        bottom: `top`,
        left: `right`
    },
    G_ = s.forwardRef(function(e, t) {
        let {
            __scopePopper: n,
            ...r
        } = e, i = V_(U_, n), a = W_[i.placedSide];
        return (0, K.jsx)(`span`, {
            ref: i.onArrowChange,
            style: {
                position: `absolute`,
                left: i.arrowX,
                top: i.arrowY,
                [a]: 0,
                transformOrigin: {
                    top: ``,
                    right: `0 0`,
                    bottom: `center 0`,
                    left: `100% 0`
                }[i.placedSide],
                transform: {
                    top: `translateY(100%)`,
                    right: `translateY(50%) rotate(90deg) translateX(-50%)`,
                    bottom: `rotate(180deg)`,
                    left: `translateY(50%) rotate(-90deg) translateX(50%)`
                }[i.placedSide],
                visibility: i.shouldHideArrow ? `hidden` : void 0
            },
            children: (0, K.jsx)(k_, { ...r,
                ref: t,
                style: { ...r.style,
                    display: `block`
                }
            })
        })
    });
G_.displayName = U_;

function K_(e) {
    return e !== null
}
var q_ = e => ({
    name: `transformOrigin`,
    options: e,
    fn(t) {
        let {
            placement: n,
            rects: r,
            middlewareData: i
        } = t, a = i.arrow ? .centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = J_(n), u = {
            start: `0%`,
            center: `50%`,
            end: `100%`
        }[l], d = (i.arrow ? .x ? ? 0) + o / 2, f = (i.arrow ? .y ? ? 0) + s / 2, p = ``, m = ``;
        return c === `bottom` ? (p = a ? u : `${d}px`, m = `${-s}px`) : c === `top` ? (p = a ? u : `${d}px`, m = `${r.floating.height+s}px`) : c === `right` ? (p = `${-s}px`, m = a ? u : `${f}px`) : c === `left` && (p = `${r.floating.width+s}px`, m = a ? u : `${f}px`), {
            data: {
                x: p,
                y: m
            }
        }
    }
});

function J_(e) {
    let [t, n = `center`] = e.split(`-`);
    return [t, n]
}
var Y_ = I_,
    X_ = R_,
    Z_ = H_,
    Q_ = G_,
    $_ = `Portal`,
    ev = s.forwardRef((e, t) => {
        let {
            container: n,
            ...r
        } = e, [i, a] = s.useState(!1);
        _d(() => a(!0), []);
        let o = n || i && globalThis ? .document ? .body;
        return o ? Sd.createPortal((0, K.jsx)(Y.div, { ...r,
            ref: t
        }), o) : null
    });
ev.displayName = $_;

function tv(e) {
    let t = nv(e),
        n = s.forwardRef((e, n) => {
            let {
                children: r,
                ...i
            } = e, a = s.Children.toArray(r), o = a.find(iv);
            if (o) {
                let e = o.props.children,
                    r = a.map(t => t === o ? s.Children.count(e) > 1 ? s.Children.only(null) : s.isValidElement(e) ? e.props.children : null : t);
                return (0, K.jsx)(t, { ...i,
                    ref: n,
                    children: s.isValidElement(e) ? s.cloneElement(e, void 0, r) : null
                })
            }
            return (0, K.jsx)(t, { ...i,
                ref: n,
                children: r
            })
        });
    return n.displayName = `${e}.Slot`, n
}

function nv(e) {
    let t = s.forwardRef((e, t) => {
        let {
            children: n,
            ...r
        } = e;
        if (s.isValidElement(n)) {
            let e = ov(n),
                i = av(r, n.props);
            return n.type !== s.Fragment && (i.ref = t ? ld(t, e) : e), s.cloneElement(n, i)
        }
        return s.Children.count(n) > 1 ? s.Children.only(null) : null
    });
    return t.displayName = `${e}.SlotClone`, t
}
var rv = Symbol(`radix.slottable`);

function iv(e) {
    return s.isValidElement(e) && typeof e.type == `function` && `__radixId` in e.type && e.type.__radixId === rv
}

function av(e, t) {
    let n = { ...t
    };
    for (let r in t) {
        let i = e[r],
            a = t[r];
        /^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
            let t = a(...e);
            return i(...e), t
        } : i && (n[r] = i) : r === `style` ? n[r] = { ...i,
            ...a
        } : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `))
    }
    return { ...e,
        ...n
    }
}

function ov(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, `ref`) ? .get,
        n = t && `isReactWarning` in t && t.isReactWarning;
    return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, `ref`) ? .get, n = t && `isReactWarning` in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}

function sv(e) {
    let t = s.useRef({
        value: e,
        previous: e
    });
    return s.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
}
var cv = Object.freeze({
        position: `absolute`,
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: `hidden`,
        clip: `rect(0, 0, 0, 0)`,
        whiteSpace: `nowrap`,
        wordWrap: `normal`
    }),
    lv = `VisuallyHidden`,
    uv = s.forwardRef((e, t) => (0, K.jsx)(Y.span, { ...e,
        ref: t,
        style: { ...cv,
            ...e.style
        }
    }));
uv.displayName = lv;
var dv = function(e) {
        return typeof document > `u` ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
    },
    fv = new WeakMap,
    pv = new WeakMap,
    mv = {},
    hv = 0,
    gv = function(e) {
        return e && (e.host || gv(e.parentNode))
    },
    _v = function(e, t) {
        return t.map(function(t) {
            if (e.contains(t)) return t;
            var n = gv(t);
            return n && e.contains(n) ? n : (console.error(`aria-hidden`, t, `in not contained inside`, e, `. Doing nothing`), null)
        }).filter(function(e) {
            return !!e
        })
    },
    vv = function(e, t, n, r) {
        var i = _v(t, Array.isArray(e) ? e : [e]);
        mv[n] || (mv[n] = new WeakMap);
        var a = mv[n],
            o = [],
            s = new Set,
            c = new Set(i),
            l = function(e) {
                !e || s.has(e) || (s.add(e), l(e.parentNode))
            };
        i.forEach(l);
        var u = function(e) {
            !e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
                if (s.has(e)) u(e);
                else try {
                    var t = e.getAttribute(r),
                        i = t !== null && t !== `false`,
                        c = (fv.get(e) || 0) + 1,
                        l = (a.get(e) || 0) + 1;
                    fv.set(e, c), a.set(e, l), o.push(e), c === 1 && i && pv.set(e, !0), l === 1 && e.setAttribute(n, `true`), i || e.setAttribute(r, `true`)
                } catch (t) {
                    console.error(`aria-hidden: cannot operate on `, e, t)
                }
            })
        };
        return u(t), s.clear(), hv++,
            function() {
                o.forEach(function(e) {
                    var t = fv.get(e) - 1,
                        i = a.get(e) - 1;
                    fv.set(e, t), a.set(e, i), t || (pv.has(e) || e.removeAttribute(r), pv.delete(e)), i || e.removeAttribute(n)
                }), hv--, hv || (fv = new WeakMap, fv = new WeakMap, pv = new WeakMap, mv = {})
            }
    },
    yv = function(e, t, n) {
        n === void 0 && (n = `data-aria-hidden`);
        var r = Array.from(Array.isArray(e) ? e : [e]),
            i = t || dv(e);
        return i ? (r.push.apply(r, Array.from(i.querySelectorAll(`[aria-live], script`))), vv(r, i, n, `aria-hidden`)) : function() {
            return null
        }
    },
    bv = function() {
        return bv = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        }, bv.apply(this, arguments)
    };

function xv(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == `function`)
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    return n
}

function Sv(e, t, n) {
    if (n || arguments.length === 2)
        for (var r = 0, i = t.length, a; r < i; r++)(a || !(r in t)) && (a || = Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
    return e.concat(a || Array.prototype.slice.call(t))
}
var Cv = `right-scroll-bar-position`,
    wv = `width-before-scroll-bar`,
    Tv = `with-scroll-bars-hidden`,
    Ev = `--removed-body-scroll-bar-size`;

function Dv(e, t) {
    return typeof e == `function` ? e(t) : e && (e.current = t), e
}

function Ov(e, t) {
    var n = (0, s.useState)(function() {
        return {
            value: e,
            callback: t,
            facade: {
                get current() {
                    return n.value
                },
                set current(e) {
                    var t = n.value;
                    t !== e && (n.value = e, n.callback(e, t))
                }
            }
        }
    })[0];
    return n.callback = t, n.facade
}
var kv = typeof window < `u` ? s.useLayoutEffect : s.useEffect,
    Av = new WeakMap;

function jv(e, t) {
    var n = Ov(t || null, function(t) {
        return e.forEach(function(e) {
            return Dv(e, t)
        })
    });
    return kv(function() {
        var t = Av.get(n);
        if (t) {
            var r = new Set(t),
                i = new Set(e),
                a = n.current;
            r.forEach(function(e) {
                i.has(e) || Dv(e, null)
            }), i.forEach(function(e) {
                r.has(e) || Dv(e, a)
            })
        }
        Av.set(n, e)
    }, [e]), n
}

function Mv(e) {
    return e
}

function Nv(e, t) {
    t === void 0 && (t = Mv);
    var n = [],
        r = !1;
    return {
        read: function() {
            if (r) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return n.length ? n[n.length - 1] : e
        },
        useMedium: function(e) {
            var i = t(e, r);
            return n.push(i),
                function() {
                    n = n.filter(function(e) {
                        return e !== i
                    })
                }
        },
        assignSyncMedium: function(e) {
            for (r = !0; n.length;) {
                var t = n;
                n = [], t.forEach(e)
            }
            n = {
                push: function(t) {
                    return e(t)
                },
                filter: function() {
                    return n
                }
            }
        },
        assignMedium: function(e) {
            r = !0;
            var t = [];
            if (n.length) {
                var i = n;
                n = [], i.forEach(e), t = n
            }
            var a = function() {
                    var n = t;
                    t = [], n.forEach(e)
                },
                o = function() {
                    return Promise.resolve().then(a)
                };
            o(), n = {
                push: function(e) {
                    t.push(e), o()
                },
                filter: function(e) {
                    return t = t.filter(e), n
                }
            }
        }
    }
}

function Pv(e) {
    e === void 0 && (e = {});
    var t = Nv(null);
    return t.options = bv({
        async: !0,
        ssr: !1
    }, e), t
}
var Fv = function(e) {
    var t = e.sideCar,
        n = xv(e, [`sideCar`]);
    if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
    var r = t.read();
    if (!r) throw Error(`Sidecar medium not found`);
    return s.createElement(r, bv({}, n))
};
Fv.isSideCarExport = !0;

function Iv(e, t) {
    return e.useMedium(t), Fv
}
var Lv = Pv(),
    Rv = function() {},
    zv = s.forwardRef(function(e, t) {
        var n = s.useRef(null),
            r = s.useState({
                onScrollCapture: Rv,
                onWheelCapture: Rv,
                onTouchMoveCapture: Rv
            }),
            i = r[0],
            a = r[1],
            o = e.forwardProps,
            c = e.children,
            l = e.className,
            u = e.removeScrollBar,
            d = e.enabled,
            f = e.shards,
            p = e.sideCar,
            m = e.noRelative,
            h = e.noIsolation,
            g = e.inert,
            _ = e.allowPinchZoom,
            v = e.as,
            y = v === void 0 ? `div` : v,
            b = e.gapMode,
            x = xv(e, [`forwardProps`, `children`, `className`, `removeScrollBar`, `enabled`, `shards`, `sideCar`, `noRelative`, `noIsolation`, `inert`, `allowPinchZoom`, `as`, `gapMode`]),
            S = p,
            C = jv([n, t]),
            w = bv(bv({}, x), i);
        return s.createElement(s.Fragment, null, d && s.createElement(S, {
            sideCar: Lv,
            removeScrollBar: u,
            shards: f,
            noRelative: m,
            noIsolation: h,
            inert: g,
            setCallbacks: a,
            allowPinchZoom: !!_,
            lockRef: n,
            gapMode: b
        }), o ? s.cloneElement(s.Children.only(c), bv(bv({}, w), {
            ref: C
        })) : s.createElement(y, bv({}, w, {
            className: l,
            ref: C
        }), c))
    });
zv.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
}, zv.classNames = {
    fullWidth: wv,
    zeroRight: Cv
};
var Bv, Vv = function() {
    if (Bv) return Bv;
    if (typeof __webpack_nonce__ < `u`) return __webpack_nonce__
};

function Hv() {
    if (!document) return null;
    var e = document.createElement(`style`);
    e.type = `text/css`;
    var t = Vv();
    return t && e.setAttribute(`nonce`, t), e
}

function Uv(e, t) {
    e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
}

function Wv(e) {
    (document.head || document.getElementsByTagName(`head`)[0]).appendChild(e)
}
var Gv = function() {
        var e = 0,
            t = null;
        return {
            add: function(n) {
                e == 0 && (t = Hv()) && (Uv(t, n), Wv(t)), e++
            },
            remove: function() {
                e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null)
            }
        }
    },
    Kv = function() {
        var e = Gv();
        return function(t, n) {
            s.useEffect(function() {
                return e.add(t),
                    function() {
                        e.remove()
                    }
            }, [t && n])
        }
    },
    qv = function() {
        var e = Kv();
        return function(t) {
            var n = t.styles,
                r = t.dynamic;
            return e(n, r), null
        }
    },
    Jv = {
        left: 0,
        top: 0,
        right: 0,
        gap: 0
    },
    Yv = function(e) {
        return parseInt(e || ``, 10) || 0
    },
    Xv = function(e) {
        var t = window.getComputedStyle(document.body),
            n = t[e === `padding` ? `paddingLeft` : `marginLeft`],
            r = t[e === `padding` ? `paddingTop` : `marginTop`],
            i = t[e === `padding` ? `paddingRight` : `marginRight`];
        return [Yv(n), Yv(r), Yv(i)]
    },
    Zv = function(e) {
        if (e === void 0 && (e = `margin`), typeof window > `u`) return Jv;
        var t = Xv(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
        return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0])
        }
    },
    Qv = qv(),
    $v = `data-scroll-locked`,
    ey = function(e, t, n, r) {
        var i = e.left,
            a = e.top,
            o = e.right,
            s = e.gap;
        return n === void 0 && (n = `margin`), `
  .${Tv} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${$v}] {
    overflow: hidden ${r};
    overscroll-behavior: contain;
    ${[t&&`position: relative ${r};`,n===`margin`&&`
    padding-left: ${i}px;
    padding-top: ${a}px;
    padding-right: ${o}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${s}px ${r};
    `,n===`padding`&&`padding-right: ${s}px ${r};`].filter(Boolean).join(``)}
  }
  
  .${Cv} {
    right: ${s}px ${r};
  }
  
  .${wv} {
    margin-right: ${s}px ${r};
  }
  
  .${Cv} .${Cv} {
    right: 0 ${r};
  }
  
  .${wv} .${wv} {
    margin-right: 0 ${r};
  }
  
  body[${$v}] {
    ${Ev}: ${s}px;
  }
`
    },
    ty = function() {
        var e = parseInt(document.body.getAttribute(`data-scroll-locked`) || `0`, 10);
        return isFinite(e) ? e : 0
    },
    ny = function() {
        s.useEffect(function() {
            return document.body.setAttribute($v, (ty() + 1).toString()),
                function() {
                    var e = ty() - 1;
                    e <= 0 ? document.body.removeAttribute($v) : document.body.setAttribute($v, e.toString())
                }
        }, [])
    },
    ry = function(e) {
        var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            i = r === void 0 ? `margin` : r;
        ny();
        var a = s.useMemo(function() {
            return Zv(i)
        }, [i]);
        return s.createElement(Qv, {
            styles: ey(a, !t, i, n ? `` : `!important`)
        })
    },
    iy = !1;
if (typeof window < `u`) try {
    var ay = Object.defineProperty({}, "passive", {
        get: function() {
            return iy = !0, !0
        }
    });
    window.addEventListener(`test`, ay, ay), window.removeEventListener(`test`, ay, ay)
} catch {
    iy = !1
}
var oy = iy ? {
        passive: !1
    } : !1,
    sy = function(e) {
        return e.tagName === `TEXTAREA`
    },
    cy = function(e, t) {
        if (!(e instanceof Element)) return !1;
        var n = window.getComputedStyle(e);
        return n[t] !== `hidden` && !(n.overflowY === n.overflowX && !sy(e) && n[t] === `visible`)
    },
    ly = function(e) {
        return cy(e, `overflowY`)
    },
    uy = function(e) {
        return cy(e, `overflowX`)
    },
    dy = function(e, t) {
        var n = t.ownerDocument,
            r = t;
        do {
            if (typeof ShadowRoot < `u` && r instanceof ShadowRoot && (r = r.host), my(e, r)) {
                var i = hy(e, r);
                if (i[1] > i[2]) return !0
            }
            r = r.parentNode
        } while (r && r !== n.body);
        return !1
    },
    fy = function(e) {
        return [e.scrollTop, e.scrollHeight, e.clientHeight]
    },
    py = function(e) {
        return [e.scrollLeft, e.scrollWidth, e.clientWidth]
    },
    my = function(e, t) {
        return e === `v` ? ly(t) : uy(t)
    },
    hy = function(e, t) {
        return e === `v` ? fy(t) : py(t)
    },
    gy = function(e, t) {
        return e === `h` && t === `rtl` ? -1 : 1
    },
    _y = function(e, t, n, r, i) {
        var a = gy(e, window.getComputedStyle(t).direction),
            o = a * r,
            s = n.target,
            c = t.contains(s),
            l = !1,
            u = o > 0,
            d = 0,
            f = 0;
        do {
            if (!s) break;
            var p = hy(e, s),
                m = p[0],
                h = p[1] - p[2] - a * m;
            (m || h) && my(e, s) && (d += h, f += m);
            var g = s.parentNode;
            s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g
        } while (!c && s !== document.body || c && (t.contains(s) || t === s));
        return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l
    },
    vy = function(e) {
        return `changedTouches` in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
    },
    yy = function(e) {
        return [e.deltaX, e.deltaY]
    },
    by = function(e) {
        return e && `current` in e ? e.current : e
    },
    xy = function(e, t) {
        return e[0] === t[0] && e[1] === t[1]
    },
    Sy = function(e) {
        return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`
    },
    Cy = 0,
    wy = [];

function Ty(e) {
    var t = s.useRef([]),
        n = s.useRef([0, 0]),
        r = s.useRef(),
        i = s.useState(Cy++)[0],
        a = s.useState(qv)[0],
        o = s.useRef(e);
    s.useEffect(function() {
        o.current = e
    }, [e]), s.useEffect(function() {
        if (e.inert) {
            document.body.classList.add(`block-interactivity-${i}`);
            var t = Sv([e.lockRef.current], (e.shards || []).map(by), !0).filter(Boolean);
            return t.forEach(function(e) {
                    return e.classList.add(`allow-interactivity-${i}`)
                }),
                function() {
                    document.body.classList.remove(`block-interactivity-${i}`), t.forEach(function(e) {
                        return e.classList.remove(`allow-interactivity-${i}`)
                    })
                }
        }
    }, [e.inert, e.lockRef.current, e.shards]);
    var c = s.useCallback(function(e, t) {
            if (`touches` in e && e.touches.length === 2 || e.type === `wheel` && e.ctrlKey) return !o.current.allowPinchZoom;
            var i = vy(e),
                a = n.current,
                s = `deltaX` in e ? e.deltaX : a[0] - i[0],
                c = `deltaY` in e ? e.deltaY : a[1] - i[1],
                l, u = e.target,
                d = Math.abs(s) > Math.abs(c) ? `h` : `v`;
            if (`touches` in e && d === `h` && u.type === `range`) return !1;
            var f = window.getSelection(),
                p = f && f.anchorNode;
            if (p && (p === u || p.contains(u))) return !1;
            var m = dy(d, u);
            if (!m) return !0;
            if (m ? l = d : (l = d === `v` ? `h` : `v`, m = dy(d, u)), !m) return !1;
            if (!r.current && `changedTouches` in e && (s || c) && (r.current = l), !l) return !0;
            var h = r.current || l;
            return _y(h, t, e, h === `h` ? s : c, !0)
        }, []),
        l = s.useCallback(function(e) {
            var n = e;
            if (!(!wy.length || wy[wy.length - 1] !== a)) {
                var r = `deltaY` in n ? yy(n) : vy(n),
                    i = t.current.filter(function(e) {
                        return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && xy(e.delta, r)
                    })[0];
                if (i && i.should) {
                    n.cancelable && n.preventDefault();
                    return
                }
                if (!i) {
                    var s = (o.current.shards || []).map(by).filter(Boolean).filter(function(e) {
                        return e.contains(n.target)
                    });
                    (s.length > 0 ? c(n, s[0]) : !o.current.noIsolation) && n.cancelable && n.preventDefault()
                }
            }
        }, []),
        u = s.useCallback(function(e, n, r, i) {
            var a = {
                name: e,
                delta: n,
                target: r,
                should: i,
                shadowParent: Ey(r)
            };
            t.current.push(a), setTimeout(function() {
                t.current = t.current.filter(function(e) {
                    return e !== a
                })
            }, 1)
        }, []),
        d = s.useCallback(function(e) {
            n.current = vy(e), r.current = void 0
        }, []),
        f = s.useCallback(function(t) {
            u(t.type, yy(t), t.target, c(t, e.lockRef.current))
        }, []),
        p = s.useCallback(function(t) {
            u(t.type, vy(t), t.target, c(t, e.lockRef.current))
        }, []);
    s.useEffect(function() {
        return wy.push(a), e.setCallbacks({
                onScrollCapture: f,
                onWheelCapture: f,
                onTouchMoveCapture: p
            }), document.addEventListener(`wheel`, l, oy), document.addEventListener(`touchmove`, l, oy), document.addEventListener(`touchstart`, d, oy),
            function() {
                wy = wy.filter(function(e) {
                    return e !== a
                }), document.removeEventListener(`wheel`, l, oy), document.removeEventListener(`touchmove`, l, oy), document.removeEventListener(`touchstart`, d, oy)
            }
    }, []);
    var m = e.removeScrollBar,
        h = e.inert;
    return s.createElement(s.Fragment, null, h ? s.createElement(a, {
        styles: Sy(i)
    }) : null, m ? s.createElement(ry, {
        noRelative: e.noRelative,
        gapMode: e.gapMode
    }) : null)
}

function Ey(e) {
    for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
    return t
}
var Dy = Iv(Lv, Ty),
    Oy = s.forwardRef(function(e, t) {
        return s.createElement(zv, bv({}, e, {
            ref: t,
            sideCar: Dy
        }))
    });
Oy.classNames = zv.classNames;
var ky = [` `, `Enter`, `ArrowUp`, `ArrowDown`],
    Ay = [` `, `Enter`],
    jy = `Select`,
    [My, Ny, Py] = gd(jy),
    [Fy, Iy] = od(jy, [Py, N_]),
    Ly = N_(),
    [Ry, zy] = Fy(jy),
    [By, Vy] = Fy(jy),
    Hy = e => {
        let {
            __scopeSelect: t,
            children: n,
            open: r,
            defaultOpen: i,
            onOpenChange: a,
            value: o,
            defaultValue: c,
            onValueChange: l,
            dir: u,
            name: d,
            autoComplete: f,
            disabled: p,
            required: m,
            form: h
        } = e, g = Ly(t), [_, v] = s.useState(null), [y, b] = s.useState(null), [x, S] = s.useState(!1), C = ef(u), [w, T] = yd({
            prop: r,
            defaultProp: i ? ? !1,
            onChange: a,
            caller: jy
        }), [E, D] = yd({
            prop: o,
            defaultProp: c,
            onChange: l,
            caller: jy
        }), O = s.useRef(null), k = _ ? h || !!_.closest(`form`) : !0, [A, j] = s.useState(new Set), M = Array.from(A).map(e => e.props.value).join(`;`);
        return (0, K.jsx)(Y_, { ...g,
            children: (0, K.jsxs)(Ry, {
                required: m,
                scope: t,
                trigger: _,
                onTriggerChange: v,
                valueNode: y,
                onValueNodeChange: b,
                valueNodeHasChildren: x,
                onValueNodeHasChildrenChange: S,
                contentId: Ld(),
                value: E,
                onValueChange: D,
                open: w,
                onOpenChange: T,
                dir: C,
                triggerPointerDownPosRef: O,
                disabled: p,
                children: [(0, K.jsx)(My.Provider, {
                    scope: t,
                    children: (0, K.jsx)(By, {
                        scope: e.__scopeSelect,
                        onNativeOptionAdd: s.useCallback(e => {
                            j(t => new Set(t).add(e))
                        }, []),
                        onNativeOptionRemove: s.useCallback(e => {
                            j(t => {
                                let n = new Set(t);
                                return n.delete(e), n
                            })
                        }, []),
                        children: n
                    })
                }), k ? (0, K.jsxs)(Lb, {
                    "aria-hidden": !0,
                    required: m,
                    tabIndex: -1,
                    name: d,
                    autoComplete: f,
                    value: E,
                    onChange: e => D(e.target.value),
                    disabled: p,
                    form: h,
                    children: [E === void 0 ? (0, K.jsx)(`option`, {
                        value: ``
                    }) : null, Array.from(A)]
                }, M) : null]
            })
        })
    };
Hy.displayName = jy;
var Uy = `SelectTrigger`,
    Wy = s.forwardRef((e, t) => {
        let {
            __scopeSelect: n,
            disabled: r = !1,
            ...i
        } = e, a = Ly(n), o = zy(Uy, n), c = o.disabled || r, l = q(t, o.onTriggerChange), u = Ny(n), d = s.useRef(`touch`), [f, p, m] = zb(e => {
            let t = u().filter(e => !e.disabled),
                n = Bb(t, e, t.find(e => e.value === o.value));
            n !== void 0 && o.onValueChange(n.value)
        }), h = e => {
            c || (o.onOpenChange(!0), m()), e && (o.triggerPointerDownPosRef.current = {
                x: Math.round(e.pageX),
                y: Math.round(e.pageY)
            })
        };
        return (0, K.jsx)(X_, {
            asChild: !0,
            ...a,
            children: (0, K.jsx)(Y.button, {
                type: `button`,
                role: `combobox`,
                "aria-controls": o.contentId,
                "aria-expanded": o.open,
                "aria-required": o.required,
                "aria-autocomplete": `none`,
                dir: o.dir,
                "data-state": o.open ? `open` : `closed`,
                disabled: c,
                "data-disabled": c ? `` : void 0,
                "data-placeholder": Rb(o.value) ? `` : void 0,
                ...i,
                ref: l,
                onClick: J(i.onClick, e => {
                    e.currentTarget.focus(), d.current !== `mouse` && h(e)
                }),
                onPointerDown: J(i.onPointerDown, e => {
                    d.current = e.pointerType;
                    let t = e.target;
                    t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), e.button === 0 && e.ctrlKey === !1 && e.pointerType === `mouse` && (h(e), e.preventDefault())
                }),
                onKeyDown: J(i.onKeyDown, e => {
                    let t = f.current !== ``;
                    !(e.ctrlKey || e.altKey || e.metaKey) && e.key.length === 1 && p(e.key), !(t && e.key === ` `) && ky.includes(e.key) && (h(), e.preventDefault())
                })
            })
        })
    });
Wy.displayName = Uy;
var Gy = `SelectValue`,
    Ky = s.forwardRef((e, t) => {
        let {
            __scopeSelect: n,
            className: r,
            style: i,
            children: a,
            placeholder: o = ``,
            ...s
        } = e, c = zy(Gy, n), {
            onValueNodeHasChildrenChange: l
        } = c, u = a !== void 0, d = q(t, c.onValueNodeChange);
        return _d(() => {
            l(u)
        }, [l, u]), (0, K.jsx)(Y.span, { ...s,
            ref: d,
            style: {
                pointerEvents: `none`
            },
            children: Rb(c.value) ? (0, K.jsx)(K.Fragment, {
                children: o
            }) : a
        })
    });
Ky.displayName = Gy;
var qy = `SelectIcon`,
    Jy = s.forwardRef((e, t) => {
        let {
            __scopeSelect: n,
            children: r,
            ...i
        } = e;
        return (0, K.jsx)(Y.span, {
            "aria-hidden": !0,
            ...i,
            ref: t,
            children: r || `▼`
        })
    });
Jy.displayName = qy;
var Yy = `SelectPortal`,
    Xy = e => (0, K.jsx)(ev, {
        asChild: !0,
        ...e
    });
Xy.displayName = Yy;
var Zy = `SelectContent`,
    Qy = s.forwardRef((e, t) => {
        let n = zy(Zy, e.__scopeSelect),
            [r, i] = s.useState();
        if (_d(() => {
                i(new DocumentFragment)
            }, []), !n.open) {
            let t = r;
            return t ? Sd.createPortal((0, K.jsx)(eb, {
                scope: e.__scopeSelect,
                children: (0, K.jsx)(My.Slot, {
                    scope: e.__scopeSelect,
                    children: (0, K.jsx)(`div`, {
                        children: e.children
                    })
                })
            }), t) : null
        }
        return (0, K.jsx)(ib, { ...e,
            ref: t
        })
    });
Qy.displayName = Zy;
var $y = 10,
    [eb, tb] = Fy(Zy),
    nb = `SelectContentImpl`,
    rb = tv(`SelectContent.RemoveScroll`),
    ib = s.forwardRef((e, t) => {
        let {
            __scopeSelect: n,
            position: r = `item-aligned`,
            onCloseAutoFocus: i,
            onEscapeKeyDown: a,
            onPointerDownOutside: o,
            side: c,
            sideOffset: l,
            align: u,
            alignOffset: d,
            arrowPadding: f,
            collisionBoundary: p,
            collisionPadding: m,
            sticky: h,
            hideWhenDetached: g,
            avoidCollisions: _,
            ...v
        } = e, y = zy(Zy, n), [b, x] = s.useState(null), [S, C] = s.useState(null), w = q(t, e => x(e)), [T, E] = s.useState(null), [D, O] = s.useState(null), k = Ny(n), [A, j] = s.useState(!1), M = s.useRef(!1);
        s.useEffect(() => {
            if (b) return yv(b)
        }, [b]), Zm();
        let N = s.useCallback(e => {
                let [t, ...n] = k().map(e => e.ref.current), [r] = n.slice(-1), i = document.activeElement;
                for (let n of e)
                    if (n === i || (n ? .scrollIntoView({
                            block: `nearest`
                        }), n === t && S && (S.scrollTop = 0), n === r && S && (S.scrollTop = S.scrollHeight), n ? .focus(), document.activeElement !== i)) return
            }, [k, S]),
            P = s.useCallback(() => N([T, b]), [N, T, b]);
        s.useEffect(() => {
            A && P()
        }, [A, P]);
        let {
            onOpenChange: ee,
            triggerPointerDownPosRef: F
        } = y;
        s.useEffect(() => {
            if (b) {
                let e = {
                        x: 0,
                        y: 0
                    },
                    t = t => {
                        e = {
                            x: Math.abs(Math.round(t.pageX) - (F.current ? .x ? ? 0)),
                            y: Math.abs(Math.round(t.pageY) - (F.current ? .y ? ? 0))
                        }
                    },
                    n = n => {
                        e.x <= 10 && e.y <= 10 ? n.preventDefault() : b.contains(n.target) || ee(!1), document.removeEventListener(`pointermove`, t), F.current = null
                    };
                return F.current !== null && (document.addEventListener(`pointermove`, t), document.addEventListener(`pointerup`, n, {
                    capture: !0,
                    once: !0
                })), () => {
                    document.removeEventListener(`pointermove`, t), document.removeEventListener(`pointerup`, n, {
                        capture: !0
                    })
                }
            }
        }, [b, ee, F]), s.useEffect(() => {
            let e = () => ee(!1);
            return window.addEventListener(`blur`, e), window.addEventListener(`resize`, e), () => {
                window.removeEventListener(`blur`, e), window.removeEventListener(`resize`, e)
            }
        }, [ee]);
        let [te, ne] = zb(e => {
            let t = k().filter(e => !e.disabled),
                n = Bb(t, e, t.find(e => e.ref.current === document.activeElement));
            n && setTimeout(() => n.ref.current.focus())
        }), re = s.useCallback((e, t, n) => {
            let r = !M.current && !n;
            (y.value !== void 0 && y.value === t || r) && (E(e), r && (M.current = !0))
        }, [y.value]), ie = s.useCallback(() => b ? .focus(), [b]), I = s.useCallback((e, t, n) => {
            let r = !M.current && !n;
            (y.value !== void 0 && y.value === t || r) && O(e)
        }, [y.value]), L = r === `popper` ? cb : ob, ae = L === cb ? {
            side: c,
            sideOffset: l,
            align: u,
            alignOffset: d,
            arrowPadding: f,
            collisionBoundary: p,
            collisionPadding: m,
            sticky: h,
            hideWhenDetached: g,
            avoidCollisions: _
        } : {};
        return (0, K.jsx)(eb, {
            scope: n,
            content: b,
            viewport: S,
            onViewportChange: C,
            itemRefCallback: re,
            selectedItem: T,
            onItemLeave: ie,
            itemTextRefCallback: I,
            focusSelectedItem: P,
            selectedItemText: D,
            position: r,
            isPositioned: A,
            searchRef: te,
            children: (0, K.jsx)(Oy, {
                as: rb,
                allowPinchZoom: !0,
                children: (0, K.jsx)(rh, {
                    asChild: !0,
                    trapped: y.open,
                    onMountAutoFocus: e => {
                        e.preventDefault()
                    },
                    onUnmountAutoFocus: J(i, e => {
                        y.trigger ? .focus({
                            preventScroll: !0
                        }), e.preventDefault()
                    }),
                    children: (0, K.jsx)(Um, {
                        asChild: !0,
                        disableOutsidePointerEvents: !0,
                        onEscapeKeyDown: a,
                        onPointerDownOutside: o,
                        onFocusOutside: e => e.preventDefault(),
                        onDismiss: () => y.onOpenChange(!1),
                        children: (0, K.jsx)(L, {
                            role: `listbox`,
                            id: y.contentId,
                            "data-state": y.open ? `open` : `closed`,
                            dir: y.dir,
                            onContextMenu: e => e.preventDefault(),
                            ...v,
                            ...ae,
                            onPlaced: () => j(!0),
                            ref: w,
                            style: {
                                display: `flex`,
                                flexDirection: `column`,
                                outline: `none`,
                                ...v.style
                            },
                            onKeyDown: J(v.onKeyDown, e => {
                                let t = e.ctrlKey || e.altKey || e.metaKey;
                                if (e.key === `Tab` && e.preventDefault(), !t && e.key.length === 1 && ne(e.key), [`ArrowUp`, `ArrowDown`, `Home`, `End`].includes(e.key)) {
                                    let t = k().filter(e => !e.disabled).map(e => e.ref.current);
                                    if ([`ArrowUp`, `End`].includes(e.key) && (t = t.slice().reverse()), [`ArrowUp`, `ArrowDown`].includes(e.key)) {
                                        let n = e.target,
                                            r = t.indexOf(n);
                                        t = t.slice(r + 1)
                                    }
                                    setTimeout(() => N(t)), e.preventDefault()
                                }
                            })
                        })
                    })
                })
            })
        })
    });
ib.displayName = nb;
var ab = `SelectItemAlignedPosition`,
    ob = s.forwardRef((e, t) => {
        let {
            __scopeSelect: n,
            onPlaced: r,
            ...i
        } = e, a = zy(Zy, n), o = tb(Zy, n), [c, l] = s.useState(null), [u, d] = s.useState(null), f = q(t, e => d(e)), p = Ny(n), m = s.useRef(!1), h = s.useRef(!0), {
            viewport: g,
            selectedItem: _,
            selectedItemText: v,
            focusSelectedItem: y
        } = o, b = s.useCallback(() => {
            if (a.trigger && a.valueNode && c && u && g && _ && v) {
                let e = a.trigger.getBoundingClientRect(),
                    t = u.getBoundingClientRect(),
                    n = a.valueNode.getBoundingClientRect(),
                    i = v.getBoundingClientRect();
                if (a.dir !== `rtl`) {
                    let r = i.left - t.left,
                        a = n.left - r,
                        o = e.left - a,
                        s = e.width + o,
                        l = Math.max(s, t.width),
                        u = window.innerWidth - $y,
                        d = Pm(a, [$y, Math.max($y, u - l)]);
                    c.style.minWidth = s + `px`, c.style.left = d + `px`
                } else {
                    let r = t.right - i.right,
                        a = window.innerWidth - n.right - r,
                        o = window.innerWidth - e.right - a,
                        s = e.width + o,
                        l = Math.max(s, t.width),
                        u = window.innerWidth - $y,
                        d = Pm(a, [$y, Math.max($y, u - l)]);
                    c.style.minWidth = s + `px`, c.style.right = d + `px`
                }
                let o = p(),
                    s = window.innerHeight - $y * 2,
                    l = g.scrollHeight,
                    d = window.getComputedStyle(u),
                    f = parseInt(d.borderTopWidth, 10),
                    h = parseInt(d.paddingTop, 10),
                    y = parseInt(d.borderBottomWidth, 10),
                    b = parseInt(d.paddingBottom, 10),
                    x = f + h + l + b + y,
                    S = Math.min(_.offsetHeight * 5, x),
                    C = window.getComputedStyle(g),
                    w = parseInt(C.paddingTop, 10),
                    T = parseInt(C.paddingBottom, 10),
                    E = e.top + e.height / 2 - $y,
                    D = s - E,
                    O = _.offsetHeight / 2,
                    k = _.offsetTop + O,
                    A = f + h + k,
                    j = x - A;
                if (A <= E) {
                    let e = o.length > 0 && _ === o[o.length - 1].ref.current;
                    c.style.bottom = `0px`;
                    let t = u.clientHeight - g.offsetTop - g.offsetHeight,
                        n = A + Math.max(D, O + (e ? T : 0) + t + y);
                    c.style.height = n + `px`
                } else {
                    let e = o.length > 0 && _ === o[0].ref.current;
                    c.style.top = `0px`;
                    let t = Math.max(E, f + g.offsetTop + (e ? w : 0) + O) + j;
                    c.style.height = t + `px`, g.scrollTop = A - E + g.offsetTop
                }
                c.style.margin = `${$y}px 0`, c.style.minHeight = S + `px`, c.style.maxHeight = s + `px`, r ? .(), requestAnimationFrame(() => m.current = !0)
            }
        }, [p, a.trigger, a.valueNode, c, u, g, _, v, a.dir, r]);
        _d(() => b(), [b]);
        let [x, S] = s.useState();
        return _d(() => {
            u && S(window.getComputedStyle(u).zIndex)
        }, [u]), (0, K.jsx)(lb, {
            scope: n,
            contentWrapper: c,
            shouldExpandOnScrollRef: m,
            onScrollButtonChange: s.useCallback(e => {
                e && h.current === !0 && (b(), y ? .(), h.current = !1)
            }, [b, y]),
            children: (0, K.jsx)(`div`, {
                ref: l,
                style: {
                    display: `flex`,
                    flexDirection: `column`,
                    position: `fixed`,
                    zIndex: x
                },
                children: (0, K.jsx)(Y.div, { ...i,
                    ref: f,
                    style: {
                        boxSizing: `border-box`,
                        maxHeight: `100%`,
                        ...i.style
                    }
                })
            })
        })
    });
ob.displayName = ab;
var sb = `SelectPopperPosition`,
    cb = s.forwardRef((e, t) => {
        let {
            __scopeSelect: n,
            align: r = `start`,
            collisionPadding: i = $y,
            ...a
        } = e, o = Ly(n);
        return (0, K.jsx)(Z_, { ...o,
            ...a,
            ref: t,
            align: r,
            collisionPadding: i,
            style: {
                boxSizing: `border-box`,
                ...a.style,
                "--radix-select-content-transform-origin": `var(--radix-popper-transform-origin)`,
                "--radix-select-content-available-width": `var(--radix-popper-available-width)`,
                "--radix-select-content-available-height": `var(--radix-popper-available-height)`,
                "--radix-select-trigger-width": `var(--radix-popper-anchor-width)`,
                "--radix-select-trigger-height": `var(--radix-popper-anchor-height)`
            }
        })
    });
cb.displayName = sb;
var [lb, ub] = Fy(Zy, {}), db = `SelectViewport`, fb = s.forwardRef((e, t) => {
    let {
        __scopeSelect: n,
        nonce: r,
        ...i
    } = e, a = tb(db, n), o = ub(db, n), c = q(t, a.onViewportChange), l = s.useRef(0);
    return (0, K.jsxs)(K.Fragment, {
        children: [(0, K.jsx)(`style`, {
            dangerouslySetInnerHTML: {
                __html: `[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}`
            },
            nonce: r
        }), (0, K.jsx)(My.Slot, {
            scope: n,
            children: (0, K.jsx)(Y.div, {
                "data-radix-select-viewport": ``,
                role: `presentation`,
                ...i,
                ref: c,
                style: {
                    position: `relative`,
                    flex: 1,
                    overflow: `hidden auto`,
                    ...i.style
                },
                onScroll: J(i.onScroll, e => {
                    let t = e.currentTarget,
                        {
                            contentWrapper: n,
                            shouldExpandOnScrollRef: r
                        } = o;
                    if (r ? .current && n) {
                        let e = Math.abs(l.current - t.scrollTop);
                        if (e > 0) {
                            let r = window.innerHeight - $y * 2,
                                i = parseFloat(n.style.minHeight),
                                a = parseFloat(n.style.height),
                                o = Math.max(i, a);
                            if (o < r) {
                                let i = o + e,
                                    a = Math.min(r, i),
                                    s = i - a;
                                n.style.height = a + `px`, n.style.bottom === `0px` && (t.scrollTop = s > 0 ? s : 0, n.style.justifyContent = `flex-end`)
                            }
                        }
                    }
                    l.current = t.scrollTop
                })
            })
        })]
    })
});
fb.displayName = db;
var pb = `SelectGroup`,
    [mb, hb] = Fy(pb),
    gb = s.forwardRef((e, t) => {
        let {
            __scopeSelect: n,
            ...r
        } = e, i = Ld();
        return (0, K.jsx)(mb, {
            scope: n,
            id: i,
            children: (0, K.jsx)(Y.div, {
                role: `group`,
                "aria-labelledby": i,
                ...r,
                ref: t
            })
        })
    });
gb.displayName = pb;
var _b = `SelectLabel`,
    vb = s.forwardRef((e, t) => {
        let {
            __scopeSelect: n,
            ...r
        } = e, i = hb(_b, n);
        return (0, K.jsx)(Y.div, {
            id: i.id,
            ...r,
            ref: t
        })
    });
vb.displayName = _b;
var yb = `SelectItem`,
    [bb, xb] = Fy(yb),
    Sb = s.forwardRef((e, t) => {
        let {
            __scopeSelect: n,
            value: r,
            disabled: i = !1,
            textValue: a,
            ...o
        } = e, c = zy(yb, n), l = tb(yb, n), u = c.value === r, [d, f] = s.useState(a ? ? ``), [p, m] = s.useState(!1), h = q(t, e => l.itemRefCallback ? .(e, r, i)), g = Ld(), _ = s.useRef(`touch`), v = () => {
            i || (c.onValueChange(r), c.onOpenChange(!1))
        };
        if (r === ``) throw Error(`A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.`);
        return (0, K.jsx)(bb, {
            scope: n,
            value: r,
            disabled: i,
            textId: g,
            isSelected: u,
            onItemTextChange: s.useCallback(e => {
                f(t => t || (e ? .textContent ? ? ``).trim())
            }, []),
            children: (0, K.jsx)(My.ItemSlot, {
                scope: n,
                value: r,
                disabled: i,
                textValue: d,
                children: (0, K.jsx)(Y.div, {
                    role: `option`,
                    "aria-labelledby": g,
                    "data-highlighted": p ? `` : void 0,
                    "aria-selected": u && p,
                    "data-state": u ? `checked` : `unchecked`,
                    "aria-disabled": i || void 0,
                    "data-disabled": i ? `` : void 0,
                    tabIndex: i ? void 0 : -1,
                    ...o,
                    ref: h,
                    onFocus: J(o.onFocus, () => m(!0)),
                    onBlur: J(o.onBlur, () => m(!1)),
                    onClick: J(o.onClick, () => {
                        _.current !== `mouse` && v()
                    }),
                    onPointerUp: J(o.onPointerUp, () => {
                        _.current === `mouse` && v()
                    }),
                    onPointerDown: J(o.onPointerDown, e => {
                        _.current = e.pointerType
                    }),
                    onPointerMove: J(o.onPointerMove, e => {
                        _.current = e.pointerType, i ? l.onItemLeave ? .() : _.current === `mouse` && e.currentTarget.focus({
                            preventScroll: !0
                        })
                    }),
                    onPointerLeave: J(o.onPointerLeave, e => {
                        e.currentTarget === document.activeElement && l.onItemLeave ? .()
                    }),
                    onKeyDown: J(o.onKeyDown, e => {
                        l.searchRef ? .current !== `` && e.key === ` ` || (Ay.includes(e.key) && v(), e.key === ` ` && e.preventDefault())
                    })
                })
            })
        })
    });
Sb.displayName = yb;
var Cb = `SelectItemText`,
    wb = s.forwardRef((e, t) => {
        let {
            __scopeSelect: n,
            className: r,
            style: i,
            ...a
        } = e, o = zy(Cb, n), c = tb(Cb, n), l = xb(Cb, n), u = Vy(Cb, n), [d, f] = s.useState(null), p = q(t, e => f(e), l.onItemTextChange, e => c.itemTextRefCallback ? .(e, l.value, l.disabled)), m = d ? .textContent, h = s.useMemo(() => (0, K.jsx)(`option`, {
            value: l.value,
            disabled: l.disabled,
            children: m
        }, l.value), [l.disabled, l.value, m]), {
            onNativeOptionAdd: g,
            onNativeOptionRemove: _
        } = u;
        return _d(() => (g(h), () => _(h)), [g, _, h]), (0, K.jsxs)(K.Fragment, {
            children: [(0, K.jsx)(Y.span, {
                id: l.textId,
                ...a,
                ref: p
            }), l.isSelected && o.valueNode && !o.valueNodeHasChildren ? Sd.createPortal(a.children, o.valueNode) : null]
        })
    });
wb.displayName = Cb;
var Tb = `SelectItemIndicator`,
    Eb = s.forwardRef((e, t) => {
        let {
            __scopeSelect: n,
            ...r
        } = e;
        return xb(Tb, n).isSelected ? (0, K.jsx)(Y.span, {
            "aria-hidden": !0,
            ...r,
            ref: t
        }) : null
    });
Eb.displayName = Tb;
var Db = `SelectScrollUpButton`,
    Ob = s.forwardRef((e, t) => {
        let n = tb(Db, e.__scopeSelect),
            r = ub(Db, e.__scopeSelect),
            [i, a] = s.useState(!1),
            o = q(t, r.onScrollButtonChange);
        return _d(() => {
            if (n.viewport && n.isPositioned) {
                let e = function() {
                        a(t.scrollTop > 0)
                    },
                    t = n.viewport;
                return e(), t.addEventListener(`scroll`, e), () => t.removeEventListener(`scroll`, e)
            }
        }, [n.viewport, n.isPositioned]), i ? (0, K.jsx)(jb, { ...e,
            ref: o,
            onAutoScroll: () => {
                let {
                    viewport: e,
                    selectedItem: t
                } = n;
                e && t && (e.scrollTop -= t.offsetHeight)
            }
        }) : null
    });
Ob.displayName = Db;
var kb = `SelectScrollDownButton`,
    Ab = s.forwardRef((e, t) => {
        let n = tb(kb, e.__scopeSelect),
            r = ub(kb, e.__scopeSelect),
            [i, a] = s.useState(!1),
            o = q(t, r.onScrollButtonChange);
        return _d(() => {
            if (n.viewport && n.isPositioned) {
                let e = function() {
                        let e = t.scrollHeight - t.clientHeight;
                        a(Math.ceil(t.scrollTop) < e)
                    },
                    t = n.viewport;
                return e(), t.addEventListener(`scroll`, e), () => t.removeEventListener(`scroll`, e)
            }
        }, [n.viewport, n.isPositioned]), i ? (0, K.jsx)(jb, { ...e,
            ref: o,
            onAutoScroll: () => {
                let {
                    viewport: e,
                    selectedItem: t
                } = n;
                e && t && (e.scrollTop += t.offsetHeight)
            }
        }) : null
    });
Ab.displayName = kb;
var jb = s.forwardRef((e, t) => {
        let {
            __scopeSelect: n,
            onAutoScroll: r,
            ...i
        } = e, a = tb(`SelectScrollButton`, n), o = s.useRef(null), c = Ny(n), l = s.useCallback(() => {
            o.current !== null && (window.clearInterval(o.current), o.current = null)
        }, []);
        return s.useEffect(() => () => l(), [l]), _d(() => {
            c().find(e => e.ref.current === document.activeElement) ? .ref.current ? .scrollIntoView({
                block: `nearest`
            })
        }, [c]), (0, K.jsx)(Y.div, {
            "aria-hidden": !0,
            ...i,
            ref: t,
            style: {
                flexShrink: 0,
                ...i.style
            },
            onPointerDown: J(i.onPointerDown, () => {
                o.current === null && (o.current = window.setInterval(r, 50))
            }),
            onPointerMove: J(i.onPointerMove, () => {
                a.onItemLeave ? .(), o.current === null && (o.current = window.setInterval(r, 50))
            }),
            onPointerLeave: J(i.onPointerLeave, () => {
                l()
            })
        })
    }),
    Mb = `SelectSeparator`,
    Nb = s.forwardRef((e, t) => {
        let {
            __scopeSelect: n,
            ...r
        } = e;
        return (0, K.jsx)(Y.div, {
            "aria-hidden": !0,
            ...r,
            ref: t
        })
    });
Nb.displayName = Mb;
var Pb = `SelectArrow`,
    Fb = s.forwardRef((e, t) => {
        let {
            __scopeSelect: n,
            ...r
        } = e, i = Ly(n), a = zy(Pb, n), o = tb(Pb, n);
        return a.open && o.position === `popper` ? (0, K.jsx)(Q_, { ...i,
            ...r,
            ref: t
        }) : null
    });
Fb.displayName = Pb;
var Ib = `SelectBubbleInput`,
    Lb = s.forwardRef(({
        __scopeSelect: e,
        value: t,
        ...n
    }, r) => {
        let i = s.useRef(null),
            a = q(r, i),
            o = sv(t);
        return s.useEffect(() => {
            let e = i.current;
            if (!e) return;
            let n = window.HTMLSelectElement.prototype,
                r = Object.getOwnPropertyDescriptor(n, `value`).set;
            if (o !== t && r) {
                let n = new Event(`change`, {
                    bubbles: !0
                });
                r.call(e, t), e.dispatchEvent(n)
            }
        }, [o, t]), (0, K.jsx)(Y.select, { ...n,
            style: { ...cv,
                ...n.style
            },
            ref: a,
            defaultValue: t
        })
    });
Lb.displayName = Ib;

function Rb(e) {
    return e === `` || e === void 0
}

function zb(e) {
    let t = Fm(e),
        n = s.useRef(``),
        r = s.useRef(0),
        i = s.useCallback(e => {
            let i = n.current + e;
            t(i), (function e(t) {
                n.current = t, window.clearTimeout(r.current), t !== `` && (r.current = window.setTimeout(() => e(``), 1e3))
            })(i)
        }, [t]),
        a = s.useCallback(() => {
            n.current = ``, window.clearTimeout(r.current)
        }, []);
    return s.useEffect(() => () => window.clearTimeout(r.current), []), [n, i, a]
}

function Bb(e, t, n) {
    let r = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
        i = n ? e.indexOf(n) : -1,
        a = Vb(e, Math.max(i, 0));
    r.length === 1 && (a = a.filter(e => e !== n));
    let o = a.find(e => e.textValue.toLowerCase().startsWith(r.toLowerCase()));
    return o === n ? void 0 : o
}

function Vb(e, t) {
    return e.map((n, r) => e[(t + r) % e.length])
}
var Hb = Hy,
    Ub = Wy,
    Wb = Ky,
    Gb = Jy,
    Kb = Xy,
    qb = Qy,
    Jb = fb,
    Yb = vb,
    Xb = Sb,
    Zb = wb,
    Qb = Eb,
    $b = Ob,
    ex = Ab,
    tx = Nb,
    nx = Hb,
    rx = Wb,
    ix = s.forwardRef(({
        className: e,
        children: t,
        ...n
    }, r) => (0, K.jsxs)(Ub, {
        ref: r,
        className: om(`flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1`, e),
        ...n,
        children: [t, (0, K.jsx)(Gb, {
            asChild: !0,
            children: (0, K.jsx)(Ku, {
                className: `h-4 w-4 opacity-50`
            })
        })]
    }));
ix.displayName = Ub.displayName;
var ax = s.forwardRef(({
    className: e,
    ...t
}, n) => (0, K.jsx)($b, {
    ref: n,
    className: om(`flex cursor-default items-center justify-center py-1`, e),
    ...t,
    children: (0, K.jsx)(qu, {
        className: `h-4 w-4`
    })
}));
ax.displayName = $b.displayName;
var ox = s.forwardRef(({
    className: e,
    ...t
}, n) => (0, K.jsx)(ex, {
    ref: n,
    className: om(`flex cursor-default items-center justify-center py-1`, e),
    ...t,
    children: (0, K.jsx)(Ku, {
        className: `h-4 w-4`
    })
}));
ox.displayName = ex.displayName;
var sx = s.forwardRef(({
    className: e,
    children: t,
    position: n = `popper`,
    ...r
}, i) => (0, K.jsx)(Kb, {
    children: (0, K.jsxs)(qb, {
        ref: i,
        className: om(`relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)`, n === `popper` && `data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1`, e),
        position: n,
        ...r,
        children: [(0, K.jsx)(ax, {}), (0, K.jsx)(Jb, {
            className: om(`p-1`, n === `popper` && `h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]`),
            children: t
        }), (0, K.jsx)(ox, {})]
    })
}));
sx.displayName = qb.displayName;
var cx = s.forwardRef(({
    className: e,
    ...t
}, n) => (0, K.jsx)(Yb, {
    ref: n,
    className: om(`px-2 py-1.5 text-sm font-semibold`, e),
    ...t
}));
cx.displayName = Yb.displayName;
var lx = s.forwardRef(({
    className: e,
    children: t,
    ...n
}, r) => (0, K.jsxs)(Xb, {
    ref: r,
    className: om(`relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50`, e),
    ...n,
    children: [(0, K.jsx)(`span`, {
        className: `absolute right-2 flex h-3.5 w-3.5 items-center justify-center`,
        children: (0, K.jsx)(Qb, {
            children: (0, K.jsx)(Gu, {
                className: `h-4 w-4`
            })
        })
    }), (0, K.jsx)(Zb, {
        children: t
    })]
}));
lx.displayName = Xb.displayName;
var ux = s.forwardRef(({
    className: e,
    ...t
}, n) => (0, K.jsx)(tx, {
    ref: n,
    className: om(`-mx-1 my-1 h-px bg-muted`, e),
    ...t
}));
ux.displayName = tx.displayName;

function dx(e) {
    if (!e || typeof document > `u`) return;
    let t = document.head || document.getElementsByTagName(`head`)[0],
        n = document.createElement(`style`);
    n.type = `text/css`, t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e))
}
var fx = e => {
        switch (e) {
            case `success`:
                return hx;
            case `info`:
                return _x;
            case `warning`:
                return gx;
            case `error`:
                return vx;
            default:
                return null
        }
    },
    px = Array(12).fill(0),
    mx = ({
        visible: e,
        className: t
    }) => s.createElement(`div`, {
        className: [`sonner-loading-wrapper`, t].filter(Boolean).join(` `),
        "data-visible": e
    }, s.createElement(`div`, {
        className: `sonner-spinner`
    }, px.map((e, t) => s.createElement(`div`, {
        className: `sonner-loading-bar`,
        key: `spinner-bar-${t}`
    })))),
    hx = s.createElement(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 20 20`,
        fill: `currentColor`,
        height: `20`,
        width: `20`
    }, s.createElement(`path`, {
        fillRule: `evenodd`,
        d: `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`,
        clipRule: `evenodd`
    })),
    gx = s.createElement(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        fill: `currentColor`,
        height: `20`,
        width: `20`
    }, s.createElement(`path`, {
        fillRule: `evenodd`,
        d: `M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z`,
        clipRule: `evenodd`
    })),
    _x = s.createElement(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 20 20`,
        fill: `currentColor`,
        height: `20`,
        width: `20`
    }, s.createElement(`path`, {
        fillRule: `evenodd`,
        d: `M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z`,
        clipRule: `evenodd`
    })),
    vx = s.createElement(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 20 20`,
        fill: `currentColor`,
        height: `20`,
        width: `20`
    }, s.createElement(`path`, {
        fillRule: `evenodd`,
        d: `M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z`,
        clipRule: `evenodd`
    })),
    yx = s.createElement(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        width: `12`,
        height: `12`,
        viewBox: `0 0 24 24`,
        fill: `none`,
        stroke: `currentColor`,
        strokeWidth: `1.5`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`
    }, s.createElement(`line`, {
        x1: `18`,
        y1: `6`,
        x2: `6`,
        y2: `18`
    }), s.createElement(`line`, {
        x1: `6`,
        y1: `6`,
        x2: `18`,
        y2: `18`
    })),
    bx = () => {
        let [e, t] = s.useState(document.hidden);
        return s.useEffect(() => {
            let e = () => {
                t(document.hidden)
            };
            return document.addEventListener(`visibilitychange`, e), () => window.removeEventListener(`visibilitychange`, e)
        }, []), e
    },
    xx = 1,
    Sx = new class {
        constructor() {
            this.subscribe = e => (this.subscribers.push(e), () => {
                let t = this.subscribers.indexOf(e);
                this.subscribers.splice(t, 1)
            }), this.publish = e => {
                this.subscribers.forEach(t => t(e))
            }, this.addToast = e => {
                this.publish(e), this.toasts = [...this.toasts, e]
            }, this.create = e => {
                let {
                    message: t,
                    ...n
                } = e, r = typeof e ? .id == `number` || e.id ? .length > 0 ? e.id : xx++, i = this.toasts.find(e => e.id === r), a = e.dismissible === void 0 ? !0 : e.dismissible;
                return this.dismissedToasts.has(r) && this.dismissedToasts.delete(r), i ? this.toasts = this.toasts.map(n => n.id === r ? (this.publish({ ...n,
                    ...e,
                    id: r,
                    title: t
                }), { ...n,
                    ...e,
                    id: r,
                    dismissible: a,
                    title: t
                }) : n) : this.addToast({
                    title: t,
                    ...n,
                    dismissible: a,
                    id: r
                }), r
            }, this.dismiss = e => (e ? (this.dismissedToasts.add(e), requestAnimationFrame(() => this.subscribers.forEach(t => t({
                id: e,
                dismiss: !0
            })))) : this.toasts.forEach(e => {
                this.subscribers.forEach(t => t({
                    id: e.id,
                    dismiss: !0
                }))
            }), e), this.message = (e, t) => this.create({ ...t,
                message: e
            }), this.error = (e, t) => this.create({ ...t,
                message: e,
                type: `error`
            }), this.success = (e, t) => this.create({ ...t,
                type: `success`,
                message: e
            }), this.info = (e, t) => this.create({ ...t,
                type: `info`,
                message: e
            }), this.warning = (e, t) => this.create({ ...t,
                type: `warning`,
                message: e
            }), this.loading = (e, t) => this.create({ ...t,
                type: `loading`,
                message: e
            }), this.promise = (e, t) => {
                if (!t) return;
                let n;
                t.loading !== void 0 && (n = this.create({ ...t,
                    promise: e,
                    type: `loading`,
                    message: t.loading,
                    description: typeof t.description == `function` ? void 0 : t.description
                }));
                let r = Promise.resolve(e instanceof Function ? e() : e),
                    i = n !== void 0,
                    a, o = r.then(async e => {
                        if (a = [`resolve`, e], s.isValidElement(e)) i = !1, this.create({
                            id: n,
                            type: `default`,
                            message: e
                        });
                        else if (wx(e) && !e.ok) {
                            i = !1;
                            let r = typeof t.error == `function` ? await t.error(`HTTP error! status: ${e.status}`) : t.error,
                                a = typeof t.description == `function` ? await t.description(`HTTP error! status: ${e.status}`) : t.description,
                                o = typeof r == `object` && !s.isValidElement(r) ? r : {
                                    message: r
                                };
                            this.create({
                                id: n,
                                type: `error`,
                                description: a,
                                ...o
                            })
                        } else if (e instanceof Error) {
                            i = !1;
                            let r = typeof t.error == `function` ? await t.error(e) : t.error,
                                a = typeof t.description == `function` ? await t.description(e) : t.description,
                                o = typeof r == `object` && !s.isValidElement(r) ? r : {
                                    message: r
                                };
                            this.create({
                                id: n,
                                type: `error`,
                                description: a,
                                ...o
                            })
                        } else if (t.success !== void 0) {
                            i = !1;
                            let r = typeof t.success == `function` ? await t.success(e) : t.success,
                                a = typeof t.description == `function` ? await t.description(e) : t.description,
                                o = typeof r == `object` && !s.isValidElement(r) ? r : {
                                    message: r
                                };
                            this.create({
                                id: n,
                                type: `success`,
                                description: a,
                                ...o
                            })
                        }
                    }).catch(async e => {
                        if (a = [`reject`, e], t.error !== void 0) {
                            i = !1;
                            let r = typeof t.error == `function` ? await t.error(e) : t.error,
                                a = typeof t.description == `function` ? await t.description(e) : t.description,
                                o = typeof r == `object` && !s.isValidElement(r) ? r : {
                                    message: r
                                };
                            this.create({
                                id: n,
                                type: `error`,
                                description: a,
                                ...o
                            })
                        }
                    }).finally(() => {
                        i && (this.dismiss(n), n = void 0), t.finally == null || t.finally.call(t)
                    }),
                    c = () => new Promise((e, t) => o.then(() => a[0] === `reject` ? t(a[1]) : e(a[1])).catch(t));
                return typeof n != `string` && typeof n != `number` ? {
                    unwrap: c
                } : Object.assign(n, {
                    unwrap: c
                })
            }, this.custom = (e, t) => {
                let n = t ? .id || xx++;
                return this.create({
                    jsx: e(n),
                    id: n,
                    ...t
                }), n
            }, this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = new Set
        }
    },
    Cx = (e, t) => {
        let n = t ? .id || xx++;
        return Sx.addToast({
            title: e,
            ...t,
            id: n
        }), n
    },
    wx = e => e && typeof e == `object` && `ok` in e && typeof e.ok == `boolean` && `status` in e && typeof e.status == `number`,
    Tx = Object.assign(Cx, {
        success: Sx.success,
        info: Sx.info,
        warning: Sx.warning,
        error: Sx.error,
        custom: Sx.custom,
        message: Sx.message,
        promise: Sx.promise,
        dismiss: Sx.dismiss,
        loading: Sx.loading
    }, {
        getHistory: () => Sx.toasts,
        getToasts: () => Sx.getActiveToasts()
    });
dx(`[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}`);

function Ex(e) {
    return e.label !== void 0
}
var Dx = 3,
    Ox = `24px`,
    kx = `16px`,
    Ax = 4e3,
    jx = 356,
    Mx = 14,
    Nx = 45,
    Px = 200;

function Fx(...e) {
    return e.filter(Boolean).join(` `)
}

function Ix(e) {
    let [t, n] = e.split(`-`), r = [];
    return t && r.push(t), n && r.push(n), r
}
var Lx = e => {
    let {
        invert: t,
        toast: n,
        unstyled: r,
        interacting: i,
        setHeights: a,
        visibleToasts: o,
        heights: c,
        index: l,
        toasts: u,
        expanded: d,
        removeToast: f,
        defaultRichColors: p,
        closeButton: m,
        style: h,
        cancelButtonStyle: g,
        actionButtonStyle: _,
        className: v = ``,
        descriptionClassName: y = ``,
        duration: b,
        position: x,
        gap: S,
        expandByDefault: C,
        classNames: w,
        icons: T,
        closeButtonAriaLabel: E = `Close toast`
    } = e, [D, O] = s.useState(null), [k, A] = s.useState(null), [j, M] = s.useState(!1), [N, P] = s.useState(!1), [ee, F] = s.useState(!1), [te, ne] = s.useState(!1), [re, ie] = s.useState(!1), [I, L] = s.useState(0), [ae, oe] = s.useState(0), R = s.useRef(n.duration || b || Ax), se = s.useRef(null), ce = s.useRef(null), le = l === 0, ue = l + 1 <= o, de = n.type, fe = n.dismissible !== !1, pe = n.className || ``, me = n.descriptionClassName || ``, he = s.useMemo(() => c.findIndex(e => e.toastId === n.id) || 0, [c, n.id]), z = s.useMemo(() => n.closeButton ? ? m, [n.closeButton, m]), ge = s.useMemo(() => n.duration || b || Ax, [n.duration, b]), B = s.useRef(0), _e = s.useRef(0), ve = s.useRef(0), ye = s.useRef(null), [be, xe] = x.split(`-`), Se = s.useMemo(() => c.reduce((e, t, n) => n >= he ? e : e + t.height, 0), [c, he]), Ce = bx(), we = n.invert || t, Te = de === `loading`;
    _e.current = s.useMemo(() => he * S + Se, [he, Se]), s.useEffect(() => {
        R.current = ge
    }, [ge]), s.useEffect(() => {
        M(!0)
    }, []), s.useEffect(() => {
        let e = ce.current;
        if (e) {
            let t = e.getBoundingClientRect().height;
            return oe(t), a(e => [{
                toastId: n.id,
                height: t,
                position: n.position
            }, ...e]), () => a(e => e.filter(e => e.toastId !== n.id))
        }
    }, [a, n.id]), s.useLayoutEffect(() => {
        if (!j) return;
        let e = ce.current,
            t = e.style.height;
        e.style.height = `auto`;
        let r = e.getBoundingClientRect().height;
        e.style.height = t, oe(r), a(e => e.find(e => e.toastId === n.id) ? e.map(e => e.toastId === n.id ? { ...e,
            height: r
        } : e) : [{
            toastId: n.id,
            height: r,
            position: n.position
        }, ...e])
    }, [j, n.title, n.description, a, n.id, n.jsx, n.action, n.cancel]);
    let Ee = s.useCallback(() => {
        P(!0), L(_e.current), a(e => e.filter(e => e.toastId !== n.id)), setTimeout(() => {
            f(n)
        }, Px)
    }, [n, f, a, _e]);
    s.useEffect(() => {
        if (n.promise && de === `loading` || n.duration === 1 / 0 || n.type === `loading`) return;
        let e;
        return d || i || Ce ? (() => {
            if (ve.current < B.current) {
                let e = new Date().getTime() - B.current;
                R.current -= e
            }
            ve.current = new Date().getTime()
        })() : R.current !== 1 / 0 && (B.current = new Date().getTime(), e = setTimeout(() => {
            n.onAutoClose == null || n.onAutoClose.call(n, n), Ee()
        }, R.current)), () => clearTimeout(e)
    }, [d, i, n, de, Ce, Ee]), s.useEffect(() => {
        n.delete && (Ee(), n.onDismiss == null || n.onDismiss.call(n, n))
    }, [Ee, n.delete]);

    function De() {
        return T ? .loading ? s.createElement(`div`, {
            className: Fx(w ? .loader, n ? .classNames ? .loader, `sonner-loader`),
            "data-visible": de === `loading`
        }, T.loading) : s.createElement(mx, {
            className: Fx(w ? .loader, n ? .classNames ? .loader),
            visible: de === `loading`
        })
    }
    let Oe = n.icon || T ? .[de] || fx(de);
    return s.createElement(`li`, {
        tabIndex: 0,
        ref: ce,
        className: Fx(v, pe, w ? .toast, n ? .classNames ? .toast, w ? .default, w ? .[de], n ? .classNames ? .[de]),
        "data-sonner-toast": ``,
        "data-rich-colors": n.richColors ? ? p,
        "data-styled": !(n.jsx || n.unstyled || r),
        "data-mounted": j,
        "data-promise": !!n.promise,
        "data-swiped": re,
        "data-removed": N,
        "data-visible": ue,
        "data-y-position": be,
        "data-x-position": xe,
        "data-index": l,
        "data-front": le,
        "data-swiping": ee,
        "data-dismissible": fe,
        "data-type": de,
        "data-invert": we,
        "data-swipe-out": te,
        "data-swipe-direction": k,
        "data-expanded": !!(d || C && j),
        "data-testid": n.testId,
        style: {
            "--index": l,
            "--toasts-before": l,
            "--z-index": u.length - l,
            "--offset": `${N?I:_e.current}px`,
            "--initial-height": C ? `auto` : `${ae}px`,
            ...h,
            ...n.style
        },
        onDragEnd: () => {
            F(!1), O(null), ye.current = null
        },
        onPointerDown: e => {
            e.button !== 2 && (Te || !fe || (se.current = new Date, L(_e.current), e.target.setPointerCapture(e.pointerId), e.target.tagName !== `BUTTON` && (F(!0), ye.current = {
                x: e.clientX,
                y: e.clientY
            })))
        },
        onPointerUp: () => {
            if (te || !fe) return;
            ye.current = null;
            let e = Number(ce.current ? .style.getPropertyValue(`--swipe-amount-x`).replace(`px`, ``) || 0),
                t = Number(ce.current ? .style.getPropertyValue(`--swipe-amount-y`).replace(`px`, ``) || 0),
                r = new Date().getTime() - se.current ? .getTime(),
                i = D === `x` ? e : t,
                a = Math.abs(i) / r;
            if (Math.abs(i) >= Nx || a > .11) {
                L(_e.current), n.onDismiss == null || n.onDismiss.call(n, n), A(D === `x` ? e > 0 ? `right` : `left` : t > 0 ? `down` : `up`), Ee(), ne(!0);
                return
            } else {
                var o, s;
                (o = ce.current) == null || o.style.setProperty(`--swipe-amount-x`, `0px`), (s = ce.current) == null || s.style.setProperty(`--swipe-amount-y`, `0px`)
            }
            ie(!1), F(!1), O(null)
        },
        onPointerMove: t => {
            var n, r;
            if (!ye.current || !fe || window.getSelection() ? .toString().length > 0) return;
            let i = t.clientY - ye.current.y,
                a = t.clientX - ye.current.x,
                o = e.swipeDirections ? ? Ix(x);
            !D && (Math.abs(a) > 1 || Math.abs(i) > 1) && O(Math.abs(a) > Math.abs(i) ? `x` : `y`);
            let s = {
                    x: 0,
                    y: 0
                },
                c = e => 1 / (1.5 + Math.abs(e) / 20);
            if (D === `y`) {
                if (o.includes(`top`) || o.includes(`bottom`))
                    if (o.includes(`top`) && i < 0 || o.includes(`bottom`) && i > 0) s.y = i;
                    else {
                        let e = i * c(i);
                        s.y = Math.abs(e) < Math.abs(i) ? e : i
                    }
            } else if (D === `x` && (o.includes(`left`) || o.includes(`right`)))
                if (o.includes(`left`) && a < 0 || o.includes(`right`) && a > 0) s.x = a;
                else {
                    let e = a * c(a);
                    s.x = Math.abs(e) < Math.abs(a) ? e : a
                }(Math.abs(s.x) > 0 || Math.abs(s.y) > 0) && ie(!0), (n = ce.current) == null || n.style.setProperty(`--swipe-amount-x`, `${s.x}px`), (r = ce.current) == null || r.style.setProperty(`--swipe-amount-y`, `${s.y}px`)
        }
    }, z && !n.jsx && de !== `loading` ? s.createElement(`button`, {
        "aria-label": E,
        "data-disabled": Te,
        "data-close-button": !0,
        onClick: Te || !fe ? () => {} : () => {
            Ee(), n.onDismiss == null || n.onDismiss.call(n, n)
        },
        className: Fx(w ? .closeButton, n ? .classNames ? .closeButton)
    }, T ? .close ? ? yx) : null, (de || n.icon || n.promise) && n.icon !== null && (T ? .[de] !== null || n.icon) ? s.createElement(`div`, {
        "data-icon": ``,
        className: Fx(w ? .icon, n ? .classNames ? .icon)
    }, n.promise || n.type === `loading` && !n.icon ? n.icon || De() : null, n.type === `loading` ? null : Oe) : null, s.createElement(`div`, {
        "data-content": ``,
        className: Fx(w ? .content, n ? .classNames ? .content)
    }, s.createElement(`div`, {
        "data-title": ``,
        className: Fx(w ? .title, n ? .classNames ? .title)
    }, n.jsx ? n.jsx : typeof n.title == `function` ? n.title() : n.title), n.description ? s.createElement(`div`, {
        "data-description": ``,
        className: Fx(y, me, w ? .description, n ? .classNames ? .description)
    }, typeof n.description == `function` ? n.description() : n.description) : null), s.isValidElement(n.cancel) ? n.cancel : n.cancel && Ex(n.cancel) ? s.createElement(`button`, {
        "data-button": !0,
        "data-cancel": !0,
        style: n.cancelButtonStyle || g,
        onClick: e => {
            Ex(n.cancel) && fe && (n.cancel.onClick == null || n.cancel.onClick.call(n.cancel, e), Ee())
        },
        className: Fx(w ? .cancelButton, n ? .classNames ? .cancelButton)
    }, n.cancel.label) : null, s.isValidElement(n.action) ? n.action : n.action && Ex(n.action) ? s.createElement(`button`, {
        "data-button": !0,
        "data-action": !0,
        style: n.actionButtonStyle || _,
        onClick: e => {
            Ex(n.action) && (n.action.onClick == null || n.action.onClick.call(n.action, e), !e.defaultPrevented && Ee())
        },
        className: Fx(w ? .actionButton, n ? .classNames ? .actionButton)
    }, n.action.label) : null)
};

function Rx() {
    if (typeof window > `u` || typeof document > `u`) return `ltr`;
    let e = document.documentElement.getAttribute(`dir`);
    return e === `auto` || !e ? window.getComputedStyle(document.documentElement).direction : e
}

function zx(e, t) {
    let n = {};
    return [e, t].forEach((e, t) => {
        let r = t === 1,
            i = r ? `--mobile-offset` : `--offset`,
            a = r ? kx : Ox;

        function o(e) {
            [`top`, `right`, `bottom`, `left`].forEach(t => {
                n[`${i}-${t}`] = typeof e == `number` ? `${e}px` : e
            })
        }
        typeof e == `number` || typeof e == `string` ? o(e) : typeof e == `object` ? [`top`, `right`, `bottom`, `left`].forEach(t => {
            e[t] === void 0 ? n[`${i}-${t}`] = a : n[`${i}-${t}`] = typeof e[t] == `number` ? `${e[t]}px` : e[t]
        }) : o(a)
    }), n
}
var Bx = s.forwardRef(function(e, t) {
        let {
            id: n,
            invert: r,
            position: i = `bottom-right`,
            hotkey: a = [`altKey`, `KeyT`],
            expand: o,
            closeButton: c,
            className: l,
            offset: u,
            mobileOffset: d,
            theme: f = `light`,
            richColors: p,
            duration: m,
            style: h,
            visibleToasts: g = Dx,
            toastOptions: _,
            dir: v = Rx(),
            gap: y = Mx,
            icons: b,
            containerAriaLabel: x = `Notifications`
        } = e, [S, C] = s.useState([]), w = s.useMemo(() => n ? S.filter(e => e.toasterId === n) : S.filter(e => !e.toasterId), [S, n]), T = s.useMemo(() => Array.from(new Set([i].concat(w.filter(e => e.position).map(e => e.position)))), [w, i]), [E, D] = s.useState([]), [O, k] = s.useState(!1), [A, j] = s.useState(!1), [M, N] = s.useState(f === `system` ? typeof window < `u` && window.matchMedia && window.matchMedia(`(prefers-color-scheme: dark)`).matches ? `dark` : `light` : f), P = s.useRef(null), ee = a.join(`+`).replace(/Key/g, ``).replace(/Digit/g, ``), F = s.useRef(null), te = s.useRef(!1), ne = s.useCallback(e => {
            C(t => (t.find(t => t.id === e.id) ? .delete || Sx.dismiss(e.id), t.filter(({
                id: t
            }) => t !== e.id)))
        }, []);
        return s.useEffect(() => Sx.subscribe(e => {
            if (e.dismiss) {
                requestAnimationFrame(() => {
                    C(t => t.map(t => t.id === e.id ? { ...t,
                        delete: !0
                    } : t))
                });
                return
            }
            setTimeout(() => {
                Sd.flushSync(() => {
                    C(t => {
                        let n = t.findIndex(t => t.id === e.id);
                        return n === -1 ? [e, ...t] : [...t.slice(0, n), { ...t[n],
                            ...e
                        }, ...t.slice(n + 1)]
                    })
                })
            })
        }), [S]), s.useEffect(() => {
            if (f !== `system`) {
                N(f);
                return
            }
            if (f === `system` && (window.matchMedia && window.matchMedia(`(prefers-color-scheme: dark)`).matches ? N(`dark`) : N(`light`)), typeof window > `u`) return;
            let e = window.matchMedia(`(prefers-color-scheme: dark)`);
            try {
                e.addEventListener(`change`, ({
                    matches: e
                }) => {
                    N(e ? `dark` : `light`)
                })
            } catch {
                e.addListener(({
                    matches: e
                }) => {
                    try {
                        N(e ? `dark` : `light`)
                    } catch (e) {
                        console.error(e)
                    }
                })
            }
        }, [f]), s.useEffect(() => {
            S.length <= 1 && k(!1)
        }, [S]), s.useEffect(() => {
            let e = e => {
                if (a.every(t => e[t] || e.code === t)) {
                    var t;
                    k(!0), (t = P.current) == null || t.focus()
                }
                e.code === `Escape` && (document.activeElement === P.current || P.current ? .contains(document.activeElement)) && k(!1)
            };
            return document.addEventListener(`keydown`, e), () => document.removeEventListener(`keydown`, e)
        }, [a]), s.useEffect(() => {
            if (P.current) return () => {
                F.current && (F.current.focus({
                    preventScroll: !0
                }), F.current = null, te.current = !1)
            }
        }, [P.current]), s.createElement(`section`, {
            ref: t,
            "aria-label": `${x} ${ee}`,
            tabIndex: -1,
            "aria-live": `polite`,
            "aria-relevant": `additions text`,
            "aria-atomic": `false`,
            suppressHydrationWarning: !0
        }, T.map((t, n) => {
            let [i, a] = t.split(`-`);
            return w.length ? s.createElement(`ol`, {
                key: t,
                dir: v === `auto` ? Rx() : v,
                tabIndex: -1,
                ref: P,
                className: l,
                "data-sonner-toaster": !0,
                "data-sonner-theme": M,
                "data-y-position": i,
                "data-x-position": a,
                style: {
                    "--front-toast-height": `${E[0]?.height||0}px`,
                    "--width": `${jx}px`,
                    "--gap": `${y}px`,
                    ...h,
                    ...zx(u, d)
                },
                onBlur: e => {
                    te.current && !e.currentTarget.contains(e.relatedTarget) && (te.current = !1, F.current && = (F.current.focus({
                        preventScroll: !0
                    }), null))
                },
                onFocus: e => {
                    e.target instanceof HTMLElement && e.target.dataset.dismissible === `false` || te.current || (te.current = !0, F.current = e.relatedTarget)
                },
                onMouseEnter: () => k(!0),
                onMouseMove: () => k(!0),
                onMouseLeave: () => {
                    A || k(!1)
                },
                onDragEnd: () => k(!1),
                onPointerDown: e => {
                    e.target instanceof HTMLElement && e.target.dataset.dismissible === `false` || j(!0)
                },
                onPointerUp: () => j(!1)
            }, w.filter(e => !e.position && n === 0 || e.position === t).map((n, i) => s.createElement(Lx, {
                key: n.id,
                icons: b,
                index: i,
                toast: n,
                defaultRichColors: p,
                duration: _ ? .duration ? ? m,
                className: _ ? .className,
                descriptionClassName: _ ? .descriptionClassName,
                invert: r,
                visibleToasts: g,
                closeButton: _ ? .closeButton ? ? c,
                interacting: A,
                position: t,
                style: _ ? .style,
                unstyled: _ ? .unstyled,
                classNames: _ ? .classNames,
                cancelButtonStyle: _ ? .cancelButtonStyle,
                actionButtonStyle: _ ? .actionButtonStyle,
                closeButtonAriaLabel: _ ? .closeButtonAriaLabel,
                removeToast: ne,
                toasts: w.filter(e => e.position == n.position),
                heights: E.filter(e => e.position == n.position),
                setHeights: D,
                expandByDefault: o,
                gap: y,
                expanded: O,
                swipeDirections: e.swipeDirections
            }))) : null
        }))
    }),
    Vx = ({ ...e
    }) => (0, K.jsx)(Bx, {
        className: `toaster group`,
        toastOptions: {
            classNames: {
                toast: `group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg`,
                description: `group-[.toast]:text-muted-foreground`,
                actionButton: `group-[.toast]:bg-primary group-[.toast]:text-primary-foreground`,
                cancelButton: `group-[.toast]:bg-muted group-[.toast]:text-muted-foreground`
            }
        },
        ...e
    }),
    Hx = `/assets/hero-contractor-CbwBK6jz.jpg`,
    Ux = `https://calendly.com/renovreach/15min`,
    Wx = `https://script.google.com/macros/s/AKfycbwVZXRMiJ-WDOhSavpBCaHzniDoDhIsIFxkB3JUBXFrAmg6u5_xyyWPI7xyvwW_Y0y0SA/exec`;

function Gx(e = {}) {
    if (!(typeof window > `u`)) {
        let t = Ux;
        if (window.Calendly?.initPopupWidget) {
            window.Calendly.initPopupWidget({
                url: t,
                prefill: e
            });
            return
        }
        const n = new URLSearchParams;
        if (e.name) n.set(`name`, e.name);
        if (e.email) n.set(`email`, e.email);
        if (e.organization) n.set(`organization`, e.organization);
        if (e.customAnswers) for (const o in e.customAnswers) e.customAnswers[o] && n.set(o, e.customAnswers[o]);
        const r = n.toString();
        window.open(r ? `${t}?${r}` : t, `_blank`, `noopener,noreferrer`)
    }
}

function Kx(e, t) {
    let n = new Date,
        r = {
            "Full Name": e[`Full Name`] ? ? ``,
            "Business Name": e[`Business Name`] ? ? ``,
            Phone: e.Phone ? ? ``,
            Email: e.Email ? ? ``,
            Trade: e.Trade ? ? ``,
            Date: n.toLocaleDateString(`en-US`),
            Time: n.toLocaleTimeString(`en-US`),
            Source: t === `hero` ? `Website - Hero` : `Website - Book Demo`
        };
    console.log(`[RenovReach] lead payload →`, r);
    try {
        fetch(Wx, {
            method: `POST`,
            mode: `no-cors`,
            headers: {
                "Content-Type": `text/plain;charset=utf-8`
            },
            body: JSON.stringify(r)
        }).catch(() => {})
    } catch {}
}

function qx({
    children: e,
    delay: t = 0,
    className: n = ``
}) {
    return (0, K.jsx)(Nu.div, {
        initial: {
            opacity: 0,
            y: 24
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: !0,
            margin: `-80px`
        },
        transition: {
            duration: .6,
            delay: t,
            ease: [.22, 1, .36, 1]
        },
        className: n,
        children: e
    })
}

function Jx({
    to: e,
    suffix: t = ``,
    prefix: n = ``
}) {
    let r = (0, s.useRef)(null),
        i = Mu(r, {
            once: !0,
            margin: `-40px`
        }),
        a = iu(0),
        [o, c] = (0, s.useState)(`0`);
    return (0, s.useEffect)(() => {
        if (!i) return;
        let t = ku(a, e, {
                duration: 1.6,
                ease: [.22, 1, .36, 1]
            }),
            n = a.on(`change`, e => c(Math.round(e).toLocaleString()));
        return () => {
            t.stop(), n()
        }
    }, [i, e, a]), (0, K.jsxs)(`span`, {
        ref: r,
        children: [n, o, t]
    })
}

function Yx({
    playing: e = !0
}) {
    return (0, K.jsx)(`div`, {
        className: `flex items-center justify-center gap-[3px] h-14`,
        children: [.4, .7, .5, .9, .6, .85, .45, .75, .55, .9, .5, .7, .6, .8, .5].map((t, n) => (0, K.jsx)(`span`, {
            className: `wave-bar w-[3px] rounded-full bg-primary`,
            style: {
                height: `${t*100}%`,
                animationDelay: `${n*.08}s`,
                animationPlayState: e ? `running` : `paused`
            }
        }, n))
    })
}

function Xx() {
    return (0, K.jsxs)(`span`, {
        className: `relative inline-flex h-7 w-7 items-center justify-center shrink-0`,
        children: [(0, K.jsx)(`span`, {
            className: `absolute inset-0 rounded-full bg-primary/60 pulse-ring`
        }), (0, K.jsx)(`span`, {
            className: `absolute inset-0 rounded-full bg-primary/40 pulse-ring`,
            style: {
                animationDelay: `1s`
            }
        }), (0, K.jsx)(`span`, {
            className: `relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground logo-phone-bounce`,
            children: (0, K.jsx)(Zu, {
                className: `h-3.5 w-3.5`
            })
        })]
    })
}

function Zx() {
    return (0, K.jsx)(`span`, {
        className: `flex items-end gap-[2px] h-3`,
        children: [.5, .9, .4, .75, .55].map((e, t) => (0, K.jsx)(`span`, {
            className: `mini-wave-bar w-[2px] rounded-full bg-primary`,
            style: {
                height: `${e*100}%`,
                animationDelay: `${t*90}ms`
            }
        }, t))
    })
}

function Qx() {
    let [e, t] = (0, s.useState)(!1), [n, r] = (0, s.useState)(!1);
    (0, s.useEffect)(() => {
        let e = () => t(window.scrollY > 40);
        return e(), window.addEventListener(`scroll`, e, {
            passive: !0
        }), () => window.removeEventListener(`scroll`, e)
    }, []);
    let i = [{
            href: `#how`,
            label: `Process`
        }, {
            href: `#demo`,
            label: `Listen`
        }, {
            href: `#features`,
            label: `Features`
        }, {
            href: `#pricing`,
            label: `Pricing`
        }, {
            href: `#faq`,
            label: `FAQ`
        }],
        a = {
            hidden: {
                opacity: 0,
                y: -8
            },
            show: {
                opacity: 1,
                y: 0
            }
        },
        o = e => ({
            duration: .5,
            delay: .05 + e * .08,
            ease: [.22, 1, .36, 1]
        });
    return (0, K.jsx)(`div`, {
        className: `fixed top-3 md:top-5 inset-x-0 z-50 px-3 md:px-6 pointer-events-none`,
        children: (0, K.jsxs)(`header`, {
            className: `pointer-events-auto mx-auto max-w-6xl rounded-2xl transition-all duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${e?`glass-nav py-2`:`glass-nav-idle py-3`}`,
            children: [(0, K.jsxs)(`div`, {
                className: `mx-auto max-w-7xl px-5 flex items-center justify-between`,
                children: [(0, K.jsxs)(Nu.a, {
                    href: `#top`,
                    variants: a,
                    initial: `hidden`,
                    animate: `show`,
                    transition: o(0),
                    className: `flex items-center gap-2.5 font-display font-bold text-lg tracking-tight text-[#F6F4EF]`,
                    style: {
                        fontFamily: `var(--font-display)`
                    },
                    children: [(0, K.jsx)(Xx, {}), (0, K.jsx)(`span`, {
                        children: `RenovReach`
                    })]
                }), (0, K.jsx)(Nu.nav, {
                    variants: a,
                    initial: `hidden`,
                    animate: `show`,
                    transition: o(1),
                    className: `hidden md:flex items-center gap-8 text-sm font-medium text-[#F6F4EF]/75`,
                    children: i.map(e => (0, K.jsx)(`a`, {
                        href: e.href,
                        className: `nav-link hover:text-[#F6F4EF]`,
                        children: e.label
                    }, e.href))
                }), (0, K.jsxs)(Nu.div, {
                    variants: a,
                    initial: `hidden`,
                    animate: `show`,
                    transition: o(2),
                    className: `hidden md:flex items-center gap-3`,
                    children: [(0, K.jsxs)(`a`, {
                        href: `tel:+18885551234`,
                        className: `group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm font-semibold text-[#F6F4EF] hover:border-primary/60 hover:text-primary transition-colors`,
                        children: [(0, K.jsx)(Zx, {}), `(888) 555-1234`]
                    }), (0, K.jsxs)(Em, {
                        onClick: Gx,
                        className: `cta-lift bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-5 shadow-soft group`,
                        children: [`Book a Discovery Call`, (0, K.jsx)(Hu, {
                            className: `cta-arrow ml-1.5 h-4 w-4`
                        })]
                    })]
                }), (0, K.jsx)(`button`, {
                    className: `md:hidden grid h-10 w-10 place-items-center rounded-lg border border-white/15 bg-white/5 text-[#F6F4EF]`,
                    onClick: () => r(e => !e),
                    "aria-label": `Toggle menu`,
                    children: n ? (0, K.jsx)(id, {
                        className: `h-5 w-5`
                    }) : (0, K.jsx)(Yu, {
                        className: `h-5 w-5`
                    })
                })]
            }), (0, K.jsx)(Nu.div, {
                initial: !1,
                animate: n ? {
                    opacity: 1,
                    y: 0,
                    pointerEvents: `auto`
                } : {
                    opacity: 0,
                    y: -8,
                    pointerEvents: `none`
                },
                transition: {
                    duration: .28,
                    ease: [.22, 1, .36, 1]
                },
                className: `md:hidden absolute inset-x-0 top-full border-t border-border bg-background/95 backdrop-blur-xl shadow-lift`,
                children: (0, K.jsxs)(`div`, {
                    className: `mx-auto max-w-7xl px-5 py-5 flex flex-col gap-4`,
                    children: [i.map(e => (0, K.jsx)(`a`, {
                        href: e.href,
                        onClick: () => r(!1),
                        className: `text-base font-medium text-ink`,
                        children: e.label
                    }, e.href)), (0, K.jsxs)(`a`, {
                        href: `tel:+18885551234`,
                        className: `inline-flex items-center gap-2 self-start rounded-full border border-border px-3.5 py-1.5 text-sm font-semibold text-ink`,
                        children: [(0, K.jsx)(Zx, {}), `(888) 555-1234`]
                    }), (0, K.jsxs)(Em, {
                        onClick: () => {
                            r(!1), Gx()
                        },
                        className: `cta-lift bg-primary hover:bg-primary/90 text-primary-foreground rounded-full mt-2 group`,
                        children: [`Book a Discovery Call`, (0, K.jsx)(Hu, {
                            className: `cta-arrow ml-1.5 h-4 w-4`
                        })]
                    })]
                })
            })]
        })
    })
}

function $x() {
    return (0, K.jsxs)(`section`, {
        id: `top`,
        className: `relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28`,
        children: [(0, K.jsxs)(`div`, {
            className: `pointer-events-none absolute inset-0 -z-10`,
            children: [(0, K.jsx)(`div`, {
                className: `absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-amber-soft blur-3xl opacity-70`
            }), (0, K.jsx)(`div`, {
                className: `absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-amber-soft blur-3xl opacity-50`
            })]
        }), (0, K.jsxs)(`div`, {
            className: `mx-auto max-w-7xl px-5 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center`,
            children: [(0, K.jsxs)(`div`, {
                children: [(0, K.jsx)(`h1`, {
                    className: `mt-6 text-[2.5rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold tracking-tight text-ink`,
                    style: {
                        fontFamily: `var(--font-display)`
                    },
                    children: [(0, K.jsx)(K.Fragment, {
                        children: (0, K.jsx)(`span`, {
                            className: `neg`,
                            children: `Never miss`
                        })
                    }), (0, K.jsx)(K.Fragment, {
                        children: `another job because`
                    }), (0, K.jsx)(K.Fragment, {
                        children: `you were on a job site.`
                    })].map((e, t) => (0, K.jsx)(Nu.span, {
                        initial: {
                            opacity: 0,
                            y: 24
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .7,
                            delay: .1 + t * .12,
                            ease: [.22, 1, .36, 1]
                        },
                        className: `block`,
                        children: e
                    }, t))
                }), (0, K.jsxs)(Nu.p, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .7,
                        delay: .15
                    },
                    className: `mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed`,
                    children: [`RenovReach is an AI receptionist that answers your phone 24/7, captures the job details, books the appointment, and texts you the lead — so you `, (0, K.jsx)(`span`, {
                        className: `neg`,
                        children: `never lose work to voicemail`
                    }), ` again.`]
                }), (0, K.jsxs)(Nu.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .7,
                        delay: .25
                    },
                    className: `mt-8 flex flex-col sm:flex-row gap-3`,
                    children: [(0, K.jsxs)(Em, {
                        onClick: Gx,
                        size: `lg`,
                        className: `cta-lift group bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 h-12 text-base font-semibold shadow-amber`,
                        children: [`Book a Discovery Call `, (0, K.jsx)(Hu, {
                            className: `cta-arrow ml-1 h-4 w-4`
                        })]
                    }), (0, K.jsx)(Em, {
                        asChild: !0,
                        size: `lg`,
                        variant: `outline`,
                        className: `rounded-full h-12 px-6 text-base font-semibold border-ink/15 hover:bg-ink hover:text-white transition-all`,
                        children: (0, K.jsxs)(`a`, {
                            href: `tel:+18885551234`,
                            children: [(0, K.jsx)($u, {
                                className: `mr-2 h-4 w-4`
                            }), ` Call & hear it: (888) 555-1234`]
                        })
                    })]
                }), (0, K.jsxs)(Nu.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        duration: .8,
                        delay: .4
                    },
                    className: `mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground`,
                    children: [(0, K.jsxs)(`div`, {
                        className: `flex items-center gap-1.5`,
                        children: [(0, K.jsx)(Gu, {
                            className: `h-4 w-4 text-primary`
                        }), ` Set up in 48 hours`]
                    }), (0, K.jsxs)(`div`, {
                        className: `flex items-center gap-1.5`,
                        children: [(0, K.jsx)(Gu, {
                            className: `h-4 w-4 text-primary`
                        }), ` No contracts`]
                    }), (0, K.jsxs)(`div`, {
                        className: `flex items-center gap-1.5`,
                        children: [(0, K.jsx)(Gu, {
                            className: `h-4 w-4 text-primary`
                        }), ` Cancel anytime`]
                    })]
                })]
            }), (0, K.jsxs)(Nu.div, {
                initial: {
                    opacity: 0,
                    scale: .96
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                transition: {
                    duration: .8,
                    delay: .2
                },
                className: `relative`,
                children: [(0, K.jsxs)(`div`, {
                    className: `relative rounded-3xl overflow-hidden shadow-lift bg-ink aspect-[4/5] max-w-md mx-auto`,
                    children: [(0, K.jsx)(`img`, {
                        src: Hx,
                        alt: `Professional contractor at a job site`,
                        width: 1200,
                        height: 801,
                        className: `h-full w-full object-cover object-left`
                    }), (0, K.jsx)(`div`, {
                        className: `absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent`
                    }), (0, K.jsxs)(Nu.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: .6,
                            duration: .6
                        },
                        className: `absolute left-4 right-4 bottom-4 rounded-2xl bg-white/95 backdrop-blur-md p-4 shadow-lift border border-white/40`,
                        children: [(0, K.jsxs)(`div`, {
                            className: `flex items-center gap-3`,
                            children: [(0, K.jsxs)(`div`, {
                                className: `relative grid h-11 w-11 place-items-center rounded-full bg-gradient-amber`,
                                children: [(0, K.jsx)(Qu, {
                                    className: `h-5 w-5 text-white`
                                }), (0, K.jsx)(`span`, {
                                    className: `absolute inset-0 rounded-full bg-primary pulse-ring`
                                })]
                            }), (0, K.jsxs)(`div`, {
                                className: `min-w-0 flex-1`,
                                children: [(0, K.jsx)(`div`, {
                                    className: `text-[11px] font-semibold uppercase tracking-wider text-primary`,
                                    children: `Incoming call · Live`
                                }), (0, K.jsx)(`div`, {
                                    className: `text-sm font-semibold text-ink truncate`,
                                    children: `Kitchen remodel — Sarah M.`
                                })]
                            }), (0, K.jsx)(`div`, {
                                className: `text-xs font-mono text-muted-foreground`,
                                children: `00:42`
                            })]
                        }), (0, K.jsx)(`div`, {
                            className: `mt-3 rounded-xl bg-secondary/70 px-3 py-2.5`,
                            children: (0, K.jsx)(Yx, {})
                        }), (0, K.jsxs)(`div`, {
                            className: `mt-3 flex items-center gap-2 text-xs text-ink-soft`,
                            children: [(0, K.jsx)(td, {
                                className: `h-3.5 w-3.5 text-primary`
                            }), (0, K.jsx)(`span`, {
                                className: `font-medium`,
                                children: `RenovReach is booking an estimate for Tuesday 10 AM…`
                            })]
                        })]
                    })]
                }), (0, K.jsxs)(Nu.div, {
                    initial: {
                        opacity: 0,
                        x: -20
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        delay: .9,
                        duration: .6
                    },
                    className: `hidden md:block absolute -left-6 top-10 rounded-2xl bg-white border border-border shadow-lift p-4 max-w-[200px]`,
                    children: [(0, K.jsx)(`div`, {
                        className: `text-3xl font-black text-ink`,
                        children: `+37%`
                    }), (0, K.jsx)(`div`, {
                        className: `text-xs text-muted-foreground mt-1`,
                        children: `more booked jobs in the first 30 days`
                    })]
                })]
            })]
        })]
    })
}

function eS() {
    return (0, K.jsx)(`section`, {
        className: `py-20 md:py-28 bg-ink text-white relative overflow-hidden`,
        children: (0, K.jsxs)(`div`, {
            className: `mx-auto max-w-7xl px-5`,
            children: [(0, K.jsxs)(qx, {
                className: `max-w-2xl`,
                children: [(0, K.jsx)(`div`, {
                    className: `text-primary font-semibold text-sm uppercase tracking-wider`,
                    children: `The missed-call problem`
                }), (0, K.jsxs)(`h2`, {
                    className: `mt-3 text-3xl md:text-5xl font-black tracking-tight`,
                    children: [`Every `, (0, K.jsx)(`span`, {
                        className: `neg`,
                        children: `missed call`
                    }), ` is a job your competitor just booked.`]
                }), (0, K.jsxs)(`p`, {
                    className: `mt-4 text-white/70 text-lg leading-relaxed`,
                    children: [`You're on a ladder. In a crawlspace. Driving between jobs. Meanwhile the phone rings — and the homeowner `, (0, K.jsx)(`span`, {
                        className: `neg`,
                        children: `moves on in 8 seconds`
                    }), `.`]
                })]
            }), (0, K.jsx)(`div`, {
                className: `mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4`,
                children: [{
                    value: 62,
                    suffix: `%`,
                    label: (0, K.jsxs)(K.Fragment, {
                        children: [`of calls to small contractors `, (0, K.jsx)(`span`, {
                            className: `neg`,
                            children: `go to voicemail`
                        })]
                    })
                }, {
                    value: 85,
                    suffix: `%`,
                    label: (0, K.jsxs)(K.Fragment, {
                        children: [`of callers `, (0, K.jsx)(`span`, {
                            className: `neg`,
                            children: `won't leave a message`
                        }), ` — they call the next guy`]
                    })
                }, {
                    value: 12e3,
                    prefix: `$`,
                    label: (0, K.jsxs)(K.Fragment, {
                        children: [`in `, (0, K.jsx)(`span`, {
                            className: `neg`,
                            children: `lost jobs`
                        }), ` per year for the average 2-truck shop`]
                    })
                }, {
                    value: 47,
                    suffix: `%`,
                    label: (0, K.jsxs)(K.Fragment, {
                        children: [`of homeowner calls come in `, (0, K.jsx)(`span`, {
                            className: `neg`,
                            children: `after 5pm or on weekends`
                        })]
                    })
                }].map((e, t) => (0, K.jsx)(qx, {
                    delay: t * .08,
                    children: (0, K.jsxs)(`div`, {
                        className: `rounded-2xl bg-white/5 border border-white/10 p-6 h-full hover:bg-white/[0.08] transition-colors`,
                        children: [(0, K.jsx)(`div`, {
                            className: `text-4xl md:text-5xl font-black text-primary`,
                            children: (0, K.jsx)(Jx, {
                                to: e.value,
                                prefix: e.prefix ? ? ``,
                                suffix: e.suffix ? ? ``
                            })
                        }), (0, K.jsx)(`div`, {
                            className: `mt-3 text-sm text-white/70 leading-relaxed`,
                            children: e.label
                        })]
                    })
                }, t))
            })]
        })
    })
}

function tS() {
    return (0, K.jsx)(`section`, {
        id: `how`,
        className: `py-20 md:py-28`,
        children: (0, K.jsxs)(`div`, {
            className: `mx-auto max-w-7xl px-5`,
            children: [(0, K.jsxs)(qx, {
                className: `max-w-2xl`,
                children: [(0, K.jsx)(`div`, {
                    className: `text-primary font-semibold text-sm uppercase tracking-wider`,
                    children: `How RenovReach works`
                }), (0, K.jsxs)(`h2`, {
                    className: `mt-3 text-3xl md:text-5xl font-black tracking-tight text-ink`,
                    children: [`From `, (0, K.jsx)(`span`, {
                        className: `neg`,
                        children: `missed call`
                    }), ` to booked job in under two minutes.`]
                })]
            }), (0, K.jsxs)(`div`, {
                className: `mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5 relative`,
                children: [(0, K.jsx)(`div`, {
                    className: `hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent`
                }), [{
                    icon: Qu,
                    title: `Call comes in`,
                    desc: `We forward your business line — or give you a new one. RenovReach answers in under 2 rings, every time.`,
                    tag: `0 seconds`
                }, {
                    icon: Xu,
                    title: `AI asks the right questions`,
                    desc: `Name, job type, address, timeline, budget range. Answers in a natural voice — no phone-tree hell.`,
                    tag: `60 seconds`
                }, {
                    icon: Wu,
                    title: `Books or transfers`,
                    desc: `Books straight into your calendar for estimates, or warm-transfers to your cell if it's urgent (leak, no heat).`,
                    tag: `90 seconds`
                }, {
                    icon: Uu,
                    title: `You get the lead`,
                    desc: `Text and email hit your phone with the full call summary and recording. Nothing falls through the cracks.`,
                    tag: `Instant`
                }].map((e, t) => {
                    let n = e.icon;
                    return (0, K.jsx)(qx, {
                        delay: t * .1,
                        children: (0, K.jsxs)(`div`, {
                            className: `relative rounded-2xl bg-card border border-border p-6 shadow-soft h-full hover:-translate-y-1 hover:shadow-lift transition-all duration-300`,
                            children: [(0, K.jsxs)(`div`, {
                                className: `flex items-center justify-between`,
                                children: [(0, K.jsx)(`div`, {
                                    className: `grid h-12 w-12 place-items-center rounded-xl bg-amber-soft text-primary`,
                                    children: (0, K.jsx)(n, {
                                        className: `h-6 w-6`,
                                        strokeWidth: 2.2
                                    })
                                }), (0, K.jsx)(`span`, {
                                    className: `text-xs font-mono text-muted-foreground`,
                                    children: e.tag
                                })]
                            }), (0, K.jsxs)(`div`, {
                                className: `mt-5 text-xs font-semibold text-primary`,
                                children: [`STEP `, t + 1]
                            }), (0, K.jsx)(`h3`, {
                                className: `mt-1 text-xl font-bold text-ink`,
                                children: e.title
                            }), (0, K.jsx)(`p`, {
                                className: `mt-2 text-sm text-muted-foreground leading-relaxed`,
                                children: e.desc
                            })]
                        })
                    }, t)
                })]
            })]
        })
    })
}

function nS() {
    let [e, t] = (0, s.useState)(!1), [n, r] = (0, s.useState)(0);
    return (0, s.useEffect)(() => {
        if (!e) return;
        let n = setInterval(() => r(e => e >= 100 ? (t(!1), 0) : e + 1), 320);
        return () => clearInterval(n)
    }, [e]), (0, K.jsx)(`section`, {
        id: `demo`,
        className: `py-20 md:py-28 bg-gradient-warm`,
        children: (0, K.jsx)(`div`, {
            className: `mx-auto max-w-7xl px-5`,
            children: (0, K.jsxs)(`div`, {
                className: `grid lg:grid-cols-2 gap-12 items-center`,
                children: [(0, K.jsxs)(qx, {
                    children: [(0, K.jsx)(`div`, {
                        className: `text-primary font-semibold text-sm uppercase tracking-wider`,
                        children: `Hear it in action`
                    }), (0, K.jsx)(`h2`, {
                        className: `mt-3 text-3xl md:text-5xl font-black tracking-tight text-ink`,
                        children: `Don't take our word for it. Listen.`
                    }), (0, K.jsx)(`p`, {
                        className: `mt-4 text-lg text-ink-soft leading-relaxed`,
                        children: `This is a real RenovReach agent handling a real call for a real kitchen remodeler. Play it — or call the number and try to trip it up yourself.`
                    }), (0, K.jsxs)(`div`, {
                        className: `mt-8 flex flex-col sm:flex-row gap-3`,
                        children: [(0, K.jsx)(Em, {
                            asChild: !0,
                            size: `lg`,
                            className: `bg-ink hover:bg-ink/90 text-white rounded-full h-12 px-6`,
                            children: (0, K.jsxs)(`a`, {
                                href: `tel:+18885551234`,
                                children: [(0, K.jsx)($u, {
                                    className: `mr-2 h-4 w-4`
                                }), ` Call the live demo`]
                            })
                        }), (0, K.jsxs)(`div`, {
                            className: `text-sm text-ink-soft self-center`,
                            children: [(0, K.jsx)(`a`, {
                                href: `tel:+18885551234`,
                                className: `font-semibold text-ink hover:text-primary`,
                                children: `(888) 555-1234`
                            }), ` · 24/7`]
                        })]
                    })]
                }), (0, K.jsx)(qx, {
                    delay: .15,
                    children: (0, K.jsxs)(`div`, {
                        className: `rounded-3xl bg-white border border-border shadow-lift p-6 md:p-8`,
                        children: [(0, K.jsxs)(`div`, {
                            className: `flex items-center justify-between`,
                            children: [(0, K.jsxs)(`div`, {
                                className: `flex items-center gap-3`,
                                children: [(0, K.jsx)(`div`, {
                                    className: `grid h-11 w-11 place-items-center rounded-full bg-gradient-amber shadow-amber`,
                                    children: (0, K.jsx)(Zu, {
                                        className: `h-5 w-5 text-white`
                                    })
                                }), (0, K.jsxs)(`div`, {
                                    children: [(0, K.jsx)(`div`, {
                                        className: `text-sm font-bold text-ink`,
                                        children: `Sample call · Kitchen remodel`
                                    }), (0, K.jsx)(`div`, {
                                        className: `text-xs text-muted-foreground`,
                                        children: `Sarah M. → Peak Home Remodeling`
                                    })]
                                })]
                            }), (0, K.jsx)(`span`, {
                                className: `text-[11px] font-semibold text-primary bg-amber-soft rounded-full px-2.5 py-1`,
                                children: `LIVE`
                            })]
                        }), (0, K.jsxs)(`div`, {
                            className: `mt-6 rounded-2xl bg-secondary/70 p-5`,
                            children: [(0, K.jsx)(Yx, {
                                playing: e
                            }), (0, K.jsx)(`div`, {
                                className: `mt-3 h-1 rounded-full bg-border overflow-hidden`,
                                children: (0, K.jsx)(`div`, {
                                    className: `h-full bg-primary transition-all duration-300`,
                                    style: {
                                        width: `${n}%`
                                    }
                                })
                            }), (0, K.jsxs)(`div`, {
                                className: `mt-3 flex items-center justify-between`,
                                children: [(0, K.jsx)(`button`, {
                                    onClick: () => t(e => !e),
                                    className: `grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-amber hover:scale-105 transition-transform`,
                                    "aria-label": e ? `Pause` : `Play`,
                                    children: e ? (0, K.jsxs)(`div`, {
                                        className: `flex gap-1`,
                                        children: [(0, K.jsx)(`span`, {
                                            className: `w-1 h-4 bg-current`
                                        }), (0, K.jsx)(`span`, {
                                            className: `w-1 h-4 bg-current`
                                        })]
                                    }) : (0, K.jsx)(`div`, {
                                        className: `w-0 h-0 border-y-[7px] border-y-transparent border-l-[11px] border-l-current ml-1`
                                    })
                                }), (0, K.jsxs)(`div`, {
                                    className: `text-xs font-mono text-muted-foreground`,
                                    children: [e ? `0:` + String(Math.floor(n * .42)).padStart(2, `0`) : `0:00`, ` / 0:42`]
                                })]
                            })]
                        }), (0, K.jsx)(`div`, {
                            className: `mt-6 space-y-3 max-h-64 overflow-hidden`,
                            children: [{
                                who: `ai`,
                                text: `Thanks for calling Peak Home Remodeling, this is Riley — how can I help?`
                            }, {
                                who: `caller`,
                                text: `Hi, I'm looking to get a quote on a kitchen remodel.`
                            }, {
                                who: `ai`,
                                text: `Absolutely, I can get that scheduled. Can I grab your name and the best number to reach you?`
                            }, {
                                who: `caller`,
                                text: `Sarah Mitchell, 512-555-0134.`
                            }, {
                                who: `ai`,
                                text: `Perfect, Sarah. A rough size — full gut, or cabinets and counters?`
                            }].map((e, t) => (0, K.jsxs)(`div`, {
                                className: `flex gap-2.5 text-sm ${e.who===`ai`?``:`flex-row-reverse`}`,
                                children: [(0, K.jsx)(`div`, {
                                    className: `shrink-0 grid h-7 w-7 place-items-center rounded-full text-[10px] font-bold ${e.who===`ai`?`bg-amber-soft text-primary`:`bg-secondary text-ink`}`,
                                    children: e.who === `ai` ? `AI` : `SM`
                                }), (0, K.jsx)(`div`, {
                                    className: `rounded-2xl px-3.5 py-2 leading-snug max-w-[80%] ${e.who===`ai`?`bg-secondary text-ink`:`bg-ink text-white`}`,
                                    children: e.text
                                })]
                            }, t))
                        })]
                    })
                })]
            })
        })
    })
}

function rS() {
    return (0, K.jsx)(`section`, {
        id: `features`,
        className: `py-20 md:py-28`,
        children: (0, K.jsxs)(`div`, {
            className: `mx-auto max-w-7xl px-5`,
            children: [(0, K.jsxs)(qx, {
                className: `max-w-2xl`,
                children: [(0, K.jsx)(`div`, {
                    className: `text-primary font-semibold text-sm uppercase tracking-wider`,
                    children: `What's included`
                }), (0, K.jsx)(`h2`, {
                    className: `mt-3 text-3xl md:text-5xl font-black tracking-tight text-ink`,
                    children: `Everything a great receptionist does. Without the salary.`
                })]
            }), (0, K.jsx)(`div`, {
                className: `mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5`,
                children: [{
                    icon: Ju,
                    title: `Answers 24/7`,
                    desc: `Weekends, nights, holidays, lunch breaks — every call gets picked up on the first two rings.`
                }, {
                    icon: ad,
                    title: `Instant lead capture`,
                    desc: `Name, number, address, job type and urgency — every time. No more hand-scribbled notes.`
                }, {
                    icon: Zu,
                    title: `Smart warm transfers`,
                    desc: `Emergency? RenovReach patches the call straight to your cell. Estimate? It books itself.`
                }, {
                    icon: Wu,
                    title: `Books into your calendar`,
                    desc: `Google, Outlook, or your CRM. RenovReach checks availability and confirms the slot in the same call.`
                }, {
                    icon: ed,
                    title: `Sounds human. Really.`,
                    desc: `Trained on 10,000+ contractor calls. Callers don't realize they're talking to AI — until you tell them.`
                }, {
                    icon: rd,
                    title: `Built for the trades`,
                    desc: `Knows the difference between a p-trap and a p-tile. Set up specifically for remodel, HVAC, plumbing, roofing.`
                }].map((e, t) => {
                    let n = e.icon;
                    return (0, K.jsx)(qx, {
                        delay: t * .06,
                        children: (0, K.jsxs)(`div`, {
                            className: `group h-full rounded-2xl bg-card border border-border p-6 hover:border-primary/40 hover:shadow-lift hover:-translate-y-0.5 transition-all duration-300`,
                            children: [(0, K.jsx)(`div`, {
                                className: `grid h-11 w-11 place-items-center rounded-xl bg-amber-soft text-primary group-hover:bg-gradient-amber group-hover:text-white transition-colors`,
                                children: (0, K.jsx)(n, {
                                    className: `h-5 w-5`,
                                    strokeWidth: 2.2
                                })
                            }), (0, K.jsx)(`h3`, {
                                className: `mt-5 text-lg font-bold text-ink`,
                                children: e.title
                            }), (0, K.jsx)(`p`, {
                                className: `mt-2 text-sm text-muted-foreground leading-relaxed`,
                                children: e.desc
                            })]
                        })
                    }, t)
                })
            })]
        })
    })
}

function iS() {
    return (0, K.jsx)(`section`, {
        className: `py-20 md:py-28 bg-secondary/40`,
        children: (0, K.jsxs)(`div`, {
            className: `mx-auto max-w-7xl px-5`,
            children: [(0, K.jsxs)(qx, {
                className: `max-w-2xl`,
                children: [(0, K.jsx)(`div`, {
                    className: `text-primary font-semibold text-sm uppercase tracking-wider`,
                    children: `Contractors love it`
                }), (0, K.jsx)(`h2`, {
                    className: `mt-3 text-3xl md:text-5xl font-black tracking-tight text-ink`,
                    children: `5+ Business trust RenovReach with their phone.`
                })]
            }), (0, K.jsx)(`div`, {
                className: `mt-14 grid md:grid-cols-2 gap-5`,
                children: [{
                    name: `Mike Alvarez`,
                    role: `Owner, Alvarez Kitchen & Bath`,
                    location: `Austin, TX`,
                    quote: `I was losing 3-4 estimates a week to voicemail. Signed up Monday, live by Wednesday. Booked 3 extra jobs the first month.`,
                    rating: 5
                }, {
                    name: `Dana Whitfield`,
                    role: `Owner, Whitfield HVAC`,
                    location: `Charlotte, NC`,
                    quote: `My wife used to answer the phone at dinner. Now RenovReach does it. Callers can't tell the difference and I get every lead texted to me.`,
                    rating: 5
                }, {
                    name: `Ray Corvelli`,
                    role: `GC, Corvelli Remodeling`,
                    location: `Denver, CO`,
                    quote: `Best money I spend all month. Paid for itself the first weekend three after-hours calls, two became jobs.`,
                    rating: 5
                }, {
                    name: `Tasha Brooks`,
                    role: `Owner, Brooks Plumbing Co.`,
                    location: `Nashville, TN`,
                    quote: `Setup took two days. It transfers real emergencies to my cell and books everything else. Zero missed calls in 2 months.`,
                    rating: 5
                }].map((e, t) => (0, K.jsx)(qx, {
                    delay: t * .08,
                    children: (0, K.jsxs)(`div`, {
                        className: `h-full rounded-2xl bg-card border border-border p-7 shadow-soft`,
                        children: [(0, K.jsx)(`div`, {
                            className: `flex gap-0.5 text-primary`,
                            children: Array.from({
                                length: e.rating
                            }).map((e, t) => (0, K.jsx)(nd, {
                                className: `h-4 w-4 fill-current`
                            }, t))
                        }), (0, K.jsxs)(`p`, {
                            className: `mt-4 text-lg text-ink leading-relaxed`,
                            children: [`"`, e.quote, `"`]
                        }), (0, K.jsxs)(`div`, {
                            className: `mt-6 flex items-center gap-3 pt-5 border-t border-border`,
                            children: [(0, K.jsx)(`div`, {
                                className: `grid h-11 w-11 place-items-center rounded-full bg-gradient-amber text-white font-bold text-sm`,
                                children: e.name.split(` `).map(e => e[0]).join(``)
                            }), (0, K.jsxs)(`div`, {
                                className: `min-w-0`,
                                children: [(0, K.jsx)(`div`, {
                                    className: `text-sm font-bold text-ink truncate`,
                                    children: e.name
                                }), (0, K.jsxs)(`div`, {
                                    className: `text-xs text-muted-foreground truncate`,
                                    children: [e.role, ` · `, e.location]
                                })]
                            })]
                        })]
                    })
                }, t))
            })]
        })
    })
}

function aS() {
    return (0, K.jsx)(`section`, {
        id: `pricing`,
        className: `py-20 md:py-28`,
        children: (0, K.jsxs)(`div`, {
            className: `mx-auto max-w-7xl px-5`,
            children: [(0, K.jsxs)(qx, {
                className: `max-w-2xl mx-auto text-center`,
                children: [(0, K.jsx)(`div`, {
                    className: `text-primary font-semibold text-sm uppercase tracking-wider`,
                    children: `Simple pricing`
                }), (0, K.jsx)(`h2`, {
                    className: `mt-3 text-3xl md:text-5xl font-black tracking-tight text-ink`,
                    children: `One flat rate. Pays for itself with one extra job.`
                }), (0, K.jsx)(`p`, {
                    className: `mt-4 text-lg text-muted-foreground`,
                    children: `Most contractors book 5-15 additional jobs per month with RenovReach. You do the math.`
                })]
            }), (0, K.jsx)(qx, {
                delay: .1,
                className: `mt-14 max-w-lg mx-auto`,
                children: (0, K.jsxs)(`div`, {
                    className: `relative rounded-3xl bg-ink text-white p-8 md:p-10 shadow-lift overflow-hidden`,
                    children: [(0, K.jsx)(`div`, {
                        className: `absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-amber opacity-30 blur-3xl`
                    }), (0, K.jsxs)(`div`, {
                        className: `relative`,
                        children: [(0, K.jsxs)(`div`, {
                            className: `flex items-center justify-between`,
                            children: [(0, K.jsx)(`div`, {
                                className: `text-sm font-semibold text-primary`,
                                children: `RenovReach Build`
                            }), (0, K.jsx)(`div`, {
                                className: `rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-semibold px-3 py-1`,
                                children: `Own it outright`
                            })]
                        }), (0, K.jsx)(`div`, {
                            className: `mt-6 flex items-baseline gap-2`,
                            children: (0, K.jsx)(`span`, {
                                className: `text-5xl md:text-6xl font-black tracking-tight`,
                                children: `$2,447`
                            })
                        }), (0, K.jsx)(`div`, {
                            className: `mt-2 text-lg font-semibold text-white/90`,
                            children: `one-time setup`
                        }), (0, K.jsx)(`div`, {
                            className: `mt-1 text-sm text-white/60`,
                            children: `You own the system. Pay only for what you actually use.`
                        }), (0, K.jsx)(`ul`, {
                            className: `mt-8 space-y-3`,
                            children: [`Full AI agent build & training on your business`, `Your own Retell AI account — billed directly by Retell for usage, no markup from us`, `Booking into your Google or Outlook calendar`, `SMS confirmations, rescheduling & cancellations handled automatically`, `Warm transfers to your cell for emergencies`, `Call recordings & transcripts — used to continuously fine-tune your AI for better results`, `Lead texts sent straight to your phone`, `30 days of hands-on support included`, `No recurring commitment — it's yours after setup`].map((e, t) => (0, K.jsxs)(`li`, {
                                className: `flex items-start gap-3 text-sm text-white/90`,
                                children: [(0, K.jsx)(`div`, {
                                    className: `mt-0.5 shrink-0 grid h-5 w-5 place-items-center rounded-full bg-primary/20 text-primary`,
                                    children: (0, K.jsx)(Gu, {
                                        className: `h-3 w-3`,
                                        strokeWidth: 3
                                    })
                                }), e]
                            }, t))
                        }), (0, K.jsxs)(Em, {
                            onClick: Gx,
                            size: `lg`,
                            className: `mt-8 w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-12 text-base font-semibold shadow-amber`,
                            children: [`Book a Discovery Call `, (0, K.jsx)(Hu, {
                                className: `ml-1 h-4 w-4`
                            })]
                        }), (0, K.jsxs)(`div`, {
                            className: `mt-4 text-center text-xs text-white/60`,
                            children: [`Want us to keep managing and improving it for you? `, (0, K.jsx)(`button`, {
                                type: `button`,
                                onClick: Gx,
                                className: `text-primary hover:underline`,
                                children: `Ask about our optional $299/month support plan`
                            }), ` after your first 30 days.`]
                        })]
                    })]
                })
            })]
        })
    })
}

var sS = {
    remodel: `Kitchen / Bath Remodel`,
    gc: `General Contractor`,
    hvac: `HVAC`,
    plumbing: `Plumbing`,
    roofing: `Roofing`,
    electrical: `Electrical`,
    other: `Other`
};

function cS() {
    let [e, t] = (0, s.useState)(!1), [n, r] = (0, s.useState)(!1), [i, a] = (0, s.useState)(``);
    return (0, K.jsx)(`section`, {
        id: `cta`,
        className: `py-20 md:py-28`,
        children: (0, K.jsx)(`div`, {
            className: `mx-auto max-w-6xl px-5`,
            children: (0, K.jsxs)(`div`, {
                className: `relative overflow-hidden rounded-3xl bg-ink text-white p-8 md:p-14 shadow-lift`,
                children: [(0, K.jsx)(`div`, {
                    className: `absolute -top-32 -right-20 h-72 w-72 rounded-full bg-gradient-amber opacity-40 blur-3xl`
                }), (0, K.jsx)(`div`, {
                    className: `absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-primary/30 opacity-30 blur-3xl`
                }), (0, K.jsxs)(`div`, {
                    className: `relative grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center`,
                    children: [(0, K.jsxs)(qx, {
                        children: [(0, K.jsx)(`div`, {
                            className: `text-primary font-semibold text-sm uppercase tracking-wider`,
                            children: `See it live`
                        }), (0, K.jsxs)(`h2`, {
                            className: `mt-3 text-3xl md:text-5xl font-black tracking-tight`,
                            children: [(0, K.jsx)(`span`, {
                                className: `neg`,
                                children: `Stop losing jobs to voicemail`
                            }), `. Start booking them instead.`]
                        }), (0, K.jsx)(`p`, {
                            className: `mt-4 text-white/70 text-lg leading-relaxed`,
                            children: `Book a 15-minute demo. We'll show you RenovReach handling calls for a business just like yours — and quote you a live setup timeline.`
                        }), (0, K.jsxs)(`div`, {
                            className: `mt-6 flex items-center gap-3 text-sm text-white/70`,
                            children: [(0, K.jsx)(Gu, {
                                className: `h-4 w-4 text-primary`
                            }), ` No sales pressure — a real human, 15 minutes.`]
                        })]
                    }), (0, K.jsx)(qx, {
                        delay: .15,
                        children: (0, K.jsx)(`form`, {
                            onSubmit: e => {
                                e.preventDefault();
                                let n = e.currentTarget,
                                    a = new FormData(n),
                                    o = {
                                        "Full Name": String(a.get(`name`) ? ? ``).trim(),
                                        "Business Name": String(a.get(`business`) ? ? ``).trim(),
                                        Phone: String(a.get(`phone`) ? ? ``).trim(),
                                        Email: String(a.get(`email`) ? ? ``).trim(),
                                        Trade: sS[i] ? ? i
                                    };
                                t(!0), Kx(o, `book_demo`), t(!1), r(!0), Tx.success(`Thanks! Opening the calendar so you can pick a time.`), Gx({
                                    name: o[`Full Name`],
                                    email: o.Email,
                                    organization: o[`Business Name`],
                                    customAnswers: {
                                        a1: o.Trade
                                    }
                                })
                            },
                            className: `rounded-2xl bg-white p-6 md:p-7 text-ink shadow-lift`,
                            children: n ? (0, K.jsxs)(`div`, {
                                className: `text-center py-6`,
                                children: [(0, K.jsx)(`div`, {
                                    className: `mx-auto grid h-14 w-14 place-items-center rounded-full bg-amber-soft text-primary`,
                                    children: (0, K.jsx)(Gu, {
                                        className: `h-7 w-7`,
                                        strokeWidth: 3
                                    })
                                }), (0, K.jsx)(`h3`, {
                                    className: `mt-4 text-xl font-bold`,
                                    children: `You're on the list.`
                                }), (0, K.jsx)(`p`, {
                                    className: `mt-2 text-sm text-muted-foreground`,
                                    children: `We'll call you within 1 business hour to schedule your demo.`
                                })]
                            }) : (0, K.jsxs)(K.Fragment, {
                                children: [(0, K.jsx)(`h3`, {
                                    className: `text-xl font-bold`,
                                    children: `Book your demo`
                                }), (0, K.jsx)(`p`, {
                                    className: `mt-1 text-sm text-muted-foreground`,
                                    children: `Takes 30 seconds.`
                                }), (0, K.jsxs)(`div`, {
                                    className: `mt-5 space-y-3`,
                                    children: [(0, K.jsxs)(`div`, {
                                        children: [(0, K.jsx)(Nm, {
                                            htmlFor: `name`,
                                            className: `text-xs font-semibold`,
                                            children: `Your name`
                                        }), (0, K.jsx)(Dm, {
                                            id: `name`,
                                            name: `name`,
                                            required: !0,
                                            maxLength: 80,
                                            placeholder: `Mike Alvarez`,
                                            className: `mt-1.5 h-11 rounded-lg`
                                        })]
                                    }), (0, K.jsxs)(`div`, {
                                        children: [(0, K.jsx)(Nm, {
                                            htmlFor: `business`,
                                            className: `text-xs font-semibold`,
                                            children: `Business name`
                                        }), (0, K.jsx)(Dm, {
                                            id: `business`,
                                            name: `business`,
                                            required: !0,
                                            maxLength: 120,
                                            placeholder: `Alvarez Kitchen & Bath`,
                                            className: `mt-1.5 h-11 rounded-lg`
                                        })]
                                    }), (0, K.jsxs)(`div`, {
                                        children: [(0, K.jsx)(Nm, {
                                            htmlFor: `phone`,
                                            className: `text-xs font-semibold`,
                                            children: `Phone`
                                        }), (0, K.jsx)(Dm, {
                                            id: `phone`,
                                            name: `phone`,
                                            required: !0,
                                            type: `tel`,
                                            maxLength: 20,
                                            placeholder: `(555) 123-4567`,
                                            className: `mt-1.5 h-11 rounded-lg`
                                        })]
                                    }), (0, K.jsxs)(`div`, {
                                        children: [(0, K.jsx)(Nm, {
                                            htmlFor: `email`,
                                            className: `text-xs font-semibold`,
                                            children: `Email`
                                        }), (0, K.jsx)(Dm, {
                                            id: `email`,
                                            name: `email`,
                                            required: !0,
                                            type: `email`,
                                            maxLength: 254,
                                            pattern: `[^@\\s]+@[^@\\s]+\\.[a-zA-Z]{2,}`,
                                            title: `Enter a valid email address, e.g. mike@alvarezkb.com`,
                                            placeholder: `mike@alvarezkb.com`,
                                            className: `mt-1.5 h-11 rounded-lg`
                                        })]
                                    }), (0, K.jsxs)(`div`, {
                                        children: [(0, K.jsx)(Nm, {
                                            htmlFor: `trade`,
                                            className: `text-xs font-semibold`,
                                            children: `Trade`
                                        }), (0, K.jsxs)(nx, {
                                            value: i,
                                            onValueChange: a,
                                            children: [(0, K.jsx)(ix, {
                                                id: `trade`,
                                                className: `mt-1.5 h-11 rounded-lg`,
                                                children: (0, K.jsx)(rx, {
                                                    placeholder: `Select your trade`
                                                })
                                            }), (0, K.jsxs)(sx, {
                                                children: [(0, K.jsx)(lx, {
                                                    value: `remodel`,
                                                    children: `Kitchen / Bath Remodel`
                                                }), (0, K.jsx)(lx, {
                                                    value: `gc`,
                                                    children: `General Contractor`
                                                }), (0, K.jsx)(lx, {
                                                    value: `hvac`,
                                                    children: `HVAC`
                                                }), (0, K.jsx)(lx, {
                                                    value: `plumbing`,
                                                    children: `Plumbing`
                                                }), (0, K.jsx)(lx, {
                                                    value: `roofing`,
                                                    children: `Roofing`
                                                }), (0, K.jsx)(lx, {
                                                    value: `electrical`,
                                                    children: `Electrical`
                                                }), (0, K.jsx)(lx, {
                                                    value: `other`,
                                                    children: `Other`
                                                })]
                                            })]
                                        })]
                                    })]
                                }), (0, K.jsx)(Em, {
                                    type: `submit`,
                                    disabled: e,
                                    className: `mt-5 w-full h-12 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-amber`,
                                    children: e ? `Sending…` : (0, K.jsxs)(K.Fragment, {
                                        children: [`Book my demo `, (0, K.jsx)(Hu, {
                                            className: `ml-1 h-4 w-4`
                                        })]
                                    })
                                }), (0, K.jsxs)(`div`, {
                                    className: `mt-3 text-center text-xs text-muted-foreground`,
                                    children: [`Or call us: `, (0, K.jsx)(`a`, {
                                        href: `tel:+18885551234`,
                                        className: `font-semibold text-ink hover:text-primary`,
                                        children: `(888) 555-1234`
                                    })]
                                })]
                            })
                        })
                    })]
                })]
            })
        })
    })
}

function lS() {
    return (0, K.jsx)(`footer`, {
        className: `border-t border-border py-12`,
        children: (0, K.jsxs)(`div`, {
            className: `mx-auto max-w-7xl px-5`,
            children: [(0, K.jsxs)(`div`, {
                className: `grid md:grid-cols-4 gap-8`,
                children: [(0, K.jsxs)(`div`, {
                    className: `md:col-span-2`,
                    children: [(0, K.jsxs)(`div`, {
                        className: `flex items-center gap-2 font-bold text-lg text-ink`,
                        children: [(0, K.jsx)(`div`, {
                            className: `grid h-8 w-8 place-items-center rounded-lg bg-gradient-amber shadow-amber`,
                            children: (0, K.jsx)(Zu, {
                                className: `h-4 w-4 text-white`,
                                strokeWidth: 2.5
                            })
                        }), `RenovReach`]
                    }), (0, K.jsxs)(`p`, {
                        className: `mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed`,
                        children: [`The AI voice receptionist built for contractors and home-service pros. `, (0, K.jsx)(`span`, {
                            className: `neg`,
                            children: `Never miss`
                        }), ` another job.`]
                    })]
                }), (0, K.jsxs)(`div`, {
                    children: [(0, K.jsx)(`div`, {
                        className: `text-sm font-bold text-ink`,
                        children: `Product`
                    }), (0, K.jsxs)(`ul`, {
                        className: `mt-4 space-y-2.5 text-sm text-muted-foreground`,
                        children: [(0, K.jsx)(`li`, {
                            children: (0, K.jsx)(`a`, {
                                href: `#how`,
                                className: `hover:text-ink`,
                                children: `How it works`
                            })
                        }), (0, K.jsx)(`li`, {
                            children: (0, K.jsx)(`a`, {
                                href: `#demo`,
                                className: `hover:text-ink`,
                                children: `Live demo`
                            })
                        }), (0, K.jsx)(`li`, {
                            children: (0, K.jsx)(`a`, {
                                href: `#features`,
                                className: `hover:text-ink`,
                                children: `Features`
                            })
                        }), (0, K.jsx)(`li`, {
                            children: (0, K.jsx)(`a`, {
                                href: `#pricing`,
                                className: `hover:text-ink`,
                                children: `Pricing`
                            })
                        }), (0, K.jsx)(`li`, {
                            children: (0, K.jsx)(`a`, {
                                href: `#faq`,
                                className: `hover:text-ink`,
                                children: `FAQ`
                            })
                        })]
                    })]
                }), (0, K.jsxs)(`div`, {
                    children: [(0, K.jsx)(`div`, {
                        className: `text-sm font-bold text-ink`,
                        children: `Contact`
                    }), (0, K.jsxs)(`ul`, {
                        className: `mt-4 space-y-2.5 text-sm text-muted-foreground`,
                        children: [(0, K.jsx)(`li`, {
                            children: (0, K.jsx)(`a`, {
                                href: `tel:+18885551234`,
                                className: `hover:text-ink`,
                                children: `(888) 555-1234`
                            })
                        }), (0, K.jsx)(`li`, {
                            children: (0, K.jsx)(`a`, {
                                href: `mailto:contact@renovreach.com`,
                                className: `hover:text-ink`,
                                children: `contact@renovreach.com`
                            })
                        })]
                    })]
                })]
            }), (0, K.jsxs)(`div`, {
                className: `mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground`,
                children: [(0, K.jsxs)(`div`, {
                    children: [`© `, new Date().getFullYear(), ` RenovReach All rights reserved.`]
                }), (0, K.jsxs)(`div`, {
                    className: `flex items-center gap-5`,
                    children: [(0, K.jsx)(`a`, {
                        href: `#`,
                        className: `hover:text-ink`,
                        children: `Privacy`
                    }), (0, K.jsx)(`a`, {
                        href: `#`,
                        className: `hover:text-ink`,
                        children: `Terms`
                    }), (0, K.jsx)(`a`, {
                        href: `#`,
                        className: `hover:text-ink`,
                        children: `Security`
                    })]
                })]
            })]
        })
    })
}

function uS() {
    return (0, s.useEffect)(() => {
        let e = `/assets.calendly.com/assets/external/widget.js`;
        if (document.querySelector(`script[src="${e}"]`)) return;
        let t = document.createElement(`script`);
        t.src = e, t.async = !0, document.body.appendChild(t)
    }, []), (0, K.jsxs)(`div`, {
        className: `min-h-screen bg-background text-foreground`,
        children: [(0, K.jsx)(Qx, {}), (0, K.jsxs)(`main`, {
            children: [(0, K.jsx)($x, {}), (0, K.jsx)(eS, {}), (0, K.jsx)(tS, {}), (0, K.jsx)(nS, {}), (0, K.jsx)(rS, {}), (0, K.jsx)(iS, {}), (0, K.jsx)(aS, {}), (0, K.jsx)(cS, {})]
        }), (0, K.jsx)(lS, {}), (0, K.jsx)(Vx, {})]
    })
}
export {
    uS as component
};