import { faMailBulk } from "@fortawesome/free-solid-svg-icons"
import {
    createSession, firebaseAuthenticator,
} from "@hoda5/h5doc"
import { perfilUsuario} from 'src/processos/perfilUsuario';
import { login } from "../processos/login";
import { noauth } from "../processos/noauth";
import { noroute } from "../processos/noroute";
import { welcome } from "../processos/welcome";
import { appGerenciador } from "./app"
import { auth, driver } from "./driver"

export const sessao = createSession({
    app: appGerenciador,
    auth: firebaseAuthenticator({
        auth,
        async getOrgInfo() {
            return { oid: "org" as GUID, name: "org" }
        },
        async getPermissions() {
            return []
        },
    }),
    badges: () => [
        {
            count: 1,
            icon: faMailBulk,
        },
        // {
        //     icon: faIgloo,
        //     count: 7,
        // },
    ],
    driver,
})

sessao.defMenu([
    {
        params: {},
        process: perfilUsuario,
    },
    "-",
    {
        params: {},
        process: perfilUsuario,
    },
])

sessao.initRouter({
    language: "pt-BR",
    languages: ["pt-BR"],
    login: { process: login, params: {} },
    noauth: { process: noauth, params: {} },
    noroute: { process: noroute, params: {} },
    welcome: { process: welcome, params: {} },
    wnd: window,
})
