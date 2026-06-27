import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { n as Slot } from "../_libs/@radix-ui/react-label+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-CNcD96W4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline",
			navy: "bg-navy text-navy-foreground shadow hover:bg-navy/90",
			gold: "bg-gold text-gold-foreground shadow hover:bg-gold/90"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-11 rounded-md px-6 text-base",
			xl: "h-14 rounded-xl px-6 text-base",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
function BrandLogo({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: "https://estudiocontablejalbines.com/assets/img/logoECJA.png",
		alt: "Estudio Contable J. Albines",
		className,
		style: { objectFit: "contain" }
	});
}
function getApiUrl(path) {
	return "http://localhost:8080" + path;
}
async function apiFetch(path, options = {}) {
	const token = localStorage.getItem("ecja.token");
	const headers = {
		"Content-Type": "application/json",
		...options.headers
	};
	if (token) headers["Authorization"] = `Bearer ${token}`;
	const response = await fetch(getApiUrl(path), {
		...options,
		headers
	});
	if (response.status === 401) {
		localStorage.removeItem("ecja.token");
		window.dispatchEvent(new CustomEvent("auth:logout"));
		throw new Error("Sesión expirada. Ingresa nuevamente.");
	}
	if (response.status === 204) return;
	if (!response.ok) throw new Error(await extractErrorMessage(response));
	return response.json();
}
/**
* Extract a human-readable error message from a Spring Boot response.
* Supports RFC 7807 ProblemDetail ({ title, detail, status }) and common
* Spring error shapes ({ message, error }). Falls back to status text.
*/
async function extractErrorMessage(response) {
	const fallback = `Error ${response.status}${response.statusText ? `: ${response.statusText}` : ""}`;
	let body = "";
	try {
		body = await response.text();
	} catch {
		return fallback;
	}
	if (!body) return fallback;
	try {
		const parsed = JSON.parse(body);
		const detail = typeof parsed.detail === "string" ? parsed.detail : void 0;
		const title = typeof parsed.title === "string" ? parsed.title : void 0;
		const message = typeof parsed.message === "string" ? parsed.message : void 0;
		const error = typeof parsed.error === "string" ? parsed.error : void 0;
		if (detail && title && detail !== title) return `${title}: ${detail}`;
		return detail ?? message ?? title ?? error ?? fallback;
	} catch {
		return body.length < 200 ? body : fallback;
	}
}
async function apiGet(path) {
	return apiFetch(path, { method: "GET" });
}
async function apiPost(path, body) {
	return apiFetch(path, {
		method: "POST",
		body: body !== void 0 ? JSON.stringify(body) : void 0
	});
}
async function apiPut(path, body) {
	return apiFetch(path, {
		method: "PUT",
		body: body !== void 0 ? JSON.stringify(body) : void 0
	});
}
async function apiDelete(path) {
	return apiFetch(path, { method: "DELETE" });
}
var TOKEN_KEY = "ecja.token";
/** Decode JWT payload (base64url) without signature verification. */
function decodeJwt(token) {
	try {
		const parts = token.split(".");
		if (parts.length !== 3) return null;
		const raw = parts[1].replace(/-/g, "+").replace(/_/g, "/");
		const decoded = atob(raw);
		return JSON.parse(decoded);
	} catch {
		return null;
	}
}
async function login(username, password) {
	const res = await apiPost("/api/v1/auth/login", {
		username,
		password
	});
	localStorage.setItem(TOKEN_KEY, res.token);
	emit();
}
function logout() {
	localStorage.removeItem(TOKEN_KEY);
	emit();
}
function getToken() {
	try {
		return localStorage.getItem(TOKEN_KEY);
	} catch {
		return null;
	}
}
function getSessionUser() {
	const token = getToken();
	if (!token) return null;
	const payload = decodeJwt(token);
	if (!payload) return null;
	if (payload.exp && payload.exp * 1e3 < Date.now()) return null;
	return payload.sub;
}
var listeners = /* @__PURE__ */ new Set();
function onAuthChange(cb) {
	listeners.add(cb);
	function onLogout() {
		cb(null);
	}
	window.addEventListener("auth:logout", onLogout);
	return () => {
		listeners.delete(cb);
		window.removeEventListener("auth:logout", onLogout);
	};
}
function emit() {
	const u = getSessionUser();
	listeners.forEach((l) => l(u));
}
function getCurrentUserInfo() {
	const username = getSessionUser();
	if (!username) return null;
	return { username };
}
//#endregion
export { apiGet as a, buttonVariants as c, getSessionUser as d, login as f, apiDelete as i, cn as l, onAuthChange as m, Button as n, apiPost as o, logout as p, Input as r, apiPut as s, BrandLogo as t, getCurrentUserInfo as u };
