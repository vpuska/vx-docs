//#region node_modules/@lit/reactive-element/css-tag.js
var e = globalThis, t = e.ShadowRoot && (e.ShadyCSS === void 0 || e.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, n = Symbol(), r = /* @__PURE__ */ new WeakMap(), i = class {
	constructor(e, t, r) {
		if (this._$cssResult$ = !0, r !== n) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
		this.cssText = e, this.t = t;
	}
	get styleSheet() {
		let e = this.o, n = this.t;
		if (t && e === void 0) {
			let t = n !== void 0 && n.length === 1;
			t && (e = r.get(n)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), t && r.set(n, e));
		}
		return e;
	}
	toString() {
		return this.cssText;
	}
}, a = (e) => new i(typeof e == "string" ? e : e + "", void 0, n), o = (e, ...t) => new i(e.length === 1 ? e[0] : t.reduce((t, n, r) => t + ((e) => {
	if (!0 === e._$cssResult$) return e.cssText;
	if (typeof e == "number") return e;
	throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
})(n) + e[r + 1], e[0]), e, n), s = (n, r) => {
	if (t) n.adoptedStyleSheets = r.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
	else for (let t of r) {
		let r = document.createElement("style"), i = e.litNonce;
		i !== void 0 && r.setAttribute("nonce", i), r.textContent = t.cssText, n.appendChild(r);
	}
}, c = t ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((e) => {
	let t = "";
	for (let n of e.cssRules) t += n.cssText;
	return a(t);
})(e) : e, { is: l, defineProperty: u, getOwnPropertyDescriptor: d, getOwnPropertyNames: ee, getOwnPropertySymbols: te, getPrototypeOf: ne } = Object, f = globalThis, re = f.trustedTypes, ie = re ? re.emptyScript : "", ae = f.reactiveElementPolyfillSupport, p = (e, t) => e, m = {
	toAttribute(e, t) {
		switch (t) {
			case Boolean:
				e = e ? ie : null;
				break;
			case Object:
			case Array: e = e == null ? e : JSON.stringify(e);
		}
		return e;
	},
	fromAttribute(e, t) {
		let n = e;
		switch (t) {
			case Boolean:
				n = e !== null;
				break;
			case Number:
				n = e === null ? null : Number(e);
				break;
			case Object:
			case Array: try {
				n = JSON.parse(e);
			} catch {
				n = null;
			}
		}
		return n;
	}
}, h = (e, t) => !l(e, t), oe = {
	attribute: !0,
	type: String,
	converter: m,
	reflect: !1,
	useDefault: !1,
	hasChanged: h
};
Symbol.metadata ??= Symbol("metadata"), f.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var g = class extends HTMLElement {
	static addInitializer(e) {
		this._$Ei(), (this.l ??= []).push(e);
	}
	static get observedAttributes() {
		return this.finalize(), this._$Eh && [...this._$Eh.keys()];
	}
	static createProperty(e, t = oe) {
		if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
			let n = Symbol(), r = this.getPropertyDescriptor(e, n, t);
			r !== void 0 && u(this.prototype, e, r);
		}
	}
	static getPropertyDescriptor(e, t, n) {
		let { get: r, set: i } = d(this.prototype, e) ?? {
			get() {
				return this[t];
			},
			set(e) {
				this[t] = e;
			}
		};
		return {
			get: r,
			set(t) {
				let a = r?.call(this);
				i?.call(this, t), this.requestUpdate(e, a, n);
			},
			configurable: !0,
			enumerable: !0
		};
	}
	static getPropertyOptions(e) {
		return this.elementProperties.get(e) ?? oe;
	}
	static _$Ei() {
		if (this.hasOwnProperty(p("elementProperties"))) return;
		let e = ne(this);
		e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
	}
	static finalize() {
		if (this.hasOwnProperty(p("finalized"))) return;
		if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(p("properties"))) {
			let e = this.properties, t = [...ee(e), ...te(e)];
			for (let n of t) this.createProperty(n, e[n]);
		}
		let e = this[Symbol.metadata];
		if (e !== null) {
			let t = litPropertyMetadata.get(e);
			if (t !== void 0) for (let [e, n] of t) this.elementProperties.set(e, n);
		}
		this._$Eh = /* @__PURE__ */ new Map();
		for (let [e, t] of this.elementProperties) {
			let n = this._$Eu(e, t);
			n !== void 0 && this._$Eh.set(n, e);
		}
		this.elementStyles = this.finalizeStyles(this.styles);
	}
	static finalizeStyles(e) {
		let t = [];
		if (Array.isArray(e)) {
			let n = new Set(e.flat(1 / 0).reverse());
			for (let e of n) t.unshift(c(e));
		} else e !== void 0 && t.push(c(e));
		return t;
	}
	static _$Eu(e, t) {
		let n = t.attribute;
		return !1 === n ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
	}
	constructor() {
		super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
	}
	_$Ev() {
		this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((e) => e(this));
	}
	addController(e) {
		(this._$EO ??= /* @__PURE__ */ new Set()).add(e), this.renderRoot !== void 0 && this.isConnected && e.hostConnected?.();
	}
	removeController(e) {
		this._$EO?.delete(e);
	}
	_$E_() {
		let e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
		for (let n of t.keys()) this.hasOwnProperty(n) && (e.set(n, this[n]), delete this[n]);
		e.size > 0 && (this._$Ep = e);
	}
	createRenderRoot() {
		let e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
		return s(e, this.constructor.elementStyles), e;
	}
	connectedCallback() {
		this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((e) => e.hostConnected?.());
	}
	enableUpdating(e) {}
	disconnectedCallback() {
		this._$EO?.forEach((e) => e.hostDisconnected?.());
	}
	attributeChangedCallback(e, t, n) {
		this._$AK(e, n);
	}
	_$ET(e, t) {
		let n = this.constructor.elementProperties.get(e), r = this.constructor._$Eu(e, n);
		if (r !== void 0 && !0 === n.reflect) {
			let i = (n.converter?.toAttribute === void 0 ? m : n.converter).toAttribute(t, n.type);
			this._$Em = e, i == null ? this.removeAttribute(r) : this.setAttribute(r, i), this._$Em = null;
		}
	}
	_$AK(e, t) {
		let n = this.constructor, r = n._$Eh.get(e);
		if (r !== void 0 && this._$Em !== r) {
			let e = n.getPropertyOptions(r), i = typeof e.converter == "function" ? { fromAttribute: e.converter } : e.converter?.fromAttribute === void 0 ? m : e.converter;
			this._$Em = r;
			let a = i.fromAttribute(t, e.type);
			this[r] = a ?? this._$Ej?.get(r) ?? a, this._$Em = null;
		}
	}
	requestUpdate(e, t, n, r = !1, i) {
		if (e !== void 0) {
			let a = this.constructor;
			if (!1 === r && (i = this[e]), n ??= a.getPropertyOptions(e), !((n.hasChanged ?? h)(i, t) || n.useDefault && n.reflect && i === this._$Ej?.get(e) && !this.hasAttribute(a._$Eu(e, n)))) return;
			this.C(e, t, n);
		}
		!1 === this.isUpdatePending && (this._$ES = this._$EP());
	}
	C(e, t, { useDefault: n, reflect: r, wrapped: i }, a) {
		n && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(e) && (this._$Ej.set(e, a ?? t ?? this[e]), !0 !== i || a !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), !0 === r && this._$Em !== e && (this._$Eq ??= /* @__PURE__ */ new Set()).add(e));
	}
	async _$EP() {
		this.isUpdatePending = !0;
		try {
			await this._$ES;
		} catch (e) {
			Promise.reject(e);
		}
		let e = this.scheduleUpdate();
		return e != null && await e, !this.isUpdatePending;
	}
	scheduleUpdate() {
		return this.performUpdate();
	}
	performUpdate() {
		if (!this.isUpdatePending) return;
		if (!this.hasUpdated) {
			if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
				for (let [e, t] of this._$Ep) this[e] = t;
				this._$Ep = void 0;
			}
			let e = this.constructor.elementProperties;
			if (e.size > 0) for (let [t, n] of e) {
				let { wrapped: e } = n, r = this[t];
				!0 !== e || this._$AL.has(t) || r === void 0 || this.C(t, void 0, n, r);
			}
		}
		let e = !1, t = this._$AL;
		try {
			e = this.shouldUpdate(t), e ? (this.willUpdate(t), this._$EO?.forEach((e) => e.hostUpdate?.()), this.update(t)) : this._$EM();
		} catch (t) {
			throw e = !1, this._$EM(), t;
		}
		e && this._$AE(t);
	}
	willUpdate(e) {}
	_$AE(e) {
		this._$EO?.forEach((e) => e.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
	}
	_$EM() {
		this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
	}
	get updateComplete() {
		return this.getUpdateComplete();
	}
	getUpdateComplete() {
		return this._$ES;
	}
	shouldUpdate(e) {
		return !0;
	}
	update(e) {
		this._$Eq &&= this._$Eq.forEach((e) => this._$ET(e, this[e])), this._$EM();
	}
	updated(e) {}
	firstUpdated(e) {}
};
g.elementStyles = [], g.shadowRootOptions = { mode: "open" }, g[p("elementProperties")] = /* @__PURE__ */ new Map(), g[p("finalized")] = /* @__PURE__ */ new Map(), ae?.({ ReactiveElement: g }), (f.reactiveElementVersions ??= []).push("2.1.2");
//#endregion
//#region node_modules/lit-html/lit-html.js
var se = globalThis, ce = (e) => e, _ = se.trustedTypes, le = _ ? _.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, v = "$lit$", y = `lit$${Math.random().toFixed(9).slice(2)}$`, b = "?" + y, ue = `<${b}>`, x = document, S = () => x.createComment(""), C = (e) => e === null || typeof e != "object" && typeof e != "function", w = Array.isArray, de = (e) => w(e) || typeof e?.[Symbol.iterator] == "function", T = "[ 	\n\f\r]", E = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, fe = /-->/g, pe = />/g, D = RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), me = /'/g, he = /"/g, ge = /^(?:script|style|textarea|title)$/i, O = ((e) => (t, ...n) => ({
	_$litType$: e,
	strings: t,
	values: n
}))(1), k = Symbol.for("lit-noChange"), A = Symbol.for("lit-nothing"), _e = /* @__PURE__ */ new WeakMap(), j = x.createTreeWalker(x, 129);
function ve(e, t) {
	if (!w(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
	return le === void 0 ? t : le.createHTML(t);
}
var ye = (e, t) => {
	let n = e.length - 1, r = [], i, a = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = E;
	for (let t = 0; t < n; t++) {
		let n = e[t], s, c, l = -1, u = 0;
		for (; u < n.length && (o.lastIndex = u, c = o.exec(n), c !== null);) u = o.lastIndex, o === E ? c[1] === "!--" ? o = fe : c[1] === void 0 ? c[2] === void 0 ? c[3] !== void 0 && (o = D) : (ge.test(c[2]) && (i = RegExp("</" + c[2], "g")), o = D) : o = pe : o === D ? c[0] === ">" ? (o = i ?? E, l = -1) : c[1] === void 0 ? l = -2 : (l = o.lastIndex - c[2].length, s = c[1], o = c[3] === void 0 ? D : c[3] === "\"" ? he : me) : o === he || o === me ? o = D : o === fe || o === pe ? o = E : (o = D, i = void 0);
		let d = o === D && e[t + 1].startsWith("/>") ? " " : "";
		a += o === E ? n + ue : l >= 0 ? (r.push(s), n.slice(0, l) + v + n.slice(l) + y + d) : n + y + (l === -2 ? t : d);
	}
	return [ve(e, a + (e[n] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
}, be = class e {
	constructor({ strings: t, _$litType$: n }, r) {
		let i;
		this.parts = [];
		let a = 0, o = 0, s = t.length - 1, c = this.parts, [l, u] = ye(t, n);
		if (this.el = e.createElement(l, r), j.currentNode = this.el.content, n === 2 || n === 3) {
			let e = this.el.content.firstChild;
			e.replaceWith(...e.childNodes);
		}
		for (; (i = j.nextNode()) !== null && c.length < s;) {
			if (i.nodeType === 1) {
				if (i.hasAttributes()) for (let e of i.getAttributeNames()) if (e.endsWith(v)) {
					let t = u[o++], n = i.getAttribute(e).split(y), r = /([.?@])?(.*)/.exec(t);
					c.push({
						type: 1,
						index: a,
						name: r[2],
						strings: n,
						ctor: r[1] === "." ? Se : r[1] === "?" ? Ce : r[1] === "@" ? we : P
					}), i.removeAttribute(e);
				} else e.startsWith(y) && (c.push({
					type: 6,
					index: a
				}), i.removeAttribute(e));
				if (ge.test(i.tagName)) {
					let e = i.textContent.split(y), t = e.length - 1;
					if (t > 0) {
						i.textContent = _ ? _.emptyScript : "";
						for (let n = 0; n < t; n++) i.append(e[n], S()), j.nextNode(), c.push({
							type: 2,
							index: ++a
						});
						i.append(e[t], S());
					}
				}
			} else if (i.nodeType === 8) {
				if (i.data === b) c.push({
					type: 2,
					index: a
				});
				else {
					let e = -1;
					for (; (e = i.data.indexOf(y, e + 1)) !== -1;) c.push({
						type: 7,
						index: a
					}), e += y.length - 1;
				}
			}
			a++;
		}
	}
	static createElement(e, t) {
		let n = x.createElement("template");
		return n.innerHTML = e, n;
	}
};
function M(e, t, n = e, r) {
	if (t === k) return t;
	let i = r === void 0 ? n._$Cl : n._$Co?.[r], a = C(t) ? void 0 : t._$litDirective$;
	return i?.constructor !== a && (i?._$AO?.(!1), a === void 0 ? i = void 0 : (i = new a(e), i._$AT(e, n, r)), r === void 0 ? n._$Cl = i : (n._$Co ??= [])[r] = i), i !== void 0 && (t = M(e, i._$AS(e, t.values), i, r)), t;
}
var xe = class {
	constructor(e, t) {
		this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
	}
	get parentNode() {
		return this._$AM.parentNode;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	u(e) {
		let { el: { content: t }, parts: n } = this._$AD, r = (e?.creationScope ?? x).importNode(t, !0);
		j.currentNode = r;
		let i = j.nextNode(), a = 0, o = 0, s = n[0];
		for (; s !== void 0;) {
			if (a === s.index) {
				let t;
				s.type === 2 ? t = new N(i, i.nextSibling, this, e) : s.type === 1 ? t = new s.ctor(i, s.name, s.strings, this, e) : s.type === 6 && (t = new Te(i, this, e)), this._$AV.push(t), s = n[++o];
			}
			a !== s?.index && (i = j.nextNode(), a++);
		}
		return j.currentNode = x, r;
	}
	p(e) {
		let t = 0;
		for (let n of this._$AV) n !== void 0 && (n.strings === void 0 ? n._$AI(e[t]) : (n._$AI(e, n, t), t += n.strings.length - 2)), t++;
	}
}, N = class e {
	get _$AU() {
		return this._$AM?._$AU ?? this._$Cv;
	}
	constructor(e, t, n, r) {
		this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = r, this._$Cv = r?.isConnected ?? !0;
	}
	get parentNode() {
		let e = this._$AA.parentNode, t = this._$AM;
		return t !== void 0 && e?.nodeType === 11 && (e = t.parentNode), e;
	}
	get startNode() {
		return this._$AA;
	}
	get endNode() {
		return this._$AB;
	}
	_$AI(e, t = this) {
		e = M(this, e, t), C(e) ? e === A || e == null || e === "" ? (this._$AH !== A && this._$AR(), this._$AH = A) : e !== this._$AH && e !== k && this._(e) : e._$litType$ === void 0 ? e.nodeType === void 0 ? de(e) ? this.k(e) : this._(e) : this.T(e) : this.$(e);
	}
	O(e) {
		return this._$AA.parentNode.insertBefore(e, this._$AB);
	}
	T(e) {
		this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
	}
	_(e) {
		this._$AH !== A && C(this._$AH) ? this._$AA.nextSibling.data = e : this.T(x.createTextNode(e)), this._$AH = e;
	}
	$(e) {
		let { values: t, _$litType$: n } = e, r = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = be.createElement(ve(n.h, n.h[0]), this.options)), n);
		if (this._$AH?._$AD === r) this._$AH.p(t);
		else {
			let e = new xe(r, this), n = e.u(this.options);
			e.p(t), this.T(n), this._$AH = e;
		}
	}
	_$AC(e) {
		let t = _e.get(e.strings);
		return t === void 0 && _e.set(e.strings, t = new be(e)), t;
	}
	k(t) {
		w(this._$AH) || (this._$AH = [], this._$AR());
		let n = this._$AH, r, i = 0;
		for (let a of t) i === n.length ? n.push(r = new e(this.O(S()), this.O(S()), this, this.options)) : r = n[i], r._$AI(a), i++;
		i < n.length && (this._$AR(r && r._$AB.nextSibling, i), n.length = i);
	}
	_$AR(e = this._$AA.nextSibling, t) {
		for (this._$AP?.(!1, !0, t); e !== this._$AB;) {
			let t = ce(e).nextSibling;
			ce(e).remove(), e = t;
		}
	}
	setConnected(e) {
		this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
	}
}, P = class {
	get tagName() {
		return this.element.tagName;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	constructor(e, t, n, r, i) {
		this.type = 1, this._$AH = A, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = i, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(/* @__PURE__ */ new String()), this.strings = n) : this._$AH = A;
	}
	_$AI(e, t = this, n, r) {
		let i = this.strings, a = !1;
		if (i === void 0) e = M(this, e, t, 0), a = !C(e) || e !== this._$AH && e !== k, a && (this._$AH = e);
		else {
			let r = e, o, s;
			for (e = i[0], o = 0; o < i.length - 1; o++) s = M(this, r[n + o], t, o), s === k && (s = this._$AH[o]), a ||= !C(s) || s !== this._$AH[o], s === A ? e = A : e !== A && (e += (s ?? "") + i[o + 1]), this._$AH[o] = s;
		}
		a && !r && this.j(e);
	}
	j(e) {
		e === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
	}
}, Se = class extends P {
	constructor() {
		super(...arguments), this.type = 3;
	}
	j(e) {
		this.element[this.name] = e === A ? void 0 : e;
	}
}, Ce = class extends P {
	constructor() {
		super(...arguments), this.type = 4;
	}
	j(e) {
		this.element.toggleAttribute(this.name, !!e && e !== A);
	}
}, we = class extends P {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i), this.type = 5;
	}
	_$AI(e, t = this) {
		if ((e = M(this, e, t, 0) ?? A) === k) return;
		let n = this._$AH, r = e === A && n !== A || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, i = e !== A && (n === A || r);
		r && this.element.removeEventListener(this.name, this, n), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
	}
	handleEvent(e) {
		typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
	}
}, Te = class {
	constructor(e, t, n) {
		this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AI(e) {
		M(this, e);
	}
}, Ee = {
	M: v,
	P: y,
	A: b,
	C: 1,
	L: ye,
	R: xe,
	D: de,
	V: M,
	I: N,
	H: P,
	N: Ce,
	U: we,
	B: Se,
	F: Te
}, De = se.litHtmlPolyfillSupport;
De?.(be, N), (se.litHtmlVersions ??= []).push("3.3.3");
var Oe = (e, t, n) => {
	let r = n?.renderBefore ?? t, i = r._$litPart$;
	if (i === void 0) {
		let e = n?.renderBefore ?? null;
		r._$litPart$ = i = new N(t.insertBefore(S(), e), e, void 0, n ?? {});
	}
	return i._$AI(e), i;
}, F = globalThis, I = class extends g {
	constructor() {
		super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
	}
	createRenderRoot() {
		let e = super.createRenderRoot();
		return this.renderOptions.renderBefore ??= e.firstChild, e;
	}
	update(e) {
		let t = this.render();
		this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Oe(t, this.renderRoot, this.renderOptions);
	}
	connectedCallback() {
		super.connectedCallback(), this._$Do?.setConnected(!0);
	}
	disconnectedCallback() {
		super.disconnectedCallback(), this._$Do?.setConnected(!1);
	}
	render() {
		return k;
	}
};
I._$litElement$ = !0, I.finalized = !0, F.litElementHydrateSupport?.({ LitElement: I });
var ke = F.litElementPolyfillSupport;
ke?.({ LitElement: I }), (F.litElementVersions ??= []).push("4.2.2");
//#endregion
//#region node_modules/@lit/reactive-element/decorators/custom-element.js
var L = (e) => (t, n) => {
	n === void 0 ? customElements.define(e, t) : n.addInitializer(() => {
		customElements.define(e, t);
	});
}, Ae = {
	attribute: !0,
	type: String,
	converter: m,
	reflect: !1,
	hasChanged: h
}, je = (e = Ae, t, n) => {
	let { kind: r, metadata: i } = n, a = globalThis.litPropertyMetadata.get(i);
	if (a === void 0 && globalThis.litPropertyMetadata.set(i, a = /* @__PURE__ */ new Map()), r === "setter" && ((e = Object.create(e)).wrapped = !0), a.set(n.name, e), r === "accessor") {
		let { name: r } = n;
		return {
			set(n) {
				let i = t.get.call(this);
				t.set.call(this, n), this.requestUpdate(r, i, e, !0, n);
			},
			init(t) {
				return t !== void 0 && this.C(r, void 0, e, t), t;
			}
		};
	}
	if (r === "setter") {
		let { name: r } = n;
		return function(n) {
			let i = this[r];
			t.call(this, n), this.requestUpdate(r, i, e, !0, n);
		};
	}
	throw Error("Unsupported decorator location: " + r);
};
function R(e) {
	return (t, n) => typeof n == "object" ? je(e, t, n) : ((e, t, n) => {
		let r = t.hasOwnProperty(n);
		return t.constructor.createProperty(n, e), r ? Object.getOwnPropertyDescriptor(t, n) : void 0;
	})(e, t, n);
}
//#endregion
//#region node_modules/@lit/reactive-element/decorators/state.js
function Me(e) {
	return R({
		...e,
		state: !0,
		attribute: !1
	});
}
//#endregion
//#region node_modules/@lit/reactive-element/decorators/base.js
var Ne = (e, t, n) => (n.configurable = !0, n.enumerable = !0, Reflect.decorate && typeof t != "object" && Object.defineProperty(e, t, n), n);
//#endregion
//#region node_modules/@lit/reactive-element/decorators/query-assigned-elements.js
function Pe(e) {
	return (t, n) => {
		let { slot: r, selector: i } = e ?? {}, a = "slot" + (r ? `[name=${r}]` : ":not([name])");
		return Ne(t, n, { get() {
			let t = (this.renderRoot?.querySelector(a))?.assignedElements(e) ?? [];
			return i === void 0 ? t : t.filter((e) => e.matches(i));
		} });
	};
}
//#endregion
//#region node_modules/@lit/reactive-element/decorators/query-assigned-nodes.js
function Fe(e) {
	return (t, n) => {
		let { slot: r } = e ?? {}, i = "slot" + (r ? `[name=${r}]` : ":not([name])");
		return Ne(t, n, { get() {
			return (this.renderRoot?.querySelector(i))?.assignedNodes(e) ?? [];
		} });
	};
}
//#endregion
//#region node_modules/color2k/dist/index.exports.import.es.mjs
function Ie(e, t, n) {
	return Math.min(Math.max(e, n), t);
}
var z = class extends Error {
	constructor(e) {
		super(`Failed to parse color: "${e}"`);
	}
};
function Le(e) {
	if (typeof e != "string") throw new z(e);
	if (e.trim().toLowerCase() === "transparent") return [
		0,
		0,
		0,
		0
	];
	let t = e.trim();
	t = Ke.test(e) ? Ve(e) : e;
	let n = He.exec(t);
	if (n) {
		let e = Array.from(n).slice(1);
		return [...e.slice(0, 3).map((e) => parseInt(B(e, 2), 16)), parseInt(B(e[3] || "f", 2), 16) / 255];
	}
	let r = Ue.exec(t);
	if (r) {
		let e = Array.from(r).slice(1);
		return [...e.slice(0, 3).map((e) => parseInt(e, 16)), parseInt(e[3] || "ff", 16) / 255];
	}
	let i = We.exec(t);
	if (i) {
		let e = Array.from(i).slice(1);
		return [...e.slice(0, 3).map((e) => parseInt(e, 10)), parseFloat(e[3] || "1")];
	}
	let a = Ge.exec(t);
	if (a) {
		let [t, n, r, i] = Array.from(a).slice(1).map(parseFloat);
		if (Ie(0, 100, n) !== n || Ie(0, 100, r) !== r) throw new z(e);
		return [...Je(t, n, r), Number.isNaN(i) ? 1 : i];
	}
	throw new z(e);
}
function Re(e) {
	let t = 5381, n = e.length;
	for (; n;) t = t * 33 ^ e.charCodeAt(--n);
	return (t >>> 0) % 2341;
}
var ze = (e) => parseInt(e.replace(/_/g, ""), 36), Be = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
	let n = ze(t.substring(0, 3)), r = ze(t.substring(3)).toString(16), i = "";
	for (let e = 0; e < 6 - r.length; e++) i += "0";
	return e[n] = `${i}${r}`, e;
}, {});
function Ve(e) {
	let t = Be[Re(e.toLowerCase().trim())];
	if (!t) throw new z(e);
	return `#${t}`;
}
var B = (e, t) => Array.from(Array(t)).map(() => e).join(""), He = RegExp(`^#${B("([a-f0-9])", 3)}([a-f0-9])?$`, "i"), Ue = RegExp(`^#${B("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"), We = RegExp(`^rgba?\\(\\s*(\\d+)\\s*${B(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"), Ge = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i, Ke = /^[a-z]+$/i, qe = (e) => Math.round(e * 255), Je = (e, t, n) => {
	let r = n / 100;
	if (t === 0) return [
		r,
		r,
		r
	].map(qe);
	let i = (e % 360 + 360) % 360 / 60, a = (1 - Math.abs(2 * r - 1)) * (t / 100), o = a * (1 - Math.abs(i % 2 - 1)), s = 0, c = 0, l = 0;
	i >= 0 && i < 1 ? (s = a, c = o) : i >= 1 && i < 2 ? (s = o, c = a) : i >= 2 && i < 3 ? (c = a, l = o) : i >= 3 && i < 4 ? (c = o, l = a) : i >= 4 && i < 5 ? (s = o, l = a) : i >= 5 && i < 6 && (s = a, l = o);
	let u = r - a / 2;
	return [
		s + u,
		c + u,
		l + u
	].map(qe);
};
function Ye(e) {
	if (e === "transparent") return 0;
	function t(e) {
		let t = e / 255;
		return t <= .04045 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4;
	}
	let [n, r, i] = Le(e);
	return .2126 * t(n) + .7152 * t(r) + .0722 * t(i);
}
function Xe(e) {
	return Ye(e) > .179;
}
function Ze(e) {
	return Xe(e) ? "#000" : "#fff";
}
//#endregion
//#region \0@oxc-project+runtime@0.153.0/helpers/esm/decorate.js
function V(e, t, n, r) {
	var i = arguments.length, a = i < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r, o;
	if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(e, t, n, r);
	else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
	return i > 3 && a && Object.defineProperty(t, n, a), a;
}
//#endregion
//#region src/components/vx-button/component.ts
var H = class extends I {
	static {
		this.styles = o`

        :host {
            background-color: var(--accent-color);
            color: var(--text-color);
        }
        button {
            width: 20em;
            background-color: inherit;
            color: inherit;
            height: 3em;
        }
    `;
	}
	connectedCallback() {
		super.connectedCallback(), console.log("Connected to VxButton");
		let e = window.getComputedStyle(this).getPropertyValue("background-color");
		console.log("Background color:", e);
		let t = Ze(e);
		console.log("Readable color:", t);
	}
	render() {
		return console.log("Rendering VxButton"), O`
            <button>The Mutton Button</button>
        `;
	}
};
H = V([L("vx-button")], H);
//#endregion
//#region node_modules/lit-html/directive.js
var Qe = {
	ATTRIBUTE: 1,
	CHILD: 2,
	PROPERTY: 3,
	BOOLEAN_ATTRIBUTE: 4,
	EVENT: 5,
	ELEMENT: 6
}, $e = (e) => (...t) => ({
	_$litDirective$: e,
	values: t
}), et = class {
	constructor(e) {}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AT(e, t, n) {
		this._$Ct = e, this._$AM = t, this._$Ci = n;
	}
	_$AS(e, t) {
		return this.update(e, t);
	}
	update(e, t) {
		return this.render(...t);
	}
}, tt = $e(class extends et {
	constructor(e) {
		if (super(e), e.type !== Qe.ATTRIBUTE || e.name !== "class" || e.strings?.length > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
	}
	render(e) {
		return " " + Object.keys(e).filter((t) => e[t]).join(" ") + " ";
	}
	update(e, [t]) {
		if (this.st === void 0) {
			this.st = /* @__PURE__ */ new Set(), e.strings !== void 0 && (this.nt = new Set(e.strings.join(" ").split(/\s/).filter((e) => e !== "")));
			for (let e in t) t[e] && !this.nt?.has(e) && this.st.add(e);
			return this.render(t);
		}
		let n = e.element.classList;
		for (let e of this.st) e in t || (n.remove(e), this.st.delete(e));
		for (let e in t) {
			let r = !!t[e];
			r === this.st.has(e) || this.nt?.has(e) || (r ? (n.add(e), this.st.add(e)) : (n.remove(e), this.st.delete(e)));
		}
		return k;
	}
});
//#endregion
//#region src/components/vx-panel/vx-panel.component.ts
function nt(e) {
	return o`color-mix(in oklab, var(--vx-text-color) ${e}%, var(--vx-panel-color))`;
}
function U(e) {
	return o`
        --background-color: ${nt(e)};
        --border-color: ${nt(e + 25)};
        color: contrast-color(var(--background-color));
        background-color: var(--background-color);
        border-color: var(--border-color);
    `;
}
var W = class extends I {
	constructor(...e) {
		super(...e), this.level = 0;
	}
	static {
		this.styles = o`
        :host {
            display: block;
            padding: 0;
            margin: 1em;
            border-radius: 0.5em;
            border: 1px solid;
            --border-color: none;
            --background-color: none;
            ${U(0)}
        }
        :host([level="1"]) { ${U(10)} }
        :host([level="2"]) { ${U(20)} }
        :host([level="3"]) { ${U(30)} }
        :host([level="4"]) { ${U(40)} }
        :host([level="5"]) { ${U(50)} }
        :host([level="6"]) { ${U(60)} }
        
        div {
            padding: 0.5em;
        }
        
        div#header, div#footer {
            border: none;
        }
        div#body.has-header {
            border-top: 1px solid var(--border-color);
        }
        div#body.has-footer {
            border-bottom: 1px solid var(--border-color);
        }
    `;
	}
	render() {
		return O`
            <div id="header">
                <slot name="header" @slotchange=${() => this.requestUpdate()}></slot>
            </div>
            <div id="body" class=${tt({
			"has-header": this.headerNodes.length > 0,
			"has-footer": this.footerNodes.length > 0
		})}>
                <slot></slot>
            </div>
            <div id="footer">
                <slot name="footer" @slotchange=${() => this.requestUpdate()}></slot>
            </div>
        `;
	}
};
V([R({ type: Number })], W.prototype, "level", void 0), V([Fe({
	slot: "header",
	flatten: !0
})], W.prototype, "headerNodes", void 0), V([Fe({
	slot: "footer",
	flatten: !0
})], W.prototype, "footerNodes", void 0), W = V([L("vx-panel")], W);
//#endregion
//#region node_modules/lit-html/directive-helpers.js
var { I: rt } = Ee, it = (e) => e.strings === void 0, G = (e, t) => {
	let n = e._$AN;
	if (n === void 0) return !1;
	for (let e of n) e._$AO?.(t, !1), G(e, t);
	return !0;
}, K = (e) => {
	let t, n;
	do {
		if ((t = e._$AM) === void 0) break;
		n = t._$AN, n.delete(e), e = t;
	} while (n?.size === 0);
}, at = (e) => {
	for (let t; t = e._$AM; e = t) {
		let n = t._$AN;
		if (n === void 0) t._$AN = n = /* @__PURE__ */ new Set();
		else if (n.has(e)) break;
		n.add(e), ct(t);
	}
};
function ot(e) {
	this._$AN === void 0 ? this._$AM = e : (K(this), this._$AM = e, at(this));
}
function st(e, t = !1, n = 0) {
	let r = this._$AH, i = this._$AN;
	if (i !== void 0 && i.size !== 0) {
		if (t) {
			if (Array.isArray(r)) for (let e = n; e < r.length; e++) G(r[e], !1), K(r[e]);
			else r != null && (G(r, !1), K(r));
		} else G(this, e);
	}
}
var ct = (e) => {
	e.type == Qe.CHILD && (e._$AP ??= st, e._$AQ ??= ot);
}, lt = class extends et {
	constructor() {
		super(...arguments), this._$AN = void 0;
	}
	_$AT(e, t, n) {
		super._$AT(e, t, n), at(this), this.isConnected = e._$AU;
	}
	_$AO(e, t = !0) {
		e !== this.isConnected && (this.isConnected = e, e ? this.reconnected?.() : this.disconnected?.()), t && (G(this, e), K(this));
	}
	setValue(e) {
		if (it(this._$Ct)) this._$Ct._$AI(e, this);
		else {
			let t = [...this._$Ct._$AH];
			t[this._$Ci] = e, this._$Ct._$AI(t, this, 0);
		}
	}
	disconnected() {}
	reconnected() {}
}, ut = () => new dt(), dt = class {}, q = /* @__PURE__ */ new WeakMap(), ft = $e(class extends lt {
	render(e) {
		return A;
	}
	update(e, [t]) {
		let n = t !== this.G;
		return n && this.rt(void 0), (n || this.lt !== this.ct) && (this.G = t, this.ht = e.options?.host, this.rt(this.ct = e.element)), A;
	}
	rt(e) {
		if (this.G !== void 0) {
			if (this.isConnected || (e = void 0), typeof this.G == "function") {
				let t = this.ht ?? globalThis, n = q.get(t);
				n === void 0 && (n = /* @__PURE__ */ new WeakMap(), q.set(t, n)), n.get(this.G) !== void 0 && this.G.call(this.ht, void 0), n.set(this.G, e), e !== void 0 && this.G.call(this.ht, e);
			} else this.G.value = e;
		}
	}
	get lt() {
		return typeof this.G == "function" ? q.get(this.ht ?? globalThis)?.get(this.G) : this.G?.value;
	}
	disconnected() {
		this.lt === this.ct && this.rt(void 0);
	}
	reconnected() {
		this.rt(this.ct);
	}
}), pt = "/", mt = (e) => e, ht = /^[$_\p{ID_Start}]$/u, gt = /^[$\u200c\u200d\p{ID_Continue}]$/u;
function J(e) {
	return e.replace(/[.+*?^${}()[\]|/\\]/g, "\\$&");
}
var Y = class extends TypeError {
	originalPath;
	constructor(e, t) {
		super(e + (t ? `: ${t}` : "") + "; visit https://git.new/pathToRegexpError for info"), this.originalPath = t;
	}
};
function _t(e, t = {}) {
	let { encodePath: n = mt } = t, r = [...e], i = 0;
	function a(t) {
		let o = [], s = "";
		function c() {
			s &&= (o.push({
				type: "text",
				value: n(s)
			}), "");
		}
		for (; i < r.length;) {
			let n = r[i++];
			if (n === t) return c(), o;
			if (n === "\\") {
				if (i === r.length) throw new Y(`Unexpected end after \\ at index ${i}`, e);
				s += r[i++];
			} else if (n === ":" || n === "*") {
				let t = n === ":" ? "param" : "wildcard", a = "";
				if (ht.test(r[i])) do
					a += r[i++];
				while (gt.test(r[i]));
				else if (r[i] === "\"") {
					let t = i;
					for (; i < r.length;) {
						if (r[++i] === "\"") {
							i++, t = 0;
							break;
						}
						r[i] === "\\" && i++, a += r[i];
					}
					if (t) throw new Y(`Unterminated quote at index ${t}`, e);
				}
				if (!a) throw new Y(`Missing parameter name at index ${i}`, e);
				c(), o.push({
					type: t,
					name: a
				});
			} else if (n === "{") c(), o.push({
				type: "group",
				tokens: a("}")
			});
			else {
				if ("}()[]+?!".includes(n)) throw new Y(`Unexpected ${n} at index ${i - 1}`, e);
				s += n;
			}
		}
		if (t) throw new Y(`Unexpected end at index ${i}, expected ${t}`, e);
		return c(), o;
	}
	return {
		tokens: a(""),
		originalPath: e
	};
}
function vt(e, t = {}) {
	let { decode: n = decodeURIComponent, delimiter: r = pt } = t, { regexp: i, keys: a } = yt(e, t), o = a.map((e) => n === !1 ? mt : e.type === "param" ? n : (e) => e.split(r).map(n));
	return function(e) {
		let t = i.exec(e);
		if (!t) return !1;
		let n = t[0], r = Object.create(null);
		for (let e = 1; e < t.length; e++) {
			if (t[e] === void 0) continue;
			let n = a[e - 1], i = o[e - 1];
			r[n.name] = i(t[e]);
		}
		return {
			path: n,
			params: r
		};
	};
}
function yt(e, t = {}) {
	let { delimiter: n = pt, end: r = !0, sensitive: i = !1, trailing: a = !0 } = t, o = [], s = "", c = 0;
	function l(e) {
		if (Array.isArray(e)) {
			for (let t of e) l(t);
			return;
		}
		let r = typeof e == "object" ? e : _t(e, t);
		bt(r.tokens, 0, [], (e) => {
			if (c >= 256) throw new Y("Too many path combinations", r.originalPath);
			c > 0 && (s += "|"), s += xt(e, n, o, r.originalPath, a), c++;
		});
	}
	l(e);
	let u = `^(?:${s})`;
	return u += r ? "$" : "(?=" + J(n) + "|$)", {
		regexp: new RegExp(u, i ? "" : "i"),
		keys: o
	};
}
function bt(e, t, n, r) {
	for (; t < e.length;) {
		let i = e[t++];
		if (i.type === "group") {
			let a = n.length;
			bt(i.tokens, 0, n, (n) => bt(e, t, n, r)), n.length = a;
		} else n.push(i);
	}
	r(n);
}
function xt(e, t, n, r, i) {
	let a = "", o = "", s = !1, c = !1, l = "", u = 0;
	function d(t) {
		for (; t < e.length;) if (e[t++].type === "wildcard") return !0;
		return !1;
	}
	function ee(n) {
		let r = "";
		for (; n < e.length;) {
			let i = e[n++];
			if (i.type !== "text") return r;
			if (i.value.includes(t)) break;
			r += i.value;
		}
	}
	for (; u < e.length;) {
		let i = e[u++];
		if (i.type === "text") {
			let e = J(i.value);
			a += e, l += e, o += i.value, i.value.includes(t) && (c = !1);
		} else if (i.type === "param" || i.type === "wildcard") {
			if (a && !o) throw new Y(`Missing text before "${i.name}" ${i.type}`, r);
			if (n.push(i), i.type === "param") {
				if (c) {
					let e = X(t, o);
					a += `(${e}+?|${e}*${J(o)})`;
				} else {
					let e = ee(u);
					a += e ? `(?=(${X(t, "")}+?)${J(e)})(?:\\${n.length})` : `(${X(t, "")}+)`;
				}
			} else s && (a += `)${l}`), s = d(u), a += s ? "(?=([^]+?)" : "([^]+)", c = !0, l = "";
			l += `(?:\\${n.length})`, o = "";
		} else throw TypeError(`Unknown token type: ${i.type}`);
	}
	return i && !o.endsWith(t) && (a += "(?:" + J(t) + "$)?"), a;
}
function X(e, t) {
	return t.length > e.length ? X(t, e) : (e === t && (t = ""), t.length > 1 ? `(?:(?!${J(e)}|${J(t)})[^])` : e.length > 1 ? `(?:(?!${J(e)})[^${J(t)}])` : `[^${J(e + t)}]`);
}
//#endregion
//#region src/components/vx-route/vx-route.component.ts
var Z = class extends I {
	constructor(...e) {
		super(...e), this.path = "", this.subroute = !1, this.active = !1, this.customTemplate = O`<slot></slot>`, this.parameters = {}, this.containerRef = ut();
	}
	static {
		this.styles = o`
        :host {
            display: block;
        }
    `;
	}
	activateIfMatches(e) {
		try {
			let t = vt(this.path, { end: !this.subroute })(e);
			if (t) return this.parameters = t.params, this.active = !0, !0;
		} catch (e) {
			console.error("Error matching path", this.path), console.error(e);
		}
		return this.parameters = {}, this.active = !1, !1;
	}
	newEvent(e) {
		return new CustomEvent(e, {
			bubbles: !0,
			composed: !0,
			detail: {}
		});
	}
	connectedCallback() {
		super.connectedCallback(), this.dispatchEvent(this.newEvent("vx-connected"));
	}
	willUpdate(e) {
		if (e.has("active") && (e.get("active") || !1) !== this.active) {
			let e = this.active ? "vx-activate" : "vx-deactivate";
			this.dispatchEvent(this.newEvent(e));
		}
	}
	updated(e) {
		if (e.has("active") && (e.get("active") || !1) !== this.active) {
			let e = this.active ? "vx-activated" : "vx-deactivated";
			this.dispatchEvent(this.newEvent(e));
		}
		this.active && this.component && (this.componentRef ||= document.createElement(this.component), this.componentRef && this.containerRef.value?.appendChild(this.componentRef)), !this.active && this.componentRef && (this.componentRef?.remove(), this.componentRef = void 0), this.parameters = {};
	}
	renderTemplate(e) {
		return typeof e == "function" ? e() : e;
	}
	render() {
		let e = this.customTemplate;
		return this.component && (e = O`<div id="container" ${ft(this.containerRef)}></div>`), this.active ? this.renderTemplate(e) : A;
	}
};
V([R()], Z.prototype, "path", void 0), V([R({ type: Boolean })], Z.prototype, "subroute", void 0), V([R({ type: Boolean })], Z.prototype, "active", void 0), V([R()], Z.prototype, "component", void 0), Z = V([L("vx-route")], Z);
//#endregion
//#region src/lib/dom.ts
function St(e) {
	if (!e) return null;
	if (e.assignedSlot) return e.assignedSlot;
	if (e.parentNode) return e.parentNode;
	let t = e.getRootNode();
	return t instanceof ShadowRoot ? t.host : null;
}
function Ct(e) {
	let t = [], n = e;
	for (; n;) t.push(n), n = St(n);
	return t;
}
//#endregion
//#region src/components/vx-router/vx-router.component.ts
var Q = class extends I {
	static {
		this.styles = o`
    `;
	}
	constructor() {
		super(), this.reversed = !1, this.currentURL = new URL(window.location.href), this.navigateEventHandler = this.navigateEventHandler.bind(this);
	}
	connectedCallback() {
		super.connectedCallback(), navigation.addEventListener("navigate", this.navigateEventHandler);
	}
	disconnectedCallback() {
		navigation.removeEventListener("navigate", this.navigateEventHandler), super.disconnectedCallback();
	}
	firstUpdated() {
		this.activateMatchingRoute();
	}
	navigateEventHandler(e) {
		this.currentURL = new URL(e.destination.url), e.canIntercept && (e.intercept(), this.activateMatchingRoute());
	}
	activateMatchingRoute() {
		if (!Ct(this).filter((e) => e instanceof Z).map((e) => e.active).concat(!0)[0]) {
			this.routes.forEach((e) => {
				e.active = !1;
			});
			return;
		}
		let e = Ct(this).filter((e) => e instanceof Z).map((e) => e.path).reverse().join(""), t = this.currentURL.pathname + (this.currentURL.hash || "");
		t.startsWith(e) && (t = t.substring(e.length));
		let n = this.reversed ? this.routes.toReversed() : this.routes, r = !1;
		for (let e of n) r ? e.active = !1 : r = e.activateIfMatches(t);
	}
	render() {
		return O`<slot></slot>`;
	}
};
V([R({ type: Boolean })], Q.prototype, "reversed", void 0), V([Me()], Q.prototype, "currentURL", void 0), V([Pe({ selector: "vx-route" })], Q.prototype, "routes", void 0), Q = V([L("vx-router")], Q);
//#endregion
//#region src/lib/svg/svg-register.ts
var wt = /* @__PURE__ */ new Map();
function Tt(e, t) {
	wt.set(e, t);
}
function Et(e) {
	return wt.get(e);
}
function Dt(e) {
	return wt.has(e);
}
function Ot(e) {
	let t = e.split(".");
	if (t.length === 1 && t.unshift("default"), t.length === 2) {
		let [e, n] = t;
		if (Dt(e)) {
			let t = Et(e);
			if (n in t) return t[n];
		}
	}
	return A;
}
//#endregion
//#region src/lib/svg/system-icons.ts
var kt = {
	favicon: O`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em">
          <rect width="512" height="512" style="fill: rgba(71, 87, 91, 0.300);"/>
          <path d="M 155.559 415.826 L 13.786 87.123 L 100.519 87.167 L 200.898 330.441 L 297.737 87.267 L 382.572 87.31 L 240.947 415.87 L 155.559 415.826 Z" style="fill: rgb(248, 148, 7); text-wrap-mode: nowrap;"/>
          <path d="M 187.712 415.87 L 321.421 294.77 L 203.511 183.491 L 257.982 183.491 L 320.714 243.096 C 333.766 255.455 343.039 264.966 348.536 271.628 C 356.24 263.173 365.359 254.346 375.892 245.148 L 445.455 183.491 L 495.217 183.491 L 373.77 293.019 L 504.652 415.87 L 448.059 415.87 L 361.041 332.973 C 356.166 328.211 351.135 323.033 345.949 317.436 C 338.244 325.892 332.742 331.705 329.442 334.874 L 242.665 415.87 L 187.712 415.87 Z" style="text-wrap-mode: nowrap; fill: rgb(81, 119, 144);"/>
        </svg>
    `,
	bootstrap: O`
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-bootstrap"
             viewBox="0 0 16 16">
            <path d="M5.062 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377z"/>
            <path d="M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4zm4-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3z"/>
        </svg>
    `,
	"bootstrap-fill": O`
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-boombox-fill"
             viewBox="0 0 16 16">
            <path d="M14 0a.5.5 0 0 1 .5.5V2h.5a1 1 0 0 1 1 1v2H0V3a1 1 0 0 1 1-1h12.5V.5A.5.5 0 0 1 14 0M2 3.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m7.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m1.5-.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M9.5 3h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1M6 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m7 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m.5-1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
            <path d="M0 6h16v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm2 4.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0m7 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0"/>
        </svg>
    `,
	bicycle: O`
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-bicycle"
             viewBox="0 0 16 16">
            <path d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5m1.5 2.443-.508.814c.5.444.85 1.054.967 1.743h1.139zM8 9.057 9.598 6.5H6.402zM4.937 9.5a2 2 0 0 0-.487-.877l-.548.877zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53z"/>
        </svg>
    `,
	home: O`
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 -960 960 960" fill="currentColor">
            <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/>
        </svg>
    `,
	motion: O`
        <svg  xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
              fill="currentColor" viewBox="0 0 24 24" >
            <!--Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free-->
            <path d="M17 7c-1.18 0-2.29.41-3.19 1.15-.69-.42-1.48-.65-2.31-.65-1.19 0-2.31.48-3.13 1.28A3.999 3.999 0 0 0 2 12a3.999 3.999 0 0 0 6.37 3.22c.83.81 1.95 1.28 3.13 1.28.83 0 1.63-.23 2.31-.65A5.002 5.002 0 0 0 22 12c0-2.76-2.24-5-5-5M6 14c-1.1 0-2-.9-2-2s.9-2 2-2c.47 0 .92.17 1.27.46l-.03.12c-.06.17-.1.34-.14.51-.01.07-.03.13-.04.2-.04.23-.06.47-.06.71s.03.48.06.71c.01.06.02.13.04.19.04.18.08.36.14.53.01.04.02.08.03.11-.35.29-.8.46-1.27.46m5.5.5c-.89 0-1.73-.49-2.18-1.29C9.11 12.85 9 12.43 9 12s.11-.85.33-1.23c.44-.78 1.28-1.27 2.17-1.27.37 0 .73.08 1.05.23-.09.19-.18.38-.25.57l-.03.1c-.07.21-.13.42-.17.64-.01.07-.03.13-.04.2-.04.25-.07.5-.07.76a5 5 0 0 0 .11.96c.04.22.1.44.17.65l.03.09c.07.2.15.39.25.58-.32.15-.68.23-1.05.23Zm5.5.5c-.9 0-1.75-.4-2.32-1.1a3.01 3.01 0 0 1-.01-3.8A3.005 3.005 0 0 1 20 12c0 1.65-1.35 3-3 3"></path>
        </svg>
    `
}, At, $ = class extends I {
	static {
		At = this;
	}
	constructor(...e) {
		super(...e), this.library = "default", this.name = "", this.button = !1;
	}
	static {
		Tt("$system", kt);
	}
	static {
		this.styles = o`
        :host {
            display: inline-block;
            justify-content: center;
            align-items: center;
        }
        svg {
            width: inherit;
            height: inherit;
        }
        :host([button]) svg:hover {
            background: rgba(255, 255, 255, 0.5);
            cursor: pointer;
        }
    `;
	}
	static {
		this.notFoundIcon = O`
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4.978.855a.5.5 0 1 0-.956.29l.41 1.352A5 5 0 0 0 3 6h10a5 5 0 0 0-1.432-3.503l.41-1.352a.5.5 0 1 0-.956-.29l-.291.956A5 5 0 0 0 8 1a5 5 0 0 0-2.731.811l-.29-.956z"/>
            <path d="M13 6v1H8.5v8.975A5 5 0 0 0 13 11h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 1 0 1 0v-.5a1.5 1.5 0 0 0-1.5-1.5H13V9h1.5a.5.5 0 0 0 0-1H13V7h.5A1.5 1.5 0 0 0 15 5.5V5a.5.5 0 0 0-1 0v.5a.5.5 0 0 1-.5.5zm-5.5 9.975V7H3V6h-.5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 0-1 0v.5A1.5 1.5 0 0 0 2.5 7H3v1H1.5a.5.5 0 0 0 0 1H3v1h-.5A1.5 1.5 0 0 0 1 11.5v.5a.5.5 0 1 0 1 0v-.5a.5.5 0 0 1 .5-.5H3a5 5 0 0 0 4.5 4.975"/>
        </svg>
    `;
	}
	render() {
		let e = Et(this.library) || {};
		return this.name in e ? e[this.name] : At.notFoundIcon;
	}
};
V([R({ type: String })], $.prototype, "library", void 0), V([R({ type: String })], $.prototype, "name", void 0), V([R({ type: Boolean })], $.prototype, "button", void 0), $ = At = V([L("vx-svg")], $);
//#endregion
export { H as VxButton, W as VxPanel, Z as VxRoute, Q as VxRouter, $ as VxSvg, Et as getSvgLibrary, Dt as hasSvgLibrary, O as html, Tt as registerSvgLibrary, Ot as svg, kt as systemIcons };
