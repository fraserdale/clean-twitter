/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
!(function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ?
        e(
            exports,
            require("@tensorflow/tfjs-converter"),
            require("@tensorflow/tfjs-core")
        ) :
        "function" == typeof define && define.amd ?
        define([
            "exports",
            "@tensorflow/tfjs-converter",
            "@tensorflow/tfjs-core",
        ], e) :
        e((t.toxicity = {}), t.tf, t.tf);
})(this, function(t, e, n) {
    "use strict";

    function r(t, e, n, r) {
        return new(n || (n = Promise))(function(o, i) {
            function u(t) {
                try {
                    a(r.next(t));
                } catch (t) {
                    i(t);
                }
            }

            function l(t) {
                try {
                    a(r.throw(t));
                } catch (t) {
                    i(t);
                }
            }

            function a(t) {
                t.done ?
                    o(t.value) :
                    new n(function(e) {
                        e(t.value);
                    }).then(u, l);
            }
            a((r = r.apply(t, e || [])).next());
        });
    }

    function o(t, e) {
        var n,
            r,
            o,
            i,
            u = {
                label: 0,
                sent: function() {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                },
                trys: [],
                ops: [],
            };
        return (
            (i = { next: l(0), throw: l(1), return: l(2) }),
            "function" == typeof Symbol &&
            (i[Symbol.iterator] = function() {
                return this;
            }),
            i
        );

        function l(i) {
            return function(l) {
                return (function(i) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; u;)
                        try {
                            if (
                                ((n = 1),
                                    r &&
                                    (o =
                                        2 & i[0] ?
                                        r.return :
                                        i[0] ?
                                        r.throw || ((o = r.return) && o.call(r), 0) :
                                        r.next) &&
                                    !(o = o.call(r, i[1])).done)
                            )
                                return o;
                            switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return u.label++, { value: i[1], done: !1 };
                                case 5:
                                    u.label++, (r = i[1]), (i = [0]);
                                    continue;
                                case 7:
                                    (i = u.ops.pop()), u.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = u.trys).length > 0 && o[o.length - 1]) &&
                                        (6 === i[0] || 2 === i[0])
                                    ) {
                                        u = 0;
                                        continue;
                                    }
                                    if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                                        u.label = i[1];
                                        break;
                                    }
                                    if (6 === i[0] && u.label < o[1]) {
                                        (u.label = o[1]), (o = i);
                                        break;
                                    }
                                    if (o && u.label < o[2]) {
                                        (u.label = o[2]), u.ops.push(i);
                                        break;
                                    }
                                    o[2] && u.ops.pop(), u.trys.pop();
                                    continue;
                            }
                            i = e.call(t, u);
                        } catch (t) {
                            (i = [6, t]), (r = 0);
                        } finally {
                            n = o = 0;
                        }
                    if (5 & i[0]) throw i[1];
                    return { value: i[0] ? i[1] : void 0, done: !0 };
                })([i, l]);
            };
        }
    }

    function i(t, e, n, r) {
        return new(n || (n = Promise))(function(o, i) {
            function u(t) {
                try {
                    a(r.next(t));
                } catch (t) {
                    i(t);
                }
            }

            function l(t) {
                try {
                    a(r.throw(t));
                } catch (t) {
                    i(t);
                }
            }

            function a(t) {
                t.done ?
                    o(t.value) :
                    new n(function(e) {
                        e(t.value);
                    }).then(u, l);
            }
            a((r = r.apply(t, e || [])).next());
        });
    }

    function u(t, e) {
        var n,
            r,
            o,
            i,
            u = {
                label: 0,
                sent: function() {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                },
                trys: [],
                ops: [],
            };
        return (
            (i = { next: l(0), throw: l(1), return: l(2) }),
            "function" == typeof Symbol &&
            (i[Symbol.iterator] = function() {
                return this;
            }),
            i
        );

        function l(i) {
            return function(l) {
                return (function(i) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; u;)
                        try {
                            if (
                                ((n = 1),
                                    r &&
                                    (o =
                                        2 & i[0] ?
                                        r.return :
                                        i[0] ?
                                        r.throw || ((o = r.return) && o.call(r), 0) :
                                        r.next) &&
                                    !(o = o.call(r, i[1])).done)
                            )
                                return o;
                            switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return u.label++, { value: i[1], done: !1 };
                                case 5:
                                    u.label++, (r = i[1]), (i = [0]);
                                    continue;
                                case 7:
                                    (i = u.ops.pop()), u.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = u.trys).length > 0 && o[o.length - 1]) &&
                                        (6 === i[0] || 2 === i[0])
                                    ) {
                                        u = 0;
                                        continue;
                                    }
                                    if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                                        u.label = i[1];
                                        break;
                                    }
                                    if (6 === i[0] && u.label < o[1]) {
                                        (u.label = o[1]), (o = i);
                                        break;
                                    }
                                    if (o && u.label < o[2]) {
                                        (u.label = o[2]), u.ops.push(i);
                                        break;
                                    }
                                    o[2] && u.ops.pop(), u.trys.pop();
                                    continue;
                            }
                            i = e.call(t, u);
                        } catch (t) {
                            (i = [6, t]), (r = 0);
                        } finally {
                            n = o = 0;
                        }
                    if (5 & i[0]) throw i[1];
                    return { value: i[0] ? i[1] : void 0, done: !0 };
                })([i, l]);
            };
        }
    }
    var l = function(t) {
            for (var e = [], n = 0, r = t; n < r.length; n++) {
                var o = r[n];
                e.push(o);
            }
            return e;
        },
        a = function() {
            (this.parent = null),
            (this.children = {}),
            (this.end = !1),
            (this.word = [
                [], 0, 0
            ]);
        },
        s = (function() {
            function t() {
                this.root = new a();
            }
            return (
                (t.prototype.insert = function(t, e, n) {
                    for (var r = this.root, o = l(t), i = 0; i < o.length; i++)
                        r.children[o[i]] ||
                        ((r.children[o[i]] = new a()),
                            (r.children[o[i]].parent = r),
                            (r.children[o[i]].word[0] = r.word[0].concat(o[i]))),
                        (r = r.children[o[i]]),
                        i === o.length - 1 &&
                        ((r.end = !0), (r.word[1] = e), (r.word[2] = n));
                }),
                (t.prototype.commonPrefixSearch = function(t) {
                    for (
                        var e = [], n = this.root.children[t[0]], r = 0; r < t.length && n; r++
                    )
                        n.end && e.push(n.word), (n = n.children[t[r + 1]]);
                    return e.length || e.push([
                        [t[0]], 0, 0
                    ]), e;
                }),
                t
            );
        })(),
        c = "▁";
    var f = 6,
        h = (function() {
            function t(t) {
                (this.vocabulary = t), (this.trie = new s());
                for (var e = f; e < this.vocabulary.length; e++)
                    this.trie.insert(this.vocabulary[e][0], this.vocabulary[e][1], e);
            }
            return (
                (t.prototype.encode = function(t) {
                    var e = [],
                        n = [],
                        r = [];
                    t = (function(t) {
                        var e = t.normalize("NFKC");
                        return c + e.replace(/ /g, c);
                    })(t);
                    for (var o = l(t), i = 0; i <= o.length; i++)
                        e.push({}), n.push(0), r.push(0);
                    for (i = 0; i < o.length; i++)
                        for (
                            var u = this.trie.commonPrefixSearch(o.slice(i)), a = 0; a < u.length; a++
                        ) {
                            var s = u[a],
                                f = { key: s[0], score: s[1], index: s[2] };
                            null == e[i + (h = s[0].length)][i] && (e[i + h][i] = []),
                                e[i + h][i].push(f);
                        }
                    for (var h = 0; h <= o.length; h++)
                        for (var d in e[h]) {
                            var p = e[h][d];
                            for (a = 0; a < p.length; a++) {
                                var v = p[a],
                                    y = v.score + r[h - v.key.length];
                                (0 === r[h] || y >= r[h]) && ((r[h] = y), (n[h] = p[a].index));
                            }
                        }
                    for (var b = [], w = n.length - 1; w > 0;)
                        b.push(n[w]), (w -= this.vocabulary[n[w]][0].length);
                    var m = [],
                        x = !1;
                    for (i = 0; i < b.length; i++) {
                        var g = b[i];
                        (x && 0 === g) || m.push(g), (x = 0 === g);
                    }
                    return m.reverse();
                }),
                t
            );
        })(),
        d =
        "https://storage.googleapis.com/tfjs-models/savedmodel/universal_sentence_encoder/";

    function p(t) {
        return i(this, void 0, void 0, function() {
            var e;
            return u(this, function(r) {
                switch (r.label) {
                    case 0:
                        return [
                            4,
                            (function(t) {
                                return (
                                    void 0 === t && (t = d + "vocab.json"),
                                    i(this, void 0, void 0, function() {
                                        return u(this, function(e) {
                                            switch (e.label) {
                                                case 0:
                                                    return [4, n.util.fetch(t)];
                                                case 1:
                                                    return [2, e.sent().json()];
                                            }
                                        });
                                    })
                                );
                            })(t),
                        ];
                    case 1:
                        return (e = r.sent()), [2, new h(e)];
                }
            });
        });
    }
    var v = (function() {
        function t(t, e) {
            void 0 === t && (t = 0.85),
                void 0 === e && (e = []),
                (this.threshold = t),
                (this.toxicityLabels = e);
        }
        return (
            (t.prototype.loadModel = function() {
                return r(this, void 0, void 0, function() {
                    return o(this, function(t) {
                        return [
                            2,
                            e.loadGraphModel(
                                "https://tfhub.dev/tensorflow/tfjs-model/toxicity/1/default/1", { fromTFHub: !0 }
                            ),
                        ];
                    });
                });
            }),
            (t.prototype.loadTokenizer = function() {
                return r(this, void 0, void 0, function() {
                    return o(this, function(t) {
                        return [2, p()];
                    });
                });
            }),
            (t.prototype.load = function() {
                return r(this, void 0, void 0, function() {
                    var t,
                        e,
                        r,
                        i = this;
                    return o(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return [
                                    4,
                                    Promise.all([this.loadModel(), this.loadTokenizer()]),
                                ];
                            case 1:
                                return (
                                    (t = o.sent()),
                                    (e = t[0]),
                                    (r = t[1]),
                                    (this.model = e),
                                    (this.tokenizer = r),
                                    (this.labels = e.outputs.map(function(t) {
                                        return t.name.split("/")[0];
                                    })),
                                    0 === this.toxicityLabels.length ?
                                    (this.toxicityLabels = this.labels) :
                                    n.util.assert(
                                        this.toxicityLabels.every(function(t) {
                                            return i.labels.indexOf(t) > -1;
                                        }),
                                        function() {
                                            return (
                                                "toxicityLabels argument must contain only items from the model heads " +
                                                i.labels.join(", ") +
                                                ", got " +
                                                i.toxicityLabels.join(", ")
                                            );
                                        }
                                    ), [2]
                                );
                        }
                    });
                });
            }),
            (t.prototype.classify = function(t) {
                return r(this, void 0, void 0, function() {
                    var e,
                        r,
                        i,
                        u,
                        l,
                        a,
                        s,
                        c = this;
                    return o(this, function(o) {
                        switch (o.label) {
                            case 0:
                                for (
                                    "string" == typeof t && (t = [t]),
                                    e = t.map(function(t) {
                                        return c.tokenizer.encode(t);
                                    }),
                                    r = e.map(function(t, e) {
                                        return t.map(function(t, n) {
                                            return [e, n];
                                        });
                                    }),
                                    i = [],
                                    u = 0; u < r.length; u++
                                )
                                    i = i.concat(r[u]);
                                return (
                                    (l = n.tensor2d(i, [i.length, 2], "int32")),
                                    (a = n.tensor1d(n.util.flatten(e), "int32")), [
                                        4,
                                        this.model.executeAsync({
                                            Placeholder_1: l,
                                            Placeholder: a,
                                        }),
                                    ]
                                );
                            case 1:
                                return (
                                    (s = o.sent()),
                                    l.dispose(),
                                    a.dispose(), [
                                        2,
                                        s
                                        .map(function(t, e) {
                                            return { data: t, headIndex: e };
                                        })
                                        .filter(function(t) {
                                            return (
                                                c.toxicityLabels.indexOf(c.labels[t.headIndex]) > -1
                                            );
                                        })
                                        .map(function(e) {
                                            for (
                                                var n = e.data.dataSync(), r = [], o = 0; o < t.length; o++
                                            ) {
                                                var i = n.slice(2 * o, 2 * o + 2),
                                                    u = null;
                                                Math.max(i[0], i[1]) > c.threshold &&
                                                    (u = i[0] < i[1]),
                                                    r.push({ probabilities: i, match: u });
                                            }
                                            return { label: c.labels[e.headIndex], results: r };
                                        }),
                                    ]
                                );
                        }
                    });
                });
            }),
            t
        );
    })();
    (t.load = function(t, e) {
        return r(this, void 0, void 0, function() {
            var n;
            return o(this, function(r) {
                switch (r.label) {
                    case 0:
                        return [4, (n = new v(t, e)).load()];
                    case 1:
                        return r.sent(), [2, n];
                }
            });
        });
    }),
    (t.ToxicityClassifier = v),
    (t.version = "1.2.2"),
    Object.defineProperty(t, "__esModule", { value: !0 });
});