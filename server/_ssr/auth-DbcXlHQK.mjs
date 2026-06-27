import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { d as getSessionUser, f as login, m as onAuthChange, n as Button, r as Input, t as BrandLogo } from "./auth-CNcD96W4.mjs";
import { t as Label } from "./label-C771U0h-.mjs";
import { g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { f as LoaderCircle, h as EyeOff, m as Eye } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-DbcXlHQK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AuthPage() {
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		if (getSessionUser()) navigate({ to: "/" });
		return onAuthChange((u) => {
			if (u) navigate({ to: "/" });
		});
	}, [navigate]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid min-h-screen place-items-center bg-[var(--color-primary)] p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md rounded-2xl bg-card p-6 shadow-[var(--shadow-soft)] sm:p-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 flex flex-col items-center text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, { className: "h-16 w-16" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-display text-2xl text-foreground",
						children: "Estudio Contable"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Estudio Contable J. Albines"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoginForm, {})]
		})
	});
}
function LoginForm() {
	const [usuario, setUsuario] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [showPassword, setShowPassword] = (0, import_react.useState)(true);
	const [loading, setLoading] = (0, import_react.useState)(false);
	async function onSubmit(e) {
		e.preventDefault();
		if (!usuario.trim()) {
			toast.error("Ingresa tu usuario");
			return;
		}
		if (!password) {
			toast.error("Ingresa tu contraseña");
			return;
		}
		setLoading(true);
		try {
			await login(usuario, password);
		} catch {
			toast.error("Usuario o contraseña incorrectos");
			setPassword("");
		} finally {
			setLoading(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "usuario",
					children: "Usuario"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "usuario",
					type: "text",
					autoComplete: "username",
					autoCapitalize: "none",
					autoCorrect: "off",
					spellCheck: false,
					required: true,
					value: usuario,
					onChange: (e) => setUsuario(e.target.value),
					className: "h-12 text-base"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "password",
					children: "Contraseña"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "password",
						type: showPassword ? "text" : "password",
						autoComplete: "current-password",
						required: true,
						value: password,
						onChange: (e) => setPassword(e.target.value),
						className: "h-12 pr-10 text-base"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "ghost",
						size: "icon",
						className: "absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8",
						onClick: () => setShowPassword((v) => !v),
						"aria-label": showPassword ? "Ocultar contraseña" : "Mostrar contraseña",
						children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" })
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				variant: "navy",
				size: "lg",
				className: "w-full",
				disabled: loading,
				children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : "Ingresar"
			})
		]
	});
}
//#endregion
export { AuthPage as component };
