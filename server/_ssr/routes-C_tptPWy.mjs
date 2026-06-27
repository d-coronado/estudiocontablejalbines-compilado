import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { c as buttonVariants, l as cn, n as Button, r as Input } from "./auth-CNcD96W4.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { _ as EllipsisVertical, b as ChevronRight, c as Plus, f as LoaderCircle, g as Ellipsis, i as Trash2, l as Pencil, m as Eye, n as Users, o as Search, t as X, x as ChevronLeft } from "../_libs/lucide-react.mjs";
import { a as DialogFooter, c as DropdownMenu, d as DropdownMenuTrigger, f as ErrorModal, g as listClientsPaged, l as DropdownMenuContent, m as deleteClient, n as Dialog, o as DialogHeader, r as DialogContent, s as DialogTitle, t as AppShell, u as DropdownMenuItem } from "./ErrorModal-CQ1prmA5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C_tptPWy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Pagination = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
	role: "navigation",
	"aria-label": "pagination",
	className: cn("mx-auto flex w-full justify-center", className),
	...props
});
Pagination.displayName = "Pagination";
var PaginationContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
	ref,
	className: cn("flex flex-row items-center gap-1", className),
	...props
}));
PaginationContent.displayName = "PaginationContent";
var PaginationItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
	ref,
	className: cn("", className),
	...props
}));
PaginationItem.displayName = "PaginationItem";
var PaginationLink = ({ className, isActive, size = "icon", ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
	"aria-current": isActive ? "page" : void 0,
	className: cn(buttonVariants({
		variant: isActive ? "outline" : "ghost",
		size
	}), className),
	...props
});
PaginationLink.displayName = "PaginationLink";
var PaginationPrevious = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PaginationLink, {
	"aria-label": "Go to previous page",
	size: "default",
	className: cn("gap-1 pl-2.5", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Previous" })]
});
PaginationPrevious.displayName = "PaginationPrevious";
var PaginationNext = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PaginationLink, {
	"aria-label": "Go to next page",
	size: "default",
	className: cn("gap-1 pr-2.5", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Next" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })]
});
PaginationNext.displayName = "PaginationNext";
var PaginationEllipsis = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
	"aria-hidden": true,
	className: cn("flex h-9 w-9 items-center justify-center", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "sr-only",
		children: "More pages"
	})]
});
PaginationEllipsis.displayName = "PaginationEllipsis";
var Table = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: "relative w-full overflow-auto",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", {
		ref,
		className: cn("w-full caption-bottom text-sm", className),
		...props
	})
}));
Table.displayName = "Table";
var TableHeader = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
	ref,
	className: cn("[&_tr]:border-b", className),
	...props
}));
TableHeader.displayName = "TableHeader";
var TableBody = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
	ref,
	className: cn("[&_tr:last-child]:border-0", className),
	...props
}));
TableBody.displayName = "TableBody";
var TableFooter = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tfoot", {
	ref,
	className: cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
	...props
}));
TableFooter.displayName = "TableFooter";
var TableRow = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
	ref,
	className: cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
	...props
}));
TableRow.displayName = "TableRow";
var TableHead = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
	ref,
	className: cn("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
	...props
}));
TableHead.displayName = "TableHead";
var TableCell = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
	ref,
	className: cn("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
	...props
}));
TableCell.displayName = "TableCell";
var TableCaption = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
	ref,
	className: cn("mt-4 text-sm text-muted-foreground", className),
	...props
}));
TableCaption.displayName = "TableCaption";
var PAGE_SIZE = 10;
function ClientsList() {
	const navigate = useNavigate();
	const [page, setPage] = (0, import_react.useState)(1);
	const [searchInput, setSearchInput] = (0, import_react.useState)("");
	const [activeSearch, setActiveSearch] = (0, import_react.useState)("");
	const [data, setData] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [confirmDelete, setConfirmDelete] = (0, import_react.useState)(null);
	const [errorModal, setErrorModal] = (0, import_react.useState)({
		open: false,
		title: "",
		message: ""
	});
	async function fetchPage(p, search) {
		setLoading(true);
		try {
			const res = await listClientsPaged({
				page: p,
				pageSize: PAGE_SIZE,
				search
			});
			setData(res);
			if (res.page !== p) setPage(res.page);
		} catch (err) {
			setErrorModal({
				open: true,
				title: "Error al cargar",
				message: err.message || "No se pudieron cargar los clientes"
			});
		} finally {
			setLoading(false);
		}
	}
	(0, import_react.useEffect)(() => {
		fetchPage(page, activeSearch);
	}, [page, activeSearch]);
	function runSearch() {
		const next = searchInput.trim();
		if (next === activeSearch && page === 1) {
			fetchPage(1, next);
			return;
		}
		setPage(1);
		setActiveSearch(next);
	}
	function clearSearch() {
		setSearchInput("");
		setActiveSearch("");
		setPage(1);
	}
	async function handleDelete() {
		if (!confirmDelete) return;
		try {
			await deleteClient(confirmDelete.id);
			setConfirmDelete(null);
			toast.success("Cliente eliminado");
			fetchPage(page, activeSearch);
		} catch (err) {
			setErrorModal({
				open: true,
				title: "Error al eliminar",
				message: err.message || "No se pudo eliminar el cliente"
			});
		}
	}
	const items = data?.items ?? [];
	const total = data?.total ?? 0;
	const totalPages = data?.totalPages ?? 1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-card)] sm:p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, {
					value: searchInput,
					onChange: setSearchInput,
					onSubmit: runSearch,
					onClear: clearSearch,
					activeSearch
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex items-center justify-between text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-3.5 w-3.5" }), loading ? "Cargando…" : total === 0 ? "Sin resultados" : `${total} cliente${total === 1 ? "" : "s"}${activeSearch ? ` para "${activeSearch}"` : ""}`]
					}), !loading && totalPages > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "hidden sm:inline",
						children: [
							"Página ",
							data?.page ?? 1,
							" de ",
							totalPages
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", { children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid place-items-center rounded-2xl border border-border bg-card py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-6 w-6 animate-spin text-muted-foreground" })
			}) : items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				query: activeSearch,
				onNew: () => navigate({ to: "/clientes/nuevo" })
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] md:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
					className: "bg-muted/40 hover:bg-muted/40",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
							className: "h-11 pl-5 text-[11px] uppercase tracking-wider",
							children: "Cliente"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
							className: "h-11 text-[11px] uppercase tracking-wider",
							children: "RUC"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
							className: "h-11 text-[11px] uppercase tracking-wider",
							children: "Contacto"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
							className: "h-11 text-[11px] uppercase tracking-wider",
							children: "Usuario SOL"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
							className: "h-11 pr-5 text-right text-[11px] uppercase tracking-wider",
							children: "Acciones"
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: items.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
					className: "border-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "py-3 pl-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-navy to-navy/80 font-display text-sm font-semibold text-navy-foreground",
									children: c.razonSocial.trim().charAt(0).toUpperCase() || "C"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-sm font-semibold text-foreground",
										children: c.razonSocial
									}), c.nombreComercial && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-xs text-muted-foreground",
										children: c.nombreComercial
									})]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "font-mono text-xs text-foreground/80",
							children: c.ruc
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
							className: "text-sm text-foreground/80",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate",
								children: [c.nombre, c.apellidos].filter(Boolean).join(" ")
							}), c.telefono && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: c.telefono
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "font-mono text-xs text-foreground/80",
							children: c.usuarioSol
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "pr-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-end gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "navy",
									size: "sm",
									className: "h-8 gap-1.5 px-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/clientes/$id",
										params: { id: String(c.id) },
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-3.5 w-3.5" }), "Ver"]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowMenu, {
									onEdit: () => navigate({
										to: "/clientes/$id/editar",
										params: { id: String(c.id) }
									}),
									onDelete: () => setConfirmDelete(c)
								})]
							})
						})
					]
				}, c.id)) })] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-3 md:hidden",
				children: items.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "flex flex-col gap-3 rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-card)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
							className: "flex items-start gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-navy to-navy/80 font-display text-base font-semibold text-navy-foreground shadow-sm",
									children: c.razonSocial.trim().charAt(0).toUpperCase() || "C"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-[15px] font-semibold leading-tight text-foreground",
										children: c.razonSocial
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-0.5 font-mono text-xs text-muted-foreground",
										children: ["RUC ", c.ruc]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowMenu, {
									onEdit: () => navigate({
										to: "/clientes/$id/editar",
										params: { id: String(c.id) }
									}),
									onDelete: () => setConfirmDelete(c)
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "truncate",
								children: [[c.nombre, c.apellidos].filter(Boolean).join(" "), c.telefono ? ` · ${c.telefono}` : ""]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "truncate",
								children: ["Usuario SOL ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-foreground/80",
									children: c.usuarioSol
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "navy",
							size: "sm",
							className: "mt-1 h-9 w-full gap-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/clientes/$id",
								params: { id: String(c.id) },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" }), "Ver detalles"]
							})
						})
					]
				}) }, c.id))
			})] }) }),
			!loading && totalPages > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PagerNav, {
				page: data?.page ?? 1,
				totalPages,
				onChange: setPage
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: !!confirmDelete,
				onOpenChange: (o) => !o && setConfirmDelete(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "sm:max-w-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Eliminar cliente" }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted-foreground",
							children: [
								"¿Seguro que deseas eliminar",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-foreground",
									children: confirmDelete?.razonSocial
								}),
								"? Esta acción no se puede deshacer."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
							className: "flex-col gap-2 sm:flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "destructive",
								size: "lg",
								className: "w-full",
								onClick: handleDelete,
								children: "Eliminar"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								className: "w-full",
								onClick: () => setConfirmDelete(null),
								children: "Cancelar"
							})]
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
function RowMenu({ onEdit, onDelete }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "ghost",
			size: "icon",
			className: "h-8 w-8 shrink-0",
			"aria-label": "Acciones",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EllipsisVertical, { className: "h-4 w-4" })
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
		align: "end",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
			onClick: onEdit,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "mr-2 h-4 w-4" }), "Editar"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
			onClick: onDelete,
			className: "text-destructive focus:text-destructive",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "mr-2 h-4 w-4" }), "Eliminar"]
		})]
	})] });
}
function SearchBar({ value, onChange, onSubmit, onClear, activeSearch }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: (e) => {
			e.preventDefault();
			onSubmit();
		},
		className: "flex flex-col gap-2 sm:flex-row sm:items-center",
		role: "search",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value,
					onChange: (e) => onChange(e.target.value),
					placeholder: "Buscar por RUC, razón social o contacto",
					className: "h-11 rounded-lg border-border bg-background pl-10 pr-10 text-sm",
					inputMode: "search",
					enterKeyHint: "search",
					autoComplete: "off",
					"aria-label": "Buscar clientes"
				}),
				value && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onChange(value.slice(0, -1)),
					className: "absolute right-2 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-md text-muted-foreground hover:bg-muted",
					"aria-label": "Limpiar búsqueda",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "submit",
				variant: "navy",
				className: "h-11 gap-2 px-5 flex-1 sm:max-w-32",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4" }), "Buscar"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				variant: "outline",
				className: "h-11 gap-2 px-5 flex-1 sm:max-w-32",
				onClick: onClear,
				children: "Limpiar"
			})]
		})]
	});
}
function PagerNav({ page, totalPages, onChange }) {
	const desktopPages = (0, import_react.useMemo)(() => buildPageList(page, totalPages), [page, totalPages]);
	const mobilePages = (0, import_react.useMemo)(() => buildCompactPageList(page, totalPages), [page, totalPages]);
	const canPrev = page > 1;
	const canNext = page < totalPages;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-2 flex flex-col items-center gap-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden sm:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pagination, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PaginationContent, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaginationItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaginationPrevious, {
						href: "#",
						onClick: (e) => {
							e.preventDefault();
							if (canPrev) onChange(page - 1);
						},
						"aria-disabled": !canPrev,
						className: !canPrev ? "pointer-events-none opacity-50" : ""
					}) }),
					desktopPages.map((p, i) => p === "…" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaginationItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaginationEllipsis, {}) }, `e-${i}`) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaginationItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaginationLink, {
						href: "#",
						isActive: p === page,
						onClick: (e) => {
							e.preventDefault();
							onChange(p);
						},
						children: p
					}) }, p)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaginationItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaginationNext, {
						href: "#",
						onClick: (e) => {
							e.preventDefault();
							if (canNext) onChange(page + 1);
						},
						"aria-disabled": !canNext,
						className: !canNext ? "pointer-events-none opacity-50" : ""
					}) })
				] }) })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1 sm:hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "icon",
						className: "h-10 w-10",
						disabled: !canPrev,
						onClick: (e) => {
							e.preventDefault();
							if (canPrev) onChange(page - 1);
						},
						"aria-label": "Página anterior",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-5 w-5" })
					}),
					mobilePages.map((p, i) => p === "…" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-10 w-10 place-items-center text-sm text-muted-foreground",
						children: "…"
					}, `m-e-${i}`) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: p === page ? "navy" : "ghost",
						size: "icon",
						className: "h-10 w-10 text-sm",
						onClick: (e) => {
							e.preventDefault();
							if (p !== page) onChange(p);
						},
						"aria-label": `Página ${p}`,
						"aria-current": p === page ? "page" : void 0,
						children: p
					}, p)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "icon",
						className: "h-10 w-10",
						disabled: !canNext,
						onClick: (e) => {
							e.preventDefault();
							if (canNext) onChange(page + 1);
						},
						"aria-label": "Página siguiente",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted-foreground",
				children: [
					"Página ",
					page,
					" de ",
					totalPages
				]
			})
		]
	});
}
function buildCompactPageList(current, total) {
	if (total <= 3) return Array.from({ length: total }, (_, i) => i + 1);
	if (current === 1) return [
		1,
		"…",
		total
	];
	if (current === total) return [
		1,
		"…",
		total
	];
	return [
		1,
		"…",
		current,
		"…",
		total
	];
}
function buildPageList(current, total) {
	if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
	const pages = [1];
	const start = Math.max(2, current - 1);
	const end = Math.min(total - 1, current + 1);
	if (start > 2) pages.push("…");
	for (let i = start; i <= end; i++) pages.push(i);
	if (end < total - 1) pages.push("…");
	pages.push(total);
	return pages;
}
function EmptyState({ query, onNew }) {
	if (query) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid place-items-center rounded-2xl border border-dashed border-border bg-card/50 py-16 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-lg text-foreground",
			children: "Sin resultados"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-1 text-sm text-muted-foreground",
			children: [
				"No se encontraron clientes para \"",
				query,
				"\"."
			]
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid place-items-center rounded-2xl border border-dashed border-border bg-card/50 py-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid h-12 w-12 place-items-center rounded-full bg-gold/15 text-gold",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-6 w-6" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 font-display text-lg text-foreground",
				children: "Tu lista está vacía"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 max-w-xs text-sm text-muted-foreground",
				children: "Agrega tu primer cliente."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "navy",
				size: "lg",
				className: "mt-4",
				onClick: onNew,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), "Nuevo cliente"]
			})
		]
	});
}
function HomePage() {
	const navigate = useNavigate();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		title: "Clientes",
		subtitle: "Gestiona la información de tus clientes.",
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			variant: "navy",
			onClick: () => navigate({ to: "/clientes/nuevo" }),
			className: "h-10 gap-2 px-3 sm:px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden sm:inline",
					children: "Nuevo cliente"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sm:hidden",
					children: "Nuevo"
				})
			]
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientsList, {})
	});
}
//#endregion
export { HomePage as component };
