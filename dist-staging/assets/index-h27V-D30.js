(function () {
	const r = document.createElement('link').relList;
	if (r && r.supports && r.supports('modulepreload')) return;
	for (const s of document.querySelectorAll('link[rel="modulepreload"]')) o(s);
	new MutationObserver((s) => {
		for (const h of s)
			if (h.type === 'childList')
				for (const y of h.addedNodes)
					y.tagName === 'LINK' && y.rel === 'modulepreload' && o(y);
	}).observe(document, { childList: !0, subtree: !0 });
	function f(s) {
		const h = {};
		return (
			s.integrity && (h.integrity = s.integrity),
			s.referrerPolicy && (h.referrerPolicy = s.referrerPolicy),
			s.crossOrigin === 'use-credentials'
				? (h.credentials = 'include')
				: s.crossOrigin === 'anonymous'
				? (h.credentials = 'omit')
				: (h.credentials = 'same-origin'),
			h
		);
	}
	function o(s) {
		if (s.ep) return;
		s.ep = !0;
		const h = f(s);
		fetch(s.href, h);
	}
})();
const xy = 'modulepreload',
	Cy = function (i) {
		return '/staging/' + i;
	},
	Rh = {},
	xf = function (r, f, o) {
		let s = Promise.resolve();
		if (f && f.length > 0) {
			let v = function (m) {
				return Promise.all(
					m.map((R) =>
						Promise.resolve(R).then(
							(N) => ({ status: 'fulfilled', value: N }),
							(N) => ({ status: 'rejected', reason: N })
						)
					)
				);
			};
			document.getElementsByTagName('link');
			const y = document.querySelector('meta[property=csp-nonce]'),
				b = y?.nonce || y?.getAttribute('nonce');
			s = v(
				f.map((m) => {
					if (((m = Cy(m)), m in Rh)) return;
					Rh[m] = !0;
					const R = m.endsWith('.css'),
						N = R ? '[rel="stylesheet"]' : '';
					if (document.querySelector(`link[href="${m}"]${N}`)) return;
					const M = document.createElement('link');
					if (
						((M.rel = R ? 'stylesheet' : xy),
						R || (M.as = 'script'),
						(M.crossOrigin = ''),
						(M.href = m),
						b && M.setAttribute('nonce', b),
						document.head.appendChild(M),
						R)
					)
						return new Promise((B, w) => {
							M.addEventListener('load', B),
								M.addEventListener('error', () =>
									w(new Error(`Unable to preload CSS for ${m}`))
								);
						});
				})
			);
		}
		function h(y) {
			const b = new Event('vite:preloadError', { cancelable: !0 });
			if (((b.payload = y), window.dispatchEvent(b), !b.defaultPrevented))
				throw y;
		}
		return s.then((y) => {
			for (const b of y || []) b.status === 'rejected' && h(b.reason);
			return r().catch(h);
		});
	};
function Ny(i) {
	return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, 'default')
		? i.default
		: i;
}
var yf = { exports: {} },
	Ru = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Th;
function wy() {
	if (Th) return Ru;
	Th = 1;
	var i = Symbol.for('react.transitional.element'),
		r = Symbol.for('react.fragment');
	function f(o, s, h) {
		var y = null;
		if (
			(h !== void 0 && (y = '' + h),
			s.key !== void 0 && (y = '' + s.key),
			'key' in s)
		) {
			h = {};
			for (var b in s) b !== 'key' && (h[b] = s[b]);
		} else h = s;
		return (
			(s = h.ref),
			{ $$typeof: i, type: o, key: y, ref: s !== void 0 ? s : null, props: h }
		);
	}
	return (Ru.Fragment = r), (Ru.jsx = f), (Ru.jsxs = f), Ru;
}
var Mh;
function Hy() {
	return Mh || ((Mh = 1), (yf.exports = wy())), yf.exports;
}
var ia = Hy(),
	gf = { exports: {} },
	ge = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dh;
function Ly() {
	if (Dh) return ge;
	Dh = 1;
	var i = Symbol.for('react.transitional.element'),
		r = Symbol.for('react.portal'),
		f = Symbol.for('react.fragment'),
		o = Symbol.for('react.strict_mode'),
		s = Symbol.for('react.profiler'),
		h = Symbol.for('react.consumer'),
		y = Symbol.for('react.context'),
		b = Symbol.for('react.forward_ref'),
		v = Symbol.for('react.suspense'),
		m = Symbol.for('react.memo'),
		R = Symbol.for('react.lazy'),
		N = Symbol.iterator;
	function M(p) {
		return p === null || typeof p != 'object'
			? null
			: ((p = (N && p[N]) || p['@@iterator']),
			  typeof p == 'function' ? p : null);
	}
	var B = {
			isMounted: function () {
				return !1;
			},
			enqueueForceUpdate: function () {},
			enqueueReplaceState: function () {},
			enqueueSetState: function () {},
		},
		w = Object.assign,
		Z = {};
	function $(p, j, J) {
		(this.props = p),
			(this.context = j),
			(this.refs = Z),
			(this.updater = J || B);
	}
	($.prototype.isReactComponent = {}),
		($.prototype.setState = function (p, j) {
			if (typeof p != 'object' && typeof p != 'function' && p != null)
				throw Error(
					'takes an object of state variables to update or a function which returns an object of state variables.'
				);
			this.updater.enqueueSetState(this, p, j, 'setState');
		}),
		($.prototype.forceUpdate = function (p) {
			this.updater.enqueueForceUpdate(this, p, 'forceUpdate');
		});
	function q() {}
	q.prototype = $.prototype;
	function ue(p, j, J) {
		(this.props = p),
			(this.context = j),
			(this.refs = Z),
			(this.updater = J || B);
	}
	var k = (ue.prototype = new q());
	(k.constructor = ue), w(k, $.prototype), (k.isPureReactComponent = !0);
	var he = Array.isArray,
		W = { H: null, A: null, T: null, S: null, V: null },
		x = Object.prototype.hasOwnProperty;
	function ye(p, j, J, K, le, Te) {
		return (
			(J = Te.ref),
			{ $$typeof: i, type: p, key: j, ref: J !== void 0 ? J : null, props: Te }
		);
	}
	function pe(p, j) {
		return ye(p.type, j, void 0, void 0, void 0, p.props);
	}
	function me(p) {
		return typeof p == 'object' && p !== null && p.$$typeof === i;
	}
	function Ve(p) {
		var j = { '=': '=0', ':': '=2' };
		return (
			'$' +
			p.replace(/[=:]/g, function (J) {
				return j[J];
			})
		);
	}
	var et = /\/+/g;
	function Ke(p, j) {
		return typeof p == 'object' && p !== null && p.key != null
			? Ve('' + p.key)
			: j.toString(36);
	}
	function Ue() {}
	function Ne(p) {
		switch (p.status) {
			case 'fulfilled':
				return p.value;
			case 'rejected':
				throw p.reason;
			default:
				switch (
					(typeof p.status == 'string'
						? p.then(Ue, Ue)
						: ((p.status = 'pending'),
						  p.then(
								function (j) {
									p.status === 'pending' &&
										((p.status = 'fulfilled'), (p.value = j));
								},
								function (j) {
									p.status === 'pending' &&
										((p.status = 'rejected'), (p.reason = j));
								}
						  )),
					p.status)
				) {
					case 'fulfilled':
						return p.value;
					case 'rejected':
						throw p.reason;
				}
		}
		throw p;
	}
	function He(p, j, J, K, le) {
		var Te = typeof p;
		(Te === 'undefined' || Te === 'boolean') && (p = null);
		var ce = !1;
		if (p === null) ce = !0;
		else
			switch (Te) {
				case 'bigint':
				case 'string':
				case 'number':
					ce = !0;
					break;
				case 'object':
					switch (p.$$typeof) {
						case i:
						case r:
							ce = !0;
							break;
						case R:
							return (ce = p._init), He(ce(p._payload), j, J, K, le);
					}
			}
		if (ce)
			return (
				(le = le(p)),
				(ce = K === '' ? '.' + Ke(p, 0) : K),
				he(le)
					? ((J = ''),
					  ce != null && (J = ce.replace(et, '$&/') + '/'),
					  He(le, j, J, '', function (ul) {
							return ul;
					  }))
					: le != null &&
					  (me(le) &&
							(le = pe(
								le,
								J +
									(le.key == null || (p && p.key === le.key)
										? ''
										: ('' + le.key).replace(et, '$&/') + '/') +
									ce
							)),
					  j.push(le)),
				1
			);
		ce = 0;
		var bt = K === '' ? '.' : K + ':';
		if (he(p))
			for (var Xe = 0; Xe < p.length; Xe++)
				(K = p[Xe]), (Te = bt + Ke(K, Xe)), (ce += He(K, j, J, Te, le));
		else if (((Xe = M(p)), typeof Xe == 'function'))
			for (p = Xe.call(p), Xe = 0; !(K = p.next()).done; )
				(K = K.value), (Te = bt + Ke(K, Xe++)), (ce += He(K, j, J, Te, le));
		else if (Te === 'object') {
			if (typeof p.then == 'function') return He(Ne(p), j, J, K, le);
			throw (
				((j = String(p)),
				Error(
					'Objects are not valid as a React child (found: ' +
						(j === '[object Object]'
							? 'object with keys {' + Object.keys(p).join(', ') + '}'
							: j) +
						'). If you meant to render a collection of children, use an array instead.'
				))
			);
		}
		return ce;
	}
	function _(p, j, J) {
		if (p == null) return p;
		var K = [],
			le = 0;
		return (
			He(p, K, '', '', function (Te) {
				return j.call(J, Te, le++);
			}),
			K
		);
	}
	function V(p) {
		if (p._status === -1) {
			var j = p._result;
			(j = j()),
				j.then(
					function (J) {
						(p._status === 0 || p._status === -1) &&
							((p._status = 1), (p._result = J));
					},
					function (J) {
						(p._status === 0 || p._status === -1) &&
							((p._status = 2), (p._result = J));
					}
				),
				p._status === -1 && ((p._status = 0), (p._result = j));
		}
		if (p._status === 1) return p._result.default;
		throw p._result;
	}
	var P =
		typeof reportError == 'function'
			? reportError
			: function (p) {
					if (
						typeof window == 'object' &&
						typeof window.ErrorEvent == 'function'
					) {
						var j = new window.ErrorEvent('error', {
							bubbles: !0,
							cancelable: !0,
							message:
								typeof p == 'object' &&
								p !== null &&
								typeof p.message == 'string'
									? String(p.message)
									: String(p),
							error: p,
						});
						if (!window.dispatchEvent(j)) return;
					} else if (
						typeof process == 'object' &&
						typeof process.emit == 'function'
					) {
						process.emit('uncaughtException', p);
						return;
					}
					console.error(p);
			  };
	function be() {}
	return (
		(ge.Children = {
			map: _,
			forEach: function (p, j, J) {
				_(
					p,
					function () {
						j.apply(this, arguments);
					},
					J
				);
			},
			count: function (p) {
				var j = 0;
				return (
					_(p, function () {
						j++;
					}),
					j
				);
			},
			toArray: function (p) {
				return (
					_(p, function (j) {
						return j;
					}) || []
				);
			},
			only: function (p) {
				if (!me(p))
					throw Error(
						'React.Children.only expected to receive a single React element child.'
					);
				return p;
			},
		}),
		(ge.Component = $),
		(ge.Fragment = f),
		(ge.Profiler = s),
		(ge.PureComponent = ue),
		(ge.StrictMode = o),
		(ge.Suspense = v),
		(ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = W),
		(ge.__COMPILER_RUNTIME = {
			__proto__: null,
			c: function (p) {
				return W.H.useMemoCache(p);
			},
		}),
		(ge.cache = function (p) {
			return function () {
				return p.apply(null, arguments);
			};
		}),
		(ge.cloneElement = function (p, j, J) {
			if (p == null)
				throw Error(
					'The argument must be a React element, but you passed ' + p + '.'
				);
			var K = w({}, p.props),
				le = p.key,
				Te = void 0;
			if (j != null)
				for (ce in (j.ref !== void 0 && (Te = void 0),
				j.key !== void 0 && (le = '' + j.key),
				j))
					!x.call(j, ce) ||
						ce === 'key' ||
						ce === '__self' ||
						ce === '__source' ||
						(ce === 'ref' && j.ref === void 0) ||
						(K[ce] = j[ce]);
			var ce = arguments.length - 2;
			if (ce === 1) K.children = J;
			else if (1 < ce) {
				for (var bt = Array(ce), Xe = 0; Xe < ce; Xe++)
					bt[Xe] = arguments[Xe + 2];
				K.children = bt;
			}
			return ye(p.type, le, void 0, void 0, Te, K);
		}),
		(ge.createContext = function (p) {
			return (
				(p = {
					$$typeof: y,
					_currentValue: p,
					_currentValue2: p,
					_threadCount: 0,
					Provider: null,
					Consumer: null,
				}),
				(p.Provider = p),
				(p.Consumer = { $$typeof: h, _context: p }),
				p
			);
		}),
		(ge.createElement = function (p, j, J) {
			var K,
				le = {},
				Te = null;
			if (j != null)
				for (K in (j.key !== void 0 && (Te = '' + j.key), j))
					x.call(j, K) &&
						K !== 'key' &&
						K !== '__self' &&
						K !== '__source' &&
						(le[K] = j[K]);
			var ce = arguments.length - 2;
			if (ce === 1) le.children = J;
			else if (1 < ce) {
				for (var bt = Array(ce), Xe = 0; Xe < ce; Xe++)
					bt[Xe] = arguments[Xe + 2];
				le.children = bt;
			}
			if (p && p.defaultProps)
				for (K in ((ce = p.defaultProps), ce))
					le[K] === void 0 && (le[K] = ce[K]);
			return ye(p, Te, void 0, void 0, null, le);
		}),
		(ge.createRef = function () {
			return { current: null };
		}),
		(ge.forwardRef = function (p) {
			return { $$typeof: b, render: p };
		}),
		(ge.isValidElement = me),
		(ge.lazy = function (p) {
			return { $$typeof: R, _payload: { _status: -1, _result: p }, _init: V };
		}),
		(ge.memo = function (p, j) {
			return { $$typeof: m, type: p, compare: j === void 0 ? null : j };
		}),
		(ge.startTransition = function (p) {
			var j = W.T,
				J = {};
			W.T = J;
			try {
				var K = p(),
					le = W.S;
				le !== null && le(J, K),
					typeof K == 'object' &&
						K !== null &&
						typeof K.then == 'function' &&
						K.then(be, P);
			} catch (Te) {
				P(Te);
			} finally {
				W.T = j;
			}
		}),
		(ge.unstable_useCacheRefresh = function () {
			return W.H.useCacheRefresh();
		}),
		(ge.use = function (p) {
			return W.H.use(p);
		}),
		(ge.useActionState = function (p, j, J) {
			return W.H.useActionState(p, j, J);
		}),
		(ge.useCallback = function (p, j) {
			return W.H.useCallback(p, j);
		}),
		(ge.useContext = function (p) {
			return W.H.useContext(p);
		}),
		(ge.useDebugValue = function () {}),
		(ge.useDeferredValue = function (p, j) {
			return W.H.useDeferredValue(p, j);
		}),
		(ge.useEffect = function (p, j, J) {
			var K = W.H;
			if (typeof J == 'function')
				throw Error(
					'useEffect CRUD overload is not enabled in this build of React.'
				);
			return K.useEffect(p, j);
		}),
		(ge.useId = function () {
			return W.H.useId();
		}),
		(ge.useImperativeHandle = function (p, j, J) {
			return W.H.useImperativeHandle(p, j, J);
		}),
		(ge.useInsertionEffect = function (p, j) {
			return W.H.useInsertionEffect(p, j);
		}),
		(ge.useLayoutEffect = function (p, j) {
			return W.H.useLayoutEffect(p, j);
		}),
		(ge.useMemo = function (p, j) {
			return W.H.useMemo(p, j);
		}),
		(ge.useOptimistic = function (p, j) {
			return W.H.useOptimistic(p, j);
		}),
		(ge.useReducer = function (p, j, J) {
			return W.H.useReducer(p, j, J);
		}),
		(ge.useRef = function (p) {
			return W.H.useRef(p);
		}),
		(ge.useState = function (p) {
			return W.H.useState(p);
		}),
		(ge.useSyncExternalStore = function (p, j, J) {
			return W.H.useSyncExternalStore(p, j, J);
		}),
		(ge.useTransition = function () {
			return W.H.useTransition();
		}),
		(ge.version = '19.1.0'),
		ge
	);
}
var Ah;
function Cf() {
	return Ah || ((Ah = 1), (gf.exports = Ly())), gf.exports;
}
var H = Cf();
const Nf = Ny(H);
var pf = { exports: {} },
	Tu = {},
	bf = { exports: {} },
	Sf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zh;
function By() {
	return (
		zh ||
			((zh = 1),
			(function (i) {
				function r(_, V) {
					var P = _.length;
					_.push(V);
					e: for (; 0 < P; ) {
						var be = (P - 1) >>> 1,
							p = _[be];
						if (0 < s(p, V)) (_[be] = V), (_[P] = p), (P = be);
						else break e;
					}
				}
				function f(_) {
					return _.length === 0 ? null : _[0];
				}
				function o(_) {
					if (_.length === 0) return null;
					var V = _[0],
						P = _.pop();
					if (P !== V) {
						_[0] = P;
						e: for (var be = 0, p = _.length, j = p >>> 1; be < j; ) {
							var J = 2 * (be + 1) - 1,
								K = _[J],
								le = J + 1,
								Te = _[le];
							if (0 > s(K, P))
								le < p && 0 > s(Te, K)
									? ((_[be] = Te), (_[le] = P), (be = le))
									: ((_[be] = K), (_[J] = P), (be = J));
							else if (le < p && 0 > s(Te, P))
								(_[be] = Te), (_[le] = P), (be = le);
							else break e;
						}
					}
					return V;
				}
				function s(_, V) {
					var P = _.sortIndex - V.sortIndex;
					return P !== 0 ? P : _.id - V.id;
				}
				if (
					((i.unstable_now = void 0),
					typeof performance == 'object' &&
						typeof performance.now == 'function')
				) {
					var h = performance;
					i.unstable_now = function () {
						return h.now();
					};
				} else {
					var y = Date,
						b = y.now();
					i.unstable_now = function () {
						return y.now() - b;
					};
				}
				var v = [],
					m = [],
					R = 1,
					N = null,
					M = 3,
					B = !1,
					w = !1,
					Z = !1,
					$ = !1,
					q = typeof setTimeout == 'function' ? setTimeout : null,
					ue = typeof clearTimeout == 'function' ? clearTimeout : null,
					k = typeof setImmediate < 'u' ? setImmediate : null;
				function he(_) {
					for (var V = f(m); V !== null; ) {
						if (V.callback === null) o(m);
						else if (V.startTime <= _)
							o(m), (V.sortIndex = V.expirationTime), r(v, V);
						else break;
						V = f(m);
					}
				}
				function W(_) {
					if (((Z = !1), he(_), !w))
						if (f(v) !== null) (w = !0), x || ((x = !0), Ke());
						else {
							var V = f(m);
							V !== null && He(W, V.startTime - _);
						}
				}
				var x = !1,
					ye = -1,
					pe = 5,
					me = -1;
				function Ve() {
					return $ ? !0 : !(i.unstable_now() - me < pe);
				}
				function et() {
					if ((($ = !1), x)) {
						var _ = i.unstable_now();
						me = _;
						var V = !0;
						try {
							e: {
								(w = !1), Z && ((Z = !1), ue(ye), (ye = -1)), (B = !0);
								var P = M;
								try {
									t: {
										for (
											he(_), N = f(v);
											N !== null && !(N.expirationTime > _ && Ve());

										) {
											var be = N.callback;
											if (typeof be == 'function') {
												(N.callback = null), (M = N.priorityLevel);
												var p = be(N.expirationTime <= _);
												if (((_ = i.unstable_now()), typeof p == 'function')) {
													(N.callback = p), he(_), (V = !0);
													break t;
												}
												N === f(v) && o(v), he(_);
											} else o(v);
											N = f(v);
										}
										if (N !== null) V = !0;
										else {
											var j = f(m);
											j !== null && He(W, j.startTime - _), (V = !1);
										}
									}
									break e;
								} finally {
									(N = null), (M = P), (B = !1);
								}
								V = void 0;
							}
						} finally {
							V ? Ke() : (x = !1);
						}
					}
				}
				var Ke;
				if (typeof k == 'function')
					Ke = function () {
						k(et);
					};
				else if (typeof MessageChannel < 'u') {
					var Ue = new MessageChannel(),
						Ne = Ue.port2;
					(Ue.port1.onmessage = et),
						(Ke = function () {
							Ne.postMessage(null);
						});
				} else
					Ke = function () {
						q(et, 0);
					};
				function He(_, V) {
					ye = q(function () {
						_(i.unstable_now());
					}, V);
				}
				(i.unstable_IdlePriority = 5),
					(i.unstable_ImmediatePriority = 1),
					(i.unstable_LowPriority = 4),
					(i.unstable_NormalPriority = 3),
					(i.unstable_Profiling = null),
					(i.unstable_UserBlockingPriority = 2),
					(i.unstable_cancelCallback = function (_) {
						_.callback = null;
					}),
					(i.unstable_forceFrameRate = function (_) {
						0 > _ || 125 < _
							? console.error(
									'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
							  )
							: (pe = 0 < _ ? Math.floor(1e3 / _) : 5);
					}),
					(i.unstable_getCurrentPriorityLevel = function () {
						return M;
					}),
					(i.unstable_next = function (_) {
						switch (M) {
							case 1:
							case 2:
							case 3:
								var V = 3;
								break;
							default:
								V = M;
						}
						var P = M;
						M = V;
						try {
							return _();
						} finally {
							M = P;
						}
					}),
					(i.unstable_requestPaint = function () {
						$ = !0;
					}),
					(i.unstable_runWithPriority = function (_, V) {
						switch (_) {
							case 1:
							case 2:
							case 3:
							case 4:
							case 5:
								break;
							default:
								_ = 3;
						}
						var P = M;
						M = _;
						try {
							return V();
						} finally {
							M = P;
						}
					}),
					(i.unstable_scheduleCallback = function (_, V, P) {
						var be = i.unstable_now();
						switch (
							(typeof P == 'object' && P !== null
								? ((P = P.delay),
								  (P = typeof P == 'number' && 0 < P ? be + P : be))
								: (P = be),
							_)
						) {
							case 1:
								var p = -1;
								break;
							case 2:
								p = 250;
								break;
							case 5:
								p = 1073741823;
								break;
							case 4:
								p = 1e4;
								break;
							default:
								p = 5e3;
						}
						return (
							(p = P + p),
							(_ = {
								id: R++,
								callback: V,
								priorityLevel: _,
								startTime: P,
								expirationTime: p,
								sortIndex: -1,
							}),
							P > be
								? ((_.sortIndex = P),
								  r(m, _),
								  f(v) === null &&
										_ === f(m) &&
										(Z ? (ue(ye), (ye = -1)) : (Z = !0), He(W, P - be)))
								: ((_.sortIndex = p),
								  r(v, _),
								  w || B || ((w = !0), x || ((x = !0), Ke()))),
							_
						);
					}),
					(i.unstable_shouldYield = Ve),
					(i.unstable_wrapCallback = function (_) {
						var V = M;
						return function () {
							var P = M;
							M = V;
							try {
								return _.apply(this, arguments);
							} finally {
								M = P;
							}
						};
					});
			})(Sf)),
		Sf
	);
}
var Oh;
function qy() {
	return Oh || ((Oh = 1), (bf.exports = By())), bf.exports;
}
var Ef = { exports: {} },
	pt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _h;
function Yy() {
	if (_h) return pt;
	_h = 1;
	var i = Cf();
	function r(v) {
		var m = 'https://react.dev/errors/' + v;
		if (1 < arguments.length) {
			m += '?args[]=' + encodeURIComponent(arguments[1]);
			for (var R = 2; R < arguments.length; R++)
				m += '&args[]=' + encodeURIComponent(arguments[R]);
		}
		return (
			'Minified React error #' +
			v +
			'; visit ' +
			m +
			' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
		);
	}
	function f() {}
	var o = {
			d: {
				f,
				r: function () {
					throw Error(r(522));
				},
				D: f,
				C: f,
				L: f,
				m: f,
				X: f,
				S: f,
				M: f,
			},
			p: 0,
			findDOMNode: null,
		},
		s = Symbol.for('react.portal');
	function h(v, m, R) {
		var N =
			3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: s,
			key: N == null ? null : '' + N,
			children: v,
			containerInfo: m,
			implementation: R,
		};
	}
	var y = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function b(v, m) {
		if (v === 'font') return '';
		if (typeof m == 'string') return m === 'use-credentials' ? m : '';
	}
	return (
		(pt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
		(pt.createPortal = function (v, m) {
			var R =
				2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
			if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11))
				throw Error(r(299));
			return h(v, m, null, R);
		}),
		(pt.flushSync = function (v) {
			var m = y.T,
				R = o.p;
			try {
				if (((y.T = null), (o.p = 2), v)) return v();
			} finally {
				(y.T = m), (o.p = R), o.d.f();
			}
		}),
		(pt.preconnect = function (v, m) {
			typeof v == 'string' &&
				(m
					? ((m = m.crossOrigin),
					  (m =
							typeof m == 'string'
								? m === 'use-credentials'
									? m
									: ''
								: void 0))
					: (m = null),
				o.d.C(v, m));
		}),
		(pt.prefetchDNS = function (v) {
			typeof v == 'string' && o.d.D(v);
		}),
		(pt.preinit = function (v, m) {
			if (typeof v == 'string' && m && typeof m.as == 'string') {
				var R = m.as,
					N = b(R, m.crossOrigin),
					M = typeof m.integrity == 'string' ? m.integrity : void 0,
					B = typeof m.fetchPriority == 'string' ? m.fetchPriority : void 0;
				R === 'style'
					? o.d.S(v, typeof m.precedence == 'string' ? m.precedence : void 0, {
							crossOrigin: N,
							integrity: M,
							fetchPriority: B,
					  })
					: R === 'script' &&
					  o.d.X(v, {
							crossOrigin: N,
							integrity: M,
							fetchPriority: B,
							nonce: typeof m.nonce == 'string' ? m.nonce : void 0,
					  });
			}
		}),
		(pt.preinitModule = function (v, m) {
			if (typeof v == 'string')
				if (typeof m == 'object' && m !== null) {
					if (m.as == null || m.as === 'script') {
						var R = b(m.as, m.crossOrigin);
						o.d.M(v, {
							crossOrigin: R,
							integrity: typeof m.integrity == 'string' ? m.integrity : void 0,
							nonce: typeof m.nonce == 'string' ? m.nonce : void 0,
						});
					}
				} else m == null && o.d.M(v);
		}),
		(pt.preload = function (v, m) {
			if (
				typeof v == 'string' &&
				typeof m == 'object' &&
				m !== null &&
				typeof m.as == 'string'
			) {
				var R = m.as,
					N = b(R, m.crossOrigin);
				o.d.L(v, R, {
					crossOrigin: N,
					integrity: typeof m.integrity == 'string' ? m.integrity : void 0,
					nonce: typeof m.nonce == 'string' ? m.nonce : void 0,
					type: typeof m.type == 'string' ? m.type : void 0,
					fetchPriority:
						typeof m.fetchPriority == 'string' ? m.fetchPriority : void 0,
					referrerPolicy:
						typeof m.referrerPolicy == 'string' ? m.referrerPolicy : void 0,
					imageSrcSet:
						typeof m.imageSrcSet == 'string' ? m.imageSrcSet : void 0,
					imageSizes: typeof m.imageSizes == 'string' ? m.imageSizes : void 0,
					media: typeof m.media == 'string' ? m.media : void 0,
				});
			}
		}),
		(pt.preloadModule = function (v, m) {
			if (typeof v == 'string')
				if (m) {
					var R = b(m.as, m.crossOrigin);
					o.d.m(v, {
						as: typeof m.as == 'string' && m.as !== 'script' ? m.as : void 0,
						crossOrigin: R,
						integrity: typeof m.integrity == 'string' ? m.integrity : void 0,
					});
				} else o.d.m(v);
		}),
		(pt.requestFormReset = function (v) {
			o.d.r(v);
		}),
		(pt.unstable_batchedUpdates = function (v, m) {
			return v(m);
		}),
		(pt.useFormState = function (v, m, R) {
			return y.H.useFormState(v, m, R);
		}),
		(pt.useFormStatus = function () {
			return y.H.useHostTransitionStatus();
		}),
		(pt.version = '19.1.0'),
		pt
	);
}
var Uh;
function jy() {
	if (Uh) return Ef.exports;
	Uh = 1;
	function i() {
		if (
			!(
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
			)
		)
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
			} catch (r) {
				console.error(r);
			}
	}
	return i(), (Ef.exports = Yy()), Ef.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xh;
function Gy() {
	if (xh) return Tu;
	xh = 1;
	var i = qy(),
		r = Cf(),
		f = jy();
	function o(e) {
		var t = 'https://react.dev/errors/' + e;
		if (1 < arguments.length) {
			t += '?args[]=' + encodeURIComponent(arguments[1]);
			for (var l = 2; l < arguments.length; l++)
				t += '&args[]=' + encodeURIComponent(arguments[l]);
		}
		return (
			'Minified React error #' +
			e +
			'; visit ' +
			t +
			' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
		);
	}
	function s(e) {
		return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
	}
	function h(e) {
		var t = e,
			l = e;
		if (e.alternate) for (; t.return; ) t = t.return;
		else {
			e = t;
			do (t = e), (t.flags & 4098) !== 0 && (l = t.return), (e = t.return);
			while (e);
		}
		return t.tag === 3 ? l : null;
	}
	function y(e) {
		if (e.tag === 13) {
			var t = e.memoizedState;
			if (
				(t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
				t !== null)
			)
				return t.dehydrated;
		}
		return null;
	}
	function b(e) {
		if (h(e) !== e) throw Error(o(188));
	}
	function v(e) {
		var t = e.alternate;
		if (!t) {
			if (((t = h(e)), t === null)) throw Error(o(188));
			return t !== e ? null : e;
		}
		for (var l = e, a = t; ; ) {
			var n = l.return;
			if (n === null) break;
			var u = n.alternate;
			if (u === null) {
				if (((a = n.return), a !== null)) {
					l = a;
					continue;
				}
				break;
			}
			if (n.child === u.child) {
				for (u = n.child; u; ) {
					if (u === l) return b(n), e;
					if (u === a) return b(n), t;
					u = u.sibling;
				}
				throw Error(o(188));
			}
			if (l.return !== a.return) (l = n), (a = u);
			else {
				for (var c = !1, d = n.child; d; ) {
					if (d === l) {
						(c = !0), (l = n), (a = u);
						break;
					}
					if (d === a) {
						(c = !0), (a = n), (l = u);
						break;
					}
					d = d.sibling;
				}
				if (!c) {
					for (d = u.child; d; ) {
						if (d === l) {
							(c = !0), (l = u), (a = n);
							break;
						}
						if (d === a) {
							(c = !0), (a = u), (l = n);
							break;
						}
						d = d.sibling;
					}
					if (!c) throw Error(o(189));
				}
			}
			if (l.alternate !== a) throw Error(o(190));
		}
		if (l.tag !== 3) throw Error(o(188));
		return l.stateNode.current === l ? e : t;
	}
	function m(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e;
		for (e = e.child; e !== null; ) {
			if (((t = m(e)), t !== null)) return t;
			e = e.sibling;
		}
		return null;
	}
	var R = Object.assign,
		N = Symbol.for('react.element'),
		M = Symbol.for('react.transitional.element'),
		B = Symbol.for('react.portal'),
		w = Symbol.for('react.fragment'),
		Z = Symbol.for('react.strict_mode'),
		$ = Symbol.for('react.profiler'),
		q = Symbol.for('react.provider'),
		ue = Symbol.for('react.consumer'),
		k = Symbol.for('react.context'),
		he = Symbol.for('react.forward_ref'),
		W = Symbol.for('react.suspense'),
		x = Symbol.for('react.suspense_list'),
		ye = Symbol.for('react.memo'),
		pe = Symbol.for('react.lazy'),
		me = Symbol.for('react.activity'),
		Ve = Symbol.for('react.memo_cache_sentinel'),
		et = Symbol.iterator;
	function Ke(e) {
		return e === null || typeof e != 'object'
			? null
			: ((e = (et && e[et]) || e['@@iterator']),
			  typeof e == 'function' ? e : null);
	}
	var Ue = Symbol.for('react.client.reference');
	function Ne(e) {
		if (e == null) return null;
		if (typeof e == 'function')
			return e.$$typeof === Ue ? null : e.displayName || e.name || null;
		if (typeof e == 'string') return e;
		switch (e) {
			case w:
				return 'Fragment';
			case $:
				return 'Profiler';
			case Z:
				return 'StrictMode';
			case W:
				return 'Suspense';
			case x:
				return 'SuspenseList';
			case me:
				return 'Activity';
		}
		if (typeof e == 'object')
			switch (e.$$typeof) {
				case B:
					return 'Portal';
				case k:
					return (e.displayName || 'Context') + '.Provider';
				case ue:
					return (e._context.displayName || 'Context') + '.Consumer';
				case he:
					var t = e.render;
					return (
						(e = e.displayName),
						e ||
							((e = t.displayName || t.name || ''),
							(e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
						e
					);
				case ye:
					return (
						(t = e.displayName || null), t !== null ? t : Ne(e.type) || 'Memo'
					);
				case pe:
					(t = e._payload), (e = e._init);
					try {
						return Ne(e(t));
					} catch {}
			}
		return null;
	}
	var He = Array.isArray,
		_ = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
		V = f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
		P = { pending: !1, data: null, method: null, action: null },
		be = [],
		p = -1;
	function j(e) {
		return { current: e };
	}
	function J(e) {
		0 > p || ((e.current = be[p]), (be[p] = null), p--);
	}
	function K(e, t) {
		p++, (be[p] = e.current), (e.current = t);
	}
	var le = j(null),
		Te = j(null),
		ce = j(null),
		bt = j(null);
	function Xe(e, t) {
		switch ((K(ce, t), K(Te, e), K(le, null), t.nodeType)) {
			case 9:
			case 11:
				e = (e = t.documentElement) && (e = e.namespaceURI) ? Wd(e) : 0;
				break;
			default:
				if (((e = t.tagName), (t = t.namespaceURI)))
					(t = Wd(t)), (e = Fd(t, e));
				else
					switch (e) {
						case 'svg':
							e = 1;
							break;
						case 'math':
							e = 2;
							break;
						default:
							e = 0;
					}
		}
		J(le), K(le, e);
	}
	function ul() {
		J(le), J(Te), J(ce);
	}
	function it(e) {
		e.memoizedState !== null && K(bt, e);
		var t = le.current,
			l = Fd(t, e.type);
		t !== l && (K(Te, e), K(le, l));
	}
	function Ft(e) {
		Te.current === e && (J(le), J(Te)),
			bt.current === e && (J(bt), (gu._currentValue = P));
	}
	var qa = Object.prototype.hasOwnProperty,
		Mn = i.unstable_scheduleCallback,
		Pt = i.unstable_cancelCallback,
		cr = i.unstable_shouldYield,
		fr = i.unstable_requestPaint,
		_t = i.unstable_now,
		or = i.unstable_getCurrentPriorityLevel,
		Lu = i.unstable_ImmediatePriority,
		Bu = i.unstable_UserBlockingPriority,
		Ya = i.unstable_NormalPriority,
		vl = i.unstable_LowPriority,
		Nl = i.unstable_IdlePriority,
		qu = i.log,
		Dn = i.unstable_setDisableYieldValue,
		Rt = null,
		ke = null;
	function It(e) {
		if (
			(typeof qu == 'function' && Dn(e),
			ke && typeof ke.setStrictMode == 'function')
		)
			try {
				ke.setStrictMode(Rt, e);
			} catch {}
	}
	var dt = Math.clz32 ? Math.clz32 : Yu,
		sr = Math.log,
		il = Math.LN2;
	function Yu(e) {
		return (e >>>= 0), e === 0 ? 32 : (31 - ((sr(e) / il) | 0)) | 0;
	}
	var sa = 256,
		da = 4194304;
	function yl(e) {
		var t = e & 42;
		if (t !== 0) return t;
		switch (e & -e) {
			case 1:
				return 1;
			case 2:
				return 2;
			case 4:
				return 4;
			case 8:
				return 8;
			case 16:
				return 16;
			case 32:
				return 32;
			case 64:
				return 64;
			case 128:
				return 128;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
				return e & 4194048;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				return e & 62914560;
			case 67108864:
				return 67108864;
			case 134217728:
				return 134217728;
			case 268435456:
				return 268435456;
			case 536870912:
				return 536870912;
			case 1073741824:
				return 0;
			default:
				return e;
		}
	}
	function ha(e, t, l) {
		var a = e.pendingLanes;
		if (a === 0) return 0;
		var n = 0,
			u = e.suspendedLanes,
			c = e.pingedLanes;
		e = e.warmLanes;
		var d = a & 134217727;
		return (
			d !== 0
				? ((a = d & ~u),
				  a !== 0
						? (n = yl(a))
						: ((c &= d),
						  c !== 0
								? (n = yl(c))
								: l || ((l = d & ~e), l !== 0 && (n = yl(l)))))
				: ((d = a & ~u),
				  d !== 0
						? (n = yl(d))
						: c !== 0
						? (n = yl(c))
						: l || ((l = a & ~e), l !== 0 && (n = yl(l)))),
			n === 0
				? 0
				: t !== 0 &&
				  t !== n &&
				  (t & u) === 0 &&
				  ((u = n & -n),
				  (l = t & -t),
				  u >= l || (u === 32 && (l & 4194048) !== 0))
				? t
				: n
		);
	}
	function rl(e, t) {
		return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
	}
	function ju(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 4:
			case 8:
			case 64:
				return t + 250;
			case 16:
			case 32:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
				return t + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				return -1;
			case 67108864:
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824:
				return -1;
			default:
				return -1;
		}
	}
	function ja() {
		var e = sa;
		return (sa <<= 1), (sa & 4194048) === 0 && (sa = 256), e;
	}
	function Gu() {
		var e = da;
		return (da <<= 1), (da & 62914560) === 0 && (da = 4194304), e;
	}
	function Ga(e) {
		for (var t = [], l = 0; 31 > l; l++) t.push(e);
		return t;
	}
	function ma(e, t) {
		(e.pendingLanes |= t),
			t !== 268435456 &&
				((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
	}
	function Xu(e, t, l, a, n, u) {
		var c = e.pendingLanes;
		(e.pendingLanes = l),
			(e.suspendedLanes = 0),
			(e.pingedLanes = 0),
			(e.warmLanes = 0),
			(e.expiredLanes &= l),
			(e.entangledLanes &= l),
			(e.errorRecoveryDisabledLanes &= l),
			(e.shellSuspendCounter = 0);
		var d = e.entanglements,
			g = e.expirationTimes,
			z = e.hiddenUpdates;
		for (l = c & ~l; 0 < l; ) {
			var L = 31 - dt(l),
				G = 1 << L;
			(d[L] = 0), (g[L] = -1);
			var O = z[L];
			if (O !== null)
				for (z[L] = null, L = 0; L < O.length; L++) {
					var U = O[L];
					U !== null && (U.lane &= -536870913);
				}
			l &= ~G;
		}
		a !== 0 && va(e, a, 0),
			u !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(c & ~t));
	}
	function va(e, t, l) {
		(e.pendingLanes |= t), (e.suspendedLanes &= ~t);
		var a = 31 - dt(t);
		(e.entangledLanes |= t),
			(e.entanglements[a] = e.entanglements[a] | 1073741824 | (l & 4194090));
	}
	function ya(e, t) {
		var l = (e.entangledLanes |= t);
		for (e = e.entanglements; l; ) {
			var a = 31 - dt(l),
				n = 1 << a;
			(n & t) | (e[a] & t) && (e[a] |= t), (l &= ~n);
		}
	}
	function An(e) {
		switch (e) {
			case 2:
				e = 1;
				break;
			case 8:
				e = 4;
				break;
			case 32:
				e = 16;
				break;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				e = 128;
				break;
			case 268435456:
				e = 134217728;
				break;
			default:
				e = 0;
		}
		return e;
	}
	function zn(e) {
		return (
			(e &= -e),
			2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
		);
	}
	function S() {
		var e = V.p;
		return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : yh(e.type));
	}
	function D(e, t) {
		var l = V.p;
		try {
			return (V.p = e), t();
		} finally {
			V.p = l;
		}
	}
	var C = Math.random().toString(36).slice(2),
		X = '__reactFiber$' + C,
		Q = '__reactProps$' + C,
		ee = '__reactContainer$' + C,
		ie = '__reactEvents$' + C,
		F = '__reactListeners$' + C,
		ne = '__reactHandles$' + C,
		te = '__reactResources$' + C,
		oe = '__reactMarker$' + C;
	function se(e) {
		delete e[X], delete e[Q], delete e[ie], delete e[F], delete e[ne];
	}
	function ve(e) {
		var t = e[X];
		if (t) return t;
		for (var l = e.parentNode; l; ) {
			if ((t = l[ee] || l[X])) {
				if (
					((l = t.alternate),
					t.child !== null || (l !== null && l.child !== null))
				)
					for (e = th(e); e !== null; ) {
						if ((l = e[X])) return l;
						e = th(e);
					}
				return t;
			}
			(e = l), (l = e.parentNode);
		}
		return null;
	}
	function _e(e) {
		if ((e = e[X] || e[ee])) {
			var t = e.tag;
			if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
				return e;
		}
		return null;
	}
	function Ze(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
		throw Error(o(33));
	}
	function We(e) {
		var t = e[te];
		return (
			t ||
				(t = e[te] =
					{ hoistableStyles: new Map(), hoistableScripts: new Map() }),
			t
		);
	}
	function xe(e) {
		e[oe] = !0;
	}
	var ze = new Set(),
		wl = {};
	function St(e, t) {
		Yt(e, t), Yt(e + 'Capture', t);
	}
	function Yt(e, t) {
		for (wl[e] = t, e = 0; e < t.length; e++) ze.add(t[e]);
	}
	var Tt = RegExp(
			'^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
		),
		Hl = {},
		Ll = {};
	function On(e) {
		return qa.call(Ll, e)
			? !0
			: qa.call(Hl, e)
			? !1
			: Tt.test(e)
			? (Ll[e] = !0)
			: ((Hl[e] = !0), !1);
	}
	function jt(e, t, l) {
		if (On(t))
			if (l === null) e.removeAttribute(t);
			else {
				switch (typeof l) {
					case 'undefined':
					case 'function':
					case 'symbol':
						e.removeAttribute(t);
						return;
					case 'boolean':
						var a = t.toLowerCase().slice(0, 5);
						if (a !== 'data-' && a !== 'aria-') {
							e.removeAttribute(t);
							return;
						}
				}
				e.setAttribute(t, '' + l);
			}
	}
	function gl(e, t, l) {
		if (l === null) e.removeAttribute(t);
		else {
			switch (typeof l) {
				case 'undefined':
				case 'function':
				case 'symbol':
				case 'boolean':
					e.removeAttribute(t);
					return;
			}
			e.setAttribute(t, '' + l);
		}
	}
	function Ee(e, t, l, a) {
		if (a === null) e.removeAttribute(l);
		else {
			switch (typeof a) {
				case 'undefined':
				case 'function':
				case 'symbol':
				case 'boolean':
					e.removeAttribute(l);
					return;
			}
			e.setAttributeNS(t, l, '' + a);
		}
	}
	var yt, el;
	function tl(e) {
		if (yt === void 0)
			try {
				throw Error();
			} catch (l) {
				var t = l.stack.trim().match(/\n( *(at )?)/);
				(yt = (t && t[1]) || ''),
					(el =
						-1 <
						l.stack.indexOf(`
    at`)
							? ' (<anonymous>)'
							: -1 < l.stack.indexOf('@')
							? '@unknown:0:0'
							: '');
			}
		return (
			`
` +
			yt +
			e +
			el
		);
	}
	var ga = !1;
	function Je(e, t) {
		if (!e || ga) return '';
		ga = !0;
		var l = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var a = {
				DetermineComponentFrameRoot: function () {
					try {
						if (t) {
							var G = function () {
								throw Error();
							};
							if (
								(Object.defineProperty(G.prototype, 'props', {
									set: function () {
										throw Error();
									},
								}),
								typeof Reflect == 'object' && Reflect.construct)
							) {
								try {
									Reflect.construct(G, []);
								} catch (U) {
									var O = U;
								}
								Reflect.construct(e, [], G);
							} else {
								try {
									G.call();
								} catch (U) {
									O = U;
								}
								e.call(G.prototype);
							}
						} else {
							try {
								throw Error();
							} catch (U) {
								O = U;
							}
							(G = e()) &&
								typeof G.catch == 'function' &&
								G.catch(function () {});
						}
					} catch (U) {
						if (U && O && typeof U.stack == 'string') return [U.stack, O.stack];
					}
					return [null, null];
				},
			};
			a.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
			var n = Object.getOwnPropertyDescriptor(
				a.DetermineComponentFrameRoot,
				'name'
			);
			n &&
				n.configurable &&
				Object.defineProperty(a.DetermineComponentFrameRoot, 'name', {
					value: 'DetermineComponentFrameRoot',
				});
			var u = a.DetermineComponentFrameRoot(),
				c = u[0],
				d = u[1];
			if (c && d) {
				var g = c.split(`
`),
					z = d.split(`
`);
				for (
					n = a = 0;
					a < g.length && !g[a].includes('DetermineComponentFrameRoot');

				)
					a++;
				for (; n < z.length && !z[n].includes('DetermineComponentFrameRoot'); )
					n++;
				if (a === g.length || n === z.length)
					for (
						a = g.length - 1, n = z.length - 1;
						1 <= a && 0 <= n && g[a] !== z[n];

					)
						n--;
				for (; 1 <= a && 0 <= n; a--, n--)
					if (g[a] !== z[n]) {
						if (a !== 1 || n !== 1)
							do
								if ((a--, n--, 0 > n || g[a] !== z[n])) {
									var L =
										`
` + g[a].replace(' at new ', ' at ');
									return (
										e.displayName &&
											L.includes('<anonymous>') &&
											(L = L.replace('<anonymous>', e.displayName)),
										L
									);
								}
							while (1 <= a && 0 <= n);
						break;
					}
			}
		} finally {
			(ga = !1), (Error.prepareStackTrace = l);
		}
		return (l = e ? e.displayName || e.name : '') ? tl(l) : '';
	}
	function Bl(e) {
		switch (e.tag) {
			case 26:
			case 27:
			case 5:
				return tl(e.type);
			case 16:
				return tl('Lazy');
			case 13:
				return tl('Suspense');
			case 19:
				return tl('SuspenseList');
			case 0:
			case 15:
				return Je(e.type, !1);
			case 11:
				return Je(e.type.render, !1);
			case 1:
				return Je(e.type, !0);
			case 31:
				return tl('Activity');
			default:
				return '';
		}
	}
	function _n(e) {
		try {
			var t = '';
			do (t += Bl(e)), (e = e.return);
			while (e);
			return t;
		} catch (l) {
			return (
				`
Error generating stack: ` +
				l.message +
				`
` +
				l.stack
			);
		}
	}
	function Mt(e) {
		switch (typeof e) {
			case 'bigint':
			case 'boolean':
			case 'number':
			case 'string':
			case 'undefined':
				return e;
			case 'object':
				return e;
			default:
				return '';
		}
	}
	function Vf(e) {
		var t = e.type;
		return (
			(e = e.nodeName) &&
			e.toLowerCase() === 'input' &&
			(t === 'checkbox' || t === 'radio')
		);
	}
	function Am(e) {
		var t = Vf(e) ? 'checked' : 'value',
			l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
			a = '' + e[t];
		if (
			!e.hasOwnProperty(t) &&
			typeof l < 'u' &&
			typeof l.get == 'function' &&
			typeof l.set == 'function'
		) {
			var n = l.get,
				u = l.set;
			return (
				Object.defineProperty(e, t, {
					configurable: !0,
					get: function () {
						return n.call(this);
					},
					set: function (c) {
						(a = '' + c), u.call(this, c);
					},
				}),
				Object.defineProperty(e, t, { enumerable: l.enumerable }),
				{
					getValue: function () {
						return a;
					},
					setValue: function (c) {
						a = '' + c;
					},
					stopTracking: function () {
						(e._valueTracker = null), delete e[t];
					},
				}
			);
		}
	}
	function Qu(e) {
		e._valueTracker || (e._valueTracker = Am(e));
	}
	function Zf(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var l = t.getValue(),
			a = '';
		return (
			e && (a = Vf(e) ? (e.checked ? 'true' : 'false') : e.value),
			(e = a),
			e !== l ? (t.setValue(e), !0) : !1
		);
	}
	function Vu(e) {
		if (
			((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')
		)
			return null;
		try {
			return e.activeElement || e.body;
		} catch {
			return e.body;
		}
	}
	var zm = /[\n"\\]/g;
	function Gt(e) {
		return e.replace(zm, function (t) {
			return '\\' + t.charCodeAt(0).toString(16) + ' ';
		});
	}
	function dr(e, t, l, a, n, u, c, d) {
		(e.name = ''),
			c != null &&
			typeof c != 'function' &&
			typeof c != 'symbol' &&
			typeof c != 'boolean'
				? (e.type = c)
				: e.removeAttribute('type'),
			t != null
				? c === 'number'
					? ((t === 0 && e.value === '') || e.value != t) &&
					  (e.value = '' + Mt(t))
					: e.value !== '' + Mt(t) && (e.value = '' + Mt(t))
				: (c !== 'submit' && c !== 'reset') || e.removeAttribute('value'),
			t != null
				? hr(e, c, Mt(t))
				: l != null
				? hr(e, c, Mt(l))
				: a != null && e.removeAttribute('value'),
			n == null && u != null && (e.defaultChecked = !!u),
			n != null &&
				(e.checked = n && typeof n != 'function' && typeof n != 'symbol'),
			d != null &&
			typeof d != 'function' &&
			typeof d != 'symbol' &&
			typeof d != 'boolean'
				? (e.name = '' + Mt(d))
				: e.removeAttribute('name');
	}
	function Kf(e, t, l, a, n, u, c, d) {
		if (
			(u != null &&
				typeof u != 'function' &&
				typeof u != 'symbol' &&
				typeof u != 'boolean' &&
				(e.type = u),
			t != null || l != null)
		) {
			if (!((u !== 'submit' && u !== 'reset') || t != null)) return;
			(l = l != null ? '' + Mt(l) : ''),
				(t = t != null ? '' + Mt(t) : l),
				d || t === e.value || (e.value = t),
				(e.defaultValue = t);
		}
		(a = a ?? n),
			(a = typeof a != 'function' && typeof a != 'symbol' && !!a),
			(e.checked = d ? e.checked : !!a),
			(e.defaultChecked = !!a),
			c != null &&
				typeof c != 'function' &&
				typeof c != 'symbol' &&
				typeof c != 'boolean' &&
				(e.name = c);
	}
	function hr(e, t, l) {
		(t === 'number' && Vu(e.ownerDocument) === e) ||
			e.defaultValue === '' + l ||
			(e.defaultValue = '' + l);
	}
	function Xa(e, t, l, a) {
		if (((e = e.options), t)) {
			t = {};
			for (var n = 0; n < l.length; n++) t['$' + l[n]] = !0;
			for (l = 0; l < e.length; l++)
				(n = t.hasOwnProperty('$' + e[l].value)),
					e[l].selected !== n && (e[l].selected = n),
					n && a && (e[l].defaultSelected = !0);
		} else {
			for (l = '' + Mt(l), t = null, n = 0; n < e.length; n++) {
				if (e[n].value === l) {
					(e[n].selected = !0), a && (e[n].defaultSelected = !0);
					return;
				}
				t !== null || e[n].disabled || (t = e[n]);
			}
			t !== null && (t.selected = !0);
		}
	}
	function Jf(e, t, l) {
		if (
			t != null &&
			((t = '' + Mt(t)), t !== e.value && (e.value = t), l == null)
		) {
			e.defaultValue !== t && (e.defaultValue = t);
			return;
		}
		e.defaultValue = l != null ? '' + Mt(l) : '';
	}
	function $f(e, t, l, a) {
		if (t == null) {
			if (a != null) {
				if (l != null) throw Error(o(92));
				if (He(a)) {
					if (1 < a.length) throw Error(o(93));
					a = a[0];
				}
				l = a;
			}
			l == null && (l = ''), (t = l);
		}
		(l = Mt(t)),
			(e.defaultValue = l),
			(a = e.textContent),
			a === l && a !== '' && a !== null && (e.value = a);
	}
	function Qa(e, t) {
		if (t) {
			var l = e.firstChild;
			if (l && l === e.lastChild && l.nodeType === 3) {
				l.nodeValue = t;
				return;
			}
		}
		e.textContent = t;
	}
	var Om = new Set(
		'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
			' '
		)
	);
	function kf(e, t, l) {
		var a = t.indexOf('--') === 0;
		l == null || typeof l == 'boolean' || l === ''
			? a
				? e.setProperty(t, '')
				: t === 'float'
				? (e.cssFloat = '')
				: (e[t] = '')
			: a
			? e.setProperty(t, l)
			: typeof l != 'number' || l === 0 || Om.has(t)
			? t === 'float'
				? (e.cssFloat = l)
				: (e[t] = ('' + l).trim())
			: (e[t] = l + 'px');
	}
	function Wf(e, t, l) {
		if (t != null && typeof t != 'object') throw Error(o(62));
		if (((e = e.style), l != null)) {
			for (var a in l)
				!l.hasOwnProperty(a) ||
					(t != null && t.hasOwnProperty(a)) ||
					(a.indexOf('--') === 0
						? e.setProperty(a, '')
						: a === 'float'
						? (e.cssFloat = '')
						: (e[a] = ''));
			for (var n in t)
				(a = t[n]), t.hasOwnProperty(n) && l[n] !== a && kf(e, n, a);
		} else for (var u in t) t.hasOwnProperty(u) && kf(e, u, t[u]);
	}
	function mr(e) {
		if (e.indexOf('-') === -1) return !1;
		switch (e) {
			case 'annotation-xml':
			case 'color-profile':
			case 'font-face':
			case 'font-face-src':
			case 'font-face-uri':
			case 'font-face-format':
			case 'font-face-name':
			case 'missing-glyph':
				return !1;
			default:
				return !0;
		}
	}
	var _m = new Map([
			['acceptCharset', 'accept-charset'],
			['htmlFor', 'for'],
			['httpEquiv', 'http-equiv'],
			['crossOrigin', 'crossorigin'],
			['accentHeight', 'accent-height'],
			['alignmentBaseline', 'alignment-baseline'],
			['arabicForm', 'arabic-form'],
			['baselineShift', 'baseline-shift'],
			['capHeight', 'cap-height'],
			['clipPath', 'clip-path'],
			['clipRule', 'clip-rule'],
			['colorInterpolation', 'color-interpolation'],
			['colorInterpolationFilters', 'color-interpolation-filters'],
			['colorProfile', 'color-profile'],
			['colorRendering', 'color-rendering'],
			['dominantBaseline', 'dominant-baseline'],
			['enableBackground', 'enable-background'],
			['fillOpacity', 'fill-opacity'],
			['fillRule', 'fill-rule'],
			['floodColor', 'flood-color'],
			['floodOpacity', 'flood-opacity'],
			['fontFamily', 'font-family'],
			['fontSize', 'font-size'],
			['fontSizeAdjust', 'font-size-adjust'],
			['fontStretch', 'font-stretch'],
			['fontStyle', 'font-style'],
			['fontVariant', 'font-variant'],
			['fontWeight', 'font-weight'],
			['glyphName', 'glyph-name'],
			['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
			['glyphOrientationVertical', 'glyph-orientation-vertical'],
			['horizAdvX', 'horiz-adv-x'],
			['horizOriginX', 'horiz-origin-x'],
			['imageRendering', 'image-rendering'],
			['letterSpacing', 'letter-spacing'],
			['lightingColor', 'lighting-color'],
			['markerEnd', 'marker-end'],
			['markerMid', 'marker-mid'],
			['markerStart', 'marker-start'],
			['overlinePosition', 'overline-position'],
			['overlineThickness', 'overline-thickness'],
			['paintOrder', 'paint-order'],
			['panose-1', 'panose-1'],
			['pointerEvents', 'pointer-events'],
			['renderingIntent', 'rendering-intent'],
			['shapeRendering', 'shape-rendering'],
			['stopColor', 'stop-color'],
			['stopOpacity', 'stop-opacity'],
			['strikethroughPosition', 'strikethrough-position'],
			['strikethroughThickness', 'strikethrough-thickness'],
			['strokeDasharray', 'stroke-dasharray'],
			['strokeDashoffset', 'stroke-dashoffset'],
			['strokeLinecap', 'stroke-linecap'],
			['strokeLinejoin', 'stroke-linejoin'],
			['strokeMiterlimit', 'stroke-miterlimit'],
			['strokeOpacity', 'stroke-opacity'],
			['strokeWidth', 'stroke-width'],
			['textAnchor', 'text-anchor'],
			['textDecoration', 'text-decoration'],
			['textRendering', 'text-rendering'],
			['transformOrigin', 'transform-origin'],
			['underlinePosition', 'underline-position'],
			['underlineThickness', 'underline-thickness'],
			['unicodeBidi', 'unicode-bidi'],
			['unicodeRange', 'unicode-range'],
			['unitsPerEm', 'units-per-em'],
			['vAlphabetic', 'v-alphabetic'],
			['vHanging', 'v-hanging'],
			['vIdeographic', 'v-ideographic'],
			['vMathematical', 'v-mathematical'],
			['vectorEffect', 'vector-effect'],
			['vertAdvY', 'vert-adv-y'],
			['vertOriginX', 'vert-origin-x'],
			['vertOriginY', 'vert-origin-y'],
			['wordSpacing', 'word-spacing'],
			['writingMode', 'writing-mode'],
			['xmlnsXlink', 'xmlns:xlink'],
			['xHeight', 'x-height'],
		]),
		Um =
			/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function Zu(e) {
		return Um.test('' + e)
			? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
			: e;
	}
	var vr = null;
	function yr(e) {
		return (
			(e = e.target || e.srcElement || window),
			e.correspondingUseElement && (e = e.correspondingUseElement),
			e.nodeType === 3 ? e.parentNode : e
		);
	}
	var Va = null,
		Za = null;
	function Ff(e) {
		var t = _e(e);
		if (t && (e = t.stateNode)) {
			var l = e[Q] || null;
			e: switch (((e = t.stateNode), t.type)) {
				case 'input':
					if (
						(dr(
							e,
							l.value,
							l.defaultValue,
							l.defaultValue,
							l.checked,
							l.defaultChecked,
							l.type,
							l.name
						),
						(t = l.name),
						l.type === 'radio' && t != null)
					) {
						for (l = e; l.parentNode; ) l = l.parentNode;
						for (
							l = l.querySelectorAll(
								'input[name="' + Gt('' + t) + '"][type="radio"]'
							),
								t = 0;
							t < l.length;
							t++
						) {
							var a = l[t];
							if (a !== e && a.form === e.form) {
								var n = a[Q] || null;
								if (!n) throw Error(o(90));
								dr(
									a,
									n.value,
									n.defaultValue,
									n.defaultValue,
									n.checked,
									n.defaultChecked,
									n.type,
									n.name
								);
							}
						}
						for (t = 0; t < l.length; t++)
							(a = l[t]), a.form === e.form && Zf(a);
					}
					break e;
				case 'textarea':
					Jf(e, l.value, l.defaultValue);
					break e;
				case 'select':
					(t = l.value), t != null && Xa(e, !!l.multiple, t, !1);
			}
		}
	}
	var gr = !1;
	function Pf(e, t, l) {
		if (gr) return e(t, l);
		gr = !0;
		try {
			var a = e(t);
			return a;
		} finally {
			if (
				((gr = !1),
				(Va !== null || Za !== null) &&
					(Ui(), Va && ((t = Va), (e = Za), (Za = Va = null), Ff(t), e)))
			)
				for (t = 0; t < e.length; t++) Ff(e[t]);
		}
	}
	function Un(e, t) {
		var l = e.stateNode;
		if (l === null) return null;
		var a = l[Q] || null;
		if (a === null) return null;
		l = a[t];
		e: switch (t) {
			case 'onClick':
			case 'onClickCapture':
			case 'onDoubleClick':
			case 'onDoubleClickCapture':
			case 'onMouseDown':
			case 'onMouseDownCapture':
			case 'onMouseMove':
			case 'onMouseMoveCapture':
			case 'onMouseUp':
			case 'onMouseUpCapture':
			case 'onMouseEnter':
				(a = !a.disabled) ||
					((e = e.type),
					(a = !(
						e === 'button' ||
						e === 'input' ||
						e === 'select' ||
						e === 'textarea'
					))),
					(e = !a);
				break e;
			default:
				e = !1;
		}
		if (e) return null;
		if (l && typeof l != 'function') throw Error(o(231, t, typeof l));
		return l;
	}
	var pl = !(
			typeof window > 'u' ||
			typeof window.document > 'u' ||
			typeof window.document.createElement > 'u'
		),
		pr = !1;
	if (pl)
		try {
			var xn = {};
			Object.defineProperty(xn, 'passive', {
				get: function () {
					pr = !0;
				},
			}),
				window.addEventListener('test', xn, xn),
				window.removeEventListener('test', xn, xn);
		} catch {
			pr = !1;
		}
	var ql = null,
		br = null,
		Ku = null;
	function If() {
		if (Ku) return Ku;
		var e,
			t = br,
			l = t.length,
			a,
			n = 'value' in ql ? ql.value : ql.textContent,
			u = n.length;
		for (e = 0; e < l && t[e] === n[e]; e++);
		var c = l - e;
		for (a = 1; a <= c && t[l - a] === n[u - a]; a++);
		return (Ku = n.slice(e, 1 < a ? 1 - a : void 0));
	}
	function Ju(e) {
		var t = e.keyCode;
		return (
			'charCode' in e
				? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
				: (e = t),
			e === 10 && (e = 13),
			32 <= e || e === 13 ? e : 0
		);
	}
	function $u() {
		return !0;
	}
	function eo() {
		return !1;
	}
	function Dt(e) {
		function t(l, a, n, u, c) {
			(this._reactName = l),
				(this._targetInst = n),
				(this.type = a),
				(this.nativeEvent = u),
				(this.target = c),
				(this.currentTarget = null);
			for (var d in e)
				e.hasOwnProperty(d) && ((l = e[d]), (this[d] = l ? l(u) : u[d]));
			return (
				(this.isDefaultPrevented = (
					u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
				)
					? $u
					: eo),
				(this.isPropagationStopped = eo),
				this
			);
		}
		return (
			R(t.prototype, {
				preventDefault: function () {
					this.defaultPrevented = !0;
					var l = this.nativeEvent;
					l &&
						(l.preventDefault
							? l.preventDefault()
							: typeof l.returnValue != 'unknown' && (l.returnValue = !1),
						(this.isDefaultPrevented = $u));
				},
				stopPropagation: function () {
					var l = this.nativeEvent;
					l &&
						(l.stopPropagation
							? l.stopPropagation()
							: typeof l.cancelBubble != 'unknown' && (l.cancelBubble = !0),
						(this.isPropagationStopped = $u));
				},
				persist: function () {},
				isPersistent: $u,
			}),
			t
		);
	}
	var pa = {
			eventPhase: 0,
			bubbles: 0,
			cancelable: 0,
			timeStamp: function (e) {
				return e.timeStamp || Date.now();
			},
			defaultPrevented: 0,
			isTrusted: 0,
		},
		ku = Dt(pa),
		Cn = R({}, pa, { view: 0, detail: 0 }),
		xm = Dt(Cn),
		Sr,
		Er,
		Nn,
		Wu = R({}, Cn, {
			screenX: 0,
			screenY: 0,
			clientX: 0,
			clientY: 0,
			pageX: 0,
			pageY: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			getModifierState: Tr,
			button: 0,
			buttons: 0,
			relatedTarget: function (e) {
				return e.relatedTarget === void 0
					? e.fromElement === e.srcElement
						? e.toElement
						: e.fromElement
					: e.relatedTarget;
			},
			movementX: function (e) {
				return 'movementX' in e
					? e.movementX
					: (e !== Nn &&
							(Nn && e.type === 'mousemove'
								? ((Sr = e.screenX - Nn.screenX), (Er = e.screenY - Nn.screenY))
								: (Er = Sr = 0),
							(Nn = e)),
					  Sr);
			},
			movementY: function (e) {
				return 'movementY' in e ? e.movementY : Er;
			},
		}),
		to = Dt(Wu),
		Cm = R({}, Wu, { dataTransfer: 0 }),
		Nm = Dt(Cm),
		wm = R({}, Cn, { relatedTarget: 0 }),
		Rr = Dt(wm),
		Hm = R({}, pa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
		Lm = Dt(Hm),
		Bm = R({}, pa, {
			clipboardData: function (e) {
				return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
			},
		}),
		qm = Dt(Bm),
		Ym = R({}, pa, { data: 0 }),
		lo = Dt(Ym),
		jm = {
			Esc: 'Escape',
			Spacebar: ' ',
			Left: 'ArrowLeft',
			Up: 'ArrowUp',
			Right: 'ArrowRight',
			Down: 'ArrowDown',
			Del: 'Delete',
			Win: 'OS',
			Menu: 'ContextMenu',
			Apps: 'ContextMenu',
			Scroll: 'ScrollLock',
			MozPrintableKey: 'Unidentified',
		},
		Gm = {
			8: 'Backspace',
			9: 'Tab',
			12: 'Clear',
			13: 'Enter',
			16: 'Shift',
			17: 'Control',
			18: 'Alt',
			19: 'Pause',
			20: 'CapsLock',
			27: 'Escape',
			32: ' ',
			33: 'PageUp',
			34: 'PageDown',
			35: 'End',
			36: 'Home',
			37: 'ArrowLeft',
			38: 'ArrowUp',
			39: 'ArrowRight',
			40: 'ArrowDown',
			45: 'Insert',
			46: 'Delete',
			112: 'F1',
			113: 'F2',
			114: 'F3',
			115: 'F4',
			116: 'F5',
			117: 'F6',
			118: 'F7',
			119: 'F8',
			120: 'F9',
			121: 'F10',
			122: 'F11',
			123: 'F12',
			144: 'NumLock',
			145: 'ScrollLock',
			224: 'Meta',
		},
		Xm = {
			Alt: 'altKey',
			Control: 'ctrlKey',
			Meta: 'metaKey',
			Shift: 'shiftKey',
		};
	function Qm(e) {
		var t = this.nativeEvent;
		return t.getModifierState
			? t.getModifierState(e)
			: (e = Xm[e])
			? !!t[e]
			: !1;
	}
	function Tr() {
		return Qm;
	}
	var Vm = R({}, Cn, {
			key: function (e) {
				if (e.key) {
					var t = jm[e.key] || e.key;
					if (t !== 'Unidentified') return t;
				}
				return e.type === 'keypress'
					? ((e = Ju(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
					: e.type === 'keydown' || e.type === 'keyup'
					? Gm[e.keyCode] || 'Unidentified'
					: '';
			},
			code: 0,
			location: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			repeat: 0,
			locale: 0,
			getModifierState: Tr,
			charCode: function (e) {
				return e.type === 'keypress' ? Ju(e) : 0;
			},
			keyCode: function (e) {
				return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
			},
			which: function (e) {
				return e.type === 'keypress'
					? Ju(e)
					: e.type === 'keydown' || e.type === 'keyup'
					? e.keyCode
					: 0;
			},
		}),
		Zm = Dt(Vm),
		Km = R({}, Wu, {
			pointerId: 0,
			width: 0,
			height: 0,
			pressure: 0,
			tangentialPressure: 0,
			tiltX: 0,
			tiltY: 0,
			twist: 0,
			pointerType: 0,
			isPrimary: 0,
		}),
		ao = Dt(Km),
		Jm = R({}, Cn, {
			touches: 0,
			targetTouches: 0,
			changedTouches: 0,
			altKey: 0,
			metaKey: 0,
			ctrlKey: 0,
			shiftKey: 0,
			getModifierState: Tr,
		}),
		$m = Dt(Jm),
		km = R({}, pa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
		Wm = Dt(km),
		Fm = R({}, Wu, {
			deltaX: function (e) {
				return 'deltaX' in e
					? e.deltaX
					: 'wheelDeltaX' in e
					? -e.wheelDeltaX
					: 0;
			},
			deltaY: function (e) {
				return 'deltaY' in e
					? e.deltaY
					: 'wheelDeltaY' in e
					? -e.wheelDeltaY
					: 'wheelDelta' in e
					? -e.wheelDelta
					: 0;
			},
			deltaZ: 0,
			deltaMode: 0,
		}),
		Pm = Dt(Fm),
		Im = R({}, pa, { newState: 0, oldState: 0 }),
		ev = Dt(Im),
		tv = [9, 13, 27, 32],
		Mr = pl && 'CompositionEvent' in window,
		wn = null;
	pl && 'documentMode' in document && (wn = document.documentMode);
	var lv = pl && 'TextEvent' in window && !wn,
		no = pl && (!Mr || (wn && 8 < wn && 11 >= wn)),
		uo = ' ',
		io = !1;
	function ro(e, t) {
		switch (e) {
			case 'keyup':
				return tv.indexOf(t.keyCode) !== -1;
			case 'keydown':
				return t.keyCode !== 229;
			case 'keypress':
			case 'mousedown':
			case 'focusout':
				return !0;
			default:
				return !1;
		}
	}
	function co(e) {
		return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
	}
	var Ka = !1;
	function av(e, t) {
		switch (e) {
			case 'compositionend':
				return co(t);
			case 'keypress':
				return t.which !== 32 ? null : ((io = !0), uo);
			case 'textInput':
				return (e = t.data), e === uo && io ? null : e;
			default:
				return null;
		}
	}
	function nv(e, t) {
		if (Ka)
			return e === 'compositionend' || (!Mr && ro(e, t))
				? ((e = If()), (Ku = br = ql = null), (Ka = !1), e)
				: null;
		switch (e) {
			case 'paste':
				return null;
			case 'keypress':
				if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
					if (t.char && 1 < t.char.length) return t.char;
					if (t.which) return String.fromCharCode(t.which);
				}
				return null;
			case 'compositionend':
				return no && t.locale !== 'ko' ? null : t.data;
			default:
				return null;
		}
	}
	var uv = {
		color: !0,
		date: !0,
		datetime: !0,
		'datetime-local': !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0,
	};
	function fo(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t === 'input' ? !!uv[e.type] : t === 'textarea';
	}
	function oo(e, t, l, a) {
		Va ? (Za ? Za.push(a) : (Za = [a])) : (Va = a),
			(t = Li(t, 'onChange')),
			0 < t.length &&
				((l = new ku('onChange', 'change', null, l, a)),
				e.push({ event: l, listeners: t }));
	}
	var Hn = null,
		Ln = null;
	function iv(e) {
		Zd(e, 0);
	}
	function Fu(e) {
		var t = Ze(e);
		if (Zf(t)) return e;
	}
	function so(e, t) {
		if (e === 'change') return t;
	}
	var ho = !1;
	if (pl) {
		var Dr;
		if (pl) {
			var Ar = 'oninput' in document;
			if (!Ar) {
				var mo = document.createElement('div');
				mo.setAttribute('oninput', 'return;'),
					(Ar = typeof mo.oninput == 'function');
			}
			Dr = Ar;
		} else Dr = !1;
		ho = Dr && (!document.documentMode || 9 < document.documentMode);
	}
	function vo() {
		Hn && (Hn.detachEvent('onpropertychange', yo), (Ln = Hn = null));
	}
	function yo(e) {
		if (e.propertyName === 'value' && Fu(Ln)) {
			var t = [];
			oo(t, Ln, e, yr(e)), Pf(iv, t);
		}
	}
	function rv(e, t, l) {
		e === 'focusin'
			? (vo(), (Hn = t), (Ln = l), Hn.attachEvent('onpropertychange', yo))
			: e === 'focusout' && vo();
	}
	function cv(e) {
		if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
			return Fu(Ln);
	}
	function fv(e, t) {
		if (e === 'click') return Fu(t);
	}
	function ov(e, t) {
		if (e === 'input' || e === 'change') return Fu(t);
	}
	function sv(e, t) {
		return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
	}
	var Ut = typeof Object.is == 'function' ? Object.is : sv;
	function Bn(e, t) {
		if (Ut(e, t)) return !0;
		if (
			typeof e != 'object' ||
			e === null ||
			typeof t != 'object' ||
			t === null
		)
			return !1;
		var l = Object.keys(e),
			a = Object.keys(t);
		if (l.length !== a.length) return !1;
		for (a = 0; a < l.length; a++) {
			var n = l[a];
			if (!qa.call(t, n) || !Ut(e[n], t[n])) return !1;
		}
		return !0;
	}
	function go(e) {
		for (; e && e.firstChild; ) e = e.firstChild;
		return e;
	}
	function po(e, t) {
		var l = go(e);
		e = 0;
		for (var a; l; ) {
			if (l.nodeType === 3) {
				if (((a = e + l.textContent.length), e <= t && a >= t))
					return { node: l, offset: t - e };
				e = a;
			}
			e: {
				for (; l; ) {
					if (l.nextSibling) {
						l = l.nextSibling;
						break e;
					}
					l = l.parentNode;
				}
				l = void 0;
			}
			l = go(l);
		}
	}
	function bo(e, t) {
		return e && t
			? e === t
				? !0
				: e && e.nodeType === 3
				? !1
				: t && t.nodeType === 3
				? bo(e, t.parentNode)
				: 'contains' in e
				? e.contains(t)
				: e.compareDocumentPosition
				? !!(e.compareDocumentPosition(t) & 16)
				: !1
			: !1;
	}
	function So(e) {
		e =
			e != null &&
			e.ownerDocument != null &&
			e.ownerDocument.defaultView != null
				? e.ownerDocument.defaultView
				: window;
		for (var t = Vu(e.document); t instanceof e.HTMLIFrameElement; ) {
			try {
				var l = typeof t.contentWindow.location.href == 'string';
			} catch {
				l = !1;
			}
			if (l) e = t.contentWindow;
			else break;
			t = Vu(e.document);
		}
		return t;
	}
	function zr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return (
			t &&
			((t === 'input' &&
				(e.type === 'text' ||
					e.type === 'search' ||
					e.type === 'tel' ||
					e.type === 'url' ||
					e.type === 'password')) ||
				t === 'textarea' ||
				e.contentEditable === 'true')
		);
	}
	var dv = pl && 'documentMode' in document && 11 >= document.documentMode,
		Ja = null,
		Or = null,
		qn = null,
		_r = !1;
	function Eo(e, t, l) {
		var a =
			l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
		_r ||
			Ja == null ||
			Ja !== Vu(a) ||
			((a = Ja),
			'selectionStart' in a && zr(a)
				? (a = { start: a.selectionStart, end: a.selectionEnd })
				: ((a = (
						(a.ownerDocument && a.ownerDocument.defaultView) ||
						window
				  ).getSelection()),
				  (a = {
						anchorNode: a.anchorNode,
						anchorOffset: a.anchorOffset,
						focusNode: a.focusNode,
						focusOffset: a.focusOffset,
				  })),
			(qn && Bn(qn, a)) ||
				((qn = a),
				(a = Li(Or, 'onSelect')),
				0 < a.length &&
					((t = new ku('onSelect', 'select', null, t, l)),
					e.push({ event: t, listeners: a }),
					(t.target = Ja))));
	}
	function ba(e, t) {
		var l = {};
		return (
			(l[e.toLowerCase()] = t.toLowerCase()),
			(l['Webkit' + e] = 'webkit' + t),
			(l['Moz' + e] = 'moz' + t),
			l
		);
	}
	var $a = {
			animationend: ba('Animation', 'AnimationEnd'),
			animationiteration: ba('Animation', 'AnimationIteration'),
			animationstart: ba('Animation', 'AnimationStart'),
			transitionrun: ba('Transition', 'TransitionRun'),
			transitionstart: ba('Transition', 'TransitionStart'),
			transitioncancel: ba('Transition', 'TransitionCancel'),
			transitionend: ba('Transition', 'TransitionEnd'),
		},
		Ur = {},
		Ro = {};
	pl &&
		((Ro = document.createElement('div').style),
		'AnimationEvent' in window ||
			(delete $a.animationend.animation,
			delete $a.animationiteration.animation,
			delete $a.animationstart.animation),
		'TransitionEvent' in window || delete $a.transitionend.transition);
	function Sa(e) {
		if (Ur[e]) return Ur[e];
		if (!$a[e]) return e;
		var t = $a[e],
			l;
		for (l in t) if (t.hasOwnProperty(l) && l in Ro) return (Ur[e] = t[l]);
		return e;
	}
	var To = Sa('animationend'),
		Mo = Sa('animationiteration'),
		Do = Sa('animationstart'),
		hv = Sa('transitionrun'),
		mv = Sa('transitionstart'),
		vv = Sa('transitioncancel'),
		Ao = Sa('transitionend'),
		zo = new Map(),
		xr =
			'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
				' '
			);
	xr.push('scrollEnd');
	function ll(e, t) {
		zo.set(e, t), St(t, [e]);
	}
	var Oo = new WeakMap();
	function Xt(e, t) {
		if (typeof e == 'object' && e !== null) {
			var l = Oo.get(e);
			return l !== void 0
				? l
				: ((t = { value: e, source: t, stack: _n(t) }), Oo.set(e, t), t);
		}
		return { value: e, source: t, stack: _n(t) };
	}
	var Qt = [],
		ka = 0,
		Cr = 0;
	function Pu() {
		for (var e = ka, t = (Cr = ka = 0); t < e; ) {
			var l = Qt[t];
			Qt[t++] = null;
			var a = Qt[t];
			Qt[t++] = null;
			var n = Qt[t];
			Qt[t++] = null;
			var u = Qt[t];
			if (((Qt[t++] = null), a !== null && n !== null)) {
				var c = a.pending;
				c === null ? (n.next = n) : ((n.next = c.next), (c.next = n)),
					(a.pending = n);
			}
			u !== 0 && _o(l, n, u);
		}
	}
	function Iu(e, t, l, a) {
		(Qt[ka++] = e),
			(Qt[ka++] = t),
			(Qt[ka++] = l),
			(Qt[ka++] = a),
			(Cr |= a),
			(e.lanes |= a),
			(e = e.alternate),
			e !== null && (e.lanes |= a);
	}
	function Nr(e, t, l, a) {
		return Iu(e, t, l, a), ei(e);
	}
	function Wa(e, t) {
		return Iu(e, null, null, t), ei(e);
	}
	function _o(e, t, l) {
		e.lanes |= l;
		var a = e.alternate;
		a !== null && (a.lanes |= l);
		for (var n = !1, u = e.return; u !== null; )
			(u.childLanes |= l),
				(a = u.alternate),
				a !== null && (a.childLanes |= l),
				u.tag === 22 &&
					((e = u.stateNode), e === null || e._visibility & 1 || (n = !0)),
				(e = u),
				(u = u.return);
		return e.tag === 3
			? ((u = e.stateNode),
			  n &&
					t !== null &&
					((n = 31 - dt(l)),
					(e = u.hiddenUpdates),
					(a = e[n]),
					a === null ? (e[n] = [t]) : a.push(t),
					(t.lane = l | 536870912)),
			  u)
			: null;
	}
	function ei(e) {
		if (50 < fu) throw ((fu = 0), (Yc = null), Error(o(185)));
		for (var t = e.return; t !== null; ) (e = t), (t = e.return);
		return e.tag === 3 ? e.stateNode : null;
	}
	var Fa = {};
	function yv(e, t, l, a) {
		(this.tag = e),
			(this.key = l),
			(this.sibling =
				this.child =
				this.return =
				this.stateNode =
				this.type =
				this.elementType =
					null),
			(this.index = 0),
			(this.refCleanup = this.ref = null),
			(this.pendingProps = t),
			(this.dependencies =
				this.memoizedState =
				this.updateQueue =
				this.memoizedProps =
					null),
			(this.mode = a),
			(this.subtreeFlags = this.flags = 0),
			(this.deletions = null),
			(this.childLanes = this.lanes = 0),
			(this.alternate = null);
	}
	function xt(e, t, l, a) {
		return new yv(e, t, l, a);
	}
	function wr(e) {
		return (e = e.prototype), !(!e || !e.isReactComponent);
	}
	function bl(e, t) {
		var l = e.alternate;
		return (
			l === null
				? ((l = xt(e.tag, t, e.key, e.mode)),
				  (l.elementType = e.elementType),
				  (l.type = e.type),
				  (l.stateNode = e.stateNode),
				  (l.alternate = e),
				  (e.alternate = l))
				: ((l.pendingProps = t),
				  (l.type = e.type),
				  (l.flags = 0),
				  (l.subtreeFlags = 0),
				  (l.deletions = null)),
			(l.flags = e.flags & 65011712),
			(l.childLanes = e.childLanes),
			(l.lanes = e.lanes),
			(l.child = e.child),
			(l.memoizedProps = e.memoizedProps),
			(l.memoizedState = e.memoizedState),
			(l.updateQueue = e.updateQueue),
			(t = e.dependencies),
			(l.dependencies =
				t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
			(l.sibling = e.sibling),
			(l.index = e.index),
			(l.ref = e.ref),
			(l.refCleanup = e.refCleanup),
			l
		);
	}
	function Uo(e, t) {
		e.flags &= 65011714;
		var l = e.alternate;
		return (
			l === null
				? ((e.childLanes = 0),
				  (e.lanes = t),
				  (e.child = null),
				  (e.subtreeFlags = 0),
				  (e.memoizedProps = null),
				  (e.memoizedState = null),
				  (e.updateQueue = null),
				  (e.dependencies = null),
				  (e.stateNode = null))
				: ((e.childLanes = l.childLanes),
				  (e.lanes = l.lanes),
				  (e.child = l.child),
				  (e.subtreeFlags = 0),
				  (e.deletions = null),
				  (e.memoizedProps = l.memoizedProps),
				  (e.memoizedState = l.memoizedState),
				  (e.updateQueue = l.updateQueue),
				  (e.type = l.type),
				  (t = l.dependencies),
				  (e.dependencies =
						t === null
							? null
							: { lanes: t.lanes, firstContext: t.firstContext })),
			e
		);
	}
	function ti(e, t, l, a, n, u) {
		var c = 0;
		if (((a = e), typeof e == 'function')) wr(e) && (c = 1);
		else if (typeof e == 'string')
			c = py(e, l, le.current)
				? 26
				: e === 'html' || e === 'head' || e === 'body'
				? 27
				: 5;
		else
			e: switch (e) {
				case me:
					return (e = xt(31, l, t, n)), (e.elementType = me), (e.lanes = u), e;
				case w:
					return Ea(l.children, n, u, t);
				case Z:
					(c = 8), (n |= 24);
					break;
				case $:
					return (
						(e = xt(12, l, t, n | 2)), (e.elementType = $), (e.lanes = u), e
					);
				case W:
					return (e = xt(13, l, t, n)), (e.elementType = W), (e.lanes = u), e;
				case x:
					return (e = xt(19, l, t, n)), (e.elementType = x), (e.lanes = u), e;
				default:
					if (typeof e == 'object' && e !== null)
						switch (e.$$typeof) {
							case q:
							case k:
								c = 10;
								break e;
							case ue:
								c = 9;
								break e;
							case he:
								c = 11;
								break e;
							case ye:
								c = 14;
								break e;
							case pe:
								(c = 16), (a = null);
								break e;
						}
					(c = 29),
						(l = Error(o(130, e === null ? 'null' : typeof e, ''))),
						(a = null);
			}
		return (
			(t = xt(c, l, t, n)), (t.elementType = e), (t.type = a), (t.lanes = u), t
		);
	}
	function Ea(e, t, l, a) {
		return (e = xt(7, e, a, t)), (e.lanes = l), e;
	}
	function Hr(e, t, l) {
		return (e = xt(6, e, null, t)), (e.lanes = l), e;
	}
	function Lr(e, t, l) {
		return (
			(t = xt(4, e.children !== null ? e.children : [], e.key, t)),
			(t.lanes = l),
			(t.stateNode = {
				containerInfo: e.containerInfo,
				pendingChildren: null,
				implementation: e.implementation,
			}),
			t
		);
	}
	var Pa = [],
		Ia = 0,
		li = null,
		ai = 0,
		Vt = [],
		Zt = 0,
		Ra = null,
		Sl = 1,
		El = '';
	function Ta(e, t) {
		(Pa[Ia++] = ai), (Pa[Ia++] = li), (li = e), (ai = t);
	}
	function xo(e, t, l) {
		(Vt[Zt++] = Sl), (Vt[Zt++] = El), (Vt[Zt++] = Ra), (Ra = e);
		var a = Sl;
		e = El;
		var n = 32 - dt(a) - 1;
		(a &= ~(1 << n)), (l += 1);
		var u = 32 - dt(t) + n;
		if (30 < u) {
			var c = n - (n % 5);
			(u = (a & ((1 << c) - 1)).toString(32)),
				(a >>= c),
				(n -= c),
				(Sl = (1 << (32 - dt(t) + n)) | (l << n) | a),
				(El = u + e);
		} else (Sl = (1 << u) | (l << n) | a), (El = e);
	}
	function Br(e) {
		e.return !== null && (Ta(e, 1), xo(e, 1, 0));
	}
	function qr(e) {
		for (; e === li; )
			(li = Pa[--Ia]), (Pa[Ia] = null), (ai = Pa[--Ia]), (Pa[Ia] = null);
		for (; e === Ra; )
			(Ra = Vt[--Zt]),
				(Vt[Zt] = null),
				(El = Vt[--Zt]),
				(Vt[Zt] = null),
				(Sl = Vt[--Zt]),
				(Vt[Zt] = null);
	}
	var Et = null,
		Pe = null,
		we = !1,
		Ma = null,
		cl = !1,
		Yr = Error(o(519));
	function Da(e) {
		var t = Error(o(418, ''));
		throw (Gn(Xt(t, e)), Yr);
	}
	function Co(e) {
		var t = e.stateNode,
			l = e.type,
			a = e.memoizedProps;
		switch (((t[X] = e), (t[Q] = a), l)) {
			case 'dialog':
				De('cancel', t), De('close', t);
				break;
			case 'iframe':
			case 'object':
			case 'embed':
				De('load', t);
				break;
			case 'video':
			case 'audio':
				for (l = 0; l < su.length; l++) De(su[l], t);
				break;
			case 'source':
				De('error', t);
				break;
			case 'img':
			case 'image':
			case 'link':
				De('error', t), De('load', t);
				break;
			case 'details':
				De('toggle', t);
				break;
			case 'input':
				De('invalid', t),
					Kf(
						t,
						a.value,
						a.defaultValue,
						a.checked,
						a.defaultChecked,
						a.type,
						a.name,
						!0
					),
					Qu(t);
				break;
			case 'select':
				De('invalid', t);
				break;
			case 'textarea':
				De('invalid', t), $f(t, a.value, a.defaultValue, a.children), Qu(t);
		}
		(l = a.children),
			(typeof l != 'string' && typeof l != 'number' && typeof l != 'bigint') ||
			t.textContent === '' + l ||
			a.suppressHydrationWarning === !0 ||
			kd(t.textContent, l)
				? (a.popover != null && (De('beforetoggle', t), De('toggle', t)),
				  a.onScroll != null && De('scroll', t),
				  a.onScrollEnd != null && De('scrollend', t),
				  a.onClick != null && (t.onclick = Bi),
				  (t = !0))
				: (t = !1),
			t || Da(e);
	}
	function No(e) {
		for (Et = e.return; Et; )
			switch (Et.tag) {
				case 5:
				case 13:
					cl = !1;
					return;
				case 27:
				case 3:
					cl = !0;
					return;
				default:
					Et = Et.return;
			}
	}
	function Yn(e) {
		if (e !== Et) return !1;
		if (!we) return No(e), (we = !0), !1;
		var t = e.tag,
			l;
		if (
			((l = t !== 3 && t !== 27) &&
				((l = t === 5) &&
					((l = e.type),
					(l =
						!(l !== 'form' && l !== 'button') || tf(e.type, e.memoizedProps))),
				(l = !l)),
			l && Pe && Da(e),
			No(e),
			t === 13)
		) {
			if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
				throw Error(o(317));
			e: {
				for (e = e.nextSibling, t = 0; e; ) {
					if (e.nodeType === 8)
						if (((l = e.data), l === '/$')) {
							if (t === 0) {
								Pe = nl(e.nextSibling);
								break e;
							}
							t--;
						} else (l !== '$' && l !== '$!' && l !== '$?') || t++;
					e = e.nextSibling;
				}
				Pe = null;
			}
		} else
			t === 27
				? ((t = Pe), ea(e.type) ? ((e = uf), (uf = null), (Pe = e)) : (Pe = t))
				: (Pe = Et ? nl(e.stateNode.nextSibling) : null);
		return !0;
	}
	function jn() {
		(Pe = Et = null), (we = !1);
	}
	function wo() {
		var e = Ma;
		return (
			e !== null &&
				(Ot === null ? (Ot = e) : Ot.push.apply(Ot, e), (Ma = null)),
			e
		);
	}
	function Gn(e) {
		Ma === null ? (Ma = [e]) : Ma.push(e);
	}
	var jr = j(null),
		Aa = null,
		Rl = null;
	function Yl(e, t, l) {
		K(jr, t._currentValue), (t._currentValue = l);
	}
	function Tl(e) {
		(e._currentValue = jr.current), J(jr);
	}
	function Gr(e, t, l) {
		for (; e !== null; ) {
			var a = e.alternate;
			if (
				((e.childLanes & t) !== t
					? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
					: a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
				e === l)
			)
				break;
			e = e.return;
		}
	}
	function Xr(e, t, l, a) {
		var n = e.child;
		for (n !== null && (n.return = e); n !== null; ) {
			var u = n.dependencies;
			if (u !== null) {
				var c = n.child;
				u = u.firstContext;
				e: for (; u !== null; ) {
					var d = u;
					u = n;
					for (var g = 0; g < t.length; g++)
						if (d.context === t[g]) {
							(u.lanes |= l),
								(d = u.alternate),
								d !== null && (d.lanes |= l),
								Gr(u.return, l, e),
								a || (c = null);
							break e;
						}
					u = d.next;
				}
			} else if (n.tag === 18) {
				if (((c = n.return), c === null)) throw Error(o(341));
				(c.lanes |= l),
					(u = c.alternate),
					u !== null && (u.lanes |= l),
					Gr(c, l, e),
					(c = null);
			} else c = n.child;
			if (c !== null) c.return = n;
			else
				for (c = n; c !== null; ) {
					if (c === e) {
						c = null;
						break;
					}
					if (((n = c.sibling), n !== null)) {
						(n.return = c.return), (c = n);
						break;
					}
					c = c.return;
				}
			n = c;
		}
	}
	function Xn(e, t, l, a) {
		e = null;
		for (var n = t, u = !1; n !== null; ) {
			if (!u) {
				if ((n.flags & 524288) !== 0) u = !0;
				else if ((n.flags & 262144) !== 0) break;
			}
			if (n.tag === 10) {
				var c = n.alternate;
				if (c === null) throw Error(o(387));
				if (((c = c.memoizedProps), c !== null)) {
					var d = n.type;
					Ut(n.pendingProps.value, c.value) ||
						(e !== null ? e.push(d) : (e = [d]));
				}
			} else if (n === bt.current) {
				if (((c = n.alternate), c === null)) throw Error(o(387));
				c.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
					(e !== null ? e.push(gu) : (e = [gu]));
			}
			n = n.return;
		}
		e !== null && Xr(t, e, l, a), (t.flags |= 262144);
	}
	function ni(e) {
		for (e = e.firstContext; e !== null; ) {
			if (!Ut(e.context._currentValue, e.memoizedValue)) return !0;
			e = e.next;
		}
		return !1;
	}
	function za(e) {
		(Aa = e),
			(Rl = null),
			(e = e.dependencies),
			e !== null && (e.firstContext = null);
	}
	function gt(e) {
		return Ho(Aa, e);
	}
	function ui(e, t) {
		return Aa === null && za(e), Ho(e, t);
	}
	function Ho(e, t) {
		var l = t._currentValue;
		if (((t = { context: t, memoizedValue: l, next: null }), Rl === null)) {
			if (e === null) throw Error(o(308));
			(Rl = t),
				(e.dependencies = { lanes: 0, firstContext: t }),
				(e.flags |= 524288);
		} else Rl = Rl.next = t;
		return l;
	}
	var gv =
			typeof AbortController < 'u'
				? AbortController
				: function () {
						var e = [],
							t = (this.signal = {
								aborted: !1,
								addEventListener: function (l, a) {
									e.push(a);
								},
							});
						this.abort = function () {
							(t.aborted = !0),
								e.forEach(function (l) {
									return l();
								});
						};
				  },
		pv = i.unstable_scheduleCallback,
		bv = i.unstable_NormalPriority,
		rt = {
			$$typeof: k,
			Consumer: null,
			Provider: null,
			_currentValue: null,
			_currentValue2: null,
			_threadCount: 0,
		};
	function Qr() {
		return { controller: new gv(), data: new Map(), refCount: 0 };
	}
	function Qn(e) {
		e.refCount--,
			e.refCount === 0 &&
				pv(bv, function () {
					e.controller.abort();
				});
	}
	var Vn = null,
		Vr = 0,
		en = 0,
		tn = null;
	function Sv(e, t) {
		if (Vn === null) {
			var l = (Vn = []);
			(Vr = 0),
				(en = Kc()),
				(tn = {
					status: 'pending',
					value: void 0,
					then: function (a) {
						l.push(a);
					},
				});
		}
		return Vr++, t.then(Lo, Lo), t;
	}
	function Lo() {
		if (--Vr === 0 && Vn !== null) {
			tn !== null && (tn.status = 'fulfilled');
			var e = Vn;
			(Vn = null), (en = 0), (tn = null);
			for (var t = 0; t < e.length; t++) (0, e[t])();
		}
	}
	function Ev(e, t) {
		var l = [],
			a = {
				status: 'pending',
				value: null,
				reason: null,
				then: function (n) {
					l.push(n);
				},
			};
		return (
			e.then(
				function () {
					(a.status = 'fulfilled'), (a.value = t);
					for (var n = 0; n < l.length; n++) (0, l[n])(t);
				},
				function (n) {
					for (a.status = 'rejected', a.reason = n, n = 0; n < l.length; n++)
						(0, l[n])(void 0);
				}
			),
			a
		);
	}
	var Bo = _.S;
	_.S = function (e, t) {
		typeof t == 'object' &&
			t !== null &&
			typeof t.then == 'function' &&
			Sv(e, t),
			Bo !== null && Bo(e, t);
	};
	var Oa = j(null);
	function Zr() {
		var e = Oa.current;
		return e !== null ? e : Qe.pooledCache;
	}
	function ii(e, t) {
		t === null ? K(Oa, Oa.current) : K(Oa, t.pool);
	}
	function qo() {
		var e = Zr();
		return e === null ? null : { parent: rt._currentValue, pool: e };
	}
	var Zn = Error(o(460)),
		Yo = Error(o(474)),
		ri = Error(o(542)),
		Kr = { then: function () {} };
	function jo(e) {
		return (e = e.status), e === 'fulfilled' || e === 'rejected';
	}
	function ci() {}
	function Go(e, t, l) {
		switch (
			((l = e[l]),
			l === void 0 ? e.push(t) : l !== t && (t.then(ci, ci), (t = l)),
			t.status)
		) {
			case 'fulfilled':
				return t.value;
			case 'rejected':
				throw ((e = t.reason), Qo(e), e);
			default:
				if (typeof t.status == 'string') t.then(ci, ci);
				else {
					if (((e = Qe), e !== null && 100 < e.shellSuspendCounter))
						throw Error(o(482));
					(e = t),
						(e.status = 'pending'),
						e.then(
							function (a) {
								if (t.status === 'pending') {
									var n = t;
									(n.status = 'fulfilled'), (n.value = a);
								}
							},
							function (a) {
								if (t.status === 'pending') {
									var n = t;
									(n.status = 'rejected'), (n.reason = a);
								}
							}
						);
				}
				switch (t.status) {
					case 'fulfilled':
						return t.value;
					case 'rejected':
						throw ((e = t.reason), Qo(e), e);
				}
				throw ((Kn = t), Zn);
		}
	}
	var Kn = null;
	function Xo() {
		if (Kn === null) throw Error(o(459));
		var e = Kn;
		return (Kn = null), e;
	}
	function Qo(e) {
		if (e === Zn || e === ri) throw Error(o(483));
	}
	var jl = !1;
	function Jr(e) {
		e.updateQueue = {
			baseState: e.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: { pending: null, lanes: 0, hiddenCallbacks: null },
			callbacks: null,
		};
	}
	function $r(e, t) {
		(e = e.updateQueue),
			t.updateQueue === e &&
				(t.updateQueue = {
					baseState: e.baseState,
					firstBaseUpdate: e.firstBaseUpdate,
					lastBaseUpdate: e.lastBaseUpdate,
					shared: e.shared,
					callbacks: null,
				});
	}
	function Gl(e) {
		return { lane: e, tag: 0, payload: null, callback: null, next: null };
	}
	function Xl(e, t, l) {
		var a = e.updateQueue;
		if (a === null) return null;
		if (((a = a.shared), (Le & 2) !== 0)) {
			var n = a.pending;
			return (
				n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
				(a.pending = t),
				(t = ei(e)),
				_o(e, null, l),
				t
			);
		}
		return Iu(e, a, t, l), ei(e);
	}
	function Jn(e, t, l) {
		if (
			((t = t.updateQueue), t !== null && ((t = t.shared), (l & 4194048) !== 0))
		) {
			var a = t.lanes;
			(a &= e.pendingLanes), (l |= a), (t.lanes = l), ya(e, l);
		}
	}
	function kr(e, t) {
		var l = e.updateQueue,
			a = e.alternate;
		if (a !== null && ((a = a.updateQueue), l === a)) {
			var n = null,
				u = null;
			if (((l = l.firstBaseUpdate), l !== null)) {
				do {
					var c = {
						lane: l.lane,
						tag: l.tag,
						payload: l.payload,
						callback: null,
						next: null,
					};
					u === null ? (n = u = c) : (u = u.next = c), (l = l.next);
				} while (l !== null);
				u === null ? (n = u = t) : (u = u.next = t);
			} else n = u = t;
			(l = {
				baseState: a.baseState,
				firstBaseUpdate: n,
				lastBaseUpdate: u,
				shared: a.shared,
				callbacks: a.callbacks,
			}),
				(e.updateQueue = l);
			return;
		}
		(e = l.lastBaseUpdate),
			e === null ? (l.firstBaseUpdate = t) : (e.next = t),
			(l.lastBaseUpdate = t);
	}
	var Wr = !1;
	function $n() {
		if (Wr) {
			var e = tn;
			if (e !== null) throw e;
		}
	}
	function kn(e, t, l, a) {
		Wr = !1;
		var n = e.updateQueue;
		jl = !1;
		var u = n.firstBaseUpdate,
			c = n.lastBaseUpdate,
			d = n.shared.pending;
		if (d !== null) {
			n.shared.pending = null;
			var g = d,
				z = g.next;
			(g.next = null), c === null ? (u = z) : (c.next = z), (c = g);
			var L = e.alternate;
			L !== null &&
				((L = L.updateQueue),
				(d = L.lastBaseUpdate),
				d !== c &&
					(d === null ? (L.firstBaseUpdate = z) : (d.next = z),
					(L.lastBaseUpdate = g)));
		}
		if (u !== null) {
			var G = n.baseState;
			(c = 0), (L = z = g = null), (d = u);
			do {
				var O = d.lane & -536870913,
					U = O !== d.lane;
				if (U ? (Oe & O) === O : (a & O) === O) {
					O !== 0 && O === en && (Wr = !0),
						L !== null &&
							(L = L.next =
								{
									lane: 0,
									tag: d.tag,
									payload: d.payload,
									callback: null,
									next: null,
								});
					e: {
						var de = e,
							re = d;
						O = t;
						var je = l;
						switch (re.tag) {
							case 1:
								if (((de = re.payload), typeof de == 'function')) {
									G = de.call(je, G, O);
									break e;
								}
								G = de;
								break e;
							case 3:
								de.flags = (de.flags & -65537) | 128;
							case 0:
								if (
									((de = re.payload),
									(O = typeof de == 'function' ? de.call(je, G, O) : de),
									O == null)
								)
									break e;
								G = R({}, G, O);
								break e;
							case 2:
								jl = !0;
						}
					}
					(O = d.callback),
						O !== null &&
							((e.flags |= 64),
							U && (e.flags |= 8192),
							(U = n.callbacks),
							U === null ? (n.callbacks = [O]) : U.push(O));
				} else
					(U = {
						lane: O,
						tag: d.tag,
						payload: d.payload,
						callback: d.callback,
						next: null,
					}),
						L === null ? ((z = L = U), (g = G)) : (L = L.next = U),
						(c |= O);
				if (((d = d.next), d === null)) {
					if (((d = n.shared.pending), d === null)) break;
					(U = d),
						(d = U.next),
						(U.next = null),
						(n.lastBaseUpdate = U),
						(n.shared.pending = null);
				}
			} while (!0);
			L === null && (g = G),
				(n.baseState = g),
				(n.firstBaseUpdate = z),
				(n.lastBaseUpdate = L),
				u === null && (n.shared.lanes = 0),
				(Wl |= c),
				(e.lanes = c),
				(e.memoizedState = G);
		}
	}
	function Vo(e, t) {
		if (typeof e != 'function') throw Error(o(191, e));
		e.call(t);
	}
	function Zo(e, t) {
		var l = e.callbacks;
		if (l !== null)
			for (e.callbacks = null, e = 0; e < l.length; e++) Vo(l[e], t);
	}
	var ln = j(null),
		fi = j(0);
	function Ko(e, t) {
		(e = Ul), K(fi, e), K(ln, t), (Ul = e | t.baseLanes);
	}
	function Fr() {
		K(fi, Ul), K(ln, ln.current);
	}
	function Pr() {
		(Ul = fi.current), J(ln), J(fi);
	}
	var Ql = 0,
		Se = null,
		qe = null,
		at = null,
		oi = !1,
		an = !1,
		_a = !1,
		si = 0,
		Wn = 0,
		nn = null,
		Rv = 0;
	function tt() {
		throw Error(o(321));
	}
	function Ir(e, t) {
		if (t === null) return !1;
		for (var l = 0; l < t.length && l < e.length; l++)
			if (!Ut(e[l], t[l])) return !1;
		return !0;
	}
	function ec(e, t, l, a, n, u) {
		return (
			(Ql = u),
			(Se = t),
			(t.memoizedState = null),
			(t.updateQueue = null),
			(t.lanes = 0),
			(_.H = e === null || e.memoizedState === null ? _s : Us),
			(_a = !1),
			(u = l(a, n)),
			(_a = !1),
			an && (u = $o(t, l, a, n)),
			Jo(e),
			u
		);
	}
	function Jo(e) {
		_.H = gi;
		var t = qe !== null && qe.next !== null;
		if (((Ql = 0), (at = qe = Se = null), (oi = !1), (Wn = 0), (nn = null), t))
			throw Error(o(300));
		e === null ||
			ft ||
			((e = e.dependencies), e !== null && ni(e) && (ft = !0));
	}
	function $o(e, t, l, a) {
		Se = e;
		var n = 0;
		do {
			if ((an && (nn = null), (Wn = 0), (an = !1), 25 <= n))
				throw Error(o(301));
			if (((n += 1), (at = qe = null), e.updateQueue != null)) {
				var u = e.updateQueue;
				(u.lastEffect = null),
					(u.events = null),
					(u.stores = null),
					u.memoCache != null && (u.memoCache.index = 0);
			}
			(_.H = _v), (u = t(l, a));
		} while (an);
		return u;
	}
	function Tv() {
		var e = _.H,
			t = e.useState()[0];
		return (
			(t = typeof t.then == 'function' ? Fn(t) : t),
			(e = e.useState()[0]),
			(qe !== null ? qe.memoizedState : null) !== e && (Se.flags |= 1024),
			t
		);
	}
	function tc() {
		var e = si !== 0;
		return (si = 0), e;
	}
	function lc(e, t, l) {
		(t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l);
	}
	function ac(e) {
		if (oi) {
			for (e = e.memoizedState; e !== null; ) {
				var t = e.queue;
				t !== null && (t.pending = null), (e = e.next);
			}
			oi = !1;
		}
		(Ql = 0), (at = qe = Se = null), (an = !1), (Wn = si = 0), (nn = null);
	}
	function At() {
		var e = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null,
		};
		return at === null ? (Se.memoizedState = at = e) : (at = at.next = e), at;
	}
	function nt() {
		if (qe === null) {
			var e = Se.alternate;
			e = e !== null ? e.memoizedState : null;
		} else e = qe.next;
		var t = at === null ? Se.memoizedState : at.next;
		if (t !== null) (at = t), (qe = e);
		else {
			if (e === null)
				throw Se.alternate === null ? Error(o(467)) : Error(o(310));
			(qe = e),
				(e = {
					memoizedState: qe.memoizedState,
					baseState: qe.baseState,
					baseQueue: qe.baseQueue,
					queue: qe.queue,
					next: null,
				}),
				at === null ? (Se.memoizedState = at = e) : (at = at.next = e);
		}
		return at;
	}
	function nc() {
		return { lastEffect: null, events: null, stores: null, memoCache: null };
	}
	function Fn(e) {
		var t = Wn;
		return (
			(Wn += 1),
			nn === null && (nn = []),
			(e = Go(nn, e, t)),
			(t = Se),
			(at === null ? t.memoizedState : at.next) === null &&
				((t = t.alternate),
				(_.H = t === null || t.memoizedState === null ? _s : Us)),
			e
		);
	}
	function di(e) {
		if (e !== null && typeof e == 'object') {
			if (typeof e.then == 'function') return Fn(e);
			if (e.$$typeof === k) return gt(e);
		}
		throw Error(o(438, String(e)));
	}
	function uc(e) {
		var t = null,
			l = Se.updateQueue;
		if ((l !== null && (t = l.memoCache), t == null)) {
			var a = Se.alternate;
			a !== null &&
				((a = a.updateQueue),
				a !== null &&
					((a = a.memoCache),
					a != null &&
						(t = {
							data: a.data.map(function (n) {
								return n.slice();
							}),
							index: 0,
						})));
		}
		if (
			(t == null && (t = { data: [], index: 0 }),
			l === null && ((l = nc()), (Se.updateQueue = l)),
			(l.memoCache = t),
			(l = t.data[t.index]),
			l === void 0)
		)
			for (l = t.data[t.index] = Array(e), a = 0; a < e; a++) l[a] = Ve;
		return t.index++, l;
	}
	function Ml(e, t) {
		return typeof t == 'function' ? t(e) : t;
	}
	function hi(e) {
		var t = nt();
		return ic(t, qe, e);
	}
	function ic(e, t, l) {
		var a = e.queue;
		if (a === null) throw Error(o(311));
		a.lastRenderedReducer = l;
		var n = e.baseQueue,
			u = a.pending;
		if (u !== null) {
			if (n !== null) {
				var c = n.next;
				(n.next = u.next), (u.next = c);
			}
			(t.baseQueue = n = u), (a.pending = null);
		}
		if (((u = e.baseState), n === null)) e.memoizedState = u;
		else {
			t = n.next;
			var d = (c = null),
				g = null,
				z = t,
				L = !1;
			do {
				var G = z.lane & -536870913;
				if (G !== z.lane ? (Oe & G) === G : (Ql & G) === G) {
					var O = z.revertLane;
					if (O === 0)
						g !== null &&
							(g = g.next =
								{
									lane: 0,
									revertLane: 0,
									action: z.action,
									hasEagerState: z.hasEagerState,
									eagerState: z.eagerState,
									next: null,
								}),
							G === en && (L = !0);
					else if ((Ql & O) === O) {
						(z = z.next), O === en && (L = !0);
						continue;
					} else
						(G = {
							lane: 0,
							revertLane: z.revertLane,
							action: z.action,
							hasEagerState: z.hasEagerState,
							eagerState: z.eagerState,
							next: null,
						}),
							g === null ? ((d = g = G), (c = u)) : (g = g.next = G),
							(Se.lanes |= O),
							(Wl |= O);
					(G = z.action),
						_a && l(u, G),
						(u = z.hasEagerState ? z.eagerState : l(u, G));
				} else
					(O = {
						lane: G,
						revertLane: z.revertLane,
						action: z.action,
						hasEagerState: z.hasEagerState,
						eagerState: z.eagerState,
						next: null,
					}),
						g === null ? ((d = g = O), (c = u)) : (g = g.next = O),
						(Se.lanes |= G),
						(Wl |= G);
				z = z.next;
			} while (z !== null && z !== t);
			if (
				(g === null ? (c = u) : (g.next = d),
				!Ut(u, e.memoizedState) && ((ft = !0), L && ((l = tn), l !== null)))
			)
				throw l;
			(e.memoizedState = u),
				(e.baseState = c),
				(e.baseQueue = g),
				(a.lastRenderedState = u);
		}
		return n === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
	}
	function rc(e) {
		var t = nt(),
			l = t.queue;
		if (l === null) throw Error(o(311));
		l.lastRenderedReducer = e;
		var a = l.dispatch,
			n = l.pending,
			u = t.memoizedState;
		if (n !== null) {
			l.pending = null;
			var c = (n = n.next);
			do (u = e(u, c.action)), (c = c.next);
			while (c !== n);
			Ut(u, t.memoizedState) || (ft = !0),
				(t.memoizedState = u),
				t.baseQueue === null && (t.baseState = u),
				(l.lastRenderedState = u);
		}
		return [u, a];
	}
	function ko(e, t, l) {
		var a = Se,
			n = nt(),
			u = we;
		if (u) {
			if (l === void 0) throw Error(o(407));
			l = l();
		} else l = t();
		var c = !Ut((qe || n).memoizedState, l);
		c && ((n.memoizedState = l), (ft = !0)), (n = n.queue);
		var d = Po.bind(null, a, n, e);
		if (
			(Pn(2048, 8, d, [e]),
			n.getSnapshot !== t || c || (at !== null && at.memoizedState.tag & 1))
		) {
			if (
				((a.flags |= 2048),
				un(9, mi(), Fo.bind(null, a, n, l, t), null),
				Qe === null)
			)
				throw Error(o(349));
			u || (Ql & 124) !== 0 || Wo(a, t, l);
		}
		return l;
	}
	function Wo(e, t, l) {
		(e.flags |= 16384),
			(e = { getSnapshot: t, value: l }),
			(t = Se.updateQueue),
			t === null
				? ((t = nc()), (Se.updateQueue = t), (t.stores = [e]))
				: ((l = t.stores), l === null ? (t.stores = [e]) : l.push(e));
	}
	function Fo(e, t, l, a) {
		(t.value = l), (t.getSnapshot = a), Io(t) && es(e);
	}
	function Po(e, t, l) {
		return l(function () {
			Io(t) && es(e);
		});
	}
	function Io(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var l = t();
			return !Ut(e, l);
		} catch {
			return !0;
		}
	}
	function es(e) {
		var t = Wa(e, 2);
		t !== null && Lt(t, e, 2);
	}
	function cc(e) {
		var t = At();
		if (typeof e == 'function') {
			var l = e;
			if (((e = l()), _a)) {
				It(!0);
				try {
					l();
				} finally {
					It(!1);
				}
			}
		}
		return (
			(t.memoizedState = t.baseState = e),
			(t.queue = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Ml,
				lastRenderedState: e,
			}),
			t
		);
	}
	function ts(e, t, l, a) {
		return (e.baseState = l), ic(e, qe, typeof a == 'function' ? a : Ml);
	}
	function Mv(e, t, l, a, n) {
		if (yi(e)) throw Error(o(485));
		if (((e = t.action), e !== null)) {
			var u = {
				payload: n,
				action: e,
				next: null,
				isTransition: !0,
				status: 'pending',
				value: null,
				reason: null,
				listeners: [],
				then: function (c) {
					u.listeners.push(c);
				},
			};
			_.T !== null ? l(!0) : (u.isTransition = !1),
				a(u),
				(l = t.pending),
				l === null
					? ((u.next = t.pending = u), ls(t, u))
					: ((u.next = l.next), (t.pending = l.next = u));
		}
	}
	function ls(e, t) {
		var l = t.action,
			a = t.payload,
			n = e.state;
		if (t.isTransition) {
			var u = _.T,
				c = {};
			_.T = c;
			try {
				var d = l(n, a),
					g = _.S;
				g !== null && g(c, d), as(e, t, d);
			} catch (z) {
				fc(e, t, z);
			} finally {
				_.T = u;
			}
		} else
			try {
				(u = l(n, a)), as(e, t, u);
			} catch (z) {
				fc(e, t, z);
			}
	}
	function as(e, t, l) {
		l !== null && typeof l == 'object' && typeof l.then == 'function'
			? l.then(
					function (a) {
						ns(e, t, a);
					},
					function (a) {
						return fc(e, t, a);
					}
			  )
			: ns(e, t, l);
	}
	function ns(e, t, l) {
		(t.status = 'fulfilled'),
			(t.value = l),
			us(t),
			(e.state = l),
			(t = e.pending),
			t !== null &&
				((l = t.next),
				l === t ? (e.pending = null) : ((l = l.next), (t.next = l), ls(e, l)));
	}
	function fc(e, t, l) {
		var a = e.pending;
		if (((e.pending = null), a !== null)) {
			a = a.next;
			do (t.status = 'rejected'), (t.reason = l), us(t), (t = t.next);
			while (t !== a);
		}
		e.action = null;
	}
	function us(e) {
		e = e.listeners;
		for (var t = 0; t < e.length; t++) (0, e[t])();
	}
	function is(e, t) {
		return t;
	}
	function rs(e, t) {
		if (we) {
			var l = Qe.formState;
			if (l !== null) {
				e: {
					var a = Se;
					if (we) {
						if (Pe) {
							t: {
								for (var n = Pe, u = cl; n.nodeType !== 8; ) {
									if (!u) {
										n = null;
										break t;
									}
									if (((n = nl(n.nextSibling)), n === null)) {
										n = null;
										break t;
									}
								}
								(u = n.data), (n = u === 'F!' || u === 'F' ? n : null);
							}
							if (n) {
								(Pe = nl(n.nextSibling)), (a = n.data === 'F!');
								break e;
							}
						}
						Da(a);
					}
					a = !1;
				}
				a && (t = l[0]);
			}
		}
		return (
			(l = At()),
			(l.memoizedState = l.baseState = t),
			(a = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: is,
				lastRenderedState: t,
			}),
			(l.queue = a),
			(l = As.bind(null, Se, a)),
			(a.dispatch = l),
			(a = cc(!1)),
			(u = mc.bind(null, Se, !1, a.queue)),
			(a = At()),
			(n = { state: t, dispatch: null, action: e, pending: null }),
			(a.queue = n),
			(l = Mv.bind(null, Se, n, u, l)),
			(n.dispatch = l),
			(a.memoizedState = e),
			[t, l, !1]
		);
	}
	function cs(e) {
		var t = nt();
		return fs(t, qe, e);
	}
	function fs(e, t, l) {
		if (
			((t = ic(e, t, is)[0]),
			(e = hi(Ml)[0]),
			typeof t == 'object' && t !== null && typeof t.then == 'function')
		)
			try {
				var a = Fn(t);
			} catch (c) {
				throw c === Zn ? ri : c;
			}
		else a = t;
		t = nt();
		var n = t.queue,
			u = n.dispatch;
		return (
			l !== t.memoizedState &&
				((Se.flags |= 2048), un(9, mi(), Dv.bind(null, n, l), null)),
			[a, u, e]
		);
	}
	function Dv(e, t) {
		e.action = t;
	}
	function os(e) {
		var t = nt(),
			l = qe;
		if (l !== null) return fs(t, l, e);
		nt(), (t = t.memoizedState), (l = nt());
		var a = l.queue.dispatch;
		return (l.memoizedState = e), [t, a, !1];
	}
	function un(e, t, l, a) {
		return (
			(e = { tag: e, create: l, deps: a, inst: t, next: null }),
			(t = Se.updateQueue),
			t === null && ((t = nc()), (Se.updateQueue = t)),
			(l = t.lastEffect),
			l === null
				? (t.lastEffect = e.next = e)
				: ((a = l.next), (l.next = e), (e.next = a), (t.lastEffect = e)),
			e
		);
	}
	function mi() {
		return { destroy: void 0, resource: void 0 };
	}
	function ss() {
		return nt().memoizedState;
	}
	function vi(e, t, l, a) {
		var n = At();
		(a = a === void 0 ? null : a),
			(Se.flags |= e),
			(n.memoizedState = un(1 | t, mi(), l, a));
	}
	function Pn(e, t, l, a) {
		var n = nt();
		a = a === void 0 ? null : a;
		var u = n.memoizedState.inst;
		qe !== null && a !== null && Ir(a, qe.memoizedState.deps)
			? (n.memoizedState = un(t, u, l, a))
			: ((Se.flags |= e), (n.memoizedState = un(1 | t, u, l, a)));
	}
	function ds(e, t) {
		vi(8390656, 8, e, t);
	}
	function hs(e, t) {
		Pn(2048, 8, e, t);
	}
	function ms(e, t) {
		return Pn(4, 2, e, t);
	}
	function vs(e, t) {
		return Pn(4, 4, e, t);
	}
	function ys(e, t) {
		if (typeof t == 'function') {
			e = e();
			var l = t(e);
			return function () {
				typeof l == 'function' ? l() : t(null);
			};
		}
		if (t != null)
			return (
				(e = e()),
				(t.current = e),
				function () {
					t.current = null;
				}
			);
	}
	function gs(e, t, l) {
		(l = l != null ? l.concat([e]) : null), Pn(4, 4, ys.bind(null, t, e), l);
	}
	function oc() {}
	function ps(e, t) {
		var l = nt();
		t = t === void 0 ? null : t;
		var a = l.memoizedState;
		return t !== null && Ir(t, a[1]) ? a[0] : ((l.memoizedState = [e, t]), e);
	}
	function bs(e, t) {
		var l = nt();
		t = t === void 0 ? null : t;
		var a = l.memoizedState;
		if (t !== null && Ir(t, a[1])) return a[0];
		if (((a = e()), _a)) {
			It(!0);
			try {
				e();
			} finally {
				It(!1);
			}
		}
		return (l.memoizedState = [a, t]), a;
	}
	function sc(e, t, l) {
		return l === void 0 || (Ql & 1073741824) !== 0
			? (e.memoizedState = t)
			: ((e.memoizedState = l), (e = Rd()), (Se.lanes |= e), (Wl |= e), l);
	}
	function Ss(e, t, l, a) {
		return Ut(l, t)
			? l
			: ln.current !== null
			? ((e = sc(e, l, a)), Ut(e, t) || (ft = !0), e)
			: (Ql & 42) === 0
			? ((ft = !0), (e.memoizedState = l))
			: ((e = Rd()), (Se.lanes |= e), (Wl |= e), t);
	}
	function Es(e, t, l, a, n) {
		var u = V.p;
		V.p = u !== 0 && 8 > u ? u : 8;
		var c = _.T,
			d = {};
		(_.T = d), mc(e, !1, t, l);
		try {
			var g = n(),
				z = _.S;
			if (
				(z !== null && z(d, g),
				g !== null && typeof g == 'object' && typeof g.then == 'function')
			) {
				var L = Ev(g, a);
				In(e, t, L, Ht(e));
			} else In(e, t, a, Ht(e));
		} catch (G) {
			In(e, t, { then: function () {}, status: 'rejected', reason: G }, Ht());
		} finally {
			(V.p = u), (_.T = c);
		}
	}
	function Av() {}
	function dc(e, t, l, a) {
		if (e.tag !== 5) throw Error(o(476));
		var n = Rs(e).queue;
		Es(
			e,
			n,
			t,
			P,
			l === null
				? Av
				: function () {
						return Ts(e), l(a);
				  }
		);
	}
	function Rs(e) {
		var t = e.memoizedState;
		if (t !== null) return t;
		t = {
			memoizedState: P,
			baseState: P,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Ml,
				lastRenderedState: P,
			},
			next: null,
		};
		var l = {};
		return (
			(t.next = {
				memoizedState: l,
				baseState: l,
				baseQueue: null,
				queue: {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: Ml,
					lastRenderedState: l,
				},
				next: null,
			}),
			(e.memoizedState = t),
			(e = e.alternate),
			e !== null && (e.memoizedState = t),
			t
		);
	}
	function Ts(e) {
		var t = Rs(e).next.queue;
		In(e, t, {}, Ht());
	}
	function hc() {
		return gt(gu);
	}
	function Ms() {
		return nt().memoizedState;
	}
	function Ds() {
		return nt().memoizedState;
	}
	function zv(e) {
		for (var t = e.return; t !== null; ) {
			switch (t.tag) {
				case 24:
				case 3:
					var l = Ht();
					e = Gl(l);
					var a = Xl(t, e, l);
					a !== null && (Lt(a, t, l), Jn(a, t, l)),
						(t = { cache: Qr() }),
						(e.payload = t);
					return;
			}
			t = t.return;
		}
	}
	function Ov(e, t, l) {
		var a = Ht();
		(l = {
			lane: a,
			revertLane: 0,
			action: l,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
			yi(e)
				? zs(t, l)
				: ((l = Nr(e, t, l, a)), l !== null && (Lt(l, e, a), Os(l, t, a)));
	}
	function As(e, t, l) {
		var a = Ht();
		In(e, t, l, a);
	}
	function In(e, t, l, a) {
		var n = {
			lane: a,
			revertLane: 0,
			action: l,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		};
		if (yi(e)) zs(t, n);
		else {
			var u = e.alternate;
			if (
				e.lanes === 0 &&
				(u === null || u.lanes === 0) &&
				((u = t.lastRenderedReducer), u !== null)
			)
				try {
					var c = t.lastRenderedState,
						d = u(c, l);
					if (((n.hasEagerState = !0), (n.eagerState = d), Ut(d, c)))
						return Iu(e, t, n, 0), Qe === null && Pu(), !1;
				} catch {
				} finally {
				}
			if (((l = Nr(e, t, n, a)), l !== null))
				return Lt(l, e, a), Os(l, t, a), !0;
		}
		return !1;
	}
	function mc(e, t, l, a) {
		if (
			((a = {
				lane: 2,
				revertLane: Kc(),
				action: a,
				hasEagerState: !1,
				eagerState: null,
				next: null,
			}),
			yi(e))
		) {
			if (t) throw Error(o(479));
		} else (t = Nr(e, l, a, 2)), t !== null && Lt(t, e, 2);
	}
	function yi(e) {
		var t = e.alternate;
		return e === Se || (t !== null && t === Se);
	}
	function zs(e, t) {
		an = oi = !0;
		var l = e.pending;
		l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
			(e.pending = t);
	}
	function Os(e, t, l) {
		if ((l & 4194048) !== 0) {
			var a = t.lanes;
			(a &= e.pendingLanes), (l |= a), (t.lanes = l), ya(e, l);
		}
	}
	var gi = {
			readContext: gt,
			use: di,
			useCallback: tt,
			useContext: tt,
			useEffect: tt,
			useImperativeHandle: tt,
			useLayoutEffect: tt,
			useInsertionEffect: tt,
			useMemo: tt,
			useReducer: tt,
			useRef: tt,
			useState: tt,
			useDebugValue: tt,
			useDeferredValue: tt,
			useTransition: tt,
			useSyncExternalStore: tt,
			useId: tt,
			useHostTransitionStatus: tt,
			useFormState: tt,
			useActionState: tt,
			useOptimistic: tt,
			useMemoCache: tt,
			useCacheRefresh: tt,
		},
		_s = {
			readContext: gt,
			use: di,
			useCallback: function (e, t) {
				return (At().memoizedState = [e, t === void 0 ? null : t]), e;
			},
			useContext: gt,
			useEffect: ds,
			useImperativeHandle: function (e, t, l) {
				(l = l != null ? l.concat([e]) : null),
					vi(4194308, 4, ys.bind(null, t, e), l);
			},
			useLayoutEffect: function (e, t) {
				return vi(4194308, 4, e, t);
			},
			useInsertionEffect: function (e, t) {
				vi(4, 2, e, t);
			},
			useMemo: function (e, t) {
				var l = At();
				t = t === void 0 ? null : t;
				var a = e();
				if (_a) {
					It(!0);
					try {
						e();
					} finally {
						It(!1);
					}
				}
				return (l.memoizedState = [a, t]), a;
			},
			useReducer: function (e, t, l) {
				var a = At();
				if (l !== void 0) {
					var n = l(t);
					if (_a) {
						It(!0);
						try {
							l(t);
						} finally {
							It(!1);
						}
					}
				} else n = t;
				return (
					(a.memoizedState = a.baseState = n),
					(e = {
						pending: null,
						lanes: 0,
						dispatch: null,
						lastRenderedReducer: e,
						lastRenderedState: n,
					}),
					(a.queue = e),
					(e = e.dispatch = Ov.bind(null, Se, e)),
					[a.memoizedState, e]
				);
			},
			useRef: function (e) {
				var t = At();
				return (e = { current: e }), (t.memoizedState = e);
			},
			useState: function (e) {
				e = cc(e);
				var t = e.queue,
					l = As.bind(null, Se, t);
				return (t.dispatch = l), [e.memoizedState, l];
			},
			useDebugValue: oc,
			useDeferredValue: function (e, t) {
				var l = At();
				return sc(l, e, t);
			},
			useTransition: function () {
				var e = cc(!1);
				return (
					(e = Es.bind(null, Se, e.queue, !0, !1)),
					(At().memoizedState = e),
					[!1, e]
				);
			},
			useSyncExternalStore: function (e, t, l) {
				var a = Se,
					n = At();
				if (we) {
					if (l === void 0) throw Error(o(407));
					l = l();
				} else {
					if (((l = t()), Qe === null)) throw Error(o(349));
					(Oe & 124) !== 0 || Wo(a, t, l);
				}
				n.memoizedState = l;
				var u = { value: l, getSnapshot: t };
				return (
					(n.queue = u),
					ds(Po.bind(null, a, u, e), [e]),
					(a.flags |= 2048),
					un(9, mi(), Fo.bind(null, a, u, l, t), null),
					l
				);
			},
			useId: function () {
				var e = At(),
					t = Qe.identifierPrefix;
				if (we) {
					var l = El,
						a = Sl;
					(l = (a & ~(1 << (32 - dt(a) - 1))).toString(32) + l),
						(t = '«' + t + 'R' + l),
						(l = si++),
						0 < l && (t += 'H' + l.toString(32)),
						(t += '»');
				} else (l = Rv++), (t = '«' + t + 'r' + l.toString(32) + '»');
				return (e.memoizedState = t);
			},
			useHostTransitionStatus: hc,
			useFormState: rs,
			useActionState: rs,
			useOptimistic: function (e) {
				var t = At();
				t.memoizedState = t.baseState = e;
				var l = {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: null,
					lastRenderedState: null,
				};
				return (
					(t.queue = l),
					(t = mc.bind(null, Se, !0, l)),
					(l.dispatch = t),
					[e, t]
				);
			},
			useMemoCache: uc,
			useCacheRefresh: function () {
				return (At().memoizedState = zv.bind(null, Se));
			},
		},
		Us = {
			readContext: gt,
			use: di,
			useCallback: ps,
			useContext: gt,
			useEffect: hs,
			useImperativeHandle: gs,
			useInsertionEffect: ms,
			useLayoutEffect: vs,
			useMemo: bs,
			useReducer: hi,
			useRef: ss,
			useState: function () {
				return hi(Ml);
			},
			useDebugValue: oc,
			useDeferredValue: function (e, t) {
				var l = nt();
				return Ss(l, qe.memoizedState, e, t);
			},
			useTransition: function () {
				var e = hi(Ml)[0],
					t = nt().memoizedState;
				return [typeof e == 'boolean' ? e : Fn(e), t];
			},
			useSyncExternalStore: ko,
			useId: Ms,
			useHostTransitionStatus: hc,
			useFormState: cs,
			useActionState: cs,
			useOptimistic: function (e, t) {
				var l = nt();
				return ts(l, qe, e, t);
			},
			useMemoCache: uc,
			useCacheRefresh: Ds,
		},
		_v = {
			readContext: gt,
			use: di,
			useCallback: ps,
			useContext: gt,
			useEffect: hs,
			useImperativeHandle: gs,
			useInsertionEffect: ms,
			useLayoutEffect: vs,
			useMemo: bs,
			useReducer: rc,
			useRef: ss,
			useState: function () {
				return rc(Ml);
			},
			useDebugValue: oc,
			useDeferredValue: function (e, t) {
				var l = nt();
				return qe === null ? sc(l, e, t) : Ss(l, qe.memoizedState, e, t);
			},
			useTransition: function () {
				var e = rc(Ml)[0],
					t = nt().memoizedState;
				return [typeof e == 'boolean' ? e : Fn(e), t];
			},
			useSyncExternalStore: ko,
			useId: Ms,
			useHostTransitionStatus: hc,
			useFormState: os,
			useActionState: os,
			useOptimistic: function (e, t) {
				var l = nt();
				return qe !== null
					? ts(l, qe, e, t)
					: ((l.baseState = e), [e, l.queue.dispatch]);
			},
			useMemoCache: uc,
			useCacheRefresh: Ds,
		},
		rn = null,
		eu = 0;
	function pi(e) {
		var t = eu;
		return (eu += 1), rn === null && (rn = []), Go(rn, e, t);
	}
	function tu(e, t) {
		(t = t.props.ref), (e.ref = t !== void 0 ? t : null);
	}
	function bi(e, t) {
		throw t.$$typeof === N
			? Error(o(525))
			: ((e = Object.prototype.toString.call(t)),
			  Error(
					o(
						31,
						e === '[object Object]'
							? 'object with keys {' + Object.keys(t).join(', ') + '}'
							: e
					)
			  ));
	}
	function xs(e) {
		var t = e._init;
		return t(e._payload);
	}
	function Cs(e) {
		function t(T, E) {
			if (e) {
				var A = T.deletions;
				A === null ? ((T.deletions = [E]), (T.flags |= 16)) : A.push(E);
			}
		}
		function l(T, E) {
			if (!e) return null;
			for (; E !== null; ) t(T, E), (E = E.sibling);
			return null;
		}
		function a(T) {
			for (var E = new Map(); T !== null; )
				T.key !== null ? E.set(T.key, T) : E.set(T.index, T), (T = T.sibling);
			return E;
		}
		function n(T, E) {
			return (T = bl(T, E)), (T.index = 0), (T.sibling = null), T;
		}
		function u(T, E, A) {
			return (
				(T.index = A),
				e
					? ((A = T.alternate),
					  A !== null
							? ((A = A.index), A < E ? ((T.flags |= 67108866), E) : A)
							: ((T.flags |= 67108866), E))
					: ((T.flags |= 1048576), E)
			);
		}
		function c(T) {
			return e && T.alternate === null && (T.flags |= 67108866), T;
		}
		function d(T, E, A, Y) {
			return E === null || E.tag !== 6
				? ((E = Hr(A, T.mode, Y)), (E.return = T), E)
				: ((E = n(E, A)), (E.return = T), E);
		}
		function g(T, E, A, Y) {
			var I = A.type;
			return I === w
				? L(T, E, A.props.children, Y, A.key)
				: E !== null &&
				  (E.elementType === I ||
						(typeof I == 'object' &&
							I !== null &&
							I.$$typeof === pe &&
							xs(I) === E.type))
				? ((E = n(E, A.props)), tu(E, A), (E.return = T), E)
				: ((E = ti(A.type, A.key, A.props, null, T.mode, Y)),
				  tu(E, A),
				  (E.return = T),
				  E);
		}
		function z(T, E, A, Y) {
			return E === null ||
				E.tag !== 4 ||
				E.stateNode.containerInfo !== A.containerInfo ||
				E.stateNode.implementation !== A.implementation
				? ((E = Lr(A, T.mode, Y)), (E.return = T), E)
				: ((E = n(E, A.children || [])), (E.return = T), E);
		}
		function L(T, E, A, Y, I) {
			return E === null || E.tag !== 7
				? ((E = Ea(A, T.mode, Y, I)), (E.return = T), E)
				: ((E = n(E, A)), (E.return = T), E);
		}
		function G(T, E, A) {
			if (
				(typeof E == 'string' && E !== '') ||
				typeof E == 'number' ||
				typeof E == 'bigint'
			)
				return (E = Hr('' + E, T.mode, A)), (E.return = T), E;
			if (typeof E == 'object' && E !== null) {
				switch (E.$$typeof) {
					case M:
						return (
							(A = ti(E.type, E.key, E.props, null, T.mode, A)),
							tu(A, E),
							(A.return = T),
							A
						);
					case B:
						return (E = Lr(E, T.mode, A)), (E.return = T), E;
					case pe:
						var Y = E._init;
						return (E = Y(E._payload)), G(T, E, A);
				}
				if (He(E) || Ke(E))
					return (E = Ea(E, T.mode, A, null)), (E.return = T), E;
				if (typeof E.then == 'function') return G(T, pi(E), A);
				if (E.$$typeof === k) return G(T, ui(T, E), A);
				bi(T, E);
			}
			return null;
		}
		function O(T, E, A, Y) {
			var I = E !== null ? E.key : null;
			if (
				(typeof A == 'string' && A !== '') ||
				typeof A == 'number' ||
				typeof A == 'bigint'
			)
				return I !== null ? null : d(T, E, '' + A, Y);
			if (typeof A == 'object' && A !== null) {
				switch (A.$$typeof) {
					case M:
						return A.key === I ? g(T, E, A, Y) : null;
					case B:
						return A.key === I ? z(T, E, A, Y) : null;
					case pe:
						return (I = A._init), (A = I(A._payload)), O(T, E, A, Y);
				}
				if (He(A) || Ke(A)) return I !== null ? null : L(T, E, A, Y, null);
				if (typeof A.then == 'function') return O(T, E, pi(A), Y);
				if (A.$$typeof === k) return O(T, E, ui(T, A), Y);
				bi(T, A);
			}
			return null;
		}
		function U(T, E, A, Y, I) {
			if (
				(typeof Y == 'string' && Y !== '') ||
				typeof Y == 'number' ||
				typeof Y == 'bigint'
			)
				return (T = T.get(A) || null), d(E, T, '' + Y, I);
			if (typeof Y == 'object' && Y !== null) {
				switch (Y.$$typeof) {
					case M:
						return (
							(T = T.get(Y.key === null ? A : Y.key) || null), g(E, T, Y, I)
						);
					case B:
						return (
							(T = T.get(Y.key === null ? A : Y.key) || null), z(E, T, Y, I)
						);
					case pe:
						var Re = Y._init;
						return (Y = Re(Y._payload)), U(T, E, A, Y, I);
				}
				if (He(Y) || Ke(Y)) return (T = T.get(A) || null), L(E, T, Y, I, null);
				if (typeof Y.then == 'function') return U(T, E, A, pi(Y), I);
				if (Y.$$typeof === k) return U(T, E, A, ui(E, Y), I);
				bi(E, Y);
			}
			return null;
		}
		function de(T, E, A, Y) {
			for (
				var I = null, Re = null, ae = E, fe = (E = 0), st = null;
				ae !== null && fe < A.length;
				fe++
			) {
				ae.index > fe ? ((st = ae), (ae = null)) : (st = ae.sibling);
				var Ce = O(T, ae, A[fe], Y);
				if (Ce === null) {
					ae === null && (ae = st);
					break;
				}
				e && ae && Ce.alternate === null && t(T, ae),
					(E = u(Ce, E, fe)),
					Re === null ? (I = Ce) : (Re.sibling = Ce),
					(Re = Ce),
					(ae = st);
			}
			if (fe === A.length) return l(T, ae), we && Ta(T, fe), I;
			if (ae === null) {
				for (; fe < A.length; fe++)
					(ae = G(T, A[fe], Y)),
						ae !== null &&
							((E = u(ae, E, fe)),
							Re === null ? (I = ae) : (Re.sibling = ae),
							(Re = ae));
				return we && Ta(T, fe), I;
			}
			for (ae = a(ae); fe < A.length; fe++)
				(st = U(ae, T, fe, A[fe], Y)),
					st !== null &&
						(e &&
							st.alternate !== null &&
							ae.delete(st.key === null ? fe : st.key),
						(E = u(st, E, fe)),
						Re === null ? (I = st) : (Re.sibling = st),
						(Re = st));
			return (
				e &&
					ae.forEach(function (ua) {
						return t(T, ua);
					}),
				we && Ta(T, fe),
				I
			);
		}
		function re(T, E, A, Y) {
			if (A == null) throw Error(o(151));
			for (
				var I = null, Re = null, ae = E, fe = (E = 0), st = null, Ce = A.next();
				ae !== null && !Ce.done;
				fe++, Ce = A.next()
			) {
				ae.index > fe ? ((st = ae), (ae = null)) : (st = ae.sibling);
				var ua = O(T, ae, Ce.value, Y);
				if (ua === null) {
					ae === null && (ae = st);
					break;
				}
				e && ae && ua.alternate === null && t(T, ae),
					(E = u(ua, E, fe)),
					Re === null ? (I = ua) : (Re.sibling = ua),
					(Re = ua),
					(ae = st);
			}
			if (Ce.done) return l(T, ae), we && Ta(T, fe), I;
			if (ae === null) {
				for (; !Ce.done; fe++, Ce = A.next())
					(Ce = G(T, Ce.value, Y)),
						Ce !== null &&
							((E = u(Ce, E, fe)),
							Re === null ? (I = Ce) : (Re.sibling = Ce),
							(Re = Ce));
				return we && Ta(T, fe), I;
			}
			for (ae = a(ae); !Ce.done; fe++, Ce = A.next())
				(Ce = U(ae, T, fe, Ce.value, Y)),
					Ce !== null &&
						(e &&
							Ce.alternate !== null &&
							ae.delete(Ce.key === null ? fe : Ce.key),
						(E = u(Ce, E, fe)),
						Re === null ? (I = Ce) : (Re.sibling = Ce),
						(Re = Ce));
			return (
				e &&
					ae.forEach(function (Uy) {
						return t(T, Uy);
					}),
				we && Ta(T, fe),
				I
			);
		}
		function je(T, E, A, Y) {
			if (
				(typeof A == 'object' &&
					A !== null &&
					A.type === w &&
					A.key === null &&
					(A = A.props.children),
				typeof A == 'object' && A !== null)
			) {
				switch (A.$$typeof) {
					case M:
						e: {
							for (var I = A.key; E !== null; ) {
								if (E.key === I) {
									if (((I = A.type), I === w)) {
										if (E.tag === 7) {
											l(T, E.sibling),
												(Y = n(E, A.props.children)),
												(Y.return = T),
												(T = Y);
											break e;
										}
									} else if (
										E.elementType === I ||
										(typeof I == 'object' &&
											I !== null &&
											I.$$typeof === pe &&
											xs(I) === E.type)
									) {
										l(T, E.sibling),
											(Y = n(E, A.props)),
											tu(Y, A),
											(Y.return = T),
											(T = Y);
										break e;
									}
									l(T, E);
									break;
								} else t(T, E);
								E = E.sibling;
							}
							A.type === w
								? ((Y = Ea(A.props.children, T.mode, Y, A.key)),
								  (Y.return = T),
								  (T = Y))
								: ((Y = ti(A.type, A.key, A.props, null, T.mode, Y)),
								  tu(Y, A),
								  (Y.return = T),
								  (T = Y));
						}
						return c(T);
					case B:
						e: {
							for (I = A.key; E !== null; ) {
								if (E.key === I)
									if (
										E.tag === 4 &&
										E.stateNode.containerInfo === A.containerInfo &&
										E.stateNode.implementation === A.implementation
									) {
										l(T, E.sibling),
											(Y = n(E, A.children || [])),
											(Y.return = T),
											(T = Y);
										break e;
									} else {
										l(T, E);
										break;
									}
								else t(T, E);
								E = E.sibling;
							}
							(Y = Lr(A, T.mode, Y)), (Y.return = T), (T = Y);
						}
						return c(T);
					case pe:
						return (I = A._init), (A = I(A._payload)), je(T, E, A, Y);
				}
				if (He(A)) return de(T, E, A, Y);
				if (Ke(A)) {
					if (((I = Ke(A)), typeof I != 'function')) throw Error(o(150));
					return (A = I.call(A)), re(T, E, A, Y);
				}
				if (typeof A.then == 'function') return je(T, E, pi(A), Y);
				if (A.$$typeof === k) return je(T, E, ui(T, A), Y);
				bi(T, A);
			}
			return (typeof A == 'string' && A !== '') ||
				typeof A == 'number' ||
				typeof A == 'bigint'
				? ((A = '' + A),
				  E !== null && E.tag === 6
						? (l(T, E.sibling), (Y = n(E, A)), (Y.return = T), (T = Y))
						: (l(T, E), (Y = Hr(A, T.mode, Y)), (Y.return = T), (T = Y)),
				  c(T))
				: l(T, E);
		}
		return function (T, E, A, Y) {
			try {
				eu = 0;
				var I = je(T, E, A, Y);
				return (rn = null), I;
			} catch (ae) {
				if (ae === Zn || ae === ri) throw ae;
				var Re = xt(29, ae, null, T.mode);
				return (Re.lanes = Y), (Re.return = T), Re;
			} finally {
			}
		};
	}
	var cn = Cs(!0),
		Ns = Cs(!1),
		Kt = j(null),
		fl = null;
	function Vl(e) {
		var t = e.alternate;
		K(ct, ct.current & 1),
			K(Kt, e),
			fl === null &&
				(t === null || ln.current !== null || t.memoizedState !== null) &&
				(fl = e);
	}
	function ws(e) {
		if (e.tag === 22) {
			if ((K(ct, ct.current), K(Kt, e), fl === null)) {
				var t = e.alternate;
				t !== null && t.memoizedState !== null && (fl = e);
			}
		} else Zl();
	}
	function Zl() {
		K(ct, ct.current), K(Kt, Kt.current);
	}
	function Dl(e) {
		J(Kt), fl === e && (fl = null), J(ct);
	}
	var ct = j(0);
	function Si(e) {
		for (var t = e; t !== null; ) {
			if (t.tag === 13) {
				var l = t.memoizedState;
				if (
					l !== null &&
					((l = l.dehydrated), l === null || l.data === '$?' || nf(l))
				)
					return t;
			} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
				if ((t.flags & 128) !== 0) return t;
			} else if (t.child !== null) {
				(t.child.return = t), (t = t.child);
				continue;
			}
			if (t === e) break;
			for (; t.sibling === null; ) {
				if (t.return === null || t.return === e) return null;
				t = t.return;
			}
			(t.sibling.return = t.return), (t = t.sibling);
		}
		return null;
	}
	function vc(e, t, l, a) {
		(t = e.memoizedState),
			(l = l(a, t)),
			(l = l == null ? t : R({}, t, l)),
			(e.memoizedState = l),
			e.lanes === 0 && (e.updateQueue.baseState = l);
	}
	var yc = {
		enqueueSetState: function (e, t, l) {
			e = e._reactInternals;
			var a = Ht(),
				n = Gl(a);
			(n.payload = t),
				l != null && (n.callback = l),
				(t = Xl(e, n, a)),
				t !== null && (Lt(t, e, a), Jn(t, e, a));
		},
		enqueueReplaceState: function (e, t, l) {
			e = e._reactInternals;
			var a = Ht(),
				n = Gl(a);
			(n.tag = 1),
				(n.payload = t),
				l != null && (n.callback = l),
				(t = Xl(e, n, a)),
				t !== null && (Lt(t, e, a), Jn(t, e, a));
		},
		enqueueForceUpdate: function (e, t) {
			e = e._reactInternals;
			var l = Ht(),
				a = Gl(l);
			(a.tag = 2),
				t != null && (a.callback = t),
				(t = Xl(e, a, l)),
				t !== null && (Lt(t, e, l), Jn(t, e, l));
		},
	};
	function Hs(e, t, l, a, n, u, c) {
		return (
			(e = e.stateNode),
			typeof e.shouldComponentUpdate == 'function'
				? e.shouldComponentUpdate(a, u, c)
				: t.prototype && t.prototype.isPureReactComponent
				? !Bn(l, a) || !Bn(n, u)
				: !0
		);
	}
	function Ls(e, t, l, a) {
		(e = t.state),
			typeof t.componentWillReceiveProps == 'function' &&
				t.componentWillReceiveProps(l, a),
			typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
				t.UNSAFE_componentWillReceiveProps(l, a),
			t.state !== e && yc.enqueueReplaceState(t, t.state, null);
	}
	function Ua(e, t) {
		var l = t;
		if ('ref' in t) {
			l = {};
			for (var a in t) a !== 'ref' && (l[a] = t[a]);
		}
		if ((e = e.defaultProps)) {
			l === t && (l = R({}, l));
			for (var n in e) l[n] === void 0 && (l[n] = e[n]);
		}
		return l;
	}
	var Ei =
		typeof reportError == 'function'
			? reportError
			: function (e) {
					if (
						typeof window == 'object' &&
						typeof window.ErrorEvent == 'function'
					) {
						var t = new window.ErrorEvent('error', {
							bubbles: !0,
							cancelable: !0,
							message:
								typeof e == 'object' &&
								e !== null &&
								typeof e.message == 'string'
									? String(e.message)
									: String(e),
							error: e,
						});
						if (!window.dispatchEvent(t)) return;
					} else if (
						typeof process == 'object' &&
						typeof process.emit == 'function'
					) {
						process.emit('uncaughtException', e);
						return;
					}
					console.error(e);
			  };
	function Bs(e) {
		Ei(e);
	}
	function qs(e) {
		console.error(e);
	}
	function Ys(e) {
		Ei(e);
	}
	function Ri(e, t) {
		try {
			var l = e.onUncaughtError;
			l(t.value, { componentStack: t.stack });
		} catch (a) {
			setTimeout(function () {
				throw a;
			});
		}
	}
	function js(e, t, l) {
		try {
			var a = e.onCaughtError;
			a(l.value, {
				componentStack: l.stack,
				errorBoundary: t.tag === 1 ? t.stateNode : null,
			});
		} catch (n) {
			setTimeout(function () {
				throw n;
			});
		}
	}
	function gc(e, t, l) {
		return (
			(l = Gl(l)),
			(l.tag = 3),
			(l.payload = { element: null }),
			(l.callback = function () {
				Ri(e, t);
			}),
			l
		);
	}
	function Gs(e) {
		return (e = Gl(e)), (e.tag = 3), e;
	}
	function Xs(e, t, l, a) {
		var n = l.type.getDerivedStateFromError;
		if (typeof n == 'function') {
			var u = a.value;
			(e.payload = function () {
				return n(u);
			}),
				(e.callback = function () {
					js(t, l, a);
				});
		}
		var c = l.stateNode;
		c !== null &&
			typeof c.componentDidCatch == 'function' &&
			(e.callback = function () {
				js(t, l, a),
					typeof n != 'function' &&
						(Fl === null ? (Fl = new Set([this])) : Fl.add(this));
				var d = a.stack;
				this.componentDidCatch(a.value, {
					componentStack: d !== null ? d : '',
				});
			});
	}
	function Uv(e, t, l, a, n) {
		if (
			((l.flags |= 32768),
			a !== null && typeof a == 'object' && typeof a.then == 'function')
		) {
			if (
				((t = l.alternate),
				t !== null && Xn(t, l, n, !0),
				(l = Kt.current),
				l !== null)
			) {
				switch (l.tag) {
					case 13:
						return (
							fl === null ? Gc() : l.alternate === null && Ie === 0 && (Ie = 3),
							(l.flags &= -257),
							(l.flags |= 65536),
							(l.lanes = n),
							a === Kr
								? (l.flags |= 16384)
								: ((t = l.updateQueue),
								  t === null ? (l.updateQueue = new Set([a])) : t.add(a),
								  Qc(e, a, n)),
							!1
						);
					case 22:
						return (
							(l.flags |= 65536),
							a === Kr
								? (l.flags |= 16384)
								: ((t = l.updateQueue),
								  t === null
										? ((t = {
												transitions: null,
												markerInstances: null,
												retryQueue: new Set([a]),
										  }),
										  (l.updateQueue = t))
										: ((l = t.retryQueue),
										  l === null ? (t.retryQueue = new Set([a])) : l.add(a)),
								  Qc(e, a, n)),
							!1
						);
				}
				throw Error(o(435, l.tag));
			}
			return Qc(e, a, n), Gc(), !1;
		}
		if (we)
			return (
				(t = Kt.current),
				t !== null
					? ((t.flags & 65536) === 0 && (t.flags |= 256),
					  (t.flags |= 65536),
					  (t.lanes = n),
					  a !== Yr && ((e = Error(o(422), { cause: a })), Gn(Xt(e, l))))
					: (a !== Yr && ((t = Error(o(423), { cause: a })), Gn(Xt(t, l))),
					  (e = e.current.alternate),
					  (e.flags |= 65536),
					  (n &= -n),
					  (e.lanes |= n),
					  (a = Xt(a, l)),
					  (n = gc(e.stateNode, a, n)),
					  kr(e, n),
					  Ie !== 4 && (Ie = 2)),
				!1
			);
		var u = Error(o(520), { cause: a });
		if (
			((u = Xt(u, l)),
			cu === null ? (cu = [u]) : cu.push(u),
			Ie !== 4 && (Ie = 2),
			t === null)
		)
			return !0;
		(a = Xt(a, l)), (l = t);
		do {
			switch (l.tag) {
				case 3:
					return (
						(l.flags |= 65536),
						(e = n & -n),
						(l.lanes |= e),
						(e = gc(l.stateNode, a, e)),
						kr(l, e),
						!1
					);
				case 1:
					if (
						((t = l.type),
						(u = l.stateNode),
						(l.flags & 128) === 0 &&
							(typeof t.getDerivedStateFromError == 'function' ||
								(u !== null &&
									typeof u.componentDidCatch == 'function' &&
									(Fl === null || !Fl.has(u)))))
					)
						return (
							(l.flags |= 65536),
							(n &= -n),
							(l.lanes |= n),
							(n = Gs(n)),
							Xs(n, e, l, a),
							kr(l, n),
							!1
						);
			}
			l = l.return;
		} while (l !== null);
		return !1;
	}
	var Qs = Error(o(461)),
		ft = !1;
	function ht(e, t, l, a) {
		t.child = e === null ? Ns(t, null, l, a) : cn(t, e.child, l, a);
	}
	function Vs(e, t, l, a, n) {
		l = l.render;
		var u = t.ref;
		if ('ref' in a) {
			var c = {};
			for (var d in a) d !== 'ref' && (c[d] = a[d]);
		} else c = a;
		return (
			za(t),
			(a = ec(e, t, l, c, u, n)),
			(d = tc()),
			e !== null && !ft
				? (lc(e, t, n), Al(e, t, n))
				: (we && d && Br(t), (t.flags |= 1), ht(e, t, a, n), t.child)
		);
	}
	function Zs(e, t, l, a, n) {
		if (e === null) {
			var u = l.type;
			return typeof u == 'function' &&
				!wr(u) &&
				u.defaultProps === void 0 &&
				l.compare === null
				? ((t.tag = 15), (t.type = u), Ks(e, t, u, a, n))
				: ((e = ti(l.type, null, a, t, t.mode, n)),
				  (e.ref = t.ref),
				  (e.return = t),
				  (t.child = e));
		}
		if (((u = e.child), !Dc(e, n))) {
			var c = u.memoizedProps;
			if (
				((l = l.compare), (l = l !== null ? l : Bn), l(c, a) && e.ref === t.ref)
			)
				return Al(e, t, n);
		}
		return (
			(t.flags |= 1),
			(e = bl(u, a)),
			(e.ref = t.ref),
			(e.return = t),
			(t.child = e)
		);
	}
	function Ks(e, t, l, a, n) {
		if (e !== null) {
			var u = e.memoizedProps;
			if (Bn(u, a) && e.ref === t.ref)
				if (((ft = !1), (t.pendingProps = a = u), Dc(e, n)))
					(e.flags & 131072) !== 0 && (ft = !0);
				else return (t.lanes = e.lanes), Al(e, t, n);
		}
		return pc(e, t, l, a, n);
	}
	function Js(e, t, l) {
		var a = t.pendingProps,
			n = a.children,
			u = e !== null ? e.memoizedState : null;
		if (a.mode === 'hidden') {
			if ((t.flags & 128) !== 0) {
				if (((a = u !== null ? u.baseLanes | l : l), e !== null)) {
					for (n = t.child = e.child, u = 0; n !== null; )
						(u = u | n.lanes | n.childLanes), (n = n.sibling);
					t.childLanes = u & ~a;
				} else (t.childLanes = 0), (t.child = null);
				return $s(e, t, a, l);
			}
			if ((l & 536870912) !== 0)
				(t.memoizedState = { baseLanes: 0, cachePool: null }),
					e !== null && ii(t, u !== null ? u.cachePool : null),
					u !== null ? Ko(t, u) : Fr(),
					ws(t);
			else
				return (
					(t.lanes = t.childLanes = 536870912),
					$s(e, t, u !== null ? u.baseLanes | l : l, l)
				);
		} else
			u !== null
				? (ii(t, u.cachePool), Ko(t, u), Zl(), (t.memoizedState = null))
				: (e !== null && ii(t, null), Fr(), Zl());
		return ht(e, t, n, l), t.child;
	}
	function $s(e, t, l, a) {
		var n = Zr();
		return (
			(n = n === null ? null : { parent: rt._currentValue, pool: n }),
			(t.memoizedState = { baseLanes: l, cachePool: n }),
			e !== null && ii(t, null),
			Fr(),
			ws(t),
			e !== null && Xn(e, t, a, !0),
			null
		);
	}
	function Ti(e, t) {
		var l = t.ref;
		if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
		else {
			if (typeof l != 'function' && typeof l != 'object') throw Error(o(284));
			(e === null || e.ref !== l) && (t.flags |= 4194816);
		}
	}
	function pc(e, t, l, a, n) {
		return (
			za(t),
			(l = ec(e, t, l, a, void 0, n)),
			(a = tc()),
			e !== null && !ft
				? (lc(e, t, n), Al(e, t, n))
				: (we && a && Br(t), (t.flags |= 1), ht(e, t, l, n), t.child)
		);
	}
	function ks(e, t, l, a, n, u) {
		return (
			za(t),
			(t.updateQueue = null),
			(l = $o(t, a, l, n)),
			Jo(e),
			(a = tc()),
			e !== null && !ft
				? (lc(e, t, u), Al(e, t, u))
				: (we && a && Br(t), (t.flags |= 1), ht(e, t, l, u), t.child)
		);
	}
	function Ws(e, t, l, a, n) {
		if ((za(t), t.stateNode === null)) {
			var u = Fa,
				c = l.contextType;
			typeof c == 'object' && c !== null && (u = gt(c)),
				(u = new l(a, u)),
				(t.memoizedState =
					u.state !== null && u.state !== void 0 ? u.state : null),
				(u.updater = yc),
				(t.stateNode = u),
				(u._reactInternals = t),
				(u = t.stateNode),
				(u.props = a),
				(u.state = t.memoizedState),
				(u.refs = {}),
				Jr(t),
				(c = l.contextType),
				(u.context = typeof c == 'object' && c !== null ? gt(c) : Fa),
				(u.state = t.memoizedState),
				(c = l.getDerivedStateFromProps),
				typeof c == 'function' && (vc(t, l, c, a), (u.state = t.memoizedState)),
				typeof l.getDerivedStateFromProps == 'function' ||
					typeof u.getSnapshotBeforeUpdate == 'function' ||
					(typeof u.UNSAFE_componentWillMount != 'function' &&
						typeof u.componentWillMount != 'function') ||
					((c = u.state),
					typeof u.componentWillMount == 'function' && u.componentWillMount(),
					typeof u.UNSAFE_componentWillMount == 'function' &&
						u.UNSAFE_componentWillMount(),
					c !== u.state && yc.enqueueReplaceState(u, u.state, null),
					kn(t, a, u, n),
					$n(),
					(u.state = t.memoizedState)),
				typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
				(a = !0);
		} else if (e === null) {
			u = t.stateNode;
			var d = t.memoizedProps,
				g = Ua(l, d);
			u.props = g;
			var z = u.context,
				L = l.contextType;
			(c = Fa), typeof L == 'object' && L !== null && (c = gt(L));
			var G = l.getDerivedStateFromProps;
			(L =
				typeof G == 'function' ||
				typeof u.getSnapshotBeforeUpdate == 'function'),
				(d = t.pendingProps !== d),
				L ||
					(typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
						typeof u.componentWillReceiveProps != 'function') ||
					((d || z !== c) && Ls(t, u, a, c)),
				(jl = !1);
			var O = t.memoizedState;
			(u.state = O),
				kn(t, a, u, n),
				$n(),
				(z = t.memoizedState),
				d || O !== z || jl
					? (typeof G == 'function' && (vc(t, l, G, a), (z = t.memoizedState)),
					  (g = jl || Hs(t, l, g, a, O, z, c))
							? (L ||
									(typeof u.UNSAFE_componentWillMount != 'function' &&
										typeof u.componentWillMount != 'function') ||
									(typeof u.componentWillMount == 'function' &&
										u.componentWillMount(),
									typeof u.UNSAFE_componentWillMount == 'function' &&
										u.UNSAFE_componentWillMount()),
							  typeof u.componentDidMount == 'function' &&
									(t.flags |= 4194308))
							: (typeof u.componentDidMount == 'function' &&
									(t.flags |= 4194308),
							  (t.memoizedProps = a),
							  (t.memoizedState = z)),
					  (u.props = a),
					  (u.state = z),
					  (u.context = c),
					  (a = g))
					: (typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
					  (a = !1));
		} else {
			(u = t.stateNode),
				$r(e, t),
				(c = t.memoizedProps),
				(L = Ua(l, c)),
				(u.props = L),
				(G = t.pendingProps),
				(O = u.context),
				(z = l.contextType),
				(g = Fa),
				typeof z == 'object' && z !== null && (g = gt(z)),
				(d = l.getDerivedStateFromProps),
				(z =
					typeof d == 'function' ||
					typeof u.getSnapshotBeforeUpdate == 'function') ||
					(typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
						typeof u.componentWillReceiveProps != 'function') ||
					((c !== G || O !== g) && Ls(t, u, a, g)),
				(jl = !1),
				(O = t.memoizedState),
				(u.state = O),
				kn(t, a, u, n),
				$n();
			var U = t.memoizedState;
			c !== G ||
			O !== U ||
			jl ||
			(e !== null && e.dependencies !== null && ni(e.dependencies))
				? (typeof d == 'function' && (vc(t, l, d, a), (U = t.memoizedState)),
				  (L =
						jl ||
						Hs(t, l, L, a, O, U, g) ||
						(e !== null && e.dependencies !== null && ni(e.dependencies)))
						? (z ||
								(typeof u.UNSAFE_componentWillUpdate != 'function' &&
									typeof u.componentWillUpdate != 'function') ||
								(typeof u.componentWillUpdate == 'function' &&
									u.componentWillUpdate(a, U, g),
								typeof u.UNSAFE_componentWillUpdate == 'function' &&
									u.UNSAFE_componentWillUpdate(a, U, g)),
						  typeof u.componentDidUpdate == 'function' && (t.flags |= 4),
						  typeof u.getSnapshotBeforeUpdate == 'function' &&
								(t.flags |= 1024))
						: (typeof u.componentDidUpdate != 'function' ||
								(c === e.memoizedProps && O === e.memoizedState) ||
								(t.flags |= 4),
						  typeof u.getSnapshotBeforeUpdate != 'function' ||
								(c === e.memoizedProps && O === e.memoizedState) ||
								(t.flags |= 1024),
						  (t.memoizedProps = a),
						  (t.memoizedState = U)),
				  (u.props = a),
				  (u.state = U),
				  (u.context = g),
				  (a = L))
				: (typeof u.componentDidUpdate != 'function' ||
						(c === e.memoizedProps && O === e.memoizedState) ||
						(t.flags |= 4),
				  typeof u.getSnapshotBeforeUpdate != 'function' ||
						(c === e.memoizedProps && O === e.memoizedState) ||
						(t.flags |= 1024),
				  (a = !1));
		}
		return (
			(u = a),
			Ti(e, t),
			(a = (t.flags & 128) !== 0),
			u || a
				? ((u = t.stateNode),
				  (l =
						a && typeof l.getDerivedStateFromError != 'function'
							? null
							: u.render()),
				  (t.flags |= 1),
				  e !== null && a
						? ((t.child = cn(t, e.child, null, n)),
						  (t.child = cn(t, null, l, n)))
						: ht(e, t, l, n),
				  (t.memoizedState = u.state),
				  (e = t.child))
				: (e = Al(e, t, n)),
			e
		);
	}
	function Fs(e, t, l, a) {
		return jn(), (t.flags |= 256), ht(e, t, l, a), t.child;
	}
	var bc = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null,
	};
	function Sc(e) {
		return { baseLanes: e, cachePool: qo() };
	}
	function Ec(e, t, l) {
		return (e = e !== null ? e.childLanes & ~l : 0), t && (e |= Jt), e;
	}
	function Ps(e, t, l) {
		var a = t.pendingProps,
			n = !1,
			u = (t.flags & 128) !== 0,
			c;
		if (
			((c = u) ||
				(c =
					e !== null && e.memoizedState === null ? !1 : (ct.current & 2) !== 0),
			c && ((n = !0), (t.flags &= -129)),
			(c = (t.flags & 32) !== 0),
			(t.flags &= -33),
			e === null)
		) {
			if (we) {
				if ((n ? Vl(t) : Zl(), we)) {
					var d = Pe,
						g;
					if ((g = d)) {
						e: {
							for (g = d, d = cl; g.nodeType !== 8; ) {
								if (!d) {
									d = null;
									break e;
								}
								if (((g = nl(g.nextSibling)), g === null)) {
									d = null;
									break e;
								}
							}
							d = g;
						}
						d !== null
							? ((t.memoizedState = {
									dehydrated: d,
									treeContext: Ra !== null ? { id: Sl, overflow: El } : null,
									retryLane: 536870912,
									hydrationErrors: null,
							  }),
							  (g = xt(18, null, null, 0)),
							  (g.stateNode = d),
							  (g.return = t),
							  (t.child = g),
							  (Et = t),
							  (Pe = null),
							  (g = !0))
							: (g = !1);
					}
					g || Da(t);
				}
				if (
					((d = t.memoizedState),
					d !== null && ((d = d.dehydrated), d !== null))
				)
					return nf(d) ? (t.lanes = 32) : (t.lanes = 536870912), null;
				Dl(t);
			}
			return (
				(d = a.children),
				(a = a.fallback),
				n
					? (Zl(),
					  (n = t.mode),
					  (d = Mi({ mode: 'hidden', children: d }, n)),
					  (a = Ea(a, n, l, null)),
					  (d.return = t),
					  (a.return = t),
					  (d.sibling = a),
					  (t.child = d),
					  (n = t.child),
					  (n.memoizedState = Sc(l)),
					  (n.childLanes = Ec(e, c, l)),
					  (t.memoizedState = bc),
					  a)
					: (Vl(t), Rc(t, d))
			);
		}
		if (
			((g = e.memoizedState), g !== null && ((d = g.dehydrated), d !== null))
		) {
			if (u)
				t.flags & 256
					? (Vl(t), (t.flags &= -257), (t = Tc(e, t, l)))
					: t.memoizedState !== null
					? (Zl(), (t.child = e.child), (t.flags |= 128), (t = null))
					: (Zl(),
					  (n = a.fallback),
					  (d = t.mode),
					  (a = Mi({ mode: 'visible', children: a.children }, d)),
					  (n = Ea(n, d, l, null)),
					  (n.flags |= 2),
					  (a.return = t),
					  (n.return = t),
					  (a.sibling = n),
					  (t.child = a),
					  cn(t, e.child, null, l),
					  (a = t.child),
					  (a.memoizedState = Sc(l)),
					  (a.childLanes = Ec(e, c, l)),
					  (t.memoizedState = bc),
					  (t = n));
			else if ((Vl(t), nf(d))) {
				if (((c = d.nextSibling && d.nextSibling.dataset), c)) var z = c.dgst;
				(c = z),
					(a = Error(o(419))),
					(a.stack = ''),
					(a.digest = c),
					Gn({ value: a, source: null, stack: null }),
					(t = Tc(e, t, l));
			} else if (
				(ft || Xn(e, t, l, !1), (c = (l & e.childLanes) !== 0), ft || c)
			) {
				if (
					((c = Qe),
					c !== null &&
						((a = l & -l),
						(a = (a & 42) !== 0 ? 1 : An(a)),
						(a = (a & (c.suspendedLanes | l)) !== 0 ? 0 : a),
						a !== 0 && a !== g.retryLane))
				)
					throw ((g.retryLane = a), Wa(e, a), Lt(c, e, a), Qs);
				d.data === '$?' || Gc(), (t = Tc(e, t, l));
			} else
				d.data === '$?'
					? ((t.flags |= 192), (t.child = e.child), (t = null))
					: ((e = g.treeContext),
					  (Pe = nl(d.nextSibling)),
					  (Et = t),
					  (we = !0),
					  (Ma = null),
					  (cl = !1),
					  e !== null &&
							((Vt[Zt++] = Sl),
							(Vt[Zt++] = El),
							(Vt[Zt++] = Ra),
							(Sl = e.id),
							(El = e.overflow),
							(Ra = t)),
					  (t = Rc(t, a.children)),
					  (t.flags |= 4096));
			return t;
		}
		return n
			? (Zl(),
			  (n = a.fallback),
			  (d = t.mode),
			  (g = e.child),
			  (z = g.sibling),
			  (a = bl(g, { mode: 'hidden', children: a.children })),
			  (a.subtreeFlags = g.subtreeFlags & 65011712),
			  z !== null ? (n = bl(z, n)) : ((n = Ea(n, d, l, null)), (n.flags |= 2)),
			  (n.return = t),
			  (a.return = t),
			  (a.sibling = n),
			  (t.child = a),
			  (a = n),
			  (n = t.child),
			  (d = e.child.memoizedState),
			  d === null
					? (d = Sc(l))
					: ((g = d.cachePool),
					  g !== null
							? ((z = rt._currentValue),
							  (g = g.parent !== z ? { parent: z, pool: z } : g))
							: (g = qo()),
					  (d = { baseLanes: d.baseLanes | l, cachePool: g })),
			  (n.memoizedState = d),
			  (n.childLanes = Ec(e, c, l)),
			  (t.memoizedState = bc),
			  a)
			: (Vl(t),
			  (l = e.child),
			  (e = l.sibling),
			  (l = bl(l, { mode: 'visible', children: a.children })),
			  (l.return = t),
			  (l.sibling = null),
			  e !== null &&
					((c = t.deletions),
					c === null ? ((t.deletions = [e]), (t.flags |= 16)) : c.push(e)),
			  (t.child = l),
			  (t.memoizedState = null),
			  l);
	}
	function Rc(e, t) {
		return (
			(t = Mi({ mode: 'visible', children: t }, e.mode)),
			(t.return = e),
			(e.child = t)
		);
	}
	function Mi(e, t) {
		return (
			(e = xt(22, e, null, t)),
			(e.lanes = 0),
			(e.stateNode = {
				_visibility: 1,
				_pendingMarkers: null,
				_retryCache: null,
				_transitions: null,
			}),
			e
		);
	}
	function Tc(e, t, l) {
		return (
			cn(t, e.child, null, l),
			(e = Rc(t, t.pendingProps.children)),
			(e.flags |= 2),
			(t.memoizedState = null),
			e
		);
	}
	function Is(e, t, l) {
		e.lanes |= t;
		var a = e.alternate;
		a !== null && (a.lanes |= t), Gr(e.return, t, l);
	}
	function Mc(e, t, l, a, n) {
		var u = e.memoizedState;
		u === null
			? (e.memoizedState = {
					isBackwards: t,
					rendering: null,
					renderingStartTime: 0,
					last: a,
					tail: l,
					tailMode: n,
			  })
			: ((u.isBackwards = t),
			  (u.rendering = null),
			  (u.renderingStartTime = 0),
			  (u.last = a),
			  (u.tail = l),
			  (u.tailMode = n));
	}
	function ed(e, t, l) {
		var a = t.pendingProps,
			n = a.revealOrder,
			u = a.tail;
		if ((ht(e, t, a.children, l), (a = ct.current), (a & 2) !== 0))
			(a = (a & 1) | 2), (t.flags |= 128);
		else {
			if (e !== null && (e.flags & 128) !== 0)
				e: for (e = t.child; e !== null; ) {
					if (e.tag === 13) e.memoizedState !== null && Is(e, l, t);
					else if (e.tag === 19) Is(e, l, t);
					else if (e.child !== null) {
						(e.child.return = e), (e = e.child);
						continue;
					}
					if (e === t) break e;
					for (; e.sibling === null; ) {
						if (e.return === null || e.return === t) break e;
						e = e.return;
					}
					(e.sibling.return = e.return), (e = e.sibling);
				}
			a &= 1;
		}
		switch ((K(ct, a), n)) {
			case 'forwards':
				for (l = t.child, n = null; l !== null; )
					(e = l.alternate),
						e !== null && Si(e) === null && (n = l),
						(l = l.sibling);
				(l = n),
					l === null
						? ((n = t.child), (t.child = null))
						: ((n = l.sibling), (l.sibling = null)),
					Mc(t, !1, n, l, u);
				break;
			case 'backwards':
				for (l = null, n = t.child, t.child = null; n !== null; ) {
					if (((e = n.alternate), e !== null && Si(e) === null)) {
						t.child = n;
						break;
					}
					(e = n.sibling), (n.sibling = l), (l = n), (n = e);
				}
				Mc(t, !0, l, null, u);
				break;
			case 'together':
				Mc(t, !1, null, null, void 0);
				break;
			default:
				t.memoizedState = null;
		}
		return t.child;
	}
	function Al(e, t, l) {
		if (
			(e !== null && (t.dependencies = e.dependencies),
			(Wl |= t.lanes),
			(l & t.childLanes) === 0)
		)
			if (e !== null) {
				if ((Xn(e, t, l, !1), (l & t.childLanes) === 0)) return null;
			} else return null;
		if (e !== null && t.child !== e.child) throw Error(o(153));
		if (t.child !== null) {
			for (
				e = t.child, l = bl(e, e.pendingProps), t.child = l, l.return = t;
				e.sibling !== null;

			)
				(e = e.sibling),
					(l = l.sibling = bl(e, e.pendingProps)),
					(l.return = t);
			l.sibling = null;
		}
		return t.child;
	}
	function Dc(e, t) {
		return (e.lanes & t) !== 0
			? !0
			: ((e = e.dependencies), !!(e !== null && ni(e)));
	}
	function xv(e, t, l) {
		switch (t.tag) {
			case 3:
				Xe(t, t.stateNode.containerInfo),
					Yl(t, rt, e.memoizedState.cache),
					jn();
				break;
			case 27:
			case 5:
				it(t);
				break;
			case 4:
				Xe(t, t.stateNode.containerInfo);
				break;
			case 10:
				Yl(t, t.type, t.memoizedProps.value);
				break;
			case 13:
				var a = t.memoizedState;
				if (a !== null)
					return a.dehydrated !== null
						? (Vl(t), (t.flags |= 128), null)
						: (l & t.child.childLanes) !== 0
						? Ps(e, t, l)
						: (Vl(t), (e = Al(e, t, l)), e !== null ? e.sibling : null);
				Vl(t);
				break;
			case 19:
				var n = (e.flags & 128) !== 0;
				if (
					((a = (l & t.childLanes) !== 0),
					a || (Xn(e, t, l, !1), (a = (l & t.childLanes) !== 0)),
					n)
				) {
					if (a) return ed(e, t, l);
					t.flags |= 128;
				}
				if (
					((n = t.memoizedState),
					n !== null &&
						((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
					K(ct, ct.current),
					a)
				)
					break;
				return null;
			case 22:
			case 23:
				return (t.lanes = 0), Js(e, t, l);
			case 24:
				Yl(t, rt, e.memoizedState.cache);
		}
		return Al(e, t, l);
	}
	function td(e, t, l) {
		if (e !== null)
			if (e.memoizedProps !== t.pendingProps) ft = !0;
			else {
				if (!Dc(e, l) && (t.flags & 128) === 0) return (ft = !1), xv(e, t, l);
				ft = (e.flags & 131072) !== 0;
			}
		else (ft = !1), we && (t.flags & 1048576) !== 0 && xo(t, ai, t.index);
		switch (((t.lanes = 0), t.tag)) {
			case 16:
				e: {
					e = t.pendingProps;
					var a = t.elementType,
						n = a._init;
					if (((a = n(a._payload)), (t.type = a), typeof a == 'function'))
						wr(a)
							? ((e = Ua(a, e)), (t.tag = 1), (t = Ws(null, t, a, e, l)))
							: ((t.tag = 0), (t = pc(null, t, a, e, l)));
					else {
						if (a != null) {
							if (((n = a.$$typeof), n === he)) {
								(t.tag = 11), (t = Vs(null, t, a, e, l));
								break e;
							} else if (n === ye) {
								(t.tag = 14), (t = Zs(null, t, a, e, l));
								break e;
							}
						}
						throw ((t = Ne(a) || a), Error(o(306, t, '')));
					}
				}
				return t;
			case 0:
				return pc(e, t, t.type, t.pendingProps, l);
			case 1:
				return (a = t.type), (n = Ua(a, t.pendingProps)), Ws(e, t, a, n, l);
			case 3:
				e: {
					if ((Xe(t, t.stateNode.containerInfo), e === null))
						throw Error(o(387));
					a = t.pendingProps;
					var u = t.memoizedState;
					(n = u.element), $r(e, t), kn(t, a, null, l);
					var c = t.memoizedState;
					if (
						((a = c.cache),
						Yl(t, rt, a),
						a !== u.cache && Xr(t, [rt], l, !0),
						$n(),
						(a = c.element),
						u.isDehydrated)
					)
						if (
							((u = { element: a, isDehydrated: !1, cache: c.cache }),
							(t.updateQueue.baseState = u),
							(t.memoizedState = u),
							t.flags & 256)
						) {
							t = Fs(e, t, a, l);
							break e;
						} else if (a !== n) {
							(n = Xt(Error(o(424)), t)), Gn(n), (t = Fs(e, t, a, l));
							break e;
						} else {
							switch (((e = t.stateNode.containerInfo), e.nodeType)) {
								case 9:
									e = e.body;
									break;
								default:
									e = e.nodeName === 'HTML' ? e.ownerDocument.body : e;
							}
							for (
								Pe = nl(e.firstChild),
									Et = t,
									we = !0,
									Ma = null,
									cl = !0,
									l = Ns(t, null, a, l),
									t.child = l;
								l;

							)
								(l.flags = (l.flags & -3) | 4096), (l = l.sibling);
						}
					else {
						if ((jn(), a === n)) {
							t = Al(e, t, l);
							break e;
						}
						ht(e, t, a, l);
					}
					t = t.child;
				}
				return t;
			case 26:
				return (
					Ti(e, t),
					e === null
						? (l = uh(t.type, null, t.pendingProps, null))
							? (t.memoizedState = l)
							: we ||
							  ((l = t.type),
							  (e = t.pendingProps),
							  (a = qi(ce.current).createElement(l)),
							  (a[X] = t),
							  (a[Q] = e),
							  vt(a, l, e),
							  xe(a),
							  (t.stateNode = a))
						: (t.memoizedState = uh(
								t.type,
								e.memoizedProps,
								t.pendingProps,
								e.memoizedState
						  )),
					null
				);
			case 27:
				return (
					it(t),
					e === null &&
						we &&
						((a = t.stateNode = lh(t.type, t.pendingProps, ce.current)),
						(Et = t),
						(cl = !0),
						(n = Pe),
						ea(t.type) ? ((uf = n), (Pe = nl(a.firstChild))) : (Pe = n)),
					ht(e, t, t.pendingProps.children, l),
					Ti(e, t),
					e === null && (t.flags |= 4194304),
					t.child
				);
			case 5:
				return (
					e === null &&
						we &&
						((n = a = Pe) &&
							((a = uy(a, t.type, t.pendingProps, cl)),
							a !== null
								? ((t.stateNode = a),
								  (Et = t),
								  (Pe = nl(a.firstChild)),
								  (cl = !1),
								  (n = !0))
								: (n = !1)),
						n || Da(t)),
					it(t),
					(n = t.type),
					(u = t.pendingProps),
					(c = e !== null ? e.memoizedProps : null),
					(a = u.children),
					tf(n, u) ? (a = null) : c !== null && tf(n, c) && (t.flags |= 32),
					t.memoizedState !== null &&
						((n = ec(e, t, Tv, null, null, l)), (gu._currentValue = n)),
					Ti(e, t),
					ht(e, t, a, l),
					t.child
				);
			case 6:
				return (
					e === null &&
						we &&
						((e = l = Pe) &&
							((l = iy(l, t.pendingProps, cl)),
							l !== null
								? ((t.stateNode = l), (Et = t), (Pe = null), (e = !0))
								: (e = !1)),
						e || Da(t)),
					null
				);
			case 13:
				return Ps(e, t, l);
			case 4:
				return (
					Xe(t, t.stateNode.containerInfo),
					(a = t.pendingProps),
					e === null ? (t.child = cn(t, null, a, l)) : ht(e, t, a, l),
					t.child
				);
			case 11:
				return Vs(e, t, t.type, t.pendingProps, l);
			case 7:
				return ht(e, t, t.pendingProps, l), t.child;
			case 8:
				return ht(e, t, t.pendingProps.children, l), t.child;
			case 12:
				return ht(e, t, t.pendingProps.children, l), t.child;
			case 10:
				return (
					(a = t.pendingProps),
					Yl(t, t.type, a.value),
					ht(e, t, a.children, l),
					t.child
				);
			case 9:
				return (
					(n = t.type._context),
					(a = t.pendingProps.children),
					za(t),
					(n = gt(n)),
					(a = a(n)),
					(t.flags |= 1),
					ht(e, t, a, l),
					t.child
				);
			case 14:
				return Zs(e, t, t.type, t.pendingProps, l);
			case 15:
				return Ks(e, t, t.type, t.pendingProps, l);
			case 19:
				return ed(e, t, l);
			case 31:
				return (
					(a = t.pendingProps),
					(l = t.mode),
					(a = { mode: a.mode, children: a.children }),
					e === null
						? ((l = Mi(a, l)),
						  (l.ref = t.ref),
						  (t.child = l),
						  (l.return = t),
						  (t = l))
						: ((l = bl(e.child, a)),
						  (l.ref = t.ref),
						  (t.child = l),
						  (l.return = t),
						  (t = l)),
					t
				);
			case 22:
				return Js(e, t, l);
			case 24:
				return (
					za(t),
					(a = gt(rt)),
					e === null
						? ((n = Zr()),
						  n === null &&
								((n = Qe),
								(u = Qr()),
								(n.pooledCache = u),
								u.refCount++,
								u !== null && (n.pooledCacheLanes |= l),
								(n = u)),
						  (t.memoizedState = { parent: a, cache: n }),
						  Jr(t),
						  Yl(t, rt, n))
						: ((e.lanes & l) !== 0 && ($r(e, t), kn(t, null, null, l), $n()),
						  (n = e.memoizedState),
						  (u = t.memoizedState),
						  n.parent !== a
								? ((n = { parent: a, cache: a }),
								  (t.memoizedState = n),
								  t.lanes === 0 &&
										(t.memoizedState = t.updateQueue.baseState = n),
								  Yl(t, rt, a))
								: ((a = u.cache),
								  Yl(t, rt, a),
								  a !== n.cache && Xr(t, [rt], l, !0))),
					ht(e, t, t.pendingProps.children, l),
					t.child
				);
			case 29:
				throw t.pendingProps;
		}
		throw Error(o(156, t.tag));
	}
	function zl(e) {
		e.flags |= 4;
	}
	function ld(e, t) {
		if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0)
			e.flags &= -16777217;
		else if (((e.flags |= 16777216), !oh(t))) {
			if (
				((t = Kt.current),
				t !== null &&
					((Oe & 4194048) === Oe
						? fl !== null
						: ((Oe & 62914560) !== Oe && (Oe & 536870912) === 0) || t !== fl))
			)
				throw ((Kn = Kr), Yo);
			e.flags |= 8192;
		}
	}
	function Di(e, t) {
		t !== null && (e.flags |= 4),
			e.flags & 16384 &&
				((t = e.tag !== 22 ? Gu() : 536870912), (e.lanes |= t), (dn |= t));
	}
	function lu(e, t) {
		if (!we)
			switch (e.tailMode) {
				case 'hidden':
					t = e.tail;
					for (var l = null; t !== null; )
						t.alternate !== null && (l = t), (t = t.sibling);
					l === null ? (e.tail = null) : (l.sibling = null);
					break;
				case 'collapsed':
					l = e.tail;
					for (var a = null; l !== null; )
						l.alternate !== null && (a = l), (l = l.sibling);
					a === null
						? t || e.tail === null
							? (e.tail = null)
							: (e.tail.sibling = null)
						: (a.sibling = null);
			}
	}
	function Fe(e) {
		var t = e.alternate !== null && e.alternate.child === e.child,
			l = 0,
			a = 0;
		if (t)
			for (var n = e.child; n !== null; )
				(l |= n.lanes | n.childLanes),
					(a |= n.subtreeFlags & 65011712),
					(a |= n.flags & 65011712),
					(n.return = e),
					(n = n.sibling);
		else
			for (n = e.child; n !== null; )
				(l |= n.lanes | n.childLanes),
					(a |= n.subtreeFlags),
					(a |= n.flags),
					(n.return = e),
					(n = n.sibling);
		return (e.subtreeFlags |= a), (e.childLanes = l), t;
	}
	function Cv(e, t, l) {
		var a = t.pendingProps;
		switch ((qr(t), t.tag)) {
			case 31:
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14:
				return Fe(t), null;
			case 1:
				return Fe(t), null;
			case 3:
				return (
					(l = t.stateNode),
					(a = null),
					e !== null && (a = e.memoizedState.cache),
					t.memoizedState.cache !== a && (t.flags |= 2048),
					Tl(rt),
					ul(),
					l.pendingContext &&
						((l.context = l.pendingContext), (l.pendingContext = null)),
					(e === null || e.child === null) &&
						(Yn(t)
							? zl(t)
							: e === null ||
							  (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
							  ((t.flags |= 1024), wo())),
					Fe(t),
					null
				);
			case 26:
				return (
					(l = t.memoizedState),
					e === null
						? (zl(t),
						  l !== null ? (Fe(t), ld(t, l)) : (Fe(t), (t.flags &= -16777217)))
						: l
						? l !== e.memoizedState
							? (zl(t), Fe(t), ld(t, l))
							: (Fe(t), (t.flags &= -16777217))
						: (e.memoizedProps !== a && zl(t), Fe(t), (t.flags &= -16777217)),
					null
				);
			case 27:
				Ft(t), (l = ce.current);
				var n = t.type;
				if (e !== null && t.stateNode != null) e.memoizedProps !== a && zl(t);
				else {
					if (!a) {
						if (t.stateNode === null) throw Error(o(166));
						return Fe(t), null;
					}
					(e = le.current),
						Yn(t) ? Co(t) : ((e = lh(n, a, l)), (t.stateNode = e), zl(t));
				}
				return Fe(t), null;
			case 5:
				if ((Ft(t), (l = t.type), e !== null && t.stateNode != null))
					e.memoizedProps !== a && zl(t);
				else {
					if (!a) {
						if (t.stateNode === null) throw Error(o(166));
						return Fe(t), null;
					}
					if (((e = le.current), Yn(t))) Co(t);
					else {
						switch (((n = qi(ce.current)), e)) {
							case 1:
								e = n.createElementNS('http://www.w3.org/2000/svg', l);
								break;
							case 2:
								e = n.createElementNS('http://www.w3.org/1998/Math/MathML', l);
								break;
							default:
								switch (l) {
									case 'svg':
										e = n.createElementNS('http://www.w3.org/2000/svg', l);
										break;
									case 'math':
										e = n.createElementNS(
											'http://www.w3.org/1998/Math/MathML',
											l
										);
										break;
									case 'script':
										(e = n.createElement('div')),
											(e.innerHTML = '<script></script>'),
											(e = e.removeChild(e.firstChild));
										break;
									case 'select':
										(e =
											typeof a.is == 'string'
												? n.createElement('select', { is: a.is })
												: n.createElement('select')),
											a.multiple
												? (e.multiple = !0)
												: a.size && (e.size = a.size);
										break;
									default:
										e =
											typeof a.is == 'string'
												? n.createElement(l, { is: a.is })
												: n.createElement(l);
								}
						}
						(e[X] = t), (e[Q] = a);
						e: for (n = t.child; n !== null; ) {
							if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
							else if (n.tag !== 4 && n.tag !== 27 && n.child !== null) {
								(n.child.return = n), (n = n.child);
								continue;
							}
							if (n === t) break e;
							for (; n.sibling === null; ) {
								if (n.return === null || n.return === t) break e;
								n = n.return;
							}
							(n.sibling.return = n.return), (n = n.sibling);
						}
						t.stateNode = e;
						e: switch ((vt(e, l, a), l)) {
							case 'button':
							case 'input':
							case 'select':
							case 'textarea':
								e = !!a.autoFocus;
								break e;
							case 'img':
								e = !0;
								break e;
							default:
								e = !1;
						}
						e && zl(t);
					}
				}
				return Fe(t), (t.flags &= -16777217), null;
			case 6:
				if (e && t.stateNode != null) e.memoizedProps !== a && zl(t);
				else {
					if (typeof a != 'string' && t.stateNode === null) throw Error(o(166));
					if (((e = ce.current), Yn(t))) {
						if (
							((e = t.stateNode),
							(l = t.memoizedProps),
							(a = null),
							(n = Et),
							n !== null)
						)
							switch (n.tag) {
								case 27:
								case 5:
									a = n.memoizedProps;
							}
						(e[X] = t),
							(e = !!(
								e.nodeValue === l ||
								(a !== null && a.suppressHydrationWarning === !0) ||
								kd(e.nodeValue, l)
							)),
							e || Da(t);
					} else (e = qi(e).createTextNode(a)), (e[X] = t), (t.stateNode = e);
				}
				return Fe(t), null;
			case 13:
				if (
					((a = t.memoizedState),
					e === null ||
						(e.memoizedState !== null && e.memoizedState.dehydrated !== null))
				) {
					if (((n = Yn(t)), a !== null && a.dehydrated !== null)) {
						if (e === null) {
							if (!n) throw Error(o(318));
							if (
								((n = t.memoizedState),
								(n = n !== null ? n.dehydrated : null),
								!n)
							)
								throw Error(o(317));
							n[X] = t;
						} else
							jn(),
								(t.flags & 128) === 0 && (t.memoizedState = null),
								(t.flags |= 4);
						Fe(t), (n = !1);
					} else
						(n = wo()),
							e !== null &&
								e.memoizedState !== null &&
								(e.memoizedState.hydrationErrors = n),
							(n = !0);
					if (!n) return t.flags & 256 ? (Dl(t), t) : (Dl(t), null);
				}
				if ((Dl(t), (t.flags & 128) !== 0)) return (t.lanes = l), t;
				if (
					((l = a !== null), (e = e !== null && e.memoizedState !== null), l)
				) {
					(a = t.child),
						(n = null),
						a.alternate !== null &&
							a.alternate.memoizedState !== null &&
							a.alternate.memoizedState.cachePool !== null &&
							(n = a.alternate.memoizedState.cachePool.pool);
					var u = null;
					a.memoizedState !== null &&
						a.memoizedState.cachePool !== null &&
						(u = a.memoizedState.cachePool.pool),
						u !== n && (a.flags |= 2048);
				}
				return (
					l !== e && l && (t.child.flags |= 8192),
					Di(t, t.updateQueue),
					Fe(t),
					null
				);
			case 4:
				return ul(), e === null && Wc(t.stateNode.containerInfo), Fe(t), null;
			case 10:
				return Tl(t.type), Fe(t), null;
			case 19:
				if ((J(ct), (n = t.memoizedState), n === null)) return Fe(t), null;
				if (((a = (t.flags & 128) !== 0), (u = n.rendering), u === null))
					if (a) lu(n, !1);
					else {
						if (Ie !== 0 || (e !== null && (e.flags & 128) !== 0))
							for (e = t.child; e !== null; ) {
								if (((u = Si(e)), u !== null)) {
									for (
										t.flags |= 128,
											lu(n, !1),
											e = u.updateQueue,
											t.updateQueue = e,
											Di(t, e),
											t.subtreeFlags = 0,
											e = l,
											l = t.child;
										l !== null;

									)
										Uo(l, e), (l = l.sibling);
									return K(ct, (ct.current & 1) | 2), t.child;
								}
								e = e.sibling;
							}
						n.tail !== null &&
							_t() > Oi &&
							((t.flags |= 128), (a = !0), lu(n, !1), (t.lanes = 4194304));
					}
				else {
					if (!a)
						if (((e = Si(u)), e !== null)) {
							if (
								((t.flags |= 128),
								(a = !0),
								(e = e.updateQueue),
								(t.updateQueue = e),
								Di(t, e),
								lu(n, !0),
								n.tail === null &&
									n.tailMode === 'hidden' &&
									!u.alternate &&
									!we)
							)
								return Fe(t), null;
						} else
							2 * _t() - n.renderingStartTime > Oi &&
								l !== 536870912 &&
								((t.flags |= 128), (a = !0), lu(n, !1), (t.lanes = 4194304));
					n.isBackwards
						? ((u.sibling = t.child), (t.child = u))
						: ((e = n.last),
						  e !== null ? (e.sibling = u) : (t.child = u),
						  (n.last = u));
				}
				return n.tail !== null
					? ((t = n.tail),
					  (n.rendering = t),
					  (n.tail = t.sibling),
					  (n.renderingStartTime = _t()),
					  (t.sibling = null),
					  (e = ct.current),
					  K(ct, a ? (e & 1) | 2 : e & 1),
					  t)
					: (Fe(t), null);
			case 22:
			case 23:
				return (
					Dl(t),
					Pr(),
					(a = t.memoizedState !== null),
					e !== null
						? (e.memoizedState !== null) !== a && (t.flags |= 8192)
						: a && (t.flags |= 8192),
					a
						? (l & 536870912) !== 0 &&
						  (t.flags & 128) === 0 &&
						  (Fe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
						: Fe(t),
					(l = t.updateQueue),
					l !== null && Di(t, l.retryQueue),
					(l = null),
					e !== null &&
						e.memoizedState !== null &&
						e.memoizedState.cachePool !== null &&
						(l = e.memoizedState.cachePool.pool),
					(a = null),
					t.memoizedState !== null &&
						t.memoizedState.cachePool !== null &&
						(a = t.memoizedState.cachePool.pool),
					a !== l && (t.flags |= 2048),
					e !== null && J(Oa),
					null
				);
			case 24:
				return (
					(l = null),
					e !== null && (l = e.memoizedState.cache),
					t.memoizedState.cache !== l && (t.flags |= 2048),
					Tl(rt),
					Fe(t),
					null
				);
			case 25:
				return null;
			case 30:
				return null;
		}
		throw Error(o(156, t.tag));
	}
	function Nv(e, t) {
		switch ((qr(t), t.tag)) {
			case 1:
				return (
					(e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
				);
			case 3:
				return (
					Tl(rt),
					ul(),
					(e = t.flags),
					(e & 65536) !== 0 && (e & 128) === 0
						? ((t.flags = (e & -65537) | 128), t)
						: null
				);
			case 26:
			case 27:
			case 5:
				return Ft(t), null;
			case 13:
				if (
					(Dl(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
				) {
					if (t.alternate === null) throw Error(o(340));
					jn();
				}
				return (
					(e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
				);
			case 19:
				return J(ct), null;
			case 4:
				return ul(), null;
			case 10:
				return Tl(t.type), null;
			case 22:
			case 23:
				return (
					Dl(t),
					Pr(),
					e !== null && J(Oa),
					(e = t.flags),
					e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
				);
			case 24:
				return Tl(rt), null;
			case 25:
				return null;
			default:
				return null;
		}
	}
	function ad(e, t) {
		switch ((qr(t), t.tag)) {
			case 3:
				Tl(rt), ul();
				break;
			case 26:
			case 27:
			case 5:
				Ft(t);
				break;
			case 4:
				ul();
				break;
			case 13:
				Dl(t);
				break;
			case 19:
				J(ct);
				break;
			case 10:
				Tl(t.type);
				break;
			case 22:
			case 23:
				Dl(t), Pr(), e !== null && J(Oa);
				break;
			case 24:
				Tl(rt);
		}
	}
	function au(e, t) {
		try {
			var l = t.updateQueue,
				a = l !== null ? l.lastEffect : null;
			if (a !== null) {
				var n = a.next;
				l = n;
				do {
					if ((l.tag & e) === e) {
						a = void 0;
						var u = l.create,
							c = l.inst;
						(a = u()), (c.destroy = a);
					}
					l = l.next;
				} while (l !== n);
			}
		} catch (d) {
			Ge(t, t.return, d);
		}
	}
	function Kl(e, t, l) {
		try {
			var a = t.updateQueue,
				n = a !== null ? a.lastEffect : null;
			if (n !== null) {
				var u = n.next;
				a = u;
				do {
					if ((a.tag & e) === e) {
						var c = a.inst,
							d = c.destroy;
						if (d !== void 0) {
							(c.destroy = void 0), (n = t);
							var g = l,
								z = d;
							try {
								z();
							} catch (L) {
								Ge(n, g, L);
							}
						}
					}
					a = a.next;
				} while (a !== u);
			}
		} catch (L) {
			Ge(t, t.return, L);
		}
	}
	function nd(e) {
		var t = e.updateQueue;
		if (t !== null) {
			var l = e.stateNode;
			try {
				Zo(t, l);
			} catch (a) {
				Ge(e, e.return, a);
			}
		}
	}
	function ud(e, t, l) {
		(l.props = Ua(e.type, e.memoizedProps)), (l.state = e.memoizedState);
		try {
			l.componentWillUnmount();
		} catch (a) {
			Ge(e, t, a);
		}
	}
	function nu(e, t) {
		try {
			var l = e.ref;
			if (l !== null) {
				switch (e.tag) {
					case 26:
					case 27:
					case 5:
						var a = e.stateNode;
						break;
					case 30:
						a = e.stateNode;
						break;
					default:
						a = e.stateNode;
				}
				typeof l == 'function' ? (e.refCleanup = l(a)) : (l.current = a);
			}
		} catch (n) {
			Ge(e, t, n);
		}
	}
	function ol(e, t) {
		var l = e.ref,
			a = e.refCleanup;
		if (l !== null)
			if (typeof a == 'function')
				try {
					a();
				} catch (n) {
					Ge(e, t, n);
				} finally {
					(e.refCleanup = null),
						(e = e.alternate),
						e != null && (e.refCleanup = null);
				}
			else if (typeof l == 'function')
				try {
					l(null);
				} catch (n) {
					Ge(e, t, n);
				}
			else l.current = null;
	}
	function id(e) {
		var t = e.type,
			l = e.memoizedProps,
			a = e.stateNode;
		try {
			e: switch (t) {
				case 'button':
				case 'input':
				case 'select':
				case 'textarea':
					l.autoFocus && a.focus();
					break e;
				case 'img':
					l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
			}
		} catch (n) {
			Ge(e, e.return, n);
		}
	}
	function Ac(e, t, l) {
		try {
			var a = e.stateNode;
			ey(a, e.type, l, t), (a[Q] = t);
		} catch (n) {
			Ge(e, e.return, n);
		}
	}
	function rd(e) {
		return (
			e.tag === 5 ||
			e.tag === 3 ||
			e.tag === 26 ||
			(e.tag === 27 && ea(e.type)) ||
			e.tag === 4
		);
	}
	function zc(e) {
		e: for (;;) {
			for (; e.sibling === null; ) {
				if (e.return === null || rd(e.return)) return null;
				e = e.return;
			}
			for (
				e.sibling.return = e.return, e = e.sibling;
				e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

			) {
				if (
					(e.tag === 27 && ea(e.type)) ||
					e.flags & 2 ||
					e.child === null ||
					e.tag === 4
				)
					continue e;
				(e.child.return = e), (e = e.child);
			}
			if (!(e.flags & 2)) return e.stateNode;
		}
	}
	function Oc(e, t, l) {
		var a = e.tag;
		if (a === 5 || a === 6)
			(e = e.stateNode),
				t
					? (l.nodeType === 9
							? l.body
							: l.nodeName === 'HTML'
							? l.ownerDocument.body
							: l
					  ).insertBefore(e, t)
					: ((t =
							l.nodeType === 9
								? l.body
								: l.nodeName === 'HTML'
								? l.ownerDocument.body
								: l),
					  t.appendChild(e),
					  (l = l._reactRootContainer),
					  l != null || t.onclick !== null || (t.onclick = Bi));
		else if (
			a !== 4 &&
			(a === 27 && ea(e.type) && ((l = e.stateNode), (t = null)),
			(e = e.child),
			e !== null)
		)
			for (Oc(e, t, l), e = e.sibling; e !== null; )
				Oc(e, t, l), (e = e.sibling);
	}
	function Ai(e, t, l) {
		var a = e.tag;
		if (a === 5 || a === 6)
			(e = e.stateNode), t ? l.insertBefore(e, t) : l.appendChild(e);
		else if (
			a !== 4 &&
			(a === 27 && ea(e.type) && (l = e.stateNode), (e = e.child), e !== null)
		)
			for (Ai(e, t, l), e = e.sibling; e !== null; )
				Ai(e, t, l), (e = e.sibling);
	}
	function cd(e) {
		var t = e.stateNode,
			l = e.memoizedProps;
		try {
			for (var a = e.type, n = t.attributes; n.length; )
				t.removeAttributeNode(n[0]);
			vt(t, a, l), (t[X] = e), (t[Q] = l);
		} catch (u) {
			Ge(e, e.return, u);
		}
	}
	var Ol = !1,
		lt = !1,
		_c = !1,
		fd = typeof WeakSet == 'function' ? WeakSet : Set,
		ot = null;
	function wv(e, t) {
		if (((e = e.containerInfo), (Ic = Vi), (e = So(e)), zr(e))) {
			if ('selectionStart' in e)
				var l = { start: e.selectionStart, end: e.selectionEnd };
			else
				e: {
					l = ((l = e.ownerDocument) && l.defaultView) || window;
					var a = l.getSelection && l.getSelection();
					if (a && a.rangeCount !== 0) {
						l = a.anchorNode;
						var n = a.anchorOffset,
							u = a.focusNode;
						a = a.focusOffset;
						try {
							l.nodeType, u.nodeType;
						} catch {
							l = null;
							break e;
						}
						var c = 0,
							d = -1,
							g = -1,
							z = 0,
							L = 0,
							G = e,
							O = null;
						t: for (;;) {
							for (
								var U;
								G !== l || (n !== 0 && G.nodeType !== 3) || (d = c + n),
									G !== u || (a !== 0 && G.nodeType !== 3) || (g = c + a),
									G.nodeType === 3 && (c += G.nodeValue.length),
									(U = G.firstChild) !== null;

							)
								(O = G), (G = U);
							for (;;) {
								if (G === e) break t;
								if (
									(O === l && ++z === n && (d = c),
									O === u && ++L === a && (g = c),
									(U = G.nextSibling) !== null)
								)
									break;
								(G = O), (O = G.parentNode);
							}
							G = U;
						}
						l = d === -1 || g === -1 ? null : { start: d, end: g };
					} else l = null;
				}
			l = l || { start: 0, end: 0 };
		} else l = null;
		for (
			ef = { focusedElem: e, selectionRange: l }, Vi = !1, ot = t;
			ot !== null;

		)
			if (
				((t = ot), (e = t.child), (t.subtreeFlags & 1024) !== 0 && e !== null)
			)
				(e.return = t), (ot = e);
			else
				for (; ot !== null; ) {
					switch (((t = ot), (u = t.alternate), (e = t.flags), t.tag)) {
						case 0:
							break;
						case 11:
						case 15:
							break;
						case 1:
							if ((e & 1024) !== 0 && u !== null) {
								(e = void 0),
									(l = t),
									(n = u.memoizedProps),
									(u = u.memoizedState),
									(a = l.stateNode);
								try {
									var de = Ua(l.type, n, l.elementType === l.type);
									(e = a.getSnapshotBeforeUpdate(de, u)),
										(a.__reactInternalSnapshotBeforeUpdate = e);
								} catch (re) {
									Ge(l, l.return, re);
								}
							}
							break;
						case 3:
							if ((e & 1024) !== 0) {
								if (
									((e = t.stateNode.containerInfo), (l = e.nodeType), l === 9)
								)
									af(e);
								else if (l === 1)
									switch (e.nodeName) {
										case 'HEAD':
										case 'HTML':
										case 'BODY':
											af(e);
											break;
										default:
											e.textContent = '';
									}
							}
							break;
						case 5:
						case 26:
						case 27:
						case 6:
						case 4:
						case 17:
							break;
						default:
							if ((e & 1024) !== 0) throw Error(o(163));
					}
					if (((e = t.sibling), e !== null)) {
						(e.return = t.return), (ot = e);
						break;
					}
					ot = t.return;
				}
	}
	function od(e, t, l) {
		var a = l.flags;
		switch (l.tag) {
			case 0:
			case 11:
			case 15:
				Jl(e, l), a & 4 && au(5, l);
				break;
			case 1:
				if ((Jl(e, l), a & 4))
					if (((e = l.stateNode), t === null))
						try {
							e.componentDidMount();
						} catch (c) {
							Ge(l, l.return, c);
						}
					else {
						var n = Ua(l.type, t.memoizedProps);
						t = t.memoizedState;
						try {
							e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate);
						} catch (c) {
							Ge(l, l.return, c);
						}
					}
				a & 64 && nd(l), a & 512 && nu(l, l.return);
				break;
			case 3:
				if ((Jl(e, l), a & 64 && ((e = l.updateQueue), e !== null))) {
					if (((t = null), l.child !== null))
						switch (l.child.tag) {
							case 27:
							case 5:
								t = l.child.stateNode;
								break;
							case 1:
								t = l.child.stateNode;
						}
					try {
						Zo(e, t);
					} catch (c) {
						Ge(l, l.return, c);
					}
				}
				break;
			case 27:
				t === null && a & 4 && cd(l);
			case 26:
			case 5:
				Jl(e, l), t === null && a & 4 && id(l), a & 512 && nu(l, l.return);
				break;
			case 12:
				Jl(e, l);
				break;
			case 13:
				Jl(e, l),
					a & 4 && hd(e, l),
					a & 64 &&
						((e = l.memoizedState),
						e !== null &&
							((e = e.dehydrated),
							e !== null && ((l = Qv.bind(null, l)), ry(e, l))));
				break;
			case 22:
				if (((a = l.memoizedState !== null || Ol), !a)) {
					(t = (t !== null && t.memoizedState !== null) || lt), (n = Ol);
					var u = lt;
					(Ol = a),
						(lt = t) && !u ? $l(e, l, (l.subtreeFlags & 8772) !== 0) : Jl(e, l),
						(Ol = n),
						(lt = u);
				}
				break;
			case 30:
				break;
			default:
				Jl(e, l);
		}
	}
	function sd(e) {
		var t = e.alternate;
		t !== null && ((e.alternate = null), sd(t)),
			(e.child = null),
			(e.deletions = null),
			(e.sibling = null),
			e.tag === 5 && ((t = e.stateNode), t !== null && se(t)),
			(e.stateNode = null),
			(e.return = null),
			(e.dependencies = null),
			(e.memoizedProps = null),
			(e.memoizedState = null),
			(e.pendingProps = null),
			(e.stateNode = null),
			(e.updateQueue = null);
	}
	var $e = null,
		zt = !1;
	function _l(e, t, l) {
		for (l = l.child; l !== null; ) dd(e, t, l), (l = l.sibling);
	}
	function dd(e, t, l) {
		if (ke && typeof ke.onCommitFiberUnmount == 'function')
			try {
				ke.onCommitFiberUnmount(Rt, l);
			} catch {}
		switch (l.tag) {
			case 26:
				lt || ol(l, t),
					_l(e, t, l),
					l.memoizedState
						? l.memoizedState.count--
						: l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l));
				break;
			case 27:
				lt || ol(l, t);
				var a = $e,
					n = zt;
				ea(l.type) && (($e = l.stateNode), (zt = !1)),
					_l(e, t, l),
					hu(l.stateNode),
					($e = a),
					(zt = n);
				break;
			case 5:
				lt || ol(l, t);
			case 6:
				if (
					((a = $e),
					(n = zt),
					($e = null),
					_l(e, t, l),
					($e = a),
					(zt = n),
					$e !== null)
				)
					if (zt)
						try {
							($e.nodeType === 9
								? $e.body
								: $e.nodeName === 'HTML'
								? $e.ownerDocument.body
								: $e
							).removeChild(l.stateNode);
						} catch (u) {
							Ge(l, t, u);
						}
					else
						try {
							$e.removeChild(l.stateNode);
						} catch (u) {
							Ge(l, t, u);
						}
				break;
			case 18:
				$e !== null &&
					(zt
						? ((e = $e),
						  eh(
								e.nodeType === 9
									? e.body
									: e.nodeName === 'HTML'
									? e.ownerDocument.body
									: e,
								l.stateNode
						  ),
						  Eu(e))
						: eh($e, l.stateNode));
				break;
			case 4:
				(a = $e),
					(n = zt),
					($e = l.stateNode.containerInfo),
					(zt = !0),
					_l(e, t, l),
					($e = a),
					(zt = n);
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				lt || Kl(2, l, t), lt || Kl(4, l, t), _l(e, t, l);
				break;
			case 1:
				lt ||
					(ol(l, t),
					(a = l.stateNode),
					typeof a.componentWillUnmount == 'function' && ud(l, t, a)),
					_l(e, t, l);
				break;
			case 21:
				_l(e, t, l);
				break;
			case 22:
				(lt = (a = lt) || l.memoizedState !== null), _l(e, t, l), (lt = a);
				break;
			default:
				_l(e, t, l);
		}
	}
	function hd(e, t) {
		if (
			t.memoizedState === null &&
			((e = t.alternate),
			e !== null &&
				((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
		)
			try {
				Eu(e);
			} catch (l) {
				Ge(t, t.return, l);
			}
	}
	function Hv(e) {
		switch (e.tag) {
			case 13:
			case 19:
				var t = e.stateNode;
				return t === null && (t = e.stateNode = new fd()), t;
			case 22:
				return (
					(e = e.stateNode),
					(t = e._retryCache),
					t === null && (t = e._retryCache = new fd()),
					t
				);
			default:
				throw Error(o(435, e.tag));
		}
	}
	function Uc(e, t) {
		var l = Hv(e);
		t.forEach(function (a) {
			var n = Vv.bind(null, e, a);
			l.has(a) || (l.add(a), a.then(n, n));
		});
	}
	function Ct(e, t) {
		var l = t.deletions;
		if (l !== null)
			for (var a = 0; a < l.length; a++) {
				var n = l[a],
					u = e,
					c = t,
					d = c;
				e: for (; d !== null; ) {
					switch (d.tag) {
						case 27:
							if (ea(d.type)) {
								($e = d.stateNode), (zt = !1);
								break e;
							}
							break;
						case 5:
							($e = d.stateNode), (zt = !1);
							break e;
						case 3:
						case 4:
							($e = d.stateNode.containerInfo), (zt = !0);
							break e;
					}
					d = d.return;
				}
				if ($e === null) throw Error(o(160));
				dd(u, c, n),
					($e = null),
					(zt = !1),
					(u = n.alternate),
					u !== null && (u.return = null),
					(n.return = null);
			}
		if (t.subtreeFlags & 13878)
			for (t = t.child; t !== null; ) md(t, e), (t = t.sibling);
	}
	var al = null;
	function md(e, t) {
		var l = e.alternate,
			a = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				Ct(t, e),
					Nt(e),
					a & 4 && (Kl(3, e, e.return), au(3, e), Kl(5, e, e.return));
				break;
			case 1:
				Ct(t, e),
					Nt(e),
					a & 512 && (lt || l === null || ol(l, l.return)),
					a & 64 &&
						Ol &&
						((e = e.updateQueue),
						e !== null &&
							((a = e.callbacks),
							a !== null &&
								((l = e.shared.hiddenCallbacks),
								(e.shared.hiddenCallbacks = l === null ? a : l.concat(a)))));
				break;
			case 26:
				var n = al;
				if (
					(Ct(t, e),
					Nt(e),
					a & 512 && (lt || l === null || ol(l, l.return)),
					a & 4)
				) {
					var u = l !== null ? l.memoizedState : null;
					if (((a = e.memoizedState), l === null))
						if (a === null)
							if (e.stateNode === null) {
								e: {
									(a = e.type),
										(l = e.memoizedProps),
										(n = n.ownerDocument || n);
									t: switch (a) {
										case 'title':
											(u = n.getElementsByTagName('title')[0]),
												(!u ||
													u[oe] ||
													u[X] ||
													u.namespaceURI === 'http://www.w3.org/2000/svg' ||
													u.hasAttribute('itemprop')) &&
													((u = n.createElement(a)),
													n.head.insertBefore(
														u,
														n.querySelector('head > title')
													)),
												vt(u, a, l),
												(u[X] = e),
												xe(u),
												(a = u);
											break e;
										case 'link':
											var c = ch('link', 'href', n).get(a + (l.href || ''));
											if (c) {
												for (var d = 0; d < c.length; d++)
													if (
														((u = c[d]),
														u.getAttribute('href') ===
															(l.href == null || l.href === ''
																? null
																: l.href) &&
															u.getAttribute('rel') ===
																(l.rel == null ? null : l.rel) &&
															u.getAttribute('title') ===
																(l.title == null ? null : l.title) &&
															u.getAttribute('crossorigin') ===
																(l.crossOrigin == null ? null : l.crossOrigin))
													) {
														c.splice(d, 1);
														break t;
													}
											}
											(u = n.createElement(a)),
												vt(u, a, l),
												n.head.appendChild(u);
											break;
										case 'meta':
											if (
												(c = ch('meta', 'content', n).get(
													a + (l.content || '')
												))
											) {
												for (d = 0; d < c.length; d++)
													if (
														((u = c[d]),
														u.getAttribute('content') ===
															(l.content == null ? null : '' + l.content) &&
															u.getAttribute('name') ===
																(l.name == null ? null : l.name) &&
															u.getAttribute('property') ===
																(l.property == null ? null : l.property) &&
															u.getAttribute('http-equiv') ===
																(l.httpEquiv == null ? null : l.httpEquiv) &&
															u.getAttribute('charset') ===
																(l.charSet == null ? null : l.charSet))
													) {
														c.splice(d, 1);
														break t;
													}
											}
											(u = n.createElement(a)),
												vt(u, a, l),
												n.head.appendChild(u);
											break;
										default:
											throw Error(o(468, a));
									}
									(u[X] = e), xe(u), (a = u);
								}
								e.stateNode = a;
							} else fh(n, e.type, e.stateNode);
						else e.stateNode = rh(n, a, e.memoizedProps);
					else
						u !== a
							? (u === null
									? l.stateNode !== null &&
									  ((l = l.stateNode), l.parentNode.removeChild(l))
									: u.count--,
							  a === null
									? fh(n, e.type, e.stateNode)
									: rh(n, a, e.memoizedProps))
							: a === null &&
							  e.stateNode !== null &&
							  Ac(e, e.memoizedProps, l.memoizedProps);
				}
				break;
			case 27:
				Ct(t, e),
					Nt(e),
					a & 512 && (lt || l === null || ol(l, l.return)),
					l !== null && a & 4 && Ac(e, e.memoizedProps, l.memoizedProps);
				break;
			case 5:
				if (
					(Ct(t, e),
					Nt(e),
					a & 512 && (lt || l === null || ol(l, l.return)),
					e.flags & 32)
				) {
					n = e.stateNode;
					try {
						Qa(n, '');
					} catch (U) {
						Ge(e, e.return, U);
					}
				}
				a & 4 &&
					e.stateNode != null &&
					((n = e.memoizedProps), Ac(e, n, l !== null ? l.memoizedProps : n)),
					a & 1024 && (_c = !0);
				break;
			case 6:
				if ((Ct(t, e), Nt(e), a & 4)) {
					if (e.stateNode === null) throw Error(o(162));
					(a = e.memoizedProps), (l = e.stateNode);
					try {
						l.nodeValue = a;
					} catch (U) {
						Ge(e, e.return, U);
					}
				}
				break;
			case 3:
				if (
					((Gi = null),
					(n = al),
					(al = Yi(t.containerInfo)),
					Ct(t, e),
					(al = n),
					Nt(e),
					a & 4 && l !== null && l.memoizedState.isDehydrated)
				)
					try {
						Eu(t.containerInfo);
					} catch (U) {
						Ge(e, e.return, U);
					}
				_c && ((_c = !1), vd(e));
				break;
			case 4:
				(a = al),
					(al = Yi(e.stateNode.containerInfo)),
					Ct(t, e),
					Nt(e),
					(al = a);
				break;
			case 12:
				Ct(t, e), Nt(e);
				break;
			case 13:
				Ct(t, e),
					Nt(e),
					e.child.flags & 8192 &&
						(e.memoizedState !== null) !=
							(l !== null && l.memoizedState !== null) &&
						(Lc = _t()),
					a & 4 &&
						((a = e.updateQueue),
						a !== null && ((e.updateQueue = null), Uc(e, a)));
				break;
			case 22:
				n = e.memoizedState !== null;
				var g = l !== null && l.memoizedState !== null,
					z = Ol,
					L = lt;
				if (
					((Ol = z || n),
					(lt = L || g),
					Ct(t, e),
					(lt = L),
					(Ol = z),
					Nt(e),
					a & 8192)
				)
					e: for (
						t = e.stateNode,
							t._visibility = n ? t._visibility & -2 : t._visibility | 1,
							n && (l === null || g || Ol || lt || xa(e)),
							l = null,
							t = e;
						;

					) {
						if (t.tag === 5 || t.tag === 26) {
							if (l === null) {
								g = l = t;
								try {
									if (((u = g.stateNode), n))
										(c = u.style),
											typeof c.setProperty == 'function'
												? c.setProperty('display', 'none', 'important')
												: (c.display = 'none');
									else {
										d = g.stateNode;
										var G = g.memoizedProps.style,
											O =
												G != null && G.hasOwnProperty('display')
													? G.display
													: null;
										d.style.display =
											O == null || typeof O == 'boolean' ? '' : ('' + O).trim();
									}
								} catch (U) {
									Ge(g, g.return, U);
								}
							}
						} else if (t.tag === 6) {
							if (l === null) {
								g = t;
								try {
									g.stateNode.nodeValue = n ? '' : g.memoizedProps;
								} catch (U) {
									Ge(g, g.return, U);
								}
							}
						} else if (
							((t.tag !== 22 && t.tag !== 23) ||
								t.memoizedState === null ||
								t === e) &&
							t.child !== null
						) {
							(t.child.return = t), (t = t.child);
							continue;
						}
						if (t === e) break e;
						for (; t.sibling === null; ) {
							if (t.return === null || t.return === e) break e;
							l === t && (l = null), (t = t.return);
						}
						l === t && (l = null),
							(t.sibling.return = t.return),
							(t = t.sibling);
					}
				a & 4 &&
					((a = e.updateQueue),
					a !== null &&
						((l = a.retryQueue),
						l !== null && ((a.retryQueue = null), Uc(e, l))));
				break;
			case 19:
				Ct(t, e),
					Nt(e),
					a & 4 &&
						((a = e.updateQueue),
						a !== null && ((e.updateQueue = null), Uc(e, a)));
				break;
			case 30:
				break;
			case 21:
				break;
			default:
				Ct(t, e), Nt(e);
		}
	}
	function Nt(e) {
		var t = e.flags;
		if (t & 2) {
			try {
				for (var l, a = e.return; a !== null; ) {
					if (rd(a)) {
						l = a;
						break;
					}
					a = a.return;
				}
				if (l == null) throw Error(o(160));
				switch (l.tag) {
					case 27:
						var n = l.stateNode,
							u = zc(e);
						Ai(e, u, n);
						break;
					case 5:
						var c = l.stateNode;
						l.flags & 32 && (Qa(c, ''), (l.flags &= -33));
						var d = zc(e);
						Ai(e, d, c);
						break;
					case 3:
					case 4:
						var g = l.stateNode.containerInfo,
							z = zc(e);
						Oc(e, z, g);
						break;
					default:
						throw Error(o(161));
				}
			} catch (L) {
				Ge(e, e.return, L);
			}
			e.flags &= -3;
		}
		t & 4096 && (e.flags &= -4097);
	}
	function vd(e) {
		if (e.subtreeFlags & 1024)
			for (e = e.child; e !== null; ) {
				var t = e;
				vd(t),
					t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
					(e = e.sibling);
			}
	}
	function Jl(e, t) {
		if (t.subtreeFlags & 8772)
			for (t = t.child; t !== null; ) od(e, t.alternate, t), (t = t.sibling);
	}
	function xa(e) {
		for (e = e.child; e !== null; ) {
			var t = e;
			switch (t.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					Kl(4, t, t.return), xa(t);
					break;
				case 1:
					ol(t, t.return);
					var l = t.stateNode;
					typeof l.componentWillUnmount == 'function' && ud(t, t.return, l),
						xa(t);
					break;
				case 27:
					hu(t.stateNode);
				case 26:
				case 5:
					ol(t, t.return), xa(t);
					break;
				case 22:
					t.memoizedState === null && xa(t);
					break;
				case 30:
					xa(t);
					break;
				default:
					xa(t);
			}
			e = e.sibling;
		}
	}
	function $l(e, t, l) {
		for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
			var a = t.alternate,
				n = e,
				u = t,
				c = u.flags;
			switch (u.tag) {
				case 0:
				case 11:
				case 15:
					$l(n, u, l), au(4, u);
					break;
				case 1:
					if (
						($l(n, u, l),
						(a = u),
						(n = a.stateNode),
						typeof n.componentDidMount == 'function')
					)
						try {
							n.componentDidMount();
						} catch (z) {
							Ge(a, a.return, z);
						}
					if (((a = u), (n = a.updateQueue), n !== null)) {
						var d = a.stateNode;
						try {
							var g = n.shared.hiddenCallbacks;
							if (g !== null)
								for (n.shared.hiddenCallbacks = null, n = 0; n < g.length; n++)
									Vo(g[n], d);
						} catch (z) {
							Ge(a, a.return, z);
						}
					}
					l && c & 64 && nd(u), nu(u, u.return);
					break;
				case 27:
					cd(u);
				case 26:
				case 5:
					$l(n, u, l), l && a === null && c & 4 && id(u), nu(u, u.return);
					break;
				case 12:
					$l(n, u, l);
					break;
				case 13:
					$l(n, u, l), l && c & 4 && hd(n, u);
					break;
				case 22:
					u.memoizedState === null && $l(n, u, l), nu(u, u.return);
					break;
				case 30:
					break;
				default:
					$l(n, u, l);
			}
			t = t.sibling;
		}
	}
	function xc(e, t) {
		var l = null;
		e !== null &&
			e.memoizedState !== null &&
			e.memoizedState.cachePool !== null &&
			(l = e.memoizedState.cachePool.pool),
			(e = null),
			t.memoizedState !== null &&
				t.memoizedState.cachePool !== null &&
				(e = t.memoizedState.cachePool.pool),
			e !== l && (e != null && e.refCount++, l != null && Qn(l));
	}
	function Cc(e, t) {
		(e = null),
			t.alternate !== null && (e = t.alternate.memoizedState.cache),
			(t = t.memoizedState.cache),
			t !== e && (t.refCount++, e != null && Qn(e));
	}
	function sl(e, t, l, a) {
		if (t.subtreeFlags & 10256)
			for (t = t.child; t !== null; ) yd(e, t, l, a), (t = t.sibling);
	}
	function yd(e, t, l, a) {
		var n = t.flags;
		switch (t.tag) {
			case 0:
			case 11:
			case 15:
				sl(e, t, l, a), n & 2048 && au(9, t);
				break;
			case 1:
				sl(e, t, l, a);
				break;
			case 3:
				sl(e, t, l, a),
					n & 2048 &&
						((e = null),
						t.alternate !== null && (e = t.alternate.memoizedState.cache),
						(t = t.memoizedState.cache),
						t !== e && (t.refCount++, e != null && Qn(e)));
				break;
			case 12:
				if (n & 2048) {
					sl(e, t, l, a), (e = t.stateNode);
					try {
						var u = t.memoizedProps,
							c = u.id,
							d = u.onPostCommit;
						typeof d == 'function' &&
							d(
								c,
								t.alternate === null ? 'mount' : 'update',
								e.passiveEffectDuration,
								-0
							);
					} catch (g) {
						Ge(t, t.return, g);
					}
				} else sl(e, t, l, a);
				break;
			case 13:
				sl(e, t, l, a);
				break;
			case 23:
				break;
			case 22:
				(u = t.stateNode),
					(c = t.alternate),
					t.memoizedState !== null
						? u._visibility & 2
							? sl(e, t, l, a)
							: uu(e, t)
						: u._visibility & 2
						? sl(e, t, l, a)
						: ((u._visibility |= 2),
						  fn(e, t, l, a, (t.subtreeFlags & 10256) !== 0)),
					n & 2048 && xc(c, t);
				break;
			case 24:
				sl(e, t, l, a), n & 2048 && Cc(t.alternate, t);
				break;
			default:
				sl(e, t, l, a);
		}
	}
	function fn(e, t, l, a, n) {
		for (n = n && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
			var u = e,
				c = t,
				d = l,
				g = a,
				z = c.flags;
			switch (c.tag) {
				case 0:
				case 11:
				case 15:
					fn(u, c, d, g, n), au(8, c);
					break;
				case 23:
					break;
				case 22:
					var L = c.stateNode;
					c.memoizedState !== null
						? L._visibility & 2
							? fn(u, c, d, g, n)
							: uu(u, c)
						: ((L._visibility |= 2), fn(u, c, d, g, n)),
						n && z & 2048 && xc(c.alternate, c);
					break;
				case 24:
					fn(u, c, d, g, n), n && z & 2048 && Cc(c.alternate, c);
					break;
				default:
					fn(u, c, d, g, n);
			}
			t = t.sibling;
		}
	}
	function uu(e, t) {
		if (t.subtreeFlags & 10256)
			for (t = t.child; t !== null; ) {
				var l = e,
					a = t,
					n = a.flags;
				switch (a.tag) {
					case 22:
						uu(l, a), n & 2048 && xc(a.alternate, a);
						break;
					case 24:
						uu(l, a), n & 2048 && Cc(a.alternate, a);
						break;
					default:
						uu(l, a);
				}
				t = t.sibling;
			}
	}
	var iu = 8192;
	function on(e) {
		if (e.subtreeFlags & iu)
			for (e = e.child; e !== null; ) gd(e), (e = e.sibling);
	}
	function gd(e) {
		switch (e.tag) {
			case 26:
				on(e),
					e.flags & iu &&
						e.memoizedState !== null &&
						Sy(al, e.memoizedState, e.memoizedProps);
				break;
			case 5:
				on(e);
				break;
			case 3:
			case 4:
				var t = al;
				(al = Yi(e.stateNode.containerInfo)), on(e), (al = t);
				break;
			case 22:
				e.memoizedState === null &&
					((t = e.alternate),
					t !== null && t.memoizedState !== null
						? ((t = iu), (iu = 16777216), on(e), (iu = t))
						: on(e));
				break;
			default:
				on(e);
		}
	}
	function pd(e) {
		var t = e.alternate;
		if (t !== null && ((e = t.child), e !== null)) {
			t.child = null;
			do (t = e.sibling), (e.sibling = null), (e = t);
			while (e !== null);
		}
	}
	function ru(e) {
		var t = e.deletions;
		if ((e.flags & 16) !== 0) {
			if (t !== null)
				for (var l = 0; l < t.length; l++) {
					var a = t[l];
					(ot = a), Sd(a, e);
				}
			pd(e);
		}
		if (e.subtreeFlags & 10256)
			for (e = e.child; e !== null; ) bd(e), (e = e.sibling);
	}
	function bd(e) {
		switch (e.tag) {
			case 0:
			case 11:
			case 15:
				ru(e), e.flags & 2048 && Kl(9, e, e.return);
				break;
			case 3:
				ru(e);
				break;
			case 12:
				ru(e);
				break;
			case 22:
				var t = e.stateNode;
				e.memoizedState !== null &&
				t._visibility & 2 &&
				(e.return === null || e.return.tag !== 13)
					? ((t._visibility &= -3), zi(e))
					: ru(e);
				break;
			default:
				ru(e);
		}
	}
	function zi(e) {
		var t = e.deletions;
		if ((e.flags & 16) !== 0) {
			if (t !== null)
				for (var l = 0; l < t.length; l++) {
					var a = t[l];
					(ot = a), Sd(a, e);
				}
			pd(e);
		}
		for (e = e.child; e !== null; ) {
			switch (((t = e), t.tag)) {
				case 0:
				case 11:
				case 15:
					Kl(8, t, t.return), zi(t);
					break;
				case 22:
					(l = t.stateNode),
						l._visibility & 2 && ((l._visibility &= -3), zi(t));
					break;
				default:
					zi(t);
			}
			e = e.sibling;
		}
	}
	function Sd(e, t) {
		for (; ot !== null; ) {
			var l = ot;
			switch (l.tag) {
				case 0:
				case 11:
				case 15:
					Kl(8, l, t);
					break;
				case 23:
				case 22:
					if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
						var a = l.memoizedState.cachePool.pool;
						a != null && a.refCount++;
					}
					break;
				case 24:
					Qn(l.memoizedState.cache);
			}
			if (((a = l.child), a !== null)) (a.return = l), (ot = a);
			else
				e: for (l = e; ot !== null; ) {
					a = ot;
					var n = a.sibling,
						u = a.return;
					if ((sd(a), a === l)) {
						ot = null;
						break e;
					}
					if (n !== null) {
						(n.return = u), (ot = n);
						break e;
					}
					ot = u;
				}
		}
	}
	var Lv = {
			getCacheForType: function (e) {
				var t = gt(rt),
					l = t.data.get(e);
				return l === void 0 && ((l = e()), t.data.set(e, l)), l;
			},
		},
		Bv = typeof WeakMap == 'function' ? WeakMap : Map,
		Le = 0,
		Qe = null,
		Me = null,
		Oe = 0,
		Be = 0,
		wt = null,
		kl = !1,
		sn = !1,
		Nc = !1,
		Ul = 0,
		Ie = 0,
		Wl = 0,
		Ca = 0,
		wc = 0,
		Jt = 0,
		dn = 0,
		cu = null,
		Ot = null,
		Hc = !1,
		Lc = 0,
		Oi = 1 / 0,
		_i = null,
		Fl = null,
		mt = 0,
		Pl = null,
		hn = null,
		mn = 0,
		Bc = 0,
		qc = null,
		Ed = null,
		fu = 0,
		Yc = null;
	function Ht() {
		if ((Le & 2) !== 0 && Oe !== 0) return Oe & -Oe;
		if (_.T !== null) {
			var e = en;
			return e !== 0 ? e : Kc();
		}
		return S();
	}
	function Rd() {
		Jt === 0 && (Jt = (Oe & 536870912) === 0 || we ? ja() : 536870912);
		var e = Kt.current;
		return e !== null && (e.flags |= 32), Jt;
	}
	function Lt(e, t, l) {
		((e === Qe && (Be === 2 || Be === 9)) || e.cancelPendingCommit !== null) &&
			(vn(e, 0), Il(e, Oe, Jt, !1)),
			ma(e, l),
			((Le & 2) === 0 || e !== Qe) &&
				(e === Qe &&
					((Le & 2) === 0 && (Ca |= l), Ie === 4 && Il(e, Oe, Jt, !1)),
				dl(e));
	}
	function Td(e, t, l) {
		if ((Le & 6) !== 0) throw Error(o(327));
		var a = (!l && (t & 124) === 0 && (t & e.expiredLanes) === 0) || rl(e, t),
			n = a ? jv(e, t) : Xc(e, t, !0),
			u = a;
		do {
			if (n === 0) {
				sn && !a && Il(e, t, 0, !1);
				break;
			} else {
				if (((l = e.current.alternate), u && !qv(l))) {
					(n = Xc(e, t, !1)), (u = !1);
					continue;
				}
				if (n === 2) {
					if (((u = t), e.errorRecoveryDisabledLanes & u)) var c = 0;
					else
						(c = e.pendingLanes & -536870913),
							(c = c !== 0 ? c : c & 536870912 ? 536870912 : 0);
					if (c !== 0) {
						t = c;
						e: {
							var d = e;
							n = cu;
							var g = d.current.memoizedState.isDehydrated;
							if ((g && (vn(d, c).flags |= 256), (c = Xc(d, c, !1)), c !== 2)) {
								if (Nc && !g) {
									(d.errorRecoveryDisabledLanes |= u), (Ca |= u), (n = 4);
									break e;
								}
								(u = Ot),
									(Ot = n),
									u !== null && (Ot === null ? (Ot = u) : Ot.push.apply(Ot, u));
							}
							n = c;
						}
						if (((u = !1), n !== 2)) continue;
					}
				}
				if (n === 1) {
					vn(e, 0), Il(e, t, 0, !0);
					break;
				}
				e: {
					switch (((a = e), (u = n), u)) {
						case 0:
						case 1:
							throw Error(o(345));
						case 4:
							if ((t & 4194048) !== t) break;
						case 6:
							Il(a, t, Jt, !kl);
							break e;
						case 2:
							Ot = null;
							break;
						case 3:
						case 5:
							break;
						default:
							throw Error(o(329));
					}
					if ((t & 62914560) === t && ((n = Lc + 300 - _t()), 10 < n)) {
						if ((Il(a, t, Jt, !kl), ha(a, 0, !0) !== 0)) break e;
						a.timeoutHandle = Pd(
							Md.bind(null, a, l, Ot, _i, Hc, t, Jt, Ca, dn, kl, u, 2, -0, 0),
							n
						);
						break e;
					}
					Md(a, l, Ot, _i, Hc, t, Jt, Ca, dn, kl, u, 0, -0, 0);
				}
			}
			break;
		} while (!0);
		dl(e);
	}
	function Md(e, t, l, a, n, u, c, d, g, z, L, G, O, U) {
		if (
			((e.timeoutHandle = -1),
			(G = t.subtreeFlags),
			(G & 8192 || (G & 16785408) === 16785408) &&
				((yu = { stylesheets: null, count: 0, unsuspend: by }),
				gd(t),
				(G = Ey()),
				G !== null))
		) {
			(e.cancelPendingCommit = G(
				xd.bind(null, e, t, u, l, a, n, c, d, g, L, 1, O, U)
			)),
				Il(e, u, c, !z);
			return;
		}
		xd(e, t, u, l, a, n, c, d, g);
	}
	function qv(e) {
		for (var t = e; ; ) {
			var l = t.tag;
			if (
				(l === 0 || l === 11 || l === 15) &&
				t.flags & 16384 &&
				((l = t.updateQueue), l !== null && ((l = l.stores), l !== null))
			)
				for (var a = 0; a < l.length; a++) {
					var n = l[a],
						u = n.getSnapshot;
					n = n.value;
					try {
						if (!Ut(u(), n)) return !1;
					} catch {
						return !1;
					}
				}
			if (((l = t.child), t.subtreeFlags & 16384 && l !== null))
				(l.return = t), (t = l);
			else {
				if (t === e) break;
				for (; t.sibling === null; ) {
					if (t.return === null || t.return === e) return !0;
					t = t.return;
				}
				(t.sibling.return = t.return), (t = t.sibling);
			}
		}
		return !0;
	}
	function Il(e, t, l, a) {
		(t &= ~wc),
			(t &= ~Ca),
			(e.suspendedLanes |= t),
			(e.pingedLanes &= ~t),
			a && (e.warmLanes |= t),
			(a = e.expirationTimes);
		for (var n = t; 0 < n; ) {
			var u = 31 - dt(n),
				c = 1 << u;
			(a[u] = -1), (n &= ~c);
		}
		l !== 0 && va(e, l, t);
	}
	function Ui() {
		return (Le & 6) === 0 ? (ou(0), !1) : !0;
	}
	function jc() {
		if (Me !== null) {
			if (Be === 0) var e = Me.return;
			else (e = Me), (Rl = Aa = null), ac(e), (rn = null), (eu = 0), (e = Me);
			for (; e !== null; ) ad(e.alternate, e), (e = e.return);
			Me = null;
		}
	}
	function vn(e, t) {
		var l = e.timeoutHandle;
		l !== -1 && ((e.timeoutHandle = -1), ly(l)),
			(l = e.cancelPendingCommit),
			l !== null && ((e.cancelPendingCommit = null), l()),
			jc(),
			(Qe = e),
			(Me = l = bl(e.current, null)),
			(Oe = t),
			(Be = 0),
			(wt = null),
			(kl = !1),
			(sn = rl(e, t)),
			(Nc = !1),
			(dn = Jt = wc = Ca = Wl = Ie = 0),
			(Ot = cu = null),
			(Hc = !1),
			(t & 8) !== 0 && (t |= t & 32);
		var a = e.entangledLanes;
		if (a !== 0)
			for (e = e.entanglements, a &= t; 0 < a; ) {
				var n = 31 - dt(a),
					u = 1 << n;
				(t |= e[n]), (a &= ~u);
			}
		return (Ul = t), Pu(), l;
	}
	function Dd(e, t) {
		(Se = null),
			(_.H = gi),
			t === Zn || t === ri
				? ((t = Xo()), (Be = 3))
				: t === Yo
				? ((t = Xo()), (Be = 4))
				: (Be =
						t === Qs
							? 8
							: t !== null &&
							  typeof t == 'object' &&
							  typeof t.then == 'function'
							? 6
							: 1),
			(wt = t),
			Me === null && ((Ie = 1), Ri(e, Xt(t, e.current)));
	}
	function Ad() {
		var e = _.H;
		return (_.H = gi), e === null ? gi : e;
	}
	function zd() {
		var e = _.A;
		return (_.A = Lv), e;
	}
	function Gc() {
		(Ie = 4),
			kl || ((Oe & 4194048) !== Oe && Kt.current !== null) || (sn = !0),
			((Wl & 134217727) === 0 && (Ca & 134217727) === 0) ||
				Qe === null ||
				Il(Qe, Oe, Jt, !1);
	}
	function Xc(e, t, l) {
		var a = Le;
		Le |= 2;
		var n = Ad(),
			u = zd();
		(Qe !== e || Oe !== t) && ((_i = null), vn(e, t)), (t = !1);
		var c = Ie;
		e: do
			try {
				if (Be !== 0 && Me !== null) {
					var d = Me,
						g = wt;
					switch (Be) {
						case 8:
							jc(), (c = 6);
							break e;
						case 3:
						case 2:
						case 9:
						case 6:
							Kt.current === null && (t = !0);
							var z = Be;
							if (((Be = 0), (wt = null), yn(e, d, g, z), l && sn)) {
								c = 0;
								break e;
							}
							break;
						default:
							(z = Be), (Be = 0), (wt = null), yn(e, d, g, z);
					}
				}
				Yv(), (c = Ie);
				break;
			} catch (L) {
				Dd(e, L);
			}
		while (!0);
		return (
			t && e.shellSuspendCounter++,
			(Rl = Aa = null),
			(Le = a),
			(_.H = n),
			(_.A = u),
			Me === null && ((Qe = null), (Oe = 0), Pu()),
			c
		);
	}
	function Yv() {
		for (; Me !== null; ) Od(Me);
	}
	function jv(e, t) {
		var l = Le;
		Le |= 2;
		var a = Ad(),
			n = zd();
		Qe !== e || Oe !== t
			? ((_i = null), (Oi = _t() + 500), vn(e, t))
			: (sn = rl(e, t));
		e: do
			try {
				if (Be !== 0 && Me !== null) {
					t = Me;
					var u = wt;
					t: switch (Be) {
						case 1:
							(Be = 0), (wt = null), yn(e, t, u, 1);
							break;
						case 2:
						case 9:
							if (jo(u)) {
								(Be = 0), (wt = null), _d(t);
								break;
							}
							(t = function () {
								(Be !== 2 && Be !== 9) || Qe !== e || (Be = 7), dl(e);
							}),
								u.then(t, t);
							break e;
						case 3:
							Be = 7;
							break e;
						case 4:
							Be = 5;
							break e;
						case 7:
							jo(u)
								? ((Be = 0), (wt = null), _d(t))
								: ((Be = 0), (wt = null), yn(e, t, u, 7));
							break;
						case 5:
							var c = null;
							switch (Me.tag) {
								case 26:
									c = Me.memoizedState;
								case 5:
								case 27:
									var d = Me;
									if (!c || oh(c)) {
										(Be = 0), (wt = null);
										var g = d.sibling;
										if (g !== null) Me = g;
										else {
											var z = d.return;
											z !== null ? ((Me = z), xi(z)) : (Me = null);
										}
										break t;
									}
							}
							(Be = 0), (wt = null), yn(e, t, u, 5);
							break;
						case 6:
							(Be = 0), (wt = null), yn(e, t, u, 6);
							break;
						case 8:
							jc(), (Ie = 6);
							break e;
						default:
							throw Error(o(462));
					}
				}
				Gv();
				break;
			} catch (L) {
				Dd(e, L);
			}
		while (!0);
		return (
			(Rl = Aa = null),
			(_.H = a),
			(_.A = n),
			(Le = l),
			Me !== null ? 0 : ((Qe = null), (Oe = 0), Pu(), Ie)
		);
	}
	function Gv() {
		for (; Me !== null && !cr(); ) Od(Me);
	}
	function Od(e) {
		var t = td(e.alternate, e, Ul);
		(e.memoizedProps = e.pendingProps), t === null ? xi(e) : (Me = t);
	}
	function _d(e) {
		var t = e,
			l = t.alternate;
		switch (t.tag) {
			case 15:
			case 0:
				t = ks(l, t, t.pendingProps, t.type, void 0, Oe);
				break;
			case 11:
				t = ks(l, t, t.pendingProps, t.type.render, t.ref, Oe);
				break;
			case 5:
				ac(t);
			default:
				ad(l, t), (t = Me = Uo(t, Ul)), (t = td(l, t, Ul));
		}
		(e.memoizedProps = e.pendingProps), t === null ? xi(e) : (Me = t);
	}
	function yn(e, t, l, a) {
		(Rl = Aa = null), ac(t), (rn = null), (eu = 0);
		var n = t.return;
		try {
			if (Uv(e, n, t, l, Oe)) {
				(Ie = 1), Ri(e, Xt(l, e.current)), (Me = null);
				return;
			}
		} catch (u) {
			if (n !== null) throw ((Me = n), u);
			(Ie = 1), Ri(e, Xt(l, e.current)), (Me = null);
			return;
		}
		t.flags & 32768
			? (we || a === 1
					? (e = !0)
					: sn || (Oe & 536870912) !== 0
					? (e = !1)
					: ((kl = e = !0),
					  (a === 2 || a === 9 || a === 3 || a === 6) &&
							((a = Kt.current),
							a !== null && a.tag === 13 && (a.flags |= 16384))),
			  Ud(t, e))
			: xi(t);
	}
	function xi(e) {
		var t = e;
		do {
			if ((t.flags & 32768) !== 0) {
				Ud(t, kl);
				return;
			}
			e = t.return;
			var l = Cv(t.alternate, t, Ul);
			if (l !== null) {
				Me = l;
				return;
			}
			if (((t = t.sibling), t !== null)) {
				Me = t;
				return;
			}
			Me = t = e;
		} while (t !== null);
		Ie === 0 && (Ie = 5);
	}
	function Ud(e, t) {
		do {
			var l = Nv(e.alternate, e);
			if (l !== null) {
				(l.flags &= 32767), (Me = l);
				return;
			}
			if (
				((l = e.return),
				l !== null &&
					((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
				!t && ((e = e.sibling), e !== null))
			) {
				Me = e;
				return;
			}
			Me = e = l;
		} while (e !== null);
		(Ie = 6), (Me = null);
	}
	function xd(e, t, l, a, n, u, c, d, g) {
		e.cancelPendingCommit = null;
		do Ci();
		while (mt !== 0);
		if ((Le & 6) !== 0) throw Error(o(327));
		if (t !== null) {
			if (t === e.current) throw Error(o(177));
			if (
				((u = t.lanes | t.childLanes),
				(u |= Cr),
				Xu(e, l, u, c, d, g),
				e === Qe && ((Me = Qe = null), (Oe = 0)),
				(hn = t),
				(Pl = e),
				(mn = l),
				(Bc = u),
				(qc = n),
				(Ed = a),
				(t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
					? ((e.callbackNode = null),
					  (e.callbackPriority = 0),
					  Zv(Ya, function () {
							return Ld(), null;
					  }))
					: ((e.callbackNode = null), (e.callbackPriority = 0)),
				(a = (t.flags & 13878) !== 0),
				(t.subtreeFlags & 13878) !== 0 || a)
			) {
				(a = _.T), (_.T = null), (n = V.p), (V.p = 2), (c = Le), (Le |= 4);
				try {
					wv(e, t, l);
				} finally {
					(Le = c), (V.p = n), (_.T = a);
				}
			}
			(mt = 1), Cd(), Nd(), wd();
		}
	}
	function Cd() {
		if (mt === 1) {
			mt = 0;
			var e = Pl,
				t = hn,
				l = (t.flags & 13878) !== 0;
			if ((t.subtreeFlags & 13878) !== 0 || l) {
				(l = _.T), (_.T = null);
				var a = V.p;
				V.p = 2;
				var n = Le;
				Le |= 4;
				try {
					md(t, e);
					var u = ef,
						c = So(e.containerInfo),
						d = u.focusedElem,
						g = u.selectionRange;
					if (
						c !== d &&
						d &&
						d.ownerDocument &&
						bo(d.ownerDocument.documentElement, d)
					) {
						if (g !== null && zr(d)) {
							var z = g.start,
								L = g.end;
							if ((L === void 0 && (L = z), 'selectionStart' in d))
								(d.selectionStart = z),
									(d.selectionEnd = Math.min(L, d.value.length));
							else {
								var G = d.ownerDocument || document,
									O = (G && G.defaultView) || window;
								if (O.getSelection) {
									var U = O.getSelection(),
										de = d.textContent.length,
										re = Math.min(g.start, de),
										je = g.end === void 0 ? re : Math.min(g.end, de);
									!U.extend && re > je && ((c = je), (je = re), (re = c));
									var T = po(d, re),
										E = po(d, je);
									if (
										T &&
										E &&
										(U.rangeCount !== 1 ||
											U.anchorNode !== T.node ||
											U.anchorOffset !== T.offset ||
											U.focusNode !== E.node ||
											U.focusOffset !== E.offset)
									) {
										var A = G.createRange();
										A.setStart(T.node, T.offset),
											U.removeAllRanges(),
											re > je
												? (U.addRange(A), U.extend(E.node, E.offset))
												: (A.setEnd(E.node, E.offset), U.addRange(A));
									}
								}
							}
						}
						for (G = [], U = d; (U = U.parentNode); )
							U.nodeType === 1 &&
								G.push({ element: U, left: U.scrollLeft, top: U.scrollTop });
						for (
							typeof d.focus == 'function' && d.focus(), d = 0;
							d < G.length;
							d++
						) {
							var Y = G[d];
							(Y.element.scrollLeft = Y.left), (Y.element.scrollTop = Y.top);
						}
					}
					(Vi = !!Ic), (ef = Ic = null);
				} finally {
					(Le = n), (V.p = a), (_.T = l);
				}
			}
			(e.current = t), (mt = 2);
		}
	}
	function Nd() {
		if (mt === 2) {
			mt = 0;
			var e = Pl,
				t = hn,
				l = (t.flags & 8772) !== 0;
			if ((t.subtreeFlags & 8772) !== 0 || l) {
				(l = _.T), (_.T = null);
				var a = V.p;
				V.p = 2;
				var n = Le;
				Le |= 4;
				try {
					od(e, t.alternate, t);
				} finally {
					(Le = n), (V.p = a), (_.T = l);
				}
			}
			mt = 3;
		}
	}
	function wd() {
		if (mt === 4 || mt === 3) {
			(mt = 0), fr();
			var e = Pl,
				t = hn,
				l = mn,
				a = Ed;
			(t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
				? (mt = 5)
				: ((mt = 0), (hn = Pl = null), Hd(e, e.pendingLanes));
			var n = e.pendingLanes;
			if (
				(n === 0 && (Fl = null),
				zn(l),
				(t = t.stateNode),
				ke && typeof ke.onCommitFiberRoot == 'function')
			)
				try {
					ke.onCommitFiberRoot(Rt, t, void 0, (t.current.flags & 128) === 128);
				} catch {}
			if (a !== null) {
				(t = _.T), (n = V.p), (V.p = 2), (_.T = null);
				try {
					for (var u = e.onRecoverableError, c = 0; c < a.length; c++) {
						var d = a[c];
						u(d.value, { componentStack: d.stack });
					}
				} finally {
					(_.T = t), (V.p = n);
				}
			}
			(mn & 3) !== 0 && Ci(),
				dl(e),
				(n = e.pendingLanes),
				(l & 4194090) !== 0 && (n & 42) !== 0
					? e === Yc
						? fu++
						: ((fu = 0), (Yc = e))
					: (fu = 0),
				ou(0);
		}
	}
	function Hd(e, t) {
		(e.pooledCacheLanes &= t) === 0 &&
			((t = e.pooledCache), t != null && ((e.pooledCache = null), Qn(t)));
	}
	function Ci(e) {
		return Cd(), Nd(), wd(), Ld();
	}
	function Ld() {
		if (mt !== 5) return !1;
		var e = Pl,
			t = Bc;
		Bc = 0;
		var l = zn(mn),
			a = _.T,
			n = V.p;
		try {
			(V.p = 32 > l ? 32 : l), (_.T = null), (l = qc), (qc = null);
			var u = Pl,
				c = mn;
			if (((mt = 0), (hn = Pl = null), (mn = 0), (Le & 6) !== 0))
				throw Error(o(331));
			var d = Le;
			if (
				((Le |= 4),
				bd(u.current),
				yd(u, u.current, c, l),
				(Le = d),
				ou(0, !1),
				ke && typeof ke.onPostCommitFiberRoot == 'function')
			)
				try {
					ke.onPostCommitFiberRoot(Rt, u);
				} catch {}
			return !0;
		} finally {
			(V.p = n), (_.T = a), Hd(e, t);
		}
	}
	function Bd(e, t, l) {
		(t = Xt(l, t)),
			(t = gc(e.stateNode, t, 2)),
			(e = Xl(e, t, 2)),
			e !== null && (ma(e, 2), dl(e));
	}
	function Ge(e, t, l) {
		if (e.tag === 3) Bd(e, e, l);
		else
			for (; t !== null; ) {
				if (t.tag === 3) {
					Bd(t, e, l);
					break;
				} else if (t.tag === 1) {
					var a = t.stateNode;
					if (
						typeof t.type.getDerivedStateFromError == 'function' ||
						(typeof a.componentDidCatch == 'function' &&
							(Fl === null || !Fl.has(a)))
					) {
						(e = Xt(l, e)),
							(l = Gs(2)),
							(a = Xl(t, l, 2)),
							a !== null && (Xs(l, a, t, e), ma(a, 2), dl(a));
						break;
					}
				}
				t = t.return;
			}
	}
	function Qc(e, t, l) {
		var a = e.pingCache;
		if (a === null) {
			a = e.pingCache = new Bv();
			var n = new Set();
			a.set(t, n);
		} else (n = a.get(t)), n === void 0 && ((n = new Set()), a.set(t, n));
		n.has(l) ||
			((Nc = !0), n.add(l), (e = Xv.bind(null, e, t, l)), t.then(e, e));
	}
	function Xv(e, t, l) {
		var a = e.pingCache;
		a !== null && a.delete(t),
			(e.pingedLanes |= e.suspendedLanes & l),
			(e.warmLanes &= ~l),
			Qe === e &&
				(Oe & l) === l &&
				(Ie === 4 || (Ie === 3 && (Oe & 62914560) === Oe && 300 > _t() - Lc)
					? (Le & 2) === 0 && vn(e, 0)
					: (wc |= l),
				dn === Oe && (dn = 0)),
			dl(e);
	}
	function qd(e, t) {
		t === 0 && (t = Gu()), (e = Wa(e, t)), e !== null && (ma(e, t), dl(e));
	}
	function Qv(e) {
		var t = e.memoizedState,
			l = 0;
		t !== null && (l = t.retryLane), qd(e, l);
	}
	function Vv(e, t) {
		var l = 0;
		switch (e.tag) {
			case 13:
				var a = e.stateNode,
					n = e.memoizedState;
				n !== null && (l = n.retryLane);
				break;
			case 19:
				a = e.stateNode;
				break;
			case 22:
				a = e.stateNode._retryCache;
				break;
			default:
				throw Error(o(314));
		}
		a !== null && a.delete(t), qd(e, l);
	}
	function Zv(e, t) {
		return Mn(e, t);
	}
	var Ni = null,
		gn = null,
		Vc = !1,
		wi = !1,
		Zc = !1,
		Na = 0;
	function dl(e) {
		e !== gn &&
			e.next === null &&
			(gn === null ? (Ni = gn = e) : (gn = gn.next = e)),
			(wi = !0),
			Vc || ((Vc = !0), Jv());
	}
	function ou(e, t) {
		if (!Zc && wi) {
			Zc = !0;
			do
				for (var l = !1, a = Ni; a !== null; ) {
					if (e !== 0) {
						var n = a.pendingLanes;
						if (n === 0) var u = 0;
						else {
							var c = a.suspendedLanes,
								d = a.pingedLanes;
							(u = (1 << (31 - dt(42 | e) + 1)) - 1),
								(u &= n & ~(c & ~d)),
								(u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0);
						}
						u !== 0 && ((l = !0), Xd(a, u));
					} else
						(u = Oe),
							(u = ha(
								a,
								a === Qe ? u : 0,
								a.cancelPendingCommit !== null || a.timeoutHandle !== -1
							)),
							(u & 3) === 0 || rl(a, u) || ((l = !0), Xd(a, u));
					a = a.next;
				}
			while (l);
			Zc = !1;
		}
	}
	function Kv() {
		Yd();
	}
	function Yd() {
		wi = Vc = !1;
		var e = 0;
		Na !== 0 && (ty() && (e = Na), (Na = 0));
		for (var t = _t(), l = null, a = Ni; a !== null; ) {
			var n = a.next,
				u = jd(a, t);
			u === 0
				? ((a.next = null),
				  l === null ? (Ni = n) : (l.next = n),
				  n === null && (gn = l))
				: ((l = a), (e !== 0 || (u & 3) !== 0) && (wi = !0)),
				(a = n);
		}
		ou(e);
	}
	function jd(e, t) {
		for (
			var l = e.suspendedLanes,
				a = e.pingedLanes,
				n = e.expirationTimes,
				u = e.pendingLanes & -62914561;
			0 < u;

		) {
			var c = 31 - dt(u),
				d = 1 << c,
				g = n[c];
			g === -1
				? ((d & l) === 0 || (d & a) !== 0) && (n[c] = ju(d, t))
				: g <= t && (e.expiredLanes |= d),
				(u &= ~d);
		}
		if (
			((t = Qe),
			(l = Oe),
			(l = ha(
				e,
				e === t ? l : 0,
				e.cancelPendingCommit !== null || e.timeoutHandle !== -1
			)),
			(a = e.callbackNode),
			l === 0 ||
				(e === t && (Be === 2 || Be === 9)) ||
				e.cancelPendingCommit !== null)
		)
			return (
				a !== null && a !== null && Pt(a),
				(e.callbackNode = null),
				(e.callbackPriority = 0)
			);
		if ((l & 3) === 0 || rl(e, l)) {
			if (((t = l & -l), t === e.callbackPriority)) return t;
			switch ((a !== null && Pt(a), zn(l))) {
				case 2:
				case 8:
					l = Bu;
					break;
				case 32:
					l = Ya;
					break;
				case 268435456:
					l = Nl;
					break;
				default:
					l = Ya;
			}
			return (
				(a = Gd.bind(null, e)),
				(l = Mn(l, a)),
				(e.callbackPriority = t),
				(e.callbackNode = l),
				t
			);
		}
		return (
			a !== null && a !== null && Pt(a),
			(e.callbackPriority = 2),
			(e.callbackNode = null),
			2
		);
	}
	function Gd(e, t) {
		if (mt !== 0 && mt !== 5)
			return (e.callbackNode = null), (e.callbackPriority = 0), null;
		var l = e.callbackNode;
		if (Ci() && e.callbackNode !== l) return null;
		var a = Oe;
		return (
			(a = ha(
				e,
				e === Qe ? a : 0,
				e.cancelPendingCommit !== null || e.timeoutHandle !== -1
			)),
			a === 0
				? null
				: (Td(e, a, t),
				  jd(e, _t()),
				  e.callbackNode != null && e.callbackNode === l
						? Gd.bind(null, e)
						: null)
		);
	}
	function Xd(e, t) {
		if (Ci()) return null;
		Td(e, t, !0);
	}
	function Jv() {
		ay(function () {
			(Le & 6) !== 0 ? Mn(Lu, Kv) : Yd();
		});
	}
	function Kc() {
		return Na === 0 && (Na = ja()), Na;
	}
	function Qd(e) {
		return e == null || typeof e == 'symbol' || typeof e == 'boolean'
			? null
			: typeof e == 'function'
			? e
			: Zu('' + e);
	}
	function Vd(e, t) {
		var l = t.ownerDocument.createElement('input');
		return (
			(l.name = t.name),
			(l.value = t.value),
			e.id && l.setAttribute('form', e.id),
			t.parentNode.insertBefore(l, t),
			(e = new FormData(e)),
			l.parentNode.removeChild(l),
			e
		);
	}
	function $v(e, t, l, a, n) {
		if (t === 'submit' && l && l.stateNode === n) {
			var u = Qd((n[Q] || null).action),
				c = a.submitter;
			c &&
				((t = (t = c[Q] || null)
					? Qd(t.formAction)
					: c.getAttribute('formAction')),
				t !== null && ((u = t), (c = null)));
			var d = new ku('action', 'action', null, a, n);
			e.push({
				event: d,
				listeners: [
					{
						instance: null,
						listener: function () {
							if (a.defaultPrevented) {
								if (Na !== 0) {
									var g = c ? Vd(n, c) : new FormData(n);
									dc(
										l,
										{ pending: !0, data: g, method: n.method, action: u },
										null,
										g
									);
								}
							} else
								typeof u == 'function' &&
									(d.preventDefault(),
									(g = c ? Vd(n, c) : new FormData(n)),
									dc(
										l,
										{ pending: !0, data: g, method: n.method, action: u },
										u,
										g
									));
						},
						currentTarget: n,
					},
				],
			});
		}
	}
	for (var Jc = 0; Jc < xr.length; Jc++) {
		var $c = xr[Jc],
			kv = $c.toLowerCase(),
			Wv = $c[0].toUpperCase() + $c.slice(1);
		ll(kv, 'on' + Wv);
	}
	ll(To, 'onAnimationEnd'),
		ll(Mo, 'onAnimationIteration'),
		ll(Do, 'onAnimationStart'),
		ll('dblclick', 'onDoubleClick'),
		ll('focusin', 'onFocus'),
		ll('focusout', 'onBlur'),
		ll(hv, 'onTransitionRun'),
		ll(mv, 'onTransitionStart'),
		ll(vv, 'onTransitionCancel'),
		ll(Ao, 'onTransitionEnd'),
		Yt('onMouseEnter', ['mouseout', 'mouseover']),
		Yt('onMouseLeave', ['mouseout', 'mouseover']),
		Yt('onPointerEnter', ['pointerout', 'pointerover']),
		Yt('onPointerLeave', ['pointerout', 'pointerover']),
		St(
			'onChange',
			'change click focusin focusout input keydown keyup selectionchange'.split(
				' '
			)
		),
		St(
			'onSelect',
			'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
				' '
			)
		),
		St('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
		St(
			'onCompositionEnd',
			'compositionend focusout keydown keypress keyup mousedown'.split(' ')
		),
		St(
			'onCompositionStart',
			'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
		),
		St(
			'onCompositionUpdate',
			'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
		);
	var su =
			'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
				' '
			),
		Fv = new Set(
			'beforetoggle cancel close invalid load scroll scrollend toggle'
				.split(' ')
				.concat(su)
		);
	function Zd(e, t) {
		t = (t & 4) !== 0;
		for (var l = 0; l < e.length; l++) {
			var a = e[l],
				n = a.event;
			a = a.listeners;
			e: {
				var u = void 0;
				if (t)
					for (var c = a.length - 1; 0 <= c; c--) {
						var d = a[c],
							g = d.instance,
							z = d.currentTarget;
						if (((d = d.listener), g !== u && n.isPropagationStopped()))
							break e;
						(u = d), (n.currentTarget = z);
						try {
							u(n);
						} catch (L) {
							Ei(L);
						}
						(n.currentTarget = null), (u = g);
					}
				else
					for (c = 0; c < a.length; c++) {
						if (
							((d = a[c]),
							(g = d.instance),
							(z = d.currentTarget),
							(d = d.listener),
							g !== u && n.isPropagationStopped())
						)
							break e;
						(u = d), (n.currentTarget = z);
						try {
							u(n);
						} catch (L) {
							Ei(L);
						}
						(n.currentTarget = null), (u = g);
					}
			}
		}
	}
	function De(e, t) {
		var l = t[ie];
		l === void 0 && (l = t[ie] = new Set());
		var a = e + '__bubble';
		l.has(a) || (Kd(t, e, 2, !1), l.add(a));
	}
	function kc(e, t, l) {
		var a = 0;
		t && (a |= 4), Kd(l, e, a, t);
	}
	var Hi = '_reactListening' + Math.random().toString(36).slice(2);
	function Wc(e) {
		if (!e[Hi]) {
			(e[Hi] = !0),
				ze.forEach(function (l) {
					l !== 'selectionchange' && (Fv.has(l) || kc(l, !1, e), kc(l, !0, e));
				});
			var t = e.nodeType === 9 ? e : e.ownerDocument;
			t === null || t[Hi] || ((t[Hi] = !0), kc('selectionchange', !1, t));
		}
	}
	function Kd(e, t, l, a) {
		switch (yh(t)) {
			case 2:
				var n = My;
				break;
			case 8:
				n = Dy;
				break;
			default:
				n = sf;
		}
		(l = n.bind(null, t, l, e)),
			(n = void 0),
			!pr ||
				(t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
				(n = !0),
			a
				? n !== void 0
					? e.addEventListener(t, l, { capture: !0, passive: n })
					: e.addEventListener(t, l, !0)
				: n !== void 0
				? e.addEventListener(t, l, { passive: n })
				: e.addEventListener(t, l, !1);
	}
	function Fc(e, t, l, a, n) {
		var u = a;
		if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
			e: for (;;) {
				if (a === null) return;
				var c = a.tag;
				if (c === 3 || c === 4) {
					var d = a.stateNode.containerInfo;
					if (d === n) break;
					if (c === 4)
						for (c = a.return; c !== null; ) {
							var g = c.tag;
							if ((g === 3 || g === 4) && c.stateNode.containerInfo === n)
								return;
							c = c.return;
						}
					for (; d !== null; ) {
						if (((c = ve(d)), c === null)) return;
						if (((g = c.tag), g === 5 || g === 6 || g === 26 || g === 27)) {
							a = u = c;
							continue e;
						}
						d = d.parentNode;
					}
				}
				a = a.return;
			}
		Pf(function () {
			var z = u,
				L = yr(l),
				G = [];
			e: {
				var O = zo.get(e);
				if (O !== void 0) {
					var U = ku,
						de = e;
					switch (e) {
						case 'keypress':
							if (Ju(l) === 0) break e;
						case 'keydown':
						case 'keyup':
							U = Zm;
							break;
						case 'focusin':
							(de = 'focus'), (U = Rr);
							break;
						case 'focusout':
							(de = 'blur'), (U = Rr);
							break;
						case 'beforeblur':
						case 'afterblur':
							U = Rr;
							break;
						case 'click':
							if (l.button === 2) break e;
						case 'auxclick':
						case 'dblclick':
						case 'mousedown':
						case 'mousemove':
						case 'mouseup':
						case 'mouseout':
						case 'mouseover':
						case 'contextmenu':
							U = to;
							break;
						case 'drag':
						case 'dragend':
						case 'dragenter':
						case 'dragexit':
						case 'dragleave':
						case 'dragover':
						case 'dragstart':
						case 'drop':
							U = Nm;
							break;
						case 'touchcancel':
						case 'touchend':
						case 'touchmove':
						case 'touchstart':
							U = $m;
							break;
						case To:
						case Mo:
						case Do:
							U = Lm;
							break;
						case Ao:
							U = Wm;
							break;
						case 'scroll':
						case 'scrollend':
							U = xm;
							break;
						case 'wheel':
							U = Pm;
							break;
						case 'copy':
						case 'cut':
						case 'paste':
							U = qm;
							break;
						case 'gotpointercapture':
						case 'lostpointercapture':
						case 'pointercancel':
						case 'pointerdown':
						case 'pointermove':
						case 'pointerout':
						case 'pointerover':
						case 'pointerup':
							U = ao;
							break;
						case 'toggle':
						case 'beforetoggle':
							U = ev;
					}
					var re = (t & 4) !== 0,
						je = !re && (e === 'scroll' || e === 'scrollend'),
						T = re ? (O !== null ? O + 'Capture' : null) : O;
					re = [];
					for (var E = z, A; E !== null; ) {
						var Y = E;
						if (
							((A = Y.stateNode),
							(Y = Y.tag),
							(Y !== 5 && Y !== 26 && Y !== 27) ||
								A === null ||
								T === null ||
								((Y = Un(E, T)), Y != null && re.push(du(E, Y, A))),
							je)
						)
							break;
						E = E.return;
					}
					0 < re.length &&
						((O = new U(O, de, null, l, L)),
						G.push({ event: O, listeners: re }));
				}
			}
			if ((t & 7) === 0) {
				e: {
					if (
						((O = e === 'mouseover' || e === 'pointerover'),
						(U = e === 'mouseout' || e === 'pointerout'),
						O &&
							l !== vr &&
							(de = l.relatedTarget || l.fromElement) &&
							(ve(de) || de[ee]))
					)
						break e;
					if (
						(U || O) &&
						((O =
							L.window === L
								? L
								: (O = L.ownerDocument)
								? O.defaultView || O.parentWindow
								: window),
						U
							? ((de = l.relatedTarget || l.toElement),
							  (U = z),
							  (de = de ? ve(de) : null),
							  de !== null &&
									((je = h(de)),
									(re = de.tag),
									de !== je || (re !== 5 && re !== 27 && re !== 6)) &&
									(de = null))
							: ((U = null), (de = z)),
						U !== de)
					) {
						if (
							((re = to),
							(Y = 'onMouseLeave'),
							(T = 'onMouseEnter'),
							(E = 'mouse'),
							(e === 'pointerout' || e === 'pointerover') &&
								((re = ao),
								(Y = 'onPointerLeave'),
								(T = 'onPointerEnter'),
								(E = 'pointer')),
							(je = U == null ? O : Ze(U)),
							(A = de == null ? O : Ze(de)),
							(O = new re(Y, E + 'leave', U, l, L)),
							(O.target = je),
							(O.relatedTarget = A),
							(Y = null),
							ve(L) === z &&
								((re = new re(T, E + 'enter', de, l, L)),
								(re.target = A),
								(re.relatedTarget = je),
								(Y = re)),
							(je = Y),
							U && de)
						)
							t: {
								for (re = U, T = de, E = 0, A = re; A; A = pn(A)) E++;
								for (A = 0, Y = T; Y; Y = pn(Y)) A++;
								for (; 0 < E - A; ) (re = pn(re)), E--;
								for (; 0 < A - E; ) (T = pn(T)), A--;
								for (; E--; ) {
									if (re === T || (T !== null && re === T.alternate)) break t;
									(re = pn(re)), (T = pn(T));
								}
								re = null;
							}
						else re = null;
						U !== null && Jd(G, O, U, re, !1),
							de !== null && je !== null && Jd(G, je, de, re, !0);
					}
				}
				e: {
					if (
						((O = z ? Ze(z) : window),
						(U = O.nodeName && O.nodeName.toLowerCase()),
						U === 'select' || (U === 'input' && O.type === 'file'))
					)
						var I = so;
					else if (fo(O))
						if (ho) I = ov;
						else {
							I = cv;
							var Re = rv;
						}
					else
						(U = O.nodeName),
							!U ||
							U.toLowerCase() !== 'input' ||
							(O.type !== 'checkbox' && O.type !== 'radio')
								? z && mr(z.elementType) && (I = so)
								: (I = fv);
					if (I && (I = I(e, z))) {
						oo(G, I, l, L);
						break e;
					}
					Re && Re(e, O, z),
						e === 'focusout' &&
							z &&
							O.type === 'number' &&
							z.memoizedProps.value != null &&
							hr(O, 'number', O.value);
				}
				switch (((Re = z ? Ze(z) : window), e)) {
					case 'focusin':
						(fo(Re) || Re.contentEditable === 'true') &&
							((Ja = Re), (Or = z), (qn = null));
						break;
					case 'focusout':
						qn = Or = Ja = null;
						break;
					case 'mousedown':
						_r = !0;
						break;
					case 'contextmenu':
					case 'mouseup':
					case 'dragend':
						(_r = !1), Eo(G, l, L);
						break;
					case 'selectionchange':
						if (dv) break;
					case 'keydown':
					case 'keyup':
						Eo(G, l, L);
				}
				var ae;
				if (Mr)
					e: {
						switch (e) {
							case 'compositionstart':
								var fe = 'onCompositionStart';
								break e;
							case 'compositionend':
								fe = 'onCompositionEnd';
								break e;
							case 'compositionupdate':
								fe = 'onCompositionUpdate';
								break e;
						}
						fe = void 0;
					}
				else
					Ka
						? ro(e, l) && (fe = 'onCompositionEnd')
						: e === 'keydown' &&
						  l.keyCode === 229 &&
						  (fe = 'onCompositionStart');
				fe &&
					(no &&
						l.locale !== 'ko' &&
						(Ka || fe !== 'onCompositionStart'
							? fe === 'onCompositionEnd' && Ka && (ae = If())
							: ((ql = L),
							  (br = 'value' in ql ? ql.value : ql.textContent),
							  (Ka = !0))),
					(Re = Li(z, fe)),
					0 < Re.length &&
						((fe = new lo(fe, e, null, l, L)),
						G.push({ event: fe, listeners: Re }),
						ae
							? (fe.data = ae)
							: ((ae = co(l)), ae !== null && (fe.data = ae)))),
					(ae = lv ? av(e, l) : nv(e, l)) &&
						((fe = Li(z, 'onBeforeInput')),
						0 < fe.length &&
							((Re = new lo('onBeforeInput', 'beforeinput', null, l, L)),
							G.push({ event: Re, listeners: fe }),
							(Re.data = ae))),
					$v(G, e, z, l, L);
			}
			Zd(G, t);
		});
	}
	function du(e, t, l) {
		return { instance: e, listener: t, currentTarget: l };
	}
	function Li(e, t) {
		for (var l = t + 'Capture', a = []; e !== null; ) {
			var n = e,
				u = n.stateNode;
			if (
				((n = n.tag),
				(n !== 5 && n !== 26 && n !== 27) ||
					u === null ||
					((n = Un(e, l)),
					n != null && a.unshift(du(e, n, u)),
					(n = Un(e, t)),
					n != null && a.push(du(e, n, u))),
				e.tag === 3)
			)
				return a;
			e = e.return;
		}
		return [];
	}
	function pn(e) {
		if (e === null) return null;
		do e = e.return;
		while (e && e.tag !== 5 && e.tag !== 27);
		return e || null;
	}
	function Jd(e, t, l, a, n) {
		for (var u = t._reactName, c = []; l !== null && l !== a; ) {
			var d = l,
				g = d.alternate,
				z = d.stateNode;
			if (((d = d.tag), g !== null && g === a)) break;
			(d !== 5 && d !== 26 && d !== 27) ||
				z === null ||
				((g = z),
				n
					? ((z = Un(l, u)), z != null && c.unshift(du(l, z, g)))
					: n || ((z = Un(l, u)), z != null && c.push(du(l, z, g)))),
				(l = l.return);
		}
		c.length !== 0 && e.push({ event: t, listeners: c });
	}
	var Pv = /\r\n?/g,
		Iv = /\u0000|\uFFFD/g;
	function $d(e) {
		return (typeof e == 'string' ? e : '' + e)
			.replace(
				Pv,
				`
`
			)
			.replace(Iv, '');
	}
	function kd(e, t) {
		return (t = $d(t)), $d(e) === t;
	}
	function Bi() {}
	function Ye(e, t, l, a, n, u) {
		switch (l) {
			case 'children':
				typeof a == 'string'
					? t === 'body' || (t === 'textarea' && a === '') || Qa(e, a)
					: (typeof a == 'number' || typeof a == 'bigint') &&
					  t !== 'body' &&
					  Qa(e, '' + a);
				break;
			case 'className':
				gl(e, 'class', a);
				break;
			case 'tabIndex':
				gl(e, 'tabindex', a);
				break;
			case 'dir':
			case 'role':
			case 'viewBox':
			case 'width':
			case 'height':
				gl(e, l, a);
				break;
			case 'style':
				Wf(e, a, u);
				break;
			case 'data':
				if (t !== 'object') {
					gl(e, 'data', a);
					break;
				}
			case 'src':
			case 'href':
				if (a === '' && (t !== 'a' || l !== 'href')) {
					e.removeAttribute(l);
					break;
				}
				if (
					a == null ||
					typeof a == 'function' ||
					typeof a == 'symbol' ||
					typeof a == 'boolean'
				) {
					e.removeAttribute(l);
					break;
				}
				(a = Zu('' + a)), e.setAttribute(l, a);
				break;
			case 'action':
			case 'formAction':
				if (typeof a == 'function') {
					e.setAttribute(
						l,
						"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
					);
					break;
				} else
					typeof u == 'function' &&
						(l === 'formAction'
							? (t !== 'input' && Ye(e, t, 'name', n.name, n, null),
							  Ye(e, t, 'formEncType', n.formEncType, n, null),
							  Ye(e, t, 'formMethod', n.formMethod, n, null),
							  Ye(e, t, 'formTarget', n.formTarget, n, null))
							: (Ye(e, t, 'encType', n.encType, n, null),
							  Ye(e, t, 'method', n.method, n, null),
							  Ye(e, t, 'target', n.target, n, null)));
				if (a == null || typeof a == 'symbol' || typeof a == 'boolean') {
					e.removeAttribute(l);
					break;
				}
				(a = Zu('' + a)), e.setAttribute(l, a);
				break;
			case 'onClick':
				a != null && (e.onclick = Bi);
				break;
			case 'onScroll':
				a != null && De('scroll', e);
				break;
			case 'onScrollEnd':
				a != null && De('scrollend', e);
				break;
			case 'dangerouslySetInnerHTML':
				if (a != null) {
					if (typeof a != 'object' || !('__html' in a)) throw Error(o(61));
					if (((l = a.__html), l != null)) {
						if (n.children != null) throw Error(o(60));
						e.innerHTML = l;
					}
				}
				break;
			case 'multiple':
				e.multiple = a && typeof a != 'function' && typeof a != 'symbol';
				break;
			case 'muted':
				e.muted = a && typeof a != 'function' && typeof a != 'symbol';
				break;
			case 'suppressContentEditableWarning':
			case 'suppressHydrationWarning':
			case 'defaultValue':
			case 'defaultChecked':
			case 'innerHTML':
			case 'ref':
				break;
			case 'autoFocus':
				break;
			case 'xlinkHref':
				if (
					a == null ||
					typeof a == 'function' ||
					typeof a == 'boolean' ||
					typeof a == 'symbol'
				) {
					e.removeAttribute('xlink:href');
					break;
				}
				(l = Zu('' + a)),
					e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', l);
				break;
			case 'contentEditable':
			case 'spellCheck':
			case 'draggable':
			case 'value':
			case 'autoReverse':
			case 'externalResourcesRequired':
			case 'focusable':
			case 'preserveAlpha':
				a != null && typeof a != 'function' && typeof a != 'symbol'
					? e.setAttribute(l, '' + a)
					: e.removeAttribute(l);
				break;
			case 'inert':
			case 'allowFullScreen':
			case 'async':
			case 'autoPlay':
			case 'controls':
			case 'default':
			case 'defer':
			case 'disabled':
			case 'disablePictureInPicture':
			case 'disableRemotePlayback':
			case 'formNoValidate':
			case 'hidden':
			case 'loop':
			case 'noModule':
			case 'noValidate':
			case 'open':
			case 'playsInline':
			case 'readOnly':
			case 'required':
			case 'reversed':
			case 'scoped':
			case 'seamless':
			case 'itemScope':
				a && typeof a != 'function' && typeof a != 'symbol'
					? e.setAttribute(l, '')
					: e.removeAttribute(l);
				break;
			case 'capture':
			case 'download':
				a === !0
					? e.setAttribute(l, '')
					: a !== !1 &&
					  a != null &&
					  typeof a != 'function' &&
					  typeof a != 'symbol'
					? e.setAttribute(l, a)
					: e.removeAttribute(l);
				break;
			case 'cols':
			case 'rows':
			case 'size':
			case 'span':
				a != null &&
				typeof a != 'function' &&
				typeof a != 'symbol' &&
				!isNaN(a) &&
				1 <= a
					? e.setAttribute(l, a)
					: e.removeAttribute(l);
				break;
			case 'rowSpan':
			case 'start':
				a == null || typeof a == 'function' || typeof a == 'symbol' || isNaN(a)
					? e.removeAttribute(l)
					: e.setAttribute(l, a);
				break;
			case 'popover':
				De('beforetoggle', e), De('toggle', e), jt(e, 'popover', a);
				break;
			case 'xlinkActuate':
				Ee(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', a);
				break;
			case 'xlinkArcrole':
				Ee(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', a);
				break;
			case 'xlinkRole':
				Ee(e, 'http://www.w3.org/1999/xlink', 'xlink:role', a);
				break;
			case 'xlinkShow':
				Ee(e, 'http://www.w3.org/1999/xlink', 'xlink:show', a);
				break;
			case 'xlinkTitle':
				Ee(e, 'http://www.w3.org/1999/xlink', 'xlink:title', a);
				break;
			case 'xlinkType':
				Ee(e, 'http://www.w3.org/1999/xlink', 'xlink:type', a);
				break;
			case 'xmlBase':
				Ee(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', a);
				break;
			case 'xmlLang':
				Ee(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', a);
				break;
			case 'xmlSpace':
				Ee(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', a);
				break;
			case 'is':
				jt(e, 'is', a);
				break;
			case 'innerText':
			case 'textContent':
				break;
			default:
				(!(2 < l.length) ||
					(l[0] !== 'o' && l[0] !== 'O') ||
					(l[1] !== 'n' && l[1] !== 'N')) &&
					((l = _m.get(l) || l), jt(e, l, a));
		}
	}
	function Pc(e, t, l, a, n, u) {
		switch (l) {
			case 'style':
				Wf(e, a, u);
				break;
			case 'dangerouslySetInnerHTML':
				if (a != null) {
					if (typeof a != 'object' || !('__html' in a)) throw Error(o(61));
					if (((l = a.__html), l != null)) {
						if (n.children != null) throw Error(o(60));
						e.innerHTML = l;
					}
				}
				break;
			case 'children':
				typeof a == 'string'
					? Qa(e, a)
					: (typeof a == 'number' || typeof a == 'bigint') && Qa(e, '' + a);
				break;
			case 'onScroll':
				a != null && De('scroll', e);
				break;
			case 'onScrollEnd':
				a != null && De('scrollend', e);
				break;
			case 'onClick':
				a != null && (e.onclick = Bi);
				break;
			case 'suppressContentEditableWarning':
			case 'suppressHydrationWarning':
			case 'innerHTML':
			case 'ref':
				break;
			case 'innerText':
			case 'textContent':
				break;
			default:
				if (!wl.hasOwnProperty(l))
					e: {
						if (
							l[0] === 'o' &&
							l[1] === 'n' &&
							((n = l.endsWith('Capture')),
							(t = l.slice(2, n ? l.length - 7 : void 0)),
							(u = e[Q] || null),
							(u = u != null ? u[l] : null),
							typeof u == 'function' && e.removeEventListener(t, u, n),
							typeof a == 'function')
						) {
							typeof u != 'function' &&
								u !== null &&
								(l in e
									? (e[l] = null)
									: e.hasAttribute(l) && e.removeAttribute(l)),
								e.addEventListener(t, a, n);
							break e;
						}
						l in e
							? (e[l] = a)
							: a === !0
							? e.setAttribute(l, '')
							: jt(e, l, a);
					}
		}
	}
	function vt(e, t, l) {
		switch (t) {
			case 'div':
			case 'span':
			case 'svg':
			case 'path':
			case 'a':
			case 'g':
			case 'p':
			case 'li':
				break;
			case 'img':
				De('error', e), De('load', e);
				var a = !1,
					n = !1,
					u;
				for (u in l)
					if (l.hasOwnProperty(u)) {
						var c = l[u];
						if (c != null)
							switch (u) {
								case 'src':
									a = !0;
									break;
								case 'srcSet':
									n = !0;
									break;
								case 'children':
								case 'dangerouslySetInnerHTML':
									throw Error(o(137, t));
								default:
									Ye(e, t, u, c, l, null);
							}
					}
				n && Ye(e, t, 'srcSet', l.srcSet, l, null),
					a && Ye(e, t, 'src', l.src, l, null);
				return;
			case 'input':
				De('invalid', e);
				var d = (u = c = n = null),
					g = null,
					z = null;
				for (a in l)
					if (l.hasOwnProperty(a)) {
						var L = l[a];
						if (L != null)
							switch (a) {
								case 'name':
									n = L;
									break;
								case 'type':
									c = L;
									break;
								case 'checked':
									g = L;
									break;
								case 'defaultChecked':
									z = L;
									break;
								case 'value':
									u = L;
									break;
								case 'defaultValue':
									d = L;
									break;
								case 'children':
								case 'dangerouslySetInnerHTML':
									if (L != null) throw Error(o(137, t));
									break;
								default:
									Ye(e, t, a, L, l, null);
							}
					}
				Kf(e, u, d, g, z, c, n, !1), Qu(e);
				return;
			case 'select':
				De('invalid', e), (a = c = u = null);
				for (n in l)
					if (l.hasOwnProperty(n) && ((d = l[n]), d != null))
						switch (n) {
							case 'value':
								u = d;
								break;
							case 'defaultValue':
								c = d;
								break;
							case 'multiple':
								a = d;
							default:
								Ye(e, t, n, d, l, null);
						}
				(t = u),
					(l = c),
					(e.multiple = !!a),
					t != null ? Xa(e, !!a, t, !1) : l != null && Xa(e, !!a, l, !0);
				return;
			case 'textarea':
				De('invalid', e), (u = n = a = null);
				for (c in l)
					if (l.hasOwnProperty(c) && ((d = l[c]), d != null))
						switch (c) {
							case 'value':
								a = d;
								break;
							case 'defaultValue':
								n = d;
								break;
							case 'children':
								u = d;
								break;
							case 'dangerouslySetInnerHTML':
								if (d != null) throw Error(o(91));
								break;
							default:
								Ye(e, t, c, d, l, null);
						}
				$f(e, a, n, u), Qu(e);
				return;
			case 'option':
				for (g in l)
					if (l.hasOwnProperty(g) && ((a = l[g]), a != null))
						switch (g) {
							case 'selected':
								e.selected =
									a && typeof a != 'function' && typeof a != 'symbol';
								break;
							default:
								Ye(e, t, g, a, l, null);
						}
				return;
			case 'dialog':
				De('beforetoggle', e), De('toggle', e), De('cancel', e), De('close', e);
				break;
			case 'iframe':
			case 'object':
				De('load', e);
				break;
			case 'video':
			case 'audio':
				for (a = 0; a < su.length; a++) De(su[a], e);
				break;
			case 'image':
				De('error', e), De('load', e);
				break;
			case 'details':
				De('toggle', e);
				break;
			case 'embed':
			case 'source':
			case 'link':
				De('error', e), De('load', e);
			case 'area':
			case 'base':
			case 'br':
			case 'col':
			case 'hr':
			case 'keygen':
			case 'meta':
			case 'param':
			case 'track':
			case 'wbr':
			case 'menuitem':
				for (z in l)
					if (l.hasOwnProperty(z) && ((a = l[z]), a != null))
						switch (z) {
							case 'children':
							case 'dangerouslySetInnerHTML':
								throw Error(o(137, t));
							default:
								Ye(e, t, z, a, l, null);
						}
				return;
			default:
				if (mr(t)) {
					for (L in l)
						l.hasOwnProperty(L) &&
							((a = l[L]), a !== void 0 && Pc(e, t, L, a, l, void 0));
					return;
				}
		}
		for (d in l)
			l.hasOwnProperty(d) && ((a = l[d]), a != null && Ye(e, t, d, a, l, null));
	}
	function ey(e, t, l, a) {
		switch (t) {
			case 'div':
			case 'span':
			case 'svg':
			case 'path':
			case 'a':
			case 'g':
			case 'p':
			case 'li':
				break;
			case 'input':
				var n = null,
					u = null,
					c = null,
					d = null,
					g = null,
					z = null,
					L = null;
				for (U in l) {
					var G = l[U];
					if (l.hasOwnProperty(U) && G != null)
						switch (U) {
							case 'checked':
								break;
							case 'value':
								break;
							case 'defaultValue':
								g = G;
							default:
								a.hasOwnProperty(U) || Ye(e, t, U, null, a, G);
						}
				}
				for (var O in a) {
					var U = a[O];
					if (((G = l[O]), a.hasOwnProperty(O) && (U != null || G != null)))
						switch (O) {
							case 'type':
								u = U;
								break;
							case 'name':
								n = U;
								break;
							case 'checked':
								z = U;
								break;
							case 'defaultChecked':
								L = U;
								break;
							case 'value':
								c = U;
								break;
							case 'defaultValue':
								d = U;
								break;
							case 'children':
							case 'dangerouslySetInnerHTML':
								if (U != null) throw Error(o(137, t));
								break;
							default:
								U !== G && Ye(e, t, O, U, a, G);
						}
				}
				dr(e, c, d, g, z, L, u, n);
				return;
			case 'select':
				U = c = d = O = null;
				for (u in l)
					if (((g = l[u]), l.hasOwnProperty(u) && g != null))
						switch (u) {
							case 'value':
								break;
							case 'multiple':
								U = g;
							default:
								a.hasOwnProperty(u) || Ye(e, t, u, null, a, g);
						}
				for (n in a)
					if (
						((u = a[n]),
						(g = l[n]),
						a.hasOwnProperty(n) && (u != null || g != null))
					)
						switch (n) {
							case 'value':
								O = u;
								break;
							case 'defaultValue':
								d = u;
								break;
							case 'multiple':
								c = u;
							default:
								u !== g && Ye(e, t, n, u, a, g);
						}
				(t = d),
					(l = c),
					(a = U),
					O != null
						? Xa(e, !!l, O, !1)
						: !!a != !!l &&
						  (t != null ? Xa(e, !!l, t, !0) : Xa(e, !!l, l ? [] : '', !1));
				return;
			case 'textarea':
				U = O = null;
				for (d in l)
					if (
						((n = l[d]),
						l.hasOwnProperty(d) && n != null && !a.hasOwnProperty(d))
					)
						switch (d) {
							case 'value':
								break;
							case 'children':
								break;
							default:
								Ye(e, t, d, null, a, n);
						}
				for (c in a)
					if (
						((n = a[c]),
						(u = l[c]),
						a.hasOwnProperty(c) && (n != null || u != null))
					)
						switch (c) {
							case 'value':
								O = n;
								break;
							case 'defaultValue':
								U = n;
								break;
							case 'children':
								break;
							case 'dangerouslySetInnerHTML':
								if (n != null) throw Error(o(91));
								break;
							default:
								n !== u && Ye(e, t, c, n, a, u);
						}
				Jf(e, O, U);
				return;
			case 'option':
				for (var de in l)
					if (
						((O = l[de]),
						l.hasOwnProperty(de) && O != null && !a.hasOwnProperty(de))
					)
						switch (de) {
							case 'selected':
								e.selected = !1;
								break;
							default:
								Ye(e, t, de, null, a, O);
						}
				for (g in a)
					if (
						((O = a[g]),
						(U = l[g]),
						a.hasOwnProperty(g) && O !== U && (O != null || U != null))
					)
						switch (g) {
							case 'selected':
								e.selected =
									O && typeof O != 'function' && typeof O != 'symbol';
								break;
							default:
								Ye(e, t, g, O, a, U);
						}
				return;
			case 'img':
			case 'link':
			case 'area':
			case 'base':
			case 'br':
			case 'col':
			case 'embed':
			case 'hr':
			case 'keygen':
			case 'meta':
			case 'param':
			case 'source':
			case 'track':
			case 'wbr':
			case 'menuitem':
				for (var re in l)
					(O = l[re]),
						l.hasOwnProperty(re) &&
							O != null &&
							!a.hasOwnProperty(re) &&
							Ye(e, t, re, null, a, O);
				for (z in a)
					if (
						((O = a[z]),
						(U = l[z]),
						a.hasOwnProperty(z) && O !== U && (O != null || U != null))
					)
						switch (z) {
							case 'children':
							case 'dangerouslySetInnerHTML':
								if (O != null) throw Error(o(137, t));
								break;
							default:
								Ye(e, t, z, O, a, U);
						}
				return;
			default:
				if (mr(t)) {
					for (var je in l)
						(O = l[je]),
							l.hasOwnProperty(je) &&
								O !== void 0 &&
								!a.hasOwnProperty(je) &&
								Pc(e, t, je, void 0, a, O);
					for (L in a)
						(O = a[L]),
							(U = l[L]),
							!a.hasOwnProperty(L) ||
								O === U ||
								(O === void 0 && U === void 0) ||
								Pc(e, t, L, O, a, U);
					return;
				}
		}
		for (var T in l)
			(O = l[T]),
				l.hasOwnProperty(T) &&
					O != null &&
					!a.hasOwnProperty(T) &&
					Ye(e, t, T, null, a, O);
		for (G in a)
			(O = a[G]),
				(U = l[G]),
				!a.hasOwnProperty(G) ||
					O === U ||
					(O == null && U == null) ||
					Ye(e, t, G, O, a, U);
	}
	var Ic = null,
		ef = null;
	function qi(e) {
		return e.nodeType === 9 ? e : e.ownerDocument;
	}
	function Wd(e) {
		switch (e) {
			case 'http://www.w3.org/2000/svg':
				return 1;
			case 'http://www.w3.org/1998/Math/MathML':
				return 2;
			default:
				return 0;
		}
	}
	function Fd(e, t) {
		if (e === 0)
			switch (t) {
				case 'svg':
					return 1;
				case 'math':
					return 2;
				default:
					return 0;
			}
		return e === 1 && t === 'foreignObject' ? 0 : e;
	}
	function tf(e, t) {
		return (
			e === 'textarea' ||
			e === 'noscript' ||
			typeof t.children == 'string' ||
			typeof t.children == 'number' ||
			typeof t.children == 'bigint' ||
			(typeof t.dangerouslySetInnerHTML == 'object' &&
				t.dangerouslySetInnerHTML !== null &&
				t.dangerouslySetInnerHTML.__html != null)
		);
	}
	var lf = null;
	function ty() {
		var e = window.event;
		return e && e.type === 'popstate'
			? e === lf
				? !1
				: ((lf = e), !0)
			: ((lf = null), !1);
	}
	var Pd = typeof setTimeout == 'function' ? setTimeout : void 0,
		ly = typeof clearTimeout == 'function' ? clearTimeout : void 0,
		Id = typeof Promise == 'function' ? Promise : void 0,
		ay =
			typeof queueMicrotask == 'function'
				? queueMicrotask
				: typeof Id < 'u'
				? function (e) {
						return Id.resolve(null).then(e).catch(ny);
				  }
				: Pd;
	function ny(e) {
		setTimeout(function () {
			throw e;
		});
	}
	function ea(e) {
		return e === 'head';
	}
	function eh(e, t) {
		var l = t,
			a = 0,
			n = 0;
		do {
			var u = l.nextSibling;
			if ((e.removeChild(l), u && u.nodeType === 8))
				if (((l = u.data), l === '/$')) {
					if (0 < a && 8 > a) {
						l = a;
						var c = e.ownerDocument;
						if ((l & 1 && hu(c.documentElement), l & 2 && hu(c.body), l & 4))
							for (l = c.head, hu(l), c = l.firstChild; c; ) {
								var d = c.nextSibling,
									g = c.nodeName;
								c[oe] ||
									g === 'SCRIPT' ||
									g === 'STYLE' ||
									(g === 'LINK' && c.rel.toLowerCase() === 'stylesheet') ||
									l.removeChild(c),
									(c = d);
							}
					}
					if (n === 0) {
						e.removeChild(u), Eu(t);
						return;
					}
					n--;
				} else
					l === '$' || l === '$?' || l === '$!'
						? n++
						: (a = l.charCodeAt(0) - 48);
			else a = 0;
			l = u;
		} while (l);
		Eu(t);
	}
	function af(e) {
		var t = e.firstChild;
		for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
			var l = t;
			switch (((t = t.nextSibling), l.nodeName)) {
				case 'HTML':
				case 'HEAD':
				case 'BODY':
					af(l), se(l);
					continue;
				case 'SCRIPT':
				case 'STYLE':
					continue;
				case 'LINK':
					if (l.rel.toLowerCase() === 'stylesheet') continue;
			}
			e.removeChild(l);
		}
	}
	function uy(e, t, l, a) {
		for (; e.nodeType === 1; ) {
			var n = l;
			if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
				if (!a && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
			} else if (a) {
				if (!e[oe])
					switch (t) {
						case 'meta':
							if (!e.hasAttribute('itemprop')) break;
							return e;
						case 'link':
							if (
								((u = e.getAttribute('rel')),
								u === 'stylesheet' && e.hasAttribute('data-precedence'))
							)
								break;
							if (
								u !== n.rel ||
								e.getAttribute('href') !==
									(n.href == null || n.href === '' ? null : n.href) ||
								e.getAttribute('crossorigin') !==
									(n.crossOrigin == null ? null : n.crossOrigin) ||
								e.getAttribute('title') !== (n.title == null ? null : n.title)
							)
								break;
							return e;
						case 'style':
							if (e.hasAttribute('data-precedence')) break;
							return e;
						case 'script':
							if (
								((u = e.getAttribute('src')),
								(u !== (n.src == null ? null : n.src) ||
									e.getAttribute('type') !== (n.type == null ? null : n.type) ||
									e.getAttribute('crossorigin') !==
										(n.crossOrigin == null ? null : n.crossOrigin)) &&
									u &&
									e.hasAttribute('async') &&
									!e.hasAttribute('itemprop'))
							)
								break;
							return e;
						default:
							return e;
					}
			} else if (t === 'input' && e.type === 'hidden') {
				var u = n.name == null ? null : '' + n.name;
				if (n.type === 'hidden' && e.getAttribute('name') === u) return e;
			} else return e;
			if (((e = nl(e.nextSibling)), e === null)) break;
		}
		return null;
	}
	function iy(e, t, l) {
		if (t === '') return null;
		for (; e.nodeType !== 3; )
			if (
				((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') &&
					!l) ||
				((e = nl(e.nextSibling)), e === null)
			)
				return null;
		return e;
	}
	function nf(e) {
		return (
			e.data === '$!' ||
			(e.data === '$?' && e.ownerDocument.readyState === 'complete')
		);
	}
	function ry(e, t) {
		var l = e.ownerDocument;
		if (e.data !== '$?' || l.readyState === 'complete') t();
		else {
			var a = function () {
				t(), l.removeEventListener('DOMContentLoaded', a);
			};
			l.addEventListener('DOMContentLoaded', a), (e._reactRetry = a);
		}
	}
	function nl(e) {
		for (; e != null; e = e.nextSibling) {
			var t = e.nodeType;
			if (t === 1 || t === 3) break;
			if (t === 8) {
				if (
					((t = e.data),
					t === '$' || t === '$!' || t === '$?' || t === 'F!' || t === 'F')
				)
					break;
				if (t === '/$') return null;
			}
		}
		return e;
	}
	var uf = null;
	function th(e) {
		e = e.previousSibling;
		for (var t = 0; e; ) {
			if (e.nodeType === 8) {
				var l = e.data;
				if (l === '$' || l === '$!' || l === '$?') {
					if (t === 0) return e;
					t--;
				} else l === '/$' && t++;
			}
			e = e.previousSibling;
		}
		return null;
	}
	function lh(e, t, l) {
		switch (((t = qi(l)), e)) {
			case 'html':
				if (((e = t.documentElement), !e)) throw Error(o(452));
				return e;
			case 'head':
				if (((e = t.head), !e)) throw Error(o(453));
				return e;
			case 'body':
				if (((e = t.body), !e)) throw Error(o(454));
				return e;
			default:
				throw Error(o(451));
		}
	}
	function hu(e) {
		for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
		se(e);
	}
	var $t = new Map(),
		ah = new Set();
	function Yi(e) {
		return typeof e.getRootNode == 'function'
			? e.getRootNode()
			: e.nodeType === 9
			? e
			: e.ownerDocument;
	}
	var xl = V.d;
	V.d = { f: cy, r: fy, D: oy, C: sy, L: dy, m: hy, X: vy, S: my, M: yy };
	function cy() {
		var e = xl.f(),
			t = Ui();
		return e || t;
	}
	function fy(e) {
		var t = _e(e);
		t !== null && t.tag === 5 && t.type === 'form' ? Ts(t) : xl.r(e);
	}
	var bn = typeof document > 'u' ? null : document;
	function nh(e, t, l) {
		var a = bn;
		if (a && typeof t == 'string' && t) {
			var n = Gt(t);
			(n = 'link[rel="' + e + '"][href="' + n + '"]'),
				typeof l == 'string' && (n += '[crossorigin="' + l + '"]'),
				ah.has(n) ||
					(ah.add(n),
					(e = { rel: e, crossOrigin: l, href: t }),
					a.querySelector(n) === null &&
						((t = a.createElement('link')),
						vt(t, 'link', e),
						xe(t),
						a.head.appendChild(t)));
		}
	}
	function oy(e) {
		xl.D(e), nh('dns-prefetch', e, null);
	}
	function sy(e, t) {
		xl.C(e, t), nh('preconnect', e, t);
	}
	function dy(e, t, l) {
		xl.L(e, t, l);
		var a = bn;
		if (a && e && t) {
			var n = 'link[rel="preload"][as="' + Gt(t) + '"]';
			t === 'image' && l && l.imageSrcSet
				? ((n += '[imagesrcset="' + Gt(l.imageSrcSet) + '"]'),
				  typeof l.imageSizes == 'string' &&
						(n += '[imagesizes="' + Gt(l.imageSizes) + '"]'))
				: (n += '[href="' + Gt(e) + '"]');
			var u = n;
			switch (t) {
				case 'style':
					u = Sn(e);
					break;
				case 'script':
					u = En(e);
			}
			$t.has(u) ||
				((e = R(
					{
						rel: 'preload',
						href: t === 'image' && l && l.imageSrcSet ? void 0 : e,
						as: t,
					},
					l
				)),
				$t.set(u, e),
				a.querySelector(n) !== null ||
					(t === 'style' && a.querySelector(mu(u))) ||
					(t === 'script' && a.querySelector(vu(u))) ||
					((t = a.createElement('link')),
					vt(t, 'link', e),
					xe(t),
					a.head.appendChild(t)));
		}
	}
	function hy(e, t) {
		xl.m(e, t);
		var l = bn;
		if (l && e) {
			var a = t && typeof t.as == 'string' ? t.as : 'script',
				n =
					'link[rel="modulepreload"][as="' + Gt(a) + '"][href="' + Gt(e) + '"]',
				u = n;
			switch (a) {
				case 'audioworklet':
				case 'paintworklet':
				case 'serviceworker':
				case 'sharedworker':
				case 'worker':
				case 'script':
					u = En(e);
			}
			if (
				!$t.has(u) &&
				((e = R({ rel: 'modulepreload', href: e }, t)),
				$t.set(u, e),
				l.querySelector(n) === null)
			) {
				switch (a) {
					case 'audioworklet':
					case 'paintworklet':
					case 'serviceworker':
					case 'sharedworker':
					case 'worker':
					case 'script':
						if (l.querySelector(vu(u))) return;
				}
				(a = l.createElement('link')),
					vt(a, 'link', e),
					xe(a),
					l.head.appendChild(a);
			}
		}
	}
	function my(e, t, l) {
		xl.S(e, t, l);
		var a = bn;
		if (a && e) {
			var n = We(a).hoistableStyles,
				u = Sn(e);
			t = t || 'default';
			var c = n.get(u);
			if (!c) {
				var d = { loading: 0, preload: null };
				if ((c = a.querySelector(mu(u)))) d.loading = 5;
				else {
					(e = R({ rel: 'stylesheet', href: e, 'data-precedence': t }, l)),
						(l = $t.get(u)) && rf(e, l);
					var g = (c = a.createElement('link'));
					xe(g),
						vt(g, 'link', e),
						(g._p = new Promise(function (z, L) {
							(g.onload = z), (g.onerror = L);
						})),
						g.addEventListener('load', function () {
							d.loading |= 1;
						}),
						g.addEventListener('error', function () {
							d.loading |= 2;
						}),
						(d.loading |= 4),
						ji(c, t, a);
				}
				(c = { type: 'stylesheet', instance: c, count: 1, state: d }),
					n.set(u, c);
			}
		}
	}
	function vy(e, t) {
		xl.X(e, t);
		var l = bn;
		if (l && e) {
			var a = We(l).hoistableScripts,
				n = En(e),
				u = a.get(n);
			u ||
				((u = l.querySelector(vu(n))),
				u ||
					((e = R({ src: e, async: !0 }, t)),
					(t = $t.get(n)) && cf(e, t),
					(u = l.createElement('script')),
					xe(u),
					vt(u, 'link', e),
					l.head.appendChild(u)),
				(u = { type: 'script', instance: u, count: 1, state: null }),
				a.set(n, u));
		}
	}
	function yy(e, t) {
		xl.M(e, t);
		var l = bn;
		if (l && e) {
			var a = We(l).hoistableScripts,
				n = En(e),
				u = a.get(n);
			u ||
				((u = l.querySelector(vu(n))),
				u ||
					((e = R({ src: e, async: !0, type: 'module' }, t)),
					(t = $t.get(n)) && cf(e, t),
					(u = l.createElement('script')),
					xe(u),
					vt(u, 'link', e),
					l.head.appendChild(u)),
				(u = { type: 'script', instance: u, count: 1, state: null }),
				a.set(n, u));
		}
	}
	function uh(e, t, l, a) {
		var n = (n = ce.current) ? Yi(n) : null;
		if (!n) throw Error(o(446));
		switch (e) {
			case 'meta':
			case 'title':
				return null;
			case 'style':
				return typeof l.precedence == 'string' && typeof l.href == 'string'
					? ((t = Sn(l.href)),
					  (l = We(n).hoistableStyles),
					  (a = l.get(t)),
					  a ||
							((a = { type: 'style', instance: null, count: 0, state: null }),
							l.set(t, a)),
					  a)
					: { type: 'void', instance: null, count: 0, state: null };
			case 'link':
				if (
					l.rel === 'stylesheet' &&
					typeof l.href == 'string' &&
					typeof l.precedence == 'string'
				) {
					e = Sn(l.href);
					var u = We(n).hoistableStyles,
						c = u.get(e);
					if (
						(c ||
							((n = n.ownerDocument || n),
							(c = {
								type: 'stylesheet',
								instance: null,
								count: 0,
								state: { loading: 0, preload: null },
							}),
							u.set(e, c),
							(u = n.querySelector(mu(e))) &&
								!u._p &&
								((c.instance = u), (c.state.loading = 5)),
							$t.has(e) ||
								((l = {
									rel: 'preload',
									as: 'style',
									href: l.href,
									crossOrigin: l.crossOrigin,
									integrity: l.integrity,
									media: l.media,
									hrefLang: l.hrefLang,
									referrerPolicy: l.referrerPolicy,
								}),
								$t.set(e, l),
								u || gy(n, e, l, c.state))),
						t && a === null)
					)
						throw Error(o(528, ''));
					return c;
				}
				if (t && a !== null) throw Error(o(529, ''));
				return null;
			case 'script':
				return (
					(t = l.async),
					(l = l.src),
					typeof l == 'string' &&
					t &&
					typeof t != 'function' &&
					typeof t != 'symbol'
						? ((t = En(l)),
						  (l = We(n).hoistableScripts),
						  (a = l.get(t)),
						  a ||
								((a = {
									type: 'script',
									instance: null,
									count: 0,
									state: null,
								}),
								l.set(t, a)),
						  a)
						: { type: 'void', instance: null, count: 0, state: null }
				);
			default:
				throw Error(o(444, e));
		}
	}
	function Sn(e) {
		return 'href="' + Gt(e) + '"';
	}
	function mu(e) {
		return 'link[rel="stylesheet"][' + e + ']';
	}
	function ih(e) {
		return R({}, e, { 'data-precedence': e.precedence, precedence: null });
	}
	function gy(e, t, l, a) {
		e.querySelector('link[rel="preload"][as="style"][' + t + ']')
			? (a.loading = 1)
			: ((t = e.createElement('link')),
			  (a.preload = t),
			  t.addEventListener('load', function () {
					return (a.loading |= 1);
			  }),
			  t.addEventListener('error', function () {
					return (a.loading |= 2);
			  }),
			  vt(t, 'link', l),
			  xe(t),
			  e.head.appendChild(t));
	}
	function En(e) {
		return '[src="' + Gt(e) + '"]';
	}
	function vu(e) {
		return 'script[async]' + e;
	}
	function rh(e, t, l) {
		if ((t.count++, t.instance === null))
			switch (t.type) {
				case 'style':
					var a = e.querySelector('style[data-href~="' + Gt(l.href) + '"]');
					if (a) return (t.instance = a), xe(a), a;
					var n = R({}, l, {
						'data-href': l.href,
						'data-precedence': l.precedence,
						href: null,
						precedence: null,
					});
					return (
						(a = (e.ownerDocument || e).createElement('style')),
						xe(a),
						vt(a, 'style', n),
						ji(a, l.precedence, e),
						(t.instance = a)
					);
				case 'stylesheet':
					n = Sn(l.href);
					var u = e.querySelector(mu(n));
					if (u) return (t.state.loading |= 4), (t.instance = u), xe(u), u;
					(a = ih(l)),
						(n = $t.get(n)) && rf(a, n),
						(u = (e.ownerDocument || e).createElement('link')),
						xe(u);
					var c = u;
					return (
						(c._p = new Promise(function (d, g) {
							(c.onload = d), (c.onerror = g);
						})),
						vt(u, 'link', a),
						(t.state.loading |= 4),
						ji(u, l.precedence, e),
						(t.instance = u)
					);
				case 'script':
					return (
						(u = En(l.src)),
						(n = e.querySelector(vu(u)))
							? ((t.instance = n), xe(n), n)
							: ((a = l),
							  (n = $t.get(u)) && ((a = R({}, l)), cf(a, n)),
							  (e = e.ownerDocument || e),
							  (n = e.createElement('script')),
							  xe(n),
							  vt(n, 'link', a),
							  e.head.appendChild(n),
							  (t.instance = n))
					);
				case 'void':
					return null;
				default:
					throw Error(o(443, t.type));
			}
		else
			t.type === 'stylesheet' &&
				(t.state.loading & 4) === 0 &&
				((a = t.instance), (t.state.loading |= 4), ji(a, l.precedence, e));
		return t.instance;
	}
	function ji(e, t, l) {
		for (
			var a = l.querySelectorAll(
					'link[rel="stylesheet"][data-precedence],style[data-precedence]'
				),
				n = a.length ? a[a.length - 1] : null,
				u = n,
				c = 0;
			c < a.length;
			c++
		) {
			var d = a[c];
			if (d.dataset.precedence === t) u = d;
			else if (u !== n) break;
		}
		u
			? u.parentNode.insertBefore(e, u.nextSibling)
			: ((t = l.nodeType === 9 ? l.head : l), t.insertBefore(e, t.firstChild));
	}
	function rf(e, t) {
		e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
			e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
			e.title == null && (e.title = t.title);
	}
	function cf(e, t) {
		e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
			e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
			e.integrity == null && (e.integrity = t.integrity);
	}
	var Gi = null;
	function ch(e, t, l) {
		if (Gi === null) {
			var a = new Map(),
				n = (Gi = new Map());
			n.set(l, a);
		} else (n = Gi), (a = n.get(l)), a || ((a = new Map()), n.set(l, a));
		if (a.has(e)) return a;
		for (
			a.set(e, null), l = l.getElementsByTagName(e), n = 0;
			n < l.length;
			n++
		) {
			var u = l[n];
			if (
				!(
					u[oe] ||
					u[X] ||
					(e === 'link' && u.getAttribute('rel') === 'stylesheet')
				) &&
				u.namespaceURI !== 'http://www.w3.org/2000/svg'
			) {
				var c = u.getAttribute(t) || '';
				c = e + c;
				var d = a.get(c);
				d ? d.push(u) : a.set(c, [u]);
			}
		}
		return a;
	}
	function fh(e, t, l) {
		(e = e.ownerDocument || e),
			e.head.insertBefore(
				l,
				t === 'title' ? e.querySelector('head > title') : null
			);
	}
	function py(e, t, l) {
		if (l === 1 || t.itemProp != null) return !1;
		switch (e) {
			case 'meta':
			case 'title':
				return !0;
			case 'style':
				if (
					typeof t.precedence != 'string' ||
					typeof t.href != 'string' ||
					t.href === ''
				)
					break;
				return !0;
			case 'link':
				if (
					typeof t.rel != 'string' ||
					typeof t.href != 'string' ||
					t.href === '' ||
					t.onLoad ||
					t.onError
				)
					break;
				switch (t.rel) {
					case 'stylesheet':
						return (
							(e = t.disabled), typeof t.precedence == 'string' && e == null
						);
					default:
						return !0;
				}
			case 'script':
				if (
					t.async &&
					typeof t.async != 'function' &&
					typeof t.async != 'symbol' &&
					!t.onLoad &&
					!t.onError &&
					t.src &&
					typeof t.src == 'string'
				)
					return !0;
		}
		return !1;
	}
	function oh(e) {
		return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
	}
	var yu = null;
	function by() {}
	function Sy(e, t, l) {
		if (yu === null) throw Error(o(475));
		var a = yu;
		if (
			t.type === 'stylesheet' &&
			(typeof l.media != 'string' || matchMedia(l.media).matches !== !1) &&
			(t.state.loading & 4) === 0
		) {
			if (t.instance === null) {
				var n = Sn(l.href),
					u = e.querySelector(mu(n));
				if (u) {
					(e = u._p),
						e !== null &&
							typeof e == 'object' &&
							typeof e.then == 'function' &&
							(a.count++, (a = Xi.bind(a)), e.then(a, a)),
						(t.state.loading |= 4),
						(t.instance = u),
						xe(u);
					return;
				}
				(u = e.ownerDocument || e),
					(l = ih(l)),
					(n = $t.get(n)) && rf(l, n),
					(u = u.createElement('link')),
					xe(u);
				var c = u;
				(c._p = new Promise(function (d, g) {
					(c.onload = d), (c.onerror = g);
				})),
					vt(u, 'link', l),
					(t.instance = u);
			}
			a.stylesheets === null && (a.stylesheets = new Map()),
				a.stylesheets.set(t, e),
				(e = t.state.preload) &&
					(t.state.loading & 3) === 0 &&
					(a.count++,
					(t = Xi.bind(a)),
					e.addEventListener('load', t),
					e.addEventListener('error', t));
		}
	}
	function Ey() {
		if (yu === null) throw Error(o(475));
		var e = yu;
		return (
			e.stylesheets && e.count === 0 && ff(e, e.stylesheets),
			0 < e.count
				? function (t) {
						var l = setTimeout(function () {
							if ((e.stylesheets && ff(e, e.stylesheets), e.unsuspend)) {
								var a = e.unsuspend;
								(e.unsuspend = null), a();
							}
						}, 6e4);
						return (
							(e.unsuspend = t),
							function () {
								(e.unsuspend = null), clearTimeout(l);
							}
						);
				  }
				: null
		);
	}
	function Xi() {
		if ((this.count--, this.count === 0)) {
			if (this.stylesheets) ff(this, this.stylesheets);
			else if (this.unsuspend) {
				var e = this.unsuspend;
				(this.unsuspend = null), e();
			}
		}
	}
	var Qi = null;
	function ff(e, t) {
		(e.stylesheets = null),
			e.unsuspend !== null &&
				(e.count++,
				(Qi = new Map()),
				t.forEach(Ry, e),
				(Qi = null),
				Xi.call(e));
	}
	function Ry(e, t) {
		if (!(t.state.loading & 4)) {
			var l = Qi.get(e);
			if (l) var a = l.get(null);
			else {
				(l = new Map()), Qi.set(e, l);
				for (
					var n = e.querySelectorAll(
							'link[data-precedence],style[data-precedence]'
						),
						u = 0;
					u < n.length;
					u++
				) {
					var c = n[u];
					(c.nodeName === 'LINK' || c.getAttribute('media') !== 'not all') &&
						(l.set(c.dataset.precedence, c), (a = c));
				}
				a && l.set(null, a);
			}
			(n = t.instance),
				(c = n.getAttribute('data-precedence')),
				(u = l.get(c) || a),
				u === a && l.set(null, n),
				l.set(c, n),
				this.count++,
				(a = Xi.bind(this)),
				n.addEventListener('load', a),
				n.addEventListener('error', a),
				u
					? u.parentNode.insertBefore(n, u.nextSibling)
					: ((e = e.nodeType === 9 ? e.head : e),
					  e.insertBefore(n, e.firstChild)),
				(t.state.loading |= 4);
		}
	}
	var gu = {
		$$typeof: k,
		Provider: null,
		Consumer: null,
		_currentValue: P,
		_currentValue2: P,
		_threadCount: 0,
	};
	function Ty(e, t, l, a, n, u, c, d) {
		(this.tag = 1),
			(this.containerInfo = e),
			(this.pingCache = this.current = this.pendingChildren = null),
			(this.timeoutHandle = -1),
			(this.callbackNode =
				this.next =
				this.pendingContext =
				this.context =
				this.cancelPendingCommit =
					null),
			(this.callbackPriority = 0),
			(this.expirationTimes = Ga(-1)),
			(this.entangledLanes =
				this.shellSuspendCounter =
				this.errorRecoveryDisabledLanes =
				this.expiredLanes =
				this.warmLanes =
				this.pingedLanes =
				this.suspendedLanes =
				this.pendingLanes =
					0),
			(this.entanglements = Ga(0)),
			(this.hiddenUpdates = Ga(null)),
			(this.identifierPrefix = a),
			(this.onUncaughtError = n),
			(this.onCaughtError = u),
			(this.onRecoverableError = c),
			(this.pooledCache = null),
			(this.pooledCacheLanes = 0),
			(this.formState = d),
			(this.incompleteTransitions = new Map());
	}
	function sh(e, t, l, a, n, u, c, d, g, z, L, G) {
		return (
			(e = new Ty(e, t, l, c, d, g, z, G)),
			(t = 1),
			u === !0 && (t |= 24),
			(u = xt(3, null, null, t)),
			(e.current = u),
			(u.stateNode = e),
			(t = Qr()),
			t.refCount++,
			(e.pooledCache = t),
			t.refCount++,
			(u.memoizedState = { element: a, isDehydrated: l, cache: t }),
			Jr(u),
			e
		);
	}
	function dh(e) {
		return e ? ((e = Fa), e) : Fa;
	}
	function hh(e, t, l, a, n, u) {
		(n = dh(n)),
			a.context === null ? (a.context = n) : (a.pendingContext = n),
			(a = Gl(t)),
			(a.payload = { element: l }),
			(u = u === void 0 ? null : u),
			u !== null && (a.callback = u),
			(l = Xl(e, a, t)),
			l !== null && (Lt(l, e, t), Jn(l, e, t));
	}
	function mh(e, t) {
		if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
			var l = e.retryLane;
			e.retryLane = l !== 0 && l < t ? l : t;
		}
	}
	function of(e, t) {
		mh(e, t), (e = e.alternate) && mh(e, t);
	}
	function vh(e) {
		if (e.tag === 13) {
			var t = Wa(e, 67108864);
			t !== null && Lt(t, e, 67108864), of(e, 67108864);
		}
	}
	var Vi = !0;
	function My(e, t, l, a) {
		var n = _.T;
		_.T = null;
		var u = V.p;
		try {
			(V.p = 2), sf(e, t, l, a);
		} finally {
			(V.p = u), (_.T = n);
		}
	}
	function Dy(e, t, l, a) {
		var n = _.T;
		_.T = null;
		var u = V.p;
		try {
			(V.p = 8), sf(e, t, l, a);
		} finally {
			(V.p = u), (_.T = n);
		}
	}
	function sf(e, t, l, a) {
		if (Vi) {
			var n = df(a);
			if (n === null) Fc(e, t, a, Zi, l), gh(e, a);
			else if (zy(n, e, t, l, a)) a.stopPropagation();
			else if ((gh(e, a), t & 4 && -1 < Ay.indexOf(e))) {
				for (; n !== null; ) {
					var u = _e(n);
					if (u !== null)
						switch (u.tag) {
							case 3:
								if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
									var c = yl(u.pendingLanes);
									if (c !== 0) {
										var d = u;
										for (d.pendingLanes |= 2, d.entangledLanes |= 2; c; ) {
											var g = 1 << (31 - dt(c));
											(d.entanglements[1] |= g), (c &= ~g);
										}
										dl(u), (Le & 6) === 0 && ((Oi = _t() + 500), ou(0));
									}
								}
								break;
							case 13:
								(d = Wa(u, 2)), d !== null && Lt(d, u, 2), Ui(), of(u, 2);
						}
					if (((u = df(a)), u === null && Fc(e, t, a, Zi, l), u === n)) break;
					n = u;
				}
				n !== null && a.stopPropagation();
			} else Fc(e, t, a, null, l);
		}
	}
	function df(e) {
		return (e = yr(e)), hf(e);
	}
	var Zi = null;
	function hf(e) {
		if (((Zi = null), (e = ve(e)), e !== null)) {
			var t = h(e);
			if (t === null) e = null;
			else {
				var l = t.tag;
				if (l === 13) {
					if (((e = y(t)), e !== null)) return e;
					e = null;
				} else if (l === 3) {
					if (t.stateNode.current.memoizedState.isDehydrated)
						return t.tag === 3 ? t.stateNode.containerInfo : null;
					e = null;
				} else t !== e && (e = null);
			}
		}
		return (Zi = e), null;
	}
	function yh(e) {
		switch (e) {
			case 'beforetoggle':
			case 'cancel':
			case 'click':
			case 'close':
			case 'contextmenu':
			case 'copy':
			case 'cut':
			case 'auxclick':
			case 'dblclick':
			case 'dragend':
			case 'dragstart':
			case 'drop':
			case 'focusin':
			case 'focusout':
			case 'input':
			case 'invalid':
			case 'keydown':
			case 'keypress':
			case 'keyup':
			case 'mousedown':
			case 'mouseup':
			case 'paste':
			case 'pause':
			case 'play':
			case 'pointercancel':
			case 'pointerdown':
			case 'pointerup':
			case 'ratechange':
			case 'reset':
			case 'resize':
			case 'seeked':
			case 'submit':
			case 'toggle':
			case 'touchcancel':
			case 'touchend':
			case 'touchstart':
			case 'volumechange':
			case 'change':
			case 'selectionchange':
			case 'textInput':
			case 'compositionstart':
			case 'compositionend':
			case 'compositionupdate':
			case 'beforeblur':
			case 'afterblur':
			case 'beforeinput':
			case 'blur':
			case 'fullscreenchange':
			case 'focus':
			case 'hashchange':
			case 'popstate':
			case 'select':
			case 'selectstart':
				return 2;
			case 'drag':
			case 'dragenter':
			case 'dragexit':
			case 'dragleave':
			case 'dragover':
			case 'mousemove':
			case 'mouseout':
			case 'mouseover':
			case 'pointermove':
			case 'pointerout':
			case 'pointerover':
			case 'scroll':
			case 'touchmove':
			case 'wheel':
			case 'mouseenter':
			case 'mouseleave':
			case 'pointerenter':
			case 'pointerleave':
				return 8;
			case 'message':
				switch (or()) {
					case Lu:
						return 2;
					case Bu:
						return 8;
					case Ya:
					case vl:
						return 32;
					case Nl:
						return 268435456;
					default:
						return 32;
				}
			default:
				return 32;
		}
	}
	var mf = !1,
		ta = null,
		la = null,
		aa = null,
		pu = new Map(),
		bu = new Map(),
		na = [],
		Ay =
			'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
				' '
			);
	function gh(e, t) {
		switch (e) {
			case 'focusin':
			case 'focusout':
				ta = null;
				break;
			case 'dragenter':
			case 'dragleave':
				la = null;
				break;
			case 'mouseover':
			case 'mouseout':
				aa = null;
				break;
			case 'pointerover':
			case 'pointerout':
				pu.delete(t.pointerId);
				break;
			case 'gotpointercapture':
			case 'lostpointercapture':
				bu.delete(t.pointerId);
		}
	}
	function Su(e, t, l, a, n, u) {
		return e === null || e.nativeEvent !== u
			? ((e = {
					blockedOn: t,
					domEventName: l,
					eventSystemFlags: a,
					nativeEvent: u,
					targetContainers: [n],
			  }),
			  t !== null && ((t = _e(t)), t !== null && vh(t)),
			  e)
			: ((e.eventSystemFlags |= a),
			  (t = e.targetContainers),
			  n !== null && t.indexOf(n) === -1 && t.push(n),
			  e);
	}
	function zy(e, t, l, a, n) {
		switch (t) {
			case 'focusin':
				return (ta = Su(ta, e, t, l, a, n)), !0;
			case 'dragenter':
				return (la = Su(la, e, t, l, a, n)), !0;
			case 'mouseover':
				return (aa = Su(aa, e, t, l, a, n)), !0;
			case 'pointerover':
				var u = n.pointerId;
				return pu.set(u, Su(pu.get(u) || null, e, t, l, a, n)), !0;
			case 'gotpointercapture':
				return (
					(u = n.pointerId), bu.set(u, Su(bu.get(u) || null, e, t, l, a, n)), !0
				);
		}
		return !1;
	}
	function ph(e) {
		var t = ve(e.target);
		if (t !== null) {
			var l = h(t);
			if (l !== null) {
				if (((t = l.tag), t === 13)) {
					if (((t = y(l)), t !== null)) {
						(e.blockedOn = t),
							D(e.priority, function () {
								if (l.tag === 13) {
									var a = Ht();
									a = An(a);
									var n = Wa(l, a);
									n !== null && Lt(n, l, a), of(l, a);
								}
							});
						return;
					}
				} else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
					e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
					return;
				}
			}
		}
		e.blockedOn = null;
	}
	function Ki(e) {
		if (e.blockedOn !== null) return !1;
		for (var t = e.targetContainers; 0 < t.length; ) {
			var l = df(e.nativeEvent);
			if (l === null) {
				l = e.nativeEvent;
				var a = new l.constructor(l.type, l);
				(vr = a), l.target.dispatchEvent(a), (vr = null);
			} else return (t = _e(l)), t !== null && vh(t), (e.blockedOn = l), !1;
			t.shift();
		}
		return !0;
	}
	function bh(e, t, l) {
		Ki(e) && l.delete(t);
	}
	function Oy() {
		(mf = !1),
			ta !== null && Ki(ta) && (ta = null),
			la !== null && Ki(la) && (la = null),
			aa !== null && Ki(aa) && (aa = null),
			pu.forEach(bh),
			bu.forEach(bh);
	}
	function Ji(e, t) {
		e.blockedOn === t &&
			((e.blockedOn = null),
			mf ||
				((mf = !0),
				i.unstable_scheduleCallback(i.unstable_NormalPriority, Oy)));
	}
	var $i = null;
	function Sh(e) {
		$i !== e &&
			(($i = e),
			i.unstable_scheduleCallback(i.unstable_NormalPriority, function () {
				$i === e && ($i = null);
				for (var t = 0; t < e.length; t += 3) {
					var l = e[t],
						a = e[t + 1],
						n = e[t + 2];
					if (typeof a != 'function') {
						if (hf(a || l) === null) continue;
						break;
					}
					var u = _e(l);
					u !== null &&
						(e.splice(t, 3),
						(t -= 3),
						dc(u, { pending: !0, data: n, method: l.method, action: a }, a, n));
				}
			}));
	}
	function Eu(e) {
		function t(g) {
			return Ji(g, e);
		}
		ta !== null && Ji(ta, e),
			la !== null && Ji(la, e),
			aa !== null && Ji(aa, e),
			pu.forEach(t),
			bu.forEach(t);
		for (var l = 0; l < na.length; l++) {
			var a = na[l];
			a.blockedOn === e && (a.blockedOn = null);
		}
		for (; 0 < na.length && ((l = na[0]), l.blockedOn === null); )
			ph(l), l.blockedOn === null && na.shift();
		if (((l = (e.ownerDocument || e).$$reactFormReplay), l != null))
			for (a = 0; a < l.length; a += 3) {
				var n = l[a],
					u = l[a + 1],
					c = n[Q] || null;
				if (typeof u == 'function') c || Sh(l);
				else if (c) {
					var d = null;
					if (u && u.hasAttribute('formAction')) {
						if (((n = u), (c = u[Q] || null))) d = c.formAction;
						else if (hf(n) !== null) continue;
					} else d = c.action;
					typeof d == 'function' ? (l[a + 1] = d) : (l.splice(a, 3), (a -= 3)),
						Sh(l);
				}
			}
	}
	function vf(e) {
		this._internalRoot = e;
	}
	(ki.prototype.render = vf.prototype.render =
		function (e) {
			var t = this._internalRoot;
			if (t === null) throw Error(o(409));
			var l = t.current,
				a = Ht();
			hh(l, a, e, t, null, null);
		}),
		(ki.prototype.unmount = vf.prototype.unmount =
			function () {
				var e = this._internalRoot;
				if (e !== null) {
					this._internalRoot = null;
					var t = e.containerInfo;
					hh(e.current, 2, null, e, null, null), Ui(), (t[ee] = null);
				}
			});
	function ki(e) {
		this._internalRoot = e;
	}
	ki.prototype.unstable_scheduleHydration = function (e) {
		if (e) {
			var t = S();
			e = { blockedOn: null, target: e, priority: t };
			for (var l = 0; l < na.length && t !== 0 && t < na[l].priority; l++);
			na.splice(l, 0, e), l === 0 && ph(e);
		}
	};
	var Eh = r.version;
	if (Eh !== '19.1.0') throw Error(o(527, Eh, '19.1.0'));
	V.findDOMNode = function (e) {
		var t = e._reactInternals;
		if (t === void 0)
			throw typeof e.render == 'function'
				? Error(o(188))
				: ((e = Object.keys(e).join(',')), Error(o(268, e)));
		return (
			(e = v(t)),
			(e = e !== null ? m(e) : null),
			(e = e === null ? null : e.stateNode),
			e
		);
	};
	var _y = {
		bundleType: 0,
		version: '19.1.0',
		rendererPackageName: 'react-dom',
		currentDispatcherRef: _,
		reconcilerVersion: '19.1.0',
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
		var Wi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!Wi.isDisabled && Wi.supportsFiber)
			try {
				(Rt = Wi.inject(_y)), (ke = Wi);
			} catch {}
	}
	return (
		(Tu.createRoot = function (e, t) {
			if (!s(e)) throw Error(o(299));
			var l = !1,
				a = '',
				n = Bs,
				u = qs,
				c = Ys,
				d = null;
			return (
				t != null &&
					(t.unstable_strictMode === !0 && (l = !0),
					t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
					t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
					t.onCaughtError !== void 0 && (u = t.onCaughtError),
					t.onRecoverableError !== void 0 && (c = t.onRecoverableError),
					t.unstable_transitionCallbacks !== void 0 &&
						(d = t.unstable_transitionCallbacks)),
				(t = sh(e, 1, !1, null, null, l, a, n, u, c, d, null)),
				(e[ee] = t.current),
				Wc(e),
				new vf(t)
			);
		}),
		(Tu.hydrateRoot = function (e, t, l) {
			if (!s(e)) throw Error(o(299));
			var a = !1,
				n = '',
				u = Bs,
				c = qs,
				d = Ys,
				g = null,
				z = null;
			return (
				l != null &&
					(l.unstable_strictMode === !0 && (a = !0),
					l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
					l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
					l.onCaughtError !== void 0 && (c = l.onCaughtError),
					l.onRecoverableError !== void 0 && (d = l.onRecoverableError),
					l.unstable_transitionCallbacks !== void 0 &&
						(g = l.unstable_transitionCallbacks),
					l.formState !== void 0 && (z = l.formState)),
				(t = sh(e, 1, !0, t, l ?? null, a, n, u, c, d, g, z)),
				(t.context = dh(null)),
				(l = t.current),
				(a = Ht()),
				(a = An(a)),
				(n = Gl(a)),
				(n.callback = null),
				Xl(l, n, a),
				(l = a),
				(t.current.lanes = l),
				ma(t, l),
				dl(t),
				(e[ee] = t.current),
				Wc(e),
				new ki(t)
			);
		}),
		(Tu.version = '19.1.0'),
		Tu
	);
}
var Ch;
function Xy() {
	if (Ch) return pf.exports;
	Ch = 1;
	function i() {
		if (
			!(
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
			)
		)
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
			} catch (r) {
				console.error(r);
			}
	}
	return i(), (pf.exports = Gy()), pf.exports;
}
var Qy = Xy(),
	Mu = {},
	Nh;
function Vy() {
	if (Nh) return Mu;
	(Nh = 1),
		Object.defineProperty(Mu, '__esModule', { value: !0 }),
		(Mu.parse = y),
		(Mu.serialize = m);
	const i = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
		r = /^[\u0021-\u003A\u003C-\u007E]*$/,
		f =
			/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
		o = /^[\u0020-\u003A\u003D-\u007E]*$/,
		s = Object.prototype.toString,
		h = (() => {
			const M = function () {};
			return (M.prototype = Object.create(null)), M;
		})();
	function y(M, B) {
		const w = new h(),
			Z = M.length;
		if (Z < 2) return w;
		const $ = B?.decode || R;
		let q = 0;
		do {
			const ue = M.indexOf('=', q);
			if (ue === -1) break;
			const k = M.indexOf(';', q),
				he = k === -1 ? Z : k;
			if (ue > he) {
				q = M.lastIndexOf(';', ue - 1) + 1;
				continue;
			}
			const W = b(M, q, ue),
				x = v(M, ue, W),
				ye = M.slice(W, x);
			if (w[ye] === void 0) {
				let pe = b(M, ue + 1, he),
					me = v(M, he, pe);
				const Ve = $(M.slice(pe, me));
				w[ye] = Ve;
			}
			q = he + 1;
		} while (q < Z);
		return w;
	}
	function b(M, B, w) {
		do {
			const Z = M.charCodeAt(B);
			if (Z !== 32 && Z !== 9) return B;
		} while (++B < w);
		return w;
	}
	function v(M, B, w) {
		for (; B > w; ) {
			const Z = M.charCodeAt(--B);
			if (Z !== 32 && Z !== 9) return B + 1;
		}
		return w;
	}
	function m(M, B, w) {
		const Z = w?.encode || encodeURIComponent;
		if (!i.test(M)) throw new TypeError(`argument name is invalid: ${M}`);
		const $ = Z(B);
		if (!r.test($)) throw new TypeError(`argument val is invalid: ${B}`);
		let q = M + '=' + $;
		if (!w) return q;
		if (w.maxAge !== void 0) {
			if (!Number.isInteger(w.maxAge))
				throw new TypeError(`option maxAge is invalid: ${w.maxAge}`);
			q += '; Max-Age=' + w.maxAge;
		}
		if (w.domain) {
			if (!f.test(w.domain))
				throw new TypeError(`option domain is invalid: ${w.domain}`);
			q += '; Domain=' + w.domain;
		}
		if (w.path) {
			if (!o.test(w.path))
				throw new TypeError(`option path is invalid: ${w.path}`);
			q += '; Path=' + w.path;
		}
		if (w.expires) {
			if (!N(w.expires) || !Number.isFinite(w.expires.valueOf()))
				throw new TypeError(`option expires is invalid: ${w.expires}`);
			q += '; Expires=' + w.expires.toUTCString();
		}
		if (
			(w.httpOnly && (q += '; HttpOnly'),
			w.secure && (q += '; Secure'),
			w.partitioned && (q += '; Partitioned'),
			w.priority)
		)
			switch (
				typeof w.priority == 'string' ? w.priority.toLowerCase() : void 0
			) {
				case 'low':
					q += '; Priority=Low';
					break;
				case 'medium':
					q += '; Priority=Medium';
					break;
				case 'high':
					q += '; Priority=High';
					break;
				default:
					throw new TypeError(`option priority is invalid: ${w.priority}`);
			}
		if (w.sameSite)
			switch (
				typeof w.sameSite == 'string' ? w.sameSite.toLowerCase() : w.sameSite
			) {
				case !0:
				case 'strict':
					q += '; SameSite=Strict';
					break;
				case 'lax':
					q += '; SameSite=Lax';
					break;
				case 'none':
					q += '; SameSite=None';
					break;
				default:
					throw new TypeError(`option sameSite is invalid: ${w.sameSite}`);
			}
		return q;
	}
	function R(M) {
		if (M.indexOf('%') === -1) return M;
		try {
			return decodeURIComponent(M);
		} catch {
			return M;
		}
	}
	function N(M) {
		return s.call(M) === '[object Date]';
	}
	return Mu;
}
Vy();
/**
 * react-router v7.6.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var lm = (i) => {
		throw TypeError(i);
	},
	Zy = (i, r, f) => r.has(i) || lm('Cannot ' + f),
	Rf = (i, r, f) => (
		Zy(i, r, 'read from private field'), f ? f.call(i) : r.get(i)
	),
	Ky = (i, r, f) =>
		r.has(i)
			? lm('Cannot add the same private member more than once')
			: r instanceof WeakSet
			? r.add(i)
			: r.set(i, f),
	wh = 'popstate';
function Jy(i = {}) {
	function r(o, s) {
		let { pathname: h, search: y, hash: b } = o.location;
		return xu(
			'',
			{ pathname: h, search: y, hash: b },
			(s.state && s.state.usr) || null,
			(s.state && s.state.key) || 'default'
		);
	}
	function f(o, s) {
		return typeof s == 'string' ? s : fa(s);
	}
	return ky(r, f, null, i);
}
function Ae(i, r) {
	if (i === !1 || i === null || typeof i > 'u') throw new Error(r);
}
function ut(i, r) {
	if (!i) {
		typeof console < 'u' && console.warn(r);
		try {
			throw new Error(r);
		} catch {}
	}
}
function $y() {
	return Math.random().toString(36).substring(2, 10);
}
function Hh(i, r) {
	return { usr: i.state, key: i.key, idx: r };
}
function xu(i, r, f = null, o) {
	return {
		pathname: typeof i == 'string' ? i : i.pathname,
		search: '',
		hash: '',
		...(typeof r == 'string' ? oa(r) : r),
		state: f,
		key: (r && r.key) || o || $y(),
	};
}
function fa({ pathname: i = '/', search: r = '', hash: f = '' }) {
	return (
		r && r !== '?' && (i += r.charAt(0) === '?' ? r : '?' + r),
		f && f !== '#' && (i += f.charAt(0) === '#' ? f : '#' + f),
		i
	);
}
function oa(i) {
	let r = {};
	if (i) {
		let f = i.indexOf('#');
		f >= 0 && ((r.hash = i.substring(f)), (i = i.substring(0, f)));
		let o = i.indexOf('?');
		o >= 0 && ((r.search = i.substring(o)), (i = i.substring(0, o))),
			i && (r.pathname = i);
	}
	return r;
}
function ky(i, r, f, o = {}) {
	let { window: s = document.defaultView, v5Compat: h = !1 } = o,
		y = s.history,
		b = 'POP',
		v = null,
		m = R();
	m == null && ((m = 0), y.replaceState({ ...y.state, idx: m }, ''));
	function R() {
		return (y.state || { idx: null }).idx;
	}
	function N() {
		b = 'POP';
		let $ = R(),
			q = $ == null ? null : $ - m;
		(m = $), v && v({ action: b, location: Z.location, delta: q });
	}
	function M($, q) {
		b = 'PUSH';
		let ue = xu(Z.location, $, q);
		m = R() + 1;
		let k = Hh(ue, m),
			he = Z.createHref(ue);
		try {
			y.pushState(k, '', he);
		} catch (W) {
			if (W instanceof DOMException && W.name === 'DataCloneError') throw W;
			s.location.assign(he);
		}
		h && v && v({ action: b, location: Z.location, delta: 1 });
	}
	function B($, q) {
		b = 'REPLACE';
		let ue = xu(Z.location, $, q);
		m = R();
		let k = Hh(ue, m),
			he = Z.createHref(ue);
		y.replaceState(k, '', he),
			h && v && v({ action: b, location: Z.location, delta: 0 });
	}
	function w($) {
		return am($);
	}
	let Z = {
		get action() {
			return b;
		},
		get location() {
			return i(s, y);
		},
		listen($) {
			if (v) throw new Error('A history only accepts one active listener');
			return (
				s.addEventListener(wh, N),
				(v = $),
				() => {
					s.removeEventListener(wh, N), (v = null);
				}
			);
		},
		createHref($) {
			return r(s, $);
		},
		createURL: w,
		encodeLocation($) {
			let q = w($);
			return { pathname: q.pathname, search: q.search, hash: q.hash };
		},
		push: M,
		replace: B,
		go($) {
			return y.go($);
		},
	};
	return Z;
}
function am(i, r = !1) {
	let f = 'http://localhost';
	typeof window < 'u' &&
		(f =
			window.location.origin !== 'null'
				? window.location.origin
				: window.location.href),
		Ae(f, 'No window.location.(origin|href) available to create URL');
	let o = typeof i == 'string' ? i : fa(i);
	return (
		(o = o.replace(/ $/, '%20')),
		!r && o.startsWith('//') && (o = f + o),
		new URL(o, f)
	);
}
var Ou,
	Lh = class {
		constructor(i) {
			if ((Ky(this, Ou, new Map()), i)) for (let [r, f] of i) this.set(r, f);
		}
		get(i) {
			if (Rf(this, Ou).has(i)) return Rf(this, Ou).get(i);
			if (i.defaultValue !== void 0) return i.defaultValue;
			throw new Error('No value found for context');
		}
		set(i, r) {
			Rf(this, Ou).set(i, r);
		}
	};
Ou = new WeakMap();
var Wy = new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'children']);
function Fy(i) {
	return Wy.has(i);
}
var Py = new Set([
	'lazy',
	'caseSensitive',
	'path',
	'id',
	'index',
	'unstable_middleware',
	'children',
]);
function Iy(i) {
	return Py.has(i);
}
function e0(i) {
	return i.index === !0;
}
function lr(i, r, f = [], o = {}) {
	return i.map((s, h) => {
		let y = [...f, String(h)],
			b = typeof s.id == 'string' ? s.id : y.join('-');
		if (
			(Ae(
				s.index !== !0 || !s.children,
				'Cannot specify children on an index route'
			),
			Ae(
				!o[b],
				`Found a route id collision on id "${b}".  Route id's must be globally unique within Data Router usages`
			),
			e0(s))
		) {
			let v = { ...s, ...r(s), id: b };
			return (o[b] = v), v;
		} else {
			let v = { ...s, ...r(s), id: b, children: void 0 };
			return (
				(o[b] = v), s.children && (v.children = lr(s.children, r, y, o)), v
			);
		}
	});
}
function ca(i, r, f = '/') {
	return Ii(i, r, f, !1);
}
function Ii(i, r, f, o) {
	let s = typeof r == 'string' ? oa(r) : r,
		h = Wt(s.pathname || '/', f);
	if (h == null) return null;
	let y = nm(i);
	l0(y);
	let b = null;
	for (let v = 0; b == null && v < y.length; ++v) {
		let m = h0(h);
		b = s0(y[v], m, o);
	}
	return b;
}
function t0(i, r) {
	let { route: f, pathname: o, params: s } = i;
	return { id: f.id, pathname: o, params: s, data: r[f.id], handle: f.handle };
}
function nm(i, r = [], f = [], o = '') {
	let s = (h, y, b) => {
		let v = {
			relativePath: b === void 0 ? h.path || '' : b,
			caseSensitive: h.caseSensitive === !0,
			childrenIndex: y,
			route: h,
		};
		v.relativePath.startsWith('/') &&
			(Ae(
				v.relativePath.startsWith(o),
				`Absolute route path "${v.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
			),
			(v.relativePath = v.relativePath.slice(o.length)));
		let m = hl([o, v.relativePath]),
			R = f.concat(v);
		h.children &&
			h.children.length > 0 &&
			(Ae(
				h.index !== !0,
				`Index routes must not have child routes. Please remove all child routes from route path "${m}".`
			),
			nm(h.children, r, R, m)),
			!(h.path == null && !h.index) &&
				r.push({ path: m, score: f0(m, h.index), routesMeta: R });
	};
	return (
		i.forEach((h, y) => {
			if (h.path === '' || !h.path?.includes('?')) s(h, y);
			else for (let b of um(h.path)) s(h, y, b);
		}),
		r
	);
}
function um(i) {
	let r = i.split('/');
	if (r.length === 0) return [];
	let [f, ...o] = r,
		s = f.endsWith('?'),
		h = f.replace(/\?$/, '');
	if (o.length === 0) return s ? [h, ''] : [h];
	let y = um(o.join('/')),
		b = [];
	return (
		b.push(...y.map((v) => (v === '' ? h : [h, v].join('/')))),
		s && b.push(...y),
		b.map((v) => (i.startsWith('/') && v === '' ? '/' : v))
	);
}
function l0(i) {
	i.sort((r, f) =>
		r.score !== f.score
			? f.score - r.score
			: o0(
					r.routesMeta.map((o) => o.childrenIndex),
					f.routesMeta.map((o) => o.childrenIndex)
			  )
	);
}
var a0 = /^:[\w-]+$/,
	n0 = 3,
	u0 = 2,
	i0 = 1,
	r0 = 10,
	c0 = -2,
	Bh = (i) => i === '*';
function f0(i, r) {
	let f = i.split('/'),
		o = f.length;
	return (
		f.some(Bh) && (o += c0),
		r && (o += u0),
		f
			.filter((s) => !Bh(s))
			.reduce((s, h) => s + (a0.test(h) ? n0 : h === '' ? i0 : r0), o)
	);
}
function o0(i, r) {
	return i.length === r.length && i.slice(0, -1).every((o, s) => o === r[s])
		? i[i.length - 1] - r[r.length - 1]
		: 0;
}
function s0(i, r, f = !1) {
	let { routesMeta: o } = i,
		s = {},
		h = '/',
		y = [];
	for (let b = 0; b < o.length; ++b) {
		let v = o[b],
			m = b === o.length - 1,
			R = h === '/' ? r : r.slice(h.length) || '/',
			N = ar(
				{ path: v.relativePath, caseSensitive: v.caseSensitive, end: m },
				R
			),
			M = v.route;
		if (
			(!N &&
				m &&
				f &&
				!o[o.length - 1].route.index &&
				(N = ar(
					{ path: v.relativePath, caseSensitive: v.caseSensitive, end: !1 },
					R
				)),
			!N)
		)
			return null;
		Object.assign(s, N.params),
			y.push({
				params: s,
				pathname: hl([h, N.pathname]),
				pathnameBase: y0(hl([h, N.pathnameBase])),
				route: M,
			}),
			N.pathnameBase !== '/' && (h = hl([h, N.pathnameBase]));
	}
	return y;
}
function ar(i, r) {
	typeof i == 'string' && (i = { path: i, caseSensitive: !1, end: !0 });
	let [f, o] = d0(i.path, i.caseSensitive, i.end),
		s = r.match(f);
	if (!s) return null;
	let h = s[0],
		y = h.replace(/(.)\/+$/, '$1'),
		b = s.slice(1);
	return {
		params: o.reduce((m, { paramName: R, isOptional: N }, M) => {
			if (R === '*') {
				let w = b[M] || '';
				y = h.slice(0, h.length - w.length).replace(/(.)\/+$/, '$1');
			}
			const B = b[M];
			return (
				N && !B ? (m[R] = void 0) : (m[R] = (B || '').replace(/%2F/g, '/')), m
			);
		}, {}),
		pathname: h,
		pathnameBase: y,
		pattern: i,
	};
}
function d0(i, r = !1, f = !0) {
	ut(
		i === '*' || !i.endsWith('*') || i.endsWith('/*'),
		`Route path "${i}" will be treated as if it were "${i.replace(
			/\*$/,
			'/*'
		)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(
			/\*$/,
			'/*'
		)}".`
	);
	let o = [],
		s =
			'^' +
			i
				.replace(/\/*\*?$/, '')
				.replace(/^\/*/, '/')
				.replace(/[\\.*+^${}|()[\]]/g, '\\$&')
				.replace(
					/\/:([\w-]+)(\?)?/g,
					(y, b, v) => (
						o.push({ paramName: b, isOptional: v != null }),
						v ? '/?([^\\/]+)?' : '/([^\\/]+)'
					)
				);
	return (
		i.endsWith('*')
			? (o.push({ paramName: '*' }),
			  (s += i === '*' || i === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
			: f
			? (s += '\\/*$')
			: i !== '' && i !== '/' && (s += '(?:(?=\\/|$))'),
		[new RegExp(s, r ? void 0 : 'i'), o]
	);
}
function h0(i) {
	try {
		return i
			.split('/')
			.map((r) => decodeURIComponent(r).replace(/\//g, '%2F'))
			.join('/');
	} catch (r) {
		return (
			ut(
				!1,
				`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`
			),
			i
		);
	}
}
function Wt(i, r) {
	if (r === '/') return i;
	if (!i.toLowerCase().startsWith(r.toLowerCase())) return null;
	let f = r.endsWith('/') ? r.length - 1 : r.length,
		o = i.charAt(f);
	return o && o !== '/' ? null : i.slice(f) || '/';
}
function m0(i, r = '/') {
	let {
		pathname: f,
		search: o = '',
		hash: s = '',
	} = typeof i == 'string' ? oa(i) : i;
	return {
		pathname: f ? (f.startsWith('/') ? f : v0(f, r)) : r,
		search: g0(o),
		hash: p0(s),
	};
}
function v0(i, r) {
	let f = r.replace(/\/+$/, '').split('/');
	return (
		i.split('/').forEach((s) => {
			s === '..' ? f.length > 1 && f.pop() : s !== '.' && f.push(s);
		}),
		f.length > 1 ? f.join('/') : '/'
	);
}
function Tf(i, r, f, o) {
	return `Cannot include a '${i}' character in a manually specified \`to.${r}\` field [${JSON.stringify(
		o
	)}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function im(i) {
	return i.filter(
		(r, f) => f === 0 || (r.route.path && r.route.path.length > 0)
	);
}
function wf(i) {
	let r = im(i);
	return r.map((f, o) => (o === r.length - 1 ? f.pathname : f.pathnameBase));
}
function Hf(i, r, f, o = !1) {
	let s;
	typeof i == 'string'
		? (s = oa(i))
		: ((s = { ...i }),
		  Ae(
				!s.pathname || !s.pathname.includes('?'),
				Tf('?', 'pathname', 'search', s)
		  ),
		  Ae(
				!s.pathname || !s.pathname.includes('#'),
				Tf('#', 'pathname', 'hash', s)
		  ),
		  Ae(!s.search || !s.search.includes('#'), Tf('#', 'search', 'hash', s)));
	let h = i === '' || s.pathname === '',
		y = h ? '/' : s.pathname,
		b;
	if (y == null) b = f;
	else {
		let N = r.length - 1;
		if (!o && y.startsWith('..')) {
			let M = y.split('/');
			for (; M[0] === '..'; ) M.shift(), (N -= 1);
			s.pathname = M.join('/');
		}
		b = N >= 0 ? r[N] : '/';
	}
	let v = m0(s, b),
		m = y && y !== '/' && y.endsWith('/'),
		R = (h || y === '.') && f.endsWith('/');
	return !v.pathname.endsWith('/') && (m || R) && (v.pathname += '/'), v;
}
var hl = (i) => i.join('/').replace(/\/\/+/g, '/'),
	y0 = (i) => i.replace(/\/+$/, '').replace(/^\/*/, '/'),
	g0 = (i) => (!i || i === '?' ? '' : i.startsWith('?') ? i : '?' + i),
	p0 = (i) => (!i || i === '#' ? '' : i.startsWith('#') ? i : '#' + i),
	nr = class {
		constructor(i, r, f, o = !1) {
			(this.status = i),
				(this.statusText = r || ''),
				(this.internal = o),
				f instanceof Error
					? ((this.data = f.toString()), (this.error = f))
					: (this.data = f);
		}
	};
function Cu(i) {
	return (
		i != null &&
		typeof i.status == 'number' &&
		typeof i.statusText == 'string' &&
		typeof i.internal == 'boolean' &&
		'data' in i
	);
}
var rm = ['POST', 'PUT', 'PATCH', 'DELETE'],
	b0 = new Set(rm),
	S0 = ['GET', ...rm],
	E0 = new Set(S0),
	R0 = new Set([301, 302, 303, 307, 308]),
	T0 = new Set([307, 308]),
	Mf = {
		state: 'idle',
		location: void 0,
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
	},
	M0 = {
		state: 'idle',
		data: void 0,
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
	},
	Du = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
	Lf = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	D0 = (i) => ({ hasErrorBoundary: !!i.hasErrorBoundary }),
	cm = 'remix-router-transitions',
	fm = Symbol('ResetLoaderData');
function A0(i) {
	const r = i.window ? i.window : typeof window < 'u' ? window : void 0,
		f =
			typeof r < 'u' &&
			typeof r.document < 'u' &&
			typeof r.document.createElement < 'u';
	Ae(
		i.routes.length > 0,
		'You must provide a non-empty routes array to createRouter'
	);
	let o = i.hydrationRouteProperties || [],
		s = i.mapRouteProperties || D0,
		h = {},
		y = lr(i.routes, s, void 0, h),
		b,
		v = i.basename || '/',
		m = i.dataStrategy || x0,
		R = { unstable_middleware: !1, ...i.future },
		N = null,
		M = new Set(),
		B = null,
		w = null,
		Z = null,
		$ = i.hydrationData != null,
		q = ca(y, i.history.location, v),
		ue = !1,
		k = null,
		he;
	if (q == null && !i.patchRoutesOnNavigation) {
		let S = kt(404, { pathname: i.history.location.pathname }),
			{ matches: D, route: C } = kh(y);
		(he = !0), (q = D), (k = { [C.id]: S });
	} else if (
		(q &&
			!i.hydrationData &&
			va(q, y, i.history.location.pathname).active &&
			(q = null),
		q)
	)
		if (q.some((S) => S.route.lazy)) he = !1;
		else if (!q.some((S) => S.route.loader)) he = !0;
		else {
			let S = i.hydrationData ? i.hydrationData.loaderData : null,
				D = i.hydrationData ? i.hydrationData.errors : null;
			if (D) {
				let C = q.findIndex((X) => D[X.route.id] !== void 0);
				he = q.slice(0, C + 1).every((X) => !Of(X.route, S, D));
			} else he = q.every((C) => !Of(C.route, S, D));
		}
	else {
		(he = !1), (q = []);
		let S = va(null, y, i.history.location.pathname);
		S.active && S.matches && ((ue = !0), (q = S.matches));
	}
	let W,
		x = {
			historyAction: i.history.action,
			location: i.history.location,
			matches: q,
			initialized: he,
			navigation: Mf,
			restoreScrollPosition: i.hydrationData != null ? !1 : null,
			preventScrollReset: !1,
			revalidation: 'idle',
			loaderData: (i.hydrationData && i.hydrationData.loaderData) || {},
			actionData: (i.hydrationData && i.hydrationData.actionData) || null,
			errors: (i.hydrationData && i.hydrationData.errors) || k,
			fetchers: new Map(),
			blockers: new Map(),
		},
		ye = 'POP',
		pe = !1,
		me,
		Ve = !1,
		et = new Map(),
		Ke = null,
		Ue = !1,
		Ne = !1,
		He = new Set(),
		_ = new Map(),
		V = 0,
		P = -1,
		be = new Map(),
		p = new Set(),
		j = new Map(),
		J = new Map(),
		K = new Set(),
		le = new Map(),
		Te,
		ce = null;
	function bt() {
		if (
			((N = i.history.listen(({ action: S, location: D, delta: C }) => {
				if (Te) {
					Te(), (Te = void 0);
					return;
				}
				ut(
					le.size === 0 || C != null,
					'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.'
				);
				let X = ju({
					currentLocation: x.location,
					nextLocation: D,
					historyAction: S,
				});
				if (X && C != null) {
					let Q = new Promise((ee) => {
						Te = ee;
					});
					i.history.go(C * -1),
						rl(X, {
							state: 'blocked',
							location: D,
							proceed() {
								rl(X, {
									state: 'proceeding',
									proceed: void 0,
									reset: void 0,
									location: D,
								}),
									Q.then(() => i.history.go(C));
							},
							reset() {
								let ee = new Map(x.blockers);
								ee.set(X, Du), it({ blockers: ee });
							},
						});
					return;
				}
				return Pt(S, D);
			})),
			f)
		) {
			X0(r, et);
			let S = () => Q0(r, et);
			r.addEventListener('pagehide', S),
				(Ke = () => r.removeEventListener('pagehide', S));
		}
		return x.initialized || Pt('POP', x.location, { initialHydration: !0 }), W;
	}
	function Xe() {
		N && N(),
			Ke && Ke(),
			M.clear(),
			me && me.abort(),
			x.fetchers.forEach((S, D) => dt(D)),
			x.blockers.forEach((S, D) => ha(D));
	}
	function ul(S) {
		return M.add(S), () => M.delete(S);
	}
	function it(S, D = {}) {
		x = { ...x, ...S };
		let C = [],
			X = [];
		x.fetchers.forEach((Q, ee) => {
			Q.state === 'idle' && (K.has(ee) ? C.push(ee) : X.push(ee));
		}),
			K.forEach((Q) => {
				!x.fetchers.has(Q) && !_.has(Q) && C.push(Q);
			}),
			[...M].forEach((Q) =>
				Q(x, {
					deletedFetchers: C,
					viewTransitionOpts: D.viewTransitionOpts,
					flushSync: D.flushSync === !0,
				})
			),
			C.forEach((Q) => dt(Q)),
			X.forEach((Q) => x.fetchers.delete(Q));
	}
	function Ft(S, D, { flushSync: C } = {}) {
		let X =
				x.actionData != null &&
				x.navigation.formMethod != null &&
				qt(x.navigation.formMethod) &&
				x.navigation.state === 'loading' &&
				S.state?._isRedirect !== !0,
			Q;
		D.actionData
			? Object.keys(D.actionData).length > 0
				? (Q = D.actionData)
				: (Q = null)
			: X
			? (Q = x.actionData)
			: (Q = null);
		let ee = D.loaderData
				? Jh(x.loaderData, D.loaderData, D.matches || [], D.errors)
				: x.loaderData,
			ie = x.blockers;
		ie.size > 0 && ((ie = new Map(ie)), ie.forEach((te, oe) => ie.set(oe, Du)));
		let F =
			pe === !0 ||
			(x.navigation.formMethod != null &&
				qt(x.navigation.formMethod) &&
				S.state?._isRedirect !== !0);
		b && ((y = b), (b = void 0)),
			Ue ||
				ye === 'POP' ||
				(ye === 'PUSH'
					? i.history.push(S, S.state)
					: ye === 'REPLACE' && i.history.replace(S, S.state));
		let ne;
		if (ye === 'POP') {
			let te = et.get(x.location.pathname);
			te && te.has(S.pathname)
				? (ne = { currentLocation: x.location, nextLocation: S })
				: et.has(S.pathname) &&
				  (ne = { currentLocation: S, nextLocation: x.location });
		} else if (Ve) {
			let te = et.get(x.location.pathname);
			te
				? te.add(S.pathname)
				: ((te = new Set([S.pathname])), et.set(x.location.pathname, te)),
				(ne = { currentLocation: x.location, nextLocation: S });
		}
		it(
			{
				...D,
				actionData: Q,
				loaderData: ee,
				historyAction: ye,
				location: S,
				initialized: !0,
				navigation: Mf,
				revalidation: 'idle',
				restoreScrollPosition: Xu(S, D.matches || x.matches),
				preventScrollReset: F,
				blockers: ie,
			},
			{ viewTransitionOpts: ne, flushSync: C === !0 }
		),
			(ye = 'POP'),
			(pe = !1),
			(Ve = !1),
			(Ue = !1),
			(Ne = !1),
			ce?.resolve(),
			(ce = null);
	}
	async function qa(S, D) {
		if (typeof S == 'number') {
			i.history.go(S);
			return;
		}
		let C = zf(x.location, x.matches, v, S, D?.fromRouteId, D?.relative),
			{ path: X, submission: Q, error: ee } = qh(!1, C, D),
			ie = x.location,
			F = xu(x.location, X, D && D.state);
		F = { ...F, ...i.history.encodeLocation(F) };
		let ne = D && D.replace != null ? D.replace : void 0,
			te = 'PUSH';
		ne === !0
			? (te = 'REPLACE')
			: ne === !1 ||
			  (Q != null &&
					qt(Q.formMethod) &&
					Q.formAction === x.location.pathname + x.location.search &&
					(te = 'REPLACE'));
		let oe =
				D && 'preventScrollReset' in D ? D.preventScrollReset === !0 : void 0,
			se = (D && D.flushSync) === !0,
			ve = ju({ currentLocation: ie, nextLocation: F, historyAction: te });
		if (ve) {
			rl(ve, {
				state: 'blocked',
				location: F,
				proceed() {
					rl(ve, {
						state: 'proceeding',
						proceed: void 0,
						reset: void 0,
						location: F,
					}),
						qa(S, D);
				},
				reset() {
					let _e = new Map(x.blockers);
					_e.set(ve, Du), it({ blockers: _e });
				},
			});
			return;
		}
		await Pt(te, F, {
			submission: Q,
			pendingError: ee,
			preventScrollReset: oe,
			replace: D && D.replace,
			enableViewTransition: D && D.viewTransition,
			flushSync: se,
		});
	}
	function Mn() {
		ce || (ce = V0()), Dn(), it({ revalidation: 'loading' });
		let S = ce.promise;
		return x.navigation.state === 'submitting'
			? S
			: x.navigation.state === 'idle'
			? (Pt(x.historyAction, x.location, {
					startUninterruptedRevalidation: !0,
			  }),
			  S)
			: (Pt(ye || x.historyAction, x.navigation.location, {
					overrideNavigation: x.navigation,
					enableViewTransition: Ve === !0,
			  }),
			  S);
	}
	async function Pt(S, D, C) {
		me && me.abort(),
			(me = null),
			(ye = S),
			(Ue = (C && C.startUninterruptedRevalidation) === !0),
			ma(x.location, x.matches),
			(pe = (C && C.preventScrollReset) === !0),
			(Ve = (C && C.enableViewTransition) === !0);
		let X = b || y,
			Q = C && C.overrideNavigation,
			ee =
				C?.initialHydration && x.matches && x.matches.length > 0 && !ue
					? x.matches
					: ca(X, D, v),
			ie = (C && C.flushSync) === !0;
		if (
			ee &&
			x.initialized &&
			!Ne &&
			B0(x.location, D) &&
			!(C && C.submission && qt(C.submission.formMethod))
		) {
			Ft(D, { matches: ee }, { flushSync: ie });
			return;
		}
		let F = va(ee, X, D.pathname);
		if ((F.active && F.matches && (ee = F.matches), !ee)) {
			let { error: We, notFoundMatches: xe, route: ze } = ja(D.pathname);
			Ft(
				D,
				{ matches: xe, loaderData: {}, errors: { [ze.id]: We } },
				{ flushSync: ie }
			);
			return;
		}
		me = new AbortController();
		let ne = Rn(i.history, D, me.signal, C && C.submission),
			te = new Lh(
				i.unstable_getContext ? await i.unstable_getContext() : void 0
			),
			oe;
		if (C && C.pendingError)
			oe = [wa(ee).route.id, { type: 'error', error: C.pendingError }];
		else if (C && C.submission && qt(C.submission.formMethod)) {
			let We = await cr(
				ne,
				D,
				C.submission,
				ee,
				te,
				F.active,
				C && C.initialHydration === !0,
				{ replace: C.replace, flushSync: ie }
			);
			if (We.shortCircuited) return;
			if (We.pendingActionResult) {
				let [xe, ze] = We.pendingActionResult;
				if (Bt(ze) && Cu(ze.error) && ze.error.status === 404) {
					(me = null),
						Ft(D, {
							matches: We.matches,
							loaderData: {},
							errors: { [xe]: ze.error },
						});
					return;
				}
			}
			(ee = We.matches || ee),
				(oe = We.pendingActionResult),
				(Q = Df(D, C.submission)),
				(ie = !1),
				(F.active = !1),
				(ne = Rn(i.history, ne.url, ne.signal));
		}
		let {
			shortCircuited: se,
			matches: ve,
			loaderData: _e,
			errors: Ze,
		} = await fr(
			ne,
			D,
			ee,
			te,
			F.active,
			Q,
			C && C.submission,
			C && C.fetcherSubmission,
			C && C.replace,
			C && C.initialHydration === !0,
			ie,
			oe
		);
		se ||
			((me = null),
			Ft(D, { matches: ve || ee, ...$h(oe), loaderData: _e, errors: Ze }));
	}
	async function cr(S, D, C, X, Q, ee, ie, F = {}) {
		Dn();
		let ne = j0(D, C);
		if ((it({ navigation: ne }, { flushSync: F.flushSync === !0 }), ee)) {
			let se = await ya(X, D.pathname, S.signal);
			if (se.type === 'aborted') return { shortCircuited: !0 };
			if (se.type === 'error') {
				let ve = wa(se.partialMatches).route.id;
				return {
					matches: se.partialMatches,
					pendingActionResult: [ve, { type: 'error', error: se.error }],
				};
			} else if (se.matches) X = se.matches;
			else {
				let { notFoundMatches: ve, error: _e, route: Ze } = ja(D.pathname);
				return {
					matches: ve,
					pendingActionResult: [Ze.id, { type: 'error', error: _e }],
				};
			}
		}
		let te,
			oe = _u(X, D);
		if (!oe.route.action && !oe.route.lazy)
			te = {
				type: 'error',
				error: kt(405, {
					method: S.method,
					pathname: D.pathname,
					routeId: oe.route.id,
				}),
			};
		else {
			let se = Tn(s, h, S, X, oe, ie ? [] : o, Q),
				ve = await Nl(S, se, Q, null);
			if (((te = ve[oe.route.id]), !te)) {
				for (let _e of X)
					if (ve[_e.route.id]) {
						te = ve[_e.route.id];
						break;
					}
			}
			if (S.signal.aborted) return { shortCircuited: !0 };
		}
		if (Ha(te)) {
			let se;
			return (
				F && F.replace != null
					? (se = F.replace)
					: (se =
							Vh(te.response.headers.get('Location'), new URL(S.url), v) ===
							x.location.pathname + x.location.search),
				await vl(S, te, !0, { submission: C, replace: se }),
				{ shortCircuited: !0 }
			);
		}
		if (Bt(te)) {
			let se = wa(X, oe.route.id);
			return (
				(F && F.replace) !== !0 && (ye = 'PUSH'),
				{ matches: X, pendingActionResult: [se.route.id, te, oe.route.id] }
			);
		}
		return { matches: X, pendingActionResult: [oe.route.id, te] };
	}
	async function fr(S, D, C, X, Q, ee, ie, F, ne, te, oe, se) {
		let ve = ee || Df(D, ie),
			_e = ie || F || Fh(ve),
			Ze = !Ue && !te;
		if (Q) {
			if (Ze) {
				let yt = _t(se);
				it(
					{ navigation: ve, ...(yt !== void 0 ? { actionData: yt } : {}) },
					{ flushSync: oe }
				);
			}
			let Ee = await ya(C, D.pathname, S.signal);
			if (Ee.type === 'aborted') return { shortCircuited: !0 };
			if (Ee.type === 'error') {
				let yt = wa(Ee.partialMatches).route.id;
				return {
					matches: Ee.partialMatches,
					loaderData: {},
					errors: { [yt]: Ee.error },
				};
			} else if (Ee.matches) C = Ee.matches;
			else {
				let { error: yt, notFoundMatches: el, route: tl } = ja(D.pathname);
				return { matches: el, loaderData: {}, errors: { [tl.id]: yt } };
			}
		}
		let We = b || y,
			{ dsMatches: xe, revalidatingFetchers: ze } = Yh(
				S,
				X,
				s,
				h,
				i.history,
				x,
				C,
				_e,
				D,
				te ? [] : o,
				te === !0,
				Ne,
				He,
				K,
				j,
				p,
				We,
				v,
				i.patchRoutesOnNavigation != null,
				se
			);
		if (
			((P = ++V),
			!i.dataStrategy && !xe.some((Ee) => Ee.shouldLoad) && ze.length === 0)
		) {
			let Ee = sa();
			return (
				Ft(
					D,
					{
						matches: C,
						loaderData: {},
						errors: se && Bt(se[1]) ? { [se[0]]: se[1].error } : null,
						...$h(se),
						...(Ee ? { fetchers: new Map(x.fetchers) } : {}),
					},
					{ flushSync: oe }
				),
				{ shortCircuited: !0 }
			);
		}
		if (Ze) {
			let Ee = {};
			if (!Q) {
				Ee.navigation = ve;
				let yt = _t(se);
				yt !== void 0 && (Ee.actionData = yt);
			}
			ze.length > 0 && (Ee.fetchers = or(ze)), it(Ee, { flushSync: oe });
		}
		ze.forEach((Ee) => {
			il(Ee.key), Ee.controller && _.set(Ee.key, Ee.controller);
		});
		let wl = () => ze.forEach((Ee) => il(Ee.key));
		me && me.signal.addEventListener('abort', wl);
		let { loaderResults: St, fetcherResults: Yt } = await qu(xe, ze, S, X);
		if (S.signal.aborted) return { shortCircuited: !0 };
		me && me.signal.removeEventListener('abort', wl),
			ze.forEach((Ee) => _.delete(Ee.key));
		let Tt = Fi(St);
		if (Tt)
			return (
				await vl(S, Tt.result, !0, { replace: ne }), { shortCircuited: !0 }
			);
		if (((Tt = Fi(Yt)), Tt))
			return (
				p.add(Tt.key),
				await vl(S, Tt.result, !0, { replace: ne }),
				{ shortCircuited: !0 }
			);
		let { loaderData: Hl, errors: Ll } = Kh(x, C, St, se, ze, Yt);
		te && x.errors && (Ll = { ...x.errors, ...Ll });
		let On = sa(),
			jt = da(P),
			gl = On || jt || ze.length > 0;
		return {
			matches: C,
			loaderData: Hl,
			errors: Ll,
			...(gl ? { fetchers: new Map(x.fetchers) } : {}),
		};
	}
	function _t(S) {
		if (S && !Bt(S[1])) return { [S[0]]: S[1].data };
		if (x.actionData)
			return Object.keys(x.actionData).length === 0 ? null : x.actionData;
	}
	function or(S) {
		return (
			S.forEach((D) => {
				let C = x.fetchers.get(D.key),
					X = Au(void 0, C ? C.data : void 0);
				x.fetchers.set(D.key, X);
			}),
			new Map(x.fetchers)
		);
	}
	async function Lu(S, D, C, X) {
		il(S);
		let Q = (X && X.flushSync) === !0,
			ee = b || y,
			ie = zf(x.location, x.matches, v, C, D, X?.relative),
			F = ca(ee, ie, v),
			ne = va(F, ee, ie);
		if ((ne.active && ne.matches && (F = ne.matches), !F)) {
			ke(S, D, kt(404, { pathname: ie }), { flushSync: Q });
			return;
		}
		let { path: te, submission: oe, error: se } = qh(!0, ie, X);
		if (se) {
			ke(S, D, se, { flushSync: Q });
			return;
		}
		let ve = _u(F, te),
			_e = new Lh(
				i.unstable_getContext ? await i.unstable_getContext() : void 0
			),
			Ze = (X && X.preventScrollReset) === !0;
		if (oe && qt(oe.formMethod)) {
			await Bu(S, D, te, ve, F, _e, ne.active, Q, Ze, oe);
			return;
		}
		j.set(S, { routeId: D, path: te }),
			await Ya(S, D, te, ve, F, _e, ne.active, Q, Ze, oe);
	}
	async function Bu(S, D, C, X, Q, ee, ie, F, ne, te) {
		Dn(), j.delete(S);
		function oe(Je) {
			if (!Je.route.action && !Je.route.lazy) {
				let Bl = kt(405, { method: te.formMethod, pathname: C, routeId: D });
				return ke(S, D, Bl, { flushSync: F }), !0;
			}
			return !1;
		}
		if (!ie && oe(X)) return;
		let se = x.fetchers.get(S);
		Rt(S, G0(te, se), { flushSync: F });
		let ve = new AbortController(),
			_e = Rn(i.history, C, ve.signal, te);
		if (ie) {
			let Je = await ya(Q, C, _e.signal, S);
			if (Je.type === 'aborted') return;
			if (Je.type === 'error') {
				ke(S, D, Je.error, { flushSync: F });
				return;
			} else if (Je.matches) {
				if (((Q = Je.matches), (X = _u(Q, C)), oe(X))) return;
			} else {
				ke(S, D, kt(404, { pathname: C }), { flushSync: F });
				return;
			}
		}
		_.set(S, ve);
		let Ze = V,
			We = Tn(s, h, _e, Q, X, o, ee),
			ze = (await Nl(_e, We, ee, S))[X.route.id];
		if (_e.signal.aborted) {
			_.get(S) === ve && _.delete(S);
			return;
		}
		if (K.has(S)) {
			if (Ha(ze) || Bt(ze)) {
				Rt(S, ra(void 0));
				return;
			}
		} else {
			if (Ha(ze))
				if ((_.delete(S), P > Ze)) {
					Rt(S, ra(void 0));
					return;
				} else
					return (
						p.add(S),
						Rt(S, Au(te)),
						vl(_e, ze, !1, { fetcherSubmission: te, preventScrollReset: ne })
					);
			if (Bt(ze)) {
				ke(S, D, ze.error);
				return;
			}
		}
		let wl = x.navigation.location || x.location,
			St = Rn(i.history, wl, ve.signal),
			Yt = b || y,
			Tt =
				x.navigation.state !== 'idle'
					? ca(Yt, x.navigation.location, v)
					: x.matches;
		Ae(Tt, "Didn't find any matches after fetcher action");
		let Hl = ++V;
		be.set(S, Hl);
		let Ll = Au(te, ze.data);
		x.fetchers.set(S, Ll);
		let { dsMatches: On, revalidatingFetchers: jt } = Yh(
			St,
			ee,
			s,
			h,
			i.history,
			x,
			Tt,
			te,
			wl,
			o,
			!1,
			Ne,
			He,
			K,
			j,
			p,
			Yt,
			v,
			i.patchRoutesOnNavigation != null,
			[X.route.id, ze]
		);
		jt
			.filter((Je) => Je.key !== S)
			.forEach((Je) => {
				let Bl = Je.key,
					_n = x.fetchers.get(Bl),
					Mt = Au(void 0, _n ? _n.data : void 0);
				x.fetchers.set(Bl, Mt),
					il(Bl),
					Je.controller && _.set(Bl, Je.controller);
			}),
			it({ fetchers: new Map(x.fetchers) });
		let gl = () => jt.forEach((Je) => il(Je.key));
		ve.signal.addEventListener('abort', gl);
		let { loaderResults: Ee, fetcherResults: yt } = await qu(On, jt, St, ee);
		if (ve.signal.aborted) return;
		if (
			(ve.signal.removeEventListener('abort', gl),
			be.delete(S),
			_.delete(S),
			jt.forEach((Je) => _.delete(Je.key)),
			x.fetchers.has(S))
		) {
			let Je = ra(ze.data);
			x.fetchers.set(S, Je);
		}
		let el = Fi(Ee);
		if (el) return vl(St, el.result, !1, { preventScrollReset: ne });
		if (((el = Fi(yt)), el))
			return p.add(el.key), vl(St, el.result, !1, { preventScrollReset: ne });
		let { loaderData: tl, errors: ga } = Kh(x, Tt, Ee, void 0, jt, yt);
		da(Hl),
			x.navigation.state === 'loading' && Hl > P
				? (Ae(ye, 'Expected pending action'),
				  me && me.abort(),
				  Ft(x.navigation.location, {
						matches: Tt,
						loaderData: tl,
						errors: ga,
						fetchers: new Map(x.fetchers),
				  }))
				: (it({
						errors: ga,
						loaderData: Jh(x.loaderData, tl, Tt, ga),
						fetchers: new Map(x.fetchers),
				  }),
				  (Ne = !1));
	}
	async function Ya(S, D, C, X, Q, ee, ie, F, ne, te) {
		let oe = x.fetchers.get(S);
		Rt(S, Au(te, oe ? oe.data : void 0), { flushSync: F });
		let se = new AbortController(),
			ve = Rn(i.history, C, se.signal);
		if (ie) {
			let ze = await ya(Q, C, ve.signal, S);
			if (ze.type === 'aborted') return;
			if (ze.type === 'error') {
				ke(S, D, ze.error, { flushSync: F });
				return;
			} else if (ze.matches) (Q = ze.matches), (X = _u(Q, C));
			else {
				ke(S, D, kt(404, { pathname: C }), { flushSync: F });
				return;
			}
		}
		_.set(S, se);
		let _e = V,
			Ze = Tn(s, h, ve, Q, X, o, ee),
			xe = (await Nl(ve, Ze, ee, S))[X.route.id];
		if ((_.get(S) === se && _.delete(S), !ve.signal.aborted)) {
			if (K.has(S)) {
				Rt(S, ra(void 0));
				return;
			}
			if (Ha(xe))
				if (P > _e) {
					Rt(S, ra(void 0));
					return;
				} else {
					p.add(S), await vl(ve, xe, !1, { preventScrollReset: ne });
					return;
				}
			if (Bt(xe)) {
				ke(S, D, xe.error);
				return;
			}
			Rt(S, ra(xe.data));
		}
	}
	async function vl(
		S,
		D,
		C,
		{
			submission: X,
			fetcherSubmission: Q,
			preventScrollReset: ee,
			replace: ie,
		} = {}
	) {
		D.response.headers.has('X-Remix-Revalidate') && (Ne = !0);
		let F = D.response.headers.get('Location');
		Ae(F, 'Expected a Location header on the redirect Response'),
			(F = Vh(F, new URL(S.url), v));
		let ne = xu(x.location, F, { _isRedirect: !0 });
		if (f) {
			let Ze = !1;
			if (D.response.headers.has('X-Remix-Reload-Document')) Ze = !0;
			else if (Lf.test(F)) {
				const We = am(F, !0);
				Ze = We.origin !== r.location.origin || Wt(We.pathname, v) == null;
			}
			if (Ze) {
				ie ? r.location.replace(F) : r.location.assign(F);
				return;
			}
		}
		me = null;
		let te =
				ie === !0 || D.response.headers.has('X-Remix-Replace')
					? 'REPLACE'
					: 'PUSH',
			{ formMethod: oe, formAction: se, formEncType: ve } = x.navigation;
		!X && !Q && oe && se && ve && (X = Fh(x.navigation));
		let _e = X || Q;
		if (T0.has(D.response.status) && _e && qt(_e.formMethod))
			await Pt(te, ne, {
				submission: { ..._e, formAction: F },
				preventScrollReset: ee || pe,
				enableViewTransition: C ? Ve : void 0,
			});
		else {
			let Ze = Df(ne, X);
			await Pt(te, ne, {
				overrideNavigation: Ze,
				fetcherSubmission: Q,
				preventScrollReset: ee || pe,
				enableViewTransition: C ? Ve : void 0,
			});
		}
	}
	async function Nl(S, D, C, X) {
		let Q,
			ee = {};
		try {
			Q = await C0(m, S, D, X, C, !1);
		} catch (ie) {
			return (
				D.filter((F) => F.shouldLoad).forEach((F) => {
					ee[F.route.id] = { type: 'error', error: ie };
				}),
				ee
			);
		}
		if (S.signal.aborted) return ee;
		for (let [ie, F] of Object.entries(Q))
			if (q0(F)) {
				let ne = F.result;
				ee[ie] = { type: 'redirect', response: H0(ne, S, ie, D, v) };
			} else ee[ie] = await w0(F);
		return ee;
	}
	async function qu(S, D, C, X) {
		let Q = Nl(C, S, X, null),
			ee = Promise.all(
				D.map(async (ne) => {
					if (ne.matches && ne.match && ne.request && ne.controller) {
						let oe = (await Nl(ne.request, ne.matches, X, ne.key))[
							ne.match.route.id
						];
						return { [ne.key]: oe };
					} else
						return Promise.resolve({
							[ne.key]: {
								type: 'error',
								error: kt(404, { pathname: ne.path }),
							},
						});
				})
			),
			ie = await Q,
			F = (await ee).reduce((ne, te) => Object.assign(ne, te), {});
		return { loaderResults: ie, fetcherResults: F };
	}
	function Dn() {
		(Ne = !0),
			j.forEach((S, D) => {
				_.has(D) && He.add(D), il(D);
			});
	}
	function Rt(S, D, C = {}) {
		x.fetchers.set(S, D),
			it(
				{ fetchers: new Map(x.fetchers) },
				{ flushSync: (C && C.flushSync) === !0 }
			);
	}
	function ke(S, D, C, X = {}) {
		let Q = wa(x.matches, D);
		dt(S),
			it(
				{ errors: { [Q.route.id]: C }, fetchers: new Map(x.fetchers) },
				{ flushSync: (X && X.flushSync) === !0 }
			);
	}
	function It(S) {
		return (
			J.set(S, (J.get(S) || 0) + 1),
			K.has(S) && K.delete(S),
			x.fetchers.get(S) || M0
		);
	}
	function dt(S) {
		let D = x.fetchers.get(S);
		_.has(S) && !(D && D.state === 'loading' && be.has(S)) && il(S),
			j.delete(S),
			be.delete(S),
			p.delete(S),
			K.delete(S),
			He.delete(S),
			x.fetchers.delete(S);
	}
	function sr(S) {
		let D = (J.get(S) || 0) - 1;
		D <= 0 ? (J.delete(S), K.add(S)) : J.set(S, D),
			it({ fetchers: new Map(x.fetchers) });
	}
	function il(S) {
		let D = _.get(S);
		D && (D.abort(), _.delete(S));
	}
	function Yu(S) {
		for (let D of S) {
			let C = It(D),
				X = ra(C.data);
			x.fetchers.set(D, X);
		}
	}
	function sa() {
		let S = [],
			D = !1;
		for (let C of p) {
			let X = x.fetchers.get(C);
			Ae(X, `Expected fetcher: ${C}`),
				X.state === 'loading' && (p.delete(C), S.push(C), (D = !0));
		}
		return Yu(S), D;
	}
	function da(S) {
		let D = [];
		for (let [C, X] of be)
			if (X < S) {
				let Q = x.fetchers.get(C);
				Ae(Q, `Expected fetcher: ${C}`),
					Q.state === 'loading' && (il(C), be.delete(C), D.push(C));
			}
		return Yu(D), D.length > 0;
	}
	function yl(S, D) {
		let C = x.blockers.get(S) || Du;
		return le.get(S) !== D && le.set(S, D), C;
	}
	function ha(S) {
		x.blockers.delete(S), le.delete(S);
	}
	function rl(S, D) {
		let C = x.blockers.get(S) || Du;
		Ae(
			(C.state === 'unblocked' && D.state === 'blocked') ||
				(C.state === 'blocked' && D.state === 'blocked') ||
				(C.state === 'blocked' && D.state === 'proceeding') ||
				(C.state === 'blocked' && D.state === 'unblocked') ||
				(C.state === 'proceeding' && D.state === 'unblocked'),
			`Invalid blocker state transition: ${C.state} -> ${D.state}`
		);
		let X = new Map(x.blockers);
		X.set(S, D), it({ blockers: X });
	}
	function ju({ currentLocation: S, nextLocation: D, historyAction: C }) {
		if (le.size === 0) return;
		le.size > 1 && ut(!1, 'A router only supports one blocker at a time');
		let X = Array.from(le.entries()),
			[Q, ee] = X[X.length - 1],
			ie = x.blockers.get(Q);
		if (
			!(ie && ie.state === 'proceeding') &&
			ee({ currentLocation: S, nextLocation: D, historyAction: C })
		)
			return Q;
	}
	function ja(S) {
		let D = kt(404, { pathname: S }),
			C = b || y,
			{ matches: X, route: Q } = kh(C);
		return { notFoundMatches: X, route: Q, error: D };
	}
	function Gu(S, D, C) {
		if (((B = S), (Z = D), (w = C || null), !$ && x.navigation === Mf)) {
			$ = !0;
			let X = Xu(x.location, x.matches);
			X != null && it({ restoreScrollPosition: X });
		}
		return () => {
			(B = null), (Z = null), (w = null);
		};
	}
	function Ga(S, D) {
		return (
			(w &&
				w(
					S,
					D.map((X) => t0(X, x.loaderData))
				)) ||
			S.key
		);
	}
	function ma(S, D) {
		if (B && Z) {
			let C = Ga(S, D);
			B[C] = Z();
		}
	}
	function Xu(S, D) {
		if (B) {
			let C = Ga(S, D),
				X = B[C];
			if (typeof X == 'number') return X;
		}
		return null;
	}
	function va(S, D, C) {
		if (i.patchRoutesOnNavigation)
			if (S) {
				if (Object.keys(S[0].params).length > 0)
					return { active: !0, matches: Ii(D, C, v, !0) };
			} else return { active: !0, matches: Ii(D, C, v, !0) || [] };
		return { active: !1, matches: null };
	}
	async function ya(S, D, C, X) {
		if (!i.patchRoutesOnNavigation) return { type: 'success', matches: S };
		let Q = S;
		for (;;) {
			let ee = b == null,
				ie = b || y,
				F = h;
			try {
				await i.patchRoutesOnNavigation({
					signal: C,
					path: D,
					matches: Q,
					fetcherKey: X,
					patch: (oe, se) => {
						C.aborted || jh(oe, se, ie, F, s);
					},
				});
			} catch (oe) {
				return { type: 'error', error: oe, partialMatches: Q };
			} finally {
				ee && !C.aborted && (y = [...y]);
			}
			if (C.aborted) return { type: 'aborted' };
			let ne = ca(ie, D, v);
			if (ne) return { type: 'success', matches: ne };
			let te = Ii(ie, D, v, !0);
			if (
				!te ||
				(Q.length === te.length &&
					Q.every((oe, se) => oe.route.id === te[se].route.id))
			)
				return { type: 'success', matches: null };
			Q = te;
		}
	}
	function An(S) {
		(h = {}), (b = lr(S, s, void 0, h));
	}
	function zn(S, D) {
		let C = b == null;
		jh(S, D, b || y, h, s), C && ((y = [...y]), it({}));
	}
	return (
		(W = {
			get basename() {
				return v;
			},
			get future() {
				return R;
			},
			get state() {
				return x;
			},
			get routes() {
				return y;
			},
			get window() {
				return r;
			},
			initialize: bt,
			subscribe: ul,
			enableScrollRestoration: Gu,
			navigate: qa,
			fetch: Lu,
			revalidate: Mn,
			createHref: (S) => i.history.createHref(S),
			encodeLocation: (S) => i.history.encodeLocation(S),
			getFetcher: It,
			deleteFetcher: sr,
			dispose: Xe,
			getBlocker: yl,
			deleteBlocker: ha,
			patchRoutes: zn,
			_internalFetchControllers: _,
			_internalSetRoutes: An,
		}),
		W
	);
}
function z0(i) {
	return (
		i != null &&
		(('formData' in i && i.formData != null) ||
			('body' in i && i.body !== void 0))
	);
}
function zf(i, r, f, o, s, h) {
	let y, b;
	if (s) {
		y = [];
		for (let m of r)
			if ((y.push(m), m.route.id === s)) {
				b = m;
				break;
			}
	} else (y = r), (b = r[r.length - 1]);
	let v = Hf(o || '.', wf(y), Wt(i.pathname, f) || i.pathname, h === 'path');
	if (
		(o == null && ((v.search = i.search), (v.hash = i.hash)),
		(o == null || o === '' || o === '.') && b)
	) {
		let m = Bf(v.search);
		if (b.route.index && !m)
			v.search = v.search ? v.search.replace(/^\?/, '?index&') : '?index';
		else if (!b.route.index && m) {
			let R = new URLSearchParams(v.search),
				N = R.getAll('index');
			R.delete('index'),
				N.filter((B) => B).forEach((B) => R.append('index', B));
			let M = R.toString();
			v.search = M ? `?${M}` : '';
		}
	}
	return (
		f !== '/' && (v.pathname = v.pathname === '/' ? f : hl([f, v.pathname])),
		fa(v)
	);
}
function qh(i, r, f) {
	if (!f || !z0(f)) return { path: r };
	if (f.formMethod && !Y0(f.formMethod))
		return { path: r, error: kt(405, { method: f.formMethod }) };
	let o = () => ({ path: r, error: kt(400, { type: 'invalid-body' }) }),
		h = (f.formMethod || 'get').toUpperCase(),
		y = vm(r);
	if (f.body !== void 0) {
		if (f.formEncType === 'text/plain') {
			if (!qt(h)) return o();
			let N =
				typeof f.body == 'string'
					? f.body
					: f.body instanceof FormData || f.body instanceof URLSearchParams
					? Array.from(f.body.entries()).reduce(
							(M, [B, w]) => `${M}${B}=${w}
`,
							''
					  )
					: String(f.body);
			return {
				path: r,
				submission: {
					formMethod: h,
					formAction: y,
					formEncType: f.formEncType,
					formData: void 0,
					json: void 0,
					text: N,
				},
			};
		} else if (f.formEncType === 'application/json') {
			if (!qt(h)) return o();
			try {
				let N = typeof f.body == 'string' ? JSON.parse(f.body) : f.body;
				return {
					path: r,
					submission: {
						formMethod: h,
						formAction: y,
						formEncType: f.formEncType,
						formData: void 0,
						json: N,
						text: void 0,
					},
				};
			} catch {
				return o();
			}
		}
	}
	Ae(
		typeof FormData == 'function',
		'FormData is not available in this environment'
	);
	let b, v;
	if (f.formData) (b = Uf(f.formData)), (v = f.formData);
	else if (f.body instanceof FormData) (b = Uf(f.body)), (v = f.body);
	else if (f.body instanceof URLSearchParams) (b = f.body), (v = Zh(b));
	else if (f.body == null) (b = new URLSearchParams()), (v = new FormData());
	else
		try {
			(b = new URLSearchParams(f.body)), (v = Zh(b));
		} catch {
			return o();
		}
	let m = {
		formMethod: h,
		formAction: y,
		formEncType: (f && f.formEncType) || 'application/x-www-form-urlencoded',
		formData: v,
		json: void 0,
		text: void 0,
	};
	if (qt(m.formMethod)) return { path: r, submission: m };
	let R = oa(r);
	return (
		i && R.search && Bf(R.search) && b.append('index', ''),
		(R.search = `?${b}`),
		{ path: fa(R), submission: m }
	);
}
function Yh(i, r, f, o, s, h, y, b, v, m, R, N, M, B, w, Z, $, q, ue, k) {
	let he = k ? (Bt(k[1]) ? k[1].error : k[1].data) : void 0,
		W = s.createURL(h.location),
		x = s.createURL(v),
		ye;
	if (R && h.errors) {
		let Ue = Object.keys(h.errors)[0];
		ye = y.findIndex((Ne) => Ne.route.id === Ue);
	} else if (k && Bt(k[1])) {
		let Ue = k[0];
		ye = y.findIndex((Ne) => Ne.route.id === Ue) - 1;
	}
	let pe = k ? k[1].statusCode : void 0,
		me = pe && pe >= 400,
		Ve = {
			currentUrl: W,
			currentParams: h.matches[0]?.params || {},
			nextUrl: x,
			nextParams: y[0].params,
			...b,
			actionResult: he,
			actionStatus: pe,
		},
		et = y.map((Ue, Ne) => {
			let { route: He } = Ue,
				_ = null;
			if (
				(ye != null && Ne > ye
					? (_ = !1)
					: He.lazy
					? (_ = !0)
					: He.loader == null
					? (_ = !1)
					: R
					? (_ = Of(He, h.loaderData, h.errors))
					: O0(h.loaderData, h.matches[Ne], Ue) && (_ = !0),
				_ !== null)
			)
				return _f(f, o, i, Ue, m, r, _);
			let V = me
					? !1
					: N ||
					  W.pathname + W.search === x.pathname + x.search ||
					  W.search !== x.search ||
					  _0(h.matches[Ne], Ue),
				P = { ...Ve, defaultShouldRevalidate: V },
				be = ur(Ue, P);
			return _f(f, o, i, Ue, m, r, be, P);
		}),
		Ke = [];
	return (
		w.forEach((Ue, Ne) => {
			if (R || !y.some((J) => J.route.id === Ue.routeId) || B.has(Ne)) return;
			let He = h.fetchers.get(Ne),
				_ = He && He.state !== 'idle' && He.data === void 0,
				V = ca($, Ue.path, q);
			if (!V) {
				if (ue && _) return;
				Ke.push({
					key: Ne,
					routeId: Ue.routeId,
					path: Ue.path,
					matches: null,
					match: null,
					request: null,
					controller: null,
				});
				return;
			}
			if (Z.has(Ne)) return;
			let P = _u(V, Ue.path),
				be = new AbortController(),
				p = Rn(s, Ue.path, be.signal),
				j = null;
			if (M.has(Ne)) M.delete(Ne), (j = Tn(f, o, p, V, P, m, r));
			else if (_) N && (j = Tn(f, o, p, V, P, m, r));
			else {
				let J = { ...Ve, defaultShouldRevalidate: me ? !1 : N };
				ur(P, J) && (j = Tn(f, o, p, V, P, m, r, J));
			}
			j &&
				Ke.push({
					key: Ne,
					routeId: Ue.routeId,
					path: Ue.path,
					matches: j,
					match: P,
					request: p,
					controller: be,
				});
		}),
		{ dsMatches: et, revalidatingFetchers: Ke }
	);
}
function Of(i, r, f) {
	if (i.lazy) return !0;
	if (!i.loader) return !1;
	let o = r != null && i.id in r,
		s = f != null && f[i.id] !== void 0;
	return !o && s
		? !1
		: typeof i.loader == 'function' && i.loader.hydrate === !0
		? !0
		: !o && !s;
}
function O0(i, r, f) {
	let o = !r || f.route.id !== r.route.id,
		s = !i.hasOwnProperty(f.route.id);
	return o || s;
}
function _0(i, r) {
	let f = i.route.path;
	return (
		i.pathname !== r.pathname ||
		(f != null && f.endsWith('*') && i.params['*'] !== r.params['*'])
	);
}
function ur(i, r) {
	if (i.route.shouldRevalidate) {
		let f = i.route.shouldRevalidate(r);
		if (typeof f == 'boolean') return f;
	}
	return r.defaultShouldRevalidate;
}
function jh(i, r, f, o, s) {
	let h;
	if (i) {
		let v = o[i];
		Ae(v, `No route found to patch children into: routeId = ${i}`),
			v.children || (v.children = []),
			(h = v.children);
	} else h = f;
	let y = r.filter((v) => !h.some((m) => om(v, m))),
		b = lr(y, s, [i || '_', 'patch', String(h?.length || '0')], o);
	h.push(...b);
}
function om(i, r) {
	return 'id' in i && 'id' in r && i.id === r.id
		? !0
		: i.index === r.index &&
		  i.path === r.path &&
		  i.caseSensitive === r.caseSensitive
		? (!i.children || i.children.length === 0) &&
		  (!r.children || r.children.length === 0)
			? !0
			: i.children.every((f, o) => r.children?.some((s) => om(f, s)))
		: !1;
}
var Gh = new WeakMap(),
	sm = ({ key: i, route: r, manifest: f, mapRouteProperties: o }) => {
		let s = f[r.id];
		if (
			(Ae(s, 'No route found in manifest'),
			!s.lazy || typeof s.lazy != 'object')
		)
			return;
		let h = s.lazy[i];
		if (!h) return;
		let y = Gh.get(s);
		y || ((y = {}), Gh.set(s, y));
		let b = y[i];
		if (b) return b;
		let v = (async () => {
			let m = Fy(i),
				N = s[i] !== void 0 && i !== 'hasErrorBoundary';
			if (m)
				ut(
					!m,
					'Route property ' +
						i +
						' is not a supported lazy route property. This property will be ignored.'
				),
					(y[i] = Promise.resolve());
			else if (N)
				ut(
					!1,
					`Route "${s.id}" has a static property "${i}" defined. The lazy property will be ignored.`
				);
			else {
				let M = await h();
				M != null && (Object.assign(s, { [i]: M }), Object.assign(s, o(s)));
			}
			typeof s.lazy == 'object' &&
				((s.lazy[i] = void 0),
				Object.values(s.lazy).every((M) => M === void 0) && (s.lazy = void 0));
		})();
		return (y[i] = v), v;
	},
	Xh = new WeakMap();
function U0(i, r, f, o, s) {
	let h = f[i.id];
	if ((Ae(h, 'No route found in manifest'), !i.lazy))
		return { lazyRoutePromise: void 0, lazyHandlerPromise: void 0 };
	if (typeof i.lazy == 'function') {
		let R = Xh.get(h);
		if (R) return { lazyRoutePromise: R, lazyHandlerPromise: R };
		let N = (async () => {
			Ae(typeof i.lazy == 'function', 'No lazy route function found');
			let M = await i.lazy(),
				B = {};
			for (let w in M) {
				let Z = M[w];
				if (Z === void 0) continue;
				let $ = Iy(w),
					ue = h[w] !== void 0 && w !== 'hasErrorBoundary';
				$
					? ut(
							!$,
							'Route property ' +
								w +
								' is not a supported property to be returned from a lazy route function. This property will be ignored.'
					  )
					: ue
					? ut(
							!ue,
							`Route "${h.id}" has a static property "${w}" defined but its lazy function is also returning a value for this property. The lazy route property "${w}" will be ignored.`
					  )
					: (B[w] = Z);
			}
			Object.assign(h, B), Object.assign(h, { ...o(h), lazy: void 0 });
		})();
		return (
			Xh.set(h, N),
			N.catch(() => {}),
			{ lazyRoutePromise: N, lazyHandlerPromise: N }
		);
	}
	let y = Object.keys(i.lazy),
		b = [],
		v;
	for (let R of y) {
		if (s && s.includes(R)) continue;
		let N = sm({ key: R, route: i, manifest: f, mapRouteProperties: o });
		N && (b.push(N), R === r && (v = N));
	}
	let m = b.length > 0 ? Promise.all(b).then(() => {}) : void 0;
	return (
		m?.catch(() => {}),
		v?.catch(() => {}),
		{ lazyRoutePromise: m, lazyHandlerPromise: v }
	);
}
async function Qh(i) {
	let r = i.matches.filter((s) => s.shouldLoad),
		f = {};
	return (
		(await Promise.all(r.map((s) => s.resolve()))).forEach((s, h) => {
			f[r[h].route.id] = s;
		}),
		f
	);
}
async function x0(i) {
	return i.matches.some((r) => r.route.unstable_middleware)
		? dm(
				i,
				!1,
				() => Qh(i),
				(r, f) => ({ [f]: { type: 'error', result: r } })
		  )
		: Qh(i);
}
async function dm(i, r, f, o) {
	let { matches: s, request: h, params: y, context: b } = i,
		v = { handlerResult: void 0 };
	try {
		let m = s.flatMap((N) =>
				N.route.unstable_middleware
					? N.route.unstable_middleware.map((M) => [N.route.id, M])
					: []
			),
			R = await hm({ request: h, params: y, context: b }, m, r, v, f);
		return r ? R : v.handlerResult;
	} catch (m) {
		if (!v.middlewareError) throw m;
		let R = await o(v.middlewareError.error, v.middlewareError.routeId);
		return v.handlerResult ? Object.assign(v.handlerResult, R) : R;
	}
}
async function hm(i, r, f, o, s, h = 0) {
	let { request: y } = i;
	if (y.signal.aborted)
		throw y.signal.reason
			? y.signal.reason
			: new Error(
					`Request aborted without an \`AbortSignal.reason\`: ${y.method} ${y.url}`
			  );
	let b = r[h];
	if (!b) return (o.handlerResult = await s()), o.handlerResult;
	let [v, m] = b,
		R = !1,
		N,
		M = async () => {
			if (R) throw new Error('You may only call `next()` once per middleware');
			(R = !0), await hm(i, r, f, o, s, h + 1);
		};
	try {
		let B = await m(
			{ request: i.request, params: i.params, context: i.context },
			M
		);
		return R ? (B === void 0 ? N : B) : M();
	} catch (B) {
		throw (
			(o.middlewareError
				? o.middlewareError.error !== B &&
				  (o.middlewareError = { routeId: v, error: B })
				: (o.middlewareError = { routeId: v, error: B }),
			B)
		);
	}
}
function mm(i, r, f, o, s) {
	let h = sm({
			key: 'unstable_middleware',
			route: o.route,
			manifest: r,
			mapRouteProperties: i,
		}),
		y = U0(o.route, qt(f.method) ? 'action' : 'loader', r, i, s);
	return {
		middleware: h,
		route: y.lazyRoutePromise,
		handler: y.lazyHandlerPromise,
	};
}
function _f(i, r, f, o, s, h, y, b = null) {
	let v = !1,
		m = mm(i, r, f, o, s);
	return {
		...o,
		_lazyPromises: m,
		shouldLoad: y,
		unstable_shouldRevalidateArgs: b,
		unstable_shouldCallHandler(R) {
			return (
				(v = !0),
				b
					? typeof R == 'boolean'
						? ur(o, { ...b, defaultShouldRevalidate: R })
						: ur(o, b)
					: y
			);
		},
		resolve(R) {
			return v ||
				y ||
				(R && f.method === 'GET' && (o.route.lazy || o.route.loader))
				? N0({
						request: f,
						match: o,
						lazyHandlerPromise: m?.handler,
						lazyRoutePromise: m?.route,
						handlerOverride: R,
						scopedContext: h,
				  })
				: Promise.resolve({ type: 'data', result: void 0 });
		},
	};
}
function Tn(i, r, f, o, s, h, y, b = null) {
	return o.map((v) =>
		v.route.id !== s.route.id
			? {
					...v,
					shouldLoad: !1,
					unstable_shouldRevalidateArgs: b,
					unstable_shouldCallHandler: () => !1,
					_lazyPromises: mm(i, r, f, v, h),
					resolve: () => Promise.resolve({ type: 'data', result: void 0 }),
			  }
			: _f(i, r, f, v, h, y, !0, b)
	);
}
async function C0(i, r, f, o, s, h) {
	f.some((m) => m._lazyPromises?.middleware) &&
		(await Promise.all(f.map((m) => m._lazyPromises?.middleware)));
	let y = { request: r, params: f[0].params, context: s, matches: f },
		v = await i({
			...y,
			fetcherKey: o,
			unstable_runClientMiddleware: (m) => {
				let R = y;
				return dm(
					R,
					!1,
					() =>
						m({
							...R,
							fetcherKey: o,
							unstable_runClientMiddleware: () => {
								throw new Error(
									'Cannot call `unstable_runClientMiddleware()` from within an `unstable_runClientMiddleware` handler'
								);
							},
						}),
					(N, M) => ({ [M]: { type: 'error', result: N } })
				);
			},
		});
	try {
		await Promise.all(
			f.flatMap((m) => [m._lazyPromises?.handler, m._lazyPromises?.route])
		);
	} catch {}
	return v;
}
async function N0({
	request: i,
	match: r,
	lazyHandlerPromise: f,
	lazyRoutePromise: o,
	handlerOverride: s,
	scopedContext: h,
}) {
	let y,
		b,
		v = qt(i.method),
		m = v ? 'action' : 'loader',
		R = (N) => {
			let M,
				B = new Promise(($, q) => (M = q));
			(b = () => M()), i.signal.addEventListener('abort', b);
			let w = ($) =>
					typeof N != 'function'
						? Promise.reject(
								new Error(
									`You cannot call the handler for a route which defines a boolean "${m}" [routeId: ${r.route.id}]`
								)
						  )
						: N(
								{ request: i, params: r.params, context: h },
								...($ !== void 0 ? [$] : [])
						  ),
				Z = (async () => {
					try {
						return { type: 'data', result: await (s ? s((q) => w(q)) : w()) };
					} catch ($) {
						return { type: 'error', result: $ };
					}
				})();
			return Promise.race([Z, B]);
		};
	try {
		let N = v ? r.route.action : r.route.loader;
		if (f || o)
			if (N) {
				let M,
					[B] = await Promise.all([
						R(N).catch((w) => {
							M = w;
						}),
						f,
						o,
					]);
				if (M !== void 0) throw M;
				y = B;
			} else {
				await f;
				let M = v ? r.route.action : r.route.loader;
				if (M) [y] = await Promise.all([R(M), o]);
				else if (m === 'action') {
					let B = new URL(i.url),
						w = B.pathname + B.search;
					throw kt(405, { method: i.method, pathname: w, routeId: r.route.id });
				} else return { type: 'data', result: void 0 };
			}
		else if (N) y = await R(N);
		else {
			let M = new URL(i.url),
				B = M.pathname + M.search;
			throw kt(404, { pathname: B });
		}
	} catch (N) {
		return { type: 'error', result: N };
	} finally {
		b && i.signal.removeEventListener('abort', b);
	}
	return y;
}
async function w0(i) {
	let { result: r, type: f } = i;
	if (ym(r)) {
		let o;
		try {
			let s = r.headers.get('Content-Type');
			s && /\bapplication\/json\b/.test(s)
				? r.body == null
					? (o = null)
					: (o = await r.json())
				: (o = await r.text());
		} catch (s) {
			return { type: 'error', error: s };
		}
		return f === 'error'
			? {
					type: 'error',
					error: new nr(r.status, r.statusText, o),
					statusCode: r.status,
					headers: r.headers,
			  }
			: { type: 'data', data: o, statusCode: r.status, headers: r.headers };
	}
	return f === 'error'
		? Wh(r)
			? r.data instanceof Error
				? {
						type: 'error',
						error: r.data,
						statusCode: r.init?.status,
						headers: r.init?.headers ? new Headers(r.init.headers) : void 0,
				  }
				: {
						type: 'error',
						error: new nr(r.init?.status || 500, void 0, r.data),
						statusCode: Cu(r) ? r.status : void 0,
						headers: r.init?.headers ? new Headers(r.init.headers) : void 0,
				  }
			: { type: 'error', error: r, statusCode: Cu(r) ? r.status : void 0 }
		: Wh(r)
		? {
				type: 'data',
				data: r.data,
				statusCode: r.init?.status,
				headers: r.init?.headers ? new Headers(r.init.headers) : void 0,
		  }
		: { type: 'data', data: r };
}
function H0(i, r, f, o, s) {
	let h = i.headers.get('Location');
	if (
		(Ae(
			h,
			'Redirects returned/thrown from loaders/actions must have a Location header'
		),
		!Lf.test(h))
	) {
		let y = o.slice(0, o.findIndex((b) => b.route.id === f) + 1);
		(h = zf(new URL(r.url), y, s, h)), i.headers.set('Location', h);
	}
	return i;
}
function Vh(i, r, f) {
	if (Lf.test(i)) {
		let o = i,
			s = o.startsWith('//') ? new URL(r.protocol + o) : new URL(o),
			h = Wt(s.pathname, f) != null;
		if (s.origin === r.origin && h) return s.pathname + s.search + s.hash;
	}
	return i;
}
function Rn(i, r, f, o) {
	let s = i.createURL(vm(r)).toString(),
		h = { signal: f };
	if (o && qt(o.formMethod)) {
		let { formMethod: y, formEncType: b } = o;
		(h.method = y.toUpperCase()),
			b === 'application/json'
				? ((h.headers = new Headers({ 'Content-Type': b })),
				  (h.body = JSON.stringify(o.json)))
				: b === 'text/plain'
				? (h.body = o.text)
				: b === 'application/x-www-form-urlencoded' && o.formData
				? (h.body = Uf(o.formData))
				: (h.body = o.formData);
	}
	return new Request(s, h);
}
function Uf(i) {
	let r = new URLSearchParams();
	for (let [f, o] of i.entries())
		r.append(f, typeof o == 'string' ? o : o.name);
	return r;
}
function Zh(i) {
	let r = new FormData();
	for (let [f, o] of i.entries()) r.append(f, o);
	return r;
}
function L0(i, r, f, o = !1, s = !1) {
	let h = {},
		y = null,
		b,
		v = !1,
		m = {},
		R = f && Bt(f[1]) ? f[1].error : void 0;
	return (
		i.forEach((N) => {
			if (!(N.route.id in r)) return;
			let M = N.route.id,
				B = r[M];
			if (
				(Ae(!Ha(B), 'Cannot handle redirect results in processLoaderData'),
				Bt(B))
			) {
				let w = B.error;
				if ((R !== void 0 && ((w = R), (R = void 0)), (y = y || {}), s))
					y[M] = w;
				else {
					let Z = wa(i, M);
					y[Z.route.id] == null && (y[Z.route.id] = w);
				}
				o || (h[M] = fm),
					v || ((v = !0), (b = Cu(B.error) ? B.error.status : 500)),
					B.headers && (m[M] = B.headers);
			} else
				(h[M] = B.data),
					B.statusCode && B.statusCode !== 200 && !v && (b = B.statusCode),
					B.headers && (m[M] = B.headers);
		}),
		R !== void 0 && f && ((y = { [f[0]]: R }), f[2] && (h[f[2]] = void 0)),
		{ loaderData: h, errors: y, statusCode: b || 200, loaderHeaders: m }
	);
}
function Kh(i, r, f, o, s, h) {
	let { loaderData: y, errors: b } = L0(r, f, o);
	return (
		s
			.filter((v) => !v.matches || v.matches.some((m) => m.shouldLoad))
			.forEach((v) => {
				let { key: m, match: R, controller: N } = v,
					M = h[m];
				if (
					(Ae(M, 'Did not find corresponding fetcher result'),
					!(N && N.signal.aborted))
				)
					if (Bt(M)) {
						let B = wa(i.matches, R?.route.id);
						(b && b[B.route.id]) || (b = { ...b, [B.route.id]: M.error }),
							i.fetchers.delete(m);
					} else if (Ha(M)) Ae(!1, 'Unhandled fetcher revalidation redirect');
					else {
						let B = ra(M.data);
						i.fetchers.set(m, B);
					}
			}),
		{ loaderData: y, errors: b }
	);
}
function Jh(i, r, f, o) {
	let s = Object.entries(r)
		.filter(([, h]) => h !== fm)
		.reduce((h, [y, b]) => ((h[y] = b), h), {});
	for (let h of f) {
		let y = h.route.id;
		if (
			(!r.hasOwnProperty(y) &&
				i.hasOwnProperty(y) &&
				h.route.loader &&
				(s[y] = i[y]),
			o && o.hasOwnProperty(y))
		)
			break;
	}
	return s;
}
function $h(i) {
	return i
		? Bt(i[1])
			? { actionData: {} }
			: { actionData: { [i[0]]: i[1].data } }
		: {};
}
function wa(i, r) {
	return (
		(r ? i.slice(0, i.findIndex((o) => o.route.id === r) + 1) : [...i])
			.reverse()
			.find((o) => o.route.hasErrorBoundary === !0) || i[0]
	);
}
function kh(i) {
	let r =
		i.length === 1
			? i[0]
			: i.find((f) => f.index || !f.path || f.path === '/') || {
					id: '__shim-error-route__',
			  };
	return {
		matches: [{ params: {}, pathname: '', pathnameBase: '', route: r }],
		route: r,
	};
}
function kt(
	i,
	{ pathname: r, routeId: f, method: o, type: s, message: h } = {}
) {
	let y = 'Unknown Server Error',
		b = 'Unknown @remix-run/router error';
	return (
		i === 400
			? ((y = 'Bad Request'),
			  o && r && f
					? (b = `You made a ${o} request to "${r}" but did not provide a \`loader\` for route "${f}", so there is no way to handle the request.`)
					: s === 'invalid-body' && (b = 'Unable to encode submission body'))
			: i === 403
			? ((y = 'Forbidden'), (b = `Route "${f}" does not match URL "${r}"`))
			: i === 404
			? ((y = 'Not Found'), (b = `No route matches URL "${r}"`))
			: i === 405 &&
			  ((y = 'Method Not Allowed'),
			  o && r && f
					? (b = `You made a ${o.toUpperCase()} request to "${r}" but did not provide an \`action\` for route "${f}", so there is no way to handle the request.`)
					: o && (b = `Invalid request method "${o.toUpperCase()}"`)),
		new nr(i || 500, y, new Error(b), !0)
	);
}
function Fi(i) {
	let r = Object.entries(i);
	for (let f = r.length - 1; f >= 0; f--) {
		let [o, s] = r[f];
		if (Ha(s)) return { key: o, result: s };
	}
}
function vm(i) {
	let r = typeof i == 'string' ? oa(i) : i;
	return fa({ ...r, hash: '' });
}
function B0(i, r) {
	return i.pathname !== r.pathname || i.search !== r.search
		? !1
		: i.hash === ''
		? r.hash !== ''
		: i.hash === r.hash
		? !0
		: r.hash !== '';
}
function q0(i) {
	return ym(i.result) && R0.has(i.result.status);
}
function Bt(i) {
	return i.type === 'error';
}
function Ha(i) {
	return (i && i.type) === 'redirect';
}
function Wh(i) {
	return (
		typeof i == 'object' &&
		i != null &&
		'type' in i &&
		'data' in i &&
		'init' in i &&
		i.type === 'DataWithResponseInit'
	);
}
function ym(i) {
	return (
		i != null &&
		typeof i.status == 'number' &&
		typeof i.statusText == 'string' &&
		typeof i.headers == 'object' &&
		typeof i.body < 'u'
	);
}
function Y0(i) {
	return E0.has(i.toUpperCase());
}
function qt(i) {
	return b0.has(i.toUpperCase());
}
function Bf(i) {
	return new URLSearchParams(i).getAll('index').some((r) => r === '');
}
function _u(i, r) {
	let f = typeof r == 'string' ? oa(r).search : r.search;
	if (i[i.length - 1].route.index && Bf(f || '')) return i[i.length - 1];
	let o = im(i);
	return o[o.length - 1];
}
function Fh(i) {
	let {
		formMethod: r,
		formAction: f,
		formEncType: o,
		text: s,
		formData: h,
		json: y,
	} = i;
	if (!(!r || !f || !o)) {
		if (s != null)
			return {
				formMethod: r,
				formAction: f,
				formEncType: o,
				formData: void 0,
				json: void 0,
				text: s,
			};
		if (h != null)
			return {
				formMethod: r,
				formAction: f,
				formEncType: o,
				formData: h,
				json: void 0,
				text: void 0,
			};
		if (y !== void 0)
			return {
				formMethod: r,
				formAction: f,
				formEncType: o,
				formData: void 0,
				json: y,
				text: void 0,
			};
	}
}
function Df(i, r) {
	return r
		? {
				state: 'loading',
				location: i,
				formMethod: r.formMethod,
				formAction: r.formAction,
				formEncType: r.formEncType,
				formData: r.formData,
				json: r.json,
				text: r.text,
		  }
		: {
				state: 'loading',
				location: i,
				formMethod: void 0,
				formAction: void 0,
				formEncType: void 0,
				formData: void 0,
				json: void 0,
				text: void 0,
		  };
}
function j0(i, r) {
	return {
		state: 'submitting',
		location: i,
		formMethod: r.formMethod,
		formAction: r.formAction,
		formEncType: r.formEncType,
		formData: r.formData,
		json: r.json,
		text: r.text,
	};
}
function Au(i, r) {
	return i
		? {
				state: 'loading',
				formMethod: i.formMethod,
				formAction: i.formAction,
				formEncType: i.formEncType,
				formData: i.formData,
				json: i.json,
				text: i.text,
				data: r,
		  }
		: {
				state: 'loading',
				formMethod: void 0,
				formAction: void 0,
				formEncType: void 0,
				formData: void 0,
				json: void 0,
				text: void 0,
				data: r,
		  };
}
function G0(i, r) {
	return {
		state: 'submitting',
		formMethod: i.formMethod,
		formAction: i.formAction,
		formEncType: i.formEncType,
		formData: i.formData,
		json: i.json,
		text: i.text,
		data: r ? r.data : void 0,
	};
}
function ra(i) {
	return {
		state: 'idle',
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
		data: i,
	};
}
function X0(i, r) {
	try {
		let f = i.sessionStorage.getItem(cm);
		if (f) {
			let o = JSON.parse(f);
			for (let [s, h] of Object.entries(o || {}))
				h && Array.isArray(h) && r.set(s, new Set(h || []));
		}
	} catch {}
}
function Q0(i, r) {
	if (r.size > 0) {
		let f = {};
		for (let [o, s] of r) f[o] = [...s];
		try {
			i.sessionStorage.setItem(cm, JSON.stringify(f));
		} catch (o) {
			ut(
				!1,
				`Failed to save applied view transitions in sessionStorage (${o}).`
			);
		}
	}
}
function V0() {
	let i,
		r,
		f = new Promise((o, s) => {
			(i = async (h) => {
				o(h);
				try {
					await f;
				} catch {}
			}),
				(r = async (h) => {
					s(h);
					try {
						await f;
					} catch {}
				});
		});
	return { promise: f, resolve: i, reject: r };
}
var La = H.createContext(null);
La.displayName = 'DataRouter';
var Nu = H.createContext(null);
Nu.displayName = 'DataRouterState';
var qf = H.createContext({ isTransitioning: !1 });
qf.displayName = 'ViewTransition';
var gm = H.createContext(new Map());
gm.displayName = 'Fetchers';
var Z0 = H.createContext(null);
Z0.displayName = 'Await';
var ml = H.createContext(null);
ml.displayName = 'Navigation';
var ir = H.createContext(null);
ir.displayName = 'Location';
var Cl = H.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Cl.displayName = 'Route';
var Yf = H.createContext(null);
Yf.displayName = 'RouteError';
function K0(i, { relative: r } = {}) {
	Ae(
		wu(),
		'useHref() may be used only in the context of a <Router> component.'
	);
	let { basename: f, navigator: o } = H.useContext(ml),
		{ hash: s, pathname: h, search: y } = Hu(i, { relative: r }),
		b = h;
	return (
		f !== '/' && (b = h === '/' ? f : hl([f, h])),
		o.createHref({ pathname: b, search: y, hash: s })
	);
}
function wu() {
	return H.useContext(ir) != null;
}
function Ba() {
	return (
		Ae(
			wu(),
			'useLocation() may be used only in the context of a <Router> component.'
		),
		H.useContext(ir).location
	);
}
var pm =
	'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function bm(i) {
	H.useContext(ml).static || H.useLayoutEffect(i);
}
function J0() {
	let { isDataRoute: i } = H.useContext(Cl);
	return i ? ig() : $0();
}
function $0() {
	Ae(
		wu(),
		'useNavigate() may be used only in the context of a <Router> component.'
	);
	let i = H.useContext(La),
		{ basename: r, navigator: f } = H.useContext(ml),
		{ matches: o } = H.useContext(Cl),
		{ pathname: s } = Ba(),
		h = JSON.stringify(wf(o)),
		y = H.useRef(!1);
	return (
		bm(() => {
			y.current = !0;
		}),
		H.useCallback(
			(v, m = {}) => {
				if ((ut(y.current, pm), !y.current)) return;
				if (typeof v == 'number') {
					f.go(v);
					return;
				}
				let R = Hf(v, JSON.parse(h), s, m.relative === 'path');
				i == null &&
					r !== '/' &&
					(R.pathname = R.pathname === '/' ? r : hl([r, R.pathname])),
					(m.replace ? f.replace : f.push)(R, m.state, m);
			},
			[r, f, h, s, i]
		)
	);
}
H.createContext(null);
function Hu(i, { relative: r } = {}) {
	let { matches: f } = H.useContext(Cl),
		{ pathname: o } = Ba(),
		s = JSON.stringify(wf(f));
	return H.useMemo(() => Hf(i, JSON.parse(s), o, r === 'path'), [i, s, o, r]);
}
function k0(i, r, f, o) {
	Ae(
		wu(),
		'useRoutes() may be used only in the context of a <Router> component.'
	);
	let { navigator: s } = H.useContext(ml),
		{ matches: h } = H.useContext(Cl),
		y = h[h.length - 1],
		b = y ? y.params : {},
		v = y ? y.pathname : '/',
		m = y ? y.pathnameBase : '/',
		R = y && y.route;
	{
		let q = (R && R.path) || '';
		Sm(
			v,
			!R || q.endsWith('*') || q.endsWith('*?'),
			`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${
				q === '/' ? '*' : `${q}/*`
			}">.`
		);
	}
	let N = Ba(),
		M;
	M = N;
	let B = M.pathname || '/',
		w = B;
	if (m !== '/') {
		let q = m.replace(/^\//, '').split('/');
		w = '/' + B.replace(/^\//, '').split('/').slice(q.length).join('/');
	}
	let Z = ca(i, { pathname: w });
	return (
		ut(
			R || Z != null,
			`No routes matched location "${M.pathname}${M.search}${M.hash}" `
		),
		ut(
			Z == null ||
				Z[Z.length - 1].route.element !== void 0 ||
				Z[Z.length - 1].route.Component !== void 0 ||
				Z[Z.length - 1].route.lazy !== void 0,
			`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
		),
		eg(
			Z &&
				Z.map((q) =>
					Object.assign({}, q, {
						params: Object.assign({}, b, q.params),
						pathname: hl([
							m,
							s.encodeLocation
								? s.encodeLocation(q.pathname).pathname
								: q.pathname,
						]),
						pathnameBase:
							q.pathnameBase === '/'
								? m
								: hl([
										m,
										s.encodeLocation
											? s.encodeLocation(q.pathnameBase).pathname
											: q.pathnameBase,
								  ]),
					})
				),
			h,
			f,
			o
		)
	);
}
function W0() {
	let i = ug(),
		r = Cu(i)
			? `${i.status} ${i.statusText}`
			: i instanceof Error
			? i.message
			: JSON.stringify(i),
		f = i instanceof Error ? i.stack : null,
		o = 'rgba(200,200,200, 0.5)',
		s = { padding: '0.5rem', backgroundColor: o },
		h = { padding: '2px 4px', backgroundColor: o },
		y = null;
	return (
		console.error('Error handled by React Router default ErrorBoundary:', i),
		(y = H.createElement(
			H.Fragment,
			null,
			H.createElement('p', null, '💿 Hey developer 👋'),
			H.createElement(
				'p',
				null,
				'You can provide a way better UX than this when your app throws errors by providing your own ',
				H.createElement('code', { style: h }, 'ErrorBoundary'),
				' or',
				' ',
				H.createElement('code', { style: h }, 'errorElement'),
				' prop on your route.'
			)
		)),
		H.createElement(
			H.Fragment,
			null,
			H.createElement('h2', null, 'Unexpected Application Error!'),
			H.createElement('h3', { style: { fontStyle: 'italic' } }, r),
			f ? H.createElement('pre', { style: s }, f) : null,
			y
		)
	);
}
var F0 = H.createElement(W0, null),
	P0 = class extends H.Component {
		constructor(i) {
			super(i),
				(this.state = {
					location: i.location,
					revalidation: i.revalidation,
					error: i.error,
				});
		}
		static getDerivedStateFromError(i) {
			return { error: i };
		}
		static getDerivedStateFromProps(i, r) {
			return r.location !== i.location ||
				(r.revalidation !== 'idle' && i.revalidation === 'idle')
				? { error: i.error, location: i.location, revalidation: i.revalidation }
				: {
						error: i.error !== void 0 ? i.error : r.error,
						location: r.location,
						revalidation: i.revalidation || r.revalidation,
				  };
		}
		componentDidCatch(i, r) {
			console.error(
				'React Router caught the following error during render',
				i,
				r
			);
		}
		render() {
			return this.state.error !== void 0
				? H.createElement(
						Cl.Provider,
						{ value: this.props.routeContext },
						H.createElement(Yf.Provider, {
							value: this.state.error,
							children: this.props.component,
						})
				  )
				: this.props.children;
		}
	};
function I0({ routeContext: i, match: r, children: f }) {
	let o = H.useContext(La);
	return (
		o &&
			o.static &&
			o.staticContext &&
			(r.route.errorElement || r.route.ErrorBoundary) &&
			(o.staticContext._deepestRenderedBoundaryId = r.route.id),
		H.createElement(Cl.Provider, { value: i }, f)
	);
}
function eg(i, r = [], f = null, o = null) {
	if (i == null) {
		if (!f) return null;
		if (f.errors) i = f.matches;
		else if (r.length === 0 && !f.initialized && f.matches.length > 0)
			i = f.matches;
		else return null;
	}
	let s = i,
		h = f?.errors;
	if (h != null) {
		let v = s.findIndex((m) => m.route.id && h?.[m.route.id] !== void 0);
		Ae(
			v >= 0,
			`Could not find a matching route for errors on route IDs: ${Object.keys(
				h
			).join(',')}`
		),
			(s = s.slice(0, Math.min(s.length, v + 1)));
	}
	let y = !1,
		b = -1;
	if (f)
		for (let v = 0; v < s.length; v++) {
			let m = s[v];
			if (
				((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (b = v),
				m.route.id)
			) {
				let { loaderData: R, errors: N } = f,
					M =
						m.route.loader &&
						!R.hasOwnProperty(m.route.id) &&
						(!N || N[m.route.id] === void 0);
				if (m.route.lazy || M) {
					(y = !0), b >= 0 ? (s = s.slice(0, b + 1)) : (s = [s[0]]);
					break;
				}
			}
		}
	return s.reduceRight((v, m, R) => {
		let N,
			M = !1,
			B = null,
			w = null;
		f &&
			((N = h && m.route.id ? h[m.route.id] : void 0),
			(B = m.route.errorElement || F0),
			y &&
				(b < 0 && R === 0
					? (Sm(
							'route-fallback',
							!1,
							'No `HydrateFallback` element provided to render during initial hydration'
					  ),
					  (M = !0),
					  (w = null))
					: b === R &&
					  ((M = !0), (w = m.route.hydrateFallbackElement || null))));
		let Z = r.concat(s.slice(0, R + 1)),
			$ = () => {
				let q;
				return (
					N
						? (q = B)
						: M
						? (q = w)
						: m.route.Component
						? (q = H.createElement(m.route.Component, null))
						: m.route.element
						? (q = m.route.element)
						: (q = v),
					H.createElement(I0, {
						match: m,
						routeContext: { outlet: v, matches: Z, isDataRoute: f != null },
						children: q,
					})
				);
			};
		return f && (m.route.ErrorBoundary || m.route.errorElement || R === 0)
			? H.createElement(P0, {
					location: f.location,
					revalidation: f.revalidation,
					component: B,
					error: N,
					children: $(),
					routeContext: { outlet: null, matches: Z, isDataRoute: !0 },
			  })
			: $();
	}, null);
}
function jf(i) {
	return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function tg(i) {
	let r = H.useContext(La);
	return Ae(r, jf(i)), r;
}
function lg(i) {
	let r = H.useContext(Nu);
	return Ae(r, jf(i)), r;
}
function ag(i) {
	let r = H.useContext(Cl);
	return Ae(r, jf(i)), r;
}
function Gf(i) {
	let r = ag(i),
		f = r.matches[r.matches.length - 1];
	return (
		Ae(
			f.route.id,
			`${i} can only be used on routes that contain a unique "id"`
		),
		f.route.id
	);
}
function ng() {
	return Gf('useRouteId');
}
function ug() {
	let i = H.useContext(Yf),
		r = lg('useRouteError'),
		f = Gf('useRouteError');
	return i !== void 0 ? i : r.errors?.[f];
}
function ig() {
	let { router: i } = tg('useNavigate'),
		r = Gf('useNavigate'),
		f = H.useRef(!1);
	return (
		bm(() => {
			f.current = !0;
		}),
		H.useCallback(
			async (s, h = {}) => {
				ut(f.current, pm),
					f.current &&
						(typeof s == 'number'
							? i.navigate(s)
							: await i.navigate(s, { fromRouteId: r, ...h }));
			},
			[i, r]
		)
	);
}
var Ph = {};
function Sm(i, r, f) {
	!r && !Ph[i] && ((Ph[i] = !0), ut(!1, f));
}
var Ih = {};
function em(i, r) {
	!i && !Ih[r] && ((Ih[r] = !0), console.warn(r));
}
function rg(i) {
	let r = {
		hasErrorBoundary:
			i.hasErrorBoundary || i.ErrorBoundary != null || i.errorElement != null,
	};
	return (
		i.Component &&
			(i.element &&
				ut(
					!1,
					'You should not include both `Component` and `element` on your route - `Component` will be used.'
				),
			Object.assign(r, {
				element: H.createElement(i.Component),
				Component: void 0,
			})),
		i.HydrateFallback &&
			(i.hydrateFallbackElement &&
				ut(
					!1,
					'You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used.'
				),
			Object.assign(r, {
				hydrateFallbackElement: H.createElement(i.HydrateFallback),
				HydrateFallback: void 0,
			})),
		i.ErrorBoundary &&
			(i.errorElement &&
				ut(
					!1,
					'You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used.'
				),
			Object.assign(r, {
				errorElement: H.createElement(i.ErrorBoundary),
				ErrorBoundary: void 0,
			})),
		r
	);
}
var cg = ['HydrateFallback', 'hydrateFallbackElement'],
	fg = class {
		constructor() {
			(this.status = 'pending'),
				(this.promise = new Promise((i, r) => {
					(this.resolve = (f) => {
						this.status === 'pending' && ((this.status = 'resolved'), i(f));
					}),
						(this.reject = (f) => {
							this.status === 'pending' && ((this.status = 'rejected'), r(f));
						});
				}));
		}
	};
function og({ router: i, flushSync: r }) {
	let [f, o] = H.useState(i.state),
		[s, h] = H.useState(),
		[y, b] = H.useState({ isTransitioning: !1 }),
		[v, m] = H.useState(),
		[R, N] = H.useState(),
		[M, B] = H.useState(),
		w = H.useRef(new Map()),
		Z = H.useCallback(
			(k, { deletedFetchers: he, flushSync: W, viewTransitionOpts: x }) => {
				k.fetchers.forEach((pe, me) => {
					pe.data !== void 0 && w.current.set(me, pe.data);
				}),
					he.forEach((pe) => w.current.delete(pe)),
					em(
						W === !1 || r != null,
						'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.'
					);
				let ye =
					i.window != null &&
					i.window.document != null &&
					typeof i.window.document.startViewTransition == 'function';
				if (
					(em(
						x == null || ye,
						'You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available.'
					),
					!x || !ye)
				) {
					r && W ? r(() => o(k)) : H.startTransition(() => o(k));
					return;
				}
				if (r && W) {
					r(() => {
						R && (v && v.resolve(), R.skipTransition()),
							b({
								isTransitioning: !0,
								flushSync: !0,
								currentLocation: x.currentLocation,
								nextLocation: x.nextLocation,
							});
					});
					let pe = i.window.document.startViewTransition(() => {
						r(() => o(k));
					});
					pe.finished.finally(() => {
						r(() => {
							m(void 0), N(void 0), h(void 0), b({ isTransitioning: !1 });
						});
					}),
						r(() => N(pe));
					return;
				}
				R
					? (v && v.resolve(),
					  R.skipTransition(),
					  B({
							state: k,
							currentLocation: x.currentLocation,
							nextLocation: x.nextLocation,
					  }))
					: (h(k),
					  b({
							isTransitioning: !0,
							flushSync: !1,
							currentLocation: x.currentLocation,
							nextLocation: x.nextLocation,
					  }));
			},
			[i.window, r, R, v]
		);
	H.useLayoutEffect(() => i.subscribe(Z), [i, Z]),
		H.useEffect(() => {
			y.isTransitioning && !y.flushSync && m(new fg());
		}, [y]),
		H.useEffect(() => {
			if (v && s && i.window) {
				let k = s,
					he = v.promise,
					W = i.window.document.startViewTransition(async () => {
						H.startTransition(() => o(k)), await he;
					});
				W.finished.finally(() => {
					m(void 0), N(void 0), h(void 0), b({ isTransitioning: !1 });
				}),
					N(W);
			}
		}, [s, v, i.window]),
		H.useEffect(() => {
			v && s && f.location.key === s.location.key && v.resolve();
		}, [v, R, f.location, s]),
		H.useEffect(() => {
			!y.isTransitioning &&
				M &&
				(h(M.state),
				b({
					isTransitioning: !0,
					flushSync: !1,
					currentLocation: M.currentLocation,
					nextLocation: M.nextLocation,
				}),
				B(void 0));
		}, [y.isTransitioning, M]);
	let $ = H.useMemo(
			() => ({
				createHref: i.createHref,
				encodeLocation: i.encodeLocation,
				go: (k) => i.navigate(k),
				push: (k, he, W) =>
					i.navigate(k, {
						state: he,
						preventScrollReset: W?.preventScrollReset,
					}),
				replace: (k, he, W) =>
					i.navigate(k, {
						replace: !0,
						state: he,
						preventScrollReset: W?.preventScrollReset,
					}),
			}),
			[i]
		),
		q = i.basename || '/',
		ue = H.useMemo(
			() => ({ router: i, navigator: $, static: !1, basename: q }),
			[i, $, q]
		);
	return H.createElement(
		H.Fragment,
		null,
		H.createElement(
			La.Provider,
			{ value: ue },
			H.createElement(
				Nu.Provider,
				{ value: f },
				H.createElement(
					gm.Provider,
					{ value: w.current },
					H.createElement(
						qf.Provider,
						{ value: y },
						H.createElement(
							hg,
							{
								basename: q,
								location: f.location,
								navigationType: f.historyAction,
								navigator: $,
							},
							H.createElement(sg, {
								routes: i.routes,
								future: i.future,
								state: f,
							})
						)
					)
				)
			)
		),
		null
	);
}
var sg = H.memo(dg);
function dg({ routes: i, future: r, state: f }) {
	return k0(i, void 0, f, r);
}
function hg({
	basename: i = '/',
	children: r = null,
	location: f,
	navigationType: o = 'POP',
	navigator: s,
	static: h = !1,
}) {
	Ae(
		!wu(),
		'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
	);
	let y = i.replace(/^\/*/, '/'),
		b = H.useMemo(
			() => ({ basename: y, navigator: s, static: h, future: {} }),
			[y, s, h]
		);
	typeof f == 'string' && (f = oa(f));
	let {
			pathname: v = '/',
			search: m = '',
			hash: R = '',
			state: N = null,
			key: M = 'default',
		} = f,
		B = H.useMemo(() => {
			let w = Wt(v, y);
			return w == null
				? null
				: {
						location: { pathname: w, search: m, hash: R, state: N, key: M },
						navigationType: o,
				  };
		}, [y, v, m, R, N, M, o]);
	return (
		ut(
			B != null,
			`<Router basename="${y}"> is not able to match the URL "${v}${m}${R}" because it does not start with the basename, so the <Router> won't render anything.`
		),
		B == null
			? null
			: H.createElement(
					ml.Provider,
					{ value: b },
					H.createElement(ir.Provider, { children: r, value: B })
			  )
	);
}
var er = 'get',
	tr = 'application/x-www-form-urlencoded';
function rr(i) {
	return i != null && typeof i.tagName == 'string';
}
function mg(i) {
	return rr(i) && i.tagName.toLowerCase() === 'button';
}
function vg(i) {
	return rr(i) && i.tagName.toLowerCase() === 'form';
}
function yg(i) {
	return rr(i) && i.tagName.toLowerCase() === 'input';
}
function gg(i) {
	return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey);
}
function pg(i, r) {
	return i.button === 0 && (!r || r === '_self') && !gg(i);
}
var Pi = null;
function bg() {
	if (Pi === null)
		try {
			new FormData(document.createElement('form'), 0), (Pi = !1);
		} catch {
			Pi = !0;
		}
	return Pi;
}
var Sg = new Set([
	'application/x-www-form-urlencoded',
	'multipart/form-data',
	'text/plain',
]);
function Af(i) {
	return i != null && !Sg.has(i)
		? (ut(
				!1,
				`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${tr}"`
		  ),
		  null)
		: i;
}
function Eg(i, r) {
	let f, o, s, h, y;
	if (vg(i)) {
		let b = i.getAttribute('action');
		(o = b ? Wt(b, r) : null),
			(f = i.getAttribute('method') || er),
			(s = Af(i.getAttribute('enctype')) || tr),
			(h = new FormData(i));
	} else if (mg(i) || (yg(i) && (i.type === 'submit' || i.type === 'image'))) {
		let b = i.form;
		if (b == null)
			throw new Error(
				'Cannot submit a <button> or <input type="submit"> without a <form>'
			);
		let v = i.getAttribute('formaction') || b.getAttribute('action');
		if (
			((o = v ? Wt(v, r) : null),
			(f = i.getAttribute('formmethod') || b.getAttribute('method') || er),
			(s =
				Af(i.getAttribute('formenctype')) ||
				Af(b.getAttribute('enctype')) ||
				tr),
			(h = new FormData(b, i)),
			!bg())
		) {
			let { name: m, type: R, value: N } = i;
			if (R === 'image') {
				let M = m ? `${m}.` : '';
				h.append(`${M}x`, '0'), h.append(`${M}y`, '0');
			} else m && h.append(m, N);
		}
	} else {
		if (rr(i))
			throw new Error(
				'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
			);
		(f = er), (o = null), (s = tr), (y = i);
	}
	return (
		h && s === 'text/plain' && ((y = h), (h = void 0)),
		{ action: o, method: f.toLowerCase(), encType: s, formData: h, body: y }
	);
}
function Xf(i, r) {
	if (i === !1 || i === null || typeof i > 'u') throw new Error(r);
}
async function Rg(i, r) {
	if (i.id in r) return r[i.id];
	try {
		let f = await import(i.module);
		return (r[i.id] = f), f;
	} catch (f) {
		return (
			console.error(
				`Error loading route module \`${i.module}\`, reloading page...`
			),
			console.error(f),
			window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
			window.location.reload(),
			new Promise(() => {})
		);
	}
}
function Tg(i) {
	return i == null
		? !1
		: i.href == null
		? i.rel === 'preload' &&
		  typeof i.imageSrcSet == 'string' &&
		  typeof i.imageSizes == 'string'
		: typeof i.rel == 'string' && typeof i.href == 'string';
}
async function Mg(i, r, f) {
	let o = await Promise.all(
		i.map(async (s) => {
			let h = r.routes[s.route.id];
			if (h) {
				let y = await Rg(h, f);
				return y.links ? y.links() : [];
			}
			return [];
		})
	);
	return Og(
		o
			.flat(1)
			.filter(Tg)
			.filter((s) => s.rel === 'stylesheet' || s.rel === 'preload')
			.map((s) =>
				s.rel === 'stylesheet'
					? { ...s, rel: 'prefetch', as: 'style' }
					: { ...s, rel: 'prefetch' }
			)
	);
}
function tm(i, r, f, o, s, h) {
	let y = (v, m) => (f[m] ? v.route.id !== f[m].route.id : !0),
		b = (v, m) =>
			f[m].pathname !== v.pathname ||
			(f[m].route.path?.endsWith('*') && f[m].params['*'] !== v.params['*']);
	return h === 'assets'
		? r.filter((v, m) => y(v, m) || b(v, m))
		: h === 'data'
		? r.filter((v, m) => {
				let R = o.routes[v.route.id];
				if (!R || !R.hasLoader) return !1;
				if (y(v, m) || b(v, m)) return !0;
				if (v.route.shouldRevalidate) {
					let N = v.route.shouldRevalidate({
						currentUrl: new URL(s.pathname + s.search + s.hash, window.origin),
						currentParams: f[0]?.params || {},
						nextUrl: new URL(i, window.origin),
						nextParams: v.params,
						defaultShouldRevalidate: !0,
					});
					if (typeof N == 'boolean') return N;
				}
				return !0;
		  })
		: [];
}
function Dg(i, r, { includeHydrateFallback: f } = {}) {
	return Ag(
		i
			.map((o) => {
				let s = r.routes[o.route.id];
				if (!s) return [];
				let h = [s.module];
				return (
					s.clientActionModule && (h = h.concat(s.clientActionModule)),
					s.clientLoaderModule && (h = h.concat(s.clientLoaderModule)),
					f &&
						s.hydrateFallbackModule &&
						(h = h.concat(s.hydrateFallbackModule)),
					s.imports && (h = h.concat(s.imports)),
					h
				);
			})
			.flat(1)
	);
}
function Ag(i) {
	return [...new Set(i)];
}
function zg(i) {
	let r = {},
		f = Object.keys(i).sort();
	for (let o of f) r[o] = i[o];
	return r;
}
function Og(i, r) {
	let f = new Set();
	return (
		new Set(r),
		i.reduce((o, s) => {
			let h = JSON.stringify(zg(s));
			return f.has(h) || (f.add(h), o.push({ key: h, link: s })), o;
		}, [])
	);
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
var _g = new Set([100, 101, 204, 205]);
function Ug(i, r) {
	let f =
		typeof i == 'string'
			? new URL(
					i,
					typeof window > 'u' ? 'server://singlefetch/' : window.location.origin
			  )
			: i;
	return (
		f.pathname === '/'
			? (f.pathname = '_root.data')
			: r && Wt(f.pathname, r) === '/'
			? (f.pathname = `${r.replace(/\/$/, '')}/_root.data`)
			: (f.pathname = `${f.pathname.replace(/\/$/, '')}.data`),
		f
	);
}
function Em() {
	let i = H.useContext(La);
	return (
		Xf(
			i,
			'You must render this element inside a <DataRouterContext.Provider> element'
		),
		i
	);
}
function xg() {
	let i = H.useContext(Nu);
	return (
		Xf(
			i,
			'You must render this element inside a <DataRouterStateContext.Provider> element'
		),
		i
	);
}
var Qf = H.createContext(void 0);
Qf.displayName = 'FrameworkContext';
function Rm() {
	let i = H.useContext(Qf);
	return (
		Xf(i, 'You must render this element inside a <HydratedRouter> element'), i
	);
}
function Cg(i, r) {
	let f = H.useContext(Qf),
		[o, s] = H.useState(!1),
		[h, y] = H.useState(!1),
		{
			onFocus: b,
			onBlur: v,
			onMouseEnter: m,
			onMouseLeave: R,
			onTouchStart: N,
		} = r,
		M = H.useRef(null);
	H.useEffect(() => {
		if ((i === 'render' && y(!0), i === 'viewport')) {
			let Z = (q) => {
					q.forEach((ue) => {
						y(ue.isIntersecting);
					});
				},
				$ = new IntersectionObserver(Z, { threshold: 0.5 });
			return (
				M.current && $.observe(M.current),
				() => {
					$.disconnect();
				}
			);
		}
	}, [i]),
		H.useEffect(() => {
			if (o) {
				let Z = setTimeout(() => {
					y(!0);
				}, 100);
				return () => {
					clearTimeout(Z);
				};
			}
		}, [o]);
	let B = () => {
			s(!0);
		},
		w = () => {
			s(!1), y(!1);
		};
	return f
		? i !== 'intent'
			? [h, M, {}]
			: [
					h,
					M,
					{
						onFocus: zu(b, B),
						onBlur: zu(v, w),
						onMouseEnter: zu(m, B),
						onMouseLeave: zu(R, w),
						onTouchStart: zu(N, B),
					},
			  ]
		: [!1, M, {}];
}
function zu(i, r) {
	return (f) => {
		i && i(f), f.defaultPrevented || r(f);
	};
}
function Ng({ page: i, ...r }) {
	let { router: f } = Em(),
		o = H.useMemo(() => ca(f.routes, i, f.basename), [f.routes, i, f.basename]);
	return o ? H.createElement(Hg, { page: i, matches: o, ...r }) : null;
}
function wg(i) {
	let { manifest: r, routeModules: f } = Rm(),
		[o, s] = H.useState([]);
	return (
		H.useEffect(() => {
			let h = !1;
			return (
				Mg(i, r, f).then((y) => {
					h || s(y);
				}),
				() => {
					h = !0;
				}
			);
		}, [i, r, f]),
		o
	);
}
function Hg({ page: i, matches: r, ...f }) {
	let o = Ba(),
		{ manifest: s, routeModules: h } = Rm(),
		{ basename: y } = Em(),
		{ loaderData: b, matches: v } = xg(),
		m = H.useMemo(() => tm(i, r, v, s, o, 'data'), [i, r, v, s, o]),
		R = H.useMemo(() => tm(i, r, v, s, o, 'assets'), [i, r, v, s, o]),
		N = H.useMemo(() => {
			if (i === o.pathname + o.search + o.hash) return [];
			let w = new Set(),
				Z = !1;
			if (
				(r.forEach((q) => {
					let ue = s.routes[q.route.id];
					!ue ||
						!ue.hasLoader ||
						((!m.some((k) => k.route.id === q.route.id) &&
							q.route.id in b &&
							h[q.route.id]?.shouldRevalidate) ||
						ue.hasClientLoader
							? (Z = !0)
							: w.add(q.route.id));
				}),
				w.size === 0)
			)
				return [];
			let $ = Ug(i, y);
			return (
				Z &&
					w.size > 0 &&
					$.searchParams.set(
						'_routes',
						r
							.filter((q) => w.has(q.route.id))
							.map((q) => q.route.id)
							.join(',')
					),
				[$.pathname + $.search]
			);
		}, [y, b, o, s, m, r, i, h]),
		M = H.useMemo(() => Dg(R, s), [R, s]),
		B = wg(R);
	return H.createElement(
		H.Fragment,
		null,
		N.map((w) =>
			H.createElement('link', {
				key: w,
				rel: 'prefetch',
				as: 'fetch',
				href: w,
				...f,
			})
		),
		M.map((w) =>
			H.createElement('link', { key: w, rel: 'modulepreload', href: w, ...f })
		),
		B.map(({ key: w, link: Z }) => H.createElement('link', { key: w, ...Z }))
	);
}
function Lg(...i) {
	return (r) => {
		i.forEach((f) => {
			typeof f == 'function' ? f(r) : f != null && (f.current = r);
		});
	};
}
var Tm =
	typeof window < 'u' &&
	typeof window.document < 'u' &&
	typeof window.document.createElement < 'u';
try {
	Tm && (window.__reactRouterVersion = '7.6.3');
} catch {}
function Bg(i, r) {
	return A0({
		basename: r?.basename,
		unstable_getContext: r?.unstable_getContext,
		future: r?.future,
		history: Jy({ window: r?.window }),
		hydrationData: qg(),
		routes: i,
		mapRouteProperties: rg,
		hydrationRouteProperties: cg,
		dataStrategy: r?.dataStrategy,
		patchRoutesOnNavigation: r?.patchRoutesOnNavigation,
		window: r?.window,
	}).initialize();
}
function qg() {
	let i = window?.__staticRouterHydrationData;
	return i && i.errors && (i = { ...i, errors: Yg(i.errors) }), i;
}
function Yg(i) {
	if (!i) return null;
	let r = Object.entries(i),
		f = {};
	for (let [o, s] of r)
		if (s && s.__type === 'RouteErrorResponse')
			f[o] = new nr(s.status, s.statusText, s.data, s.internal === !0);
		else if (s && s.__type === 'Error') {
			if (s.__subType) {
				let h = window[s.__subType];
				if (typeof h == 'function')
					try {
						let y = new h(s.message);
						(y.stack = ''), (f[o] = y);
					} catch {}
			}
			if (f[o] == null) {
				let h = new Error(s.message);
				(h.stack = ''), (f[o] = h);
			}
		} else f[o] = s;
	return f;
}
var Mm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	Uu = H.forwardRef(function (
		{
			onClick: r,
			discover: f = 'render',
			prefetch: o = 'none',
			relative: s,
			reloadDocument: h,
			replace: y,
			state: b,
			target: v,
			to: m,
			preventScrollReset: R,
			viewTransition: N,
			...M
		},
		B
	) {
		let { basename: w } = H.useContext(ml),
			Z = typeof m == 'string' && Mm.test(m),
			$,
			q = !1;
		if (typeof m == 'string' && Z && (($ = m), Tm))
			try {
				let me = new URL(window.location.href),
					Ve = m.startsWith('//') ? new URL(me.protocol + m) : new URL(m),
					et = Wt(Ve.pathname, w);
				Ve.origin === me.origin && et != null
					? (m = et + Ve.search + Ve.hash)
					: (q = !0);
			} catch {
				ut(
					!1,
					`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
				);
			}
		let ue = K0(m, { relative: s }),
			[k, he, W] = Cg(o, M),
			x = Qg(m, {
				replace: y,
				state: b,
				target: v,
				preventScrollReset: R,
				relative: s,
				viewTransition: N,
			});
		function ye(me) {
			r && r(me), me.defaultPrevented || x(me);
		}
		let pe = H.createElement('a', {
			...M,
			...W,
			href: $ || ue,
			onClick: q || h ? r : ye,
			ref: Lg(B, he),
			target: v,
			'data-discover': !Z && f === 'render' ? 'true' : void 0,
		});
		return k && !Z
			? H.createElement(H.Fragment, null, pe, H.createElement(Ng, { page: ue }))
			: pe;
	});
Uu.displayName = 'Link';
var jg = H.forwardRef(function (
	{
		'aria-current': r = 'page',
		caseSensitive: f = !1,
		className: o = '',
		end: s = !1,
		style: h,
		to: y,
		viewTransition: b,
		children: v,
		...m
	},
	R
) {
	let N = Hu(y, { relative: m.relative }),
		M = Ba(),
		B = H.useContext(Nu),
		{ navigator: w, basename: Z } = H.useContext(ml),
		$ = B != null && $g(N) && b === !0,
		q = w.encodeLocation ? w.encodeLocation(N).pathname : N.pathname,
		ue = M.pathname,
		k =
			B && B.navigation && B.navigation.location
				? B.navigation.location.pathname
				: null;
	f ||
		((ue = ue.toLowerCase()),
		(k = k ? k.toLowerCase() : null),
		(q = q.toLowerCase())),
		k && Z && (k = Wt(k, Z) || k);
	const he = q !== '/' && q.endsWith('/') ? q.length - 1 : q.length;
	let W = ue === q || (!s && ue.startsWith(q) && ue.charAt(he) === '/'),
		x =
			k != null &&
			(k === q || (!s && k.startsWith(q) && k.charAt(q.length) === '/')),
		ye = { isActive: W, isPending: x, isTransitioning: $ },
		pe = W ? r : void 0,
		me;
	typeof o == 'function'
		? (me = o(ye))
		: (me = [
				o,
				W ? 'active' : null,
				x ? 'pending' : null,
				$ ? 'transitioning' : null,
		  ]
				.filter(Boolean)
				.join(' '));
	let Ve = typeof h == 'function' ? h(ye) : h;
	return H.createElement(
		Uu,
		{
			...m,
			'aria-current': pe,
			className: me,
			ref: R,
			style: Ve,
			to: y,
			viewTransition: b,
		},
		typeof v == 'function' ? v(ye) : v
	);
});
jg.displayName = 'NavLink';
var Gg = H.forwardRef(
	(
		{
			discover: i = 'render',
			fetcherKey: r,
			navigate: f,
			reloadDocument: o,
			replace: s,
			state: h,
			method: y = er,
			action: b,
			onSubmit: v,
			relative: m,
			preventScrollReset: R,
			viewTransition: N,
			...M
		},
		B
	) => {
		let w = Kg(),
			Z = Jg(b, { relative: m }),
			$ = y.toLowerCase() === 'get' ? 'get' : 'post',
			q = typeof b == 'string' && Mm.test(b),
			ue = (k) => {
				if ((v && v(k), k.defaultPrevented)) return;
				k.preventDefault();
				let he = k.nativeEvent.submitter,
					W = he?.getAttribute('formmethod') || y;
				w(he || k.currentTarget, {
					fetcherKey: r,
					method: W,
					navigate: f,
					replace: s,
					state: h,
					relative: m,
					preventScrollReset: R,
					viewTransition: N,
				});
			};
		return H.createElement('form', {
			ref: B,
			method: $,
			action: Z,
			onSubmit: o ? v : ue,
			...M,
			'data-discover': !q && i === 'render' ? 'true' : void 0,
		});
	}
);
Gg.displayName = 'Form';
function Xg(i) {
	return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Dm(i) {
	let r = H.useContext(La);
	return Ae(r, Xg(i)), r;
}
function Qg(
	i,
	{
		target: r,
		replace: f,
		state: o,
		preventScrollReset: s,
		relative: h,
		viewTransition: y,
	} = {}
) {
	let b = J0(),
		v = Ba(),
		m = Hu(i, { relative: h });
	return H.useCallback(
		(R) => {
			if (pg(R, r)) {
				R.preventDefault();
				let N = f !== void 0 ? f : fa(v) === fa(m);
				b(i, {
					replace: N,
					state: o,
					preventScrollReset: s,
					relative: h,
					viewTransition: y,
				});
			}
		},
		[v, b, m, f, o, r, i, s, h, y]
	);
}
var Vg = 0,
	Zg = () => `__${String(++Vg)}__`;
function Kg() {
	let { router: i } = Dm('useSubmit'),
		{ basename: r } = H.useContext(ml),
		f = ng();
	return H.useCallback(
		async (o, s = {}) => {
			let { action: h, method: y, encType: b, formData: v, body: m } = Eg(o, r);
			if (s.navigate === !1) {
				let R = s.fetcherKey || Zg();
				await i.fetch(R, f, s.action || h, {
					preventScrollReset: s.preventScrollReset,
					formData: v,
					body: m,
					formMethod: s.method || y,
					formEncType: s.encType || b,
					flushSync: s.flushSync,
				});
			} else
				await i.navigate(s.action || h, {
					preventScrollReset: s.preventScrollReset,
					formData: v,
					body: m,
					formMethod: s.method || y,
					formEncType: s.encType || b,
					replace: s.replace,
					state: s.state,
					fromRouteId: f,
					flushSync: s.flushSync,
					viewTransition: s.viewTransition,
				});
		},
		[i, r, f]
	);
}
function Jg(i, { relative: r } = {}) {
	let { basename: f } = H.useContext(ml),
		o = H.useContext(Cl);
	Ae(o, 'useFormAction must be used inside a RouteContext');
	let [s] = o.matches.slice(-1),
		h = { ...Hu(i || '.', { relative: r }) },
		y = Ba();
	if (i == null) {
		h.search = y.search;
		let b = new URLSearchParams(h.search),
			v = b.getAll('index');
		if (v.some((R) => R === '')) {
			b.delete('index'),
				v.filter((N) => N).forEach((N) => b.append('index', N));
			let R = b.toString();
			h.search = R ? `?${R}` : '';
		}
	}
	return (
		(!i || i === '.') &&
			s.route.index &&
			(h.search = h.search ? h.search.replace(/^\?/, '?index&') : '?index'),
		f !== '/' && (h.pathname = h.pathname === '/' ? f : hl([f, h.pathname])),
		fa(h)
	);
}
function $g(i, r = {}) {
	let f = H.useContext(qf);
	Ae(
		f != null,
		"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
	);
	let { basename: o } = Dm('useViewTransitionState'),
		s = Hu(i, { relative: r.relative });
	if (!f.isTransitioning) return !1;
	let h = Wt(f.currentLocation.pathname, o) || f.currentLocation.pathname,
		y = Wt(f.nextLocation.pathname, o) || f.nextLocation.pathname;
	return ar(s.pathname, y) != null || ar(s.pathname, h) != null;
}
[..._g];
function kg() {
	return ia.jsxs('div', {
		children: [
			ia.jsxs('h1', { children: ['App Mode: ', 'staging'] }),
			ia.jsxs('div', {
				children: [
					ia.jsx(Uu, {
						style: { padding: 5 },
						to: '/react-memo',
						children: 'react-memo',
					}),
					ia.jsx(Uu, {
						style: { padding: 5 },
						to: '/use-memo',
						children: 'use-memo',
					}),
					ia.jsx(Uu, {
						style: { padding: 5 },
						to: '/use-callback',
						children: 'use-callback',
					}),
				],
			}),
			ia.jsx('p', {
				children: 'This is the home page of the React Memoisation App.',
			}),
		],
	});
}
const Wg = Nf.lazy(() => xf(() => import('./react.memo-DTJLq-tn.js'), [])),
	Fg = Nf.lazy(() => xf(() => import('./usememo.demo-BSBJVogG.js'), [])),
	Pg = Nf.lazy(() => xf(() => import('./usecallback.demo-BJEwXdgO.js'), [])),
	Ig = Bg([
		{ index: !0, Component: kg },
		{ path: 'react-memo', Component: Wg },
		{ path: 'use-memo', Component: Fg },
		{ path: 'use-callback', Component: Pg },
	]);
Qy.createRoot(document.getElementById('root')).render(
	ia.jsx(og, { router: Ig })
);
export { Nf as R, ia as j, H as r };
