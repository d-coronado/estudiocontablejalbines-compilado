import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { f as LoaderCircle } from "../_libs/lucide-react.mjs";
import { t as Route } from "./clientes._id.editar-DS_9tJ2m.mjs";
import { h as getClient, t as AppShell } from "./ErrorModal-CQ1prmA5.mjs";
import { t as ClientForm } from "./ClientForm-BhPxA3i5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/clientes._id.editar-BgvLpW5y.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function EditClientPage() {
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
		title: "Editar cliente",
		subtitle: client?.razonSocial,
		children: loading || !client ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid place-items-center rounded-2xl border border-border bg-card py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-6 w-6 animate-spin text-muted-foreground" })
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientForm, { existing: client })
	});
}
//#endregion
export { EditClientPage as component };
