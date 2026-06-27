import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { n as Button, r as Input } from "./auth-CNcD96W4.mjs";
import { t as Label } from "./label-C771U0h-.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { C as ArrowLeft, f as LoaderCircle, h as EyeOff, l as Pencil, m as Eye, p as Key, v as Copy } from "../_libs/lucide-react.mjs";
import { _ as revealClaveSol, a as DialogFooter, f as ErrorModal, h as getClient, i as DialogDescription, n as Dialog, o as DialogHeader, r as DialogContent, s as DialogTitle, t as AppShell } from "./ErrorModal-CQ1prmA5.mjs";
import { a as CardTitle, i as CardHeader, n as CardContent, r as CardDescription, t as Card } from "./card-le0AsKhv.mjs";
import { t as Route } from "./clientes._id.index-jzy9vP0Q.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/clientes._id.index-BbbHBtxX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PasswordDialog({ open, onClose, onVerified }) {
	const [password, setPassword] = (0, import_react.useState)("");
	const [showPassword, setShowPassword] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (open) {
			setPassword("");
			setShowPassword(false);
		}
	}, [open]);
	function handleSubmit(e) {
		e.preventDefault();
		if (!password.trim()) return;
		onVerified(password);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (o) => {
			if (!o) onClose();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "sm:max-w-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mb-2 grid h-12 w-12 place-items-center rounded-full bg-gold/15 text-gold",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Key, { className: "h-6 w-6" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "text-center",
					children: "Confirma tu contraseña"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
					className: "text-center",
					children: "Por seguridad, ingresa tu contraseña para mostrar la Clave SOL."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "confirm-password",
						className: "sr-only",
						children: "Contraseña"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "confirm-password",
							type: showPassword ? "text" : "password",
							autoComplete: "current-password",
							autoFocus: true,
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
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "flex-col gap-2 sm:flex-col",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						variant: "navy",
						size: "lg",
						className: "w-full",
						disabled: !password.trim(),
						children: "Confirmar"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "ghost",
						className: "w-full",
						onClick: onClose,
						children: "Cancelar"
					})]
				})]
			})]
		})
	});
}
function CredentialsView({ client }) {
	const navigate = useNavigate();
	const [clave, setClave] = (0, import_react.useState)(null);
	const [passwordOpen, setPasswordOpen] = (0, import_react.useState)(false);
	const [pendingMode, setPendingMode] = (0, import_react.useState)(null);
	const [errorModal, setErrorModal] = (0, import_react.useState)({
		open: false,
		title: "",
		message: ""
	});
	function startReveal(mode) {
		if (mode === "copy" && clave) {
			copyAll(clave);
			return;
		}
		setPendingMode(mode);
		setPasswordOpen(true);
	}
	async function onPasswordVerified(password) {
		if (!pendingMode) return;
		const mode = pendingMode;
		setPasswordOpen(false);
		setPendingMode(null);
		try {
			const c = await revealClaveSol(client.id, password);
			setClave(c);
			if (mode === "copy") await copyAll(c);
		} catch (err) {
			setErrorModal({
				open: true,
				title: "Verificación fallida",
				message: err.message || "No se pudo verificar la contraseña"
			});
		}
	}
	async function copyAll(c) {
		const text = [
			`Razón Social: ${client.razonSocial}`,
			client.nombreComercial ? `Nombre Comercial: ${client.nombreComercial}` : null,
			`RUC: ${client.ruc}`,
			`Nombre: ${client.nombre} ${client.apellidos}`,
			client.telefono ? `Teléfono: ${client.telefono}` : null,
			client.correo ? `Correo: ${client.correo}` : null,
			`Usuario SOL: ${client.usuarioSol}`,
			`Clave SOL: ${c}`
		].filter(Boolean).join("\n");
		try {
			await navigator.clipboard.writeText(text);
			toast.success("Información copiada");
		} catch {
			toast.error("No se pudieron copiar");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "ghost",
					size: "sm",
					onClick: () => navigate({ to: "/" }),
					className: "-ml-2 h-8 gap-1.5 text-muted-foreground hover:text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), "Volver"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					size: "sm",
					className: "h-8 gap-1.5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/clientes/$id/editar",
						params: { id: String(client.id) },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-3.5 w-3.5" }), "Editar"]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "rounded-2xl border-border shadow-[var(--shadow-card)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
					className: "flex flex-row items-start gap-4 space-y-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-navy to-navy/80 font-display text-xl font-semibold text-navy-foreground shadow-sm",
						children: client.razonSocial.trim().charAt(0).toUpperCase() || "C"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
							className: "truncate font-display text-xl",
							children: client.razonSocial
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardDescription, {
							className: "font-mono text-xs",
							children: ["RUC ", client.ruc]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "grid gap-3 sm:grid-cols-2",
					children: [
						client.nombreComercial && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Nombre Comercial",
							value: client.nombreComercial
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Nombre",
							value: `${client.nombre} ${client.apellidos}`
						}),
						client.telefono && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Teléfono",
							value: client.telefono
						}),
						client.correo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Correo",
							value: client.correo
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Usuario SOL",
							value: client.usuarioSol,
							mono: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-2",
							children: clave ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Clave SOL",
								value: clave,
								mono: true,
								highlight: true
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-lg border border-gold/40 bg-gold/5 p-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] uppercase tracking-wider text-muted-foreground",
											children: "Clave SOL"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 font-mono tracking-widest text-base text-foreground",
											children: "********"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: "navy",
										size: "sm",
										className: "h-9 gap-1.5",
										onClick: () => startReveal("view"),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" }), "Mostrar"]
									})]
								})
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-2 sm:flex-row sm:justify-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "navy",
					size: "lg",
					className: "gap-2",
					onClick: () => startReveal("copy"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-4 w-4" }), "Copiar información"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PasswordDialog, {
				open: passwordOpen,
				onClose: () => {
					setPasswordOpen(false);
					setPendingMode(null);
				},
				onVerified: onPasswordVerified
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorModal, {
				open: errorModal.open,
				title: errorModal.title,
				message: errorModal.message,
				onClose: () => setErrorModal({
					open: false,
					title: "",
					message: ""
				})
			})
		]
	});
}
function Field({ label, value, mono, highlight }) {
	async function copy() {
		try {
			await navigator.clipboard.writeText(value);
			toast.success(`${label} copiado`);
		} catch {
			toast.error("No se pudo copiar");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `rounded-lg border p-3 ${highlight ? "border-gold/40 bg-gold/5" : "border-border bg-secondary"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] uppercase tracking-wider text-muted-foreground",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `mt-1 break-all text-base text-foreground ${mono ? "font-mono" : ""}`,
					children: value
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "icon",
				onClick: copy,
				"aria-label": `Copiar ${label}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-4 w-4" })
			})]
		})
	});
}
function ClientDetailPage() {
	const { id } = Route.useParams();
	const navigate = useNavigate();
	const [client, setClient] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		setLoading(true);
		getClient(Number(id)).then((c) => {
			if (!cancelled) setClient(c);
		}).catch((err) => {
			toast.error(err.message);
			navigate({ to: "/" });
		}).finally(() => {
			if (!cancelled) setLoading(false);
		});
		return () => {
			cancelled = true;
		};
	}, [id, navigate]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		title: "Cliente",
		subtitle: client?.razonSocial,
		children: loading || !client ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid place-items-center rounded-2xl border border-border bg-card py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-6 w-6 animate-spin text-muted-foreground" })
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CredentialsView, { client })
	});
}
//#endregion
export { ClientDetailPage as component };
