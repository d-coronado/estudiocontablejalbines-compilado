import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { n as Button, r as Input } from "./auth-CNcD96W4.mjs";
import { t as Label } from "./label-C771U0h-.mjs";
import { g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { C as ArrowLeft, f as LoaderCircle, h as EyeOff, m as Eye, s as Save } from "../_libs/lucide-react.mjs";
import { _ as revealClaveSol, a as DialogFooter, f as ErrorModal, i as DialogDescription, n as Dialog, o as DialogHeader, p as createClient, r as DialogContent, s as DialogTitle, v as updateClient } from "./ErrorModal-CQ1prmA5.mjs";
import { a as CardTitle, i as CardHeader, n as CardContent, r as CardDescription, t as Card } from "./card-le0AsKhv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ClientForm-BhPxA3i5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var empty = {
	ruc: "",
	razonSocial: "",
	nombreComercial: "",
	nombre: "",
	apellidos: "",
	telefono: "",
	correo: "",
	usuarioSol: "",
	claveSol: ""
};
function ClientForm({ existing }) {
	const navigate = useNavigate();
	const [form, setForm] = (0, import_react.useState)(empty);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [errorModal, setErrorModal] = (0, import_react.useState)({
		open: false,
		title: "",
		message: ""
	});
	const [cambioClaveOpen, setCambioClaveOpen] = (0, import_react.useState)(false);
	const [cambioClaveStep, setCambioClaveStep] = (0, import_react.useState)("password");
	const [cambioClavePassword, setCambioClavePassword] = (0, import_react.useState)("");
	const [cambioClaveActual, setCambioClaveActual] = (0, import_react.useState)("");
	const [cambioClaveNueva, setCambioClaveNueva] = (0, import_react.useState)("");
	const [cambioClaveConfirmar, setCambioClaveConfirmar] = (0, import_react.useState)("");
	const [cambioClaveVisible, setCambioClaveVisible] = (0, import_react.useState)(false);
	const [cambioClaveNuevaVisible, setCambioClaveNuevaVisible] = (0, import_react.useState)(false);
	const [cambioClaveLoading, setCambioClaveLoading] = (0, import_react.useState)(false);
	const [cambioClaveError, setCambioClaveError] = (0, import_react.useState)("");
	const [claveCreateVisible, setClaveCreateVisible] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		setForm(existing ? {
			ruc: existing.ruc,
			razonSocial: existing.razonSocial,
			nombreComercial: existing.nombreComercial ?? "",
			nombre: existing.nombre,
			apellidos: existing.apellidos,
			telefono: existing.telefono ?? "",
			correo: existing.correo ?? "",
			usuarioSol: existing.usuarioSol,
			claveSol: ""
		} : empty);
	}, [existing]);
	function set(key, value) {
		setForm((f) => ({
			...f,
			[key]: value
		}));
	}
	function openCambioClave() {
		setCambioClaveStep("password");
		setCambioClavePassword("");
		setCambioClaveActual("");
		setCambioClaveNueva("");
		setCambioClaveConfirmar("");
		setCambioClaveVisible(false);
		setCambioClaveNuevaVisible(false);
		setCambioClaveError("");
		setCambioClaveOpen(true);
	}
	async function handleCambioClaveVerificar() {
		if (!existing || !cambioClavePassword.trim()) return;
		setCambioClaveError("");
		setCambioClaveLoading(true);
		try {
			setCambioClaveActual(await revealClaveSol(existing.id, cambioClavePassword));
			setCambioClaveStep("edit");
		} catch (err) {
			setCambioClaveError(err.message || "Contraseña incorrecta");
		} finally {
			setCambioClaveLoading(false);
		}
	}
	async function handleCambioClaveGuardar() {
		if (!existing || !cambioClaveNueva.trim()) return;
		if (cambioClaveNueva !== cambioClaveConfirmar) {
			setCambioClaveError("Las claves no coinciden");
			return;
		}
		setCambioClaveError("");
		setCambioClaveLoading(true);
		try {
			await updateClient(existing.id, { claveSol: cambioClaveNueva.trim() });
			toast.success("Clave SOL actualizada");
			setCambioClaveOpen(false);
		} catch (err) {
			setCambioClaveError(err.message || "Error al guardar");
		} finally {
			setCambioClaveLoading(false);
		}
	}
	async function onSubmit(e) {
		e.preventDefault();
		if (!form.ruc.trim() || !form.razonSocial.trim() || !form.usuarioSol.trim()) {
			toast.error("Completa los campos obligatorios");
			return;
		}
		if (!existing && !form.claveSol.trim()) {
			toast.error("La Clave SOL es obligatoria");
			return;
		}
		setSaving(true);
		try {
			const payload = {
				ruc: form.ruc.trim(),
				razonSocial: form.razonSocial.trim(),
				nombreComercial: form.nombreComercial?.trim() || null,
				nombre: form.nombre.trim(),
				apellidos: form.apellidos.trim(),
				telefono: form.telefono?.trim() || null,
				correo: form.correo?.trim() || null,
				usuarioSol: form.usuarioSol.trim(),
				claveSol: form.claveSol
			};
			if (existing) {
				const updatePayload = { ...payload };
				delete updatePayload.claveSol;
				await updateClient(existing.id, updatePayload);
			} else await createClient(payload);
			toast.success(existing ? "Cliente actualizado" : "Cliente creado");
			navigate({ to: "/" });
		} catch (err) {
			setErrorModal({
				open: true,
				title: "Error al guardar",
				message: err.message || "Ocurrió un error inesperado"
			});
		} finally {
			setSaving(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "button",
				variant: "ghost",
				size: "sm",
				onClick: () => navigate({ to: "/" }),
				className: "-ml-2 h-8 gap-1.5 text-muted-foreground hover:text-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), "Volver a clientes"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "rounded-2xl border-border shadow-[var(--shadow-card)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					className: "font-display text-xl",
					children: "Datos generales"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Información de identificación del cliente." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "grid gap-4 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "RUC *",
								id: "ruc",
								value: form.ruc,
								onChange: (v) => set("ruc", v.replace(/\D/g, "")),
								inputMode: "numeric",
								maxLength: 11
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "11 dígitos numéricos"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Razón Social *",
							id: "razon",
							value: form.razonSocial,
							onChange: (v) => set("razonSocial", v)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Nombre Comercial",
							id: "nombreComercial",
							value: form.nombreComercial ?? "",
							onChange: (v) => set("nombreComercial", v),
							className: "sm:col-span-2"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Nombre",
							id: "nombre",
							value: form.nombre,
							onChange: (v) => set("nombre", v)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Apellidos",
							id: "apellidos",
							value: form.apellidos,
							onChange: (v) => set("apellidos", v)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Teléfono",
							id: "telefono",
							value: form.telefono ?? "",
							onChange: (v) => set("telefono", v.replace(/\D/g, "")),
							inputMode: "tel"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Correo",
							id: "correo",
							value: form.correo ?? "",
							onChange: (v) => set("correo", v),
							type: "email",
							inputMode: "email"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "rounded-2xl border-border shadow-[var(--shadow-card)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					className: "font-display text-xl",
					children: "Información de acceso"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: existing ? "Para cambiar la Clave SOL usá el botón dedicado." : "El usuario y la clave para acceder a SUNAT." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "grid gap-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Usuario SOL *",
						id: "usuario",
						value: form.usuarioSol,
						onChange: (v) => set("usuarioSol", v),
						autoCapitalize: "characters"
					}), existing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							className: "text-sm font-medium",
							children: "Clave SOL"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: "",
								placeholder: "********",
								disabled: true,
								className: "h-11 pr-32 text-base"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "gold",
								size: "sm",
								className: "absolute right-1 top-1/2 -translate-y-1/2 h-9 text-xs",
								onClick: openCambioClave,
								children: "Cambiar Clave SOL"
							})]
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "clave",
							className: "text-sm font-medium",
							children: "Clave SOL *"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "clave",
								type: claveCreateVisible ? "text" : "password",
								value: form.claveSol,
								onChange: (e) => set("claveSol", e.target.value),
								autoComplete: "new-password",
								className: "h-11 pr-10 text-base"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "ghost",
								size: "icon",
								className: "absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8",
								onClick: () => setClaveCreateVisible((v) => !v),
								"aria-label": claveCreateVisible ? "Ocultar clave" : "Mostrar clave",
								children: claveCreateVisible ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" })
							})]
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sticky bottom-0 -mx-4 flex flex-col gap-2 border-t border-border bg-card/95 px-4 py-3 backdrop-blur sm:mx-0 sm:flex-row sm:justify-end sm:rounded-2xl sm:border sm:px-5 sm:shadow-[var(--shadow-card)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "ghost",
					onClick: () => navigate({ to: "/" }),
					className: "sm:w-auto",
					children: "Cancelar"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "submit",
					variant: "navy",
					size: "lg",
					disabled: saving,
					className: "gap-2 sm:w-auto sm:px-8",
					children: [saving ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "h-4 w-4" }), "Guardar"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: cambioClaveOpen,
				onOpenChange: (o) => {
					if (!o) setCambioClaveOpen(false);
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "sm:max-w-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Cambiar Clave SOL" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: cambioClaveStep === "password" ? "Ingresa tu contraseña para verificar tu identidad." : "La clave actual se muestra debajo. Escribe la nueva clave y guarda." })] }),
						cambioClaveError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive",
							children: cambioClaveError
						}),
						cambioClaveStep === "password" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "cambio-password",
									children: "Contraseña"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "cambio-password",
									type: "password",
									autoFocus: true,
									value: cambioClavePassword,
									onChange: (e) => {
										setCambioClavePassword(e.target.value);
										setCambioClaveError("");
									},
									className: "h-11",
									onKeyDown: (e) => {
										if (e.key === "Enter") handleCambioClaveVerificar();
									}
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "navy",
								className: "w-full",
								disabled: !cambioClavePassword.trim() || cambioClaveLoading,
								onClick: handleCambioClaveVerificar,
								children: cambioClaveLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : "Verificar"
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Clave actual" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											type: cambioClaveVisible ? "text" : "password",
											value: cambioClaveActual,
											disabled: true,
											className: "h-11 pr-10"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											type: "button",
											variant: "ghost",
											size: "icon",
											className: "absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8",
											onClick: () => setCambioClaveVisible((v) => !v),
											"aria-label": cambioClaveVisible ? "Ocultar clave" : "Mostrar clave",
											children: cambioClaveVisible ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" })
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "cambio-nueva",
										children: "Nueva clave"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "cambio-nueva",
											type: cambioClaveNuevaVisible ? "text" : "password",
											autoFocus: true,
											value: cambioClaveNueva,
											onChange: (e) => setCambioClaveNueva(e.target.value),
											className: "h-11 pr-10"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											type: "button",
											variant: "ghost",
											size: "icon",
											className: "absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8",
											onClick: () => setCambioClaveNuevaVisible((v) => !v),
											"aria-label": cambioClaveNuevaVisible ? "Ocultar" : "Mostrar",
											children: cambioClaveNuevaVisible ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" })
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "cambio-confirmar",
										children: "Confirmar clave"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "cambio-confirmar",
											type: cambioClaveNuevaVisible ? "text" : "password",
											value: cambioClaveConfirmar,
											onChange: (e) => setCambioClaveConfirmar(e.target.value),
											className: "h-11 pr-10"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											type: "button",
											variant: "ghost",
											size: "icon",
											className: "absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8",
											onClick: () => setCambioClaveNuevaVisible((v) => !v),
											"aria-label": cambioClaveNuevaVisible ? "Ocultar" : "Mostrar",
											children: cambioClaveNuevaVisible ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" })
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
									className: "flex-col gap-2 sm:flex-col",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "navy",
										className: "w-full",
										disabled: !cambioClaveNueva.trim() || !cambioClaveConfirmar.trim() || cambioClaveLoading,
										onClick: handleCambioClaveGuardar,
										children: cambioClaveLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : "Guardar"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										className: "w-full",
										onClick: () => setCambioClaveOpen(false),
										children: "Cancelar"
									})]
								})
							]
						})
					]
				})
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
function Field({ label, id, value, onChange, type = "text", inputMode, maxLength, autoCapitalize, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `space-y-2 ${className ?? ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			htmlFor: id,
			className: "text-sm font-medium",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			id,
			type,
			inputMode,
			maxLength,
			autoCapitalize,
			value,
			onChange: (e) => onChange(e.target.value),
			className: "h-11 text-base"
		})]
	});
}
//#endregion
export { ClientForm as t };
